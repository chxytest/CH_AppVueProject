<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="item in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path" />
            <div class="info">
              <h3>{{ item.title }}</h3>
              <p>
                <span class="price">￥ {{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]"></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/ShopCar_numbox.vue";

export default {
  data() {
    return {
      goodslist: [] // 购物车中所有商品的数据
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      // 定义一个 id 的空数组
      var idArr = [];
      // 将购物车中的所有商品的 id 存入空数组 idArr 中
      this.$store.state.car.forEach(item => idArr.push(item.id));
      if (idArr.length <= 0) {
        return;
      }
      // 获取商品列表
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message;
          }
        });
    }
  },
  components: {
    numbox
  }
};
</script>

<style lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;

  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-content: center;
    }
    img {
      width: 60px;
      height: 60px;
      background-color: green;
      display: block;
    }
    h3 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>