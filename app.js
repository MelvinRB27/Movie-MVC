const express = require("express");
const path = require('path');
const app = express();
const expressHbs = require("express-handlebars");

const adminRouter = require("./routes/admin");
const moviesRouter = require("./routes/movies");

const errorController = require("./controllers/ErrorController");

app.engine("hbs",expressHbs({layoutsDir:'views/layouts/',defaultLayout: 'main-layout',extname:'hbs'}));
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",adminRouter);
app.use(moviesRouter);

app.use("/", errorController.Get404);

app.listen(2718);