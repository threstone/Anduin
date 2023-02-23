var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.CardsPto = (function() {

    /**
     * Namespace CardsPto.
     * @exports CardsPto
     * @namespace
     */
    var CardsPto = {};

    /**
     * PowerType enum.
     * @name CardsPto.PowerType
     * @enum {number}
     * @property {number} Common=0 Common value
     * @property {number} ShengTang=1 ShengTang value
     * @property {number} WangLing=2 WangLing value
     * @property {number} YouMu=3 YouMu value
     * @property {number} ZiRan=4 ZiRan value
     * @property {number} BiLei=5 BiLei value
     * @property {number} XueYuan=6 XueYuan value
     */
    CardsPto.PowerType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Common"] = 0;
        values[valuesById[1] = "ShengTang"] = 1;
        values[valuesById[2] = "WangLing"] = 2;
        values[valuesById[3] = "YouMu"] = 3;
        values[valuesById[4] = "ZiRan"] = 4;
        values[valuesById[5] = "BiLei"] = 5;
        values[valuesById[6] = "XueYuan"] = 6;
        return values;
    })();

    /**
     * QualityType enum.
     * @name CardsPto.QualityType
     * @enum {number}
     * @property {number} Normal=0 Normal value
     * @property {number} Rare=1 Rare value
     * @property {number} Precious=2 Precious value
     * @property {number} Premium=3 Premium value
     */
    CardsPto.QualityType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Normal"] = 0;
        values[valuesById[1] = "Rare"] = 1;
        values[valuesById[2] = "Precious"] = 2;
        values[valuesById[3] = "Premium"] = 3;
        return values;
    })();

    /**
     * CardType enum.
     * @name CardsPto.CardType
     * @enum {number}
     * @property {number} Hero=0 Hero value
     * @property {number} Unit=1 Unit value
     * @property {number} Magic=2 Magic value
     * @property {number} Building=3 Building value
     * @property {number} Event=4 Event value
     */
    CardsPto.CardType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Hero"] = 0;
        values[valuesById[1] = "Unit"] = 1;
        values[valuesById[2] = "Magic"] = 2;
        values[valuesById[3] = "Building"] = 3;
        values[valuesById[4] = "Event"] = 4;
        return values;
    })();

    /**
     * AtkType enum.
     * @name CardsPto.AtkType
     * @enum {number}
     * @property {number} CloseRange=0 CloseRange value
     * @property {number} LongRange=1 LongRange value
     */
    CardsPto.AtkType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CloseRange"] = 0;
        values[valuesById[1] = "LongRange"] = 1;
        return values;
    })();

    CardsPto.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof CardsPto
         * @interface ICard
         * @property {number|null} [id] Card id
         * @property {number|null} [count] Card count
         */

        /**
         * Constructs a new Card.
         * @memberof CardsPto
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {CardsPto.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card id.
         * @member {number} id
         * @memberof CardsPto.Card
         * @instance
         */
        Card.prototype.id = 0;

        /**
         * Card count.
         * @member {number} count
         * @memberof CardsPto.Card
         * @instance
         */
        Card.prototype.count = 0;

        /**
         * Encodes the specified Card message. Does not implicitly {@link CardsPto.Card.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.Card
         * @static
         * @param {CardsPto.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
            return writer;
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.Card();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.int32();
                        break;
                    }
                case 1: {
                        message.count = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Card
         * @function getTypeUrl
         * @memberof CardsPto.Card
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Card.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.Card";
        };

        return Card;
    })();

    CardsPto.CardGroup = (function() {

        /**
         * Properties of a CardGroup.
         * @memberof CardsPto
         * @interface ICardGroup
         * @property {number|null} [groupId] CardGroup groupId
         * @property {Array.<CardsPto.ICard>|null} [cards] CardGroup cards
         * @property {string|null} [groupName] CardGroup groupName
         * @property {CardsPto.PowerType|null} [powerId] CardGroup powerId
         * @property {boolean|null} [accessToUse] CardGroup accessToUse
         */

        /**
         * Constructs a new CardGroup.
         * @memberof CardsPto
         * @classdesc Represents a CardGroup.
         * @implements ICardGroup
         * @constructor
         * @param {CardsPto.ICardGroup=} [properties] Properties to set
         */
        function CardGroup(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardGroup groupId.
         * @member {number} groupId
         * @memberof CardsPto.CardGroup
         * @instance
         */
        CardGroup.prototype.groupId = 0;

        /**
         * CardGroup cards.
         * @member {Array.<CardsPto.ICard>} cards
         * @memberof CardsPto.CardGroup
         * @instance
         */
        CardGroup.prototype.cards = $util.emptyArray;

        /**
         * CardGroup groupName.
         * @member {string} groupName
         * @memberof CardsPto.CardGroup
         * @instance
         */
        CardGroup.prototype.groupName = "";

        /**
         * CardGroup powerId.
         * @member {CardsPto.PowerType} powerId
         * @memberof CardsPto.CardGroup
         * @instance
         */
        CardGroup.prototype.powerId = 0;

        /**
         * CardGroup accessToUse.
         * @member {boolean} accessToUse
         * @memberof CardsPto.CardGroup
         * @instance
         */
        CardGroup.prototype.accessToUse = false;

        /**
         * Encodes the specified CardGroup message. Does not implicitly {@link CardsPto.CardGroup.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.CardGroup
         * @static
         * @param {CardsPto.ICardGroup} message CardGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.groupId);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.CardsPto.Card.encode(message.cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.groupName);
            if (message.powerId != null && Object.hasOwnProperty.call(message, "powerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.powerId);
            if (message.accessToUse != null && Object.hasOwnProperty.call(message, "accessToUse"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.accessToUse);
            return writer;
        };

        /**
         * Decodes a CardGroup message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.CardGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.CardGroup} CardGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.CardGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.groupId = reader.int32();
                        break;
                    }
                case 1: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.CardsPto.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.groupName = reader.string();
                        break;
                    }
                case 3: {
                        message.powerId = reader.int32();
                        break;
                    }
                case 4: {
                        message.accessToUse = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for CardGroup
         * @function getTypeUrl
         * @memberof CardsPto.CardGroup
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CardGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.CardGroup";
        };

        return CardGroup;
    })();

    CardsPto.C_REQ_CARDS_INFO = (function() {

        /**
         * Properties of a C_REQ_CARDS_INFO.
         * @memberof CardsPto
         * @interface IC_REQ_CARDS_INFO
         * @property {number|null} [cmd] C_REQ_CARDS_INFO cmd
         * @property {number|null} [scmd] C_REQ_CARDS_INFO scmd
         */

        /**
         * Constructs a new C_REQ_CARDS_INFO.
         * @memberof CardsPto
         * @classdesc Represents a C_REQ_CARDS_INFO.
         * @implements IC_REQ_CARDS_INFO
         * @constructor
         * @param {CardsPto.IC_REQ_CARDS_INFO=} [properties] Properties to set
         */
        function C_REQ_CARDS_INFO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_REQ_CARDS_INFO cmd.
         * @member {number} cmd
         * @memberof CardsPto.C_REQ_CARDS_INFO
         * @instance
         */
        C_REQ_CARDS_INFO.prototype.cmd = 4;

        /**
         * C_REQ_CARDS_INFO scmd.
         * @member {number} scmd
         * @memberof CardsPto.C_REQ_CARDS_INFO
         * @instance
         */
        C_REQ_CARDS_INFO.prototype.scmd = 1;

        /**
         * Encodes the specified C_REQ_CARDS_INFO message. Does not implicitly {@link CardsPto.C_REQ_CARDS_INFO.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.C_REQ_CARDS_INFO
         * @static
         * @param {CardsPto.IC_REQ_CARDS_INFO} message C_REQ_CARDS_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_REQ_CARDS_INFO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_REQ_CARDS_INFO message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.C_REQ_CARDS_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.C_REQ_CARDS_INFO} C_REQ_CARDS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_REQ_CARDS_INFO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.C_REQ_CARDS_INFO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_REQ_CARDS_INFO
         * @function getTypeUrl
         * @memberof CardsPto.C_REQ_CARDS_INFO
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_REQ_CARDS_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_REQ_CARDS_INFO";
        };

        return C_REQ_CARDS_INFO;
    })();

    CardsPto.S_CARDS_INFO = (function() {

        /**
         * Properties of a S_CARDS_INFO.
         * @memberof CardsPto
         * @interface IS_CARDS_INFO
         * @property {number|null} [cmd] S_CARDS_INFO cmd
         * @property {number|null} [scmd] S_CARDS_INFO scmd
         * @property {Array.<CardsPto.ICard>|null} [cardInfos] S_CARDS_INFO cardInfos
         * @property {Array.<CardsPto.ICardGroup>|null} [cardGroups] S_CARDS_INFO cardGroups
         */

        /**
         * Constructs a new S_CARDS_INFO.
         * @memberof CardsPto
         * @classdesc Represents a S_CARDS_INFO.
         * @implements IS_CARDS_INFO
         * @constructor
         * @param {CardsPto.IS_CARDS_INFO=} [properties] Properties to set
         */
        function S_CARDS_INFO(properties) {
            this.cardInfos = [];
            this.cardGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_CARDS_INFO cmd.
         * @member {number} cmd
         * @memberof CardsPto.S_CARDS_INFO
         * @instance
         */
        S_CARDS_INFO.prototype.cmd = 4;

        /**
         * S_CARDS_INFO scmd.
         * @member {number} scmd
         * @memberof CardsPto.S_CARDS_INFO
         * @instance
         */
        S_CARDS_INFO.prototype.scmd = 2;

        /**
         * S_CARDS_INFO cardInfos.
         * @member {Array.<CardsPto.ICard>} cardInfos
         * @memberof CardsPto.S_CARDS_INFO
         * @instance
         */
        S_CARDS_INFO.prototype.cardInfos = $util.emptyArray;

        /**
         * S_CARDS_INFO cardGroups.
         * @member {Array.<CardsPto.ICardGroup>} cardGroups
         * @memberof CardsPto.S_CARDS_INFO
         * @instance
         */
        S_CARDS_INFO.prototype.cardGroups = $util.emptyArray;

        /**
         * Encodes the specified S_CARDS_INFO message. Does not implicitly {@link CardsPto.S_CARDS_INFO.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.S_CARDS_INFO
         * @static
         * @param {CardsPto.IS_CARDS_INFO} message S_CARDS_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_CARDS_INFO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardInfos != null && message.cardInfos.length)
                for (var i = 0; i < message.cardInfos.length; ++i)
                    $root.CardsPto.Card.encode(message.cardInfos[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.cardGroups != null && message.cardGroups.length)
                for (var i = 0; i < message.cardGroups.length; ++i)
                    $root.CardsPto.CardGroup.encode(message.cardGroups[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_CARDS_INFO message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.S_CARDS_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.S_CARDS_INFO} S_CARDS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_CARDS_INFO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.S_CARDS_INFO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.cardInfos && message.cardInfos.length))
                            message.cardInfos = [];
                        message.cardInfos.push($root.CardsPto.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.cardGroups && message.cardGroups.length))
                            message.cardGroups = [];
                        message.cardGroups.push($root.CardsPto.CardGroup.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_CARDS_INFO
         * @function getTypeUrl
         * @memberof CardsPto.S_CARDS_INFO
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_CARDS_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.S_CARDS_INFO";
        };

        return S_CARDS_INFO;
    })();

    CardsPto.C_MAKE_CARD = (function() {

        /**
         * Properties of a C_MAKE_CARD.
         * @memberof CardsPto
         * @interface IC_MAKE_CARD
         * @property {number|null} [cmd] C_MAKE_CARD cmd
         * @property {number|null} [scmd] C_MAKE_CARD scmd
         * @property {number|null} [cardId] C_MAKE_CARD cardId
         */

        /**
         * Constructs a new C_MAKE_CARD.
         * @memberof CardsPto
         * @classdesc Represents a C_MAKE_CARD.
         * @implements IC_MAKE_CARD
         * @constructor
         * @param {CardsPto.IC_MAKE_CARD=} [properties] Properties to set
         */
        function C_MAKE_CARD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_MAKE_CARD cmd.
         * @member {number} cmd
         * @memberof CardsPto.C_MAKE_CARD
         * @instance
         */
        C_MAKE_CARD.prototype.cmd = 4;

        /**
         * C_MAKE_CARD scmd.
         * @member {number} scmd
         * @memberof CardsPto.C_MAKE_CARD
         * @instance
         */
        C_MAKE_CARD.prototype.scmd = 3;

        /**
         * C_MAKE_CARD cardId.
         * @member {number} cardId
         * @memberof CardsPto.C_MAKE_CARD
         * @instance
         */
        C_MAKE_CARD.prototype.cardId = 0;

        /**
         * Encodes the specified C_MAKE_CARD message. Does not implicitly {@link CardsPto.C_MAKE_CARD.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.C_MAKE_CARD
         * @static
         * @param {CardsPto.IC_MAKE_CARD} message C_MAKE_CARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_MAKE_CARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardId);
            return writer;
        };

        /**
         * Decodes a C_MAKE_CARD message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.C_MAKE_CARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.C_MAKE_CARD} C_MAKE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_MAKE_CARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.C_MAKE_CARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_MAKE_CARD
         * @function getTypeUrl
         * @memberof CardsPto.C_MAKE_CARD
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_MAKE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_MAKE_CARD";
        };

        return C_MAKE_CARD;
    })();

    CardsPto.S_MAKE_CARD = (function() {

        /**
         * Properties of a S_MAKE_CARD.
         * @memberof CardsPto
         * @interface IS_MAKE_CARD
         * @property {number|null} [cmd] S_MAKE_CARD cmd
         * @property {number|null} [scmd] S_MAKE_CARD scmd
         * @property {number|null} [cardId] S_MAKE_CARD cardId
         * @property {number|null} [code] S_MAKE_CARD code
         */

        /**
         * Constructs a new S_MAKE_CARD.
         * @memberof CardsPto
         * @classdesc Represents a S_MAKE_CARD.
         * @implements IS_MAKE_CARD
         * @constructor
         * @param {CardsPto.IS_MAKE_CARD=} [properties] Properties to set
         */
        function S_MAKE_CARD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_MAKE_CARD cmd.
         * @member {number} cmd
         * @memberof CardsPto.S_MAKE_CARD
         * @instance
         */
        S_MAKE_CARD.prototype.cmd = 4;

        /**
         * S_MAKE_CARD scmd.
         * @member {number} scmd
         * @memberof CardsPto.S_MAKE_CARD
         * @instance
         */
        S_MAKE_CARD.prototype.scmd = 4;

        /**
         * S_MAKE_CARD cardId.
         * @member {number} cardId
         * @memberof CardsPto.S_MAKE_CARD
         * @instance
         */
        S_MAKE_CARD.prototype.cardId = 0;

        /**
         * S_MAKE_CARD code.
         * @member {number} code
         * @memberof CardsPto.S_MAKE_CARD
         * @instance
         */
        S_MAKE_CARD.prototype.code = 0;

        /**
         * Encodes the specified S_MAKE_CARD message. Does not implicitly {@link CardsPto.S_MAKE_CARD.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.S_MAKE_CARD
         * @static
         * @param {CardsPto.IS_MAKE_CARD} message S_MAKE_CARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_MAKE_CARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardId);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.code);
            return writer;
        };

        /**
         * Decodes a S_MAKE_CARD message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.S_MAKE_CARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.S_MAKE_CARD} S_MAKE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_MAKE_CARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.S_MAKE_CARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardId = reader.int32();
                        break;
                    }
                case 4: {
                        message.code = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_MAKE_CARD
         * @function getTypeUrl
         * @memberof CardsPto.S_MAKE_CARD
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_MAKE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.S_MAKE_CARD";
        };

        return S_MAKE_CARD;
    })();

    CardsPto.C_DISASSEMBLE_CARD = (function() {

        /**
         * Properties of a C_DISASSEMBLE_CARD.
         * @memberof CardsPto
         * @interface IC_DISASSEMBLE_CARD
         * @property {number|null} [cmd] C_DISASSEMBLE_CARD cmd
         * @property {number|null} [scmd] C_DISASSEMBLE_CARD scmd
         * @property {number|null} [cardId] C_DISASSEMBLE_CARD cardId
         */

        /**
         * Constructs a new C_DISASSEMBLE_CARD.
         * @memberof CardsPto
         * @classdesc Represents a C_DISASSEMBLE_CARD.
         * @implements IC_DISASSEMBLE_CARD
         * @constructor
         * @param {CardsPto.IC_DISASSEMBLE_CARD=} [properties] Properties to set
         */
        function C_DISASSEMBLE_CARD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_DISASSEMBLE_CARD cmd.
         * @member {number} cmd
         * @memberof CardsPto.C_DISASSEMBLE_CARD
         * @instance
         */
        C_DISASSEMBLE_CARD.prototype.cmd = 4;

        /**
         * C_DISASSEMBLE_CARD scmd.
         * @member {number} scmd
         * @memberof CardsPto.C_DISASSEMBLE_CARD
         * @instance
         */
        C_DISASSEMBLE_CARD.prototype.scmd = 5;

        /**
         * C_DISASSEMBLE_CARD cardId.
         * @member {number} cardId
         * @memberof CardsPto.C_DISASSEMBLE_CARD
         * @instance
         */
        C_DISASSEMBLE_CARD.prototype.cardId = 0;

        /**
         * Encodes the specified C_DISASSEMBLE_CARD message. Does not implicitly {@link CardsPto.C_DISASSEMBLE_CARD.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.C_DISASSEMBLE_CARD
         * @static
         * @param {CardsPto.IC_DISASSEMBLE_CARD} message C_DISASSEMBLE_CARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_DISASSEMBLE_CARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardId);
            return writer;
        };

        /**
         * Decodes a C_DISASSEMBLE_CARD message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.C_DISASSEMBLE_CARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.C_DISASSEMBLE_CARD} C_DISASSEMBLE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_DISASSEMBLE_CARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.C_DISASSEMBLE_CARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_DISASSEMBLE_CARD
         * @function getTypeUrl
         * @memberof CardsPto.C_DISASSEMBLE_CARD
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_DISASSEMBLE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_DISASSEMBLE_CARD";
        };

        return C_DISASSEMBLE_CARD;
    })();

    CardsPto.S_DISASSEMBLE_CARD = (function() {

        /**
         * Properties of a S_DISASSEMBLE_CARD.
         * @memberof CardsPto
         * @interface IS_DISASSEMBLE_CARD
         * @property {number|null} [cmd] S_DISASSEMBLE_CARD cmd
         * @property {number|null} [scmd] S_DISASSEMBLE_CARD scmd
         * @property {number|null} [cardId] S_DISASSEMBLE_CARD cardId
         * @property {number|null} [code] S_DISASSEMBLE_CARD code
         */

        /**
         * Constructs a new S_DISASSEMBLE_CARD.
         * @memberof CardsPto
         * @classdesc Represents a S_DISASSEMBLE_CARD.
         * @implements IS_DISASSEMBLE_CARD
         * @constructor
         * @param {CardsPto.IS_DISASSEMBLE_CARD=} [properties] Properties to set
         */
        function S_DISASSEMBLE_CARD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_DISASSEMBLE_CARD cmd.
         * @member {number} cmd
         * @memberof CardsPto.S_DISASSEMBLE_CARD
         * @instance
         */
        S_DISASSEMBLE_CARD.prototype.cmd = 4;

        /**
         * S_DISASSEMBLE_CARD scmd.
         * @member {number} scmd
         * @memberof CardsPto.S_DISASSEMBLE_CARD
         * @instance
         */
        S_DISASSEMBLE_CARD.prototype.scmd = 6;

        /**
         * S_DISASSEMBLE_CARD cardId.
         * @member {number} cardId
         * @memberof CardsPto.S_DISASSEMBLE_CARD
         * @instance
         */
        S_DISASSEMBLE_CARD.prototype.cardId = 0;

        /**
         * S_DISASSEMBLE_CARD code.
         * @member {number} code
         * @memberof CardsPto.S_DISASSEMBLE_CARD
         * @instance
         */
        S_DISASSEMBLE_CARD.prototype.code = 0;

        /**
         * Encodes the specified S_DISASSEMBLE_CARD message. Does not implicitly {@link CardsPto.S_DISASSEMBLE_CARD.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.S_DISASSEMBLE_CARD
         * @static
         * @param {CardsPto.IS_DISASSEMBLE_CARD} message S_DISASSEMBLE_CARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_DISASSEMBLE_CARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardId);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.code);
            return writer;
        };

        /**
         * Decodes a S_DISASSEMBLE_CARD message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.S_DISASSEMBLE_CARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.S_DISASSEMBLE_CARD} S_DISASSEMBLE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_DISASSEMBLE_CARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.S_DISASSEMBLE_CARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardId = reader.int32();
                        break;
                    }
                case 4: {
                        message.code = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_DISASSEMBLE_CARD
         * @function getTypeUrl
         * @memberof CardsPto.S_DISASSEMBLE_CARD
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_DISASSEMBLE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.S_DISASSEMBLE_CARD";
        };

        return S_DISASSEMBLE_CARD;
    })();

    CardsPto.C_SAVE_CARDS = (function() {

        /**
         * Properties of a C_SAVE_CARDS.
         * @memberof CardsPto
         * @interface IC_SAVE_CARDS
         * @property {number|null} [cmd] C_SAVE_CARDS cmd
         * @property {number|null} [scmd] C_SAVE_CARDS scmd
         * @property {CardsPto.ICardGroup|null} [cardGroup] C_SAVE_CARDS cardGroup
         */

        /**
         * Constructs a new C_SAVE_CARDS.
         * @memberof CardsPto
         * @classdesc Represents a C_SAVE_CARDS.
         * @implements IC_SAVE_CARDS
         * @constructor
         * @param {CardsPto.IC_SAVE_CARDS=} [properties] Properties to set
         */
        function C_SAVE_CARDS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_SAVE_CARDS cmd.
         * @member {number} cmd
         * @memberof CardsPto.C_SAVE_CARDS
         * @instance
         */
        C_SAVE_CARDS.prototype.cmd = 4;

        /**
         * C_SAVE_CARDS scmd.
         * @member {number} scmd
         * @memberof CardsPto.C_SAVE_CARDS
         * @instance
         */
        C_SAVE_CARDS.prototype.scmd = 7;

        /**
         * C_SAVE_CARDS cardGroup.
         * @member {CardsPto.ICardGroup|null|undefined} cardGroup
         * @memberof CardsPto.C_SAVE_CARDS
         * @instance
         */
        C_SAVE_CARDS.prototype.cardGroup = null;

        /**
         * Encodes the specified C_SAVE_CARDS message. Does not implicitly {@link CardsPto.C_SAVE_CARDS.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.C_SAVE_CARDS
         * @static
         * @param {CardsPto.IC_SAVE_CARDS} message C_SAVE_CARDS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_SAVE_CARDS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardGroup != null && Object.hasOwnProperty.call(message, "cardGroup"))
                $root.CardsPto.CardGroup.encode(message.cardGroup, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a C_SAVE_CARDS message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.C_SAVE_CARDS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.C_SAVE_CARDS} C_SAVE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_SAVE_CARDS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.C_SAVE_CARDS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardGroup = $root.CardsPto.CardGroup.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_SAVE_CARDS
         * @function getTypeUrl
         * @memberof CardsPto.C_SAVE_CARDS
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_SAVE_CARDS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_SAVE_CARDS";
        };

        return C_SAVE_CARDS;
    })();

    CardsPto.S_SAVE_CARDS = (function() {

        /**
         * Properties of a S_SAVE_CARDS.
         * @memberof CardsPto
         * @interface IS_SAVE_CARDS
         * @property {number|null} [cmd] S_SAVE_CARDS cmd
         * @property {number|null} [scmd] S_SAVE_CARDS scmd
         * @property {CardsPto.ICardGroup|null} [cardGroup] S_SAVE_CARDS cardGroup
         */

        /**
         * Constructs a new S_SAVE_CARDS.
         * @memberof CardsPto
         * @classdesc Represents a S_SAVE_CARDS.
         * @implements IS_SAVE_CARDS
         * @constructor
         * @param {CardsPto.IS_SAVE_CARDS=} [properties] Properties to set
         */
        function S_SAVE_CARDS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_SAVE_CARDS cmd.
         * @member {number} cmd
         * @memberof CardsPto.S_SAVE_CARDS
         * @instance
         */
        S_SAVE_CARDS.prototype.cmd = 4;

        /**
         * S_SAVE_CARDS scmd.
         * @member {number} scmd
         * @memberof CardsPto.S_SAVE_CARDS
         * @instance
         */
        S_SAVE_CARDS.prototype.scmd = 8;

        /**
         * S_SAVE_CARDS cardGroup.
         * @member {CardsPto.ICardGroup|null|undefined} cardGroup
         * @memberof CardsPto.S_SAVE_CARDS
         * @instance
         */
        S_SAVE_CARDS.prototype.cardGroup = null;

        /**
         * Encodes the specified S_SAVE_CARDS message. Does not implicitly {@link CardsPto.S_SAVE_CARDS.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.S_SAVE_CARDS
         * @static
         * @param {CardsPto.IS_SAVE_CARDS} message S_SAVE_CARDS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_SAVE_CARDS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardGroup != null && Object.hasOwnProperty.call(message, "cardGroup"))
                $root.CardsPto.CardGroup.encode(message.cardGroup, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_SAVE_CARDS message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.S_SAVE_CARDS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.S_SAVE_CARDS} S_SAVE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_SAVE_CARDS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.S_SAVE_CARDS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardGroup = $root.CardsPto.CardGroup.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_SAVE_CARDS
         * @function getTypeUrl
         * @memberof CardsPto.S_SAVE_CARDS
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_SAVE_CARDS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.S_SAVE_CARDS";
        };

        return S_SAVE_CARDS;
    })();

    CardsPto.C_DELETE_CARD_GROUP = (function() {

        /**
         * Properties of a C_DELETE_CARD_GROUP.
         * @memberof CardsPto
         * @interface IC_DELETE_CARD_GROUP
         * @property {number|null} [cmd] C_DELETE_CARD_GROUP cmd
         * @property {number|null} [scmd] C_DELETE_CARD_GROUP scmd
         * @property {number|null} [groupId] C_DELETE_CARD_GROUP groupId
         */

        /**
         * Constructs a new C_DELETE_CARD_GROUP.
         * @memberof CardsPto
         * @classdesc Represents a C_DELETE_CARD_GROUP.
         * @implements IC_DELETE_CARD_GROUP
         * @constructor
         * @param {CardsPto.IC_DELETE_CARD_GROUP=} [properties] Properties to set
         */
        function C_DELETE_CARD_GROUP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_DELETE_CARD_GROUP cmd.
         * @member {number} cmd
         * @memberof CardsPto.C_DELETE_CARD_GROUP
         * @instance
         */
        C_DELETE_CARD_GROUP.prototype.cmd = 4;

        /**
         * C_DELETE_CARD_GROUP scmd.
         * @member {number} scmd
         * @memberof CardsPto.C_DELETE_CARD_GROUP
         * @instance
         */
        C_DELETE_CARD_GROUP.prototype.scmd = 9;

        /**
         * C_DELETE_CARD_GROUP groupId.
         * @member {number} groupId
         * @memberof CardsPto.C_DELETE_CARD_GROUP
         * @instance
         */
        C_DELETE_CARD_GROUP.prototype.groupId = 0;

        /**
         * Encodes the specified C_DELETE_CARD_GROUP message. Does not implicitly {@link CardsPto.C_DELETE_CARD_GROUP.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.C_DELETE_CARD_GROUP
         * @static
         * @param {CardsPto.IC_DELETE_CARD_GROUP} message C_DELETE_CARD_GROUP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_DELETE_CARD_GROUP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.groupId);
            return writer;
        };

        /**
         * Decodes a C_DELETE_CARD_GROUP message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.C_DELETE_CARD_GROUP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.C_DELETE_CARD_GROUP} C_DELETE_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_DELETE_CARD_GROUP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.C_DELETE_CARD_GROUP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.groupId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_DELETE_CARD_GROUP
         * @function getTypeUrl
         * @memberof CardsPto.C_DELETE_CARD_GROUP
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_DELETE_CARD_GROUP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_DELETE_CARD_GROUP";
        };

        return C_DELETE_CARD_GROUP;
    })();

    CardsPto.S_DELETE_CARD_GROUP = (function() {

        /**
         * Properties of a S_DELETE_CARD_GROUP.
         * @memberof CardsPto
         * @interface IS_DELETE_CARD_GROUP
         * @property {number|null} [cmd] S_DELETE_CARD_GROUP cmd
         * @property {number|null} [scmd] S_DELETE_CARD_GROUP scmd
         * @property {number|null} [groupId] S_DELETE_CARD_GROUP groupId
         */

        /**
         * Constructs a new S_DELETE_CARD_GROUP.
         * @memberof CardsPto
         * @classdesc Represents a S_DELETE_CARD_GROUP.
         * @implements IS_DELETE_CARD_GROUP
         * @constructor
         * @param {CardsPto.IS_DELETE_CARD_GROUP=} [properties] Properties to set
         */
        function S_DELETE_CARD_GROUP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_DELETE_CARD_GROUP cmd.
         * @member {number} cmd
         * @memberof CardsPto.S_DELETE_CARD_GROUP
         * @instance
         */
        S_DELETE_CARD_GROUP.prototype.cmd = 4;

        /**
         * S_DELETE_CARD_GROUP scmd.
         * @member {number} scmd
         * @memberof CardsPto.S_DELETE_CARD_GROUP
         * @instance
         */
        S_DELETE_CARD_GROUP.prototype.scmd = 10;

        /**
         * S_DELETE_CARD_GROUP groupId.
         * @member {number} groupId
         * @memberof CardsPto.S_DELETE_CARD_GROUP
         * @instance
         */
        S_DELETE_CARD_GROUP.prototype.groupId = 0;

        /**
         * Encodes the specified S_DELETE_CARD_GROUP message. Does not implicitly {@link CardsPto.S_DELETE_CARD_GROUP.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.S_DELETE_CARD_GROUP
         * @static
         * @param {CardsPto.IS_DELETE_CARD_GROUP} message S_DELETE_CARD_GROUP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_DELETE_CARD_GROUP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.groupId);
            return writer;
        };

        /**
         * Decodes a S_DELETE_CARD_GROUP message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.S_DELETE_CARD_GROUP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.S_DELETE_CARD_GROUP} S_DELETE_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_DELETE_CARD_GROUP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.S_DELETE_CARD_GROUP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.groupId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_DELETE_CARD_GROUP
         * @function getTypeUrl
         * @memberof CardsPto.S_DELETE_CARD_GROUP
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_DELETE_CARD_GROUP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.S_DELETE_CARD_GROUP";
        };

        return S_DELETE_CARD_GROUP;
    })();

    return CardsPto;
})();

$root.ChatPto = (function() {

    /**
     * Namespace ChatPto.
     * @exports ChatPto
     * @namespace
     */
    var ChatPto = {};

    /**
     * MsgType enum.
     * @name ChatPto.MsgType
     * @enum {number}
     * @property {number} normal=0 normal value
     * @property {number} private=1 private value
     */
    ChatPto.MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "normal"] = 0;
        values[valuesById[1] = "private"] = 1;
        return values;
    })();

    ChatPto.C_SEND_MESSAGE = (function() {

        /**
         * Properties of a C_SEND_MESSAGE.
         * @memberof ChatPto
         * @interface IC_SEND_MESSAGE
         * @property {number|null} [cmd] C_SEND_MESSAGE cmd
         * @property {number|null} [scmd] C_SEND_MESSAGE scmd
         * @property {number|null} [uid] C_SEND_MESSAGE uid
         * @property {string|null} [msg] C_SEND_MESSAGE msg
         * @property {ChatPto.MsgType|null} [msgType] C_SEND_MESSAGE msgType
         */

        /**
         * Constructs a new C_SEND_MESSAGE.
         * @memberof ChatPto
         * @classdesc Represents a C_SEND_MESSAGE.
         * @implements IC_SEND_MESSAGE
         * @constructor
         * @param {ChatPto.IC_SEND_MESSAGE=} [properties] Properties to set
         */
        function C_SEND_MESSAGE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_SEND_MESSAGE cmd.
         * @member {number} cmd
         * @memberof ChatPto.C_SEND_MESSAGE
         * @instance
         */
        C_SEND_MESSAGE.prototype.cmd = 100;

        /**
         * C_SEND_MESSAGE scmd.
         * @member {number} scmd
         * @memberof ChatPto.C_SEND_MESSAGE
         * @instance
         */
        C_SEND_MESSAGE.prototype.scmd = 1;

        /**
         * C_SEND_MESSAGE uid.
         * @member {number} uid
         * @memberof ChatPto.C_SEND_MESSAGE
         * @instance
         */
        C_SEND_MESSAGE.prototype.uid = 0;

        /**
         * C_SEND_MESSAGE msg.
         * @member {string} msg
         * @memberof ChatPto.C_SEND_MESSAGE
         * @instance
         */
        C_SEND_MESSAGE.prototype.msg = "";

        /**
         * C_SEND_MESSAGE msgType.
         * @member {ChatPto.MsgType} msgType
         * @memberof ChatPto.C_SEND_MESSAGE
         * @instance
         */
        C_SEND_MESSAGE.prototype.msgType = 0;

        /**
         * Encodes the specified C_SEND_MESSAGE message. Does not implicitly {@link ChatPto.C_SEND_MESSAGE.verify|verify} messages.
         * @function encode
         * @memberof ChatPto.C_SEND_MESSAGE
         * @static
         * @param {ChatPto.IC_SEND_MESSAGE} message C_SEND_MESSAGE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_SEND_MESSAGE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.uid);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.msg);
            if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.msgType);
            return writer;
        };

        /**
         * Decodes a C_SEND_MESSAGE message from the specified reader or buffer.
         * @function decode
         * @memberof ChatPto.C_SEND_MESSAGE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatPto.C_SEND_MESSAGE} C_SEND_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_SEND_MESSAGE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatPto.C_SEND_MESSAGE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.uid = reader.int32();
                        break;
                    }
                case 4: {
                        message.msg = reader.string();
                        break;
                    }
                case 5: {
                        message.msgType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_SEND_MESSAGE
         * @function getTypeUrl
         * @memberof ChatPto.C_SEND_MESSAGE
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_SEND_MESSAGE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatPto.C_SEND_MESSAGE";
        };

        return C_SEND_MESSAGE;
    })();

    ChatPto.S_CHAT_MESSAGE = (function() {

        /**
         * Properties of a S_CHAT_MESSAGE.
         * @memberof ChatPto
         * @interface IS_CHAT_MESSAGE
         * @property {number|null} [cmd] S_CHAT_MESSAGE cmd
         * @property {number|null} [scmd] S_CHAT_MESSAGE scmd
         * @property {string|null} [msg] S_CHAT_MESSAGE msg
         * @property {string|null} [nick] S_CHAT_MESSAGE nick
         * @property {number|null} [uid] S_CHAT_MESSAGE uid
         * @property {ChatPto.MsgType|null} [msgType] S_CHAT_MESSAGE msgType
         */

        /**
         * Constructs a new S_CHAT_MESSAGE.
         * @memberof ChatPto
         * @classdesc Represents a S_CHAT_MESSAGE.
         * @implements IS_CHAT_MESSAGE
         * @constructor
         * @param {ChatPto.IS_CHAT_MESSAGE=} [properties] Properties to set
         */
        function S_CHAT_MESSAGE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_CHAT_MESSAGE cmd.
         * @member {number} cmd
         * @memberof ChatPto.S_CHAT_MESSAGE
         * @instance
         */
        S_CHAT_MESSAGE.prototype.cmd = 100;

        /**
         * S_CHAT_MESSAGE scmd.
         * @member {number} scmd
         * @memberof ChatPto.S_CHAT_MESSAGE
         * @instance
         */
        S_CHAT_MESSAGE.prototype.scmd = 2;

        /**
         * S_CHAT_MESSAGE msg.
         * @member {string} msg
         * @memberof ChatPto.S_CHAT_MESSAGE
         * @instance
         */
        S_CHAT_MESSAGE.prototype.msg = "";

        /**
         * S_CHAT_MESSAGE nick.
         * @member {string} nick
         * @memberof ChatPto.S_CHAT_MESSAGE
         * @instance
         */
        S_CHAT_MESSAGE.prototype.nick = "";

        /**
         * S_CHAT_MESSAGE uid.
         * @member {number} uid
         * @memberof ChatPto.S_CHAT_MESSAGE
         * @instance
         */
        S_CHAT_MESSAGE.prototype.uid = 0;

        /**
         * S_CHAT_MESSAGE msgType.
         * @member {ChatPto.MsgType} msgType
         * @memberof ChatPto.S_CHAT_MESSAGE
         * @instance
         */
        S_CHAT_MESSAGE.prototype.msgType = 0;

        /**
         * Encodes the specified S_CHAT_MESSAGE message. Does not implicitly {@link ChatPto.S_CHAT_MESSAGE.verify|verify} messages.
         * @function encode
         * @memberof ChatPto.S_CHAT_MESSAGE
         * @static
         * @param {ChatPto.IS_CHAT_MESSAGE} message S_CHAT_MESSAGE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_CHAT_MESSAGE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nick);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.uid);
            if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.msgType);
            return writer;
        };

        /**
         * Decodes a S_CHAT_MESSAGE message from the specified reader or buffer.
         * @function decode
         * @memberof ChatPto.S_CHAT_MESSAGE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatPto.S_CHAT_MESSAGE} S_CHAT_MESSAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_CHAT_MESSAGE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatPto.S_CHAT_MESSAGE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.msg = reader.string();
                        break;
                    }
                case 4: {
                        message.nick = reader.string();
                        break;
                    }
                case 5: {
                        message.uid = reader.int32();
                        break;
                    }
                case 6: {
                        message.msgType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_CHAT_MESSAGE
         * @function getTypeUrl
         * @memberof ChatPto.S_CHAT_MESSAGE
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_CHAT_MESSAGE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatPto.S_CHAT_MESSAGE";
        };

        return S_CHAT_MESSAGE;
    })();

    return ChatPto;
})();

$root.FriendPto = (function() {

    /**
     * Namespace FriendPto.
     * @exports FriendPto
     * @namespace
     */
    var FriendPto = {};

    FriendPto.C_ADD_FRIEND = (function() {

        /**
         * Properties of a C_ADD_FRIEND.
         * @memberof FriendPto
         * @interface IC_ADD_FRIEND
         * @property {number|null} [cmd] C_ADD_FRIEND cmd
         * @property {number|null} [scmd] C_ADD_FRIEND scmd
         * @property {number|null} [uid] C_ADD_FRIEND uid
         */

        /**
         * Constructs a new C_ADD_FRIEND.
         * @memberof FriendPto
         * @classdesc Represents a C_ADD_FRIEND.
         * @implements IC_ADD_FRIEND
         * @constructor
         * @param {FriendPto.IC_ADD_FRIEND=} [properties] Properties to set
         */
        function C_ADD_FRIEND(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_ADD_FRIEND cmd.
         * @member {number} cmd
         * @memberof FriendPto.C_ADD_FRIEND
         * @instance
         */
        C_ADD_FRIEND.prototype.cmd = 3;

        /**
         * C_ADD_FRIEND scmd.
         * @member {number} scmd
         * @memberof FriendPto.C_ADD_FRIEND
         * @instance
         */
        C_ADD_FRIEND.prototype.scmd = 1;

        /**
         * C_ADD_FRIEND uid.
         * @member {number} uid
         * @memberof FriendPto.C_ADD_FRIEND
         * @instance
         */
        C_ADD_FRIEND.prototype.uid = 0;

        /**
         * Encodes the specified C_ADD_FRIEND message. Does not implicitly {@link FriendPto.C_ADD_FRIEND.verify|verify} messages.
         * @function encode
         * @memberof FriendPto.C_ADD_FRIEND
         * @static
         * @param {FriendPto.IC_ADD_FRIEND} message C_ADD_FRIEND message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_ADD_FRIEND.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.uid);
            return writer;
        };

        /**
         * Decodes a C_ADD_FRIEND message from the specified reader or buffer.
         * @function decode
         * @memberof FriendPto.C_ADD_FRIEND
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendPto.C_ADD_FRIEND} C_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_ADD_FRIEND.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendPto.C_ADD_FRIEND();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.uid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_ADD_FRIEND
         * @function getTypeUrl
         * @memberof FriendPto.C_ADD_FRIEND
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_ADD_FRIEND.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.C_ADD_FRIEND";
        };

        return C_ADD_FRIEND;
    })();

    FriendPto.S_ADD_FRIEND_REQ = (function() {

        /**
         * Properties of a S_ADD_FRIEND_REQ.
         * @memberof FriendPto
         * @interface IS_ADD_FRIEND_REQ
         * @property {number|null} [cmd] S_ADD_FRIEND_REQ cmd
         * @property {number|null} [scmd] S_ADD_FRIEND_REQ scmd
         * @property {number|null} [code] S_ADD_FRIEND_REQ code
         */

        /**
         * Constructs a new S_ADD_FRIEND_REQ.
         * @memberof FriendPto
         * @classdesc Represents a S_ADD_FRIEND_REQ.
         * @implements IS_ADD_FRIEND_REQ
         * @constructor
         * @param {FriendPto.IS_ADD_FRIEND_REQ=} [properties] Properties to set
         */
        function S_ADD_FRIEND_REQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ADD_FRIEND_REQ cmd.
         * @member {number} cmd
         * @memberof FriendPto.S_ADD_FRIEND_REQ
         * @instance
         */
        S_ADD_FRIEND_REQ.prototype.cmd = 3;

        /**
         * S_ADD_FRIEND_REQ scmd.
         * @member {number} scmd
         * @memberof FriendPto.S_ADD_FRIEND_REQ
         * @instance
         */
        S_ADD_FRIEND_REQ.prototype.scmd = 2;

        /**
         * S_ADD_FRIEND_REQ code.
         * @member {number} code
         * @memberof FriendPto.S_ADD_FRIEND_REQ
         * @instance
         */
        S_ADD_FRIEND_REQ.prototype.code = 0;

        /**
         * Encodes the specified S_ADD_FRIEND_REQ message. Does not implicitly {@link FriendPto.S_ADD_FRIEND_REQ.verify|verify} messages.
         * @function encode
         * @memberof FriendPto.S_ADD_FRIEND_REQ
         * @static
         * @param {FriendPto.IS_ADD_FRIEND_REQ} message S_ADD_FRIEND_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ADD_FRIEND_REQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            return writer;
        };

        /**
         * Decodes a S_ADD_FRIEND_REQ message from the specified reader or buffer.
         * @function decode
         * @memberof FriendPto.S_ADD_FRIEND_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendPto.S_ADD_FRIEND_REQ} S_ADD_FRIEND_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ADD_FRIEND_REQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendPto.S_ADD_FRIEND_REQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.code = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_ADD_FRIEND_REQ
         * @function getTypeUrl
         * @memberof FriendPto.S_ADD_FRIEND_REQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_ADD_FRIEND_REQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.S_ADD_FRIEND_REQ";
        };

        return S_ADD_FRIEND_REQ;
    })();

    FriendPto.C_ADD_FRIEND_REQ_RESULT = (function() {

        /**
         * Properties of a C_ADD_FRIEND_REQ_RESULT.
         * @memberof FriendPto
         * @interface IC_ADD_FRIEND_REQ_RESULT
         * @property {number|null} [cmd] C_ADD_FRIEND_REQ_RESULT cmd
         * @property {number|null} [scmd] C_ADD_FRIEND_REQ_RESULT scmd
         * @property {boolean|null} [isApprove] C_ADD_FRIEND_REQ_RESULT isApprove
         * @property {number|null} [uid] C_ADD_FRIEND_REQ_RESULT uid
         */

        /**
         * Constructs a new C_ADD_FRIEND_REQ_RESULT.
         * @memberof FriendPto
         * @classdesc Represents a C_ADD_FRIEND_REQ_RESULT.
         * @implements IC_ADD_FRIEND_REQ_RESULT
         * @constructor
         * @param {FriendPto.IC_ADD_FRIEND_REQ_RESULT=} [properties] Properties to set
         */
        function C_ADD_FRIEND_REQ_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_ADD_FRIEND_REQ_RESULT cmd.
         * @member {number} cmd
         * @memberof FriendPto.C_ADD_FRIEND_REQ_RESULT
         * @instance
         */
        C_ADD_FRIEND_REQ_RESULT.prototype.cmd = 3;

        /**
         * C_ADD_FRIEND_REQ_RESULT scmd.
         * @member {number} scmd
         * @memberof FriendPto.C_ADD_FRIEND_REQ_RESULT
         * @instance
         */
        C_ADD_FRIEND_REQ_RESULT.prototype.scmd = 3;

        /**
         * C_ADD_FRIEND_REQ_RESULT isApprove.
         * @member {boolean} isApprove
         * @memberof FriendPto.C_ADD_FRIEND_REQ_RESULT
         * @instance
         */
        C_ADD_FRIEND_REQ_RESULT.prototype.isApprove = false;

        /**
         * C_ADD_FRIEND_REQ_RESULT uid.
         * @member {number} uid
         * @memberof FriendPto.C_ADD_FRIEND_REQ_RESULT
         * @instance
         */
        C_ADD_FRIEND_REQ_RESULT.prototype.uid = 0;

        /**
         * Encodes the specified C_ADD_FRIEND_REQ_RESULT message. Does not implicitly {@link FriendPto.C_ADD_FRIEND_REQ_RESULT.verify|verify} messages.
         * @function encode
         * @memberof FriendPto.C_ADD_FRIEND_REQ_RESULT
         * @static
         * @param {FriendPto.IC_ADD_FRIEND_REQ_RESULT} message C_ADD_FRIEND_REQ_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_ADD_FRIEND_REQ_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isApprove != null && Object.hasOwnProperty.call(message, "isApprove"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isApprove);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.uid);
            return writer;
        };

        /**
         * Decodes a C_ADD_FRIEND_REQ_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof FriendPto.C_ADD_FRIEND_REQ_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendPto.C_ADD_FRIEND_REQ_RESULT} C_ADD_FRIEND_REQ_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_ADD_FRIEND_REQ_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendPto.C_ADD_FRIEND_REQ_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.isApprove = reader.bool();
                        break;
                    }
                case 4: {
                        message.uid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_ADD_FRIEND_REQ_RESULT
         * @function getTypeUrl
         * @memberof FriendPto.C_ADD_FRIEND_REQ_RESULT
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_ADD_FRIEND_REQ_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.C_ADD_FRIEND_REQ_RESULT";
        };

        return C_ADD_FRIEND_REQ_RESULT;
    })();

    FriendPto.S_FRIEND_CHANGE = (function() {

        /**
         * Properties of a S_FRIEND_CHANGE.
         * @memberof FriendPto
         * @interface IS_FRIEND_CHANGE
         * @property {number|null} [cmd] S_FRIEND_CHANGE cmd
         * @property {number|null} [scmd] S_FRIEND_CHANGE scmd
         * @property {FriendPto.IFriend|null} [friend] S_FRIEND_CHANGE friend
         * @property {boolean|null} [isNewFriend] S_FRIEND_CHANGE isNewFriend
         */

        /**
         * Constructs a new S_FRIEND_CHANGE.
         * @memberof FriendPto
         * @classdesc Represents a S_FRIEND_CHANGE.
         * @implements IS_FRIEND_CHANGE
         * @constructor
         * @param {FriendPto.IS_FRIEND_CHANGE=} [properties] Properties to set
         */
        function S_FRIEND_CHANGE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_FRIEND_CHANGE cmd.
         * @member {number} cmd
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @instance
         */
        S_FRIEND_CHANGE.prototype.cmd = 3;

        /**
         * S_FRIEND_CHANGE scmd.
         * @member {number} scmd
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @instance
         */
        S_FRIEND_CHANGE.prototype.scmd = 4;

        /**
         * S_FRIEND_CHANGE friend.
         * @member {FriendPto.IFriend|null|undefined} friend
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @instance
         */
        S_FRIEND_CHANGE.prototype.friend = null;

        /**
         * S_FRIEND_CHANGE isNewFriend.
         * @member {boolean} isNewFriend
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @instance
         */
        S_FRIEND_CHANGE.prototype.isNewFriend = false;

        /**
         * Encodes the specified S_FRIEND_CHANGE message. Does not implicitly {@link FriendPto.S_FRIEND_CHANGE.verify|verify} messages.
         * @function encode
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @static
         * @param {FriendPto.IS_FRIEND_CHANGE} message S_FRIEND_CHANGE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_FRIEND_CHANGE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.friend != null && Object.hasOwnProperty.call(message, "friend"))
                $root.FriendPto.Friend.encode(message.friend, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.isNewFriend != null && Object.hasOwnProperty.call(message, "isNewFriend"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isNewFriend);
            return writer;
        };

        /**
         * Decodes a S_FRIEND_CHANGE message from the specified reader or buffer.
         * @function decode
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendPto.S_FRIEND_CHANGE} S_FRIEND_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_FRIEND_CHANGE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendPto.S_FRIEND_CHANGE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.friend = $root.FriendPto.Friend.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.isNewFriend = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_FRIEND_CHANGE
         * @function getTypeUrl
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_FRIEND_CHANGE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.S_FRIEND_CHANGE";
        };

        return S_FRIEND_CHANGE;
    })();

    FriendPto.S_ADD_FRIEND = (function() {

        /**
         * Properties of a S_ADD_FRIEND.
         * @memberof FriendPto
         * @interface IS_ADD_FRIEND
         * @property {number|null} [cmd] S_ADD_FRIEND cmd
         * @property {number|null} [scmd] S_ADD_FRIEND scmd
         * @property {FriendPto.IFriend|null} [user] S_ADD_FRIEND user
         */

        /**
         * Constructs a new S_ADD_FRIEND.
         * @memberof FriendPto
         * @classdesc Represents a S_ADD_FRIEND.
         * @implements IS_ADD_FRIEND
         * @constructor
         * @param {FriendPto.IS_ADD_FRIEND=} [properties] Properties to set
         */
        function S_ADD_FRIEND(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ADD_FRIEND cmd.
         * @member {number} cmd
         * @memberof FriendPto.S_ADD_FRIEND
         * @instance
         */
        S_ADD_FRIEND.prototype.cmd = 3;

        /**
         * S_ADD_FRIEND scmd.
         * @member {number} scmd
         * @memberof FriendPto.S_ADD_FRIEND
         * @instance
         */
        S_ADD_FRIEND.prototype.scmd = 5;

        /**
         * S_ADD_FRIEND user.
         * @member {FriendPto.IFriend|null|undefined} user
         * @memberof FriendPto.S_ADD_FRIEND
         * @instance
         */
        S_ADD_FRIEND.prototype.user = null;

        /**
         * Encodes the specified S_ADD_FRIEND message. Does not implicitly {@link FriendPto.S_ADD_FRIEND.verify|verify} messages.
         * @function encode
         * @memberof FriendPto.S_ADD_FRIEND
         * @static
         * @param {FriendPto.IS_ADD_FRIEND} message S_ADD_FRIEND message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ADD_FRIEND.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.FriendPto.Friend.encode(message.user, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_ADD_FRIEND message from the specified reader or buffer.
         * @function decode
         * @memberof FriendPto.S_ADD_FRIEND
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendPto.S_ADD_FRIEND} S_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ADD_FRIEND.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendPto.S_ADD_FRIEND();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.user = $root.FriendPto.Friend.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_ADD_FRIEND
         * @function getTypeUrl
         * @memberof FriendPto.S_ADD_FRIEND
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_ADD_FRIEND.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.S_ADD_FRIEND";
        };

        return S_ADD_FRIEND;
    })();

    FriendPto.Friend = (function() {

        /**
         * Properties of a Friend.
         * @memberof FriendPto
         * @interface IFriend
         * @property {number|null} [uid] Friend uid
         * @property {string|null} [nick] Friend nick
         * @property {boolean|null} [isOnline] Friend isOnline
         */

        /**
         * Constructs a new Friend.
         * @memberof FriendPto
         * @classdesc Represents a Friend.
         * @implements IFriend
         * @constructor
         * @param {FriendPto.IFriend=} [properties] Properties to set
         */
        function Friend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Friend uid.
         * @member {number} uid
         * @memberof FriendPto.Friend
         * @instance
         */
        Friend.prototype.uid = 0;

        /**
         * Friend nick.
         * @member {string} nick
         * @memberof FriendPto.Friend
         * @instance
         */
        Friend.prototype.nick = "";

        /**
         * Friend isOnline.
         * @member {boolean} isOnline
         * @memberof FriendPto.Friend
         * @instance
         */
        Friend.prototype.isOnline = false;

        /**
         * Encodes the specified Friend message. Does not implicitly {@link FriendPto.Friend.verify|verify} messages.
         * @function encode
         * @memberof FriendPto.Friend
         * @static
         * @param {FriendPto.IFriend} message Friend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nick);
            if (message.isOnline != null && Object.hasOwnProperty.call(message, "isOnline"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isOnline);
            return writer;
        };

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @function decode
         * @memberof FriendPto.Friend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendPto.Friend} Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendPto.Friend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.int32();
                        break;
                    }
                case 2: {
                        message.nick = reader.string();
                        break;
                    }
                case 3: {
                        message.isOnline = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Friend
         * @function getTypeUrl
         * @memberof FriendPto.Friend
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Friend.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.Friend";
        };

        return Friend;
    })();

    return FriendPto;
})();

$root.FriendlyMatchPto = (function() {

    /**
     * Namespace FriendlyMatchPto.
     * @exports FriendlyMatchPto
     * @namespace
     */
    var FriendlyMatchPto = {};

    FriendlyMatchPto.C_REQ_MATCH = (function() {

        /**
         * Properties of a C_REQ_MATCH.
         * @memberof FriendlyMatchPto
         * @interface IC_REQ_MATCH
         * @property {number|null} [cmd] C_REQ_MATCH cmd
         * @property {number|null} [scmd] C_REQ_MATCH scmd
         * @property {number|null} [targetUid] C_REQ_MATCH targetUid
         */

        /**
         * Constructs a new C_REQ_MATCH.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a C_REQ_MATCH.
         * @implements IC_REQ_MATCH
         * @constructor
         * @param {FriendlyMatchPto.IC_REQ_MATCH=} [properties] Properties to set
         */
        function C_REQ_MATCH(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_REQ_MATCH cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.C_REQ_MATCH
         * @instance
         */
        C_REQ_MATCH.prototype.cmd = 201;

        /**
         * C_REQ_MATCH scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.C_REQ_MATCH
         * @instance
         */
        C_REQ_MATCH.prototype.scmd = 1;

        /**
         * C_REQ_MATCH targetUid.
         * @member {number} targetUid
         * @memberof FriendlyMatchPto.C_REQ_MATCH
         * @instance
         */
        C_REQ_MATCH.prototype.targetUid = 0;

        /**
         * Encodes the specified C_REQ_MATCH message. Does not implicitly {@link FriendlyMatchPto.C_REQ_MATCH.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.C_REQ_MATCH
         * @static
         * @param {FriendlyMatchPto.IC_REQ_MATCH} message C_REQ_MATCH message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_REQ_MATCH.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.targetUid != null && Object.hasOwnProperty.call(message, "targetUid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.targetUid);
            return writer;
        };

        /**
         * Decodes a C_REQ_MATCH message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.C_REQ_MATCH
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.C_REQ_MATCH} C_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_REQ_MATCH.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.C_REQ_MATCH();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.targetUid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_REQ_MATCH
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.C_REQ_MATCH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_REQ_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_REQ_MATCH";
        };

        return C_REQ_MATCH;
    })();

    FriendlyMatchPto.S_REQ_MATCH = (function() {

        /**
         * Properties of a S_REQ_MATCH.
         * @memberof FriendlyMatchPto
         * @interface IS_REQ_MATCH
         * @property {number|null} [cmd] S_REQ_MATCH cmd
         * @property {number|null} [scmd] S_REQ_MATCH scmd
         * @property {number|null} [code] S_REQ_MATCH code
         * @property {number|Long|null} [endTime] S_REQ_MATCH endTime
         */

        /**
         * Constructs a new S_REQ_MATCH.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_REQ_MATCH.
         * @implements IS_REQ_MATCH
         * @constructor
         * @param {FriendlyMatchPto.IS_REQ_MATCH=} [properties] Properties to set
         */
        function S_REQ_MATCH(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_REQ_MATCH cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_REQ_MATCH
         * @instance
         */
        S_REQ_MATCH.prototype.cmd = 201;

        /**
         * S_REQ_MATCH scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_REQ_MATCH
         * @instance
         */
        S_REQ_MATCH.prototype.scmd = 2;

        /**
         * S_REQ_MATCH code.
         * @member {number} code
         * @memberof FriendlyMatchPto.S_REQ_MATCH
         * @instance
         */
        S_REQ_MATCH.prototype.code = 0;

        /**
         * S_REQ_MATCH endTime.
         * @member {number|Long} endTime
         * @memberof FriendlyMatchPto.S_REQ_MATCH
         * @instance
         */
        S_REQ_MATCH.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified S_REQ_MATCH message. Does not implicitly {@link FriendlyMatchPto.S_REQ_MATCH.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_REQ_MATCH
         * @static
         * @param {FriendlyMatchPto.IS_REQ_MATCH} message S_REQ_MATCH message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_REQ_MATCH.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.endTime);
            return writer;
        };

        /**
         * Decodes a S_REQ_MATCH message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_REQ_MATCH
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_REQ_MATCH} S_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_REQ_MATCH.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_REQ_MATCH();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.code = reader.int32();
                        break;
                    }
                case 4: {
                        message.endTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_REQ_MATCH
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.S_REQ_MATCH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_REQ_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_REQ_MATCH";
        };

        return S_REQ_MATCH;
    })();

    FriendlyMatchPto.C_CANCEL_REQ_MATCH = (function() {

        /**
         * Properties of a C_CANCEL_REQ_MATCH.
         * @memberof FriendlyMatchPto
         * @interface IC_CANCEL_REQ_MATCH
         * @property {number|null} [cmd] C_CANCEL_REQ_MATCH cmd
         * @property {number|null} [scmd] C_CANCEL_REQ_MATCH scmd
         */

        /**
         * Constructs a new C_CANCEL_REQ_MATCH.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a C_CANCEL_REQ_MATCH.
         * @implements IC_CANCEL_REQ_MATCH
         * @constructor
         * @param {FriendlyMatchPto.IC_CANCEL_REQ_MATCH=} [properties] Properties to set
         */
        function C_CANCEL_REQ_MATCH(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_CANCEL_REQ_MATCH cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.C_CANCEL_REQ_MATCH
         * @instance
         */
        C_CANCEL_REQ_MATCH.prototype.cmd = 201;

        /**
         * C_CANCEL_REQ_MATCH scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.C_CANCEL_REQ_MATCH
         * @instance
         */
        C_CANCEL_REQ_MATCH.prototype.scmd = 3;

        /**
         * Encodes the specified C_CANCEL_REQ_MATCH message. Does not implicitly {@link FriendlyMatchPto.C_CANCEL_REQ_MATCH.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.C_CANCEL_REQ_MATCH
         * @static
         * @param {FriendlyMatchPto.IC_CANCEL_REQ_MATCH} message C_CANCEL_REQ_MATCH message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_CANCEL_REQ_MATCH.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_CANCEL_REQ_MATCH message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.C_CANCEL_REQ_MATCH
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.C_CANCEL_REQ_MATCH} C_CANCEL_REQ_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_CANCEL_REQ_MATCH.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.C_CANCEL_REQ_MATCH();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_CANCEL_REQ_MATCH
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.C_CANCEL_REQ_MATCH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_CANCEL_REQ_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_CANCEL_REQ_MATCH";
        };

        return C_CANCEL_REQ_MATCH;
    })();

    FriendlyMatchPto.S_REQ_MATCH_RESULT = (function() {

        /**
         * Properties of a S_REQ_MATCH_RESULT.
         * @memberof FriendlyMatchPto
         * @interface IS_REQ_MATCH_RESULT
         * @property {number|null} [cmd] S_REQ_MATCH_RESULT cmd
         * @property {number|null} [scmd] S_REQ_MATCH_RESULT scmd
         * @property {boolean|null} [result] S_REQ_MATCH_RESULT result
         * @property {number|null} [targetUid] S_REQ_MATCH_RESULT targetUid
         */

        /**
         * Constructs a new S_REQ_MATCH_RESULT.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_REQ_MATCH_RESULT.
         * @implements IS_REQ_MATCH_RESULT
         * @constructor
         * @param {FriendlyMatchPto.IS_REQ_MATCH_RESULT=} [properties] Properties to set
         */
        function S_REQ_MATCH_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_REQ_MATCH_RESULT cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_REQ_MATCH_RESULT
         * @instance
         */
        S_REQ_MATCH_RESULT.prototype.cmd = 201;

        /**
         * S_REQ_MATCH_RESULT scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_REQ_MATCH_RESULT
         * @instance
         */
        S_REQ_MATCH_RESULT.prototype.scmd = 4;

        /**
         * S_REQ_MATCH_RESULT result.
         * @member {boolean} result
         * @memberof FriendlyMatchPto.S_REQ_MATCH_RESULT
         * @instance
         */
        S_REQ_MATCH_RESULT.prototype.result = false;

        /**
         * S_REQ_MATCH_RESULT targetUid.
         * @member {number} targetUid
         * @memberof FriendlyMatchPto.S_REQ_MATCH_RESULT
         * @instance
         */
        S_REQ_MATCH_RESULT.prototype.targetUid = 0;

        /**
         * Encodes the specified S_REQ_MATCH_RESULT message. Does not implicitly {@link FriendlyMatchPto.S_REQ_MATCH_RESULT.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_REQ_MATCH_RESULT
         * @static
         * @param {FriendlyMatchPto.IS_REQ_MATCH_RESULT} message S_REQ_MATCH_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_REQ_MATCH_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.result);
            if (message.targetUid != null && Object.hasOwnProperty.call(message, "targetUid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.targetUid);
            return writer;
        };

        /**
         * Decodes a S_REQ_MATCH_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_REQ_MATCH_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_REQ_MATCH_RESULT} S_REQ_MATCH_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_REQ_MATCH_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_REQ_MATCH_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.result = reader.bool();
                        break;
                    }
                case 4: {
                        message.targetUid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_REQ_MATCH_RESULT
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.S_REQ_MATCH_RESULT
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_REQ_MATCH_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_REQ_MATCH_RESULT";
        };

        return S_REQ_MATCH_RESULT;
    })();

    FriendlyMatchPto.S_MATCH = (function() {

        /**
         * Properties of a S_MATCH.
         * @memberof FriendlyMatchPto
         * @interface IS_MATCH
         * @property {number|null} [cmd] S_MATCH cmd
         * @property {number|null} [scmd] S_MATCH scmd
         * @property {number|null} [friendUid] S_MATCH friendUid
         * @property {number|Long|null} [endTime] S_MATCH endTime
         */

        /**
         * Constructs a new S_MATCH.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_MATCH.
         * @implements IS_MATCH
         * @constructor
         * @param {FriendlyMatchPto.IS_MATCH=} [properties] Properties to set
         */
        function S_MATCH(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_MATCH cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_MATCH
         * @instance
         */
        S_MATCH.prototype.cmd = 201;

        /**
         * S_MATCH scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_MATCH
         * @instance
         */
        S_MATCH.prototype.scmd = 5;

        /**
         * S_MATCH friendUid.
         * @member {number} friendUid
         * @memberof FriendlyMatchPto.S_MATCH
         * @instance
         */
        S_MATCH.prototype.friendUid = 0;

        /**
         * S_MATCH endTime.
         * @member {number|Long} endTime
         * @memberof FriendlyMatchPto.S_MATCH
         * @instance
         */
        S_MATCH.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified S_MATCH message. Does not implicitly {@link FriendlyMatchPto.S_MATCH.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_MATCH
         * @static
         * @param {FriendlyMatchPto.IS_MATCH} message S_MATCH message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_MATCH.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.friendUid != null && Object.hasOwnProperty.call(message, "friendUid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.friendUid);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.endTime);
            return writer;
        };

        /**
         * Decodes a S_MATCH message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_MATCH
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_MATCH} S_MATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_MATCH.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_MATCH();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.friendUid = reader.int32();
                        break;
                    }
                case 4: {
                        message.endTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_MATCH
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.S_MATCH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_MATCH";
        };

        return S_MATCH;
    })();

    FriendlyMatchPto.C_REQ_MATCH_RESULT = (function() {

        /**
         * Properties of a C_REQ_MATCH_RESULT.
         * @memberof FriendlyMatchPto
         * @interface IC_REQ_MATCH_RESULT
         * @property {number|null} [cmd] C_REQ_MATCH_RESULT cmd
         * @property {number|null} [scmd] C_REQ_MATCH_RESULT scmd
         * @property {boolean|null} [result] C_REQ_MATCH_RESULT result
         */

        /**
         * Constructs a new C_REQ_MATCH_RESULT.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a C_REQ_MATCH_RESULT.
         * @implements IC_REQ_MATCH_RESULT
         * @constructor
         * @param {FriendlyMatchPto.IC_REQ_MATCH_RESULT=} [properties] Properties to set
         */
        function C_REQ_MATCH_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_REQ_MATCH_RESULT cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.C_REQ_MATCH_RESULT
         * @instance
         */
        C_REQ_MATCH_RESULT.prototype.cmd = 201;

        /**
         * C_REQ_MATCH_RESULT scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.C_REQ_MATCH_RESULT
         * @instance
         */
        C_REQ_MATCH_RESULT.prototype.scmd = 6;

        /**
         * C_REQ_MATCH_RESULT result.
         * @member {boolean} result
         * @memberof FriendlyMatchPto.C_REQ_MATCH_RESULT
         * @instance
         */
        C_REQ_MATCH_RESULT.prototype.result = false;

        /**
         * Encodes the specified C_REQ_MATCH_RESULT message. Does not implicitly {@link FriendlyMatchPto.C_REQ_MATCH_RESULT.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.C_REQ_MATCH_RESULT
         * @static
         * @param {FriendlyMatchPto.IC_REQ_MATCH_RESULT} message C_REQ_MATCH_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_REQ_MATCH_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.result);
            return writer;
        };

        /**
         * Decodes a C_REQ_MATCH_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.C_REQ_MATCH_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.C_REQ_MATCH_RESULT} C_REQ_MATCH_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_REQ_MATCH_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.C_REQ_MATCH_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.result = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_REQ_MATCH_RESULT
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.C_REQ_MATCH_RESULT
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_REQ_MATCH_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_REQ_MATCH_RESULT";
        };

        return C_REQ_MATCH_RESULT;
    })();

    FriendlyMatchPto.S_MATCH_CARD_GROUP = (function() {

        /**
         * Properties of a S_MATCH_CARD_GROUP.
         * @memberof FriendlyMatchPto
         * @interface IS_MATCH_CARD_GROUP
         * @property {number|null} [cmd] S_MATCH_CARD_GROUP cmd
         * @property {number|null} [scmd] S_MATCH_CARD_GROUP scmd
         * @property {number|Long|null} [endTime] S_MATCH_CARD_GROUP endTime
         */

        /**
         * Constructs a new S_MATCH_CARD_GROUP.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_MATCH_CARD_GROUP.
         * @implements IS_MATCH_CARD_GROUP
         * @constructor
         * @param {FriendlyMatchPto.IS_MATCH_CARD_GROUP=} [properties] Properties to set
         */
        function S_MATCH_CARD_GROUP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_MATCH_CARD_GROUP cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_MATCH_CARD_GROUP
         * @instance
         */
        S_MATCH_CARD_GROUP.prototype.cmd = 201;

        /**
         * S_MATCH_CARD_GROUP scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_MATCH_CARD_GROUP
         * @instance
         */
        S_MATCH_CARD_GROUP.prototype.scmd = 7;

        /**
         * S_MATCH_CARD_GROUP endTime.
         * @member {number|Long} endTime
         * @memberof FriendlyMatchPto.S_MATCH_CARD_GROUP
         * @instance
         */
        S_MATCH_CARD_GROUP.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified S_MATCH_CARD_GROUP message. Does not implicitly {@link FriendlyMatchPto.S_MATCH_CARD_GROUP.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_MATCH_CARD_GROUP
         * @static
         * @param {FriendlyMatchPto.IS_MATCH_CARD_GROUP} message S_MATCH_CARD_GROUP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_MATCH_CARD_GROUP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endTime);
            return writer;
        };

        /**
         * Decodes a S_MATCH_CARD_GROUP message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_MATCH_CARD_GROUP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_MATCH_CARD_GROUP} S_MATCH_CARD_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_MATCH_CARD_GROUP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_MATCH_CARD_GROUP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.endTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_MATCH_CARD_GROUP
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.S_MATCH_CARD_GROUP
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_MATCH_CARD_GROUP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_MATCH_CARD_GROUP";
        };

        return S_MATCH_CARD_GROUP;
    })();

    FriendlyMatchPto.C_GROUP_CHOOSE = (function() {

        /**
         * Properties of a C_GROUP_CHOOSE.
         * @memberof FriendlyMatchPto
         * @interface IC_GROUP_CHOOSE
         * @property {number|null} [cmd] C_GROUP_CHOOSE cmd
         * @property {number|null} [scmd] C_GROUP_CHOOSE scmd
         * @property {number|null} [cardGroupId] C_GROUP_CHOOSE cardGroupId
         */

        /**
         * Constructs a new C_GROUP_CHOOSE.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a C_GROUP_CHOOSE.
         * @implements IC_GROUP_CHOOSE
         * @constructor
         * @param {FriendlyMatchPto.IC_GROUP_CHOOSE=} [properties] Properties to set
         */
        function C_GROUP_CHOOSE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_GROUP_CHOOSE cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.C_GROUP_CHOOSE
         * @instance
         */
        C_GROUP_CHOOSE.prototype.cmd = 201;

        /**
         * C_GROUP_CHOOSE scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.C_GROUP_CHOOSE
         * @instance
         */
        C_GROUP_CHOOSE.prototype.scmd = 8;

        /**
         * C_GROUP_CHOOSE cardGroupId.
         * @member {number} cardGroupId
         * @memberof FriendlyMatchPto.C_GROUP_CHOOSE
         * @instance
         */
        C_GROUP_CHOOSE.prototype.cardGroupId = 0;

        /**
         * Encodes the specified C_GROUP_CHOOSE message. Does not implicitly {@link FriendlyMatchPto.C_GROUP_CHOOSE.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.C_GROUP_CHOOSE
         * @static
         * @param {FriendlyMatchPto.IC_GROUP_CHOOSE} message C_GROUP_CHOOSE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_GROUP_CHOOSE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardGroupId != null && Object.hasOwnProperty.call(message, "cardGroupId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardGroupId);
            return writer;
        };

        /**
         * Decodes a C_GROUP_CHOOSE message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.C_GROUP_CHOOSE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.C_GROUP_CHOOSE} C_GROUP_CHOOSE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_GROUP_CHOOSE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.C_GROUP_CHOOSE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardGroupId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_GROUP_CHOOSE
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.C_GROUP_CHOOSE
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_GROUP_CHOOSE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_GROUP_CHOOSE";
        };

        return C_GROUP_CHOOSE;
    })();

    FriendlyMatchPto.C_MATCH_CANCEL_GROUP = (function() {

        /**
         * Properties of a C_MATCH_CANCEL_GROUP.
         * @memberof FriendlyMatchPto
         * @interface IC_MATCH_CANCEL_GROUP
         * @property {number|null} [cmd] C_MATCH_CANCEL_GROUP cmd
         * @property {number|null} [scmd] C_MATCH_CANCEL_GROUP scmd
         */

        /**
         * Constructs a new C_MATCH_CANCEL_GROUP.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a C_MATCH_CANCEL_GROUP.
         * @implements IC_MATCH_CANCEL_GROUP
         * @constructor
         * @param {FriendlyMatchPto.IC_MATCH_CANCEL_GROUP=} [properties] Properties to set
         */
        function C_MATCH_CANCEL_GROUP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_MATCH_CANCEL_GROUP cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.C_MATCH_CANCEL_GROUP
         * @instance
         */
        C_MATCH_CANCEL_GROUP.prototype.cmd = 201;

        /**
         * C_MATCH_CANCEL_GROUP scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.C_MATCH_CANCEL_GROUP
         * @instance
         */
        C_MATCH_CANCEL_GROUP.prototype.scmd = 9;

        /**
         * Encodes the specified C_MATCH_CANCEL_GROUP message. Does not implicitly {@link FriendlyMatchPto.C_MATCH_CANCEL_GROUP.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.C_MATCH_CANCEL_GROUP
         * @static
         * @param {FriendlyMatchPto.IC_MATCH_CANCEL_GROUP} message C_MATCH_CANCEL_GROUP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_MATCH_CANCEL_GROUP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_MATCH_CANCEL_GROUP message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.C_MATCH_CANCEL_GROUP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.C_MATCH_CANCEL_GROUP} C_MATCH_CANCEL_GROUP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_MATCH_CANCEL_GROUP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.C_MATCH_CANCEL_GROUP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_MATCH_CANCEL_GROUP
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.C_MATCH_CANCEL_GROUP
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_MATCH_CANCEL_GROUP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_MATCH_CANCEL_GROUP";
        };

        return C_MATCH_CANCEL_GROUP;
    })();

    FriendlyMatchPto.C_MATCH_LEAVE = (function() {

        /**
         * Properties of a C_MATCH_LEAVE.
         * @memberof FriendlyMatchPto
         * @interface IC_MATCH_LEAVE
         * @property {number|null} [cmd] C_MATCH_LEAVE cmd
         * @property {number|null} [scmd] C_MATCH_LEAVE scmd
         */

        /**
         * Constructs a new C_MATCH_LEAVE.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a C_MATCH_LEAVE.
         * @implements IC_MATCH_LEAVE
         * @constructor
         * @param {FriendlyMatchPto.IC_MATCH_LEAVE=} [properties] Properties to set
         */
        function C_MATCH_LEAVE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_MATCH_LEAVE cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.C_MATCH_LEAVE
         * @instance
         */
        C_MATCH_LEAVE.prototype.cmd = 201;

        /**
         * C_MATCH_LEAVE scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.C_MATCH_LEAVE
         * @instance
         */
        C_MATCH_LEAVE.prototype.scmd = 10;

        /**
         * Encodes the specified C_MATCH_LEAVE message. Does not implicitly {@link FriendlyMatchPto.C_MATCH_LEAVE.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.C_MATCH_LEAVE
         * @static
         * @param {FriendlyMatchPto.IC_MATCH_LEAVE} message C_MATCH_LEAVE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_MATCH_LEAVE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_MATCH_LEAVE message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.C_MATCH_LEAVE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.C_MATCH_LEAVE} C_MATCH_LEAVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_MATCH_LEAVE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.C_MATCH_LEAVE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_MATCH_LEAVE
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.C_MATCH_LEAVE
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_MATCH_LEAVE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_MATCH_LEAVE";
        };

        return C_MATCH_LEAVE;
    })();

    FriendlyMatchPto.S_MATCH_STOP = (function() {

        /**
         * Properties of a S_MATCH_STOP.
         * @memberof FriendlyMatchPto
         * @interface IS_MATCH_STOP
         * @property {number|null} [cmd] S_MATCH_STOP cmd
         * @property {number|null} [scmd] S_MATCH_STOP scmd
         * @property {number|null} [code] S_MATCH_STOP code
         */

        /**
         * Constructs a new S_MATCH_STOP.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_MATCH_STOP.
         * @implements IS_MATCH_STOP
         * @constructor
         * @param {FriendlyMatchPto.IS_MATCH_STOP=} [properties] Properties to set
         */
        function S_MATCH_STOP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_MATCH_STOP cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_MATCH_STOP
         * @instance
         */
        S_MATCH_STOP.prototype.cmd = 201;

        /**
         * S_MATCH_STOP scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_MATCH_STOP
         * @instance
         */
        S_MATCH_STOP.prototype.scmd = 11;

        /**
         * S_MATCH_STOP code.
         * @member {number} code
         * @memberof FriendlyMatchPto.S_MATCH_STOP
         * @instance
         */
        S_MATCH_STOP.prototype.code = 0;

        /**
         * Encodes the specified S_MATCH_STOP message. Does not implicitly {@link FriendlyMatchPto.S_MATCH_STOP.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_MATCH_STOP
         * @static
         * @param {FriendlyMatchPto.IS_MATCH_STOP} message S_MATCH_STOP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_MATCH_STOP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            return writer;
        };

        /**
         * Decodes a S_MATCH_STOP message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_MATCH_STOP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_MATCH_STOP} S_MATCH_STOP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_MATCH_STOP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_MATCH_STOP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.code = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_MATCH_STOP
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.S_MATCH_STOP
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_MATCH_STOP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_MATCH_STOP";
        };

        return S_MATCH_STOP;
    })();

    FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE = (function() {

        /**
         * Properties of a S_FRIEND_GROUP_STATUS_CHANGE.
         * @memberof FriendlyMatchPto
         * @interface IS_FRIEND_GROUP_STATUS_CHANGE
         * @property {number|null} [cmd] S_FRIEND_GROUP_STATUS_CHANGE cmd
         * @property {number|null} [scmd] S_FRIEND_GROUP_STATUS_CHANGE scmd
         * @property {boolean|null} [isChoose] S_FRIEND_GROUP_STATUS_CHANGE isChoose
         */

        /**
         * Constructs a new S_FRIEND_GROUP_STATUS_CHANGE.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_FRIEND_GROUP_STATUS_CHANGE.
         * @implements IS_FRIEND_GROUP_STATUS_CHANGE
         * @constructor
         * @param {FriendlyMatchPto.IS_FRIEND_GROUP_STATUS_CHANGE=} [properties] Properties to set
         */
        function S_FRIEND_GROUP_STATUS_CHANGE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_FRIEND_GROUP_STATUS_CHANGE cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE
         * @instance
         */
        S_FRIEND_GROUP_STATUS_CHANGE.prototype.cmd = 201;

        /**
         * S_FRIEND_GROUP_STATUS_CHANGE scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE
         * @instance
         */
        S_FRIEND_GROUP_STATUS_CHANGE.prototype.scmd = 12;

        /**
         * S_FRIEND_GROUP_STATUS_CHANGE isChoose.
         * @member {boolean} isChoose
         * @memberof FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE
         * @instance
         */
        S_FRIEND_GROUP_STATUS_CHANGE.prototype.isChoose = false;

        /**
         * Encodes the specified S_FRIEND_GROUP_STATUS_CHANGE message. Does not implicitly {@link FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE
         * @static
         * @param {FriendlyMatchPto.IS_FRIEND_GROUP_STATUS_CHANGE} message S_FRIEND_GROUP_STATUS_CHANGE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_FRIEND_GROUP_STATUS_CHANGE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isChoose != null && Object.hasOwnProperty.call(message, "isChoose"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isChoose);
            return writer;
        };

        /**
         * Decodes a S_FRIEND_GROUP_STATUS_CHANGE message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE} S_FRIEND_GROUP_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_FRIEND_GROUP_STATUS_CHANGE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.isChoose = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_FRIEND_GROUP_STATUS_CHANGE
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_FRIEND_GROUP_STATUS_CHANGE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE";
        };

        return S_FRIEND_GROUP_STATUS_CHANGE;
    })();

    FriendlyMatchPto.S_GROUP_CHOOSE_RESULT = (function() {

        /**
         * Properties of a S_GROUP_CHOOSE_RESULT.
         * @memberof FriendlyMatchPto
         * @interface IS_GROUP_CHOOSE_RESULT
         * @property {number|null} [cmd] S_GROUP_CHOOSE_RESULT cmd
         * @property {number|null} [scmd] S_GROUP_CHOOSE_RESULT scmd
         * @property {number|null} [code] S_GROUP_CHOOSE_RESULT code
         */

        /**
         * Constructs a new S_GROUP_CHOOSE_RESULT.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_GROUP_CHOOSE_RESULT.
         * @implements IS_GROUP_CHOOSE_RESULT
         * @constructor
         * @param {FriendlyMatchPto.IS_GROUP_CHOOSE_RESULT=} [properties] Properties to set
         */
        function S_GROUP_CHOOSE_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_GROUP_CHOOSE_RESULT cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_GROUP_CHOOSE_RESULT
         * @instance
         */
        S_GROUP_CHOOSE_RESULT.prototype.cmd = 201;

        /**
         * S_GROUP_CHOOSE_RESULT scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_GROUP_CHOOSE_RESULT
         * @instance
         */
        S_GROUP_CHOOSE_RESULT.prototype.scmd = 13;

        /**
         * S_GROUP_CHOOSE_RESULT code.
         * @member {number} code
         * @memberof FriendlyMatchPto.S_GROUP_CHOOSE_RESULT
         * @instance
         */
        S_GROUP_CHOOSE_RESULT.prototype.code = 0;

        /**
         * Encodes the specified S_GROUP_CHOOSE_RESULT message. Does not implicitly {@link FriendlyMatchPto.S_GROUP_CHOOSE_RESULT.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_GROUP_CHOOSE_RESULT
         * @static
         * @param {FriendlyMatchPto.IS_GROUP_CHOOSE_RESULT} message S_GROUP_CHOOSE_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_GROUP_CHOOSE_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            return writer;
        };

        /**
         * Decodes a S_GROUP_CHOOSE_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_GROUP_CHOOSE_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_GROUP_CHOOSE_RESULT} S_GROUP_CHOOSE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_GROUP_CHOOSE_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_GROUP_CHOOSE_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.code = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_GROUP_CHOOSE_RESULT
         * @function getTypeUrl
         * @memberof FriendlyMatchPto.S_GROUP_CHOOSE_RESULT
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_GROUP_CHOOSE_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_GROUP_CHOOSE_RESULT";
        };

        return S_GROUP_CHOOSE_RESULT;
    })();

    return FriendlyMatchPto;
})();

$root.GamePto = (function() {

    /**
     * Namespace GamePto.
     * @exports GamePto
     * @namespace
     */
    var GamePto = {};

    /**
     * EventType enum.
     * @name GamePto.EventType
     * @enum {number}
     * @property {number} DrawCard=0 DrawCard value
     * @property {number} FATIGUE=1 FATIGUE value
     */
    GamePto.EventType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DrawCard"] = 0;
        values[valuesById[1] = "FATIGUE"] = 1;
        return values;
    })();

    GamePto.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof GamePto
         * @interface IUserInfo
         * @property {string|null} [nick] UserInfo nick
         * @property {number|null} [power] UserInfo power
         * @property {number|null} [uid] UserInfo uid
         */

        /**
         * Constructs a new UserInfo.
         * @memberof GamePto
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {GamePto.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo nick.
         * @member {string} nick
         * @memberof GamePto.UserInfo
         * @instance
         */
        UserInfo.prototype.nick = "";

        /**
         * UserInfo power.
         * @member {number} power
         * @memberof GamePto.UserInfo
         * @instance
         */
        UserInfo.prototype.power = 0;

        /**
         * UserInfo uid.
         * @member {number} uid
         * @memberof GamePto.UserInfo
         * @instance
         */
        UserInfo.prototype.uid = 0;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link GamePto.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GamePto.UserInfo
         * @static
         * @param {GamePto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 0, wireType 2 =*/2).string(message.nick);
            if (message.power != null && Object.hasOwnProperty.call(message, "power"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.power);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            return writer;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.nick = reader.string();
                        break;
                    }
                case 1: {
                        message.power = reader.int32();
                        break;
                    }
                case 2: {
                        message.uid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for UserInfo
         * @function getTypeUrl
         * @memberof GamePto.UserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.UserInfo";
        };

        return UserInfo;
    })();

    GamePto.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof GamePto
         * @interface ICard
         * @property {number|null} [cardId] Card cardId
         * @property {number|null} [attack] Card attack
         * @property {number|null} [health] Card health
         * @property {number|null} [fee] Card fee
         * @property {boolean|null} [allowAtk] Card allowAtk
         * @property {number|null} [uid] Card uid
         * @property {number|null} [blockX] Card blockX
         * @property {number|null} [blockY] Card blockY
         */

        /**
         * Constructs a new Card.
         * @memberof GamePto
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {GamePto.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card cardId.
         * @member {number} cardId
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.cardId = 0;

        /**
         * Card attack.
         * @member {number} attack
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.attack = 0;

        /**
         * Card health.
         * @member {number} health
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.health = 0;

        /**
         * Card fee.
         * @member {number} fee
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.fee = 0;

        /**
         * Card allowAtk.
         * @member {boolean} allowAtk
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.allowAtk = false;

        /**
         * Card uid.
         * @member {number} uid
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.uid = 0;

        /**
         * Card blockX.
         * @member {number} blockX
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.blockX = 0;

        /**
         * Card blockY.
         * @member {number} blockY
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.blockY = 0;

        /**
         * Encodes the specified Card message. Does not implicitly {@link GamePto.Card.verify|verify} messages.
         * @function encode
         * @memberof GamePto.Card
         * @static
         * @param {GamePto.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.cardId);
            if (message.attack != null && Object.hasOwnProperty.call(message, "attack"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.attack);
            if (message.health != null && Object.hasOwnProperty.call(message, "health"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.health);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fee);
            if (message.allowAtk != null && Object.hasOwnProperty.call(message, "allowAtk"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.allowAtk);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.uid);
            if (message.blockX != null && Object.hasOwnProperty.call(message, "blockX"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.blockX);
            if (message.blockY != null && Object.hasOwnProperty.call(message, "blockY"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.blockY);
            return writer;
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.Card();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.cardId = reader.int32();
                        break;
                    }
                case 1: {
                        message.attack = reader.int32();
                        break;
                    }
                case 2: {
                        message.health = reader.int32();
                        break;
                    }
                case 3: {
                        message.fee = reader.int32();
                        break;
                    }
                case 4: {
                        message.allowAtk = reader.bool();
                        break;
                    }
                case 5: {
                        message.uid = reader.int32();
                        break;
                    }
                case 6: {
                        message.blockX = reader.int32();
                        break;
                    }
                case 7: {
                        message.blockY = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Card
         * @function getTypeUrl
         * @memberof GamePto.Card
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Card.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.Card";
        };

        return Card;
    })();

    GamePto.MapData = (function() {

        /**
         * Properties of a MapData.
         * @memberof GamePto
         * @interface IMapData
         * @property {Array.<GamePto.ICard>|null} [eventCards] MapData eventCards
         * @property {Array.<GamePto.ICard>|null} [unitCards] MapData unitCards
         */

        /**
         * Constructs a new MapData.
         * @memberof GamePto
         * @classdesc Represents a MapData.
         * @implements IMapData
         * @constructor
         * @param {GamePto.IMapData=} [properties] Properties to set
         */
        function MapData(properties) {
            this.eventCards = [];
            this.unitCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MapData eventCards.
         * @member {Array.<GamePto.ICard>} eventCards
         * @memberof GamePto.MapData
         * @instance
         */
        MapData.prototype.eventCards = $util.emptyArray;

        /**
         * MapData unitCards.
         * @member {Array.<GamePto.ICard>} unitCards
         * @memberof GamePto.MapData
         * @instance
         */
        MapData.prototype.unitCards = $util.emptyArray;

        /**
         * Encodes the specified MapData message. Does not implicitly {@link GamePto.MapData.verify|verify} messages.
         * @function encode
         * @memberof GamePto.MapData
         * @static
         * @param {GamePto.IMapData} message MapData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventCards != null && message.eventCards.length)
                for (var i = 0; i < message.eventCards.length; ++i)
                    $root.GamePto.Card.encode(message.eventCards[i], writer.uint32(/* id 0, wireType 2 =*/2).fork()).ldelim();
            if (message.unitCards != null && message.unitCards.length)
                for (var i = 0; i < message.unitCards.length; ++i)
                    $root.GamePto.Card.encode(message.unitCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a MapData message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.MapData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.MapData} MapData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.MapData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        if (!(message.eventCards && message.eventCards.length))
                            message.eventCards = [];
                        message.eventCards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 1: {
                        if (!(message.unitCards && message.unitCards.length))
                            message.unitCards = [];
                        message.unitCards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for MapData
         * @function getTypeUrl
         * @memberof GamePto.MapData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MapData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.MapData";
        };

        return MapData;
    })();

    GamePto.C_PREPARE_TO_START = (function() {

        /**
         * Properties of a C_PREPARE_TO_START.
         * @memberof GamePto
         * @interface IC_PREPARE_TO_START
         * @property {number|null} [cmd] C_PREPARE_TO_START cmd
         * @property {number|null} [scmd] C_PREPARE_TO_START scmd
         * @property {Array.<number>|null} [replaceCardIndexes] C_PREPARE_TO_START replaceCardIndexes
         */

        /**
         * Constructs a new C_PREPARE_TO_START.
         * @memberof GamePto
         * @classdesc Represents a C_PREPARE_TO_START.
         * @implements IC_PREPARE_TO_START
         * @constructor
         * @param {GamePto.IC_PREPARE_TO_START=} [properties] Properties to set
         */
        function C_PREPARE_TO_START(properties) {
            this.replaceCardIndexes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_PREPARE_TO_START cmd.
         * @member {number} cmd
         * @memberof GamePto.C_PREPARE_TO_START
         * @instance
         */
        C_PREPARE_TO_START.prototype.cmd = 200;

        /**
         * C_PREPARE_TO_START scmd.
         * @member {number} scmd
         * @memberof GamePto.C_PREPARE_TO_START
         * @instance
         */
        C_PREPARE_TO_START.prototype.scmd = 1;

        /**
         * C_PREPARE_TO_START replaceCardIndexes.
         * @member {Array.<number>} replaceCardIndexes
         * @memberof GamePto.C_PREPARE_TO_START
         * @instance
         */
        C_PREPARE_TO_START.prototype.replaceCardIndexes = $util.emptyArray;

        /**
         * Encodes the specified C_PREPARE_TO_START message. Does not implicitly {@link GamePto.C_PREPARE_TO_START.verify|verify} messages.
         * @function encode
         * @memberof GamePto.C_PREPARE_TO_START
         * @static
         * @param {GamePto.IC_PREPARE_TO_START} message C_PREPARE_TO_START message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_PREPARE_TO_START.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.replaceCardIndexes != null && message.replaceCardIndexes.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.replaceCardIndexes.length; ++i)
                    writer.int32(message.replaceCardIndexes[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a C_PREPARE_TO_START message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.C_PREPARE_TO_START
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.C_PREPARE_TO_START} C_PREPARE_TO_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_PREPARE_TO_START.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.C_PREPARE_TO_START();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.replaceCardIndexes && message.replaceCardIndexes.length))
                            message.replaceCardIndexes = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.replaceCardIndexes.push(reader.int32());
                        } else
                            message.replaceCardIndexes.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_PREPARE_TO_START
         * @function getTypeUrl
         * @memberof GamePto.C_PREPARE_TO_START
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_PREPARE_TO_START.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_PREPARE_TO_START";
        };

        return C_PREPARE_TO_START;
    })();

    GamePto.C_END_ROUND = (function() {

        /**
         * Properties of a C_END_ROUND.
         * @memberof GamePto
         * @interface IC_END_ROUND
         * @property {number|null} [cmd] C_END_ROUND cmd
         * @property {number|null} [scmd] C_END_ROUND scmd
         */

        /**
         * Constructs a new C_END_ROUND.
         * @memberof GamePto
         * @classdesc Represents a C_END_ROUND.
         * @implements IC_END_ROUND
         * @constructor
         * @param {GamePto.IC_END_ROUND=} [properties] Properties to set
         */
        function C_END_ROUND(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_END_ROUND cmd.
         * @member {number} cmd
         * @memberof GamePto.C_END_ROUND
         * @instance
         */
        C_END_ROUND.prototype.cmd = 200;

        /**
         * C_END_ROUND scmd.
         * @member {number} scmd
         * @memberof GamePto.C_END_ROUND
         * @instance
         */
        C_END_ROUND.prototype.scmd = 2;

        /**
         * Encodes the specified C_END_ROUND message. Does not implicitly {@link GamePto.C_END_ROUND.verify|verify} messages.
         * @function encode
         * @memberof GamePto.C_END_ROUND
         * @static
         * @param {GamePto.IC_END_ROUND} message C_END_ROUND message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_END_ROUND.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_END_ROUND message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.C_END_ROUND
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.C_END_ROUND} C_END_ROUND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_END_ROUND.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.C_END_ROUND();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_END_ROUND
         * @function getTypeUrl
         * @memberof GamePto.C_END_ROUND
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_END_ROUND.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_END_ROUND";
        };

        return C_END_ROUND;
    })();

    GamePto.C_DISCARD = (function() {

        /**
         * Properties of a C_DISCARD.
         * @memberof GamePto
         * @interface IC_DISCARD
         * @property {number|null} [cmd] C_DISCARD cmd
         * @property {number|null} [scmd] C_DISCARD scmd
         * @property {number|null} [cardIndex] C_DISCARD cardIndex
         */

        /**
         * Constructs a new C_DISCARD.
         * @memberof GamePto
         * @classdesc Represents a C_DISCARD.
         * @implements IC_DISCARD
         * @constructor
         * @param {GamePto.IC_DISCARD=} [properties] Properties to set
         */
        function C_DISCARD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_DISCARD cmd.
         * @member {number} cmd
         * @memberof GamePto.C_DISCARD
         * @instance
         */
        C_DISCARD.prototype.cmd = 200;

        /**
         * C_DISCARD scmd.
         * @member {number} scmd
         * @memberof GamePto.C_DISCARD
         * @instance
         */
        C_DISCARD.prototype.scmd = 3;

        /**
         * C_DISCARD cardIndex.
         * @member {number} cardIndex
         * @memberof GamePto.C_DISCARD
         * @instance
         */
        C_DISCARD.prototype.cardIndex = 0;

        /**
         * Encodes the specified C_DISCARD message. Does not implicitly {@link GamePto.C_DISCARD.verify|verify} messages.
         * @function encode
         * @memberof GamePto.C_DISCARD
         * @static
         * @param {GamePto.IC_DISCARD} message C_DISCARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_DISCARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardIndex != null && Object.hasOwnProperty.call(message, "cardIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardIndex);
            return writer;
        };

        /**
         * Decodes a C_DISCARD message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.C_DISCARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.C_DISCARD} C_DISCARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_DISCARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.C_DISCARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardIndex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_DISCARD
         * @function getTypeUrl
         * @memberof GamePto.C_DISCARD
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_DISCARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_DISCARD";
        };

        return C_DISCARD;
    })();

    GamePto.C_USE_CARD = (function() {

        /**
         * Properties of a C_USE_CARD.
         * @memberof GamePto
         * @interface IC_USE_CARD
         * @property {number|null} [cmd] C_USE_CARD cmd
         * @property {number|null} [scmd] C_USE_CARD scmd
         * @property {number|null} [cardIndex] C_USE_CARD cardIndex
         * @property {number|null} [blockX] C_USE_CARD blockX
         * @property {number|null} [blockY] C_USE_CARD blockY
         */

        /**
         * Constructs a new C_USE_CARD.
         * @memberof GamePto
         * @classdesc Represents a C_USE_CARD.
         * @implements IC_USE_CARD
         * @constructor
         * @param {GamePto.IC_USE_CARD=} [properties] Properties to set
         */
        function C_USE_CARD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_USE_CARD cmd.
         * @member {number} cmd
         * @memberof GamePto.C_USE_CARD
         * @instance
         */
        C_USE_CARD.prototype.cmd = 200;

        /**
         * C_USE_CARD scmd.
         * @member {number} scmd
         * @memberof GamePto.C_USE_CARD
         * @instance
         */
        C_USE_CARD.prototype.scmd = 4;

        /**
         * C_USE_CARD cardIndex.
         * @member {number} cardIndex
         * @memberof GamePto.C_USE_CARD
         * @instance
         */
        C_USE_CARD.prototype.cardIndex = 0;

        /**
         * C_USE_CARD blockX.
         * @member {number} blockX
         * @memberof GamePto.C_USE_CARD
         * @instance
         */
        C_USE_CARD.prototype.blockX = 0;

        /**
         * C_USE_CARD blockY.
         * @member {number} blockY
         * @memberof GamePto.C_USE_CARD
         * @instance
         */
        C_USE_CARD.prototype.blockY = 0;

        /**
         * Encodes the specified C_USE_CARD message. Does not implicitly {@link GamePto.C_USE_CARD.verify|verify} messages.
         * @function encode
         * @memberof GamePto.C_USE_CARD
         * @static
         * @param {GamePto.IC_USE_CARD} message C_USE_CARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_USE_CARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cardIndex != null && Object.hasOwnProperty.call(message, "cardIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardIndex);
            if (message.blockX != null && Object.hasOwnProperty.call(message, "blockX"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.blockX);
            if (message.blockY != null && Object.hasOwnProperty.call(message, "blockY"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.blockY);
            return writer;
        };

        /**
         * Decodes a C_USE_CARD message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.C_USE_CARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.C_USE_CARD} C_USE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_USE_CARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.C_USE_CARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardIndex = reader.int32();
                        break;
                    }
                case 4: {
                        message.blockX = reader.int32();
                        break;
                    }
                case 5: {
                        message.blockY = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_USE_CARD
         * @function getTypeUrl
         * @memberof GamePto.C_USE_CARD
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_USE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_USE_CARD";
        };

        return C_USE_CARD;
    })();

    GamePto.S_SERVER_ERROR = (function() {

        /**
         * Properties of a S_SERVER_ERROR.
         * @memberof GamePto
         * @interface IS_SERVER_ERROR
         * @property {number|null} [cmd] S_SERVER_ERROR cmd
         * @property {number|null} [scmd] S_SERVER_ERROR scmd
         * @property {string|null} [message] S_SERVER_ERROR message
         */

        /**
         * Constructs a new S_SERVER_ERROR.
         * @memberof GamePto
         * @classdesc Represents a S_SERVER_ERROR.
         * @implements IS_SERVER_ERROR
         * @constructor
         * @param {GamePto.IS_SERVER_ERROR=} [properties] Properties to set
         */
        function S_SERVER_ERROR(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_SERVER_ERROR cmd.
         * @member {number} cmd
         * @memberof GamePto.S_SERVER_ERROR
         * @instance
         */
        S_SERVER_ERROR.prototype.cmd = 200;

        /**
         * S_SERVER_ERROR scmd.
         * @member {number} scmd
         * @memberof GamePto.S_SERVER_ERROR
         * @instance
         */
        S_SERVER_ERROR.prototype.scmd = 10000;

        /**
         * S_SERVER_ERROR message.
         * @member {string} message
         * @memberof GamePto.S_SERVER_ERROR
         * @instance
         */
        S_SERVER_ERROR.prototype.message = "";

        /**
         * Encodes the specified S_SERVER_ERROR message. Does not implicitly {@link GamePto.S_SERVER_ERROR.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_SERVER_ERROR
         * @static
         * @param {GamePto.IS_SERVER_ERROR} message S_SERVER_ERROR message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_SERVER_ERROR.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Decodes a S_SERVER_ERROR message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_SERVER_ERROR
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_SERVER_ERROR} S_SERVER_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_SERVER_ERROR.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_SERVER_ERROR();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_SERVER_ERROR
         * @function getTypeUrl
         * @memberof GamePto.S_SERVER_ERROR
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_SERVER_ERROR.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_SERVER_ERROR";
        };

        return S_SERVER_ERROR;
    })();

    GamePto.S_INIT_GAME = (function() {

        /**
         * Properties of a S_INIT_GAME.
         * @memberof GamePto
         * @interface IS_INIT_GAME
         * @property {number|null} [cmd] S_INIT_GAME cmd
         * @property {number|null} [scmd] S_INIT_GAME scmd
         * @property {Array.<GamePto.IUserInfo>|null} [users] S_INIT_GAME users
         */

        /**
         * Constructs a new S_INIT_GAME.
         * @memberof GamePto
         * @classdesc Represents a S_INIT_GAME.
         * @implements IS_INIT_GAME
         * @constructor
         * @param {GamePto.IS_INIT_GAME=} [properties] Properties to set
         */
        function S_INIT_GAME(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_INIT_GAME cmd.
         * @member {number} cmd
         * @memberof GamePto.S_INIT_GAME
         * @instance
         */
        S_INIT_GAME.prototype.cmd = 200;

        /**
         * S_INIT_GAME scmd.
         * @member {number} scmd
         * @memberof GamePto.S_INIT_GAME
         * @instance
         */
        S_INIT_GAME.prototype.scmd = 10001;

        /**
         * S_INIT_GAME users.
         * @member {Array.<GamePto.IUserInfo>} users
         * @memberof GamePto.S_INIT_GAME
         * @instance
         */
        S_INIT_GAME.prototype.users = $util.emptyArray;

        /**
         * Encodes the specified S_INIT_GAME message. Does not implicitly {@link GamePto.S_INIT_GAME.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_INIT_GAME
         * @static
         * @param {GamePto.IS_INIT_GAME} message S_INIT_GAME message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_INIT_GAME.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.GamePto.UserInfo.encode(message.users[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_INIT_GAME message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_INIT_GAME
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_INIT_GAME} S_INIT_GAME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_INIT_GAME.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_INIT_GAME();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.GamePto.UserInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_INIT_GAME
         * @function getTypeUrl
         * @memberof GamePto.S_INIT_GAME
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_INIT_GAME.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_INIT_GAME";
        };

        return S_INIT_GAME;
    })();

    GamePto.S_GAME_START = (function() {

        /**
         * Properties of a S_GAME_START.
         * @memberof GamePto
         * @interface IS_GAME_START
         * @property {number|null} [cmd] S_GAME_START cmd
         * @property {number|null} [scmd] S_GAME_START scmd
         * @property {number|null} [firstUid] S_GAME_START firstUid
         * @property {Array.<GamePto.ICard>|null} [cards] S_GAME_START cards
         * @property {GamePto.IMapData|null} [mapData] S_GAME_START mapData
         * @property {number|Long|null} [replaceEndTime] S_GAME_START replaceEndTime
         */

        /**
         * Constructs a new S_GAME_START.
         * @memberof GamePto
         * @classdesc Represents a S_GAME_START.
         * @implements IS_GAME_START
         * @constructor
         * @param {GamePto.IS_GAME_START=} [properties] Properties to set
         */
        function S_GAME_START(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_GAME_START cmd.
         * @member {number} cmd
         * @memberof GamePto.S_GAME_START
         * @instance
         */
        S_GAME_START.prototype.cmd = 200;

        /**
         * S_GAME_START scmd.
         * @member {number} scmd
         * @memberof GamePto.S_GAME_START
         * @instance
         */
        S_GAME_START.prototype.scmd = 10002;

        /**
         * S_GAME_START firstUid.
         * @member {number} firstUid
         * @memberof GamePto.S_GAME_START
         * @instance
         */
        S_GAME_START.prototype.firstUid = 0;

        /**
         * S_GAME_START cards.
         * @member {Array.<GamePto.ICard>} cards
         * @memberof GamePto.S_GAME_START
         * @instance
         */
        S_GAME_START.prototype.cards = $util.emptyArray;

        /**
         * S_GAME_START mapData.
         * @member {GamePto.IMapData|null|undefined} mapData
         * @memberof GamePto.S_GAME_START
         * @instance
         */
        S_GAME_START.prototype.mapData = null;

        /**
         * S_GAME_START replaceEndTime.
         * @member {number|Long} replaceEndTime
         * @memberof GamePto.S_GAME_START
         * @instance
         */
        S_GAME_START.prototype.replaceEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified S_GAME_START message. Does not implicitly {@link GamePto.S_GAME_START.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_GAME_START
         * @static
         * @param {GamePto.IS_GAME_START} message S_GAME_START message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_GAME_START.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.firstUid != null && Object.hasOwnProperty.call(message, "firstUid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.firstUid);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.GamePto.Card.encode(message.cards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.mapData != null && Object.hasOwnProperty.call(message, "mapData"))
                $root.GamePto.MapData.encode(message.mapData, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.replaceEndTime != null && Object.hasOwnProperty.call(message, "replaceEndTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.replaceEndTime);
            return writer;
        };

        /**
         * Decodes a S_GAME_START message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_GAME_START
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_GAME_START} S_GAME_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_GAME_START.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_GAME_START();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.firstUid = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.mapData = $root.GamePto.MapData.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.replaceEndTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_GAME_START
         * @function getTypeUrl
         * @memberof GamePto.S_GAME_START
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_GAME_START.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_GAME_START";
        };

        return S_GAME_START;
    })();

    GamePto.S_REPLACE_CARDS = (function() {

        /**
         * Properties of a S_REPLACE_CARDS.
         * @memberof GamePto
         * @interface IS_REPLACE_CARDS
         * @property {number|null} [cmd] S_REPLACE_CARDS cmd
         * @property {number|null} [scmd] S_REPLACE_CARDS scmd
         * @property {Array.<GamePto.ICard>|null} [cards] S_REPLACE_CARDS cards
         * @property {Array.<number>|null} [replaceCardIndexes] S_REPLACE_CARDS replaceCardIndexes
         * @property {number|null} [uid] S_REPLACE_CARDS uid
         */

        /**
         * Constructs a new S_REPLACE_CARDS.
         * @memberof GamePto
         * @classdesc Represents a S_REPLACE_CARDS.
         * @implements IS_REPLACE_CARDS
         * @constructor
         * @param {GamePto.IS_REPLACE_CARDS=} [properties] Properties to set
         */
        function S_REPLACE_CARDS(properties) {
            this.cards = [];
            this.replaceCardIndexes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_REPLACE_CARDS cmd.
         * @member {number} cmd
         * @memberof GamePto.S_REPLACE_CARDS
         * @instance
         */
        S_REPLACE_CARDS.prototype.cmd = 200;

        /**
         * S_REPLACE_CARDS scmd.
         * @member {number} scmd
         * @memberof GamePto.S_REPLACE_CARDS
         * @instance
         */
        S_REPLACE_CARDS.prototype.scmd = 10003;

        /**
         * S_REPLACE_CARDS cards.
         * @member {Array.<GamePto.ICard>} cards
         * @memberof GamePto.S_REPLACE_CARDS
         * @instance
         */
        S_REPLACE_CARDS.prototype.cards = $util.emptyArray;

        /**
         * S_REPLACE_CARDS replaceCardIndexes.
         * @member {Array.<number>} replaceCardIndexes
         * @memberof GamePto.S_REPLACE_CARDS
         * @instance
         */
        S_REPLACE_CARDS.prototype.replaceCardIndexes = $util.emptyArray;

        /**
         * S_REPLACE_CARDS uid.
         * @member {number} uid
         * @memberof GamePto.S_REPLACE_CARDS
         * @instance
         */
        S_REPLACE_CARDS.prototype.uid = 0;

        /**
         * Encodes the specified S_REPLACE_CARDS message. Does not implicitly {@link GamePto.S_REPLACE_CARDS.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_REPLACE_CARDS
         * @static
         * @param {GamePto.IS_REPLACE_CARDS} message S_REPLACE_CARDS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_REPLACE_CARDS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.GamePto.Card.encode(message.cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.replaceCardIndexes != null && message.replaceCardIndexes.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.replaceCardIndexes.length; ++i)
                    writer.int32(message.replaceCardIndexes[i]);
                writer.ldelim();
            }
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.uid);
            return writer;
        };

        /**
         * Decodes a S_REPLACE_CARDS message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_REPLACE_CARDS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_REPLACE_CARDS} S_REPLACE_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_REPLACE_CARDS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_REPLACE_CARDS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.replaceCardIndexes && message.replaceCardIndexes.length))
                            message.replaceCardIndexes = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.replaceCardIndexes.push(reader.int32());
                        } else
                            message.replaceCardIndexes.push(reader.int32());
                        break;
                    }
                case 5: {
                        message.uid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_REPLACE_CARDS
         * @function getTypeUrl
         * @memberof GamePto.S_REPLACE_CARDS
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_REPLACE_CARDS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_REPLACE_CARDS";
        };

        return S_REPLACE_CARDS;
    })();

    GamePto.S_ROUND_START_EVENT = (function() {

        /**
         * Properties of a S_ROUND_START_EVENT.
         * @memberof GamePto
         * @interface IS_ROUND_START_EVENT
         * @property {number|null} [cmd] S_ROUND_START_EVENT cmd
         * @property {number|null} [scmd] S_ROUND_START_EVENT scmd
         * @property {number|null} [uid] S_ROUND_START_EVENT uid
         * @property {number|null} [atkTimes] S_ROUND_START_EVENT atkTimes
         * @property {number|null} [atkTimesLimit] S_ROUND_START_EVENT atkTimesLimit
         * @property {number|null} [moveTimes] S_ROUND_START_EVENT moveTimes
         * @property {number|null} [moveTimesLimit] S_ROUND_START_EVENT moveTimesLimit
         */

        /**
         * Constructs a new S_ROUND_START_EVENT.
         * @memberof GamePto
         * @classdesc Represents a S_ROUND_START_EVENT.
         * @implements IS_ROUND_START_EVENT
         * @constructor
         * @param {GamePto.IS_ROUND_START_EVENT=} [properties] Properties to set
         */
        function S_ROUND_START_EVENT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ROUND_START_EVENT cmd.
         * @member {number} cmd
         * @memberof GamePto.S_ROUND_START_EVENT
         * @instance
         */
        S_ROUND_START_EVENT.prototype.cmd = 200;

        /**
         * S_ROUND_START_EVENT scmd.
         * @member {number} scmd
         * @memberof GamePto.S_ROUND_START_EVENT
         * @instance
         */
        S_ROUND_START_EVENT.prototype.scmd = 10004;

        /**
         * S_ROUND_START_EVENT uid.
         * @member {number} uid
         * @memberof GamePto.S_ROUND_START_EVENT
         * @instance
         */
        S_ROUND_START_EVENT.prototype.uid = 0;

        /**
         * S_ROUND_START_EVENT atkTimes.
         * @member {number} atkTimes
         * @memberof GamePto.S_ROUND_START_EVENT
         * @instance
         */
        S_ROUND_START_EVENT.prototype.atkTimes = 0;

        /**
         * S_ROUND_START_EVENT atkTimesLimit.
         * @member {number} atkTimesLimit
         * @memberof GamePto.S_ROUND_START_EVENT
         * @instance
         */
        S_ROUND_START_EVENT.prototype.atkTimesLimit = 0;

        /**
         * S_ROUND_START_EVENT moveTimes.
         * @member {number} moveTimes
         * @memberof GamePto.S_ROUND_START_EVENT
         * @instance
         */
        S_ROUND_START_EVENT.prototype.moveTimes = 0;

        /**
         * S_ROUND_START_EVENT moveTimesLimit.
         * @member {number} moveTimesLimit
         * @memberof GamePto.S_ROUND_START_EVENT
         * @instance
         */
        S_ROUND_START_EVENT.prototype.moveTimesLimit = 0;

        /**
         * Encodes the specified S_ROUND_START_EVENT message. Does not implicitly {@link GamePto.S_ROUND_START_EVENT.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_ROUND_START_EVENT
         * @static
         * @param {GamePto.IS_ROUND_START_EVENT} message S_ROUND_START_EVENT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ROUND_START_EVENT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.uid);
            if (message.atkTimes != null && Object.hasOwnProperty.call(message, "atkTimes"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.atkTimes);
            if (message.atkTimesLimit != null && Object.hasOwnProperty.call(message, "atkTimesLimit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.atkTimesLimit);
            if (message.moveTimes != null && Object.hasOwnProperty.call(message, "moveTimes"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.moveTimes);
            if (message.moveTimesLimit != null && Object.hasOwnProperty.call(message, "moveTimesLimit"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.moveTimesLimit);
            return writer;
        };

        /**
         * Decodes a S_ROUND_START_EVENT message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_ROUND_START_EVENT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_ROUND_START_EVENT} S_ROUND_START_EVENT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ROUND_START_EVENT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_ROUND_START_EVENT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.uid = reader.int32();
                        break;
                    }
                case 4: {
                        message.atkTimes = reader.int32();
                        break;
                    }
                case 5: {
                        message.atkTimesLimit = reader.int32();
                        break;
                    }
                case 6: {
                        message.moveTimes = reader.int32();
                        break;
                    }
                case 7: {
                        message.moveTimesLimit = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_ROUND_START_EVENT
         * @function getTypeUrl
         * @memberof GamePto.S_ROUND_START_EVENT
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_ROUND_START_EVENT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_ROUND_START_EVENT";
        };

        return S_ROUND_START_EVENT;
    })();

    GamePto.S_ROUND_END_EVENT = (function() {

        /**
         * Properties of a S_ROUND_END_EVENT.
         * @memberof GamePto
         * @interface IS_ROUND_END_EVENT
         * @property {number|null} [cmd] S_ROUND_END_EVENT cmd
         * @property {number|null} [scmd] S_ROUND_END_EVENT scmd
         * @property {number|null} [uid] S_ROUND_END_EVENT uid
         */

        /**
         * Constructs a new S_ROUND_END_EVENT.
         * @memberof GamePto
         * @classdesc Represents a S_ROUND_END_EVENT.
         * @implements IS_ROUND_END_EVENT
         * @constructor
         * @param {GamePto.IS_ROUND_END_EVENT=} [properties] Properties to set
         */
        function S_ROUND_END_EVENT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ROUND_END_EVENT cmd.
         * @member {number} cmd
         * @memberof GamePto.S_ROUND_END_EVENT
         * @instance
         */
        S_ROUND_END_EVENT.prototype.cmd = 200;

        /**
         * S_ROUND_END_EVENT scmd.
         * @member {number} scmd
         * @memberof GamePto.S_ROUND_END_EVENT
         * @instance
         */
        S_ROUND_END_EVENT.prototype.scmd = 10005;

        /**
         * S_ROUND_END_EVENT uid.
         * @member {number} uid
         * @memberof GamePto.S_ROUND_END_EVENT
         * @instance
         */
        S_ROUND_END_EVENT.prototype.uid = 0;

        /**
         * Encodes the specified S_ROUND_END_EVENT message. Does not implicitly {@link GamePto.S_ROUND_END_EVENT.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_ROUND_END_EVENT
         * @static
         * @param {GamePto.IS_ROUND_END_EVENT} message S_ROUND_END_EVENT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ROUND_END_EVENT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.uid);
            return writer;
        };

        /**
         * Decodes a S_ROUND_END_EVENT message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_ROUND_END_EVENT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_ROUND_END_EVENT} S_ROUND_END_EVENT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ROUND_END_EVENT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_ROUND_END_EVENT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.uid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_ROUND_END_EVENT
         * @function getTypeUrl
         * @memberof GamePto.S_ROUND_END_EVENT
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_ROUND_END_EVENT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_ROUND_END_EVENT";
        };

        return S_ROUND_END_EVENT;
    })();

    GamePto.S_DRAW_CARDS = (function() {

        /**
         * Properties of a S_DRAW_CARDS.
         * @memberof GamePto
         * @interface IS_DRAW_CARDS
         * @property {number|null} [cmd] S_DRAW_CARDS cmd
         * @property {number|null} [scmd] S_DRAW_CARDS scmd
         * @property {Array.<GamePto.ICard>|null} [cards] S_DRAW_CARDS cards
         * @property {number|null} [cardCount] S_DRAW_CARDS cardCount
         * @property {Array.<number>|null} [damages] S_DRAW_CARDS damages
         * @property {number|null} [uid] S_DRAW_CARDS uid
         * @property {number|null} [cardPoolNum] S_DRAW_CARDS cardPoolNum
         * @property {number|null} [deadPoolNum] S_DRAW_CARDS deadPoolNum
         */

        /**
         * Constructs a new S_DRAW_CARDS.
         * @memberof GamePto
         * @classdesc Represents a S_DRAW_CARDS.
         * @implements IS_DRAW_CARDS
         * @constructor
         * @param {GamePto.IS_DRAW_CARDS=} [properties] Properties to set
         */
        function S_DRAW_CARDS(properties) {
            this.cards = [];
            this.damages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_DRAW_CARDS cmd.
         * @member {number} cmd
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.cmd = 200;

        /**
         * S_DRAW_CARDS scmd.
         * @member {number} scmd
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.scmd = 10006;

        /**
         * S_DRAW_CARDS cards.
         * @member {Array.<GamePto.ICard>} cards
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.cards = $util.emptyArray;

        /**
         * S_DRAW_CARDS cardCount.
         * @member {number} cardCount
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.cardCount = 0;

        /**
         * S_DRAW_CARDS damages.
         * @member {Array.<number>} damages
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.damages = $util.emptyArray;

        /**
         * S_DRAW_CARDS uid.
         * @member {number} uid
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.uid = 0;

        /**
         * S_DRAW_CARDS cardPoolNum.
         * @member {number} cardPoolNum
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.cardPoolNum = 0;

        /**
         * S_DRAW_CARDS deadPoolNum.
         * @member {number} deadPoolNum
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.deadPoolNum = 0;

        /**
         * Encodes the specified S_DRAW_CARDS message. Does not implicitly {@link GamePto.S_DRAW_CARDS.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_DRAW_CARDS
         * @static
         * @param {GamePto.IS_DRAW_CARDS} message S_DRAW_CARDS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_DRAW_CARDS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.GamePto.Card.encode(message.cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.cardCount != null && Object.hasOwnProperty.call(message, "cardCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cardCount);
            if (message.damages != null && message.damages.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.damages.length; ++i)
                    writer.int32(message.damages[i]);
                writer.ldelim();
            }
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.uid);
            if (message.cardPoolNum != null && Object.hasOwnProperty.call(message, "cardPoolNum"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cardPoolNum);
            if (message.deadPoolNum != null && Object.hasOwnProperty.call(message, "deadPoolNum"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.deadPoolNum);
            return writer;
        };

        /**
         * Decodes a S_DRAW_CARDS message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_DRAW_CARDS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_DRAW_CARDS} S_DRAW_CARDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_DRAW_CARDS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_DRAW_CARDS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.cardCount = reader.int32();
                        break;
                    }
                case 5: {
                        if (!(message.damages && message.damages.length))
                            message.damages = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.damages.push(reader.int32());
                        } else
                            message.damages.push(reader.int32());
                        break;
                    }
                case 6: {
                        message.uid = reader.int32();
                        break;
                    }
                case 7: {
                        message.cardPoolNum = reader.int32();
                        break;
                    }
                case 8: {
                        message.deadPoolNum = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_DRAW_CARDS
         * @function getTypeUrl
         * @memberof GamePto.S_DRAW_CARDS
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_DRAW_CARDS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_DRAW_CARDS";
        };

        return S_DRAW_CARDS;
    })();

    GamePto.S_FEE_INFO = (function() {

        /**
         * Properties of a S_FEE_INFO.
         * @memberof GamePto
         * @interface IS_FEE_INFO
         * @property {number|null} [cmd] S_FEE_INFO cmd
         * @property {number|null} [scmd] S_FEE_INFO scmd
         * @property {number|null} [fee] S_FEE_INFO fee
         * @property {number|null} [maxFee] S_FEE_INFO maxFee
         * @property {number|null} [uid] S_FEE_INFO uid
         */

        /**
         * Constructs a new S_FEE_INFO.
         * @memberof GamePto
         * @classdesc Represents a S_FEE_INFO.
         * @implements IS_FEE_INFO
         * @constructor
         * @param {GamePto.IS_FEE_INFO=} [properties] Properties to set
         */
        function S_FEE_INFO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_FEE_INFO cmd.
         * @member {number} cmd
         * @memberof GamePto.S_FEE_INFO
         * @instance
         */
        S_FEE_INFO.prototype.cmd = 200;

        /**
         * S_FEE_INFO scmd.
         * @member {number} scmd
         * @memberof GamePto.S_FEE_INFO
         * @instance
         */
        S_FEE_INFO.prototype.scmd = 10007;

        /**
         * S_FEE_INFO fee.
         * @member {number} fee
         * @memberof GamePto.S_FEE_INFO
         * @instance
         */
        S_FEE_INFO.prototype.fee = 0;

        /**
         * S_FEE_INFO maxFee.
         * @member {number} maxFee
         * @memberof GamePto.S_FEE_INFO
         * @instance
         */
        S_FEE_INFO.prototype.maxFee = 0;

        /**
         * S_FEE_INFO uid.
         * @member {number} uid
         * @memberof GamePto.S_FEE_INFO
         * @instance
         */
        S_FEE_INFO.prototype.uid = 0;

        /**
         * Encodes the specified S_FEE_INFO message. Does not implicitly {@link GamePto.S_FEE_INFO.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_FEE_INFO
         * @static
         * @param {GamePto.IS_FEE_INFO} message S_FEE_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_FEE_INFO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fee);
            if (message.maxFee != null && Object.hasOwnProperty.call(message, "maxFee"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxFee);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.uid);
            return writer;
        };

        /**
         * Decodes a S_FEE_INFO message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_FEE_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_FEE_INFO} S_FEE_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_FEE_INFO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_FEE_INFO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.fee = reader.int32();
                        break;
                    }
                case 4: {
                        message.maxFee = reader.int32();
                        break;
                    }
                case 5: {
                        message.uid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_FEE_INFO
         * @function getTypeUrl
         * @memberof GamePto.S_FEE_INFO
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_FEE_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_FEE_INFO";
        };

        return S_FEE_INFO;
    })();

    GamePto.S_DISCARD = (function() {

        /**
         * Properties of a S_DISCARD.
         * @memberof GamePto
         * @interface IS_DISCARD
         * @property {number|null} [cmd] S_DISCARD cmd
         * @property {number|null} [scmd] S_DISCARD scmd
         * @property {boolean|null} [isSuccess] S_DISCARD isSuccess
         * @property {number|null} [cardIndex] S_DISCARD cardIndex
         * @property {number|null} [fee] S_DISCARD fee
         * @property {number|null} [feeMax] S_DISCARD feeMax
         * @property {number|null} [uid] S_DISCARD uid
         */

        /**
         * Constructs a new S_DISCARD.
         * @memberof GamePto
         * @classdesc Represents a S_DISCARD.
         * @implements IS_DISCARD
         * @constructor
         * @param {GamePto.IS_DISCARD=} [properties] Properties to set
         */
        function S_DISCARD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_DISCARD cmd.
         * @member {number} cmd
         * @memberof GamePto.S_DISCARD
         * @instance
         */
        S_DISCARD.prototype.cmd = 200;

        /**
         * S_DISCARD scmd.
         * @member {number} scmd
         * @memberof GamePto.S_DISCARD
         * @instance
         */
        S_DISCARD.prototype.scmd = 10008;

        /**
         * S_DISCARD isSuccess.
         * @member {boolean} isSuccess
         * @memberof GamePto.S_DISCARD
         * @instance
         */
        S_DISCARD.prototype.isSuccess = false;

        /**
         * S_DISCARD cardIndex.
         * @member {number} cardIndex
         * @memberof GamePto.S_DISCARD
         * @instance
         */
        S_DISCARD.prototype.cardIndex = 0;

        /**
         * S_DISCARD fee.
         * @member {number} fee
         * @memberof GamePto.S_DISCARD
         * @instance
         */
        S_DISCARD.prototype.fee = 0;

        /**
         * S_DISCARD feeMax.
         * @member {number} feeMax
         * @memberof GamePto.S_DISCARD
         * @instance
         */
        S_DISCARD.prototype.feeMax = 0;

        /**
         * S_DISCARD uid.
         * @member {number} uid
         * @memberof GamePto.S_DISCARD
         * @instance
         */
        S_DISCARD.prototype.uid = 0;

        /**
         * Encodes the specified S_DISCARD message. Does not implicitly {@link GamePto.S_DISCARD.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_DISCARD
         * @static
         * @param {GamePto.IS_DISCARD} message S_DISCARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_DISCARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isSuccess != null && Object.hasOwnProperty.call(message, "isSuccess"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isSuccess);
            if (message.cardIndex != null && Object.hasOwnProperty.call(message, "cardIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cardIndex);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.fee);
            if (message.feeMax != null && Object.hasOwnProperty.call(message, "feeMax"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.feeMax);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.uid);
            return writer;
        };

        /**
         * Decodes a S_DISCARD message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_DISCARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_DISCARD} S_DISCARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_DISCARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_DISCARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.isSuccess = reader.bool();
                        break;
                    }
                case 4: {
                        message.cardIndex = reader.int32();
                        break;
                    }
                case 5: {
                        message.fee = reader.int32();
                        break;
                    }
                case 6: {
                        message.feeMax = reader.int32();
                        break;
                    }
                case 7: {
                        message.uid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_DISCARD
         * @function getTypeUrl
         * @memberof GamePto.S_DISCARD
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_DISCARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_DISCARD";
        };

        return S_DISCARD;
    })();

    GamePto.S_USE_CARD = (function() {

        /**
         * Properties of a S_USE_CARD.
         * @memberof GamePto
         * @interface IS_USE_CARD
         * @property {number|null} [cmd] S_USE_CARD cmd
         * @property {number|null} [scmd] S_USE_CARD scmd
         * @property {boolean|null} [isSuccess] S_USE_CARD isSuccess
         * @property {number|null} [fee] S_USE_CARD fee
         * @property {number|null} [feeMax] S_USE_CARD feeMax
         * @property {number|null} [uid] S_USE_CARD uid
         * @property {number|null} [cardIndex] S_USE_CARD cardIndex
         * @property {GamePto.ICard|null} [card] S_USE_CARD card
         */

        /**
         * Constructs a new S_USE_CARD.
         * @memberof GamePto
         * @classdesc Represents a S_USE_CARD.
         * @implements IS_USE_CARD
         * @constructor
         * @param {GamePto.IS_USE_CARD=} [properties] Properties to set
         */
        function S_USE_CARD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_USE_CARD cmd.
         * @member {number} cmd
         * @memberof GamePto.S_USE_CARD
         * @instance
         */
        S_USE_CARD.prototype.cmd = 200;

        /**
         * S_USE_CARD scmd.
         * @member {number} scmd
         * @memberof GamePto.S_USE_CARD
         * @instance
         */
        S_USE_CARD.prototype.scmd = 10009;

        /**
         * S_USE_CARD isSuccess.
         * @member {boolean} isSuccess
         * @memberof GamePto.S_USE_CARD
         * @instance
         */
        S_USE_CARD.prototype.isSuccess = false;

        /**
         * S_USE_CARD fee.
         * @member {number} fee
         * @memberof GamePto.S_USE_CARD
         * @instance
         */
        S_USE_CARD.prototype.fee = 0;

        /**
         * S_USE_CARD feeMax.
         * @member {number} feeMax
         * @memberof GamePto.S_USE_CARD
         * @instance
         */
        S_USE_CARD.prototype.feeMax = 0;

        /**
         * S_USE_CARD uid.
         * @member {number} uid
         * @memberof GamePto.S_USE_CARD
         * @instance
         */
        S_USE_CARD.prototype.uid = 0;

        /**
         * S_USE_CARD cardIndex.
         * @member {number} cardIndex
         * @memberof GamePto.S_USE_CARD
         * @instance
         */
        S_USE_CARD.prototype.cardIndex = 0;

        /**
         * S_USE_CARD card.
         * @member {GamePto.ICard|null|undefined} card
         * @memberof GamePto.S_USE_CARD
         * @instance
         */
        S_USE_CARD.prototype.card = null;

        /**
         * Encodes the specified S_USE_CARD message. Does not implicitly {@link GamePto.S_USE_CARD.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_USE_CARD
         * @static
         * @param {GamePto.IS_USE_CARD} message S_USE_CARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_USE_CARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isSuccess != null && Object.hasOwnProperty.call(message, "isSuccess"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isSuccess);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.fee);
            if (message.feeMax != null && Object.hasOwnProperty.call(message, "feeMax"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.feeMax);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.uid);
            if (message.cardIndex != null && Object.hasOwnProperty.call(message, "cardIndex"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cardIndex);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                $root.GamePto.Card.encode(message.card, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_USE_CARD message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_USE_CARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_USE_CARD} S_USE_CARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_USE_CARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_USE_CARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.isSuccess = reader.bool();
                        break;
                    }
                case 5: {
                        message.fee = reader.int32();
                        break;
                    }
                case 6: {
                        message.feeMax = reader.int32();
                        break;
                    }
                case 7: {
                        message.uid = reader.int32();
                        break;
                    }
                case 8: {
                        message.cardIndex = reader.int32();
                        break;
                    }
                case 9: {
                        message.card = $root.GamePto.Card.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_USE_CARD
         * @function getTypeUrl
         * @memberof GamePto.S_USE_CARD
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_USE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_USE_CARD";
        };

        return S_USE_CARD;
    })();

    GamePto.S_ROUND_END_TIME = (function() {

        /**
         * Properties of a S_ROUND_END_TIME.
         * @memberof GamePto
         * @interface IS_ROUND_END_TIME
         * @property {number|null} [cmd] S_ROUND_END_TIME cmd
         * @property {number|null} [scmd] S_ROUND_END_TIME scmd
         * @property {number|Long|null} [endTime] S_ROUND_END_TIME endTime
         * @property {number|null} [uid] S_ROUND_END_TIME uid
         */

        /**
         * Constructs a new S_ROUND_END_TIME.
         * @memberof GamePto
         * @classdesc Represents a S_ROUND_END_TIME.
         * @implements IS_ROUND_END_TIME
         * @constructor
         * @param {GamePto.IS_ROUND_END_TIME=} [properties] Properties to set
         */
        function S_ROUND_END_TIME(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ROUND_END_TIME cmd.
         * @member {number} cmd
         * @memberof GamePto.S_ROUND_END_TIME
         * @instance
         */
        S_ROUND_END_TIME.prototype.cmd = 200;

        /**
         * S_ROUND_END_TIME scmd.
         * @member {number} scmd
         * @memberof GamePto.S_ROUND_END_TIME
         * @instance
         */
        S_ROUND_END_TIME.prototype.scmd = 10010;

        /**
         * S_ROUND_END_TIME endTime.
         * @member {number|Long} endTime
         * @memberof GamePto.S_ROUND_END_TIME
         * @instance
         */
        S_ROUND_END_TIME.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * S_ROUND_END_TIME uid.
         * @member {number} uid
         * @memberof GamePto.S_ROUND_END_TIME
         * @instance
         */
        S_ROUND_END_TIME.prototype.uid = 0;

        /**
         * Encodes the specified S_ROUND_END_TIME message. Does not implicitly {@link GamePto.S_ROUND_END_TIME.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_ROUND_END_TIME
         * @static
         * @param {GamePto.IS_ROUND_END_TIME} message S_ROUND_END_TIME message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ROUND_END_TIME.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endTime);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.uid);
            return writer;
        };

        /**
         * Decodes a S_ROUND_END_TIME message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_ROUND_END_TIME
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_ROUND_END_TIME} S_ROUND_END_TIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ROUND_END_TIME.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_ROUND_END_TIME();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.endTime = reader.int64();
                        break;
                    }
                case 4: {
                        message.uid = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_ROUND_END_TIME
         * @function getTypeUrl
         * @memberof GamePto.S_ROUND_END_TIME
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_ROUND_END_TIME.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_ROUND_END_TIME";
        };

        return S_ROUND_END_TIME;
    })();

    return GamePto;
})();

$root.HallPto = (function() {

    /**
     * Namespace HallPto.
     * @exports HallPto
     * @namespace
     */
    var HallPto = {};

    return HallPto;
})();

$root.LoginPto = (function() {

    /**
     * Namespace LoginPto.
     * @exports LoginPto
     * @namespace
     */
    var LoginPto = {};

    LoginPto.C_LOGIN = (function() {

        /**
         * Properties of a C_LOGIN.
         * @memberof LoginPto
         * @interface IC_LOGIN
         * @property {number|null} [cmd] C_LOGIN cmd
         * @property {number|null} [scmd] C_LOGIN scmd
         * @property {string|null} [account] C_LOGIN account
         * @property {string|null} [password] C_LOGIN password
         */

        /**
         * Constructs a new C_LOGIN.
         * @memberof LoginPto
         * @classdesc Represents a C_LOGIN.
         * @implements IC_LOGIN
         * @constructor
         * @param {LoginPto.IC_LOGIN=} [properties] Properties to set
         */
        function C_LOGIN(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_LOGIN cmd.
         * @member {number} cmd
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.cmd = 1;

        /**
         * C_LOGIN scmd.
         * @member {number} scmd
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.scmd = 1;

        /**
         * C_LOGIN account.
         * @member {string} account
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.account = "";

        /**
         * C_LOGIN password.
         * @member {string} password
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.password = "";

        /**
         * Encodes the specified C_LOGIN message. Does not implicitly {@link LoginPto.C_LOGIN.verify|verify} messages.
         * @function encode
         * @memberof LoginPto.C_LOGIN
         * @static
         * @param {LoginPto.IC_LOGIN} message C_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_LOGIN.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.account);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
            return writer;
        };

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPto.C_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPto.C_LOGIN} C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_LOGIN.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPto.C_LOGIN();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.account = reader.string();
                        break;
                    }
                case 4: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_LOGIN
         * @function getTypeUrl
         * @memberof LoginPto.C_LOGIN
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_LOGIN.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LoginPto.C_LOGIN";
        };

        return C_LOGIN;
    })();

    LoginPto.S_LOGIN = (function() {

        /**
         * Properties of a S_LOGIN.
         * @memberof LoginPto
         * @interface IS_LOGIN
         * @property {number|null} [cmd] S_LOGIN cmd
         * @property {number|null} [scmd] S_LOGIN scmd
         * @property {boolean|null} [isSuccess] S_LOGIN isSuccess
         * @property {string|null} [nick] S_LOGIN nick
         * @property {number|null} [headIndex] S_LOGIN headIndex
         * @property {number|null} [uid] S_LOGIN uid
         * @property {Array.<FriendPto.IFriend>|null} [friendList] S_LOGIN friendList
         * @property {Array.<FriendPto.IFriend>|null} [reqAddList] S_LOGIN reqAddList
         */

        /**
         * Constructs a new S_LOGIN.
         * @memberof LoginPto
         * @classdesc Represents a S_LOGIN.
         * @implements IS_LOGIN
         * @constructor
         * @param {LoginPto.IS_LOGIN=} [properties] Properties to set
         */
        function S_LOGIN(properties) {
            this.friendList = [];
            this.reqAddList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_LOGIN cmd.
         * @member {number} cmd
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.cmd = 1;

        /**
         * S_LOGIN scmd.
         * @member {number} scmd
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.scmd = 2;

        /**
         * S_LOGIN isSuccess.
         * @member {boolean} isSuccess
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.isSuccess = false;

        /**
         * S_LOGIN nick.
         * @member {string} nick
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.nick = "";

        /**
         * S_LOGIN headIndex.
         * @member {number} headIndex
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.headIndex = 0;

        /**
         * S_LOGIN uid.
         * @member {number} uid
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.uid = 0;

        /**
         * S_LOGIN friendList.
         * @member {Array.<FriendPto.IFriend>} friendList
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.friendList = $util.emptyArray;

        /**
         * S_LOGIN reqAddList.
         * @member {Array.<FriendPto.IFriend>} reqAddList
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.reqAddList = $util.emptyArray;

        /**
         * Encodes the specified S_LOGIN message. Does not implicitly {@link LoginPto.S_LOGIN.verify|verify} messages.
         * @function encode
         * @memberof LoginPto.S_LOGIN
         * @static
         * @param {LoginPto.IS_LOGIN} message S_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_LOGIN.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isSuccess != null && Object.hasOwnProperty.call(message, "isSuccess"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isSuccess);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nick);
            if (message.headIndex != null && Object.hasOwnProperty.call(message, "headIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.headIndex);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.uid);
            if (message.friendList != null && message.friendList.length)
                for (var i = 0; i < message.friendList.length; ++i)
                    $root.FriendPto.Friend.encode(message.friendList[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.reqAddList != null && message.reqAddList.length)
                for (var i = 0; i < message.reqAddList.length; ++i)
                    $root.FriendPto.Friend.encode(message.reqAddList[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPto.S_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPto.S_LOGIN} S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_LOGIN.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPto.S_LOGIN();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.isSuccess = reader.bool();
                        break;
                    }
                case 4: {
                        message.nick = reader.string();
                        break;
                    }
                case 5: {
                        message.headIndex = reader.int32();
                        break;
                    }
                case 6: {
                        message.uid = reader.int32();
                        break;
                    }
                case 7: {
                        if (!(message.friendList && message.friendList.length))
                            message.friendList = [];
                        message.friendList.push($root.FriendPto.Friend.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        if (!(message.reqAddList && message.reqAddList.length))
                            message.reqAddList = [];
                        message.reqAddList.push($root.FriendPto.Friend.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_LOGIN
         * @function getTypeUrl
         * @memberof LoginPto.S_LOGIN
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_LOGIN.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LoginPto.S_LOGIN";
        };

        return S_LOGIN;
    })();

    LoginPto.C_REGISTER = (function() {

        /**
         * Properties of a C_REGISTER.
         * @memberof LoginPto
         * @interface IC_REGISTER
         * @property {number|null} [cmd] C_REGISTER cmd
         * @property {number|null} [scmd] C_REGISTER scmd
         * @property {string|null} [account] C_REGISTER account
         * @property {string|null} [password] C_REGISTER password
         * @property {string|null} [nick] C_REGISTER nick
         */

        /**
         * Constructs a new C_REGISTER.
         * @memberof LoginPto
         * @classdesc Represents a C_REGISTER.
         * @implements IC_REGISTER
         * @constructor
         * @param {LoginPto.IC_REGISTER=} [properties] Properties to set
         */
        function C_REGISTER(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_REGISTER cmd.
         * @member {number} cmd
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.cmd = 1;

        /**
         * C_REGISTER scmd.
         * @member {number} scmd
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.scmd = 3;

        /**
         * C_REGISTER account.
         * @member {string} account
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.account = "";

        /**
         * C_REGISTER password.
         * @member {string} password
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.password = "";

        /**
         * C_REGISTER nick.
         * @member {string} nick
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.nick = "";

        /**
         * Encodes the specified C_REGISTER message. Does not implicitly {@link LoginPto.C_REGISTER.verify|verify} messages.
         * @function encode
         * @memberof LoginPto.C_REGISTER
         * @static
         * @param {LoginPto.IC_REGISTER} message C_REGISTER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_REGISTER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.account);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nick);
            return writer;
        };

        /**
         * Decodes a C_REGISTER message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPto.C_REGISTER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPto.C_REGISTER} C_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_REGISTER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPto.C_REGISTER();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.account = reader.string();
                        break;
                    }
                case 4: {
                        message.password = reader.string();
                        break;
                    }
                case 5: {
                        message.nick = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for C_REGISTER
         * @function getTypeUrl
         * @memberof LoginPto.C_REGISTER
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_REGISTER.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LoginPto.C_REGISTER";
        };

        return C_REGISTER;
    })();

    LoginPto.S_REGISTER = (function() {

        /**
         * Properties of a S_REGISTER.
         * @memberof LoginPto
         * @interface IS_REGISTER
         * @property {number|null} [cmd] S_REGISTER cmd
         * @property {number|null} [scmd] S_REGISTER scmd
         * @property {number|null} [code] S_REGISTER code
         */

        /**
         * Constructs a new S_REGISTER.
         * @memberof LoginPto
         * @classdesc Represents a S_REGISTER.
         * @implements IS_REGISTER
         * @constructor
         * @param {LoginPto.IS_REGISTER=} [properties] Properties to set
         */
        function S_REGISTER(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_REGISTER cmd.
         * @member {number} cmd
         * @memberof LoginPto.S_REGISTER
         * @instance
         */
        S_REGISTER.prototype.cmd = 1;

        /**
         * S_REGISTER scmd.
         * @member {number} scmd
         * @memberof LoginPto.S_REGISTER
         * @instance
         */
        S_REGISTER.prototype.scmd = 4;

        /**
         * S_REGISTER code.
         * @member {number} code
         * @memberof LoginPto.S_REGISTER
         * @instance
         */
        S_REGISTER.prototype.code = 0;

        /**
         * Encodes the specified S_REGISTER message. Does not implicitly {@link LoginPto.S_REGISTER.verify|verify} messages.
         * @function encode
         * @memberof LoginPto.S_REGISTER
         * @static
         * @param {LoginPto.IS_REGISTER} message S_REGISTER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_REGISTER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            return writer;
        };

        /**
         * Decodes a S_REGISTER message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPto.S_REGISTER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPto.S_REGISTER} S_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_REGISTER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPto.S_REGISTER();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.code = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_REGISTER
         * @function getTypeUrl
         * @memberof LoginPto.S_REGISTER
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_REGISTER.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LoginPto.S_REGISTER";
        };

        return S_REGISTER;
    })();

    return LoginPto;
})();

$root.SystemPto = (function() {

    /**
     * Namespace SystemPto.
     * @exports SystemPto
     * @namespace
     */
    var SystemPto = {};

    SystemPto.S_TIPS = (function() {

        /**
         * Properties of a S_TIPS.
         * @memberof SystemPto
         * @interface IS_TIPS
         * @property {number|null} [cmd] S_TIPS cmd
         * @property {number|null} [scmd] S_TIPS scmd
         * @property {string|null} [msg] S_TIPS msg
         * @property {number|null} [hoverTime] S_TIPS hoverTime
         */

        /**
         * Constructs a new S_TIPS.
         * @memberof SystemPto
         * @classdesc Represents a S_TIPS.
         * @implements IS_TIPS
         * @constructor
         * @param {SystemPto.IS_TIPS=} [properties] Properties to set
         */
        function S_TIPS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_TIPS cmd.
         * @member {number} cmd
         * @memberof SystemPto.S_TIPS
         * @instance
         */
        S_TIPS.prototype.cmd = 0;

        /**
         * S_TIPS scmd.
         * @member {number} scmd
         * @memberof SystemPto.S_TIPS
         * @instance
         */
        S_TIPS.prototype.scmd = 1;

        /**
         * S_TIPS msg.
         * @member {string} msg
         * @memberof SystemPto.S_TIPS
         * @instance
         */
        S_TIPS.prototype.msg = "";

        /**
         * S_TIPS hoverTime.
         * @member {number} hoverTime
         * @memberof SystemPto.S_TIPS
         * @instance
         */
        S_TIPS.prototype.hoverTime = 0;

        /**
         * Encodes the specified S_TIPS message. Does not implicitly {@link SystemPto.S_TIPS.verify|verify} messages.
         * @function encode
         * @memberof SystemPto.S_TIPS
         * @static
         * @param {SystemPto.IS_TIPS} message S_TIPS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_TIPS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            if (message.hoverTime != null && Object.hasOwnProperty.call(message, "hoverTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hoverTime);
            return writer;
        };

        /**
         * Decodes a S_TIPS message from the specified reader or buffer.
         * @function decode
         * @memberof SystemPto.S_TIPS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemPto.S_TIPS} S_TIPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_TIPS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemPto.S_TIPS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.scmd = reader.int32();
                        break;
                    }
                case 3: {
                        message.msg = reader.string();
                        break;
                    }
                case 4: {
                        message.hoverTime = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for S_TIPS
         * @function getTypeUrl
         * @memberof SystemPto.S_TIPS
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_TIPS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SystemPto.S_TIPS";
        };

        return S_TIPS;
    })();

    return SystemPto;
})();