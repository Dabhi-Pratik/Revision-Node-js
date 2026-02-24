// Import built-in http module of Node.js
// This module helps to create web server without Express
import http from "http"


// Create server
// This function runs every time a request comes from browser
const server = http.createServer((req, res) => {

    // Send response status code + headers
    // 200 = OK (request successful)
    // content-type tells browser what type of data we send
    res.writeHead(200, { "content-type": "text/html" })

    // Send response body (HTML content)
    // res.end() finishes the response
    res.end("<h1>Hello From Server again</h1>")
})


// Port number where server will run
const port = 5000;


// Start server and listen on given port
server.listen(port, () => {

    // Message shown in terminal when server starts
    console.log("Server running on port", port);

})