import type IServantManager from "../interface/IServantManager";
import type Servant from "../model/Servant";

class ServantManager implements IServantManager{
  servantDatabase: Servant[]
  constructor() {
    this.servantDatabase = []
  }
  createServant = (masterId: string, name: string, profession: profession): Servant => {

    }

  deleteServant = (servantMasterId: string, servantId: string): boolean => {
    console.log('deleteServant')
    return true
  }
}

export default ServantManager