const mongoose = require("mongoose");
 const CONNECTION_STRING = "mongodb+srv://ashokja9658:ashok9957@cluster0.pun52t1.mongodb.net/mycontacts-backends?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(CONNECTION_STRING);
    console.log(
      "Database connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;