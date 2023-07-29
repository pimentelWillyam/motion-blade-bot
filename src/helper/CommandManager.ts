import type ICommandManager from '../interface/ICommandManager'
import type IRandomNumberGenerator from '../interface/IRandomNumberGenerator'
import IServant from '../interface/IServant';
import type IServantManager from '../interface/IServantManager'
import { type Message } from 'discord.js';

class CommandManager implements ICommandManager {
  constructor(private readonly randomNumberGenerator: IRandomNumberGenerator, private readonly servantManager: IServantManager) {}

  help(message: Message<boolean>): void {
    const guideMessage = `
    Olá, sou o Bot responsável por administrar as operações relacionadas ao RPG. Atualmente, a lista de funcionalidades está em expansão, as funcionalidades que o bot possui até agora são:\n
    1- Help
      A função help é responsável por informar sobre os comandos existentes e como aplica-los.
      Ela é usada no formato: !help
    
    2- Rolar
      A função rolar é responsável por rolar um dado de n lados
      Ela é usada no formato: !rolar (nLados)
    `

    message.reply(guideMessage)  
  }

  roll(message: Message, diceSides: number): void {
    message.reply(this.randomNumberGenerator.generate(1, diceSides).toString())
  }

  createBattle(message: Message<boolean>, map: [number, number], participants: IServant[]): void {
    console.log('this function is incomplete')
  }

  createMaster(message: Message<boolean>, name: string, servantList: IServant[]): void {
    console.log('this function is incomplete')
  }

  createServant(message: Message<boolean>, name: string, profession: string): void {
    this.servantManager.createServant(this.uuidGenerator.generate(), message.author.username, name, profession)
  }

  
}

export default CommandManager