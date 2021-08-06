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

//const listOne = [2000, 100, 500, 300];*/

var numero = [200, `200`];

//my function
const valueList = document.getElementById("valueList");
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

var asd = [1, 2, 3, 4];

var asdf = ["Alejandro", "Camilo", "Maria"];

var detalle = { nombre: "Alejandro", apellido: "Ramos" };

var arreglo = [
  function numeroArea(asd) {
    console.log(asd);
  },
  "Alejandro",
  { nombre: "Alejandro", apellido: "Ramos" },
];

arreglo[2];

//ejercios

var valueUser = "300,400,900,700";

const valueArrays = valueUser.split(",");

console.log(valueArrays);

const nuevo = [];

const entero = (newInteger) => {
  let b = +newInteger;
  return b;
};

const cambie = (list) => {
  for (let i = 0; i < list.length; i++) {
    var x = list[i];
    let result = entero(x);
    console.log(result);
    nuevo.push(result);
  }
};
cambie(valueArrays);
console.log(nuevo);

//acortar ejercicio con .map
var valueUser = "300,400,900,700";
const valueArrays = valueUser.split(",");
const mapear = valueArrays.map(function (x) {
  return +x;
});
console.log(mapear);

//acortar aun mas

var valueUser = "300,400,900,700";
const valueArrays = valueUser.split(",").map((x) => {
  return +x;
});
console.log(valueArrays);
