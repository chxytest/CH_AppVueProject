<template>
  <div>
    <!-- 顶部轮播区 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img_url">
        <img :src="item.img_url" alt />
      </mt-swipe-item>
      <!-- <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>
    <h3>HomeContainer</h3>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      // 保存轮播图的数组
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(result => {
          //   console.log(result.body);
          if (result.body.status === 0) {
            // 成功
            this.lunbotuList = result.body.message;
            Toast("轮播图加载成功");
          } else {
            // 失败
            Toast("轮播图加载失败");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: blue;
    }
    &:nth-child(3) {
      background: yellow;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>