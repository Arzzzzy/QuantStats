document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var stdDevInput = document.getElementById('stdDev');
    var sampleSizeInput = document.getElementById('sampleSize');
  
    var stdDev = parseFloat(stdDevInput.value);
    var sampleSize = parseFloat(sampleSizeInput.value);
  
    // Calculate standard error
    var standardError = stdDev / Math.sqrt(sampleSize);
  
    // Display result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Standard Error: ' + standardError.toFixed(4);
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