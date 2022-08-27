export interface Buffer {

    // 写入数据
    write(data: Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array):Buffer

    // 分配数据
    use(location: string, size: number, stride: number, offset: number):Buffer

}
