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

        /** S_LOGIN friendList */
        friendList?: (FriendPto.IFriend[]|null);

        /** S_LOGIN reqAddList */
        reqAddList?: (FriendPto.IFriend[]|null);
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

        /** S_LOGIN friendList. */
        public friendList: FriendPto.IFriend[];

        /** S_LOGIN reqAddList. */
        public reqAddList: FriendPto.IFriend[];

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

/** Namespace FriendPto. */
export namespace FriendPto {

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

        /** S_FRIEND_CHANGE friend */
        friend?: (FriendPto.IFriend|null);

        /** S_FRIEND_CHANGE isNewFriend */
        isNewFriend?: (boolean|null);
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

        /** S_FRIEND_CHANGE friend. */
        public friend?: (FriendPto.IFriend|null);

        /** S_FRIEND_CHANGE isNewFriend. */
        public isNewFriend: boolean;

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

/** Namespace ChatPto. */
export namespace ChatPto {

    /** MsgType enum. */
    enum MsgType {
        normal = 0,
        private = 1
    }

    /** Properties of a C_SEND_MESSAGE. */
    interface IC_SEND_MESSAGE {

        /** C_SEND_MESSAGE cmd */
        cmd?: (number|null);

        /** C_SEND_MESSAGE scmd */
        scmd?: (number|null);

        /** C_SEND_MESSAGE uid */
        uid?: (number|null);

        /** C_SEND_MESSAGE msg */
        msg?: (string|null);

        /** C_SEND_MESSAGE msgType */
        msgType?: (ChatPto.MsgType|null);
    }

    /** Represents a C_SEND_MESSAGE. */
    class C_SEND_MESSAGE implements IC_SEND_MESSAGE {

        /**
         * Constructs a new C_SEND_MESSAGE.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatPto.IC_SEND_MESSAGE);

        /** C_SEND_MESSAGE cmd. */
        public cmd: number;

        /** C_SEND_MESSAGE scmd. */
        public scmd: number;

        /** C_SEND_MESSAGE uid. */
        public uid: number;

        /** C_SEND_MESSAGE msg. */
        public msg: string;

        /** C_SEND_MESSAGE msgType. */
        public msgType: ChatPto.MsgType;

        /**
         * Encodes the specified C_SEND_MESSAGE message. Does not implicitly {@link ChatPto.C_SEND_MESSAGE.verify|verify} messages.
         * @param message C_SEND_MESSAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatPto.IC_SEND_MESSAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SEND_MESSAGE message, length delimited. Does not implicitly {@link ChatPto.C_SEND_MESSAGE.verify|verify} messages.
         * @param message C_SEND_MESSAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatPto.IC_SEND_MESSAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SEND_MESSAGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SEND_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatPto.C_SEND_MESSAGE;

        /**
         * Decodes a C_SEND_MESSAGE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SEND_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatPto.C_SEND_MESSAGE;

        /**
         * Verifies a C_SEND_MESSAGE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SEND_MESSAGE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SEND_MESSAGE
         */
        public static fromObject(object: { [k: string]: any }): ChatPto.C_SEND_MESSAGE;

        /**
         * Creates a plain object from a C_SEND_MESSAGE message. Also converts values to other types if specified.
         * @param message C_SEND_MESSAGE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatPto.C_SEND_MESSAGE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SEND_MESSAGE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_SEND_MESSAGE
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

        /** S_CHAT_MESSAGE msgType */
        msgType?: (ChatPto.MsgType|null);
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

        /** S_CHAT_MESSAGE msgType. */
        public msgType: ChatPto.MsgType;

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

/** Namespace CardsPto. */
export namespace CardsPto {

    /** PowerType enum. */
    enum PowerType {
        Common = 0,
        ShengTang = 1,
        WangLing = 2,
        YouMu = 3,
        ZiRan = 4,
        BiLei = 5,
        XueYuan = 6
    }

    /** QualityType enum. */
    enum QualityType {
        Normal = 0,
        Rare = 1,
        Precious = 2,
        Premium = 3
    }

    /** CardType enum. */
    enum CardType {
        Hero = 0,
        Unit = 1,
        Magic = 2,
        Building = 3,
        Event = 4
    }

    /** AtkType enum. */
    enum AtkType {
        CloseRange = 0,
        LongRange = 1
    }

    /** Properties of a Card. */
    interface ICard {

        /** Card id */
        id?: (number|null);

        /** Card count */
        count?: (number|null);
    }

    /** Represents a Card. */
    class Card implements ICard {

        /**
         * Constructs a new Card.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.ICard);

        /** Card id. */
        public id: number;

        /** Card count. */
        public count: number;

        /**
         * Encodes the specified Card message. Does not implicitly {@link CardsPto.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link CardsPto.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.Card;

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.Card;

        /**
         * Verifies a Card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Card
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.Card;

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @param message Card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Card
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CardGroup. */
    interface ICardGroup {

        /** CardGroup groupId */
        groupId?: (number|null);

        /** CardGroup cards */
        cards?: (CardsPto.ICard[]|null);

        /** CardGroup groupName */
        groupName?: (string|null);

        /** CardGroup powerId */
        powerId?: (CardsPto.PowerType|null);

        /** CardGroup accessToUse */
        accessToUse?: (boolean|null);
    }

    /** Represents a CardGroup. */
    class CardGroup implements ICardGroup {

        /**
         * Constructs a new CardGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.ICardGroup);

        /** CardGroup groupId. */
        public groupId: number;

        /** CardGroup cards. */
        public cards: CardsPto.ICard[];

        /** CardGroup groupName. */
        public groupName: string;

        /** CardGroup powerId. */
        public powerId: CardsPto.PowerType;

        /** CardGroup accessToUse. */
        public accessToUse: boolean;

        /**
         * Encodes the specified CardGroup message. Does not implicitly {@link CardsPto.CardGroup.verify|verify} messages.
         * @param message CardGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.ICardGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CardGroup message, length delimited. Does not implicitly {@link CardsPto.CardGroup.verify|verify} messages.
         * @param message CardGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.ICardGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.CardGroup;

        /**
         * Decodes a CardGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.CardGroup;

        /**
         * Verifies a CardGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardGroup
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.CardGroup;

        /**
         * Creates a plain object from a CardGroup message. Also converts values to other types if specified.
         * @param message CardGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.CardGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CardGroup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_REQ_CARDS_INFO. */
    interface IC_REQ_CARDS_INFO {

        /** C_REQ_CARDS_INFO cmd */
        cmd?: (number|null);

        /** C_REQ_CARDS_INFO scmd */
        scmd?: (number|null);
    }

    /** Represents a C_REQ_CARDS_INFO. */
    class C_REQ_CARDS_INFO implements IC_REQ_CARDS_INFO {

        /**
         * Constructs a new C_REQ_CARDS_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IC_REQ_CARDS_INFO);

        /** C_REQ_CARDS_INFO cmd. */
        public cmd: number;

        /** C_REQ_CARDS_INFO scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_REQ_CARDS_INFO message. Does not implicitly {@link CardsPto.C_REQ_CARDS_INFO.verify|verify} messages.
         * @param message C_REQ_CARDS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IC_REQ_CARDS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_REQ_CARDS_INFO message, length delimited. Does not implicitly {@link CardsPto.C_REQ_CARDS_INFO.verify|verify} messages.
         * @param message C_REQ_CARDS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IC_REQ_CARDS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_REQ_CARDS_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REQ_CARDS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.C_REQ_CARDS_INFO;

        /**
         * Decodes a C_REQ_CARDS_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_REQ_CARDS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.C_REQ_CARDS_INFO;

        /**
         * Verifies a C_REQ_CARDS_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_REQ_CARDS_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_REQ_CARDS_INFO
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.C_REQ_CARDS_INFO;

        /**
         * Creates a plain object from a C_REQ_CARDS_INFO message. Also converts values to other types if specified.
         * @param message C_REQ_CARDS_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.C_REQ_CARDS_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_REQ_CARDS_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_REQ_CARDS_INFO
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_CARDS_INFO. */
    interface IS_CARDS_INFO {

        /** S_CARDS_INFO cmd */
        cmd?: (number|null);

        /** S_CARDS_INFO scmd */
        scmd?: (number|null);

        /** S_CARDS_INFO cardInfos */
        cardInfos?: (CardsPto.ICard[]|null);

        /** S_CARDS_INFO cardGroups */
        cardGroups?: (CardsPto.ICardGroup[]|null);
    }

    /** Represents a S_CARDS_INFO. */
    class S_CARDS_INFO implements IS_CARDS_INFO {

