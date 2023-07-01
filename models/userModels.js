const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please add the contact name"],
         },
    email: {
        type: String,
        required: [true, "Please add the contact email address"],
        unique: [true,"Email address alredy taken"],
    },
    password: {
        type: String,
        required: [true, "Please add the user password"],
    },
},{
timestamps: true,}
);
module.exports= mongoose.model("User",userSchema);