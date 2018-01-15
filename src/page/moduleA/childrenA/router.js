const Index = ( r ) => require.ensure( [], () => r( require( './index.vue' ) ) , 'childrenA');

export default {
  path: 'childrenA',
  name: 'childrenA',
  component: Index
}

