import type IMessageHandler from "../interface/IMessageHandler"
import type ICommandManager from '../interface/ICommandManager'

import { type Message } from "discord.js"


class MessageHandler implements IMessageHandler {

  constructor(private readonly commandManager: ICommandManager) {}

  isACommand (message: string): boolean {
    if (message[0] == '!') return true
    else return false
  }

  handle (message: Message):void {
    if (message.author.username == 'RPG Master') return 
    else if (!this.isACommand(message.content)) return
    else if (message.content == '!d20') {
      message.reply(this.commandManager.rollDice(20).toString())
    }
    else if (message.content == '!d10') {
      message.reply(this.commandManager.rollDice(10).toString())

    }
    else if (message.content == '!d5') {
      message.reply(this.commandManager.rollDice(5).toString())

    }
    else if (message.content == '!d2') {
      message.reply(this.commandManager.rollDice(2).toString())

    }
  }
}

export default MessageHandler