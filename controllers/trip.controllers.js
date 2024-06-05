const { where } = require("sequelize");
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

const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { fromStation, toStation, startTime, price } = req.body;
  const newTrip = { fromStation, toStation, startTime, price };
  const updatedTrip = await Trip.update(newTrip, {
    where: {
      id,
    },
  });

  if (updatedTrip) {
    res.status(200).send(newTrip);
  } else {
    res.status(400).send(`Not found Trip with id ${id}`);
  }
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  const deleteTrip = await Trip.destroy({
    where: {
      id,
    },
  });
  if (deleteTrip) {
    res.status(200).send(`Delete successfully Trip: ${id}`);
  } else {
    res.status(400).send(`Not found Trip with id ${id}`);
  }
};

module.exports = { createTrip, getAllTrip, updateTrip, deleteTrip };
