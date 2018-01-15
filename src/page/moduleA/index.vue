<template>
  <div class="page-a">
    这是A路由页面
    <router-view></router-view>
  </div>
</template>

<script type="application/ecmascript">
    export default {
      name: 'module-a',
      data() {
        return {};
      }
    };
</script>

<style type="text/less" lang="less" scoped>
  .page-a{
    width: 300px;
    margin: 0 auto;
    background-color: #42b983;
    font-size: 30px;
    transform: scale(1);
  }
</style>
