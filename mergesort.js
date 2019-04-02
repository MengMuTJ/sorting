function split(wholeArray) {
  if (wholeArray.length > 1) {
    let mid = Math.floor(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, mid);
    let secondHalf = wholeArray.slice(mid);
    return [firstHalf, secondHalf];
  }
  return wholeArray;
}

function merge(array1, array2) {
  let sortedArray = [];
  while (array1.length && array2.length) {
    if (array1[0] > array2[0]) {
      sortedArray.push(array2[0]);
      array2.shift();
    } else {
      sortedArray.push(array1[0]);
      array1.shift();
    }
  }
  if (array1.length) sortedArray = [...sortedArray, ...array1];
  else if (array2.length) sortedArray = [...sortedArray, ...array2];
  return sortedArray;
}

function mergeSort(array) {
  //check the length of array, if greater than 1, call split on array
  if (array.length < 2) return array;
  const splits = split(array);
  const left = splits[0];
  const right = splits[1];
  return merge(mergeSort(left), mergeSort(right));
}
