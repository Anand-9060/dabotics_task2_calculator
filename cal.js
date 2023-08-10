let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('input').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('input').value = '';
}

function calculate() {
    try {
        let result = eval(currentInput);
        document.getElementById('input').value = result;
        currentInput = '';
    } catch (error) {
        document.getElementById('input').value = 'Error';
        currentInput = '';
    }
}
