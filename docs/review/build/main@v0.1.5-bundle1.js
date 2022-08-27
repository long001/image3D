
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/nav/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('30');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('31');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/_createClass(function _class2() {
  _classCallCheck(this, _class2);
})) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/nav/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .nav-view>div{\n\nheight: 100vh;\n\nvertical-align: top;\n\ndisplay: inline-block;\n\n}\n\n .nav-view>div.left{\n\nwidth: 200px;\n\nborder-right: 1px solid #c2baba;\n\n}\n\n .nav-view>div.left>a{\n\nbackground-image: url('./images/goback.png');\n\nheight: 100px;\n\nbackground-repeat: no-repeat;\n\nbackground-size: auto 60%;\n\nbackground-position: center;\n\nwidth: 100%;\n\ndisplay: inline-block;\n\nfont-size: 0;\n\n}\n\n .nav-view>div.left>a:hover{\n\nbackground-size: auto 70%;\n\n}\n\n .nav-view>div.left>h2{\n\nbackground-image: url('./images/drawing-room@boy.png');\n\npadding-bottom: 300px;\n\nbackground-size: auto calc(100% - 50px);\n\nbackground-position: center bottom;\n\ntext-align: center;\n\nbackground-repeat: no-repeat;\n\ncolor: #b25932;\n\nfont-family: serif;\n\n}\n\n .nav-view>div.right{\n\nwidth: calc(100vw - 200px);\n\n}\n\n .nav-view>div.right>a{\n\ndisplay: inline-block;\n\nwidth: 160px;\n\nheight: 160px;\n\nborder: 1px solid #d6cece;\n\nbackground-size: 100% auto;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center;\n\nbackground-color: #f5f1f1;\n\n}\n\n .nav-view>div.right>a.robot-3d{\n\nbackground-image: url('./images/robot-3d.png');\n\n}\n\n .nav-view>div.right>a.sphere-image{\n\nbackground-image: url('./images/sphere-image.png');\n\n}\n\n .nav-view>div.right>a.two-function{\n\nbackground-image: url('./images/two-function.png');\n\n}\n\n .nav-view>div.right>a.custom_geometry{\n\nbackground-image: url('./images/custom_geometry.png');\n\n}\n\n .nav-view>div.right>a.k_simple{\n\nbackground-image: url('./images/k_simple.png');\n\n}\n\n .nav-view>div.right>a.H2O-laboratory{\n\nbackground-image: url('./images/H2O-laboratory.png');\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/nav/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"nav-view\">\n    <div class=\"left\">\n        <a href=\"https://hai2007.gitee.io/image3d/\" title=\"温馨提示：点击我返回文档界面~\">返回</a>\n        <h2>\n            [ 演示用例 ]\n        </h2>\n    </div>\n    <div class=\"right\">\n        <a class=\"custom_geometry\" target=\"_blank\"\n            href='https://hai2007.github.io/puly/examples/custom_geometry.html'></a>\n        <a class=\"H2O-laboratory\" target=\"_blank\" href='https://clunch-contrib.github.io/H2O-laboratory/'></a>\n        <a class=\"sphere-image\" target=\"_blank\" href='#/sphere-image'></a>\n        <a class=\"k_simple\" target=\"_blank\" href='https://hai2007.github.io/puly/examples/k_simple.html'></a>\n        <a class=\"robot-3d\" target=\"_blank\" href='https://clunch-contrib.github.io/robot-3d/'></a>\n        <a class=\"two-function\" target=\"_blank\"\n            href='https://hai2007.github.io/web-3d/examples/webgl-two-function.html'></a>\n    </div>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
