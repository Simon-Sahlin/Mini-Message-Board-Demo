const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.use(express.urlencoded({ extended: true }));


app.use("/new", formRouter);
app.use("/", indexRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`YIPPI!! Express app - listening on port ${PORT}`));