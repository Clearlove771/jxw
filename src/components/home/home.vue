<template>
  <div class="home">
    <div v-show="isShow">v-show</div>
    <div v-if="ifShow">v-if</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      ifShwo: false
    };
  }
};
</script>

<style scoped>
</style>