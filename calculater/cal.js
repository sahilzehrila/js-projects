

let input = document.getElementById('input');
let operator = '';

function press(value) {
    input.value += value;
}

function clearip() {
    input.value = '0';
}

function operate() {
    let expression = input.value;
    let result = eval(expression);
    input.value = result;
}

function setOperator(op) {
    operator = op;
    input.value += operator;
}

function equal() {
    operate();
}
