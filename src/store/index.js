import { createStore } from 'vuex'

export default createStore({
  state: {
    busca: ""
  },
  getters: {
    getBusca: state => {
        return state.busca;
    }
  },
  mutations: {
      buscar(state, texto){
          state.busca = texto;
          console.log(state.busca);
      }
  },
  actions: {
  },
  modules: {
  }
})
