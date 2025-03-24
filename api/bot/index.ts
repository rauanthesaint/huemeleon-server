import { TOKEN } from "../config/index.js";
import TelegramBot from "node-telegram-bot-api";

const Bot = new TelegramBot(TOKEN, {
  polling: {
    autoStart: true,
    interval: 300,
  },
});

Bot.onText(/\/start/, (message) => {
  const { chat } = message;
  Bot.sendMessage(
    chat.id,
    "Hello, I'm Minerva - Telegram bot created to manage customer support service"
  );
});

export default Bot;
