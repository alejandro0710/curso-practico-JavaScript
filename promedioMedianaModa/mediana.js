/*const medianListOne = parseInt(listOne.length / 2);

function calculateArithmeticMean(listOne) {
  var sumList = 0;
  for (var i = 0; i < listOne.length; i++) {
    sumList = sumList + listOne[i];
  }
  const averageList = sumList / listOne.length;
  return averageList;
}

function isEvenNumber(listOne) {
  if (listOne.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
var median;

if (isEvenNumber(listOne)) {
  const elementOne = listOne[medianListOne - 1];
  const elementTwo = listOne[medianListOne];

  const averageElementOneAndTwo = calculateArithmeticMean([
    elementOne,
    elementTwo,
  ]);
  median = averageElementOneAndTwo;
} else {
  median = listOne[medianListOne];
}

//const listOne = [2000, 100, 500, 300, ];*/

//my function
const valueList = document.getElementById("valueList")
const value = valueList.value;
const list = value;

function calculateArithmeticMean(list) {
  var sumList = 0;
  for (var i = 0; i < list.length; i++) {
    sumList = sumList + listOne[i];
  }
  const averageList = sumList / list.length;
  return averageList;
}

function calculateMedian(list) {
  const orderList = list.sort(function (a, b) {
    return a - b;
  });

  const medianListOne = parseInt(orderList.length / 2);

  function isEvenNumber(listOne) {
    if (listOne.length % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  var median;

  if (isEvenNumber(orderList.length)) {
    const elementOne = orderList[medianListOne - 1];
    const elementTwo = orderList[medianListOne];

    const averageElementOneAndTwo = calculateArithmeticMean([
      elementOne,
      elementTwo,
    ]);
    median = averageElementOneAndTwo;
  } else {
    median = orderList[medianListOne];
  }
  return median;
}

