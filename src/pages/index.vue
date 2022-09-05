<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList " v-bind:key='i'>
                  <li v-for="(sub,j) in item" v-bind:key="j">
                    <a v-bind:href="sub?'/#/product/' + sub.id:''">
                      <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                      {{sub?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product' + item.id"><img :src="item.img" /></a>
          </swiper-slide>

          <!-- 指示点 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 左右导航栏 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ServiceBar from "../components/ServiceBar.vue";
export default {
  name: "index",
  components: { Swiper, SwiperSlide, ServiceBar },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        //切换效果
        effect: 'cube',
        // 循环
        loop: true,
        //分页器
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true /* 分页器点可以点击切换 */
        },
        // 左右箭头按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        //自动播放
        autoplay:true,

      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      menuList:[
        [
          {
            id:'30',
            img:'/imgs/item-box-1.png',
            name:'小米cc9'
          },
          {
            id:'31',
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'
          },
          {
            id:'32',
            img:'/imgs/item-box-3.jpg',
            name:'Redmi K20 Pro'
          },
          {
            id:'33',
            img:'/imgs/item-box-4.jpg',
            name:'移动4G专区'
          },
        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ]
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss">
@import "../assets/scss/mixin.scss";
.index {
  .swiper-box { 
    .nav-menu{
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7d;
      box-sizing: border-box;
      .menu-wrap{
        .menu-item{
          height: 50px;
          line-height: 50px;
          &:hover{
            background-color: #FF6600;
            .children{
              display: block;
            }
          }
          a{
            display: block;
            position: relative;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after{
              position: absolute;
              right: 30px;
              top:17.5px;
              content: " ";
              @include bgImg(10px,15px,'../assets/imgs/icon-arrow.png');
            }
          }
          .children{
            display: none;
            width: 962px;
            height: 451px;
            background: #ffffff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #E5E5E5;
            ul{
              display: flex;
              justify-content: space-between;
              height: 75px;
              li{
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a{
                color: #333333;
                font-size: 14px;
              }
              img{
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }

        }
      }
    }
    .swiper-container {
      .swiper-button-prev{
        left: 274px;
      }
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
