function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    height = height / 100;
    let bmi = weight / (height * height);
    let category;
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + category;
}
