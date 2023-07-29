import type Profession from "../type/Profession"
import type Attributes from '../type/Attributes';

type Servant = {
  id: string
  masterId: string
  name: string
  profession: Profession
  seniority: string
  attributes: Attributes
  isInBattle: boolean
  battlePosition: [number, number]
}

export default Servant