import express from "express";
import { CHANNEL_ID, PORT, TOKEN } from "./config/index.js";
import TelegramBot from "node-telegram-bot-api";

const BOT_CONSTRUCTOR_OPTIONS = {
  polling: {
    autoStart: true,
    interval: 300,
  },
};

const app = express();
const bot = new TelegramBot(TOKEN, BOT_CONSTRUCTOR_OPTIONS);

app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    message: "HI",
  });
});

app.post("/suggest", async (request, response) => {
  const { data } = request.body;
  try {
    await bot.sendMessage(CHANNEL_ID, data);
    response.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending message: ", error.message);
    response.status(500).json({
      message: "Failed to send message",
    });
  }
});

app.listen(PORT, () =>
  console.log("\x1b[32m%s\x1b[0m", `Server is ready on port ${PORT}`)
);
process.on("SIGINT", () => {
  console.log("Shutting down...");
  bot.stopPolling();
  process.exit();
});
