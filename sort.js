// sort a string array 
const person=["Rahim","Rohiz","Zisan","Dipangkar","Jishu","Anik","Pujan","Rubel","Nazim"];

console.log(person.sort());

// sort a number array
const number=[12,3,78,62,34,1,5,7];
console.log(number.sort(function(a,b){
  return a-b;
}))