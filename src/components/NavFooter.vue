<template>
  <div>
    <div class="footer">
      <div class="footer-logo">
        <img src="../assets/imgs/logo-footer.png" alt="">
        <p>小米商城</p>
      </div>
      <div class="footer-link">
        <a href="https://github.com/zZhiqg" target="_blank">zZhiqg主页</a><span>|</span>
        <a href="https://github.com/zZhiqg" target="_blank">vue前端开发</a><span>|</span>
      </div>
      <div class="copyright">copyright @2022 <span class="domain">https://github.com/zZhiqg</span> </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "nav-footer",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.footer{
  height: 234px;
  border-top: 4px solid #FF6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
    
  }
  .footer-link{
    margin-bottom: 13px;
    a{
      color: #999999;
      display: inline-block;
    }
    span{
      margin: 0 10px;
    }
  }
  .copyright{
    .domain{
      color: #FF6600;
    }
  }
}
</style>
