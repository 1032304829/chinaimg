<template>
   <transition name="fade"><span class="tel_err">{{errtxt}}</span></transition>
</template>

<script type="text/ecmascript-6">
   export default{
     props: {
       errtxt: String
     }
   };
</script>

<style lang="stylus" rel="stylesheet/stylus">

.tel_err
  position: absolute
  font-size: 14px
  color: #c33
  top: 1px
  line-height: 48px
  transition: all 0.5s
  right: 10px
  opacity: 1
  &.fade-enter, &.fade-leave-active
    opacity: 0 
    right: -150px
</style>
