const express = require("express");
const rootRouter = express.Router();
const { stationRouter } = require("./station.routers");
const { userRouter } = require("./user.routers");
const { tripRouter } = require("./trip.routers");
const { fingerPrintRouter } = require("./test-finger-print");

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouter);
rootRouter.use("/test-finger-print", fingerPrintRouter);

module.exports = {
  rootRouter,
};
