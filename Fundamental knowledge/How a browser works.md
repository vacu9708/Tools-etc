## DNS
The Domain Name System (DNS) is the phonebook of the Internet. Web browsers interact through IP addresses. DNS translates domain names to IP addresses to eliminate the need for humans to memorize IP addresses.

# What happens when www.google.com is entered? 

## On network
1. The browser requests a **DNS lookup** for the URL entered into the address bar, which in turn responds with an IP address.
2. The browser sets up a connection to the server via a **TCP three-way handshake**.
3. (For a secure connection established over HTTPS), **TLS handshake** is performed additionally.
4. The browser sends an initial **HTTP GET request** (most often to get an HTML).

## 5. HTML, CSS, and javascript code received is parsed.
- The *preload scanner* requests high priority resources like CSS, JavaScript, and images so that by the time the HTML parser reaches requested assets, their download may have already been started.
~~~HTML
<link rel="stylesheet" src="styles.css"/>
<script src="myscript.js" defer></script>
<img src="myimage.jpg" alt="image description"/>
~~~
- A *DOM(Document Object Model) tree* is built from HTML.
>The Document Object Model (DOM) represents a web document as a tree.

![image](https://user-images.githubusercontent.com/67142421/183269942-7f22e121-8549-4a51-b585-ddd479f10f61.png)<br>

- A *CSSOM tree* is built.(the same process as building a DOM tree)
- Javascript code is parsed into *abstract syntax trees* and passed into a javascript interpreter. (<script> tags without an async or defer attribute block rendering, which prevents showing a superficial webpage without javascript.)

6. The DOM and CSSOM trees created in the parsing step are combined into a render tree which is then used to compute the layout of every visible element.
7. Each node of the render tree is painted to the screen.
