<template>
  <div class="login">
    <div class="login-header">
      <div class="container">
        <a href="/#/index"><img src="/imgs/login-logo.png" alt="" /></a>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登录</span><span class="sep-line">|</span
            ><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" />
          </div>
          <div class="input">
            <input type="text" placeholder="请输入密码" />
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss">
.login {
  .login-header {
    & > .container {
      height: 113px;
      img {
        height: 100%;
        width: auto;
      }
    }
  }
  .wrapper {
    background: url("../assets/imgs/login-bg.jpg") no-repeat center;

    .container {
      height: 567px;
      position: relative;
      .login-form {
        width: 410px;
        height: 510px;
        background-color: #ffffff;
        position: absolute;
        bottom: 29px;
        right: 0;
        h3 {
          text-align: center;
          margin: 40px auto 49px;
          font-size: 24px;
          span {
            color: #666666;
          }
          .sep-line {
            margin: 0 35px;
            color: #d7d7d7;
          }
        }
        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          margin: 0 31px 20px;
          input {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
