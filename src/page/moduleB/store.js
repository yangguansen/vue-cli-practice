import childrenb from './childrenA/store';

const state = {
  modulename: ''
};

const types = {
  MODULEB: 'MODULEB'
};

const mutations = {
  [types.MODULEB]( state, data ) {
    state.modulename = data;
  }
}

const actions = {
  moduleBfn( { commit }, data ) {
    commit( types.MODULEB, data );
  },
}

export default {
  namespaced: true,
  modules: {
    children: childrenb
  },
  state,
  types,
  mutations,
  actions
}
