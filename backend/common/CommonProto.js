/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LoginPto = (function() {

    var LoginPto = {};

    LoginPto.C_LOGIN = (function() {

        function C_LOGIN(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_LOGIN.prototype.cmd = 1;
        C_LOGIN.prototype.scmd = 1;
        C_LOGIN.prototype.account = "";
        C_LOGIN.prototype.password = "";

        C_LOGIN.create = function create(properties) {
            return new C_LOGIN(properties);
        };

        C_LOGIN.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(26).string(m.account);
            if (m.password != null && Object.hasOwnProperty.call(m, "password"))
                w.uint32(34).string(m.password);
            return w;
        };

        C_LOGIN.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPto.C_LOGIN();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.account = r.string();
                        break;
                    }
                case 4: {
                        m.password = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_LOGIN.fromObject = function fromObject(d) {
            if (d instanceof $root.LoginPto.C_LOGIN)
                return d;
            var m = new $root.LoginPto.C_LOGIN();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.account != null) {
                m.account = String(d.account);
            }
            if (d.password != null) {
                m.password = String(d.password);
            }
            return m;
        };

        C_LOGIN.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1;
                d.scmd = 1;
                d.account = "";
                d.password = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.account != null && m.hasOwnProperty("account")) {
                d.account = m.account;
            }
            if (m.password != null && m.hasOwnProperty("password")) {
                d.password = m.password;
            }
            return d;
        };

        C_LOGIN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_LOGIN.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LoginPto.C_LOGIN";
        };

        return C_LOGIN;
    })();

    LoginPto.S_LOGIN = (function() {

        function S_LOGIN(p) {
            this.friendList = [];
            this.reqAddList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_LOGIN.prototype.cmd = 1;
        S_LOGIN.prototype.scmd = 2;
        S_LOGIN.prototype.isSuccess = false;
        S_LOGIN.prototype.nick = "";
        S_LOGIN.prototype.headIndex = 0;
        S_LOGIN.prototype.uid = 0;
        S_LOGIN.prototype.friendList = $util.emptyArray;
        S_LOGIN.prototype.reqAddList = $util.emptyArray;

        S_LOGIN.create = function create(properties) {
            return new S_LOGIN(properties);
        };

        S_LOGIN.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
                w.uint32(24).bool(m.isSuccess);
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(34).string(m.nick);
            if (m.headIndex != null && Object.hasOwnProperty.call(m, "headIndex"))
                w.uint32(40).int32(m.headIndex);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(48).int32(m.uid);
            if (m.friendList != null && m.friendList.length) {
                for (var i = 0; i < m.friendList.length; ++i)
                    $root.FriendPto.Friend.encode(m.friendList[i], w.uint32(58).fork()).ldelim();
            }
            if (m.reqAddList != null && m.reqAddList.length) {
                for (var i = 0; i < m.reqAddList.length; ++i)
                    $root.FriendPto.Friend.encode(m.reqAddList[i], w.uint32(66).fork()).ldelim();
            }
            return w;
        };

        S_LOGIN.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPto.S_LOGIN();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.isSuccess = r.bool();
                        break;
                    }
                case 4: {
                        m.nick = r.string();
                        break;
                    }
                case 5: {
                        m.headIndex = r.int32();
                        break;
                    }
                case 6: {
                        m.uid = r.int32();
                        break;
                    }
                case 7: {
                        if (!(m.friendList && m.friendList.length))
                            m.friendList = [];
                        m.friendList.push($root.FriendPto.Friend.decode(r, r.uint32()));
                        break;
                    }
                case 8: {
                        if (!(m.reqAddList && m.reqAddList.length))
                            m.reqAddList = [];
                        m.reqAddList.push($root.FriendPto.Friend.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_LOGIN.fromObject = function fromObject(d) {
            if (d instanceof $root.LoginPto.S_LOGIN)
                return d;
            var m = new $root.LoginPto.S_LOGIN();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.isSuccess != null) {
                m.isSuccess = Boolean(d.isSuccess);
            }
            if (d.nick != null) {
                m.nick = String(d.nick);
            }
            if (d.headIndex != null) {
                m.headIndex = d.headIndex | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.friendList) {
                if (!Array.isArray(d.friendList))
                    throw TypeError(".LoginPto.S_LOGIN.friendList: array expected");
                m.friendList = [];
                for (var i = 0; i < d.friendList.length; ++i) {
                    if (typeof d.friendList[i] !== "object")
                        throw TypeError(".LoginPto.S_LOGIN.friendList: object expected");
                    m.friendList[i] = $root.FriendPto.Friend.fromObject(d.friendList[i]);
                }
            }
            if (d.reqAddList) {
                if (!Array.isArray(d.reqAddList))
                    throw TypeError(".LoginPto.S_LOGIN.reqAddList: array expected");
                m.reqAddList = [];
                for (var i = 0; i < d.reqAddList.length; ++i) {
                    if (typeof d.reqAddList[i] !== "object")
                        throw TypeError(".LoginPto.S_LOGIN.reqAddList: object expected");
                    m.reqAddList[i] = $root.FriendPto.Friend.fromObject(d.reqAddList[i]);
                }
            }
            return m;
        };

        S_LOGIN.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.friendList = [];
                d.reqAddList = [];
            }
            if (o.defaults) {
                d.cmd = 1;
                d.scmd = 2;
                d.isSuccess = false;
                d.nick = "";
                d.headIndex = 0;
                d.uid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
                d.isSuccess = m.isSuccess;
            }
            if (m.nick != null && m.hasOwnProperty("nick")) {
                d.nick = m.nick;
            }
            if (m.headIndex != null && m.hasOwnProperty("headIndex")) {
                d.headIndex = m.headIndex;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            if (m.friendList && m.friendList.length) {
                d.friendList = [];
                for (var j = 0; j < m.friendList.length; ++j) {
                    d.friendList[j] = $root.FriendPto.Friend.toObject(m.friendList[j], o);
                }
            }
            if (m.reqAddList && m.reqAddList.length) {
                d.reqAddList = [];
                for (var j = 0; j < m.reqAddList.length; ++j) {
                    d.reqAddList[j] = $root.FriendPto.Friend.toObject(m.reqAddList[j], o);
                }
            }
            return d;
        };

        S_LOGIN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_LOGIN.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LoginPto.S_LOGIN";
        };

        return S_LOGIN;
    })();

    LoginPto.C_REGISTER = (function() {

        function C_REGISTER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_REGISTER.prototype.cmd = 1;
        C_REGISTER.prototype.scmd = 3;
        C_REGISTER.prototype.account = "";
        C_REGISTER.prototype.password = "";
        C_REGISTER.prototype.nick = "";

        C_REGISTER.create = function create(properties) {
            return new C_REGISTER(properties);
        };

        C_REGISTER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(26).string(m.account);
            if (m.password != null && Object.hasOwnProperty.call(m, "password"))
                w.uint32(34).string(m.password);
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(42).string(m.nick);
            return w;
        };

        C_REGISTER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPto.C_REGISTER();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.account = r.string();
                        break;
                    }
                case 4: {
                        m.password = r.string();
                        break;
                    }
                case 5: {
                        m.nick = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_REGISTER.fromObject = function fromObject(d) {
            if (d instanceof $root.LoginPto.C_REGISTER)
                return d;
            var m = new $root.LoginPto.C_REGISTER();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.account != null) {
                m.account = String(d.account);
            }
            if (d.password != null) {
                m.password = String(d.password);
            }
            if (d.nick != null) {
                m.nick = String(d.nick);
            }
            return m;
        };

        C_REGISTER.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1;
                d.scmd = 3;
                d.account = "";
                d.password = "";
                d.nick = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.account != null && m.hasOwnProperty("account")) {
                d.account = m.account;
            }
            if (m.password != null && m.hasOwnProperty("password")) {
                d.password = m.password;
            }
            if (m.nick != null && m.hasOwnProperty("nick")) {
                d.nick = m.nick;
            }
            return d;
        };

        C_REGISTER.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_REGISTER.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LoginPto.C_REGISTER";
        };

        return C_REGISTER;
    })();

    LoginPto.S_REGISTER = (function() {

        function S_REGISTER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_REGISTER.prototype.cmd = 1;
        S_REGISTER.prototype.scmd = 4;
        S_REGISTER.prototype.code = 0;

        S_REGISTER.create = function create(properties) {
            return new S_REGISTER(properties);
        };

        S_REGISTER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(24).int32(m.code);
            return w;
        };

        S_REGISTER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPto.S_REGISTER();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.code = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_REGISTER.fromObject = function fromObject(d) {
            if (d instanceof $root.LoginPto.S_REGISTER)
                return d;
            var m = new $root.LoginPto.S_REGISTER();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.code != null) {
                m.code = d.code | 0;
            }
            return m;
        };

        S_REGISTER.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1;
                d.scmd = 4;
                d.code = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.code != null && m.hasOwnProperty("code")) {
                d.code = m.code;
            }
            return d;
        };

        S_REGISTER.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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

