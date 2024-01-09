import { Sequelize, DataTypes } from 'sequelize';
const sequelize = require('../config/database')['development'];

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
});

export default User

