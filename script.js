const displayValue = document.querySelector('#calculator__screen');
const calculator = document.querySelector('#calculator');
let numOne;
let numTwo;
let operations = false;
let operator;

const addNums = (numOne, numTwo) => numOne + numTwo;
const subtractNums = (numOne, numTwo) => numOne - numTwo;
const multiplyNums = (numOne, numTwo) => numOne * numTwo;
const divideNums = (numOne, numTwo) => numOne / numTwo;

const operate = (operator, numOne, numTwo) => {
  switch (operator) {
    case '+':
      return addNums(numOne, numTwo);
      break;
    case '−':
      return subtractNums(numOne, numTwo);
      break;
    case '×':
      return multiplyNums(numOne, numTwo);
      break;
    case '÷':
      return divideNums(numOne, numTwo);
  }
};

const updateDisplay = () => {
  displayValue.textContent = operate(operator, numOne, numTwo);
};

calculator.addEventListener('click', e => {
  if (Number(e.target.textContent) >= 0) {
    displayValue.textContent == 0
      ? (displayValue.textContent = e.target.textContent)
      : (displayValue.textContent += e.target.textContent);

    if (operations) {
      displayValue.textContent = e.target.textContent;
      operations = false;
    }
  }

  if (
    e.target.classList.contains('operator__btn') &&
    e.target.textContent !== '='
  ) {
    operations = true;
    operator = e.target.textContent;
    !numOne
      ? (numOne = Number(displayValue.textContent))
      : (numTwo = Number(displayValue.textContent));

    console.log({ operator }, { numOne }, { numTwo });
  }

  if (e.target.textContent === 'Clear') {
    displayValue.textContent = 0;
    numOne = null;
    numTwo = null;
  }

  if (e.target.textContent === '=') {
    numTwo = Number(displayValue.textContent);
    console.log({ operator }, { numOne }, { numTwo });
    updateDisplay();
  }
});
