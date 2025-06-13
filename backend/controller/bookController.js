const { where } = require("sequelize");
const { books } = require("../database/connection");

const fetchBook = async (req,res)=>{  // read opertaion
    // logic to fetch from database
    const datas = await books.findAll(); // this line is simlilar to select * from books
    res.json({
        message : "books fetch successfully",
        datas
    })
}

const addBook = async (req,res)=>{ // create opertaion
    // logic to add books in database goes here ....
    console.log(req.body);
    
    const{bookName,bookPrice, bookAuthor, bookGenre } = req.body
    
    await books.create({
        bookName,
        bookPrice,
        bookAuthor, 
        bookGenre 
    })
        
    res.json({
        message : "Books added successfully",
    })
}


const deleteBook = async (req, res) => { // delete operation
    // logic to delete books from database goes here ....
    const id = req.params.id;

    try {
        await books.destroy({
            where: { id }
        });

        res.json({
            message: "Book deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Failed to delete book" });
    }
};

const updateBook = async (req,res)=>{ // update operation
    // logic to update books goes here ...
    const id = req.params.id;

    const {bookName, bookAuthor, bookGenre, bookPrice} = req.body
    await books.update(
        {
            bookAuthor,
            bookName,
            bookPrice,
            bookGenre
        },
        {
            where:{id}
        }
    )
    res.json({
        message : "Books updated successfully"
    })
}

module.exports = {fetchBook, addBook, deleteBook, updateBook}