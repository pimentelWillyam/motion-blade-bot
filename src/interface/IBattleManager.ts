import type IMaster from "./IMaster";
import type IServant from "./IServant";

interface IBattleManager {
  createBattle: (masterParticipantList: IMaster[], servantParticipantList: IServant ) => boolean
  deleteBattle: (id: string) => boolean

}

export default IBattleManager