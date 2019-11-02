<template>
    <div class="me">
        <top></top>
        <message></message>
        <bottom></bottom>
    </div>
</template>
<script>
import top from "./me-moudles/top.vue"
import message from "./me-moudles/message.vue"
import bottom from "./me-moudles/bottom.vue"
export default {
    components:{
    top,
    message,
    bottom
    }
}
</script>
<style lang="less" scoped>
    .me{
        padding-bottom: 100px;
    }
</style>