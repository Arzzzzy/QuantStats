function performHypothesisTest() {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var sampleMeanInput = document.getElementById('sampleMean');
    var populationMeanInput = document.getElementById('populationMean');
    var sampleStdDevInput = document.getElementById('sampleStdDev');
    var sampleSizeInput = document.getElementById('sampleSize');
    var significanceLevelInput = document.getElementById('significanceLevel');
  
    var sampleMean = parseFloat(sampleMeanInput.value);
    var populationMean = parseFloat(populationMeanInput.value);
    var sampleStdDev = parseFloat(sampleStdDevInput.value);
    var sampleSize = parseFloat(sampleSizeInput.value);
    var significanceLevel = parseFloat(significanceLevelInput.value);
  
    // Perform hypothesis test
    var testStatistic = calculateTestStatistic(sampleMean, populationMean, sampleStdDev, sampleSize);
    var criticalValue = calculateCriticalValue(significanceLevel, sampleSize);
    var result = performComparison(testStatistic, criticalValue);
  
    // Display result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Hypothesis Test Result: ' + result;
  }
  
  function calculateTestStatistic(sampleMean, populationMean, sampleStdDev, sampleSize) {
    // Calculate test statistic (z-score)
    var testStatistic = (sampleMean - populationMean) / (sampleStdDev / Math.sqrt(sampleSize));
    return testStatistic;
  }
  
  function calculateCriticalValue(significanceLevel, sampleSize) {
    // Calculate critical value based on significance level
    var criticalValue;
    if (significanceLevel === 0.01) {
      criticalValue = 2.326;
    } else if (significanceLevel === 0.05) {
      criticalValue = 1.645;
    } else if (significanceLevel === 0.10) {
      criticalValue = 1.282;
    } else {
      alert('Invalid significance level.');
      return;
    }
  
    // Adjust critical value for two-tailed test
    criticalValue = Math.abs(criticalValue);
    return criticalValue;
  }
  
  function performComparison(testStatistic, criticalValue) {
    // Compare test statistic with critical value
    if (testStatistic > criticalValue) {
      return 'Reject the null hypothesis';
    } 
    else {
      return 'Fail to reject null hypothesis';
    }
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