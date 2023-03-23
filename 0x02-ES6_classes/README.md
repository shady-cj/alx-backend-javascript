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