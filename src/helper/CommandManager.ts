import type ICommandManager from '../interface/ICommandManager'
import type IRandomNumberGenerator from '../interface/IRandomNumberGenerator'


class CommandManager implements ICommandManager {
  constructor(private readonly randomNumberGenerator: IRandomNumberGenerator) {}
  rollDice(diceSides: number): number {
    return this.randomNumberGenerator.generate(1, diceSides)
  }
}

export default CommandManager