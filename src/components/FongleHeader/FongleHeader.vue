<template>
  <div class="fongle-header1">
    <div class="top-bar1">
      <a href="#/msite" class="icon-home"></a>
      <div class="icon-logo-wrap">
        <i class="logo-wrap"></i>
      </div>
      <div class="right">
        <a href="" class="search">
          <i class="icon-search"></i>
        </a>
        <a href="#/shopCart" class="cart">
          <i class="icon-cart"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .fongle-header1
    position fixed!important
    left 0
    top 0
    width 100%
    height (87/$rem)
    z-index 2
    .top-bar1
      background-color #fafafa
      height 100%
      padding (0 16/$rem 0 24/$rem)
      display flex
      align-items center
      justify-content space-between
      position relative
      .icon-home
        position relative
        top 0
        left 0
        width (48/$rem)
        height (44/$rem)
        background-position (0 -74/$rem)
        background-size (172/$rem 398/$rem)
        background-repeat no-repeat
        background-image url("./images/xb.png")
      .icon-logo-wrap
        display block
        .logo-wrap
          display inline-block
          vertical-align middle
          position absolute
          left 0
          right 0
          bottom 0
          top 0
          margin auto
          background-position (0 -128/$rem)
          background-size (172/$rem 398/$rem)
          background-repeat no-repeat
          background-image url("./images/xb.png")
          height (54/$rem)
          width (172/$rem)
      .right
        display flex
        margin-right (-260/$rem)
        .search
          display block
          .icon-search
            display inline-block
            background-position (0 -334/$rem)
            background-size (172/$rem 398/$rem)
            background-repeat no-repeat
            background-image url("./images/xb.png")
            height (64/$rem)
            width (64/$rem)
        .cart
          .icon-cart
            display inline-block
            background-position (0 0)
            background-size (172/$rem 398/$rem)
            background-repeat no-repeat
            background-image url("./images/xb.png")
            height (64/$rem)
            width (64/$rem)

</style>
