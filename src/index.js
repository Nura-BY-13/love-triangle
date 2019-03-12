/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var serial = [];
  for (i = 1; i < preferences.length + 1; i++) {
    serial.push(i);
  };
  var y = 0;
  for (i = 1; i < serial.length + 1; i++) {
    var arr2 = [];
    var arr3 = [];
    Number1 = serial[i - 1]; arr2.push(Number1);
    Lover1 = preferences[i - 1]; arr3.push(Lover1);
    Number2 = serial[Lover1 - 1]; arr2.push(Number2);
    Lover2 = preferences[Number2 - 1]; arr3.push(Lover2);
    Number3 = serial[Lover2 - 1]; arr2.push(Number3);
    Lover3 = preferences[Number3 - 1]; arr3.push(Lover3);

    if ((arr2[0] == arr3[0]) || (arr2[1] == arr3[1]) || (arr2[2] == arr3[2])) {
      continue;
    }
    arr2.sort(function (a, b) { return a - b });
    arr3.sort(function (a, b) { return a - b });
    if ((arr2[0] == arr3[0]) && (arr2[1] == arr3[1]) && (arr2[2] == arr3[2])) {
      y = y + 1
    }
  }
  return (y/3);
};
