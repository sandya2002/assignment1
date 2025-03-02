const express = require("express");
const { addData } = require("../controllers/dataEntryController");
const router = express.Router();

router.post("/add", addData); // API to add data

module.exports = router;