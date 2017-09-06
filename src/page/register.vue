<template>
<div>
  <div class="register-wrapper">
      <div class="register-txt">
           <h1></h1>
           <h2>影像中国</h2>
           <div class="link_txt">
                <router-link to="/register" class="register-link active">注册</router-link>
                <router-link to="/login" class="login-link">登录</router-link>
           </div>
           <div class="register-sub">
                <form>
                   <ul>
                       <li><input type="text" id="name" placeholder="用户名" v-on:focus="inputName"/><err :errtxt="nametxt" v-show="yz_name"></err></li>
                       <li><input type="text" id="email" placeholder="邮件" v-on:focus="inputEmail"/><err :errtxt="phonetxt" v-show="yz_email"></err></li>
                       <!-- <li><input type="text" id="id" placeholder="请输入身份证号" v-on:focus="inputId"/><err :errtxt="idtxt" v-show="yz_id"></err></li> -->
                       <li><input type="password" id="pass" placeholder="密码（不少于6位）" v-on:focus="inputPass"/><err :errtxt="passtxt" v-show="yz_pass"></err></li>
                       <li><input type="password" id="passC" placeholder="确认密码" v-on:focus="inputPassC"/><err :errtxt="passCtxt" v-show="yz_passC"></err></li>
                       <li><input class="reg" type="button" value="注册" @click="register_yz"/></li>
                   </ul>
                </form>
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
        yz_name: false,
        yz_email: false,
        yz_id: false,
        yz_pass: false,
        yz_passC: false,
        nametxt: '用户名不能为空',
        phonetxt: '请输入正确的邮箱号',
        idtxt: '请输入正确的身份证号',
        passtxt: '密码最少为6位',
        passCtxt: '两次密码不一致'
      };
    },
    methods: {
      register_yz () {
         var ckName = document.getElementById('name').value;
         var ckEmail = document.getElementById('email').value;
         //  var ckId = document.getElementById('id').value;
         var ckPass = document.getElementById('pass').value;
         var ckPassC = document.getElementById('passC').value;
         var regemail = /^[0-9a-zA-Z]+@(([0-9a-zA-Z]+)[.])+[a-z]{2,4}$/i;
         // var regMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
         // var regId = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
         if (ckName === '') {
            this.yz_name = true;
            return false;
         }
         if (!regemail.test(ckEmail.replace(/\s+/g, ''))) {
            this.yz_email = true;
            return false;
         }
        //  if (!regId.test(ckId.replace(/\s+/g, ''))) {
        //     this.yz_id = true;
        //  }
         if (ckPass.length < 5) {
            this.yz_pass = true;
            return false;
         }
         if (ckPassC !== ckPass) {
            this.yz_passC = true;
            return false;
         } else {
            this.axios.post('/api/user/register', {username: ckName, password: ckPass, password2: ckPassC, email: ckEmail}).then((response) => {
            });
         }
      },
      inputName () {
        this.yz_name = false;
      },
      inputEmail () {
        this.yz_email = false;
      },
      inputId () {
        this.yz_id = false;
      },
      inputPass () {
        this.yz_pass = false;
      },
      inputPassC () {
        this.yz_passC = false;
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
        position: relative
        overflow: hidden
        margin-top: 20px
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
      
</style>