$root.FriendPto = (function() {

    var FriendPto = {};

    FriendPto.C_ADD_FRIEND = (function() {

        function C_ADD_FRIEND(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_ADD_FRIEND.prototype.cmd = 3;
        C_ADD_FRIEND.prototype.scmd = 1;
        C_ADD_FRIEND.prototype.uid = 0;

        C_ADD_FRIEND.create = function create(properties) {
            return new C_ADD_FRIEND(properties);
        };

        C_ADD_FRIEND.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(24).int32(m.uid);
            return w;
        };

        C_ADD_FRIEND.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_ADD_FRIEND();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.uid = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_ADD_FRIEND.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendPto.C_ADD_FRIEND)
                return d;
            var m = new $root.FriendPto.C_ADD_FRIEND();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            return m;
        };

        C_ADD_FRIEND.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 3;
                d.scmd = 1;
                d.uid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            return d;
        };

        C_ADD_FRIEND.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_ADD_FRIEND.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.C_ADD_FRIEND";
        };

        return C_ADD_FRIEND;
    })();

    FriendPto.S_ADD_FRIEND_REQ = (function() {

        function S_ADD_FRIEND_REQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ADD_FRIEND_REQ.prototype.cmd = 3;
        S_ADD_FRIEND_REQ.prototype.scmd = 2;
        S_ADD_FRIEND_REQ.prototype.code = 0;

        S_ADD_FRIEND_REQ.create = function create(properties) {
            return new S_ADD_FRIEND_REQ(properties);
        };

        S_ADD_FRIEND_REQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(24).int32(m.code);
            return w;
        };

        S_ADD_FRIEND_REQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_ADD_FRIEND_REQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.code = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_ADD_FRIEND_REQ.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendPto.S_ADD_FRIEND_REQ)
                return d;
            var m = new $root.FriendPto.S_ADD_FRIEND_REQ();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.code != null) {
                m.code = d.code | 0;
            }
            return m;
        };

        S_ADD_FRIEND_REQ.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 3;
                d.scmd = 2;
                d.code = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.code != null && m.hasOwnProperty("code")) {
                d.code = m.code;
            }
            return d;
        };

        S_ADD_FRIEND_REQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_ADD_FRIEND_REQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.S_ADD_FRIEND_REQ";
        };

        return S_ADD_FRIEND_REQ;
    })();

    FriendPto.C_ADD_FRIEND_REQ_RESULT = (function() {

        function C_ADD_FRIEND_REQ_RESULT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_ADD_FRIEND_REQ_RESULT.prototype.cmd = 3;
        C_ADD_FRIEND_REQ_RESULT.prototype.scmd = 3;
        C_ADD_FRIEND_REQ_RESULT.prototype.isApprove = false;
        C_ADD_FRIEND_REQ_RESULT.prototype.uid = 0;

        C_ADD_FRIEND_REQ_RESULT.create = function create(properties) {
            return new C_ADD_FRIEND_REQ_RESULT(properties);
        };

        C_ADD_FRIEND_REQ_RESULT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.isApprove != null && Object.hasOwnProperty.call(m, "isApprove"))
                w.uint32(24).bool(m.isApprove);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(32).int32(m.uid);
            return w;
        };

        C_ADD_FRIEND_REQ_RESULT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_ADD_FRIEND_REQ_RESULT();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.isApprove = r.bool();
                        break;
                    }
                case 4: {
                        m.uid = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_ADD_FRIEND_REQ_RESULT.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendPto.C_ADD_FRIEND_REQ_RESULT)
                return d;
            var m = new $root.FriendPto.C_ADD_FRIEND_REQ_RESULT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.isApprove != null) {
                m.isApprove = Boolean(d.isApprove);
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            return m;
        };

        C_ADD_FRIEND_REQ_RESULT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 3;
                d.scmd = 3;
                d.isApprove = false;
                d.uid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.isApprove != null && m.hasOwnProperty("isApprove")) {
                d.isApprove = m.isApprove;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            return d;
        };

        C_ADD_FRIEND_REQ_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_ADD_FRIEND_REQ_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.C_ADD_FRIEND_REQ_RESULT";
        };

        return C_ADD_FRIEND_REQ_RESULT;
    })();

    FriendPto.S_FRIEND_CHANGE = (function() {

        function S_FRIEND_CHANGE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_FRIEND_CHANGE.prototype.cmd = 3;
        S_FRIEND_CHANGE.prototype.scmd = 4;
        S_FRIEND_CHANGE.prototype.uid = 0;
        S_FRIEND_CHANGE.prototype.isOnline = false;
        S_FRIEND_CHANGE.prototype.friend = null;

        S_FRIEND_CHANGE.create = function create(properties) {
            return new S_FRIEND_CHANGE(properties);
        };

        S_FRIEND_CHANGE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(24).int32(m.uid);
            if (m.isOnline != null && Object.hasOwnProperty.call(m, "isOnline"))
                w.uint32(32).bool(m.isOnline);
            if (m.friend != null && Object.hasOwnProperty.call(m, "friend"))
                $root.FriendPto.Friend.encode(m.friend, w.uint32(42).fork()).ldelim();
            return w;
        };

        S_FRIEND_CHANGE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_FRIEND_CHANGE();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.uid = r.int32();
                        break;
                    }
                case 4: {
                        m.isOnline = r.bool();
                        break;
                    }
                case 5: {
                        m.friend = $root.FriendPto.Friend.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_FRIEND_CHANGE.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendPto.S_FRIEND_CHANGE)
                return d;
            var m = new $root.FriendPto.S_FRIEND_CHANGE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.isOnline != null) {
                m.isOnline = Boolean(d.isOnline);
            }
            if (d.friend != null) {
                if (typeof d.friend !== "object")
                    throw TypeError(".FriendPto.S_FRIEND_CHANGE.friend: object expected");
                m.friend = $root.FriendPto.Friend.fromObject(d.friend);
            }
            return m;
        };

        S_FRIEND_CHANGE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 3;
                d.scmd = 4;
                d.uid = 0;
                d.isOnline = false;
                d.friend = null;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            if (m.isOnline != null && m.hasOwnProperty("isOnline")) {
                d.isOnline = m.isOnline;
            }
            if (m.friend != null && m.hasOwnProperty("friend")) {
                d.friend = $root.FriendPto.Friend.toObject(m.friend, o);
            }
            return d;
        };

        S_FRIEND_CHANGE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_FRIEND_CHANGE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.S_FRIEND_CHANGE";
        };

        return S_FRIEND_CHANGE;
    })();

    FriendPto.S_ADD_FRIEND = (function() {

        function S_ADD_FRIEND(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ADD_FRIEND.prototype.cmd = 3;
        S_ADD_FRIEND.prototype.scmd = 5;
        S_ADD_FRIEND.prototype.user = null;

        S_ADD_FRIEND.create = function create(properties) {
            return new S_ADD_FRIEND(properties);
        };

        S_ADD_FRIEND.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.user != null && Object.hasOwnProperty.call(m, "user"))
                $root.FriendPto.Friend.encode(m.user, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_ADD_FRIEND.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_ADD_FRIEND();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.user = $root.FriendPto.Friend.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_ADD_FRIEND.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendPto.S_ADD_FRIEND)
                return d;
            var m = new $root.FriendPto.S_ADD_FRIEND();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.user != null) {
                if (typeof d.user !== "object")
                    throw TypeError(".FriendPto.S_ADD_FRIEND.user: object expected");
                m.user = $root.FriendPto.Friend.fromObject(d.user);
            }
            return m;
        };

        S_ADD_FRIEND.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 3;
                d.scmd = 5;
                d.user = null;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.user != null && m.hasOwnProperty("user")) {
                d.user = $root.FriendPto.Friend.toObject(m.user, o);
            }
            return d;
        };

        S_ADD_FRIEND.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_ADD_FRIEND.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.S_ADD_FRIEND";
        };

        return S_ADD_FRIEND;
    })();

    FriendPto.Friend = (function() {

        function Friend(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Friend.prototype.uid = 0;
        Friend.prototype.nick = "";
        Friend.prototype.isOnline = false;

        Friend.create = function create(properties) {
            return new Friend(properties);
        };

        Friend.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(18).string(m.nick);
            if (m.isOnline != null && Object.hasOwnProperty.call(m, "isOnline"))
                w.uint32(24).bool(m.isOnline);
            return w;
        };

        Friend.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.Friend();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.int32();
                        break;
                    }
                case 2: {
                        m.nick = r.string();
                        break;
                    }
                case 3: {
                        m.isOnline = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        Friend.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendPto.Friend)
                return d;
            var m = new $root.FriendPto.Friend();
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.nick != null) {
                m.nick = String(d.nick);
            }
            if (d.isOnline != null) {
                m.isOnline = Boolean(d.isOnline);
            }
            return m;
        };

        Friend.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.uid = 0;
                d.nick = "";
                d.isOnline = false;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            if (m.nick != null && m.hasOwnProperty("nick")) {
                d.nick = m.nick;
            }
            if (m.isOnline != null && m.hasOwnProperty("isOnline")) {
                d.isOnline = m.isOnline;
            }
            return d;
        };

        Friend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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

