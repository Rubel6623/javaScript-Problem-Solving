const reverseString=(string)=>{
  if(string.length==0 || typeof string!=='string'){
    return;
  }

  let reverseStr='';
  for(let i=string.length-1; i>=0; i--){
    reverseStr+=string[i];
  }
  return reverseStr;
}

const myString='Mystr';
const result=reverseString(myString);
console.log(result);