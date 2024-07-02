const express = require("express");
const app = express();

const route = require("./route");

app.use("/api", route);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server started on: ", PORT)
})