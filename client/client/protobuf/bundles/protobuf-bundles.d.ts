type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace CardsPto. */
declare namespace CardsPto {

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
        public static encode(message: CardsPto.ICard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.Card;

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
        public static encode(message: CardsPto.ICardGroup, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.CardGroup;

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
        public static encode(message: CardsPto.IC_REQ_CARDS_INFO, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_REQ_CARDS_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REQ_CARDS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.C_REQ_CARDS_INFO;

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
        public static encode(message: CardsPto.IS_CARDS_INFO, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_CARDS_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CARDS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.S_CARDS_INFO;

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
        public static encode(message: CardsPto.IC_MAKE_CARD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_MAKE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_MAKE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.C_MAKE_CARD;

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
        public static encode(message: CardsPto.IS_MAKE_CARD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_MAKE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MAKE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.S_MAKE_CARD;

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
        public static encode(message: CardsPto.IC_DISASSEMBLE_CARD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_DISASSEMBLE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DISASSEMBLE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.C_DISASSEMBLE_CARD;

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
        public static encode(message: CardsPto.IS_DISASSEMBLE_CARD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_DISASSEMBLE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DISASSEMBLE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.S_DISASSEMBLE_CARD;

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
        public static encode(message: CardsPto.IC_SAVE_CARDS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_SAVE_CARDS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SAVE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.C_SAVE_CARDS;

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
        public static encode(message: CardsPto.IS_SAVE_CARDS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_SAVE_CARDS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SAVE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.S_SAVE_CARDS;

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
        public static encode(message: CardsPto.IC_DELETE_CARD_GROUP, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_DELETE_CARD_GROUP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DELETE_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.C_DELETE_CARD_GROUP;

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
        public static encode(message: CardsPto.IS_DELETE_CARD_GROUP, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_DELETE_CARD_GROUP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DELETE_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardsPto.S_DELETE_CARD_GROUP;

        /**
         * Gets the default type url for S_DELETE_CARD_GROUP
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace ChatPto. */
declare namespace ChatPto {

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
        public static encode(message: ChatPto.IC_SEND_MESSAGE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_SEND_MESSAGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SEND_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ChatPto.C_SEND_MESSAGE;

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
        public static encode(message: ChatPto.IS_CHAT_MESSAGE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_CHAT_MESSAGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CHAT_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ChatPto.S_CHAT_MESSAGE;

        /**
         * Gets the default type url for S_CHAT_MESSAGE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace FriendPto. */
declare namespace FriendPto {

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
        public static encode(message: FriendPto.IS_ADD_FRIEND_REQ, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ADD_FRIEND_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ADD_FRIEND_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendPto.S_ADD_FRIEND_REQ;

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
        public static encode(message: FriendPto.IC_ADD_FRIEND_REQ_RESULT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_ADD_FRIEND_REQ_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ADD_FRIEND_REQ_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendPto.C_ADD_FRIEND_REQ_RESULT;

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
        public static encode(message: FriendPto.IS_FRIEND_CHANGE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_FRIEND_CHANGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FRIEND_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendPto.S_FRIEND_CHANGE;

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

/** Namespace FriendlyMatchPto. */
declare namespace FriendlyMatchPto {

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
        public static encode(message: FriendlyMatchPto.IC_REQ_MATCH, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_REQ_MATCH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_REQ_MATCH;

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
        endTime?: (number|Long|null);
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
        public endTime: (number|Long);

        /**
         * Encodes the specified S_REQ_MATCH message. Does not implicitly {@link FriendlyMatchPto.S_REQ_MATCH.verify|verify} messages.
         * @param message S_REQ_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_REQ_MATCH, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_REQ_MATCH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_REQ_MATCH;

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
        public static encode(message: FriendlyMatchPto.IC_CANCEL_REQ_MATCH, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_CANCEL_REQ_MATCH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CANCEL_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_CANCEL_REQ_MATCH;

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
        public static encode(message: FriendlyMatchPto.IS_REQ_MATCH_RESULT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_REQ_MATCH_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_REQ_MATCH_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_REQ_MATCH_RESULT;

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
        endTime?: (number|Long|null);
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
        public endTime: (number|Long);

        /**
         * Encodes the specified S_MATCH message. Does not implicitly {@link FriendlyMatchPto.S_MATCH.verify|verify} messages.
         * @param message S_MATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_MATCH, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_MATCH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_MATCH;

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
        public static encode(message: FriendlyMatchPto.IC_REQ_MATCH_RESULT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_REQ_MATCH_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REQ_MATCH_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_REQ_MATCH_RESULT;

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
        endTime?: (number|Long|null);
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
        public endTime: (number|Long);

        /**
         * Encodes the specified S_MATCH_CARD_GROUP message. Does not implicitly {@link FriendlyMatchPto.S_MATCH_CARD_GROUP.verify|verify} messages.
         * @param message S_MATCH_CARD_GROUP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendlyMatchPto.IS_MATCH_CARD_GROUP, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_MATCH_CARD_GROUP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MATCH_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_MATCH_CARD_GROUP;

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
        public static encode(message: FriendlyMatchPto.IC_GROUP_CHOOSE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_GROUP_CHOOSE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GROUP_CHOOSE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_GROUP_CHOOSE;

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
        public static encode(message: FriendlyMatchPto.IC_MATCH_CANCEL_GROUP, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_MATCH_CANCEL_GROUP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_MATCH_CANCEL_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_MATCH_CANCEL_GROUP;

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
        public static encode(message: FriendlyMatchPto.IC_MATCH_LEAVE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_MATCH_LEAVE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_MATCH_LEAVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.C_MATCH_LEAVE;

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
        public static encode(message: FriendlyMatchPto.IS_MATCH_STOP, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_MATCH_STOP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MATCH_STOP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_MATCH_STOP;

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
        public static encode(message: FriendlyMatchPto.IS_FRIEND_GROUP_STATUS_CHANGE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_FRIEND_GROUP_STATUS_CHANGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FRIEND_GROUP_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE;

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
        public static encode(message: FriendlyMatchPto.IS_GROUP_CHOOSE_RESULT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_GROUP_CHOOSE_RESULT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GROUP_CHOOSE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): FriendlyMatchPto.S_GROUP_CHOOSE_RESULT;

        /**
         * Gets the default type url for S_GROUP_CHOOSE_RESULT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace GamePto. */
declare namespace GamePto {

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
        public static encode(message: GamePto.IC_PREPARE_TO_START, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_PREPARE_TO_START message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_PREPARE_TO_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.C_PREPARE_TO_START;

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
        public static encode(message: GamePto.IS_SERVER_ERROR, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_SERVER_ERROR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SERVER_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_SERVER_ERROR;

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

        /** S_INIT_GAME targetNick */
        targetNick?: (string|null);

        /** S_INIT_GAME targetPower */
        targetPower?: (number|null);
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

        /** S_INIT_GAME targetNick. */
        public targetNick: string;

        /** S_INIT_GAME targetPower. */
        public targetPower: number;

        /**
         * Encodes the specified S_INIT_GAME message. Does not implicitly {@link GamePto.S_INIT_GAME.verify|verify} messages.
         * @param message S_INIT_GAME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_INIT_GAME, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_INIT_GAME message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_INIT_GAME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_INIT_GAME;

        /**
         * Gets the default type url for S_INIT_GAME
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_START_HAND_CARD. */
    interface IS_START_HAND_CARD {

        /** S_START_HAND_CARD cmd */
        cmd?: (number|null);

        /** S_START_HAND_CARD scmd */
        scmd?: (number|null);

        /** S_START_HAND_CARD isFirst */
        isFirst?: (boolean|null);

        /** S_START_HAND_CARD handCards */
        handCards?: (number[]|null);
    }

    /** Represents a S_START_HAND_CARD. */
    class S_START_HAND_CARD implements IS_START_HAND_CARD {

        /**
         * Constructs a new S_START_HAND_CARD.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_START_HAND_CARD);

        /** S_START_HAND_CARD cmd. */
        public cmd: number;

        /** S_START_HAND_CARD scmd. */
        public scmd: number;

        /** S_START_HAND_CARD isFirst. */
        public isFirst: boolean;

        /** S_START_HAND_CARD handCards. */
        public handCards: number[];

        /**
         * Encodes the specified S_START_HAND_CARD message. Does not implicitly {@link GamePto.S_START_HAND_CARD.verify|verify} messages.
         * @param message S_START_HAND_CARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_START_HAND_CARD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_START_HAND_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_START_HAND_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_START_HAND_CARD;

        /**
         * Gets the default type url for S_START_HAND_CARD
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
