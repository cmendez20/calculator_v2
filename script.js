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
  if (e.target.dataset.type === 'digit') {
    if (operations) {
      displayValue.textContent = '';
      operations = false;
    }

    if (displayValue.textContent == '0') {
      displayValue.textContent = e.target.dataset.num;
    } else {
      displayValue.textContent += e.target.dataset.num;
    }

    displayValueNum = displayValue.textContent;
  }
};

const updateDisplay = () => {
  let result = operate(operator, Number(numOne), Number(numTwo));

  if (result % 1 != 0) {
    displayValue.textContent = result.toFixed(2);
  } else {
    displayValue.textContent = result;
  }
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
    }

    operator = e.target.textContent;
  }

  if (e.target.textContent === 'Clear') {
    displayValue.textContent = '0';
    numOne = undefined;
    numTwo = undefined;
    operations = false;
    operator = '';
    displayValueNum = '';
  }

  if (e.target.dataset.type === 'delete') {
    if (displayValue.textContent === '0') {
      return;
    } else if (displayValue.textContent.length === 1) {
      displayValue.textContent = '0';
    } else {
      displayValue.textContent = displayValue.textContent.slice(0, -1);
    }

    if (
      displayValue.textContent.charAt(displayValue.textContent.length - 1) ===
      '.'
    ) {
      console.log('test');
      displayValue.textContent = displayValue.textContent.slice(0, -1);
    }

    displayValueNum = displayValue.textContent;

    if (numOne && numTwo) {
      numOne = null;
      numTwo = null;
      operations = false;
    }
  }

  if (e.target.dataset.type === 'equal') {
    if (numOne) {
      numTwo = Number(displayValueNum);
      updateDisplay();
    }
  }

  if (e.target.dataset.type === 'dot') {
    if (!displayValue.textContent.includes('.')) {
      displayValue.textContent += '.';
    }
  }
});
