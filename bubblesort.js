function swapperFunc(array, first, second) {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

function bubbleSort(array, length) {
  for (let j = length; j > 0; j--) {
    for (let i = 0; i < length; i++) {
      if (array[i] > array[i + 1]) swapperFunc(array, i, i + 1);
    }
  }
  return array;
}
