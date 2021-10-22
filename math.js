const add = function(a, b) {
	let sum = a + b;
	return sum;
};

const subtract = function(a, b) {
	let sum = a - b;
	return sum;
};

const multiply = function(a, b) {
	let sum = a * b;
	return sum;
};

const divide = function(a, b) {
    let sum = a / b;
    return sum;
}

const operate = function(operator, num1, num2) {
    if (operator == '+') {
        add(num1, num2);
    } else if (operator == '-') {
        subtract(num1, num2);
    } else if (operator == '*') {
        multiply(num1, num2);
    } else if (operator == '/') {
        divide(num1, num2);
    } else return "ERROR";
}