var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  const message = "Hello World";
  res.render("./index", { message: message });
});

app.listen(8080, () => console.log("listening on http://localhost:8080"));
