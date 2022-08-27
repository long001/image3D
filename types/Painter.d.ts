export interface Painter {

    // 点
    drawPoint(first: number, count: number): Painter

    // 直线
    drawLine(first: number, count: number): Painter

    // 连续直线
    drawStripLine(first: number, count: number): Painter

    // 闭合直线
    drawLoopLine(first: number, count: number): Painter

    // 三角形
    drawTriangle(first: number, count: number): Painter

    // 共边三角形
    drawStripTriangle(first: number, count: number): Painter

    // 旋转围绕三角形
    drawFanTriangle(first: number, count: number): Painter

    // 点
    elemPoint(first: number, count: number, type?: "byte" | "'short"): Painter

    // 直线
    elemLine(first: number, count: number, type?: "byte" | "'short"): Painter

    // 连续直线
    elemStripLine(first: number, count: number, type?: "byte" | "'short"): Painter

    // 闭合直线
    elemLoopLine(first: number, count: number, type?: "byte" | "'short"): Painter

    // 三角形
    elemTriangle(first: number, count: number, type?: "byte" | "'short"): Painter

    // 共边三角形
    elemStripTriangle(first: number, count: number, type?: "byte" | "'short"): Painter

    // 旋转围绕三角形
    elemFanTriangle(first: number, count: number, type?: "byte" | "'short"): Painter

}
