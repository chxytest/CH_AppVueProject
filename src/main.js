// 入口文件
import Vue from "vue";

// 导入路由
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 注册 vuex
import Vuex from "vuex";
Vue.use(Vuex);
var store = new Vuex.Store({
  state: {
    car: [] // 将购物车中的商品的数据存储到数组中
  },
  mutations: {
    addToCar(state, goodsinfo) {
      var flag = false;

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      });

      if (!flag) {
        state.car.push(goodsinfo);
      }
    }
  },
  getters: {
    // 相当于计算属性
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      });
      return c;
    }
  }
});

// 导入获取时间插件
import moment from "moment";
// 定义全局过滤器，格式化时间
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});

// 导入vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource);

// 设置请求根路径
Vue.http.options.root = "http://www.liulongbin.top:3005";

// 全局设置 post 时候表单数据格式组织形式
Vue.http.options.emulateJSON = true;

// 导入 Mui 样式
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";

// 按需导入 Mint-ui 组件 Header
// import { Header, Swipe, SwipeItem, Button } from "mint-ui";
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// import "mint-ui/lib/style.css";
// import { Lazyload } from "mint-ui";
// Vue.use(Lazyload);

// 全部导入组件样式
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

// 安装图片预览插件
import VuePreview from "vue-preview";
Vue.use(VuePreview);

// 导入自己的路由模块
import router from "./router.js";

// 导入根组件
import app from "./App.vue";

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router, // 挂载路由对象
  store
});
