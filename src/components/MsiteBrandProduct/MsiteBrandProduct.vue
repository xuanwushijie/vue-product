<template>
  <div class="brand-produce">
    <div class="header">
      <a href="" class="more">
        <span>品牌制造商直供</span>
        <i class="icon"></i>
      </a>
    </div>
    <div class="container">
      <ul class="list">
        <li class="item ">
          <a href="" >
            <img src="./images/brand/01.png" alt="">
          <div class="content"><h4 class="title">CK制造商</h4>
            <div class="price"><span class="price1">25</span> <span class="price2">元起</span></div>
          </div>
          </a></li>
        <li class="item item2">
          <a href="">
            <img src="./images/brand/02.png" alt="">
          <div class="content"><h4 class="title">Nine West制造商</h4>
            <div class="price"><span class="price1">199</span> <span class="price2">元起</span></div>
          </div>
          </a>
        </li>
        <li class="item item3">
          <a href="">
            <img src="./images/brand/03.png" alt="">
          <div class="content"><h4 class="title">新秀丽制造商</h4>
            <div class="price">
              <span class="price1">49</span> <span class="price2">元起</span></div>
          </div>
          </a>
        </li>
        <li class="item item4">
          <a href="">
            <img src="./images/brand/04.png" alt="">
          <div class="content"><h4 class="title">Birkenstock集团制造商</h4>
            <div class="price"><span class="price1">59.9</span> <span class="price2">元起</span></div>
          </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .brand-produce
    background-color #fff
    .header
      display flex
      align-items center
      justify-content center
      height (110 /$rem)
      font-size (32 /$rem)
      a
        display flex
        color #333
        .icon
          margin-left (20/$rem)
          background-image url("./images/right.png")
          background-repeat no-repeat
          background-size (100% 100%)
          display inline-block
          vertical-align middle
          width (30 /$rem)
          height (30 /$rem)
    .container
      padding-bottom (8 /$rem)
      .list
        margin (0 12 /$rem)
        width 100%
        .item
          float left
          display inline-block
          position relative
          margin-bottom (8 /$rem)
          margin-right (8/$rem)
          width (355 /$rem)
          height (236 /$rem)
          background-color #f4f4f4
          a
            width 100%
            height 100%
            display inline-block
            img
              width 100%
              height 100%
            .content
              position absolute
              left 0
              top 0
              padding (20 /$rem 0 0 20 /$rem)
              width 100%
              .title
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
                color #333
                font-size (28 /$rem)
                line-height (34 /$rem)
              .price
                font-size 0
                .price1
                  color #333
                  font-size (28 /$rem)
                  line-height (34 /$rem)
                  display inline-block
                .price2
                  color #333
                  display inline-block
                  font-size (24 /$rem)
                  line-height (34 /$rem)
                  white-space nowrap





</style>
