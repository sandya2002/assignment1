const port = process.env.PORT || 5001; // Change 5000 to 5001
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./models/index");
const sheetRoutes = require("./routes/sheetRoutes");
const socketIo = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/sheets", sheetRoutes);

const server = app.listen(5000, async () => {
  await connectDB();
  console.log("Server running on port 5000");
});

const io = socketIo(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("updateCell", (data) => {
    io.emit("updateCell", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});


const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});