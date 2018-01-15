const state = {
  modulename: ''
};

const types = {
  CHILDRENA: 'childrenA'
};

const mutations = {
  [types.CHILDRENA](state, data){
    state.modulename = data;
  }
}

const actions = {
  childrenAfn( { commit }, data ) {
    commit( types.CHILDRENA, data );
  },
}

export default {
  namespaced: true,
  state,
  types,
  mutations,
  actions
}
