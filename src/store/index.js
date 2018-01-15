import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import moduleA from '../page/moduleA/store';
import moduleB from '../page/moduleB/store';

const modules = {
  moduleA,
  moduleB
};

export default new Vuex.Store({
  modules
})
