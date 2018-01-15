import Vue from 'vue';
import VueRouter from 'vue-router';
import ModuleA from '@src/page/moduleA/router';
import ModuleB from '@src/page/moduleB/router';

Vue.use( VueRouter );

export default new VueRouter({
  mode:'history',
  path: '/',
  routes: [
      ModuleA,
      ModuleB
  ]
})
