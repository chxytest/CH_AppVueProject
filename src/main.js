// 入口文件
import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入 Mui 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-ui 组件 Header
import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css';

// 导入自己的路由模块
import router from './router.js'

// 导入根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router // 挂载路由对象
})