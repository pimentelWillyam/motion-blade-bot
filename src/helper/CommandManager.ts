import type ICommandManager from '../interface/ICommandManager'
import type IRandomNumberGenerator from '../interface/IRandomNumberGenerator'
import Servant from '../model/Servant';
import type IServantManager from '../interface/IServantManager'
import { type Message } from 'discord.js';
import type Profession from '../type/Profession';

class CommandManager implements ICommandManager {
  constructor(private readonly randomNumberGenerator: IRandomNumberGenerator, private readonly servantManager: IServantManager) {}

  help(message: Message<boolean>): void {
    const guideMessage = `
    Olá, sou o Bot responsável por administrar as operações relacionadas ao RPG. Atualmente, a lista de funcionalidades está em expansão, as funcionalidades que o bot possui até agora são:\n
    1- Ajuda
      A função help é responsável por informar sobre os comandos existentes e como aplica-los.
      Ela é usada no formato: !ajuda
 
    2- Classes
      A função rolar é responsável por rolar um dado de n lados
      Ela é usada no formato: !rolar (nLados)
"
      
    3- Rolar
      A função rolar é responsável por rolar um dado de n lados
      Ela é usada no formato: !rolar (nLados)

    4- Criar Servo
      A função criar é responsável por criar um servo.
      Ela é usada no formato: !criar servo (nomeServo) (classeServo)

    5-Pega Atributos
      A função pega atributos é responsável por buscar atributos do servo no banco de dados.
      Ela é usada no formato: !pega atributos (nomeServo)
    `

    message.reply(guideMessage)  
  }

  roll(message: Message, diceSides: number): void {
    message.reply(this.randomNumberGenerator.generate(1, diceSides).toString())
  }

  createBattle(message: Message<boolean>, map: [number, number], participants: Servant[]): void {
    console.log('this function is incomplete')
  }

  createMaster(message: Message<boolean>, name: string, servantList: Servant[]): void {
    console.log('this function is incomplete')
  }

  createServant(message: Message<boolean>, name: string, profession: Profession): void {
    const servant = this.servantManager.createServant(message.author.username, name, profession)
    console.log(`

    `)
    message.reply(`
    Usuário criado com sucesso
    
    
    Dados do servo:
    nome: ${servant.name}
    agilidade: ${servant.attributes.agility}
    tecnica: ${servant.attributes.technique}
    força: ${servant.attributes.strength}
    fortitude: ${servant.attributes.fortitude}
    `)
  }

  getServantAttributes(message: Message<boolean>, name: string): void {
    const servantAttributes = this.servantManager.getServantAttributes(name)
    const servantAttributesMessage = `
    Os atributos do servo ${name} são:

    
    agilidade: ${servantAttributes.agility}
    tecnica: ${servantAttributes.technique}
    força: ${servantAttributes.strength}
    fortitude: ${servantAttributes.fortitude}
    `
    message.reply(servantAttributesMessage)
  }


  applyDamageToServant(message: Message<boolean>, name: string, damage: number): void {
    this.servantManager.applyDamageToServant(name, damage)
    message.reply(`O servo ${name} sofreu um dano de ${damage}`)
  }

  
}

export default CommandManager