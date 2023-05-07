# *This* keyword in javascript
* In an object : points to the address of an object.
* Outside an object : points to the global scope

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
