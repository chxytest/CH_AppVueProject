<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要吐槽的内容（最多120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div
          class="cmt-header"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户名:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content }}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments: [], // 所有评论数据
      msg: "" //评论输入的内容
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      // 获取评论
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            // this.comments = result.body.message;
            // 第二页拼接上第一页的数据
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取评论失败");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("提示评论不能为空");
      }
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(result => {
          if (result.body.status === 0) {
            // 拼接对象
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            // 将 cmt 插入列表对象 comments 的最前面
            this.comments.unshift(cmt);
            // 将输入框的内容清空
            this.msg = "";
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;

    .cmt-item {
      font-size: 13px;

      .cmt-header {
        line-height: 30px;
        background-color: #cccccc;
      }

      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>