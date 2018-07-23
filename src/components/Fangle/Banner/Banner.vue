<template>
  <div class="banner-wrap">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <a href="/" class="swiper-slide my-slide"  >
            <img src="./images/01.jpg" alt="">
            <div class="content">
              <div class="sub-title">严选推荐</div>
              <div class="title">逆水寒必胜实用装备</div>
              <div class="desc">给你会呼吸的江湖</div>
            </div>
          </a>
          <a href="/" class="swiper-slide my-slide"  >
            <img src="./images/02.jpg" alt="">
            <div class="content">
              <div class="sub-title">严选推荐</div>
              <div class="title">逆水寒必胜实用装备</div>
              <div class="desc">给你会呼吸的江湖</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted () {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            autoheight: true,   //自动填充高度
            slidesPerView: 'auto'  //保证在一页中，slide有空余时，下一个slide填补一部分
          })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .banner-wrap
    background-color #fff
    .banner
      padding (24/$rem 0)
      width (690/$rem)
      margin auto
      .my-slide
        padding (0 10/$rem)
        position relative
        img
          border-radius (8/$rem)
          width 100%
          display block
          height (385/$rem)
        .content
          position absolute
          left 0
          top 0
          bottom 0
          right 0
          margin auto
          width (466/$rem)
          height (198/$rem)
          background-color rgba(255,255,255,.9)
          display flex
          flex-direction column
          align-items center
          justify-content center
          font-size 0
          .sub-title
            position relative
            padding (0 8/$rem)
            color #7f7f7f
            line-height (30/$rem)
            font-size (20/$rem)
            &::before, &::after
              content ''
              position absolute
              top 0
              bottom 0
              margin auto
              width (24/$rem)
              height 1px
              background-color #999
            &::before
              left (-24/$rem)
            &::after
              right (-24/$rem)
          .title
            font-weight 700
            margin-top (16/$rem)
            color #333
            line-height (48/$rem)
            font-size (32/$rem)
          .desc
            margin-top (4/$rem)
            color #333
            line-height (36/$rem)
            font-size (24/$rem)
</style>
