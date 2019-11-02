<template>
   <div>
      <shoppingTop></shoppingTop>
      <shoppingWarn></shoppingWarn>
      <goods></goods>
   </div>
</template>


<script>
import shoppingTop from "./components/shopping-top.vue"
import shoppingWarn from "./components/shopping-warn.vue"
import goods from "./components/goods.vue"
export default {
   components:{
      shoppingTop,
      shoppingWarn,
      goods
   }
}
</script>
<style lang="less" scoped>
body{
   background-color: #F2F5F6;
}

</style>