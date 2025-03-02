// console.log("✅ sheetRoutes.js is being loaded...");
// const express = require("express");
// const router = express.Router();
// const Sheet = require("../models/Sheet");
// const controller = require("../controllers/sheetController");

// router.post("/save", async (req, res) => {
//   try {
//     const { name, data } = req.body;
//     const sheet = await Sheet.create({ name, data });
//     res.status(201).json(sheet);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/load/:id", async (req, res) => {
//   try {
//     const sheet = await Sheet.findByPk(req.params.id);
//     if (!sheet) return res.status(404).json({ message: "Sheet not found" });
//     res.json(sheet);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// console.log("✅ sheetRoutes.js is loaded");
// console.log("📌 Imported controller:", controller);
// const { saveSheet } = require('../controllers/sheetController');

// router.post('/save', saveSheet);

// const calculateFunctions = require('../controllers/sheetController');
// console.log("calculateFunctions:", calculateFunctions);
// router.post("/calculate", controller.calculateFunctions);
// module.exports = router;



const express = require("express");
const controller = require("../controllers/sheetController");
const { cleanData } = require('../controllers/dataQualityController');

console.log("📌 Manually checking import:");
console.log("Controller object:", controller);
console.log("calculateFunctions:", controller.calculateFunctions);

const router = express.Router();
router.post("/calculate", controller.calculateFunctions);
router.post('/clean', cleanData);
module.exports = router;
