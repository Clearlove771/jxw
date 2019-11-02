<template>
    <div class="zhuti">
        <a href="#"><img src="https://img10.jiuxian.com/bill/2018/0504/6dba580b72164560b8fd47fc81f396b5.jpg" alt=""></a>
     <ul>
         <li v-for="(item,index) in list" :key="index">
          <a href="#"><img v-lazy="item" alt=""></a>
         </li>
     </ul>
    </div>
</template>
<script>
import {getzhuti} from "@/api/index.js"
export default {
    data(){
        return{
            list:[]
        }
    },
  async created(){
       this.list=await getzhuti()
    }
}
</script>
<style lang="less" scoped>
  .zhuti{
      ul{ text-align: center;
         flex-wrap: wrap;
          display: flex;
          li{
              width: 50%;
              img{
                width: 100%;
              }
          }
      }
  }
</style>