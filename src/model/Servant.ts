import type IServant from "../interface/IServant";

// força, técnica, agilidade e fortitude

class Servant implements IServant {
  seniority: number
  atributes: atributes;
  isInBattle: boolean
  battlePosition: [number, number]

  constructor(readonly id: string, readonly masterId: string, readonly name: string, readonly profession: profession, readonly type: string) {
    this.profession = profession
    this.seniority = 0
    if (profession == 'Barbarian'){
      this.atributes = {
        agility: 4, 
        strength: 4, 
        technique: 0, 
        fortitude: 0
      }
    }
    else if (profession == 'Hunter'){
      this.atributes = {
        agility: 3, 
        strength: 0, 
        technique: 5, 
        fortitude: 0
      }
    }
    else if (profession == 'Knight'){
      this.atributes = {
        agility: 0, 
        strength: 0, 
        technique: 0, 
        fortitude: 8
      }
    }
    else if (profession == 'Squire'){
      this.atributes = {
        agility: 0, 
        strength: 0, 
        technique: 4, 
        fortitude: 4
      }
    }
    else if (profession == 'Thief'){
      this.atributes = {
        agility: 5, 
        strength: 0, 
        technique: 3, 
        fortitude: 0
      }
    }
    else if (profession == 'Infantryman'){
      this.atributes = {
        agility: 0, 
        strength: 3, 
        technique: 0, 
        fortitude: 5
      }
    }
    else{
      throw new Error(`Invalid profession`)
    }
    
    this.isInBattle = false
    this.battlePosition = [-1, -1]
  }
}

export default Servant