const numbers = document.querySelector('.numbers');
const display = document.querySelector('#display');

let displayValue = 0;

const numberButtons = function() {
    if (numbers.textContent == "1") {
        console.log(numbers)
    }
}

document.addEventListener("click", function(e) {
    if (e.target.localName != "button") {
        return;
    } else
    switch (e.target.className) {
        case "1":
            display.value += "1";
            break;
        case "2":
            display.value += "2";
            console.log(e);
            break;
        case "3":
            display.value += "3";
            console.log(e);
            break;
        case "4":
            display.value += "4";
            console.log(e);
            break;
        case "5":
            display.value += "5";
            console.log(e);
            break;
        case "6":
            display.value += "6";
            console.log(e);
            break;
        case "7":
            display.value += "7";
            console.log(e);
            break;
        case "8":
            display.value += "8";
            console.log(e);
            break;
        case "9":
            display.value += "9";
            console.log(e);
            break;
        case "0":
            display.value += "0";
            console.log(e);
            break;
        case "clear":
            console.log(e);
            display.value="";
            break;
        case "add":
            displayArray = Array.from(display.value);
            console.log(displayArray[displayArray.length - 1])
            switch (displayArray[displayArray.length - 1]) {
                case "+":
                    break;
                case "-":
                    break;
                case "/":
                    break;
                case "*":
                    break;         
                default:
                    displayValue = display.value;
                    display.value = ""
            }
            break;
        case "subtract":
            displayArray = Array.from(display.value);
            console.log(displayArray[displayArray.length - 1])
            switch (displayArray[displayArray.length - 1]) {
                case "+":
                    break;
                case "-":
                    break;
                case "/":
                    break;
                case "*":
                    break;         
                default:
                display.value += "-";  
            }
            break;
        case "multiply":
            displayArray = Array.from(display.value);
            console.log(displayArray[displayArray.length - 1])
            switch (displayArray[displayArray.length - 1]) {
                case "+":
                    break;
                case "-":
                    break;
                case "/":
                    break;
                case "*":
                    break;         
                default:
                display.value += "*";  
            }
            break;
        case "divide":
            displayArray = Array.from(display.value);
            console.log(displayArray[displayArray.length - 1])
            switch (displayArray[displayArray.length - 1]) {
                case "+":
                    break;
                case "-":
                    break;
                case "/":
                    break;
                case "*":
                    break;         
                default:
                display.value += "/";  
            }
            break;
        case "equals":
            console.log(e)
            break;
        default:
            break;
    }
})