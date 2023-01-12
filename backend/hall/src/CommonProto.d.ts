import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace LoginPto. */
export namespace LoginPto {

    /** Properties of a C_LOGIN. */
    interface IC_LOGIN {

        /** C_LOGIN cmd */
        cmd?: (number|null);

        /** C_LOGIN scmd */
        scmd?: (number|null);

        /** C_LOGIN account */
        account?: (string|null);

        /** C_LOGIN password */
        password?: (string|null);
    }

    /** Represents a C_LOGIN. */
    class C_LOGIN implements IC_LOGIN {

        /**
         * Constructs a new C_LOGIN.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginPto.IC_LOGIN);

        /** C_LOGIN cmd. */
        public cmd: number;

        /** C_LOGIN scmd. */
        public scmd: number;

        /** C_LOGIN account. */
        public account: string;

        /** C_LOGIN password. */
        public password: string;

        /**
         * Encodes the specified C_LOGIN message. Does not implicitly {@link LoginPto.C_LOGIN.verify|verify} messages.
         * @param message C_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPto.IC_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_LOGIN message, length delimited. Does not implicitly {@link LoginPto.C_LOGIN.verify|verify} messages.
         * @param message C_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPto.IC_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginPto.C_LOGIN;

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginPto.C_LOGIN;

        /**
         * Verifies a C_LOGIN message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_LOGIN message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_LOGIN
         */
        public static fromObject(object: { [k: string]: any }): LoginPto.C_LOGIN;

        /**
         * Creates a plain object from a C_LOGIN message. Also converts values to other types if specified.
         * @param message C_LOGIN
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LoginPto.C_LOGIN, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_LOGIN to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_LOGIN
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_LOGIN. */
    interface IS_LOGIN {

        /** S_LOGIN cmd */
        cmd?: (number|null);

        /** S_LOGIN scmd */
        scmd?: (number|null);

        /** S_LOGIN isSuccess */
        isSuccess?: (boolean|null);

        /** S_LOGIN nick */
        nick?: (string|null);

        /** S_LOGIN headIndex */
        headIndex?: (number|null);

        /** S_LOGIN uid */
        uid?: (number|null);
    }

    /** Represents a S_LOGIN. */
    class S_LOGIN implements IS_LOGIN {

        /**
         * Constructs a new S_LOGIN.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginPto.IS_LOGIN);

        /** S_LOGIN cmd. */
        public cmd: number;

        /** S_LOGIN scmd. */
        public scmd: number;

        /** S_LOGIN isSuccess. */
        public isSuccess: boolean;

        /** S_LOGIN nick. */
        public nick: string;

        /** S_LOGIN headIndex. */
        public headIndex: number;

        /** S_LOGIN uid. */
        public uid: number;

        /**
         * Encodes the specified S_LOGIN message. Does not implicitly {@link LoginPto.S_LOGIN.verify|verify} messages.
         * @param message S_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPto.IS_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_LOGIN message, length delimited. Does not implicitly {@link LoginPto.S_LOGIN.verify|verify} messages.
         * @param message S_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPto.IS_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginPto.S_LOGIN;

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginPto.S_LOGIN;

        /**
         * Verifies a S_LOGIN message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_LOGIN message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_LOGIN
         */
        public static fromObject(object: { [k: string]: any }): LoginPto.S_LOGIN;

        /**
         * Creates a plain object from a S_LOGIN message. Also converts values to other types if specified.
         * @param message S_LOGIN
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LoginPto.S_LOGIN, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_LOGIN to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_LOGIN
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_REGISTER. */
    interface IC_REGISTER {

        /** C_REGISTER cmd */
        cmd?: (number|null);

        /** C_REGISTER scmd */
        scmd?: (number|null);

        /** C_REGISTER account */
        account?: (string|null);

        /** C_REGISTER password */
        password?: (string|null);

        /** C_REGISTER nick */
        nick?: (string|null);
    }

    /** Represents a C_REGISTER. */
    class C_REGISTER implements IC_REGISTER {

        /**
         * Constructs a new C_REGISTER.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginPto.IC_REGISTER);

        /** C_REGISTER cmd. */
        public cmd: number;

        /** C_REGISTER scmd. */
        public scmd: number;

        /** C_REGISTER account. */
        public account: string;

        /** C_REGISTER password. */
        public password: string;

        /** C_REGISTER nick. */
        public nick: string;

