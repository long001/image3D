<p align='center'>
    <a href='https://hai2007.gitee.io/image3d/review/index.html'>
        <img src='https://hai2007.gitee.io/image3d/review/images/drawing-room@boy.png' />
    </a>
</p>

# 🍊 [image3D](http://hai2007.gitee.io/image3d/)
使用webGL绘制三维图片。📊📈🎉 Drawing three-dimensional images using webGL.

[![downloads](https://img.shields.io/npm/dm/image3d.svg)](https://hai2007.gitee.io/npm-downloads?interval=7&packages=image3d)
[![CDN](https://data.jsdelivr.com/v1/package/npm/image3d/badge)](https://www.jsdelivr.com/package/npm/image3d)
[![Version](https://img.shields.io/npm/v/image3d.svg)](https://www.npmjs.com/package/image3d)
[![License](https://img.shields.io/npm/l/image3d.svg)](https://github.com/hai2007/image3D/blob/master/LICENSE)
[![GitHub repo stars](https://img.shields.io/github/stars/hai2007/image3D?style=social)](https://github.com/hai2007/image3D)

> 鉴于当前浏览器支持情况，本项目只支持webGL 1上下文，更高级版本未来会考虑支持！

## 问题或交流
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/image3D/issues)！

## 如何使用？

假设我们现在需要绘制一个下面这样的图形（图形在不停的旋转）：

<img src='https://hai2007.gitee.io/image3D/images/readme-demo.png' width='200'>

首先，需要安装依赖的包：

```
npm install --save image3d three-geometry
```

然后，在页面中准备好着色器片段：

```html
<!-- 顶点着色器 -->
<script type='x-shader/x-vertex' id='vs'>
    attribute vec4 a_position;
    uniform mat4 u_matrix;
    void main(){
        gl_Position=u_matrix * a_position;
    }
</script>
```

```html
<!-- 片段着色器 -->
<script type='x-shader/x-fragment' id='fs'>
    precision mediump float;
    uniform vec4 u_color;
    void main(){
        gl_FragColor=u_color;
    }
</script>
```

当然，还有画布：

```html
 <canvas width=500 height=500>非常抱歉，您的浏览器不支持canvas!</canvas>
```

准备好了以后，使用着色器和画布进行初始化，得到三维绘图对象：

```js
import image3D from 'image3d';

var image3d = new image3D(document.getElementsByTagName('canvas')[0], {
    "vertex-shader": document.getElementById("vs").innerText,
    "fragment-shader": document.getElementById("fs").innerText,
    "depth": true
});
```

然后，获得画笔和相机等：

```js
var painter = image3d.Painter();
var buffer = image3d.Buffer();
var camera = image3d.Camera();
```

可以看到，最终的效果是一个球和一个圆柱，三维几何体的计算，这里依赖[three-geometry](https://github.com/clunch-contrib/Three-Geometry)提供，因此，我们接下来对其进行初始化：

```js
import ThreeGeometry from 'three-geometry';

var threeGeometry = ThreeGeometry({
    precision: 0.1
});
```

因为最终的效果是图形在不停的旋转，因此，我们需要不停的通过相机进行旋转，就好像这样：

```js
setInterval(function () {

    // 修改相机

    // 绘制

}, 20);
```

修改相机很简单：

```js
 // 传递照相机
image3d.setUniformMatrix("u_matrix", camera.rotateBody(0.02, -1, 1, 0, 1, -1, 0).value());
```

绘制的话，也很简单，我们以绘制一个球为例子说明（圆柱体类似）。

首先，设置球的颜色：

```js
 image3d.setUniformFloat("u_color", 0.1, 0.3, 0.1, 1.0);
```

然后，借助前面几何体的对象计算球的数据：

```js
 threeGeometry.sphere(function (data) {

     // data中包含了绘制球需要的坐标数据

 }, 0, 0.1, 0, 0.5)
```

拿到球的坐标数据以后，使用```image3d```上的方法绘制即可：

```js
buffer.write(new Float32Array(data.points)).use('a_position', 3, 3, 0);
painter.drawStripTriangle(0, data.length);
```

最终的效果，我们提供了一个在线访问地址，你可以[点击此处](https://agile-contrib.github.io/image3d-learn/src/4.sphere&cylinder.html)访问。

怎么样，是不是很简单？完整的代码请[点击此处](https://github.com/agile-contrib/image3d-learn/blob/master/src/4.sphere&cylinder.html)进行查看。

更多细节你可以访问[在线接口文档](https://hai2007.gitee.io/image3D/)进行查阅。

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/image3D/blob/master/LICENSE)

Copyright (c) 2019-2022 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
