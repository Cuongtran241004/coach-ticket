const express = require("express");
const tripRouter = express.Router();
const {
  createTrip,
  getAllTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/trip.controllers");

tripRouter.get("/", getAllTrip);
tripRouter.post("/create", createTrip);
tripRouter.post("/:id", updateTrip);
tripRouter.delete("/:id", deleteTrip);
module.exports = { tripRouter };
