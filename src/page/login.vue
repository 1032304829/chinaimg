<template>
<div>
  <div class="register-wrapper">
      <div class="register-txt">
           <h1></h1>
           <h2>影像中国</h2>
           <div class="link_txt">
                <router-link to="/register" class="register-link">注册</router-link>
                <router-link to="/login" class="login-link active">登录</router-link>
           </div>
           <div class="register-sub">
           	    <form v-if="phone_show">
                   <ul>
                       <li><input type="text" id="tel" placeholder="手机号" v-on:focus="inputTel" /><err :errtxt="phonetxt" v-show="phone_tel"></err></li>
                       <li class="clearfix">
                       	  <input class="phone_yzm" type="text" placeholder="短信验证码" />
                       	  <label @click="phone_yzm">获取验证码</label>
                       </li>
                       <li><input class="reg" type="button" value="登录" /></li>
                   </ul>
                </form>
                <form v-else>
                   <ul>
                       <li><input id="loginE" type="text" placeholder="邮箱或者用户名" v-on:focus="errname" /><err :errtxt="nametxt" v-show="email_show"></err></li>
                       <li><input id="loginP"  type="text" placeholder="密码" v-on:focus="errpass" /><err :errtxt="passtxt" v-show="pass_show"></err></li>
                       <li><input class="reg" type="button" value="登录" @click="login_yz"/></li>
                   </ul>
                </form>
                <div class="phone_content clearfix">
                	 <span class="phone_yz" v-on:click="phone_yz"><i v-if="!phone_show">手机验证码登陆</i><i v-else>密码登录（手机号或邮箱）</i></span>
                	 <span class="phone_question" v-show="!phone_show">无法登陆</span>
                </div>
           </div>
      </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
  import err from 'components/err/err.vue';

  export default {
    data () {
      return {
        phone_show: false,
        phone_tel: false,
        email_show: false,
        pass_show: false,
        phonetxt: '请输入正确的手机号码',
        nametxt: '账号不能为空',
        passtxt: '密码不能为空'
      };
    },
    methods: {
      phone_yz () {
        this.phone_show = !this.phone_show;
      },
      phone_yzm () {
         var ckTel = document.getElementById('tel').value;
         var regMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
         if (!regMobile.test(ckTel.replace(/\s+/g, ''))) {
            this.phone_tel = true;
         } else {
            this.phone_tel = false;
         }
      },
      login_yz () {
        var ckloginE = document.getElementById('loginE').value;
        var ckloginP = document.getElementById('loginP').value;
        // var regemail = /^[0-9a-zA-Z]+@(([0-9a-zA-Z]+)[.])+[a-z]{2,4}$/i;
        if (ckloginE === '') {
            this.email_show = true;
            return false;
        }
        if (ckloginP === '') {
            this.pass_show = true;
            return false;
         }
        this.axios.post('/api/user/login', {username: ckloginE, password: ckloginP}).then((response) => {
        });
      },
      inputTel () {
        this.phone_tel = false;
      },
      errname () {
        this.email_show = false;
      },
      errpass () {
        this.pass_show = false;
      }
    },
    components: {
      err
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.register-wrapper
  width: 320px
  margin: 0 auto
  .register-txt
    h1
      text-align: center
      &:before
        display: inline-block 
        content: ""
        width: 57px
        height: 56px
        background: url('/static/images/logo.png')
    h2
      text-align: center
      font-size: 26px
      color: #000
      line-height: 26px
      margin-top: 10px
    .link_txt
      font-size: 14px
      color: #bdbdbd
      text-align: center
      margin-top: 30px
      & > a 
        padding: 5px 5px
        margin: 0 10px
        &.active
          color: rgba(63,81,181,1)
          border-bottom: 1px solid rgba(63,81,181,1)
      .register-link
        display: inline-block
        cursor: pointer
      .login-link
        cursor: pointer
        display: inline-block
    .register-sub
      li
        margin-top: 20px
        position: relative
        overflow: hidden
        input
          width: 100%
          border: 1px solid rgba(189,189,189,1)
          box-sizing: border-box
          border-radius: 4px
          font-size: 14px
          color: rgba(189,189,189,1)
          height: 48px
          line-height: 48px
          outline: none
          text-indent: 1em
          font-family: "Microsoft YaHei"
          &.reg
            text-indent: 0
            color: #fff
            background: #3F51B5
            border: 1px solid #3F51B5
            cursor: pointer
          &.phone_yzm
            width: 70%
      label
        font-size: 14px
        color: #5ca5eb
        cursor: pointer
        float: right
        line-height: 48px
    .phone_content
      font-size: 14px
      margin: 15px 0
      .phone_yz
        float: left
        display: inline-block
        cursor: pointer
        color: #3F51B5
        i 
          font-style: normal
      .phone_question
        float: right
        display: inline-block
        cursor: pointer
        color: #757575
      
</style>
