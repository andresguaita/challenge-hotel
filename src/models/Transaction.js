const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("transaction", {
    id:{
      type:  DataTypes.UUID,
      allowNull: false,
      primaryKey: true
  },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    paymentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    paymentMethod:{
      type: DataTypes.STRING,
      allowNull : true
    }
  });
};