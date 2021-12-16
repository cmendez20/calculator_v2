const displayValue = document.querySelector('.calculator__screen');
const calculator = document.querySelector('.calculator');
let numOne;
let numTwo;
let operations = false;
let operator;
let displayValueNum = null;

const addNums = (numOne, numTwo) => numOne + numTwo;
const subtractNums = (numOne, numTwo) => numOne - numTwo;
const multiplyNums = (numOne, numTwo) => numOne * numTwo;
const divideNums = (numOne, numTwo) => (numOne / numTwo).toFixed(2);

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
      if (displayValueNum === '0') {
        alert(`You can't divide by 0!`);

        return (displayValue.textContent = 0);
      }

      return divideNums(numOne, numTwo);
  }
};

const displayInput = e => {
  if (Number(e.target.textContent) >= 0) {
    if (operations) {
      displayValue.textContent = '';
      operations = false;
    }

    if (displayValue.textContent == 0) {
      displayValue.textContent = e.target.textContent;
    } else {
      displayValue.textContent += e.target.textContent;
    }

    displayValueNum = displayValue.textContent;

    console.log({ operator }, { numOne }, { numTwo }, { displayValueNum });
  }
};

const updateDisplay = () => {
  displayValue.textContent = operate(operator, Number(numOne), Number(numTwo));
  console.log({ operator }, { numOne }, { numTwo }, 'updateDisplay');
};

calculator.addEventListener('click', e => {
  displayInput(e);

  if (
    e.target.classList.contains('operator__btn') &&
    e.target.textContent !== '='
  ) {
    operations = true;

    !numOne
      ? (numOne = Number(displayValueNum))
      : (numTwo = Number(displayValueNum));

    if (!isNaN(numOne) && !isNaN(numTwo)) {
      updateDisplay();
      numOne = Number(displayValue.textContent);
      numTwo = null;
      console.log(
        { operator },
        { numOne },
        { numTwo },
        'return from updatedisplay'
      );
    }

    operator = e.target.textContent;
  }

  if (e.target.textContent === 'Clear') {
    displayValue.textContent = 0;
    numOne = undefined;
    numTwo = undefined;
    operations = false;
    operator = '';
    displayValueNum = '';
  }

  if (e.target.textContent === 'Backspace') {
    console.log(displayValue.textContent);
    console.log(displayValue.textContent.length);
    if (displayValue.textContent === 0) {
      return;
    } else if (displayValue.textContent.length === 1) {
      displayValue.textContent = 0;
    } else {
      displayValue.textContent = displayValue.textContent.slice(0, -1);
    }
    displayValueNum = displayValue.textContent;
    console.log({ operator }, { numOne }, { numTwo }, 'clear');
  }

  if (e.target.textContent === '=') {
    if (numOne) {
      console.log({ operator }, { numOne }, { numTwo });
      numTwo = Number(displayValueNum);
      updateDisplay();
    }
  }
});
