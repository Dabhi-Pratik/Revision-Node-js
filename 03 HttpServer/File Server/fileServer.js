// Import built-in http module → used to create web server
import http from "http"

// Import fs module → used to read files from system
import fs from "fs"


// Create server
// This function runs every time browser sends request
const server = http.createServer((req, res) => {

    // Read index.html file from current folder
    fs.readFile("index.html", (err, data) => {

        // If file not found or error occurs
        if (err) {

            // Send status 404 → File Not Found
            res.writeHead(404);

            // Send error message
            res.end("File not Founded.......!")

        } else {

            // If file found successfully

            // Send status 200 → OK
            // content-type tells browser this is HTML
            res.writeHead(200, { "content-type": "text/html" })

            // Send HTML file data as response
            res.end(data)
        }
    })
})


// Port number where server runs
const port = 5001;


// Start server
server.listen(port, (err) => {

    // If server start error occurs
    if (err) {
        console.log(err)
    }
    else {
        // Message shown in terminal
        console.log("Server running on port", port)
    }
})