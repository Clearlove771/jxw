<template>
  <div class="shangjia">
    <div class="top">
      <p class="logo">
        <img src="../img/jiulogo.jpg" alt />
      </p>
      <span>仙露酒城酒类精品店</span>
      <p class="jt">
        <img src="../img/jtyjt.png" alt />
      </p>
    </div>
    <div class="jieshao">
      <table>
        <tr>
          <td>使用场地</td>
          <td class="rit">聚会用酒</td>
        </tr>
        <tr>
          <td>产地</td>
          <td class="rit">美国</td>
        </tr>
        <tr>
          <td>净含量</td>
          <td class="rit">750ml</td>
        </tr>
        <tr>
          <td>酒精度</td>
          <td class="rit">40%vol</td>
        </tr>
        <tr>
          <td>箱规</td>
          <td class="rit">1*6</td>
        </tr>
      </table>
    </div>
    <div class="shangpintd">
      <i></i>
      <span>商品特点</span>
    </div>
    <div class="dpjs">
      <p>
        <img
          alt
          src="http://img06.jiuxian.com/brandlogo/2017/0113/ea022e7448de46eb81b7d8611b057229.jpg"
        />
        <img
          alt
          src="http://img07.jiuxian.com/brandlogo/2017/0113/0cf84fd2fa2e4f49b4bead95c799c086.jpg"
        />
        <img
          alt
          src="http://img06.jiuxian.com/brandlogo/2017/0113/9259e24af2464fc7a8aebdaf99058eeb.jpg"
        />
        <img
          alt
          src="http://img07.jiuxian.com/brandlogo/2017/0113/a06d2ae19ba9407c838e2f2949f215a1.jpg"
        />
        <img
          alt
          src="http://img07.jiuxian.com/brandlogo/2017/0113/1e1c3397281c4e7fb1c3755e5fed694f.jpg"
        />
      </p>
    </div>
    <div class="shangpintd">
      <i></i>
      <span>温馨提示</span>
    </div>
    <div class="tishi">
      <p class="top">
        本网站不向未成年人售酒,
        <br />为了您和家人的健康，适度饮酒、不要酒后驾车，
        <br />酒仙网祝您购物愉快!
      </p>
      <p class="two">根据新修订的《商标法》及国家工商总局最新文件要求，2014年5月1日之后不得将“驰名商标”字样用于商品宣传，酒仙网依法对商品图片中含“驰名商标”字样做马赛克处理；同时，涉及厂家正在按照新规定逐步更换包装，在此期间，我们将对新旧包装货品随机发货，请以实际收到的货物为准。给您带来的不便，敬请谅解。</p>
      <p class="pro_bold">价格说明</p>
      <ul>
          <li> <i></i>
              <span>酒仙价：</span>酒仙价是商品的指导价，商品展示的酒仙价为参考价，并非原价，该价格可能是品牌专柜标价、或由品牌供应商提供的指导价。
          </li>
           <li><i></i>
              <span>促销价：</span>促销价为商品的销售价，是您最终决定是否购买商品的依据。
          </li>
           <li><i></i>
              <span>折扣：</span>如无特殊说明，折扣指销售商在促销价或酒仙价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系客服进行咨询。
          </li>
           <li><i></i>
              <span>异常问题</span>商品促销信息以商品详情页“促销”栏中的信息为准；商品的最终售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系客服。
          </li>
         
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.shangjia {
//   height: 5900px;
  background: #fff;
  .top {
    height: 128px;
    padding: 20px;
    background: #fff;
    // margin-top: 50px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 20px;
    .logo {
      img {
        height: 76px;
        width: 168px;
        line-height: 128px;
        display: inline-block;
      }
    }
    span {
      position: absolute;
      top: 40px;
      left: 220px;
    }
    .jt {
      img {
        height: 40px;
        width: 40px;
        position: absolute;
        right: 20px;
        top: 50px;
      }
    }
  }
  .jieshao {
    height: 270px;
    width: 100%;
    padding: 20px;
    background: #fff;
    color: #acacac;
    font-size: 26px;
    box-sizing: border-box;
    .rit {
      padding-left: 40px;
      color: #252525;
    }
    td {
      line-height: 44px;
    }
  }
  .shangpintd {
    height: 48px;
    width: 710px;
    padding: 20px;
    margin: 20px 20px;
    box-sizing: border-box;
    background: url(../img/prodInfoBg.jpg) 0 0 repeat-x;
    line-height: 48px;
    position: relative;
    box-sizing: border-box;
    i {
      height: 16px;
      width: 16px;
      background: #f00;
      display: inline-block;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    span {
      position: absolute;
      top: 0px;
      left: 55px;
    }
  }
  .dpjs {
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    overflow: hidden;
    p {
      img {
        width: 710px;
        display: block;
        overflow: hidden;
      }
    }
  }
  .tishi {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 80px;
    .top {
      text-align: center;
      color: #f00;
    }
    .two{
        color: #848484;
        font-size: 24px;
    }
    .pro_bold{
        font-size: 28px;
        font-weight: 800px;
        margin: 20px 0px;
        color: #444;
    }
    ul{
        li{
            list-style-type:circle;
            color: #848484;
            font-size: 24px;
            // padding-left: 40px;
            i{
                display: inline-block;
                width: 10px;
                height: 10px;
                background: red;
                border-radius: 50%;
            }
            span{
                padding-left: 10px;
                font-size: 26px;
                color:#333;
            }
        }
    }
  }
}
</style>