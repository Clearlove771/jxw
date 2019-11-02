<template>
  <div class="goOne">
    <ul>
      <li v-for="(item,index) in list" :key="index">
         <a href="#"><img v-lazy="item" alt=""></a> 
      </li>
    </ul>
  </div>
</template>
<script>
import {getGoOne} from "@/api/index.js";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    this.list = await getGoOne();
  }
};
</script>