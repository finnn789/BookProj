const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


const User = sequelize.define('User', {
 username: {
    type: DataTypes.STRING,
    allowNull: false,
 },
 email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
 },
 password: {
    type: DataTypes.STRING,
    allowNull: false,
 },
},{
   tableName: 'User'
 });

module.exports = User

