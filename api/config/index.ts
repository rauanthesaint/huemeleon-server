import ConfigService from "./config.js";

const config = new ConfigService();

const PORT = config.get("PORT") || 5000;
const TOKEN = config.get("TOKEN");
const CHANNEL_ID = config.get("CHANNEL_ID");
const NODE_DEV = config.get("NODE_DEV");

export { PORT, TOKEN, CHANNEL_ID, NODE_DEV };