$root.ChatPto = (function() {

    var ChatPto = {};

    ChatPto.MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "normal"] = 0;
        values[valuesById[1] = "private"] = 1;
        return values;
    })();

    ChatPto.C_SEND_MESSAGE = (function() {

        function C_SEND_MESSAGE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_SEND_MESSAGE.prototype.cmd = 100;
        C_SEND_MESSAGE.prototype.scmd = 1;
        C_SEND_MESSAGE.prototype.uid = 0;
        C_SEND_MESSAGE.prototype.msg = "";
        C_SEND_MESSAGE.prototype.msgType = 0;

        C_SEND_MESSAGE.create = function create(properties) {
            return new C_SEND_MESSAGE(properties);
        };

        C_SEND_MESSAGE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(24).int32(m.uid);
            if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
                w.uint32(34).string(m.msg);
            if (m.msgType != null && Object.hasOwnProperty.call(m, "msgType"))
                w.uint32(40).int32(m.msgType);
            return w;
        };

        C_SEND_MESSAGE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ChatPto.C_SEND_MESSAGE();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.uid = r.int32();
                        break;
                    }
                case 4: {
                        m.msg = r.string();
                        break;
                    }
                case 5: {
                        m.msgType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_SEND_MESSAGE.fromObject = function fromObject(d) {
            if (d instanceof $root.ChatPto.C_SEND_MESSAGE)
                return d;
            var m = new $root.ChatPto.C_SEND_MESSAGE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.msg != null) {
                m.msg = String(d.msg);
            }
            switch (d.msgType) {
            default:
                if (typeof d.msgType === "number") {
                    m.msgType = d.msgType;
                    break;
                }
                break;
            case "normal":
            case 0:
                m.msgType = 0;
                break;
            case "private":
            case 1:
                m.msgType = 1;
                break;
            }
            return m;
        };

        C_SEND_MESSAGE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 100;
                d.scmd = 1;
                d.uid = 0;
                d.msg = "";
                d.msgType = o.enums === String ? "normal" : 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            if (m.msg != null && m.hasOwnProperty("msg")) {
                d.msg = m.msg;
            }
            if (m.msgType != null && m.hasOwnProperty("msgType")) {
                d.msgType = o.enums === String ? $root.ChatPto.MsgType[m.msgType] === undefined ? m.msgType : $root.ChatPto.MsgType[m.msgType] : m.msgType;
            }
            return d;
        };

        C_SEND_MESSAGE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_SEND_MESSAGE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatPto.C_SEND_MESSAGE";
        };

        return C_SEND_MESSAGE;
    })();

    ChatPto.S_CHAT_MESSAGE = (function() {

        function S_CHAT_MESSAGE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_CHAT_MESSAGE.prototype.cmd = 100;
        S_CHAT_MESSAGE.prototype.scmd = 2;
        S_CHAT_MESSAGE.prototype.msg = "";
        S_CHAT_MESSAGE.prototype.nick = "";
        S_CHAT_MESSAGE.prototype.uid = 0;
        S_CHAT_MESSAGE.prototype.msgType = 0;

        S_CHAT_MESSAGE.create = function create(properties) {
            return new S_CHAT_MESSAGE(properties);
        };

        S_CHAT_MESSAGE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
                w.uint32(26).string(m.msg);
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(34).string(m.nick);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(40).int32(m.uid);
            if (m.msgType != null && Object.hasOwnProperty.call(m, "msgType"))
                w.uint32(48).int32(m.msgType);
            return w;
        };

        S_CHAT_MESSAGE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ChatPto.S_CHAT_MESSAGE();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.msg = r.string();
                        break;
                    }
                case 4: {
                        m.nick = r.string();
                        break;
                    }
                case 5: {
                        m.uid = r.int32();
                        break;
                    }
                case 6: {
                        m.msgType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_CHAT_MESSAGE.fromObject = function fromObject(d) {
            if (d instanceof $root.ChatPto.S_CHAT_MESSAGE)
                return d;
            var m = new $root.ChatPto.S_CHAT_MESSAGE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.msg != null) {
                m.msg = String(d.msg);
            }
            if (d.nick != null) {
                m.nick = String(d.nick);
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            switch (d.msgType) {
            default:
                if (typeof d.msgType === "number") {
                    m.msgType = d.msgType;
                    break;
                }
                break;
            case "normal":
            case 0:
                m.msgType = 0;
                break;
            case "private":
            case 1:
                m.msgType = 1;
                break;
            }
            return m;
        };

        S_CHAT_MESSAGE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 100;
                d.scmd = 2;
                d.msg = "";
                d.nick = "";
                d.uid = 0;
                d.msgType = o.enums === String ? "normal" : 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.msg != null && m.hasOwnProperty("msg")) {
                d.msg = m.msg;
            }
            if (m.nick != null && m.hasOwnProperty("nick")) {
                d.nick = m.nick;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            if (m.msgType != null && m.hasOwnProperty("msgType")) {
                d.msgType = o.enums === String ? $root.ChatPto.MsgType[m.msgType] === undefined ? m.msgType : $root.ChatPto.MsgType[m.msgType] : m.msgType;
            }
            return d;
        };

        S_CHAT_MESSAGE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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

