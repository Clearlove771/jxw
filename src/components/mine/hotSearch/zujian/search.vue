<template>
  <div id="search">
    <!--  -->
    <a href class="back"></a>
    <div id="searchInput">
      <div class="searchInput">
        <em class="sIcon"></em>
        <input type="search" value placeholder="硬核11.11 壕掷千万补贴" class="input" />
      </div>
    </div>
    <a href class="searchBtn" id="searchBtn">搜索</a>
  </div>
</template>

<style lang="less" scoped>
// 顶部搜索栏

#search {
  width: 100%;
  height: 40px;
  z-index: 100;
  overflow: hidden;
  border-bottom: 1px solid #e4e4e4;
  margin-top: 40px;
  box-sizing: border-box;
  position: relative;
  .back {
    display: block;
    width: 33px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 101;
    background: url(./images/search.png) -3px 0;
    background-size: 120px 40px;
    cursor: pointer;
  }

  #searchInput {
    width: calc(100% - 87px);
    height: 100%;
    padding-left: 33px;
    padding-top: 6px;
    padding-bottom: 5px;

    .searchInput {
      width: 100%;
      position: relative;
      .sIcon {
        display: inline-block;
        width: 12px;
        height: 12px;
        position: absolute;
        left: 10px;
        top: 8px;
        background: url(./images/search.png);
        background-size: 120px 40px;
        cursor: pointer;
        background-position: -41px -18px;
      }
    }

    .input {
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      height: 28px;
      font-size: 12px;
      color: #333;
      line-height: 28px;
      border: none;
      background-color: #ececec;
      border-radius: 5px;
      padding-left: 30px;
      //   padding: 0 30px;
    }
    .input:focus {
      outline: none;
    }
  }
}

.searchBtn {
  display: block;
  width: 54px;
  height: 40px;
  line-height: 40px;
  color: #666;
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>

