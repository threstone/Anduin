var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ChatPto = (function() {

    /**
     * Namespace ChatPto.
     * @exports ChatPto
     * @namespace
     */
    var ChatPto = {};

    ChatPto.C_ = (function() {

        /**
         * Properties of a C_.
         * @memberof ChatPto
         * @interface IC_
         * @property {number|null} [cmd] C_ cmd
         * @property {number|null} [scmd] C_ scmd
         */

        /**
         * Constructs a new C_.
         * @memberof ChatPto
         * @classdesc Represents a C_.
         * @implements IC_
         * @constructor
         * @param {ChatPto.IC_=} [properties] Properties to set
         */
        function C_(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_ cmd.
         * @member {number} cmd
         * @memberof ChatPto.C_
         * @instance
         */
        C_.prototype.cmd = 4;

        /**
         * C_ scmd.
         * @member {number} scmd
         * @memberof ChatPto.C_
         * @instance
         */
        C_.prototype.scmd = 1;

        /**
         * Encodes the specified C_ message. Does not implicitly {@link ChatPto.C_.verify|verify} messages.
         * @function encode
         * @memberof ChatPto.C_
         * @static
         * @param {ChatPto.IC_} message C_ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_ message from the specified reader or buffer.
         * @function decode
         * @memberof ChatPto.C_
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatPto.C_} C_
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatPto.C_();
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
         * Gets the default type url for C_
         * @function getTypeUrl
         * @memberof ChatPto.C_
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatPto.C_";
        };

        return C_;
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

    FriendPto.C_FRIEND_INFO = (function() {

        /**
         * Properties of a C_FRIEND_INFO.
         * @memberof FriendPto
         * @interface IC_FRIEND_INFO
         * @property {number|null} [cmd] C_FRIEND_INFO cmd
         * @property {number|null} [scmd] C_FRIEND_INFO scmd
         */

        /**
         * Constructs a new C_FRIEND_INFO.
         * @memberof FriendPto
         * @classdesc Represents a C_FRIEND_INFO.
         * @implements IC_FRIEND_INFO
         * @constructor
         * @param {FriendPto.IC_FRIEND_INFO=} [properties] Properties to set
         */
        function C_FRIEND_INFO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_FRIEND_INFO cmd.
         * @member {number} cmd
         * @memberof FriendPto.C_FRIEND_INFO
         * @instance
         */
        C_FRIEND_INFO.prototype.cmd = 3;

        /**
         * C_FRIEND_INFO scmd.
         * @member {number} scmd
         * @memberof FriendPto.C_FRIEND_INFO
         * @instance
         */
        C_FRIEND_INFO.prototype.scmd = 1;

        /**
         * Encodes the specified C_FRIEND_INFO message. Does not implicitly {@link FriendPto.C_FRIEND_INFO.verify|verify} messages.
         * @function encode
         * @memberof FriendPto.C_FRIEND_INFO
         * @static
         * @param {FriendPto.IC_FRIEND_INFO} message C_FRIEND_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_FRIEND_INFO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_FRIEND_INFO message from the specified reader or buffer.
         * @function decode
         * @memberof FriendPto.C_FRIEND_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendPto.C_FRIEND_INFO} C_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_FRIEND_INFO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendPto.C_FRIEND_INFO();
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
         * Gets the default type url for C_FRIEND_INFO
         * @function getTypeUrl
         * @memberof FriendPto.C_FRIEND_INFO
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        C_FRIEND_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.C_FRIEND_INFO";
        };

        return C_FRIEND_INFO;
    })();

    FriendPto.S_FRIEND_INFO = (function() {

        /**
         * Properties of a S_FRIEND_INFO.
         * @memberof FriendPto
         * @interface IS_FRIEND_INFO
         * @property {number|null} [cmd] S_FRIEND_INFO cmd
         * @property {number|null} [scmd] S_FRIEND_INFO scmd
         * @property {Array.<FriendPto.IFriend>|null} [list] S_FRIEND_INFO list
         */

        /**
         * Constructs a new S_FRIEND_INFO.
         * @memberof FriendPto
         * @classdesc Represents a S_FRIEND_INFO.
         * @implements IS_FRIEND_INFO
         * @constructor
         * @param {FriendPto.IS_FRIEND_INFO=} [properties] Properties to set
         */
        function S_FRIEND_INFO(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_FRIEND_INFO cmd.
         * @member {number} cmd
         * @memberof FriendPto.S_FRIEND_INFO
         * @instance
         */
        S_FRIEND_INFO.prototype.cmd = 3;

        /**
         * S_FRIEND_INFO scmd.
         * @member {number} scmd
         * @memberof FriendPto.S_FRIEND_INFO
         * @instance
         */
        S_FRIEND_INFO.prototype.scmd = 2;

        /**
         * S_FRIEND_INFO list.
         * @member {Array.<FriendPto.IFriend>} list
         * @memberof FriendPto.S_FRIEND_INFO
         * @instance
         */
        S_FRIEND_INFO.prototype.list = $util.emptyArray;

        /**
         * Encodes the specified S_FRIEND_INFO message. Does not implicitly {@link FriendPto.S_FRIEND_INFO.verify|verify} messages.
         * @function encode
         * @memberof FriendPto.S_FRIEND_INFO
         * @static
         * @param {FriendPto.IS_FRIEND_INFO} message S_FRIEND_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_FRIEND_INFO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.FriendPto.Friend.encode(message.list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_FRIEND_INFO message from the specified reader or buffer.
         * @function decode
         * @memberof FriendPto.S_FRIEND_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendPto.S_FRIEND_INFO} S_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_FRIEND_INFO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendPto.S_FRIEND_INFO();
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
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.FriendPto.Friend.decode(reader, reader.uint32()));
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
         * Gets the default type url for S_FRIEND_INFO
         * @function getTypeUrl
         * @memberof FriendPto.S_FRIEND_INFO
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_FRIEND_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.S_FRIEND_INFO";
        };

        return S_FRIEND_INFO;
    })();

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
        C_ADD_FRIEND.prototype.scmd = 3;

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

    FriendPto.S_ADD_FRIEND_RESULT = (function() {

        /**
         * Properties of a S_ADD_FRIEND_RESULT.
         * @memberof FriendPto
         * @interface IS_ADD_FRIEND_RESULT
         * @property {number|null} [cmd] S_ADD_FRIEND_RESULT cmd
         * @property {number|null} [scmd] S_ADD_FRIEND_RESULT scmd
         * @property {boolean|null} [isSuccess] S_ADD_FRIEND_RESULT isSuccess
         * @property {FriendPto.IFriend|null} [friend] S_ADD_FRIEND_RESULT friend
         */

        /**
         * Constructs a new S_ADD_FRIEND_RESULT.
         * @memberof FriendPto
         * @classdesc Represents a S_ADD_FRIEND_RESULT.
         * @implements IS_ADD_FRIEND_RESULT
         * @constructor
         * @param {FriendPto.IS_ADD_FRIEND_RESULT=} [properties] Properties to set
         */
        function S_ADD_FRIEND_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ADD_FRIEND_RESULT cmd.
         * @member {number} cmd
         * @memberof FriendPto.S_ADD_FRIEND_RESULT
         * @instance
         */
        S_ADD_FRIEND_RESULT.prototype.cmd = 3;

        /**
         * S_ADD_FRIEND_RESULT scmd.
         * @member {number} scmd
         * @memberof FriendPto.S_ADD_FRIEND_RESULT
         * @instance
         */
        S_ADD_FRIEND_RESULT.prototype.scmd = 4;

        /**
         * S_ADD_FRIEND_RESULT isSuccess.
         * @member {boolean} isSuccess
         * @memberof FriendPto.S_ADD_FRIEND_RESULT
         * @instance
         */
        S_ADD_FRIEND_RESULT.prototype.isSuccess = false;

        /**
         * S_ADD_FRIEND_RESULT friend.
         * @member {FriendPto.IFriend|null|undefined} friend
         * @memberof FriendPto.S_ADD_FRIEND_RESULT
         * @instance
         */
        S_ADD_FRIEND_RESULT.prototype.friend = null;

        /**
         * Encodes the specified S_ADD_FRIEND_RESULT message. Does not implicitly {@link FriendPto.S_ADD_FRIEND_RESULT.verify|verify} messages.
         * @function encode
         * @memberof FriendPto.S_ADD_FRIEND_RESULT
         * @static
         * @param {FriendPto.IS_ADD_FRIEND_RESULT} message S_ADD_FRIEND_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ADD_FRIEND_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isSuccess != null && Object.hasOwnProperty.call(message, "isSuccess"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isSuccess);
            if (message.friend != null && Object.hasOwnProperty.call(message, "friend"))
                $root.FriendPto.Friend.encode(message.friend, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_ADD_FRIEND_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof FriendPto.S_ADD_FRIEND_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FriendPto.S_ADD_FRIEND_RESULT} S_ADD_FRIEND_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ADD_FRIEND_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FriendPto.S_ADD_FRIEND_RESULT();
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
         * Gets the default type url for S_ADD_FRIEND_RESULT
         * @function getTypeUrl
         * @memberof FriendPto.S_ADD_FRIEND_RESULT
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S_ADD_FRIEND_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.S_ADD_FRIEND_RESULT";
        };

        return S_ADD_FRIEND_RESULT;
    })();

    FriendPto.S_ADD_FRIEND = (function() {

        /**
         * Properties of a S_ADD_FRIEND.
         * @memberof FriendPto
         * @interface IS_ADD_FRIEND
         * @property {number|null} [cmd] S_ADD_FRIEND cmd
         * @property {number|null} [scmd] S_ADD_FRIEND scmd
         * @property {string|null} [nick] S_ADD_FRIEND nick
         * @property {number|null} [uid] S_ADD_FRIEND uid
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
        S_ADD_FRIEND.prototype.scmd = 4;

        /**
         * S_ADD_FRIEND nick.
         * @member {string} nick
         * @memberof FriendPto.S_ADD_FRIEND
         * @instance
         */
        S_ADD_FRIEND.prototype.nick = "";

        /**
         * S_ADD_FRIEND uid.
         * @member {number} uid
         * @memberof FriendPto.S_ADD_FRIEND
         * @instance
         */
        S_ADD_FRIEND.prototype.uid = 0;

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
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nick);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.uid);
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
                        message.nick = reader.string();
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