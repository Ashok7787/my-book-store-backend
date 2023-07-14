const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    categotyName: {
      type: String,
      required:  [true, "Please add the Category name"],
    },
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
    discountPrice: {
      type: String,
      //required: [true, "Please add the book price"],
    },
    description: {
      type: String,
      required: [true, "Please add the book description"],
    },
    image:{
      type:String,
      
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Book", bookSchema);
