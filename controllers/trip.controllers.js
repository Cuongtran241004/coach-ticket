const { Trip, Station } = require("../models");

const createTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price } = req.body;

  const newTrip = await Trip.create({
    fromStation,
    toStation,
    startTime,
    price,
  });

  res.status(201).send(newTrip);
};

const getAllTrip = async (req, res) => {
  const tripList = await Trip.findAll({
    // Dùng include để lấy thông tin từ bảng Station, include là 1 mảng, phần tử là object
    include: [
      {
        model: Station,
        as: "from",
      },
      {
        model: Station,
        as: "to",
      },
    ],
  });
  res.status(200).send(tripList);
};
module.exports = { createTrip, getAllTrip };
