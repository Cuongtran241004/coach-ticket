const authorize = (arrType) => (req, res, next) => {
  const { user } = req;

  // Tạo mảng để dễ mở rộng bài toán
  // sau này có thể là ["admin", "super_admin", ...]
  if (arrType.findIndex((u) => u === user.type) > -1) {
    next();
  } else {
    res.status(403).send("Login successfully but can not edit this function");
  }
};
module.exports = {
  authorize,
};
