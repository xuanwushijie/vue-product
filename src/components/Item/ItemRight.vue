<template>
  <div class="main-right">
    <div class="right-top" v-if="categorys[index]" :style="{backgroundImage:'url('+categorys[index].bannerUrl+')'}"></div>

    <div class="right-bottom">
      <div class="hd">
          <span class="txt">
            <span class="txt1" v-if="categorys[index]">{{categorys[index].name}}</span>
            <span class="txt2">分类</span>
          </span>
      </div>
      <ul class="list" v-if="categorys[index]">
        <li class="item" v-for="(cate, i) in categorys[index].subCateList" :key="i">
          <a href="/">
            <div class="lazy-img">
              <img :src="cate.wapBannerUrl" alt="">
            </div>
            <div class="name">{{cate.name}}</div>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      index: Number,
      categorys: Array
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl";
.main-right
  margin-top (88 /$rem)
  margin-left (162 /$rem)
  padding (30 /$rem 30 /$rem 21 /$rem)
  overflow hidden
  .right-top
    background center no-repeat #f4f4f4
    width 100%
    height (192 /$rem)
    background-size cover
    border-radius (4 /$rem)
  .right-bottom
    .hd
      font-size (24 /$rem)
      height (108 /$rem)
      color #333
      display flex
      align-items center
      justify-content center
      .txt
        display flex
        align-items center
        justify-content center
        padding (0 8 /$rem)
        color #7f7f7f
        line-height (30 /$rem)
        font-size (24 /$rem)
        &::before, &::after
          content ''
          display inline-block
          width (24 /$rem)
          height 1px
          background-color #7f7f7f
        .txt1
          margin-left (8 /$rem)
        .txt2
          margin-right (8 /$rem)

    .list
      .item
        display inline-block
        margin-right (7 /$rem)
        width (144 /$rem)
        font-size 0
        vertical-align top //为了lazy-img
        &:nth-child(3n)
          margin-right (-10 /$rem)
        a
          .lazy-img
            width (144 /$rem)
            height (144 /$rem)
            img
              width 100%
              height 100%
          .name
            text-align center
            color #333
            line-height (34 /$rem)
            font-size (24 /$rem)

</style>
