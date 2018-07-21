<template>
  <div class="better-good">
    <header class="header">
      <a href="" class="more">
        <span>人气推荐·好物精选</span>
        <div class="all">
          <span class="wrap">
            <span>查看全部</span>
          <i class="arrow-right"></i>
          </span>
        </div>
      </a>
    </header>
    <div class="goods-contain">
      <div class="swiper-inner3 ">
        <ul class="list swiper-wrapper" >
          <li class="item swiper-slide" ><a href="">
            <div class="img-wrap"><img src="./images/newProduct/01.png" alt="">
            </div>
            <span class="name">拉格啤酒 330毫升*24罐/箱</span> <span class="name-desc">清醇透爽，畅享欢聚时刻</span>
            <div class="name-price"><span>￥108</span></div>
          </a></li>
          <li class="item swiper-slide"><a href="">
            <div class="img-wrap"><img src="./images/newProduct/02.png" alt="">
            </div>
            <span class="name">男式羽毛球鞋</span> <span class="name-desc">科技材质，体验“小飞人”的轻盈穿着</span>
            <div class="name-price"><span>￥269</span></div>
          </a></li>
          <li class="item swiper-slide" ><a href="">
            <div class="img-wrap"><img src="./images/newProduct/03.png" alt="">
            </div>
            <span class="name">双层封口咔咔密实袋</span> <span class="name-desc">生活，如你所见的新鲜</span>
            <div class="name-price"><span>￥12.9</span></div>
          </a></li>
          <li class="item swiper-slide" ><a href="">
            <div class="img-wrap"><img src="./images/newProduct/04.png" alt="">
            </div>
            <span class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span> <span class="name-desc">夏季爆品，媲美现煮</span>
            <div class="name-price"><span>￥88</span></div>
          </a></li>
          <li class="item swiper-slide" ><a href="">
            <div class="img-wrap"><img src="./images/newProduct/05.png" alt="">
            </div>
            <span class="name">花漾初绽四件套</span> <span class="name-desc">独家花漾设计，纯棉透气亲肤</span>
            <div class="name-price"><span>￥299</span></div>
          </a></li>
          <li class="item swiper-slide" ><a href="">
            <div class="img-wrap"><img src="./images/newProduct/06.png" alt="">
            </div>
            <span class="name">男士清凉透气超轻休闲鞋</span> <span class="name-desc">舒适透气，自在如风的畅快感</span>
            <div class="name-price"><span>￥</span> <span>299</span></div>
          </a></li>
          <li class="item swiper-slide"><a href="" class="itemWord"><span class="txt">查看全部</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'


  export default {
    mounted() {
      this.$nextTick(() => {
        new Swiper('.swiper-inner3', {
          autoheight: true,   //自动填充高度
          width: 140
        })
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .better-good
    margin-bottom (20/$rem)
    background-color #fff
    .header
      background-image url(./images/newProduct/bg.png)
      background-repeat no-repeat
      background-size (10rem 260/$rem)
      height (260/$rem)
      margin-bottom (32/$rem)
      display flex
      align-items center
      justify-content center
      .more
        display block
        text-align center
        font-size (36/$rem)
        color #B4A078
        .all
          margin (24/$rem auto 0)
          width (240/$rem)
          height (56/$rem)
          font-size (28/$rem)
          line-height (56/$rem)
          background #F4E9CB
          position relative
          .wrap
            display inline-block
            width (128/$rem)
            .arrow-right
              background-image url("./images/newProduct/right.png")
              position absolute
              top (20/$rem)
              background-size (10/$rem 22/$rem)
              display inline-block
              height (22/$rem)
              width (10/$rem)
              margin-left 0.8rem
    .goods-contain
      height (480/$rem)
      background-color #fff
      .swiper-inner3
        display flex
        overflow hidden
        .list
          display flex
          .item
            margin-left (30/$rem)
            width (280/$rem)
            .itemWord
              display block
              font-size (28/$rem)
              text-align center
              line-height (280/$rem)
              height (280/$rem)
              border solid #f4f4f4 (4/$rem)
            &.more
              height (280/$rem)
              line-height (280/$rem)
              text-align center
              border (10/$rem) solid #F4F4F4
              .txt
                font-size (28/$rem)
            a
              display block
              height 100%
              .img-wrap
                position relative
                border-radius (40/$rem)
                background-color #f4f4f4
                margin-bottom (20/$rem)
                height (280/$rem)
                img
                  display block
                  position absolute
                  top 0
                  left 0
                  width 100%
                  height 100%
              .name
                display block
                font-size (28/$rem)
                line-height (34/$rem)
                padding (0 10/$rem)
                margin (10/$rem 0)
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                color #333
              .name-desc
                display block
                font-size (24/$rem)
                line-height (30/$rem)
                padding (0 10/$rem)
                margin-bottom (14/$rem)
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                color #7f7f7f
              .name-price
                padding (0 10/$rem)
                font-size (28/$rem)
                color #b4282d





</style>
