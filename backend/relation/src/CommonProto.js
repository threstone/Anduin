/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.FriendPto = (function() {

    var FriendPto = {};

    FriendPto.C_FRIEND_INFO = (function() {

        function C_FRIEND_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_FRIEND_INFO.prototype.cmd = 3;
        C_FRIEND_INFO.prototype.scmd = 1;

        C_FRIEND_INFO.create = function create(properties) {
            return new C_FRIEND_INFO(properties);
        };

        C_FRIEND_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_FRIEND_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_FRIEND_INFO();
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

        C_FRIEND_INFO.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendPto.C_FRIEND_INFO)
                return d;
            var m = new $root.FriendPto.C_FRIEND_INFO();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        C_FRIEND_INFO.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 3;
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

        C_FRIEND_INFO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_FRIEND_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.C_FRIEND_INFO";
        };

        return C_FRIEND_INFO;
    })();

    FriendPto.S_FRIEND_INFO = (function() {

        function S_FRIEND_INFO(p) {
            this.list = [];
            this.reqAddList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_FRIEND_INFO.prototype.cmd = 3;
        S_FRIEND_INFO.prototype.scmd = 2;
        S_FRIEND_INFO.prototype.list = $util.emptyArray;
        S_FRIEND_INFO.prototype.reqAddList = $util.emptyArray;

        S_FRIEND_INFO.create = function create(properties) {
            return new S_FRIEND_INFO(properties);
        };

        S_FRIEND_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.list != null && m.list.length) {
                for (var i = 0; i < m.list.length; ++i)
                    $root.FriendPto.Friend.encode(m.list[i], w.uint32(26).fork()).ldelim();
            }
            if (m.reqAddList != null && m.reqAddList.length) {
                for (var i = 0; i < m.reqAddList.length; ++i)
                    $root.FriendPto.Friend.encode(m.reqAddList[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        S_FRIEND_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_FRIEND_INFO();
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
                        if (!(m.list && m.list.length))
                            m.list = [];
                        m.list.push($root.FriendPto.Friend.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
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

        S_FRIEND_INFO.fromObject = function fromObject(d) {
            if (d instanceof $root.FriendPto.S_FRIEND_INFO)
                return d;
            var m = new $root.FriendPto.S_FRIEND_INFO();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.list) {
                if (!Array.isArray(d.list))
                    throw TypeError(".FriendPto.S_FRIEND_INFO.list: array expected");
                m.list = [];
                for (var i = 0; i < d.list.length; ++i) {
                    if (typeof d.list[i] !== "object")
                        throw TypeError(".FriendPto.S_FRIEND_INFO.list: object expected");
                    m.list[i] = $root.FriendPto.Friend.fromObject(d.list[i]);
                }
            }
            if (d.reqAddList) {
                if (!Array.isArray(d.reqAddList))
                    throw TypeError(".FriendPto.S_FRIEND_INFO.reqAddList: array expected");
                m.reqAddList = [];
                for (var i = 0; i < d.reqAddList.length; ++i) {
                    if (typeof d.reqAddList[i] !== "object")
                        throw TypeError(".FriendPto.S_FRIEND_INFO.reqAddList: object expected");
                    m.reqAddList[i] = $root.FriendPto.Friend.fromObject(d.reqAddList[i]);
                }
            }
            return m;
        };

        S_FRIEND_INFO.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.list = [];
                d.reqAddList = [];
            }
            if (o.defaults) {
                d.cmd = 3;
                d.scmd = 2;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.list && m.list.length) {
                d.list = [];
                for (var j = 0; j < m.list.length; ++j) {
                    d.list[j] = $root.FriendPto.Friend.toObject(m.list[j], o);
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

        S_FRIEND_INFO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        S_FRIEND_INFO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FriendPto.S_FRIEND_INFO";
        };

        return S_FRIEND_INFO;
    })();

    FriendPto.C_ADD_FRIEND = (function() {

        function C_ADD_FRIEND(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_ADD_FRIEND.prototype.cmd = 3;
        C_ADD_FRIEND.prototype.scmd = 3;
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
                d.scmd = 3;
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
        S_ADD_FRIEND_REQ.prototype.scmd = 4;
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
        C_ADD_FRIEND_REQ_RESULT.prototype.scmd = 5;
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
                d.scmd = 5;
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
        S_FRIEND_CHANGE.prototype.scmd = 6;
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
                d.scmd = 6;
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
        S_ADD_FRIEND.prototype.scmd = 7;
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
                d.scmd = 7;
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

    ChatPto.C_SEND_PRIVATE_MESSAGE = (function() {

        function C_SEND_PRIVATE_MESSAGE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_SEND_PRIVATE_MESSAGE.prototype.cmd = 100;
        C_SEND_PRIVATE_MESSAGE.prototype.scmd = 1;
        C_SEND_PRIVATE_MESSAGE.prototype.uid = 0;
        C_SEND_PRIVATE_MESSAGE.prototype.msg = "";

        C_SEND_PRIVATE_MESSAGE.create = function create(properties) {
            return new C_SEND_PRIVATE_MESSAGE(properties);
        };

        C_SEND_PRIVATE_MESSAGE.encode = function encode(m, w) {
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
            return w;
        };

        C_SEND_PRIVATE_MESSAGE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ChatPto.C_SEND_PRIVATE_MESSAGE();
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
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_SEND_PRIVATE_MESSAGE.fromObject = function fromObject(d) {
            if (d instanceof $root.ChatPto.C_SEND_PRIVATE_MESSAGE)
                return d;
            var m = new $root.ChatPto.C_SEND_PRIVATE_MESSAGE();
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
            return m;
        };

        C_SEND_PRIVATE_MESSAGE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 100;
                d.scmd = 1;
                d.uid = 0;
                d.msg = "";
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
            return d;
        };

        C_SEND_PRIVATE_MESSAGE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_SEND_PRIVATE_MESSAGE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatPto.C_SEND_PRIVATE_MESSAGE";
        };

        return C_SEND_PRIVATE_MESSAGE;
    })();

    ChatPto.C_SEND_MESSAGE_TO_ALL = (function() {

        function C_SEND_MESSAGE_TO_ALL(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_SEND_MESSAGE_TO_ALL.prototype.cmd = 100;
        C_SEND_MESSAGE_TO_ALL.prototype.scmd = 2;
        C_SEND_MESSAGE_TO_ALL.prototype.msg = "";

        C_SEND_MESSAGE_TO_ALL.create = function create(properties) {
            return new C_SEND_MESSAGE_TO_ALL(properties);
        };

        C_SEND_MESSAGE_TO_ALL.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
                w.uint32(26).string(m.msg);
            return w;
        };

        C_SEND_MESSAGE_TO_ALL.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ChatPto.C_SEND_MESSAGE_TO_ALL();
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
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_SEND_MESSAGE_TO_ALL.fromObject = function fromObject(d) {
            if (d instanceof $root.ChatPto.C_SEND_MESSAGE_TO_ALL)
                return d;
            var m = new $root.ChatPto.C_SEND_MESSAGE_TO_ALL();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.msg != null) {
                m.msg = String(d.msg);
            }
            return m;
        };

        C_SEND_MESSAGE_TO_ALL.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 100;
                d.scmd = 2;
                d.msg = "";
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
            return d;
        };

        C_SEND_MESSAGE_TO_ALL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        C_SEND_MESSAGE_TO_ALL.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatPto.C_SEND_MESSAGE_TO_ALL";
        };

        return C_SEND_MESSAGE_TO_ALL;
    })();

    ChatPto.S_CHAT_MESSAGE = (function() {

        function S_CHAT_MESSAGE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_CHAT_MESSAGE.prototype.cmd = 100;
        S_CHAT_MESSAGE.prototype.scmd = 3;
        S_CHAT_MESSAGE.prototype.msg = "";
        S_CHAT_MESSAGE.prototype.nick = "";
        S_CHAT_MESSAGE.prototype.uid = 0;
        S_CHAT_MESSAGE.prototype.isPrivateMsg = false;

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
            if (m.isPrivateMsg != null && Object.hasOwnProperty.call(m, "isPrivateMsg"))
                w.uint32(48).bool(m.isPrivateMsg);
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
                        m.isPrivateMsg = r.bool();
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
            if (d.isPrivateMsg != null) {
                m.isPrivateMsg = Boolean(d.isPrivateMsg);
            }
            return m;
        };

        S_CHAT_MESSAGE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 100;
                d.scmd = 3;
                d.msg = "";
                d.nick = "";
                d.uid = 0;
                d.isPrivateMsg = false;
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
            if (m.isPrivateMsg != null && m.hasOwnProperty("isPrivateMsg")) {
                d.isPrivateMsg = m.isPrivateMsg;
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

module.exports = $root;