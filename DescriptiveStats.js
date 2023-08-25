function calculate() {
    var numbersInput = document.getElementById('numbersInput').value;
    var numbersArray = numbersInput.split(',').map(Number);

    // Variables (Calculate statistics)
    var mean = calculateMean(numbersArray);
    var median = calculateMedian(numbersArray);
    var mode = calculateMode(numbersArray);
    var range = calculateRange(numbersArray);
    var standardDeviation = calculateStandardDeviation(numbersArray);
    var coefficientOfVariation = calculateCoefficientOfVariation(numbersArray);
    var quartiles = calculateQuartiles(numbersArray);
    var interquartileRange = calculateInterquartileRange(numbersArray);

    var resultContainer = document.getElementById('result-mean-median-mode');
    resultContainer.innerHTML = 'Mean: ' + mean + '<br>' +
                                 'Median: ' + median + '<br>' +
                                 'Mode: ' + mode + '<br>' +
                                 'Range: ' + range + '<br>' +
                                 'Standard Deviation: ' + standardDeviation + '<br>' +
                                 'Coefficient Of Variation: ' + coefficientOfVariation + '<br>' +
                                 'Quartiles: ' + quartiles + '<br>' +
                                 'Interquartile Range: ' + interquartileRange;

  }

  function calculateMean(numbers) {
    var sum = numbers.reduce(function(a, b) {
        return a + b;
    }, 0);
    return sum / numbers.length;
}

function calculateMedian(numbers) {
    var sortedNumbers = numbers.slice().sort(function(a, b) {
        return a - b;
    });
    var middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
      return sortedNumbers[middleIndex];
    }
}

function calculateMode(numbers) {
    var numberCounts = {};
    var maxCount = 0;
    var modes = [];

    for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i];

      if (numberCounts[number] === undefined) {
        numberCounts[number] = 0;
      }

      numberCounts[number]++;

      if (numberCounts
        [number] > maxCount) {
        maxCount = numberCounts[number];
        modes = [number];
        } else if (numberCounts[number] === maxCount) {
        modes.push(number);
        }
    }
    if (modes.length === numbers.length) {
        modes = [];
    }
        
          return modes.join(', ');
        }


function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// nanayunan

function calculateRange(numbers) {
  var highest = Math.max.apply(null, numbers);
  var lowest = Math.min.apply(null, numbers);
  return highest - lowest;
}

function calculateStandardDeviation(numbers) {
  var mean = calculateMean(numbers);
  var deviations = numbers.map(function (num) {
    return Math.pow(num - mean, 2);
  });
  
  var variance = calculateMean(deviations);
  var standardDeviation = Math.sqrt(variance);
  return standardDeviation.toFixed(2);
  }
  
  function calculateCoefficientOfVariation(numbers) {
  var mean = calculateMean(numbers);
  var standardDeviation = calculateStandardDeviation(numbers);
  var coefficientOfVariation = (standardDeviation / mean) * 100;
  return coefficientOfVariation.toFixed(2) + "%";
  }
  
  function calculateQuartiles(numbers) {
  var sortedNumbers = numbers.slice().sort(function (a, b) {
  return a - b;
  });
  
  var quartiles = [
  calculatePercentile(sortedNumbers, 0.25),
  calculatePercentile(sortedNumbers, 0.5),
  calculatePercentile(sortedNumbers, 0.75)
  ];
  
  return quartiles;
  }
  
  function calculatePercentile(sortedNumbers, percentile) {
  var index = (sortedNumbers.length - 1) * percentile;
  var lower = Math.floor(index);
  var upper = Math.ceil(index);
  
  if (lower === upper) {
  return sortedNumbers[lower];
  } else {
  var fraction = index - lower;
  return sortedNumbers[lower] * (1 - fraction) + sortedNumbers[upper] * fraction;
  }
  }
  
  function calculateInterquartileRange(quartiles) {
  var lowerQuartile = quartiles[0];
  var upperQuartile = quartiles[2];
  return upperQuartile - lowerQuartile;
  }
  
  function calculateMean(numbers) {
  var sum = numbers.reduce(function (total, num) {
  return total + num;
  }, 0);
  
  var mean = sum / numbers.length;
  return mean;
  }

  
