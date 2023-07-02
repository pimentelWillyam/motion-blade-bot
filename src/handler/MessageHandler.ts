import type IMessageHandler from "../interface/IMessageHandler"

import { type Message } from "discord.js"


class MessageHandler implements IMessageHandler {
  isACommand (message: string): boolean {
    if (message[0] == '!') return true
    else return false
  }

  handle (message: Message) {
    if (message.author.username == 'RPG Master') return 
    if (!this.isACommand(message.content)) return
  }
}

export default MessageHandler