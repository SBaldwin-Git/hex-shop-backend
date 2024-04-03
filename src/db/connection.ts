//
//
// USE THIS npx tsx server.ts
//
//
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const connectionString = process.env.DB_CONNECTION_STRING;
const Pool = pg.Pool;

if (!connectionString) {
  throw new Error("DB_CONNECTION_STRING is not set in .env file");
}

export const pool = new Pool({
  connectionString,
});

await pool
  .connect()
  .then(() => console.log("Connected to the database successfully"))
  .catch((err) => console.error("Unable to connect to the database:", err));
