type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace ChatPto. */
declare namespace ChatPto {

    /** Properties of a C_. */
    interface IC_ {

        /** C_ cmd */
        cmd?: (number|null);

        /** C_ scmd */
        scmd?: (number|null);
    }

    /** Represents a C_. */
    class C_ implements IC_ {

        /**
         * Constructs a new C_.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatPto.IC_);

        /** C_ cmd. */
        public cmd: number;

        /** C_ scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_ message. Does not implicitly {@link ChatPto.C_.verify|verify} messages.
         * @param message C_ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatPto.IC_, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ChatPto.C_;

        /**
         * Gets the default type url for C_
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace FriendPto. */
declare namespace FriendPto {

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
        public static encode(message: FriendPto.IC_FRIEND_INFO, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_FRIEND_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendPto.C_FRIEND_INFO;

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

        /**
         * Encodes the specified S_FRIEND_INFO message. Does not implicitly {@link FriendPto.S_FRIEND_INFO.verify|verify} messages.
         * @param message S_FRIEND_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_FRIEND_INFO, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_FRIEND_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendPto.S_FRIEND_INFO;

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
        public static encode(message: FriendPto.IC_ADD_FRIEND, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_ADD_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendPto.C_ADD_FRIEND;

        /**
         * Gets the default type url for C_ADD_FRIEND
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_ADD_FRIEND_RESULT. */
    interface IS_ADD_FRIEND_RESULT {

        /** S_ADD_FRIEND_RESULT cmd */
        cmd?: (number|null);

        /** S_ADD_FRIEND_RESULT scmd */
        scmd?: (number|null);

        /** S_ADD_FRIEND_RESULT isSuccess */
        isSuccess?: (boolean|null);

        /** S_ADD_FRIEND_RESULT friend */
        friend?: (FriendPto.IFriend|null);
    }

    /** Represents a S_ADD_FRIEND_RESULT. */
    class S_ADD_FRIEND_RESULT implements IS_ADD_FRIEND_RESULT {

        /**
         * Constructs a new S_ADD_FRIEND_RESULT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_ADD_FRIEND_RESULT);

        /** S_ADD_FRIEND_RESULT cmd. */
        public cmd: number;

        /** S_ADD_FRIEND_RESULT scmd. */
        public scmd: number;

        /** S_ADD_FRIEND_RESULT isSuccess. */
        public isSuccess: boolean;

        /** S_ADD_FRIEND_RESULT friend. */
        public friend?: (FriendPto.IFriend|null);

        /**
         * Encodes the specified S_ADD_FRIEND_RESULT message. Does not implicitly {@link FriendPto.S_ADD_FRIEND_RESULT.verify|verify} messages.
         * @param message S_ADD_FRIEND_RESULT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_ADD_FRIEND_RESULT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ADD_FRIEND_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ADD_FRIEND_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendPto.S_ADD_FRIEND_RESULT;

        /**
         * Gets the default type url for S_ADD_FRIEND_RESULT
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

        /** S_ADD_FRIEND nick */
        nick?: (string|null);

        /** S_ADD_FRIEND uid */
        uid?: (number|null);
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

        /** S_ADD_FRIEND nick. */
        public nick: string;

        /** S_ADD_FRIEND uid. */
        public uid: number;

        /**
         * Encodes the specified S_ADD_FRIEND message. Does not implicitly {@link FriendPto.S_ADD_FRIEND.verify|verify} messages.
         * @param message S_ADD_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_ADD_FRIEND, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ADD_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendPto.S_ADD_FRIEND;

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

        /**
         * Encodes the specified Friend message. Does not implicitly {@link FriendPto.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IFriend, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendPto.Friend;

        /**
         * Gets the default type url for Friend
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace LoginPto. */
declare namespace LoginPto {

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
        public static encode(message: LoginPto.IC_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): LoginPto.C_LOGIN;

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
        public static encode(message: LoginPto.IS_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): LoginPto.S_LOGIN;

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
        public static encode(message: LoginPto.IC_REGISTER, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_REGISTER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): LoginPto.C_REGISTER;

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
        public static encode(message: LoginPto.IS_REGISTER, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_REGISTER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): LoginPto.S_REGISTER;

        /**
         * Gets the default type url for S_REGISTER
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace SystemPto. */
declare namespace SystemPto {

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
        public static encode(message: SystemPto.IS_TIPS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_TIPS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_TIPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): SystemPto.S_TIPS;

        /**
         * Gets the default type url for S_TIPS
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
