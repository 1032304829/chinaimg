<template>
<div class="waterbody">
    <div class="img-container" id="container" style="waterheight">
        <!-- <waterfall 
        :line-gap="400"
        :watch="items"
        >
            <waterfall-slot
              v-for="(item, index) in items"
              :width="item.width"
              :height="item.height"
              :order="index"
              :key="item.id"
            >
              <div class="item"><img :width="item.width" :height="item.height" :src="items[index].src"></div>
            </waterfall-slot>
        </waterfall> -->
        <div class="box" v-for="(item, index) in items" >
            <div class="boximg" :class="{'active': Loadshow === true}">
                <img :src="items[index].src" :width="item.width" :height="item.height">
            </div>
        </div> 
    </div>
    <transition name="move">
        <div class="loadshow">
            <div class="loadtxt" v-show = "Loadshow"><img class="loadimg" src="/static/images/logo.png" /><span>一瞬一世纪</span></div>
        </div>
    </transition>
</div>
</template>

<script type="text/ecmascript-6">
export default{
   props: {
        items: {
          type: Array
        },
        Loadshow: {
          type: Boolean
        }
   }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #container
      position: relative
      .box
        float: left
        padding: 5px
        .boximg
          cursor: pointer
          padding: 5px
          border: 1px solid #cccccc
          box-shadow:0 0 5px #ccc
          border-radius: 5px
          &.active
            transition: all 0.3s linear
            transform:translate3d(0px,-100px,0) 
            &.move-enter, &.move-leave-active
              transform:translate3d(0px,0px,0) 
          img
            width: 370px
            height: auto
    .loadshow
       position: fixed
       z-index: 999
       bottom: 20px
       width: 100%
       text-align: center
       transition: all 0.3s linear
       transform:translate3d(0px,0px,0px) 
       opacity: 1
       &.move-enter, &.move-leave-active
          transform:translate3d(0px,-100px,0px) 
          opacity: 0
       .loadtxt 
         margin: 0 auto
         width: 180px
         height: 48px
         line-height: 48px
         .loadimg
            float: left
            width: 48px
            height: 48px
         span 
            float: left 
            margin-left: 10px
            color: #212121
            font-size: 20px
</style>