        /**
         * Constructs a new S_CARDS_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IS_CARDS_INFO);

        /** S_CARDS_INFO cmd. */
        public cmd: number;

        /** S_CARDS_INFO scmd. */
        public scmd: number;

        /** S_CARDS_INFO cardInfos. */
        public cardInfos: CardsPto.ICard[];

        /** S_CARDS_INFO cardGroups. */
        public cardGroups: CardsPto.ICardGroup[];

        /**
         * Encodes the specified S_CARDS_INFO message. Does not implicitly {@link CardsPto.S_CARDS_INFO.verify|verify} messages.
         * @param message S_CARDS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IS_CARDS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_CARDS_INFO message, length delimited. Does not implicitly {@link CardsPto.S_CARDS_INFO.verify|verify} messages.
         * @param message S_CARDS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IS_CARDS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CARDS_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CARDS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.S_CARDS_INFO;

        /**
         * Decodes a S_CARDS_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CARDS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.S_CARDS_INFO;

        /**
         * Verifies a S_CARDS_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_CARDS_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_CARDS_INFO
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.S_CARDS_INFO;

        /**
         * Creates a plain object from a S_CARDS_INFO message. Also converts values to other types if specified.
         * @param message S_CARDS_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.S_CARDS_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_CARDS_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_CARDS_INFO
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_MAKE_CARD. */
    interface IC_MAKE_CARD {

        /** C_MAKE_CARD cmd */
        cmd?: (number|null);

        /** C_MAKE_CARD scmd */
        scmd?: (number|null);

        /** C_MAKE_CARD cardId */
        cardId?: (number|null);
    }

    /** Represents a C_MAKE_CARD. */
    class C_MAKE_CARD implements IC_MAKE_CARD {

        /**
         * Constructs a new C_MAKE_CARD.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IC_MAKE_CARD);

        /** C_MAKE_CARD cmd. */
        public cmd: number;

        /** C_MAKE_CARD scmd. */
        public scmd: number;

        /** C_MAKE_CARD cardId. */
        public cardId: number;

        /**
         * Encodes the specified C_MAKE_CARD message. Does not implicitly {@link CardsPto.C_MAKE_CARD.verify|verify} messages.
         * @param message C_MAKE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IC_MAKE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_MAKE_CARD message, length delimited. Does not implicitly {@link CardsPto.C_MAKE_CARD.verify|verify} messages.
         * @param message C_MAKE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IC_MAKE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_MAKE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_MAKE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.C_MAKE_CARD;

        /**
         * Decodes a C_MAKE_CARD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_MAKE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.C_MAKE_CARD;

        /**
         * Verifies a C_MAKE_CARD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_MAKE_CARD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_MAKE_CARD
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.C_MAKE_CARD;

        /**
         * Creates a plain object from a C_MAKE_CARD message. Also converts values to other types if specified.
         * @param message C_MAKE_CARD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.C_MAKE_CARD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_MAKE_CARD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_MAKE_CARD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_MAKE_CARD. */
    interface IS_MAKE_CARD {

        /** S_MAKE_CARD cmd */
        cmd?: (number|null);

        /** S_MAKE_CARD scmd */
        scmd?: (number|null);

        /** S_MAKE_CARD cardId */
        cardId?: (number|null);

        /** S_MAKE_CARD code */
        code?: (number|null);
    }

    /** Represents a S_MAKE_CARD. */
    class S_MAKE_CARD implements IS_MAKE_CARD {

        /**
         * Constructs a new S_MAKE_CARD.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IS_MAKE_CARD);

        /** S_MAKE_CARD cmd. */
        public cmd: number;

        /** S_MAKE_CARD scmd. */
        public scmd: number;

        /** S_MAKE_CARD cardId. */
        public cardId: number;

        /** S_MAKE_CARD code. */
        public code: number;

        /**
         * Encodes the specified S_MAKE_CARD message. Does not implicitly {@link CardsPto.S_MAKE_CARD.verify|verify} messages.
         * @param message S_MAKE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IS_MAKE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_MAKE_CARD message, length delimited. Does not implicitly {@link CardsPto.S_MAKE_CARD.verify|verify} messages.
         * @param message S_MAKE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IS_MAKE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MAKE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MAKE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.S_MAKE_CARD;

        /**
         * Decodes a S_MAKE_CARD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_MAKE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.S_MAKE_CARD;

        /**
         * Verifies a S_MAKE_CARD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_MAKE_CARD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_MAKE_CARD
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.S_MAKE_CARD;

        /**
         * Creates a plain object from a S_MAKE_CARD message. Also converts values to other types if specified.
         * @param message S_MAKE_CARD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.S_MAKE_CARD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_MAKE_CARD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_MAKE_CARD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_DISASSEMBLE_CARD. */
    interface IC_DISASSEMBLE_CARD {

        /** C_DISASSEMBLE_CARD cmd */
        cmd?: (number|null);

        /** C_DISASSEMBLE_CARD scmd */
        scmd?: (number|null);

        /** C_DISASSEMBLE_CARD cardId */
        cardId?: (number|null);
    }

    /** Represents a C_DISASSEMBLE_CARD. */
    class C_DISASSEMBLE_CARD implements IC_DISASSEMBLE_CARD {

        /**
         * Constructs a new C_DISASSEMBLE_CARD.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IC_DISASSEMBLE_CARD);

        /** C_DISASSEMBLE_CARD cmd. */
        public cmd: number;

        /** C_DISASSEMBLE_CARD scmd. */
        public scmd: number;

        /** C_DISASSEMBLE_CARD cardId. */
        public cardId: number;

        /**
         * Encodes the specified C_DISASSEMBLE_CARD message. Does not implicitly {@link CardsPto.C_DISASSEMBLE_CARD.verify|verify} messages.
         * @param message C_DISASSEMBLE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IC_DISASSEMBLE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_DISASSEMBLE_CARD message, length delimited. Does not implicitly {@link CardsPto.C_DISASSEMBLE_CARD.verify|verify} messages.
         * @param message C_DISASSEMBLE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IC_DISASSEMBLE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_DISASSEMBLE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DISASSEMBLE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.C_DISASSEMBLE_CARD;

        /**
         * Decodes a C_DISASSEMBLE_CARD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_DISASSEMBLE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.C_DISASSEMBLE_CARD;

        /**
         * Verifies a C_DISASSEMBLE_CARD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_DISASSEMBLE_CARD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_DISASSEMBLE_CARD
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.C_DISASSEMBLE_CARD;

        /**
         * Creates a plain object from a C_DISASSEMBLE_CARD message. Also converts values to other types if specified.
         * @param message C_DISASSEMBLE_CARD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.C_DISASSEMBLE_CARD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_DISASSEMBLE_CARD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_DISASSEMBLE_CARD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_DISASSEMBLE_CARD. */
    interface IS_DISASSEMBLE_CARD {

        /** S_DISASSEMBLE_CARD cmd */
        cmd?: (number|null);

        /** S_DISASSEMBLE_CARD scmd */
        scmd?: (number|null);

        /** S_DISASSEMBLE_CARD cardId */
        cardId?: (number|null);

        /** S_DISASSEMBLE_CARD code */
        code?: (number|null);
    }

    /** Represents a S_DISASSEMBLE_CARD. */
    class S_DISASSEMBLE_CARD implements IS_DISASSEMBLE_CARD {

        /**
         * Constructs a new S_DISASSEMBLE_CARD.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IS_DISASSEMBLE_CARD);

        /** S_DISASSEMBLE_CARD cmd. */
        public cmd: number;

        /** S_DISASSEMBLE_CARD scmd. */
        public scmd: number;

        /** S_DISASSEMBLE_CARD cardId. */
        public cardId: number;

        /** S_DISASSEMBLE_CARD code. */
        public code: number;

        /**
         * Encodes the specified S_DISASSEMBLE_CARD message. Does not implicitly {@link CardsPto.S_DISASSEMBLE_CARD.verify|verify} messages.
         * @param message S_DISASSEMBLE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IS_DISASSEMBLE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_DISASSEMBLE_CARD message, length delimited. Does not implicitly {@link CardsPto.S_DISASSEMBLE_CARD.verify|verify} messages.
         * @param message S_DISASSEMBLE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IS_DISASSEMBLE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DISASSEMBLE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DISASSEMBLE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.S_DISASSEMBLE_CARD;

        /**
         * Decodes a S_DISASSEMBLE_CARD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_DISASSEMBLE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.S_DISASSEMBLE_CARD;

        /**
         * Verifies a S_DISASSEMBLE_CARD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_DISASSEMBLE_CARD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_DISASSEMBLE_CARD
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.S_DISASSEMBLE_CARD;

        /**
         * Creates a plain object from a S_DISASSEMBLE_CARD message. Also converts values to other types if specified.
         * @param message S_DISASSEMBLE_CARD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.S_DISASSEMBLE_CARD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_DISASSEMBLE_CARD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_DISASSEMBLE_CARD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_SAVE_CARDS. */
    interface IC_SAVE_CARDS {

