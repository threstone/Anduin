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
        S_FRIEND_CHANGE.prototype.friend = null;
        S_FRIEND_CHANGE.prototype.isNewFriend = false;

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
            if (m.friend != null && Object.hasOwnProperty.call(m, "friend"))
                $root.FriendPto.Friend.encode(m.friend, w.uint32(26).fork()).ldelim();
            if (m.isNewFriend != null && Object.hasOwnProperty.call(m, "isNewFriend"))
                w.uint32(32).bool(m.isNewFriend);
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
                        m.friend = $root.FriendPto.Friend.decode(r, r.uint32());
                        break;
                    }
                case 4: {
                        m.isNewFriend = r.bool();
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
            if (d.friend != null) {
                if (typeof d.friend !== "object")
                    throw TypeError(".FriendPto.S_FRIEND_CHANGE.friend: object expected");
                m.friend = $root.FriendPto.Friend.fromObject(d.friend);
            }
            if (d.isNewFriend != null) {
                m.isNewFriend = Boolean(d.isNewFriend);
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
                d.friend = null;
                d.isNewFriend = false;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.friend != null && m.hasOwnProperty("friend")) {
                d.friend = $root.FriendPto.Friend.toObject(m.friend, o);
            }
            if (m.isNewFriend != null && m.hasOwnProperty("isNewFriend")) {
                d.isNewFriend = m.isNewFriend;
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

    CardsPto.AtkType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CloseRange"] = 0;
        values[valuesById[1] = "LongRange"] = 1;
        return values;
    })();

    CardsPto.EventType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Common"] = 0;
        values[valuesById[1] = "Secret"] = 1;
        return values;
    })();

    CardsPto.BuilingType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Camp"] = 0;
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

    GamePto.DiceValueEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Sword"] = 0;
        values[valuesById[1] = "Bow"] = 1;
        values[valuesById[2] = "Magic"] = 2;
        values[valuesById[3] = "Miss"] = 3;
        return values;
    })();

    GamePto.UseConditionIndexEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UseConditionTypeIndex"] = 0;
        values[valuesById[1] = "UseConditionValueIndex"] = 1;
        return values;
    })();

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
        return values;
    })();

    GamePto.UserInfo = (function() {

        function UserInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        UserInfo.prototype.nick = "";
        UserInfo.prototype.power = 0;
        UserInfo.prototype.uid = 0;

        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        UserInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(2).string(m.nick);
            if (m.power != null && Object.hasOwnProperty.call(m, "power"))
                w.uint32(8).int32(m.power);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(16).int32(m.uid);
            return w;
        };

        UserInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.UserInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 0: {
                        m.nick = r.string();
                        break;
                    }
                case 1: {
                        m.power = r.int32();
                        break;
                    }
                case 2: {
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

        UserInfo.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.UserInfo)
                return d;
            var m = new $root.GamePto.UserInfo();
            if (d.nick != null) {
                m.nick = String(d.nick);
            }
            if (d.power != null) {
                m.power = d.power | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            return m;
        };

        UserInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.nick = "";
                d.power = 0;
                d.uid = 0;
            }
            if (m.nick != null && m.hasOwnProperty("nick")) {
                d.nick = m.nick;
            }
            if (m.power != null && m.hasOwnProperty("power")) {
                d.power = m.power;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            return d;
        };

        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.UserInfo";
        };

        return UserInfo;
    })();

    GamePto.Card = (function() {

        function Card(p) {
            this.buffList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Card.prototype.id = 0;
        Card.prototype.cardId = 0;
        Card.prototype.cardType = 0;
        Card.prototype.attack = 0;
        Card.prototype.health = 0;
        Card.prototype.cardFee = 0;
        Card.prototype.uid = 0;
        Card.prototype.blockX = 0;
        Card.prototype.blockY = 0;
        Card.prototype.allowAtk = false;
        Card.prototype.allowMove = false;
        Card.prototype.buffList = $util.emptyArray;

        Card.create = function create(properties) {
            return new Card(properties);
        };

        Card.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(0).int32(m.id);
            if (m.cardId != null && Object.hasOwnProperty.call(m, "cardId"))
                w.uint32(8).int32(m.cardId);
            if (m.cardType != null && Object.hasOwnProperty.call(m, "cardType"))
                w.uint32(16).int32(m.cardType);
            if (m.attack != null && Object.hasOwnProperty.call(m, "attack"))
                w.uint32(24).int32(m.attack);
            if (m.health != null && Object.hasOwnProperty.call(m, "health"))
                w.uint32(32).int32(m.health);
            if (m.cardFee != null && Object.hasOwnProperty.call(m, "cardFee"))
                w.uint32(40).int32(m.cardFee);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(48).int32(m.uid);
            if (m.blockX != null && Object.hasOwnProperty.call(m, "blockX"))
                w.uint32(56).int32(m.blockX);
            if (m.blockY != null && Object.hasOwnProperty.call(m, "blockY"))
                w.uint32(64).int32(m.blockY);
            if (m.allowAtk != null && Object.hasOwnProperty.call(m, "allowAtk"))
                w.uint32(72).bool(m.allowAtk);
            if (m.allowMove != null && Object.hasOwnProperty.call(m, "allowMove"))
                w.uint32(80).bool(m.allowMove);
            if (m.buffList != null && m.buffList.length) {
                w.uint32(90).fork();
                for (var i = 0; i < m.buffList.length; ++i)
                    w.int32(m.buffList[i]);
                w.ldelim();
            }
            return w;
        };

        Card.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.Card();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 0: {
                        m.id = r.int32();
                        break;
                    }
                case 1: {
                        m.cardId = r.int32();
                        break;
                    }
                case 2: {
                        m.cardType = r.int32();
                        break;
                    }
                case 3: {
                        m.attack = r.int32();
                        break;
                    }
                case 4: {
                        m.health = r.int32();
                        break;
                    }
                case 5: {
                        m.cardFee = r.int32();
                        break;
                    }
                case 6: {
                        m.uid = r.int32();
                        break;
                    }
                case 7: {
                        m.blockX = r.int32();
                        break;
                    }
                case 8: {
                        m.blockY = r.int32();
                        break;
                    }
                case 9: {
                        m.allowAtk = r.bool();
                        break;
                    }
                case 10: {
                        m.allowMove = r.bool();
                        break;
                    }
                case 11: {
                        if (!(m.buffList && m.buffList.length))
                            m.buffList = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.buffList.push(r.int32());
                        } else
                            m.buffList.push(r.int32());
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
            if (d instanceof $root.GamePto.Card)
                return d;
            var m = new $root.GamePto.Card();
            if (d.id != null) {
                m.id = d.id | 0;
            }
            if (d.cardId != null) {
                m.cardId = d.cardId | 0;
            }
            if (d.cardType != null) {
                m.cardType = d.cardType | 0;
            }
            if (d.attack != null) {
                m.attack = d.attack | 0;
            }
            if (d.health != null) {
                m.health = d.health | 0;
            }
            if (d.cardFee != null) {
                m.cardFee = d.cardFee | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.blockX != null) {
                m.blockX = d.blockX | 0;
            }
            if (d.blockY != null) {
                m.blockY = d.blockY | 0;
            }
            if (d.allowAtk != null) {
                m.allowAtk = Boolean(d.allowAtk);
            }
            if (d.allowMove != null) {
                m.allowMove = Boolean(d.allowMove);
            }
            if (d.buffList) {
                if (!Array.isArray(d.buffList))
                    throw TypeError(".GamePto.Card.buffList: array expected");
                m.buffList = [];
                for (var i = 0; i < d.buffList.length; ++i) {
                    m.buffList[i] = d.buffList[i] | 0;
                }
            }
            return m;
        };

        Card.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.buffList = [];
            }
            if (o.defaults) {
                d.id = 0;
                d.cardId = 0;
                d.cardType = 0;
                d.attack = 0;
                d.health = 0;
                d.cardFee = 0;
                d.uid = 0;
                d.blockX = 0;
                d.blockY = 0;
                d.allowAtk = false;
                d.allowMove = false;
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = m.id;
            }
            if (m.cardId != null && m.hasOwnProperty("cardId")) {
                d.cardId = m.cardId;
            }
            if (m.cardType != null && m.hasOwnProperty("cardType")) {
                d.cardType = m.cardType;
            }
            if (m.attack != null && m.hasOwnProperty("attack")) {
                d.attack = m.attack;
            }
            if (m.health != null && m.hasOwnProperty("health")) {
                d.health = m.health;
            }
            if (m.cardFee != null && m.hasOwnProperty("cardFee")) {
                d.cardFee = m.cardFee;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            if (m.blockX != null && m.hasOwnProperty("blockX")) {
                d.blockX = m.blockX;
            }
            if (m.blockY != null && m.hasOwnProperty("blockY")) {
                d.blockY = m.blockY;
            }
            if (m.allowAtk != null && m.hasOwnProperty("allowAtk")) {
                d.allowAtk = m.allowAtk;
            }
            if (m.allowMove != null && m.hasOwnProperty("allowMove")) {
                d.allowMove = m.allowMove;
            }
            if (m.buffList && m.buffList.length) {
                d.buffList = [];
                for (var j = 0; j < m.buffList.length; ++j) {
                    d.buffList[j] = m.buffList[j];
                }
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
            return typeUrlPrefix + "/GamePto.Card";
        };

        return Card;
    })();

    GamePto.MapData = (function() {

        function MapData(p) {
            this.eventCards = [];
            this.entityCards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MapData.prototype.eventCards = $util.emptyArray;
        MapData.prototype.entityCards = $util.emptyArray;

        MapData.create = function create(properties) {
            return new MapData(properties);
        };

        MapData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.eventCards != null && m.eventCards.length) {
                for (var i = 0; i < m.eventCards.length; ++i)
                    $root.GamePto.Card.encode(m.eventCards[i], w.uint32(2).fork()).ldelim();
            }
            if (m.entityCards != null && m.entityCards.length) {
                for (var i = 0; i < m.entityCards.length; ++i)
                    $root.GamePto.Card.encode(m.entityCards[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        MapData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.MapData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 0: {
                        if (!(m.eventCards && m.eventCards.length))
                            m.eventCards = [];
                        m.eventCards.push($root.GamePto.Card.decode(r, r.uint32()));
                        break;
                    }
                case 1: {
                        if (!(m.entityCards && m.entityCards.length))
                            m.entityCards = [];
                        m.entityCards.push($root.GamePto.Card.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        MapData.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.MapData)
                return d;
            var m = new $root.GamePto.MapData();
            if (d.eventCards) {
                if (!Array.isArray(d.eventCards))
                    throw TypeError(".GamePto.MapData.eventCards: array expected");
                m.eventCards = [];
                for (var i = 0; i < d.eventCards.length; ++i) {
                    if (typeof d.eventCards[i] !== "object")
                        throw TypeError(".GamePto.MapData.eventCards: object expected");
                    m.eventCards[i] = $root.GamePto.Card.fromObject(d.eventCards[i]);
                }
            }
            if (d.entityCards) {
                if (!Array.isArray(d.entityCards))
                    throw TypeError(".GamePto.MapData.entityCards: array expected");
                m.entityCards = [];
                for (var i = 0; i < d.entityCards.length; ++i) {
                    if (typeof d.entityCards[i] !== "object")
                        throw TypeError(".GamePto.MapData.entityCards: object expected");
                    m.entityCards[i] = $root.GamePto.Card.fromObject(d.entityCards[i]);
                }
            }
            return m;
        };

        MapData.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.eventCards = [];
                d.entityCards = [];
            }
            if (m.eventCards && m.eventCards.length) {
                d.eventCards = [];
                for (var j = 0; j < m.eventCards.length; ++j) {
                    d.eventCards[j] = $root.GamePto.Card.toObject(m.eventCards[j], o);
                }
            }
            if (m.entityCards && m.entityCards.length) {
                d.entityCards = [];
                for (var j = 0; j < m.entityCards.length; ++j) {
                    d.entityCards[j] = $root.GamePto.Card.toObject(m.entityCards[j], o);
                }
            }
            return d;
        };

        MapData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MapData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.MapData";
        };

        return MapData;
    })();

    GamePto.C_PREPARE_TO_START = (function() {

        function C_PREPARE_TO_START(p) {
            this.replaceCardIndexes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_PREPARE_TO_START.prototype.cmd = 200;
        C_PREPARE_TO_START.prototype.scmd = 1;
        C_PREPARE_TO_START.prototype.replaceCardIndexes = $util.emptyArray;

        C_PREPARE_TO_START.create = function create(properties) {
            return new C_PREPARE_TO_START(properties);
        };

        C_PREPARE_TO_START.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.replaceCardIndexes != null && m.replaceCardIndexes.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.replaceCardIndexes.length; ++i)
                    w.int32(m.replaceCardIndexes[i]);
                w.ldelim();
            }
            return w;
        };

        C_PREPARE_TO_START.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.C_PREPARE_TO_START();
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
                        if (!(m.replaceCardIndexes && m.replaceCardIndexes.length))
                            m.replaceCardIndexes = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.replaceCardIndexes.push(r.int32());
                        } else
                            m.replaceCardIndexes.push(r.int32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_PREPARE_TO_START.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.C_PREPARE_TO_START)
                return d;
            var m = new $root.GamePto.C_PREPARE_TO_START();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.replaceCardIndexes) {
                if (!Array.isArray(d.replaceCardIndexes))
                    throw TypeError(".GamePto.C_PREPARE_TO_START.replaceCardIndexes: array expected");
                m.replaceCardIndexes = [];
                for (var i = 0; i < d.replaceCardIndexes.length; ++i) {
                    m.replaceCardIndexes[i] = d.replaceCardIndexes[i] | 0;
                }
            }
            return m;
        };

        C_PREPARE_TO_START.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.replaceCardIndexes = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 1;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.replaceCardIndexes && m.replaceCardIndexes.length) {
                d.replaceCardIndexes = [];
                for (var j = 0; j < m.replaceCardIndexes.length; ++j) {
                    d.replaceCardIndexes[j] = m.replaceCardIndexes[j];
                }
            }
            return d;
        };

        C_PREPARE_TO_START.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_PREPARE_TO_START.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_PREPARE_TO_START";
        };

        return C_PREPARE_TO_START;
    })();

    GamePto.C_END_ROUND = (function() {

        function C_END_ROUND(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_END_ROUND.prototype.cmd = 200;
        C_END_ROUND.prototype.scmd = 2;

        C_END_ROUND.create = function create(properties) {
            return new C_END_ROUND(properties);
        };

        C_END_ROUND.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_END_ROUND.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.C_END_ROUND();
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

        C_END_ROUND.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.C_END_ROUND)
                return d;
            var m = new $root.GamePto.C_END_ROUND();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        C_END_ROUND.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 2;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            return d;
        };

        C_END_ROUND.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_END_ROUND.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_END_ROUND";
        };

        return C_END_ROUND;
    })();

    GamePto.C_DISCARD = (function() {

        function C_DISCARD(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_DISCARD.prototype.cmd = 200;
        C_DISCARD.prototype.scmd = 3;
        C_DISCARD.prototype.cardIndex = 0;

        C_DISCARD.create = function create(properties) {
            return new C_DISCARD(properties);
        };

        C_DISCARD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardIndex != null && Object.hasOwnProperty.call(m, "cardIndex"))
                w.uint32(24).int32(m.cardIndex);
            return w;
        };

        C_DISCARD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.C_DISCARD();
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
                        m.cardIndex = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_DISCARD.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.C_DISCARD)
                return d;
            var m = new $root.GamePto.C_DISCARD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardIndex != null) {
                m.cardIndex = d.cardIndex | 0;
            }
            return m;
        };

        C_DISCARD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 3;
                d.cardIndex = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardIndex != null && m.hasOwnProperty("cardIndex")) {
                d.cardIndex = m.cardIndex;
            }
            return d;
        };

        C_DISCARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_DISCARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_DISCARD";
        };

        return C_DISCARD;
    })();

    GamePto.C_USE_CARD = (function() {

        function C_USE_CARD(p) {
            this.dataArr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_USE_CARD.prototype.cmd = 200;
        C_USE_CARD.prototype.scmd = 4;
        C_USE_CARD.prototype.cardIndex = 0;
        C_USE_CARD.prototype.dataArr = $util.emptyArray;

        C_USE_CARD.create = function create(properties) {
            return new C_USE_CARD(properties);
        };

        C_USE_CARD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardIndex != null && Object.hasOwnProperty.call(m, "cardIndex"))
                w.uint32(24).int32(m.cardIndex);
            if (m.dataArr != null && m.dataArr.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.dataArr.length; ++i)
                    w.int32(m.dataArr[i]);
                w.ldelim();
            }
            return w;
        };

        C_USE_CARD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.C_USE_CARD();
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
                        m.cardIndex = r.int32();
                        break;
                    }
                case 4: {
                        if (!(m.dataArr && m.dataArr.length))
                            m.dataArr = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.dataArr.push(r.int32());
                        } else
                            m.dataArr.push(r.int32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_USE_CARD.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.C_USE_CARD)
                return d;
            var m = new $root.GamePto.C_USE_CARD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardIndex != null) {
                m.cardIndex = d.cardIndex | 0;
            }
            if (d.dataArr) {
                if (!Array.isArray(d.dataArr))
                    throw TypeError(".GamePto.C_USE_CARD.dataArr: array expected");
                m.dataArr = [];
                for (var i = 0; i < d.dataArr.length; ++i) {
                    m.dataArr[i] = d.dataArr[i] | 0;
                }
            }
            return m;
        };

        C_USE_CARD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.dataArr = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 4;
                d.cardIndex = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardIndex != null && m.hasOwnProperty("cardIndex")) {
                d.cardIndex = m.cardIndex;
            }
            if (m.dataArr && m.dataArr.length) {
                d.dataArr = [];
                for (var j = 0; j < m.dataArr.length; ++j) {
                    d.dataArr[j] = m.dataArr[j];
                }
            }
            return d;
        };

        C_USE_CARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_USE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_USE_CARD";
        };

        return C_USE_CARD;
    })();

    GamePto.C_MOVE = (function() {

        function C_MOVE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_MOVE.prototype.cmd = 200;
        C_MOVE.prototype.scmd = 5;
        C_MOVE.prototype.sourceX = 0;
        C_MOVE.prototype.sourceY = 0;
        C_MOVE.prototype.targetX = 0;
        C_MOVE.prototype.targetY = 0;

        C_MOVE.create = function create(properties) {
            return new C_MOVE(properties);
        };

        C_MOVE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.sourceX != null && Object.hasOwnProperty.call(m, "sourceX"))
                w.uint32(24).int32(m.sourceX);
            if (m.sourceY != null && Object.hasOwnProperty.call(m, "sourceY"))
                w.uint32(32).int32(m.sourceY);
            if (m.targetX != null && Object.hasOwnProperty.call(m, "targetX"))
                w.uint32(40).int32(m.targetX);
            if (m.targetY != null && Object.hasOwnProperty.call(m, "targetY"))
                w.uint32(48).int32(m.targetY);
            return w;
        };

        C_MOVE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.C_MOVE();
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
                        m.sourceX = r.int32();
                        break;
                    }
                case 4: {
                        m.sourceY = r.int32();
                        break;
                    }
                case 5: {
                        m.targetX = r.int32();
                        break;
                    }
                case 6: {
                        m.targetY = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_MOVE.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.C_MOVE)
                return d;
            var m = new $root.GamePto.C_MOVE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.sourceX != null) {
                m.sourceX = d.sourceX | 0;
            }
            if (d.sourceY != null) {
                m.sourceY = d.sourceY | 0;
            }
            if (d.targetX != null) {
                m.targetX = d.targetX | 0;
            }
            if (d.targetY != null) {
                m.targetY = d.targetY | 0;
            }
            return m;
        };

        C_MOVE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 5;
                d.sourceX = 0;
                d.sourceY = 0;
                d.targetX = 0;
                d.targetY = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.sourceX != null && m.hasOwnProperty("sourceX")) {
                d.sourceX = m.sourceX;
            }
            if (m.sourceY != null && m.hasOwnProperty("sourceY")) {
                d.sourceY = m.sourceY;
            }
            if (m.targetX != null && m.hasOwnProperty("targetX")) {
                d.targetX = m.targetX;
            }
            if (m.targetY != null && m.hasOwnProperty("targetY")) {
                d.targetY = m.targetY;
            }
            return d;
        };

        C_MOVE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_MOVE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_MOVE";
        };

        return C_MOVE;
    })();

    GamePto.C_ATTACK = (function() {

        function C_ATTACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_ATTACK.prototype.cmd = 200;
        C_ATTACK.prototype.scmd = 6;
        C_ATTACK.prototype.sourceX = 0;
        C_ATTACK.prototype.sourceY = 0;
        C_ATTACK.prototype.targetX = 0;
        C_ATTACK.prototype.targetY = 0;

        C_ATTACK.create = function create(properties) {
            return new C_ATTACK(properties);
        };

        C_ATTACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.sourceX != null && Object.hasOwnProperty.call(m, "sourceX"))
                w.uint32(24).int32(m.sourceX);
            if (m.sourceY != null && Object.hasOwnProperty.call(m, "sourceY"))
                w.uint32(32).int32(m.sourceY);
            if (m.targetX != null && Object.hasOwnProperty.call(m, "targetX"))
                w.uint32(40).int32(m.targetX);
            if (m.targetY != null && Object.hasOwnProperty.call(m, "targetY"))
                w.uint32(48).int32(m.targetY);
            return w;
        };

        C_ATTACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.C_ATTACK();
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
                        m.sourceX = r.int32();
                        break;
                    }
                case 4: {
                        m.sourceY = r.int32();
                        break;
                    }
                case 5: {
                        m.targetX = r.int32();
                        break;
                    }
                case 6: {
                        m.targetY = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_ATTACK.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.C_ATTACK)
                return d;
            var m = new $root.GamePto.C_ATTACK();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.sourceX != null) {
                m.sourceX = d.sourceX | 0;
            }
            if (d.sourceY != null) {
                m.sourceY = d.sourceY | 0;
            }
            if (d.targetX != null) {
                m.targetX = d.targetX | 0;
            }
            if (d.targetY != null) {
                m.targetY = d.targetY | 0;
            }
            return m;
        };

        C_ATTACK.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 6;
                d.sourceX = 0;
                d.sourceY = 0;
                d.targetX = 0;
                d.targetY = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.sourceX != null && m.hasOwnProperty("sourceX")) {
                d.sourceX = m.sourceX;
            }
            if (m.sourceY != null && m.hasOwnProperty("sourceY")) {
                d.sourceY = m.sourceY;
            }
            if (m.targetX != null && m.hasOwnProperty("targetX")) {
                d.targetX = m.targetX;
            }
            if (m.targetY != null && m.hasOwnProperty("targetY")) {
                d.targetY = m.targetY;
            }
            return d;
        };

        C_ATTACK.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_ATTACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.C_ATTACK";
        };

        return C_ATTACK;
    })();

    GamePto.S_SERVER_ERROR = (function() {

        function S_SERVER_ERROR(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_SERVER_ERROR.prototype.cmd = 200;
        S_SERVER_ERROR.prototype.scmd = 10000;
        S_SERVER_ERROR.prototype.message = "";

        S_SERVER_ERROR.create = function create(properties) {
            return new S_SERVER_ERROR(properties);
        };

        S_SERVER_ERROR.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.message != null && Object.hasOwnProperty.call(m, "message"))
                w.uint32(26).string(m.message);
            return w;
        };

        S_SERVER_ERROR.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_SERVER_ERROR();
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
                        m.message = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_SERVER_ERROR.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_SERVER_ERROR)
                return d;
            var m = new $root.GamePto.S_SERVER_ERROR();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.message != null) {
                m.message = String(d.message);
            }
            return m;
        };

        S_SERVER_ERROR.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10000;
                d.message = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.message != null && m.hasOwnProperty("message")) {
                d.message = m.message;
            }
            return d;
        };

        S_SERVER_ERROR.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_SERVER_ERROR.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_SERVER_ERROR";
        };

        return S_SERVER_ERROR;
    })();

    GamePto.S_INIT_GAME = (function() {

        function S_INIT_GAME(p) {
            this.users = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_INIT_GAME.prototype.cmd = 200;
        S_INIT_GAME.prototype.scmd = 10001;
        S_INIT_GAME.prototype.users = $util.emptyArray;

        S_INIT_GAME.create = function create(properties) {
            return new S_INIT_GAME(properties);
        };

        S_INIT_GAME.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.users != null && m.users.length) {
                for (var i = 0; i < m.users.length; ++i)
                    $root.GamePto.UserInfo.encode(m.users[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        S_INIT_GAME.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_INIT_GAME();
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
                        if (!(m.users && m.users.length))
                            m.users = [];
                        m.users.push($root.GamePto.UserInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_INIT_GAME.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_INIT_GAME)
                return d;
            var m = new $root.GamePto.S_INIT_GAME();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.users) {
                if (!Array.isArray(d.users))
                    throw TypeError(".GamePto.S_INIT_GAME.users: array expected");
                m.users = [];
                for (var i = 0; i < d.users.length; ++i) {
                    if (typeof d.users[i] !== "object")
                        throw TypeError(".GamePto.S_INIT_GAME.users: object expected");
                    m.users[i] = $root.GamePto.UserInfo.fromObject(d.users[i]);
                }
            }
            return m;
        };

        S_INIT_GAME.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.users = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10001;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.users && m.users.length) {
                d.users = [];
                for (var j = 0; j < m.users.length; ++j) {
                    d.users[j] = $root.GamePto.UserInfo.toObject(m.users[j], o);
                }
            }
            return d;
        };

        S_INIT_GAME.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_INIT_GAME.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_INIT_GAME";
        };

        return S_INIT_GAME;
    })();

    GamePto.S_GAME_START = (function() {

        function S_GAME_START(p) {
            this.cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GAME_START.prototype.cmd = 200;
        S_GAME_START.prototype.scmd = 10002;
        S_GAME_START.prototype.firstUid = 0;
        S_GAME_START.prototype.cards = $util.emptyArray;
        S_GAME_START.prototype.mapData = null;
        S_GAME_START.prototype.replaceEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        S_GAME_START.create = function create(properties) {
            return new S_GAME_START(properties);
        };

        S_GAME_START.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.firstUid != null && Object.hasOwnProperty.call(m, "firstUid"))
                w.uint32(24).int32(m.firstUid);
            if (m.cards != null && m.cards.length) {
                for (var i = 0; i < m.cards.length; ++i)
                    $root.GamePto.Card.encode(m.cards[i], w.uint32(34).fork()).ldelim();
            }
            if (m.mapData != null && Object.hasOwnProperty.call(m, "mapData"))
                $root.GamePto.MapData.encode(m.mapData, w.uint32(42).fork()).ldelim();
            if (m.replaceEndTime != null && Object.hasOwnProperty.call(m, "replaceEndTime"))
                w.uint32(48).int64(m.replaceEndTime);
            return w;
        };

        S_GAME_START.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_GAME_START();
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
                        m.firstUid = r.int32();
                        break;
                    }
                case 4: {
                        if (!(m.cards && m.cards.length))
                            m.cards = [];
                        m.cards.push($root.GamePto.Card.decode(r, r.uint32()));
                        break;
                    }
                case 5: {
                        m.mapData = $root.GamePto.MapData.decode(r, r.uint32());
                        break;
                    }
                case 6: {
                        m.replaceEndTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_GAME_START.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_GAME_START)
                return d;
            var m = new $root.GamePto.S_GAME_START();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.firstUid != null) {
                m.firstUid = d.firstUid | 0;
            }
            if (d.cards) {
                if (!Array.isArray(d.cards))
                    throw TypeError(".GamePto.S_GAME_START.cards: array expected");
                m.cards = [];
                for (var i = 0; i < d.cards.length; ++i) {
                    if (typeof d.cards[i] !== "object")
                        throw TypeError(".GamePto.S_GAME_START.cards: object expected");
                    m.cards[i] = $root.GamePto.Card.fromObject(d.cards[i]);
                }
            }
            if (d.mapData != null) {
                if (typeof d.mapData !== "object")
                    throw TypeError(".GamePto.S_GAME_START.mapData: object expected");
                m.mapData = $root.GamePto.MapData.fromObject(d.mapData);
            }
            if (d.replaceEndTime != null) {
                if ($util.Long)
                    (m.replaceEndTime = $util.Long.fromValue(d.replaceEndTime)).unsigned = false;
                else if (typeof d.replaceEndTime === "string")
                    m.replaceEndTime = parseInt(d.replaceEndTime, 10);
                else if (typeof d.replaceEndTime === "number")
                    m.replaceEndTime = d.replaceEndTime;
                else if (typeof d.replaceEndTime === "object")
                    m.replaceEndTime = new $util.LongBits(d.replaceEndTime.low >>> 0, d.replaceEndTime.high >>> 0).toNumber();
            }
            return m;
        };

        S_GAME_START.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.cards = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10002;
                d.firstUid = 0;
                d.mapData = null;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.replaceEndTime = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.replaceEndTime = o.longs === String ? "0" : 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.firstUid != null && m.hasOwnProperty("firstUid")) {
                d.firstUid = m.firstUid;
            }
            if (m.cards && m.cards.length) {
                d.cards = [];
                for (var j = 0; j < m.cards.length; ++j) {
                    d.cards[j] = $root.GamePto.Card.toObject(m.cards[j], o);
                }
            }
            if (m.mapData != null && m.hasOwnProperty("mapData")) {
                d.mapData = $root.GamePto.MapData.toObject(m.mapData, o);
            }
            if (m.replaceEndTime != null && m.hasOwnProperty("replaceEndTime")) {
                if (typeof m.replaceEndTime === "number")
                    d.replaceEndTime = o.longs === String ? String(m.replaceEndTime) : m.replaceEndTime;
                else
                    d.replaceEndTime = o.longs === String ? $util.Long.prototype.toString.call(m.replaceEndTime) : o.longs === Number ? new $util.LongBits(m.replaceEndTime.low >>> 0, m.replaceEndTime.high >>> 0).toNumber() : m.replaceEndTime;
            }
            return d;
        };

        S_GAME_START.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_GAME_START.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_GAME_START";
        };

        return S_GAME_START;
    })();

    GamePto.S_REPLACE_CARDS = (function() {

        function S_REPLACE_CARDS(p) {
            this.cards = [];
            this.replaceCardIndexes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_REPLACE_CARDS.prototype.cmd = 200;
        S_REPLACE_CARDS.prototype.scmd = 10003;
        S_REPLACE_CARDS.prototype.cards = $util.emptyArray;
        S_REPLACE_CARDS.prototype.replaceCardIndexes = $util.emptyArray;
        S_REPLACE_CARDS.prototype.uid = 0;

        S_REPLACE_CARDS.create = function create(properties) {
            return new S_REPLACE_CARDS(properties);
        };

        S_REPLACE_CARDS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cards != null && m.cards.length) {
                for (var i = 0; i < m.cards.length; ++i)
                    $root.GamePto.Card.encode(m.cards[i], w.uint32(26).fork()).ldelim();
            }
            if (m.replaceCardIndexes != null && m.replaceCardIndexes.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.replaceCardIndexes.length; ++i)
                    w.int32(m.replaceCardIndexes[i]);
                w.ldelim();
            }
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(40).int32(m.uid);
            return w;
        };

        S_REPLACE_CARDS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_REPLACE_CARDS();
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
                        if (!(m.cards && m.cards.length))
                            m.cards = [];
                        m.cards.push($root.GamePto.Card.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
                        if (!(m.replaceCardIndexes && m.replaceCardIndexes.length))
                            m.replaceCardIndexes = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.replaceCardIndexes.push(r.int32());
                        } else
                            m.replaceCardIndexes.push(r.int32());
                        break;
                    }
                case 5: {
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

        S_REPLACE_CARDS.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_REPLACE_CARDS)
                return d;
            var m = new $root.GamePto.S_REPLACE_CARDS();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cards) {
                if (!Array.isArray(d.cards))
                    throw TypeError(".GamePto.S_REPLACE_CARDS.cards: array expected");
                m.cards = [];
                for (var i = 0; i < d.cards.length; ++i) {
                    if (typeof d.cards[i] !== "object")
                        throw TypeError(".GamePto.S_REPLACE_CARDS.cards: object expected");
                    m.cards[i] = $root.GamePto.Card.fromObject(d.cards[i]);
                }
            }
            if (d.replaceCardIndexes) {
                if (!Array.isArray(d.replaceCardIndexes))
                    throw TypeError(".GamePto.S_REPLACE_CARDS.replaceCardIndexes: array expected");
                m.replaceCardIndexes = [];
                for (var i = 0; i < d.replaceCardIndexes.length; ++i) {
                    m.replaceCardIndexes[i] = d.replaceCardIndexes[i] | 0;
                }
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            return m;
        };

        S_REPLACE_CARDS.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.cards = [];
                d.replaceCardIndexes = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10003;
                d.uid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cards && m.cards.length) {
                d.cards = [];
                for (var j = 0; j < m.cards.length; ++j) {
                    d.cards[j] = $root.GamePto.Card.toObject(m.cards[j], o);
                }
            }
            if (m.replaceCardIndexes && m.replaceCardIndexes.length) {
                d.replaceCardIndexes = [];
                for (var j = 0; j < m.replaceCardIndexes.length; ++j) {
                    d.replaceCardIndexes[j] = m.replaceCardIndexes[j];
                }
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            return d;
        };

        S_REPLACE_CARDS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_REPLACE_CARDS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_REPLACE_CARDS";
        };

        return S_REPLACE_CARDS;
    })();

    GamePto.S_ROUND_START_EVENT = (function() {

        function S_ROUND_START_EVENT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ROUND_START_EVENT.prototype.cmd = 200;
        S_ROUND_START_EVENT.prototype.scmd = 10004;
        S_ROUND_START_EVENT.prototype.uid = 0;
        S_ROUND_START_EVENT.prototype.atkTimes = 0;
        S_ROUND_START_EVENT.prototype.atkTimesLimit = 0;
        S_ROUND_START_EVENT.prototype.moveTimes = 0;
        S_ROUND_START_EVENT.prototype.moveTimesLimit = 0;

        S_ROUND_START_EVENT.create = function create(properties) {
            return new S_ROUND_START_EVENT(properties);
        };

        S_ROUND_START_EVENT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(24).int32(m.uid);
            if (m.atkTimes != null && Object.hasOwnProperty.call(m, "atkTimes"))
                w.uint32(32).int32(m.atkTimes);
            if (m.atkTimesLimit != null && Object.hasOwnProperty.call(m, "atkTimesLimit"))
                w.uint32(40).int32(m.atkTimesLimit);
            if (m.moveTimes != null && Object.hasOwnProperty.call(m, "moveTimes"))
                w.uint32(48).int32(m.moveTimes);
            if (m.moveTimesLimit != null && Object.hasOwnProperty.call(m, "moveTimesLimit"))
                w.uint32(56).int32(m.moveTimesLimit);
            return w;
        };

        S_ROUND_START_EVENT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_ROUND_START_EVENT();
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
                        m.atkTimes = r.int32();
                        break;
                    }
                case 5: {
                        m.atkTimesLimit = r.int32();
                        break;
                    }
                case 6: {
                        m.moveTimes = r.int32();
                        break;
                    }
                case 7: {
                        m.moveTimesLimit = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_ROUND_START_EVENT.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_ROUND_START_EVENT)
                return d;
            var m = new $root.GamePto.S_ROUND_START_EVENT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.atkTimes != null) {
                m.atkTimes = d.atkTimes | 0;
            }
            if (d.atkTimesLimit != null) {
                m.atkTimesLimit = d.atkTimesLimit | 0;
            }
            if (d.moveTimes != null) {
                m.moveTimes = d.moveTimes | 0;
            }
            if (d.moveTimesLimit != null) {
                m.moveTimesLimit = d.moveTimesLimit | 0;
            }
            return m;
        };

        S_ROUND_START_EVENT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10004;
                d.uid = 0;
                d.atkTimes = 0;
                d.atkTimesLimit = 0;
                d.moveTimes = 0;
                d.moveTimesLimit = 0;
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
            if (m.atkTimes != null && m.hasOwnProperty("atkTimes")) {
                d.atkTimes = m.atkTimes;
            }
            if (m.atkTimesLimit != null && m.hasOwnProperty("atkTimesLimit")) {
                d.atkTimesLimit = m.atkTimesLimit;
            }
            if (m.moveTimes != null && m.hasOwnProperty("moveTimes")) {
                d.moveTimes = m.moveTimes;
            }
            if (m.moveTimesLimit != null && m.hasOwnProperty("moveTimesLimit")) {
                d.moveTimesLimit = m.moveTimesLimit;
            }
            return d;
        };

        S_ROUND_START_EVENT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_ROUND_START_EVENT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_ROUND_START_EVENT";
        };

        return S_ROUND_START_EVENT;
    })();

    GamePto.S_ROUND_END_EVENT = (function() {

        function S_ROUND_END_EVENT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ROUND_END_EVENT.prototype.cmd = 200;
        S_ROUND_END_EVENT.prototype.scmd = 10005;
        S_ROUND_END_EVENT.prototype.uid = 0;

        S_ROUND_END_EVENT.create = function create(properties) {
            return new S_ROUND_END_EVENT(properties);
        };

        S_ROUND_END_EVENT.encode = function encode(m, w) {
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

        S_ROUND_END_EVENT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_ROUND_END_EVENT();
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

        S_ROUND_END_EVENT.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_ROUND_END_EVENT)
                return d;
            var m = new $root.GamePto.S_ROUND_END_EVENT();
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

        S_ROUND_END_EVENT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10005;
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

        S_ROUND_END_EVENT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_ROUND_END_EVENT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_ROUND_END_EVENT";
        };

        return S_ROUND_END_EVENT;
    })();

    GamePto.S_DRAW_CARDS = (function() {

        function S_DRAW_CARDS(p) {
            this.inHandCards = [];
            this.discards = [];
            this.damages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_DRAW_CARDS.prototype.cmd = 200;
        S_DRAW_CARDS.prototype.scmd = 10006;
        S_DRAW_CARDS.prototype.inHandCards = $util.emptyArray;
        S_DRAW_CARDS.prototype.inHandCardCount = 0;
        S_DRAW_CARDS.prototype.discards = $util.emptyArray;
        S_DRAW_CARDS.prototype.discardsCount = 0;
        S_DRAW_CARDS.prototype.damages = $util.emptyArray;
        S_DRAW_CARDS.prototype.uid = 0;
        S_DRAW_CARDS.prototype.cardPoolNum = 0;
        S_DRAW_CARDS.prototype.deadPoolNum = 0;

        S_DRAW_CARDS.create = function create(properties) {
            return new S_DRAW_CARDS(properties);
        };

        S_DRAW_CARDS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.inHandCards != null && m.inHandCards.length) {
                for (var i = 0; i < m.inHandCards.length; ++i)
                    $root.GamePto.Card.encode(m.inHandCards[i], w.uint32(26).fork()).ldelim();
            }
            if (m.inHandCardCount != null && Object.hasOwnProperty.call(m, "inHandCardCount"))
                w.uint32(32).int32(m.inHandCardCount);
            if (m.discards != null && m.discards.length) {
                for (var i = 0; i < m.discards.length; ++i)
                    $root.GamePto.Card.encode(m.discards[i], w.uint32(42).fork()).ldelim();
            }
            if (m.discardsCount != null && Object.hasOwnProperty.call(m, "discardsCount"))
                w.uint32(48).int32(m.discardsCount);
            if (m.damages != null && m.damages.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.damages.length; ++i)
                    w.int32(m.damages[i]);
                w.ldelim();
            }
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(64).int32(m.uid);
            if (m.cardPoolNum != null && Object.hasOwnProperty.call(m, "cardPoolNum"))
                w.uint32(72).int32(m.cardPoolNum);
            if (m.deadPoolNum != null && Object.hasOwnProperty.call(m, "deadPoolNum"))
                w.uint32(80).int32(m.deadPoolNum);
            return w;
        };

        S_DRAW_CARDS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_DRAW_CARDS();
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
                        if (!(m.inHandCards && m.inHandCards.length))
                            m.inHandCards = [];
                        m.inHandCards.push($root.GamePto.Card.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
                        m.inHandCardCount = r.int32();
                        break;
                    }
                case 5: {
                        if (!(m.discards && m.discards.length))
                            m.discards = [];
                        m.discards.push($root.GamePto.Card.decode(r, r.uint32()));
                        break;
                    }
                case 6: {
                        m.discardsCount = r.int32();
                        break;
                    }
                case 7: {
                        if (!(m.damages && m.damages.length))
                            m.damages = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.damages.push(r.int32());
                        } else
                            m.damages.push(r.int32());
                        break;
                    }
                case 8: {
                        m.uid = r.int32();
                        break;
                    }
                case 9: {
                        m.cardPoolNum = r.int32();
                        break;
                    }
                case 10: {
                        m.deadPoolNum = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_DRAW_CARDS.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_DRAW_CARDS)
                return d;
            var m = new $root.GamePto.S_DRAW_CARDS();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.inHandCards) {
                if (!Array.isArray(d.inHandCards))
                    throw TypeError(".GamePto.S_DRAW_CARDS.inHandCards: array expected");
                m.inHandCards = [];
                for (var i = 0; i < d.inHandCards.length; ++i) {
                    if (typeof d.inHandCards[i] !== "object")
                        throw TypeError(".GamePto.S_DRAW_CARDS.inHandCards: object expected");
                    m.inHandCards[i] = $root.GamePto.Card.fromObject(d.inHandCards[i]);
                }
            }
            if (d.inHandCardCount != null) {
                m.inHandCardCount = d.inHandCardCount | 0;
            }
            if (d.discards) {
                if (!Array.isArray(d.discards))
                    throw TypeError(".GamePto.S_DRAW_CARDS.discards: array expected");
                m.discards = [];
                for (var i = 0; i < d.discards.length; ++i) {
                    if (typeof d.discards[i] !== "object")
                        throw TypeError(".GamePto.S_DRAW_CARDS.discards: object expected");
                    m.discards[i] = $root.GamePto.Card.fromObject(d.discards[i]);
                }
            }
            if (d.discardsCount != null) {
                m.discardsCount = d.discardsCount | 0;
            }
            if (d.damages) {
                if (!Array.isArray(d.damages))
                    throw TypeError(".GamePto.S_DRAW_CARDS.damages: array expected");
                m.damages = [];
                for (var i = 0; i < d.damages.length; ++i) {
                    m.damages[i] = d.damages[i] | 0;
                }
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.cardPoolNum != null) {
                m.cardPoolNum = d.cardPoolNum | 0;
            }
            if (d.deadPoolNum != null) {
                m.deadPoolNum = d.deadPoolNum | 0;
            }
            return m;
        };

        S_DRAW_CARDS.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.inHandCards = [];
                d.discards = [];
                d.damages = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10006;
                d.inHandCardCount = 0;
                d.discardsCount = 0;
                d.uid = 0;
                d.cardPoolNum = 0;
                d.deadPoolNum = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.inHandCards && m.inHandCards.length) {
                d.inHandCards = [];
                for (var j = 0; j < m.inHandCards.length; ++j) {
                    d.inHandCards[j] = $root.GamePto.Card.toObject(m.inHandCards[j], o);
                }
            }
            if (m.inHandCardCount != null && m.hasOwnProperty("inHandCardCount")) {
                d.inHandCardCount = m.inHandCardCount;
            }
            if (m.discards && m.discards.length) {
                d.discards = [];
                for (var j = 0; j < m.discards.length; ++j) {
                    d.discards[j] = $root.GamePto.Card.toObject(m.discards[j], o);
                }
            }
            if (m.discardsCount != null && m.hasOwnProperty("discardsCount")) {
                d.discardsCount = m.discardsCount;
            }
            if (m.damages && m.damages.length) {
                d.damages = [];
                for (var j = 0; j < m.damages.length; ++j) {
                    d.damages[j] = m.damages[j];
                }
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            if (m.cardPoolNum != null && m.hasOwnProperty("cardPoolNum")) {
                d.cardPoolNum = m.cardPoolNum;
            }
            if (m.deadPoolNum != null && m.hasOwnProperty("deadPoolNum")) {
                d.deadPoolNum = m.deadPoolNum;
            }
            return d;
        };

        S_DRAW_CARDS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_DRAW_CARDS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_DRAW_CARDS";
        };

        return S_DRAW_CARDS;
    })();

    GamePto.S_FEE_INFO = (function() {

        function S_FEE_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_FEE_INFO.prototype.cmd = 200;
        S_FEE_INFO.prototype.scmd = 10007;
        S_FEE_INFO.prototype.fee = 0;
        S_FEE_INFO.prototype.maxFee = 0;
        S_FEE_INFO.prototype.uid = 0;

        S_FEE_INFO.create = function create(properties) {
            return new S_FEE_INFO(properties);
        };

        S_FEE_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.fee != null && Object.hasOwnProperty.call(m, "fee"))
                w.uint32(24).int32(m.fee);
            if (m.maxFee != null && Object.hasOwnProperty.call(m, "maxFee"))
                w.uint32(32).int32(m.maxFee);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(40).int32(m.uid);
            return w;
        };

        S_FEE_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_FEE_INFO();
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
                        m.fee = r.int32();
                        break;
                    }
                case 4: {
                        m.maxFee = r.int32();
                        break;
                    }
                case 5: {
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

        S_FEE_INFO.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_FEE_INFO)
                return d;
            var m = new $root.GamePto.S_FEE_INFO();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.fee != null) {
                m.fee = d.fee | 0;
            }
            if (d.maxFee != null) {
                m.maxFee = d.maxFee | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            return m;
        };

        S_FEE_INFO.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10007;
                d.fee = 0;
                d.maxFee = 0;
                d.uid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.fee != null && m.hasOwnProperty("fee")) {
                d.fee = m.fee;
            }
            if (m.maxFee != null && m.hasOwnProperty("maxFee")) {
                d.maxFee = m.maxFee;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            return d;
        };

        S_FEE_INFO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_FEE_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_FEE_INFO";
        };

        return S_FEE_INFO;
    })();

    GamePto.S_DISCARD = (function() {

        function S_DISCARD(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_DISCARD.prototype.cmd = 200;
        S_DISCARD.prototype.scmd = 10008;
        S_DISCARD.prototype.isSuccess = false;
        S_DISCARD.prototype.cardIndex = 0;
        S_DISCARD.prototype.uid = 0;

        S_DISCARD.create = function create(properties) {
            return new S_DISCARD(properties);
        };

        S_DISCARD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
                w.uint32(24).bool(m.isSuccess);
            if (m.cardIndex != null && Object.hasOwnProperty.call(m, "cardIndex"))
                w.uint32(32).int32(m.cardIndex);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(40).int32(m.uid);
            return w;
        };

        S_DISCARD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_DISCARD();
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
                        m.cardIndex = r.int32();
                        break;
                    }
                case 5: {
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

        S_DISCARD.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_DISCARD)
                return d;
            var m = new $root.GamePto.S_DISCARD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.isSuccess != null) {
                m.isSuccess = Boolean(d.isSuccess);
            }
            if (d.cardIndex != null) {
                m.cardIndex = d.cardIndex | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            return m;
        };

        S_DISCARD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10008;
                d.isSuccess = false;
                d.cardIndex = 0;
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
            if (m.cardIndex != null && m.hasOwnProperty("cardIndex")) {
                d.cardIndex = m.cardIndex;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            return d;
        };

        S_DISCARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_DISCARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_DISCARD";
        };

        return S_DISCARD;
    })();

    GamePto.S_USE_CARD = (function() {

        function S_USE_CARD(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_USE_CARD.prototype.cmd = 200;
        S_USE_CARD.prototype.scmd = 10009;
        S_USE_CARD.prototype.isSuccess = false;
        S_USE_CARD.prototype.uid = 0;
        S_USE_CARD.prototype.cardIndex = 0;
        S_USE_CARD.prototype.card = null;

        S_USE_CARD.create = function create(properties) {
            return new S_USE_CARD(properties);
        };

        S_USE_CARD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
                w.uint32(24).bool(m.isSuccess);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(32).int32(m.uid);
            if (m.cardIndex != null && Object.hasOwnProperty.call(m, "cardIndex"))
                w.uint32(40).int32(m.cardIndex);
            if (m.card != null && Object.hasOwnProperty.call(m, "card"))
                $root.GamePto.Card.encode(m.card, w.uint32(50).fork()).ldelim();
            return w;
        };

        S_USE_CARD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_USE_CARD();
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
                        m.uid = r.int32();
                        break;
                    }
                case 5: {
                        m.cardIndex = r.int32();
                        break;
                    }
                case 6: {
                        m.card = $root.GamePto.Card.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_USE_CARD.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_USE_CARD)
                return d;
            var m = new $root.GamePto.S_USE_CARD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.isSuccess != null) {
                m.isSuccess = Boolean(d.isSuccess);
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.cardIndex != null) {
                m.cardIndex = d.cardIndex | 0;
            }
            if (d.card != null) {
                if (typeof d.card !== "object")
                    throw TypeError(".GamePto.S_USE_CARD.card: object expected");
                m.card = $root.GamePto.Card.fromObject(d.card);
            }
            return m;
        };

        S_USE_CARD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10009;
                d.isSuccess = false;
                d.uid = 0;
                d.cardIndex = 0;
                d.card = null;
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
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            if (m.cardIndex != null && m.hasOwnProperty("cardIndex")) {
                d.cardIndex = m.cardIndex;
            }
            if (m.card != null && m.hasOwnProperty("card")) {
                d.card = $root.GamePto.Card.toObject(m.card, o);
            }
            return d;
        };

        S_USE_CARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_USE_CARD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_USE_CARD";
        };

        return S_USE_CARD;
    })();

    GamePto.S_ROUND_END_TIME = (function() {

        function S_ROUND_END_TIME(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ROUND_END_TIME.prototype.cmd = 200;
        S_ROUND_END_TIME.prototype.scmd = 10010;
        S_ROUND_END_TIME.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        S_ROUND_END_TIME.prototype.uid = 0;

        S_ROUND_END_TIME.create = function create(properties) {
            return new S_ROUND_END_TIME(properties);
        };

        S_ROUND_END_TIME.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                w.uint32(24).int64(m.endTime);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(32).int32(m.uid);
            return w;
        };

        S_ROUND_END_TIME.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_ROUND_END_TIME();
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
                        m.endTime = r.int64();
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

        S_ROUND_END_TIME.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_ROUND_END_TIME)
                return d;
            var m = new $root.GamePto.S_ROUND_END_TIME();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
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
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            return m;
        };

        S_ROUND_END_TIME.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10010;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.endTime = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.endTime = o.longs === String ? "0" : 0;
                d.uid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.endTime != null && m.hasOwnProperty("endTime")) {
                if (typeof m.endTime === "number")
                    d.endTime = o.longs === String ? String(m.endTime) : m.endTime;
                else
                    d.endTime = o.longs === String ? $util.Long.prototype.toString.call(m.endTime) : o.longs === Number ? new $util.LongBits(m.endTime.low >>> 0, m.endTime.high >>> 0).toNumber() : m.endTime;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            return d;
        };

        S_ROUND_END_TIME.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_ROUND_END_TIME.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_ROUND_END_TIME";
        };

        return S_ROUND_END_TIME;
    })();

    GamePto.S_MAP_DATA = (function() {

        function S_MAP_DATA(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_MAP_DATA.prototype.cmd = 200;
        S_MAP_DATA.prototype.scmd = 10011;
        S_MAP_DATA.prototype.mapData = null;

        S_MAP_DATA.create = function create(properties) {
            return new S_MAP_DATA(properties);
        };

        S_MAP_DATA.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.mapData != null && Object.hasOwnProperty.call(m, "mapData"))
                $root.GamePto.MapData.encode(m.mapData, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_MAP_DATA.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_MAP_DATA();
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
                        m.mapData = $root.GamePto.MapData.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_MAP_DATA.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_MAP_DATA)
                return d;
            var m = new $root.GamePto.S_MAP_DATA();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.mapData != null) {
                if (typeof d.mapData !== "object")
                    throw TypeError(".GamePto.S_MAP_DATA.mapData: object expected");
                m.mapData = $root.GamePto.MapData.fromObject(d.mapData);
            }
            return m;
        };

        S_MAP_DATA.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10011;
                d.mapData = null;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.mapData != null && m.hasOwnProperty("mapData")) {
                d.mapData = $root.GamePto.MapData.toObject(m.mapData, o);
            }
            return d;
        };

        S_MAP_DATA.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_MAP_DATA.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_MAP_DATA";
        };

        return S_MAP_DATA;
    })();

    GamePto.S_MOVE = (function() {

        function S_MOVE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_MOVE.prototype.cmd = 200;
        S_MOVE.prototype.scmd = 10012;
        S_MOVE.prototype.sourceX = 0;
        S_MOVE.prototype.sourceY = 0;
        S_MOVE.prototype.card = null;
        S_MOVE.prototype.allowMove = false;
        S_MOVE.prototype.uid = 0;

        S_MOVE.create = function create(properties) {
            return new S_MOVE(properties);
        };

        S_MOVE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.sourceX != null && Object.hasOwnProperty.call(m, "sourceX"))
                w.uint32(24).int32(m.sourceX);
            if (m.sourceY != null && Object.hasOwnProperty.call(m, "sourceY"))
                w.uint32(32).int32(m.sourceY);
            if (m.card != null && Object.hasOwnProperty.call(m, "card"))
                $root.GamePto.Card.encode(m.card, w.uint32(42).fork()).ldelim();
            if (m.allowMove != null && Object.hasOwnProperty.call(m, "allowMove"))
                w.uint32(48).bool(m.allowMove);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(56).int32(m.uid);
            return w;
        };

        S_MOVE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_MOVE();
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
                        m.sourceX = r.int32();
                        break;
                    }
                case 4: {
                        m.sourceY = r.int32();
                        break;
                    }
                case 5: {
                        m.card = $root.GamePto.Card.decode(r, r.uint32());
                        break;
                    }
                case 6: {
                        m.allowMove = r.bool();
                        break;
                    }
                case 7: {
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

        S_MOVE.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_MOVE)
                return d;
            var m = new $root.GamePto.S_MOVE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.sourceX != null) {
                m.sourceX = d.sourceX | 0;
            }
            if (d.sourceY != null) {
                m.sourceY = d.sourceY | 0;
            }
            if (d.card != null) {
                if (typeof d.card !== "object")
                    throw TypeError(".GamePto.S_MOVE.card: object expected");
                m.card = $root.GamePto.Card.fromObject(d.card);
            }
            if (d.allowMove != null) {
                m.allowMove = Boolean(d.allowMove);
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            return m;
        };

        S_MOVE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10012;
                d.sourceX = 0;
                d.sourceY = 0;
                d.card = null;
                d.allowMove = false;
                d.uid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.sourceX != null && m.hasOwnProperty("sourceX")) {
                d.sourceX = m.sourceX;
            }
            if (m.sourceY != null && m.hasOwnProperty("sourceY")) {
                d.sourceY = m.sourceY;
            }
            if (m.card != null && m.hasOwnProperty("card")) {
                d.card = $root.GamePto.Card.toObject(m.card, o);
            }
            if (m.allowMove != null && m.hasOwnProperty("allowMove")) {
                d.allowMove = m.allowMove;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            return d;
        };

        S_MOVE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_MOVE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_MOVE";
        };

        return S_MOVE;
    })();

    GamePto.S_ATTACK = (function() {

        function S_ATTACK(p) {
            this.dices = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ATTACK.prototype.cmd = 200;
        S_ATTACK.prototype.scmd = 10013;
        S_ATTACK.prototype.sourceX = 0;
        S_ATTACK.prototype.sourceY = 0;
        S_ATTACK.prototype.sourceId = 0;
        S_ATTACK.prototype.targetX = 0;
        S_ATTACK.prototype.targetY = 0;
        S_ATTACK.prototype.targetId = 0;
        S_ATTACK.prototype.damage = 0;
        S_ATTACK.prototype.targetHealth = 0;
        S_ATTACK.prototype.allowAtk = false;
        S_ATTACK.prototype.uid = 0;
        S_ATTACK.prototype.dices = $util.emptyArray;
        S_ATTACK.prototype.leastAtkTimes = 0;

        S_ATTACK.create = function create(properties) {
            return new S_ATTACK(properties);
        };

        S_ATTACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.sourceX != null && Object.hasOwnProperty.call(m, "sourceX"))
                w.uint32(24).int32(m.sourceX);
            if (m.sourceY != null && Object.hasOwnProperty.call(m, "sourceY"))
                w.uint32(32).int32(m.sourceY);
            if (m.sourceId != null && Object.hasOwnProperty.call(m, "sourceId"))
                w.uint32(40).int32(m.sourceId);
            if (m.targetX != null && Object.hasOwnProperty.call(m, "targetX"))
                w.uint32(48).int32(m.targetX);
            if (m.targetY != null && Object.hasOwnProperty.call(m, "targetY"))
                w.uint32(56).int32(m.targetY);
            if (m.targetId != null && Object.hasOwnProperty.call(m, "targetId"))
                w.uint32(64).int32(m.targetId);
            if (m.damage != null && Object.hasOwnProperty.call(m, "damage"))
                w.uint32(72).int32(m.damage);
            if (m.targetHealth != null && Object.hasOwnProperty.call(m, "targetHealth"))
                w.uint32(80).int32(m.targetHealth);
            if (m.allowAtk != null && Object.hasOwnProperty.call(m, "allowAtk"))
                w.uint32(88).bool(m.allowAtk);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(96).int32(m.uid);
            if (m.dices != null && m.dices.length) {
                w.uint32(106).fork();
                for (var i = 0; i < m.dices.length; ++i)
                    w.int32(m.dices[i]);
                w.ldelim();
            }
            if (m.leastAtkTimes != null && Object.hasOwnProperty.call(m, "leastAtkTimes"))
                w.uint32(112).int32(m.leastAtkTimes);
            return w;
        };

        S_ATTACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_ATTACK();
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
                        m.sourceX = r.int32();
                        break;
                    }
                case 4: {
                        m.sourceY = r.int32();
                        break;
                    }
                case 5: {
                        m.sourceId = r.int32();
                        break;
                    }
                case 6: {
                        m.targetX = r.int32();
                        break;
                    }
                case 7: {
                        m.targetY = r.int32();
                        break;
                    }
                case 8: {
                        m.targetId = r.int32();
                        break;
                    }
                case 9: {
                        m.damage = r.int32();
                        break;
                    }
                case 10: {
                        m.targetHealth = r.int32();
                        break;
                    }
                case 11: {
                        m.allowAtk = r.bool();
                        break;
                    }
                case 12: {
                        m.uid = r.int32();
                        break;
                    }
                case 13: {
                        if (!(m.dices && m.dices.length))
                            m.dices = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.dices.push(r.int32());
                        } else
                            m.dices.push(r.int32());
                        break;
                    }
                case 14: {
                        m.leastAtkTimes = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_ATTACK.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_ATTACK)
                return d;
            var m = new $root.GamePto.S_ATTACK();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.sourceX != null) {
                m.sourceX = d.sourceX | 0;
            }
            if (d.sourceY != null) {
                m.sourceY = d.sourceY | 0;
            }
            if (d.sourceId != null) {
                m.sourceId = d.sourceId | 0;
            }
            if (d.targetX != null) {
                m.targetX = d.targetX | 0;
            }
            if (d.targetY != null) {
                m.targetY = d.targetY | 0;
            }
            if (d.targetId != null) {
                m.targetId = d.targetId | 0;
            }
            if (d.damage != null) {
                m.damage = d.damage | 0;
            }
            if (d.targetHealth != null) {
                m.targetHealth = d.targetHealth | 0;
            }
            if (d.allowAtk != null) {
                m.allowAtk = Boolean(d.allowAtk);
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.dices) {
                if (!Array.isArray(d.dices))
                    throw TypeError(".GamePto.S_ATTACK.dices: array expected");
                m.dices = [];
                for (var i = 0; i < d.dices.length; ++i) {
                    m.dices[i] = d.dices[i] | 0;
                }
            }
            if (d.leastAtkTimes != null) {
                m.leastAtkTimes = d.leastAtkTimes | 0;
            }
            return m;
        };

        S_ATTACK.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.dices = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10013;
                d.sourceX = 0;
                d.sourceY = 0;
                d.sourceId = 0;
                d.targetX = 0;
                d.targetY = 0;
                d.targetId = 0;
                d.damage = 0;
                d.targetHealth = 0;
                d.allowAtk = false;
                d.uid = 0;
                d.leastAtkTimes = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.sourceX != null && m.hasOwnProperty("sourceX")) {
                d.sourceX = m.sourceX;
            }
            if (m.sourceY != null && m.hasOwnProperty("sourceY")) {
                d.sourceY = m.sourceY;
            }
            if (m.sourceId != null && m.hasOwnProperty("sourceId")) {
                d.sourceId = m.sourceId;
            }
            if (m.targetX != null && m.hasOwnProperty("targetX")) {
                d.targetX = m.targetX;
            }
            if (m.targetY != null && m.hasOwnProperty("targetY")) {
                d.targetY = m.targetY;
            }
            if (m.targetId != null && m.hasOwnProperty("targetId")) {
                d.targetId = m.targetId;
            }
            if (m.damage != null && m.hasOwnProperty("damage")) {
                d.damage = m.damage;
            }
            if (m.targetHealth != null && m.hasOwnProperty("targetHealth")) {
                d.targetHealth = m.targetHealth;
            }
            if (m.allowAtk != null && m.hasOwnProperty("allowAtk")) {
                d.allowAtk = m.allowAtk;
            }
            if (m.uid != null && m.hasOwnProperty("uid")) {
                d.uid = m.uid;
            }
            if (m.dices && m.dices.length) {
                d.dices = [];
                for (var j = 0; j < m.dices.length; ++j) {
                    d.dices[j] = m.dices[j];
                }
            }
            if (m.leastAtkTimes != null && m.hasOwnProperty("leastAtkTimes")) {
                d.leastAtkTimes = m.leastAtkTimes;
            }
            return d;
        };

        S_ATTACK.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_ATTACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_ATTACK";
        };

        return S_ATTACK;
    })();

    GamePto.S_ENTITY_DEAD = (function() {

        function S_ENTITY_DEAD(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ENTITY_DEAD.prototype.cmd = 200;
        S_ENTITY_DEAD.prototype.scmd = 10014;
        S_ENTITY_DEAD.prototype.deadCard = null;

        S_ENTITY_DEAD.create = function create(properties) {
            return new S_ENTITY_DEAD(properties);
        };

        S_ENTITY_DEAD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.deadCard != null && Object.hasOwnProperty.call(m, "deadCard"))
                $root.GamePto.Card.encode(m.deadCard, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_ENTITY_DEAD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_ENTITY_DEAD();
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
                        m.deadCard = $root.GamePto.Card.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_ENTITY_DEAD.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_ENTITY_DEAD)
                return d;
            var m = new $root.GamePto.S_ENTITY_DEAD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.deadCard != null) {
                if (typeof d.deadCard !== "object")
                    throw TypeError(".GamePto.S_ENTITY_DEAD.deadCard: object expected");
                m.deadCard = $root.GamePto.Card.fromObject(d.deadCard);
            }
            return m;
        };

        S_ENTITY_DEAD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10014;
                d.deadCard = null;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.deadCard != null && m.hasOwnProperty("deadCard")) {
                d.deadCard = $root.GamePto.Card.toObject(m.deadCard, o);
            }
            return d;
        };

        S_ENTITY_DEAD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_ENTITY_DEAD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_ENTITY_DEAD";
        };

        return S_ENTITY_DEAD;
    })();

    GamePto.S_EVENT_UPDATE = (function() {

        function S_EVENT_UPDATE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_EVENT_UPDATE.prototype.cmd = 200;
        S_EVENT_UPDATE.prototype.scmd = 10015;
        S_EVENT_UPDATE.prototype.card = null;

        S_EVENT_UPDATE.create = function create(properties) {
            return new S_EVENT_UPDATE(properties);
        };

        S_EVENT_UPDATE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.card != null && Object.hasOwnProperty.call(m, "card"))
                $root.GamePto.Card.encode(m.card, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_EVENT_UPDATE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_EVENT_UPDATE();
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
                        m.card = $root.GamePto.Card.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_EVENT_UPDATE.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_EVENT_UPDATE)
                return d;
            var m = new $root.GamePto.S_EVENT_UPDATE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.card != null) {
                if (typeof d.card !== "object")
                    throw TypeError(".GamePto.S_EVENT_UPDATE.card: object expected");
                m.card = $root.GamePto.Card.fromObject(d.card);
            }
            return m;
        };

        S_EVENT_UPDATE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10015;
                d.card = null;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.card != null && m.hasOwnProperty("card")) {
                d.card = $root.GamePto.Card.toObject(m.card, o);
            }
            return d;
        };

        S_EVENT_UPDATE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_EVENT_UPDATE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_EVENT_UPDATE";
        };

        return S_EVENT_UPDATE;
    })();

    GamePto.S_UPDATE_ENTITYS = (function() {

        function S_UPDATE_ENTITYS(p) {
            this.entityCards = [];
            this.tipsList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_UPDATE_ENTITYS.prototype.cmd = 200;
        S_UPDATE_ENTITYS.prototype.scmd = 10016;
        S_UPDATE_ENTITYS.prototype.entityCards = $util.emptyArray;
        S_UPDATE_ENTITYS.prototype.tipsList = $util.emptyArray;

        S_UPDATE_ENTITYS.create = function create(properties) {
            return new S_UPDATE_ENTITYS(properties);
        };

        S_UPDATE_ENTITYS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.entityCards != null && m.entityCards.length) {
                for (var i = 0; i < m.entityCards.length; ++i)
                    $root.GamePto.Card.encode(m.entityCards[i], w.uint32(26).fork()).ldelim();
            }
            if (m.tipsList != null && m.tipsList.length) {
                for (var i = 0; i < m.tipsList.length; ++i)
                    w.uint32(34).string(m.tipsList[i]);
            }
            return w;
        };

        S_UPDATE_ENTITYS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_UPDATE_ENTITYS();
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
                        if (!(m.entityCards && m.entityCards.length))
                            m.entityCards = [];
                        m.entityCards.push($root.GamePto.Card.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
                        if (!(m.tipsList && m.tipsList.length))
                            m.tipsList = [];
                        m.tipsList.push(r.string());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_UPDATE_ENTITYS.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_UPDATE_ENTITYS)
                return d;
            var m = new $root.GamePto.S_UPDATE_ENTITYS();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.entityCards) {
                if (!Array.isArray(d.entityCards))
                    throw TypeError(".GamePto.S_UPDATE_ENTITYS.entityCards: array expected");
                m.entityCards = [];
                for (var i = 0; i < d.entityCards.length; ++i) {
                    if (typeof d.entityCards[i] !== "object")
                        throw TypeError(".GamePto.S_UPDATE_ENTITYS.entityCards: object expected");
                    m.entityCards[i] = $root.GamePto.Card.fromObject(d.entityCards[i]);
                }
            }
            if (d.tipsList) {
                if (!Array.isArray(d.tipsList))
                    throw TypeError(".GamePto.S_UPDATE_ENTITYS.tipsList: array expected");
                m.tipsList = [];
                for (var i = 0; i < d.tipsList.length; ++i) {
                    m.tipsList[i] = String(d.tipsList[i]);
                }
            }
            return m;
        };

        S_UPDATE_ENTITYS.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.entityCards = [];
                d.tipsList = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10016;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.entityCards && m.entityCards.length) {
                d.entityCards = [];
                for (var j = 0; j < m.entityCards.length; ++j) {
                    d.entityCards[j] = $root.GamePto.Card.toObject(m.entityCards[j], o);
                }
            }
            if (m.tipsList && m.tipsList.length) {
                d.tipsList = [];
                for (var j = 0; j < m.tipsList.length; ++j) {
                    d.tipsList[j] = m.tipsList[j];
                }
            }
            return d;
        };

        S_UPDATE_ENTITYS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_UPDATE_ENTITYS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_UPDATE_ENTITYS";
        };

        return S_UPDATE_ENTITYS;
    })();

    GamePto.S_COMMON_EFFECT = (function() {

        function S_COMMON_EFFECT(p) {
            this.dataArr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_COMMON_EFFECT.prototype.cmd = 200;
        S_COMMON_EFFECT.prototype.scmd = 10017;
        S_COMMON_EFFECT.prototype.effectId = 0;
        S_COMMON_EFFECT.prototype.dataArr = $util.emptyArray;

        S_COMMON_EFFECT.create = function create(properties) {
            return new S_COMMON_EFFECT(properties);
        };

        S_COMMON_EFFECT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.effectId != null && Object.hasOwnProperty.call(m, "effectId"))
                w.uint32(24).int32(m.effectId);
            if (m.dataArr != null && m.dataArr.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.dataArr.length; ++i)
                    w.int32(m.dataArr[i]);
                w.ldelim();
            }
            return w;
        };

        S_COMMON_EFFECT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_COMMON_EFFECT();
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
                        m.effectId = r.int32();
                        break;
                    }
                case 4: {
                        if (!(m.dataArr && m.dataArr.length))
                            m.dataArr = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.dataArr.push(r.int32());
                        } else
                            m.dataArr.push(r.int32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_COMMON_EFFECT.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_COMMON_EFFECT)
                return d;
            var m = new $root.GamePto.S_COMMON_EFFECT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.effectId != null) {
                m.effectId = d.effectId | 0;
            }
            if (d.dataArr) {
                if (!Array.isArray(d.dataArr))
                    throw TypeError(".GamePto.S_COMMON_EFFECT.dataArr: array expected");
                m.dataArr = [];
                for (var i = 0; i < d.dataArr.length; ++i) {
                    m.dataArr[i] = d.dataArr[i] | 0;
                }
            }
            return m;
        };

        S_COMMON_EFFECT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.dataArr = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10017;
                d.effectId = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.effectId != null && m.hasOwnProperty("effectId")) {
                d.effectId = m.effectId;
            }
            if (m.dataArr && m.dataArr.length) {
                d.dataArr = [];
                for (var j = 0; j < m.dataArr.length; ++j) {
                    d.dataArr[j] = m.dataArr[j];
                }
            }
            return d;
        };

        S_COMMON_EFFECT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_COMMON_EFFECT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_COMMON_EFFECT";
        };

        return S_COMMON_EFFECT;
    })();

    GamePto.S_FLY_EFFECT = (function() {

        function S_FLY_EFFECT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_FLY_EFFECT.prototype.cmd = 200;
        S_FLY_EFFECT.prototype.scmd = 10018;
        S_FLY_EFFECT.prototype.from = null;
        S_FLY_EFFECT.prototype.target = null;
        S_FLY_EFFECT.prototype.targetShowTips = "";

        S_FLY_EFFECT.create = function create(properties) {
            return new S_FLY_EFFECT(properties);
        };

        S_FLY_EFFECT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                $root.GamePto.Card.encode(m.from, w.uint32(26).fork()).ldelim();
            if (m.target != null && Object.hasOwnProperty.call(m, "target"))
                $root.GamePto.Card.encode(m.target, w.uint32(34).fork()).ldelim();
            if (m.targetShowTips != null && Object.hasOwnProperty.call(m, "targetShowTips"))
                w.uint32(42).string(m.targetShowTips);
            return w;
        };

        S_FLY_EFFECT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_FLY_EFFECT();
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
                        m.from = $root.GamePto.Card.decode(r, r.uint32());
                        break;
                    }
                case 4: {
                        m.target = $root.GamePto.Card.decode(r, r.uint32());
                        break;
                    }
                case 5: {
                        m.targetShowTips = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_FLY_EFFECT.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_FLY_EFFECT)
                return d;
            var m = new $root.GamePto.S_FLY_EFFECT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.from != null) {
                if (typeof d.from !== "object")
                    throw TypeError(".GamePto.S_FLY_EFFECT.from: object expected");
                m.from = $root.GamePto.Card.fromObject(d.from);
            }
            if (d.target != null) {
                if (typeof d.target !== "object")
                    throw TypeError(".GamePto.S_FLY_EFFECT.target: object expected");
                m.target = $root.GamePto.Card.fromObject(d.target);
            }
            if (d.targetShowTips != null) {
                m.targetShowTips = String(d.targetShowTips);
            }
            return m;
        };

        S_FLY_EFFECT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10018;
                d.from = null;
                d.target = null;
                d.targetShowTips = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.from != null && m.hasOwnProperty("from")) {
                d.from = $root.GamePto.Card.toObject(m.from, o);
            }
            if (m.target != null && m.hasOwnProperty("target")) {
                d.target = $root.GamePto.Card.toObject(m.target, o);
            }
            if (m.targetShowTips != null && m.hasOwnProperty("targetShowTips")) {
                d.targetShowTips = m.targetShowTips;
            }
            return d;
        };

        S_FLY_EFFECT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_FLY_EFFECT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_FLY_EFFECT";
        };

        return S_FLY_EFFECT;
    })();

    GamePto.S_SELF_EFFECT = (function() {

        function S_SELF_EFFECT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_SELF_EFFECT.prototype.cmd = 200;
        S_SELF_EFFECT.prototype.scmd = 10019;
        S_SELF_EFFECT.prototype.x = 0;
        S_SELF_EFFECT.prototype.y = 0;

        S_SELF_EFFECT.create = function create(properties) {
            return new S_SELF_EFFECT(properties);
        };

        S_SELF_EFFECT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.x != null && Object.hasOwnProperty.call(m, "x"))
                w.uint32(24).int32(m.x);
            if (m.y != null && Object.hasOwnProperty.call(m, "y"))
                w.uint32(32).int32(m.y);
            return w;
        };

        S_SELF_EFFECT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_SELF_EFFECT();
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
                        m.x = r.int32();
                        break;
                    }
                case 4: {
                        m.y = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_SELF_EFFECT.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_SELF_EFFECT)
                return d;
            var m = new $root.GamePto.S_SELF_EFFECT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.x != null) {
                m.x = d.x | 0;
            }
            if (d.y != null) {
                m.y = d.y | 0;
            }
            return m;
        };

        S_SELF_EFFECT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10019;
                d.x = 0;
                d.y = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.x != null && m.hasOwnProperty("x")) {
                d.x = m.x;
            }
            if (m.y != null && m.hasOwnProperty("y")) {
                d.y = m.y;
            }
            return d;
        };

        S_SELF_EFFECT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_SELF_EFFECT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_SELF_EFFECT";
        };

        return S_SELF_EFFECT;
    })();

    GamePto.S_CARD_DENY = (function() {

        function S_CARD_DENY(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_CARD_DENY.prototype.cmd = 200;
        S_CARD_DENY.prototype.scmd = 10020;
        S_CARD_DENY.prototype.from = null;
        S_CARD_DENY.prototype.target = null;
        S_CARD_DENY.prototype.targetCardIndex = 0;

        S_CARD_DENY.create = function create(properties) {
            return new S_CARD_DENY(properties);
        };

        S_CARD_DENY.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                $root.GamePto.Card.encode(m.from, w.uint32(26).fork()).ldelim();
            if (m.target != null && Object.hasOwnProperty.call(m, "target"))
                $root.GamePto.Card.encode(m.target, w.uint32(34).fork()).ldelim();
            if (m.targetCardIndex != null && Object.hasOwnProperty.call(m, "targetCardIndex"))
                w.uint32(40).int32(m.targetCardIndex);
            return w;
        };

        S_CARD_DENY.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_CARD_DENY();
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
                        m.from = $root.GamePto.Card.decode(r, r.uint32());
                        break;
                    }
                case 4: {
                        m.target = $root.GamePto.Card.decode(r, r.uint32());
                        break;
                    }
                case 5: {
                        m.targetCardIndex = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_CARD_DENY.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_CARD_DENY)
                return d;
            var m = new $root.GamePto.S_CARD_DENY();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.from != null) {
                if (typeof d.from !== "object")
                    throw TypeError(".GamePto.S_CARD_DENY.from: object expected");
                m.from = $root.GamePto.Card.fromObject(d.from);
            }
            if (d.target != null) {
                if (typeof d.target !== "object")
                    throw TypeError(".GamePto.S_CARD_DENY.target: object expected");
                m.target = $root.GamePto.Card.fromObject(d.target);
            }
            if (d.targetCardIndex != null) {
                m.targetCardIndex = d.targetCardIndex | 0;
            }
            return m;
        };

        S_CARD_DENY.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10020;
                d.from = null;
                d.target = null;
                d.targetCardIndex = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.from != null && m.hasOwnProperty("from")) {
                d.from = $root.GamePto.Card.toObject(m.from, o);
            }
            if (m.target != null && m.hasOwnProperty("target")) {
                d.target = $root.GamePto.Card.toObject(m.target, o);
            }
            if (m.targetCardIndex != null && m.hasOwnProperty("targetCardIndex")) {
                d.targetCardIndex = m.targetCardIndex;
            }
            return d;
        };

        S_CARD_DENY.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_CARD_DENY.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_CARD_DENY";
        };

        return S_CARD_DENY;
    })();

    GamePto.S_GAME_OVER = (function() {

        function S_GAME_OVER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GAME_OVER.prototype.cmd = 200;
        S_GAME_OVER.prototype.scmd = 10021;
        S_GAME_OVER.prototype.winnerUid = 0;

        S_GAME_OVER.create = function create(properties) {
            return new S_GAME_OVER(properties);
        };

        S_GAME_OVER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.winnerUid != null && Object.hasOwnProperty.call(m, "winnerUid"))
                w.uint32(24).int32(m.winnerUid);
            return w;
        };

        S_GAME_OVER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_GAME_OVER();
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
                        m.winnerUid = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_GAME_OVER.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_GAME_OVER)
                return d;
            var m = new $root.GamePto.S_GAME_OVER();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.winnerUid != null) {
                m.winnerUid = d.winnerUid | 0;
            }
            return m;
        };

        S_GAME_OVER.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10021;
                d.winnerUid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.winnerUid != null && m.hasOwnProperty("winnerUid")) {
                d.winnerUid = m.winnerUid;
            }
            return d;
        };

        S_GAME_OVER.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_GAME_OVER.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_GAME_OVER";
        };

        return S_GAME_OVER;
    })();

    GamePto.S_RECONNECT = (function() {

        function S_RECONNECT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_RECONNECT.prototype.cmd = 200;
        S_RECONNECT.prototype.scmd = 10022;
        S_RECONNECT.prototype.mapData = null;

        S_RECONNECT.create = function create(properties) {
            return new S_RECONNECT(properties);
        };

        S_RECONNECT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.mapData != null && Object.hasOwnProperty.call(m, "mapData"))
                $root.GamePto.MapData.encode(m.mapData, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_RECONNECT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_RECONNECT();
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
                        m.mapData = $root.GamePto.MapData.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_RECONNECT.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_RECONNECT)
                return d;
            var m = new $root.GamePto.S_RECONNECT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.mapData != null) {
                if (typeof d.mapData !== "object")
                    throw TypeError(".GamePto.S_RECONNECT.mapData: object expected");
                m.mapData = $root.GamePto.MapData.fromObject(d.mapData);
            }
            return m;
        };

        S_RECONNECT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10022;
                d.mapData = null;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.mapData != null && m.hasOwnProperty("mapData")) {
                d.mapData = $root.GamePto.MapData.toObject(m.mapData, o);
            }
            return d;
        };

        S_RECONNECT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_RECONNECT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_RECONNECT";
        };

        return S_RECONNECT;
    })();

    GamePto.S_HANDCARDS_UPDATE = (function() {

        function S_HANDCARDS_UPDATE(p) {
            this.cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_HANDCARDS_UPDATE.prototype.cmd = 200;
        S_HANDCARDS_UPDATE.prototype.scmd = 10023;
        S_HANDCARDS_UPDATE.prototype.uid = 0;
        S_HANDCARDS_UPDATE.prototype.cards = $util.emptyArray;

        S_HANDCARDS_UPDATE.create = function create(properties) {
            return new S_HANDCARDS_UPDATE(properties);
        };

        S_HANDCARDS_UPDATE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(24).int32(m.uid);
            if (m.cards != null && m.cards.length) {
                for (var i = 0; i < m.cards.length; ++i)
                    $root.GamePto.Card.encode(m.cards[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        S_HANDCARDS_UPDATE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto.S_HANDCARDS_UPDATE();
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
                        if (!(m.cards && m.cards.length))
                            m.cards = [];
                        m.cards.push($root.GamePto.Card.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_HANDCARDS_UPDATE.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto.S_HANDCARDS_UPDATE)
                return d;
            var m = new $root.GamePto.S_HANDCARDS_UPDATE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.uid != null) {
                m.uid = d.uid | 0;
            }
            if (d.cards) {
                if (!Array.isArray(d.cards))
                    throw TypeError(".GamePto.S_HANDCARDS_UPDATE.cards: array expected");
                m.cards = [];
                for (var i = 0; i < d.cards.length; ++i) {
                    if (typeof d.cards[i] !== "object")
                        throw TypeError(".GamePto.S_HANDCARDS_UPDATE.cards: object expected");
                    m.cards[i] = $root.GamePto.Card.fromObject(d.cards[i]);
                }
            }
            return m;
        };

        S_HANDCARDS_UPDATE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.cards = [];
            }
            if (o.defaults) {
                d.cmd = 200;
                d.scmd = 10023;
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
            if (m.cards && m.cards.length) {
                d.cards = [];
                for (var j = 0; j < m.cards.length; ++j) {
                    d.cards[j] = $root.GamePto.Card.toObject(m.cards[j], o);
                }
            }
            return d;
        };

        S_HANDCARDS_UPDATE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_HANDCARDS_UPDATE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GamePto.S_HANDCARDS_UPDATE";
        };

        return S_HANDCARDS_UPDATE;
    })();

    return GamePto;
})();

