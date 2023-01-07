export class ProtoFile {
    messageMap = new Map<string, ProtoMessage>();
    packageName: string;

    setMessage(message: ProtoMessage) {
        if (this.messageMap.has(message.messageName)) {
            throw ''
        }
        this.messageMap.set(message.messageName, message)
    }
}

export class ProtoMessage {
    messageName: string;
    common: string;
    endIndex: number;
}