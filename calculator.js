const calculator=(num1,operator,num2)=>{
  if(operator=="+"){
    return num1+num2;
  }
  else if(operator=="-"){
    return num1-num2;
  }
  else if(operator=="*"){
    return num1*num2;
  }
  else if(operator=="/"){
    if( num2===0){
      throw Error('Division by zero is not allowed.');
    }
    return num1 / num2;
  }
  else{
    return 'Error : Invalid operator';
  }
}

const num1=45;
const operator='+';
const num2=41;
const result =calculator(num1,operator,num2);
console.log(result);