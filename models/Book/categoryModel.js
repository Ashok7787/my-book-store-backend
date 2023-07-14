const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the book name"],
  },
  authorName: {
    type: String,
    required: [true, "Please add the book Author name"],
  },
  price: {
    type: String,
    required: [true, "Please add the book price"],
  },
  description: {
    type: String,
    required: [true, "Please add the book description"],
  },
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NewBook",
    },
  ],
});

const Books = mongoose.model("NewBook", bookSchema);
const Category = mongoose.model("Category", categorySchema);

module.exports = { Books, Category };
