<template>
    <div class="day">
      <ul>
          <li v-for="(item,index) in list" :key="index">
              <img v-lazy="item" alt="">
          </li>
      </ul>
    </div>
</template>
<script>
import {getDay} from "@/api/index.js"
export default {
    data(){
        return{
      list:[]
        }
    },
   async created(){
   this.list=await getDay()
    }
}
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
    height: 0;
    width: 0;
}
   .day{
       ul{ overflow-x: auto;
           display: flex;
         li{
             width: 250px;
             img{
                 width: 250px;
             }
         }
       }
   }
</style>