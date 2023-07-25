function reverseString(string){
  if(string==null || typeof string!=='string'){
    return;
  }

  let reverseStr='';
  for(let i=string.length-1; i>=0; i--){
    reverseStr+=string[i];
  }
  return reverseStr;
}

const myString='Rubel Rudra';
const result=reverseString(myString);
console.log(result);