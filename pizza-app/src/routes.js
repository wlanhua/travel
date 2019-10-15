import ad from './components/admin.vue'
import home from './components/home.vue'
import about from './components/about/about.vue'
import login from './components/login.vue'
import menu from './components/menu.vue'
import reg from './components/register.vue'

//二级路由
import contact from './components/about/contact.vue'
import order from './components/about/orderguide.vue'
import kuaidi from './components/about/kuaidi.vue'
import history from './components/about/history.vue'
import phone from './components/about/contact/phone.vue'
import person from './components/about/contact/person.vue'


export const routes=[
  {path:'/',name:'home',components:{
    default:home,
    'history':history,
    'order':order,
    'kuaidi':kuaidi

  }},
  {path:'/ad',component:ad,name:'ad'},

  {path:'/about',component:about,name:'ab', redirect:'/about/contact',children:[
    {path:'/about/contact',component:contact,name:'contact',redirect:'/phone',children:[
      {path:'/phone',component:phone,name:'phone'},
      {path:'/person',name:'person',component:person}]},
    {path:'/history',component:history,name:'history'},
    {path:'/kuaidi',component:kuaidi,name:'kuaidi'},
    {path:'/order',component:order,name:'order'},
  ]},
  {path:'/login',component:login,name:'login'},
  {path:'/menu',component:menu,name:'menu'},
  {path:'/reg',component:reg,name:'reg'},
  {path:'*',redirect:'/'},//上面的路由匹配不到就返回到主页
]

