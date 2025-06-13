const { fetchBook, addBook, deleteBook, updateBook } = require("../controller/bookController")

const router = require("express").Router()

router.route("/books").get(fetchBook).post(addBook)
router.route("/books/:id").delete(deleteBook).patch(updateBook)

module.exports = router