The 2 major features of HTTP are **"connectionless"** and **"stateless"** as a result of it.<br>
* **Connectionless** : The server processes the request and sends a response back, after which the connection is cut.
* **Stateless** : Once the communication is done, the state information is not retained.

### HTTP cookie and session
* **HTTP cookies** : Small blocks of data created by a server while a user is browsing a website and placed on the user's computer.
A cookie is sent included on the HTTP header.
* **HTTP session** : A kind of cookie that is managed by the server. Only the session ID is stored in the client side as a cookie and 
the session object is stored in the server.
The session is more secure because it is managed by server not by client but the problem is the more users the more resource of the server is taken.

|          | Cookie | Session |
| :------: | :--------------------------------------------------: | :--------------: |
| storage location | Client | Server |
| form | Text | Object |
| expiration | Manually set | When the user closes the web browser |
| limit | 300 cookies per client, 20 cookies per domain, 4KB per cookie | not limit |
