<template>
    <div>
      <Top></Top>
      <Search></Search>

      <HotWords></HotWords>
    </div>
</template>

<script>

import Top from "./zujian/top.vue"
import Search from "./zujian/search.vue"
import HotWords from './zujian/HotWords.vue';
export default {
    components:{
        Top,
        Search,
        HotWords,
    }
}
</script>

<style lang="less" scoped>
div{
    overflow: hidden;
}
</style>