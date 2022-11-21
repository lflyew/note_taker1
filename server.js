const express = require("express");
// const apiroutes = require("./routes/index.js");
const apiroutes = require("./routes/routesapi");
const htmlroutes = require("./routes/routeshtml.js");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use("/api", apiroutes);
app.use("", htmlroutes);

app.listen(PORT, () =>
console.log(`Express server listening on port ${PORT}!`)
);
