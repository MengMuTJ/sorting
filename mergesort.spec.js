let testArray = [3, 7, 5, 9, 1, 0, 6];
let testArray1 = [1, 2];
let testArray2 = [3, 4];
let testArray3 = [3, 4];
let testArray4 = [1, 2];
describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split(testArray)).toEqual([[3, 7, 5], [9, 1, 0, 6]]);
  });
});
describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge(testArray1, testArray2)).toEqual([1, 2, 3, 4]);
  });
  it("is able to sort", function() {
    expect(merge(testArray3, testArray4)).toEqual([1, 2, 3, 4]);
  });
});
describe("mergeSort function", function() {
  it("is able to merge and sort", function() {
    expect(mergeSort(testArray)).toEqual([0, 1, 3, 5, 6, 7, 9]);
  });
});
