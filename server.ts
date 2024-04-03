import express from "express";
import { pool } from "./src/db/connection";

const app = express();

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Hello World! Server time: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error executing query");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
