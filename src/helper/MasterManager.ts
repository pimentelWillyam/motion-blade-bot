import type IMasterManager from '../interface/IMasterManager';
import IServant from '../interface/IServant';

class MasterManager implements IMasterManager {
  createMaster = (id: string, name: string, servantList: IServant[]): boolean => {
    return true
  }

  deleteMaster = (id: string): boolean => {
    return true
  }
}

export default MasterManager