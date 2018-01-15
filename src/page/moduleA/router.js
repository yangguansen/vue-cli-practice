const Index = ( r ) => require.ensure( [], () => r( require( './index.vue' ) ) , 'moduleA');
import ChildrenA from './childrenA/router';

export default {
  path: '/a',
  name: 'module-a',
  component: Index,
  children: [ ChildrenA ]
}
