<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h2>{{ item.title }}</h2>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time | dateFormat }}</span>
              <span>点击：{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        //   console.log(result.body);
        if (result.body.status === 0) {
          // 成功
          this.newslist = result.body.message;
          Toast("新闻列表加载成功");
        } else {
          // 失败
          Toast("新闻列表加载失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mui-table-view {
  li {
    h2 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>