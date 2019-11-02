import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)  

var store =new Vuex.Store({
    // 1、state就是数据模型部分
    state:{
        count:3
    },
    // 2.mutations(actions)
    mutations:{
        add:(state)=>{
            state.count++
        },
        sub:(state)=>{
            state.count--
        }
    }
});

export default store;

