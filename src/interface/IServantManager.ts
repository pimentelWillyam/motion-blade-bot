import type Servant from "../model/Servant"
import type Profession from "../type/Profession"

interface IServantManager {
  createServant: (masterId: string, name: string, profession: Profession) => Servant
  deleteServant: (servantMasterId: string, servantId: string) => boolean
}

export default IServantManager