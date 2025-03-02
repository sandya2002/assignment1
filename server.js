const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const dataEntryRoutes = require("./routes/dataEntryRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/data-entry", dataEntryRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
