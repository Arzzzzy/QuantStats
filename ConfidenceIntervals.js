function calculateConfidenceInterval() {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var meanInput = document.getElementById('mean');
    var stdDevInput = document.getElementById('stdDev');
    var sampleSizeInput = document.getElementById('sampleSize');
    var confidenceLevelInput = document.getElementById('confidenceLevel');
  
    var mean = parseFloat(meanInput.value);
    var stdDev = parseFloat(stdDevInput.value);
    var sampleSize = parseFloat(sampleSizeInput.value);
    var confidenceLevel = parseFloat(confidenceLevelInput.value);
  
    // Calculate confidence interval
    var marginOfError = calculateMarginOfError(stdDev, sampleSize, confidenceLevel);
    var lowerBound = mean - marginOfError;
    var upperBound = mean + marginOfError;
  
    // Display result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Confidence Interval: ' + lowerBound.toFixed(2) + ' to ' + upperBound.toFixed(2);
  }
  
  function calculateMarginOfError(stdDev, sampleSize, confidenceLevel) {
    // Calculate critical value based on confidence level
    var zScore;
    if (confidenceLevel === 0.90) {
      zScore = 1.645;
    } else if (confidenceLevel === 0.95) {
      zScore = 1.96;
    } else if (confidenceLevel === 0.99) {
      zScore = 2.576;
    } else {
      alert('Invalid confidence level.');
      return;
    }
  
    // Calculate margin of error
    var marginOfError = zScore * (stdDev / Math.sqrt(sampleSize));
    return marginOfError;
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
