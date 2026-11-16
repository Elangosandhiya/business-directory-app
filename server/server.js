// server.js — Express entry point (Mock Mode — no DB required)
const express = require("express");
const cors    = require("cors");
require("dotenv").config();

const businessRoutes = require("./routes/businessRoutes");
const errorHandler   = require("./middleware/errorHandler");

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/businesses", businessRoutes);

// Must be AFTER routes — catches all errors forwarded by next(error)
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT} [MOCK MODE — no DB needed]`)
);
