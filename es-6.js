
// Problem-1
let evenFriendsName = [];

const evenCheck = (friendsName) => {
  for (let i = 0; i < friendsName.length; i++) {
    if (friendsName[i].length % 2 == 0) {
      evenFriendsName.push(friendsName[i]);
    }
  }
  return evenFriendsName;
}

const friends = ['Saiful', 'Rudra', 'Jaya', 'Nishal', 'Dhruba', 'Pujan', 'Anik'];
console.log(evenCheck(friends));


// Problem-2
const squareNumber = []

const sumAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    squareNumber.push(Math.pow(arr[i], 2));
  }

  let avg = 0;
  for (let i = 0; i < squareNumber.length; i++) {
    sum += squareNumber[i];
    avg = sum / squareNumber.length;
  }
  return avg;
}

number = [2, 5, 3, 4, 7,]
console.log(sumAverage(number));


// Problem-3
const findLargest = (arr1, arr2) => {
  const newArray = [...arr1, ...arr2];
  const max = Math.max(...newArray);
  return max;
}

const num1 = [45, 81, 75, 66, 12];
const num2 = [53, 46, 71, 98, 61];
console.log(findLargest(num1, num2));



// Problem-4
class Rider {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  rideBike(time) {
    console.log(`${this.name} is riding bike at ${time}`)
  }
}

const rider1 = new Rider('Rudra', 20);
console.log(rider1);
rider1.rideBike('10am to 3pm')


// Problem-5
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 25 }
];

const totalAge = people.reduce((accumulator, person) => {
  return accumulator + person.age;
}, 0);

console.log(totalAge);


// Problem-6
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary:
          [
            { school_name: "ABC primary school" },
            { location: "Peters burg" }
          ]
      },
      {
        secondary:
          [
            {
              school_name: "ABC secondary school"
            },
            { location: "St Lorence" }
          ]
      },
    ]
  }
}

const sophia=data.Sophia.study[1].secondary[1].location;
console.log(sophia);