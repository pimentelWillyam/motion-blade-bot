import type {Message} from 'discord.js'

interface CommandManager {
  help(message: Message): void
  roll(message: Message, diceSides: number): void
  createServant(message: Message, name: string, profession: string ): void
  
  }

export default CommandManager