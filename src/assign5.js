function fetch() {
  Name = document.getElementById("name").value;
  age = Number(document.getElementById("age").value);
  weight = Number(document.getElementById("weight").value);
  var result = "";
  result = cal(age, weight);
  display(result);
}

function cal(age, weight) {
  if (age >= 5 && age <= 7) {
    if (weight >= 15 && weight <= 20) {
      result = "your are perfect";
    } else if (weight > 20) {
      result = "your weight is greater than recommended value of  20kg";
    } else {
      result = "your weight is less than recommanded value of 15kg";
    }
  }

  if (age >= 8 && age <= 10) {
    if (weight >= 21 && weight <= 25) {
      result = "you are perfect";
    } else if (weight > 25) {
      result = "your weight is greater than recommended value of  25kg";
    } else {
      result = "your weight is less than recommanded value of 15kg";
    }
  }
  if (age >= 11 && age <= 15) {
    if (weight >= 26 && weight <= 30) {
      result = "you are perfect";
    } else if (weight > 30) {
      result = "your weight is greater than recommended value of  30kg";
    } else {
      result = "your weight is less than recommanded value of 15kg";
    }
  }
  if (age >= 16 && age <= 20) {
    if (weight >= 31 && weight <= 40) {
      result = "you are perfect";
    } else if (weight > 40) {
      result = "your weight is greater than recommended value of  40kg";
    } else {
      result = "your weight is less than recommanded value of 15kg";
    }
  }
  return result;
}

function display(result1) {
  document.getElementById("output").innerHTML = result1;
}
