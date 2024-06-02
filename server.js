const express = require("express");
const path = require("path");
const { sequelize } = require("./models/");
const { log } = require("console");
const { rootRouter } = require("./routers/index");
const app = express();
const PORT = 3000;
// Cài đặt ứng dụng kiểu json
app.use(express.json());

// Cài static file
const publicPathDirectory = path.join(__dirname, "./public");
// dùng trong filepath của img
app.use("/public", express.static(publicPathDirectory));

// Dùng router
app.use("/api/v1", rootRouter);

// Lắng nghe sự kiện kết nối
app.listen(PORT, async () => {
  console.log(`App is listening at http://localhost:${PORT}`);

  try {
    await sequelize.authenticate();
    console.log("Successfully!");
  } catch (error) {
    console.log("Error");
  }
});
