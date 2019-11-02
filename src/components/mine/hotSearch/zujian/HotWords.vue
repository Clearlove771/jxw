<template>
  <!-- 热词and搜索历史 -->
  <div id="hot">
    <div class="hotWords">
      <!-- hot图标 热门搜索 -->
      <div class="hs-title">
        <em class="sIcon"></em>
        <span>热门搜索</span>
      </div>
      <!-- 热词 -->
      <div class="hs-list" id="hot_keyword">
        <span style="color: #fc5a5a">国台</span>
        <span style="color: #fc5a5a">茅台</span>
        <span style="color: #fc5a5a">酒鬼酒</span>
        <span style="color: #666666">五粮液</span>
        <span style="color: #666666">剑南春</span>
        <span style="color: #666666">泸州老窖</span>
        <span style="color: #666666">汾酒</span>
        <span style="color: #666666">洋河</span>
        <span style="color: #666666">水井坊</span>
        <span style="color: #666666">古井贡</span>
        <span style="color: #666666">郎酒</span>
        <span style="color: #666666">西凤</span>
        <span style="color: #666666">董酒</span>
        <span style="color: #fc5a5a">茉莉花</span>
        <span style="color: #666666">奔富</span>
        <span style="color: #666666">马爹利</span>
        <span style="color: #666666">拉菲</span>
        <span style="color: #666666">人头马</span>
        <span style="color: #666666">黄尾袋鼠</span>
        <span style="color: #666666">丁戈树</span>
        <span style="color: #666666">美人鱼</span>
        <span style="color: #666666">克拉克</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#hot {
  padding-top: 15px;

  .hotWords {
    line-height: 24px;
    font-size: 15px;
    color: #252525;
    vertical-align: middle;
    padding: 0 12px;
    position: relative;
    .hs-titlr {
      display: inline-block;
    }
    .sIcon {
      display: inline-block;
      vertical-align: middle;
      width: 16px;
      height: 16px;
      margin-right: 8px;
      margin-top: -2px;
      background: url(./images/search.png) -62px 0;
      background-size: 120px 40px;
    }

    .hs-list {
      padding: 12px 10px 0 10px;

      span {
        display: inline-block;
        padding: 0 12px;
        height: 23px;
        line-height: 23px;
        color: #666;
        font-size: 13px;
        margin: 0 10px 16px 0;
        background-color: #f4f4f4;
        border-radius: 12px;
        cursor: pointer;
      }
    }
  }
}
</style>