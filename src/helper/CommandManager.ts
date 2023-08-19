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
      A função ajuda é responsável por informar sobre os comandos existentes e como aplica-los.
      Ela é usada no formato: !ajuda
 
    2- Classes
      A função rolar é responsável por dizer quais são as classes existentes

      
    3- Rolar
      A função rolar é responsável por rolar um dado de n lados
      Ela é usada no formato: !rolar (nLados)

    4- Criar Servo
      A função criar é responsável por criar um servo.
      Ela é usada no formato: !criar servo (nomeServo) (classeServo)

    5-Atributos
      A função pega atributos é responsável por buscar atributos do servo no banco de dados.
      Ela é usada no formato: !atributos (nomeServo)
      
    6-Aplicar Dano
      A função pega atributos é responsável por buscar atributos do servo no banco de dados.
      Ela é usada no formato: !aplicar dano (nomeServo) (danoASerAplicado)
    `

    message.reply(guideMessage)  
  }

  classes(message: Message): void {
    const classesMessage = `
    As classes são: bárbaro, cavaleiro, caçador, escudeiro, infante e ladrão
    `
    message.reply(classesMessage)
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
    if (servant.name != undefined){

      message.reply(`
      Usuário criado com sucesso
      
      
      Dados do servo:
      nome: ${servant.name}
      agilidade: ${servant.attributes.agility}
      tecnica: ${servant.attributes.technique}
      força: ${servant.attributes.strength}
      fortitude: ${servant.attributes.fortitude}
      `)
      return
  }
  }

  getServantAttributes(message: Message<boolean>, name: string): void {
    const servantAttributes = this.servantManager.getServantAttributes(name)
    if (servantAttributes.agility === undefined || servantAttributes.technique === undefined || servantAttributes.strength === undefined || servantAttributes.fortitude === undefined){
      console.log('algo errado nao esta certo')
      throw new Error('Não foi possível encontrar o usuário referenciado')
    }
      const servantAttributesMessage = `
      Os atributos do servo ${name} são:
  
      
      agilidade: ${servantAttributes.agility}
      tecnica: ${servantAttributes.technique}
      força: ${servantAttributes.strength}
      fortitude: ${servantAttributes.fortitude}
      `
      message.reply(servantAttributesMessage)
      return
    }


  applyDamageToServant(message: Message<boolean>, name: string, damage: number): void {
    const attributes = this.servantManager.applyDamageToServant(name, damage)
    message.reply(`O servo ${name} sofreu um dano de ${damage}`)
    if (attributes === null) message.reply(`O servo ${name} foi morto`)
  }

  rollServantAgility(message: Message<boolean>, name: string){
    const diceResult = this.servantManager.rollServantAgility(name, this.randomNumberGenerator.generate(1,20))
    message.reply(`O servo ${name} tirou ${diceResult} de agilidade`)
  }

  rollServantTechnique(message: Message<boolean>, name: string){
    const diceResult = this.servantManager.rollServantTechnique(name, this.randomNumberGenerator.generate(1,20))
    message.reply(`O servo ${name} tirou ${diceResult} de técnica`)
  }

  rollServantStrength(message: Message<boolean>, name: string){
    const diceResult = this.servantManager.rollServantStrength(name, this.randomNumberGenerator.generate(1,10))
    message.reply(`O servo ${name} tirou ${diceResult} de força`)
  }

  rollServantFortitude(message: Message<boolean>, name: string){
    const diceResult = this.servantManager.rollServantFortitude(name, this.randomNumberGenerator.generate(1,10))
    message.reply(`O servo ${name} tirou ${diceResult} de fortitude`)
  }

  
}

export default CommandManager