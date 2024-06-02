const multer = require("multer");
const { Model } = require("sequelize");
const mkdir = require("mkdirp");

const uploadImage = (type) => {
  const made = mkdir.sync(`./public/images/${type}`);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}/`); // set up chỗ cần lưu file
      // './' không phải file user.router mà là multer được import trong file server.js nên từ server.js đi vào trong thư mục public phải dùng './'
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname); // đặt lại tên cho file
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const extensionImageList = [".png", ".jpg"];
      const extension = file.originalname.slice(-4).toLowerCase();
      const check = extensionImageList.includes(extension);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("Extension is invalid!"));
      }
    },
  });

  // return để bên file router có thể sử dụng middleware này
  return upload.single(type);
};

module.exports = {
  uploadImage,
};
