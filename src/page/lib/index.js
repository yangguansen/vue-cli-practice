import Vue from 'vue';
import Index from './index.vue';

const button = {
  install( Vue ) {
    Vue.component( Index.name, Index );
  }
}

if ( typeof window !== 'undefined' && window.Vue ) {
  window.Vue.use( Index );
}

export default button;
