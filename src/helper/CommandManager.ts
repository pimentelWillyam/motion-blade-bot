import type ICommandManager from '../interface/ICommandManager'
import type IDiceManager from '../interface/IDiceManager'


class CommandManager implements ICommandManager {
  constructor(private readonly diceManager: IDiceManager) {}
  rollDice(diceSides: number): number {
    return this.diceManager.roll(diceSides)
  }
}

export default CommandManager