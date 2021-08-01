//const listOne = [100, 200, 300, 500];

//var sumListOne = 0;
//for (var i = 0; i < listOne.length; i++) {
//  sumListOne = sumListOne + listOne[i];}

//const averageListOne = sumListOne / listOne.length;



function calculateArithmeticMean(list) {
  var sumList = 0;
  for (var i = 0; i < list.length; i++) {
    sumList = sumList + list[i];
  }
  const averageList = sumList / list.length;
  return averageList;

}
