const mongoose = require("mongoose");

const servicesSchema = mongoose.Schema(
  {    
    category: {
      type: String,
      required: [true, "Please add the category name"],
    },   
    subCategory: {
      type: String,
      required: [true, "Please add the sub-category name"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Services", servicesSchema);
