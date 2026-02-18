// File System (fs) Core Module Example

// Old way (CommonJS) — used in older Node.js projects
// const fs = require("fs");

// New way (ES Module) — used when "type": "module" in package.json
import fs from "fs";   // Import File System module


// writeFileSync() → Creates a file and writes data into it
// If file does NOT exist → it will create the file
// If file exists → it will overwrite the content

fs.writeFileSync("new.text", "new file created..");


// readFileSync() → Reads data from a file
// "utf-8" converts file content from buffer to readable text

const data = fs.readFileSync("new.text", "utf-8");


// Print the data on console
console.log("Data:", data);
