import type Servant from "./Servant"

type Battle = {
  id: string
  map: number[][]
  participants: Servant[]
}

export default Battle