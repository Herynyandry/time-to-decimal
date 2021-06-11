const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const final = document.querySelector('.output');

// run the calculation on minute and hour keyup
[hours, minutes].forEach(input => input.addEventListener('keyup', () => {
  const hval = parseFloat(hours.value) || 0;
  const mval = parseFloat(minutes.value) || 0;
  const result = (hval + mval / 60).toFixed(2);
  final.value = result;
}));