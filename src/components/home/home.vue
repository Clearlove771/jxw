<template>
    <div class="home">
        <!-- 搜索框 -->
          <search></search>
        <!-- 轮播图 -->
        <carasel></carasel>
        <!-- 分类  -->
        <list></list>
        <!-- 美女 -->
        <div>
         <img src="https://img08.jiuxian.com/bill/2019/1028/e7bbcbb19ef6483f986fc94c4b304aea.jpg" alt="">
         <div class="bottom">
         <img src="https://img08.jiuxian.com/bill/2019/1028/b95b3584a97f4f43afb4eb0055a866b1.jpg" alt="">
         <img src="https://img08.jiuxian.com/bill/2019/1028/7395ee3c888d4d9688e7c08cb2d90b10.jpg" alt="">
         </div>
        </div>
    </div>
</template>
<script>
import search from "./components/search.vue"
import carasel from "./components/carasel.vue"
import list from "./components/list.vue"
export default {
    components:{
     search,
     carasel,
     list
    }
}
</script>
<style lang="less" scoped>
    .bottom{
    display: flex;
    flex: 1;
    img{
        width: 50%;
        height: 50%;
    }
    }
</style>