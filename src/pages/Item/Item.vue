<template>
  <div class="item-wrap">
    <div class="item-header">
      <div class="wrap">
        <i class="icon"></i>
        <span class="serach-content">搜索商品, 共10918款好物</span>
      </div>
    </div>

    <div class="item-left ">
      <div class="main-left scroll-container">
        <ul class="list">
          <li class="item" :class="{active: showIndex(index)}" v-for="(category, index) in categorys"
              :key="index" @click="goto(index)">
            <a href="javascript:;" class="txt">{{category.name}}</a>
          </li>
        </ul>
      </div>
    </div>

    <ItemRight :index="index" :categorys="categorys"/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import ItemRight from '../../components/Item/ItemRight.vue'
  export default {
    data () {
      return {
        index: 3
      }

    },
    computed: {
      ...mapState(['categorys'])
    },
    mounted () {
      this.$store.dispatch('getCategorys', () => {
        this.$nextTick(() => {
          new BScroll('.scroll-container', {
            probeType: 2,
            click: true
          })
        })
      })
    },
    methods: {
      goto (index) {
        this.index=index
      },
      showIndex (index) {
        return index === this.index
      }
    },
    components: {
      ItemRight
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .item-wrap
    padding-bottom (98/$rem)
    .item-header
      position fixed !important
      z-index 100
      left 0
      top 0
      width 100%
      background #fff
      height (88 /$rem)
      border-bottom 1px solid #ededed
      .wrap
        margin (16 /$rem 30 /$rem)
        display flex
        align-items center
        flex-grow 1
        justify-content center
        height: (56 /$rem)
        font-size: (28 /$rem)
        background-color: #ededed;
        border-radius: (8 /$rem)
        .icon
          display inline-block
          vertical-align middle
          background-image url("./images/search.png")
          background-repeat no-repeat
          background-size (100% 100%)
          width (28 /$rem)
          height (28 /$rem)
          margin-right (10 /$rem)
        .serach-content
          color #666
          display block
          font-size: (28 /$rem)

    .item-left
      position fixed
      left 0
      top (88 /$rem)
      width (162 /$rem)
      overflow hidden
      background-color #fff
      height 100%
      .main-left
        position absolute
        width 100%
        height 95%
        .list
          border-right solid 1px #ededed
          padding (40 /$rem 0 138 /$rem)
          .item
            margin-top (40 /$rem)
            height (50 /$rem)
            width 100%
            text-align center
            &:first-child
              margin-top 0
            &.active
              position relative
              &:before
                content ''
                position absolute
                top 0
                left 0
                bottom 0
                width (6 /$rem)
                background-color #ab2b2b
              .txt
                font-size (36 /$rem)
                color #ab2b2b
            .txt
              display block
              font-size (28 /$rem)
              line-height (50 /$rem)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #333


</style>
