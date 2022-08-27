import Matrix4 from '@hai2007/tool/Matrix4.js';
import { isArray } from '@hai2007/tool/type';

/**
 * 照相机
 * -------------------------
 */
export default function (CORE, CONFIG) {

    return function (options = {}) {

        return new function Camera() {

            let proportion = CORE._gl_.canvas.clientWidth / CORE._gl_.canvas.clientHeight;

            // 压缩空间的范围
            // 这里是为了兼容过时被废弃的写法
            // by 你好2007 2022年1月8日 南京
            if (isArray(options.size)) {
                options.size = options.size[0];
                console.warn('"options.size" should be a number. The writing of array is out of date: https://hai2007.gitee.io/image3d/index.html#/api?fixed=camera-set');
            }

            // 如果没有设置size
            if (!('size' in options)) {
                options.size = 1;
            }

            // 摄像头位置改变和物体位置改变矩阵初始化
            let matrix4 = Matrix4();

            let zOne = options.proof ? -1 : 1;

            // 应用压缩空间矩阵
            matrix4.multiply([
                1 / options.size, 0, 0, 0,
                0, 1 / options.size, 0, 0,
                0, 0, zOne / options.size, 0,
                0, 0, 0, 1
            ]);

            this.setProportion = (_proportion) => {
                proportion = _proportion;
                return this;
            };

            /**
             * 摄像头位置改变
             */

            // 旋转
            this.rotateEye = (deg, a1, b1, c1, a2, b2, c2) => {
                matrix4.rotate(-deg, a1, b1, c1, a2, b2, c2);
                return this;
            };

            // 移动
            this.moveEye = (dis, a, b, c) => {
                matrix4.move(-dis, a, b, c);
                return this;
            };

            /**
             * 物体位置改变
             */

            // 旋转
            this.rotateBody = (deg, a1, b1, c1, a2, b2, c2) => {
                matrix4.rotate(deg, a1, b1, c1, a2, b2, c2);
                return this;
            };

            // 移动
            this.moveBody = (dis, a, b, c) => {
                matrix4.move(dis, a, b, c);
                return this;
            };

            // 缩放
            this.scaleBody = (xTimes, yTimes, zTimes, cx, cy, cz) => {
                matrix4.scale(xTimes, yTimes, zTimes, cx, cy, cz);
                return this;
            };

            // 获取当前的变换矩阵值
            this.value = () => {

                let xProportion = 1;
                let yProportion = 1;

                if (proportion > 1) {
                    yProportion = proportion;
                } else {
                    xProportion = 1 / proportion;
                }

                let zProportion = Math.max(xProportion, yProportion);

                return Matrix4(matrix4.value()).multiply([
                    xProportion, 0, 0, 0,
                    0, yProportion, 0, 0,
                    0, 0, zProportion, 0,
                    0, 0, 0, 1
                ]).value();
            };

        };

    };

};
