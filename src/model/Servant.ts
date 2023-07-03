import type IServant from "../interface/IServant";

// força, técnica, agilidade e fortitude

class Servant implements IServant {
  class: string
  seniority: number
  strength: number
  technique: number
  agility: number
  fortitude: number
  isInBattle: boolean
  battlePosition: [number, number]
  constructor(readonly masterId: string, readonly name: string, readonly profession: string, readonly type: string, agility: number, technique: number, strength: number, fortitude: number) {
    this.class = ''
    this.seniority = 0
    this.agility = agility
    this.technique = technique
    this.strength = strength
    this.fortitude = fortitude
    this.isInBattle = false
    this.battlePosition = [-1, -1]
  }
}

export default Servant