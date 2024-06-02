const express = require("express");
const rootRouter = express.Router();
const { stationRouter } = require("./station.routers");
const { userRouter } = require("./user.routers");
const { tripRouter } = require("./trip.routers");

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouter);
module.exports = {
  rootRouter,
};
