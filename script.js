const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';
let operator = '';
let firstValue = null;
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (!isNaN(value)) {
      currentInput += value;
      updateDisplay(currentInput);
    } else if (value === 'C') {
      resetCalculator();
    } else if (value === '=') {
      if (firstValue !== null && operator && currentInput) {
        const result = calculate(firstValue, operator, parseFloat(currentInput));
        updateDisplay(result);
        resetCalculator(result);
      }
    } else {
      if (currentInput) {
        firstValue = parseFloat(currentInput);
        operator = value;
        currentInput = '';
      }
    }
  });
});
function updateDisplay(value) {
  display.value = value;
}
function resetCalculator(result = '') {
  currentInput = '';
  operator = '';
  firstValue = null;
  updateDisplay(result);
}
function calculate(a, operator, b) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return 0;
  }
}