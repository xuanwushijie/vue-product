<template>
  <div id="wrap">
    <!--头部-->
    <MsiteHeader/>
    <!--slide-->
    <MsiteSlide/>
    <!--品牌制造直供-->
    <MsiteBrandProduct/>
    <!--新品首发-->
    <MsiteNewProduct/>
   <!--人气推荐，好物精选-->
    <MsiteBetterGood/>
    <!--限时购-->
    <!--福利社-->
    <MsteLimitTime/>
    <!--专题精选-->
    <MsiteTopic/>
    <!--居家好物-->
    <MsiteLivingHome/>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  import MsiteHeader from '../../components/MsiteHeader/MsiteHeader.vue'
  import MsiteSlide from '../../components/MsiteSlide/MsiteSlide.vue'
  import MsiteBrandProduct from '../../components/MsiteBrandProduct/MsiteBrandProduct.vue'
  import MsiteNewProduct from '../../components/MsiteNewProduct/MsiteNewProduct.vue'
  import MsiteBetterGood from '../../components/MsiteBetterGood/MsiteBetterGood.vue'
  import MsteLimitTime from '../../components/MsteLimitTime/MsiteLimitTime.vue'
  import MsiteTopic from '../../components/MsiteTopic/MsiteTopic.vue'
  import MsiteLivingHome from '../../components/MsiteLivingHome/MsiteLivineHome.vue'

  export default {
    mounted() {
      this.$nextTick(() => {
        new BScroll('.header-scroll', {
          scrollX: true,
          scrollY: false
        })
      })
    },
    components: {
      MsiteHeader,
      MsiteSlide,
      MsiteBrandProduct,
      MsiteNewProduct,
      MsiteBetterGood,
      MsteLimitTime,
      MsiteTopic,
      MsiteLivingHome


    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #wrap
    padding-bottom (98/$rem)
    background-color #F4F4F4
</style>
