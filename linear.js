function linearSearch(arr,str){
  let len=arr.length;
  for (let i =0; i < len; i++){
    if(arr[i]===str){
      return i;
    }
  }
  return 'not found!';
}

console.log(linearSearch(['a','b','c','d','c'],'c'));