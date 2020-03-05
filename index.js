const mongoose = require("./models/Bdd");
const express = require("express");

const formidableMiddleWare = require("express-formidable");

const app = express();
app.use(formidableMiddleWare());

// Importation des routes !
const userRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
app.use(userRoutes, loginRoutes);

app.all("*", function(req, res) {
  res.send("Page not found");
});

app.listen(3000, () => {
  console.log("Server has started in port 3000");
});
