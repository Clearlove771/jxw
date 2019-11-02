<template>
  <div id="cata">
    <!-- 顶部"选酒" -->
     <top></top>

    <!-- 搜索栏 -->
   <search></search>

    <!-- 分类栏 -->
    <FenLei></FenLei>
    
  </div>
</template>
<script>

import top from './components/top.vue'
import search  from './components/search.vue'
import FenLei from './components/fenlei.vue'
export default {
  components:{
    top,
    search,
    FenLei,
  }
}
</script>