        /**
         * Encodes the specified C_REGISTER message. Does not implicitly {@link LoginPto.C_REGISTER.verify|verify} messages.
         * @param message C_REGISTER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPto.IC_REGISTER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_REGISTER message, length delimited. Does not implicitly {@link LoginPto.C_REGISTER.verify|verify} messages.
         * @param message C_REGISTER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPto.IC_REGISTER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_REGISTER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginPto.C_REGISTER;

        /**
         * Decodes a C_REGISTER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginPto.C_REGISTER;

        /**
         * Verifies a C_REGISTER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_REGISTER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_REGISTER
         */
        public static fromObject(object: { [k: string]: any }): LoginPto.C_REGISTER;

        /**
         * Creates a plain object from a C_REGISTER message. Also converts values to other types if specified.
         * @param message C_REGISTER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LoginPto.C_REGISTER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_REGISTER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_REGISTER
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_REGISTER. */
    interface IS_REGISTER {

        /** S_REGISTER cmd */
        cmd?: (number|null);

        /** S_REGISTER scmd */
        scmd?: (number|null);

        /** S_REGISTER code */
        code?: (number|null);
    }

    /** Represents a S_REGISTER. */
    class S_REGISTER implements IS_REGISTER {

        /**
         * Constructs a new S_REGISTER.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginPto.IS_REGISTER);

        /** S_REGISTER cmd. */
        public cmd: number;

        /** S_REGISTER scmd. */
        public scmd: number;

        /** S_REGISTER code. */
        public code: number;

        /**
         * Encodes the specified S_REGISTER message. Does not implicitly {@link LoginPto.S_REGISTER.verify|verify} messages.
         * @param message S_REGISTER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPto.IS_REGISTER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_REGISTER message, length delimited. Does not implicitly {@link LoginPto.S_REGISTER.verify|verify} messages.
         * @param message S_REGISTER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPto.IS_REGISTER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_REGISTER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginPto.S_REGISTER;

        /**
         * Decodes a S_REGISTER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginPto.S_REGISTER;

        /**
         * Verifies a S_REGISTER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_REGISTER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_REGISTER
         */
        public static fromObject(object: { [k: string]: any }): LoginPto.S_REGISTER;

        /**
         * Creates a plain object from a S_REGISTER message. Also converts values to other types if specified.
         * @param message S_REGISTER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LoginPto.S_REGISTER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_REGISTER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_REGISTER
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace SystemPto. */
export namespace SystemPto {

    /** Properties of a S_TIPS. */
    interface IS_TIPS {

        /** S_TIPS cmd */
        cmd?: (number|null);

        /** S_TIPS scmd */
        scmd?: (number|null);

        /** S_TIPS msg */
        msg?: (string|null);

        /** S_TIPS hoverTime */
        hoverTime?: (number|null);
    }

    /** Represents a S_TIPS. */
    class S_TIPS implements IS_TIPS {

        /**
         * Constructs a new S_TIPS.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_TIPS);

        /** S_TIPS cmd. */
        public cmd: number;

        /** S_TIPS scmd. */
        public scmd: number;

        /** S_TIPS msg. */
        public msg: string;

        /** S_TIPS hoverTime. */
        public hoverTime: number;

        /**
         * Encodes the specified S_TIPS message. Does not implicitly {@link SystemPto.S_TIPS.verify|verify} messages.
         * @param message S_TIPS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_TIPS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_TIPS message, length delimited. Does not implicitly {@link SystemPto.S_TIPS.verify|verify} messages.
         * @param message S_TIPS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_TIPS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_TIPS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_TIPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_TIPS;

        /**
         * Decodes a S_TIPS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_TIPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_TIPS;

        /**
         * Verifies a S_TIPS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_TIPS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_TIPS
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_TIPS;

        /**
         * Creates a plain object from a S_TIPS message. Also converts values to other types if specified.
         * @param message S_TIPS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_TIPS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_TIPS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_TIPS
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace ChatPto. */
export namespace ChatPto {

    /** Properties of a C_SEND_PRIVATE_MESSAGE. */
    interface IC_SEND_PRIVATE_MESSAGE {

        /** C_SEND_PRIVATE_MESSAGE cmd */
        cmd?: (number|null);

        /** C_SEND_PRIVATE_MESSAGE scmd */
        scmd?: (number|null);

