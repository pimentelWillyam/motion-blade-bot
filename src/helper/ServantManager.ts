import type IServantManager from "../interface/IServantManager";

class ServantManager implements IServantManager{
  createServant = (id: string, masterId: string, name: string, profession: string): boolean => {
    console.log('createServant')
    return true
  }

  deleteServant = (servantMasterId: string, servantId: string): boolean => {
    console.log('deleteServant')
    return true
  }
}

export default ServantManager