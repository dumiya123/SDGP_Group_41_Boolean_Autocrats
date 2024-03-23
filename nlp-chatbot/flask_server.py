from flask import Flask, request, jsonify
from chatbot import predict_class, get_response, intents

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    data = request.get_json(force=True)
    message = data['message']
    ints = predict_class(message)
    res = get_response(ints, intents)
    return jsonify({"response": res})

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=6969)