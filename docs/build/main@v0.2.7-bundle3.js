
/*************************** [bundle] ****************************/
// Original file:./src/pages/opengl-es.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('39');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('40');


    script.render=function(createElement){

        return createElement('div',{"class":"opengl-es-view","quickpaper":"","data-quickpaper-6c242eca":""},[createElement('a',{"href":"https://github.com/hai2007/image3D","class":"github","target":"_blank","data-quickpaper-6c242eca":""},["Fork me on Github"]),createElement('div',{"class":"menu","data-quickpaper-6c242eca":""},[createElement('header',{"data-quickpaper-6c242eca":""},["《 OpenGL ES 着色器语言",createElement('span',{"data-quickpaper-6c242eca":""},["(GLSL ES)"]),"》"]),createElement('ul',{"data-quickpaper-6c242eca":""},[createElement('li',{":active":"flag[0]=='lang'?'yes':'no'","data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang')","data-quickpaper-6c242eca":""},["语言定义"]),createElement('ul',{"data-quickpaper-6c242eca":""},[createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-key')","data-quickpaper-6c242eca":""},["关键字"])]),createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-holdkey')","data-quickpaper-6c242eca":""},["保留字"])]),createElement('li',{":active":"flag[1]=='var'?'yes':'no'","data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-var')","data-quickpaper-6c242eca":""},["变量"]),createElement('ul',{"data-quickpaper-6c242eca":""},[createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-var-define')","data-quickpaper-6c242eca":""},["命名规范"])])])]),createElement('li',{":active":"flag[1]=='type'?'yes':'no'","data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-type')","data-quickpaper-6c242eca":""},["数据类型"]),createElement('ul',{"data-quickpaper-6c242eca":""},[createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-type-lang')","data-quickpaper-6c242eca":""},["基本类型"])]),createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-type-matrix')","data-quickpaper-6c242eca":""},["失量和矩阵"])])])]),createElement('li',{":active":"flag[1]=='limkey'?'yes':'no'","data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-limkey')","data-quickpaper-6c242eca":""},["限定字"]),createElement('ul',{"data-quickpaper-6c242eca":""},[createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-limkey-attribute')","data-quickpaper-6c242eca":""},["attribute"])]),createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-limkey-uniform')","data-quickpaper-6c242eca":""},["uniform"])]),createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-limkey-varying')","data-quickpaper-6c242eca":""},["varying"])]),createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-limkey-precision')","data-quickpaper-6c242eca":""},["precision"])])])]),createElement('li',{"data-quickpaper-6c242eca":""},[createElement('span',{"@click":"doNav('lang-function')","data-quickpaper-6c242eca":""},["内置函数"])])])])])]),createElement('div',{"id":"root-view","class":"view","data-quickpaper-6c242eca":""},[createElement('div',{"class":"doc-view","id":"fixed-top","data-quickpaper-6c242eca":""},[createElement('header',{"data-quickpaper-6c242eca":""},["《 OpenGL ES 着色器语言",createElement('span',{"data-quickpaper-6c242eca":""},["(GLSL ES)"]),"》"]),createElement('h2',{"id":"fixed-lang","data-quickpaper-6c242eca":""},["语言定义"]),createElement('h3',{"id":"fixed-lang-key","data-quickpaper-6c242eca":""},["关键字"]),createElement('img',{"src":"./images/opengl-es/key.png","data-quickpaper-6c242eca":""},[]),createElement('h3',{"id":"fixed-lang-holdkey","data-quickpaper-6c242eca":""},["保留字"]),createElement('img',{"src":"./images/opengl-es/hold-key.png","data-quickpaper-6c242eca":""},[]),createElement('h3',{"id":"fixed-lang-var","data-quickpaper-6c242eca":""},["变量"]),createElement('h4',{"id":"fixed-lang-var-define","data-quickpaper-6c242eca":""},["命名规范"]),createElement('ol',{"data-quickpaper-6c242eca":""},[createElement('li',{"data-quickpaper-6c242eca":""},["只包含a-z，A-Z，0-9和下划线“_”。"]),createElement('li',{"data-quickpaper-6c242eca":""},["变量名的首字母不能是数字。"]),createElement('li',{"data-quickpaper-6c242eca":""},["不能是关键字或者保留字。"]),createElement('li',{"data-quickpaper-6c242eca":""},["对于gl_、webgl_或_webgl_开头的，这些前缀已经被OpenGL ES保留，也不能作为变量。"])]),createElement('h3',{"id":"fixed-lang-type","data-quickpaper-6c242eca":""},["数据类型"]),createElement('h4',{"id":"fixed-lang-type-lang","data-quickpaper-6c242eca":""},["基本类型"]),createElement('p',{"data-quickpaper-6c242eca":""},["支持的基本类型如下："]),createElement('img',{"src":"./images/opengl-es/type.png","data-quickpaper-6c242eca":""},[]),createElement('p',{"data-quickpaper-6c242eca":""},["因为GLSL ES是强类型语言，赋值语句的左右两边类型需要保持一致，有如下的类型转换方法："]),createElement('img',{"src":"./images/opengl-es/type-trans.png","data-quickpaper-6c242eca":""},[]),createElement('h4',{"id":"fixed-lang-type-matrix","data-quickpaper-6c242eca":""},["失量和矩阵"]),createElement('img',{"src":"./images/opengl-es/type-matrix.png","data-quickpaper-6c242eca":""},[]),createElement('p',{"class":"warn","data-quickpaper-6c242eca":""},["温馨提示：矩阵采用列优先存储。"]),createElement('h3',{"id":"fixed-lang-limkey","data-quickpaper-6c242eca":""},["限定字"]),createElement('h4',{"id":"fixed-lang-limkey-attribute","data-quickpaper-6c242eca":""},["attribute"]),createElement('p',{"data-quickpaper-6c242eca":""},["只能出现在",createElement('span',{"class":"warn","data-quickpaper-6c242eca":""},["顶点着色器"]),"中，需要声明为全局变量，用来表示逐顶点信息。"]),createElement('h4',{"id":"fixed-lang-limkey-uniform","data-quickpaper-6c242eca":""},["uniform"]),createElement('p',{"data-quickpaper-6c242eca":""},["可以出现在",createElement('span',{"class":"warn","data-quickpaper-6c242eca":""},["顶点着色器"]),"和",createElement('span',{"class":"warn","data-quickpaper-6c242eca":""},["片元着色器"]),"，必须为全局变量，可以是数组和结构体外的任意类型，如果两个色器声明了同命的uniform变量，那么它就会被两个着色器共享。"]),createElement('h4',{"id":"fixed-lang-limkey-varying","data-quickpaper-6c242eca":""},["varying"]),createElement('p',{"data-quickpaper-6c242eca":""},["必须为全局变量，它的任务是从",createElement('span',{"class":"warn","data-quickpaper-6c242eca":""},["顶点着色器"]),"传递数据给",createElement('span',{"class":"warn","data-quickpaper-6c242eca":""},["片元着色器"]),"，我们必须在两个着色器中声明同命、同类型的varying变量。"]),createElement('h4',{"id":"fixed-lang-limkey-precision","data-quickpaper-6c242eca":""},["precision"]),createElement('p',{"data-quickpaper-6c242eca":""},["也就是精度限定字，支持的类型如下："]),createElement('img',{"src":"./images/opengl-es/precision.png","data-quickpaper-6c242eca":""},[]),createElement('h3',{"id":"fixed-lang-function","data-quickpaper-6c242eca":""},["内置函数"]),createElement('img',{"src":"./images/opengl-es/function.png","data-quickpaper-6c242eca":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/opengl-es.paper?QuickPaper&type=script&lang=js&hash=6c242eca
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('28');
var fixedScroll =__etcpack__scope_args__.default;

    __etcpack__scope_bundle__.default= {
        data() {
            return {
                flag: []
            };
        },
        mounted() {
            document.getElementsByTagName('title')[0].innerText = "《 OpenGL ES 着色器语言 (GLSL ES)  》 WebGL渲染三维图形的关键，专门用来编写着色器的编程语言";
            let fixedName = this.urlFormat(window.location.href).params.fixed || "lang";
            setTimeout(() => {
                fixedScroll(fixedName, 5);
            }, 100);
            this.changeFlag(fixedName);
        },
        methods: {
            doNav(fixedName) {
                this.doScroll("opengl-es", fixedName, 5);
                this.changeFlag(fixedName);
            },
            changeFlag(fixedName) {
                this.flag = fixedName.split('-');
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/opengl-es.paper?QuickPaper&type=style&lang=css&hash=6c242eca
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n .opengl-es-view[data-quickpaper-6c242eca]{\n\nbackground-color: rgb(255, 255, 255);\n\nfont-size: 12px;\n\nfont-family: cursive;\n\nwhite-space: nowrap;\n\n}\n\n .opengl-es-view .github[data-quickpaper-6c242eca]{\n\nposition: fixed;\n\ntransform: rotate(45deg);\n\ntop: 60px;\n\nline-height: 1.6em;\n\nright: -60px;\n\nbackground-color: #9e9695;\n\noutline: 4px solid #9e9695;\n\ntransform-origin: 150px 23px;\n\nborder: 2px dashed #faf6f5;\n\nwidth: 300px;\n\ntext-align: center;\n\ncolor: #f7f3f2;\n\nz-index: 2;\n\nfont-family: sans-serif;\n\ntext-decoration: none;\n\n}\n\n .opengl-es-view>div[data-quickpaper-6c242eca]{\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nheight: 100vh;\n\nwhite-space: normal;\n\noverflow: auto;\n\n}\n\n .opengl-es-view>div.menu[data-quickpaper-6c242eca]{\n\nwidth: 260px;\n\nborder-right: 1px solid rgb(188, 186, 186);\n\n}\n\n .opengl-es-view>div.menu>header[data-quickpaper-6c242eca]{\n\ntext-align: center;\n\npadding: 20px 0;\n\nfont-weight: 800;\n\nfont-size: 14px;\n\n}\n\n .opengl-es-view>div.menu>header>span[data-quickpaper-6c242eca]{\n\nfont-size: 12px;\n\ncolor: #9e9695;\n\n}\n\n .opengl-es-view>div.menu>ul[data-quickpaper-6c242eca]{\n\nline-height: 1.6em;\n\nmargin-left: 10px;\n\n}\n\n .opengl-es-view>div.menu>ul li[data-quickpaper-6c242eca]{\n\nmargin-left: 15px;\n\n}\n\n .opengl-es-view>div.menu>ul li[active='yes']>span[data-quickpaper-6c242eca]{\n\nbackground-image: url('./images/open.png');\n\n}\n\n .opengl-es-view>div.menu>ul li[active='no']>span[data-quickpaper-6c242eca]{\n\nbackground-image: url('./images/close.png');\n\n}\n\n .opengl-es-view>div.menu>ul li[active='no']>ul[data-quickpaper-6c242eca]{\n\ndisplay: none;\n\n}\n\n .opengl-es-view>div.menu>ul li>span[data-quickpaper-6c242eca]{\n\ncursor: pointer;\n\nbackground-repeat: no-repeat;\n\nbackground-position: left center;\n\nbackground-size: 14px auto;\n\npadding-left: 16px;\n\ndisplay: inline-block;\n\n}\n\n .opengl-es-view>div.menu>ul li>span[data-quickpaper-6c242eca]:hover{\n\ntext-decoration: underline;\n\n}\n\n .opengl-es-view>div.view[data-quickpaper-6c242eca]{\n\nwidth: calc(100vw - 260px);\n\n}\n\n .opengl-es-view>div.view>.doc-view>header>span[data-quickpaper-6c242eca]{\n\nfont-size: 16px;\n\ncolor: #9e9695;\n\n}\n\n .opengl-es-view>div.view>.doc-view>h4[data-quickpaper-6c242eca]{\n\nfont-size: 12px;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
