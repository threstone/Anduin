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

    /**
     * EventType enum.
     * @name CardsPto.EventType
     * @enum {number}
     * @property {number} Common=0 Common value
     * @property {number} Secret=1 Secret value
     */
    CardsPto.EventType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Common"] = 0;
        values[valuesById[1] = "Secret"] = 1;
        return values;
    })();

    /**
     * BuilingType enum.
     * @name CardsPto.BuilingType
     * @enum {number}
     * @property {number} Base=0 Base value
     * @property {number} Camp=1 Camp value
     */
    CardsPto.BuilingType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Base"] = 0;
        values[valuesById[1] = "Camp"] = 1;
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
                case 0:
                    message.id = reader.int32();
                    break;
                case 1:
                    message.count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Card;
    })();

    CardsPto.Deck = (function() {

        /**
         * Properties of a Deck.
         * @memberof CardsPto
         * @interface IDeck
         * @property {number|null} [deckId] Deck deckId
         * @property {Array.<CardsPto.ICard>|null} [cards] Deck cards
         * @property {string|null} [deckName] Deck deckName
         * @property {CardsPto.PowerType|null} [powerId] Deck powerId
         * @property {boolean|null} [accessToUse] Deck accessToUse
         * @property {number|null} [heroId] Deck heroId
         */

        /**
         * Constructs a new Deck.
         * @memberof CardsPto
         * @classdesc Represents a Deck.
         * @implements IDeck
         * @constructor
         * @param {CardsPto.IDeck=} [properties] Properties to set
         */
        function Deck(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Deck deckId.
         * @member {number} deckId
         * @memberof CardsPto.Deck
         * @instance
         */
        Deck.prototype.deckId = 0;

        /**
         * Deck cards.
         * @member {Array.<CardsPto.ICard>} cards
         * @memberof CardsPto.Deck
         * @instance
         */
        Deck.prototype.cards = $util.emptyArray;

        /**
         * Deck deckName.
         * @member {string} deckName
         * @memberof CardsPto.Deck
         * @instance
         */
        Deck.prototype.deckName = "";

        /**
         * Deck powerId.
         * @member {CardsPto.PowerType} powerId
         * @memberof CardsPto.Deck
         * @instance
         */
        Deck.prototype.powerId = 0;

        /**
         * Deck accessToUse.
         * @member {boolean} accessToUse
         * @memberof CardsPto.Deck
         * @instance
         */
        Deck.prototype.accessToUse = false;

        /**
         * Deck heroId.
         * @member {number} heroId
         * @memberof CardsPto.Deck
         * @instance
         */
        Deck.prototype.heroId = 0;

        /**
         * Encodes the specified Deck message. Does not implicitly {@link CardsPto.Deck.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.Deck
         * @static
         * @param {CardsPto.IDeck} message Deck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Deck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deckId != null && Object.hasOwnProperty.call(message, "deckId"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.deckId);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.CardsPto.Card.encode(message.cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.deckName != null && Object.hasOwnProperty.call(message, "deckName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.deckName);
            if (message.powerId != null && Object.hasOwnProperty.call(message, "powerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.powerId);
            if (message.accessToUse != null && Object.hasOwnProperty.call(message, "accessToUse"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.accessToUse);
            if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.heroId);
            return writer;
        };

        /**
         * Decodes a Deck message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.Deck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.Deck} Deck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Deck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.Deck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.deckId = reader.int32();
                    break;
                case 1:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.CardsPto.Card.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.deckName = reader.string();
                    break;
                case 3:
                    message.powerId = reader.int32();
                    break;
                case 4:
                    message.accessToUse = reader.bool();
                    break;
                case 5:
                    message.heroId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Deck;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
         * @property {Array.<CardsPto.IDeck>|null} [deckList] S_CARDS_INFO deckList
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
            this.deckList = [];
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
         * S_CARDS_INFO deckList.
         * @member {Array.<CardsPto.IDeck>} deckList
         * @memberof CardsPto.S_CARDS_INFO
         * @instance
         */
        S_CARDS_INFO.prototype.deckList = $util.emptyArray;

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
            if (message.deckList != null && message.deckList.length)
                for (var i = 0; i < message.deckList.length; ++i)
                    $root.CardsPto.Deck.encode(message.deckList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    if (!(message.cardInfos && message.cardInfos.length))
                        message.cardInfos = [];
                    message.cardInfos.push($root.CardsPto.Card.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.deckList && message.deckList.length))
                        message.deckList = [];
                    message.deckList.push($root.CardsPto.Deck.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.cardId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.cardId = reader.int32();
                    break;
                case 4:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.cardId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.cardId = reader.int32();
                    break;
                case 4:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
         * @property {CardsPto.IDeck|null} [deck] C_SAVE_CARDS deck
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
         * C_SAVE_CARDS deck.
         * @member {CardsPto.IDeck|null|undefined} deck
         * @memberof CardsPto.C_SAVE_CARDS
         * @instance
         */
        C_SAVE_CARDS.prototype.deck = null;

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
            if (message.deck != null && Object.hasOwnProperty.call(message, "deck"))
                $root.CardsPto.Deck.encode(message.deck, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.deck = $root.CardsPto.Deck.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_SAVE_CARDS;
    })();

    CardsPto.S_SAVE_DECK = (function() {

        /**
         * Properties of a S_SAVE_DECK.
         * @memberof CardsPto
         * @interface IS_SAVE_DECK
         * @property {number|null} [cmd] S_SAVE_DECK cmd
         * @property {number|null} [scmd] S_SAVE_DECK scmd
         * @property {CardsPto.IDeck|null} [deck] S_SAVE_DECK deck
         */

        /**
         * Constructs a new S_SAVE_DECK.
         * @memberof CardsPto
         * @classdesc Represents a S_SAVE_DECK.
         * @implements IS_SAVE_DECK
         * @constructor
         * @param {CardsPto.IS_SAVE_DECK=} [properties] Properties to set
         */
        function S_SAVE_DECK(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_SAVE_DECK cmd.
         * @member {number} cmd
         * @memberof CardsPto.S_SAVE_DECK
         * @instance
         */
        S_SAVE_DECK.prototype.cmd = 4;

        /**
         * S_SAVE_DECK scmd.
         * @member {number} scmd
         * @memberof CardsPto.S_SAVE_DECK
         * @instance
         */
        S_SAVE_DECK.prototype.scmd = 8;

        /**
         * S_SAVE_DECK deck.
         * @member {CardsPto.IDeck|null|undefined} deck
         * @memberof CardsPto.S_SAVE_DECK
         * @instance
         */
        S_SAVE_DECK.prototype.deck = null;

        /**
         * Encodes the specified S_SAVE_DECK message. Does not implicitly {@link CardsPto.S_SAVE_DECK.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.S_SAVE_DECK
         * @static
         * @param {CardsPto.IS_SAVE_DECK} message S_SAVE_DECK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_SAVE_DECK.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.deck != null && Object.hasOwnProperty.call(message, "deck"))
                $root.CardsPto.Deck.encode(message.deck, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_SAVE_DECK message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.S_SAVE_DECK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.S_SAVE_DECK} S_SAVE_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_SAVE_DECK.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.S_SAVE_DECK();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.deck = $root.CardsPto.Deck.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_SAVE_DECK;
    })();

    CardsPto.C_DELETE_DECK = (function() {

        /**
         * Properties of a C_DELETE_DECK.
         * @memberof CardsPto
         * @interface IC_DELETE_DECK
         * @property {number|null} [cmd] C_DELETE_DECK cmd
         * @property {number|null} [scmd] C_DELETE_DECK scmd
         * @property {number|null} [deckId] C_DELETE_DECK deckId
         */

        /**
         * Constructs a new C_DELETE_DECK.
         * @memberof CardsPto
         * @classdesc Represents a C_DELETE_DECK.
         * @implements IC_DELETE_DECK
         * @constructor
         * @param {CardsPto.IC_DELETE_DECK=} [properties] Properties to set
         */
        function C_DELETE_DECK(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_DELETE_DECK cmd.
         * @member {number} cmd
         * @memberof CardsPto.C_DELETE_DECK
         * @instance
         */
        C_DELETE_DECK.prototype.cmd = 4;

        /**
         * C_DELETE_DECK scmd.
         * @member {number} scmd
         * @memberof CardsPto.C_DELETE_DECK
         * @instance
         */
        C_DELETE_DECK.prototype.scmd = 9;

        /**
         * C_DELETE_DECK deckId.
         * @member {number} deckId
         * @memberof CardsPto.C_DELETE_DECK
         * @instance
         */
        C_DELETE_DECK.prototype.deckId = 0;

        /**
         * Encodes the specified C_DELETE_DECK message. Does not implicitly {@link CardsPto.C_DELETE_DECK.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.C_DELETE_DECK
         * @static
         * @param {CardsPto.IC_DELETE_DECK} message C_DELETE_DECK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_DELETE_DECK.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.deckId != null && Object.hasOwnProperty.call(message, "deckId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.deckId);
            return writer;
        };

        /**
         * Decodes a C_DELETE_DECK message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.C_DELETE_DECK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.C_DELETE_DECK} C_DELETE_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_DELETE_DECK.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.C_DELETE_DECK();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.deckId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_DELETE_DECK;
    })();

    CardsPto.S_DELETE_DECK = (function() {

        /**
         * Properties of a S_DELETE_DECK.
         * @memberof CardsPto
         * @interface IS_DELETE_DECK
         * @property {number|null} [cmd] S_DELETE_DECK cmd
         * @property {number|null} [scmd] S_DELETE_DECK scmd
         * @property {number|null} [deckId] S_DELETE_DECK deckId
         */

        /**
         * Constructs a new S_DELETE_DECK.
         * @memberof CardsPto
         * @classdesc Represents a S_DELETE_DECK.
         * @implements IS_DELETE_DECK
         * @constructor
         * @param {CardsPto.IS_DELETE_DECK=} [properties] Properties to set
         */
        function S_DELETE_DECK(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_DELETE_DECK cmd.
         * @member {number} cmd
         * @memberof CardsPto.S_DELETE_DECK
         * @instance
         */
        S_DELETE_DECK.prototype.cmd = 4;

        /**
         * S_DELETE_DECK scmd.
         * @member {number} scmd
         * @memberof CardsPto.S_DELETE_DECK
         * @instance
         */
        S_DELETE_DECK.prototype.scmd = 10;

        /**
         * S_DELETE_DECK deckId.
         * @member {number} deckId
         * @memberof CardsPto.S_DELETE_DECK
         * @instance
         */
        S_DELETE_DECK.prototype.deckId = 0;

        /**
         * Encodes the specified S_DELETE_DECK message. Does not implicitly {@link CardsPto.S_DELETE_DECK.verify|verify} messages.
         * @function encode
         * @memberof CardsPto.S_DELETE_DECK
         * @static
         * @param {CardsPto.IS_DELETE_DECK} message S_DELETE_DECK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_DELETE_DECK.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.deckId != null && Object.hasOwnProperty.call(message, "deckId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.deckId);
            return writer;
        };

        /**
         * Decodes a S_DELETE_DECK message from the specified reader or buffer.
         * @function decode
         * @memberof CardsPto.S_DELETE_DECK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CardsPto.S_DELETE_DECK} S_DELETE_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_DELETE_DECK.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardsPto.S_DELETE_DECK();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.deckId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_DELETE_DECK;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.uid = reader.int32();
                    break;
                case 4:
                    message.msg = reader.string();
                    break;
                case 5:
                    message.msgType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.msg = reader.string();
                    break;
                case 4:
                    message.nick = reader.string();
                    break;
                case 5:
                    message.uid = reader.int32();
                    break;
                case 6:
                    message.msgType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.isApprove = reader.bool();
                    break;
                case 4:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.friend = $root.FriendPto.Friend.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.isNewFriend = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.user = $root.FriendPto.Friend.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.nick = reader.string();
                    break;
                case 3:
                    message.isOnline = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.targetUid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.code = reader.int32();
                    break;
                case 4:
                    message.endTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.result = reader.bool();
                    break;
                case 4:
                    message.targetUid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.friendUid = reader.int32();
                    break;
                case 4:
                    message.endTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.result = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_REQ_MATCH_RESULT;
    })();

    FriendlyMatchPto.S_MATCH_DECK = (function() {

        /**
         * Properties of a S_MATCH_DECK.
         * @memberof FriendlyMatchPto
         * @interface IS_MATCH_DECK
         * @property {number|null} [cmd] S_MATCH_DECK cmd
         * @property {number|null} [scmd] S_MATCH_DECK scmd
         * @property {number|Long|null} [endTime] S_MATCH_DECK endTime
         */

        /**
         * Constructs a new S_MATCH_DECK.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_MATCH_DECK.
         * @implements IS_MATCH_DECK
         * @constructor
         * @param {FriendlyMatchPto.IS_MATCH_DECK=} [properties] Properties to set
         */
        function S_MATCH_DECK(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_MATCH_DECK cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_MATCH_DECK
         * @instance
         */
        S_MATCH_DECK.prototype.cmd = 201;

        /**
         * S_MATCH_DECK scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_MATCH_DECK
         * @instance
         */
        S_MATCH_DECK.prototype.scmd = 7;

        /**
         * S_MATCH_DECK endTime.
         * @member {number|Long} endTime
         * @memberof FriendlyMatchPto.S_MATCH_DECK
         * @instance
         */
        S_MATCH_DECK.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified S_MATCH_DECK message. Does not implicitly {@link FriendlyMatchPto.S_MATCH_DECK.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_MATCH_DECK
         * @static
         * @param {FriendlyMatchPto.IS_MATCH_DECK} message S_MATCH_DECK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_MATCH_DECK.encode = function encode(message, writer) {
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
         * Decodes a S_MATCH_DECK message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_MATCH_DECK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_MATCH_DECK} S_MATCH_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_MATCH_DECK.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_MATCH_DECK();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.endTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_MATCH_DECK;
    })();

    FriendlyMatchPto.C_DECK_CHOOSE = (function() {

        /**
         * Properties of a C_DECK_CHOOSE.
         * @memberof FriendlyMatchPto
         * @interface IC_DECK_CHOOSE
         * @property {number|null} [cmd] C_DECK_CHOOSE cmd
         * @property {number|null} [scmd] C_DECK_CHOOSE scmd
         * @property {number|null} [deckId] C_DECK_CHOOSE deckId
         */

        /**
         * Constructs a new C_DECK_CHOOSE.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a C_DECK_CHOOSE.
         * @implements IC_DECK_CHOOSE
         * @constructor
         * @param {FriendlyMatchPto.IC_DECK_CHOOSE=} [properties] Properties to set
         */
        function C_DECK_CHOOSE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_DECK_CHOOSE cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.C_DECK_CHOOSE
         * @instance
         */
        C_DECK_CHOOSE.prototype.cmd = 201;

        /**
         * C_DECK_CHOOSE scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.C_DECK_CHOOSE
         * @instance
         */
        C_DECK_CHOOSE.prototype.scmd = 8;

        /**
         * C_DECK_CHOOSE deckId.
         * @member {number} deckId
         * @memberof FriendlyMatchPto.C_DECK_CHOOSE
         * @instance
         */
        C_DECK_CHOOSE.prototype.deckId = 0;

        /**
         * Encodes the specified C_DECK_CHOOSE message. Does not implicitly {@link FriendlyMatchPto.C_DECK_CHOOSE.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.C_DECK_CHOOSE
         * @static
         * @param {FriendlyMatchPto.IC_DECK_CHOOSE} message C_DECK_CHOOSE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_DECK_CHOOSE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.deckId != null && Object.hasOwnProperty.call(message, "deckId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.deckId);
            return writer;
        };

        /**
         * Decodes a C_DECK_CHOOSE message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.C_DECK_CHOOSE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.C_DECK_CHOOSE} C_DECK_CHOOSE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_DECK_CHOOSE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.C_DECK_CHOOSE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.deckId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_DECK_CHOOSE;
    })();

    FriendlyMatchPto.C_MATCH_CANCEL_DECK = (function() {

        /**
         * Properties of a C_MATCH_CANCEL_DECK.
         * @memberof FriendlyMatchPto
         * @interface IC_MATCH_CANCEL_DECK
         * @property {number|null} [cmd] C_MATCH_CANCEL_DECK cmd
         * @property {number|null} [scmd] C_MATCH_CANCEL_DECK scmd
         */

        /**
         * Constructs a new C_MATCH_CANCEL_DECK.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a C_MATCH_CANCEL_DECK.
         * @implements IC_MATCH_CANCEL_DECK
         * @constructor
         * @param {FriendlyMatchPto.IC_MATCH_CANCEL_DECK=} [properties] Properties to set
         */
        function C_MATCH_CANCEL_DECK(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_MATCH_CANCEL_DECK cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.C_MATCH_CANCEL_DECK
         * @instance
         */
        C_MATCH_CANCEL_DECK.prototype.cmd = 201;

        /**
         * C_MATCH_CANCEL_DECK scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.C_MATCH_CANCEL_DECK
         * @instance
         */
        C_MATCH_CANCEL_DECK.prototype.scmd = 9;

        /**
         * Encodes the specified C_MATCH_CANCEL_DECK message. Does not implicitly {@link FriendlyMatchPto.C_MATCH_CANCEL_DECK.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.C_MATCH_CANCEL_DECK
         * @static
         * @param {FriendlyMatchPto.IC_MATCH_CANCEL_DECK} message C_MATCH_CANCEL_DECK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_MATCH_CANCEL_DECK.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_MATCH_CANCEL_DECK message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.C_MATCH_CANCEL_DECK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.C_MATCH_CANCEL_DECK} C_MATCH_CANCEL_DECK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_MATCH_CANCEL_DECK.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.C_MATCH_CANCEL_DECK();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_MATCH_CANCEL_DECK;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_MATCH_STOP;
    })();

    FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE = (function() {

        /**
         * Properties of a S_FRIEND_DECK_STATUS_CHANGE.
         * @memberof FriendlyMatchPto
         * @interface IS_FRIEND_DECK_STATUS_CHANGE
         * @property {number|null} [cmd] S_FRIEND_DECK_STATUS_CHANGE cmd
         * @property {number|null} [scmd] S_FRIEND_DECK_STATUS_CHANGE scmd
         * @property {boolean|null} [isChoose] S_FRIEND_DECK_STATUS_CHANGE isChoose
         */

        /**
         * Constructs a new S_FRIEND_DECK_STATUS_CHANGE.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_FRIEND_DECK_STATUS_CHANGE.
         * @implements IS_FRIEND_DECK_STATUS_CHANGE
         * @constructor
         * @param {FriendlyMatchPto.IS_FRIEND_DECK_STATUS_CHANGE=} [properties] Properties to set
         */
        function S_FRIEND_DECK_STATUS_CHANGE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_FRIEND_DECK_STATUS_CHANGE cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE
         * @instance
         */
        S_FRIEND_DECK_STATUS_CHANGE.prototype.cmd = 201;

        /**
         * S_FRIEND_DECK_STATUS_CHANGE scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE
         * @instance
         */
        S_FRIEND_DECK_STATUS_CHANGE.prototype.scmd = 12;

        /**
         * S_FRIEND_DECK_STATUS_CHANGE isChoose.
         * @member {boolean} isChoose
         * @memberof FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE
         * @instance
         */
        S_FRIEND_DECK_STATUS_CHANGE.prototype.isChoose = false;

        /**
         * Encodes the specified S_FRIEND_DECK_STATUS_CHANGE message. Does not implicitly {@link FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE
         * @static
         * @param {FriendlyMatchPto.IS_FRIEND_DECK_STATUS_CHANGE} message S_FRIEND_DECK_STATUS_CHANGE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_FRIEND_DECK_STATUS_CHANGE.encode = function encode(message, writer) {
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
         * Decodes a S_FRIEND_DECK_STATUS_CHANGE message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE} S_FRIEND_DECK_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_FRIEND_DECK_STATUS_CHANGE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_FRIEND_DECK_STATUS_CHANGE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.isChoose = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_FRIEND_DECK_STATUS_CHANGE;
    })();

    FriendlyMatchPto.S_DECK_CHOOSE_RESULT = (function() {

        /**
         * Properties of a S_DECK_CHOOSE_RESULT.
         * @memberof FriendlyMatchPto
         * @interface IS_DECK_CHOOSE_RESULT
         * @property {number|null} [cmd] S_DECK_CHOOSE_RESULT cmd
         * @property {number|null} [scmd] S_DECK_CHOOSE_RESULT scmd
         * @property {number|null} [code] S_DECK_CHOOSE_RESULT code
         */

        /**
         * Constructs a new S_DECK_CHOOSE_RESULT.
         * @memberof FriendlyMatchPto
         * @classdesc Represents a S_DECK_CHOOSE_RESULT.
         * @implements IS_DECK_CHOOSE_RESULT
         * @constructor
         * @param {FriendlyMatchPto.IS_DECK_CHOOSE_RESULT=} [properties] Properties to set
         */
        function S_DECK_CHOOSE_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_DECK_CHOOSE_RESULT cmd.
         * @member {number} cmd
         * @memberof FriendlyMatchPto.S_DECK_CHOOSE_RESULT
         * @instance
         */
        S_DECK_CHOOSE_RESULT.prototype.cmd = 201;

        /**
         * S_DECK_CHOOSE_RESULT scmd.
         * @member {number} scmd
         * @memberof FriendlyMatchPto.S_DECK_CHOOSE_RESULT
         * @instance
         */
        S_DECK_CHOOSE_RESULT.prototype.scmd = 13;

        /**
         * S_DECK_CHOOSE_RESULT code.
         * @member {number} code
         * @memberof FriendlyMatchPto.S_DECK_CHOOSE_RESULT
         * @instance
         */
        S_DECK_CHOOSE_RESULT.prototype.code = 0;

        /**
         * Encodes the specified S_DECK_CHOOSE_RESULT message. Does not implicitly {@link FriendlyMatchPto.S_DECK_CHOOSE_RESULT.verify|verify} messages.
         * @function encode
         * @memberof FriendlyMatchPto.S_DECK_CHOOSE_RESULT
         * @static
         * @param {FriendlyMatchPto.IS_DECK_CHOOSE_RESULT} message S_DECK_CHOOSE_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_DECK_CHOOSE_RESULT.encode = function encode(message, writer) {
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
         * Decodes a S_DECK_CHOOSE_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof FriendlyMatchPto.S_DECK_CHOOSE_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendlyMatchPto.S_DECK_CHOOSE_RESULT} S_DECK_CHOOSE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_DECK_CHOOSE_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendlyMatchPto.S_DECK_CHOOSE_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_DECK_CHOOSE_RESULT;
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
     * DiceValueEnum enum.
     * @name GamePto.DiceValueEnum
     * @enum {number}
     * @property {number} Sword=0 Sword value
     * @property {number} Bow=1 Bow value
     * @property {number} Magic=2 Magic value
     * @property {number} Miss=3 Miss value
     */
    GamePto.DiceValueEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Sword"] = 0;
        values[valuesById[1] = "Bow"] = 1;
        values[valuesById[2] = "Magic"] = 2;
        values[valuesById[3] = "Miss"] = 3;
        return values;
    })();

    /**
     * UseConditionIndexEnum enum.
     * @name GamePto.UseConditionIndexEnum
     * @enum {number}
     * @property {number} UseConditionTypeIndex=0 UseConditionTypeIndex value
     * @property {number} UseConditionValueIndex=1 UseConditionValueIndex value
     */
    GamePto.UseConditionIndexEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UseConditionTypeIndex"] = 0;
        values[valuesById[1] = "UseConditionValueIndex"] = 1;
        return values;
    })();

    /**
     * UseConditionEnum enum.
     * @name GamePto.UseConditionEnum
     * @enum {number}
     * @property {number} NoCondition=0 NoCondition value
     * @property {number} BuidingCondition=1 BuidingCondition value
     * @property {number} UnitCondition=2 UnitCondition value
     * @property {number} EmptyBlock=3 EmptyBlock value
     * @property {number} FriendlyUnit=4 FriendlyUnit value
     * @property {number} FriendlyBuilding=5 FriendlyBuilding value
     * @property {number} EnemyUnit=6 EnemyUnit value
     * @property {number} EnemyBuilding=7 EnemyBuilding value
     * @property {number} AllUnit=8 AllUnit value
     * @property {number} AllBuilding=9 AllBuilding value
     * @property {number} FriendEntity=10 FriendEntity value
     * @property {number} EnemyEntity=11 EnemyEntity value
     * @property {number} AllEntity=12 AllEntity value
     * @property {number} FriendUnitOrBuilding=13 FriendUnitOrBuilding value
     * @property {number} EnemyUnitOrBuilding=14 EnemyUnitOrBuilding value
     * @property {number} AllUnitOrBuilding=15 AllUnitOrBuilding value
     * @property {number} FriendHero=16 FriendHero value
     * @property {number} EnemyHero=17 EnemyHero value
     * @property {number} AllHero=18 AllHero value
     */
    GamePto.UseConditionEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NoCondition"] = 0;
        values[valuesById[1] = "BuidingCondition"] = 1;
        values[valuesById[2] = "UnitCondition"] = 2;
        values[valuesById[3] = "EmptyBlock"] = 3;
        values[valuesById[4] = "FriendlyUnit"] = 4;
        values[valuesById[5] = "FriendlyBuilding"] = 5;
        values[valuesById[6] = "EnemyUnit"] = 6;
        values[valuesById[7] = "EnemyBuilding"] = 7;
        values[valuesById[8] = "AllUnit"] = 8;
        values[valuesById[9] = "AllBuilding"] = 9;
        values[valuesById[10] = "FriendEntity"] = 10;
        values[valuesById[11] = "EnemyEntity"] = 11;
        values[valuesById[12] = "AllEntity"] = 12;
        values[valuesById[13] = "FriendUnitOrBuilding"] = 13;
        values[valuesById[14] = "EnemyUnitOrBuilding"] = 14;
        values[valuesById[15] = "AllUnitOrBuilding"] = 15;
        values[valuesById[16] = "FriendHero"] = 16;
        values[valuesById[17] = "EnemyHero"] = 17;
        values[valuesById[18] = "AllHero"] = 18;
        return values;
    })();

    /**
     * AffectedEnum enum.
     * @name GamePto.AffectedEnum
     * @enum {number}
     * @property {number} Show=0 Show value
     * @property {number} HpReduce=1 HpReduce value
     * @property {number} HpAdd=2 HpAdd value
     */
    GamePto.AffectedEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Show"] = 0;
        values[valuesById[1] = "HpReduce"] = 1;
        values[valuesById[2] = "HpAdd"] = 2;
        return values;
    })();

    /**
     * RecordType enum.
     * @name GamePto.RecordType
     * @enum {number}
     * @property {number} Common=0 Common value
     * @property {number} Attack=1 Attack value
     * @property {number} Effect=2 Effect value
     * @property {number} Move=3 Move value
     * @property {number} Dead=4 Dead value
     * @property {number} Deny=5 Deny value
     */
    GamePto.RecordType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Common"] = 0;
        values[valuesById[1] = "Attack"] = 1;
        values[valuesById[2] = "Effect"] = 2;
        values[valuesById[3] = "Move"] = 3;
        values[valuesById[4] = "Dead"] = 4;
        values[valuesById[5] = "Deny"] = 5;
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
                case 0:
                    message.nick = reader.string();
                    break;
                case 1:
                    message.power = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return UserInfo;
    })();

    GamePto.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof GamePto
         * @interface ICard
         * @property {number|null} [id] Card id
         * @property {number|null} [cardId] Card cardId
         * @property {number|null} [cardType] Card cardType
         * @property {number|null} [attack] Card attack
         * @property {number|null} [hp] Card hp
         * @property {number|null} [hpUpperLimit] Card hpUpperLimit
         * @property {number|null} [cardFee] Card cardFee
         * @property {number|null} [uid] Card uid
         * @property {number|null} [blockX] Card blockX
         * @property {number|null} [blockY] Card blockY
         * @property {boolean|null} [allowAtk] Card allowAtk
         * @property {boolean|null} [allowMove] Card allowMove
         * @property {Array.<number>|null} [buffList] Card buffList
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
            this.buffList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card id.
         * @member {number} id
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.id = 0;

        /**
         * Card cardId.
         * @member {number} cardId
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.cardId = 0;

        /**
         * Card cardType.
         * @member {number} cardType
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.cardType = 0;

        /**
         * Card attack.
         * @member {number} attack
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.attack = 0;

        /**
         * Card hp.
         * @member {number} hp
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.hp = 0;

        /**
         * Card hpUpperLimit.
         * @member {number} hpUpperLimit
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.hpUpperLimit = 0;

        /**
         * Card cardFee.
         * @member {number} cardFee
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.cardFee = 0;

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
         * Card allowAtk.
         * @member {boolean} allowAtk
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.allowAtk = false;

        /**
         * Card allowMove.
         * @member {boolean} allowMove
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.allowMove = false;

        /**
         * Card buffList.
         * @member {Array.<number>} buffList
         * @memberof GamePto.Card
         * @instance
         */
        Card.prototype.buffList = $util.emptyArray;

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
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardId);
            if (message.cardType != null && Object.hasOwnProperty.call(message, "cardType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardType);
            if (message.attack != null && Object.hasOwnProperty.call(message, "attack"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.attack);
            if (message.hp != null && Object.hasOwnProperty.call(message, "hp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hp);
            if (message.hpUpperLimit != null && Object.hasOwnProperty.call(message, "hpUpperLimit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hpUpperLimit);
            if (message.cardFee != null && Object.hasOwnProperty.call(message, "cardFee"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cardFee);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.uid);
            if (message.blockX != null && Object.hasOwnProperty.call(message, "blockX"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.blockX);
            if (message.blockY != null && Object.hasOwnProperty.call(message, "blockY"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.blockY);
            if (message.allowAtk != null && Object.hasOwnProperty.call(message, "allowAtk"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.allowAtk);
            if (message.allowMove != null && Object.hasOwnProperty.call(message, "allowMove"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.allowMove);
            if (message.buffList != null && message.buffList.length) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork();
                for (var i = 0; i < message.buffList.length; ++i)
                    writer.int32(message.buffList[i]);
                writer.ldelim();
            }
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
                case 0:
                    message.id = reader.int32();
                    break;
                case 1:
                    message.cardId = reader.int32();
                    break;
                case 2:
                    message.cardType = reader.int32();
                    break;
                case 3:
                    message.attack = reader.int32();
                    break;
                case 4:
                    message.hp = reader.int32();
                    break;
                case 5:
                    message.hpUpperLimit = reader.int32();
                    break;
                case 6:
                    message.cardFee = reader.int32();
                    break;
                case 7:
                    message.uid = reader.int32();
                    break;
                case 8:
                    message.blockX = reader.int32();
                    break;
                case 9:
                    message.blockY = reader.int32();
                    break;
                case 10:
                    message.allowAtk = reader.bool();
                    break;
                case 11:
                    message.allowMove = reader.bool();
                    break;
                case 12:
                    if (!(message.buffList && message.buffList.length))
                        message.buffList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.buffList.push(reader.int32());
                    } else
                        message.buffList.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Card;
    })();

    GamePto.MapData = (function() {

        /**
         * Properties of a MapData.
         * @memberof GamePto
         * @interface IMapData
         * @property {Array.<GamePto.ICard>|null} [eventCards] MapData eventCards
         * @property {Array.<GamePto.ICard>|null} [entityCards] MapData entityCards
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
            this.entityCards = [];
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
         * MapData entityCards.
         * @member {Array.<GamePto.ICard>} entityCards
         * @memberof GamePto.MapData
         * @instance
         */
        MapData.prototype.entityCards = $util.emptyArray;

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
            if (message.entityCards != null && message.entityCards.length)
                for (var i = 0; i < message.entityCards.length; ++i)
                    $root.GamePto.Card.encode(message.entityCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                case 0:
                    if (!(message.eventCards && message.eventCards.length))
                        message.eventCards = [];
                    message.eventCards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                case 1:
                    if (!(message.entityCards && message.entityCards.length))
                        message.entityCards = [];
                    message.entityCards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MapData;
    })();

    GamePto.UserDetail = (function() {

        /**
         * Properties of a UserDetail.
         * @memberof GamePto
         * @interface IUserDetail
         * @property {number|null} [fee] UserDetail fee
         * @property {number|null} [maxFee] UserDetail maxFee
         * @property {number|null} [uid] UserDetail uid
         * @property {number|null} [atkTimes] UserDetail atkTimes
         * @property {number|null} [atkTimesLimit] UserDetail atkTimesLimit
         * @property {number|null} [moveTimes] UserDetail moveTimes
         * @property {number|null} [moveTimesLimit] UserDetail moveTimesLimit
         */

        /**
         * Constructs a new UserDetail.
         * @memberof GamePto
         * @classdesc Represents a UserDetail.
         * @implements IUserDetail
         * @constructor
         * @param {GamePto.IUserDetail=} [properties] Properties to set
         */
        function UserDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserDetail fee.
         * @member {number} fee
         * @memberof GamePto.UserDetail
         * @instance
         */
        UserDetail.prototype.fee = 0;

        /**
         * UserDetail maxFee.
         * @member {number} maxFee
         * @memberof GamePto.UserDetail
         * @instance
         */
        UserDetail.prototype.maxFee = 0;

        /**
         * UserDetail uid.
         * @member {number} uid
         * @memberof GamePto.UserDetail
         * @instance
         */
        UserDetail.prototype.uid = 0;

        /**
         * UserDetail atkTimes.
         * @member {number} atkTimes
         * @memberof GamePto.UserDetail
         * @instance
         */
        UserDetail.prototype.atkTimes = 0;

        /**
         * UserDetail atkTimesLimit.
         * @member {number} atkTimesLimit
         * @memberof GamePto.UserDetail
         * @instance
         */
        UserDetail.prototype.atkTimesLimit = 0;

        /**
         * UserDetail moveTimes.
         * @member {number} moveTimes
         * @memberof GamePto.UserDetail
         * @instance
         */
        UserDetail.prototype.moveTimes = 0;

        /**
         * UserDetail moveTimesLimit.
         * @member {number} moveTimesLimit
         * @memberof GamePto.UserDetail
         * @instance
         */
        UserDetail.prototype.moveTimesLimit = 0;

        /**
         * Encodes the specified UserDetail message. Does not implicitly {@link GamePto.UserDetail.verify|verify} messages.
         * @function encode
         * @memberof GamePto.UserDetail
         * @static
         * @param {GamePto.IUserDetail} message UserDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fee);
            if (message.maxFee != null && Object.hasOwnProperty.call(message, "maxFee"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxFee);
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
         * Decodes a UserDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.UserDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.UserDetail} UserDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.UserDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fee = reader.int32();
                    break;
                case 2:
                    message.maxFee = reader.int32();
                    break;
                case 3:
                    message.uid = reader.int32();
                    break;
                case 4:
                    message.atkTimes = reader.int32();
                    break;
                case 5:
                    message.atkTimesLimit = reader.int32();
                    break;
                case 6:
                    message.moveTimes = reader.int32();
                    break;
                case 7:
                    message.moveTimesLimit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return UserDetail;
    })();

    GamePto.AffectedCard = (function() {

        /**
         * Properties of an AffectedCard.
         * @memberof GamePto
         * @interface IAffectedCard
         * @property {GamePto.ICard|null} [card] AffectedCard card
         * @property {GamePto.AffectedEnum|null} [type] AffectedCard type
         * @property {number|null} [value] AffectedCard value
         */

        /**
         * Constructs a new AffectedCard.
         * @memberof GamePto
         * @classdesc Represents an AffectedCard.
         * @implements IAffectedCard
         * @constructor
         * @param {GamePto.IAffectedCard=} [properties] Properties to set
         */
        function AffectedCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AffectedCard card.
         * @member {GamePto.ICard|null|undefined} card
         * @memberof GamePto.AffectedCard
         * @instance
         */
        AffectedCard.prototype.card = null;

        /**
         * AffectedCard type.
         * @member {GamePto.AffectedEnum} type
         * @memberof GamePto.AffectedCard
         * @instance
         */
        AffectedCard.prototype.type = 0;

        /**
         * AffectedCard value.
         * @member {number} value
         * @memberof GamePto.AffectedCard
         * @instance
         */
        AffectedCard.prototype.value = 0;

        /**
         * Encodes the specified AffectedCard message. Does not implicitly {@link GamePto.AffectedCard.verify|verify} messages.
         * @function encode
         * @memberof GamePto.AffectedCard
         * @static
         * @param {GamePto.IAffectedCard} message AffectedCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AffectedCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                $root.GamePto.Card.encode(message.card, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.value);
            return writer;
        };

        /**
         * Decodes an AffectedCard message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.AffectedCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.AffectedCard} AffectedCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AffectedCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.AffectedCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.card = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AffectedCard;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    if (!(message.replaceCardIndexes && message.replaceCardIndexes.length))
                        message.replaceCardIndexes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.replaceCardIndexes.push(reader.int32());
                    } else
                        message.replaceCardIndexes.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.cardIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
         * @property {Array.<number>|null} [dataArr] C_USE_CARD dataArr
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
            this.dataArr = [];
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
         * C_USE_CARD dataArr.
         * @member {Array.<number>} dataArr
         * @memberof GamePto.C_USE_CARD
         * @instance
         */
        C_USE_CARD.prototype.dataArr = $util.emptyArray;

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
            if (message.dataArr != null && message.dataArr.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.dataArr.length; ++i)
                    writer.int32(message.dataArr[i]);
                writer.ldelim();
            }
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.cardIndex = reader.int32();
                    break;
                case 4:
                    if (!(message.dataArr && message.dataArr.length))
                        message.dataArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dataArr.push(reader.int32());
                    } else
                        message.dataArr.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_USE_CARD;
    })();

    GamePto.C_MOVE = (function() {

        /**
         * Properties of a C_MOVE.
         * @memberof GamePto
         * @interface IC_MOVE
         * @property {number|null} [cmd] C_MOVE cmd
         * @property {number|null} [scmd] C_MOVE scmd
         * @property {number|null} [sourceX] C_MOVE sourceX
         * @property {number|null} [sourceY] C_MOVE sourceY
         * @property {number|null} [targetX] C_MOVE targetX
         * @property {number|null} [targetY] C_MOVE targetY
         */

        /**
         * Constructs a new C_MOVE.
         * @memberof GamePto
         * @classdesc Represents a C_MOVE.
         * @implements IC_MOVE
         * @constructor
         * @param {GamePto.IC_MOVE=} [properties] Properties to set
         */
        function C_MOVE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_MOVE cmd.
         * @member {number} cmd
         * @memberof GamePto.C_MOVE
         * @instance
         */
        C_MOVE.prototype.cmd = 200;

        /**
         * C_MOVE scmd.
         * @member {number} scmd
         * @memberof GamePto.C_MOVE
         * @instance
         */
        C_MOVE.prototype.scmd = 5;

        /**
         * C_MOVE sourceX.
         * @member {number} sourceX
         * @memberof GamePto.C_MOVE
         * @instance
         */
        C_MOVE.prototype.sourceX = 0;

        /**
         * C_MOVE sourceY.
         * @member {number} sourceY
         * @memberof GamePto.C_MOVE
         * @instance
         */
        C_MOVE.prototype.sourceY = 0;

        /**
         * C_MOVE targetX.
         * @member {number} targetX
         * @memberof GamePto.C_MOVE
         * @instance
         */
        C_MOVE.prototype.targetX = 0;

        /**
         * C_MOVE targetY.
         * @member {number} targetY
         * @memberof GamePto.C_MOVE
         * @instance
         */
        C_MOVE.prototype.targetY = 0;

        /**
         * Encodes the specified C_MOVE message. Does not implicitly {@link GamePto.C_MOVE.verify|verify} messages.
         * @function encode
         * @memberof GamePto.C_MOVE
         * @static
         * @param {GamePto.IC_MOVE} message C_MOVE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_MOVE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.sourceX != null && Object.hasOwnProperty.call(message, "sourceX"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sourceX);
            if (message.sourceY != null && Object.hasOwnProperty.call(message, "sourceY"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sourceY);
            if (message.targetX != null && Object.hasOwnProperty.call(message, "targetX"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.targetX);
            if (message.targetY != null && Object.hasOwnProperty.call(message, "targetY"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.targetY);
            return writer;
        };

        /**
         * Decodes a C_MOVE message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.C_MOVE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.C_MOVE} C_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_MOVE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.C_MOVE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.sourceX = reader.int32();
                    break;
                case 4:
                    message.sourceY = reader.int32();
                    break;
                case 5:
                    message.targetX = reader.int32();
                    break;
                case 6:
                    message.targetY = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_MOVE;
    })();

    GamePto.C_ATTACK = (function() {

        /**
         * Properties of a C_ATTACK.
         * @memberof GamePto
         * @interface IC_ATTACK
         * @property {number|null} [cmd] C_ATTACK cmd
         * @property {number|null} [scmd] C_ATTACK scmd
         * @property {number|null} [sourceX] C_ATTACK sourceX
         * @property {number|null} [sourceY] C_ATTACK sourceY
         * @property {number|null} [targetX] C_ATTACK targetX
         * @property {number|null} [targetY] C_ATTACK targetY
         */

        /**
         * Constructs a new C_ATTACK.
         * @memberof GamePto
         * @classdesc Represents a C_ATTACK.
         * @implements IC_ATTACK
         * @constructor
         * @param {GamePto.IC_ATTACK=} [properties] Properties to set
         */
        function C_ATTACK(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_ATTACK cmd.
         * @member {number} cmd
         * @memberof GamePto.C_ATTACK
         * @instance
         */
        C_ATTACK.prototype.cmd = 200;

        /**
         * C_ATTACK scmd.
         * @member {number} scmd
         * @memberof GamePto.C_ATTACK
         * @instance
         */
        C_ATTACK.prototype.scmd = 6;

        /**
         * C_ATTACK sourceX.
         * @member {number} sourceX
         * @memberof GamePto.C_ATTACK
         * @instance
         */
        C_ATTACK.prototype.sourceX = 0;

        /**
         * C_ATTACK sourceY.
         * @member {number} sourceY
         * @memberof GamePto.C_ATTACK
         * @instance
         */
        C_ATTACK.prototype.sourceY = 0;

        /**
         * C_ATTACK targetX.
         * @member {number} targetX
         * @memberof GamePto.C_ATTACK
         * @instance
         */
        C_ATTACK.prototype.targetX = 0;

        /**
         * C_ATTACK targetY.
         * @member {number} targetY
         * @memberof GamePto.C_ATTACK
         * @instance
         */
        C_ATTACK.prototype.targetY = 0;

        /**
         * Encodes the specified C_ATTACK message. Does not implicitly {@link GamePto.C_ATTACK.verify|verify} messages.
         * @function encode
         * @memberof GamePto.C_ATTACK
         * @static
         * @param {GamePto.IC_ATTACK} message C_ATTACK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_ATTACK.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.sourceX != null && Object.hasOwnProperty.call(message, "sourceX"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sourceX);
            if (message.sourceY != null && Object.hasOwnProperty.call(message, "sourceY"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sourceY);
            if (message.targetX != null && Object.hasOwnProperty.call(message, "targetX"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.targetX);
            if (message.targetY != null && Object.hasOwnProperty.call(message, "targetY"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.targetY);
            return writer;
        };

        /**
         * Decodes a C_ATTACK message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.C_ATTACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.C_ATTACK} C_ATTACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_ATTACK.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.C_ATTACK();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.sourceX = reader.int32();
                    break;
                case 4:
                    message.sourceY = reader.int32();
                    break;
                case 5:
                    message.targetX = reader.int32();
                    break;
                case 6:
                    message.targetY = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_ATTACK;
    })();

    GamePto.C_RECONNECT = (function() {

        /**
         * Properties of a C_RECONNECT.
         * @memberof GamePto
         * @interface IC_RECONNECT
         * @property {number|null} [cmd] C_RECONNECT cmd
         * @property {number|null} [scmd] C_RECONNECT scmd
         */

        /**
         * Constructs a new C_RECONNECT.
         * @memberof GamePto
         * @classdesc Represents a C_RECONNECT.
         * @implements IC_RECONNECT
         * @constructor
         * @param {GamePto.IC_RECONNECT=} [properties] Properties to set
         */
        function C_RECONNECT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_RECONNECT cmd.
         * @member {number} cmd
         * @memberof GamePto.C_RECONNECT
         * @instance
         */
        C_RECONNECT.prototype.cmd = 200;

        /**
         * C_RECONNECT scmd.
         * @member {number} scmd
         * @memberof GamePto.C_RECONNECT
         * @instance
         */
        C_RECONNECT.prototype.scmd = 7;

        /**
         * Encodes the specified C_RECONNECT message. Does not implicitly {@link GamePto.C_RECONNECT.verify|verify} messages.
         * @function encode
         * @memberof GamePto.C_RECONNECT
         * @static
         * @param {GamePto.IC_RECONNECT} message C_RECONNECT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_RECONNECT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_RECONNECT message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.C_RECONNECT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.C_RECONNECT} C_RECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_RECONNECT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.C_RECONNECT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_RECONNECT;
    })();

    GamePto.C_SURRENDER = (function() {

        /**
         * Properties of a C_SURRENDER.
         * @memberof GamePto
         * @interface IC_SURRENDER
         * @property {number|null} [cmd] C_SURRENDER cmd
         * @property {number|null} [scmd] C_SURRENDER scmd
         */

        /**
         * Constructs a new C_SURRENDER.
         * @memberof GamePto
         * @classdesc Represents a C_SURRENDER.
         * @implements IC_SURRENDER
         * @constructor
         * @param {GamePto.IC_SURRENDER=} [properties] Properties to set
         */
        function C_SURRENDER(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_SURRENDER cmd.
         * @member {number} cmd
         * @memberof GamePto.C_SURRENDER
         * @instance
         */
        C_SURRENDER.prototype.cmd = 200;

        /**
         * C_SURRENDER scmd.
         * @member {number} scmd
         * @memberof GamePto.C_SURRENDER
         * @instance
         */
        C_SURRENDER.prototype.scmd = 8;

        /**
         * Encodes the specified C_SURRENDER message. Does not implicitly {@link GamePto.C_SURRENDER.verify|verify} messages.
         * @function encode
         * @memberof GamePto.C_SURRENDER
         * @static
         * @param {GamePto.IC_SURRENDER} message C_SURRENDER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_SURRENDER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_SURRENDER message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.C_SURRENDER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.C_SURRENDER} C_SURRENDER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_SURRENDER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.C_SURRENDER();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_SURRENDER;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.GamePto.UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
         * @property {boolean|null} [isReplace] S_GAME_START isReplace
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
         * S_GAME_START isReplace.
         * @member {boolean} isReplace
         * @memberof GamePto.S_GAME_START
         * @instance
         */
        S_GAME_START.prototype.isReplace = false;

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
            if (message.isReplace != null && Object.hasOwnProperty.call(message, "isReplace"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isReplace);
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.firstUid = reader.int32();
                    break;
                case 4:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.mapData = $root.GamePto.MapData.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.replaceEndTime = reader.int64();
                    break;
                case 7:
                    message.isReplace = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.replaceCardIndexes && message.replaceCardIndexes.length))
                        message.replaceCardIndexes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.replaceCardIndexes.push(reader.int32());
                    } else
                        message.replaceCardIndexes.push(reader.int32());
                    break;
                case 5:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.uid = reader.int32();
                    break;
                case 4:
                    message.atkTimes = reader.int32();
                    break;
                case 5:
                    message.atkTimesLimit = reader.int32();
                    break;
                case 6:
                    message.moveTimes = reader.int32();
                    break;
                case 7:
                    message.moveTimesLimit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
         * @property {Array.<GamePto.ICard>|null} [inHandCards] S_DRAW_CARDS inHandCards
         * @property {number|null} [inHandCardCount] S_DRAW_CARDS inHandCardCount
         * @property {Array.<GamePto.ICard>|null} [discards] S_DRAW_CARDS discards
         * @property {number|null} [discardsCount] S_DRAW_CARDS discardsCount
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
            this.inHandCards = [];
            this.discards = [];
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
         * S_DRAW_CARDS inHandCards.
         * @member {Array.<GamePto.ICard>} inHandCards
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.inHandCards = $util.emptyArray;

        /**
         * S_DRAW_CARDS inHandCardCount.
         * @member {number} inHandCardCount
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.inHandCardCount = 0;

        /**
         * S_DRAW_CARDS discards.
         * @member {Array.<GamePto.ICard>} discards
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.discards = $util.emptyArray;

        /**
         * S_DRAW_CARDS discardsCount.
         * @member {number} discardsCount
         * @memberof GamePto.S_DRAW_CARDS
         * @instance
         */
        S_DRAW_CARDS.prototype.discardsCount = 0;

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
            if (message.inHandCards != null && message.inHandCards.length)
                for (var i = 0; i < message.inHandCards.length; ++i)
                    $root.GamePto.Card.encode(message.inHandCards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.inHandCardCount != null && Object.hasOwnProperty.call(message, "inHandCardCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.inHandCardCount);
            if (message.discards != null && message.discards.length)
                for (var i = 0; i < message.discards.length; ++i)
                    $root.GamePto.Card.encode(message.discards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.discardsCount != null && Object.hasOwnProperty.call(message, "discardsCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.discardsCount);
            if (message.damages != null && message.damages.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.damages.length; ++i)
                    writer.int32(message.damages[i]);
                writer.ldelim();
            }
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.uid);
            if (message.cardPoolNum != null && Object.hasOwnProperty.call(message, "cardPoolNum"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.cardPoolNum);
            if (message.deadPoolNum != null && Object.hasOwnProperty.call(message, "deadPoolNum"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.deadPoolNum);
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    if (!(message.inHandCards && message.inHandCards.length))
                        message.inHandCards = [];
                    message.inHandCards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.inHandCardCount = reader.int32();
                    break;
                case 5:
                    if (!(message.discards && message.discards.length))
                        message.discards = [];
                    message.discards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.discardsCount = reader.int32();
                    break;
                case 7:
                    if (!(message.damages && message.damages.length))
                        message.damages = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.damages.push(reader.int32());
                    } else
                        message.damages.push(reader.int32());
                    break;
                case 8:
                    message.uid = reader.int32();
                    break;
                case 9:
                    message.cardPoolNum = reader.int32();
                    break;
                case 10:
                    message.deadPoolNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.fee = reader.int32();
                    break;
                case 4:
                    message.maxFee = reader.int32();
                    break;
                case 5:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.uid);
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.isSuccess = reader.bool();
                    break;
                case 4:
                    message.cardIndex = reader.int32();
                    break;
                case 5:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.uid);
            if (message.cardIndex != null && Object.hasOwnProperty.call(message, "cardIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cardIndex);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                $root.GamePto.Card.encode(message.card, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.isSuccess = reader.bool();
                    break;
                case 4:
                    message.uid = reader.int32();
                    break;
                case 5:
                    message.cardIndex = reader.int32();
                    break;
                case 6:
                    message.card = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
         * @property {number|Long|null} [roundEndTime] S_ROUND_END_TIME roundEndTime
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
         * S_ROUND_END_TIME roundEndTime.
         * @member {number|Long} roundEndTime
         * @memberof GamePto.S_ROUND_END_TIME
         * @instance
         */
        S_ROUND_END_TIME.prototype.roundEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
            if (message.roundEndTime != null && Object.hasOwnProperty.call(message, "roundEndTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.roundEndTime);
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.roundEndTime = reader.int64();
                    break;
                case 4:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_ROUND_END_TIME;
    })();

    GamePto.S_MAP_DATA = (function() {

        /**
         * Properties of a S_MAP_DATA.
         * @memberof GamePto
         * @interface IS_MAP_DATA
         * @property {number|null} [cmd] S_MAP_DATA cmd
         * @property {number|null} [scmd] S_MAP_DATA scmd
         * @property {GamePto.IMapData|null} [mapData] S_MAP_DATA mapData
         */

        /**
         * Constructs a new S_MAP_DATA.
         * @memberof GamePto
         * @classdesc Represents a S_MAP_DATA.
         * @implements IS_MAP_DATA
         * @constructor
         * @param {GamePto.IS_MAP_DATA=} [properties] Properties to set
         */
        function S_MAP_DATA(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_MAP_DATA cmd.
         * @member {number} cmd
         * @memberof GamePto.S_MAP_DATA
         * @instance
         */
        S_MAP_DATA.prototype.cmd = 200;

        /**
         * S_MAP_DATA scmd.
         * @member {number} scmd
         * @memberof GamePto.S_MAP_DATA
         * @instance
         */
        S_MAP_DATA.prototype.scmd = 10011;

        /**
         * S_MAP_DATA mapData.
         * @member {GamePto.IMapData|null|undefined} mapData
         * @memberof GamePto.S_MAP_DATA
         * @instance
         */
        S_MAP_DATA.prototype.mapData = null;

        /**
         * Encodes the specified S_MAP_DATA message. Does not implicitly {@link GamePto.S_MAP_DATA.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_MAP_DATA
         * @static
         * @param {GamePto.IS_MAP_DATA} message S_MAP_DATA message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_MAP_DATA.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.mapData != null && Object.hasOwnProperty.call(message, "mapData"))
                $root.GamePto.MapData.encode(message.mapData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_MAP_DATA message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_MAP_DATA
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_MAP_DATA} S_MAP_DATA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_MAP_DATA.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_MAP_DATA();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.mapData = $root.GamePto.MapData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_MAP_DATA;
    })();

    GamePto.S_MOVE = (function() {

        /**
         * Properties of a S_MOVE.
         * @memberof GamePto
         * @interface IS_MOVE
         * @property {number|null} [cmd] S_MOVE cmd
         * @property {number|null} [scmd] S_MOVE scmd
         * @property {number|null} [sourceX] S_MOVE sourceX
         * @property {number|null} [sourceY] S_MOVE sourceY
         * @property {GamePto.ICard|null} [card] S_MOVE card
         * @property {boolean|null} [allowMove] S_MOVE allowMove
         * @property {number|null} [uid] S_MOVE uid
         */

        /**
         * Constructs a new S_MOVE.
         * @memberof GamePto
         * @classdesc Represents a S_MOVE.
         * @implements IS_MOVE
         * @constructor
         * @param {GamePto.IS_MOVE=} [properties] Properties to set
         */
        function S_MOVE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_MOVE cmd.
         * @member {number} cmd
         * @memberof GamePto.S_MOVE
         * @instance
         */
        S_MOVE.prototype.cmd = 200;

        /**
         * S_MOVE scmd.
         * @member {number} scmd
         * @memberof GamePto.S_MOVE
         * @instance
         */
        S_MOVE.prototype.scmd = 10012;

        /**
         * S_MOVE sourceX.
         * @member {number} sourceX
         * @memberof GamePto.S_MOVE
         * @instance
         */
        S_MOVE.prototype.sourceX = 0;

        /**
         * S_MOVE sourceY.
         * @member {number} sourceY
         * @memberof GamePto.S_MOVE
         * @instance
         */
        S_MOVE.prototype.sourceY = 0;

        /**
         * S_MOVE card.
         * @member {GamePto.ICard|null|undefined} card
         * @memberof GamePto.S_MOVE
         * @instance
         */
        S_MOVE.prototype.card = null;

        /**
         * S_MOVE allowMove.
         * @member {boolean} allowMove
         * @memberof GamePto.S_MOVE
         * @instance
         */
        S_MOVE.prototype.allowMove = false;

        /**
         * S_MOVE uid.
         * @member {number} uid
         * @memberof GamePto.S_MOVE
         * @instance
         */
        S_MOVE.prototype.uid = 0;

        /**
         * Encodes the specified S_MOVE message. Does not implicitly {@link GamePto.S_MOVE.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_MOVE
         * @static
         * @param {GamePto.IS_MOVE} message S_MOVE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_MOVE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.sourceX != null && Object.hasOwnProperty.call(message, "sourceX"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sourceX);
            if (message.sourceY != null && Object.hasOwnProperty.call(message, "sourceY"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sourceY);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                $root.GamePto.Card.encode(message.card, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.allowMove != null && Object.hasOwnProperty.call(message, "allowMove"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.allowMove);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.uid);
            return writer;
        };

        /**
         * Decodes a S_MOVE message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_MOVE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_MOVE} S_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_MOVE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_MOVE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.sourceX = reader.int32();
                    break;
                case 4:
                    message.sourceY = reader.int32();
                    break;
                case 5:
                    message.card = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allowMove = reader.bool();
                    break;
                case 7:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_MOVE;
    })();

    GamePto.S_ATTACK = (function() {

        /**
         * Properties of a S_ATTACK.
         * @memberof GamePto
         * @interface IS_ATTACK
         * @property {number|null} [cmd] S_ATTACK cmd
         * @property {number|null} [scmd] S_ATTACK scmd
         * @property {number|null} [uid] S_ATTACK uid
         * @property {Array.<number>|null} [dices] S_ATTACK dices
         * @property {number|null} [leastAtkTimes] S_ATTACK leastAtkTimes
         * @property {number|null} [damage] S_ATTACK damage
         * @property {boolean|null} [allowAtk] S_ATTACK allowAtk
         * @property {GamePto.ICard|null} [from] S_ATTACK from
         * @property {Array.<GamePto.ICard>|null} [targetList] S_ATTACK targetList
         */

        /**
         * Constructs a new S_ATTACK.
         * @memberof GamePto
         * @classdesc Represents a S_ATTACK.
         * @implements IS_ATTACK
         * @constructor
         * @param {GamePto.IS_ATTACK=} [properties] Properties to set
         */
        function S_ATTACK(properties) {
            this.dices = [];
            this.targetList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ATTACK cmd.
         * @member {number} cmd
         * @memberof GamePto.S_ATTACK
         * @instance
         */
        S_ATTACK.prototype.cmd = 200;

        /**
         * S_ATTACK scmd.
         * @member {number} scmd
         * @memberof GamePto.S_ATTACK
         * @instance
         */
        S_ATTACK.prototype.scmd = 10013;

        /**
         * S_ATTACK uid.
         * @member {number} uid
         * @memberof GamePto.S_ATTACK
         * @instance
         */
        S_ATTACK.prototype.uid = 0;

        /**
         * S_ATTACK dices.
         * @member {Array.<number>} dices
         * @memberof GamePto.S_ATTACK
         * @instance
         */
        S_ATTACK.prototype.dices = $util.emptyArray;

        /**
         * S_ATTACK leastAtkTimes.
         * @member {number} leastAtkTimes
         * @memberof GamePto.S_ATTACK
         * @instance
         */
        S_ATTACK.prototype.leastAtkTimes = 0;

        /**
         * S_ATTACK damage.
         * @member {number} damage
         * @memberof GamePto.S_ATTACK
         * @instance
         */
        S_ATTACK.prototype.damage = 0;

        /**
         * S_ATTACK allowAtk.
         * @member {boolean} allowAtk
         * @memberof GamePto.S_ATTACK
         * @instance
         */
        S_ATTACK.prototype.allowAtk = false;

        /**
         * S_ATTACK from.
         * @member {GamePto.ICard|null|undefined} from
         * @memberof GamePto.S_ATTACK
         * @instance
         */
        S_ATTACK.prototype.from = null;

        /**
         * S_ATTACK targetList.
         * @member {Array.<GamePto.ICard>} targetList
         * @memberof GamePto.S_ATTACK
         * @instance
         */
        S_ATTACK.prototype.targetList = $util.emptyArray;

        /**
         * Encodes the specified S_ATTACK message. Does not implicitly {@link GamePto.S_ATTACK.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_ATTACK
         * @static
         * @param {GamePto.IS_ATTACK} message S_ATTACK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ATTACK.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.uid);
            if (message.dices != null && message.dices.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.dices.length; ++i)
                    writer.int32(message.dices[i]);
                writer.ldelim();
            }
            if (message.leastAtkTimes != null && Object.hasOwnProperty.call(message, "leastAtkTimes"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.leastAtkTimes);
            if (message.damage != null && Object.hasOwnProperty.call(message, "damage"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.damage);
            if (message.allowAtk != null && Object.hasOwnProperty.call(message, "allowAtk"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.allowAtk);
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                $root.GamePto.Card.encode(message.from, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.targetList != null && message.targetList.length)
                for (var i = 0; i < message.targetList.length; ++i)
                    $root.GamePto.Card.encode(message.targetList[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_ATTACK message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_ATTACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_ATTACK} S_ATTACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ATTACK.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_ATTACK();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.uid = reader.int32();
                    break;
                case 4:
                    if (!(message.dices && message.dices.length))
                        message.dices = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dices.push(reader.int32());
                    } else
                        message.dices.push(reader.int32());
                    break;
                case 5:
                    message.leastAtkTimes = reader.int32();
                    break;
                case 6:
                    message.damage = reader.int32();
                    break;
                case 7:
                    message.allowAtk = reader.bool();
                    break;
                case 8:
                    message.from = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                case 9:
                    if (!(message.targetList && message.targetList.length))
                        message.targetList = [];
                    message.targetList.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_ATTACK;
    })();

    GamePto.S_ENTITY_DEAD = (function() {

        /**
         * Properties of a S_ENTITY_DEAD.
         * @memberof GamePto
         * @interface IS_ENTITY_DEAD
         * @property {number|null} [cmd] S_ENTITY_DEAD cmd
         * @property {number|null} [scmd] S_ENTITY_DEAD scmd
         * @property {GamePto.ICard|null} [deadCard] S_ENTITY_DEAD deadCard
         */

        /**
         * Constructs a new S_ENTITY_DEAD.
         * @memberof GamePto
         * @classdesc Represents a S_ENTITY_DEAD.
         * @implements IS_ENTITY_DEAD
         * @constructor
         * @param {GamePto.IS_ENTITY_DEAD=} [properties] Properties to set
         */
        function S_ENTITY_DEAD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ENTITY_DEAD cmd.
         * @member {number} cmd
         * @memberof GamePto.S_ENTITY_DEAD
         * @instance
         */
        S_ENTITY_DEAD.prototype.cmd = 200;

        /**
         * S_ENTITY_DEAD scmd.
         * @member {number} scmd
         * @memberof GamePto.S_ENTITY_DEAD
         * @instance
         */
        S_ENTITY_DEAD.prototype.scmd = 10014;

        /**
         * S_ENTITY_DEAD deadCard.
         * @member {GamePto.ICard|null|undefined} deadCard
         * @memberof GamePto.S_ENTITY_DEAD
         * @instance
         */
        S_ENTITY_DEAD.prototype.deadCard = null;

        /**
         * Encodes the specified S_ENTITY_DEAD message. Does not implicitly {@link GamePto.S_ENTITY_DEAD.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_ENTITY_DEAD
         * @static
         * @param {GamePto.IS_ENTITY_DEAD} message S_ENTITY_DEAD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ENTITY_DEAD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.deadCard != null && Object.hasOwnProperty.call(message, "deadCard"))
                $root.GamePto.Card.encode(message.deadCard, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_ENTITY_DEAD message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_ENTITY_DEAD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_ENTITY_DEAD} S_ENTITY_DEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ENTITY_DEAD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_ENTITY_DEAD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.deadCard = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_ENTITY_DEAD;
    })();

    GamePto.S_EVENT_UPDATE = (function() {

        /**
         * Properties of a S_EVENT_UPDATE.
         * @memberof GamePto
         * @interface IS_EVENT_UPDATE
         * @property {number|null} [cmd] S_EVENT_UPDATE cmd
         * @property {number|null} [scmd] S_EVENT_UPDATE scmd
         * @property {GamePto.ICard|null} [card] S_EVENT_UPDATE card
         */

        /**
         * Constructs a new S_EVENT_UPDATE.
         * @memberof GamePto
         * @classdesc Represents a S_EVENT_UPDATE.
         * @implements IS_EVENT_UPDATE
         * @constructor
         * @param {GamePto.IS_EVENT_UPDATE=} [properties] Properties to set
         */
        function S_EVENT_UPDATE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_EVENT_UPDATE cmd.
         * @member {number} cmd
         * @memberof GamePto.S_EVENT_UPDATE
         * @instance
         */
        S_EVENT_UPDATE.prototype.cmd = 200;

        /**
         * S_EVENT_UPDATE scmd.
         * @member {number} scmd
         * @memberof GamePto.S_EVENT_UPDATE
         * @instance
         */
        S_EVENT_UPDATE.prototype.scmd = 10015;

        /**
         * S_EVENT_UPDATE card.
         * @member {GamePto.ICard|null|undefined} card
         * @memberof GamePto.S_EVENT_UPDATE
         * @instance
         */
        S_EVENT_UPDATE.prototype.card = null;

        /**
         * Encodes the specified S_EVENT_UPDATE message. Does not implicitly {@link GamePto.S_EVENT_UPDATE.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_EVENT_UPDATE
         * @static
         * @param {GamePto.IS_EVENT_UPDATE} message S_EVENT_UPDATE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_EVENT_UPDATE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                $root.GamePto.Card.encode(message.card, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_EVENT_UPDATE message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_EVENT_UPDATE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_EVENT_UPDATE} S_EVENT_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_EVENT_UPDATE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_EVENT_UPDATE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.card = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_EVENT_UPDATE;
    })();

    GamePto.S_UPDATE_ENTITYS = (function() {

        /**
         * Properties of a S_UPDATE_ENTITYS.
         * @memberof GamePto
         * @interface IS_UPDATE_ENTITYS
         * @property {number|null} [cmd] S_UPDATE_ENTITYS cmd
         * @property {number|null} [scmd] S_UPDATE_ENTITYS scmd
         * @property {Array.<GamePto.ICard>|null} [entityCards] S_UPDATE_ENTITYS entityCards
         * @property {Array.<string>|null} [tipsList] S_UPDATE_ENTITYS tipsList
         */

        /**
         * Constructs a new S_UPDATE_ENTITYS.
         * @memberof GamePto
         * @classdesc Represents a S_UPDATE_ENTITYS.
         * @implements IS_UPDATE_ENTITYS
         * @constructor
         * @param {GamePto.IS_UPDATE_ENTITYS=} [properties] Properties to set
         */
        function S_UPDATE_ENTITYS(properties) {
            this.entityCards = [];
            this.tipsList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_UPDATE_ENTITYS cmd.
         * @member {number} cmd
         * @memberof GamePto.S_UPDATE_ENTITYS
         * @instance
         */
        S_UPDATE_ENTITYS.prototype.cmd = 200;

        /**
         * S_UPDATE_ENTITYS scmd.
         * @member {number} scmd
         * @memberof GamePto.S_UPDATE_ENTITYS
         * @instance
         */
        S_UPDATE_ENTITYS.prototype.scmd = 10016;

        /**
         * S_UPDATE_ENTITYS entityCards.
         * @member {Array.<GamePto.ICard>} entityCards
         * @memberof GamePto.S_UPDATE_ENTITYS
         * @instance
         */
        S_UPDATE_ENTITYS.prototype.entityCards = $util.emptyArray;

        /**
         * S_UPDATE_ENTITYS tipsList.
         * @member {Array.<string>} tipsList
         * @memberof GamePto.S_UPDATE_ENTITYS
         * @instance
         */
        S_UPDATE_ENTITYS.prototype.tipsList = $util.emptyArray;

        /**
         * Encodes the specified S_UPDATE_ENTITYS message. Does not implicitly {@link GamePto.S_UPDATE_ENTITYS.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_UPDATE_ENTITYS
         * @static
         * @param {GamePto.IS_UPDATE_ENTITYS} message S_UPDATE_ENTITYS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_UPDATE_ENTITYS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.entityCards != null && message.entityCards.length)
                for (var i = 0; i < message.entityCards.length; ++i)
                    $root.GamePto.Card.encode(message.entityCards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.tipsList != null && message.tipsList.length)
                for (var i = 0; i < message.tipsList.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.tipsList[i]);
            return writer;
        };

        /**
         * Decodes a S_UPDATE_ENTITYS message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_UPDATE_ENTITYS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_UPDATE_ENTITYS} S_UPDATE_ENTITYS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_UPDATE_ENTITYS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_UPDATE_ENTITYS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    if (!(message.entityCards && message.entityCards.length))
                        message.entityCards = [];
                    message.entityCards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.tipsList && message.tipsList.length))
                        message.tipsList = [];
                    message.tipsList.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_UPDATE_ENTITYS;
    })();

    GamePto.S_COMMON_EFFECT = (function() {

        /**
         * Properties of a S_COMMON_EFFECT.
         * @memberof GamePto
         * @interface IS_COMMON_EFFECT
         * @property {number|null} [cmd] S_COMMON_EFFECT cmd
         * @property {number|null} [scmd] S_COMMON_EFFECT scmd
         * @property {number|null} [effectId] S_COMMON_EFFECT effectId
         * @property {Array.<number>|null} [dataArr] S_COMMON_EFFECT dataArr
         */

        /**
         * Constructs a new S_COMMON_EFFECT.
         * @memberof GamePto
         * @classdesc Represents a S_COMMON_EFFECT.
         * @implements IS_COMMON_EFFECT
         * @constructor
         * @param {GamePto.IS_COMMON_EFFECT=} [properties] Properties to set
         */
        function S_COMMON_EFFECT(properties) {
            this.dataArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_COMMON_EFFECT cmd.
         * @member {number} cmd
         * @memberof GamePto.S_COMMON_EFFECT
         * @instance
         */
        S_COMMON_EFFECT.prototype.cmd = 200;

        /**
         * S_COMMON_EFFECT scmd.
         * @member {number} scmd
         * @memberof GamePto.S_COMMON_EFFECT
         * @instance
         */
        S_COMMON_EFFECT.prototype.scmd = 10017;

        /**
         * S_COMMON_EFFECT effectId.
         * @member {number} effectId
         * @memberof GamePto.S_COMMON_EFFECT
         * @instance
         */
        S_COMMON_EFFECT.prototype.effectId = 0;

        /**
         * S_COMMON_EFFECT dataArr.
         * @member {Array.<number>} dataArr
         * @memberof GamePto.S_COMMON_EFFECT
         * @instance
         */
        S_COMMON_EFFECT.prototype.dataArr = $util.emptyArray;

        /**
         * Encodes the specified S_COMMON_EFFECT message. Does not implicitly {@link GamePto.S_COMMON_EFFECT.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_COMMON_EFFECT
         * @static
         * @param {GamePto.IS_COMMON_EFFECT} message S_COMMON_EFFECT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_COMMON_EFFECT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.effectId != null && Object.hasOwnProperty.call(message, "effectId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.effectId);
            if (message.dataArr != null && message.dataArr.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.dataArr.length; ++i)
                    writer.int32(message.dataArr[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a S_COMMON_EFFECT message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_COMMON_EFFECT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_COMMON_EFFECT} S_COMMON_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_COMMON_EFFECT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_COMMON_EFFECT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.effectId = reader.int32();
                    break;
                case 4:
                    if (!(message.dataArr && message.dataArr.length))
                        message.dataArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dataArr.push(reader.int32());
                    } else
                        message.dataArr.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_COMMON_EFFECT;
    })();

    GamePto.S_FLY_EFFECT = (function() {

        /**
         * Properties of a S_FLY_EFFECT.
         * @memberof GamePto
         * @interface IS_FLY_EFFECT
         * @property {number|null} [cmd] S_FLY_EFFECT cmd
         * @property {number|null} [scmd] S_FLY_EFFECT scmd
         * @property {GamePto.ICard|null} [from] S_FLY_EFFECT from
         * @property {GamePto.ICard|null} [target] S_FLY_EFFECT target
         * @property {string|null} [targetShowTips] S_FLY_EFFECT targetShowTips
         */

        /**
         * Constructs a new S_FLY_EFFECT.
         * @memberof GamePto
         * @classdesc Represents a S_FLY_EFFECT.
         * @implements IS_FLY_EFFECT
         * @constructor
         * @param {GamePto.IS_FLY_EFFECT=} [properties] Properties to set
         */
        function S_FLY_EFFECT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_FLY_EFFECT cmd.
         * @member {number} cmd
         * @memberof GamePto.S_FLY_EFFECT
         * @instance
         */
        S_FLY_EFFECT.prototype.cmd = 200;

        /**
         * S_FLY_EFFECT scmd.
         * @member {number} scmd
         * @memberof GamePto.S_FLY_EFFECT
         * @instance
         */
        S_FLY_EFFECT.prototype.scmd = 10018;

        /**
         * S_FLY_EFFECT from.
         * @member {GamePto.ICard|null|undefined} from
         * @memberof GamePto.S_FLY_EFFECT
         * @instance
         */
        S_FLY_EFFECT.prototype.from = null;

        /**
         * S_FLY_EFFECT target.
         * @member {GamePto.ICard|null|undefined} target
         * @memberof GamePto.S_FLY_EFFECT
         * @instance
         */
        S_FLY_EFFECT.prototype.target = null;

        /**
         * S_FLY_EFFECT targetShowTips.
         * @member {string} targetShowTips
         * @memberof GamePto.S_FLY_EFFECT
         * @instance
         */
        S_FLY_EFFECT.prototype.targetShowTips = "";

        /**
         * Encodes the specified S_FLY_EFFECT message. Does not implicitly {@link GamePto.S_FLY_EFFECT.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_FLY_EFFECT
         * @static
         * @param {GamePto.IS_FLY_EFFECT} message S_FLY_EFFECT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_FLY_EFFECT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                $root.GamePto.Card.encode(message.from, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.GamePto.Card.encode(message.target, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.targetShowTips != null && Object.hasOwnProperty.call(message, "targetShowTips"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.targetShowTips);
            return writer;
        };

        /**
         * Decodes a S_FLY_EFFECT message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_FLY_EFFECT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_FLY_EFFECT} S_FLY_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_FLY_EFFECT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_FLY_EFFECT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.from = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.target = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.targetShowTips = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_FLY_EFFECT;
    })();

    GamePto.S_SELF_EFFECT = (function() {

        /**
         * Properties of a S_SELF_EFFECT.
         * @memberof GamePto
         * @interface IS_SELF_EFFECT
         * @property {number|null} [cmd] S_SELF_EFFECT cmd
         * @property {number|null} [scmd] S_SELF_EFFECT scmd
         * @property {number|null} [x] S_SELF_EFFECT x
         * @property {number|null} [y] S_SELF_EFFECT y
         * @property {GamePto.ICard|null} [card] S_SELF_EFFECT card
         * @property {Array.<GamePto.IAffectedCard>|null} [affectedList] S_SELF_EFFECT affectedList
         */

        /**
         * Constructs a new S_SELF_EFFECT.
         * @memberof GamePto
         * @classdesc Represents a S_SELF_EFFECT.
         * @implements IS_SELF_EFFECT
         * @constructor
         * @param {GamePto.IS_SELF_EFFECT=} [properties] Properties to set
         */
        function S_SELF_EFFECT(properties) {
            this.affectedList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_SELF_EFFECT cmd.
         * @member {number} cmd
         * @memberof GamePto.S_SELF_EFFECT
         * @instance
         */
        S_SELF_EFFECT.prototype.cmd = 200;

        /**
         * S_SELF_EFFECT scmd.
         * @member {number} scmd
         * @memberof GamePto.S_SELF_EFFECT
         * @instance
         */
        S_SELF_EFFECT.prototype.scmd = 10019;

        /**
         * S_SELF_EFFECT x.
         * @member {number} x
         * @memberof GamePto.S_SELF_EFFECT
         * @instance
         */
        S_SELF_EFFECT.prototype.x = 0;

        /**
         * S_SELF_EFFECT y.
         * @member {number} y
         * @memberof GamePto.S_SELF_EFFECT
         * @instance
         */
        S_SELF_EFFECT.prototype.y = 0;

        /**
         * S_SELF_EFFECT card.
         * @member {GamePto.ICard|null|undefined} card
         * @memberof GamePto.S_SELF_EFFECT
         * @instance
         */
        S_SELF_EFFECT.prototype.card = null;

        /**
         * S_SELF_EFFECT affectedList.
         * @member {Array.<GamePto.IAffectedCard>} affectedList
         * @memberof GamePto.S_SELF_EFFECT
         * @instance
         */
        S_SELF_EFFECT.prototype.affectedList = $util.emptyArray;

        /**
         * Encodes the specified S_SELF_EFFECT message. Does not implicitly {@link GamePto.S_SELF_EFFECT.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_SELF_EFFECT
         * @static
         * @param {GamePto.IS_SELF_EFFECT} message S_SELF_EFFECT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_SELF_EFFECT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.y);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                $root.GamePto.Card.encode(message.card, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.affectedList != null && message.affectedList.length)
                for (var i = 0; i < message.affectedList.length; ++i)
                    $root.GamePto.AffectedCard.encode(message.affectedList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_SELF_EFFECT message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_SELF_EFFECT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_SELF_EFFECT} S_SELF_EFFECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_SELF_EFFECT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_SELF_EFFECT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.x = reader.int32();
                    break;
                case 4:
                    message.y = reader.int32();
                    break;
                case 5:
                    message.card = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                case 6:
                    if (!(message.affectedList && message.affectedList.length))
                        message.affectedList = [];
                    message.affectedList.push($root.GamePto.AffectedCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_SELF_EFFECT;
    })();

    GamePto.S_CARD_DENY = (function() {

        /**
         * Properties of a S_CARD_DENY.
         * @memberof GamePto
         * @interface IS_CARD_DENY
         * @property {number|null} [cmd] S_CARD_DENY cmd
         * @property {number|null} [scmd] S_CARD_DENY scmd
         * @property {GamePto.ICard|null} [from] S_CARD_DENY from
         * @property {GamePto.ICard|null} [target] S_CARD_DENY target
         * @property {number|null} [targetCardIndex] S_CARD_DENY targetCardIndex
         */

        /**
         * Constructs a new S_CARD_DENY.
         * @memberof GamePto
         * @classdesc Represents a S_CARD_DENY.
         * @implements IS_CARD_DENY
         * @constructor
         * @param {GamePto.IS_CARD_DENY=} [properties] Properties to set
         */
        function S_CARD_DENY(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_CARD_DENY cmd.
         * @member {number} cmd
         * @memberof GamePto.S_CARD_DENY
         * @instance
         */
        S_CARD_DENY.prototype.cmd = 200;

        /**
         * S_CARD_DENY scmd.
         * @member {number} scmd
         * @memberof GamePto.S_CARD_DENY
         * @instance
         */
        S_CARD_DENY.prototype.scmd = 10020;

        /**
         * S_CARD_DENY from.
         * @member {GamePto.ICard|null|undefined} from
         * @memberof GamePto.S_CARD_DENY
         * @instance
         */
        S_CARD_DENY.prototype.from = null;

        /**
         * S_CARD_DENY target.
         * @member {GamePto.ICard|null|undefined} target
         * @memberof GamePto.S_CARD_DENY
         * @instance
         */
        S_CARD_DENY.prototype.target = null;

        /**
         * S_CARD_DENY targetCardIndex.
         * @member {number} targetCardIndex
         * @memberof GamePto.S_CARD_DENY
         * @instance
         */
        S_CARD_DENY.prototype.targetCardIndex = 0;

        /**
         * Encodes the specified S_CARD_DENY message. Does not implicitly {@link GamePto.S_CARD_DENY.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_CARD_DENY
         * @static
         * @param {GamePto.IS_CARD_DENY} message S_CARD_DENY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_CARD_DENY.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                $root.GamePto.Card.encode(message.from, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.GamePto.Card.encode(message.target, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.targetCardIndex != null && Object.hasOwnProperty.call(message, "targetCardIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.targetCardIndex);
            return writer;
        };

        /**
         * Decodes a S_CARD_DENY message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_CARD_DENY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_CARD_DENY} S_CARD_DENY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_CARD_DENY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_CARD_DENY();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.from = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.target = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.targetCardIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_CARD_DENY;
    })();

    GamePto.S_GAME_OVER = (function() {

        /**
         * Properties of a S_GAME_OVER.
         * @memberof GamePto
         * @interface IS_GAME_OVER
         * @property {number|null} [cmd] S_GAME_OVER cmd
         * @property {number|null} [scmd] S_GAME_OVER scmd
         * @property {number|null} [winnerUid] S_GAME_OVER winnerUid
         */

        /**
         * Constructs a new S_GAME_OVER.
         * @memberof GamePto
         * @classdesc Represents a S_GAME_OVER.
         * @implements IS_GAME_OVER
         * @constructor
         * @param {GamePto.IS_GAME_OVER=} [properties] Properties to set
         */
        function S_GAME_OVER(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_GAME_OVER cmd.
         * @member {number} cmd
         * @memberof GamePto.S_GAME_OVER
         * @instance
         */
        S_GAME_OVER.prototype.cmd = 200;

        /**
         * S_GAME_OVER scmd.
         * @member {number} scmd
         * @memberof GamePto.S_GAME_OVER
         * @instance
         */
        S_GAME_OVER.prototype.scmd = 10021;

        /**
         * S_GAME_OVER winnerUid.
         * @member {number} winnerUid
         * @memberof GamePto.S_GAME_OVER
         * @instance
         */
        S_GAME_OVER.prototype.winnerUid = 0;

        /**
         * Encodes the specified S_GAME_OVER message. Does not implicitly {@link GamePto.S_GAME_OVER.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_GAME_OVER
         * @static
         * @param {GamePto.IS_GAME_OVER} message S_GAME_OVER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_GAME_OVER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.winnerUid != null && Object.hasOwnProperty.call(message, "winnerUid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.winnerUid);
            return writer;
        };

        /**
         * Decodes a S_GAME_OVER message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_GAME_OVER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_GAME_OVER} S_GAME_OVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_GAME_OVER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_GAME_OVER();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.winnerUid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_GAME_OVER;
    })();

    GamePto.S_RECONNECT = (function() {

        /**
         * Properties of a S_RECONNECT.
         * @memberof GamePto
         * @interface IS_RECONNECT
         * @property {number|null} [cmd] S_RECONNECT cmd
         * @property {number|null} [scmd] S_RECONNECT scmd
         * @property {GamePto.IMapData|null} [mapData] S_RECONNECT mapData
         * @property {Array.<GamePto.ICard>|null} [selfCards] S_RECONNECT selfCards
         * @property {number|null} [targetHandCardNum] S_RECONNECT targetHandCardNum
         * @property {boolean|null} [isFirst] S_RECONNECT isFirst
         * @property {Array.<GamePto.ICard>|null} [deadPool] S_RECONNECT deadPool
         * @property {number|null} [targetDeadPoolNum] S_RECONNECT targetDeadPoolNum
         * @property {number|Long|null} [roundEndTime] S_RECONNECT roundEndTime
         * @property {boolean|null} [isSelfRound] S_RECONNECT isSelfRound
         * @property {Array.<GamePto.IUserDetail>|null} [users] S_RECONNECT users
         */

        /**
         * Constructs a new S_RECONNECT.
         * @memberof GamePto
         * @classdesc Represents a S_RECONNECT.
         * @implements IS_RECONNECT
         * @constructor
         * @param {GamePto.IS_RECONNECT=} [properties] Properties to set
         */
        function S_RECONNECT(properties) {
            this.selfCards = [];
            this.deadPool = [];
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_RECONNECT cmd.
         * @member {number} cmd
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.cmd = 200;

        /**
         * S_RECONNECT scmd.
         * @member {number} scmd
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.scmd = 10022;

        /**
         * S_RECONNECT mapData.
         * @member {GamePto.IMapData|null|undefined} mapData
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.mapData = null;

        /**
         * S_RECONNECT selfCards.
         * @member {Array.<GamePto.ICard>} selfCards
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.selfCards = $util.emptyArray;

        /**
         * S_RECONNECT targetHandCardNum.
         * @member {number} targetHandCardNum
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.targetHandCardNum = 0;

        /**
         * S_RECONNECT isFirst.
         * @member {boolean} isFirst
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.isFirst = false;

        /**
         * S_RECONNECT deadPool.
         * @member {Array.<GamePto.ICard>} deadPool
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.deadPool = $util.emptyArray;

        /**
         * S_RECONNECT targetDeadPoolNum.
         * @member {number} targetDeadPoolNum
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.targetDeadPoolNum = 0;

        /**
         * S_RECONNECT roundEndTime.
         * @member {number|Long} roundEndTime
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.roundEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * S_RECONNECT isSelfRound.
         * @member {boolean} isSelfRound
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.isSelfRound = false;

        /**
         * S_RECONNECT users.
         * @member {Array.<GamePto.IUserDetail>} users
         * @memberof GamePto.S_RECONNECT
         * @instance
         */
        S_RECONNECT.prototype.users = $util.emptyArray;

        /**
         * Encodes the specified S_RECONNECT message. Does not implicitly {@link GamePto.S_RECONNECT.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_RECONNECT
         * @static
         * @param {GamePto.IS_RECONNECT} message S_RECONNECT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_RECONNECT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.mapData != null && Object.hasOwnProperty.call(message, "mapData"))
                $root.GamePto.MapData.encode(message.mapData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.selfCards != null && message.selfCards.length)
                for (var i = 0; i < message.selfCards.length; ++i)
                    $root.GamePto.Card.encode(message.selfCards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.targetHandCardNum != null && Object.hasOwnProperty.call(message, "targetHandCardNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.targetHandCardNum);
            if (message.isFirst != null && Object.hasOwnProperty.call(message, "isFirst"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isFirst);
            if (message.deadPool != null && message.deadPool.length)
                for (var i = 0; i < message.deadPool.length; ++i)
                    $root.GamePto.Card.encode(message.deadPool[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.targetDeadPoolNum != null && Object.hasOwnProperty.call(message, "targetDeadPoolNum"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.targetDeadPoolNum);
            if (message.roundEndTime != null && Object.hasOwnProperty.call(message, "roundEndTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.roundEndTime);
            if (message.isSelfRound != null && Object.hasOwnProperty.call(message, "isSelfRound"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isSelfRound);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.GamePto.UserDetail.encode(message.users[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_RECONNECT message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_RECONNECT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_RECONNECT} S_RECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_RECONNECT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_RECONNECT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.mapData = $root.GamePto.MapData.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.selfCards && message.selfCards.length))
                        message.selfCards = [];
                    message.selfCards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.targetHandCardNum = reader.int32();
                    break;
                case 6:
                    message.isFirst = reader.bool();
                    break;
                case 7:
                    if (!(message.deadPool && message.deadPool.length))
                        message.deadPool = [];
                    message.deadPool.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.targetDeadPoolNum = reader.int32();
                    break;
                case 9:
                    message.roundEndTime = reader.int64();
                    break;
                case 10:
                    message.isSelfRound = reader.bool();
                    break;
                case 11:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.GamePto.UserDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_RECONNECT;
    })();

    GamePto.S_HANDCARDS_UPDATE = (function() {

        /**
         * Properties of a S_HANDCARDS_UPDATE.
         * @memberof GamePto
         * @interface IS_HANDCARDS_UPDATE
         * @property {number|null} [cmd] S_HANDCARDS_UPDATE cmd
         * @property {number|null} [scmd] S_HANDCARDS_UPDATE scmd
         * @property {number|null} [uid] S_HANDCARDS_UPDATE uid
         * @property {Array.<GamePto.ICard>|null} [cards] S_HANDCARDS_UPDATE cards
         */

        /**
         * Constructs a new S_HANDCARDS_UPDATE.
         * @memberof GamePto
         * @classdesc Represents a S_HANDCARDS_UPDATE.
         * @implements IS_HANDCARDS_UPDATE
         * @constructor
         * @param {GamePto.IS_HANDCARDS_UPDATE=} [properties] Properties to set
         */
        function S_HANDCARDS_UPDATE(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_HANDCARDS_UPDATE cmd.
         * @member {number} cmd
         * @memberof GamePto.S_HANDCARDS_UPDATE
         * @instance
         */
        S_HANDCARDS_UPDATE.prototype.cmd = 200;

        /**
         * S_HANDCARDS_UPDATE scmd.
         * @member {number} scmd
         * @memberof GamePto.S_HANDCARDS_UPDATE
         * @instance
         */
        S_HANDCARDS_UPDATE.prototype.scmd = 10023;

        /**
         * S_HANDCARDS_UPDATE uid.
         * @member {number} uid
         * @memberof GamePto.S_HANDCARDS_UPDATE
         * @instance
         */
        S_HANDCARDS_UPDATE.prototype.uid = 0;

        /**
         * S_HANDCARDS_UPDATE cards.
         * @member {Array.<GamePto.ICard>} cards
         * @memberof GamePto.S_HANDCARDS_UPDATE
         * @instance
         */
        S_HANDCARDS_UPDATE.prototype.cards = $util.emptyArray;

        /**
         * Encodes the specified S_HANDCARDS_UPDATE message. Does not implicitly {@link GamePto.S_HANDCARDS_UPDATE.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_HANDCARDS_UPDATE
         * @static
         * @param {GamePto.IS_HANDCARDS_UPDATE} message S_HANDCARDS_UPDATE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_HANDCARDS_UPDATE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.uid);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.GamePto.Card.encode(message.cards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_HANDCARDS_UPDATE message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_HANDCARDS_UPDATE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_HANDCARDS_UPDATE} S_HANDCARDS_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_HANDCARDS_UPDATE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_HANDCARDS_UPDATE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.uid = reader.int32();
                    break;
                case 4:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.GamePto.Card.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_HANDCARDS_UPDATE;
    })();

    GamePto.S_ACTION_RECORD = (function() {

        /**
         * Properties of a S_ACTION_RECORD.
         * @memberof GamePto
         * @interface IS_ACTION_RECORD
         * @property {number|null} [cmd] S_ACTION_RECORD cmd
         * @property {number|null} [scmd] S_ACTION_RECORD scmd
         * @property {GamePto.RecordType|null} [recordType] S_ACTION_RECORD recordType
         * @property {GamePto.ICard|null} [source] S_ACTION_RECORD source
         * @property {Array.<GamePto.IAffectedCard>|null} [affectedList] S_ACTION_RECORD affectedList
         */

        /**
         * Constructs a new S_ACTION_RECORD.
         * @memberof GamePto
         * @classdesc Represents a S_ACTION_RECORD.
         * @implements IS_ACTION_RECORD
         * @constructor
         * @param {GamePto.IS_ACTION_RECORD=} [properties] Properties to set
         */
        function S_ACTION_RECORD(properties) {
            this.affectedList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ACTION_RECORD cmd.
         * @member {number} cmd
         * @memberof GamePto.S_ACTION_RECORD
         * @instance
         */
        S_ACTION_RECORD.prototype.cmd = 200;

        /**
         * S_ACTION_RECORD scmd.
         * @member {number} scmd
         * @memberof GamePto.S_ACTION_RECORD
         * @instance
         */
        S_ACTION_RECORD.prototype.scmd = 10024;

        /**
         * S_ACTION_RECORD recordType.
         * @member {GamePto.RecordType} recordType
         * @memberof GamePto.S_ACTION_RECORD
         * @instance
         */
        S_ACTION_RECORD.prototype.recordType = 0;

        /**
         * S_ACTION_RECORD source.
         * @member {GamePto.ICard|null|undefined} source
         * @memberof GamePto.S_ACTION_RECORD
         * @instance
         */
        S_ACTION_RECORD.prototype.source = null;

        /**
         * S_ACTION_RECORD affectedList.
         * @member {Array.<GamePto.IAffectedCard>} affectedList
         * @memberof GamePto.S_ACTION_RECORD
         * @instance
         */
        S_ACTION_RECORD.prototype.affectedList = $util.emptyArray;

        /**
         * Encodes the specified S_ACTION_RECORD message. Does not implicitly {@link GamePto.S_ACTION_RECORD.verify|verify} messages.
         * @function encode
         * @memberof GamePto.S_ACTION_RECORD
         * @static
         * @param {GamePto.IS_ACTION_RECORD} message S_ACTION_RECORD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ACTION_RECORD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.recordType != null && Object.hasOwnProperty.call(message, "recordType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.recordType);
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                $root.GamePto.Card.encode(message.source, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.affectedList != null && message.affectedList.length)
                for (var i = 0; i < message.affectedList.length; ++i)
                    $root.GamePto.AffectedCard.encode(message.affectedList[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_ACTION_RECORD message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto.S_ACTION_RECORD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto.S_ACTION_RECORD} S_ACTION_RECORD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ACTION_RECORD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto.S_ACTION_RECORD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.recordType = reader.int32();
                    break;
                case 4:
                    message.source = $root.GamePto.Card.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.affectedList && message.affectedList.length))
                        message.affectedList = [];
                    message.affectedList.push($root.GamePto.AffectedCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_ACTION_RECORD;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.account = reader.string();
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
         * @property {boolean|null} [needReconnect] S_LOGIN needReconnect
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
         * S_LOGIN needReconnect.
         * @member {boolean} needReconnect
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.needReconnect = false;

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
            if (message.needReconnect != null && Object.hasOwnProperty.call(message, "needReconnect"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.needReconnect);
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.isSuccess = reader.bool();
                    break;
                case 4:
                    message.nick = reader.string();
                    break;
                case 5:
                    message.headIndex = reader.int32();
                    break;
                case 6:
                    message.uid = reader.int32();
                    break;
                case 7:
                    if (!(message.friendList && message.friendList.length))
                        message.friendList = [];
                    message.friendList.push($root.FriendPto.Friend.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.reqAddList && message.reqAddList.length))
                        message.reqAddList = [];
                    message.reqAddList.push($root.FriendPto.Friend.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.needReconnect = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.account = reader.string();
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                case 5:
                    message.nick = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
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
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.msg = reader.string();
                    break;
                case 4:
                    message.hoverTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_TIPS;
    })();

    return SystemPto;
})();