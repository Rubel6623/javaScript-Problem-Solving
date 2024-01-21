const numbers=[2,4,6,7,9,1,5,4,6,9,7];

const duplicates=numbers.filter(function(value,index,array){
  return array.indexOf(value) !== index;
});
console.log(duplicates);