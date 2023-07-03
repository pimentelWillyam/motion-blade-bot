import type IMessageHandler from "../interface/IMessageHandler"
import type ICommandManager from '../interface/ICommandManager'

import { type Message } from "discord.js"


class MessageHandler implements IMessageHandler {

  constructor(private readonly commandManager: ICommandManager) {}

  handle (message: Message):void {
    if (message.author.username == 'RPG Master') return 
    else if (!this.isACommand(message.content)) return   
    const treatedMessage =  this.treatMessage(message.content)
    if ( treatedMessage[0] == 'ajuda'){
      this.commandManager.help(message)
    }

    if (treatedMessage[0] == 'rolar' && treatedMessage.length == 2){
      this.commandManager.roll(message, parseInt(treatedMessage[1]) )
    }

  }

  isACommand (message: string): boolean {
    if (message[0] == '!') return true
    else return false
  }

  treatMessage (rawMessage: string) {
    const messageWithoutExclamation = rawMessage.slice(1,rawMessage.length!)
    return messageWithoutExclamation.split(' ')
  }
}

export default MessageHandler