import type IMessageHandler from "../interface/IMessageHandler"
import type ICommandManager from '../interface/ICommandManager'

import { type Message } from "discord.js"
import type Profession from "../type/Profession"

class MessageHandler implements IMessageHandler {

  constructor(private readonly commandManager: ICommandManager) {}

  handle (message: Message):void {
    if (message.author.username == 'RPG Master') return 
    else if (!this.isACommand(message.content)) return   
    const treatedMessage =  this.treatMessage(message.content)
    if ( treatedMessage[0] == 'ajuda' && treatedMessage.length == 1){
      this.commandManager.help(message)
    }
    else if ( treatedMessage[0] == 'classes' && treatedMessage.length == 1) {
      this.commandManager.classes(message)
    }
    else if (treatedMessage[0] == 'rolar' && treatedMessage.length == 2){
      this.commandManager.roll(message, parseInt(treatedMessage[1]) )
    }
    else if (treatedMessage[0] == 'criar' && treatedMessage[1] == 'servo' && treatedMessage.length == 4){
      this.commandManager.createServant(message, treatedMessage[2], treatedMessage[3] as Profession)
    }
    else if (treatedMessage[0] == 'criar' && treatedMessage[1] == 'npc' && treatedMessage.length == 3){
      this.commandManager.createNpc(message, treatedMessage[2])
    }
    else if (treatedMessage[0] == 'atributos' && treatedMessage.length == 2){
      this.commandManager.getServantAttributes(message, treatedMessage[1])
    }
    else if (treatedMessage[0] == 'aplicar' && treatedMessage[1] == 'dano'  && treatedMessage.length == 4){
      this.commandManager.applyDamageToServant(message, treatedMessage[2], parseInt(treatedMessage[3]))
    }
    else if (treatedMessage[0] == 'curar'&& treatedMessage.length == 4){
      this.commandManager.healServant(message, treatedMessage[1], treatedMessage[2], parseInt(treatedMessage[3]))
    }
    else if (treatedMessage[0] === 'agilidade' && treatedMessage.length == 2){
      this.commandManager.rollServantAgility(message, treatedMessage[1])
    }
    else if (treatedMessage[0] === 'tecnica' && treatedMessage.length == 2){
      this.commandManager.rollServantTechnique(message, treatedMessage[1])
    }
    else if (treatedMessage[0] === 'força' && treatedMessage.length == 2){
      this.commandManager.rollServantStrength(message, treatedMessage[1])
    }
    else if (treatedMessage[0] === 'fortitude' && treatedMessage.length == 2){
      this.commandManager.rollServantFortitude(message, treatedMessage[1])
    }
    else if (treatedMessage[1] === 'ataca' && treatedMessage.length == 3){
      this.commandManager.rollServantAttack(message, treatedMessage[0], treatedMessage[2])
    }
    else if (treatedMessage[0] === 'guarda' && treatedMessage.length == 2){
      this.commandManager.rollServantGuard(message, treatedMessage[1])
    }
    else if (treatedMessage[0] === 'armar' && treatedMessage.length == 2){
      this.commandManager.armServant(message, treatedMessage[1])
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