// Database connection code or logics

const {Sequelize, DataTypes} = require("sequelize");

// const sequelize = require("sequelize");
// const Sequelize = sequelize.Sequelize;   long fron of above code
// const DataTypes = sequelize.DataTypes;

const sequelize = new Sequelize("postgresql://postgres.wweoturkrwkkzgutcgqd:fulstackdp123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres");

sequelize.authenticate()
.then(()=>{
    console.log(`Database authenticated`);
})
.catch((err)=>{
    console.log(err);
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;