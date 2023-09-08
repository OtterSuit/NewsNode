import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default createStore({
state: {
// 放置变量所用
isGetterRouter:false,
isCollapsed:false
},
mutations: {
// 获取set方法
changeGetterRouter(state,value){
    state.isGetterRouter = value
},
changeCollapsed(state){
    state.isCollapsed = !state.isCollapsed
}
},
plugins: [createPersistedState({
    paths:["isCollapsed"] //控制是否持久化
})],
actions: {
},
modules: {
},
})