        /** C_SAVE_CARDS cmd */
        cmd?: (number|null);

        /** C_SAVE_CARDS scmd */
        scmd?: (number|null);

        /** C_SAVE_CARDS cardGroup */
        cardGroup?: (CardsPto.ICardGroup|null);
    }

    /** Represents a C_SAVE_CARDS. */
    class C_SAVE_CARDS implements IC_SAVE_CARDS {

        /**
         * Constructs a new C_SAVE_CARDS.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IC_SAVE_CARDS);

        /** C_SAVE_CARDS cmd. */
        public cmd: number;

        /** C_SAVE_CARDS scmd. */
        public scmd: number;

        /** C_SAVE_CARDS cardGroup. */
        public cardGroup?: (CardsPto.ICardGroup|null);

        /**
         * Encodes the specified C_SAVE_CARDS message. Does not implicitly {@link CardsPto.C_SAVE_CARDS.verify|verify} messages.
         * @param message C_SAVE_CARDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IC_SAVE_CARDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SAVE_CARDS message, length delimited. Does not implicitly {@link CardsPto.C_SAVE_CARDS.verify|verify} messages.
         * @param message C_SAVE_CARDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IC_SAVE_CARDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SAVE_CARDS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SAVE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.C_SAVE_CARDS;

        /**
         * Decodes a C_SAVE_CARDS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SAVE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.C_SAVE_CARDS;

        /**
         * Verifies a C_SAVE_CARDS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SAVE_CARDS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SAVE_CARDS
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.C_SAVE_CARDS;

        /**
         * Creates a plain object from a C_SAVE_CARDS message. Also converts values to other types if specified.
         * @param message C_SAVE_CARDS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.C_SAVE_CARDS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SAVE_CARDS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_SAVE_CARDS
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_SAVE_CARDS. */
    interface IS_SAVE_CARDS {

        /** S_SAVE_CARDS cmd */
        cmd?: (number|null);

        /** S_SAVE_CARDS scmd */
        scmd?: (number|null);

        /** S_SAVE_CARDS cardGroup */
        cardGroup?: (CardsPto.ICardGroup|null);
    }

    /** Represents a S_SAVE_CARDS. */
    class S_SAVE_CARDS implements IS_SAVE_CARDS {

        /**
         * Constructs a new S_SAVE_CARDS.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IS_SAVE_CARDS);

        /** S_SAVE_CARDS cmd. */
        public cmd: number;

        /** S_SAVE_CARDS scmd. */
        public scmd: number;

        /** S_SAVE_CARDS cardGroup. */
        public cardGroup?: (CardsPto.ICardGroup|null);

        /**
         * Encodes the specified S_SAVE_CARDS message. Does not implicitly {@link CardsPto.S_SAVE_CARDS.verify|verify} messages.
         * @param message S_SAVE_CARDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IS_SAVE_CARDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_SAVE_CARDS message, length delimited. Does not implicitly {@link CardsPto.S_SAVE_CARDS.verify|verify} messages.
         * @param message S_SAVE_CARDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IS_SAVE_CARDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_SAVE_CARDS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SAVE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.S_SAVE_CARDS;

        /**
         * Decodes a S_SAVE_CARDS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_SAVE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.S_SAVE_CARDS;

        /**
         * Verifies a S_SAVE_CARDS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_SAVE_CARDS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_SAVE_CARDS
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.S_SAVE_CARDS;

        /**
         * Creates a plain object from a S_SAVE_CARDS message. Also converts values to other types if specified.
         * @param message S_SAVE_CARDS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.S_SAVE_CARDS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_SAVE_CARDS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_SAVE_CARDS
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_DELETE_CARD_GROUP. */
    interface IC_DELETE_CARD_GROUP {

        /** C_DELETE_CARD_GROUP cmd */
        cmd?: (number|null);

        /** C_DELETE_CARD_GROUP scmd */
        scmd?: (number|null);

        /** C_DELETE_CARD_GROUP groupId */
        groupId?: (number|null);
    }

    /** Represents a C_DELETE_CARD_GROUP. */
    class C_DELETE_CARD_GROUP implements IC_DELETE_CARD_GROUP {

        /**
         * Constructs a new C_DELETE_CARD_GROUP.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IC_DELETE_CARD_GROUP);

        /** C_DELETE_CARD_GROUP cmd. */
        public cmd: number;

        /** C_DELETE_CARD_GROUP scmd. */
        public scmd: number;

        /** C_DELETE_CARD_GROUP groupId. */
        public groupId: number;

        /**
         * Encodes the specified C_DELETE_CARD_GROUP message. Does not implicitly {@link CardsPto.C_DELETE_CARD_GROUP.verify|verify} messages.
         * @param message C_DELETE_CARD_GROUP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IC_DELETE_CARD_GROUP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_DELETE_CARD_GROUP message, length delimited. Does not implicitly {@link CardsPto.C_DELETE_CARD_GROUP.verify|verify} messages.
         * @param message C_DELETE_CARD_GROUP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IC_DELETE_CARD_GROUP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_DELETE_CARD_GROUP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DELETE_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.C_DELETE_CARD_GROUP;

        /**
         * Decodes a C_DELETE_CARD_GROUP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_DELETE_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.C_DELETE_CARD_GROUP;

        /**
         * Verifies a C_DELETE_CARD_GROUP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_DELETE_CARD_GROUP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_DELETE_CARD_GROUP
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.C_DELETE_CARD_GROUP;

        /**
         * Creates a plain object from a C_DELETE_CARD_GROUP message. Also converts values to other types if specified.
         * @param message C_DELETE_CARD_GROUP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.C_DELETE_CARD_GROUP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_DELETE_CARD_GROUP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_DELETE_CARD_GROUP
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_DELETE_CARD_GROUP. */
    interface IS_DELETE_CARD_GROUP {

        /** S_DELETE_CARD_GROUP cmd */
        cmd?: (number|null);

        /** S_DELETE_CARD_GROUP scmd */
        scmd?: (number|null);

        /** S_DELETE_CARD_GROUP groupId */
        groupId?: (number|null);
    }

    /** Represents a S_DELETE_CARD_GROUP. */
    class S_DELETE_CARD_GROUP implements IS_DELETE_CARD_GROUP {

        /**
         * Constructs a new S_DELETE_CARD_GROUP.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IS_DELETE_CARD_GROUP);

        /** S_DELETE_CARD_GROUP cmd. */
        public cmd: number;

        /** S_DELETE_CARD_GROUP scmd. */
        public scmd: number;

        /** S_DELETE_CARD_GROUP groupId. */
        public groupId: number;

        /**
         * Encodes the specified S_DELETE_CARD_GROUP message. Does not implicitly {@link CardsPto.S_DELETE_CARD_GROUP.verify|verify} messages.
         * @param message S_DELETE_CARD_GROUP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IS_DELETE_CARD_GROUP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_DELETE_CARD_GROUP message, length delimited. Does not implicitly {@link CardsPto.S_DELETE_CARD_GROUP.verify|verify} messages.
         * @param message S_DELETE_CARD_GROUP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IS_DELETE_CARD_GROUP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DELETE_CARD_GROUP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DELETE_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.S_DELETE_CARD_GROUP;

        /**
         * Decodes a S_DELETE_CARD_GROUP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_DELETE_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.S_DELETE_CARD_GROUP;

        /**
         * Verifies a S_DELETE_CARD_GROUP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_DELETE_CARD_GROUP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_DELETE_CARD_GROUP
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.S_DELETE_CARD_GROUP;

        /**
         * Creates a plain object from a S_DELETE_CARD_GROUP message. Also converts values to other types if specified.
         * @param message S_DELETE_CARD_GROUP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.S_DELETE_CARD_GROUP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_DELETE_CARD_GROUP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_DELETE_CARD_GROUP
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace GamePto. */
export namespace GamePto {

    /** EventType enum. */
    enum EventType {
        DrawCard = 0,
        FATIGUE = 1
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo nick */
        nick?: (string|null);

        /** UserInfo power */
        power?: (number|null);

        /** UserInfo uid */
        uid?: (number|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IUserInfo);

        /** UserInfo nick. */
        public nick: string;

