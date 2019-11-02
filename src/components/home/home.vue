<template>
  <div class="home">
    <!-- 搜索框 -->
    <search ref="oneChild"></search>
    <!-- 轮播图 -->
    <carasel></carasel>
    <!-- 分类  -->
    <list></list>
    <!-- 美女 -->
    <div>
      <img src="https://img08.jiuxian.com/bill/2019/1028/e7bbcbb19ef6483f986fc94c4b304aea.jpg" alt />
      <div class="bottom">
        <img
          src="https://img08.jiuxian.com/bill/2019/1028/b95b3584a97f4f43afb4eb0055a866b1.jpg"
          alt
        />
        <img
          src="https://img08.jiuxian.com/bill/2019/1028/7395ee3c888d4d9688e7c08cb2d90b10.jpg"
          alt
        />
      </div>
    </div>
    <!--酒仙头条 -->
    <headline></headline>
    <!-- 酒分类 -->
    <jiuList></jiuList>
    <!-- goOne -->
    <goOne></goOne>
    <!-- 精选套装 -->
    <div class="jing">
      <div class="left">
        <a href="#">
          <img
            src="https://img07.jiuxian.com/bill/2019/0916/a3d193822f094b209f9e8f2b1cb891a2.jpg"
            alt
          />
        </a>
      </div>
      <div class="right">
        <a href="#">
          <img
            src="https://img10.jiuxian.com/bill/2019/0827/02562d72067247959290b5e362098c30.jpg"
            alt
          />
        </a>
        <a href="#">
          <img
            src="https://img09.jiuxian.com/bill/2019/0730/322e644c697c4cb088a1202536cf5f2e.jpg"
            alt
          />
        </a>
      </div>
    </div>
    <!-- 每日推荐 -->
    <day></day>
    <!-- goTwo -->
    <goTwo></goTwo>
    <!-- 精选频道 -->
    <jing></jing>
    <!-- 酒馆 -->
    <guan></guan>
    <!-- 主题街 -->
    <zhuti></zhuti>
    <!-- 爆款推荐 -->
    <baokuan></baokuan>
    <!-- 返回顶部 -->
    <backTop ref="twoChild"></backTop>
    <!-- 底部 -->
    <bottom></bottom>
  </div>
</template>
<script>
import search from "./components/search.vue";
import carasel from "./components/carasel.vue";
import list from "./components/list.vue";
import headline from "./components/headline.vue";
import jiuList from "./components/jiuList.vue";
import goOne from "./components/goOne.vue";
import day from "./components/day.vue";
import goTwo from "./components/goTwo.vue";
import jing from "./components/jingxuan.vue";
import guan from "./components/guan.vue";
import zhuti from "./components/zhuti.vue";
import baokuan from "./components/baokuan.vue";
import backTop from "./components/backTop.vue";
import bottom from "./components/bottom.vue"
export default {
  components: {
    search,
    carasel,
    list,
    headline,
    jiuList,
    goOne,
    day,
    goTwo,
    jing,
    guan,
    zhuti,
    baokuan,
    backTop,
    bottom
  },
  mounted() {
    window.onscroll = () => {
      let osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (osTop >= 200) {
        this.$refs.oneChild.$refs.bg.style.background = "#e5383b";
        if(osTop>=450){
         this.$refs.twoChild.isShow = true;
        }
        else{
             this.$refs.twoChild.isShow = false;
        }
      } else {
        this.$refs.oneChild.$refs.bg.style.background = "";
      }
    };
  },
  destroyed() {
    window.onscroll = "";
  }
};
</script>
<style lang="less" scoped>
.home {
  padding-bottom: 88px;
}
.bottom {
  display: flex;
  flex: 1;
  img {
    width: 50%;
    height: 50%;
  }
}
.jing {
  margin-top: 20px;
  display: flex;
}
</style>