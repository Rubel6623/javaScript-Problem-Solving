const romanToInteger=(romanNumber)=> {
  const romanNumerals = {I: 1,V: 5,X: 10,L: 50,C: 100,D: 500,M: 1000};
  let total = 0;
  let prevValue = 0;

  for (let i = romanNumber.length - 1; i >= 0; i--) {
    const symbol = romanNumber[i];
    const value = romanNumerals[symbol];

    if (value < prevValue) {
      total -= value;
    } else {
      total += value;
    }
    prevValue = value;
  }

  return total;
}

const romanNumber="IXX";
const intNumber=romanToInteger(romanNumber);
console.log(intNumber);

