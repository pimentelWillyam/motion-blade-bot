import type Servant from "../model/Servant"
import type AttackResult from "../type/AttackResult"
import type Attributes from "../type/Attributes"
import type Profession from "../type/Profession"

interface IServantManager {
  createServant: (masterId: string, name: string, profession: Profession) => Servant
  deleteServant: (servantMasterId: string, servantId: string) => boolean
  getAttributes: (profession: string) => Attributes  
  getServantPositionByName: (name: string) => number
  getServantAttributes: (name: string) => Attributes
  applyDamageToServant: (name: string, damage: number) => Attributes | null
  rollServantAgility: (name: string, diceResult: number) => number
  rollServantTechnique: (name: string, diceResult: number) => number
  rollServantStrength: (name: string, diceResult: number) => number
  rollServantFortitude: (name: string, diceResult: number) => number
}

export default IServantManager