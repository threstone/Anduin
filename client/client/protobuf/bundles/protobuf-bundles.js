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
         * @property {number|null} [uid] S_FRIEND_CHANGE uid
         * @property {boolean|null} [isOnline] S_FRIEND_CHANGE isOnline
         * @property {FriendPto.IFriend|null} [friend] S_FRIEND_CHANGE friend
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
         * S_FRIEND_CHANGE uid.
         * @member {number} uid
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @instance
         */
        S_FRIEND_CHANGE.prototype.uid = 0;

        /**
         * S_FRIEND_CHANGE isOnline.
         * @member {boolean} isOnline
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @instance
         */
        S_FRIEND_CHANGE.prototype.isOnline = false;

        /**
         * S_FRIEND_CHANGE friend.
         * @member {FriendPto.IFriend|null|undefined} friend
         * @memberof FriendPto.S_FRIEND_CHANGE
         * @instance
         */
        S_FRIEND_CHANGE.prototype.friend = null;

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
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.uid);
            if (message.isOnline != null && Object.hasOwnProperty.call(message, "isOnline"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isOnline);
            if (message.friend != null && Object.hasOwnProperty.call(message, "friend"))
                $root.FriendPto.Friend.encode(message.friend, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
                        message.uid = reader.int32();
                        break;
                    }
                case 4: {
                        message.isOnline = reader.bool();
                        break;
                    }
                case 5: {
                        message.friend = $root.FriendPto.Friend.decode(reader, reader.uint32());
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