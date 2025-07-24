let resultField = document.getElementById("input");

function solve (val) {

      const lastChar = resultField.value.slice(-1);
  const operators = ['+', '-', '*', '/', '%'];

  if (operators.includes(val) && operators.includes(lastChar)) {
    resultField.value = resultField.value.slice(0, -1) + val;
  } else {
    resultField.value += val;
  }
// resultField.value += val;

}

function Result() {

resultField.value = eval(resultField.value);
}

function Clear(){

resultField.value = "1";}

function Back() {

resultField.value = resultField.value.slice(0, -1);

}