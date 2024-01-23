// find & remove falsy value from array
const mixedArr=["lws", undefined,"math", false,"", "apple", 40,
"iphone", true, "thanks all", NaN];

/*
const trueArray=mixedArr.filter(function(ele){
    if(ele){
      return true;
    }
    else{
      return false;
    }
});
 */
const trueArray=mixedArr.filter(Boolean);

console.log(trueArray);

// find & delete falsy value from object

const obj={ 
  a:"lws", 
  b:undefined, 
  c:"math", 
  d:false, 
  e:"", 
  f:"apple", 
  g:40, 
  h:"iphone",
  i:true,
  j:"thanks all",
  k:NaN
}

function truthyObj(obj){
  for(let key in obj) {
    if(!obj[key]){
      delete obj[key];
    }
  }
  return obj;
}

console.log(truthyObj(obj));