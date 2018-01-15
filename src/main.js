import "babel-polyfill";
import './config/axios-config';
import Vue from 'vue'
import App from './App.vue'
import Store from './store';
import Router from './router';

import autofixscreen from './config/autofixscreen';

autofixscreen();

import TestButton from './page/lib/index.js';

Vue.use( TestButton );

new Vue( {
  el: '#app',
  render: h => h( App ),
  store: Store,
  router: Router
} )
