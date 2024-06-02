// callback function nhận vào 2 tham số là error và value
// nếu bị lỗi thì nó return new...
// không bị lỗi thì xử lý value
function callBackFunction(errors, value) {
  if (errors) {
    return new Error("Error server");
  }
  console.log(value);
  return value;
}

callBackFunction(null, "public");
