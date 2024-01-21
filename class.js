class bike{
  constructor(name,cc){
    this.name = name;
    this.cc=cc;
  }
}

const bike1=new bike('Yamaha', 155);
const bike2=new bike('sUZUKI', 160);
console.log(bike1,bike2);

class fruits{
  constructor(name,unit,price){
    this.name=name;
    this.unit=unit;
    this.price=price;
  }
  showPrice(currency){
    console.log(`total price of ${this.name} is ${this.price} ${currency}`)
  }
}

const fruit=new fruits("Mango","5kg",450);
const fruit2=new fruits("Apple","1kg",250);
console.log(fruit,fruit2);

fruit.showPrice("Taka");
fruit2.showPrice("Taka"); 
