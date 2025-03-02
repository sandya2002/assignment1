const db = require("../db");

// Utility function to validate data
// const isValidDate = (dateString) => {
//   return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
// };

// Controller to add data
exports.addData = (req, res) => {
  const { cell, value, type } = req.body;

  if (!cell || !value || !type) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Validation based on type
  if (type === "number" && isNaN(value)) {
    return res.status(400).json({ error: `${cell} requires a numeric value.` });
  }

  if (type === "date" && !isValidDate(value)) {
    return res.status(400).json({ error: `${cell} requires a valid date format (YYYY-MM-DD).` });
  }

  // Insert or update the data
  db.query(
    "INSERT INTO cells (cell, value, type) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE value = ?, type = ?",
    [cell, value, type, value, type],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      res.json({
        message: `Data successfully added to ${cell}`,
        cell,
        value,
        type,
      });
    }
  );
};
