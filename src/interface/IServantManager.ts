import type Servant from "../model/Servant"
import type Attributes from "../type/Attributes"
import type Profession from "../type/Profession"

interface IServantManager {
  createServant: (masterId: string, name: string, profession: Profession) => Servant
  deleteServant: (servantMasterId: string, servantId: string) => boolean
  getAttributes: (profession: string) => Attributes  
  getServantAttributes: (name: string) => Attributes
  applyDamageToServant: (name: string, damage: number) => Attributes
}

export default IServantManager