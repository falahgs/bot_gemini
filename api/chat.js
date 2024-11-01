const express = require("express");
const { handleChatRequest } = require("../controllers/chatController");

const app = express();
app.use(express.json());

app.post("/api/chat", handleChatRequest);

module.exports = app;
