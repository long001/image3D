
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/sphere-image/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('32');
var image3D =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('33');
var ThreeGeometry =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('34');
var xhtml =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('35');
var viewHandler =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('37');
var vertexShader =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('38');
var fragmentShader =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('39');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('40');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$mounted",
    value: function $mounted() {
      var canvas = document.getElementById('skybox');
      var size = xhtml.size(canvas);
      canvas.setAttribute('width', size.width);
      canvas.setAttribute('height', size.height); // 创建3D对象并配置好画布和着色器

      var image3d = new image3D(canvas, {
        // 传递着色器
        "vertex-shader": vertexShader,
        "fragment-shader": fragmentShader,
        // 开启深度计算
        "depth": true
      }); // 创建纹理对象

      var texture = image3d.TextureCube(500, 500);
      var threeGeometry = ThreeGeometry({
        precision: 0.5
      });
      var image1 = new Image();

      image1.onload = function () {
        var image2 = new Image();

        image2.onload = function () {
          var image3 = new Image();

          image3.onload = function () {
            var image4 = new Image();

            image4.onload = function () {
              var image5 = new Image();

              image5.onload = function () {
                var image6 = new Image();

                image6.onload = function () {
                  texture.write(image1, image2, image3, image4, image5, image6);
                  image3d.setUniformInt('u_texture', texture);
                  var camera = image3d.Camera({
                    size: 3
                  });
                  var painter = image3d.Painter();
                  var buffer = image3d.Buffer();
                  var datas = []; // 球心（cx,cy,cz)、半径radius

                  threeGeometry.sphere(function (data) {
                    datas.push(data);
                  }, 0, 0, 0, 1);

                  var doit = function doit() {
                    image3d.setUniformMatrix("u_matrix", camera.value());

                    var _iterator = _createForOfIteratorHelper(datas),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var data = _step.value;
                        buffer.write(new Float32Array(data.points)).use('a_position', 3, 3, 0);
                        painter.drawStripTriangle(0, data.length);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  };

                  doit(); // 鼠标键盘交互
                  // 每次调整的弧度

                  var deg = 0.1;
                  var rateScale = 1;
                  viewHandler(function (data) {
                    /*
                     * 修改相机
                     */
                    // 键盘控制
                    if (data.type == 'lookUp') {
                      camera.rotateBody(deg, 1, 0, 0);
                    } else if (data.type == 'lookDown') {
                      camera.rotateBody(deg, -1, 0, 0);
                    } else if (data.type == 'lookLeft') {
                      camera.rotateBody(deg, 0, 1, 0);
                    } else if (data.type == 'lookRight') {
                      camera.rotateBody(deg, 0, -1, 0);
                    } // 鼠标拖动或手指控制
                    else if (data.type == 'rotate') {
                      camera.rotateBody(deg * data.dist * 0.07, data.normal[0], data.normal[1], data.normal[2]);
                    } // 滚轮控制
                    else if (data.type == 'scale') {
                      // 设置一个缩放上界
                      if (data.kind == 'enlarge' && rateScale >= 2) {
                        return;
                      }

                      var baseTimes = 0.899;
                      var times = data.kind == 'enlarge' ? 2 - baseTimes : baseTimes;
                      rateScale *= times;
                      camera.scaleBody(times, times, times, 0, 0, 0);
                    } // 重新绘制


                    doit();
                  });
                };

                image6.src = "./images/skybox/front.jpg";
              };

              image5.src = "./images/skybox/back.jpg";
            };

            image4.src = "./images/skybox/bottom.jpg";
          };

          image3.src = "./images/skybox/top.jpg";
        };

        image2.src = "./images/skybox/left.jpg";
      };

      image1.src = "./images/skybox/right.jpg";
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/image3d/build/image3D.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
* image3D - 🍊 使用webGL绘制三维图片。Drawing three-dimensional images using webGL.
* git+https://github.com/hai2007/image3D.git
*
* author 你好2007
*
* version 3.4.2
*
* build Thu Apr 11 2019
*
* Copyright hai2007 < https://hai2007.gitee.io/sweethome/ >
* Released under the MIT license
*
* Date:Sat May 28 2022 12:45:02 GMT+0800 (GMT+08:00)
*/

"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};(function(){"use strict";var u=function r(t,n,e){var i=t.createShader(n);if(i==null)throw new Error("Unable to create shader!");t.shaderSource(i,e);t.compileShader(i);if(!t.getShaderParameter(i,t.COMPILE_STATUS))throw new Error("Failed to compile shader:"+t.getShaderInfoLog(i));return i};var o=function r(t,n,e){var i=u(t,t.VERTEX_SHADER,n),o=u(t,t.FRAGMENT_SHADER,e);var a=t.createProgram();t.attachShader(a,i);t.attachShader(a,o);t.linkProgram(a);if(!t.getProgramParameter(a,t.LINK_STATUS))throw new Error("Failed to link program: "+t.getProgramInfoLog(a));t.useProgram(a);return a};var a=function r(t,n){var e=t.createBuffer(),i=n?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER;t.bindBuffer(i,e);return e};var l=function r(t,n,e,i){var o=i?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER;t.bufferData(o,n,e)};var v=function r(t,n,e,i,o,a,u){t.vertexAttribPointer(n,e,i,u||false,o||0,a||0);t.enableVertexAttribArray(n)};var c=function r(t,n,e,i){var o=t.createTexture();if(i=="2d"){e=e||0;t.activeTexture(t["TEXTURE"+e])}t.bindTexture(n,o);return o};var m=function r(t,n,e,i,o,a){i={rgb:t.RGB,rgba:t.RGBA,alpha:t.ALPHA}[i]||t.RGBA;t.texImage2D(n,e||0,i,i,{}[o]||t.UNSIGNED_BYTE,a)};var g=function r(t,n,e,i,o,a,u,f,c){i={rgb:t.RGB,rgba:t.RGBA,alpha:t.ALPHA}[i]||t.RGBA;e=e||0;o={}[o]||t.UNSIGNED_BYTE;var s=[t.TEXTURE_CUBE_MAP_POSITIVE_X,t.TEXTURE_CUBE_MAP_NEGATIVE_X,t.TEXTURE_CUBE_MAP_POSITIVE_Y,t.TEXTURE_CUBE_MAP_NEGATIVE_Y,t.TEXTURE_CUBE_MAP_POSITIVE_Z,t.TEXTURE_CUBE_MAP_NEGATIVE_Z],l=void 0,v=void 0;for(l=0;l<s.length;l++){v=s[l];t.texImage2D(v,e,i,u,f,0,i,o,null);t.bindTexture(n,c);t.texImage2D(v,e,i,i,o,a[l])}t.generateMipmap(n)};function f(u){return{setAttribute1f:function r(t,n){var e=u.getAttribLocation(u.program,t);u.vertexAttrib1f(e,n)},setAttribute2f:function r(t,n,e){var i=u.getAttribLocation(u.program,t);u.vertexAttrib2f(i,n,e)},setAttribute3f:function r(t,n,e,i){var o=u.getAttribLocation(u.program,t);u.vertexAttrib3f(o,n,e,i)},setAttribute4f:function r(t,n,e,i,o){var a=u.getAttribLocation(u.program,t);u.vertexAttrib4f(a,n,e,i,o)},setAttribute1i:function r(t,n){var e=u.getAttribLocation(u.program,t);u.vertexAttrib1i(e,n)},setAttribute2i:function r(t,n,e){var i=u.getAttribLocation(u.program,t);u.vertexAttrib2i(i,n,e)},setAttribute3i:function r(t,n,e,i){var o=u.getAttribLocation(u.program,t);u.vertexAttrib3i(o,n,e,i)},setAttribute4i:function r(t,n,e,i,o){var a=u.getAttribLocation(u.program,t);u.vertexAttrib4i(a,n,e,i,o)},setUniform1f:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniform1f(e,n)},setUniform2f:function r(t,n,e){var i=u.getUniformLocation(u.program,t);u.uniform2f(i,n,e)},setUniform3f:function r(t,n,e,i){var o=u.getUniformLocation(u.program,t);u.uniform3f(o,n,e,i)},setUniform4f:function r(t,n,e,i,o){var a=u.getUniformLocation(u.program,t);u.uniform4f(a,n,e,i,o)},setUniform1i:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniform1i(e,n)},setUniform2i:function r(t,n,e){var i=u.getUniformLocation(u.program,t);u.uniform2i(i,n,e)},setUniform3i:function r(t,n,e,i){var o=u.getUniformLocation(u.program,t);u.uniform3i(o,n,e,i)},setUniform4i:function r(t,n,e,i,o){var a=u.getUniformLocation(u.program,t);u.uniform4i(a,n,e,i,o)},setUniformMatrix2fv:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniformMatrix2fv(e,false,n)},setUniformMatrix3fv:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniformMatrix3fv(e,false,n)},setUniformMatrix4fv:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniformMatrix4fv(e,false,n)}}}function E(i){var o={byte:i.UNSIGNED_BYTE,short:i.UNSIGNED_SHORT};return{openDeep:function r(){i.enable(i.DEPTH_TEST);return this},points:function r(t,n,e){if(e){i.drawElements(i.POINTS,n,o[e],t)}else{i.drawArrays(i.POINTS,t,n)}return this},lines:function r(t,n,e){if(e){i.drawElements(i.LINES,n,o[e],t)}else{i.drawArrays(i.LINES,t,n)}return this},stripLines:function r(t,n,e){if(e){i.drawElements(i.LINE_STRIP,n,o[e],t)}else{i.drawArrays(i.LINE_STRIP,t,n)}return this},loopLines:function r(t,n,e){if(e){i.drawElements(i.LINE_LOOP,n,o[e],t)}else{i.drawArrays(i.LINE_LOOP,t,n)}return this},triangles:function r(t,n,e){if(e){i.drawElements(i.TRIANGLES,n,o[e],t)}else{i.drawArrays(i.TRIANGLES,t,n)}return this},stripTriangles:function r(t,n,e){if(e){i.drawElements(i.TRIANGLE_STRIP,n,o[e],t)}else{i.drawArrays(i.TRIANGLE_STRIP,t,n)}return this},fanTriangles:function r(t,n,e){if(e){i.drawElements(i.TRIANGLE_FAN,n,o[e],t)}else{i.drawArrays(i.TRIANGLE_FAN,t,n)}return this}}}var _=function r(t,n){var e=["webgl","experimental-webgl","webkit-3d","moz-webgl"],i=null,o=void 0;for(o=0;o<e.length;o++){try{i=t.getContext(e[o],n)}catch(r){}if(i)break}if(!i)throw new Error("Non canvas or browser does not support webgl.");return i};function s(r,t){var s=_(r,t),e={_gl_:s,painter:function r(){return E(s)},shader:function r(t,n){s.program=o(s,t,n);return e},buffer:function r(e){a(s,e);var f=void 0,c={write:function r(t,n){n=n||s.STATIC_DRAW;l(s,t,n,e);f=t;return c},use:function r(t,n,e,i,o,a){var u=f.BYTES_PER_ELEMENT;if(typeof t=="string")t=s.getAttribLocation(s.program,t);e=e||0;i=i||0;o=o||s.FLOAT;v(s,t,n,o,e*u,i*u,a);return c}};return c},texture:function u(r,t){var f={"2d":s.TEXTURE_2D,cube:s.TEXTURE_CUBE_MAP}[r];var u=c(s,f,t,r);s.texParameteri(f,s.TEXTURE_MIN_FILTER,s.NEAREST);s.texParameteri(f,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE);s.texParameteri(f,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);var o={useImage:function r(t,n,e,i){m(s,f,n,e,i,t);return o},useCube:function r(t,n,e,i,o,a){g(s,f,i,o,a,t,n,e,u)}};return o}};var n=f(s);for(var i in n){e[i]=n[i]}s.viewport(0,0,s.canvas.width,s.canvas.height);s.depthFunc(s.LEQUAL);return e}function p(r,t){for(var n in t){try{r[n]=t[n]}catch(r){throw new Error("Illegal property key : "+n)}}return r}function d(n,r){return function(t){return new function r(){var i=this;var o=n.buffer(t);this.write=function(r){o.write(r);return i};if(!t){this.use=function(r,t,n,e){o.use(r,t,n,e);return i}}}}}function A(r,t,n,e){e=e||0;var i=Math.sqrt(t*t+n*n+e*e);return[1,0,0,0,0,1,0,0,0,0,1,0,t*r/i,n*r/i,e*r/i,1]}function b(r){var t=Math.sin(r),n=Math.cos(r);return[n,t,0,0,-t,n,0,0,0,0,1,0,0,0,0,1]}function h(r,t,n,e,i,o){e=e||0;i=i||0;o=o||0;return[r,0,0,0,0,t,0,0,0,0,n,0,e-e*r,i-i*t,o-o*n,1]}function T(r,t,n,e,i,o){if(typeof r==="number"&&typeof t==="number"){if(typeof n!=="number"){n=0;e=r;i=t;o=1}else if(typeof e!=="number"||typeof i!=="number"||typeof o!=="number"){e=r;i=t;o=n;r=0;t=0;n=0}if(r==e&&t==i&&n==o)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((e-r)*(e-r)+(i-t)*(i-t)),u=a!=0?(i-t)/a:1,f=a!=0?(e-r)/a:0,c=(e-r)*f+(i-t)*u,s=o-n,l=Math.sqrt(c*c+s*s),v=l!=0?s/l:1,m=l!=0?c/l:0;return[[u,v*f,f*m,0,-f,u*v,u*m,0,0,-m,v,0,t*f-r*u,n*m-r*f*v-t*u*v,-r*f*m-t*u*m-n*v,1],[u,-f,0,0,v*f,v*u,-m,0,f*m,u*m,v,0,r,t,n,1]]}else{throw new Error("a1 and b1 is required!")}}var y=function r(t,n){var e=[];for(var i=0;i<4;i++){for(var o=0;o<n.length/4;o++){e[o*4+i]=t[i]*n[o*4]+t[i+4]*n[o*4+1]+t[i+8]*n[o*4+2]+t[i+12]*n[o*4+3]}}return e};function w(r){var c=r||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var s={move:function r(t,n,e,i){c=y(A(t,n,e,i),c);return s},rotate:function r(t,n,e,i,o,a,u){var f=T(n,e,i,o,a,u);c=y(y(y(f[1],b(t)),f[0]),c);return s},scale:function r(t,n,e,i,o,a){c=y(h(t,n,e,i,o,a),c);return s},multiply:function r(t,n){c=n?y(c,t):y(t,c);return s},use:function r(t,n,e,i){e=e||0;i=i||1;var o=y(c,[t,n,e,i]);o[0]=+o[0].toFixed(7);o[1]=+o[1].toFixed(7);o[2]=+o[2].toFixed(7);o[3]=+o[3].toFixed(7);return o},value:function r(){return c}};return s}var L=function r(t){return Array.isArray(t)};function U(i,r){return function(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return new function r(){var u=this;var e=i._gl_.canvas.clientWidth/i._gl_.canvas.clientHeight;if(L(n.size)){n.size=n.size[0];console.warn('"options.size" should be a number. The writing of array is out of date: https://hai2007.gitee.io/image3d/index.html#/api?fixed=camera-set')}if(!("size"in n)){n.size=1}var f=w();var t=n.proof?-1:1;f.multiply([1/n.size,0,0,0,0,1/n.size,0,0,0,0,t/n.size,0,0,0,0,1]);this.setProportion=function(r){e=r;return u};this.rotateEye=function(r,t,n,e,i,o,a){f.rotate(-r,t,n,e,i,o,a);return u};this.moveEye=function(r,t,n,e){f.move(-r,t,n,e);return u};this.rotateBody=function(r,t,n,e,i,o,a){f.rotate(r,t,n,e,i,o,a);return u};this.moveBody=function(r,t,n,e){f.move(r,t,n,e);return u};this.scaleBody=function(r,t,n,e,i,o){f.scale(r,t,n,e,i,o);return u};this.value=function(){var r=1;var t=1;if(e>1){t=e}else{r=1/e}var n=Math.max(r,t);return w(f.value()).multiply([r,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1]).value()}}}}function e(n,e){e.drawPoint=function(r,t){n.points(r,t);return e};e.drawLine=function(r,t){n.lines(r,t);return e};e.drawStripLine=function(r,t){n.stripLines(r,t);return e};e.drawLoopLine=function(r,t){n.loopLines(r,t);return e};e.drawTriangle=function(r,t){n.triangles(r,t);return e};e.drawStripTriangle=function(r,t){n.stripTriangles(r,t);return e};e.drawFanTriangle=function(r,t){n.fanTriangles(r,t);return e}}function i(e,i){i.elemPoint=function(r,t,n){n=n||"byte";e.points(r,t,n);return i};i.elemLine=function(r,t,n){n=n||"byte";e.lines(r,t,n);return i};i.elemStripLine=function(r,t,n){n=n||"byte";e.stripLines(r,t,n);return i};i.elemLoopLine=function(r,t,n){n=n||"byte";e.loopLines(r,t,n);return i};i.elemTriangle=function(r,t,n){n=n||"byte";e.triangles(r,t,n);return i};i.elemStripTriangle=function(r,t,n){n=n||"byte";e.stripTriangles(r,t,n);return i};i.elemFanTriangle=function(r,t,n){n=n||"byte";e.fanTriangles(r,t,n);return i}}function R(r,t){var n=r.painter();if(t.depth){n.openDeep()}return function(){return new function r(){e(n,this);i(n,this)}}}function x(i,r){return function(e){return new function r(){var t=this;var n=i.texture("2d",e);this.write=function(r){n.useImage(r);return t}}}}function I(t,r){return function(f,c){return new function r(){var a=this;var u=t.texture("cube");this.write=function(r,t,n,e,i,o){u.useCube([r,t,n,e,i,o],f,c);return a}}}}var t={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    void main(){\n        gl_Position=a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};var n={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    uniform mat4 u_matrix;\n    void main(){\n        gl_Position=u_matrix * a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};function S(r){return{type_default:t,type_camera:n}["type_"+r]}var r=function r(t,n){var e=p({depth:false},n||{});var o=s(t);var i=e["vertex-shader"],a=e["fragment-shader"];if(!i||!a){var u=S(e.shader||"default");i=u.vs;a=u.fs}o.shader(i,a);r.fn=r.prototype;r.fn.Buffer=d(o);r.fn.Camera=U(o);r.fn.Painter=R(o,e);r.fn.Texture2D=x(o);r.fn.TextureCube=I(o);r.fn.setAttributeFloat=function(r,t,n,e,i){o["setAttribute"+(arguments.length-1)+"f"](r,t,n,e,i);return this};r.fn.setAttributeInt=function(r,t,n,e,i){o["setAttribute"+(arguments.length-1)+"i"](r,t,n,e,i);return this};r.fn.setUniformFloat=function(r,t,n,e,i){o["setUniform"+(arguments.length-1)+"f"](r,t,n,e,i);return this};r.fn.setUniformInt=function(r,t,n,e,i){o["setUniform"+(arguments.length-1)+"i"](r,t,n,e,i);return this};r.fn.setUniformMatrix=function(r,t){var n={4:2,9:3,16:4}[t.length];o["setUniformMatrix"+n+"fv"](r,t);return this}};r.core=s;if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=r}else{var P=window.image3D;r.noConflict=function(){if(window.image3D===r){window.image3D=P}return r};window.image3D=r}})();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/three-geometry/dist/three-geometry.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
 *  Three-Geometry - 为image3D.js设计开发的三维几何坐标运算库
 * git+https://github.com/clunch-contrib/Three-Geometry.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 1.4.1
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Fri May 06 2022 22:20:16 GMT+0800 (GMT+08:00)
 */
(function(){"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var toString=Object.prototype.toString;function getType(value){if(value==null){return value===undefined?"[object Undefined]":"[object Null]"}return toString.call(value)}function _isNumber(value){return typeof value==="number"||value!==null&&_typeof(value)==="object"&&getType(value)==="[object Number]"}var isNumber=_isNumber;var circle={splitNum:function splitNum(precision,radius){var num=Math.ceil(Math.PI*2/Math.asin(precision/radius)*2);return isNaN(num)||num<12?12:num}};function rotate(cx,cy,deg,x,y){var cos=Math.cos(deg),sin=Math.sin(deg);return[(x-cx)*cos-(y-cy)*sin+cx,(x-cx)*sin+(y-cy)*cos+cy]}function prismHorizontal(normal,x,y,z,radius,num,d){var beginX,beginZ;if(num==4){var temp=radius/1.414;beginX=x+temp;beginZ=z+temp}else{beginX=x+radius;beginZ=z}var points=[x,y,z],deg=Math.PI*2/num;if(normal)points.push(0,d,0);points.push(beginX,y,beginZ);if(normal)points.push(0,d,0);for(var i=0;i<num;i++){var point=rotate(x,z,deg*(i+1),beginX,beginZ);points.push(point[0],y,point[1]);if(normal)points.push(0,d,0)}return points}function prismVertical(normal,x,y,z,radius,height,num){var points=[];var beginPosition;if(num==4){beginPosition=rotate(x,z,Math.PI*.25,x-radius,z)}else{beginPosition=[x+radius,z]}var deg=Math.PI*2/num,degHalf=Math.PI*2/(num*2);var endPosition,normalPosition=[];for(var i=0;i<num;i++){endPosition=rotate.apply(void 0,[x,z,deg].concat(_toConsumableArray(beginPosition)));if(normal){var halfPosition=rotate.apply(void 0,[x,z,degHalf].concat(_toConsumableArray(beginPosition)));normalPosition=[halfPosition[0],0,halfPosition[1]]}points.push.apply(points,[beginPosition[0],y,beginPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[beginPosition[0],y+height,beginPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[endPosition[0],y+height,endPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[beginPosition[0],y,beginPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[endPosition[0],y,endPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[endPosition[0],y+height,endPosition[1]].concat(_toConsumableArray(normalPosition)));beginPosition=endPosition}return points}function sphereFragment(normal,cx,cy,cz,radius,num,index){var points=[cx,cy+radius,cz],deg=Math.PI*2/num,point;if(normal)points.push(0,radius,0);for(var i=1;i<num*.5;i++){point=rotate(cx,cy,deg*i,cx,cy+radius);var point1=rotate(cx,cz,deg*index,point[0],cz);points.push(point1[0],point[1],point1[1]);if(normal)points.push(point1[0]-cx,point[1]-cy,point1[1]-cz);var point2=rotate(cx,cz,deg*(index+1),point[0],cz);points.push(point2[0],point[1],point2[1]);if(normal)points.push(point2[0]-cx,point2[1]-cy,point2[1]-cz)}points.push(cx,cy-radius,cz);if(normal)points.push(0,-radius,0);return points}var ThreeGeometry=function ThreeGeometry(options){if(!isNumber(options.precision)||options<=0){throw new Error("options.precision should be an integer greater than zero")}var threeGeometry={cylinder:function cylinder(doback,x,y,z,radius,height){var num=circle.splitNum(options.precision,radius);threeGeometry.prism(doback,x,y,z,radius,height,num);return threeGeometry},prism:function prism(doback,x,y,z,radius,height,num){doback({points:prismHorizontal(options.normal,x,y,z,radius,num,height>0?-1:1),length:num+2,methods:"FanTriangle"});doback({points:prismHorizontal(options.normal,x,y+height,z,radius,num,height>0?1:-1),length:num+2,methods:"FanTriangle"});doback({points:prismVertical(options.normal,x,y,z,radius,height,num),length:6*num,methods:"Triangle"});return threeGeometry},sphere:function sphere(doback,cx,cy,cz,radius){var num=circle.splitNum(options.precision,radius);for(var i=0;i<num;i++){doback({points:sphereFragment(options.normal,cx,cy,cz,radius,num,i),length:num+1,methods:"StripTriangle"})}return threeGeometry}};return threeGeometry};if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=ThreeGeometry}else{window.ThreeGeometry=ThreeGeometry}})();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/browser/xhtml.js
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🌐 - 提供常用的DOM操作方法
 * https://github.com/hai2007/browser.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

// 命名空间路径
var namespace = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

/**
 * 结点操作补充
 */

__etcpack__scope_bundle__.default= {

    // 阻止冒泡
    "stopPropagation": function (event) {
        event = event || window.event;
        if (event.stopPropagation) { //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 阻止默认事件
    "preventDefault": function (event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 判断是否是结点
    "isNode": function (param) {
        return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
    },

    // 绑定事件
    "bind": function (dom, eventType, callback) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.bind(dom[i], eventType, callback);
            }
            return;
        }

        if (window.attachEvent)
            dom.attachEvent("on" + eventType, callback);
        else
            dom.addEventListener(eventType, callback, false);
    },
    // 去掉绑定事件
    "unbind": function (dom, eventType, handler) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.unbind(dom[i], eventType, handler);
            }
            return;
        }

        if (window.detachEvent)
            dom.detachEvent('on' + eventType, handler);
        else
            dom.removeEventListener(eventType, handler, false);

    },

    // 在当前上下文context上查找结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "find": function (context, selectFun, tagName) {
        if (!this.isNode(context)) return [];
        var nodes = context.getElementsByTagName(tagName || '*');
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 寻找当前结点的孩子结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "children": function (dom, selectFun) {
        var nodes = dom.childNodes;
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 判断结点是否有指定class
    // clazzs可以是字符串或数组字符串
    // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
    "hasClass": function (dom, clazzs, notStrict) {
        if (clazzs.constructor !== Array) clazzs = [clazzs];

        var class_str = " " + (dom.getAttribute('class') || "") + " ";
        for (var i = 0; i < clazzs.length; i++) {
            if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
                if (notStrict) return true;
            } else {
                if (!notStrict) return false;
            }
        }
        return true;
    },

    // 删除指定class
    "removeClass": function (dom, clazz) {
        var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
        var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
        dom.setAttribute('class', newClazz.trim());
    },

    // 添加指定class
    "addClass": function (dom, clazz) {
        if (this.hasClass(dom, clazz)) return;
        var oldClazz = dom.getAttribute('class') || "";
        dom.setAttribute('class', oldClazz + " " + clazz);
    },

    // 字符串变成结点
    // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
    "toNode": function (template, isSvg) {
        var frame;

        // html和svg上下文不一样
        if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');
        else {

            var frameTagName = 'div';

            // 大部分的标签可以直接使用div作为容器
            // 部分特殊的需要特殊的容器标签

            if (/^<tr[> ]/.test(template)) {

                frameTagName = "tbody";

            } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                frameTagName = "tr";

            } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                frameTagName = "table";

            }

            frame = document.createElement(frameTagName);
        }

        // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充
        frame.innerHTML = template;

        var childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (this.isNode(childNodes[i])) return childNodes[i];
        }
    },

    // 主动触发事件
    "trigger": function (dom, eventType) {

        //创建event的对象实例。
        if (document.createEventObject) {
            // IE浏览器支持fireEvent方法
            dom.fireEvent('on' + eventType, document.createEventObject());
        }

        // 其他标准浏览器使用dispatchEvent方法
        else {
            var _event = document.createEvent('HTMLEvents');
            // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
            _event.initEvent(eventType, true, false);
            dom.dispatchEvent(_event);
        }

    },

    // 获取样式
    "getStyle": function (dom, name) {
        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
            document.defaultView.getComputedStyle(dom, null) :
            dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ?
            allStyle.getPropertyValue(name) :
            allStyle;
    },

    // 获取元素位置
    "offsetPosition": function (dom) {
        var left = 0;
        var top = 0;
        top = dom.offsetTop;
        left = dom.offsetLeft;
        dom = dom.offsetParent;
        while (dom) {
            top += dom.offsetTop;
            left += dom.offsetLeft;
            dom = dom.offsetParent;
        }
        return {
            "left": left,
            "top": top
        };
    },

    // 获取鼠标相对元素位置
    "mousePosition": function (dom, event) {
        var bounding = dom.getBoundingClientRect();
        if (!event || !event.clientX)
            throw new Error('Event is necessary!');
        return {
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    },

    // 删除结点
    "remove": function (dom) {
        dom.parentNode.removeChild(dom);
    },

    // 设置多个样式
    "setStyles": function (dom, styles) {
        for (var key in styles)
            dom.style[key] = styles[key];
    },

    // 获取元素大小
    "size": function (dom, type) {
        var elemHeight, elemWidth;
        if (type == 'content') { //内容
            elemWidth = dom.clientWidth - ((this.getStyle(dom, 'padding-left') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-right') + "").replace('px', ''));
            elemHeight = dom.clientHeight - ((this.getStyle(dom, 'padding-top') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-bottom') + "").replace('px', ''));
        } else if (type == 'padding') { //内容+内边距
            elemWidth = dom.clientWidth;
            elemHeight = dom.clientHeight;
        } else if (type == 'border') { //内容+内边距+边框
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        } else if (type == 'scroll') { //滚动的宽（不包括border）
            elemWidth = dom.scrollWidth;
            elemHeight = dom.scrollHeight;
        } else {
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        }
        return {
            width: elemWidth,
            height: elemHeight
        };
    },

    // 在被选元素内部的结尾插入内容
    "append": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.appendChild(node);
        return node;
    },

    // 在被选元素内部的开头插入内容
    "prepend": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.insertBefore(node, el.childNodes[0]);
        return node;
    },

    // 在被选元素之后插入内容
    "after": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el.nextSibling);
        return node;
    },

    // 在被选元素之前插入内容
    "before": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el);
        return node;
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/browser/viewHandler.js
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🌐 - 屏幕3D控制信息捕获
 * https://github.com/hai2007/browser.js/blob/master/viewHandler.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2022-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('34');
