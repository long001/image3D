import { platform } from 'nefbl'
import normalize from "@hai2007/style/normalize.css"

// 兼容文件
import '@hai2007/polyfill/Promise.js'

// 引入主模块
import appModule from "./app.module"

// 先获取平台实例
platform({

    // 框架管理的区域
    el: document.getElementById('root'),

    // 全局样式
    styles: [normalize,`

    .demo-view {
        text-align: center;
        background-color: #f5f1f1;
        height:100vh;
    }

    `]

})

    // 然后启动主模块
    .bootstrap(appModule)
