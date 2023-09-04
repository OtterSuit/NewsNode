import { createRouter, createWebHashHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import MainBox from '../views/MainBox.vue'
import RoutesConfig from './config'
import store from '../store/index'
// import Home from '../views/home/Home.vue'
// import Center from '../views/center/Center.vue'
const routes = [
 {
  path:"/login",
  name:"login",
  component:LogIn
 },{
  path:"/mainbox",
  name:"mainbox",
  component:MainBox,
  // children:[ //根据权限动态添加

  // ]
 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



//每次路由跳转之前
router.beforeEach((to,from,next)=>{
  if(to.name==='login'){
    next()
  }else{
    //如果授权已经登陆过 则next 未授权 重定向
    if(!localStorage.getItem("token")){
      next({
        path:"/login"
      })
    }else{
        if(!store.state.isGetterRouter){
          ConfigRouter()
          next({
            path:to.fullPath
          })
        }else{
          next()
        }
    }
  }
})

const  ConfigRouter =()=>{
  RoutesConfig.forEach(item =>{
    router.addRoute("mainbox",item)
  })

  //改变isgetterrouter = ture
  store.commit("changeGetterRouter",true)
}
export default router
