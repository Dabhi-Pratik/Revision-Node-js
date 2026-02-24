// Import built-in http module
// Used to create web server in Node.js
import http from "http";


// Create server
// This function runs every time a request comes from browser
const server = http.createServer((req, res) => {

    // req.url gives the path after domain
    // Example: localhost:5000/about → req.url = "/about"

    // If user visits homepage
    if (req.url === "/") {

        // Send response for homepage
        res.end("This is Homepage...")

    }

    // If user visits /about page
    else if (req.url === "/about") {

        // Send response for about page
        res.end("This is about page");

    }

    // If user visits any other page
    else {

        // Send page not found message
        res.end("Page not Found....!")
    }
})


// Port number where server runs
const port = 5000;


// Start server
server.listen(port, (err) => {

    // If server start error occurs
    if (err) {

        console.log("Error....!")

    } else {

        // Message shown in terminal
        console.log("Server running on Port", port)

    }
})