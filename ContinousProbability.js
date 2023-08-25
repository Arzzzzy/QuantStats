document.getElementById('randomVariableForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var meanInput = document.getElementById('mean');
    var stdDevInput = document.getElementById('stdDev');
    var valueInput = document.getElementById('value');
  
    var mean = parseFloat(meanInput.value);
    var stdDev = parseFloat(stdDevInput.value);
    var value = parseFloat(valueInput.value);
  
    // Calculate probability
    var zScore = (value - mean) / stdDev;
    var probability = calculateStandardNormalCDF(zScore);
  
    // Display result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Probability: ' + probability.toFixed(4);
  });
  
  function calculateStandardNormalCDF(z) {
    // Constants for the standard normal distribution
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;
  
    var sign = (z < 0) ? -1 : 1;
    z = Math.abs(z) / Math.sqrt(2);
  
    var t = 1.0 / (1.0 + p * z);
    var y = (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t;
  
    var erfResult = 1 - y * Math.exp(-z * z);
    return 0.5 * (1 + sign * erfResult);
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