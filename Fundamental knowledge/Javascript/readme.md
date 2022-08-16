# *This* keyword in javascript
* In an object : points to the address of an object.
* Outside an object : points to the global scope

# Difference between var, let and const
## Prior knowledge(block scope VS function scope)
~~~javascript
function foo1() {
    for(var i=0; i<3; i++);
    console.log(i)
}

function foo2() {
    for(let i=0; i<3; i++);
    console.log(i)
}

foo1() //3
foo2() //ReferenceError: i is not defined
~~~

||var|let|const|
|---|---|---|---|
|Scope|Functional scope|Block scope|Block scope|
|declaration|Can be declared without initialization where its default value is "undefined"|Can be declared without initialization but accessing without initilization returns an error|Cannot be declared without initialization|
|Update|Can be updated|Can be updated|Cannot be updated but updating by dereferencing is possible|

# Closure
Each function in JavaScript form closures. A **closure** is the combination of an inner function and the lexical environment within which the inner function is declared.<br>
A **closure** allows an inner function to access the scope of the outer function.<br>
~~~javascript
function parent_function() {
    var text = "hello"; // A local variable created by the parent_function
    function inner_function() {
        console.log(text); // use variable declared in the parent function
    }
    inner_function();
}
parent_function();
~~~
The above code prints "hello".<br>

~~~javascript
function parent_function() {
    var text = 'hello'; // A local variable created by the parent_function
    function inner_function() {
        console.log(text); // use variable declared in the parent function
    }
    return inner_function;
}

var my_func = parent_function();
my_func()
~~~
This makes the same output as the first code.<br>

In some programming languages, local variables exist for just the duration of that function's execution. In those languages the *text* variable is no longer accessible
once parent_function() finishes executing. However, this is not the case in JavaScript.<br>
The instance of inner_function() maintains a reference to its lexical environment, within which the variable *text* exists. For this reason, when inner_function is invoked, the variable *text* remains available for use.<br>

# Prototype
In javscript, all data except boolean, number, string, null, and undefined is objects.<br>
Javascript is a prototype-based OOP language where objects are inherited without a class.<br>
Each object in javascript is connected to their parent object. The parent object is called "*prototype object**.<br>
The inheritance in javascript is performed through **prototype chain**.
The chain ends when it reaches a prototype whose parent prototype is null.<br>

![image](https://user-images.githubusercontent.com/67142421/178171952-1f5cbcf8-f262-48d8-bde0-77f568ebb650.png)
