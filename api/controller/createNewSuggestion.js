import Bot from "../bot/index.js";
import { CHANNEL_ID } from "../config/index.js";

const suggestion = (user_id = "null", reference = "null", text) => {
  return `User ID: ${user_id}\nReference: ${reference}\nText: ${text}`;
};

export default async function createNewSuggestion(request, response) {
  try {
    const { user_id, reference, text } = request.body;

    await Bot.sendMessage(CHANNEL_ID, suggestion(user_id, reference, text), {
      parse_mode: "Markdown",
    });
    response.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending message: ", error.message);
    response.status(500).json({
      message: "Failed to send message",
    });
  }
}
