<template>
  <div>
    这是A的子模块
  </div>
</template>

<script type="application/ecmascript">
    export default {
      name: 'childrenA',
	    data() {
		    return {};
	    },
      created(){
        console.log('this is 新模块');
      }
    };
</script>

<style type="text/less" lang="less" scoped>

</style>
