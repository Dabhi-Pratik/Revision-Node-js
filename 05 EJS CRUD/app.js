// Import express framework
import express from "express"

// Create express app
const app = express();


// Tell Express to use EJS as template engine
// EJS allows us to create dynamic HTML pages
app.set("view engine", "ejs")


// Middleware to read JSON data from requests
app.use(express.json())

// Middleware to read form data (important for POST forms)
app.use(express.urlencoded({ extended: true }))


// ---------------- STUDENT DATA ----------------

// Temporary array to store students (in-memory database)
let studentList = [
    {
        id: 1,
        name: "Pratik"
    },
    {
        id: 2,
        name: "Brij"
    }
]


// ---------------- HOME ROUTE ----------------

// Show student list page
app.get("/", (req, res) => {

    // Render index2.ejs and send studentList data
    res.render("index2", { studentList })
})


// ---------------- SHOW ADD FORM ----------------

// When user visits /add → show form page
app.get("/add", (req, res) => {

    res.render("add");
})


// ---------------- ADD STUDENT ----------------

// When form is submitted (POST request)
app.post("/add", (req, res) => {

    // Get name from form input
    const { name } = req.body

    // Create new student object
    const newStudent = {

        // Unique ID using current time
        id: new Date().getTime(),

        name
    }

    // Add new student to array
    studentList.push(newStudent);

    // Redirect back to homepage to show updated list
    res.redirect("/")
})


// ---------------- START SERVER ----------------

const port = 5000;

app.listen(port, () => {

    console.log("Server running on port ", port)
})