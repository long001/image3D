export interface Camera {

    // 设置宽和高度比例
    setProportion(val: number):Camera

    // 旋转物体
    rotateBody(deg: number, a1: number, b1: number, c1?: number, a2?: number, b2?: number, c2?: number):Camera

    // 移动物体
    moveBody(dis: number, a: number, b: number, c?: number):Camera

    // 缩放物体
    scaleBody(xTimes: number, yTimes: number, zTimes: number, cx?: number, cy?: number, cz?: number):Camera

    // 旋转照相机
    rotateEye(deg: number, a1: number, b1: number, c1?: number, a2?: number, b2?: number, c2?: number):Camera

    // 移动照相机
    moveEye(dis: number, a: number, b: number, c?: number):Camera

    // 获取照相机矩阵
    value(): Array<number>

}


export interface CameraOption {

    // 默认的时候，Z轴承的方向是朝里的，你可以通过下面的配置项进行校对
    proof?: boolean

    size?: number

}
