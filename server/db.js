// db.js — PostgreSQL connection pool
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host:     process.env.DB_HOST     || "localhost",
  port:     process.env.DB_PORT     || 5432,
  user:     process.env.DB_USER     || "postgres",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME     || "business_directory",
});

pool.connect((err, client, release) => {
  if (err) console.error("❌  DB connection failed:", err.message);
  else { console.log("✅  Connected to PostgreSQL."); release(); }
});

module.exports = pool;