$root.HallPto = (function() {

    var HallPto = {};

    HallPto.C_REQ_FRIENDLY_MATCH = (function() {

        function C_REQ_FRIENDLY_MATCH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_REQ_FRIENDLY_MATCH.prototype.cmd = 2;
        C_REQ_FRIENDLY_MATCH.prototype.scmd = 1;
        C_REQ_FRIENDLY_MATCH.prototype.targetUid = 0;

        C_REQ_FRIENDLY_MATCH.create = function create(properties) {
            return new C_REQ_FRIENDLY_MATCH(properties);
        };

        C_REQ_FRIENDLY_MATCH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.targetUid != null && Object.hasOwnProperty.call(m, "targetUid"))
                w.uint32(24).int32(m.targetUid);
            return w;
        };

        C_REQ_FRIENDLY_MATCH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.C_REQ_FRIENDLY_MATCH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.targetUid = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_REQ_FRIENDLY_MATCH.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.C_REQ_FRIENDLY_MATCH)
                return d;
            var m = new $root.HallPto.C_REQ_FRIENDLY_MATCH();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.targetUid != null) {
                m.targetUid = d.targetUid | 0;
            }
            return m;
        };

        C_REQ_FRIENDLY_MATCH.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 1;
                d.targetUid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.targetUid != null && m.hasOwnProperty("targetUid")) {
                d.targetUid = m.targetUid;
            }
            return d;
        };

        C_REQ_FRIENDLY_MATCH.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_REQ_FRIENDLY_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/HallPto.C_REQ_FRIENDLY_MATCH";
        };

        return C_REQ_FRIENDLY_MATCH;
    })();

    HallPto.S_REQ_FRIENDLY_MATCH = (function() {

        function S_REQ_FRIENDLY_MATCH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_REQ_FRIENDLY_MATCH.prototype.cmd = 2;
        S_REQ_FRIENDLY_MATCH.prototype.scmd = 2;
        S_REQ_FRIENDLY_MATCH.prototype.code = 0;
        S_REQ_FRIENDLY_MATCH.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        S_REQ_FRIENDLY_MATCH.create = function create(properties) {
            return new S_REQ_FRIENDLY_MATCH(properties);
        };

        S_REQ_FRIENDLY_MATCH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(24).int32(m.code);
            if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                w.uint32(32).int64(m.endTime);
            return w;
        };

        S_REQ_FRIENDLY_MATCH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.S_REQ_FRIENDLY_MATCH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.code = r.int32();
                        break;
                    }
                case 4: {
                        m.endTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_REQ_FRIENDLY_MATCH.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.S_REQ_FRIENDLY_MATCH)
                return d;
            var m = new $root.HallPto.S_REQ_FRIENDLY_MATCH();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.code != null) {
                m.code = d.code | 0;
            }
            if (d.endTime != null) {
                if ($util.Long)
                    (m.endTime = $util.Long.fromValue(d.endTime)).unsigned = false;
                else if (typeof d.endTime === "string")
                    m.endTime = parseInt(d.endTime, 10);
                else if (typeof d.endTime === "number")
                    m.endTime = d.endTime;
                else if (typeof d.endTime === "object")
                    m.endTime = new $util.LongBits(d.endTime.low >>> 0, d.endTime.high >>> 0).toNumber();
            }
            return m;
        };

        S_REQ_FRIENDLY_MATCH.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 2;
                d.code = 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.endTime = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.endTime = o.longs === String ? "0" : 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.code != null && m.hasOwnProperty("code")) {
                d.code = m.code;
            }
            if (m.endTime != null && m.hasOwnProperty("endTime")) {
                if (typeof m.endTime === "number")
                    d.endTime = o.longs === String ? String(m.endTime) : m.endTime;
                else
                    d.endTime = o.longs === String ? $util.Long.prototype.toString.call(m.endTime) : o.longs === Number ? new $util.LongBits(m.endTime.low >>> 0, m.endTime.high >>> 0).toNumber() : m.endTime;
            }
            return d;
        };

        S_REQ_FRIENDLY_MATCH.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_REQ_FRIENDLY_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/HallPto.S_REQ_FRIENDLY_MATCH";
        };

        return S_REQ_FRIENDLY_MATCH;
    })();

    HallPto.C_CANCEL_REQ_FRIENDLY_MATCH = (function() {

        function C_CANCEL_REQ_FRIENDLY_MATCH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_CANCEL_REQ_FRIENDLY_MATCH.prototype.cmd = 2;
        C_CANCEL_REQ_FRIENDLY_MATCH.prototype.scmd = 3;
        C_CANCEL_REQ_FRIENDLY_MATCH.prototype.targetUid = 0;

        C_CANCEL_REQ_FRIENDLY_MATCH.create = function create(properties) {
            return new C_CANCEL_REQ_FRIENDLY_MATCH(properties);
        };

        C_CANCEL_REQ_FRIENDLY_MATCH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.targetUid != null && Object.hasOwnProperty.call(m, "targetUid"))
                w.uint32(24).int32(m.targetUid);
            return w;
        };

        C_CANCEL_REQ_FRIENDLY_MATCH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.C_CANCEL_REQ_FRIENDLY_MATCH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.targetUid = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_CANCEL_REQ_FRIENDLY_MATCH.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.C_CANCEL_REQ_FRIENDLY_MATCH)
                return d;
            var m = new $root.HallPto.C_CANCEL_REQ_FRIENDLY_MATCH();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.targetUid != null) {
                m.targetUid = d.targetUid | 0;
            }
            return m;
        };

        C_CANCEL_REQ_FRIENDLY_MATCH.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 3;
                d.targetUid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.targetUid != null && m.hasOwnProperty("targetUid")) {
                d.targetUid = m.targetUid;
            }
            return d;
        };

        C_CANCEL_REQ_FRIENDLY_MATCH.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_CANCEL_REQ_FRIENDLY_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/HallPto.C_CANCEL_REQ_FRIENDLY_MATCH";
        };

        return C_CANCEL_REQ_FRIENDLY_MATCH;
    })();

    HallPto.S_REQ_FRIENDLY_MATCH_RESULT = (function() {

        function S_REQ_FRIENDLY_MATCH_RESULT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_REQ_FRIENDLY_MATCH_RESULT.prototype.cmd = 2;
        S_REQ_FRIENDLY_MATCH_RESULT.prototype.scmd = 4;
        S_REQ_FRIENDLY_MATCH_RESULT.prototype.targetUid = 0;
        S_REQ_FRIENDLY_MATCH_RESULT.prototype.result = false;
        S_REQ_FRIENDLY_MATCH_RESULT.prototype.token = 0;

        S_REQ_FRIENDLY_MATCH_RESULT.create = function create(properties) {
            return new S_REQ_FRIENDLY_MATCH_RESULT(properties);
        };

        S_REQ_FRIENDLY_MATCH_RESULT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.targetUid != null && Object.hasOwnProperty.call(m, "targetUid"))
                w.uint32(24).int32(m.targetUid);
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                w.uint32(32).bool(m.result);
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(40).int32(m.token);
            return w;
        };

        S_REQ_FRIENDLY_MATCH_RESULT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.S_REQ_FRIENDLY_MATCH_RESULT();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.targetUid = r.int32();
                        break;
                    }
                case 4: {
                        m.result = r.bool();
                        break;
                    }
                case 5: {
                        m.token = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_REQ_FRIENDLY_MATCH_RESULT.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.S_REQ_FRIENDLY_MATCH_RESULT)
                return d;
            var m = new $root.HallPto.S_REQ_FRIENDLY_MATCH_RESULT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.targetUid != null) {
                m.targetUid = d.targetUid | 0;
            }
            if (d.result != null) {
                m.result = Boolean(d.result);
            }
            if (d.token != null) {
                m.token = d.token | 0;
            }
            return m;
        };

        S_REQ_FRIENDLY_MATCH_RESULT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 4;
                d.targetUid = 0;
                d.result = false;
                d.token = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.targetUid != null && m.hasOwnProperty("targetUid")) {
                d.targetUid = m.targetUid;
            }
            if (m.result != null && m.hasOwnProperty("result")) {
                d.result = m.result;
            }
            if (m.token != null && m.hasOwnProperty("token")) {
                d.token = m.token;
            }
            return d;
        };

        S_REQ_FRIENDLY_MATCH_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_REQ_FRIENDLY_MATCH_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/HallPto.S_REQ_FRIENDLY_MATCH_RESULT";
        };

        return S_REQ_FRIENDLY_MATCH_RESULT;
    })();

    HallPto.S_FRIENDLY_MATCH = (function() {

        function S_FRIENDLY_MATCH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_FRIENDLY_MATCH.prototype.cmd = 2;
        S_FRIENDLY_MATCH.prototype.scmd = 5;
        S_FRIENDLY_MATCH.prototype.friendUid = 0;
        S_FRIENDLY_MATCH.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        S_FRIENDLY_MATCH.create = function create(properties) {
            return new S_FRIENDLY_MATCH(properties);
        };

        S_FRIENDLY_MATCH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.friendUid != null && Object.hasOwnProperty.call(m, "friendUid"))
                w.uint32(24).int32(m.friendUid);
            if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                w.uint32(32).int64(m.endTime);
            return w;
        };

        S_FRIENDLY_MATCH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.S_FRIENDLY_MATCH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.friendUid = r.int32();
                        break;
                    }
                case 4: {
                        m.endTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_FRIENDLY_MATCH.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.S_FRIENDLY_MATCH)
                return d;
            var m = new $root.HallPto.S_FRIENDLY_MATCH();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.friendUid != null) {
                m.friendUid = d.friendUid | 0;
            }
            if (d.endTime != null) {
                if ($util.Long)
                    (m.endTime = $util.Long.fromValue(d.endTime)).unsigned = false;
                else if (typeof d.endTime === "string")
                    m.endTime = parseInt(d.endTime, 10);
                else if (typeof d.endTime === "number")
                    m.endTime = d.endTime;
                else if (typeof d.endTime === "object")
                    m.endTime = new $util.LongBits(d.endTime.low >>> 0, d.endTime.high >>> 0).toNumber();
            }
            return m;
        };

        S_FRIENDLY_MATCH.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 5;
                d.friendUid = 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.endTime = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.endTime = o.longs === String ? "0" : 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.friendUid != null && m.hasOwnProperty("friendUid")) {
                d.friendUid = m.friendUid;
            }
            if (m.endTime != null && m.hasOwnProperty("endTime")) {
                if (typeof m.endTime === "number")
                    d.endTime = o.longs === String ? String(m.endTime) : m.endTime;
                else
                    d.endTime = o.longs === String ? $util.Long.prototype.toString.call(m.endTime) : o.longs === Number ? new $util.LongBits(m.endTime.low >>> 0, m.endTime.high >>> 0).toNumber() : m.endTime;
            }
            return d;
        };

        S_FRIENDLY_MATCH.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_FRIENDLY_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/HallPto.S_FRIENDLY_MATCH";
        };

        return S_FRIENDLY_MATCH;
    })();

    HallPto.C_REQ_FRIENDLY_MATCH_RESULT = (function() {

        function C_REQ_FRIENDLY_MATCH_RESULT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_REQ_FRIENDLY_MATCH_RESULT.prototype.cmd = 2;
        C_REQ_FRIENDLY_MATCH_RESULT.prototype.scmd = 6;
        C_REQ_FRIENDLY_MATCH_RESULT.prototype.targetUid = 0;
        C_REQ_FRIENDLY_MATCH_RESULT.prototype.result = false;

        C_REQ_FRIENDLY_MATCH_RESULT.create = function create(properties) {
            return new C_REQ_FRIENDLY_MATCH_RESULT(properties);
        };

        C_REQ_FRIENDLY_MATCH_RESULT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.targetUid != null && Object.hasOwnProperty.call(m, "targetUid"))
                w.uint32(24).int32(m.targetUid);
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                w.uint32(32).bool(m.result);
            return w;
        };

        C_REQ_FRIENDLY_MATCH_RESULT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.C_REQ_FRIENDLY_MATCH_RESULT();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.targetUid = r.int32();
                        break;
                    }
                case 4: {
                        m.result = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_REQ_FRIENDLY_MATCH_RESULT.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.C_REQ_FRIENDLY_MATCH_RESULT)
                return d;
            var m = new $root.HallPto.C_REQ_FRIENDLY_MATCH_RESULT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.targetUid != null) {
                m.targetUid = d.targetUid | 0;
            }
            if (d.result != null) {
                m.result = Boolean(d.result);
            }
            return m;
        };

        C_REQ_FRIENDLY_MATCH_RESULT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 6;
                d.targetUid = 0;
                d.result = false;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.targetUid != null && m.hasOwnProperty("targetUid")) {
                d.targetUid = m.targetUid;
            }
            if (m.result != null && m.hasOwnProperty("result")) {
                d.result = m.result;
            }
            return d;
        };

        C_REQ_FRIENDLY_MATCH_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_REQ_FRIENDLY_MATCH_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/HallPto.C_REQ_FRIENDLY_MATCH_RESULT";
        };

        return C_REQ_FRIENDLY_MATCH_RESULT;
    })();

    return HallPto;
})();

