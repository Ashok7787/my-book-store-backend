const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://bookshop-livid.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(
    cors(
      {
      origin:["http://localhost:3000", "https://bookshop-livid.vercel.app/" ],
      methods: ["GET, POST, PUT, DELETE"],
      credentials: true
    }
    )
  );
app.use(express.json());
app.use("/api/contacts", require("./routes/contact/contactRoutes"));
app.use("/api/users", require("./routes/user/userRoutes"));
app.use("/api/services", require("./routes/services/servicesRoutes"));
app.use("/api/books", require("./routes/book/bookRoutes"));
app.use(errorHandler);
app.get("/",(req,res)=>(
  res.send("api working")
))
app.listen(port,() => {
    console.log(`server running on port ${port}`);
}) ;