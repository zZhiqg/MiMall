<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
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
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss">
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
