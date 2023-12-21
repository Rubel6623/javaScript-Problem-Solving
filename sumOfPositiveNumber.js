const sumOfPositiveNumbers=(numbers)=>{
  let sum=0;

  for(let i=0; i<numbers.length; i++){
    let num=numbers[i];

    if(num>0){
      sum+=num;
    }
  }
  return sum;
}

let myArray=[2,-8,12,-4,6,1,-3];
const result=sumOfPositiveNumbers(myArray);
console.log(result);