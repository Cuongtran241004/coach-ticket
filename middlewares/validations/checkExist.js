const { Station } = require("../../models");

const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const model = await Model.findOne({
      where: {
        id,
      },
    });

    if (model) {
      next();
    } else {
      res.status(404).send(`Not found the ${Model.name} with this ${id}!`);
    }
  };
};

module.exports = {
  checkExist,
};
