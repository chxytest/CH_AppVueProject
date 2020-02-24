// 入口文件
import Vue from 'vue'

import './lib/mui/css/mui.min.css'

// 按需导入 Mint-ui 组件 Header
import {
    Header
} from 'mint-ui';
Vue.component(Header.name, Header);
import 'mint-ui/lib/style.css';

// 导入根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})