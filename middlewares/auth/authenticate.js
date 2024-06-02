const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  // user gửi token bằng request
  const token = req.header("token");
  // dùng jwt để xác thực xem token này có hợp lệ hay ko
  // truyền vào token và Secret-key
  try {
    const decode = jwt.verify(token, "jwt-secret-key-seft-define");
    console.log("Decode: ", decode);
    if (decode) {
      // muốn biết user nào đã create station thì dùng req.user = decode
      req.user = decode;
      return next();
    } else {
      res.status(401).send("Login before creaye a station");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  authenticate,
};
