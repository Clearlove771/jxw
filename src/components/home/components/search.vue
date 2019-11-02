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
  padding: 6px 0;
  display: flex;
  .logo {
    opacity: 1;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-left: 20px;
    display: inline-block;
    width: 57px;
    height: 27px;
    background: #fff url(./images/jlt.png) 0 0;
    background-size: 350% 290%;
  }
  .input {
    opacity: 1;
    width: 70%;
    margin-left: 10px;
    border: 1px solid #ddd;
    line-height: 27px;
    border-radius: 5px;
    background: #fff;
    img {
      display: block;
      width: 15px;
      height: 15px;
      margin-top: 7px;
      margin-left: 10px;
      float: left;
    }
    input {
      margin-left: 5px;
      height: 27px;
      outline: none;
      font-size: 12px;
    }
  }
}
</style>