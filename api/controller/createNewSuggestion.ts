import { CallbackQuery } from "node-telegram-bot-api";
import Bot from "../bot/index.js";
import { CHANNEL_ID } from "../config/index.js";
import { escapeMarkdown } from "../lib/utils.js";
import { Response, Request } from "express";

const message = (
  user_id: string = "admin",
  reference: string = "null",
  text: string
) => {
  return escapeMarkdown(
    `User ID: ${user_id}\nReference: ${reference}\nText: ${text}\n\#notResolved`
  );
};

export default async function createNewSuggestion(
  request: Request,
  response: Response
) {
  try {
    const { user_id, reference, text } = request.body;
    await Bot.sendMessage(CHANNEL_ID, message(user_id, reference, text), {
      parse_mode: "MarkdownV2",
      reply_markup: {
        inline_keyboard: [[{ text: "Resolved", callback_data: "resolved" }]],
      },
    });
    response.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error: any) {
    console.error("Error sending message: ", error.message);
    response.status(500).json({
      message: "Failed to send message",
    });
  }
}

const handleResolved = (query: CallbackQuery) => {
  const message = query.message;
  if (!message) {
    return;
  }
  const { message_id, chat, text } = message;
  if (!text) {
    return;
  }
  Bot.editMessageText(`~${escapeMarkdown(text)}~`, {
    message_id,
    chat_id: chat.id,
    parse_mode: "MarkdownV2",
  });
};

Bot.on("callback_query", handleResolved);
