<template>
  <div class="fangle-wrap">
    <FongleHeader/>
    <div class="content-wrap">
      <Banner/>
      <Channel/>
      <Recommend/>
      <TenFive/>
      <Product/>
      <LOOK/>
      <FindMore/>
    </div>
  </div>
</template>
<script>
  import FongleHeader from '../../components/FongleHeader/FongleHeader.vue'
  import Banner from '../../components/Fangle/Banner/Banner.vue'
  import Channel from '../../components/Fangle/Channel/Channel.vue'
  import Recommend from '../../components/Fangle/Recommend/Recommend.vue'
  import TenFive from '../../components/Fangle/TenFive/TenFive.vue'
  import Product from '../../components/Fangle/Product/Product.vue'
  import LOOK from '../../components/Fangle/LOOK/LOOK.vue'
  import FindMore from '../../components/Fangle/FindMore/FindMore.vue'
  export default {
    components: {
      FongleHeader,
      Banner,
      Channel,
      Recommend,
      TenFive,
      Product,
      LOOK,
      FindMore
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .fangle-wrap
    padding-bottom (98/$rem)
    background-color #F4F4F4
    .content-wrap
      margin-top (88/$rem)  //因为头部固定定位了
</style>
