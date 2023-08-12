import type {Message} from 'discord.js'
import type Profession from '../type/Profession'

interface ICommandManager {
  help(message: Message): void
  classes(message: Message): void
  roll(message: Message, diceSides: number): void
  createServant(message: Message, name: string, profession: Profession ): void
  getServantAttributes(message: Message, name: string): void
  applyDamageToServant(message: Message, name: string, damage: number): void

  }

export default ICommandManager