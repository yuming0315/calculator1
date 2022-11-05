var result = document.getElementById("result");

var buttons = new Array(...document.getElementsByTagName("button"));
let number = 0;
let v = null;

const calculator = (number,value , v) => {
  switch(v){
    case "+":
      return number + value;
    case "-":
      return number - value;
    case "/":
      return number / value;
    case "*":
      return number * value;
    case "%":
      return number % value;
  }
}


buttons.map((button) =>
  button.addEventListener("click", (e) => {
    var value = e.target.innerText;

    switch (value) {
      case "AC":
        result.value = "";
        number = 0;
        v = null;
        break;
      case "+": case "-": case "/": case "*": case "%":
        if(v){
        number = calculator(number,parseFloat(result.value),v);
        }
        else{
        number += parseFloat(result.value);
        }
        result.value = "";
        v = value;
        break;
      case ".":
        number*=1.0;
        result.value += value;
        break;
      case "=":
        if(number){
        number = calculator(number,parseFloat(result.value),v);
        result.value = number.toString(10);
        number = 0;
        }
        v = null;
        break;
      default:
        result.value += value;
        break;
    }
  })
);
