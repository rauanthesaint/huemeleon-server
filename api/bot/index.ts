import { TOKEN } from "../config/index.js";
import TelegramBot from "node-telegram-bot-api";

const Bot = new TelegramBot(TOKEN, {
  polling: {
    autoStart: true,
    interval: 300,
  },
});

// Bot.onText(/\/clear/, (message) => {
//   Bot.;
// });

export default Bot;
