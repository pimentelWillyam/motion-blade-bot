import type IServantManager from "../interface/IServantManager";
import type Servant from "../model/Servant";
import type Profession from "../type/Profession";
import type Attributes from "../type/Attributes";
import type IUuidGenerator from '../interface/IUuidGenerator';
import type AttackResult from '../type/AttackResult'

class ServantManager implements IServantManager{
  servantDatabase: Servant[]
  constructor(readonly uuidGenerator: IUuidGenerator) {
    this.servantDatabase = []
  }
  createServant = (masterId: string, name: string, profession: Profession): Servant => {
      if (this.getServantPositionByName(name) === -1) {
        const servant: Servant = {id: this.uuidGenerator.generate(), masterId, name, profession, seniority: 'novice', attributes: this.getAttributes(profession), isInBattle: false, battlePosition: [-1,-1]}
        this.servantDatabase.push(servant)
        return servant
    }
  console.log(this.servantDatabase)
  throw new Error('Já existe um servo com este nome, tente usar o comando novamente com um novo nome')
  }

  deleteServant = (servantMasterId: string, name: string): boolean => {
    for (let i = 0; i <this.servantDatabase.length; i++){
      if (this.servantDatabase[i].name == name) {
        this.servantDatabase.splice(i, 1)
        return true
      }
    }
    throw new Error('Não foi posível remover o servo')
  }

  getServantAgilityByName = (name: string): number => {
    const servantPosition = this.getServantPositionByName(name)
    if (servantPosition != -1) {
      return this.servantDatabase[servantPosition].attributes.agility
    }
    throw new Error('Não foi posível encontrar o servo referenciado')
  }

  getServantTechniqueByName = (name: string): number => {
    const servantPosition = this.getServantPositionByName(name)
    if (servantPosition != -1) {
      return this.servantDatabase[servantPosition].attributes.technique
    }
    throw new Error('Não foi posível encontrar o servo referenciado')
  }

  getServantStrengthByName = (name: string): number => {
    const servantPosition = this.getServantPositionByName(name)
    if (servantPosition != -1) {
      return this.servantDatabase[servantPosition].attributes.strength
    }
    throw new Error('Não foi posível encontrar o servo referenciado')
  }

  getServantFortitudeByName = (name: string): number => {
    const servantPosition = this.getServantPositionByName(name)
    if (servantPosition != -1) {
      return this.servantDatabase[servantPosition].attributes.fortitude
    }
    throw new Error('Não foi posível encontrar o servo referenciado')
  }
  
  getServantPositionByName(name: string): number {
    for (let servantPosition = 0 ; servantPosition <this.servantDatabase.length; servantPosition++) {
      if (this.servantDatabase[servantPosition].name == name){
        return servantPosition
      }
    }
    return -1
  }

  getServantAttributes(name: string): Attributes{
    const servantPosition = this.getServantPositionByName(name)
    if (servantPosition !== -1) return this.servantDatabase[servantPosition].attributes
    else{
      throw new Error('Não foi posível encontrar o usuário referenciado')

    }
  }

  getAttributes = (profession: string): Attributes => {
    let attributes: Attributes
    if (profession == 'barbaro'){
      attributes = {
        agility: 4, 
        strength: 4, 
        technique: 0, 
        fortitude: 0
      }
    }
    else if (profession == 'caçador'){
      attributes = {
        agility: 3, 
        strength: 0, 
        technique: 5, 
        fortitude: 0
      }
    }
    else if (profession == 'cavaleiro'){
      attributes = {
        agility: 0, 
        strength: 0, 
        technique: 0, 
        fortitude: 8
      }
    }
    else if (profession == 'escudeiro'){
      attributes = {
        agility: 0, 
        strength: 0, 
        technique: 4, 
        fortitude: 4
      }
    }
    else if (profession == 'ladrao'){
      attributes = {
        agility: 5, 
        strength: 0, 
        technique: 3, 
        fortitude: 0
      }
    }
    else if (profession == 'infante'){
      attributes = {
        agility: 0, 
        strength: 3, 
        technique: 0, 
        fortitude: 5
      }
    }
    else{
      throw new Error('Profissão Inválida')
    }
    return attributes
  }

