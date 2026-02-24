// Import express framework
// Express makes server creation easier than http module
import express from "express";

// Create express application
const app = express();


// ---------------- HOME ROUTE ----------------

// When user visits: http://localhost:5000/
app.get("/", (req, res) => {

  // res.json() sends response in JSON format
  // Express automatically sets content-type: application/json
  res.json("Hello from Server.......!");
})


// ---------------- ABOUT ROUTE ----------------

// When user visits: http://localhost:5000/about
app.get("/about", (req, res) => {

    // Send about page response
    res.json("This is About Page......!")
})


// Port number
const port = 5000;


// Start server
app.listen(port, () => {

    // Message shown in terminal
    console.log("Server Running from Port", port)

})