<template>
  <div class="slide-wrap">
    <div class="swiper">
      <div class="swiper-container swiper-inner1" v-if="focusLists.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focusList, index) in focusLists" :key="index">
            <img :src="focusList.picUrl" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="footer-container">
      <ul class="footer">
        <li class="item">
          <a href="/">
            <i class="icon"></i>
            <span class="txt">网易自营品牌</span>
          </a>
        </li>
        <li class="item">
          <a href="/">
            <i class="icon"></i>
            <span class="txt">30天无忧退货</span>
          </a>
        </li>
        <li class="item">
          <a href="/">
            <i class="icon"></i>
            <span class="txt">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted () {
      this.$store.dispatch('getFocusList');
    },
    computed: {
      ...mapState(['focusLists'])
    },
    watch: {
      focusLists(val){
        console.log(this.val)
        this.$nextTick( () => {
            new Swiper('.swiper-container', {
              pagination: {
                el: '.swiper-pagination',
              },
              loop: true
            })
        })
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .slide-wrap
    margin-top (148/$rem)
    margin-bottom (20 /$rem)
    background-color #f4f4f4
    .swiper
      height (400 /$rem)
      .swiper-inner1
        height 100%
        img
          width 100%
          height 100%
        .my-swiper-pagination
          bottom (30 /$rem)
          font-size 0
          .swiper-pagination-bullet
            width (40 /$rem)
            height (4 /$rem)
            display: inline-block;
            background: seagreen;
            opacity: .4;
          .swiper-pagination-bullet-active
            opacity 1
            background-color salmon
    .footer
      margin-top 0
      height (72 /$rem)
      padding (0 30 /$rem)
      display flex
      align-items center
      background-color #fff
      .item
        flex 1
        font-size 0
        .icon
          background-image url("images/icon/arrow.png")
          background-size (100% 100%)
          display inline-block
          width (32 /$rem)
          height (32 /$rem)
          vertical-align middle
        .txt
          font-size (24 /$rem)
          color #333
          margin-left (8 /$rem)
          line-height (32 /$rem)
          display inline-block
          vertical-align middle
</style>