var xhtml =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('36');
var getKeyString =__etcpack__scope_args__.default;


__etcpack__scope_bundle__.default= function (callback) {

    var el = document.getElementsByTagName('body')[0];

    // 键盘控制
    xhtml.bind(el, 'keydown', function (event) {
        var keyCode = getKeyString(event);

        // 视角向上
        if (keyCode == 'up') {
            callback({
                type: "lookUp"
            });
        }

        // 视角向下
        else if (keyCode == 'down') {
            callback({
                type: "lookDown"
            });
        }

        // 视角向左
        else if (keyCode == 'left') {
            callback({
                type: "lookLeft"
            });
        }

        // 视角向右
        else if (keyCode == 'right') {
            callback({
                type: "lookRight"
            });
        }

    });

    // 鼠标控制
    var mouseP = null;
    var doMove = function (event) {
        if (mouseP == null) return;

        var tempMouseP = xhtml.mousePosition(el, event);

        // 先求解出轨迹向量
        var normal = [tempMouseP.x - mouseP.x, mouseP.y - tempMouseP.y];

        // 方向向量旋转90deg得到选择向量
        var rotateNormal = [
            normal[1],
            normal[0] * -1,
            0
        ]

        // 非法射线忽略
        if (rotateNormal[0] == 0 && rotateNormal[1] == 0) return;

        callback({
            type: "rotate",
            normal: rotateNormal,
            dist: Math.abs(tempMouseP.x - mouseP.x) + Math.abs(tempMouseP.y - mouseP.y)
        });

        mouseP = tempMouseP;
    };

    xhtml.bind(el, 'mousedown', function (event) {
        mouseP = xhtml.mousePosition(el, event);
    });
    xhtml.bind(el, 'mouseup', function (event) {
        mouseP = null;
    });
    xhtml.bind(el, 'mousemove', function (event) {
        doMove(event);
    });

    // 手指控制
    xhtml.bind(el, 'touchend', function (event) {
        mouseP = null;
    });
    xhtml.bind(el, 'touchstart', function (event) {
        mouseP = xhtml.mousePosition(el, event.touches[0]);
    });
    xhtml.bind(el, 'touchmove', function (event) {
        doMove(event.touches[0]);
    });

    let doScale = function (value) {
        if (value == 0) return;

        callback({
            type: "scale",
            kind: value < 0 ? "reduce" : "enlarge",
            rate: Math.abs(value),
        });
    };

    // 滚轮控制
    xhtml.bind(el, 'mousewheel', function (event) {
        doScale(event.wheelDelta);
    });

    if (window.addEventListener) {

        // 针对火狐浏览器
        window.addEventListener('DOMMouseScroll', function (event) {
            doScale(-1 * event.detail);
        }, false);
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/browser/getKeyString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🌐 - 获取键盘此时按下的键的组合结果
 * https://github.com/hai2007/browser.js/blob/master/getKeyString.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */
// 字典表
var dictionary = {

    // 数字
    48: [0, ')'],
    49: [1, '!'],
    50: [2, '@'],
    51: [3, '#'],
    52: [4, '$'],
    53: [5, '%'],
    54: [6, '^'],
    55: [7, '&'],
    56: [8, '*'],
    57: [9, '('],
    96: [0, 0],
    97: 1,
    98: 2,
    99: 3,
    100: 4,
    101: 5,
    102: 6,
    103: 7,
    104: 8,
    105: 9,
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",

    // 字母
    65: ["a", "A"],
    66: ["b", "B"],
    67: ["c", "C"],
    68: ["d", "D"],
    69: ["e", "E"],
    70: ["f", "F"],
    71: ["g", "G"],
    72: ["h", "H"],
    73: ["i", "I"],
    74: ["j", "J"],
    75: ["k", "K"],
    76: ["l", "L"],
    77: ["m", "M"],
    78: ["n", "N"],
    79: ["o", "O"],
    80: ["p", "P"],
    81: ["q", "Q"],
    82: ["r", "R"],
    83: ["s", "S"],
    84: ["t", "T"],
    85: ["u", "U"],
    86: ["v", "V"],
    87: ["w", "W"],
    88: ["x", "X"],
    89: ["y", "Y"],
    90: ["z", "Z"],

    // 方向
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    33: "page up",
    34: "page down",
    35: "end",
    36: "home",

    // 控制键
    16: "shift",
    17: "ctrl",
    18: "alt",
    91: "command",
    92: "command",
    93: "command",
    224: "command",
    9: "tab",
    20: "caps lock",
    32: "spacebar",
    8: "backspace",
    13: "enter",
    27: "esc",
    46: "delete",
    45: "insert",
    144: "number lock",
    145: "scroll lock",
    12: "clear",
    19: "pause",

    // 功能键
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",

    // 余下键
    189: ["-", "_"],
    187: ["=", "+"],
    219: ["[", "{"],
    221: ["]", "}"],
    220: ["\\", "|"],
    186: [";", ":"],
    222: ["'", '"'],
    188: [",", "<"],
    190: [".", ">"],
    191: ["/", "?"],
    192: ["`", "~"]

};

// 非独立键字典
var help_key = ["shift", "ctrl", "alt"];

/**
 * 键盘按键
 * 返回键盘此时按下的键的组合结果
 */
__etcpack__scope_bundle__.default= function(event) {
    event = event || window.event;

    var keycode = event.keyCode || event.which;
    var key = dictionary[keycode] || keycode;
    if (!key) return;
    if (key.constructor !== Array) key = [key, key];

    var _key = key[0];

    var shift = event.shiftKey ? "shift+" : "",
        alt = event.altKey ? "alt+" : "",
        ctrl = event.ctrlKey ? "ctrl+" : "";

    var resultKey = "",
        preKey = ctrl + shift + alt;

    if (help_key.indexOf(key[0]) >= 0) {
        key[0] = key[1] = "";
    }

    // 判断是否按下了caps lock
    var lockPress = event.code == "Key" + event.key && !shift;

    // 只有字母（且没有按下功能Ctrl、shift或alt）区分大小写
    resultKey = (preKey + ((preKey == '' && lockPress) ? key[1] : key[0]));

    if (key[0] == "") {
        resultKey = resultKey.replace(/\+$/, '');
    }

    return resultKey == '' ? _key : resultKey;
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/sphere-image/vertex-shader.c
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "attribute vec4 a_position;\r\nvarying vec3 v_normal;\r\nuniform mat4 u_matrix;\r\nvoid main(){\r\n    gl_Position=u_matrix * a_position;\r\n    // 因为位置是以几何中心为原点的,可以用顶点坐标作为法向量\r\n    v_normal=normalize(a_position.xyz);\r\n}\r\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/sphere-image/fragment-shader.c
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "precision mediump float;\r\nvarying vec3 v_normal;\r\nuniform samplerCube u_texture;\r\nvoid main(){\r\n    gl_FragColor=textureCube(u_texture,normalize(v_normal));\r\n}\r\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/sphere-image/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n #skybox{\n\nwidth: 100vw;\n\nheight: 100vh;\n\nbackground-color: #607d8b;\n\nbackground-image: url('./images/bg-1.jpg');\n\nbackground-size: cover;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/sphere-image/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<canvas id='skybox'></canvas>\r\n"
  
    return __etcpack__scope_bundle__;
}
