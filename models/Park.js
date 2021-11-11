const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Park extends Model { }

Park.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'park'
    }
);

module.exports = Park;