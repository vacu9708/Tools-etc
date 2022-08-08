# CORS(Cross-Origin Resource sharing)
Same-Origin Policy was introduced to prevent malicious requests(CSRF) from sites of different origins(pages).
However, there are times when cross-origin resources are needed.<br>
**CORS** is a mechanism that allows resources to be requested from different origins.

![image](https://user-images.githubusercontent.com/67142421/183492714-17a6d283-1c28-4377-9a5b-0b3de112ec1a.png)

# XSS(Cross-Site Scripting)
XSS is a type of injection attack in which malicious scripts are injected into web pages(such as posts) viwed by other users. The malicious code is executed on the same origin not on an external site, so it circumvents(bypasses) the same origin policy. Malicious code includes stealing authorization information like CSRF token to perform a CSRF attack or session ID.
## XSS can be prevented by
encoding the dangerous characters (**<** and **>** in <script>) in the data that a web page receives to prevent the data from being interpreted in any malicious way

# CSRF(Cross-Site Request Forgery)
CSRF exploits the trust a user has for a particular site. It tricks a victim into submitting malicious requests on the attacker's behalf.
## The process to execute CSRF
1. Trick a victim into entering the attacker's page.
2. Send a legitimate-looking request from the victim's browser
## How to prevent CSRF
- Accept only requests from allowed origins
- Use a security token on each session of the user : The backend checks if the token in the request parameter is the token of the legitimate session.

>Both CSRF and XSS allow an attacker to masquerade as a victim user, to carry out any actions that the user is able to perform.<br>

# SQL injection

# Symmetric key cryptography, Asymmetric key cryptography

# TLS(Transport Layer Security)
