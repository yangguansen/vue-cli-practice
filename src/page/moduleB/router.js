const Index = ( r ) => require.ensure( [], () => r( require( './index.vue' ) ) , 'moduleA');
import childrenA from './childrenA/router';

export default {
  path: '/b',
  name: 'module-b',
  component: Index,
  children: [
    childrenA
  ]
}
