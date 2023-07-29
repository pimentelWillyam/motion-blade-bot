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
}

export default ServantManager