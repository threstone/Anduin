import * as $protobuf from "protobufjs";
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

        /** S_LOGIN needReconnect */
        needReconnect?: (boolean|null);
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

        /** S_LOGIN needReconnect. */
        public needReconnect: boolean;

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

    /** EventType enum. */
    enum EventType {
        Common = 0,
        Secret = 1
    }

    /** BuilingType enum. */
    enum BuilingType {
        Base = 0,
        Camp = 1
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
    }

    /** Properties of a Deck. */
    interface IDeck {

        /** Deck deckId */
        deckId?: (number|null);

        /** Deck cards */
        cards?: (CardsPto.ICard[]|null);

        /** Deck deckName */
        deckName?: (string|null);

        /** Deck powerId */
        powerId?: (CardsPto.PowerType|null);

        /** Deck accessToUse */
        accessToUse?: (boolean|null);

        /** Deck heroId */
        heroId?: (number|null);
    }

    /** Represents a Deck. */
    class Deck implements IDeck {

        /**
         * Constructs a new Deck.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IDeck);

        /** Deck deckId. */
        public deckId: number;

        /** Deck cards. */
        public cards: CardsPto.ICard[];

        /** Deck deckName. */
        public deckName: string;

        /** Deck powerId. */
        public powerId: CardsPto.PowerType;

        /** Deck accessToUse. */
        public accessToUse: boolean;

        /** Deck heroId. */
        public heroId: number;

        /**
         * Encodes the specified Deck message. Does not implicitly {@link CardsPto.Deck.verify|verify} messages.
         * @param message Deck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IDeck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Deck message, length delimited. Does not implicitly {@link CardsPto.Deck.verify|verify} messages.
         * @param message Deck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IDeck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Deck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Deck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.Deck;

        /**
         * Decodes a Deck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Deck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.Deck;

        /**
         * Verifies a Deck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Deck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Deck
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.Deck;

        /**
         * Creates a plain object from a Deck message. Also converts values to other types if specified.
         * @param message Deck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.Deck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Deck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
    }

    /** Properties of a S_CARDS_INFO. */
    interface IS_CARDS_INFO {

        /** S_CARDS_INFO cmd */
        cmd?: (number|null);

        /** S_CARDS_INFO scmd */
        scmd?: (number|null);

        /** S_CARDS_INFO cardInfos */
        cardInfos?: (CardsPto.ICard[]|null);

        /** S_CARDS_INFO deckList */
        deckList?: (CardsPto.IDeck[]|null);
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

        /** S_CARDS_INFO deckList. */
        public deckList: CardsPto.IDeck[];

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
    }

    /** Properties of a C_SAVE_CARDS. */
    interface IC_SAVE_CARDS {

        /** C_SAVE_CARDS cmd */
        cmd?: (number|null);

        /** C_SAVE_CARDS scmd */
        scmd?: (number|null);

        /** C_SAVE_CARDS deck */
        deck?: (CardsPto.IDeck|null);
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

        /** C_SAVE_CARDS deck. */
        public deck?: (CardsPto.IDeck|null);

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
    }

    /** Properties of a S_SAVE_DECK. */
    interface IS_SAVE_DECK {

        /** S_SAVE_DECK cmd */
        cmd?: (number|null);

        /** S_SAVE_DECK scmd */
        scmd?: (number|null);

        /** S_SAVE_DECK deck */
        deck?: (CardsPto.IDeck|null);
    }

    /** Represents a S_SAVE_DECK. */
    class S_SAVE_DECK implements IS_SAVE_DECK {

        /**
         * Constructs a new S_SAVE_DECK.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IS_SAVE_DECK);

        /** S_SAVE_DECK cmd. */
        public cmd: number;

        /** S_SAVE_DECK scmd. */
        public scmd: number;

        /** S_SAVE_DECK deck. */
        public deck?: (CardsPto.IDeck|null);

        /**
         * Encodes the specified S_SAVE_DECK message. Does not implicitly {@link CardsPto.S_SAVE_DECK.verify|verify} messages.
         * @param message S_SAVE_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IS_SAVE_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_SAVE_DECK message, length delimited. Does not implicitly {@link CardsPto.S_SAVE_DECK.verify|verify} messages.
         * @param message S_SAVE_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IS_SAVE_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_SAVE_DECK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SAVE_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.S_SAVE_DECK;

        /**
         * Decodes a S_SAVE_DECK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_SAVE_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.S_SAVE_DECK;

        /**
         * Verifies a S_SAVE_DECK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_SAVE_DECK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_SAVE_DECK
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.S_SAVE_DECK;

        /**
         * Creates a plain object from a S_SAVE_DECK message. Also converts values to other types if specified.
         * @param message S_SAVE_DECK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.S_SAVE_DECK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_SAVE_DECK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_DELETE_DECK. */
    interface IC_DELETE_DECK {

        /** C_DELETE_DECK cmd */
        cmd?: (number|null);

        /** C_DELETE_DECK scmd */
        scmd?: (number|null);

        /** C_DELETE_DECK deckId */
        deckId?: (number|null);
    }

    /** Represents a C_DELETE_DECK. */
    class C_DELETE_DECK implements IC_DELETE_DECK {

        /**
         * Constructs a new C_DELETE_DECK.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IC_DELETE_DECK);

        /** C_DELETE_DECK cmd. */
        public cmd: number;

        /** C_DELETE_DECK scmd. */
        public scmd: number;

        /** C_DELETE_DECK deckId. */
        public deckId: number;

        /**
         * Encodes the specified C_DELETE_DECK message. Does not implicitly {@link CardsPto.C_DELETE_DECK.verify|verify} messages.
         * @param message C_DELETE_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IC_DELETE_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_DELETE_DECK message, length delimited. Does not implicitly {@link CardsPto.C_DELETE_DECK.verify|verify} messages.
         * @param message C_DELETE_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IC_DELETE_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_DELETE_DECK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DELETE_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.C_DELETE_DECK;

        /**
         * Decodes a C_DELETE_DECK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_DELETE_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.C_DELETE_DECK;

        /**
         * Verifies a C_DELETE_DECK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_DELETE_DECK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_DELETE_DECK
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.C_DELETE_DECK;

        /**
         * Creates a plain object from a C_DELETE_DECK message. Also converts values to other types if specified.
         * @param message C_DELETE_DECK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.C_DELETE_DECK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_DELETE_DECK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_DELETE_DECK. */
    interface IS_DELETE_DECK {

        /** S_DELETE_DECK cmd */
        cmd?: (number|null);

        /** S_DELETE_DECK scmd */
        scmd?: (number|null);

        /** S_DELETE_DECK deckId */
        deckId?: (number|null);
    }

    /** Represents a S_DELETE_DECK. */
    class S_DELETE_DECK implements IS_DELETE_DECK {

        /**
         * Constructs a new S_DELETE_DECK.
         * @param [properties] Properties to set
         */
        constructor(properties?: CardsPto.IS_DELETE_DECK);

        /** S_DELETE_DECK cmd. */
        public cmd: number;

        /** S_DELETE_DECK scmd. */
        public scmd: number;

        /** S_DELETE_DECK deckId. */
        public deckId: number;

        /**
         * Encodes the specified S_DELETE_DECK message. Does not implicitly {@link CardsPto.S_DELETE_DECK.verify|verify} messages.
         * @param message S_DELETE_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CardsPto.IS_DELETE_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_DELETE_DECK message, length delimited. Does not implicitly {@link CardsPto.S_DELETE_DECK.verify|verify} messages.
         * @param message S_DELETE_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CardsPto.IS_DELETE_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DELETE_DECK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DELETE_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardsPto.S_DELETE_DECK;

        /**
         * Decodes a S_DELETE_DECK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_DELETE_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardsPto.S_DELETE_DECK;

        /**
         * Verifies a S_DELETE_DECK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_DELETE_DECK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_DELETE_DECK
         */
        public static fromObject(object: { [k: string]: any }): CardsPto.S_DELETE_DECK;

        /**
         * Creates a plain object from a S_DELETE_DECK message. Also converts values to other types if specified.
         * @param message S_DELETE_DECK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CardsPto.S_DELETE_DECK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_DELETE_DECK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace GamePto. */
export namespace GamePto {

    /** DiceValueEnum enum. */
    enum DiceValueEnum {
        Sword = 0,
        Bow = 1,
        Magic = 2,
        Miss = 3
    }

    /** UseConditionIndexEnum enum. */
    enum UseConditionIndexEnum {
        UseConditionTypeIndex = 0,
        UseConditionValueIndex = 1
    }

    /** UseConditionEnum enum. */
    enum UseConditionEnum {
        NoCondition = 0,
        BuidingCondition = 1,
        UnitCondition = 2,
        EmptyBlock = 3,
        FriendlyUnit = 4,
        FriendlyBuilding = 5,
        EnemyUnit = 6,
        EnemyBuilding = 7,
        AllUnit = 8,
        AllBuilding = 9,
        FriendEntity = 10,
        EnemyEntity = 11,
        AllEntity = 12,
        FriendUnitOrBuilding = 13,
        EnemyUnitOrBuilding = 14,
        AllUnitOrBuilding = 15,
        FriendHero = 16,
        EnemyHero = 17,
        AllHero = 18,
        AnyBlock = 19
    }

    /** AffectedEnum enum. */
    enum AffectedEnum {
        Show = 0,
        HpReduce = 1,
        HpAdd = 2
    }

    /** RecordType enum. */
    enum RecordType {
        Common = 0,
        Attack = 1,
        Effect = 2,
        Move = 3,
        Dead = 4,
        Deny = 5
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
    }

    /** Properties of a Card. */
    interface ICard {

        /** Card id */
        id?: (number|null);

        /** Card cardId */
        cardId?: (number|null);

        /** Card cardType */
        cardType?: (number|null);

        /** Card attack */
        attack?: (number|null);

        /** Card hp */
        hp?: (number|null);

        /** Card hpUpperLimit */
        hpUpperLimit?: (number|null);

        /** Card cardFee */
        cardFee?: (number|null);

        /** Card uid */
        uid?: (number|null);

        /** Card blockX */
        blockX?: (number|null);

        /** Card blockY */
        blockY?: (number|null);

        /** Card allowAtk */
        allowAtk?: (boolean|null);

        /** Card allowMove */
        allowMove?: (boolean|null);

        /** Card buffList */
        buffList?: (number[]|null);
    }

    /** Represents a Card. */
    class Card implements ICard {

        /**
         * Constructs a new Card.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.ICard);

        /** Card id. */
        public id: number;

        /** Card cardId. */
        public cardId: number;

        /** Card cardType. */
        public cardType: number;

        /** Card attack. */
        public attack: number;

        /** Card hp. */
        public hp: number;

        /** Card hpUpperLimit. */
        public hpUpperLimit: number;

        /** Card cardFee. */
        public cardFee: number;

        /** Card uid. */
        public uid: number;

        /** Card blockX. */
        public blockX: number;

        /** Card blockY. */
        public blockY: number;

        /** Card allowAtk. */
        public allowAtk: boolean;

        /** Card allowMove. */
        public allowMove: boolean;

        /** Card buffList. */
        public buffList: number[];

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
    }

    /** Properties of a MapData. */
    interface IMapData {

        /** MapData eventCards */
        eventCards?: (GamePto.ICard[]|null);

        /** MapData entityCards */
        entityCards?: (GamePto.ICard[]|null);
    }

    /** Represents a MapData. */
    class MapData implements IMapData {

        /**
         * Constructs a new MapData.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IMapData);

        /** MapData eventCards. */
        public eventCards: GamePto.ICard[];

        /** MapData entityCards. */
        public entityCards: GamePto.ICard[];

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
    }

    /** Properties of a UserDetail. */
    interface IUserDetail {

        /** UserDetail fee */
        fee?: (number|null);

        /** UserDetail maxFee */
        maxFee?: (number|null);

        /** UserDetail uid */
        uid?: (number|null);

        /** UserDetail atkTimes */
        atkTimes?: (number|null);

        /** UserDetail atkTimesLimit */
        atkTimesLimit?: (number|null);

        /** UserDetail moveTimes */
        moveTimes?: (number|null);

        /** UserDetail moveTimesLimit */
        moveTimesLimit?: (number|null);
    }

    /** Represents a UserDetail. */
    class UserDetail implements IUserDetail {

        /**
         * Constructs a new UserDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IUserDetail);

        /** UserDetail fee. */
        public fee: number;

        /** UserDetail maxFee. */
        public maxFee: number;

        /** UserDetail uid. */
        public uid: number;

        /** UserDetail atkTimes. */
        public atkTimes: number;

        /** UserDetail atkTimesLimit. */
        public atkTimesLimit: number;

        /** UserDetail moveTimes. */
        public moveTimes: number;

        /** UserDetail moveTimesLimit. */
        public moveTimesLimit: number;

        /**
         * Encodes the specified UserDetail message. Does not implicitly {@link GamePto.UserDetail.verify|verify} messages.
         * @param message UserDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IUserDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserDetail message, length delimited. Does not implicitly {@link GamePto.UserDetail.verify|verify} messages.
         * @param message UserDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IUserDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.UserDetail;

        /**
         * Decodes a UserDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.UserDetail;

        /**
         * Verifies a UserDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserDetail
         */
        public static fromObject(object: { [k: string]: any }): GamePto.UserDetail;

        /**
         * Creates a plain object from a UserDetail message. Also converts values to other types if specified.
         * @param message UserDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.UserDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AffectedCard. */
    interface IAffectedCard {

        /** AffectedCard card */
        card?: (GamePto.ICard|null);

        /** AffectedCard type */
        type?: (GamePto.AffectedEnum|null);

        /** AffectedCard value */
        value?: (number|null);
    }

    /** Represents an AffectedCard. */
    class AffectedCard implements IAffectedCard {

        /**
         * Constructs a new AffectedCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IAffectedCard);

        /** AffectedCard card. */
        public card?: (GamePto.ICard|null);

        /** AffectedCard type. */
        public type: GamePto.AffectedEnum;

        /** AffectedCard value. */
        public value: number;

        /**
         * Encodes the specified AffectedCard message. Does not implicitly {@link GamePto.AffectedCard.verify|verify} messages.
         * @param message AffectedCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IAffectedCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AffectedCard message, length delimited. Does not implicitly {@link GamePto.AffectedCard.verify|verify} messages.
         * @param message AffectedCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IAffectedCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AffectedCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AffectedCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.AffectedCard;

        /**
         * Decodes an AffectedCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AffectedCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.AffectedCard;

        /**
         * Verifies an AffectedCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AffectedCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AffectedCard
         */
        public static fromObject(object: { [k: string]: any }): GamePto.AffectedCard;

        /**
         * Creates a plain object from an AffectedCard message. Also converts values to other types if specified.
         * @param message AffectedCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.AffectedCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AffectedCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
    }

    /** Properties of a C_END_ROUND. */
    interface IC_END_ROUND {

        /** C_END_ROUND cmd */
        cmd?: (number|null);

        /** C_END_ROUND scmd */
        scmd?: (number|null);
    }

    /** Represents a C_END_ROUND. */
    class C_END_ROUND implements IC_END_ROUND {

        /**
         * Constructs a new C_END_ROUND.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IC_END_ROUND);

        /** C_END_ROUND cmd. */
        public cmd: number;

        /** C_END_ROUND scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_END_ROUND message. Does not implicitly {@link GamePto.C_END_ROUND.verify|verify} messages.
         * @param message C_END_ROUND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IC_END_ROUND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_END_ROUND message, length delimited. Does not implicitly {@link GamePto.C_END_ROUND.verify|verify} messages.
         * @param message C_END_ROUND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IC_END_ROUND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_END_ROUND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_END_ROUND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.C_END_ROUND;

        /**
         * Decodes a C_END_ROUND message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_END_ROUND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.C_END_ROUND;

        /**
         * Verifies a C_END_ROUND message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_END_ROUND message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_END_ROUND
         */
        public static fromObject(object: { [k: string]: any }): GamePto.C_END_ROUND;

        /**
         * Creates a plain object from a C_END_ROUND message. Also converts values to other types if specified.
         * @param message C_END_ROUND
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.C_END_ROUND, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_END_ROUND to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_DISCARD. */
    interface IC_DISCARD {

        /** C_DISCARD cmd */
        cmd?: (number|null);

        /** C_DISCARD scmd */
        scmd?: (number|null);

        /** C_DISCARD cardIndex */
        cardIndex?: (number|null);
    }

    /** Represents a C_DISCARD. */
    class C_DISCARD implements IC_DISCARD {

        /**
         * Constructs a new C_DISCARD.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IC_DISCARD);

        /** C_DISCARD cmd. */
        public cmd: number;

        /** C_DISCARD scmd. */
        public scmd: number;

        /** C_DISCARD cardIndex. */
        public cardIndex: number;

        /**
         * Encodes the specified C_DISCARD message. Does not implicitly {@link GamePto.C_DISCARD.verify|verify} messages.
         * @param message C_DISCARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IC_DISCARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_DISCARD message, length delimited. Does not implicitly {@link GamePto.C_DISCARD.verify|verify} messages.
         * @param message C_DISCARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IC_DISCARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_DISCARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DISCARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.C_DISCARD;

        /**
         * Decodes a C_DISCARD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_DISCARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.C_DISCARD;

        /**
         * Verifies a C_DISCARD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_DISCARD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_DISCARD
         */
        public static fromObject(object: { [k: string]: any }): GamePto.C_DISCARD;

        /**
         * Creates a plain object from a C_DISCARD message. Also converts values to other types if specified.
         * @param message C_DISCARD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.C_DISCARD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_DISCARD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_USE_CARD. */
    interface IC_USE_CARD {

        /** C_USE_CARD cmd */
        cmd?: (number|null);

        /** C_USE_CARD scmd */
        scmd?: (number|null);

        /** C_USE_CARD cardIndex */
        cardIndex?: (number|null);

        /** C_USE_CARD dataArr */
        dataArr?: (number[]|null);
    }

    /** Represents a C_USE_CARD. */
    class C_USE_CARD implements IC_USE_CARD {

        /**
         * Constructs a new C_USE_CARD.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IC_USE_CARD);

        /** C_USE_CARD cmd. */
        public cmd: number;

        /** C_USE_CARD scmd. */
        public scmd: number;

        /** C_USE_CARD cardIndex. */
        public cardIndex: number;

        /** C_USE_CARD dataArr. */
        public dataArr: number[];

        /**
         * Encodes the specified C_USE_CARD message. Does not implicitly {@link GamePto.C_USE_CARD.verify|verify} messages.
         * @param message C_USE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IC_USE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_USE_CARD message, length delimited. Does not implicitly {@link GamePto.C_USE_CARD.verify|verify} messages.
         * @param message C_USE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IC_USE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_USE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_USE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.C_USE_CARD;

        /**
         * Decodes a C_USE_CARD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_USE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.C_USE_CARD;

        /**
         * Verifies a C_USE_CARD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_USE_CARD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_USE_CARD
         */
        public static fromObject(object: { [k: string]: any }): GamePto.C_USE_CARD;

        /**
         * Creates a plain object from a C_USE_CARD message. Also converts values to other types if specified.
         * @param message C_USE_CARD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.C_USE_CARD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_USE_CARD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_MOVE. */
    interface IC_MOVE {

        /** C_MOVE cmd */
        cmd?: (number|null);

        /** C_MOVE scmd */
        scmd?: (number|null);

        /** C_MOVE sourceX */
        sourceX?: (number|null);

        /** C_MOVE sourceY */
        sourceY?: (number|null);

        /** C_MOVE targetX */
        targetX?: (number|null);

        /** C_MOVE targetY */
        targetY?: (number|null);
    }

    /** Represents a C_MOVE. */
    class C_MOVE implements IC_MOVE {

        /**
         * Constructs a new C_MOVE.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IC_MOVE);

        /** C_MOVE cmd. */
        public cmd: number;

        /** C_MOVE scmd. */
        public scmd: number;

        /** C_MOVE sourceX. */
        public sourceX: number;

        /** C_MOVE sourceY. */
        public sourceY: number;

        /** C_MOVE targetX. */
        public targetX: number;

        /** C_MOVE targetY. */
        public targetY: number;

        /**
         * Encodes the specified C_MOVE message. Does not implicitly {@link GamePto.C_MOVE.verify|verify} messages.
         * @param message C_MOVE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IC_MOVE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_MOVE message, length delimited. Does not implicitly {@link GamePto.C_MOVE.verify|verify} messages.
         * @param message C_MOVE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IC_MOVE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_MOVE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.C_MOVE;

        /**
         * Decodes a C_MOVE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.C_MOVE;

        /**
         * Verifies a C_MOVE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_MOVE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_MOVE
         */
        public static fromObject(object: { [k: string]: any }): GamePto.C_MOVE;

        /**
         * Creates a plain object from a C_MOVE message. Also converts values to other types if specified.
         * @param message C_MOVE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.C_MOVE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_MOVE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_ATTACK. */
    interface IC_ATTACK {

        /** C_ATTACK cmd */
        cmd?: (number|null);

        /** C_ATTACK scmd */
        scmd?: (number|null);

        /** C_ATTACK sourceX */
        sourceX?: (number|null);

        /** C_ATTACK sourceY */
        sourceY?: (number|null);

        /** C_ATTACK targetX */
        targetX?: (number|null);

        /** C_ATTACK targetY */
        targetY?: (number|null);
    }

    /** Represents a C_ATTACK. */
    class C_ATTACK implements IC_ATTACK {

        /**
         * Constructs a new C_ATTACK.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IC_ATTACK);

        /** C_ATTACK cmd. */
        public cmd: number;

        /** C_ATTACK scmd. */
        public scmd: number;

        /** C_ATTACK sourceX. */
        public sourceX: number;

        /** C_ATTACK sourceY. */
        public sourceY: number;

        /** C_ATTACK targetX. */
        public targetX: number;

        /** C_ATTACK targetY. */
        public targetY: number;

        /**
         * Encodes the specified C_ATTACK message. Does not implicitly {@link GamePto.C_ATTACK.verify|verify} messages.
         * @param message C_ATTACK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IC_ATTACK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_ATTACK message, length delimited. Does not implicitly {@link GamePto.C_ATTACK.verify|verify} messages.
         * @param message C_ATTACK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IC_ATTACK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_ATTACK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ATTACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.C_ATTACK;

        /**
         * Decodes a C_ATTACK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_ATTACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.C_ATTACK;

        /**
         * Verifies a C_ATTACK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_ATTACK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_ATTACK
         */
        public static fromObject(object: { [k: string]: any }): GamePto.C_ATTACK;

        /**
         * Creates a plain object from a C_ATTACK message. Also converts values to other types if specified.
         * @param message C_ATTACK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.C_ATTACK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_ATTACK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_RECONNECT. */
    interface IC_RECONNECT {

        /** C_RECONNECT cmd */
        cmd?: (number|null);

        /** C_RECONNECT scmd */
        scmd?: (number|null);
    }

    /** Represents a C_RECONNECT. */
    class C_RECONNECT implements IC_RECONNECT {

        /**
         * Constructs a new C_RECONNECT.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IC_RECONNECT);

        /** C_RECONNECT cmd. */
        public cmd: number;

        /** C_RECONNECT scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_RECONNECT message. Does not implicitly {@link GamePto.C_RECONNECT.verify|verify} messages.
         * @param message C_RECONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IC_RECONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_RECONNECT message, length delimited. Does not implicitly {@link GamePto.C_RECONNECT.verify|verify} messages.
         * @param message C_RECONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IC_RECONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_RECONNECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_RECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.C_RECONNECT;

        /**
         * Decodes a C_RECONNECT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_RECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.C_RECONNECT;

        /**
         * Verifies a C_RECONNECT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_RECONNECT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_RECONNECT
         */
        public static fromObject(object: { [k: string]: any }): GamePto.C_RECONNECT;

        /**
         * Creates a plain object from a C_RECONNECT message. Also converts values to other types if specified.
         * @param message C_RECONNECT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.C_RECONNECT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_RECONNECT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_SURRENDER. */
    interface IC_SURRENDER {

        /** C_SURRENDER cmd */
        cmd?: (number|null);

        /** C_SURRENDER scmd */
        scmd?: (number|null);
    }

    /** Represents a C_SURRENDER. */
    class C_SURRENDER implements IC_SURRENDER {

        /**
         * Constructs a new C_SURRENDER.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IC_SURRENDER);

        /** C_SURRENDER cmd. */
        public cmd: number;

        /** C_SURRENDER scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_SURRENDER message. Does not implicitly {@link GamePto.C_SURRENDER.verify|verify} messages.
         * @param message C_SURRENDER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IC_SURRENDER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SURRENDER message, length delimited. Does not implicitly {@link GamePto.C_SURRENDER.verify|verify} messages.
         * @param message C_SURRENDER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IC_SURRENDER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SURRENDER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SURRENDER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.C_SURRENDER;

        /**
         * Decodes a C_SURRENDER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SURRENDER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.C_SURRENDER;

        /**
         * Verifies a C_SURRENDER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SURRENDER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SURRENDER
         */
        public static fromObject(object: { [k: string]: any }): GamePto.C_SURRENDER;

        /**
         * Creates a plain object from a C_SURRENDER message. Also converts values to other types if specified.
         * @param message C_SURRENDER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.C_SURRENDER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SURRENDER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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

        /** S_GAME_START isReplace */
        isReplace?: (boolean|null);
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

        /** S_GAME_START isReplace. */
        public isReplace: boolean;

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

        /** S_REPLACE_CARDS uid */
        uid?: (number|null);
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

        /** S_REPLACE_CARDS uid. */
        public uid: number;

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
    }

    /** Properties of a S_ROUND_START_EVENT. */
    interface IS_ROUND_START_EVENT {

        /** S_ROUND_START_EVENT cmd */
        cmd?: (number|null);

        /** S_ROUND_START_EVENT scmd */
        scmd?: (number|null);

        /** S_ROUND_START_EVENT uid */
        uid?: (number|null);

        /** S_ROUND_START_EVENT atkTimes */
        atkTimes?: (number|null);

        /** S_ROUND_START_EVENT atkTimesLimit */
        atkTimesLimit?: (number|null);

        /** S_ROUND_START_EVENT moveTimes */
        moveTimes?: (number|null);

        /** S_ROUND_START_EVENT moveTimesLimit */
        moveTimesLimit?: (number|null);
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

        /** S_ROUND_START_EVENT atkTimes. */
        public atkTimes: number;

        /** S_ROUND_START_EVENT atkTimesLimit. */
        public atkTimesLimit: number;

        /** S_ROUND_START_EVENT moveTimes. */
        public moveTimes: number;

        /** S_ROUND_START_EVENT moveTimesLimit. */
        public moveTimesLimit: number;

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
    }

    /** Properties of a S_DRAW_CARDS. */
    interface IS_DRAW_CARDS {

        /** S_DRAW_CARDS cmd */
        cmd?: (number|null);

        /** S_DRAW_CARDS scmd */
        scmd?: (number|null);

        /** S_DRAW_CARDS inHandCards */
        inHandCards?: (GamePto.ICard[]|null);

        /** S_DRAW_CARDS inHandCardCount */
        inHandCardCount?: (number|null);

        /** S_DRAW_CARDS discards */
        discards?: (GamePto.ICard[]|null);

        /** S_DRAW_CARDS discardsCount */
        discardsCount?: (number|null);

        /** S_DRAW_CARDS damages */
        damages?: (number[]|null);

        /** S_DRAW_CARDS uid */
        uid?: (number|null);

        /** S_DRAW_CARDS cardPoolNum */
        cardPoolNum?: (number|null);

        /** S_DRAW_CARDS deadPoolNum */
        deadPoolNum?: (number|null);
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

        /** S_DRAW_CARDS inHandCards. */
        public inHandCards: GamePto.ICard[];

        /** S_DRAW_CARDS inHandCardCount. */
        public inHandCardCount: number;

        /** S_DRAW_CARDS discards. */
        public discards: GamePto.ICard[];

        /** S_DRAW_CARDS discardsCount. */
        public discardsCount: number;

        /** S_DRAW_CARDS damages. */
        public damages: number[];

        /** S_DRAW_CARDS uid. */
        public uid: number;

        /** S_DRAW_CARDS cardPoolNum. */
        public cardPoolNum: number;

        /** S_DRAW_CARDS deadPoolNum. */
        public deadPoolNum: number;

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
    }

    /** Properties of a S_FEE_INFO. */
    interface IS_FEE_INFO {

        /** S_FEE_INFO cmd */
        cmd?: (number|null);

        /** S_FEE_INFO scmd */
        scmd?: (number|null);

        /** S_FEE_INFO fee */
        fee?: (number|null);

        /** S_FEE_INFO maxFee */
        maxFee?: (number|null);

        /** S_FEE_INFO uid */
        uid?: (number|null);
    }

    /** Represents a S_FEE_INFO. */
    class S_FEE_INFO implements IS_FEE_INFO {

        /**
         * Constructs a new S_FEE_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_FEE_INFO);

        /** S_FEE_INFO cmd. */
        public cmd: number;

        /** S_FEE_INFO scmd. */
        public scmd: number;

        /** S_FEE_INFO fee. */
        public fee: number;

        /** S_FEE_INFO maxFee. */
        public maxFee: number;

        /** S_FEE_INFO uid. */
        public uid: number;

        /**
         * Encodes the specified S_FEE_INFO message. Does not implicitly {@link GamePto.S_FEE_INFO.verify|verify} messages.
         * @param message S_FEE_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_FEE_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_FEE_INFO message, length delimited. Does not implicitly {@link GamePto.S_FEE_INFO.verify|verify} messages.
         * @param message S_FEE_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_FEE_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_FEE_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FEE_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_FEE_INFO;

        /**
         * Decodes a S_FEE_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_FEE_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_FEE_INFO;

        /**
         * Verifies a S_FEE_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_FEE_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_FEE_INFO
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_FEE_INFO;

        /**
         * Creates a plain object from a S_FEE_INFO message. Also converts values to other types if specified.
         * @param message S_FEE_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_FEE_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_FEE_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_DISCARD. */
    interface IS_DISCARD {

        /** S_DISCARD cmd */
        cmd?: (number|null);

        /** S_DISCARD scmd */
        scmd?: (number|null);

        /** S_DISCARD isSuccess */
        isSuccess?: (boolean|null);

        /** S_DISCARD cardIndex */
        cardIndex?: (number|null);

        /** S_DISCARD uid */
        uid?: (number|null);
    }

    /** Represents a S_DISCARD. */
    class S_DISCARD implements IS_DISCARD {

        /**
         * Constructs a new S_DISCARD.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_DISCARD);

        /** S_DISCARD cmd. */
        public cmd: number;

        /** S_DISCARD scmd. */
        public scmd: number;

        /** S_DISCARD isSuccess. */
        public isSuccess: boolean;

        /** S_DISCARD cardIndex. */
        public cardIndex: number;

        /** S_DISCARD uid. */
        public uid: number;

        /**
         * Encodes the specified S_DISCARD message. Does not implicitly {@link GamePto.S_DISCARD.verify|verify} messages.
         * @param message S_DISCARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_DISCARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_DISCARD message, length delimited. Does not implicitly {@link GamePto.S_DISCARD.verify|verify} messages.
         * @param message S_DISCARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_DISCARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DISCARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DISCARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_DISCARD;

        /**
         * Decodes a S_DISCARD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_DISCARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_DISCARD;

        /**
         * Verifies a S_DISCARD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_DISCARD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_DISCARD
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_DISCARD;

        /**
         * Creates a plain object from a S_DISCARD message. Also converts values to other types if specified.
         * @param message S_DISCARD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_DISCARD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_DISCARD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_USE_CARD. */
    interface IS_USE_CARD {

        /** S_USE_CARD cmd */
        cmd?: (number|null);

        /** S_USE_CARD scmd */
        scmd?: (number|null);

        /** S_USE_CARD isSuccess */
        isSuccess?: (boolean|null);

        /** S_USE_CARD uid */
        uid?: (number|null);

        /** S_USE_CARD cardIndex */
        cardIndex?: (number|null);

        /** S_USE_CARD card */
        card?: (GamePto.ICard|null);
    }

    /** Represents a S_USE_CARD. */
    class S_USE_CARD implements IS_USE_CARD {

        /**
         * Constructs a new S_USE_CARD.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_USE_CARD);

        /** S_USE_CARD cmd. */
        public cmd: number;

        /** S_USE_CARD scmd. */
        public scmd: number;

        /** S_USE_CARD isSuccess. */
        public isSuccess: boolean;

        /** S_USE_CARD uid. */
        public uid: number;

        /** S_USE_CARD cardIndex. */
        public cardIndex: number;

        /** S_USE_CARD card. */
        public card?: (GamePto.ICard|null);

        /**
         * Encodes the specified S_USE_CARD message. Does not implicitly {@link GamePto.S_USE_CARD.verify|verify} messages.
         * @param message S_USE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_USE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_USE_CARD message, length delimited. Does not implicitly {@link GamePto.S_USE_CARD.verify|verify} messages.
         * @param message S_USE_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_USE_CARD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_USE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_USE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_USE_CARD;

        /**
         * Decodes a S_USE_CARD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_USE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_USE_CARD;

        /**
         * Verifies a S_USE_CARD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_USE_CARD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_USE_CARD
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_USE_CARD;

        /**
         * Creates a plain object from a S_USE_CARD message. Also converts values to other types if specified.
         * @param message S_USE_CARD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_USE_CARD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_USE_CARD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ROUND_END_TIME. */
    interface IS_ROUND_END_TIME {

        /** S_ROUND_END_TIME cmd */
        cmd?: (number|null);

        /** S_ROUND_END_TIME scmd */
        scmd?: (number|null);

        /** S_ROUND_END_TIME roundEndTime */
        roundEndTime?: (number|null);

        /** S_ROUND_END_TIME uid */
        uid?: (number|null);
    }

    /** Represents a S_ROUND_END_TIME. */
    class S_ROUND_END_TIME implements IS_ROUND_END_TIME {

        /**
         * Constructs a new S_ROUND_END_TIME.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_ROUND_END_TIME);

        /** S_ROUND_END_TIME cmd. */
        public cmd: number;

        /** S_ROUND_END_TIME scmd. */
        public scmd: number;

        /** S_ROUND_END_TIME roundEndTime. */
        public roundEndTime: number;

        /** S_ROUND_END_TIME uid. */
        public uid: number;

        /**
         * Encodes the specified S_ROUND_END_TIME message. Does not implicitly {@link GamePto.S_ROUND_END_TIME.verify|verify} messages.
         * @param message S_ROUND_END_TIME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_ROUND_END_TIME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ROUND_END_TIME message, length delimited. Does not implicitly {@link GamePto.S_ROUND_END_TIME.verify|verify} messages.
         * @param message S_ROUND_END_TIME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_ROUND_END_TIME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ROUND_END_TIME message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROUND_END_TIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_ROUND_END_TIME;

        /**
         * Decodes a S_ROUND_END_TIME message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ROUND_END_TIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_ROUND_END_TIME;

        /**
         * Verifies a S_ROUND_END_TIME message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ROUND_END_TIME message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ROUND_END_TIME
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_ROUND_END_TIME;

        /**
         * Creates a plain object from a S_ROUND_END_TIME message. Also converts values to other types if specified.
         * @param message S_ROUND_END_TIME
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_ROUND_END_TIME, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ROUND_END_TIME to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_MAP_DATA. */
    interface IS_MAP_DATA {

        /** S_MAP_DATA cmd */
        cmd?: (number|null);

        /** S_MAP_DATA scmd */
        scmd?: (number|null);

        /** S_MAP_DATA mapData */
        mapData?: (GamePto.IMapData|null);
    }

    /** Represents a S_MAP_DATA. */
    class S_MAP_DATA implements IS_MAP_DATA {

        /**
         * Constructs a new S_MAP_DATA.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_MAP_DATA);

        /** S_MAP_DATA cmd. */
        public cmd: number;

        /** S_MAP_DATA scmd. */
        public scmd: number;

        /** S_MAP_DATA mapData. */
        public mapData?: (GamePto.IMapData|null);

        /**
         * Encodes the specified S_MAP_DATA message. Does not implicitly {@link GamePto.S_MAP_DATA.verify|verify} messages.
         * @param message S_MAP_DATA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_MAP_DATA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_MAP_DATA message, length delimited. Does not implicitly {@link GamePto.S_MAP_DATA.verify|verify} messages.
         * @param message S_MAP_DATA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_MAP_DATA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MAP_DATA message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MAP_DATA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_MAP_DATA;

        /**
         * Decodes a S_MAP_DATA message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_MAP_DATA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_MAP_DATA;

        /**
         * Verifies a S_MAP_DATA message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_MAP_DATA message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_MAP_DATA
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_MAP_DATA;

        /**
         * Creates a plain object from a S_MAP_DATA message. Also converts values to other types if specified.
         * @param message S_MAP_DATA
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_MAP_DATA, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_MAP_DATA to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_MOVE. */
    interface IS_MOVE {

        /** S_MOVE cmd */
        cmd?: (number|null);

        /** S_MOVE scmd */
        scmd?: (number|null);

        /** S_MOVE sourceX */
        sourceX?: (number|null);

        /** S_MOVE sourceY */
        sourceY?: (number|null);

        /** S_MOVE card */
        card?: (GamePto.ICard|null);

        /** S_MOVE allowMove */
        allowMove?: (boolean|null);

        /** S_MOVE uid */
        uid?: (number|null);
    }

    /** Represents a S_MOVE. */
    class S_MOVE implements IS_MOVE {

        /**
         * Constructs a new S_MOVE.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_MOVE);

        /** S_MOVE cmd. */
        public cmd: number;

        /** S_MOVE scmd. */
        public scmd: number;

        /** S_MOVE sourceX. */
        public sourceX: number;

        /** S_MOVE sourceY. */
        public sourceY: number;

        /** S_MOVE card. */
        public card?: (GamePto.ICard|null);

        /** S_MOVE allowMove. */
        public allowMove: boolean;

        /** S_MOVE uid. */
        public uid: number;

        /**
         * Encodes the specified S_MOVE message. Does not implicitly {@link GamePto.S_MOVE.verify|verify} messages.
         * @param message S_MOVE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_MOVE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_MOVE message, length delimited. Does not implicitly {@link GamePto.S_MOVE.verify|verify} messages.
         * @param message S_MOVE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_MOVE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MOVE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_MOVE;

        /**
         * Decodes a S_MOVE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_MOVE;

        /**
         * Verifies a S_MOVE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_MOVE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_MOVE
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_MOVE;

        /**
         * Creates a plain object from a S_MOVE message. Also converts values to other types if specified.
         * @param message S_MOVE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_MOVE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_MOVE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ATTACK. */
    interface IS_ATTACK {

        /** S_ATTACK cmd */
        cmd?: (number|null);

        /** S_ATTACK scmd */
        scmd?: (number|null);

        /** S_ATTACK uid */
        uid?: (number|null);

        /** S_ATTACK dices */
        dices?: (number[]|null);

        /** S_ATTACK leastAtkTimes */
        leastAtkTimes?: (number|null);

        /** S_ATTACK damage */
        damage?: (number|null);

        /** S_ATTACK allowAtk */
        allowAtk?: (boolean|null);

        /** S_ATTACK from */
        from?: (GamePto.ICard|null);

        /** S_ATTACK targetList */
        targetList?: (GamePto.ICard[]|null);
    }

    /** Represents a S_ATTACK. */
    class S_ATTACK implements IS_ATTACK {

        /**
         * Constructs a new S_ATTACK.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_ATTACK);

        /** S_ATTACK cmd. */
        public cmd: number;

        /** S_ATTACK scmd. */
        public scmd: number;

        /** S_ATTACK uid. */
        public uid: number;

        /** S_ATTACK dices. */
        public dices: number[];

        /** S_ATTACK leastAtkTimes. */
        public leastAtkTimes: number;

        /** S_ATTACK damage. */
        public damage: number;

        /** S_ATTACK allowAtk. */
        public allowAtk: boolean;

        /** S_ATTACK from. */
        public from?: (GamePto.ICard|null);

        /** S_ATTACK targetList. */
        public targetList: GamePto.ICard[];

        /**
         * Encodes the specified S_ATTACK message. Does not implicitly {@link GamePto.S_ATTACK.verify|verify} messages.
         * @param message S_ATTACK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_ATTACK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ATTACK message, length delimited. Does not implicitly {@link GamePto.S_ATTACK.verify|verify} messages.
         * @param message S_ATTACK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_ATTACK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ATTACK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ATTACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_ATTACK;

        /**
         * Decodes a S_ATTACK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ATTACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_ATTACK;

        /**
         * Verifies a S_ATTACK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ATTACK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ATTACK
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_ATTACK;

        /**
         * Creates a plain object from a S_ATTACK message. Also converts values to other types if specified.
         * @param message S_ATTACK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_ATTACK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ATTACK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ENTITY_DEAD. */
    interface IS_ENTITY_DEAD {

        /** S_ENTITY_DEAD cmd */
        cmd?: (number|null);

        /** S_ENTITY_DEAD scmd */
        scmd?: (number|null);

        /** S_ENTITY_DEAD deadCard */
        deadCard?: (GamePto.ICard|null);
    }

    /** Represents a S_ENTITY_DEAD. */
    class S_ENTITY_DEAD implements IS_ENTITY_DEAD {

        /**
         * Constructs a new S_ENTITY_DEAD.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_ENTITY_DEAD);

        /** S_ENTITY_DEAD cmd. */
        public cmd: number;

        /** S_ENTITY_DEAD scmd. */
        public scmd: number;

        /** S_ENTITY_DEAD deadCard. */
        public deadCard?: (GamePto.ICard|null);

        /**
         * Encodes the specified S_ENTITY_DEAD message. Does not implicitly {@link GamePto.S_ENTITY_DEAD.verify|verify} messages.
         * @param message S_ENTITY_DEAD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_ENTITY_DEAD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ENTITY_DEAD message, length delimited. Does not implicitly {@link GamePto.S_ENTITY_DEAD.verify|verify} messages.
         * @param message S_ENTITY_DEAD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_ENTITY_DEAD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ENTITY_DEAD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ENTITY_DEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_ENTITY_DEAD;

        /**
         * Decodes a S_ENTITY_DEAD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ENTITY_DEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_ENTITY_DEAD;

        /**
         * Verifies a S_ENTITY_DEAD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ENTITY_DEAD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ENTITY_DEAD
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_ENTITY_DEAD;

        /**
         * Creates a plain object from a S_ENTITY_DEAD message. Also converts values to other types if specified.
         * @param message S_ENTITY_DEAD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_ENTITY_DEAD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ENTITY_DEAD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_EVENT_UPDATE. */
    interface IS_EVENT_UPDATE {

        /** S_EVENT_UPDATE cmd */
        cmd?: (number|null);

        /** S_EVENT_UPDATE scmd */
        scmd?: (number|null);

        /** S_EVENT_UPDATE card */
        card?: (GamePto.ICard|null);
    }

    /** Represents a S_EVENT_UPDATE. */
    class S_EVENT_UPDATE implements IS_EVENT_UPDATE {

        /**
         * Constructs a new S_EVENT_UPDATE.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_EVENT_UPDATE);

        /** S_EVENT_UPDATE cmd. */
        public cmd: number;

        /** S_EVENT_UPDATE scmd. */
        public scmd: number;

        /** S_EVENT_UPDATE card. */
        public card?: (GamePto.ICard|null);

        /**
         * Encodes the specified S_EVENT_UPDATE message. Does not implicitly {@link GamePto.S_EVENT_UPDATE.verify|verify} messages.
         * @param message S_EVENT_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_EVENT_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_EVENT_UPDATE message, length delimited. Does not implicitly {@link GamePto.S_EVENT_UPDATE.verify|verify} messages.
         * @param message S_EVENT_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_EVENT_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_EVENT_UPDATE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_EVENT_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_EVENT_UPDATE;

        /**
         * Decodes a S_EVENT_UPDATE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_EVENT_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_EVENT_UPDATE;

        /**
         * Verifies a S_EVENT_UPDATE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_EVENT_UPDATE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_EVENT_UPDATE
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_EVENT_UPDATE;

        /**
         * Creates a plain object from a S_EVENT_UPDATE message. Also converts values to other types if specified.
         * @param message S_EVENT_UPDATE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_EVENT_UPDATE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_EVENT_UPDATE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_UPDATE_ENTITYS. */
    interface IS_UPDATE_ENTITYS {

        /** S_UPDATE_ENTITYS cmd */
        cmd?: (number|null);

        /** S_UPDATE_ENTITYS scmd */
        scmd?: (number|null);

        /** S_UPDATE_ENTITYS entityCards */
        entityCards?: (GamePto.ICard[]|null);

        /** S_UPDATE_ENTITYS tipsList */
        tipsList?: (string[]|null);
    }

    /** Represents a S_UPDATE_ENTITYS. */
    class S_UPDATE_ENTITYS implements IS_UPDATE_ENTITYS {

        /**
         * Constructs a new S_UPDATE_ENTITYS.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_UPDATE_ENTITYS);

        /** S_UPDATE_ENTITYS cmd. */
        public cmd: number;

        /** S_UPDATE_ENTITYS scmd. */
        public scmd: number;

        /** S_UPDATE_ENTITYS entityCards. */
        public entityCards: GamePto.ICard[];

        /** S_UPDATE_ENTITYS tipsList. */
        public tipsList: string[];

        /**
         * Encodes the specified S_UPDATE_ENTITYS message. Does not implicitly {@link GamePto.S_UPDATE_ENTITYS.verify|verify} messages.
         * @param message S_UPDATE_ENTITYS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_UPDATE_ENTITYS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_UPDATE_ENTITYS message, length delimited. Does not implicitly {@link GamePto.S_UPDATE_ENTITYS.verify|verify} messages.
         * @param message S_UPDATE_ENTITYS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_UPDATE_ENTITYS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_UPDATE_ENTITYS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_UPDATE_ENTITYS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_UPDATE_ENTITYS;

        /**
         * Decodes a S_UPDATE_ENTITYS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_UPDATE_ENTITYS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_UPDATE_ENTITYS;

        /**
         * Verifies a S_UPDATE_ENTITYS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_UPDATE_ENTITYS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_UPDATE_ENTITYS
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_UPDATE_ENTITYS;

        /**
         * Creates a plain object from a S_UPDATE_ENTITYS message. Also converts values to other types if specified.
         * @param message S_UPDATE_ENTITYS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_UPDATE_ENTITYS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_UPDATE_ENTITYS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_COMMON_EFFECT. */
    interface IS_COMMON_EFFECT {

        /** S_COMMON_EFFECT cmd */
        cmd?: (number|null);

        /** S_COMMON_EFFECT scmd */
        scmd?: (number|null);

        /** S_COMMON_EFFECT effectId */
        effectId?: (number|null);

        /** S_COMMON_EFFECT dataArr */
        dataArr?: (number[]|null);
    }

    /** Represents a S_COMMON_EFFECT. */
    class S_COMMON_EFFECT implements IS_COMMON_EFFECT {

        /**
         * Constructs a new S_COMMON_EFFECT.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_COMMON_EFFECT);

        /** S_COMMON_EFFECT cmd. */
        public cmd: number;

        /** S_COMMON_EFFECT scmd. */
        public scmd: number;

        /** S_COMMON_EFFECT effectId. */
        public effectId: number;

        /** S_COMMON_EFFECT dataArr. */
        public dataArr: number[];

        /**
         * Encodes the specified S_COMMON_EFFECT message. Does not implicitly {@link GamePto.S_COMMON_EFFECT.verify|verify} messages.
         * @param message S_COMMON_EFFECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_COMMON_EFFECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_COMMON_EFFECT message, length delimited. Does not implicitly {@link GamePto.S_COMMON_EFFECT.verify|verify} messages.
         * @param message S_COMMON_EFFECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_COMMON_EFFECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_COMMON_EFFECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_COMMON_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_COMMON_EFFECT;

        /**
         * Decodes a S_COMMON_EFFECT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_COMMON_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_COMMON_EFFECT;

        /**
         * Verifies a S_COMMON_EFFECT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_COMMON_EFFECT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_COMMON_EFFECT
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_COMMON_EFFECT;

        /**
         * Creates a plain object from a S_COMMON_EFFECT message. Also converts values to other types if specified.
         * @param message S_COMMON_EFFECT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_COMMON_EFFECT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_COMMON_EFFECT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_FLY_EFFECT. */
    interface IS_FLY_EFFECT {

        /** S_FLY_EFFECT cmd */
        cmd?: (number|null);

        /** S_FLY_EFFECT scmd */
        scmd?: (number|null);

        /** S_FLY_EFFECT from */
        from?: (GamePto.ICard|null);

        /** S_FLY_EFFECT target */
        target?: (GamePto.ICard|null);

        /** S_FLY_EFFECT targetShowTips */
        targetShowTips?: (string|null);
    }

    /** Represents a S_FLY_EFFECT. */
    class S_FLY_EFFECT implements IS_FLY_EFFECT {

        /**
         * Constructs a new S_FLY_EFFECT.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_FLY_EFFECT);

        /** S_FLY_EFFECT cmd. */
        public cmd: number;

        /** S_FLY_EFFECT scmd. */
        public scmd: number;

        /** S_FLY_EFFECT from. */
        public from?: (GamePto.ICard|null);

        /** S_FLY_EFFECT target. */
        public target?: (GamePto.ICard|null);

        /** S_FLY_EFFECT targetShowTips. */
        public targetShowTips: string;

        /**
         * Encodes the specified S_FLY_EFFECT message. Does not implicitly {@link GamePto.S_FLY_EFFECT.verify|verify} messages.
         * @param message S_FLY_EFFECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_FLY_EFFECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_FLY_EFFECT message, length delimited. Does not implicitly {@link GamePto.S_FLY_EFFECT.verify|verify} messages.
         * @param message S_FLY_EFFECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_FLY_EFFECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_FLY_EFFECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FLY_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_FLY_EFFECT;

        /**
         * Decodes a S_FLY_EFFECT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_FLY_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_FLY_EFFECT;

        /**
         * Verifies a S_FLY_EFFECT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_FLY_EFFECT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_FLY_EFFECT
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_FLY_EFFECT;

        /**
         * Creates a plain object from a S_FLY_EFFECT message. Also converts values to other types if specified.
         * @param message S_FLY_EFFECT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_FLY_EFFECT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_FLY_EFFECT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_SELF_EFFECT. */
    interface IS_SELF_EFFECT {

        /** S_SELF_EFFECT cmd */
        cmd?: (number|null);

        /** S_SELF_EFFECT scmd */
        scmd?: (number|null);

        /** S_SELF_EFFECT x */
        x?: (number|null);

        /** S_SELF_EFFECT y */
        y?: (number|null);

        /** S_SELF_EFFECT card */
        card?: (GamePto.ICard|null);

        /** S_SELF_EFFECT affectedList */
        affectedList?: (GamePto.IAffectedCard[]|null);
    }

    /** Represents a S_SELF_EFFECT. */
    class S_SELF_EFFECT implements IS_SELF_EFFECT {

        /**
         * Constructs a new S_SELF_EFFECT.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_SELF_EFFECT);

        /** S_SELF_EFFECT cmd. */
        public cmd: number;

        /** S_SELF_EFFECT scmd. */
        public scmd: number;

        /** S_SELF_EFFECT x. */
        public x: number;

        /** S_SELF_EFFECT y. */
        public y: number;

        /** S_SELF_EFFECT card. */
        public card?: (GamePto.ICard|null);

        /** S_SELF_EFFECT affectedList. */
        public affectedList: GamePto.IAffectedCard[];

        /**
         * Encodes the specified S_SELF_EFFECT message. Does not implicitly {@link GamePto.S_SELF_EFFECT.verify|verify} messages.
         * @param message S_SELF_EFFECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_SELF_EFFECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_SELF_EFFECT message, length delimited. Does not implicitly {@link GamePto.S_SELF_EFFECT.verify|verify} messages.
         * @param message S_SELF_EFFECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_SELF_EFFECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_SELF_EFFECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SELF_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_SELF_EFFECT;

        /**
         * Decodes a S_SELF_EFFECT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_SELF_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_SELF_EFFECT;

        /**
         * Verifies a S_SELF_EFFECT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_SELF_EFFECT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_SELF_EFFECT
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_SELF_EFFECT;

        /**
         * Creates a plain object from a S_SELF_EFFECT message. Also converts values to other types if specified.
         * @param message S_SELF_EFFECT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_SELF_EFFECT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_SELF_EFFECT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_CARD_DENY. */
    interface IS_CARD_DENY {

        /** S_CARD_DENY cmd */
        cmd?: (number|null);

        /** S_CARD_DENY scmd */
        scmd?: (number|null);

        /** S_CARD_DENY from */
        from?: (GamePto.ICard|null);

        /** S_CARD_DENY target */
        target?: (GamePto.ICard|null);

        /** S_CARD_DENY targetCardIndex */
        targetCardIndex?: (number|null);
    }

    /** Represents a S_CARD_DENY. */
    class S_CARD_DENY implements IS_CARD_DENY {

        /**
         * Constructs a new S_CARD_DENY.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_CARD_DENY);

        /** S_CARD_DENY cmd. */
        public cmd: number;

        /** S_CARD_DENY scmd. */
        public scmd: number;

        /** S_CARD_DENY from. */
        public from?: (GamePto.ICard|null);

        /** S_CARD_DENY target. */
        public target?: (GamePto.ICard|null);

        /** S_CARD_DENY targetCardIndex. */
        public targetCardIndex: number;

        /**
         * Encodes the specified S_CARD_DENY message. Does not implicitly {@link GamePto.S_CARD_DENY.verify|verify} messages.
         * @param message S_CARD_DENY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_CARD_DENY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_CARD_DENY message, length delimited. Does not implicitly {@link GamePto.S_CARD_DENY.verify|verify} messages.
         * @param message S_CARD_DENY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_CARD_DENY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CARD_DENY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CARD_DENY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_CARD_DENY;

        /**
         * Decodes a S_CARD_DENY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CARD_DENY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_CARD_DENY;

        /**
         * Verifies a S_CARD_DENY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_CARD_DENY message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_CARD_DENY
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_CARD_DENY;

        /**
         * Creates a plain object from a S_CARD_DENY message. Also converts values to other types if specified.
         * @param message S_CARD_DENY
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_CARD_DENY, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_CARD_DENY to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GAME_OVER. */
    interface IS_GAME_OVER {

        /** S_GAME_OVER cmd */
        cmd?: (number|null);

        /** S_GAME_OVER scmd */
        scmd?: (number|null);

        /** S_GAME_OVER winnerUid */
        winnerUid?: (number|null);
    }

    /** Represents a S_GAME_OVER. */
    class S_GAME_OVER implements IS_GAME_OVER {

        /**
         * Constructs a new S_GAME_OVER.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_GAME_OVER);

        /** S_GAME_OVER cmd. */
        public cmd: number;

        /** S_GAME_OVER scmd. */
        public scmd: number;

        /** S_GAME_OVER winnerUid. */
        public winnerUid: number;

        /**
         * Encodes the specified S_GAME_OVER message. Does not implicitly {@link GamePto.S_GAME_OVER.verify|verify} messages.
         * @param message S_GAME_OVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_GAME_OVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GAME_OVER message, length delimited. Does not implicitly {@link GamePto.S_GAME_OVER.verify|verify} messages.
         * @param message S_GAME_OVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_GAME_OVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GAME_OVER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GAME_OVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_GAME_OVER;

        /**
         * Decodes a S_GAME_OVER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GAME_OVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_GAME_OVER;

        /**
         * Verifies a S_GAME_OVER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GAME_OVER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GAME_OVER
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_GAME_OVER;

        /**
         * Creates a plain object from a S_GAME_OVER message. Also converts values to other types if specified.
         * @param message S_GAME_OVER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_GAME_OVER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GAME_OVER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_RECONNECT. */
    interface IS_RECONNECT {

        /** S_RECONNECT cmd */
        cmd?: (number|null);

        /** S_RECONNECT scmd */
        scmd?: (number|null);

        /** S_RECONNECT mapData */
        mapData?: (GamePto.IMapData|null);

        /** S_RECONNECT selfCards */
        selfCards?: (GamePto.ICard[]|null);

        /** S_RECONNECT targetHandCardNum */
        targetHandCardNum?: (number|null);

        /** S_RECONNECT isFirst */
        isFirst?: (boolean|null);

        /** S_RECONNECT deadPool */
        deadPool?: (GamePto.ICard[]|null);

        /** S_RECONNECT targetDeadPoolNum */
        targetDeadPoolNum?: (number|null);

        /** S_RECONNECT roundEndTime */
        roundEndTime?: (number|null);

        /** S_RECONNECT isSelfRound */
        isSelfRound?: (boolean|null);

        /** S_RECONNECT users */
        users?: (GamePto.IUserDetail[]|null);
    }

    /** Represents a S_RECONNECT. */
    class S_RECONNECT implements IS_RECONNECT {

        /**
         * Constructs a new S_RECONNECT.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_RECONNECT);

        /** S_RECONNECT cmd. */
        public cmd: number;

        /** S_RECONNECT scmd. */
        public scmd: number;

        /** S_RECONNECT mapData. */
        public mapData?: (GamePto.IMapData|null);

        /** S_RECONNECT selfCards. */
        public selfCards: GamePto.ICard[];

        /** S_RECONNECT targetHandCardNum. */
        public targetHandCardNum: number;

        /** S_RECONNECT isFirst. */
        public isFirst: boolean;

        /** S_RECONNECT deadPool. */
        public deadPool: GamePto.ICard[];

        /** S_RECONNECT targetDeadPoolNum. */
        public targetDeadPoolNum: number;

        /** S_RECONNECT roundEndTime. */
        public roundEndTime: number;

        /** S_RECONNECT isSelfRound. */
        public isSelfRound: boolean;

        /** S_RECONNECT users. */
        public users: GamePto.IUserDetail[];

        /**
         * Encodes the specified S_RECONNECT message. Does not implicitly {@link GamePto.S_RECONNECT.verify|verify} messages.
         * @param message S_RECONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_RECONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_RECONNECT message, length delimited. Does not implicitly {@link GamePto.S_RECONNECT.verify|verify} messages.
         * @param message S_RECONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_RECONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RECONNECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_RECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_RECONNECT;

        /**
         * Decodes a S_RECONNECT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_RECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_RECONNECT;

        /**
         * Verifies a S_RECONNECT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_RECONNECT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_RECONNECT
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_RECONNECT;

        /**
         * Creates a plain object from a S_RECONNECT message. Also converts values to other types if specified.
         * @param message S_RECONNECT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_RECONNECT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_RECONNECT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_HANDCARDS_UPDATE. */
    interface IS_HANDCARDS_UPDATE {

        /** S_HANDCARDS_UPDATE cmd */
        cmd?: (number|null);

        /** S_HANDCARDS_UPDATE scmd */
        scmd?: (number|null);

        /** S_HANDCARDS_UPDATE uid */
        uid?: (number|null);

        /** S_HANDCARDS_UPDATE cards */
        cards?: (GamePto.ICard[]|null);
    }

    /** Represents a S_HANDCARDS_UPDATE. */
    class S_HANDCARDS_UPDATE implements IS_HANDCARDS_UPDATE {

        /**
         * Constructs a new S_HANDCARDS_UPDATE.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_HANDCARDS_UPDATE);

        /** S_HANDCARDS_UPDATE cmd. */
        public cmd: number;

        /** S_HANDCARDS_UPDATE scmd. */
        public scmd: number;

        /** S_HANDCARDS_UPDATE uid. */
        public uid: number;

        /** S_HANDCARDS_UPDATE cards. */
        public cards: GamePto.ICard[];

        /**
         * Encodes the specified S_HANDCARDS_UPDATE message. Does not implicitly {@link GamePto.S_HANDCARDS_UPDATE.verify|verify} messages.
         * @param message S_HANDCARDS_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_HANDCARDS_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_HANDCARDS_UPDATE message, length delimited. Does not implicitly {@link GamePto.S_HANDCARDS_UPDATE.verify|verify} messages.
         * @param message S_HANDCARDS_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_HANDCARDS_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_HANDCARDS_UPDATE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_HANDCARDS_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_HANDCARDS_UPDATE;

        /**
         * Decodes a S_HANDCARDS_UPDATE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_HANDCARDS_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_HANDCARDS_UPDATE;

        /**
         * Verifies a S_HANDCARDS_UPDATE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_HANDCARDS_UPDATE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_HANDCARDS_UPDATE
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_HANDCARDS_UPDATE;

        /**
         * Creates a plain object from a S_HANDCARDS_UPDATE message. Also converts values to other types if specified.
         * @param message S_HANDCARDS_UPDATE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_HANDCARDS_UPDATE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_HANDCARDS_UPDATE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ACTION_RECORD. */
    interface IS_ACTION_RECORD {

        /** S_ACTION_RECORD cmd */
        cmd?: (number|null);

        /** S_ACTION_RECORD scmd */
        scmd?: (number|null);

        /** S_ACTION_RECORD recordType */
        recordType?: (GamePto.RecordType|null);

        /** S_ACTION_RECORD source */
        source?: (GamePto.ICard|null);

        /** S_ACTION_RECORD affectedList */
        affectedList?: (GamePto.IAffectedCard[]|null);
    }

    /** Represents a S_ACTION_RECORD. */
    class S_ACTION_RECORD implements IS_ACTION_RECORD {

        /**
         * Constructs a new S_ACTION_RECORD.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_ACTION_RECORD);

        /** S_ACTION_RECORD cmd. */
        public cmd: number;

        /** S_ACTION_RECORD scmd. */
        public scmd: number;

        /** S_ACTION_RECORD recordType. */
        public recordType: GamePto.RecordType;

        /** S_ACTION_RECORD source. */
        public source?: (GamePto.ICard|null);

        /** S_ACTION_RECORD affectedList. */
        public affectedList: GamePto.IAffectedCard[];

        /**
         * Encodes the specified S_ACTION_RECORD message. Does not implicitly {@link GamePto.S_ACTION_RECORD.verify|verify} messages.
         * @param message S_ACTION_RECORD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_ACTION_RECORD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ACTION_RECORD message, length delimited. Does not implicitly {@link GamePto.S_ACTION_RECORD.verify|verify} messages.
         * @param message S_ACTION_RECORD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto.IS_ACTION_RECORD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ACTION_RECORD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ACTION_RECORD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto.S_ACTION_RECORD;

        /**
         * Decodes a S_ACTION_RECORD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ACTION_RECORD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto.S_ACTION_RECORD;

        /**
         * Verifies a S_ACTION_RECORD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ACTION_RECORD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ACTION_RECORD
         */
        public static fromObject(object: { [k: string]: any }): GamePto.S_ACTION_RECORD;

        /**
         * Creates a plain object from a S_ACTION_RECORD message. Also converts values to other types if specified.
         * @param message S_ACTION_RECORD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto.S_ACTION_RECORD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ACTION_RECORD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
    }

    /** Properties of a S_MATCH_DECK. */
    interface IS_MATCH_DECK {

        /** S_MATCH_DECK cmd */
        cmd?: (number|null);

        /** S_MATCH_DECK scmd */
        scmd?: (number|null);

        /** S_MATCH_DECK endTime */
        endTime?: (number|null);
    }

    /** Represents a S_MATCH_DECK. */
    class S_MATCH_DECK implements IS_MATCH_DECK {

        /**
         * Constructs a new S_MATCH_DECK.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_MATCH_DECK);

        /** S_MATCH_DECK cmd. */
        public cmd: number;

        /** S_MATCH_DECK scmd. */
        public scmd: number;

        /** S_MATCH_DECK endTime. */
        public endTime: number;

        /**
         * Encodes the specified S_MATCH_DECK message. Does not implicitly {@link FriendlyMatchPto.S_MATCH_DECK.verify|verify} messages.
         * @param message S_MATCH_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_MATCH_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_MATCH_DECK message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_MATCH_DECK.verify|verify} messages.
         * @param message S_MATCH_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_MATCH_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MATCH_DECK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MATCH_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_MATCH_DECK;

        /**
         * Decodes a S_MATCH_DECK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_MATCH_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_MATCH_DECK;

        /**
         * Verifies a S_MATCH_DECK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_MATCH_DECK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_MATCH_DECK
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_MATCH_DECK;

        /**
         * Creates a plain object from a S_MATCH_DECK message. Also converts values to other types if specified.
         * @param message S_MATCH_DECK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_MATCH_DECK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_MATCH_DECK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_DECK_CHOOSE. */
    interface IC_DECK_CHOOSE {

        /** C_DECK_CHOOSE cmd */
        cmd?: (number|null);

        /** C_DECK_CHOOSE scmd */
        scmd?: (number|null);

        /** C_DECK_CHOOSE deckId */
        deckId?: (number|null);
    }

    /** Represents a C_DECK_CHOOSE. */
    class C_DECK_CHOOSE implements IC_DECK_CHOOSE {

        /**
         * Constructs a new C_DECK_CHOOSE.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IC_DECK_CHOOSE);

        /** C_DECK_CHOOSE cmd. */
        public cmd: number;

        /** C_DECK_CHOOSE scmd. */
        public scmd: number;

        /** C_DECK_CHOOSE deckId. */
        public deckId: number;

        /**
         * Encodes the specified C_DECK_CHOOSE message. Does not implicitly {@link FriendlyMatchPto.C_DECK_CHOOSE.verify|verify} messages.
         * @param message C_DECK_CHOOSE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IC_DECK_CHOOSE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_DECK_CHOOSE message, length delimited. Does not implicitly {@link FriendlyMatchPto.C_DECK_CHOOSE.verify|verify} messages.
         * @param message C_DECK_CHOOSE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IC_DECK_CHOOSE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_DECK_CHOOSE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DECK_CHOOSE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_DECK_CHOOSE;

        /**
         * Decodes a C_DECK_CHOOSE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_DECK_CHOOSE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.C_DECK_CHOOSE;

        /**
         * Verifies a C_DECK_CHOOSE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_DECK_CHOOSE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_DECK_CHOOSE
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.C_DECK_CHOOSE;

        /**
         * Creates a plain object from a C_DECK_CHOOSE message. Also converts values to other types if specified.
         * @param message C_DECK_CHOOSE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.C_DECK_CHOOSE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_DECK_CHOOSE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_MATCH_CANCEL_DECK. */
    interface IC_MATCH_CANCEL_DECK {

        /** C_MATCH_CANCEL_DECK cmd */
        cmd?: (number|null);

        /** C_MATCH_CANCEL_DECK scmd */
        scmd?: (number|null);
    }

    /** Represents a C_MATCH_CANCEL_DECK. */
    class C_MATCH_CANCEL_DECK implements IC_MATCH_CANCEL_DECK {

        /**
         * Constructs a new C_MATCH_CANCEL_DECK.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IC_MATCH_CANCEL_DECK);

        /** C_MATCH_CANCEL_DECK cmd. */
        public cmd: number;

        /** C_MATCH_CANCEL_DECK scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_MATCH_CANCEL_DECK message. Does not implicitly {@link FriendlyMatchPto.C_MATCH_CANCEL_DECK.verify|verify} messages.
         * @param message C_MATCH_CANCEL_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IC_MATCH_CANCEL_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_MATCH_CANCEL_DECK message, length delimited. Does not implicitly {@link FriendlyMatchPto.C_MATCH_CANCEL_DECK.verify|verify} messages.
         * @param message C_MATCH_CANCEL_DECK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IC_MATCH_CANCEL_DECK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_MATCH_CANCEL_DECK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_MATCH_CANCEL_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_MATCH_CANCEL_DECK;

        /**
         * Decodes a C_MATCH_CANCEL_DECK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_MATCH_CANCEL_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.C_MATCH_CANCEL_DECK;

        /**
         * Verifies a C_MATCH_CANCEL_DECK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_MATCH_CANCEL_DECK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_MATCH_CANCEL_DECK
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.C_MATCH_CANCEL_DECK;

        /**
         * Creates a plain object from a C_MATCH_CANCEL_DECK message. Also converts values to other types if specified.
         * @param message C_MATCH_CANCEL_DECK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.C_MATCH_CANCEL_DECK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_MATCH_CANCEL_DECK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
    }

    /** Properties of a S_FRIEND_DECK_STATUS_CHANGE. */
    interface IS_FRIEND_DECK_STATUS_CHANGE {

        /** S_FRIEND_DECK_STATUS_CHANGE cmd */
        cmd?: (number|null);

        /** S_FRIEND_DECK_STATUS_CHANGE scmd */
        scmd?: (number|null);

        /** S_FRIEND_DECK_STATUS_CHANGE isChoose */
        isChoose?: (boolean|null);
    }

    /** Represents a S_FRIEND_DECK_STATUS_CHANGE. */
    class S_FRIEND_DECK_STATUS_CHANGE implements IS_FRIEND_DECK_STATUS_CHANGE {

        /**
         * Constructs a new S_FRIEND_DECK_STATUS_CHANGE.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_FRIEND_DECK_STATUS_CHANGE);

        /** S_FRIEND_DECK_STATUS_CHANGE cmd. */
        public cmd: number;

        /** S_FRIEND_DECK_STATUS_CHANGE scmd. */
        public scmd: number;

        /** S_FRIEND_DECK_STATUS_CHANGE isChoose. */
        public isChoose: boolean;

        /**
         * Encodes the specified S_FRIEND_DECK_STATUS_CHANGE message. Does not implicitly {@link FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE.verify|verify} messages.
         * @param message S_FRIEND_DECK_STATUS_CHANGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_FRIEND_DECK_STATUS_CHANGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_FRIEND_DECK_STATUS_CHANGE message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE.verify|verify} messages.
         * @param message S_FRIEND_DECK_STATUS_CHANGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_FRIEND_DECK_STATUS_CHANGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_FRIEND_DECK_STATUS_CHANGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FRIEND_DECK_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE;

        /**
         * Decodes a S_FRIEND_DECK_STATUS_CHANGE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_FRIEND_DECK_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE;

        /**
         * Verifies a S_FRIEND_DECK_STATUS_CHANGE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_FRIEND_DECK_STATUS_CHANGE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_FRIEND_DECK_STATUS_CHANGE
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE;

        /**
         * Creates a plain object from a S_FRIEND_DECK_STATUS_CHANGE message. Also converts values to other types if specified.
         * @param message S_FRIEND_DECK_STATUS_CHANGE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_FRIEND_DECK_STATUS_CHANGE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_DECK_CHOOSE_RESULT. */
    interface IS_DECK_CHOOSE_RESULT {

        /** S_DECK_CHOOSE_RESULT cmd */
        cmd?: (number|null);

        /** S_DECK_CHOOSE_RESULT scmd */
        scmd?: (number|null);

        /** S_DECK_CHOOSE_RESULT code */
        code?: (number|null);
    }

    /** Represents a S_DECK_CHOOSE_RESULT. */
    class S_DECK_CHOOSE_RESULT implements IS_DECK_CHOOSE_RESULT {

        /**
         * Constructs a new S_DECK_CHOOSE_RESULT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendlyMatchPto.IS_DECK_CHOOSE_RESULT);

        /** S_DECK_CHOOSE_RESULT cmd. */
        public cmd: number;

        /** S_DECK_CHOOSE_RESULT scmd. */
        public scmd: number;

        /** S_DECK_CHOOSE_RESULT code. */
        public code: number;

        /**
         * Encodes the specified S_DECK_CHOOSE_RESULT message. Does not implicitly {@link FriendlyMatchPto.S_DECK_CHOOSE_RESULT.verify|verify} messages.
         * @param message S_DECK_CHOOSE_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_DECK_CHOOSE_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_DECK_CHOOSE_RESULT message, length delimited. Does not implicitly {@link FriendlyMatchPto.S_DECK_CHOOSE_RESULT.verify|verify} messages.
         * @param message S_DECK_CHOOSE_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendlyMatchPto.IS_DECK_CHOOSE_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DECK_CHOOSE_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DECK_CHOOSE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_DECK_CHOOSE_RESULT;

        /**
         * Decodes a S_DECK_CHOOSE_RESULT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_DECK_CHOOSE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendlyMatchPto.S_DECK_CHOOSE_RESULT;

        /**
         * Verifies a S_DECK_CHOOSE_RESULT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_DECK_CHOOSE_RESULT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_DECK_CHOOSE_RESULT
         */
        public static fromObject(object: { [k: string]: any }): FriendlyMatchPto.S_DECK_CHOOSE_RESULT;

        /**
         * Creates a plain object from a S_DECK_CHOOSE_RESULT message. Also converts values to other types if specified.
         * @param message S_DECK_CHOOSE_RESULT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendlyMatchPto.S_DECK_CHOOSE_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_DECK_CHOOSE_RESULT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
