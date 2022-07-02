The 2 major features of HTTP are **"connectionless"** and **"stateless"** as a result of it.<br>
* **Connectionless** : The server processes the request and sends a response back, after which the connection is cut.
* **Stateless** : Once the communication is done, the state information is not retained.

## HTTP cookie and session
* **HTTP cookies** : Small blocks of data created by a server while a user is browsing a website and placed on the user's computer.
A cookie is sent included on the HTTP header.
* **HTTP session** : A kind of cookie that is managed by the server. Only the session ID is stored in the client side as a cookie and 
the session object is stored in the server.
The session is more secure because it is managed by server not by client but the problem is the more users the more resource of the server is taken.

## Authentification by session
### How a session is made
1. Log in successful
2. The server creates a session and returns the session ID to the client

### How authorized clinets are distinguished
1. The client sends an HTTP request with its session ID on the HTTP header.
2. The server looks up if there is a matched session ID.
3. If there is a matched session ID, the server sends the response the client wants.

|          | Cookie | Session |
| :------: | :--------------------------------------------------: | :--------------: |
| storage location | Client | Server |
| form | Text | Object |
| expiration | Manually set | When the user closes the web browser |
| limit | 300 cookies per client, 20 cookies per domain, 4KB per cookie | not limit |
