// let testArray = [3, 7, 5, 9, 1, 0, 6, 4];
// let testArray2 = [4, 6, 2, 1];

// describe('Bubble Sort', function() {
//   it('handles an empty array', function() {
//     expect(bubbleSort([], 0)).toEqual([]);
//   });
//   it('handles an array with one item', function() {
//     expect(bubbleSort([2], 1)).toEqual([2]);
//   });
//   it('handles an array with multiple items', function() {
//     expect(bubbleSort(testArray, 8)).toEqual([0, 1, 3, 4, 5, 6, 7, 9]);
//   });
//   it('swaps the most efficient way', function() {
//     spyOn(window, 'swapperFunc').and.callThrough();
//     bubbleSort(testArray2, 4);
//     expect(window.swapperFunc.calls.count()).toEqual(5);
//   });
// });
