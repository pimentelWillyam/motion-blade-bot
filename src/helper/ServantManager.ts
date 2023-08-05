import type IServantManager from "../interface/IServantManager";
import type Servant from "../model/Servant";
import type Profession from "../type/Profession";
import type Attributes from "../type/Attributes";
import type IUuidGenerator from '../interface/IUuidGenerator';

class ServantManager implements IServantManager{
  servantDatabase: Servant[]
  constructor(readonly uuidGenerator: IUuidGenerator) {
    this.servantDatabase = []
  }
  createServant = (masterId: string, name: string, profession: Profession): Servant => {
      const servant: Servant = {id: this.uuidGenerator.generate(), masterId, name, profession, seniority: 'novice', attributes: this.getAttributes(profession), isInBattle: false, battlePosition: [-1,-1]}
      this.servantDatabase.push(servant)
      return servant
    }

  deleteServant = (servantMasterId: string, servantId: string): boolean => {
    for (let i = 0; i <this.servantDatabase.length; i++){
      if (this.servantDatabase[i].id == servantId) {
        this.servantDatabase = this.servantDatabase.splice(i,1)
        return true
      }
    }
    throw new Error('Could not find servant in database')
  }

  getServantByName(name: string): Servant {
    for (let i=0;i<this.servantDatabase.length; i++) {
      if (this.servantDatabase[i].name == name){
        return this.servantDatabase[i]
      }
    }
    throw new Error('O Servo nomeado não existe')
  }

  getServantAttributes(name: string): Attributes{
    return this.getServantByName(name).attributes
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
      throw new Error('Invalid profession')
    }
    return attributes
  }

  applyDamageToServant(name: string, damage: number): Attributes {
    var servant = this.getServantByName(name)
    servant = this.dealDamage(damage, servant)
    return servant.attributes
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

    
}

export default ServantManager