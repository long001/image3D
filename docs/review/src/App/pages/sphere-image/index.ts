import { Component } from 'nefbl'
import image3D from 'image3d'
import ThreeGeometry from 'three-geometry'
import xhtml from "@hai2007/browser/xhtml"
import viewHandler from '@hai2007/browser/viewHandler.js'

import vertexShader from './vertex-shader.c'
import fragmentShader from './fragment-shader.c'

import style from './index.scss'
import template from './index.html'

@Component({
    template,
    styles: [style]
})
export default class {
    $mounted() {

        let canvas = document.getElementById('skybox')

        let size = xhtml.size(canvas)
        canvas.setAttribute('width', size.width)
        canvas.setAttribute('height', size.height)

        // 创建3D对象并配置好画布和着色器
        let image3d = new image3D(canvas, {

            // 传递着色器
            "vertex-shader": vertexShader,
            "fragment-shader": fragmentShader,

            // 开启深度计算
            "depth": true

        })

        // 创建纹理对象
        let texture = image3d.TextureCube(500, 500)

        let threeGeometry = ThreeGeometry({
            precision: 0.5
        })

        let image1 = new Image()
        image1.onload = function () {
            let image2 = new Image()
            image2.onload = function () {
                let image3 = new Image()
                image3.onload = function () {
                    let image4 = new Image()
                    image4.onload = function () {
                        let image5 = new Image()
                        image5.onload = function () {
                            let image6 = new Image()
                            image6.onload = function () {

                                texture.write(image1, image2, image3, image4, image5, image6)
                                image3d.setUniformInt('u_texture', texture)

                                let camera = image3d.Camera({
                                    size: 3
                                })
                                let painter = image3d.Painter()
                                let buffer = image3d.Buffer()

                                let datas = []

                                // 球心（cx,cy,cz)、半径radius
                                threeGeometry.sphere(function (data) {
                                    datas.push(data)
                                }, 0, 0, 0, 1)

                                let doit = () => {
                                    image3d.setUniformMatrix("u_matrix", camera.value());
                                    for (let data of datas) {
                                        buffer.write(new Float32Array(data.points)).use('a_position', 3, 3, 0)
                                        painter.drawStripTriangle(0, data.length)
                                    }
                                }

                                doit()

                                // 鼠标键盘交互
                                // 每次调整的弧度
                                let deg = 0.1
                                let rateScale = 1

                                viewHandler(data => {

                                    /*
                                     * 修改相机
                                     */

                                    // 键盘控制
                                    if (data.type == 'lookUp') {
                                        camera.rotateBody(deg, 1, 0, 0)
                                    } else if (data.type == 'lookDown') {
                                        camera.rotateBody(deg, -1, 0, 0)
                                    } else if (data.type == 'lookLeft') {
                                        camera.rotateBody(deg, 0, 1, 0)
                                    } else if (data.type == 'lookRight') {
                                        camera.rotateBody(deg, 0, -1, 0)
                                    }

                                    // 鼠标拖动或手指控制
                                    else if (data.type == 'rotate') {
                                        camera.rotateBody(deg * data.dist * 0.07, data.normal[0], data.normal[1], data.normal[2])
                                    }

                                    // 滚轮控制
                                    else if (data.type == 'scale') {

                                        // 设置一个缩放上界
                                        if (data.kind == 'enlarge' && rateScale >= 2) {
                                            return
                                        }

                                        let baseTimes = 0.899

                                        let times = data.kind == 'enlarge' ? 2 - baseTimes : baseTimes
                                        rateScale *= times

                                        camera.scaleBody(times, times, times, 0, 0, 0)
                                    }

                                    // 重新绘制
                                    doit()
                                })

                            }
                            image6.src = "./images/skybox/front.jpg"
                        }
                        image5.src = "./images/skybox/back.jpg"
                    }
                    image4.src = "./images/skybox/bottom.jpg"
                }
                image3.src = "./images/skybox/top.jpg"
            }
            image2.src = "./images/skybox/left.jpg"
        }
        image1.src = "./images/skybox/right.jpg"
    }
}