        /** C_SEND_PRIVATE_MESSAGE uid */
        uid?: (number|null);

        /** C_SEND_PRIVATE_MESSAGE msg */
        msg?: (string|null);
    }

    /** Represents a C_SEND_PRIVATE_MESSAGE. */
    class C_SEND_PRIVATE_MESSAGE implements IC_SEND_PRIVATE_MESSAGE {

        /**
         * Constructs a new C_SEND_PRIVATE_MESSAGE.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatPto.IC_SEND_PRIVATE_MESSAGE);

        /** C_SEND_PRIVATE_MESSAGE cmd. */
        public cmd: number;

        /** C_SEND_PRIVATE_MESSAGE scmd. */
        public scmd: number;

        /** C_SEND_PRIVATE_MESSAGE uid. */
        public uid: number;

        /** C_SEND_PRIVATE_MESSAGE msg. */
        public msg: string;

        /**
         * Encodes the specified C_SEND_PRIVATE_MESSAGE message. Does not implicitly {@link ChatPto.C_SEND_PRIVATE_MESSAGE.verify|verify} messages.
         * @param message C_SEND_PRIVATE_MESSAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatPto.IC_SEND_PRIVATE_MESSAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SEND_PRIVATE_MESSAGE message, length delimited. Does not implicitly {@link ChatPto.C_SEND_PRIVATE_MESSAGE.verify|verify} messages.
         * @param message C_SEND_PRIVATE_MESSAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatPto.IC_SEND_PRIVATE_MESSAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SEND_PRIVATE_MESSAGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SEND_PRIVATE_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatPto.C_SEND_PRIVATE_MESSAGE;

        /**
         * Decodes a C_SEND_PRIVATE_MESSAGE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SEND_PRIVATE_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatPto.C_SEND_PRIVATE_MESSAGE;

        /**
         * Verifies a C_SEND_PRIVATE_MESSAGE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SEND_PRIVATE_MESSAGE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SEND_PRIVATE_MESSAGE
         */
        public static fromObject(object: { [k: string]: any }): ChatPto.C_SEND_PRIVATE_MESSAGE;

        /**
         * Creates a plain object from a C_SEND_PRIVATE_MESSAGE message. Also converts values to other types if specified.
         * @param message C_SEND_PRIVATE_MESSAGE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatPto.C_SEND_PRIVATE_MESSAGE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SEND_PRIVATE_MESSAGE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_SEND_PRIVATE_MESSAGE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_SEND_MESSAGE_TO_ALL. */
    interface IC_SEND_MESSAGE_TO_ALL {

        /** C_SEND_MESSAGE_TO_ALL cmd */
        cmd?: (number|null);

        /** C_SEND_MESSAGE_TO_ALL scmd */
        scmd?: (number|null);

        /** C_SEND_MESSAGE_TO_ALL msg */
        msg?: (string|null);
    }

    /** Represents a C_SEND_MESSAGE_TO_ALL. */
    class C_SEND_MESSAGE_TO_ALL implements IC_SEND_MESSAGE_TO_ALL {

        /**
         * Constructs a new C_SEND_MESSAGE_TO_ALL.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatPto.IC_SEND_MESSAGE_TO_ALL);

        /** C_SEND_MESSAGE_TO_ALL cmd. */
        public cmd: number;

        /** C_SEND_MESSAGE_TO_ALL scmd. */
        public scmd: number;

        /** C_SEND_MESSAGE_TO_ALL msg. */
        public msg: string;

        /**
         * Encodes the specified C_SEND_MESSAGE_TO_ALL message. Does not implicitly {@link ChatPto.C_SEND_MESSAGE_TO_ALL.verify|verify} messages.
         * @param message C_SEND_MESSAGE_TO_ALL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatPto.IC_SEND_MESSAGE_TO_ALL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SEND_MESSAGE_TO_ALL message, length delimited. Does not implicitly {@link ChatPto.C_SEND_MESSAGE_TO_ALL.verify|verify} messages.
         * @param message C_SEND_MESSAGE_TO_ALL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatPto.IC_SEND_MESSAGE_TO_ALL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SEND_MESSAGE_TO_ALL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SEND_MESSAGE_TO_ALL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatPto.C_SEND_MESSAGE_TO_ALL;

        /**
         * Decodes a C_SEND_MESSAGE_TO_ALL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SEND_MESSAGE_TO_ALL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatPto.C_SEND_MESSAGE_TO_ALL;

        /**
         * Verifies a C_SEND_MESSAGE_TO_ALL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SEND_MESSAGE_TO_ALL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SEND_MESSAGE_TO_ALL
         */
        public static fromObject(object: { [k: string]: any }): ChatPto.C_SEND_MESSAGE_TO_ALL;

