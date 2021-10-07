'use strict';
/*
const Person = function (firstName, birthYear) {
  // console.log(this);
  // Instance property
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never create functio in constructor function
  // this.calcAge = function () {
  //   console.log(205 - this.birthYear);
  // };
};
const henry = new Person('henry', 1991);
console.log(henry);
// With NEW keyword
//1.New object{} is created
//2.function is called, this(key)={} points to the new created object
//3.{} newly creted object linked to prototype
//4.function automaticaly returns {}

const john = new Person('john', 2000);
const mathew = new Person('mathew', 2010);
console.log(john, mathew);

console.log(john instanceof Person); // to check it is created from the same constructor function

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2050 - this.birthYear);
};
john.calcAge();
mathew.calcAge();

console.log(henry.__proto__);
console.log(henry.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(henry));

// we can assign properties to object
Person.prototype.species = 'Homo sapience';
console.log(henry);
// to check  if a object has its own property
console.log(henry.hasOwnProperty('species')); // False
console.log(henry.__proto__);
// object.prototype(top of prototype chain)
console.log(henry.__proto__.__proto__);
console.log(henry.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 3, 2, 5, 3, 7, 5, 3, 4, 9, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
*/

//Coding challenge #1
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.break = function () {
  console.log((this.speed -= 5));
};
bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();
mercedes.accelerate();
mercedes.break();
*/
/*
// ES6 Classes

// class Declartaion
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2050 - this.birthYear);
  }
  greet = function () {
    console.log(`Hey ${this.firstName}`);
  };
  static hey = function () {
    console.log(`Hey there how are you?`);
    // console.log(this);
  };
}

const henry = new PersonCl('Henry', 1990);
console.log(henry);
henry.calcAge();

// calling static method in ES6 classes
PersonCl.hey();
// console.log(henry.__proto__ === PersonCl.prototype);
// This also can be done to set a method in class
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
henry.greet();
*/
/*
//Getters and setters
const account = {
  owner: 'Henry',
  movements: [200, 500, 180, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2050 - this.birthYear);
  }
  greet = function () {
    console.log(`Hey ${this.fullName}`);
  };
  get age() {
    return 2050 - this.birthYear;
  }
  //Set a proprty that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const henry = new PersonCl('Henry ferrao', 1990);
const willy = new PersonCl('willy ferrao', 1995);
console.log(henry);
henry.calcAge();
console.log(henry.age);
// console.log(henry.__proto__ === PersonCl.prototype);
// This also can be done to set a method in class
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
henry.greet();
*/
/*
// Static methods example
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const henry = new Person('henry', 1991);
console.log(henry);

const john = new Person('john', 2000);
const mathew = new Person('mathew', 2010);
console.log(john, mathew);

//Static method in Constructor function
Person.hey = function () {
  console.log('Hey there how are you?');
  console.log(this);
};

Person.hey(); // static method
// henry.hey(); // Gives an error as it is not on henry object
*/
/*
// Object.Create()

const PersonProto = {
  calcAge() {
    console.log(2050 - this.birtYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birtYear = birthYear;
  },
};
const henry = Object.create(PersonProto);
console.log(henry);
henry.name = 'Henry';
henry.birtYear = 1990;
henry.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1995);
sarah.calcAge();
*/
/*
// Coding challenge #2

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  break() {
    console.log((this.speed -= 5));
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);

*/
/*
// Inheritance between classes
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study in ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
Student.prototype.constructor = Student;
console.log(mike.__proto__);
*/
/*
// Coding Challenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h,with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.break();
tesla.accelerate();
tesla.accelerate();
*/
/*
// Inheritance classes using ES6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log('Hey there how are you?');
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  //static method
  static hey() {
    console.log('Heyy there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always need to be first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and i study in ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} age years but feel like ${
        2037 - this.birthYear + 10
      } years old`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer science');
martha.introduce();
martha.calcAge(); // method overloaded
*/
/*
// Inheritance between classes using Object.create()
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
steven.init('Steven', 2000);
steven.calcAge(); 
const studentProto = Object.create(PersonProto);
studentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
studentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i study in ${this.course}`);
};
const jay = Object.create(studentProto);
jay.init('Jay', 2010, 'Computer science');
jay.introduce();
jay.calcAge();
*/

// class example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected peoprty
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }
  //public interface
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Your loan is approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(500);
acc1.withdraw(200);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
