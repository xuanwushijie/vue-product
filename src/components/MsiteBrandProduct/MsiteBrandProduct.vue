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
        <li v-if="tagList" class="item " v-for="(tagList, index) in tagListsFliter" :key="index">
          <a href="" >
            <img :src="tagList.picUrl" alt="">
          <div class="content"><h4 class="title">{{tagList.name}}</h4>
            <div class="price"><span class="price1">{{tagList.floorPrice}}</span> <span class="price2">元起</span></div>
          </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['tagLists']),
      tagListsFliter () {
        let arr = []
        for (var i = 0; i < 4; i++) {
          arr.push(this.tagLists[i])
        }
        return arr
      }
    },
    mounted () {
      this.$store.dispatch('getTagList')
    }
  }
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
