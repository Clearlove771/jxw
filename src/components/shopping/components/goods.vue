<template>
  <div class="goods">
    <div>
      <div class="one">
        <input type="checkbox" @change="all" v-model="isAll" />
        <img src="../img/logo.png" alt />
        <span>酒仙自营</span>
      </div>
      <div class="two" v-for="(item,index) in cartList" :key="index">
        <input type="checkbox" class="inp1" v-model="item.isSelected" @change="selectOne" />
        <img :src="item.productCover" alt />
        <div class="con">
          <span class="span1">{{item.productContent}}</span>
          <p>
            <span class="span2">￥{{item.productPrice}}</span>
            <span class="span3">
              <strong>限时抢购</strong>
            </span>
            <span class="span3">
              <strong>金币优惠</strong>
            </span>
          </p>
          <div class="comAmount">
            <a class="publicIcon minus on" @click="sub(index)">-</a>
            <input class="inpVal" type="number" v-model.number="item.productCount" />
            <a class="publicIcon plus" @click="add(index)">+</a>
            <button @click="deleteItem(index)">删除</button>
          </div>
        </div>
      </div>
      <div class="three clearfix">
        <input type="checkbox" @change="selectAll" v-model="isAll" />
        <span class="all">全选</span>
        <span class="tal">合计：</span>
        <span class="pri">￥{{total}}</span>
        <button>去结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCateList } from "@/api";
export default {
  data() {
    return {
      cartList: [],
      isAll: false
    };
  },
  async created() {
    this.cartList = await getCateList();
  },
  computed: {
    total() {
      var total = this.cartList.reduce((total, item) => {
        if (item.isSelected) {
          // item.productCount=this.$store.state.count
          total += item.productPrice * item.productCount;
          return total;
        } else {
          return total;
        }
      }, 0);
      return total.toFixed(2);
    }
  },
  methods: {
    // 增加   减少
    add(index) {
      // window.console.log(111)
      // this.$store.state.count++;
      this.cartList[index].productCount += 1;
    },
    sub(index) {
      // window.console.log(222)
      //  this.$store.state.count--;
      window.console.log(this.cartList[index].productCount);
      this.cartList[index].productCount -= 1;
    },

    all() {
      this.cartList.forEach(item => {
        item.isSelected = this.isAll;
      });
    },
    selectAll() {
      this.cartList.forEach(item => {
        item.isSelected = this.isAll;
      });
    },
    selectOne() {
      //1、检测cartList中元素的listSelected,如果有一个false则全选false,如果有一个true则全选为true
      this.isAll = this.cartList.every(item => {
        return item.isSelected == true;
      });
    },
    deleteItem(index) {
      this.cartList.splice(index, 1);
    }
  }
};
</script>

<style lang="less" scoped>
.goods {
  width: 100%;
  color: #333333;
  background-color: #fff;
  font-size: 24px;
  margin-top: 180px;
  position: relative;
  box-sizing: border-box;
  input {
    height: 40px;
    width: 40px;
    display: inline-block;
    margin: 0 20px;
  }
  .one {
    height: 90px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    line-height: 90px;
    position: relative;
    input {
      position: absolute;
      top: 50%;
      margin-top: -20px;
    }
    img {
      height: 30px;
      width: 30px;
      position: absolute;
      top: 50%;
      margin-left: 80px;
      margin-top: -15px;
    }
    span {
      display: inline-block;
      margin-left: 120px;
      font-size: 28px;
    }
  }
  .two {
    height: 200px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    position: relative;
    .inp1 {
      display: inline-block;
      position: absolute;
      top: 50%;
      margin-top: -20px;
    }
    img {
      height: 160px;
      width: 160px;
      position: absolute;
      top: 50%;
      margin-top: -80px;
      margin-left: 80px;
      border: 2px solid #ccc;
    }
    .con {
      position: absolute;
      left: 260px;
      font-size: 14px;
      color: #333;
      .span1 {
        width: 456px;
        height: 85px;
        display: inline-block;
        // overflow: hidden;
        margin-top: 20px;
      }
      .span2 {
        color: #f00;
      }
      .span3 {
        background-color: #ffa44d;
        padding: 1px 3px;
        margin-left: 10px;
        color: #fff;
        border-radius: 10%;
      }
      .comAmount {
        margin-top: 5px;
        height: 40px;
        width: 150px;
        position: relative;
        // text-align: center;
        .publicIcon {
          height: 40px;
          width: 40px;
          border: 1px solid #ccc;
          display: inline-block;
          text-align: center;
          font-size: 16px;
          z-index: 100;
        }
        input {
          border: 1px solid #ccc;
          height: 40px;
          width: 150px;
          text-align: center;
        }
        .on {
          position: absolute;
          top: 0;
          left: 20px;
        }
        .plus {
          position: absolute;
          top: 0;
          right: -21px;
        }
        button {
          position: absolute;
          right: -300px;
          bottom: 0;
          border: none;
          color: #333;
          background-color: #fff;
        }
      }
    }
  }
  .three {
    height: 102px;
    width: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    position: relative;
    color: #333;
    position: fixed;
    bottom: 85px;
    input,
    .all,
    .tal,
    .pri {
      position: absolute;
      top: 50%;
    }
    input {
      margin-top: -20px;
    }
    .all {
      margin-left: 80px;
      font-size: 28px;
      margin-top: -16px;
    }
    .tal {
      margin-left: 150px;
      margin-top: -20px;
      font-size: 32px;
    }
    .pri {
      margin-left: 230px;
      font-size: 32px;
      margin-top: -20px;
      color: #f00;
    }
    button {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 150px;
      background-color: #f00;
      color: #fff;
      border: none;
    }
  }
}
</style>