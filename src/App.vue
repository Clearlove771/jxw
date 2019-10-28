<template>
  <div id="app">
      <Navlist></Navlist>
      <router-view></router-view>
  </div>
</template>

<script>
import Navlist from "./common/navlist/navlist.vue"
export default {
  name: 'app',
  components: {
    Navlist,
  }
}
</script>
<style>
</style>
