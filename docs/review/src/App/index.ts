import { Component, ref } from 'nefbl'

import urlFormat from '../tool/urlFormat'
import pages from './pages/lazy-load'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    currentPage: any

    $setup() {
        return {
            currentPage: ref(null)
        }
    }

    $mounted() {

        // 地址栏信息
        let urlObj = urlFormat(window.location.href)

        // 分析当前应该打开谁
        let pageName = urlObj.router[0] in pages ? urlObj.router[0] : "nav"
        window.location.href = '#/' + pageName

        // 打开
        pages[pageName]().then(data => {
            this.currentPage = data.default
        })

    }

}
