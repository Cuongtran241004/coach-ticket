const express = require("express");
const { uploadImage } = require("../middlewares/upload/upload-image");
const { authenticate } = require("../middlewares/auth/authenticate");
const {
  register,
  login,
  uploadAvatar,
  getAllTrip,
} = require("../controllers/user.controllers");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post(
  "/upload-avatar",
  authenticate,
  uploadImage("user"),
  uploadAvatar
);
userRouter.get("/all-trip", getAllTrip);

module.exports = {
  userRouter,
};
