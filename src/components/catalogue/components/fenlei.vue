<template>
  <div>
    <ul id="list">
      <li class="lis bj">
        <a href>
          <i></i>
          <span>白酒</span>
        </a>
      </li>
      <li class="lis ptj">
        <a href>
          <i></i>
          <span>葡萄酒</span>
        </a>
      </li>
      <li class="lis yj">
        <a href>
          <i></i>
          <span>洋酒</span>
        </a>
      </li>
      <li class="lis zxg">
        <a href>
          <i></i>
          <span>整箱购</span>
        </a>
      </li>
      <li class="lis lj">
        <a href>
          <i></i>
          <span>老酒</span>
        </a>
      </li>
      <li class="lis qctm">
        <a href>
          <i></i>
          <span>清仓特卖</span>
        </a>
      </li>
      <li class="lis hwzc">
        <a href>
          <i></i>
          <span>海外直采</span>
        </a>
      </li>
      <li class="lis jmdt">
        <a href>
          <i></i>
          <span>精美大坛</span>
        </a>
      </li>
      <li class="lis hjzx">
        <a href>
          <i></i>
          <span>红酒整箱</span>
        </a>
      </li>
      <li class="lis zdm">
        <a href>
          <i></i>
          <span>值得买</span>
        </a>
      </li>
      <li class="lis xlph">
        <a href>
          <i></i>
          <span>销量排行</span>
        </a>
      </li>
      <li class="lis lswl">
        <a href>
          <i></i>
          <span>礼尚往来</span>
        </a>
      </li>
    </ul>
  </div>
</template>





<style lang="less" scoped>
#list {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  list-style: none;

  li {
    width: 33%;
    height: 80px;
    float: left;
    display: block;
    border-left: 1px solid #f6f6f6;
    border-bottom: 1px solid #f6f6f6;

    a {
      color: #333;
    }

    i {
      width: 36px;
      height: 36px;
      display: block;
      margin: 10px auto;
    }
    span {
      display: block;
      text-align: center;
      font-family: "华文细黑", "Microsoft YaHei", "黑体", sans-serif;
      font-size: 14px;
      line-height: 1.5;
    }
  }
  .bj i {
    background: url(./images/cata.png) 0 0;
  }
  .ptj i {
    background: url(./images/cata.png) -84px 0px;
  }
  .yj i {
    background: url(./images/cata.png) -165px 1px;
  }
  .zxg i {
    background: url(./images/cata.png) 0 -70px;
  }
  .lj i {
    background: url(./images/cata.png)-84px -70px;
  }
  .qctm i {
    background: url(./images/cata.png)-165px -70px;
  }
  .hwzc i {
    background: url(./images/cata.png) 0 -141px;
  }
  .jmdt i {
    background: url(./images/cata.png) -84px -141px;
  }
  .hjzx i {
    background: url(./images/cata.png) -165px -141px;
  }
  .zdm i {
    background: url(./images/cata.png) 0 -217px;
  }
  .xlph i {
    background: url(./images/cata.png) -84px -218px;
  }
  .lswl i {
    background: url(./images/cata.png)-165px -217px;
  }
}
</style>