$root.FriendlyMatchPto = (function() {

    var FriendlyMatchPto = {};

    FriendlyMatchPto.C_REQ_MATCH = (function() {

        function C_REQ_MATCH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_REQ_MATCH.prototype.cmd = 201;
        C_REQ_MATCH.prototype.scmd = 1;
        C_REQ_MATCH.prototype.targetUid = 0;

        C_REQ_MATCH.create = function create(properties) {
            return new C_REQ_MATCH(properties);
        };

        C_REQ_MATCH.encode = function encode(m, w) {
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

        C_REQ_MATCH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.C_REQ_MATCH();
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

        C_REQ_MATCH.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.C_REQ_MATCH)
                return d;
            var m = new $root.FriendlyMatchPto.C_REQ_MATCH();
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

        C_REQ_MATCH.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
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

        C_REQ_MATCH.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_REQ_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_REQ_MATCH";
        };

        return C_REQ_MATCH;
    })();

    FriendlyMatchPto.S_REQ_MATCH = (function() {

        function S_REQ_MATCH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_REQ_MATCH.prototype.cmd = 201;
        S_REQ_MATCH.prototype.scmd = 2;
        S_REQ_MATCH.prototype.code = 0;
        S_REQ_MATCH.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        S_REQ_MATCH.create = function create(properties) {
            return new S_REQ_MATCH(properties);
        };

        S_REQ_MATCH.encode = function encode(m, w) {
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

        S_REQ_MATCH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.S_REQ_MATCH();
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

        S_REQ_MATCH.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.S_REQ_MATCH)
                return d;
            var m = new $root.FriendlyMatchPto.S_REQ_MATCH();
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

        S_REQ_MATCH.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
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

        S_REQ_MATCH.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_REQ_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_REQ_MATCH";
        };

        return S_REQ_MATCH;
    })();

    FriendlyMatchPto.C_CANCEL_REQ_MATCH = (function() {

        function C_CANCEL_REQ_MATCH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_CANCEL_REQ_MATCH.prototype.cmd = 201;
        C_CANCEL_REQ_MATCH.prototype.scmd = 3;

        C_CANCEL_REQ_MATCH.create = function create(properties) {
            return new C_CANCEL_REQ_MATCH(properties);
        };

        C_CANCEL_REQ_MATCH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_CANCEL_REQ_MATCH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.C_CANCEL_REQ_MATCH();
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

        C_CANCEL_REQ_MATCH.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.C_CANCEL_REQ_MATCH)
                return d;
            var m = new $root.FriendlyMatchPto.C_CANCEL_REQ_MATCH();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        C_CANCEL_REQ_MATCH.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 3;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            return d;
        };

        C_CANCEL_REQ_MATCH.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_CANCEL_REQ_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_CANCEL_REQ_MATCH";
        };

        return C_CANCEL_REQ_MATCH;
    })();

    FriendlyMatchPto.S_REQ_MATCH_RESULT = (function() {

        function S_REQ_MATCH_RESULT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_REQ_MATCH_RESULT.prototype.cmd = 201;
        S_REQ_MATCH_RESULT.prototype.scmd = 4;
        S_REQ_MATCH_RESULT.prototype.result = false;
        S_REQ_MATCH_RESULT.prototype.targetUid = 0;

        S_REQ_MATCH_RESULT.create = function create(properties) {
            return new S_REQ_MATCH_RESULT(properties);
        };

        S_REQ_MATCH_RESULT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                w.uint32(24).bool(m.result);
            if (m.targetUid != null && Object.hasOwnProperty.call(m, "targetUid"))
                w.uint32(32).int32(m.targetUid);
            return w;
        };

        S_REQ_MATCH_RESULT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.S_REQ_MATCH_RESULT();
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
                        m.result = r.bool();
                        break;
                    }
                case 4: {
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

        S_REQ_MATCH_RESULT.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.S_REQ_MATCH_RESULT)
                return d;
            var m = new $root.FriendlyMatchPto.S_REQ_MATCH_RESULT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.result != null) {
                m.result = Boolean(d.result);
            }
            if (d.targetUid != null) {
                m.targetUid = d.targetUid | 0;
            }
            return m;
        };

        S_REQ_MATCH_RESULT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 4;
                d.result = false;
                d.targetUid = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.result != null && m.hasOwnProperty("result")) {
                d.result = m.result;
            }
            if (m.targetUid != null && m.hasOwnProperty("targetUid")) {
                d.targetUid = m.targetUid;
            }
            return d;
        };

        S_REQ_MATCH_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_REQ_MATCH_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_REQ_MATCH_RESULT";
        };

        return S_REQ_MATCH_RESULT;
    })();

    FriendlyMatchPto.S_MATCH = (function() {

        function S_MATCH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_MATCH.prototype.cmd = 201;
        S_MATCH.prototype.scmd = 5;
        S_MATCH.prototype.friendUid = 0;
        S_MATCH.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        S_MATCH.create = function create(properties) {
            return new S_MATCH(properties);
        };

        S_MATCH.encode = function encode(m, w) {
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

        S_MATCH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.S_MATCH();
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

        S_MATCH.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.S_MATCH)
                return d;
            var m = new $root.FriendlyMatchPto.S_MATCH();
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

        S_MATCH.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
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

        S_MATCH.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_MATCH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_MATCH";
        };

        return S_MATCH;
    })();

    FriendlyMatchPto.C_REQ_MATCH_RESULT = (function() {

        function C_REQ_MATCH_RESULT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_REQ_MATCH_RESULT.prototype.cmd = 201;
        C_REQ_MATCH_RESULT.prototype.scmd = 6;
        C_REQ_MATCH_RESULT.prototype.result = false;

        C_REQ_MATCH_RESULT.create = function create(properties) {
            return new C_REQ_MATCH_RESULT(properties);
        };

        C_REQ_MATCH_RESULT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                w.uint32(24).bool(m.result);
            return w;
        };

        C_REQ_MATCH_RESULT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.C_REQ_MATCH_RESULT();
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

        C_REQ_MATCH_RESULT.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.C_REQ_MATCH_RESULT)
                return d;
            var m = new $root.FriendlyMatchPto.C_REQ_MATCH_RESULT();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.result != null) {
                m.result = Boolean(d.result);
            }
            return m;
        };

        C_REQ_MATCH_RESULT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 6;
                d.result = false;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.result != null && m.hasOwnProperty("result")) {
                d.result = m.result;
            }
            return d;
        };

        C_REQ_MATCH_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_REQ_MATCH_RESULT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_REQ_MATCH_RESULT";
        };

        return C_REQ_MATCH_RESULT;
    })();

    FriendlyMatchPto.S_MATCH_CARD_GROUP = (function() {

        function S_MATCH_CARD_GROUP(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_MATCH_CARD_GROUP.prototype.cmd = 201;
        S_MATCH_CARD_GROUP.prototype.scmd = 7;
        S_MATCH_CARD_GROUP.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        S_MATCH_CARD_GROUP.create = function create(properties) {
            return new S_MATCH_CARD_GROUP(properties);
        };

        S_MATCH_CARD_GROUP.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                w.uint32(24).int64(m.endTime);
            return w;
        };

        S_MATCH_CARD_GROUP.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.S_MATCH_CARD_GROUP();
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

        S_MATCH_CARD_GROUP.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.S_MATCH_CARD_GROUP)
                return d;
            var m = new $root.FriendlyMatchPto.S_MATCH_CARD_GROUP();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
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

        S_MATCH_CARD_GROUP.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 7;
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
            if (m.endTime != null && m.hasOwnProperty("endTime")) {
                if (typeof m.endTime === "number")
                    d.endTime = o.longs === String ? String(m.endTime) : m.endTime;
                else
                    d.endTime = o.longs === String ? $util.Long.prototype.toString.call(m.endTime) : o.longs === Number ? new $util.LongBits(m.endTime.low >>> 0, m.endTime.high >>> 0).toNumber() : m.endTime;
            }
            return d;
        };

        S_MATCH_CARD_GROUP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_MATCH_CARD_GROUP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_MATCH_CARD_GROUP";
        };

        return S_MATCH_CARD_GROUP;
    })();

    FriendlyMatchPto.C_GROUP_CHOOSE = (function() {

        function C_GROUP_CHOOSE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_GROUP_CHOOSE.prototype.cmd = 201;
        C_GROUP_CHOOSE.prototype.scmd = 8;
        C_GROUP_CHOOSE.prototype.cardGroupId = 0;

        C_GROUP_CHOOSE.create = function create(properties) {
            return new C_GROUP_CHOOSE(properties);
        };

        C_GROUP_CHOOSE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.cardGroupId != null && Object.hasOwnProperty.call(m, "cardGroupId"))
                w.uint32(24).int32(m.cardGroupId);
            return w;
        };

        C_GROUP_CHOOSE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.C_GROUP_CHOOSE();
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
                        m.cardGroupId = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_GROUP_CHOOSE.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.C_GROUP_CHOOSE)
                return d;
            var m = new $root.FriendlyMatchPto.C_GROUP_CHOOSE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.cardGroupId != null) {
                m.cardGroupId = d.cardGroupId | 0;
            }
            return m;
        };

        C_GROUP_CHOOSE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 8;
                d.cardGroupId = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.cardGroupId != null && m.hasOwnProperty("cardGroupId")) {
                d.cardGroupId = m.cardGroupId;
            }
            return d;
        };

        C_GROUP_CHOOSE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_GROUP_CHOOSE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_GROUP_CHOOSE";
        };

        return C_GROUP_CHOOSE;
    })();

    FriendlyMatchPto.C_MATCH_CANCEL_GROUP = (function() {

        function C_MATCH_CANCEL_GROUP(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_MATCH_CANCEL_GROUP.prototype.cmd = 201;
        C_MATCH_CANCEL_GROUP.prototype.scmd = 9;

        C_MATCH_CANCEL_GROUP.create = function create(properties) {
            return new C_MATCH_CANCEL_GROUP(properties);
        };

        C_MATCH_CANCEL_GROUP.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_MATCH_CANCEL_GROUP.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.C_MATCH_CANCEL_GROUP();
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

        C_MATCH_CANCEL_GROUP.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.C_MATCH_CANCEL_GROUP)
                return d;
            var m = new $root.FriendlyMatchPto.C_MATCH_CANCEL_GROUP();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        C_MATCH_CANCEL_GROUP.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 9;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            return d;
        };

        C_MATCH_CANCEL_GROUP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_MATCH_CANCEL_GROUP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_MATCH_CANCEL_GROUP";
        };

        return C_MATCH_CANCEL_GROUP;
    })();

    FriendlyMatchPto.C_MATCH_LEAVE = (function() {

        function C_MATCH_LEAVE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_MATCH_LEAVE.prototype.cmd = 201;
        C_MATCH_LEAVE.prototype.scmd = 10;

        C_MATCH_LEAVE.create = function create(properties) {
            return new C_MATCH_LEAVE(properties);
        };

        C_MATCH_LEAVE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_MATCH_LEAVE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.C_MATCH_LEAVE();
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

        C_MATCH_LEAVE.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.C_MATCH_LEAVE)
                return d;
            var m = new $root.FriendlyMatchPto.C_MATCH_LEAVE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        C_MATCH_LEAVE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 10;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            return d;
        };

        C_MATCH_LEAVE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_MATCH_LEAVE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.C_MATCH_LEAVE";
        };

        return C_MATCH_LEAVE;
    })();

    FriendlyMatchPto.S_MATCH_STOP = (function() {

        function S_MATCH_STOP(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_MATCH_STOP.prototype.cmd = 201;
        S_MATCH_STOP.prototype.scmd = 11;
        S_MATCH_STOP.prototype.code = 0;

        S_MATCH_STOP.create = function create(properties) {
            return new S_MATCH_STOP(properties);
        };

        S_MATCH_STOP.encode = function encode(m, w) {
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

        S_MATCH_STOP.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.S_MATCH_STOP();
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

        S_MATCH_STOP.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.S_MATCH_STOP)
                return d;
            var m = new $root.FriendlyMatchPto.S_MATCH_STOP();
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

        S_MATCH_STOP.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 11;
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

        S_MATCH_STOP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_MATCH_STOP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_MATCH_STOP";
        };

        return S_MATCH_STOP;
    })();

    FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE = (function() {

        function S_FRIEND_GROUP_STATUS_CHANGE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_FRIEND_GROUP_STATUS_CHANGE.prototype.cmd = 201;
        S_FRIEND_GROUP_STATUS_CHANGE.prototype.scmd = 12;
        S_FRIEND_GROUP_STATUS_CHANGE.prototype.isChoose = false;

        S_FRIEND_GROUP_STATUS_CHANGE.create = function create(properties) {
            return new S_FRIEND_GROUP_STATUS_CHANGE(properties);
        };

        S_FRIEND_GROUP_STATUS_CHANGE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.isChoose != null && Object.hasOwnProperty.call(m, "isChoose"))
                w.uint32(24).bool(m.isChoose);
            return w;
        };

        S_FRIEND_GROUP_STATUS_CHANGE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE();
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
                        m.isChoose = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_FRIEND_GROUP_STATUS_CHANGE.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE)
                return d;
            var m = new $root.FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.isChoose != null) {
                m.isChoose = Boolean(d.isChoose);
            }
            return m;
        };

        S_FRIEND_GROUP_STATUS_CHANGE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 12;
                d.isChoose = false;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.isChoose != null && m.hasOwnProperty("isChoose")) {
                d.isChoose = m.isChoose;
            }
            return d;
        };

        S_FRIEND_GROUP_STATUS_CHANGE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_FRIEND_GROUP_STATUS_CHANGE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendlyMatchPto.S_FRIEND_GROUP_STATUS_CHANGE";
        };

        return S_FRIEND_GROUP_STATUS_CHANGE;
    })();

    FriendlyMatchPto.S_GROUP_CHOOSE_RESULT = (function() {

        function S_GROUP_CHOOSE_RESULT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GROUP_CHOOSE_RESULT.prototype.cmd = 201;
        S_GROUP_CHOOSE_RESULT.prototype.scmd = 13;
        S_GROUP_CHOOSE_RESULT.prototype.code = 0;

        S_GROUP_CHOOSE_RESULT.create = function create(properties) {
            return new S_GROUP_CHOOSE_RESULT(properties);
        };

        S_GROUP_CHOOSE_RESULT.encode = function encode(m, w) {
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

        S_GROUP_CHOOSE_RESULT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendlyMatchPto.S_GROUP_CHOOSE_RESULT();
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

        S_GROUP_CHOOSE_RESULT.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendlyMatchPto.S_GROUP_CHOOSE_RESULT)
                return d;
            var m = new $root.FriendlyMatchPto.S_GROUP_CHOOSE_RESULT();
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

        S_GROUP_CHOOSE_RESULT.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 201;
                d.scmd = 13;
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

        S_GROUP_CHOOSE_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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

module.exports = $root;
