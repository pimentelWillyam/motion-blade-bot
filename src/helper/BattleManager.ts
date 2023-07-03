import type IBattleManager from "../interface/IBattleManager"
import type IMaster from "../interface/IMaster"
import type IServant from "../interface/IServant"

class BattleManager implements IBattleManager {
createBattle = (masterParticipantList: IMaster[], servantParticipantList: IServant): boolean => {
  return true
}
deleteBattle = (id: string): boolean => {
  return true
}
}

export default BattleManager