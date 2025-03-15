const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express(); // ✅ Ensure 'app' is properly initialized

const cors = require("cors");

app.use(cors({
    origin: "https://akhilesh-portfolio-web.onrender.com",
    methods: "GET,POST",
    credentials: true
}));


// ✅ MySQL Connection Setup
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root", // 🔹 Replace with your MySQL password
    database: "contactDB",
});

// ✅ Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("❌ MySQL connection failed: ", err);
        return;
    }
    console.log("✅ MySQL connected successfully!");
});

// ✅ API Route to Handle Contact Form Submissions
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error("❌ Error inserting message:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(201).json({ success: "Message saved successfully!" });
    });
});

// ✅ Fetch Messages for Admin Dashboard
app.get("/messages", (req, res) => {
    db.query("SELECT * FROM messages", (err, results) => {
        if (err) {
            console.error("❌ Error fetching messages:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json(results);
    });
});

// ✅ Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
