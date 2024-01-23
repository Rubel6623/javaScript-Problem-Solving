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

