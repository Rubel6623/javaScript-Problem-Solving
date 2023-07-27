const findTwoNumbersSum=(array, target)=> {

  for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length; j++){
      if(array[i]+array[j]===target){
        console.log(array[i]);
        return [i,j];
      }
    }
  }
  return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoNumbersSum(sortedArray, targetValue);
console.log("Indices of the two numbers:", result);
