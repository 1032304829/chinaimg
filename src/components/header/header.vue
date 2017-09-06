<template>
<div>
  <div class="header">
       <div class="content-wrapper clearfix">
           <a href="#/index" class="content_logo"><span class="logo_txt">影像中国</span></a>
           <div class="content_nav">
              <a href="#/index">首页</a>
              <a href="">照片集</a>
              <a href="">筛选</a>
           </div>
           <div class="content_search icon-search_icon">
               <input class="input" type="text" value="搜索类型、年份、地区等" onfocus="if (value =='搜索类型、年份、地区等'){value =''}" onblur="if (value ==''){value='搜索类型、年份、地区等'}" />
           </div>
           <div class="content_login">
                <div class="upload icon-upload_icon"></div>
                <div class="notice icon-notice"><span class="num">{{num}}</span></div>
                <div class="login-txt">
                     <a class="register" href="#/register">注册</a>
                     <a class="login" href="#/login">登录</a>
                </div>
           </div>
       </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
       return {
         num: 3
       };
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
  padding: 40px 0
  .content-wrapper
    width: 1400px
    margin: 0 auto
    font-size: 0
    .content_logo
      display: block
      float: left
      font-size: 20px
      width: 150px 
      color: #00B1FE
      position: relative
      &:before
        display: inline-block 
        content: ""
        width: 48px
        height: 48px
        background: url('/static/images/logo.png')
        background-size: cover
      .logo_txt
        position: absolute
        font-size: 20px
        line-height: 48px
        left: 60px
        color: #666
        font-family: "Microsoft YaHei"
    .content_nav
      float: left
      margin: 0 25px
      a 
        display: inline-block
        color: #000
        font-size 16px
        line-height: 48px
        padding: 0 12px
        &:hover
          color: #00B1FE
    .content_search
      margin-left: 80px
      width: 480px
      height: 48px
      background: #F4F4F4
      border-radius: 24px
      float: left
      position: relative
      .input
        position: absolute
        left:0
        z-index: 999
        display: inline-block
        width: 400px
        height: 48px
        line-height: 48px
        background: none
        color: #999
        outline: none
        font-size: 14px
        font-family: "Microsoft YaHei"
        text-indent: 2em
      &:before
        position: absolute
        right: 10px
        font-size: 28px
        cursor: pointer
        width: 48px
        height: 48px
        display: block
        text-align: center
        line-height: 48px;
    .content_login
      float: right
      .upload
        vertical-align: top
        cursor: pointer
        font-size: 38px
        line-height: 48px
        height: 48px
        display:inline-block
        padding: 0 15px 
      .notice
        vertical-align: top
        cursor: pointer
        display:inline-block
        padding: 0 15px 
        font-size: 38px
        line-height: 48px
        height: 48px
        position: relative
        .num
          position: absolute
          top: 5px
          right: 12px
          font-size: 13px
          display: inline-block
          color: #fff 
          width: 18px
          height: 18px
          background: #ff0000
          border-radius: 50%
          font-family: "Microsoft YaHei"
          text-align: center
          line-height: 18px
      .login-txt
        display: inline-block
        vertical-align: top
        margin: 0 15px
        .register
          display: inline-block
          cursor: pointer
          width: 80px
          height: 46px
          color: #333
          font-size: 14px
          text-align: center
          line-height: 46px
          border: 1px solid #BDBDBD
          border-radius: 4px
          margin-right: 15px
        .login
          display: inline-block
          cursor: pointer
          width: 80px
          height: 46px
          color: #333
          font-size: 14px
          text-align: center
          line-height: 46px
          background: #3F51B5
          color: #fff
          border: 1px solid #3F51B5
          border-radius: 4px
</style>
