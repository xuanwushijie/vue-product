<template>
  <div class="personal-wrap">
    <div class="personal-header">
      <div class="m-profile">
        <div class="wrap">
          <div class="left">
            <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="" class="avatar">
            <div class="info">
              <p class="nickname">m18767791273</p>
              <div class="membershipLevel"><span class="memberTitle0">普通用户</span></div>
            </div>
          </div>
          <div class="right">
            <div class="m-supermcEntrance">
              <i class="icon1"></i>
              <div class="word">
                <div class="ine1">超级会员</div>
                <div class="ine2"><span>立即试用</span><i class="icon2"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-list">
     <div class="list-wrap">
       <ul class="list">
         <li  class="item" v-for="(item, index) in pref">
           <a href="" class="m-uMenuItem">
             <i class="icon" :style="`background-image: url(${item.banner});background-position: 0 ${item.y}px;`"></i>
             <span class="txt">{{item.content}}</span>
           </a>
         </li>
       </ul>
     </div>
    </div>
    <div class="personal-login">
      <div class="btn">退出登录</div>
    </div>
  </div>
</template>
<script>
  import FongleHeader from '../../components/FongleHeader/FongleHeader.vue'
  import {mapState} from 'vuex'

  export default {
    methods: {

    },
    mounted () {
      this.$store.dispatch('getPref')
    },
    computed: {
      ...mapState(['pref'])
    },
    components: {
      FongleHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .personal-wrap
    padding-bottom (98/$rem)
    width 100%
    height 100%
    background-color: #f4f4f4
    .personal-header
      width 10rem
      margin (0 auto)
      background-color: #fdf7af55
      .m-profile
        height: 3.6rem;
        background-color: #c1a56b
        padding-left 0.4rem
        overflow hidden
        .wrap
          width auto
          display flex
          align-items center
          .left
            display flex
            flex-wrap wrap
            align-items center
            justify-content flex-start
            padding (0.85333rem 0)
            width 7.2rem
            .avatar
              vertical-align middle
              width 1.89333rem
              height 1.89333rem
              border-radius 50%
            .info
              margin-left 0.4rem
              overflow hidden
              .nickname
                color #fff
                font-size 0.48rem;
                text-align left;
                margin-bottom 0.13333rem
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
              .membershipLevel
                .memberTitle0
                  font-size 0.37333rem
                  vertical-align middle
                  color #fff
          .right
            width (210/$rem)
            height (270/$rem)
            display flex
            align-items center
            .m-supermcEntrance
              display flex
              width 2.70667rem
              height 1.12rem
              background #444
              border-top-left-radius 0.85333rem
              border-bottom-left-radius 0.85333rem
              overflow hidden
              .icon1
                display inline-block
                margin auto 0.12rem
                width 0.74667rem
                height 0.74667rem
                background-image: url('./image/list.png')
                background-repeat no-repeat
                vertical-align middle
                background-size 0.85333rem 14.88rem
                background-position: 0 -2.24rem
              .word
                display inline-block
                padding 0.13333rem 0
                color #EDE7DB;
                vertical-align middle
                font-size (30/$rem)
                .line1
                  font-size (26/$rem)
                  margin-top (10/$rem)
                .line2
                  font-size (10/$rem)
                  margin-top (8/$rem)
                  vertical-align middle
                  .icon2
                    width: 0.24rem;
                    height: 0.24rem;
                    margin-left 0.05333rem
                    background-position
                    display inline-block
                    vertical-align middle
                    background-image url('./image/list.png')
                    background-repeat no-repeat
                    background-size 0.85333rem 14.88rem





    .personal-list
      width 10rem
      margin (0 auto)
      background-color: #fdf7af55
      .list-wrap
        margin-bottom: .53333rem;
        background: #fff;
        .list
          .item
            float: left;
            width: 33.33333%;
            border-right: 1px solid rgba(0,0,0,.15);
            border-bottom: 1px solid rgba(0,0,0,.15);
            .m-uMenuItem
              display: block;
              height: 2.4rem;
              padding-top: .6rem;
              text-align: center;
              .icon
                width: .66667rem;
                height: .66667rem;
                vertical-align: middle;
                margin-bottom: .21333rem;
                display: inline-block;
                background-repeat: no-repeat;
                background-size: .85333rem 14.88rem;

              .txt
                display: block
                font-size 0.32rem
                color #333
    .personal-login
      width: 10rem
      font-size (36/$rem)
      padding-bottom (20/$rem)
      .btn
        margin auto
        width 100%
        height 1.28rem
        line-height 1.28rem
        text-align center
        border 1px solid #fff;
        background-color: #fff;
        color #333


</style>
