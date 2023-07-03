interface IServantManager {
  createServant: (id: string, masterId: string, name: string, profession: string) => boolean
  deleteServant: (servantMasterId: string, servantId: string) => boolean
}

export default IServantManager