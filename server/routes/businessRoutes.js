// routes/businessRoutes.js
const express = require("express");
const router  = express.Router();
const { getBusinessById, getAllBusinesses } = require("../controllers/businessController");

router.get("/",    getAllBusinesses);
router.get("/:id", getBusinessById);

module.exports = router;
