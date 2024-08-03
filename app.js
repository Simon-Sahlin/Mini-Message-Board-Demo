const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.use("/new", formRouter);
app.use("/", indexRouter);

const PORT = 6969;
app.listen(PORT, ()=> console.log(`YIPPI!! Express app - listening on port ${PORT}`));