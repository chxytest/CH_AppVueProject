const path = require('path')
const webpack = require('webpack')
// 导入内存中生成 html 页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    //指定入口 和 出口
    entry: path.join(__dirname, './src/main.js'), //入口，表示要使用 webpack 打包哪个文件
    output: { //出口
        path: path.join(__dirname, './dist'), //指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' //指定输出文件名
    },

    // 在实际开发中更推荐在package.json中使用这种方式一：
    // "dev": "webpack-dev-server --open --contentBase src --hot"
    devServer: { //配置webpack-dev-server的启动参数
        open: true, //自动打开浏览器
        port: 3000, //启动端口
        // contentBase: 'src', //指定托管的根目录
        hot: true
    },
    plugins: [ //配置插件节点
        new webpack.HotModuleReplacementPlugin(), //热更新对象，用来启用热更新
        new htmlWebpackPlugin({ // 指定在内存中生成的模板页面
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],
    module: { //配置所有第三方模块
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.sass$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(jpg|png|gif|bmp|jpeg)$/,
            use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
        }, {
            test: /\.(ttf|eot|svg|woff|woff2)$/,
            use: 'url-loader' //处理字体文件的loader
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }]

    },
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.js"
        }
    }
}