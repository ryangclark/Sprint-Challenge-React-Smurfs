1.  Explain the differences between `client-side routing` and `server-side routing`.

For the majority of the Internet's brief lifespan, people have navigated using `server-side routing`. That means users direct their browsers to a URL, and the browser makes a `GET` request to the associated server. The server responds with HTML, CSS, and/or JavaScript that allows the browser to render the page. As users click links, another request is made to the server for the new page, and the server responds accordingly.

In `client-side routing`, the client makes an initial request from the server, which supplies a single-page application to the client. That application suppresses the browser's typical behavior of making a request to the server for each URL. The SPA instead has logic within the program to allow the browser to "navigate" to new URLs, but without the request and re-render. The display for the new URL is typically already stored within the SPA, and the SPA requests any new data that is required for that new route, typically via JSON from an API, which is much faster than requesting and re-rendering an entire route.

1.  What does HTTP stand for?

HTTP is an initialism for HyperText Transfer Protocol.

1.  What does CRUD stand for?

*C*reate
*R*ead
*U*pdate
*D*elete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create  = `POST`
Read    = `GET`
Update  = `PUT`
Delete  = `DELETE`

1.  Mention three tools we can use to make AJAX requests

    * The new Fetch API using `fetch(URL)`.
    * The Axios package using `axios.get(URL)`.
    * The Postman tool, which is quite helpful in building and testing APIs.