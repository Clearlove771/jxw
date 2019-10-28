<template>
    <div class="list">
         <ul>
             <li v-for="(item,index) in list" :key="index"><a href="#"><img :src="item" alt=""></a></li>
         </ul>
    </div>
</template>
<script>
import {getlist} from "@/api/index.js"
export default {
   async created(){
     this.list= await getlist();
    },
    data(){
        return{
            list:[],
        }
    }
}
</script>
<style lang="less" scoped>
.list{
    ul{display: flex;
            flex-wrap: wrap;
        li{
           width: 75px;
           height: 78.81px;
           a{
               img{
                   width: 75px;
                   height: 78.81px;
               }
           } 
        }
    }
}

</style>
