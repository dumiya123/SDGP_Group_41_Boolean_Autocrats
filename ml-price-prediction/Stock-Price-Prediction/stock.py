import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import yfinance as yf
import datetime as dt

from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import Dense, Dropout, LSTM
import boto3

# Set the AWS region and credentials
region_name = "us-east-1"
aws_access_key_id = ""
aws_secret_access_key = ""

# Create an S3 client
s3 = boto3.client(
    "s3",
    region_name=region_name,
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
)

def delete_predicted_png(bucket_name):
    # Initialize Boto3 S3 client
    s3 = boto3.client("s3")

    try:
        # Check if the file exists in the bucket
        response = s3.head_object(Bucket=bucket_name, Key="predicted.png")
    except Exception as e:
        # If the file doesn't exist, return
        print("File 'predicted.png' does not exist in the bucket.")
        return

    # If the file exists, delete it
    try:
        s3.delete_object(Bucket=bucket_name, Key="predicted.png")
        print("File 'predicted.png' deleted successfully.")
    except Exception as e:
        print(f"Error deleting file 'predicted.png': {e}")

def upload_image_to_s3(image_file, bucket_name, key):
    try:
        # Upload image to S3 bucket
        response = s3.upload_file(
            image_file,
            bucket_name,
            key,
            ExtraArgs={"ContentType": "image/jpeg", "ACL": "public-read"},
        )
        print("Upload successful")
        # Construct and return the image URL
        image_url = f"https://{bucket_name}.s3.{region_name}.amazonaws.com/{key}"
        return image_url
    except Exception as e:
        print("Error uploading image:", e)
        raise e

def predict_stock_price(company):

    # Load data
    start = dt.datetime(2012, 1, 1)
    end = dt.datetime(2024, 3, 1)

    data = yf.download(company, start, end)

    # Prepare data
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(data['Close'].values.reshape(-1, 1))

    prediction_days = 60

    x_train = []
    y_train = []

    for x in range(prediction_days, len(scaled_data)):
        x_train.append(scaled_data[x - prediction_days:x, 0])
        y_train.append(scaled_data[x, 0])

    x_train, y_train = np.array(x_train), np.array(y_train)
    x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))

    # Build the model
    model = Sequential()

    model.add(LSTM(units=50, return_sequences=True, input_shape=(x_train.shape[1], 1)))
    model.add(Dropout(0.2))
    model.add(LSTM(units=50, return_sequences=True))
    model.add(Dropout(0.2))
    model.add(LSTM(units=50))
    model.add(Dropout(0.2))
    model.add(Dense(units=1)) 

    model.compile(optimizer='adam', loss='mean_squared_error')
    model.fit(x_train, y_train, epochs=25, batch_size=32)

    test_start = dt.datetime(2020, 1, 1)
    test_end = dt.datetime.now()

    test_data = yf.download(company, test_start, test_end)
    actual_prices = test_data['Close'].values

    total_dataset = pd.concat((data['Close'], test_data['Close']))

    model_inputs = total_dataset[len(total_dataset) - len(test_data) - prediction_days:].values
    model_inputs = model_inputs.reshape(-1, 1)
    model_inputs = scaler.transform(model_inputs)

    x_test = []

    for x in range(prediction_days, len(model_inputs)):
        x_test.append(model_inputs[x - prediction_days:x, 0])

    x_test = np.array(x_test)
    x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))

    predicted_prices = model.predict(x_test)

    predicted_prices = scaler.inverse_transform(predicted_prices)
    plt.plot(actual_prices, color='black', label=f"Actual {company} Price")
    plt.plot(predicted_prices, color='red', label=f"Predicted {company} Price")
    plt.title(f"{company} Share Price")
    plt.xlabel('Date')
    plt.ylabel(f"{company} Share Price")
    plt.legend()
    result_image_path = f"predicted_{company}.png"  # Change to predicted.png
    plt.savefig(result_image_path)

    bucket_name = "sdgp-budget-app-bucket"

    delete_predicted_png(bucket_name)
    # Upload the image to S3
    image_url = upload_image_to_s3(result_image_path, bucket_name, result_image_path)

    # Remove the local image file after uploading to S3
    import os
    os.remove(result_image_path)

    real_data = [model_inputs[len(model_inputs) + 1 - prediction_days:len(model_inputs+1), 0]]
    real_data = np.array(real_data)
    real_data = np.reshape(real_data, (real_data.shape[0], real_data.shape[1], 1))
    prediction = model.predict(real_data)
    prediction = scaler.inverse_transform(prediction)
    
    return prediction, image_url

predict_stock_price("NFLX")

