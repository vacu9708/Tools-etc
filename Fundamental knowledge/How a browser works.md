## On network
1. The browser requests a *DNS lookup* for the URL entered into the address bar, which in turn responds with an IP address.
2. The browser sets up a connection to the server via a *TCP three-way handshake*.
3. (For a secure connection established over HTTPS), *TLS handshake* is performed additionally.
4. The browser sends an initial *HTTP GET request* (most often to get an HTML).

## HTML, CSS, and javascript code received is parsed.
1. A *DOM(Document Object Model) tree* is built from HTML.
![image](https://user-images.githubusercontent.com/67142421/183269942-7f22e121-8549-4a51-b585-ddd479f10f61.png)
2. The *preload scanner* requests high priority resources like CSS, JavaScript, and images so that by the time the HTML parser reaches requested assets, their download may have already been started.
~~~HTML
<link rel="stylesheet" src="styles.css"/>
<script src="myscript.js" async></script>
<img src="myimage.jpg" alt="image description"/>
<script src="anotherscript.js" async></script>
~~~
3. A *CSSOM tree* is built.(the same process as building a DOM tree)
4. Javascript code is parsed into *abstract syntax trees* and passed into a javascript interpreter. (<script> tags without an async or defer attribute block rendering to prevent showing a webpage without javascript.)
