export interface Texture2D {

    // 二维纹理其实是用一张图片贴图，因此需要写入用作纹理的图片
    write(image: any): Texture2D

}

export interface TextureCube {

    // 类似一个长方体，有六个面，因此我们需要写入六张图片
    write(img1: any, img2: any, img3: any, img4: any, img5: any, img6: any): TextureCube

}
