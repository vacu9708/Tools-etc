# Static sites
In *static sites*, which was used a long time ago, only HTML documents stored on the server can be displayed.<br>

# SPA(Single Page Application)
Pre-building all needed HTML documents was ineffective, so the need for dynamic rendering arose.<br>
A Single Page Application (SPA) is a type of web application that loads and dynamically updates all its content on a single web page, rather than loading multiple web pages during a user's interaction with the application.

# SSR(Server Side Rendering)
In SSR, the HTML is generated on the server-side and sent to the client.
the browser receives a fully formed HTML file with the HTML components already created. All the browser has to do is parse this HTML to generate the DOM and display 
the web page.
## Pros
- Faster initial loading since the HTML received from the server can be parsed and displayed without the big JS bundle.
## Cons
- Low responsiveness since every page navigation makes a round trip to the server to receive the HTML

# CSR(Client Side Rendering)
In CSR, the HTML is generated on the client side by executing Javascript code in the browser.
## Pros
- Decreased server load as HTML files are not transferred from the server
- Extremely fast and responsive after initial load of Javascript
## Cons
- The size of the JS file is big, so initial loading may take too long
- Negative impact on SEO(Search Engine Optimization) and page ranking because index.html only contain links to the JS code that generates the HTML
