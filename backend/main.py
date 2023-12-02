# Import necessary libraries
from flask import Flask, request, jsonify
import joblib 
from flask_cors import CORS 

# Create a Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


model = joblib.load('./scholarshipRecommendation.pkl')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.get_json()
        print(input_data)

        # Assuming your model and data processing logic are implemented
        predictions = model.predict([[input_data['AGE'], input_data['FATHER_JOB'], input_data['GENDER'], input_data['GRADE'], input_data['KIDS'], input_data['MOTHER_JOB'], input_data['PARTNER'], input_data['SALARY'], input_data['SIBLINGS'], input_data['WORK']]])

        output = {'predictions': predictions.tolist()}

        return jsonify(output)

    except Exception as e:
        return jsonify({'error': str(e)})

# Run the Flask app
if __name__ == '__main__':
    app.run(port=5000)
