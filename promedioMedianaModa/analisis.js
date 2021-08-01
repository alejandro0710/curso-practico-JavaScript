const salaryColombia = colombia.map(function (person) {
  return person.salary;
});

console.log(salaryColombia);

const orderSalaryCol = salaryColombia.sort(function (a, b) {
  return a - b;
});
  
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

  const generalMedianCol = calculateMedian(salaryColombia)
    
  //(120 * (100 - 15)) / 100

  const spliceStar = (orderSalaryCol.length * 90) / 100;
  const spliceCount = orderSalaryCol.length - spliceStar;

  const salaryColTopTen = orderSalaryCol.splice(
    spliceStar,
    spliceCount,
  );

  const medianTopTenCol = calculateMedian(salaryColTopTen)

  console.log(
    `Mediana general en colombia ${generalMedianCol},
    Top 10 salarios en colombia ${salaryColTopTen},
    Mediana de top 10 en colombia ${medianTopTenCol},`
  );
  