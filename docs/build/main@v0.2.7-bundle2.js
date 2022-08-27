
/*************************** [bundle] ****************************/
// Original file:./src/pages/core.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('37');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('38');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","id":"root-view","quickpaper":"","data-quickpaper-ee39c228":""},[createElement('p',{"class":"tips","data-quickpaper-ee39c228":""},[createElement('span',{"data-quickpaper-ee39c228":""},["温馨提示：此接口主要提供给新框架复用，减小代码量，如果想使用image3D绘图，你可以移步",createElement('a',{"href":"#/api","target":"_blank","class":"link","data-quickpaper-ee39c228":""},["接口文档"]),"查阅，谢谢！"])]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["// 引入核心↵import image3DCode from 'image3d/build/image3D-core.min.js';↵↵// 创建核心对象↵var core = image3DCode(document.getElementsByTagName('canvas')[0]);"]),createElement('p',{"data-quickpaper-ee39c228":""},["引入核心把柄以后，传递一个canvas结点，返回的是一个对象，记作core，这是image3D底层使用的核心对象。"]),createElement('h2',{"@click":"doScroll(\"core\",\"attr\")","id":"fixed-attr","class":"canClick","data-quickpaper-ee39c228":""},["属性"]),createElement('h3',{"data-quickpaper-ee39c228":""},["_gl_"]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["var gl = core._gl_;"]),createElement('p',{"data-quickpaper-ee39c228":""},["内部维护的WebGL对象实例，你可以通过他来直接调用原生方法。"]),createElement('h2',{"@click":"doScroll(\"core\",\"shader\")","id":"fixed-shader","class":"canClick","data-quickpaper-ee39c228":""},["着色器"]),createElement('pre',{"q-code":"html","data-quickpaper-ee39c228":""},["<!-- 顶点着色器 -->↵<script type='x-shader/x-vertex' id='vs'>↵    void main(){}↵</script>"]),createElement('pre',{"q-code":"html","data-quickpaper-ee39c228":""},["<!-- 片段着色器 -->↵<script type='x-shader/x-fragment' id='fs'>↵    void main(){}↵</script>"]),createElement('p',{"data-quickpaper-ee39c228":""},["在JavaScript层面上着色器就是两段字符串，调用下面的便可以让着色器生效："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["core.shader(↵    document.getElementById('vs').innerHTML,↵    document.getElementById('fs').innerHTML↵);"]),createElement('h2',{"@click":"doScroll(\"core\",\"setdata\")","id":"fixed-setdata","class":"canClick","data-quickpaper-ee39c228":""},["设置数据"]),createElement('p',{"data-quickpaper-ee39c228":""},["我们知道varying是只读的，可以是除了数组和结构体外的任意类型，主要用于两个着色器间数据传递，因此，设置数据其实涉及的是attribue和uniform类型的变量（只能是float、vec2、vec3、vec4和mat2、mat3、mat4其中的一种类型）。"]),createElement('h3',{"data-quickpaper-ee39c228":""},["1.attribue"]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["core.setAttribute[1,2,3,4][f,i](location, v0, v1, v2, v3);"]),createElement('h3',{"data-quickpaper-ee39c228":""},["2.uniform"]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["core.setUniform[1,2,3,4][f,i](location, v0, v1, v2, v3);"]),createElement('p',{"data-quickpaper-ee39c228":""},["此外，如果设置的数据是矩阵："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["core.setUniformMatrix[2,3,4]fv(location, value);"]),createElement('h2',{"@click":"doScroll(\"core\",\"buffer\")","id":"fixed-buffer","class":"canClick","data-quickpaper-ee39c228":""},["缓冲区"]),createElement('p',{"data-quickpaper-ee39c228":""},["缓冲区是一种更快速的给GPU大量数据的特殊通道，为了使用缓冲区，首先需要创建一个缓冲区："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["var buffer = core.buffer(isElement);"]),createElement('p',{"data-quickpaper-ee39c228":""},["在创建的时候需要传递一个boolean值类型的参数isElement，默认false表示缓冲区中保存了包含顶点的数据，如果传递true表示缓冲区保存了包含顶点的索引值。"]),createElement('p',{"data-quickpaper-ee39c228":""},["缓冲区创建好了以后，你就可以直接往缓冲区里面写入数据了："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["buffer.write(data);"]),createElement('p',{"data-quickpaper-ee39c228":""},["如果你创建的缓冲区是包含顶点的索引值的话，可能到这一步就结束了，否则，你可能还需要把缓冲区中的数据分配给具体的使用者："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["buffer.use(location, size, stride, offset);"]),createElement('ol',{"data-quickpaper-ee39c228":""},[createElement('li',{"data-quickpaper-ee39c228":""},["location：字符串类型，对应顶点着色器中定义的attribute类型的变量名；"]),createElement('li',{"data-quickpaper-ee39c228":""},["size：整数，表示一个完整的数据的个数；"]),createElement('li',{"data-quickpaper-ee39c228":""},["stride：整数，表示写入缓冲区数据一组的个数；"]),createElement('li',{"data-quickpaper-ee39c228":""},["offset：整数，表示读取起点。"])]),createElement('h2',{"@click":"doScroll(\"core\",\"texture\")","id":"fixed-texture","class":"canClick","data-quickpaper-ee39c228":""},["纹理"]),createElement('p',{"data-quickpaper-ee39c228":""},["纹理是片元着色器在逐片元过程中使用的，类似贴图，使用的第一步也是创建一个纹理："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["var texture = core.texture(type[, unit])"]),createElement('p',{"data-quickpaper-ee39c228":""},["type表示纹理的类型，unit表示使用哪个纹理单元（开启的编号，可选，默认0）。"]),createElement('p',{"data-quickpaper-ee39c228":""},["因为纹理有很多种，下面列出目前支持的类型："]),createElement('ol',{"data-quickpaper-ee39c228":""},[createElement('li',{"data-quickpaper-ee39c228":""},["\"2d\"：二维纹理(unit只有在这种纹理类型下才需要传递)；"]),createElement('li',{"data-quickpaper-ee39c228":""},["\"cube\"：立方体纹理。"])]),createElement('p',{"data-quickpaper-ee39c228":""},["纹理创建好了以后，你需要把材料（比如图片等）和纹理绑定。"]),createElement('p',{"data-quickpaper-ee39c228":""},["如果你使用的是2d纹理，你应该这样绑定（假如我们这里已经准备好了一张图片img）："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["texture.useImage(img);"]),createElement('p',{"data-quickpaper-ee39c228":""},["而如果你使用的是cube纹理，你应该这样绑定（假如我们这里已经准备好了六张图片img1~img6）："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["texture.useCube([img1,img2,img3,img4,img5,img6], width, height);"]),createElement('p',{"data-quickpaper-ee39c228":""},["到这一步，纹理准备工作已经完成了，后面的就是在片元着色器中去使用这个纹理了。"]),createElement('h2',{"@click":"doScroll(\"core\",\"painter\")","id":"fixed-painter","class":"canClick","data-quickpaper-ee39c228":""},["画笔"]),createElement('h3',{"data-quickpaper-ee39c228":""},["绘图方法"]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["var painter=core.painter();"]),createElement('p',{"data-quickpaper-ee39c228":""},["点："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["painter.points(first, count[, type]);"]),createElement('p',{"data-quickpaper-ee39c228":""},["直线："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["painter.lines(first, count[, type]);"]),createElement('p',{"data-quickpaper-ee39c228":""},["连续直线："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["painter.stripLines(first, count[, type]);"]),createElement('p',{"data-quickpaper-ee39c228":""},["闭合直线："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["painter.loopLines(first, count[, type]);"]),createElement('p',{"data-quickpaper-ee39c228":""},["三角形："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["painter.triangles(first, count[, type]);"]),createElement('p',{"data-quickpaper-ee39c228":""},["共边三角形："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["painter.stripTriangles(first, count[, type]);"]),createElement('p',{"data-quickpaper-ee39c228":""},["旋转围绕三角形："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["painter.fanTriangles(first, count[, type]);"]),createElement('p',{"data-quickpaper-ee39c228":""},["我们注意到每个方法最后都有一个可选参数type，表示索引值类型（\"byte\"或\"short\"），如果你希望借助顶点索引来绘制，请传递这个参数。"]),createElement('h3',{"data-quickpaper-ee39c228":""},["辅助方法"]),createElement('p',{"data-quickpaper-ee39c228":""},["开启深度计算："]),createElement('pre',{"q-code":"","data-quickpaper-ee39c228":""},["painter.openDeep();"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/core.paper?QuickPaper&type=script&lang=js&hash=ee39c228
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('28');
var fixedScroll =__etcpack__scope_args__.default;

    __etcpack__scope_bundle__.default= {
        mounted() {
            fixedScroll(this.urlFormat(window.location.href).params.fixed);
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/core.paper?QuickPaper&type=style&lang=css&hash=ee39c228
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper][data-quickpaper-ee39c228]{\n\npadding: 0 calc(50vw - 400px);\n\npadding-top: 50px;\n\nheight: 100vh;\n\noverflow: auto;\n\n}\n\n .tips[data-quickpaper-ee39c228]{\n\nposition: fixed;\n\nwidth: 100vw;\n\nleft: 0;\n\ntop: 0;\n\ntext-align: center;\n\nz-index: 3;\n\n}\n\n .tips>span[data-quickpaper-ee39c228]{\n\nbackground-color: #FFEB3B;\n\ncolor: #9E9E9E;\n\npadding: 5px;\n\ndisplay: inline-block;\n\nopacity: .7;\n\nfont-size: 12px;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
