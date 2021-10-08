const inputScreen = document.querySelector('.input__num');
const outputScreen = document.querySelector('.output__screen');
const inputScreenNum = Number(
  document.querySelector('.input__num').textContent
);
const calculator = document.querySelector('.calculator');
let displayValue = 0;
let numOne = 0;
let numTwo = 0;
let operations = false;
let operationSymbol = '';

const addNums = (numOne, numTwo) => numOne + numTwo;
const subtractNums = (numOne, numTwo) => numOne - numTwo;
const multiplyNums = (numOne, numTwo) => numOne * numTwo;
const divideNums = (numOne, numTwo) => numOne / numTwo;

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
    operationSymbol = e.target.textContent;
    console.log(operationSymbol);
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
    console.log(operationSymbol);
    numTwo = Number(inputScreen.textContent);
    console.log({ numOne }, { numTwo });
    outputScreen.textContent = `${numOne} ${operationSymbol} ${numTwo} =`;
    switch (operationSymbol) {
      case '+':
        inputScreen.textContent = `${addNums(numOne, numTwo)}`;
        break;
      case '−':
        inputScreen.textContent = `${subtractNums(numOne, numTwo)}`;
        break;
      case '×':
        inputScreen.textContent = `${multiplyNums(numOne, numTwo)}`;
        break;
      case '÷':
        inputScreen.textContent = `${divideNums(numOne, numTwo)}`;
    }
  }
});
