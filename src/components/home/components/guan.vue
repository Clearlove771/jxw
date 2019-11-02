<template>
    <div class="guan">
     <ul>
         <li v-for="(item,index) in list " :key="index">
             <a href="#"><img v-lazy="item.guan" alt=""></a>
             <div class="top">
                 <div class="left">
                     <a href="#"><img v-lazy="item.left" alt=""></a>
                 </div>
                 <div class="right">
                   <a href="#"><img v-lazy="item.rightTop" alt=""></a>
                  <div class="rightTop">
                      <a href="#"><img v-lazy="item.rightBottomLeft" alt=""></a>
                      <a href="#"><img v-lazy="item.rightBottom" alt=""></a>
                  </div>
                 </div>
             </div>
             <div class="bottom">
                 <ul>
                     <li v-for="(i,index) in item.bottom.length" :key="index">
                         <a href="#">
                             <img v-lazy="item.bottom[index]" alt="">
                         </a>
                     </li>
                 </ul>
             </div>
         </li>
     </ul>
    </div>
</template>
<script>
import {getGuan} from "@/api/index.js"
export default {
    data(){
        return{
            list:[]
        }
    },
   async created(){
       this.list=await getGuan();
   }
}
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
    height: 0;
    width: 0;
}
  .top{
      display: flex;
      .left{
        flex: 0.63;
      }
      .right{
      flex: 1;
      .rightTop{
          display: flex;
      }
      }
  }
  .bottom{
      ul{ overflow-x: auto;
          display: flex;
          li{
           width: 88px;
           margin-right: 80px;
           img{
               width: 88px;
           }
          }
      }
  }
</style>