$root.SystemPto = (function() {

    var SystemPto = {};

    SystemPto.S_TIPS = (function() {

        function S_TIPS(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_TIPS.prototype.cmd = 0;
        S_TIPS.prototype.scmd = 1;
        S_TIPS.prototype.msg = "";
        S_TIPS.prototype.hoverTime = 0;

        S_TIPS.create = function create(properties) {
            return new S_TIPS(properties);
        };

        S_TIPS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
                w.uint32(26).string(m.msg);
            if (m.hoverTime != null && Object.hasOwnProperty.call(m, "hoverTime"))
                w.uint32(32).int32(m.hoverTime);
            return w;
        };

        S_TIPS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.SystemPto.S_TIPS();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.msg = r.string();
                        break;
                    }
                case 4: {
                        m.hoverTime = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_TIPS.fromObject = function fromObject(d) {
            if (d instanceof $root.SystemPto.S_TIPS)
                return d;
            var m = new $root.SystemPto.S_TIPS();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.msg != null) {
                m.msg = String(d.msg);
            }
            if (d.hoverTime != null) {
                m.hoverTime = d.hoverTime | 0;
            }
            return m;
        };

        S_TIPS.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 0;
                d.scmd = 1;
                d.msg = "";
                d.hoverTime = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.msg != null && m.hasOwnProperty("msg")) {
                d.msg = m.msg;
            }
            if (m.hoverTime != null && m.hasOwnProperty("hoverTime")) {
                d.hoverTime = m.hoverTime;
            }
            return d;
        };

        S_TIPS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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

$root.CardsPto = (function() {

    var CardsPto = {};

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

    CardsPto.QualityType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Normal"] = 0;
        values[valuesById[1] = "Rare"] = 1;
        values[valuesById[2] = "Precious"] = 2;
        values[valuesById[3] = "Premium"] = 3;
        return values;
    })();

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

        function Card(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Card.prototype.id = 0;
        Card.prototype.count = 0;

        Card.create = function create(properties) {
            return new Card(properties);
        };

        Card.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(0).int32(m.id);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(8).int32(m.count);
            return w;
        };

        Card.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.Card();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 0: {
                        m.id = r.int32();
                        break;
                    }
                case 1: {
                        m.count = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        Card.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.Card)
                return d;
            var m = new $root.CardsPto.Card();
            if (d.id != null) {
                m.id = d.id | 0;
            }
            if (d.count != null) {
                m.count = d.count | 0;
            }
            return m;
        };

        Card.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.id = 0;
                d.count = 0;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = m.id;
            }
            if (m.count != null && m.hasOwnProperty("count")) {
                d.count = m.count;
            }
            return d;
        };

        Card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Card.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.Card";
        };

        return Card;
    })();

    CardsPto.CardGroup = (function() {

        function CardGroup(p) {
            this.cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CardGroup.prototype.groupId = 0;
        CardGroup.prototype.cards = $util.emptyArray;
        CardGroup.prototype.groupName = "";
        CardGroup.prototype.powerId = 0;
        CardGroup.prototype.accessToUse = false;

        CardGroup.create = function create(properties) {
            return new CardGroup(properties);
        };

        CardGroup.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.groupId != null && Object.hasOwnProperty.call(m, "groupId"))
                w.uint32(0).int32(m.groupId);
            if (m.cards != null && m.cards.length) {
                for (var i = 0; i < m.cards.length; ++i)
                    $root.CardsPto.Card.encode(m.cards[i], w.uint32(10).fork()).ldelim();
            }
            if (m.groupName != null && Object.hasOwnProperty.call(m, "groupName"))
                w.uint32(18).string(m.groupName);
            if (m.powerId != null && Object.hasOwnProperty.call(m, "powerId"))
                w.uint32(24).int32(m.powerId);
            if (m.accessToUse != null && Object.hasOwnProperty.call(m, "accessToUse"))
                w.uint32(32).bool(m.accessToUse);
            return w;
        };

        CardGroup.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.CardGroup();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 0: {
                        m.groupId = r.int32();
                        break;
                    }
                case 1: {
                        if (!(m.cards && m.cards.length))
                            m.cards = [];
                        m.cards.push($root.CardsPto.Card.decode(r, r.uint32()));
                        break;
                    }
                case 2: {
                        m.groupName = r.string();
                        break;
                    }
                case 3: {
                        m.powerId = r.int32();
                        break;
                    }
                case 4: {
                        m.accessToUse = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        CardGroup.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.CardGroup)
                return d;
            var m = new $root.CardsPto.CardGroup();
            if (d.groupId != null) {
                m.groupId = d.groupId | 0;
            }
            if (d.cards) {
                if (!Array.isArray(d.cards))
                    throw TypeError(".CardsPto.CardGroup.cards: array expected");
                m.cards = [];
                for (var i = 0; i < d.cards.length; ++i) {
                    if (typeof d.cards[i] !== "object")
                        throw TypeError(".CardsPto.CardGroup.cards: object expected");
                    m.cards[i] = $root.CardsPto.Card.fromObject(d.cards[i]);
                }
            }
            if (d.groupName != null) {
                m.groupName = String(d.groupName);
            }
            switch (d.powerId) {
            default:
                if (typeof d.powerId === "number") {
                    m.powerId = d.powerId;
                    break;
                }
                break;
            case "Common":
            case 0:
                m.powerId = 0;
                break;
            case "ShengTang":
            case 1:
                m.powerId = 1;
                break;
            case "WangLing":
            case 2:
                m.powerId = 2;
                break;
            case "YouMu":
            case 3:
                m.powerId = 3;
                break;
            case "ZiRan":
            case 4:
                m.powerId = 4;
                break;
            case "BiLei":
            case 5:
                m.powerId = 5;
                break;
            case "XueYuan":
            case 6:
                m.powerId = 6;
                break;
            }
            if (d.accessToUse != null) {
                m.accessToUse = Boolean(d.accessToUse);
            }
            return m;
        };

        CardGroup.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.cards = [];
            }
            if (o.defaults) {
                d.groupId = 0;
                d.groupName = "";
                d.powerId = o.enums === String ? "Common" : 0;
                d.accessToUse = false;
            }
            if (m.groupId != null && m.hasOwnProperty("groupId")) {
                d.groupId = m.groupId;
            }
            if (m.cards && m.cards.length) {
                d.cards = [];
                for (var j = 0; j < m.cards.length; ++j) {
                    d.cards[j] = $root.CardsPto.Card.toObject(m.cards[j], o);
                }
            }
            if (m.groupName != null && m.hasOwnProperty("groupName")) {
                d.groupName = m.groupName;
            }
            if (m.powerId != null && m.hasOwnProperty("powerId")) {
                d.powerId = o.enums === String ? $root.CardsPto.PowerType[m.powerId] === undefined ? m.powerId : $root.CardsPto.PowerType[m.powerId] : m.powerId;
            }
            if (m.accessToUse != null && m.hasOwnProperty("accessToUse")) {
                d.accessToUse = m.accessToUse;
            }
            return d;
        };

        CardGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CardGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.CardGroup";
        };

        return CardGroup;
    })();

    CardsPto.C_REQ_CARDS_INFO = (function() {

        function C_REQ_CARDS_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_REQ_CARDS_INFO.prototype.cmd = 4;
        C_REQ_CARDS_INFO.prototype.scmd = 1;

        C_REQ_CARDS_INFO.create = function create(properties) {
            return new C_REQ_CARDS_INFO(properties);
        };

        C_REQ_CARDS_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_REQ_CARDS_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.C_REQ_CARDS_INFO();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_REQ_CARDS_INFO.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.C_REQ_CARDS_INFO)
                return d;
            var m = new $root.CardsPto.C_REQ_CARDS_INFO();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        C_REQ_CARDS_INFO.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 1;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            return d;
        };

        C_REQ_CARDS_INFO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_REQ_CARDS_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_REQ_CARDS_INFO";
        };

        return C_REQ_CARDS_INFO;
    })();

    CardsPto.S_CARDS_INFO = (function() {

        function S_CARDS_INFO(p) {
            this.cardInfos = [];
            this.cardGroups = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_CARDS_INFO.prototype.cmd = 4;
        S_CARDS_INFO.prototype.scmd = 2;
        S_CARDS_INFO.prototype.cardInfos = $util.emptyArray;
        S_CARDS_INFO.prototype.cardGroups = $util.emptyArray;

        S_CARDS_INFO.create = function create(properties) {
            return new S_CARDS_INFO(properties);
        };

        S_CARDS_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardInfos != null && m.cardInfos.length) {
                for (var i = 0; i < m.cardInfos.length; ++i)
                    $root.CardsPto.Card.encode(m.cardInfos[i], w.uint32(26).fork()).ldelim();
            }
            if (m.cardGroups != null && m.cardGroups.length) {
                for (var i = 0; i < m.cardGroups.length; ++i)
                    $root.CardsPto.CardGroup.encode(m.cardGroups[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        S_CARDS_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.S_CARDS_INFO();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.cardInfos && m.cardInfos.length))
                            m.cardInfos = [];
                        m.cardInfos.push($root.CardsPto.Card.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
                        if (!(m.cardGroups && m.cardGroups.length))
                            m.cardGroups = [];
                        m.cardGroups.push($root.CardsPto.CardGroup.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_CARDS_INFO.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.S_CARDS_INFO)
                return d;
            var m = new $root.CardsPto.S_CARDS_INFO();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardInfos) {
                if (!Array.isArray(d.cardInfos))
                    throw TypeError(".CardsPto.S_CARDS_INFO.cardInfos: array expected");
                m.cardInfos = [];
                for (var i = 0; i < d.cardInfos.length; ++i) {
                    if (typeof d.cardInfos[i] !== "object")
                        throw TypeError(".CardsPto.S_CARDS_INFO.cardInfos: object expected");
                    m.cardInfos[i] = $root.CardsPto.Card.fromObject(d.cardInfos[i]);
                }
            }
            if (d.cardGroups) {
                if (!Array.isArray(d.cardGroups))
                    throw TypeError(".CardsPto.S_CARDS_INFO.cardGroups: array expected");
                m.cardGroups = [];
                for (var i = 0; i < d.cardGroups.length; ++i) {
                    if (typeof d.cardGroups[i] !== "object")
                        throw TypeError(".CardsPto.S_CARDS_INFO.cardGroups: object expected");
                    m.cardGroups[i] = $root.CardsPto.CardGroup.fromObject(d.cardGroups[i]);
                }
            }
            return m;
        };

        S_CARDS_INFO.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.cardInfos = [];
                d.cardGroups = [];
            }
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 2;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardInfos && m.cardInfos.length) {
                d.cardInfos = [];
                for (var j = 0; j < m.cardInfos.length; ++j) {
                    d.cardInfos[j] = $root.CardsPto.Card.toObject(m.cardInfos[j], o);
                }
            }
            if (m.cardGroups && m.cardGroups.length) {
                d.cardGroups = [];
                for (var j = 0; j < m.cardGroups.length; ++j) {
                    d.cardGroups[j] = $root.CardsPto.CardGroup.toObject(m.cardGroups[j], o);
                }
            }
            return d;
        };

        S_CARDS_INFO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_CARDS_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.S_CARDS_INFO";
        };

        return S_CARDS_INFO;
    })();

    CardsPto.C_MAKE_CARD = (function() {

        function C_MAKE_CARD(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_MAKE_CARD.prototype.cmd = 4;
        C_MAKE_CARD.prototype.scmd = 3;
        C_MAKE_CARD.prototype.cardId = 0;

        C_MAKE_CARD.create = function create(properties) {
            return new C_MAKE_CARD(properties);
        };

        C_MAKE_CARD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardId != null && Object.hasOwnProperty.call(m, "cardId"))
                w.uint32(24).int32(m.cardId);
            return w;
        };

        C_MAKE_CARD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.C_MAKE_CARD();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.cardId = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_MAKE_CARD.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.C_MAKE_CARD)
                return d;
            var m = new $root.CardsPto.C_MAKE_CARD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardId != null) {
                m.cardId = d.cardId | 0;
            }
            return m;
        };

        C_MAKE_CARD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 3;
                d.cardId = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardId != null && m.hasOwnProperty("cardId")) {
                d.cardId = m.cardId;
            }
            return d;
        };

        C_MAKE_CARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_MAKE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_MAKE_CARD";
        };

        return C_MAKE_CARD;
    })();

    CardsPto.S_MAKE_CARD = (function() {

        function S_MAKE_CARD(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_MAKE_CARD.prototype.cmd = 4;
        S_MAKE_CARD.prototype.scmd = 4;
        S_MAKE_CARD.prototype.cardId = 0;
        S_MAKE_CARD.prototype.code = 0;

        S_MAKE_CARD.create = function create(properties) {
            return new S_MAKE_CARD(properties);
        };

        S_MAKE_CARD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardId != null && Object.hasOwnProperty.call(m, "cardId"))
                w.uint32(24).int32(m.cardId);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(32).int32(m.code);
            return w;
        };

        S_MAKE_CARD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.S_MAKE_CARD();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.cardId = r.int32();
                        break;
                    }
                case 4: {
                        m.code = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_MAKE_CARD.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.S_MAKE_CARD)
                return d;
            var m = new $root.CardsPto.S_MAKE_CARD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardId != null) {
                m.cardId = d.cardId | 0;
            }
            if (d.code != null) {
                m.code = d.code | 0;
            }
            return m;
        };

        S_MAKE_CARD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 4;
                d.cardId = 0;
                d.code = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardId != null && m.hasOwnProperty("cardId")) {
                d.cardId = m.cardId;
            }
            if (m.code != null && m.hasOwnProperty("code")) {
                d.code = m.code;
            }
            return d;
        };

        S_MAKE_CARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_MAKE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.S_MAKE_CARD";
        };

        return S_MAKE_CARD;
    })();

    CardsPto.C_DISASSEMBLE_CARD = (function() {

        function C_DISASSEMBLE_CARD(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_DISASSEMBLE_CARD.prototype.cmd = 4;
        C_DISASSEMBLE_CARD.prototype.scmd = 5;
        C_DISASSEMBLE_CARD.prototype.cardId = 0;

        C_DISASSEMBLE_CARD.create = function create(properties) {
            return new C_DISASSEMBLE_CARD(properties);
        };

        C_DISASSEMBLE_CARD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardId != null && Object.hasOwnProperty.call(m, "cardId"))
                w.uint32(24).int32(m.cardId);
            return w;
        };

        C_DISASSEMBLE_CARD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.C_DISASSEMBLE_CARD();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.cardId = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_DISASSEMBLE_CARD.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.C_DISASSEMBLE_CARD)
                return d;
            var m = new $root.CardsPto.C_DISASSEMBLE_CARD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardId != null) {
                m.cardId = d.cardId | 0;
            }
            return m;
        };

        C_DISASSEMBLE_CARD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 5;
                d.cardId = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardId != null && m.hasOwnProperty("cardId")) {
                d.cardId = m.cardId;
            }
            return d;
        };

        C_DISASSEMBLE_CARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_DISASSEMBLE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_DISASSEMBLE_CARD";
        };

        return C_DISASSEMBLE_CARD;
    })();

    CardsPto.S_DISASSEMBLE_CARD = (function() {

        function S_DISASSEMBLE_CARD(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_DISASSEMBLE_CARD.prototype.cmd = 4;
        S_DISASSEMBLE_CARD.prototype.scmd = 6;
        S_DISASSEMBLE_CARD.prototype.cardId = 0;
        S_DISASSEMBLE_CARD.prototype.code = 0;

        S_DISASSEMBLE_CARD.create = function create(properties) {
            return new S_DISASSEMBLE_CARD(properties);
        };

        S_DISASSEMBLE_CARD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardId != null && Object.hasOwnProperty.call(m, "cardId"))
                w.uint32(24).int32(m.cardId);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(32).int32(m.code);
            return w;
        };

        S_DISASSEMBLE_CARD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.S_DISASSEMBLE_CARD();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.cardId = r.int32();
                        break;
                    }
                case 4: {
                        m.code = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_DISASSEMBLE_CARD.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.S_DISASSEMBLE_CARD)
                return d;
            var m = new $root.CardsPto.S_DISASSEMBLE_CARD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardId != null) {
                m.cardId = d.cardId | 0;
            }
            if (d.code != null) {
                m.code = d.code | 0;
            }
            return m;
        };

        S_DISASSEMBLE_CARD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 6;
                d.cardId = 0;
                d.code = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardId != null && m.hasOwnProperty("cardId")) {
                d.cardId = m.cardId;
            }
            if (m.code != null && m.hasOwnProperty("code")) {
                d.code = m.code;
            }
            return d;
        };

        S_DISASSEMBLE_CARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_DISASSEMBLE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.S_DISASSEMBLE_CARD";
        };

        return S_DISASSEMBLE_CARD;
    })();

    CardsPto.C_SAVE_CARDS = (function() {

        function C_SAVE_CARDS(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_SAVE_CARDS.prototype.cmd = 4;
        C_SAVE_CARDS.prototype.scmd = 7;
        C_SAVE_CARDS.prototype.cardGroup = null;

        C_SAVE_CARDS.create = function create(properties) {
            return new C_SAVE_CARDS(properties);
        };

        C_SAVE_CARDS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardGroup != null && Object.hasOwnProperty.call(m, "cardGroup"))
                $root.CardsPto.CardGroup.encode(m.cardGroup, w.uint32(26).fork()).ldelim();
            return w;
        };

        C_SAVE_CARDS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.C_SAVE_CARDS();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.cardGroup = $root.CardsPto.CardGroup.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_SAVE_CARDS.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.C_SAVE_CARDS)
                return d;
            var m = new $root.CardsPto.C_SAVE_CARDS();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardGroup != null) {
                if (typeof d.cardGroup !== "object")
                    throw TypeError(".CardsPto.C_SAVE_CARDS.cardGroup: object expected");
                m.cardGroup = $root.CardsPto.CardGroup.fromObject(d.cardGroup);
            }
            return m;
        };

        C_SAVE_CARDS.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 7;
                d.cardGroup = null;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardGroup != null && m.hasOwnProperty("cardGroup")) {
                d.cardGroup = $root.CardsPto.CardGroup.toObject(m.cardGroup, o);
            }
            return d;
        };

        C_SAVE_CARDS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_SAVE_CARDS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_SAVE_CARDS";
        };

        return C_SAVE_CARDS;
    })();

    CardsPto.S_SAVE_CARDS = (function() {

        function S_SAVE_CARDS(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_SAVE_CARDS.prototype.cmd = 4;
        S_SAVE_CARDS.prototype.scmd = 8;
        S_SAVE_CARDS.prototype.cardGroup = null;

        S_SAVE_CARDS.create = function create(properties) {
            return new S_SAVE_CARDS(properties);
        };

        S_SAVE_CARDS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardGroup != null && Object.hasOwnProperty.call(m, "cardGroup"))
                $root.CardsPto.CardGroup.encode(m.cardGroup, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_SAVE_CARDS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.S_SAVE_CARDS();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.cardGroup = $root.CardsPto.CardGroup.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_SAVE_CARDS.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.S_SAVE_CARDS)
                return d;
            var m = new $root.CardsPto.S_SAVE_CARDS();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardGroup != null) {
                if (typeof d.cardGroup !== "object")
                    throw TypeError(".CardsPto.S_SAVE_CARDS.cardGroup: object expected");
                m.cardGroup = $root.CardsPto.CardGroup.fromObject(d.cardGroup);
            }
            return m;
        };

        S_SAVE_CARDS.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 8;
                d.cardGroup = null;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardGroup != null && m.hasOwnProperty("cardGroup")) {
                d.cardGroup = $root.CardsPto.CardGroup.toObject(m.cardGroup, o);
            }
            return d;
        };

        S_SAVE_CARDS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_SAVE_CARDS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.S_SAVE_CARDS";
        };

        return S_SAVE_CARDS;
    })();

    CardsPto.C_DELETE_CARD_GROUP = (function() {

        function C_DELETE_CARD_GROUP(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_DELETE_CARD_GROUP.prototype.cmd = 4;
        C_DELETE_CARD_GROUP.prototype.scmd = 9;
        C_DELETE_CARD_GROUP.prototype.groupId = 0;

        C_DELETE_CARD_GROUP.create = function create(properties) {
            return new C_DELETE_CARD_GROUP(properties);
        };

        C_DELETE_CARD_GROUP.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.groupId != null && Object.hasOwnProperty.call(m, "groupId"))
                w.uint32(24).int32(m.groupId);
            return w;
        };

        C_DELETE_CARD_GROUP.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.C_DELETE_CARD_GROUP();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.groupId = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_DELETE_CARD_GROUP.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.C_DELETE_CARD_GROUP)
                return d;
            var m = new $root.CardsPto.C_DELETE_CARD_GROUP();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.groupId != null) {
                m.groupId = d.groupId | 0;
            }
            return m;
        };

        C_DELETE_CARD_GROUP.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 9;
                d.groupId = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.groupId != null && m.hasOwnProperty("groupId")) {
                d.groupId = m.groupId;
            }
            return d;
        };

        C_DELETE_CARD_GROUP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_DELETE_CARD_GROUP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CardsPto.C_DELETE_CARD_GROUP";
        };

        return C_DELETE_CARD_GROUP;
    })();

    CardsPto.S_DELETE_CARD_GROUP = (function() {

        function S_DELETE_CARD_GROUP(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_DELETE_CARD_GROUP.prototype.cmd = 4;
        S_DELETE_CARD_GROUP.prototype.scmd = 10;
        S_DELETE_CARD_GROUP.prototype.groupId = 0;

        S_DELETE_CARD_GROUP.create = function create(properties) {
            return new S_DELETE_CARD_GROUP(properties);
        };

        S_DELETE_CARD_GROUP.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.groupId != null && Object.hasOwnProperty.call(m, "groupId"))
                w.uint32(24).int32(m.groupId);
            return w;
        };

        S_DELETE_CARD_GROUP.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CardsPto.S_DELETE_CARD_GROUP();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.groupId = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_DELETE_CARD_GROUP.fromObject = function fromObject(d) {
            if (d instanceof $root.CardsPto.S_DELETE_CARD_GROUP)
                return d;
            var m = new $root.CardsPto.S_DELETE_CARD_GROUP();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.groupId != null) {
                m.groupId = d.groupId | 0;
            }
            return m;
        };

        S_DELETE_CARD_GROUP.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 4;
                d.scmd = 10;
                d.groupId = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.groupId != null && m.hasOwnProperty("groupId")) {
                d.groupId = m.groupId;
            }
            return d;
        };

        S_DELETE_CARD_GROUP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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

