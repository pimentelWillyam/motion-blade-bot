import type IServantManager from "../interface/IServantManager";
import type Servant from "../model/Servant";

class ServantManager implements IServantManager{
  servantDatabase: Servant[]
  constructor() {
    this.servantDatabase = []
  }
  createServant = (masterId: string, name: string, profession: profession): Servant => {

    }

  deleteServant = (servantMasterId: string, servantId: string): boolean => {
    console.log('deleteServant')
    return true
  }

  getAttributes = (profession: string): attributes => {
    let attributes: attributes
    if (profession == 'Barbarian'){
      attributes = {
        agility: 4, 
        strength: 4, 
        technique: 0, 
        fortitude: 0
      }
    }
    else if (profession == 'Hunter'){
      attributes = {
        agility: 3, 
        strength: 0, 
        technique: 5, 
        fortitude: 0
      }
    }
    else if (profession == 'Knight'){
      attributes = {
        agility: 0, 
        strength: 0, 
        technique: 0, 
        fortitude: 8
      }
    }
    else if (profession == 'Squire'){
      attributes = {
        agility: 0, 
        strength: 0, 
        technique: 4, 
        fortitude: 4
      }
    }
    else if (profession == 'Thief'){
      attributes = {
        agility: 5, 
        strength: 0, 
        technique: 3, 
        fortitude: 0
      }
    }
    else if (profession == 'Infantryman'){
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