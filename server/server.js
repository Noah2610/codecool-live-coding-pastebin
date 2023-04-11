require("dotenv").config({
    path: "../.env",
});

const fs = require("fs");
const express = require("express");
const uuid = require("uuid");
const cors = require("cors");

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

if (!HOST || !PORT) {
    console.error(
        "[Error] Please set the environment variables in `.env`, see `example.env` for reference",
    );
    process.exit(1);
}

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

function getPost(id) {
    const filePath = `posts/${id}.txt`;
    try {
        return fs.readFileSync(filePath, "utf8");
    } catch (err) {
        return null;
    }
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

server.get("/post/:id", (req, res) => {
    const id = req.params.id;
    const body = getPost(id);

    if (body === null) {
        res.status(404).send(`Post with ID "${id}" not found`);
        return;
    }

    res.send(body);
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running!\nhttp://${HOST}:${PORT}/`);
});