        /**
         * Creates a plain object from a C_SEND_MESSAGE_TO_ALL message. Also converts values to other types if specified.
         * @param message C_SEND_MESSAGE_TO_ALL
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatPto.C_SEND_MESSAGE_TO_ALL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SEND_MESSAGE_TO_ALL to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_SEND_MESSAGE_TO_ALL
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_CHAT_MESSAGE. */
    interface IS_CHAT_MESSAGE {

        /** S_CHAT_MESSAGE cmd */
        cmd?: (number|null);

        /** S_CHAT_MESSAGE scmd */
        scmd?: (number|null);

        /** S_CHAT_MESSAGE msg */
        msg?: (string|null);

        /** S_CHAT_MESSAGE nick */
        nick?: (string|null);

        /** S_CHAT_MESSAGE uid */
        uid?: (number|null);
    }

    /** Represents a S_CHAT_MESSAGE. */
    class S_CHAT_MESSAGE implements IS_CHAT_MESSAGE {

        /**
         * Constructs a new S_CHAT_MESSAGE.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatPto.IS_CHAT_MESSAGE);

        /** S_CHAT_MESSAGE cmd. */
        public cmd: number;

        /** S_CHAT_MESSAGE scmd. */
        public scmd: number;

        /** S_CHAT_MESSAGE msg. */
        public msg: string;

        /** S_CHAT_MESSAGE nick. */
        public nick: string;

        /** S_CHAT_MESSAGE uid. */
        public uid: number;

        /**
         * Encodes the specified S_CHAT_MESSAGE message. Does not implicitly {@link ChatPto.S_CHAT_MESSAGE.verify|verify} messages.
         * @param message S_CHAT_MESSAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatPto.IS_CHAT_MESSAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_CHAT_MESSAGE message, length delimited. Does not implicitly {@link ChatPto.S_CHAT_MESSAGE.verify|verify} messages.
         * @param message S_CHAT_MESSAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatPto.IS_CHAT_MESSAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CHAT_MESSAGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CHAT_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatPto.S_CHAT_MESSAGE;

        /**
         * Decodes a S_CHAT_MESSAGE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CHAT_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatPto.S_CHAT_MESSAGE;

        /**
         * Verifies a S_CHAT_MESSAGE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_CHAT_MESSAGE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_CHAT_MESSAGE
         */
        public static fromObject(object: { [k: string]: any }): ChatPto.S_CHAT_MESSAGE;

        /**
         * Creates a plain object from a S_CHAT_MESSAGE message. Also converts values to other types if specified.
         * @param message S_CHAT_MESSAGE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatPto.S_CHAT_MESSAGE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_CHAT_MESSAGE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_CHAT_MESSAGE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace FriendPto. */
export namespace FriendPto {

    /** Properties of a C_FRIEND_INFO. */
    interface IC_FRIEND_INFO {

        /** C_FRIEND_INFO cmd */
        cmd?: (number|null);

        /** C_FRIEND_INFO scmd */
        scmd?: (number|null);
    }

    /** Represents a C_FRIEND_INFO. */
    class C_FRIEND_INFO implements IC_FRIEND_INFO {

        /**
         * Constructs a new C_FRIEND_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_FRIEND_INFO);

        /** C_FRIEND_INFO cmd. */
        public cmd: number;

        /** C_FRIEND_INFO scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_FRIEND_INFO message. Does not implicitly {@link FriendPto.C_FRIEND_INFO.verify|verify} messages.
         * @param message C_FRIEND_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_FRIEND_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_FRIEND_INFO message, length delimited. Does not implicitly {@link FriendPto.C_FRIEND_INFO.verify|verify} messages.
         * @param message C_FRIEND_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_FRIEND_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_FRIEND_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_FRIEND_INFO;

        /**
         * Decodes a C_FRIEND_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_FRIEND_INFO;

        /**
         * Verifies a C_FRIEND_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_FRIEND_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_FRIEND_INFO
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_FRIEND_INFO;

        /**
         * Creates a plain object from a C_FRIEND_INFO message. Also converts values to other types if specified.
         * @param message C_FRIEND_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_FRIEND_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_FRIEND_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_FRIEND_INFO
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_FRIEND_INFO. */
    interface IS_FRIEND_INFO {

