<template>
    <div class="baokuan">
        <div class="box">
            <h2></h2>
            <a href="#">爆款推荐</a>
        </div>
       <ul>
           <li v-for="(item,index) in list" :key="index">
               <i>限时抢购</i>
               <a href="#"><img v-lazy="item.img" alt=""></a>
               <p>{{item.p}}</p>
               <span>{{item.span}}</span>
               <s>{{item.s}}</s>
           </li>
       </ul>
    </div>
</template>
<script>
import {getbaokuan} from "@/api/index"
export default {
    data(){
        return{
         list:[]
        }
    },
    async created(){
   this.list=await getbaokuan()
    }
}
</script>
<style lang="less" scoped>
   .baokuan{
       .box{
           h2{
               width: 100%;
               height: 5px;
               background: #eee;
           }
           a{
               width: 100%;
               display: block;
               line-height: 30px;
               color: red;
               font-weight: 800;
               font-size: 16px;
               text-align: center;
           }
       }
       ul{ 
           width: 100%;
           flex-wrap: wrap;
           display: flex;
           li{ 
               width: 50%;
               background: #fff;
               border: 1px solid #eee;
               box-sizing: border-box;
               i{  margin: 5px ;
                   display: inline-block;
                   width: 60px;
                   line-height: 15px;
                   background:#ffa855; 
                   text-align: center;
                   border-radius: 2px;
                   color: #fff;
               }
               p{  padding:5px;
                   height: 35px;
                   overflow: hidden;
               }
               span{
                   padding: 5px;
                   color: red;
                   font-size: 15px;
               }
           }
       }
   }
</style>