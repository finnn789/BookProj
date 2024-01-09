const {Sequelize} = require('sequelize')

const db = new Sequelize ('pre_we_book','root','',{
    host:'localhost',
    dialect:'mysql',
})

module.exports = db;
