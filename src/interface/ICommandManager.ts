import type {Message} from 'discord.js'
import type Profession from '../type/Profession'

interface ICommandManager {
  createNpc(message: Message<boolean>, name: string): void
  help(message: Message): void
  classes(message: Message): void
  roll(message: Message, diceSides: number): void
  createServant(message: Message, name: string, profession: Profession ): void
  getServantAttributes(message: Message, name: string): void
  applyDamageToServant(message: Message, name: string, damage: number): void
  healServant(message: Message<boolean>, name: string, attributeToHeal: string, quantityToHeal: number): void
  rollServantAgility(message: Message, name: string): void
  rollServantTechnique(message: Message, name: string): void
  rollServantStrength(message: Message, name: string): void
  rollServantFortitude(message: Message, name: string): void
  rollServantAttack(message: Message, defenderName: string, attackerName: string): void
  rollServantGuard(message: Message, name: string): void
  armServant(message: Message, name: string): void






  }

export default ICommandManager