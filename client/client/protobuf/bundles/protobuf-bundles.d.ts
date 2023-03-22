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
        FriendlyUnit = 1,
        FriendlyBuilding = 2,
        EnemyUnit = 3,
        EnemyBuilding = 4,
        AllUnit = 5,
        AllBuilding = 6,
        FriendEntity = 7,
        EnemyEntity = 8,
        AllEntity = 9,
        EmptyBlock = 10
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
        public static encode(message: GamePto.IUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.UserInfo;

        /**
         * Gets the default type url for UserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /** Card health */
        health?: (number|null);

        /** Card fee */
        fee?: (number|null);

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

        /** Card buffArr */
        buffArr?: (number[]|null);
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

        /** Card health. */
        public health: number;

        /** Card fee. */
        public fee: number;

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

        /** Card buffArr. */
        public buffArr: number[];

        /**
         * Encodes the specified Card message. Does not implicitly {@link GamePto.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.ICard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.Card;

        /**
         * Gets the default type url for Card
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IMapData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MapData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MapData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.MapData;

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
        public static encode(message: GamePto.IC_END_ROUND, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_END_ROUND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_END_ROUND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.C_END_ROUND;

        /**
         * Gets the default type url for C_END_ROUND
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IC_DISCARD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_DISCARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DISCARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.C_DISCARD;

        /**
         * Gets the default type url for C_DISCARD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IC_USE_CARD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_USE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_USE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.C_USE_CARD;

        /**
         * Gets the default type url for C_USE_CARD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IC_MOVE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_MOVE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.C_MOVE;

        /**
         * Gets the default type url for C_MOVE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IC_ATTACK, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_ATTACK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ATTACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.C_ATTACK;

        /**
         * Gets the default type url for C_ATTACK
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
        replaceEndTime?: (number|Long|null);
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
        public replaceEndTime: (number|Long);

        /**
         * Encodes the specified S_GAME_START message. Does not implicitly {@link GamePto.S_GAME_START.verify|verify} messages.
         * @param message S_GAME_START message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_GAME_START, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_GAME_START message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GAME_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_GAME_START;

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
        public static encode(message: GamePto.IS_REPLACE_CARDS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_REPLACE_CARDS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_REPLACE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_REPLACE_CARDS;

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
        public static encode(message: GamePto.IS_ROUND_START_EVENT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ROUND_START_EVENT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROUND_START_EVENT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_ROUND_START_EVENT;

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
        public static encode(message: GamePto.IS_ROUND_END_EVENT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ROUND_END_EVENT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROUND_END_EVENT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_ROUND_END_EVENT;

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
        public static encode(message: GamePto.IS_DRAW_CARDS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_DRAW_CARDS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DRAW_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_DRAW_CARDS;

        /**
         * Gets the default type url for S_DRAW_CARDS
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IS_FEE_INFO, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_FEE_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FEE_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_FEE_INFO;

        /**
         * Gets the default type url for S_FEE_INFO
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /** S_DISCARD fee */
        fee?: (number|null);

        /** S_DISCARD feeMax */
        feeMax?: (number|null);

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

        /** S_DISCARD fee. */
        public fee: number;

        /** S_DISCARD feeMax. */
        public feeMax: number;

        /** S_DISCARD uid. */
        public uid: number;

        /**
         * Encodes the specified S_DISCARD message. Does not implicitly {@link GamePto.S_DISCARD.verify|verify} messages.
         * @param message S_DISCARD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_DISCARD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_DISCARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DISCARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_DISCARD;

        /**
         * Gets the default type url for S_DISCARD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_USE_CARD. */
    interface IS_USE_CARD {

        /** S_USE_CARD cmd */
        cmd?: (number|null);

        /** S_USE_CARD scmd */
        scmd?: (number|null);

        /** S_USE_CARD isSuccess */
        isSuccess?: (boolean|null);

        /** S_USE_CARD fee */
        fee?: (number|null);

        /** S_USE_CARD feeMax */
        feeMax?: (number|null);

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

        /** S_USE_CARD fee. */
        public fee: number;

        /** S_USE_CARD feeMax. */
        public feeMax: number;

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
        public static encode(message: GamePto.IS_USE_CARD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_USE_CARD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_USE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_USE_CARD;

        /**
         * Gets the default type url for S_USE_CARD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_ROUND_END_TIME. */
    interface IS_ROUND_END_TIME {

        /** S_ROUND_END_TIME cmd */
        cmd?: (number|null);

        /** S_ROUND_END_TIME scmd */
        scmd?: (number|null);

        /** S_ROUND_END_TIME endTime */
        endTime?: (number|Long|null);

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

        /** S_ROUND_END_TIME endTime. */
        public endTime: (number|Long);

        /** S_ROUND_END_TIME uid. */
        public uid: number;

        /**
         * Encodes the specified S_ROUND_END_TIME message. Does not implicitly {@link GamePto.S_ROUND_END_TIME.verify|verify} messages.
         * @param message S_ROUND_END_TIME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_ROUND_END_TIME, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ROUND_END_TIME message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROUND_END_TIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_ROUND_END_TIME;

        /**
         * Gets the default type url for S_ROUND_END_TIME
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IS_MAP_DATA, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_MAP_DATA message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MAP_DATA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_MAP_DATA;

        /**
         * Gets the default type url for S_MAP_DATA
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IS_MOVE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_MOVE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_MOVE;

        /**
         * Gets the default type url for S_MOVE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_ATTACK. */
    interface IS_ATTACK {

        /** S_ATTACK cmd */
        cmd?: (number|null);

        /** S_ATTACK scmd */
        scmd?: (number|null);

        /** S_ATTACK sourceX */
        sourceX?: (number|null);

        /** S_ATTACK sourceY */
        sourceY?: (number|null);

        /** S_ATTACK sourceId */
        sourceId?: (number|null);

        /** S_ATTACK targetX */
        targetX?: (number|null);

        /** S_ATTACK targetY */
        targetY?: (number|null);

        /** S_ATTACK targetId */
        targetId?: (number|null);

        /** S_ATTACK damage */
        damage?: (number|null);

        /** S_ATTACK targetHealth */
        targetHealth?: (number|null);

        /** S_ATTACK allowAtk */
        allowAtk?: (boolean|null);

        /** S_ATTACK uid */
        uid?: (number|null);

        /** S_ATTACK dices */
        dices?: (number[]|null);
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

        /** S_ATTACK sourceX. */
        public sourceX: number;

        /** S_ATTACK sourceY. */
        public sourceY: number;

        /** S_ATTACK sourceId. */
        public sourceId: number;

        /** S_ATTACK targetX. */
        public targetX: number;

        /** S_ATTACK targetY. */
        public targetY: number;

        /** S_ATTACK targetId. */
        public targetId: number;

        /** S_ATTACK damage. */
        public damage: number;

        /** S_ATTACK targetHealth. */
        public targetHealth: number;

        /** S_ATTACK allowAtk. */
        public allowAtk: boolean;

        /** S_ATTACK uid. */
        public uid: number;

        /** S_ATTACK dices. */
        public dices: number[];

        /**
         * Encodes the specified S_ATTACK message. Does not implicitly {@link GamePto.S_ATTACK.verify|verify} messages.
         * @param message S_ATTACK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_ATTACK, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ATTACK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ATTACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_ATTACK;

        /**
         * Gets the default type url for S_ATTACK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IS_ENTITY_DEAD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ENTITY_DEAD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ENTITY_DEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_ENTITY_DEAD;

        /**
         * Gets the default type url for S_ENTITY_DEAD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_EVENT_FINISH. */
    interface IS_EVENT_FINISH {

        /** S_EVENT_FINISH cmd */
        cmd?: (number|null);

        /** S_EVENT_FINISH scmd */
        scmd?: (number|null);

        /** S_EVENT_FINISH card */
        card?: (GamePto.ICard|null);
    }

    /** Represents a S_EVENT_FINISH. */
    class S_EVENT_FINISH implements IS_EVENT_FINISH {

        /**
         * Constructs a new S_EVENT_FINISH.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto.IS_EVENT_FINISH);

        /** S_EVENT_FINISH cmd. */
        public cmd: number;

        /** S_EVENT_FINISH scmd. */
        public scmd: number;

        /** S_EVENT_FINISH card. */
        public card?: (GamePto.ICard|null);

        /**
         * Encodes the specified S_EVENT_FINISH message. Does not implicitly {@link GamePto.S_EVENT_FINISH.verify|verify} messages.
         * @param message S_EVENT_FINISH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_EVENT_FINISH, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_EVENT_FINISH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_EVENT_FINISH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_EVENT_FINISH;

        /**
         * Gets the default type url for S_EVENT_FINISH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S_UPDATE_ENTITYS. */
    interface IS_UPDATE_ENTITYS {

        /** S_UPDATE_ENTITYS cmd */
        cmd?: (number|null);

        /** S_UPDATE_ENTITYS scmd */
        scmd?: (number|null);

        /** S_UPDATE_ENTITYS entityCards */
        entityCards?: (GamePto.ICard[]|null);
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

        /**
         * Encodes the specified S_UPDATE_ENTITYS message. Does not implicitly {@link GamePto.S_UPDATE_ENTITYS.verify|verify} messages.
         * @param message S_UPDATE_ENTITYS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_UPDATE_ENTITYS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_UPDATE_ENTITYS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_UPDATE_ENTITYS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_UPDATE_ENTITYS;

        /**
         * Gets the default type url for S_UPDATE_ENTITYS
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IS_COMMON_EFFECT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_COMMON_EFFECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_COMMON_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_COMMON_EFFECT;

        /**
         * Gets the default type url for S_COMMON_EFFECT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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
        public static encode(message: GamePto.IS_FLY_EFFECT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_FLY_EFFECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FLY_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_FLY_EFFECT;

        /**
         * Gets the default type url for S_FLY_EFFECT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /**
         * Encodes the specified S_SELF_EFFECT message. Does not implicitly {@link GamePto.S_SELF_EFFECT.verify|verify} messages.
         * @param message S_SELF_EFFECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_SELF_EFFECT, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_SELF_EFFECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SELF_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_SELF_EFFECT;

        /**
         * Gets the default type url for S_SELF_EFFECT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /** S_CARD_DENY fee */
        fee?: (number|null);

        /** S_CARD_DENY feeMax */
        feeMax?: (number|null);
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

        /** S_CARD_DENY fee. */
        public fee: number;

        /** S_CARD_DENY feeMax. */
        public feeMax: number;

        /**
         * Encodes the specified S_CARD_DENY message. Does not implicitly {@link GamePto.S_CARD_DENY.verify|verify} messages.
         * @param message S_CARD_DENY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto.IS_CARD_DENY, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_CARD_DENY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CARD_DENY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto.S_CARD_DENY;

        /**
         * Gets the default type url for S_CARD_DENY
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
