# Import necessary libraries
from flask import Flask, request, jsonify
import joblib 

# Create a Flask app
app = Flask(__name__)


model = joblib.load('./scholarshipRecommendation.pkl')


@app.route('/predict', methods=['GET'])
def predict():
    try:
        input_data = [[1, 1, 1, 1, 1, 1, 2]]

        predictions = model.predict(input_data)

        output = {'predictions': predictions.tolist()}

        return jsonify(output)

    except Exception as e:
        return jsonify({'error': str(e)})

# Run the Flask app
if __name__ == '__main__':
    app.run(port=5000)
