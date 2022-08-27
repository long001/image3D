import { option } from "./option"

import { Painter } from "./Painter"
import { Texture2D, TextureCube } from "./Texture"
import { Buffer } from "./Buffer"
import { Camera, CameraOption } from "./Camera"

declare class image3D {

    // 构造函数
    constructor(el: Element | null, option: option)

    // 获取画笔
    Painter(): Painter

    // 更新着色器
    setShader(vertexShader: string, fragmentShader: string): image3D

    // 清空画布
    clear(r: number, g: number, b: number, a: number): image3D

    // 二维纹理
    Texture2D(unit: number): Texture2D

    // 立方纹理
    TextureCube(width: number, height: number): TextureCube

    // 缓冲区
    Buffer(isElement?: boolean): Buffer

    // 照相机
    Camera(option?: CameraOption): Camera

    // 设置Attribute类型的Float类型值或向量
    setAttributeFloat(location: string, v0: any, v1?: number, v2?: number, v3?: number): image3D

    // 设置Attribute类型的Int类型值或向量
    setAttributeInt(location: string, v0: any, v1?: number, v2?: number, v3?: number): image3D

    // 设置Uniform类型的Float类型值或向量
    setUniformFloat(location: string, v0: any, v1?: number, v2?: number, v3?: number): image3D

    // 设置Uniform类型的Int类型值或向量
    setUniformInt(location: string, v0: any, v1?: number, v2?: number, v3?: number): image3D

    // 设置矩阵
    setUniformMatrix(location: string, value: any): image3D

}

export default image3D
