<template>
  <div>
    <div id="search">
      <div class="search">
        <em class="sIcon" id="searchIcon"></em>
        <b id="search_text">硬核11.11 壕掷千万补贴</b>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 顶部搜索栏

#search {
  width: 100%;
  height: 40px;
  background-color: #fafafa;
  z-index: 100;
  overflow: hidden;
  border-bottom: 1px solid #e4e4e4;
  margin-top: 40px;
  box-sizing: border-box;
  padding: 6px 15px;
  .search {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 5px;
    background-color: #ececec;

    .sIcon {
      display: inline-block;
      width: 12px;
      height: 12px;
      position: absolute;
      left: 10px;
      top: 8px;
      background: url(./images/search.png) no-repeat;
      background-size: 120px 40px;
      cursor: pointer;
      background-position: -41px -18px;
    }

    b {
      display: inline-block;
      width: 100%;
      height: 28px;
      font-size: 12px;
      line-height: 28px;
      border: none;
      background-color: #ececec;
      border-radius: 5px;
      padding: 0 30px;
      box-sizing: border-box;
      font-weight: normal;
      color: #666;
      font-family: "Microsoft YaHei";
      cursor: pointer;
    }
  }
}
</style>

