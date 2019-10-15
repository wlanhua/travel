import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
Vue.use(VueRouter)
const router=new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
   //return{ x:0,y:100}
  //   if(savedPosition==ture){
  //     return savedPosition;
  //   }else {
  //     return{x:0,y:0}
  //   }
    return{selector:'.btn'}
  }

})
new Vue({
  el: '#app',
  render: h => h(App),
  router,

})
