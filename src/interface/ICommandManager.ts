import type {Message} from 'discord.js'

interface ICommandManager {
  help(message: Message): void
  classes(message: Message): void
  roll(message: Message, diceSides: number): void
  createServant(message: Message, name: string, profession: string ): void
  getServantAttributes(message: Message, name: string): void
  applyDamageToServant(message: Message, name: string, damage: number): void

  }

export default ICommandManager