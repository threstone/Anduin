export interface ToolsConfig {
    /**proto文件所在目录 */
    protoFilesRoot: string
    /**protobuf 生成可选 */
    noCreate: boolean,
    /**protobuf 生成可选 */
    noConvert: boolean,
    /**生成文件的路径 */
    targetPath: string
    /**生成文件的名称 */
    targetName: string
    /**protobuf 生成可选 */
    isJsMin: boolean,
    /**选择生成的proto文件数组 */
    commonFiles: string[],
    /**生成类型 */
    generateType: GenerateType
}

export enum GenerateType {
    All,
    ProtoBuf,
    NormalBuf
}