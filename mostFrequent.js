function findMostFrequent(array){
  const counter={};

  for(let i=0;i<array.length;i++){
    const element=array[i];
    // console.log(element);
    counter[element]=(counter[element] || 0)+1;
  }
  let mostFrequentElement;
  let maxCounter= 0;

  for (const element in counter) {
    if (counter[element] > maxCounter) {
      mostFrequentElement = element;
      maxCounter = counter[element];
    }
  }
  return mostFrequentElement; 
}

const myArray=[1,2,5,2,7,8,2];
const result=findMostFrequent(myArray);
console.log(result);