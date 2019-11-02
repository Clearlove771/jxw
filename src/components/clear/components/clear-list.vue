<template>
  <div class="clist">
    <ul>
      <router-link tag="li" to="/details" v-for="(item,index) in clearList" :key="index" >
           <img :src="item.img" alt="">
            <p class="con">{{item.content}}</p>
            <p class="price">￥ {{item.price}}</p>
            <button>点击购买</button>
      </router-link>
    </ul>
    <img src="../img/three.jpg" alt="">
     <ul>
      <li v-for="(item,index) in clearList" :key="index">
           <img :src="item.img" alt="">
            <p class="con">{{item.content}}</p>
            <p class="price">￥ {{item.price}}</p>
            <button>点击购买</button>
      </li>
    </ul>
    <img src="../img/three.jpg" alt="">
     <ul>
      <li v-for="(item,index) in clearList" :key="index">
           <img :src="item.img" alt="">
            <p class="con">{{item.content}}</p>
            <p class="price">￥ {{item.price}}</p>
            <button>点击购买</button>
            
      </li>
    </ul>
  
  </div>
</template>

<script>
import { getClearList } from "@/api";
export default {
      data(){
        return {
            clearList: []
        }
    },
    async created(){
        this.clearList= await getClearList();
    }
};
</script>

<style lang="less" scoped>
.clist{
    width: 100%;
    background-color: #006FEE;
    height: calc(100%-200px);
    overflow: hidden;
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            height: 500px;
            width: 50%;
            background: #fff;
            border:8px solid #006FEE;
            border-left-width: 16px;
            border-right-width: 16px;
            box-sizing: border-box;
            padding: 20px;
            font-size: 16px;
            position: relative;
            img{
                height: 300px;
                width: 100%;
                text-align: center;
            }
            .con{
                width: 100%;
                text-align: center;
            }
            .price{
                font-weight: 800;
                color: rgb(238, 80, 31);
                position: absolute;
                bottom: 20px;
                left: 40px;
            }
            button{
                color: #fff;
                background-color: #FF0000;
                position: absolute;
                bottom: 20px;
                right: 10px;
                border:none;
                padding: 8px;
                border-radius: 5%;
            }
        }
        li:nth-child(2n-1){
            border-right: none;
        }
        
    }
}

</style>