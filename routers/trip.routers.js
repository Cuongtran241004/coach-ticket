const express = require("express");
const tripRouter = express.Router();
const { createTrip, getAllTrip } = require("../controllers/trip.controllers");

tripRouter.get("/getList", getAllTrip);
tripRouter.post("/create", createTrip);

module.exports = { tripRouter };
