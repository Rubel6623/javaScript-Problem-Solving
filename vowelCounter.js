const vowels=['a','e','i','o','u','A','E','I','O','U'];

function countVowel(sentence){
  let count = 0;
  const letters=Array.from(sentence);
  letters.forEach(function(value){
    if(vowels.includes(value)){
      count++;
    }
  });
  return count;
}

console.log(countVowel("I Love Bangladesh"));