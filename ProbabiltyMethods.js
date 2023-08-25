function calculate() {
  var n = parseInt(document.getElementById('nValue').value);
  var r = parseInt(document.getElementById('rValue').value);

  if (isNaN(n) || isNaN(r)) {
    document.getElementById('resultPermutations').innerText = 'Please enter valid values for N and R.';
    document.getElementById('resultCombinations').innerText = '';
    return;
  }

  var permutations = calculateFactorial(n) / calculateFactorial(n - r);
  var combinations = calculateFactorial(n) / (calculateFactorial(r) * calculateFactorial(n - r));
  
  document.getElementById('resultPermutations').innerText = 'Permutations: ' + permutations;
  document.getElementById('resultCombinations').innerText = 'Combinations: ' + combinations;
}

function calculateFactorial(num) {
  if (num === 0 || num === 1)
    return 1;
  else
    return num * calculateFactorial(num - 1);
}

// FORMULA 
function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}