$root.GamePto = (function() {

    var GamePto = {};

    GamePto.C_FRIENDLY_MATCH = (function() {

        function C_FRIENDLY_MATCH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_FRIENDLY_MATCH.prototype.cmd = 200;
        C_FRIENDLY_MATCH.prototype.scmd = 1;
        C_FRIENDLY_MATCH.prototype.token = 0;

        C_FRIENDLY_MATCH.create = function create(properties) {
            return new C_FRIENDLY_MATCH(properties);
        };

        C_FRIENDLY_MATCH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(24).int32(m.token);
            return w;
        };

        C_FRIENDLY_MATCH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.C_FRIENDLY_MATCH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.cmd = r.int32();
                        break;
                    }
                case 2: {
                        m.scmd = r.int32();
                        break;
                    }
                case 3: {
                        m.token = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_FRIENDLY_MATCH.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.C_FRIENDLY_MATCH)
                return d;
            var m = new $root.GamePto.C_FRIENDLY_MATCH();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.token != null) {
                m.token = d.token | 0;
            }
            return m;
        };

        C_FRIENDLY_MATCH.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 1;
                d.token = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.token != null && m.hasOwnProperty("token")) {
                d.token = m.token;
            }
            return d;
        };

        C_FRIENDLY_MATCH.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_FRIENDLY_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_FRIENDLY_MATCH";
        };

        return C_FRIENDLY_MATCH;
    })();

    return GamePto;
})();

module.exports = $root;