        /** UserInfo power. */
        public power: number;

        /** UserInfo uid. */
        public uid: number;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link GamePto.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link GamePto.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): GamePto.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Card. */
    interface ICard {

        /** Card cardId */
        cardId?: (number|null);

        /** Card attack */
        attack?: (number|null);

        /** Card health */
        health?: (number|null);

        /** Card fee */
        fee?: (number|null);

        /** Card allowAtk */
        allowAtk?: (boolean|null);

        /** Card uid */
        uid?: (number|null);
    }

    /** Represents a Card. */
    class Card implements ICard {

        /**
         * Constructs a new Card.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.ICard);

        /** Card cardId. */
        public cardId: number;

        /** Card attack. */
        public attack: number;

        /** Card health. */
        public health: number;

        /** Card fee. */
        public fee: number;

        /** Card allowAtk. */
        public allowAtk: boolean;

        /** Card uid. */
        public uid: number;

        /**
         * Encodes the specified Card message. Does not implicitly {@link GamePto.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link GamePto.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.Card;

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.Card;

        /**
         * Verifies a Card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Card
         */
        public static fromObject(object: { [k: string]: any }): GamePto.Card;

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @param message Card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Card
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MapData. */
    interface IMapData {

        /** MapData eventCard */
        eventCard?: (GamePto.ICard[]|null);

        /** MapData unitCard */
        unitCard?: (GamePto.ICard[]|null);
    }

    /** Represents a MapData. */
    class MapData implements IMapData {

        /**
         * Constructs a new MapData.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IMapData);

        /** MapData eventCard. */
        public eventCard: GamePto.ICard[];

        /** MapData unitCard. */
        public unitCard: GamePto.ICard[];

        /**
         * Encodes the specified MapData message. Does not implicitly {@link GamePto.MapData.verify|verify} messages.
         * @param message MapData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IMapData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MapData message, length delimited. Does not implicitly {@link GamePto.MapData.verify|verify} messages.
         * @param message MapData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IMapData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MapData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.MapData;

        /**
         * Decodes a MapData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MapData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.MapData;

        /**
         * Verifies a MapData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MapData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MapData
         */
        public static fromObject(object: { [k: string]: any }): GamePto.MapData;

        /**
         * Creates a plain object from a MapData message. Also converts values to other types if specified.
         * @param message MapData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.MapData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MapData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MapData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_PREPARE_TO_START. */
    interface IC_PREPARE_TO_START {

        /** C_PREPARE_TO_START cmd */
        cmd?: (number|null);

        /** C_PREPARE_TO_START scmd */
        scmd?: (number|null);

        /** C_PREPARE_TO_START replaceCardIndexes */
        replaceCardIndexes?: (number[]|null);
    }

    /** Represents a C_PREPARE_TO_START. */
    class C_PREPARE_TO_START implements IC_PREPARE_TO_START {

        /**
         * Constructs a new C_PREPARE_TO_START.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IC_PREPARE_TO_START);

        /** C_PREPARE_TO_START cmd. */
        public cmd: number;

        /** C_PREPARE_TO_START scmd. */
        public scmd: number;

        /** C_PREPARE_TO_START replaceCardIndexes. */
        public replaceCardIndexes: number[];

        /**
         * Encodes the specified C_PREPARE_TO_START message. Does not implicitly {@link GamePto.C_PREPARE_TO_START.verify|verify} messages.
         * @param message C_PREPARE_TO_START message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IC_PREPARE_TO_START, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_PREPARE_TO_START message, length delimited. Does not implicitly {@link GamePto.C_PREPARE_TO_START.verify|verify} messages.
         * @param message C_PREPARE_TO_START message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IC_PREPARE_TO_START, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_PREPARE_TO_START message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_PREPARE_TO_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.C_PREPARE_TO_START;

        /**
         * Decodes a C_PREPARE_TO_START message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_PREPARE_TO_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.C_PREPARE_TO_START;

        /**
         * Verifies a C_PREPARE_TO_START message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_PREPARE_TO_START message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_PREPARE_TO_START
         */
        public static fromObject(object: { [k: string]: any }): GamePto.C_PREPARE_TO_START;

        /**
         * Creates a plain object from a C_PREPARE_TO_START message. Also converts values to other types if specified.
         * @param message C_PREPARE_TO_START
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.C_PREPARE_TO_START, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_PREPARE_TO_START to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_PREPARE_TO_START
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_SERVER_ERROR. */
    interface IS_SERVER_ERROR {

        /** S_SERVER_ERROR cmd */
        cmd?: (number|null);

        /** S_SERVER_ERROR scmd */
        scmd?: (number|null);

        /** S_SERVER_ERROR message */
        message?: (string|null);
    }

    /** Represents a S_SERVER_ERROR. */
    class S_SERVER_ERROR implements IS_SERVER_ERROR {

        /**
         * Constructs a new S_SERVER_ERROR.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_SERVER_ERROR);

        /** S_SERVER_ERROR cmd. */
        public cmd: number;

        /** S_SERVER_ERROR scmd. */
        public scmd: number;

        /** S_SERVER_ERROR message. */
        public message: string;

        /**
         * Encodes the specified S_SERVER_ERROR message. Does not implicitly {@link GamePto.S_SERVER_ERROR.verify|verify} messages.
         * @param message S_SERVER_ERROR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_SERVER_ERROR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_SERVER_ERROR message, length delimited. Does not implicitly {@link GamePto.S_SERVER_ERROR.verify|verify} messages.
         * @param message S_SERVER_ERROR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_SERVER_ERROR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_SERVER_ERROR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SERVER_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_SERVER_ERROR;

        /**
         * Decodes a S_SERVER_ERROR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_SERVER_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_SERVER_ERROR;

        /**
         * Verifies a S_SERVER_ERROR message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_SERVER_ERROR message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_SERVER_ERROR
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_SERVER_ERROR;

        /**
         * Creates a plain object from a S_SERVER_ERROR message. Also converts values to other types if specified.
         * @param message S_SERVER_ERROR
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_SERVER_ERROR, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_SERVER_ERROR to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_SERVER_ERROR
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_INIT_GAME. */
    interface IS_INIT_GAME {

        /** S_INIT_GAME cmd */
        cmd?: (number|null);

        /** S_INIT_GAME scmd */
        scmd?: (number|null);

        /** S_INIT_GAME users */
        users?: (GamePto.IUserInfo[]|null);
    }

    /** Represents a S_INIT_GAME. */
    class S_INIT_GAME implements IS_INIT_GAME {

        /**
         * Constructs a new S_INIT_GAME.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_INIT_GAME);

        /** S_INIT_GAME cmd. */
        public cmd: number;

        /** S_INIT_GAME scmd. */
        public scmd: number;

        /** S_INIT_GAME users. */
        public users: GamePto.IUserInfo[];

        /**
         * Encodes the specified S_INIT_GAME message. Does not implicitly {@link GamePto.S_INIT_GAME.verify|verify} messages.
         * @param message S_INIT_GAME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_INIT_GAME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_INIT_GAME message, length delimited. Does not implicitly {@link GamePto.S_INIT_GAME.verify|verify} messages.
         * @param message S_INIT_GAME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_INIT_GAME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_INIT_GAME message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_INIT_GAME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_INIT_GAME;

        /**
         * Decodes a S_INIT_GAME message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_INIT_GAME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_INIT_GAME;

        /**
         * Verifies a S_INIT_GAME message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_INIT_GAME message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_INIT_GAME
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_INIT_GAME;

        /**
         * Creates a plain object from a S_INIT_GAME message. Also converts values to other types if specified.
         * @param message S_INIT_GAME
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_INIT_GAME, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_INIT_GAME to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_INIT_GAME
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_GAME_START. */
    interface IS_GAME_START {

        /** S_GAME_START cmd */
        cmd?: (number|null);

        /** S_GAME_START scmd */
        scmd?: (number|null);

        /** S_GAME_START firstUid */
        firstUid?: (number|null);

        /** S_GAME_START cards */
        cards?: (GamePto.ICard[]|null);

        /** S_GAME_START mapData */
        mapData?: (GamePto.IMapData|null);

        /** S_GAME_START replaceEndTime */
        replaceEndTime?: (number|null);
    }

    /** Represents a S_GAME_START. */
    class S_GAME_START implements IS_GAME_START {

        /**
         * Constructs a new S_GAME_START.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_GAME_START);

        /** S_GAME_START cmd. */
        public cmd: number;

        /** S_GAME_START scmd. */
        public scmd: number;

        /** S_GAME_START firstUid. */
        public firstUid: number;

