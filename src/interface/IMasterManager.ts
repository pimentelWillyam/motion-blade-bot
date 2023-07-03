import type IServant from "./IServant"

interface IMasterManager {
  createMaster: (id: string, name: string, servantList: IServant[] ) => boolean
  deleteMaster: (id: string) => boolean
}

export default IMasterManager