        /** S_FRIEND_INFO cmd */
        cmd?: (number|null);

        /** S_FRIEND_INFO scmd */
        scmd?: (number|null);

        /** S_FRIEND_INFO list */
        list?: (FriendPto.IFriend[]|null);

        /** S_FRIEND_INFO reqAddList */
        reqAddList?: (FriendPto.IFriend[]|null);
    }

    /** Represents a S_FRIEND_INFO. */
    class S_FRIEND_INFO implements IS_FRIEND_INFO {

        /**
         * Constructs a new S_FRIEND_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_FRIEND_INFO);

        /** S_FRIEND_INFO cmd. */
        public cmd: number;

        /** S_FRIEND_INFO scmd. */
        public scmd: number;

        /** S_FRIEND_INFO list. */
        public list: FriendPto.IFriend[];

        /** S_FRIEND_INFO reqAddList. */
        public reqAddList: FriendPto.IFriend[];

        /**
         * Encodes the specified S_FRIEND_INFO message. Does not implicitly {@link FriendPto.S_FRIEND_INFO.verify|verify} messages.
         * @param message S_FRIEND_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_FRIEND_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_FRIEND_INFO message, length delimited. Does not implicitly {@link FriendPto.S_FRIEND_INFO.verify|verify} messages.
         * @param message S_FRIEND_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_FRIEND_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_FRIEND_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_FRIEND_INFO;

        /**
         * Decodes a S_FRIEND_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_FRIEND_INFO;

        /**
         * Verifies a S_FRIEND_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_FRIEND_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_FRIEND_INFO
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_FRIEND_INFO;

        /**
         * Creates a plain object from a S_FRIEND_INFO message. Also converts values to other types if specified.
         * @param message S_FRIEND_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_FRIEND_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_FRIEND_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_FRIEND_INFO
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_ADD_FRIEND. */
    interface IC_ADD_FRIEND {

        /** C_ADD_FRIEND cmd */
        cmd?: (number|null);

        /** C_ADD_FRIEND scmd */
        scmd?: (number|null);

        /** C_ADD_FRIEND uid */
        uid?: (number|null);
    }

    /** Represents a C_ADD_FRIEND. */
    class C_ADD_FRIEND implements IC_ADD_FRIEND {

        /**
         * Constructs a new C_ADD_FRIEND.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_ADD_FRIEND);

        /** C_ADD_FRIEND cmd. */
        public cmd: number;

        /** C_ADD_FRIEND scmd. */
        public scmd: number;

        /** C_ADD_FRIEND uid. */
        public uid: number;

        /**
         * Encodes the specified C_ADD_FRIEND message. Does not implicitly {@link FriendPto.C_ADD_FRIEND.verify|verify} messages.
         * @param message C_ADD_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_ADD_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_ADD_FRIEND message, length delimited. Does not implicitly {@link FriendPto.C_ADD_FRIEND.verify|verify} messages.
         * @param message C_ADD_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_ADD_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_ADD_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_ADD_FRIEND;

        /**
         * Decodes a C_ADD_FRIEND message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_ADD_FRIEND;

        /**
         * Verifies a C_ADD_FRIEND message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_ADD_FRIEND message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_ADD_FRIEND
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_ADD_FRIEND;

        /**
         * Creates a plain object from a C_ADD_FRIEND message. Also converts values to other types if specified.
         * @param message C_ADD_FRIEND
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_ADD_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_ADD_FRIEND to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_ADD_FRIEND
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_ADD_FRIEND_REQ. */
    interface IS_ADD_FRIEND_REQ {

        /** S_ADD_FRIEND_REQ cmd */
        cmd?: (number|null);

        /** S_ADD_FRIEND_REQ scmd */
        scmd?: (number|null);

        /** S_ADD_FRIEND_REQ code */
        code?: (number|null);
    }

    /** Represents a S_ADD_FRIEND_REQ. */
    class S_ADD_FRIEND_REQ implements IS_ADD_FRIEND_REQ {

        /**
         * Constructs a new S_ADD_FRIEND_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_ADD_FRIEND_REQ);

        /** S_ADD_FRIEND_REQ cmd. */
        public cmd: number;

        /** S_ADD_FRIEND_REQ scmd. */
        public scmd: number;

