import VueRouter from "vue-router"; // 1.导入vue-router包

// 导入路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import NewsList from "./components/news/NewsList.vue";
import NewsInfo from "./components/news/NewsInfo.vue";
import PhotoList from "./components/photos/PhotoList.vue";
import PhotoInfo from "./components/photos/PhotoInfo.vue";
import GoodsList from "./components/goods/GoodsList.vue";
import GoodsInfo from "./components/goods/GoodsInfo.vue";

var router = new VueRouter({
  // 3.创建路由对象
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
    { path: "/search", component: SearchContainer },
    { path: "/shopcar", component: ShopcarContainer },
    { path: "/home/newslist", component: NewsList },
    { path: "/home/newsinfo/:id", component: NewsInfo },
    { path: "/home/photolist", component: PhotoList },
    { path: "/home/photoinfo/:id", component: PhotoInfo },
    { path: "/home/goodslist", component: GoodsList },
    { path: "/home/goodsinfo/:id", component: GoodsInfo, name: "goodsinfo" }
  ],
  linkActiveClass: "mui-active" // 覆盖默认路由高亮，默认类router-link-active
});

// 5.把路由对象暴露出去
export default router;
