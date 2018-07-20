import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Fangle from '../pages/Fangle/Fangle.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Item from '../pages/Item/Item.vue'
import InterLayer from '../pages/InterLayer/InterLayer.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        isShow: true
      }
    },
    {
      path: '/fangle',
      component: Fangle,
      meta: {
        isShow: true
      }
    },
    {
      path: '/item',
      component: Item,
      meta: {
        isShow: true
      }
    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta: {
        isShow: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        isShow: true
      }
    },
    {
      path: '/interLayer',
      component: InterLayer
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/interLayer'
    }
  ]
})
