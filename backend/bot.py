import os
from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Welcome to HiDE. The service is being set up. "
        "Never send passwords or Instagram session cookies to this bot."
    )

def main():
    token = os.getenv("9247608977:AAH-ytAtjzjQh407HlH1G6gHWaT3HKT930c")
    if not token:
        raise RuntimeError("Set TELEGRAM_BOT_TOKEN in your hosting environment.")

    app = Application.builder().token(token).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()

if __name__ == "__main__":
    main()
