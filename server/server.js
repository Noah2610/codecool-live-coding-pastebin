const express = require("express");

const HOST = "0.0.0.0";
const PORT = 8090;

const server = express();

server.get("/", (req, res) => {
    res.send("Server is running!");
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running!\nhttp://${HOST}:${PORT}/`);
});
