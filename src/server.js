//Modules
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;

//Router
const routes = require("./routes/router");

//Middleware to parse body
app.use(express.json());

//Setting dotenv for DB_URL (local machine)
// require("dotenv").config();

//Connect to mongoose
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
app.use(routes);
app.use("/", function (req, res) {
  res.send("ToDo List API - Christian Can");
});
app.use((req, res) => {
  res.status(404).json({
    message: "Ups!!! Resource not found.",
  });
});

app.listen(PORT, () =>
  console.log(`My server is listening at http://localhost:${PORT}`)
);
