function findTwoNumbersSum(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoNumbersSum(sortedArray, targetValue);
console.log("Indices of the two numbers:", result);
