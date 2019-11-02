<template>
  <div class="search" ref="bg">
    <div class="logo"></div>
    <div class="input">
      <img src="./images/search.png" alt />
      <input type="text" placeholder="硬核11.11 壕掷千万补贴" />
    </div>
  </div>
</template>
<script>
export default {
   mounted(){
  
   }
}
</script>
<style lang="less" scoped>
.search {
  opacity: 0.8;
  width: 100%;
  position: fixed;
  z-index: 9999;
  padding: 12px 0;
  display: flex;
  .logo {
    opacity: 1;
    border: 2px solid #fff;
    border-radius: 10px;
    margin-left: 40px;
    display: inline-block;
    width: 114px;
    height: 54px;
    background: #fff url(./images/jlt.png) 0 0;
    background-size: 350% 290%;
  }
  .input {
    opacity: 1;
    width: 70%;
    margin-left: 20px;
    border: 2px solid #ddd;
    line-height: 54px;
    border-radius: 10px;
    background: #fff;
    img {
      display: block;
      width: 30px;
      height: 30px;
      margin-top: 14px;
      margin-left: 20px;
      float: left;
    }
    input {
      margin-left: 10px;
      height: 54px;
      outline: none;
      font-size: 24px;
    }
  }
}
</style>