<template>
  <div>
     <v-header></v-header>
     <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import header from 'components/header/header.vue';
  
  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
