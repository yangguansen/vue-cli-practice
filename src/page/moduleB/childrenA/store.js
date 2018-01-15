import service from '@src/service/moduleB';

const state = {
  modulename: ''
};

const getters = {
  msg: state => {
    return state.modulename + '22222';
  }
};

const types = {
  CHILDRENB: 'CHILDRENB'
};

const mutations = {
  [types.CHILDRENB]( state, data ) {
    state.modulename = data;
  }
}

const actions = {
  async moduleBfn( { commit }, data ) {
    const info = await service.getNavitation();
    console.log( info );
    commit( types.CHILDRENB, data );
  },
}

export default {
  namespaced: true,
  getters,
  state,
  types,
  mutations,
  actions
}
