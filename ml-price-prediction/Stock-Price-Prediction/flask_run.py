from flask import Flask, request, jsonify
from stock import predict_stock_price
from flask_cors import CORS
import matplotlib
matplotlib.use('Agg')  

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    symbol = data.get('symbol')
    if symbol is None:
        return jsonify({'error': 'Symbol not provided in request body'}), 400

    try:
        prediction, plot_path = predict_stock_price(symbol)
        return jsonify({
            'prediction': prediction.tolist(),  
            'plot_path': plot_path
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)