        /** S_GAME_START cards. */
        public cards: GamePto.ICard[];

        /** S_GAME_START mapData. */
        public mapData?: (GamePto.IMapData|null);

        /** S_GAME_START replaceEndTime. */
        public replaceEndTime: number;

        /**
         * Encodes the specified S_GAME_START message. Does not implicitly {@link GamePto.S_GAME_START.verify|verify} messages.
         * @param message S_GAME_START message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_GAME_START, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GAME_START message, length delimited. Does not implicitly {@link GamePto.S_GAME_START.verify|verify} messages.
         * @param message S_GAME_START message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_GAME_START, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GAME_START message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GAME_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_GAME_START;

        /**
         * Decodes a S_GAME_START message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GAME_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_GAME_START;

        /**
         * Verifies a S_GAME_START message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GAME_START message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GAME_START
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_GAME_START;

        /**
         * Creates a plain object from a S_GAME_START message. Also converts values to other types if specified.
         * @param message S_GAME_START
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_GAME_START, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GAME_START to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_GAME_START
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_REPLACE_CARDS. */
    interface IS_REPLACE_CARDS {

        /** S_REPLACE_CARDS cmd */
        cmd?: (number|null);

        /** S_REPLACE_CARDS scmd */
        scmd?: (number|null);

        /** S_REPLACE_CARDS cards */
        cards?: (GamePto.ICard[]|null);

        /** S_REPLACE_CARDS replaceCardIndexes */
        replaceCardIndexes?: (number[]|null);
    }

    /** Represents a S_REPLACE_CARDS. */
    class S_REPLACE_CARDS implements IS_REPLACE_CARDS {

        /**
         * Constructs a new S_REPLACE_CARDS.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_REPLACE_CARDS);

        /** S_REPLACE_CARDS cmd. */
        public cmd: number;

        /** S_REPLACE_CARDS scmd. */
        public scmd: number;

        /** S_REPLACE_CARDS cards. */
        public cards: GamePto.ICard[];

        /** S_REPLACE_CARDS replaceCardIndexes. */
        public replaceCardIndexes: number[];

        /**
         * Encodes the specified S_REPLACE_CARDS message. Does not implicitly {@link GamePto.S_REPLACE_CARDS.verify|verify} messages.
         * @param message S_REPLACE_CARDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_REPLACE_CARDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_REPLACE_CARDS message, length delimited. Does not implicitly {@link GamePto.S_REPLACE_CARDS.verify|verify} messages.
         * @param message S_REPLACE_CARDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_REPLACE_CARDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_REPLACE_CARDS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_REPLACE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_REPLACE_CARDS;

        /**
         * Decodes a S_REPLACE_CARDS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_REPLACE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_REPLACE_CARDS;

        /**
         * Verifies a S_REPLACE_CARDS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_REPLACE_CARDS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_REPLACE_CARDS
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_REPLACE_CARDS;

        /**
         * Creates a plain object from a S_REPLACE_CARDS message. Also converts values to other types if specified.
         * @param message S_REPLACE_CARDS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_REPLACE_CARDS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_REPLACE_CARDS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_REPLACE_CARDS
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_ROUND_START_EVENT. */
    interface IS_ROUND_START_EVENT {

        /** S_ROUND_START_EVENT cmd */
        cmd?: (number|null);

        /** S_ROUND_START_EVENT scmd */
        scmd?: (number|null);

        /** S_ROUND_START_EVENT uid */
        uid?: (number|null);

        /** S_ROUND_START_EVENT fee */
        fee?: (number|null);

        /** S_ROUND_START_EVENT maxFee */
        maxFee?: (number|null);
    }

    /** Represents a S_ROUND_START_EVENT. */
    class S_ROUND_START_EVENT implements IS_ROUND_START_EVENT {

        /**
         * Constructs a new S_ROUND_START_EVENT.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_ROUND_START_EVENT);

        /** S_ROUND_START_EVENT cmd. */
        public cmd: number;

        /** S_ROUND_START_EVENT scmd. */
        public scmd: number;

        /** S_ROUND_START_EVENT uid. */
        public uid: number;

        /** S_ROUND_START_EVENT fee. */
        public fee: number;

        /** S_ROUND_START_EVENT maxFee. */
        public maxFee: number;

        /**
         * Encodes the specified S_ROUND_START_EVENT message. Does not implicitly {@link GamePto.S_ROUND_START_EVENT.verify|verify} messages.
         * @param message S_ROUND_START_EVENT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_ROUND_START_EVENT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ROUND_START_EVENT message, length delimited. Does not implicitly {@link GamePto.S_ROUND_START_EVENT.verify|verify} messages.
         * @param message S_ROUND_START_EVENT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_ROUND_START_EVENT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ROUND_START_EVENT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROUND_START_EVENT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_ROUND_START_EVENT;

        /**
         * Decodes a S_ROUND_START_EVENT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ROUND_START_EVENT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_ROUND_START_EVENT;

        /**
         * Verifies a S_ROUND_START_EVENT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ROUND_START_EVENT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ROUND_START_EVENT
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_ROUND_START_EVENT;

        /**
         * Creates a plain object from a S_ROUND_START_EVENT message. Also converts values to other types if specified.
         * @param message S_ROUND_START_EVENT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_ROUND_START_EVENT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ROUND_START_EVENT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_ROUND_START_EVENT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_ROUND_END_EVENT. */
    interface IS_ROUND_END_EVENT {

        /** S_ROUND_END_EVENT cmd */
        cmd?: (number|null);

        /** S_ROUND_END_EVENT scmd */
        scmd?: (number|null);

        /** S_ROUND_END_EVENT uid */
        uid?: (number|null);
    }

    /** Represents a S_ROUND_END_EVENT. */
    class S_ROUND_END_EVENT implements IS_ROUND_END_EVENT {

        /**
         * Constructs a new S_ROUND_END_EVENT.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_ROUND_END_EVENT);

        /** S_ROUND_END_EVENT cmd. */
        public cmd: number;

        /** S_ROUND_END_EVENT scmd. */
        public scmd: number;

        /** S_ROUND_END_EVENT uid. */
        public uid: number;

        /**
         * Encodes the specified S_ROUND_END_EVENT message. Does not implicitly {@link GamePto.S_ROUND_END_EVENT.verify|verify} messages.
         * @param message S_ROUND_END_EVENT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_ROUND_END_EVENT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ROUND_END_EVENT message, length delimited. Does not implicitly {@link GamePto.S_ROUND_END_EVENT.verify|verify} messages.
         * @param message S_ROUND_END_EVENT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_ROUND_END_EVENT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ROUND_END_EVENT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROUND_END_EVENT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_ROUND_END_EVENT;

        /**
         * Decodes a S_ROUND_END_EVENT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ROUND_END_EVENT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_ROUND_END_EVENT;

        /**
         * Verifies a S_ROUND_END_EVENT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ROUND_END_EVENT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ROUND_END_EVENT
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_ROUND_END_EVENT;

        /**
         * Creates a plain object from a S_ROUND_END_EVENT message. Also converts values to other types if specified.
         * @param message S_ROUND_END_EVENT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_ROUND_END_EVENT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ROUND_END_EVENT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_ROUND_END_EVENT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_DRAW_CARDS. */
    interface IS_DRAW_CARDS {

        /** S_DRAW_CARDS cmd */
        cmd?: (number|null);

        /** S_DRAW_CARDS scmd */
        scmd?: (number|null);

        /** S_DRAW_CARDS cards */
        cards?: (GamePto.ICard[]|null);

        /** S_DRAW_CARDS cardCount */
        cardCount?: (number|null);

        /** S_DRAW_CARDS damages */
        damages?: (number[]|null);

        /** S_DRAW_CARDS uid */
        uid?: (number|null);
    }

    /** Represents a S_DRAW_CARDS. */
    class S_DRAW_CARDS implements IS_DRAW_CARDS {

        /**
         * Constructs a new S_DRAW_CARDS.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_DRAW_CARDS);

        /** S_DRAW_CARDS cmd. */
        public cmd: number;

        /** S_DRAW_CARDS scmd. */
        public scmd: number;

        /** S_DRAW_CARDS cards. */
        public cards: GamePto.ICard[];

        /** S_DRAW_CARDS cardCount. */
        public cardCount: number;

        /** S_DRAW_CARDS damages. */
        public damages: number[];

        /** S_DRAW_CARDS uid. */
        public uid: number;

