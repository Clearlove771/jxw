<template>
  <div>
    <!-- 顶部"选酒" -->
    <div class="top">
      <img src="./images/headBack.jpg" alt class="back" />
      <h2>选酒</h2>
      <a href="javascript:;" class="nav"></a>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 顶部"选酒"
#cata {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
}
.top {
  position: fixed;
  width: 100%;
  height: 40px;
  left: 0;
  top: 0;
  background: #de4943;
  z-index: 1000;
  color: #fff;
  overflow: hidden;
  .back {
    position: absolute;
    height: 40px;
    width: 30px;
    left: 10px;
  }
  h2 {
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    font-weight: 500;
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .nav {
    background: url(./images/headIcon.png);
    display: inline-block;

    background-position: -150px 6px;
    right: 10px;
    width: 30px;
    height: 40px;
    position: absolute;
    top: 0;
    display: block;
  }
}
</style>