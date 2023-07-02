import type IMessageHandler from "../interface/IMessageHandler"
import type ICommandManager from '../interface/ICommandManager'

import { type Message } from "discord.js"


class MessageHandler implements IMessageHandler {

  constructor(private readonly commandHandler: ICommandManager) {}

  isACommand (message: string): boolean {
    if (message[0] == '!') return true
    else return false
  }

  handle (message: Message) {
    if (message.author.username == 'RPG Master') return 
    if (!this.isACommand(message.content)) return
    if (message.content == '!d20') {
      this.commandHandler.roll(20)
    }
    if (message.content == '!d10') {
      this.commandHandler.roll(10)
    }
    if (message.content == '!d5') {
      this.commandHandler.roll(5)
    }
    if (message.content == '!d2') {
      this.commandHandler.roll(2)
    }
  }
}

export default MessageHandler