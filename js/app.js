var display = document.getElementById("display");
let number1 = "";
let number2 = "";
let typeOp = "";

function press(e) {
  number1 += e;
  display.innerHTML = number1;
}
function setOP(typeOperator) {
  typeOp = typeOperator;
  number2 = number1;
  number1 = "";
}

function clr() {
  number1 = "";
  number2 = "";
  typeOp = "";
  display.innerHTML = "0";
}
function calculate() {
  let x = parseFloat(number2);
  let y = parseFloat(number1);
  result = 0;
  switch (typeOp) {
    case "/":
      result = x / y;
      break;
    case "*":
      result = x * y;
      break;
    case "-":
      result = x - y;
      break;
    case "+":
      result = x + y;
      console.log(result);
      break;
  }
  number1 = result;
  typeOp = "";
  display.innerHTML = result;
}
