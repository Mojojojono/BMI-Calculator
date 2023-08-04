function calculateBMI() {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const resultDiv = document.getElementById("result");

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.textContent = "Please enter valid weight and height.";
    return;
  }

  const bmi = weight / (height * height);
  const roundedBMI = bmi.toFixed(2);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultDiv.textContent = `Your BMI is ${roundedBMI} (${category}).`;
}
