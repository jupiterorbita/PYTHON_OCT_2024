
function Print1To255() {
  for (var i = 0; i <= 255; i++) {
    console.log(i);
  }
}

function PrintOdds1To255() {
  for (var i = 1; i <= 255; i += 2) {
    console.log(i);
  }
}

function PrintIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    sum = sum + i;
    console.log(i + ' | CURRENT SUM: ' + sum);
  }
}

function PrintArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function PrintMaxOfArray(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max)
}

function PrintAverageOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var average = sum / arr.length;
  console.log(average);
}

function ReturnOddsArray1To255() {
  var newArray = []
  for (i = 1; i <= 255; i += 2) {
    newArray.push(i);
  }
  return newArray;
}


function SquareArrayValues(arr) {
  for (var i = 0; i < arr.length; i++) {
    var numSquared = arr[i] * arr[i];
    arr[i] = numSquared;
  }
  return arr;
}

function ReturnArrayCountGreaterThanY(arr, y) {
  var numCount = 0
  var values = []
  for (i = 0; i < arr.length; i ++) {
    if (arr[i] > y) {
      numCount = numCount + 1;
      values.push(arr[i]);
    }
  }
  console.log(values);
}

function ZeroOutArrayNegativeVals(arr) {
  var zero = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < zero) {
      arr[i] = zero;
    }
  }
  return arr;
}

function PrintMaxMinAverageArrayVals(arr) {
  var min = Infinity;
  var max = -Infinity;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
  }
  var average = sum / arr.length;
  console.log('Min: ' + min + ' Max: ' + max + ' Average: ' + average)
}

function ShiftArrayValsLeft(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
}

function SwapStringForArrayNegativeVals(arr) {
  var zero = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < zero) {
      arr[i] = 'Dojo';
    }
  }
  return arr;
}


/*


console.log(ShiftArrayValsLeft([-1, 3, -5, 2, 4]))

console.log(PrintMaxMinAverageArrayVals([-1, 3, -5, 2, 4]))

console.log(PrintMaxOfArray([1, 2, 2, 2, 2, 10]));

console.log(SwapStringForArrayNegativeVals([-1, 3, -5, 2, 4]))

console.log(ReturnArrayCountGreaterThanY([1, 3, 5, 2, 4], 2))

console.log(SquareArrayValues([1, 3, 5, 2, 4]))

console.log(PrintAverageOfArray([2, 2, 2, 2, 10]));

console.log(PrintIntsAndSum0To255())

console.log(Print1To255())

*/