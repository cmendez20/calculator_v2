const inputScreen = document.querySelector('.input__num');
const outputScreen = document.querySelector('.output__screen');
const calculator = document.querySelector('.calculator');
let displayValue = 0;
let numOne = 0;
let numTwo = 0;
let operations = false;
let operationsCount = 0;
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
  outputScreen.textContent = `${numOne} ${operator} ${numTwo} =`;
  inputScreen.textContent = operate(operator, numOne, numTwo);
};

calculator.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON' && Number(e.target.textContent) >= 0) {
    inputScreen.textContent == 0
      ? (inputScreen.textContent = e.target.textContent)
      : (inputScreen.textContent += e.target.textContent);

    if (operations) {
      inputScreen.textContent = e.target.textContent;
      operations = false;
    }
  }

  if (
    e.target.classList.contains('operator__btn') &&
    e.target.textContent !== '='
  ) {
    operations = true;
    operator = e.target.textContent;
    numOne = Number(inputScreen.textContent);
    outputScreen.style.opacity = 1;
    outputScreen.textContent = `${numOne} ${e.target.textContent}`;
    console.log({ numOne });
  }

  if (e.target.textContent === 'Clear') {
    inputScreen.textContent = 0;
    outputScreen.textContent = 0;
    outputScreen.style.opacity = 0;
    numOne = 0;
    numTwo = 0;
  }

  if (e.target.textContent == '=') {
    numTwo = Number(inputScreen.textContent);
    // console.log({ numOne }, { numTwo });
    updateDisplay();
  }
});
