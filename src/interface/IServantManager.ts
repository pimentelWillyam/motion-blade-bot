import type Servant from "../model/Servant"
import type AttackResult from "../type/AttackResult"
import type Attributes from "../type/Attributes"
import type Profession from "../type/Profession"

interface IServantManager {
  servantDatabase: Servant[]
  removeServantDebuff(name: string): unknown
  buffServant(name: string, buffValue: number): unknown
  debuffServant(name: string, debuffValue: number): unknown
  removeServantBuff(name: string): unknown
  createNpc(name: string): void
  createServant: (masterId: string, name: string, profession: Profession) => Servant
  deleteServant: (servantMasterId: string, servantId: string) => boolean
  getAttributes: (profession: string) => Attributes  
  getServantPositionByName: (name: string) => number
  getServant: (name: string) => Servant
  getServantAttributes: (name: string) => Attributes
  applyDamageToServant: (name: string, damage: number) => Attributes | null
  healServant: (name: string, attributeToHeal: string, quantityToHeal: number) => void
  rollServantAgility: (name: string, diceResult: number) => number
  rollServantTechnique: (name: string, diceResult: number) => number
  rollServantStrength: (name: string, diceResult: number) => number
  rollServantFortitude: (name: string, diceResult: number) => number
  attack: (attackerName: string, attackerDiceResult: number, defenderName: string, defenderDiceResult: number) => AttackResult
  applyGuardOnServant: (name: string, guardToBeApplied: number) => void
  armServant: (name: string) => void


}

export default IServantManager