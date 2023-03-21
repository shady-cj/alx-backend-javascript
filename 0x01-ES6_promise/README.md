# 0x01-ES6_promise

Learning about the Javascript Promises and how they are used.

The project is aimed at Understanding the following:

* Promises (how, why, and what)
* How to use the then, resolve, catch methods
* How to use every method of the Promise object
* Throw / Try
* The await operator
* How to use an async function

## TASKS


### 0. Keep every promise you make and only make promises you can keep

Return a Promise using this prototype function `getResponseFromAPI()`

```
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$  
```

**File**: `0-promise.js`



### 1. Don't make a promise...if you know you can't keep it

Using the prototype below, return a promise. The parameter is a boolean.

```
getFullResponseFromAPI(success)
```

When the argument is:

* true
    * resolve the promise by passing an object with 2 attributes:
        * status: 200
        * body: 'Success'
    * false
        * reject the promise with an error object with the message `The fake API is not working currently`
Try testing it out for yourself

```
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```

**File**: `1-promise.js`