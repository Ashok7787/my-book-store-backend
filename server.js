const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(
    cors(
      {
      origin:"http://localhost:3000",
      methods: ["GET, POST, PUT, DELETE"],
      credentials: true
    }
    )
  );
app.use(express.json());
app.use("/api/contacts", require("./routes/contact/contactRoutes"));
app.use("/api/users", require("./routes/user/userRoutes"));
app.use("/api/services", require("./routes/services/servicesRoutes"));
app.use(errorHandler);

app.listen(port,() => {
    console.log(`server running on port ${port}`);
}) ;