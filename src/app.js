const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipe.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to The Global Kitchen API"
  });
});

app.use("/recipes", recipeRoutes);

app.use(errorHandler);

module.exports = app;