import { TOKEN } from "../config/index.js";
import TelegramBot from "node-telegram-bot-api";

const Bot = new TelegramBot(TOKEN, {
  polling: {
    autoStart: true,
    interval: 300,
  },
});

process.on("SIGINT", () => {
  console.log("\x1b[36m%s\x1b[0m", "[server]: Server is stopped");
  Bot.stopPolling();
  process.exit();
});

export default Bot;
