const express = require("express");
const { Station } = require("../models");
const {
  getAllStation,
  createStation,
  getDetailStation,
  updateStation,
  deleteStation,
} = require("../controllers/station.controllers");
const { checkExist } = require("../middlewares/validations/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const stationRouter = express.Router();

stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.post("/", authenticate, authorize(["admin"]), createStation);
stationRouter.put("/:id", checkExist(Station), updateStation);
stationRouter.delete("/:id", authenticate, checkExist(Station), deleteStation);

module.exports = {
  stationRouter,
};
