const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('bookings', {
    id:{
        type:  DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    dayStay: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    clientId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {
        timestamps: false,
    }
    );
};