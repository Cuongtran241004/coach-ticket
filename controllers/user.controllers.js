const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, sequelize } = require("../models");
const { where } = require("sequelize");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    // Tạo avatar mặc định
    const avatarUrl = gravatar.url(email);
    // Tạo ra một chuỗi ngẫu nhiên - tối đa n ký tự
    const salt = bcrypt.genSaltSync(10);
    // Mã hóa chuỗi ngẫu nhiên vừa tạo ra + password
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
      avatar: avatarUrl,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // B1: Tìm user dựa trên email
  const user = await User.findOne({
    where: {
      email,
    },
  });

  // B2: Kiểm tra password
  // Output: true / false
  if (user) {
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      const token = jwt.sign(
        { email: user.email, type: user.type },
        "jwt-secret-key-seft-define",
        { expiresIn: 60 * 60 }
      );
      res.status(200).send({
        message: "Login successfully!",
        token: token,
      });
    } else {
      res.status(500).send({
        message: "Password is incorrect!",
      });
    }
  } else {
    res.status(500).send({
      message: "User does not exist!",
    });
  }
};

const uploadAvatar = async (req, res) => {
  const { user, file } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  const userfound = await User.findOne({
    where: {
      email: user.email,
    },
  });
  userfound.avatar = urlImage;
  await userfound.save();
  res.send(userfound);
};

const getAllTrip = async (req, res) => {
  try {
    const [result, metadata] = await sequelize.query(`
  select users.name as username, fromSta.name as fromStation, toSta.name as toStation from users
  inner join tickets on users.id = tickets.user_id
  inner join trips on trips.id = tickets.trip_id
  inner join stations as fromSta on fromSta.id = trips.fromStation
  inner join stations as toSta on toSta.id = trips.toStation;
    `);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = {
  register,
  login,
  uploadAvatar,
  getAllTrip,
};