        /** S_ADD_FRIEND_REQ code. */
        public code: number;

        /**
         * Encodes the specified S_ADD_FRIEND_REQ message. Does not implicitly {@link FriendPto.S_ADD_FRIEND_REQ.verify|verify} messages.
         * @param message S_ADD_FRIEND_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_ADD_FRIEND_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ADD_FRIEND_REQ message, length delimited. Does not implicitly {@link FriendPto.S_ADD_FRIEND_REQ.verify|verify} messages.
         * @param message S_ADD_FRIEND_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_ADD_FRIEND_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ADD_FRIEND_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ADD_FRIEND_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_ADD_FRIEND_REQ;

        /**
         * Decodes a S_ADD_FRIEND_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ADD_FRIEND_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_ADD_FRIEND_REQ;

        /**
         * Verifies a S_ADD_FRIEND_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ADD_FRIEND_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ADD_FRIEND_REQ
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_ADD_FRIEND_REQ;

        /**
         * Creates a plain object from a S_ADD_FRIEND_REQ message. Also converts values to other types if specified.
         * @param message S_ADD_FRIEND_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_ADD_FRIEND_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ADD_FRIEND_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_ADD_FRIEND_REQ
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_ADD_FRIEND_REQ_RESULT. */
    interface IC_ADD_FRIEND_REQ_RESULT {

        /** C_ADD_FRIEND_REQ_RESULT cmd */
        cmd?: (number|null);

        /** C_ADD_FRIEND_REQ_RESULT scmd */
        scmd?: (number|null);

        /** C_ADD_FRIEND_REQ_RESULT isApprove */
        isApprove?: (boolean|null);

        /** C_ADD_FRIEND_REQ_RESULT uid */
        uid?: (number|null);
    }

    /** Represents a C_ADD_FRIEND_REQ_RESULT. */
    class C_ADD_FRIEND_REQ_RESULT implements IC_ADD_FRIEND_REQ_RESULT {

        /**
         * Constructs a new C_ADD_FRIEND_REQ_RESULT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_ADD_FRIEND_REQ_RESULT);

        /** C_ADD_FRIEND_REQ_RESULT cmd. */
        public cmd: number;

        /** C_ADD_FRIEND_REQ_RESULT scmd. */
        public scmd: number;

        /** C_ADD_FRIEND_REQ_RESULT isApprove. */
        public isApprove: boolean;

        /** C_ADD_FRIEND_REQ_RESULT uid. */
        public uid: number;

        /**
         * Encodes the specified C_ADD_FRIEND_REQ_RESULT message. Does not implicitly {@link FriendPto.C_ADD_FRIEND_REQ_RESULT.verify|verify} messages.
         * @param message C_ADD_FRIEND_REQ_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_ADD_FRIEND_REQ_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_ADD_FRIEND_REQ_RESULT message, length delimited. Does not implicitly {@link FriendPto.C_ADD_FRIEND_REQ_RESULT.verify|verify} messages.
         * @param message C_ADD_FRIEND_REQ_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_ADD_FRIEND_REQ_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_ADD_FRIEND_REQ_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ADD_FRIEND_REQ_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_ADD_FRIEND_REQ_RESULT;

        /**
         * Decodes a C_ADD_FRIEND_REQ_RESULT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_ADD_FRIEND_REQ_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_ADD_FRIEND_REQ_RESULT;

        /**
         * Verifies a C_ADD_FRIEND_REQ_RESULT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_ADD_FRIEND_REQ_RESULT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_ADD_FRIEND_REQ_RESULT
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_ADD_FRIEND_REQ_RESULT;

        /**
         * Creates a plain object from a C_ADD_FRIEND_REQ_RESULT message. Also converts values to other types if specified.
         * @param message C_ADD_FRIEND_REQ_RESULT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_ADD_FRIEND_REQ_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_ADD_FRIEND_REQ_RESULT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_ADD_FRIEND_REQ_RESULT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_FRIEND_CHANGE. */
    interface IS_FRIEND_CHANGE {

        /** S_FRIEND_CHANGE cmd */
        cmd?: (number|null);

        /** S_FRIEND_CHANGE scmd */
        scmd?: (number|null);

        /** S_FRIEND_CHANGE uid */
        uid?: (number|null);

        /** S_FRIEND_CHANGE isOnline */
        isOnline?: (boolean|null);

