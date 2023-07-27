const findSecondSmallest=(array)=>{
  if(array.length<2){
    return "Array should be contain at least 2 elements";
  }
  const SecondSmallest=array.slice().sort((a,b)=>a-b)[1];
  return SecondSmallest;
}

console.log(findSecondSmallest([4, 7, 12, 9, 3, 5, 2]));