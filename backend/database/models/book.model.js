// Table that contain coloum of bookName, bookPrice, bookAuthor and so on ...

const bookModel = (sequelize, DataTypes) => {
    const Book = sequelize.define("Book",{
        bookName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bookPrice : {
            type : DataTypes.FLOAT,
            allowNull : false
        },
        bookAuthor : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bookGenre : {
            type : DataTypes.STRING,
            allowNull : false
        },
    })
    return Book
}

module.exports = bookModel