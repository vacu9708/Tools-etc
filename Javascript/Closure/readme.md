# Closure
Each function in JavaScript forms closures. A **closure** is the combination of an inner function and the lexical environment within which the inner function is declared.<br>
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
