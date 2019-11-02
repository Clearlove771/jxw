<template>
    <div class="clear">
        <clearTop></clearTop>
        <clearPic></clearPic>
        <clearList></clearList>
    </div>
</template>

<script>
import clearTop from "./components/clear-top.vue"
import clearPic from "./components/clear-pic.vue"
import clearList from "./components/clear-list.vue"
// import top from "./components/top.vue"
export default {
    components:{
        clearTop,
        clearPic,
        clearList
    }
}
</script>


<style lang="less" scoped>
.clear{
    padding-bottom: 90px;
    background-color: #ccc;
}
</style>