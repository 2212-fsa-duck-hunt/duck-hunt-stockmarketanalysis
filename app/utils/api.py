from flask import Flask, jsonify
from flask_cors import CORS
from stock_predict import predict_stock_prices

app = Flask(__name__)
CORS(app, resources={r'*': {'origins': '*'}})

@app.route('/predict', methods=['POST'])
def get_predictions():

    dataset = ...
    predictions = predict_stock_prices(dataset)
    return jsonify(predictions.tolist())

if __name__ == '__main__':
    app.run(debug=True)


