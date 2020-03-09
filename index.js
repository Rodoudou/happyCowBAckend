const mongoose = require("./models/Bdd");
const express = require("express");
const cors = require("cors");
const formidableMiddleWare = require("express-formidable");

const app = express();
app.use(cors());
app.use(formidableMiddleWare());

// Importation des routes !
const userRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
app.use(userRoutes, loginRoutes);

app.all("*", function(req, res) {
  res.send("Page not found");
});

app.listen(8000, () => {
  console.log("Server has started in port 8000");
});