        /**
         * Encodes the specified S_DRAW_CARDS message. Does not implicitly {@link GamePto.S_DRAW_CARDS.verify|verify} messages.
         * @param message S_DRAW_CARDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_DRAW_CARDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_DRAW_CARDS message, length delimited. Does not implicitly {@link GamePto.S_DRAW_CARDS.verify|verify} messages.
         * @param message S_DRAW_CARDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_DRAW_CARDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DRAW_CARDS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DRAW_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_DRAW_CARDS;

        /**
         * Decodes a S_DRAW_CARDS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_DRAW_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_DRAW_CARDS;

        /**
         * Verifies a S_DRAW_CARDS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_DRAW_CARDS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_DRAW_CARDS
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_DRAW_CARDS;

        /**
         * Creates a plain object from a S_DRAW_CARDS message. Also converts values to other types if specified.
         * @param message S_DRAW_CARDS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_DRAW_CARDS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_DRAW_CARDS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_DRAW_CARDS
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace FriendlyMatchPto. */
export namespace FriendlyMatchPto {

    /** Properties of a C_REQ_MATCH. */
    interface IC_REQ_MATCH {

        /** C_REQ_MATCH cmd */
        cmd?: (number|null);

        /** C_REQ_MATCH scmd */
        scmd?: (number|null);

        /** C_REQ_MATCH targetUid */
        targetUid?: (number|null);
    }

    /** Represents a C_REQ_MATCH. */
    class C_REQ_MATCH implements IC_REQ_MATCH {

        /**
         * Constructs a new C_REQ_MATCH.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IC_REQ_MATCH);

        /** C_REQ_MATCH cmd. */
        public cmd: number;

        /** C_REQ_MATCH scmd. */
        public scmd: number;

        /** C_REQ_MATCH targetUid. */
        public targetUid: number;

        /**
         * Encodes the specified C_REQ_MATCH message. Does not implicitly {@link FriendlyMatchPto.C_REQ_MATCH.verify|verify} messages.
         * @param message C_REQ_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IC_REQ_MATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_REQ_MATCH message, length delimited. Does not implicitly {@link FriendlyMatchPto.C_REQ_MATCH.verify|verify} messages.
         * @param message C_REQ_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IC_REQ_MATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_REQ_MATCH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_REQ_MATCH;

        /**
         * Decodes a C_REQ_MATCH message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.C_REQ_MATCH;

        /**
         * Verifies a C_REQ_MATCH message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_REQ_MATCH message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_REQ_MATCH
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.C_REQ_MATCH;

        /**
         * Creates a plain object from a C_REQ_MATCH message. Also converts values to other types if specified.
         * @param message C_REQ_MATCH
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.C_REQ_MATCH, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_REQ_MATCH to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_REQ_MATCH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_REQ_MATCH. */
    interface IS_REQ_MATCH {

        /** S_REQ_MATCH cmd */
        cmd?: (number|null);

        /** S_REQ_MATCH scmd */
        scmd?: (number|null);

        /** S_REQ_MATCH code */
        code?: (number|null);

        /** S_REQ_MATCH endTime */
        endTime?: (number|null);
    }

    /** Represents a S_REQ_MATCH. */
    class S_REQ_MATCH implements IS_REQ_MATCH {

        /**
         * Constructs a new S_REQ_MATCH.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_REQ_MATCH);

        /** S_REQ_MATCH cmd. */
        public cmd: number;

        /** S_REQ_MATCH scmd. */
        public scmd: number;

        /** S_REQ_MATCH code. */
        public code: number;

        /** S_REQ_MATCH endTime. */
        public endTime: number;

        /**
         * Encodes the specified S_REQ_MATCH message. Does not implicitly {@link FriendlyMatchPto.S_REQ_MATCH.verify|verify} messages.
         * @param message S_REQ_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_REQ_MATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_REQ_MATCH message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_REQ_MATCH.verify|verify} messages.
         * @param message S_REQ_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_REQ_MATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_REQ_MATCH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_REQ_MATCH;

        /**
         * Decodes a S_REQ_MATCH message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_REQ_MATCH;

        /**
         * Verifies a S_REQ_MATCH message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_REQ_MATCH message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_REQ_MATCH
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_REQ_MATCH;

        /**
         * Creates a plain object from a S_REQ_MATCH message. Also converts values to other types if specified.
         * @param message S_REQ_MATCH
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_REQ_MATCH, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_REQ_MATCH to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_REQ_MATCH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_CANCEL_REQ_MATCH. */
    interface IC_CANCEL_REQ_MATCH {

        /** C_CANCEL_REQ_MATCH cmd */
        cmd?: (number|null);

        /** C_CANCEL_REQ_MATCH scmd */
        scmd?: (number|null);
    }

    /** Represents a C_CANCEL_REQ_MATCH. */
    class C_CANCEL_REQ_MATCH implements IC_CANCEL_REQ_MATCH {

        /**
         * Constructs a new C_CANCEL_REQ_MATCH.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IC_CANCEL_REQ_MATCH);

        /** C_CANCEL_REQ_MATCH cmd. */
        public cmd: number;

        /** C_CANCEL_REQ_MATCH scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_CANCEL_REQ_MATCH message. Does not implicitly {@link FriendlyMatchPto.C_CANCEL_REQ_MATCH.verify|verify} messages.
         * @param message C_CANCEL_REQ_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IC_CANCEL_REQ_MATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_CANCEL_REQ_MATCH message, length delimited. Does not implicitly {@link FriendlyMatchPto.C_CANCEL_REQ_MATCH.verify|verify} messages.
         * @param message C_CANCEL_REQ_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IC_CANCEL_REQ_MATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_CANCEL_REQ_MATCH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CANCEL_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_CANCEL_REQ_MATCH;

        /**
         * Decodes a C_CANCEL_REQ_MATCH message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_CANCEL_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.C_CANCEL_REQ_MATCH;

        /**
         * Verifies a C_CANCEL_REQ_MATCH message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_CANCEL_REQ_MATCH message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_CANCEL_REQ_MATCH
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.C_CANCEL_REQ_MATCH;

        /**
         * Creates a plain object from a C_CANCEL_REQ_MATCH message. Also converts values to other types if specified.
         * @param message C_CANCEL_REQ_MATCH
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.C_CANCEL_REQ_MATCH, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_CANCEL_REQ_MATCH to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_CANCEL_REQ_MATCH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_REQ_MATCH_RESULT. */
    interface IS_REQ_MATCH_RESULT {

        /** S_REQ_MATCH_RESULT cmd */
        cmd?: (number|null);

        /** S_REQ_MATCH_RESULT scmd */
        scmd?: (number|null);

        /** S_REQ_MATCH_RESULT result */
        result?: (boolean|null);

        /** S_REQ_MATCH_RESULT targetUid */
        targetUid?: (number|null);
    }

    /** Represents a S_REQ_MATCH_RESULT. */
    class S_REQ_MATCH_RESULT implements IS_REQ_MATCH_RESULT {

        /**
         * Constructs a new S_REQ_MATCH_RESULT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_REQ_MATCH_RESULT);

        /** S_REQ_MATCH_RESULT cmd. */
        public cmd: number;

        /** S_REQ_MATCH_RESULT scmd. */
        public scmd: number;

        /** S_REQ_MATCH_RESULT result. */
        public result: boolean;

        /** S_REQ_MATCH_RESULT targetUid. */
        public targetUid: number;

        /**
         * Encodes the specified S_REQ_MATCH_RESULT message. Does not implicitly {@link FriendlyMatchPto.S_REQ_MATCH_RESULT.verify|verify} messages.
         * @param message S_REQ_MATCH_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_REQ_MATCH_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_REQ_MATCH_RESULT message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_REQ_MATCH_RESULT.verify|verify} messages.
         * @param message S_REQ_MATCH_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_REQ_MATCH_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_REQ_MATCH_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_REQ_MATCH_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_REQ_MATCH_RESULT;

        /**
         * Decodes a S_REQ_MATCH_RESULT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_REQ_MATCH_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_REQ_MATCH_RESULT;

        /**
         * Verifies a S_REQ_MATCH_RESULT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_REQ_MATCH_RESULT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_REQ_MATCH_RESULT
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_REQ_MATCH_RESULT;

        /**
         * Creates a plain object from a S_REQ_MATCH_RESULT message. Also converts values to other types if specified.
         * @param message S_REQ_MATCH_RESULT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_REQ_MATCH_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_REQ_MATCH_RESULT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_REQ_MATCH_RESULT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_MATCH. */
    interface IS_MATCH {

        /** S_MATCH cmd */
        cmd?: (number|null);

        /** S_MATCH scmd */
        scmd?: (number|null);

        /** S_MATCH friendUid */
        friendUid?: (number|null);

        /** S_MATCH endTime */
        endTime?: (number|null);
    }

    /** Represents a S_MATCH. */
    class S_MATCH implements IS_MATCH {

        /**
         * Constructs a new S_MATCH.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_MATCH);

        /** S_MATCH cmd. */
        public cmd: number;

        /** S_MATCH scmd. */
        public scmd: number;

        /** S_MATCH friendUid. */
        public friendUid: number;

        /** S_MATCH endTime. */
        public endTime: number;

        /**
         * Encodes the specified S_MATCH message. Does not implicitly {@link FriendlyMatchPto.S_MATCH.verify|verify} messages.
         * @param message S_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_MATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_MATCH message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_MATCH.verify|verify} messages.
         * @param message S_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_MATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MATCH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_MATCH;

        /**
         * Decodes a S_MATCH message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_MATCH;

        /**
         * Verifies a S_MATCH message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_MATCH message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_MATCH
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_MATCH;

        /**
         * Creates a plain object from a S_MATCH message. Also converts values to other types if specified.
         * @param message S_MATCH
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_MATCH, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_MATCH to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_MATCH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_REQ_MATCH_RESULT. */
    interface IC_REQ_MATCH_RESULT {

        /** C_REQ_MATCH_RESULT cmd */
        cmd?: (number|null);

        /** C_REQ_MATCH_RESULT scmd */
        scmd?: (number|null);

        /** C_REQ_MATCH_RESULT result */
        result?: (boolean|null);
    }

    /** Represents a C_REQ_MATCH_RESULT. */
    class C_REQ_MATCH_RESULT implements IC_REQ_MATCH_RESULT {

        /**
         * Constructs a new C_REQ_MATCH_RESULT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IC_REQ_MATCH_RESULT);

        /** C_REQ_MATCH_RESULT cmd. */
        public cmd: number;

        /** C_REQ_MATCH_RESULT scmd. */
        public scmd: number;

        /** C_REQ_MATCH_RESULT result. */
        public result: boolean;

        /**
         * Encodes the specified C_REQ_MATCH_RESULT message. Does not implicitly {@link FriendlyMatchPto.C_REQ_MATCH_RESULT.verify|verify} messages.
         * @param message C_REQ_MATCH_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IC_REQ_MATCH_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_REQ_MATCH_RESULT message, length delimited. Does not implicitly {@link FriendlyMatchPto.C_REQ_MATCH_RESULT.verify|verify} messages.
         * @param message C_REQ_MATCH_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IC_REQ_MATCH_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_REQ_MATCH_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REQ_MATCH_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_REQ_MATCH_RESULT;

        /**
         * Decodes a C_REQ_MATCH_RESULT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_REQ_MATCH_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.C_REQ_MATCH_RESULT;

        /**
         * Verifies a C_REQ_MATCH_RESULT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_REQ_MATCH_RESULT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_REQ_MATCH_RESULT
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.C_REQ_MATCH_RESULT;

        /**
         * Creates a plain object from a C_REQ_MATCH_RESULT message. Also converts values to other types if specified.
         * @param message C_REQ_MATCH_RESULT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.C_REQ_MATCH_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_REQ_MATCH_RESULT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_REQ_MATCH_RESULT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_MATCH_CARD_GROUP. */
    interface IS_MATCH_CARD_GROUP {

        /** S_MATCH_CARD_GROUP cmd */
        cmd?: (number|null);

        /** S_MATCH_CARD_GROUP scmd */
        scmd?: (number|null);

        /** S_MATCH_CARD_GROUP endTime */
        endTime?: (number|null);
    }

    /** Represents a S_MATCH_CARD_GROUP. */
    class S_MATCH_CARD_GROUP implements IS_MATCH_CARD_GROUP {

        /**
         * Constructs a new S_MATCH_CARD_GROUP.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_MATCH_CARD_GROUP);

        /** S_MATCH_CARD_GROUP cmd. */
        public cmd: number;

        /** S_MATCH_CARD_GROUP scmd. */
        public scmd: number;

        /** S_MATCH_CARD_GROUP endTime. */
        public endTime: number;

        /**
         * Encodes the specified S_MATCH_CARD_GROUP message. Does not implicitly {@link FriendlyMatchPto.S_MATCH_CARD_GROUP.verify|verify} messages.
         * @param message S_MATCH_CARD_GROUP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_MATCH_CARD_GROUP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_MATCH_CARD_GROUP message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_MATCH_CARD_GROUP.verify|verify} messages.
         * @param message S_MATCH_CARD_GROUP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_MATCH_CARD_GROUP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MATCH_CARD_GROUP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MATCH_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_MATCH_CARD_GROUP;

        /**
         * Decodes a S_MATCH_CARD_GROUP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_MATCH_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_MATCH_CARD_GROUP;

        /**
         * Verifies a S_MATCH_CARD_GROUP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_MATCH_CARD_GROUP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_MATCH_CARD_GROUP
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_MATCH_CARD_GROUP;

        /**
         * Creates a plain object from a S_MATCH_CARD_GROUP message. Also converts values to other types if specified.
         * @param message S_MATCH_CARD_GROUP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_MATCH_CARD_GROUP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_MATCH_CARD_GROUP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_MATCH_CARD_GROUP
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_GROUP_CHOOSE. */
    interface IC_GROUP_CHOOSE {

        /** C_GROUP_CHOOSE cmd */
        cmd?: (number|null);

        /** C_GROUP_CHOOSE scmd */
        scmd?: (number|null);

        /** C_GROUP_CHOOSE cardGroupId */
        cardGroupId?: (number|null);
    }

    /** Represents a C_GROUP_CHOOSE. */
    class C_GROUP_CHOOSE implements IC_GROUP_CHOOSE {

        /**
         * Constructs a new C_GROUP_CHOOSE.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IC_GROUP_CHOOSE);

        /** C_GROUP_CHOOSE cmd. */
        public cmd: number;

        /** C_GROUP_CHOOSE scmd. */
        public scmd: number;

        /** C_GROUP_CHOOSE cardGroupId. */
        public cardGroupId: number;

        /**
         * Encodes the specified C_GROUP_CHOOSE message. Does not implicitly {@link FriendlyMatchPto.C_GROUP_CHOOSE.verify|verify} messages.
         * @param message C_GROUP_CHOOSE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IC_GROUP_CHOOSE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GROUP_CHOOSE message, length delimited. Does not implicitly {@link FriendlyMatchPto.C_GROUP_CHOOSE.verify|verify} messages.
         * @param message C_GROUP_CHOOSE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IC_GROUP_CHOOSE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GROUP_CHOOSE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GROUP_CHOOSE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_GROUP_CHOOSE;

        /**
         * Decodes a C_GROUP_CHOOSE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GROUP_CHOOSE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.C_GROUP_CHOOSE;

        /**
         * Verifies a C_GROUP_CHOOSE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GROUP_CHOOSE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GROUP_CHOOSE
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.C_GROUP_CHOOSE;

        /**
         * Creates a plain object from a C_GROUP_CHOOSE message. Also converts values to other types if specified.
         * @param message C_GROUP_CHOOSE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.C_GROUP_CHOOSE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GROUP_CHOOSE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_GROUP_CHOOSE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_MATCH_CANCEL_GROUP. */
    interface IC_MATCH_CANCEL_GROUP {

        /** C_MATCH_CANCEL_GROUP cmd */
        cmd?: (number|null);

        /** C_MATCH_CANCEL_GROUP scmd */
        scmd?: (number|null);
    }

    /** Represents a C_MATCH_CANCEL_GROUP. */
    class C_MATCH_CANCEL_GROUP implements IC_MATCH_CANCEL_GROUP {

        /**
         * Constructs a new C_MATCH_CANCEL_GROUP.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IC_MATCH_CANCEL_GROUP);

        /** C_MATCH_CANCEL_GROUP cmd. */
        public cmd: number;

        /** C_MATCH_CANCEL_GROUP scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_MATCH_CANCEL_GROUP message. Does not implicitly {@link FriendlyMatchPto.C_MATCH_CANCEL_GROUP.verify|verify} messages.
         * @param message C_MATCH_CANCEL_GROUP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IC_MATCH_CANCEL_GROUP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_MATCH_CANCEL_GROUP message, length delimited. Does not implicitly {@link FriendlyMatchPto.C_MATCH_CANCEL_GROUP.verify|verify} messages.
         * @param message C_MATCH_CANCEL_GROUP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IC_MATCH_CANCEL_GROUP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_MATCH_CANCEL_GROUP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_MATCH_CANCEL_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_MATCH_CANCEL_GROUP;

        /**
         * Decodes a C_MATCH_CANCEL_GROUP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_MATCH_CANCEL_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.C_MATCH_CANCEL_GROUP;

        /**
         * Verifies a C_MATCH_CANCEL_GROUP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_MATCH_CANCEL_GROUP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_MATCH_CANCEL_GROUP
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.C_MATCH_CANCEL_GROUP;

        /**
         * Creates a plain object from a C_MATCH_CANCEL_GROUP message. Also converts values to other types if specified.
         * @param message C_MATCH_CANCEL_GROUP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.C_MATCH_CANCEL_GROUP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_MATCH_CANCEL_GROUP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_MATCH_CANCEL_GROUP
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a C_MATCH_LEAVE. */
    interface IC_MATCH_LEAVE {

        /** C_MATCH_LEAVE cmd */
        cmd?: (number|null);

        /** C_MATCH_LEAVE scmd */
        scmd?: (number|null);
    }

    /** Represents a C_MATCH_LEAVE. */
    class C_MATCH_LEAVE implements IC_MATCH_LEAVE {

        /**
         * Constructs a new C_MATCH_LEAVE.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IC_MATCH_LEAVE);

        /** C_MATCH_LEAVE cmd. */
        public cmd: number;

        /** C_MATCH_LEAVE scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_MATCH_LEAVE message. Does not implicitly {@link FriendlyMatchPto.C_MATCH_LEAVE.verify|verify} messages.
         * @param message C_MATCH_LEAVE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IC_MATCH_LEAVE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_MATCH_LEAVE message, length delimited. Does not implicitly {@link FriendlyMatchPto.C_MATCH_LEAVE.verify|verify} messages.
         * @param message C_MATCH_LEAVE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IC_MATCH_LEAVE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_MATCH_LEAVE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_MATCH_LEAVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_MATCH_LEAVE;

        /**
         * Decodes a C_MATCH_LEAVE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_MATCH_LEAVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.C_MATCH_LEAVE;

        /**
         * Verifies a C_MATCH_LEAVE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_MATCH_LEAVE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_MATCH_LEAVE
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.C_MATCH_LEAVE;

        /**
         * Creates a plain object from a C_MATCH_LEAVE message. Also converts values to other types if specified.
         * @param message C_MATCH_LEAVE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.C_MATCH_LEAVE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_MATCH_LEAVE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for C_MATCH_LEAVE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_MATCH_STOP. */
    interface IS_MATCH_STOP {

        /** S_MATCH_STOP cmd */
        cmd?: (number|null);

        /** S_MATCH_STOP scmd */
        scmd?: (number|null);

        /** S_MATCH_STOP code */
        code?: (number|null);
    }

    /** Represents a S_MATCH_STOP. */
    class S_MATCH_STOP implements IS_MATCH_STOP {

        /**
         * Constructs a new S_MATCH_STOP.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_MATCH_STOP);

        /** S_MATCH_STOP cmd. */
        public cmd: number;

        /** S_MATCH_STOP scmd. */
        public scmd: number;

        /** S_MATCH_STOP code. */
        public code: number;

        /**
         * Encodes the specified S_MATCH_STOP message. Does not implicitly {@link FriendlyMatchPto.S_MATCH_STOP.verify|verify} messages.
         * @param message S_MATCH_STOP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_MATCH_STOP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_MATCH_STOP message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_MATCH_STOP.verify|verify} messages.
         * @param message S_MATCH_STOP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_MATCH_STOP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MATCH_STOP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MATCH_STOP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_MATCH_STOP;

        /**
         * Decodes a S_MATCH_STOP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_MATCH_STOP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_MATCH_STOP;

        /**
         * Verifies a S_MATCH_STOP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_MATCH_STOP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_MATCH_STOP
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_MATCH_STOP;

        /**
         * Creates a plain object from a S_MATCH_STOP message. Also converts values to other types if specified.
         * @param message S_MATCH_STOP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_MATCH_STOP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_MATCH_STOP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_MATCH_STOP
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_FRIEND_GROUP_STATUS_CHANGE. */
    interface IS_FRIEND_GROUP_STATUS_CHANGE {

        /** S_FRIEND_GROUP_STATUS_CHANGE cmd */
        cmd?: (number|null);

        /** S_FRIEND_GROUP_STATUS_CHANGE scmd */
        scmd?: (number|null);

        /** S_FRIEND_GROUP_STATUS_CHANGE isChoose */
        isChoose?: (boolean|null);
    }

    /** Represents a S_FRIEND_GROUP_STATUS_CHANGE. */
    class S_FRIEND_GROUP_STATUS_CHANGE implements IS_FRIEND_GROUP_STATUS_CHANGE {

        /**
         * Constructs a new S_FRIEND_GROUP_STATUS_CHANGE.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_FRIEND_GROUP_STATUS_CHANGE);

        /** S_FRIEND_GROUP_STATUS_CHANGE cmd. */
        public cmd: number;

        /** S_FRIEND_GROUP_STATUS_CHANGE scmd. */
        public scmd: number;

        /** S_FRIEND_GROUP_STATUS_CHANGE isChoose. */
        public isChoose: boolean;

        /**
         * Encodes the specified S_FRIEND_GROUP_STATUS_CHANGE message. Does not implicitly {@link FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE.verify|verify} messages.
         * @param message S_FRIEND_GROUP_STATUS_CHANGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_FRIEND_GROUP_STATUS_CHANGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_FRIEND_GROUP_STATUS_CHANGE message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE.verify|verify} messages.
         * @param message S_FRIEND_GROUP_STATUS_CHANGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_FRIEND_GROUP_STATUS_CHANGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_FRIEND_GROUP_STATUS_CHANGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FRIEND_GROUP_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE;

        /**
         * Decodes a S_FRIEND_GROUP_STATUS_CHANGE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_FRIEND_GROUP_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE;

        /**
         * Verifies a S_FRIEND_GROUP_STATUS_CHANGE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_FRIEND_GROUP_STATUS_CHANGE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_FRIEND_GROUP_STATUS_CHANGE
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE;

        /**
         * Creates a plain object from a S_FRIEND_GROUP_STATUS_CHANGE message. Also converts values to other types if specified.
         * @param message S_FRIEND_GROUP_STATUS_CHANGE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_FRIEND_GROUP_STATUS_CHANGE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_FRIEND_GROUP_STATUS_CHANGE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_GROUP_CHOOSE_RESULT. */
    interface IS_GROUP_CHOOSE_RESULT {

        /** S_GROUP_CHOOSE_RESULT cmd */
        cmd?: (number|null);

        /** S_GROUP_CHOOSE_RESULT scmd */
        scmd?: (number|null);

        /** S_GROUP_CHOOSE_RESULT code */
        code?: (number|null);
    }

    /** Represents a S_GROUP_CHOOSE_RESULT. */
    class S_GROUP_CHOOSE_RESULT implements IS_GROUP_CHOOSE_RESULT {

        /**
         * Constructs a new S_GROUP_CHOOSE_RESULT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_GROUP_CHOOSE_RESULT);

        /** S_GROUP_CHOOSE_RESULT cmd. */
        public cmd: number;

        /** S_GROUP_CHOOSE_RESULT scmd. */
        public scmd: number;

        /** S_GROUP_CHOOSE_RESULT code. */
        public code: number;

        /**
         * Encodes the specified S_GROUP_CHOOSE_RESULT message. Does not implicitly {@link FriendlyMatchPto.S_GROUP_CHOOSE_RESULT.verify|verify} messages.
         * @param message S_GROUP_CHOOSE_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_GROUP_CHOOSE_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GROUP_CHOOSE_RESULT message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_GROUP_CHOOSE_RESULT.verify|verify} messages.
         * @param message S_GROUP_CHOOSE_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_GROUP_CHOOSE_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GROUP_CHOOSE_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GROUP_CHOOSE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_GROUP_CHOOSE_RESULT;

        /**
         * Decodes a S_GROUP_CHOOSE_RESULT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GROUP_CHOOSE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_GROUP_CHOOSE_RESULT;

        /**
         * Verifies a S_GROUP_CHOOSE_RESULT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GROUP_CHOOSE_RESULT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GROUP_CHOOSE_RESULT
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_GROUP_CHOOSE_RESULT;

        /**
         * Creates a plain object from a S_GROUP_CHOOSE_RESULT message. Also converts values to other types if specified.
         * @param message S_GROUP_CHOOSE_RESULT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_GROUP_CHOOSE_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GROUP_CHOOSE_RESULT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S_GROUP_CHOOSE_RESULT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
