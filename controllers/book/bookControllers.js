const asyncHandler = require("express-async-handler");
const Book = require("../../models/Book/bookModels");
//@desc Get all books
//@route GET /api/books
//@access private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

//@desc Create New books
//@route POST /api/books
//@access private
const createBook = asyncHandler(async (req, res) => {
  console.log("The request body : ", req.body);
  const { categotyName, name, authorName, price, discountPrice, description,image } =
    req.body;
  if (
    !categotyName ||
    !name ||
    !authorName ||
    !price ||
    !discountPrice ||
    !description
  ) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const books = await Book.create({
    categotyName,
    name,
    authorName,
    price,
    discountPrice,
    description,image
  });
  res.status(201).json(books);
});

//@desc Get  books
//@route GET /api/books/:id
//@access private
const getBook = asyncHandler(async (req, res) => {
  const books = await Book.findById(req.params.id);
  if (!books) {
    res.status(404);
    throw new Error("Book not found");
  }
  res.status(200).json(books);
});

//@desc Update books
//@route PUT /api/books/:id
//@access private
const updateBook = asyncHandler(async (req, res) => {
  const books = await Book.findById(req.params.id);
  if (!books) {
    res.status(404);
    throw new Error("Book not found");
  }
 
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBook);
});

//@desc Delete books
//@route DELETE /api/books/:id
//@access private
const deleteBook = asyncHandler(async (req, res) => {
  const books = await Book.findById(req.params.id);
  if (!books) {
    res.status(404);
    throw new Error("Book not found");
  }
  if (books.categoty_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to delete other books");
  }
  await Book.deleteOne({ _id: req.params.id });
  res.status(200).json(books);
});

module.exports = {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
};
