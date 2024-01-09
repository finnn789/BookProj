const {Sequelize} = require('sequelize')

const db = new Sequelize ('pre_we_book','root','a3eN3Va%6ki0',{
    host:'localhost',
    dialect:'mysql',
})

async ()=>{
    try{
        await db.authenticate()
        console.log("Database Connect ")
        await db.sync({alter:true})
    }catch(error){
        console.log("Unable to Coonect ",error)
    }
}
module.exports = db;
