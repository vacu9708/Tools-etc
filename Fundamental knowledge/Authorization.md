# JWT(JSON Web Token)
![image](https://user-images.githubusercontent.com/67142421/183502457-7ba21a27-068e-4421-9670-e1f1736208ca.png)

JWT consists of 3 parts.
## Header
identifies which algorithm is used to generate the signature
~~~javascript
{"algorithm": "HS256", "type": "JWT"}
~~~
## Payload
contains token information and public information to identify the user. It is not encrypted, so care must be taken so that sensitive data is not included.
~~~javascript
{"issuedAt": "65131721", "ID": "catherine"}
~~~
## Signature
The header and payload are taken together and encoded into a signature when the token is issued.<br>
If the JWT was tampered with, the signature recalculated using the received header and payload data will no longer match the signature in the JWT.

## Workflow
### Issuing
1. Client logs in using their credentials (e.g. username and password).
2. If the login information is valid, the server generates a JWT containing a header, a payload, and a signature. The signature is created using the server's private key.
3. The server sends the JWT to the client, typically in the response body or as a cookie. The client verifies the signature using the public key.
### Authentification
1. The client sends the JWT in the HTTP header
2. The server checks that the token has not expired and verifies the signature using the server's private key(by checking if the recalculated signature matches the signature in the JWT)
3. The server sends the requested data to the client.

## Session-cookie VS JWT in authorization
### Session-cookie
- All the information except session ID is stored in the server
### JWT
- All the information is stored in the token(stateless), so no additional storage is required.
- All the information is stored in the token, so the token is bigger than session ID, which might lead to big traffic.

## Token stealing attacks
- Cross-site scripting (XSS): An attacker injects malicious code into a website or application, which is then executed in a user's browser. This code can be used to steal the user's access token or refresh token from the client-side storage location.

- Cross-site request forgery (CSRF): An attacker tricks a user into submitting a malicious request to an application that includes the user's access token or refresh token. If the application does not have appropriate CSRF protections in place, it may inadvertently authorize the request and expose the user's token to the attacker.

- Man-in-the-middle (MITM) attack: An attacker intercepts communications between the client application and the server, allowing them to steal the user's access token or refresh token as it is transmitted between the two. This can be mitigated by using HTTPS encryption to protect the communication channel.

- Server-side vulnerabilities: If an attacker gains access to the server or the database where access tokens or refresh tokens are stored, they may be able to steal them directly.

# OAuth 2.0
Due to the security issue of OAuth 1.0, OAuth 2.0 was developed.
OAuth 2.0 is standard framework for delegated authorization, It enables apps to obtain limited access to a user’s data, for example without giving away a user’s password.<br>
OAuth is about authorization and not authentication. Authorization is asking for permission to do stuff. Authentication is about proving you are the correct person because you know things. OAuth doesn’t pass authentication data.
