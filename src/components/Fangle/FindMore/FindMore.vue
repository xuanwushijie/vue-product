<template>
  <div class="find-more-wrap">
    <div class="line-title">
      <span class="inner">更多精彩</span>
    </div>
    <div class="content">
      <a href="/" class="topic-item" >
        <div class="img-container onePic"></div>
        <div class="desc">严选原创设计 风袅桃溪系列首发</div>
      </a>
      <a href="/" class="topic-item" >
        <div class="img-container onePic"></div>
        <div class="desc">严选原创设计 风袅桃溪系列首发</div>
      </a>
      <a href="/" class="topic-item" >
        <div class="img-container onePic"></div>
        <div class="desc">严选原创设计 风袅桃溪系列首发</div>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .find-more-wrap
    margin (0 30/$rem 30/$rem)
    .line-title
      display flex
      align-items center
      height (140/$rem)
      &:after, &:before
        content ''
        display block
        width (264/$rem)
        height 1px
        background-color #d999
      .inner
        display inline-block
        margin (0 24/$rem)
        color #333
        font-size (28/$rem)
    .content
      .topic-item
        display block
        margin-bottom (30/$rem)
        padding (24/$rem)
        background-color #fff
        color #333
        .img-container
          background-image: url('images/01.jpg')
          background-position center
          background-repeat no-repeat
          background-size cover
          width (642/$rem)
          height (360/$rem)
        .desc
          padding-top (29/$rem)
          padding-bottom (28/$rem)
          line-height 1.2
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          font-size (28/$rem)



</style>
