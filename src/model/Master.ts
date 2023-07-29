import type Servant from "./Servant";

type Master = {
  id: string
  name: string
  servantList: Servant[]
}

export default Master