<template>
  <!--头部导航-->
  <div class="header-nav">
    <header>
      <a href="/" class="logo"></a>
      <div class="search">
        <i class="icon"></i>
        <span class="serach-content">搜索商品，共97565款好物</span>
      </div>
    </header>
   <div class="wrap-better">
     <div class="header-scroll">
       <ul class="list">
         <li class="tab tab-bottom"><span class="txt">推荐</span></li>
         <li class="tab" v-for="(headCate, index) in headCates" :key="index"><span class="txt">{{headCate.name}}</span></li>

       </ul>
     </div>
   </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState, mapActions} from 'vuex'
  export default {

   /* methods: {
      ...mapActions(['getHeeadCateList'])
    },*/
    computed: {
      ...mapState(['headCates'])
    },
    mounted() {
      this.$store.dispatch('getHeadCateList')
      this.$nextTick(() => {
        new BScroll('.header-scroll', {
          scrollX: true,
          scrollY: false
        })
      })
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header-nav
    position fixed !important
    z-index 100
    left 0
    top 0
    width 100%
    background #fff
  //background-color #F4F4F4
    header
      display flex
      align-items center
      padding (16/$rem 30/$rem)
      .logo
        width (140/$rem)
        height (40 /$rem)
        background-image url("./images/logo.png")
        display inline-block
        margin-right (20 /$rem)
        background-position center
        background-size cover
      .search
        display flex
        flex-grow 1
        align-items center
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
    .wrap-better
      margin-top (-(16/$rem))
      .header-scroll
        width 100%
        overflow hidden
        .list
          float left
          white-space nowrap
          .tab
            display inline-block
            padding (0 30/$rem)
            .txt
              font-size (28/$rem)
              text-align center
            &.tab-bottom
              border-bottom (4/$rem) red solid

</style>
