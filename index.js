const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.get("/", (req, res) => {
  res.send(
    `REST Server listening on port ${port}!\nREST Server created by: Muhammad Ridwan Hakim`
  );
});

// GET all products
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// GET a single product by ID
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(results[0]);
  });
});

// POST a new product
app.post("/products", (req, res) => {
  const { id, name, stock, category, description } = req.body;
  const query =
    "INSERT INTO products (id, name, stock, category, description) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [id, name, stock, category, description], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Product created", id });
  });
});

// PUT to update an existing product by ID
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, stock, category, description } = req.body;
  const query =
    "UPDATE products SET name = ?, stock = ?, category = ?, description = ? WHERE id = ?";
  db.query(query, [name, stock, category, description, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product updated" });
  });
});

// PATCH to partially update an existing product by ID
app.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const fields = Object.keys(updates)
    .map((key) => `${key} = ?`)
    .join(", ");
  const values = Object.values(updates);

  const query = `UPDATE products SET ${fields} WHERE id = ?`;
  db.query(query, [...values, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product updated" });
  });
});

// DELETE a product by ID
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted" });
  });
});

app.listen(port, () => {
  console.log(`REST Server listening on port ${port}`);
});
