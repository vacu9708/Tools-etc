# Javascript's event loop
The event loop is a single-threaded loop that watches the call stack and checks if there's any code to run in the task queue.<br>

![image](https://user-images.githubusercontent.com/67142421/206545525-f88161cc-572b-4628-9db8-291eb7b1a466.png)
## How setTimeout() is processed
1. setTimeout() is placed into call stack
2. setTimeout() is pulled out of call stack and executed in web browser thread (or C++ thread pool in nodeJS).
3. Once time's up, the callback of setTimeout() is put into callback queue(task queue).
4. The callback is pushed onto call stack and executed.
