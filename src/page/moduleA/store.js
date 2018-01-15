import childrena from './childrenA/store';

const state = {
  modulename: ''
};

const types = {
  MODULEA: 'MODULEA'
};

const mutations = {
  [types.MODULEA](state, data){
    state.modulename = data;
  }
}

const actions = {
  moduleAfn( { commit }, data ) {
    commit( types.MODULEA, data );
  },
}

export default {
  namespaced: true,
  modules: {
    children: childrena
  },
  state,
  types,
  mutations,
  actions
}
