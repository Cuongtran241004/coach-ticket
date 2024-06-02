const { where } = require("sequelize");
const { Station } = require("../models");
const { Op } = require("sequelize");

const getAllStation = async (req, res) => {
  const { name } = req.query;
  let stationList;
  try {
    if (name) {
      stationList = await Station.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
    } else {
      stationList = await Station.findAll();
    }
    res.status(200).send(stationList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailStation = async (req, res) => {
  const { id } = req.params;

  try {
    const detailStation = await Station.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(detailStation);
  } catch (error) {
    res.status(500).send(error);
  }
};
const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const newStation = await Station.create({ name, address, province });
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  try {
    const updateStation = await Station.findOne({
      where: {
        id,
      },
    });
    updateStation.name = name;
    updateStation.address = address;
    updateStation.province = province;

    // save update Station
    await updateStation.save();
    res.status(200).send(updateStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;

  try {
    await Station.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send("Xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
};
