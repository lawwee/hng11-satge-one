const express = require("express");
const app = express();

const controller = require("./controller");

app.get("/api/hello", controller.user_location);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server started on: ", PORT)
})