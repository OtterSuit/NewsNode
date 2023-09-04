import { createStore } from 'vuex'

export default createStore({
state: {
// 放置变量所用
isGetterRouter:false
},
mutations: {
// 获取set方法
changeGetterRouter(state,value){
    state.isGetterRouter = value
}
},
actions: {
},
modules: {
},
})