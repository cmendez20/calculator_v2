const outputScreen = document.querySelector('.output__screen').textContent;
const calculator = document.querySelector('.calculator');
let displayValue = 0;
let numOne = 0;
let numTwo = 0;

console.log(outputScreen);

calculator.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    console.log(e.target.textContent);
  }
});
