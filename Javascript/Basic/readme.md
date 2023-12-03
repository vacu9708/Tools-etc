# The this keyword in javascript
~~~javascript
class Example {
  constructor() {
    this.name = 'John';
  }

  regularFunction () {
    try {
      console.log("Regular function:", this.name);
    }
    catch (error) {
      console.log("Regular function: undefined");
    }
  }

  arrowFunction = () => {
    console.log("Arrow function:", this.name);
  }
}

const example = new Example();
example.regularFunction(); // Regular function: John
example.arrowFunction();   // Arrow function: John

// Reassigning the methods to different objects
const regularFunction = example.regularFunction;
const arrowFunction = example.arrowFunction;

regularFunction(); // Regular function: undefined
arrowFunction();   // Arrow function: John
~~~

The regular function, when called using example.regularFunction(), prints the value of this.name as 'John', because the value of this inside a regular function depends on how the function is called. In this case, the this refers to the example object.<br>

However, when we reassign the regularFunction to the regularFn variable and call it directly, it prints undefined. This happens because when a regular function is called without any context (i.e., without the object before the dot), the this refers to the global object (e.g., window in a browser or global in Node.js). Since the global object doesn't have a name property, this.name is undefined.<br>

On the other hand, the arrow function, regardless of how it is called, points to its surrounding scope, which in this case is the Example class instance. Therefore, both example.arrowFunction() and arrowFn() output 'John' correctly, as the value of this.name.<br>

# Difference between var, let and const
## block scope and function scope
~~~javascript
function foo1() {
    for(var i=0; i<3; i++);
    console.log(i)
}

function foo2() {
    for(let i=0; i<3; i++);
    console.log(i)
}

foo1() //3 (Block scope)
foo2() //ReferenceError: i is not defined (Function scope)
~~~

## Summary
||var|let|const|
|---|---|---|---|
|Scope|Function scope|Block scope|Block scope|
|declaration|Can be declared without initialization where its default value is "undefined"|Can be declared without initialization but accessing without initilization returns an error|Cannot be declared without initialization|
|Update|Can be updated|Can be updated|Cannot be updated but updating by dereferencing is possible|
