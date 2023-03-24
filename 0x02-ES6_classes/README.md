# 0x02. ES6 classes

Learning more about classes in javascript

The project is aimed at Understanding the following:

* How to define a Class
* How to add methods to a class
* Why and how to add a static method to a class
* How to extend a class from another
* Metaprogramming and symbols


## TASKS


### 0. You used to attend a place like this at some point

Implement a class named `ClassRoom`:

* Prototype: `export default class ClassRoom`
* It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

```
bob@dylan:~$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$ 
```

**File**: `0-classroom.js`




### 1. Let's make some classrooms

Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms.` It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

```

bob@dylan:~$ cat 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$ 
```


**File**: `1-make_classrooms.js`



### 2. A Course, Getters, and Setters

Implement a class named `HolbertonCourse:`

* Constructor attributes:
    * `name` (String)
    * `length` (Number)
    * `students` (array of Strings)
* Make sure to verify the type of attributes during object creation
* Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
* Implement a getter and setter for each attribute.

```
bob@dylan:~$ cat 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$ 
```


**File**: `2-hbtn_course.js`






### 3. Methods, static methods, computed methods names..... MONEY


Implement a class named `Currency`:

* Constructor attributes:
    * `code` (String)
    * `name` (String)
* Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
* Implement a `getter` and `setter` for each attribute.
* Implement a method named `displayFullCurrency` that will return the attributes in the following format name (code).


```
bob@dylan:~$ cat 3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$ 
```


**File**: `3-currency.js`







### 4. Pricing


Import the class `Currency` from `3-currency.js`

Implement a class named `Pricing`:

* Constructor attributes:
    * `amount` (Number)
    * `currency` (Currency)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter and setter for each attribute.
* Implement a method named `displayFullPrice` that returns the attributes in the following format `amount` `currency_name (currency_code)`.
* Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.


```
bob@dylan:~$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$ 
```


**File**: `4-pricing.js`




### 5. A Building

Implement a class named `Building`:

* Constructor attributes:
    * `sqft` (Number)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a `getter` for each attribute.
* Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
* If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message Class extending Building must override `evacuationWarningMessage`



```
bob@dylan:~$ cat 5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$ 
```


**File**: `5-building.js`