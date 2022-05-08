var express = require("express");
var path = require("path");
var routes = require("./routes");
var app = express();


//Port
app.set("port", process.env.PORT || 3000);

//Views
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//Routes
app.use(routes);
app.use('/static',express.static('static'));

app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
});
