- A callback is a function passed into another function as an argument, which is then invoked inside the outer function.
- A promise is an object to handle asynchronous operations (that produces a output some time in the future).

**Callbacks used in a asynchronous function can make it hard to understand the flow.**

## Callback hell
Callback hell is nested callbacks stacked below one another.

![image](https://user-images.githubusercontent.com/67142421/184472345-6c9fb971-2adb-4929-bb56-dbf126b9bae6.png)

~~~javascript
$.get('https://github.com/vacu9708', (response)=>{
  process_response(response, (processed_response)=>{
    display(processed_response, (displayed_data)=>{
      console.log(displayed_data)
    }
  }
}
~~~

### The callback hell can be solved by using the promise
~~~javascript
new Promise(function(resolve, reject){
  $.get('https://github.com/vacu9708', (response)=>{
    resolve(response)
  }
}
.then(response=>{return process_response(response)})
.then(processed_response=>{return display(processed_response)}) //The return gives the returned value to the next then
.then(displayed_data=>{
  console.log(displaye_data)
})
