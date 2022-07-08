const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    documentNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    documentType:{
      type: DataTypes.STRING,
      allowNull : true
    },
    email:{
        type: DataTypes.STRING,
        allowNull : true
      },
    password:{
        type: DataTypes.STRING,
        allowNull : true
      }
  });
};