interface State {
  login: Boolean,
  modules: StoreState.module[],
  headline: StoreState.headline[],
  activities: StoreState.activity[],
  superSales: StoreState.superSale[],
  shops: StoreState.shop[],
  searchVal: string
}

let state: State = {
  login: false,
  modules: [],
  headline: [],
  activities: [],
  superSales: [],
  shops: [],
  searchVal: ''
}

export default state