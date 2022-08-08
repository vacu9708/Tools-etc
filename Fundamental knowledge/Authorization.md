# JWT(JSON Web Token)
![image](https://user-images.githubusercontent.com/67142421/183502457-7ba21a27-068e-4421-9670-e1f1736208ca.png)

JWT consists of 3 parts.
## Header
identifies which algorithm is used to generate the signature
~~~javascript
{"algorithm": "HS256", "type": "JWT"}
~~~
## Payload
has the user's data(called claims)
~~~javascript
{"ID": "admin"}
~~~
## signature
The header and payload are taken together and encoded into a signature to ensure that the token wasn't changed.<br>
If the payload was manipulated, the signature of the manipulated payload doesn't match the signature generated with the original payload.

## Workflow
### Issuing
1. The user logs in
2. If the login is successful, issue a token using a private key.
3. The generated token is sent to the client.
### Authentification
1. Client sends the token in the HTTP request header
2. The server identifies the user from the token.
3. Server sends the requested data to the client.

# OAuth
OAuth is standard framework for delegated authorization, It enables apps to obtain limited access to a user’s data, for example without giving away a user’s password.<br>
OAuth is about authorization and not authentication. Authorization is asking for permission to do stuff. Authentication is about proving you are the correct person because you know things. OAuth doesn’t pass authentication data 
