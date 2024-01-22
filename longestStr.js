function longestString(names){
  let longestWord='';

  for(let name of names){
    if(name.length>longestWord.length){
      longestWord=name;
    }
  }
  return [longestWord, names.indexOf(longestWord)];
}

console.log(longestString(["Jay Das Akash","Pujan Sarkar","Sumit Saha","Rubel Rudra","Rajib Nath", "Dipankar Rudra",]));