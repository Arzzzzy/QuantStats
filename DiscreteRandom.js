document.getElementById('randomVariableForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var outcomesInput = document.getElementById('outcomes');
  var probabilitiesInput = document.getElementById('probabilities');
  var valueInput = document.getElementById('value');

  var outcomes = outcomesInput.value.split(',').map(function(item) {
    return item.trim();
  });

  var probabilities = probabilitiesInput.value.split(',').map(function(item) {
    return parseFloat(item.trim());
  });

  var value = parseFloat(valueInput.value);

  // Validate input lengths
  if (outcomes.length !== probabilities.length) {
    alert('Number of outcomes must match number of probabilities.');
    return;
  }

  // Calculate probability
  var probability = 0;
  for (var i = 0; i < outcomes.length; i++) {
    if (outcomes[i] === value.toString()) {
      probability = probabilities[i];
      break;
    }
  }

  // Display result
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Probability: ' + probability.toFixed(2);
});



  // FORMULA 
function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}
  