
/*************************** [bundle] ****************************/
// Original file:./src/App.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('33');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('36');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-347ecaca":""},[createElement('header',{"data-quickpaper-347ecaca":""},[createElement('span',{"data-quickpaper-347ecaca":""},["image3D"]),createElement('nav',{"data-quickpaper-347ecaca":""},[createElement('span',{"@click":"loadpage(\"api\",\"no\")",":active":"url==\"api\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},["文档"]),createElement('span',{"@click":"loadpage(\"course\",\"no\")",":active":"url==\"course\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},["教程"]),createElement('span',{"data-quickpaper-347ecaca":""},[createElement('a',{"href":"#/opengl-es","class":"link","target":"_blank","title":"着色器语言，三维渲染的关键技术","data-quickpaper-347ecaca":""},["OpenGL ES"])]),createElement('span',{"data-quickpaper-347ecaca":""},[createElement('a',{"href":"./review/index.html","class":"link","target":"_blank","data-quickpaper-347ecaca":""},["用例"])]),createElement('span',{"class":"select","data-quickpaper-347ecaca":""},[createElement('i',{"data-quickpaper-347ecaca":""},["更多内容"]),createElement('div',{"data-quickpaper-347ecaca":""},[createElement('a',{"href":"https://hai2007.github.io/model-editor/","title":"一个编辑或者预览模型数据的软件","target":"_blank","data-quickpaper-347ecaca":""},["3D模型编辑器"]),createElement('h2',{"data-quickpaper-347ecaca":""},["交流"]),createElement('a',{"href":"https://github.com/hai2007/image3D/issues","title":"任何疑惑都可以在这里提问","target":"_blank","data-quickpaper-347ecaca":""},["参与讨论"]),createElement('a',{"href":"https://clunch-contrib.github.io/community/","title":"你可以获得更多关于绘图的相关信息","target":"_blank","data-quickpaper-347ecaca":""},["开发者社区"]),createElement('h2',{"data-quickpaper-347ecaca":""},["相关项目"]),createElement('a',{"href":"https://github.com/clunch-contrib/Three-Geometry","title":"为image3D.js设计开发的三维几何坐标运算库","target":"_blank","data-quickpaper-347ecaca":""},["Three-Geometry"]),createElement('a',{"href":"https://hai2007.gitee.io/clunch/","title":"🎨 渐进的前端交互式图形框架","target":"_blank","data-quickpaper-347ecaca":""},["clunch.js"]),createElement('a',{"href":"https://hai2007.gitee.io/image2d/","title":"💯 🍇 🌴💪 使用ECMAScript绘制二维图片。📊📈🎉Drawing Two-Dimensional Pictures Using ECMAScript.🚨 🙌","target":"_blank","data-quickpaper-347ecaca":""},["image2D.js"]),createElement('a',{"href":"https://hai2007.github.io/cross-end-canvas/","title":"🦎 🎨 提供跨端的canvas画笔，保持一致的绘图方法和效果，包括普通的web端、uniapp框架、微信小程序等小程序等。","target":"_blank","data-quickpaper-347ecaca":""},["Cross↵                        End Canvas"]),createElement('a',{"href":"https://hai2007.github.io/puly/","title":"🎨 🍊 一个简单易用的3D图表，像ECharts一样可以快速上手，配置化生成，并支持个性化自定义扩展。","target":"_blank","data-quickpaper-347ecaca":""},["puly.js"]),createElement('h2',{"data-quickpaper-347ecaca":""},["底层依赖"]),createElement('a',{"href":"https://hai2007.github.io/algorithm.js/","title":"🔪 一些前端常用的算法实现合集。","target":"_blank","data-quickpaper-347ecaca":""},["@hai2007/algorithm"]),createElement('a',{"href":"https://hai2007.github.io/tool.js/","title":"💡 前端常用的工具类方法汇总。","target":"_blank","data-quickpaper-347ecaca":""},["@hai2007/tool"])])]),createElement('span',{"data-quickpaper-347ecaca":""},[createElement('a',{"href":"https://github.com/hai2007/image3D","class":"github","target":"_blank","data-quickpaper-347ecaca":""},["GitHub"])]),createElement('span',{"class":"editor","@click":"openEdit()","title":"发现错误？想参与编辑？ 在 GitHub 上编辑此页！","data-quickpaper-347ecaca":""},["编辑"]),createElement('ui-search',{"data-quickpaper-347ecaca":""},[]),createElement('span',{"data-quickpaper-347ecaca":""},[createElement('a',{"href":"https://hai2007.gitee.io/sweethome/#/Sponsors","class":"link","target":"_blank","data-quickpaper-347ecaca":""},["支持我们"])])])]),createElement('div',{"class":"content","data-quickpaper-347ecaca":""},[createElement('component',{":is":"page","data-quickpaper-347ecaca":""},[])]),createElement('ui-footer',{"data-quickpaper-347ecaca":""},[])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=script&lang=js&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    let pages = {
        api: () => window.__etcpack__getLazyBundle('./build/main@v0.2.7-bundle4.js','34'),
        course: () => window.__etcpack__getLazyBundle('./build/main@v0.2.7-bundle5.js','35')
    };

    __etcpack__scope_bundle__.default= {
        data() {
            return {
                page: null,
                url: ""
            };
        },
        mounted() {
            let routers = this.urlFormat(window.location.href).router;
            this.loadpage(routers[0] in pages ? routers[0] : "api");

        },
        methods: {
            loadpage(url, flag) {
                pages[url]().then(data => {
                    if (flag == 'no') window.location.href = "#/" + url;
                    this.url = url;
                    this.page = data.default;
                });
            },
            openEdit() {

                let fileurl;

                try {
                    fileurl = window.location.href.split("#")[1].replace(/\/$/, "").replace(/\?.{0,}$/, '').replace(/^\//, "");
                } catch (e) {
                    fileurl = 'api';
                }

                window.location.href =
                    "https://github.com/hai2007/image3D/edit/dev/docs/src/pages/" +
                    fileurl +
                    ".paper";
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=style&lang=css&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper]>header[data-quickpaper-347ecaca]{\n\nbackground-color: #fff;\n\nborder-bottom: 1px solid #eaecef;\n\nheight: 60px;\n\nline-height: 40px;\n\npadding-left: 80px;\n\npadding-right: 0;\n\nbackground-image: url('./images/logo.png');\n\nbackground-size: auto 70%;\n\nbackground-position: 20px center;\n\nbackground-repeat: no-repeat;\n\nwhite-space: nowrap;\n\nbox-shadow: 0px 1px 9px 2px #efebea;\n\n}\n\n [quickpaper]>header>span[data-quickpaper-347ecaca]{\n\nfont-family: cursive;\n\nfont-size: 20px;\n\nfont-weight: 800;\n\ncolor: #b25932;\n\nline-height: 60px;\n\n}\n\n [quickpaper]>header>nav[data-quickpaper-347ecaca]{\n\nposition: absolute;\n\nright: 30px;\n\ntop: 10px;\n\nz-index: 2;\n\n}\n\n [quickpaper]>header>nav>span[data-quickpaper-347ecaca]{\n\nmargin-right: 10px;\n\nfont-size: 14px;\n\ncursor: pointer;\n\npadding: 0 5px;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\n}\n\n [quickpaper]>header>nav>span.editor[data-quickpaper-347ecaca]{\n\nbackground-image: url('./images/edit.png');\n\nfont-size: 0;\n\nwidth: 44px;\n\nbackground-size: 100% auto;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center;\n\n}\n\n [quickpaper]>header>nav>span.select[data-quickpaper-347ecaca]{\n\nmargin-right: 20px;\n\nwhite-space: nowrap;\n\n}\n\n [quickpaper]>header>nav>span.select>i[data-quickpaper-347ecaca]::after{\n\ndisplay: inline-block;\n\nvertical-align: middle;\n\nmargin-top: -1px;\n\nmargin-left: 6px;\n\nmargin-right: -14px;\n\nwidth: 0;\n\nheight: 0;\n\nborder-left: 4px solid transparent;\n\nborder-right: 4px solid transparent;\n\nborder-top: 5px solid #4f5959;\n\ncontent: \" \";\n\n}\n\n [quickpaper]>header>nav>span.select>i[data-quickpaper-347ecaca]{\n\nfont-style:normal;\n\n}\n\n [quickpaper]>header>nav>span.select[data-quickpaper-347ecaca]:hover>div{\n\ndisplay: block;\n\n}\n\n [quickpaper]>header>nav>span.select[data-quickpaper-347ecaca]{\n\nposition: relative;\n\n}\n\n [quickpaper]>header>nav>span.select>div[data-quickpaper-347ecaca]{\n\ndisplay: none;\n\nposition: absolute;\n\nbox-shadow: 1px 1px 6px 0px #858889;\n\npadding: 10px 20px;\n\ntop: 36px;\n\nright: -20px;\n\nbackground-color: white;\n\nline-height: 2em;\n\ncursor: default;\n\n}\n\n [quickpaper]>header>nav>span.select>div>a[data-quickpaper-347ecaca]{\n\ndisplay: block;\n\ncolor: black;\n\nfont-weight: 200;\n\n}\n\n [quickpaper]>header>nav>span.select>div>a[data-quickpaper-347ecaca]:hover{\n\ntext-decoration: underline;\n\n}\n\n [quickpaper]>header>nav>span.select>div>h2[data-quickpaper-347ecaca]{\n\nfont-size: 14px;\n\nmargin-top: 10px;\n\n}\n\n [quickpaper]>header>nav>span>a[data-quickpaper-347ecaca]{\n\nposition: relative;\n\ncolor: black;\n\nfont-size: 14px;\n\nfont-weight: 400;\n\n}\n\n [quickpaper]>header>nav>span>a.link[data-quickpaper-347ecaca]{\n\nmargin-right: 10px;\n\n}\n\n [quickpaper]>header>nav>span>a.link[data-quickpaper-347ecaca]:hover{\n\nfont-weight: 800;\n\ntext-decoration: underline;\n\n}\n\n [quickpaper]>header>nav>span>a.link[data-quickpaper-347ecaca]::after{\n\nposition: absolute;\n\nbackground-image: url('./images/link.png');\n\nbackground-repeat: no-repeat;\n\ncontent: \" \";\n\ndisplay: inline-block;\n\nwidth: 11px;\n\nheight: 11px;\n\ntop: 4px;\n\nright: -16px;\n\n}\n\n [quickpaper]>header>nav>span>a.good-link.model-editor[data-quickpaper-347ecaca]{\n\nbackground-image: url('./images/model-editor.png');\n\n}\n\n [quickpaper]>header>nav>span>a.good-link.three[data-quickpaper-347ecaca]{\n\nbackground-image: url('./images/how.png');\n\n}\n\n [quickpaper]>header>nav>span>a.good-link[data-quickpaper-347ecaca]{\n\nbackground-repeat: no-repeat;\n\nbackground-position: center 3px;\n\nbackground-size: auto 28px;\n\nheight: 50px;\n\ndisplay: inline-block;\n\npadding: 0 5px;\n\npadding-top: 10px;\n\nbackground-color: #efebea;\n\nvertical-align: top;\n\nfont-size: 12px;\n\ncolor: #b75932;\n\nmargin-top: 5px;\n\nfont-weight: 200;\n\nborder-radius: 5px;\n\n}\n\n [quickpaper]>header>nav>span>a.good-link[data-quickpaper-347ecaca]:hover{\n\ntext-decoration: underline;\n\n}\n\n [quickpaper]>header>nav>span>a.github[data-quickpaper-347ecaca]{\n\nwidth: 100px;\n\nheight: 100%;\n\ndisplay: inline-block;\n\nbackground-size: 100% auto;\n\nfont-size: 0;\n\nbackground-repeat: no-repeat;\n\nvertical-align: top;\n\nbackground-position: center;\n\nbackground-image: url('./images/github.png');\n\n}\n\n [quickpaper]>header>nav>span[active='yes'][data-quickpaper-347ecaca]{\n\nborder-bottom: 2px solid red;\n\nfont-weight: 800;\n\n}\n\n [quickpaper]>header>nav>span[data-quickpaper-347ecaca]:hover{\n\nfont-weight: 800;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