  applyDamageToServant(name: string, damageToDeal: number): Attributes | null {
    const servantPosition = this.getServantPositionByName(name)
    let damageNotDealt = damageToDeal
    let functionReturn: [Servant, number] 
    while(damageNotDealt !== 0){
      functionReturn = this.dealDamage(damageNotDealt, this.servantDatabase[servantPosition])
      this.servantDatabase[servantPosition] = functionReturn[0]
      damageNotDealt = functionReturn[1]
    }
    if (this.servantDatabase[servantPosition].attributes.agility === 0 && this.servantDatabase[servantPosition].attributes.technique === 0  && this.servantDatabase[servantPosition].attributes.strength === 0 && this.servantDatabase[servantPosition].attributes.fortitude === 0) {
      this.deleteServant('', this.servantDatabase[servantPosition].name)
      return null
    }
    return this.servantDatabase[servantPosition].attributes
  }

  dealDamage(damage: number, servant: Servant): [Servant, number] {
    if (servant.attributes.agility != 0 && servant.attributes.agility >= damage){
      servant.attributes.agility -= damage
      return [servant, 0]
    }
    else if (servant.attributes.agility != 0 && servant.attributes.agility < damage){
      damage -= servant.attributes.agility
      servant.attributes.agility = 0
      return [servant, damage]
    }
    else if (servant.attributes.technique != 0 && servant.attributes.technique >= damage){
      servant.attributes.technique -= damage
      return [servant, 0]
    }
    else if (servant.attributes.technique != 0 && servant.attributes.technique < damage){
      damage -= servant.attributes.technique
      servant.attributes.technique = 0
      return [servant, damage]
    }
    else if (servant.attributes.strength != 0 && servant.attributes.strength >= damage){
      servant.attributes.strength -= damage
      return [servant, 0]
    }
    else if (servant.attributes.strength != 0 && servant.attributes.strength < damage){
      damage -= servant.attributes.strength
      servant.attributes.strength = 0
      return [servant, damage]
    }
    else if (servant.attributes.fortitude != 0 && servant.attributes.fortitude >= damage){
      servant.attributes.fortitude -= damage
      return [servant, 0]
    }
    else if (servant.attributes.fortitude != 0 && servant.attributes.fortitude < damage){
      damage -= servant.attributes.fortitude
      servant.attributes.fortitude = 0
      return [servant, damage]      
    }
    else{
      throw new Error('Erro inesperado na aplicação do dano desse servo')
    }
  }

  rollServantAgility(name: string, diceResult: number){
    const servantPosition = this.getServantPositionByName(name)
    if (servantPosition == -1) throw new Error('O servo solicitado não existe')
    return this.servantDatabase[servantPosition].attributes.agility + diceResult
  }

  rollServantTechnique(name: string, diceResult: number){
    const servantPosition = this.getServantPositionByName(name)
    if (servantPosition == -1) throw new Error('O servo solicitado não existe')
    return this.servantDatabase[servantPosition].attributes.technique + diceResult
  }

  rollServantStrength(name: string, diceResult: number){
    const servantPosition = this.getServantPositionByName(name)
    if (servantPosition == -1) throw new Error('O servo solicitado não existe')
    return this.servantDatabase[servantPosition].attributes.strength + diceResult
  }

  rollServantFortitude(name: string, diceResult: number){
    const servantPosition = this.getServantPositionByName(name)
    if (servantPosition == -1) throw new Error('O servo solicitado não existe')
    return this.servantDatabase[servantPosition].attributes.fortitude + diceResult
  }

}

export default ServantManager