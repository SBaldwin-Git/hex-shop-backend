import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
const connectionString = process.env.DB_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("DB_CONNECTION_STRING is not set in .env file");
}

export const pool = new Pool({
  connectionString,
});

await pool.connect();
