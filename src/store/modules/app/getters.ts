import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
  load(state): boolean {
    const { modules, headline, activities, superSales, shops } = state
    return !!(modules.length && headline.length && activities.length && superSales.length && shops.length)
  },
  activities(state): StoreState.activity[] {
    return state.activities;
  },
  login(state): boolean {
    return state.login;
  },
  headline(state): StoreState.headline[] {
    return state.headline;
  },
  modules(state): StoreState.module[] {
    return state.modules;
  },
  shops(state): StoreState.shop[] {
    return state.shops;
  }, 
  searchVal(state): String {
    return state.searchVal;
  },
  superSales(state): StoreState.superSale[] {
    return state.superSales;
  }
}

export default getters
