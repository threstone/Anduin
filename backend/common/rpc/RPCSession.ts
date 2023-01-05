export class RPC_RESPONSE {
    sessionId: number
    errCode: number
    errMsg: string
    body:  any
}

export class RPC_REQUEST {
    sessionId: number
    method: string
    args: Array<any>
}

export class RpcPoolTemp {
    sendTime: number
    method: string
    _promise: Array<any>
}

export class SERVER_INFO {
    name: string
    host: string
    port: number
}
