<template>
  <div>
    {{msg}}
  </div>
</template>

<script type="application/ecmascript">
  import { mapGetters } from 'vuex';

  export default {
    name: 'childrenB',
    computed: {
      ...mapGetters( 'moduleB', {
        msg: 'children/msg'
      } )
    },
    data() {
      return {};
    },
    created(){
      console.log('this is 原模块');
    }
  };
</script>

<style type="text/less" lang="less" scoped>

</style>
