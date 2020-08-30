var express = require("express"); // Express web server framework
var cookieParser = require("cookie-parser");
var exphbs = require("express-handlebars");

// express server
var app = express();
var PORT = process.env.PORT || 8080;



// handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// ROUTES
// ============================

var routes =require("./controllers/burgers_controller.js");
app.use("/", routes);
// app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });