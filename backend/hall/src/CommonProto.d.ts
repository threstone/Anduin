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
        cards?: (CardsPto.ICard|null);

        /** CardGroup groupName */
        groupName?: (string|null);

        /** CardGroup powerId */
        powerId?: (CardsPto.PowerType|null);
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
        public cards?: (CardsPto.ICard|null);

        /** CardGroup groupName. */
        public groupName: string;

        /** CardGroup powerId. */
        public powerId: CardsPto.PowerType;

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
}
