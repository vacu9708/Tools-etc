The 2 major features of HTTP are **"connectionless"** and **"stateless"** as a result of it.<br>
* **Connectionless** : The server processes a request and sends a response back, after which the connection is cut.
* **Stateless** : Once the communication is done, the state information is not retained.
>These features of HTTP is why HTTP cookie or session is needed.<br>
>They are used to remember certain information about a user like what's in the user's shopping cart or login information.

## HTTP cookie and session
* **An HTTP cookie** is a small piece of data created by a server and placed on the user's computer. It can be read by both the client and server and is automatically sent back to the server through the HTTP request header on every request.
A cookie is sent included on the HTTP header.
* **An HTTP session** consists of session ID. The session ID is stored in the client side as a cookie and the session object is stored in the server. The session is more secure because it is managed by server not by client but the problem is that the more users the more resource of the server is taken.

## Authentification by session
### How a session is made
1. Valid log-in information
2. The server creates a session object and sends its session ID to the client
3. The session ID is stored as a cookie

### How authorized clinets are distinguished
1. The client sends an HTTP request with its session ID in the HTTP request header.
2. The server looks up if it has a matched session ID.
3. If there is a matched session ID, the server sends the response the client wants.

If the session ID finds its way into the hands of a hacker, they can masquerade as that user. This is known as **session hijacking**.

|| Cookie | Session |
| :---: | :---: | :---: |
| Storage location | Client | Server |
| Form | Text | Object |
| Expiration | Manually set | When the user closes the web browser |
| Limit | 300 cookies per client, 20 cookies per domain, 4KB per cookie | not limit |

## Web storage
Web storage is similar to HTTP cookie but with a greatly enhanced capacity(5MB) and no information sent in the HTTP request header.<br>
The web storage is divided into 2 types : *local storage* and *session storage*. Local storage is persistent while session storage is expired when the tab is closed.
