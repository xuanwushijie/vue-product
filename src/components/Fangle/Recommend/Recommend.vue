<template>
  <div class="recommend-wrap">
    <div class="container">
      <div class="title">为你推荐</div>
      <a href="/" class="post-item">
        <div class="img-container" >
          <div class="tag">
            <div class="content">严选推荐</div>
          </div>
        </div>
        <div class="topic-info">
          <div class="line1">
            <div class="line1-title"> 选择一种风格，选择一种人生</div>
            <div class="price">
              <span class="num">15.6 </span>
              <span class="unit">元起</span>
            </div>
          </div>
          <div class="line2">ins风、北欧风、复古风等数十款好物限时特价</div>
        </div>
      </a>
      <a href="/" class="minor-item" >
        <div class="minor-topic">
          <div class="author">
            <div class="avatar">
              <img src="//yanxuan.nosdn.127.net/3d88b7b9fb0e1e617313c2d48beda7f1.png?imageView&quality=75&thumbnail=48y48" alt="">
            </div>
            <div class="nickname">丁磊</div>
          </div>
          <div class="line1">优质的成熟蜜千里挑一</div>
          <div class="line2">成熟洋槐蜜限时45元</div>
        </div>
        <div class="minor-pic">
          <div class="img-container" >
            <div class="tag">
              <div class="content">丁磊的好货推荐</div>
            </div>
          </div>
        </div>
      </a>
      <a href="/" class="minor-item" >
        <div class="minor-topic">
          <div class="author">
            <div class="avatar">
              <img src="//yanxuan.nosdn.127.net/3d88b7b9fb0e1e617313c2d48beda7f1.png?imageView&quality=75&thumbnail=48y48" alt="">
            </div>
            <div class="nickname">丁磊</div>
          </div>
          <div class="line1">优质的成熟蜜千里挑一</div>
          <div class="line2">成熟洋槐蜜限时45元</div>
        </div>
        <div class="minor-pic">
          <div class="img-container" >
            <div class="tag">
              <div class="content">丁磊的好货推荐</div>
            </div>
          </div>
        </div>
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

  .recommend-wrap
    padding (0 30/$rem 40/$rem)
    margin-bottom (20/$rem)
    background-color #fff
    font-size 0
    .container
      >.title
        text-align center
        font-size (32/$rem)
        line-height (120/$rem)
        height (120/$rem)
      .post-item
        display block
        color #333
        border 1px solid #d9d9d9
        border-radius (8/$rem)
        margin-bottom (30/$rem)
        .img-container
          background-image: url('images/01.png')
          position relative
          height (386/$rem)
          border-radius (8/$rem 8/$rem 0 0)
          -webkit-background-size cover
          background-repeat no-repeat
          background-position center
          .tag
            position absolute
            top (20/$rem)
            left (20/$rem)
            .content
              display inline-block
              padding (0 16/$rem)
              height (36/$rem)
              line-height (36/$rem)
              background-color rgba(255,255,255,.9)
              border 1px solid #d9d9d9
              border-radius (20/$rem)
              color #333
              font-size (24/$rem)


        .topic-info
          padding (24/$rem 20/$rem 67/$rem)
          .line1
            display flex
            justify-content space-between
            align-items center
            line-height 1.2
            margin-bottom (19/$rem)
            .line1-title
              flex 1
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin-right (30/$rem)
              font-size (36/$rem)
            .price
              min-width (115/$rem)
              text-align center
              font-size (36/$rem)
          .line2
            font-size (28/$rem)
            line-height 1.2
            color #7f7f7f
            white-space nowrap
            overflow hidden
            text-overflow ellipsis


      .minor-item
        display flex
        border 1px solid #d9d9d9
        border-radius (4/$rem)
        margin-bottom (30/$rem)
        color #333
        background-color #fff
        .minor-topic
          flex 1
          display flex
          flex-direction column
          justify-content center
          padding-left (20/$rem)
          padding-right (30/$rem)
          .author
            display flex
            align-items center
            height (48/$rem)
            font-size (20/$rem)
            margin-bottom (25/$rem)
            .avatar
              border 1px solid #d9d9d9
              margin-right (8/$rem)
              border-radius 50%
              overflow hidden
              width (48/$rem)
              height (48/$rem)
              img
                border 0
                display block
                height 100%
                width 100%
            .nickname
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #333
              line-height (24/$rem)
              font-size (20/$rem)
          .line1
            font-size (32/$rem)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin-bottom (14/$rem)
            margin-right (40/$rem)
            line-height 1.2
          .line2
            line-height 1.5
            overflow hidden
            text-overflow ellipsis
            color #7f7f7f
            font-size (24/$rem)
        .minor-pic
          width (280/$rem)
          height (272/$rem)
          .img-container
            background-image: url('images/02.png')
            position relative
            width 100%
            height 100%
            background-color #f4f4f4
            background-position center
            background-repeat no-repeat
            .tag
              position absolute
              top (10/$rem)
              left (10/$rem)
              .content
                display inline-block
                padding (0 16/$rem)
                height (36/$rem)
                line-height (36/$rem)
                background-color rgba(255,255,255,.9)
                border 1px solid #d9d9d9
                border-radius (20/$rem)
                color #333
                font-size (24/$rem)
</style>
