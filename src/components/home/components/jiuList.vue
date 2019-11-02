<template>
  <div class="jiulist">
    <ul>
      <li v-for="(item,index) in list" :key="index" class="list">
        <img v-lazy="item.img" alt="">
        <p>{{item.p}}</p>
        <span>{{item.span}}</span>
        <s>{{item.s}}</s>
      </li>
    </ul>
  </div>
</template>
<script>
import {getjiulist} from "@/api/index.js";
export default {
  data() {
    return {
      list: [],
    };
  },
  async created() {
    this.list = await getjiulist();
  }
};
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
    height: 0;
    width: 0;
}
.jiulist{
    margin-top: 10px;
    border-top: 1px solid #bbb;
    ul{
        overflow-x: auto;
        display: flex;
     li{
        padding: 5px; 
        img{
            width: 96px;
            height: 96px;
        }
      p{
          height: 40px;
          overflow: hidden;
      } 
      span{
          font-size: 15px;
          color: red;
          display: block;
      } 
     }
    }
}
</style>