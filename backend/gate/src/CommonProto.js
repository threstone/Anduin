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
        S_LOGIN.prototype.roomId = 0;
        S_LOGIN.prototype.gameId = 0;

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
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(48).int32(m.roomId);
            if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
                w.uint32(56).int32(m.gameId);
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
                        m.roomId = r.int32();
                        break;
                    }
                case 7: {
                        m.gameId = r.int32();
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
            if (d.roomId != null) {
                m.roomId = d.roomId | 0;
            }
            if (d.gameId != null) {
                m.gameId = d.gameId | 0;
            }
            return m;
        };

        S_LOGIN.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1;
                d.scmd = 2;
                d.isSuccess = false;
                d.nick = "";
                d.headIndex = 0;
                d.roomId = 0;
                d.gameId = 0;
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
            if (m.roomId != null && m.hasOwnProperty("roomId")) {
                d.roomId = m.roomId;
            }
            if (m.gameId != null && m.hasOwnProperty("gameId")) {
                d.gameId = m.gameId;
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

module.exports = $root;