        /** S_FRIEND_CHANGE friend */
        friend?: (FriendPto.IFriend|null);
    }

    /** Represents a S_FRIEND_CHANGE. */
    class S_FRIEND_CHANGE implements IS_FRIEND_CHANGE {

        /**
         * Constructs a new S_FRIEND_CHANGE.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_FRIEND_CHANGE);

        /** S_FRIEND_CHANGE cmd. */
        public cmd: number;

        /** S_FRIEND_CHANGE scmd. */
        public scmd: number;

        /** S_FRIEND_CHANGE uid. */
        public uid: number;

        /** S_FRIEND_CHANGE isOnline. */
        public isOnline: boolean;

        /** S_FRIEND_CHANGE friend. */
        public friend?: (FriendPto.IFriend|null);

        /**
         * Encodes the specified S_FRIEND_CHANGE message. Does not implicitly {@link FriendPto.S_FRIEND_CHANGE.verify|verify} messages.
         * @param message S_FRIEND_CHANGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_FRIEND_CHANGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_FRIEND_CHANGE message, length delimited. Does not implicitly {@link FriendPto.S_FRIEND_CHANGE.verify|verify} messages.
         * @param message S_FRIEND_CHANGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_FRIEND_CHANGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_FRIEND_CHANGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FRIEND_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_FRIEND_CHANGE;

        /**
         * Decodes a S_FRIEND_CHANGE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_FRIEND_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_FRIEND_CHANGE;

        /**
         * Verifies a S_FRIEND_CHANGE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_FRIEND_CHANGE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_FRIEND_CHANGE
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_FRIEND_CHANGE;

        /**
         * Creates a plain object from a S_FRIEND_CHANGE message. Also converts values to other types if specified.
         * @param message S_FRIEND_CHANGE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_FRIEND_CHANGE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_FRIEND_CHANGE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_FRIEND_CHANGE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_ADD_FRIEND. */
    interface IS_ADD_FRIEND {

        /** S_ADD_FRIEND cmd */
        cmd?: (number|null);

        /** S_ADD_FRIEND scmd */
        scmd?: (number|null);

        /** S_ADD_FRIEND user */
        user?: (FriendPto.IFriend|null);
    }

    /** Represents a S_ADD_FRIEND. */
    class S_ADD_FRIEND implements IS_ADD_FRIEND {

        /**
         * Constructs a new S_ADD_FRIEND.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_ADD_FRIEND);

        /** S_ADD_FRIEND cmd. */
        public cmd: number;

        /** S_ADD_FRIEND scmd. */
        public scmd: number;

        /** S_ADD_FRIEND user. */
        public user?: (FriendPto.IFriend|null);

        /**
         * Encodes the specified S_ADD_FRIEND message. Does not implicitly {@link FriendPto.S_ADD_FRIEND.verify|verify} messages.
         * @param message S_ADD_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_ADD_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ADD_FRIEND message, length delimited. Does not implicitly {@link FriendPto.S_ADD_FRIEND.verify|verify} messages.
         * @param message S_ADD_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_ADD_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ADD_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_ADD_FRIEND;

        /**
         * Decodes a S_ADD_FRIEND message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_ADD_FRIEND;

        /**
         * Verifies a S_ADD_FRIEND message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ADD_FRIEND message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ADD_FRIEND
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_ADD_FRIEND;

        /**
         * Creates a plain object from a S_ADD_FRIEND message. Also converts values to other types if specified.
         * @param message S_ADD_FRIEND
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_ADD_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ADD_FRIEND to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_ADD_FRIEND
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Friend. */
    interface IFriend {

        /** Friend uid */
        uid?: (number|null);

        /** Friend nick */
        nick?: (string|null);

        /** Friend isOnline */
        isOnline?: (boolean|null);
    }

    /** Represents a Friend. */
    class Friend implements IFriend {

        /**
         * Constructs a new Friend.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IFriend);

        /** Friend uid. */
        public uid: number;

        /** Friend nick. */
        public nick: string;

        /** Friend isOnline. */
        public isOnline: boolean;

        /**
         * Encodes the specified Friend message. Does not implicitly {@link FriendPto.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link FriendPto.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.Friend;

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.Friend;

        /**
         * Verifies a Friend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Friend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Friend
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.Friend;

        /**
         * Creates a plain object from a Friend message. Also converts values to other types if specified.
         * @param message Friend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.Friend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Friend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Friend
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
