<template>
  <div class="button">
    <button @click="handlerA">设置moduleA</button>
    <button @click="handlerB">设置moduleB</button>
    <router-view></router-view>
  </div>
</template>

<script type="application/ecmascript">
  import { mapActions } from 'vuex';

  export default {
    name: 'test-button',
    data() {
      return {};
    },
    methods: {
      ...mapActions( {
        'setmoduleA': 'moduleA/moduleAfn',
        'setmoduleB': 'moduleB/children/moduleBfn'

      } ),
      handlerA() {
        this.$router.push( { path: '/a/childrenA' } );
      },
      async handlerB() {
        await this.setmoduleB( '这是B的子模块store' );
//        this.$router.push( { path: '/b/childrenA' } );
      }
    }
  };
</script>

<style type="text/less" lang="less" scoped>
  .button {
    width: 100%;

    text-align: center;
    margin: 0 auto;
    button {
      width: 80px;
      height: 30px;
      font-size: 13px;
    }
  }
</style>
