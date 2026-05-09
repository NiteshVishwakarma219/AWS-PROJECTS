const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("✅ Connected to RDS");
  }
});

app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      return res.send(err);
    }

    res.json(result);
  });
});

app.post("/add", (req, res) => {
  const { name, email } = req.body;

  db.query(
    "INSERT INTO students (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) {
        return res.send(err);
      }

      res.send("Student Added Successfully");
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  db.query(
    "DELETE FROM students WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.send(err);
      }

      res.send("Deleted Successfully");
    }
  );
});

app.listen(3000, "0.0.0.0", () => {
  console.log("🚀 Server running on port 3000");
});