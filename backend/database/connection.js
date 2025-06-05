// Database connection code or logics

const {Sequelize, DataTypes} = require("sequelize");

// const sequelize = require("sequelize");
// const Sequelize = sequelize.Sequelize;   long from of above code
// const DataTypes = sequelize.DataTypes;

// import book model
// const bookModel = require("./models/book.model")

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

db.books = require("./models/book.model")(sequelize,DataTypes);

// This is migrate code

sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate successfull");
    
})

module.exports = db;