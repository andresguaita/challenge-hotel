

const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('rooms',{
        id:{
            type:  DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        description: {
            type:  DataTypes.STRING,
            allowNull: false
        },
        wifi: {
            type:  DataTypes.BOOLEAN,
            allowNull: false
        },
        tv: {
            type:  DataTypes.BOOLEAN,
            allowNull: false
        },
        airConditioning: {
            type:  DataTypes.BOOLEAN,
            allowNull: false
        },
        oceanView: {
            type:  DataTypes.BOOLEAN,
            allowNull: false
        },
        quantitytwinBed: {
            type:  DataTypes.INTEGER,
            allowNull: false
        },     
        quantityqueenBed: {
            type:  DataTypes.INTEGER,
            allowNull: false
        },
        costNight:{
            type: DataTypes.INTEGER,
            allowNull: false
        } 
    },{timestamps: false})
};