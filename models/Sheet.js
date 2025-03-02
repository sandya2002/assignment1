const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Sheet = sequelize.define("Sheet", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = Sheet;
