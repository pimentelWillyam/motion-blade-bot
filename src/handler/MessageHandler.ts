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
    else if ( treatedMessage[0] == 'classes'){
      this.commandManager.classes(message)
    }
    else if (treatedMessage[0] == 'rolar' && treatedMessage.length == 2){
      this.commandManager.roll(message, parseInt(treatedMessage[1]) )
    }
    else if (treatedMessage[0] == 'criar' && treatedMessage[1] == 'servo'){
      this.commandManager.createServant(message, treatedMessage[2], treatedMessage[3])
    }
    else if (treatedMessage[0] == 'pegar' && treatedMessage[1] == 'atributos'){
      this.commandManager.getServantAttributes(message, treatedMessage[2])
    }
    else if (treatedMessage[0] == 'aplicar' && treatedMessage[1] == 'dano'){
      this.commandManager.applyDamageToServant(message, treatedMessage[2], parseInt(treatedMessage[3]))
    }
    else{
      message.reply('Comando inexistente')
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