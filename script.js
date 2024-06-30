const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

function convertToRoman() {
  const num = parseInt(number.value, 10);
  if (Number.isNaN(num)) {
    output.innerHTML = 'Please enter a valid number';
    return;
  }
  
  if (num < 1) {
    output.innerHTML = 'Please enter a number greater than or equal to 1';
    return;
  }

  if (num > 3999) {
    output.innerHTML = 'Please enter a number less than or equal to 3999';
    return;
  }

  const romanSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanNumeral = '';
  let remainingNum = num;

  for (let i = 0; i < romanValues.length; i++) {
    while (remainingNum >= romanValues[i]) {
      romanNumeral += romanSymbols[i];
      remainingNum -= romanValues[i];
    }
  }

  number.value = '';
  output.innerHTML = romanNumeral;
}

convertBtn.addEventListener('click', convertToRoman);
