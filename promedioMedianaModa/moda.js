/*const list = [1, 1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8];

const objetList = {};

list.map(function (element) {
  if (objetList[element]) {
    objetList[element] = objetList[element] + 1;
  } else {
    objetList[element] = 1;
  }
});

const arrayList = Object.entries(objetList).sort(function (a, b) {
  return a[1] - b[1];
});

const fashion = arrayList[arrayList.length - 1];*/

function fashionFunction(list) {
  const objetList = {};
  list.map(function (element) {
    if (objetList[element]) {
      objetList[element] = objetList[element] + 1;
    } else {
      objetList[element] = 1;
    }
  });

  const arrayList = Object.entries(objetList).sort(function (a, b) {
    return a[1] - b[1];
  });

  const fashion = arrayList[arrayList.length - 1];

  return fashion;
}
