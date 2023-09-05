import type ICommandManager from '../interface/ICommandManager'
import type IRandomNumberGenerator from '../interface/IRandomNumberGenerator'
import Servant from '../model/Servant';
import type IServantManager from '../interface/IServantManager'
import { type Message } from 'discord.js';
import type Profession from '../type/Profession';
import type ISleeper from '../interface/ISleeper';

class CommandManager implements ICommandManager {
  constructor(private readonly randomNumberGenerator: IRandomNumberGenerator, private readonly servantManager: IServantManager) {}

  help(message: Message<boolean>): void {
    const guideMessage = `
    Olá, sou o Bot responsável por administrar as operações relacionadas ao RPG. Atualmente, a lista de funcionalidades está em expansão, as funcionalidades que o bot possui até agora são:\n
    1- Ajuda
      A função ajuda é responsável por informar sobre os comandos existentes e como aplica-los. Ela é usada no formato: 
      
      !ajuda
 
    2- Classes
      A função classes é responsável por dizer quais são as classes existentes. Ela é usada no formato:

      !classes

      
    3- Rolar
      A função rolar é responsável por rolar um dado de n lados. Ela é usada no formato:
      
      !rolar (nLados)

    4- Criar Servo
      A função criar é responsável por criar um servo. Ela é usada no formato: 
      
      !criar servo (nomeServo) (classeServo)

    5-Atributos
      A função pega atributos é responsável por buscar atributos do servo no banco de dados. Ela é usada no formato: 
      
      !atributos (nomeServo)
      
    6-Aplicar Dano
      A função pega atributos é responsável por buscar atributos do servo no banco de dados. Ela é usada no formato: 
      
      !aplicar dano (nomeServo) (danoASerAplicado)

      7-Curar Servo
      A função curar servo é responsável por adicionar atributos ao servo mencionado. Ela é usada no formato: 
      
      !curar (atributo) (nomeServo)
      
      8-Armar Servo
      A função armar servo é responsável por devolver uma arma ao servo mencionado. Ela é usada no formato: 
      
      !armar (nomeServo)
      

    9- Teste de atributo
      A função Teste de atributo é responsável por testar o atributo de determinado servo. Ela é usada no formato:

      !(atributo) (nomeServo)
    `

    message.reply(guideMessage)  
  }

  classes(message: Message): void {
    const classesMessage = `
    As classes são: bárbaro, cavaleiro, caçador, escudeiro, infante, ladrão e monge
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

  createNpc(message: Message<boolean>, name: string): void {
    this.servantManager.createNpc(name)
    message.reply(`O servo ${name} foi criado com sucesso`)
    return
  }

  getServant(message: Message<boolean>, name: string): void {
    const servant = this.servantManager.getServant(name)
    const servantAttributesMessage = `
    Os atributos do servo ${name} são:

    agilidade: ${servant.attributes.agility}
    tecnica: ${servant.attributes.technique}
    força: ${servant.attributes.strength}
    fortitude: ${servant.attributes.fortitude}
    guarda: ${servant.guard}
    `
    message.reply(servantAttributesMessage)
    return
    }

  getServantAttributes(message: Message<boolean>, name: string): void {
    const servant = this.servantManager.getServant(name)
      const servantAttributesMessage = `
      Os atributos do servo ${name} são:
  
      
      agilidade: ${servant.attributes.agility}
      tecnica: ${servant.attributes.technique}
      força: ${servant.attributes.strength}
      fortitude: ${servant.attributes.fortitude}
      guarda: ${servant.guard}
      `
      message.reply(servantAttributesMessage)
      return
    }


  applyDamageToServant(message: Message<boolean>, name: string, damage: number): void {
    const attributes = this.servantManager.applyDamageToServant(name, damage)
    message.reply(`O servo ${name} sofreu um dano de ${damage}`)
    if (attributes === null) message.reply(`O servo ${name} foi morto`)
  }

  healServant(message: Message<boolean>, name: string, attributeToHeal: string, quantityToHeal: number): void {
    this.servantManager.healServant(name, attributeToHeal, quantityToHeal)
    message.reply(`O servo ${name} descansou e recuperou ${quantityToHeal} de ${attributeToHeal}`)
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

  rollServantAttack(message: Message<boolean>, attackerName: string, defenderName: string){
    const attackerDiceResult = this.randomNumberGenerator.generate(1,20)
    const defenderDiceResult = this.randomNumberGenerator.generate(1,20)
    const attackResultMessage = this.servantManager.attack(attackerName, attackerDiceResult, defenderName, defenderDiceResult)
    if (attackResultMessage === 'Acerto') message.reply(`${attackerName} tentou acertar ${defenderName} e conseguiu atingir seu inimigo!`)
    if (attackResultMessage === 'Contra-ataque') message.reply(`${attackerName} tentou acertar ${defenderName} mas acabou sofrendo um contra-ataque`)
    if (attackResultMessage === 'Desarme') message.reply(`${attackerName} tentou acertar ${defenderName} mas acabou sendo desarmado`)
    if (attackResultMessage === 'Desvio') message.reply(`${attackerName} tentou acertar ${defenderName} mas ${defenderName} conseguiu se esquivar`)
    if (attackResultMessage === 'Defesa') message.reply(`${attackerName} tentou acertar ${defenderName} mas ${defenderName} bloqueou o golpe`)
  }

  rollServantGuard(message: Message<boolean>, name: string){
    const guard = this.randomNumberGenerator.generate(1,4)
    this.servantManager.applyGuardOnServant(name, guard)
    message.reply(`${name} entrou em uma guarde de ${guard} pontos`)
  }

  armServant(message: Message<boolean>, name: string){
    this.servantManager.armServant(name)
    message.reply(`${name} voltou a se armar`)
  }

  
}

export default CommandManager