const fs = require("fs");
const express = require("express");
const uuid = require("uuid");
const cors = require("cors");

const HOST = "0.0.0.0";
const PORT = 8090;

const server = express();

server.use(express.text());
server.use(
    cors({
        origin: "http://localhost:8080",
    }),
);

function generatePostId() {
    return uuid.v4();
}

function savePost(id, body) {
    const filePath = `posts/${id}.txt`;
    fs.writeFileSync(filePath, body, "utf8");
}

server.get("/", (req, res) => {
    res.send("Server is running!");
});

server.post("/post", (req, res) => {
    const postBody = req.body;
    const postId = generatePostId();

    savePost(postId, postBody);

    res.send(postId);
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running!\nhttp://${HOST}:${PORT}/`);
});
