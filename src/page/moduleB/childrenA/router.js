// import childrenA from './index.vue';

const childrenA = ( r ) => require.ensure( [], () => r( require( './index.vue' ) ) , 'childrenA');

export default {
  path: 'childrenA',
  name: 'childrenA',
  component: childrenA
}

