/**
 * AgoraWebSDK_N-v4.6.3-0-g91da319d Copyright AgoraInc.
 */

/*
 Determine if an object is a Buffer

 @author   Feross Aboukhadijeh <https://feross.org>
 @license  MIT
 *****************************************************************************
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*****************************************************************************/
'use strict';
!function (kb, Jb) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = Jb() : "function" == typeof define && define.amd ? define(Jb) : (kb = "undefined" != typeof globalThis ? globalThis : kb || self).AgoraRTC = Jb()
}(this, function () {
    function kb(d, f, a) {
        return d(a = {
            path: f, exports: {}, require: function (a, c) {
                throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
            }
        }, a.exports), a.exports
    }

    function Jb(d, f, a) {
        return (d = d.match(f)) && d.length >= a && sa(d[a], 10)
    }

    function qc(d,
                f, a) {
        if (d.RTCPeerConnection) {
            d = d.RTCPeerConnection.prototype;
            var b = d.addEventListener;
            d.addEventListener = function (c, d) {
                if (c !== f) return b.apply(this, arguments);
                let e = b => {
                    (b = a(b)) && d(b)
                };
                return this._eventMap = this._eventMap || {}, this._eventMap[d] = e, b.apply(this, [c, e])
            };
            var c = d.removeEventListener;
            d.removeEventListener = function (a, b) {
                if (a !== f || !this._eventMap || !this._eventMap[b]) return c.apply(this, arguments);
                let d = this._eventMap[b];
                return delete this._eventMap[b], c.apply(this, [a, d])
            };
            X(d, "on" + f, {
                get() {
                    return this["_on" +
                    f]
                }, set(a) {
                    this["_on" + f] && (this.removeEventListener(f, this["_on" + f]), delete this["_on" + f]);
                    a && this.addEventListener(f, this["_on" + f] = a)
                }, enumerable: !0, configurable: !0
            })
        }
    }

    function Nl(d) {
        return "boolean" != typeof d ? Error("Argument type: " + typeof d + ". Please use a boolean.") : (Ig = d, d ? "adapter.js logging disabled" : "adapter.js logging enabled")
    }

    function Ol(d) {
        return "boolean" != typeof d ? Error("Argument type: " + typeof d + ". Please use a boolean.") : (Jg = !d, "adapter.js deprecation warnings " + (d ? "disabled" : "enabled"))
    }

    function ub() {
        "object" != typeof window || Ig || "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
    }

    function Cd(d, f) {
        Jg && console.warn(d + " is deprecated, please use " + f + " instead.")
    }

    function Kb(d) {
        let {navigator: f} = d, a = {browser: null, version: null};
        if (void 0 === d || !d.navigator) return a.browser = "Not a browser.", a;
        if (f.mozGetUserMedia) a.browser = "firefox", a.version = Jb(f.userAgent, /Firefox\/(\d+)\./, 1); else if (f.webkitGetUserMedia || !1 === d.isSecureContext && d.webkitRTCPeerConnection &&
            !d.RTCIceGatherer) a.browser = "chrome", a.version = Jb(f.userAgent, /Chrom(e|ium)\/(\d+)\./, 2); else if (f.mediaDevices && f.userAgent.match(/Edge\/(\d+).(\d+)$/)) a.browser = "edge", a.version = Jb(f.userAgent, /Edge\/(\d+).(\d+)$/, 2); else {
            if (!d.RTCPeerConnection || !f.userAgent.match(/AppleWebKit\/(\d+)\./)) return a.browser = "Not a supported browser.", a;
            a.browser = "safari";
            a.version = Jb(f.userAgent, /AppleWebKit\/(\d+)\./, 1);
            a.supportsUnifiedPlan = d.RTCRtpTransceiver && "currentDirection" in d.RTCRtpTransceiver.prototype
        }
        return a
    }

    function Kg(d) {
        var f;
        return "[object Object]" === Object.prototype.toString.call(d) ? Qc(f = aa(d)).call(f, function (a, b) {
            var c = "[object Object]" === Object.prototype.toString.call(d[b]);
            let e = c ? Kg(d[b]) : d[b];
            c = c && !aa(e).length;
            return void 0 === e || c ? a : Ia(a, {[b]: e})
        }, {}) : d
    }

    function Lg(d, f, a) {
        let b = a ? "outbound-rtp" : "inbound-rtp", c = new ha;
        if (null === f) return c;
        let e = [];
        return r(d).call(d, a => {
            "track" === a.type && a.trackIdentifier === f.id && e.push(a)
        }), r(e).call(e, a => {
            r(d).call(d, e => {
                e.type === b && e.trackId === a.id && function F(a,
                                                                 b, c) {
                    var d;
                    b && !c.has(b.id) && (c.set(b.id, b), r(d = aa(b)).call(d, d => {
                        if (Mg(d).call(d, "Id")) F(a, a.get(b[d]), c); else if (Mg(d).call(d, "Ids")) {
                            var e;
                            r(e = b[d]).call(e, b => {
                                F(a, a.get(b), c)
                            })
                        }
                    }))
                }(d, e, c)
            })
        }), c
    }

    function Ng(d) {
        let f = d && d.navigator;
        if (f.mediaDevices) {
            var a = Kb(d), b = function (a) {
                var b;
                if ("object" != typeof a || a.mandatory || a.optional) return a;
                const c = {};
                var d;
                (r(b = aa(a)).call(b, b => {
                    if ("require" !== b && "advanced" !== b && "mediaSource" !== b) {
                        var d = "object" == typeof a[b] ? a[b] : {ideal: a[b]};
                        void 0 !== d.exact && "number" ==
                        typeof d.exact && (d.min = d.max = d.exact);
                        var e = function (a, b) {
                            return a ? a + b.charAt(0).toUpperCase() + Da(b).call(b, 1) : "deviceId" === b ? "sourceId" : b
                        };
                        if (void 0 !== d.ideal) {
                            c.optional = c.optional || [];
                            let a = {};
                            "number" == typeof d.ideal ? (a[e("min", b)] = d.ideal, c.optional.push(a), a = {}, a[e("max", b)] = d.ideal, c.optional.push(a)) : (a[e("", b)] = d.ideal, c.optional.push(a))
                        }
                        var g;
                        void 0 !== d.exact && "number" != typeof d.exact ? (c.mandatory = c.mandatory || {}, c.mandatory[e("", b)] = d.exact) : r(g = ["min", "max"]).call(g, a => {
                            void 0 !== d[a] &&
                            (c.mandatory = c.mandatory || {}, c.mandatory[e(a, b)] = d[a])
                        })
                    }
                }), a.advanced) && (c.optional = m(d = c.optional || []).call(d, a.advanced));
                return c
            }, c = function (c, d) {
                if (61 <= a.version) return d(c);
                if ((c = JSON.parse(w(c))) && "object" == typeof c.audio) {
                    var e = function (a, b, c) {
                        b in a && !(c in a) && (a[c] = a[b], delete a[b])
                    };
                    e((c = JSON.parse(w(c))).audio, "autoGainControl", "googAutoGainControl");
                    e(c.audio, "noiseSuppression", "googNoiseSuppression");
                    c.audio = b(c.audio)
                }
                if (c && "object" == typeof c.video) {
                    let g = c.video.facingMode;
                    g = g &&
                        ("object" == typeof g ? g : {ideal: g});
                    e = 66 > a.version;
                    if (!(!g || "user" !== g.exact && "environment" !== g.exact && "user" !== g.ideal && "environment" !== g.ideal || f.mediaDevices.getSupportedConstraints && f.mediaDevices.getSupportedConstraints().facingMode && !e)) {
                        let a;
                        if (delete c.video.facingMode, "environment" === g.exact || "environment" === g.ideal ? a = ["back", "rear"] : "user" !== g.exact && "user" !== g.ideal || (a = ["front"]), a) return f.mediaDevices.enumerateDevices().then(e => {
                            e = I(e).call(e, a => "videoinput" === a.kind);
                            let h = S(e).call(e,
                                b => Og(a).call(a, a => {
                                    var c;
                                    return ia(c = b.label.toLowerCase()).call(c, a)
                                }));
                            return !h && e.length && ia(a).call(a, "back") && (h = e[e.length - 1]), h && (c.video.deviceId = g.exact ? {exact: h.deviceId} : {ideal: h.deviceId}), c.video = b(c.video), Pg("chrome: " + w(c)), d(c)
                        })
                    }
                    c.video = b(c.video)
                }
                return Pg("chrome: " + w(c)), d(c)
            }, e = function (b) {
                return 64 <= a.version ? b : {
                    name: {
                        PermissionDeniedError: "NotAllowedError",
                        PermissionDismissedError: "NotAllowedError",
                        InvalidStateError: "NotAllowedError",
                        DevicesNotFoundError: "NotFoundError",
                        ConstraintNotSatisfiedError: "OverconstrainedError",
                        TrackStartError: "NotReadableError",
                        MediaDeviceFailedDueToShutdown: "NotAllowedError",
                        MediaDeviceKillSwitchOn: "NotAllowedError",
                        TabCaptureError: "AbortError",
                        ScreenCaptureError: "AbortError",
                        DeviceCaptureError: "AbortError"
                    }[b.name] || b.name, message: b.message, constraint: b.constraint || b.constraintName, toString() {
                        return this.name + (this.message && ": ") + this.message
                    }
                }
            };
            d = function (a, b, d) {
                c(a, a => {
                    f.webkitGetUserMedia(a, b, a => {
                        d && d(e(a))
                    })
                })
            };
            if (f.getUserMedia = pa(d).call(d, f), f.mediaDevices.getUserMedia) {
                var g;
                let a = pa(g = f.mediaDevices.getUserMedia).call(g, f.mediaDevices);
                f.mediaDevices.getUserMedia = function (b) {
                    return c(b, b => a(b).then(a => {
                        var c;
                        if (b.audio && !a.getAudioTracks().length || b.video && !a.getVideoTracks().length) throw r(c = a.getTracks()).call(c, a => {
                            a.stop()
                        }), new DOMException("", "NotFoundError");
                        return a
                    }, a => z.reject(e(a))))
                }
            }
        }
    }

    function Qg(d) {
        d.MediaStream = d.MediaStream || d.webkitMediaStream
    }

    function Rg(d) {
        if ("object" != typeof d || !d.RTCPeerConnection || "ontrack" in d.RTCPeerConnection.prototype) qc(d,
            "track", d => (d.transceiver || X(d, "transceiver", {value: {receiver: d.receiver}}), d)); else {
            X(d.RTCPeerConnection.prototype, "ontrack", {
                get() {
                    return this._ontrack
                }, set(a) {
                    this._ontrack && this.removeEventListener("track", this._ontrack);
                    this.addEventListener("track", this._ontrack = a)
                }, enumerable: !0, configurable: !0
            });
            let f = d.RTCPeerConnection.prototype.setRemoteDescription;
            d.RTCPeerConnection.prototype.setRemoteDescription = function () {
                return this._ontrackpoly || (this._ontrackpoly = a => {
                    var b;
                    a.stream.addEventListener("addtrack",
                        b => {
                            let c;
                            var g;
                            d.RTCPeerConnection.prototype.getReceivers ? c = S(g = this.getReceivers()).call(g, a => a.track && a.track.id === b.track.id) : c = {track: b.track};
                            g = new Event("track");
                            g.track = b.track;
                            g.receiver = c;
                            g.transceiver = {receiver: c};
                            g.streams = [a.stream];
                            this.dispatchEvent(g)
                        });
                    r(b = a.stream.getTracks()).call(b, b => {
                        let c;
                        var g;
                        d.RTCPeerConnection.prototype.getReceivers ? c = S(g = this.getReceivers()).call(g, a => a.track && a.track.id === b.id) : c = {track: b};
                        g = new Event("track");
                        g.track = b;
                        g.receiver = c;
                        g.transceiver = {receiver: c};
                        g.streams = [a.stream];
                        this.dispatchEvent(g)
                    })
                }, this.addEventListener("addstream", this._ontrackpoly)), f.apply(this, arguments)
            }
        }
    }

    function Sg(d) {
        if ("object" == typeof d && d.RTCPeerConnection && !("getSenders" in d.RTCPeerConnection.prototype) && "createDTMFSender" in d.RTCPeerConnection.prototype) {
            let f = function (a, b) {
                return {
                    track: b, get dtmf() {
                        return void 0 === this._dtmf && ("audio" === b.kind ? this._dtmf = a.createDTMFSender(b) : this._dtmf = null), this._dtmf
                    }, _pc: a
                }
            };
            if (!d.RTCPeerConnection.prototype.getSenders) {
                d.RTCPeerConnection.prototype.getSenders =
                    function () {
                        var a;
                        return this._senders = this._senders || [], Da(a = this._senders).call(a)
                    };
                let a = d.RTCPeerConnection.prototype.addTrack;
                d.RTCPeerConnection.prototype.addTrack = function (b, c) {
                    let d = a.apply(this, arguments);
                    return d || (d = f(this, b), this._senders.push(d)), d
                };
                let b = d.RTCPeerConnection.prototype.removeTrack;
                d.RTCPeerConnection.prototype.removeTrack = function (a) {
                    var c;
                    b.apply(this, arguments);
                    let d = N(c = this._senders).call(c, a);
                    var e;
                    -1 !== d && Oa(e = this._senders).call(e, d, 1)
                }
            }
            let a = d.RTCPeerConnection.prototype.addStream;
            d.RTCPeerConnection.prototype.addStream = function (b) {
                var c;
                this._senders = this._senders || [];
                a.apply(this, [b]);
                r(c = b.getTracks()).call(c, a => {
                    this._senders.push(f(this, a))
                })
            };
            let b = d.RTCPeerConnection.prototype.removeStream;
            d.RTCPeerConnection.prototype.removeStream = function (a) {
                var c;
                this._senders = this._senders || [];
                b.apply(this, [a]);
                r(c = a.getTracks()).call(c, a => {
                    var b;
                    let c = S(b = this._senders).call(b, b => b.track === a);
                    var d, e;
                    c && Oa(d = this._senders).call(d, N(e = this._senders).call(e, c), 1)
                })
            }
        } else if ("object" ==
            typeof d && d.RTCPeerConnection && "getSenders" in d.RTCPeerConnection.prototype && "createDTMFSender" in d.RTCPeerConnection.prototype && d.RTCRtpSender && !("dtmf" in d.RTCRtpSender.prototype)) {
            let f = d.RTCPeerConnection.prototype.getSenders;
            d.RTCPeerConnection.prototype.getSenders = function () {
                let a = f.apply(this, []);
                return r(a).call(a, a => a._pc = this), a
            };
            X(d.RTCRtpSender.prototype, "dtmf", {
                get() {
                    return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null),
                        this._dtmf
                }
            })
        }
    }

    function Tg(d) {
        if (d.RTCPeerConnection) {
            var f = d.RTCPeerConnection.prototype.getStats;
            d.RTCPeerConnection.prototype.getStats = function () {
                let [a, b, c] = arguments;
                if (0 < arguments.length && "function" == typeof a) return f.apply(this, arguments);
                if (0 === f.length && (0 === arguments.length || "function" != typeof a)) return f.apply(this, []);
                let d = function (a) {
                    const b = {};
                    a = a.result();
                    return r(a).call(a, a => {
                        var c;
                        const d = {
                            id: a.id,
                            timestamp: a.timestamp,
                            type: {localcandidate: "local-candidate", remotecandidate: "remote-candidate"}[a.type] ||
                                a.type
                        };
                        r(c = a.names()).call(c, b => {
                            d[b] = a.stat(b)
                        });
                        b[d.id] = d
                    }), b
                }, g = function (a) {
                    var b;
                    return new ha(B(b = aa(a)).call(b, b => [b, a[b]]))
                };
                return 2 <= arguments.length ? f.apply(this, [function (a) {
                    b(g(d(a)))
                }, a]) : (new z((a, b) => {
                    f.apply(this, [function (b) {
                        a(g(d(b)))
                    }, b])
                })).then(b, c)
            }
        }
    }

    function Ug(d) {
        if ("object" == typeof d && d.RTCPeerConnection && d.RTCRtpSender && d.RTCRtpReceiver) {
            if (!("getStats" in d.RTCRtpSender.prototype)) {
                let a = d.RTCPeerConnection.prototype.getSenders;
                a && (d.RTCPeerConnection.prototype.getSenders =
                    function () {
                        let b = a.apply(this, []);
                        return r(b).call(b, a => a._pc = this), b
                    });
                let b = d.RTCPeerConnection.prototype.addTrack;
                b && (d.RTCPeerConnection.prototype.addTrack = function () {
                    let a = b.apply(this, arguments);
                    return a._pc = this, a
                });
                d.RTCRtpSender.prototype.getStats = function () {
                    let a = this;
                    return this._pc.getStats().then(b => Lg(b, a.track, !0))
                }
            }
            if (!("getStats" in d.RTCRtpReceiver.prototype)) {
                let a = d.RTCPeerConnection.prototype.getReceivers;
                a && (d.RTCPeerConnection.prototype.getReceivers = function () {
                    let b = a.apply(this,
                        []);
                    return r(b).call(b, a => a._pc = this), b
                });
                qc(d, "track", a => (a.receiver._pc = a.srcElement, a));
                d.RTCRtpReceiver.prototype.getStats = function () {
                    let a = this;
                    return this._pc.getStats().then(b => Lg(b, a.track, !1))
                }
            }
            if ("getStats" in d.RTCRtpSender.prototype && "getStats" in d.RTCRtpReceiver.prototype) {
                var f = d.RTCPeerConnection.prototype.getStats;
                d.RTCPeerConnection.prototype.getStats = function () {
                    if (0 < arguments.length && arguments[0] instanceof d.MediaStreamTrack) {
                        var a, b;
                        let c = arguments[0], d, g, h;
                        return r(a = this.getSenders()).call(a,
                            a => {
                                a.track === c && (d ? h = !0 : d = a)
                            }), r(b = this.getReceivers()).call(b, a => (a.track === c && (g ? h = !0 : g = a), a.track === c)), h || d && g ? z.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : d ? d.getStats() : g ? g.getStats() : z.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
                    }
                    return f.apply(this, arguments)
                }
            }
        }
    }

    function Vg(d) {
        d.RTCPeerConnection.prototype.getLocalStreams = function () {
            var a;
            return this._shimmedLocalStreams = this._shimmedLocalStreams ||
                {}, B(a = aa(this._shimmedLocalStreams)).call(a, a => this._shimmedLocalStreams[a][0])
        };
        let f = d.RTCPeerConnection.prototype.addTrack;
        d.RTCPeerConnection.prototype.addTrack = function (a, b) {
            var c;
            if (!b) return f.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            let d = f.apply(this, arguments);
            return this._shimmedLocalStreams[b.id] ? -1 === N(c = this._shimmedLocalStreams[b.id]).call(c, d) && this._shimmedLocalStreams[b.id].push(d) : this._shimmedLocalStreams[b.id] = [b, d], d
        };
        let a = d.RTCPeerConnection.prototype.addStream;
        d.RTCPeerConnection.prototype.addStream = function (b) {
            var c, d, e;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            r(c = b.getTracks()).call(c, a => {
                var b;
                if (S(b = this.getSenders()).call(b, b => b.track === a)) throw new DOMException("Track already exists.", "InvalidAccessError");
            });
            let f = this.getSenders();
            a.apply(this, arguments);
            c = I(d = this.getSenders()).call(d, a => -1 === N(f).call(f, a));
            this._shimmedLocalStreams[b.id] = m(e = [b]).call(e, c)
        };
        let b = d.RTCPeerConnection.prototype.removeStream;
        d.RTCPeerConnection.prototype.removeStream =
            function (a) {
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[a.id], b.apply(this, arguments)
            };
        let c = d.RTCPeerConnection.prototype.removeTrack;
        d.RTCPeerConnection.prototype.removeTrack = function (a) {
            var b;
            (this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a) && r(b = aa(this._shimmedLocalStreams)).call(b, b => {
                var c;
                let d = N(c = this._shimmedLocalStreams[b]).call(c, a);
                var e;
                -1 !== d && Oa(e = this._shimmedLocalStreams[b]).call(e, d, 1);
                1 === this._shimmedLocalStreams[b].length &&
                delete this._shimmedLocalStreams[b]
            });
            return c.apply(this, arguments)
        }
    }

    function Wg(d) {
        function f(a, b) {
            var c;
            let d = b.sdp;
            return r(c = aa(a._reverseStreams || [])).call(c, b => {
                b = a._reverseStreams[b];
                d = d.replace(new RegExp(a._streams[b.id].id, "g"), b.id)
            }), new RTCSessionDescription({type: b.type, sdp: d})
        }

        function a(a, b) {
            var c;
            let d = b.sdp;
            return r(c = aa(a._reverseStreams || [])).call(c, b => {
                b = a._reverseStreams[b];
                d = d.replace(new RegExp(b.id, "g"), a._streams[b.id].id)
            }), new RTCSessionDescription({type: b.type, sdp: d})
        }

        var b;
        if (d.RTCPeerConnection) {
            var c = Kb(d);
            if (d.RTCPeerConnection.prototype.addTrack && 65 <= c.version) return Vg(d);
            var e = d.RTCPeerConnection.prototype.getLocalStreams;
            d.RTCPeerConnection.prototype.getLocalStreams = function () {
                let a = e.apply(this);
                return this._reverseStreams = this._reverseStreams || {}, B(a).call(a, a => this._reverseStreams[a.id])
            };
            var g = d.RTCPeerConnection.prototype.addStream;
            d.RTCPeerConnection.prototype.addStream = function (a) {
                var b;
                (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams ||
                    {}, r(b = a.getTracks()).call(b, a => {
                    var b;
                    if (S(b = this.getSenders()).call(b, b => b.track === a)) throw new DOMException("Track already exists.", "InvalidAccessError");
                }), this._reverseStreams[a.id]) || (b = new d.MediaStream(a.getTracks()), this._streams[a.id] = b, this._reverseStreams[b.id] = a, a = b);
                g.apply(this, [a])
            };
            var h = d.RTCPeerConnection.prototype.removeStream;
            d.RTCPeerConnection.prototype.removeStream = function (a) {
                this._streams = this._streams || {};
                this._reverseStreams = this._reverseStreams || {};
                h.apply(this, [this._streams[a.id] ||
                a]);
                delete this._reverseStreams[this._streams[a.id] ? this._streams[a.id].id : a.id];
                delete this._streams[a.id]
            };
            d.RTCPeerConnection.prototype.addTrack = function (a, b) {
                var c, e, g;
                if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                let h = Da([]).call(arguments, 1);
                if (1 !== h.length || !S(c = h[0].getTracks()).call(c, b => b === a)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
                    "NotSupportedError");
                if (S(e = this.getSenders()).call(e, b => b.track === a)) throw new DOMException("Track already exists.", "InvalidAccessError");
                this._streams = this._streams || {};
                this._reverseStreams = this._reverseStreams || {};
                (c = this._streams[b.id]) ? (c.addTrack(a), z.resolve().then(() => {
                    this.dispatchEvent(new Event("negotiationneeded"))
                })) : (c = new d.MediaStream([a]), this._streams[b.id] = c, this._reverseStreams[c.id] = b, this.addStream(c));
                return S(g = this.getSenders()).call(g, b => b.track === a)
            };
            r(b = ["createOffer",
                "createAnswer"]).call(b, function (a) {
                let b = d.RTCPeerConnection.prototype[a];
                d.RTCPeerConnection.prototype[a] = {
                    [a]() {
                        const a = arguments;
                        return arguments.length && "function" == typeof arguments[0] ? b.apply(this, [b => {
                            b = f(this, b);
                            a[0].apply(null, [b])
                        }, b => {
                            a[1] && a[1].apply(null, b)
                        }, arguments[2]]) : b.apply(this, arguments).then(a => f(this, a))
                    }
                }[a]
            });
            var l = d.RTCPeerConnection.prototype.setLocalDescription;
            d.RTCPeerConnection.prototype.setLocalDescription = function () {
                return arguments.length && arguments[0].type ? (arguments[0] =
                    a(this, arguments[0]), l.apply(this, arguments)) : l.apply(this, arguments)
            };
            var q = T(d.RTCPeerConnection.prototype, "localDescription");
            X(d.RTCPeerConnection.prototype, "localDescription", {
                get() {
                    let a = q.get.apply(this);
                    return "" === a.type ? a : f(this, a)
                }
            });
            d.RTCPeerConnection.prototype.removeTrack = function (a) {
                var b;
                if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                if (!a._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
                    "TypeError");
                if (a._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                let c;
                this._streams = this._streams || {};
                r(b = aa(this._streams)).call(b, b => {
                    var d;
                    S(d = this._streams[b].getTracks()).call(d, b => a.track === b) && (c = this._streams[b])
                });
                c && (1 === c.getTracks().length ? this.removeStream(this._reverseStreams[c.id]) : c.removeTrack(a.track), this.dispatchEvent(new Event("negotiationneeded")))
            }
        }
    }

    function Ie(d) {
        let f = Kb(d);
        if (!d.RTCPeerConnection && d.webkitRTCPeerConnection &&
        (d.RTCPeerConnection = d.webkitRTCPeerConnection), d.RTCPeerConnection) {
            var a;
            53 > f.version && r(a = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).call(a, function (a) {
                let b = d.RTCPeerConnection.prototype[a];
                d.RTCPeerConnection.prototype[a] = {
                    [a]() {
                        return arguments[0] = new ("addIceCandidate" === a ? d.RTCIceCandidate : d.RTCSessionDescription)(arguments[0]), b.apply(this, arguments)
                    }
                }[a]
            });
            var b = d.RTCPeerConnection.prototype.addIceCandidate;
            d.RTCPeerConnection.prototype.addIceCandidate = function () {
                return arguments[0] ?
                    78 > f.version && arguments[0] && "" === arguments[0].candidate ? z.resolve() : b.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), z.resolve())
            }
        }
    }

    function Xg(d) {
        qc(d, "negotiationneeded", d => {
            if ("stable" === d.target.signalingState) return d
        })
    }

    function Yg(d, f, a, b, c) {
        f = K.writeRtpDescription(d.kind, f);
        if (f += K.writeIceParameters(d.iceGatherer.getLocalParameters()), f += K.writeDtlsParameters(d.dtlsTransport.getLocalParameters(), "offer" === a ? "actpass" : c || "active"), f += "a=mid:" + d.mid + "\r\n", d.rtpSender && d.rtpReceiver ?
            f += "a=sendrecv\r\n" : d.rtpSender ? f += "a=sendonly\r\n" : d.rtpReceiver ? f += "a=recvonly\r\n" : f += "a=inactive\r\n", d.rtpSender) a = d.rtpSender._initialTrackId || d.rtpSender.track.id, d.rtpSender._initialTrackId = a, b = "msid:" + (b ? b.id : "-") + " " + a + "\r\n", f = f + ("a=" + b) + ("a=ssrc:" + d.sendEncodingParameters[0].ssrc + " " + b), d.sendEncodingParameters[0].rtx && (f += "a=ssrc:" + d.sendEncodingParameters[0].rtx.ssrc + " " + b, f += "a=ssrc-group:FID " + d.sendEncodingParameters[0].ssrc + " " + d.sendEncodingParameters[0].rtx.ssrc + "\r\n");
        return f +=
            "a=ssrc:" + d.sendEncodingParameters[0].ssrc + " cname:" + K.localCName + "\r\n", d.rtpSender && d.sendEncodingParameters[0].rtx && (f += "a=ssrc:" + d.sendEncodingParameters[0].rtx.ssrc + " cname:" + K.localCName + "\r\n"), f
    }

    function Dd(d, f) {
        var a = {codecs: [], headerExtensions: [], fecMechanisms: []}, b = function (a, b) {
            a = parseInt(a, 10);
            for (var c = 0; c < b.length; c++) if (b[c].payloadType === a || b[c].preferredPayloadType === a) return b[c]
        }, c = function (a, c, d, f) {
            a = b(a.parameters.apt, d);
            c = b(c.parameters.apt, f);
            return a && c && a.name.toLowerCase() ===
                c.name.toLowerCase()
        };
        return d.codecs.forEach(function (b) {
            for (var e = 0; e < f.codecs.length; e++) {
                var h = f.codecs[e];
                if (b.name.toLowerCase() === h.name.toLowerCase() && b.clockRate === h.clockRate && ("rtx" !== b.name.toLowerCase() || !b.parameters || !h.parameters.apt || c(b, h, d.codecs, f.codecs))) {
                    (h = JSON.parse(JSON.stringify(h))).numChannels = Math.min(b.numChannels, h.numChannels);
                    a.codecs.push(h);
                    h.rtcpFeedback = h.rtcpFeedback.filter(function (a) {
                        for (var c = 0; c < b.rtcpFeedback.length; c++) if (b.rtcpFeedback[c].type === a.type &&
                            b.rtcpFeedback[c].parameter === a.parameter) return !0;
                        return !1
                    });
                    break
                }
            }
        }), d.headerExtensions.forEach(function (b) {
            for (var c = 0; c < f.headerExtensions.length; c++) {
                var d = f.headerExtensions[c];
                if (b.uri === d.uri) {
                    a.headerExtensions.push(d);
                    break
                }
            }
        }), a
    }

    function Zg(d, f, a) {
        return -1 !== {
            offer: {
                setLocalDescription: ["stable", "have-local-offer"],
                setRemoteDescription: ["stable", "have-remote-offer"]
            },
            answer: {
                setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
            }
        }[f][d].indexOf(a)
    }

    function Je(d, f) {
        var a = d.getRemoteCandidates().find(function (a) {
            return f.foundation === a.foundation && f.ip === a.ip && f.port === a.port && f.priority === a.priority && f.protocol === a.protocol && f.type === a.type
        });
        return a || d.addRemoteCandidate(f), !a
    }

    function Pa(d, f) {
        f = Error(f);
        return f.name = d, f.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0
        }[d], f
    }

    function $g(d) {
        var f;
        d = d && d.navigator;
        let a = pa(f = d.mediaDevices.getUserMedia).call(f, d.mediaDevices);
        d.mediaDevices.getUserMedia =
            function (b) {
                return a(b).catch(a => z.reject(function (a) {
                    return {
                        name: {PermissionDeniedError: "NotAllowedError"}[a.name] || a.name,
                        message: a.message,
                        constraint: a.constraint,
                        toString() {
                            return this.name
                        }
                    }
                }(a)))
            }
    }

    function ah(d) {
        var f;
        "getDisplayMedia" in d.navigator && d.navigator.mediaDevices && (d.navigator.mediaDevices && "getDisplayMedia" in d.navigator.mediaDevices || (d.navigator.mediaDevices.getDisplayMedia = pa(f = d.navigator.getDisplayMedia).call(f, d.navigator)))
    }

    function Ke(d) {
        let f = Kb(d);
        if (d.RTCIceGatherer &&
            (d.RTCIceCandidate || (d.RTCIceCandidate = function (a) {
                return a
            }), d.RTCSessionDescription || (d.RTCSessionDescription = function (a) {
                return a
            }), 15025 > f.version)) {
            let a = T(d.MediaStreamTrack.prototype, "enabled");
            X(d.MediaStreamTrack.prototype, "enabled", {
                set(b) {
                    a.set.call(this, b);
                    let c = new Event("enabled");
                    c.enabled = b;
                    this.dispatchEvent(c)
                }
            })
        }
        !d.RTCRtpSender || "dtmf" in d.RTCRtpSender.prototype || X(d.RTCRtpSender.prototype, "dtmf", {
            get() {
                return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new d.RTCDtmfSender(this) :
                    "video" === this.track.kind && (this._dtmf = null)), this._dtmf
            }
        });
        d.RTCDtmfSender && !d.RTCDTMFSender && (d.RTCDTMFSender = d.RTCDtmfSender);
        let a = Pl(d, f.version);
        d.RTCPeerConnection = function (b) {
            return b && b.iceServers && (b.iceServers = function (a, b) {
                let c = !1;
                return a = JSON.parse(w(a)), I(a).call(a, a => {
                    if (a && (a.urls || a.url)) {
                        var b = a.urls || a.url;
                        a.url && !a.urls && Cd("RTCIceServer.url", "RTCIceServer.urls");
                        let d = "string" == typeof b;
                        return d && (b = [b]), b = I(b).call(b, a => 0 === N(a).call(a, "stun:") ? !1 : (a = Rc(a).call(a, "turn") &&
                            !Rc(a).call(a, "turn:[") && ia(a).call(a, "transport=udp")) && !c ? (c = !0, !0) : a && !c), delete a.url, a.urls = d ? b[0] : b, !!b.length
                    }
                })
            }(b.iceServers, f.version), ub("ICE servers after filtering:", b.iceServers)), new a(b)
        };
        d.RTCPeerConnection.prototype = a.prototype
    }

    function bh(d) {
        !d.RTCRtpSender || "replaceTrack" in d.RTCRtpSender.prototype || (d.RTCRtpSender.prototype.replaceTrack = d.RTCRtpSender.prototype.setTrack)
    }

    function ch(d) {
        let f = Kb(d), a = d && d.navigator;
        d = d && d.MediaStreamTrack;
        if (a.getUserMedia = function (b, d, g) {
            Cd("navigator.getUserMedia",
                "navigator.mediaDevices.getUserMedia");
            a.mediaDevices.getUserMedia(b).then(d, g)
        }, !(55 < f.version && "autoGainControl" in a.mediaDevices.getSupportedConstraints())) {
            var b;
            let c = function (a, b, c) {
                b in a && !(c in a) && (a[c] = a[b], delete a[b])
            }, e = pa(b = a.mediaDevices.getUserMedia).call(b, a.mediaDevices);
            if (a.mediaDevices.getUserMedia = function (a) {
                return "object" == typeof a && "object" == typeof a.audio && (a = JSON.parse(w(a)), c(a.audio, "autoGainControl", "mozAutoGainControl"), c(a.audio, "noiseSuppression", "mozNoiseSuppression")),
                    e(a)
            }, d && d.prototype.getSettings) {
                let a = d.prototype.getSettings;
                d.prototype.getSettings = function () {
                    let b = a.apply(this, arguments);
                    return c(b, "mozAutoGainControl", "autoGainControl"), c(b, "mozNoiseSuppression", "noiseSuppression"), b
                }
            }
            if (d && d.prototype.applyConstraints) {
                let a = d.prototype.applyConstraints;
                d.prototype.applyConstraints = function (b) {
                    return "audio" === this.kind && "object" == typeof b && (b = JSON.parse(w(b)), c(b, "autoGainControl", "mozAutoGainControl"), c(b, "noiseSuppression", "mozNoiseSuppression")), a.apply(this,
                        [b])
                }
            }
        }
    }

    function dh(d) {
        "object" == typeof d && d.RTCTrackEvent && "receiver" in d.RTCTrackEvent.prototype && !("transceiver" in d.RTCTrackEvent.prototype) && X(d.RTCTrackEvent.prototype, "transceiver", {
            get() {
                return {receiver: this.receiver}
            }
        })
    }

    function Le(d) {
        let f = Kb(d);
        if ("object" == typeof d && (d.RTCPeerConnection || d.mozRTCPeerConnection)) {
            var a;
            (!d.RTCPeerConnection && d.mozRTCPeerConnection && (d.RTCPeerConnection = d.mozRTCPeerConnection), 53 > f.version) && r(a = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).call(a,
                function (a) {
                    let b = d.RTCPeerConnection.prototype[a];
                    d.RTCPeerConnection.prototype[a] = {
                        [a]() {
                            return arguments[0] = new ("addIceCandidate" === a ? d.RTCIceCandidate : d.RTCSessionDescription)(arguments[0]), b.apply(this, arguments)
                        }
                    }[a]
                });
            var b = d.RTCPeerConnection.prototype.addIceCandidate;
            d.RTCPeerConnection.prototype.addIceCandidate = function () {
                return arguments[0] ? 68 > f.version && arguments[0] && "" === arguments[0].candidate ? z.resolve() : b.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), z.resolve())
            };
            var c = {
                inboundrtp: "inbound-rtp",
                outboundrtp: "outbound-rtp",
                candidatepair: "candidate-pair",
                localcandidate: "local-candidate",
                remotecandidate: "remote-candidate"
            }, e = d.RTCPeerConnection.prototype.getStats;
            d.RTCPeerConnection.prototype.getStats = function () {
                let [a, b, d] = arguments;
                return e.apply(this, [a || null]).then(a => {
                    if (53 > f.version && !b) try {
                        r(a).call(a, a => {
                            a.type = c[a.type] || a.type
                        })
                    } catch (t) {
                        if ("TypeError" !== t.name) throw t;
                        r(a).call(a, (b, d) => {
                            a.set(d, Ia({}, b, {type: c[b.type] || b.type}))
                        })
                    }
                    return a
                }).then(b,
                    d)
            }
        }
    }

    function eh(d) {
        if ("object" == typeof d && d.RTCPeerConnection && d.RTCRtpSender && !(d.RTCRtpSender && "getStats" in d.RTCRtpSender.prototype)) {
            var f = d.RTCPeerConnection.prototype.getSenders;
            f && (d.RTCPeerConnection.prototype.getSenders = function () {
                let a = f.apply(this, []);
                return r(a).call(a, a => a._pc = this), a
            });
            var a = d.RTCPeerConnection.prototype.addTrack;
            a && (d.RTCPeerConnection.prototype.addTrack = function () {
                let b = a.apply(this, arguments);
                return b._pc = this, b
            });
            d.RTCRtpSender.prototype.getStats = function () {
                return this.track ?
                    this._pc.getStats(this.track) : z.resolve(new ha)
            }
        }
    }

    function fh(d) {
        if ("object" == typeof d && d.RTCPeerConnection && d.RTCRtpSender && !(d.RTCRtpSender && "getStats" in d.RTCRtpReceiver.prototype)) {
            var f = d.RTCPeerConnection.prototype.getReceivers;
            f && (d.RTCPeerConnection.prototype.getReceivers = function () {
                let a = f.apply(this, []);
                return r(a).call(a, a => a._pc = this), a
            });
            qc(d, "track", a => (a.receiver._pc = a.srcElement, a));
            d.RTCRtpReceiver.prototype.getStats = function () {
                return this._pc.getStats(this.track)
            }
        }
    }

    function gh(d) {
        !d.RTCPeerConnection ||
        "removeStream" in d.RTCPeerConnection.prototype || (d.RTCPeerConnection.prototype.removeStream = function (d) {
            var a;
            Cd("removeStream", "removeTrack");
            r(a = this.getSenders()).call(a, a => {
                var b;
                a.track && ia(b = d.getTracks()).call(b, a.track) && this.removeTrack(a)
            })
        })
    }

    function hh(d) {
        d.DataChannel && !d.RTCDataChannel && (d.RTCDataChannel = d.DataChannel)
    }

    function ih(d) {
        if ("object" == typeof d && d.RTCPeerConnection) {
            if ("getLocalStreams" in d.RTCPeerConnection.prototype || (d.RTCPeerConnection.prototype.getLocalStreams = function () {
                return this._localStreams ||
                (this._localStreams = []), this._localStreams
            }), !("addStream" in d.RTCPeerConnection.prototype)) {
                let f = d.RTCPeerConnection.prototype.addTrack;
                d.RTCPeerConnection.prototype.addStream = function (a) {
                    var b, c, d;
                    this._localStreams || (this._localStreams = []);
                    ia(b = this._localStreams).call(b, a) || this._localStreams.push(a);
                    r(c = a.getAudioTracks()).call(c, b => f.call(this, b, a));
                    r(d = a.getVideoTracks()).call(d, b => f.call(this, b, a))
                };
                d.RTCPeerConnection.prototype.addTrack = function (a, b) {
                    var c;
                    b && (this._localStreams ? ia(c = this._localStreams).call(c,
                        b) || this._localStreams.push(b) : this._localStreams = [b]);
                    return f.call(this, a, b)
                }
            }
            "removeStream" in d.RTCPeerConnection.prototype || (d.RTCPeerConnection.prototype.removeStream = function (d) {
                var a, b, c;
                this._localStreams || (this._localStreams = []);
                let e = N(a = this._localStreams).call(a, d);
                if (-1 !== e) {
                    Oa(b = this._localStreams).call(b, e, 1);
                    var g = d.getTracks();
                    r(c = this.getSenders()).call(c, a => {
                        ia(g).call(g, a.track) && this.removeTrack(a)
                    })
                }
            })
        }
    }

    function jh(d) {
        if ("object" == typeof d && d.RTCPeerConnection && ("getRemoteStreams" in
        d.RTCPeerConnection.prototype || (d.RTCPeerConnection.prototype.getRemoteStreams = function () {
            return this._remoteStreams ? this._remoteStreams : []
        }), !("onaddstream" in d.RTCPeerConnection.prototype))) {
            X(d.RTCPeerConnection.prototype, "onaddstream", {
                get() {
                    return this._onaddstream
                }, set(a) {
                    this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly));
                    this.addEventListener("addstream", this._onaddstream = a);
                    this.addEventListener("track", this._onaddstreampoly =
                        a => {
                            var b;
                            r(b = a.streams).call(b, a => {
                                var b;
                                (this._remoteStreams || (this._remoteStreams = []), ia(b = this._remoteStreams).call(b, a)) || (this._remoteStreams.push(a), b = new Event("addstream"), b.stream = a, this.dispatchEvent(b))
                            })
                        })
                }
            });
            let f = d.RTCPeerConnection.prototype.setRemoteDescription;
            d.RTCPeerConnection.prototype.setRemoteDescription = function () {
                let a = this;
                return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function (b) {
                    var c;
                    r(c = b.streams).call(c, b => {
                        var c;
                        (a._remoteStreams ||
                        (a._remoteStreams = []), 0 <= N(c = a._remoteStreams).call(c, b)) || (a._remoteStreams.push(b), c = new Event("addstream"), c.stream = b, a.dispatchEvent(c))
                    })
                }), f.apply(a, arguments)
            }
        }
    }

    function kh(d) {
        if ("object" == typeof d && d.RTCPeerConnection) {
            d = d.RTCPeerConnection.prototype;
            var f = d.createOffer, a = d.createAnswer, b = d.setLocalDescription, c = d.setRemoteDescription,
                e = d.addIceCandidate;
            d.createOffer = function (a, b) {
                let c = f.apply(this, [2 <= arguments.length ? arguments[2] : arguments[0]]);
                return b ? (c.then(a, b), z.resolve()) : c
            };
            d.createAnswer =
                function (b, c) {
                    let d = a.apply(this, [2 <= arguments.length ? arguments[2] : arguments[0]]);
                    return c ? (d.then(b, c), z.resolve()) : d
                };
            var g = function (a, c, d) {
                a = b.apply(this, [a]);
                return d ? (a.then(c, d), z.resolve()) : a
            };
            d.setLocalDescription = g;
            g = function (a, b, d) {
                a = c.apply(this, [a]);
                return d ? (a.then(b, d), z.resolve()) : a
            };
            d.setRemoteDescription = g;
            g = function (a, b, c) {
                a = e.apply(this, [a]);
                return c ? (a.then(b, c), z.resolve()) : a
            };
            d.addIceCandidate = g
        }
    }

    function lh(d) {
        let f = d && d.navigator;
        if (f.mediaDevices && f.mediaDevices.getUserMedia) {
            var a;
            d = f.mediaDevices;
            let b = pa(a = d.getUserMedia).call(a, d);
            f.mediaDevices.getUserMedia = a => b(mh(a))
        }
        var b;
        !f.getUserMedia && f.mediaDevices && f.mediaDevices.getUserMedia && (f.getUserMedia = pa(b = function (a, b, d) {
            f.mediaDevices.getUserMedia(a).then(b, d)
        }).call(b, f))
    }

    function mh(d) {
        return d && void 0 !== d.video ? Ia({}, d, {video: Kg(d.video)}) : d
    }

    function nh(d) {
        let f = d.RTCPeerConnection;
        d.RTCPeerConnection = function (a, b) {
            if (a && a.iceServers) {
                let b = [];
                for (let c = 0; c < a.iceServers.length; c++) {
                    let d = a.iceServers[c];
                    !d.hasOwnProperty("urls") &&
                    d.hasOwnProperty("url") ? (Cd("RTCIceServer.url", "RTCIceServer.urls"), d = JSON.parse(w(d)), d.urls = d.url, delete d.url, b.push(d)) : b.push(a.iceServers[c])
                }
                a.iceServers = b
            }
            return new f(a, b)
        };
        d.RTCPeerConnection.prototype = f.prototype;
        "generateCertificate" in d.RTCPeerConnection && X(d.RTCPeerConnection, "generateCertificate", {get: () => f.generateCertificate})
    }

    function oh(d) {
        "object" == typeof d && d.RTCPeerConnection && "receiver" in d.RTCTrackEvent.prototype && !d.RTCTransceiver && X(d.RTCTrackEvent.prototype, "transceiver",
            {
                get() {
                    return {receiver: this.receiver}
                }
            })
    }

    function ph(d) {
        let f = d.RTCPeerConnection.prototype.createOffer;
        d.RTCPeerConnection.prototype.createOffer = function (a) {
            if (a) {
                var b, c;
                void 0 !== a.offerToReceiveAudio && (a.offerToReceiveAudio = !!a.offerToReceiveAudio);
                let d = S(b = this.getTransceivers()).call(b, a => "audio" === a.receiver.track.kind);
                !1 === a.offerToReceiveAudio && d ? "sendrecv" === d.direction ? d.setDirection ? d.setDirection("sendonly") : d.direction = "sendonly" : "recvonly" === d.direction && (d.setDirection ? d.setDirection("inactive") :
                    d.direction = "inactive") : !0 !== a.offerToReceiveAudio || d || this.addTransceiver("audio");
                void 0 !== a.offerToReceiveVideo && (a.offerToReceiveVideo = !!a.offerToReceiveVideo);
                b = S(c = this.getTransceivers()).call(c, a => "video" === a.receiver.track.kind);
                !1 === a.offerToReceiveVideo && b ? "sendrecv" === b.direction ? b.setDirection ? b.setDirection("sendonly") : b.direction = "sendonly" : "recvonly" === b.direction && (b.setDirection ? b.setDirection("inactive") : b.direction = "inactive") : !0 !== a.offerToReceiveVideo || b || this.addTransceiver("video")
            }
            return f.apply(this,
                arguments)
        }
    }

    function Ed(d) {
        if (d.RTCIceCandidate && !(d.RTCIceCandidate && "foundation" in d.RTCIceCandidate.prototype)) {
            var f = d.RTCIceCandidate;
            d.RTCIceCandidate = function (a) {
                var b;
                if ("object" == typeof a && a.candidate && 0 === N(b = a.candidate).call(b, "a=") && ((a = JSON.parse(w(a))).candidate = a.candidate.substr(2)), a.candidate && a.candidate.length) {
                    b = new f(a);
                    a = K.parseCandidate(a.candidate);
                    let c = Ia(b, a);
                    return c.toJSON = function () {
                        return {
                            candidate: c.candidate,
                            sdpMid: c.sdpMid,
                            sdpMLineIndex: c.sdpMLineIndex,
                            usernameFragment: c.usernameFragment
                        }
                    },
                        c
                }
                return new f(a)
            };
            d.RTCIceCandidate.prototype = f.prototype;
            qc(d, "icecandidate", a => (a.candidate && X(a, "candidate", {
                value: new d.RTCIceCandidate(a.candidate),
                writable: "false"
            }), a))
        }
    }

    function Sc(d) {
        if (d.RTCPeerConnection) {
            var f = Kb(d);
            "sctp" in d.RTCPeerConnection.prototype || X(d.RTCPeerConnection.prototype, "sctp", {
                get() {
                    return void 0 === this._sctp ? null : this._sctp
                }
            });
            var a = function (a) {
                if (!a || !a.sdp) return !1;
                a = K.splitSections(a.sdp);
                return a.shift(), Og(a).call(a, a => {
                    var b;
                    return (a = K.parseMLine(a)) && "application" ===
                        a.kind && -1 !== N(b = a.protocol).call(b, "SCTP")
                })
            }, b = function (a) {
                a = a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                if (null === a || 2 > a.length) return -1;
                a = sa(a[1], 10);
                return a != a ? -1 : a
            }, c = function (a) {
                let b = 65536;
                return "firefox" === f.browser && (b = 57 > f.version ? -1 === a ? 16384 : 2147483637 : 60 > f.version ? 57 === f.version ? 65535 : 65536 : 2147483637), b
            }, e = function (a, b) {
                let c = 65536;
                "firefox" === f.browser && 57 === f.version && (c = 65535);
                a = K.matchPrefix(a.sdp, "a=max-message-size:");
                return 0 < a.length ? c = sa(a[0].substr(19), 10) : "firefox" ===
                    f.browser && -1 !== b && (c = 2147483637), c
            }, g = d.RTCPeerConnection.prototype.setRemoteDescription;
            d.RTCPeerConnection.prototype.setRemoteDescription = function () {
                if (this._sctp = null, "chrome" === f.browser && 76 <= f.version) {
                    var {sdpSemantics: d} = this.getConfiguration();
                    "plan-b" === d && X(this, "sctp", {
                        get() {
                            return void 0 === this._sctp ? null : this._sctp
                        }, enumerable: !0, configurable: !0
                    })
                }
                if (a(arguments[0])) {
                    var l = b(arguments[0]);
                    d = c(l);
                    l = e(arguments[0], l);
                    let a;
                    a = 0 === d && 0 === l ? Number.POSITIVE_INFINITY : 0 === d || 0 === l ? Math.max(d,
                        l) : Math.min(d, l);
                    d = {};
                    X(d, "maxMessageSize", {get: () => a});
                    this._sctp = d
                }
                return g.apply(this, arguments)
            }
        }
    }

    function Tc(d) {
        function f(a, c) {
            let b = a.send;
            a.send = function () {
                var d = arguments[0];
                d = d.length || d.size || d.byteLength;
                if ("open" === a.readyState && c.sctp && d > c.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + c.sctp.maxMessageSize + " bytes)");
                return b.apply(a, arguments)
            }
        }

        if (d.RTCPeerConnection && "createDataChannel" in d.RTCPeerConnection.prototype) {
            var a = d.RTCPeerConnection.prototype.createDataChannel;
            d.RTCPeerConnection.prototype.createDataChannel = function () {
                let b = a.apply(this, arguments);
                return f(b, this), b
            };
            qc(d, "datachannel", a => (f(a.channel, a.target), a))
        }
    }

    function Me(d) {
        var f;
        if (d.RTCPeerConnection && !("connectionState" in d.RTCPeerConnection.prototype)) {
            var a = d.RTCPeerConnection.prototype;
            X(a, "connectionState", {
                get() {
                    return {
                        completed: "connected",
                        checking: "connecting"
                    }[this.iceConnectionState] || this.iceConnectionState
                }, enumerable: !0, configurable: !0
            });
            X(a, "onconnectionstatechange", {
                get() {
                    return this._onconnectionstatechange ||
                        null
                }, set(a) {
                    this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange);
                    a && this.addEventListener("connectionstatechange", this._onconnectionstatechange = a)
                }, enumerable: !0, configurable: !0
            });
            r(f = ["setLocalDescription", "setRemoteDescription"]).call(f, b => {
                let c = a[b];
                a[b] = function () {
                    return this._connectionstatechangepoly || (this._connectionstatechangepoly = a => {
                        let b = a.target;
                        if (b._lastConnectionState !== b.connectionState) {
                            b._lastConnectionState =
                                b.connectionState;
                            let c = new Event("connectionstatechange", a);
                            b.dispatchEvent(c)
                        }
                        return a
                    }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), c.apply(this, arguments)
                }
            })
        }
    }

    function Ne(d) {
        if (d.RTCPeerConnection) {
            var f = Kb(d);
            if (!("chrome" === f.browser && 71 <= f.version)) {
                var a = d.RTCPeerConnection.prototype.setRemoteDescription;
                d.RTCPeerConnection.prototype.setRemoteDescription = function (b) {
                    var c, d;
                    b && b.sdp && -1 !== N(c = b.sdp).call(c, "\na=extmap-allow-mixed") && (b.sdp = I(d = b.sdp.split("\n")).call(d,
                        a => "a=extmap-allow-mixed" !== ac(a).call(a)).join("\n"));
                    return a.apply(this, arguments)
                }
            }
        }
    }

    function rc(d) {
        return "string" == typeof d ? Ia({}, Ql[d]) : d
    }

    function Oe(d) {
        return "string" == typeof d ? Ia({}, Rl[d]) : d
    }

    function Fd(d) {
        return "string" == typeof d ? Ia({}, Sl[d]) : d
    }

    function Gd(d) {
        return "string" == typeof d ? Ia({}, Tl[d]) : d
    }

    function Qa(d, f) {
        var a;
        ia(a = aa(v)).call(a, d) && (v[d] = f)
    }

    function sc(d, f, a) {
        return {sampleRate: d, stereo: f, bitrate: a}
    }

    function O(d, f, a, b, c) {
        return {width: d, height: f, frameRate: a, bitrateMin: b, bitrateMax: c}
    }

    function lb(d, f, a, b, c) {
        return {width: {max: d}, height: {max: f}, frameRate: a, bitrateMin: b, bitrateMax: c}
    }

    function Pe(d, f) {
        return {numSpatialLayers: d, numTemporalLayers: f}
    }

    function qh(d) {
        return "[object Array]" === tc.call(d)
    }

    function rh(d) {
        return null !== d && "object" == typeof d
    }

    function sh(d) {
        return "[object Function]" === tc.call(d)
    }

    function Hd(d, f) {
        if (null != d) if ("object" != typeof d && (d = [d]), qh(d)) for (var a = 0, b = d.length; a < b; a++) f.call(null, d[a], a, d); else for (a in d) Object.prototype.hasOwnProperty.call(d, a) && f.call(null,
            d[a], a, d)
    }

    function th(d) {
        return encodeURIComponent(d).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function Id() {
        this.handlers = []
    }

    function uh(d, f) {
        !J.isUndefined(d) && J.isUndefined(d["Content-Type"]) && (d["Content-Type"] = f)
    }

    function Uc(d) {
        this.defaults = d;
        this.interceptors = {request: new vh, response: new vh}
    }

    function Qe(d) {
        this.message = d
    }

    function Jd(d) {
        if ("function" != typeof d) throw new TypeError("executor must be a function.");
        var f;
        this.promise = new Promise(function (a) {
            f = a
        });
        var a = this;
        d(function (b) {
            a.reason || (a.reason = new wh(b), f(a.reason))
        })
    }

    function xh(d) {
        d = new Kd(d);
        var f = yh(Kd.prototype.request, d);
        return J.extend(f, Kd.prototype, d), J.extend(f, d), f
    }

    function zh() {
        let d = new Date;
        return d.toTimeString().split(" ")[0] + ":" + d.getMilliseconds()
    }

    function Ld(d, f) {
        if ("boolean" != typeof d) throw new p(n.INVALID_PARAMS, "Invalid ".concat(f, ": The value is of the boolean type."));
    }

    function Ra(d, f, a) {
        var b;
        if (!ia(a).call(a, d)) throw new p(n.INVALID_PARAMS,
            m(b = "".concat(f, " can only be set as ")).call(b, w(a)));
    }

    function ba(d, f, a = 1, b = 1E4, c = !0) {
        if (d < a || d > b || c && ("number" != typeof d || 0 != d % 1)) {
            var e, g;
            throw new p(n.INVALID_PARAMS, m(e = m(g = "invalid ".concat(f, ": the value range is [")).call(g, a, ", ")).call(e, b, "]. integer only"));
        }
    }

    function Ea(d, f, a = 1, b = 255, c = !0) {
        if (null == d) throw new p(n.INVALID_PARAMS, "".concat(f || "param", " cannot be empty"));
        var e, g, h;
        if (!Ah(d, a, b, c)) throw new p(n.INVALID_PARAMS, m(e = m(g = m(h = "Invalid ".concat(f || "string param", ": Length of the string: [")).call(h,
            a, ",")).call(g, b, "].")).call(e, c ? " ASCII characters only." : ""));
    }

    function Re(d, f) {
        if (!Vb(d)) throw new p(n.INVALID_PARAMS, "".concat(f, " should be an array"));
    }

    function Se(d) {
        if ("string" != typeof d || !/^[a-zA-Z0-9 !#\$%&\(\)\+\-:;<=\.>\?@\[\]\^_\{\}\|~,]{1,64}$/.test(d)) throw k.error("Invalid Channel Name ".concat(d)), new p(n.INVALID_PARAMS, "The length must be within 64 bytes. The supported characters: a-z,A-Z,0-9,space,!, #, $, %, &, (, ), +, -, :, ;, <, =, ., >, ?, @, [, ], ^, _,  {, }, |, ~, ,");
    }

    function Te(d) {
        var f;
        if (!("number" == typeof d && Math.floor(d) === d && 0 <= d && 4294967295 >= d || Ah(d, 1, 255))) throw k.error(m(f = "Invalid UID ".concat(d, " ")).call(f, typeof d)), new p(n.INVALID_PARAMS, "[String uid] Length of the string: [1,255]. ASCII characters only. [Number uid] The value range is [0,10000]");
    }

    function Ah(d, f = 1, a = 255, b = !0) {
        if (f = "string" == typeof d && d.length <= a && d.length >= f) {
            if (!(b = !b)) a:if ("string" != typeof d) b = !1; else {
                for (b = 0; b < d.length; b += 1) if (f = d.charCodeAt(b), 0 > f || 255 < f) {
                    b = !1;
                    break a
                }
                b = !0
            }
            f =
                b
        }
        return f
    }

    function Ul(d) {
        return Ea(d.reportId, "params.reportId", 0, 100, !1), Ea(d.category, "params.category", 0, 100, !1), Ea(d.event, "params.event", 0, 100, !1), Ea(d.label, "params.label", 0, 100, !1), ba(d.value, "params.value", -9007199254740991, 9007199254740991, !1), !0
    }

    function Bh(d) {
        return ba(d.timeout, "config.timeout", 0, 1E5), ba(d.timeoutFactor, "config.timeoutFactor", 0, 100, !1), ba(d.maxRetryCount, "config.maxRetryConfig", 0, 1 / 0), ba(d.maxRetryTimeout, "config.maxRetryTimeout", 0, 1 / 0), !0
    }

    function Ch(d) {
        if (!Vb(d) || 1 >
            d.length) return !1;
        try {
            r(d).call(d, d => {
                if (!d.urls) throw Error();
            })
        } catch (f) {
            return !1
        }
        return !0
    }

    function Dh(d) {
        return Ea(d.turnServerURL, "turnServerURL"), Ea(d.username, "username"), Ea(d.password, "password"), d.udpport && ba(d.udpport, "udpport", 1, 99999, !0), d.forceturn && Ld(d.forceturn, "forceturn"), d.security && Ld(d.security, "security"), d.tcpport && ba(d.tcpport, "tcpport", 1, 99999, !0), !0
    }

    function Eh(d) {
        return void 0 !== d.level && Ra(d.level, "level", [1, 2, 3]), !0
    }

    function Ue(d, f) {
        Ea(d.url, "".concat(f, ".url"), 1, 1E3, !1);
        null == d.x || ba(d.x, "".concat(f, ".x"), 0, 1E4);
        null == d.y || ba(d.y, "".concat(f, ".y"), 0, 1E4);
        null == d.width || ba(d.width, "".concat(f, ".width"), 0, 1E4);
        null == d.height || ba(d.height, "".concat(f, ".height"), 0, 1E4);
        null == d.zOrder || ba(d.zOrder, "".concat(f, ".zOrder"), 0, 255);
        null == d.alpha || ba(d.alpha, "".concat(f, ".alpha"), 0, 1, !1)
    }

    function Fh(d) {
        if (!d.channelName) throw new p(n.INVALID_PARAMS, "invalid channelName in info");
        if (!d.uid || "number" != typeof d.uid) throw new p(n.INVALID_PARAMS, "invalid uid in info, uid must be a number");
        return d.token && Ea(d.token, "info.token", 1, 2047), Te(d.uid), Se(d.channelName), !0
    }

    function Gh(d) {
        return Ra(d, "mediaSource", ["screen", "window", "application"]), !0
    }

    function ca(d) {
        var f, a, b, c;
        d = d || navigator.userAgent;
        let e = d.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if ("Chrome" === e[1]) {
            var g = d.match(/(OPR(?=\/))\/?(\d+)/i);
            null !== g && (e = g)
        }
        "Safari" === e[1] && (g = d.match(/version\/(\d+)/i), null !== g && (e[2] = g[1]));
        -1 !== N(f = d.toLowerCase()).call(f, "qqbrowser") && (f = d.match(/(qqbrowser(?=\/))\/?(\d+)/i),
        null !== f && (e = f));
        -1 !== N(a = d.toLowerCase()).call(a, "micromessenger") && (a = d.match(/(micromessenger(?=\/))\/?(\d+)/i), null !== a && (e = a));
        -1 !== N(b = d.toLowerCase()).call(b, "edge") && (b = d.match(/(edge(?=\/))\/?(\d+)/i), null !== b && (e = b));
        -1 !== N(c = d.toLowerCase()).call(c, "trident") && (c = /\brv[ :]+(\d+)/g.exec(d) || [], null !== c && (e = ["", "IE", c[1]]));
        c = null;
        b = [{s: V.WIN_10, r: /(Windows 10.0|Windows NT 10.0)/}, {
            s: V.WIN_81,
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {s: V.WIN_8, r: /(Windows 8|Windows NT 6.2)/}, {s: V.WIN_7, r: /(Windows 7|Windows NT 6.1)/},
            {s: V.WIN_VISTA, r: /Windows NT 6.0/}, {s: V.WIN_SERVER_2003, r: /Windows NT 5.2/}, {
                s: V.WIN_XP,
                r: /(Windows NT 5.1|Windows XP)/
            }, {s: V.WIN_2000, r: /(Windows NT 5.0|Windows 2000)/}, {s: V.ANDROID, r: /Android/}, {
                s: V.OPEN_BSD,
                r: /OpenBSD/
            }, {s: V.SUN_OS, r: /SunOS/}, {s: V.LINUX, r: /(Linux|X11)/}, {
                s: V.IOS,
                r: /(iPhone|iPad|iPod)/
            }, {s: V.MAC_OS_X, r: /Mac OS X/}, {s: V.MAC_OS, r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}, {
                s: V.QNX,
                r: /QNX/
            }, {s: V.UNIX, r: /UNIX/}, {s: V.BEOS, r: /BeOS/}, {s: V.OS_2, r: /OS\/2/}, {
                s: V.SEARCH_BOT,
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
        for (let a of b) if (a.r.test(d)) {
            c = a.s;
            break
        }
        return {name: e[1], version: e[2], os: c}
    }

    function Vc() {
        return ca().name === Y.CHROME
    }

    function Lb() {
        return ca().name === Y.FIREFOX
    }

    function Hh() {
        return window.navigator.appVersion && null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && 35 >= window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]
    }

    function Md() {
        let d = ca();
        return d.name === Y.EDGE || d.name === Y.SAFARI ? !1 : !!navigator.userAgent.toLocaleLowerCase().match(/chrome\/[\d]./i)
    }

    function Ih(d, f) {
        var a =
            aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function Ab(d, f, a) {
        return new z((b, c) => {
            f.timeout = f.timeout || v.HTTP_CONNECT_TIMEOUT;
            f.responseType = f.responseType || "json";
            f.data && !a ? (f.data = w(f.data), Jh += Nd(f.data)) : a && (Jh += f.data.size);
            f.headers = f.headers || {};
            f.headers["Content-Type"] = f.headers["Content-Type"] || "application/json";
            f.method = "POST";
            f.url = d;
            Bb.request(f).then(a => {
                "string" == typeof a.data ? Ve += Nd(a.data) : a.data instanceof ArrayBuffer ||
                a.data instanceof Uint8Array ? Ve += a.data.byteLength : Ve += Nd(w(a.data));
                b(a.data)
            }).catch(a => {
                Bb.isCancel(a) ? c(new p(n.OPERATION_ABORTED, "cancel token canceled")) : "ECONNABORTED" === a.code ? c(new p(n.NETWORK_TIMEOUT, a.message)) : a.response ? c(new p(n.NETWORK_RESPONSE_ERROR, a.response.status)) : c(new p(n.NETWORK_ERROR, a.message))
            })
        })
    }

    async function Vl(d, f) {
        let a = new Blob([f.data], {type: "buffer"});
        return await Ab(d, function (a) {
            for (var b = 1; b < arguments.length; b++) {
                var d, g = null != arguments[b] ? arguments[b] : {};
                if (b %
                    2) r(d = Ih(Object(g), !0)).call(d, function (b) {
                    Ta(a, b, g[b])
                }); else if (ea) Ua(a, ea(g)); else {
                    var h;
                    r(h = Ih(Object(g))).call(h, function (b) {
                        X(a, b, T(g, b))
                    })
                }
            }
            return a
        }({}, f, {data: a, headers: {"Content-Type": "application/octet-stream"}}), !0)
    }

    function Kh(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function xa(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = Kh(Object(b), !0)).call(a, function (a) {
                Ta(d,
                    a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = Kh(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function Wc(d = {report: u}) {
        return function (f, a, b) {
            let c = f[a];
            if ("function" == typeof c) {
                let e = "AgoraRTCClient" === f.constructor.name ? "Client" : f.constructor.name;
                b.value = function (...b) {
                    var g;
                    let f = d.report.reportApiInvoke(this._sessionId || null, {
                        name: m(g = "".concat(e, ".")).call(g, a),
                        options: b,
                        tag: D.TRACER
                    });
                    try {
                        let a = c.apply(this, b);
                        return f.onSuccess(), a
                    } catch (q) {
                        throw f.onError(q), q;
                    }
                }
            }
            return b
        }
    }

    function We(d = {report: u}) {
        return function (f, a, b) {
            let c = f[a];
            if ("function" == typeof c) {
                let e = "AgoraRTCClient" === f.constructor.name ? "Client" : f.constructor.name;
                b.value = async function (...b) {
                    var g;
                    let f = d.report.reportApiInvoke(this._sessionId || null, {
                        name: m(g = "".concat(e, ".")).call(g, a),
                        options: b,
                        tag: D.TRACER
                    });
                    try {
                        let a = await c.apply(this, b);
                        return f.onSuccess(), a
                    } catch (q) {
                        throw f.onError(q), q;
                    }
                }
            }
            return b
        }
    }

    function Wl() {
        Lh ? (k.info("create audio context"), uc = new Lh, uc.onstatechange = () => {
            Xc.emit("state-change")
        },
            function (d) {
                function f(c) {
                    "running" === d.state ? a(!1) : "closed" !== d.state && (a(!0), c ? d.resume().then(b, b) : a(!1))
                }

                function a(a) {
                    if (P !== a) {
                        P = a;
                        for (let b = 0, d = q; b < d.length; b += 1) {
                            let e = d[b];
                            a ? window.addEventListener(e, c, {
                                capture: !0,
                                passive: !0
                            }) : window.removeEventListener(e, c, {capture: !0, passive: !0})
                        }
                    }
                }

                function b() {
                    f(!1)
                }

                function c() {
                    f(!0)
                }

                function e(a) {
                    if (!C) if (t.paused) if (a) {
                        g(!1);
                        C = !0;
                        a = void 0;
                        try {
                            (a = t.play()) ? a.then(h, h) : (t.addEventListener("playing", h), t.addEventListener("abort", h), t.addEventListener("error",
                                h))
                        } catch (ma) {
                            h()
                        }
                    } else g(!0); else g(!1)
                }

                function g(a) {
                    if (k !== a) {
                        k = a;
                        for (let b = 0, c = q; b < c.length; b++) {
                            let d = c[b];
                            a ? window.addEventListener(d, l, {
                                capture: !0,
                                passive: !0
                            }) : window.removeEventListener(d, l, {capture: !0, passive: !0})
                        }
                    }
                }

                function h() {
                    t.removeEventListener("playing", h);
                    t.removeEventListener("abort", h);
                    t.removeEventListener("error", h);
                    C = !1;
                    e(!1)
                }

                function l() {
                    e(!0)
                }

                let q = "click contextmenu auxclick dblclick mousedown mouseup touchend keydown keyup".split(" "), t,
                    P = !1, k = !1, C = !1;
                if (ca().os === V.IOS) {
                    var m =
                        d.createOscillator();
                    m.type = "square";
                    m.frequency.setValueAtTime(440, d.currentTime);
                    m.start();
                    let a = d.createGain();
                    a.gain.setValueAtTime(0, d.currentTime);
                    let b = d.createMediaStreamDestination();
                    m.connect(a);
                    a.connect(b);
                    m = document.createElement("div");
                    m.innerHTML = "<audio x-webkit-airplay='deny'></audio>";
                    t = m.children.item(0);
                    t.controls = !1;
                    t.disableRemotePlayback = !0;
                    t.preload = "auto";
                    t.srcObject = b.stream;
                    e(!0)
                }
                d.onstatechange = function () {
                    f(!0)
                };
                f(!1)
            }(uc)) : k.error("your browser is not support web audio")
    }

    function Zc() {
        if (!uc && (Wl(), !uc)) throw new p(n.NOT_SUPPORTED, "can not create audio context");
        return uc
    }

    function $c(d) {
        if (!function () {
            if (null !== Ye) return Ye;
            var a = Zc();
            let c = a.createBufferSource(), d = a.createGain();
            a = a.createGain();
            c.connect(d);
            c.connect(a);
            c.disconnect(d);
            a = !1;
            try {
                c.disconnect(d)
            } catch (g) {
                a = !0
            }
            return c.disconnect(), Ye = a, a
        }()) {
            k.debug("polyfill audio node");
            var f = d.connect, a = d.disconnect;
            d.connect = (a, c, e) => {
                var b;
                return d._inputNodes || (d._inputNodes = []), ia(b = d._inputNodes).call(b, a) ||
                (a instanceof AudioNode ? (d._inputNodes.push(a), f.call(d, a, c, e)) : f.call(d, a, c)), d
            };
            d.disconnect = (b, c, e) => {
                a.call(d);
                b ? bc(d._inputNodes, b) : d._inputNodes = [];
                for (let a of d._inputNodes) f.call(d, a)
            }
        }
    }

    function Ze(d, f) {
        let a = 1 / f, b = Zc(), c = b.createGain();
        c.gain.value = 0;
        c.connect(b.destination);
        let e = !1, g = () => {
            if (e) return void (c = null);
            const h = b.createOscillator();
            h.onended = g;
            h.connect(c);
            h.start(0);
            h.stop(b.currentTime + a);
            d(b.currentTime)
        };
        return g(), () => {
            e = !0
        }
    }

    async function Mh(d, f) {
        let a = (a, c) => a ? "number" !=
        typeof a ? a.max || a.exact || a.ideal || a.min || c : a : c;
        d = {
            audio: !1,
            video: {
                mandatory: {
                    chromeMediaSource: "desktop",
                    chromeMediaSourceId: d,
                    maxHeight: a(f.height, 1080),
                    maxWidth: a(f.width, 1920)
                }
            }
        };
        return f.frameRate && "number" != typeof f.frameRate ? (d.video.mandatory.maxFrameRate = f.frameRate.max, d.video.mandatory.minFrameRate = f.frameRate.min) : "number" == typeof f.frameRate && (d.video.mandatory.maxFrameRate = f.frameRate), await navigator.mediaDevices.getUserMedia(d)
    }

    async function Xl(d) {
        let f = await function (a) {
            return new z((b,
                          c) => {
                const d = document.createElement("div");
                d.innerText = "share screen";
                d.setAttribute("style", "text-align: center; height: 25px; line-height: 25px; border-radius: 4px 4px 0 0; background: #D4D2D4; border-bottom:  solid 1px #B9B8B9;");
                const g = document.createElement("div");
                g.setAttribute("style", "width: 100%; height: 500px; padding: 15px 25px ; box-sizing: border-box;");
                const h = document.createElement("div");
                h.innerText = "Agora Web Screensharing wants to share the contents of your screen with webdemo.agorabeckon.com. Choose what you'd like to share.";
                h.setAttribute("style", "height: 12%;");
                const f = document.createElement("div");
                f.setAttribute("style", "width: 100%; height: 80%; background: #FFF; border:  solid 1px #CBCBCB; display: flex; flex-wrap: wrap; justify-content: space-around; overflow-y: scroll; padding: 0 15px; box-sizing: border-box;");
                const q = document.createElement("div");
                q.setAttribute("style", "text-align: right; padding: 16px 0;");
                const t = document.createElement("button");
                t.innerHTML = "cancel";
                t.setAttribute("style", "width: 85px;");
                t.onclick =
                    () => {
                        document.body.removeChild(P);
                        const a = Error("NotAllowedError");
                        a.name = "NotAllowedError";
                        c(a)
                    };
                q.appendChild(t);
                g.appendChild(h);
                g.appendChild(f);
                g.appendChild(q);
                const P = document.createElement("div");
                P.setAttribute("style", "position: fixed; z-index: 99999999; top: 50%; left: 50%; width: 620px; height: 525px; background: #ECECEC; border-radius: 4px; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%);");
                P.appendChild(d);
                P.appendChild(g);
                document.body.appendChild(P);
                B(a).call(a,
                    a => {
                        if (a.id) {
                            const c = document.createElement("div");
                            c.setAttribute("style", "width: 30%; height: 160px; padding: 20px 0; text-align: center;box-sizing: content-box;");
                            let d = a.thumbnail;
                            const {width: e} = d.getSize();
                            1920 < e && (d = d.resize({width: 1920}));
                            c.innerHTML = '<div style="height: 120px; display: table-cell; vertical-align: middle;"><img style="width: 100%; background: #333333; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);" src=' + d.toDataURL() + ' /></div><span style="\theight: 40px; line-height: 40px; display: inline-block; width: 70%; word-break: keep-all; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' +
                                (a.name.replace(/[\u00A0-\u9999<>&]/g, function (a) {
                                    return "&#" + a.charCodeAt(0) + ";"
                                }) + "</span>");
                            c.onclick = () => {
                                document.body.removeChild(P);
                                b(a.id)
                            };
                            f.appendChild(c)
                        }
                    })
            })
        }(await Nh(d.mediaSource));
        return await Mh(f, d)
    }

    async function Nh(d) {
        let f = ["window", "screen"];
        "application" !== d && "window" !== d || (f = ["window"]);
        "screen" === d && (f = ["screen"]);
        let a = Oh();
        if (!a) throw new p(n.ELECTRON_IS_NULL);
        d = null;
        try {
            d = a.desktopCapturer.getSources({types: f})
        } catch (b) {
            d = null
        }
        d && d.then || (d = new z((b, c) => {
            a.desktopCapturer.getSources({types: f},
                (a, d) => {
                    a ? c(a) : b(d)
                })
        }));
        try {
            return await d
        } catch (b) {
            throw new p(n.ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR, b.toString());
        }
    }

    function Oh() {
        if (Od) return Od;
        try {
            return Od = window.require("electron"), Od
        } catch (d) {
            return null
        }
    }

    async function Cb(d, f) {
        let a = 0, b = null;
        for (; 2 > a;) try {
            b = await Yl(d, f, 0 < a);
            break
        } catch (g) {
            var c, e;
            if (g instanceof p) throw k.error(m(e = "[".concat(f, "] ")).call(e, g.toString())), g;
            let b = Pd(g.name || g.code || g, g.message);
            if (b.code === n.MEDIA_OPTION_INVALID) k.debug("[".concat(f, "] detect media option invalid, retry")),
                a += 1, await Db(500); else throw k.error(m(c = "[".concat(f, "] ")).call(c, b.toString())), b;
        }
        if (!b) throw new p(n.UNEXPECTED_ERROR, "can not find stream after getUserMedia");
        return b
    }

    async function Yl(d, f, a) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new p(n.NOT_SUPPORTED, "can not find getUserMedia");
        a && (d.video && (delete d.video.width, delete d.video.height), d.screen && (delete d.screen.width, delete d.screen.height));
        var b = fa;
        a = new MediaStream;
        if (d.audioSource && a.addTrack(d.audioSource),
        d.videoSource && a.addTrack(d.videoSource), !d.audio && !d.video && !d.screen) return k.debug("Using Video Source/ Audio Source"), a;
        if (d.screen) if (Oh()) d.screen.sourceId ? vc(a, await Mh(d.screen.sourceId, d.screen)) : vc(a, await Xl(d.screen)); else if (Vc() && d.screen.extensionId && d.screen.mandatory) {
            if (!b.getStreamFromExtension) throw new p(n.NOT_SUPPORTED, "This browser does not support screen sharing");
            k.debug("[".concat(f, '] Screen access on chrome stable, looking for extension"'));
            var c = await (e = d.screen.extensionId,
                g = f, new z((a, b) => {
                try {
                    chrome.runtime.sendMessage(e, {getStream: !0}, c => {
                        if (!c || !c.streamId) return k.error("[".concat(g, "] No response from Chrome Plugin. Plugin not installed properly"), c), void b(new p(n.CHROME_PLUGIN_NO_RESPONSE, "No response from Chrome Plugin. Plugin not installed properly"));
                        a(c.streamId)
                    })
                } catch (P) {
                    var c;
                    k.error(m(c = "[".concat(g, "] AgoraRTC screensharing plugin is not accessible(")).call(c, e, ")"), P.toString());
                    b(new p(n.CHROME_PLUGIN_NOT_INSTALL))
                }
            }));
            d.screen.mandatory.chromeMediaSourceId =
                c;
            vc(a, await navigator.mediaDevices.getUserMedia({video: {mandatory: d.screen.mandatory}}))
        } else if (b.getDisplayMedia) d.screen.mediaSource && Gh(d.screen.mediaSource), c = {
            width: d.screen.width,
            height: d.screen.height,
            frameRate: d.screen.frameRate,
            displaySurface: "screen" === d.screen.mediaSource ? "monitor" : d.screen.mediaSource
        }, k.debug("[".concat(f, "] getDisplayMedia:"), w({
            video: c,
            audio: !!d.screenAudio
        })), vc(a, await navigator.mediaDevices.getDisplayMedia({video: c, audio: !!d.screenAudio})); else {
            if (!Lb()) throw k.error("[".concat(f,
                "] This browser does not support screenSharing")), new p(n.NOT_SUPPORTED, "This browser does not support screen sharing");
            d.screen.mediaSource && Gh(d.screen.mediaSource);
            b = {
                video: {
                    mediaSource: d.screen.mediaSource,
                    width: d.screen.width,
                    height: d.screen.height,
                    frameRate: d.screen.frameRate
                }
            };
            k.debug(m(c = "[".concat(f, "] getUserMedia: ")).call(c, w(b)));
            vc(a, await navigator.mediaDevices.getUserMedia(b))
        }
        var e, g;
        if (!d.video && !d.audio) return a;
        d = {video: d.video, audio: d.audio};
        k.debug("[".concat(f, "] GetUserMedia"),
            w(d));
        f = ca();
        let h;
        c = null;
        f.name !== Y.SAFARI && f.os !== V.IOS || (c = await $e.lock());
        try {
            h = await navigator.mediaDevices.getUserMedia(d)
        } catch (l) {
            throw c && c(), l;
        }
        return d.audio && (Ph = !0), d.video && (Qh = !0), vc(a, h), c && c(), a
    }

    function Pd(d, f) {
        switch (d) {
            case "Starting video failed":
            case "OverconstrainedError":
            case "TrackStartError":
                var a;
                return new p(n.MEDIA_OPTION_INVALID, m(a = "".concat(d, ": ")).call(a, f));
            case "NotFoundError":
            case "DevicesNotFoundError":
                var b;
                return new p(n.DEVICE_NOT_FOUND, m(b = "".concat(d, ": ")).call(b,
                    f));
            case "NotSupportedError":
                var c;
                return new p(n.NOT_SUPPORTED, m(c = "".concat(d, ": ")).call(c, f));
            case "NotReadableError":
                var e;
                return new p(n.NOT_READABLE, m(e = "".concat(d, ": ")).call(e, f));
            case "InvalidStateError":
            case "NotAllowedError":
            case "PERMISSION_DENIED":
            case "PermissionDeniedError":
                var g;
                return new p(n.PERMISSION_DENIED, m(g = "".concat(d, ": ")).call(g, f));
            case "ConstraintNotSatisfiedError":
                var h;
                return new p(n.CONSTRAINT_NOT_SATISFIED, m(h = "".concat(d, ": ")).call(h, f));
            default:
                var l;
                return k.error("getUserMedia unexpected error",
                    d), new p(n.UNEXPECTED_ERROR, m(l = "".concat(d, ": ")).call(l, f))
        }
    }

    function vc(d, f) {
        let a = d.getVideoTracks()[0], b = d.getAudioTracks()[0], c = f.getVideoTracks()[0];
        (f = f.getAudioTracks()[0]) && (b && d.removeTrack(b), d.addTrack(f));
        c && (a && d.removeTrack(a), d.addTrack(c))
    }

    function Qd() {
        if (!af) {
            let d = f => {
                f.preventDefault();
                af = !1;
                document.body.removeEventListener("touchstart", d, !0);
                document.body.removeEventListener("mousedown", d, !0)
            };
            af = !0;
            document.body.addEventListener("touchstart", d, !0);
            document.body.addEventListener("mousedown",
                d, !0);
            Rh.emit("autoplay-failed")
        }
    }

    function Sh(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function bf(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = Sh(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = Sh(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function Th(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d,
                    a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function Eb(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = Th(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = Th(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function Zl(d) {
        if (!d.address || !d.tcp) throw new p(n.UNEXPECTED_RESPONSE, "Invalid address format ".concat(d));
        return d.address.match(/^[\.:\d]+$/) ? "".concat(d.address.replace(/[^\d]/g, "-"), ".edge.agora.io") :
            (k.info("Cannot recognized as IP address ".concat(d.address, ". Used As Host instead")), m(f = "".concat(d.address, ":")).call(f, d.tcp));
        var f
    }

    function Wb(d) {
        return "number" == typeof d ? d : d.exact || d.ideal || d.max || d.min || 0
    }

    function Uh(d, f) {
        let a = d.videoSend[0];
        if (!a) return null;
        f = f && f.videoSend[0] ? f.videoSend[0].inputFrame : void 0;
        d = {
            id: ta(10, ""),
            timestamp: (new Date(d.timestamp)).toISOString(),
            mediaType: "video",
            type: "ssrc",
            ssrc: a.ssrc.toString()
        };
        return a.inputFrame && (f && a.inputFrame.height === f.height || (d.A_fhi =
            a.inputFrame.height ? a.inputFrame.height.toString() : "0"), f && a.inputFrame.width === f.width || (d.A_fwi = a.inputFrame.width ? a.inputFrame.width.toString() : "0"), f && a.inputFrame.frameRate === f.frameRate || (d.A_fri = a.inputFrame.frameRate ? a.inputFrame.frameRate.toString() : "0")), d
    }

    function Vh(d) {
        return 0 <= d && .17 > d ? 1 : .17 <= d && .36 > d ? 2 : .36 <= d && .59 > d ? 3 : .59 <= d && 1 >= d ? 4 : 1 < d ? 5 : 0
    }

    function $l(d, f) {
        let a = {};
        d.height && d.width && (f = f._videoHeight || f.getMediaStreamTrack(!0).getSettings().height, a.scaleResolutionDownBy = f ? f / Wb(d.height) :
            4);
        return a.maxFramerate = d.framerate ? Wb(d.framerate) : void 0, a.maxBitrate = d.bitrate ? 1E3 * d.bitrate : void 0, a
    }

    function Wh(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function cf(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = Wh(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = Wh(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function Nd(d) {
        return window.TextEncoder ?
            (new TextEncoder).encode(d).length : d.length
    }

    function Db(d) {
        return new z(f => {
            window.setTimeout(f, d)
        })
    }

    function am(d) {
        let f = new p(n.TIMEOUT, "timeout");
        return new z((a, b) => {
            window.setTimeout(() => b(f), d)
        })
    }

    function ta(d = 7, f) {
        var a, b;
        let c = Math.random().toString(16).substr(2, d).toLowerCase();
        return c.length === d ? m(a = "".concat(f)).call(a, c) : m(b = "".concat(f)).call(b, c) + ta(d - c.length, "")
    }

    function Xh(d) {
        return new z((f, a) => {
            let b = !1, c = document.createElement("video");
            c.setAttribute("autoplay", "");
            c.setAttribute("muted",
                "");
            c.muted = !0;
            c.autoplay = !0;
            c.setAttribute("playsinline", "");
            c.setAttribute("style", "position: absolute; top: 0; left: 0; width: 1px; height: 1px");
            document.body.appendChild(c);
            c.addEventListener("playing", () => {
                !c.videoWidth && Lb() || (b = !0, c.srcObject = null, c.remove(), f([c.videoWidth, c.videoHeight]))
            });
            c.srcObject = new MediaStream([d]);
            c.play().catch(Rd);
            mb(() => {
                b || (c.srcObject = null, c.remove(), f([c.videoWidth, c.videoHeight]))
            }, 4E3)
        })
    }

    function ad(d) {
        return z.all(B(d).call(d, d => d.then(a => {
            throw a;
        }, a =>
            a))).then(d => {
            throw d;
        }, d => d)
    }

    function za(d, f, ...a) {
        return 0 === d.getListeners(f).length ? z.reject(new p(n.UNEXPECTED_ERROR, "can not emit promise")) : new z((b, c) => {
            d.emit(f, ...a, b, c)
        })
    }

    function Ka(d, f, ...a) {
        return 0 === d.getListeners(f).length ? z.resolve() : za(d, f, ...a)
    }

    function cc(d, f, ...a) {
        return 0 === d.getListeners(f).length ? null : bd(d, f, ...a)
    }

    function bd(d, f, ...a) {
        let b = null, c = null;
        if (d.emit(f, ...a, a => {
            b = a
        }, a => {
            c = a
        }), null !== c) throw c;
        if (null === b) throw new p(n.UNEXPECTED_ERROR, "handler is not sync");
        return b
    }

    function bc(d, f) {
        f = N(d).call(d, f);
        -1 !== f && Oa(d).call(d, f, 1)
    }

    function Yh(d) {
        let f = [];
        return r(d).call(d, a => {
            -1 === N(f).call(f, a) && f.push(a)
        }), f
    }

    function Va(d) {
        z.resolve().then(d)
    }

    function cd(d, f) {
        Zh[f] || (Zh[f] = !0, d())
    }

    function df(d) {
        d = window.atob(d);
        let f = new Uint8Array(new ArrayBuffer(d.length));
        for (let a = 0; a < d.length; a += 1) f[a] = d.charCodeAt(a);
        return f
    }

    function Sd(d) {
        let f = "";
        for (let a = 0; a < d.length; a += 1) f += String.fromCharCode(d[a]);
        return window.btoa(f)
    }

    function Td(d) {
        var f = bm[Math.floor(d / 1E4)];
        if (!f) return {
            desc: "unkonw error",
            retry: !1
        };
        f = f[d % 1E4];
        if (!f) {
            if (Math.floor(d / 1E4) === wc.ACCESS_POINT) {
                d %= 1E4;
                if ("1" === d.toString()[0]) return {desc: d.toString(), retry: !1};
                if ("2" === d.toString()[0]) return {desc: d.toString(), retry: !0}
            }
            return {desc: "unkonw error", retry: !1}
        }
        return f
    }

    function $h(d) {
        return cm[d] || {desc: "UNKNOW_ERROR_".concat(d), action: "failed"}
    }

    function Mb(d, f, a, b) {
        let c = Ia({}, La, b), e = c.timeout, g = async () => {
            await Db(e);
            e *= c.timeoutFactor;
            e = Math.min(c.maxRetryTimeout, e)
        }, h = !1;
        b = new z(async (b, e) => {
            f = f || (() => !1);
            a = a || (() => !0);
            for (let l =
                0; l < c.maxRetryCount; l += 1) {
                if (h) return e(new p(n.OPERATION_ABORTED));
                try {
                    const a = await d();
                    if (!f(a, l) || l + 1 === c.maxRetryCount) return b(a);
                    await g()
                } catch (P) {
                    if (!a(P, l) || l + 1 === c.maxRetryCount) return e(P);
                    await g()
                }
            }
        });
        return b.cancel = () => h = !0, b
    }

    async function dm() {
        function d(b) {
            let c = h["_" + b];
            var d;
            return d = "Cannot call unknown function " + b + ", make sure it is exported", c || a("Assertion failed: " + d), c
        }

        function f(a, b, c, e, g) {
            g = {
                string: function (a) {
                    let b = 0;
                    if (null != a && 0 !== a) {
                        var c = 1 + (a.length << 2);
                        b = M(c);
                        var d =
                            u, e = b;
                        if (0 < c) {
                            c = e + c - 1;
                            for (let b = 0; b < a.length; ++b) {
                                let g = a.charCodeAt(b);
                                55296 <= g && 57343 >= g && (g = 65536 + ((1023 & g) << 10) | 1023 & a.charCodeAt(++b));
                                if (127 >= g) {
                                    if (e >= c) break;
                                    d[e++] = g
                                } else {
                                    if (2047 >= g) {
                                        if (e + 1 >= c) break;
                                        d[e++] = 192 | g >> 6
                                    } else {
                                        if (65535 >= g) {
                                            if (e + 2 >= c) break;
                                            d[e++] = 224 | g >> 12
                                        } else {
                                            if (e + 3 >= c) break;
                                            d[e++] = 240 | g >> 18;
                                            d[e++] = 128 | g >> 12 & 63
                                        }
                                        d[e++] = 128 | g >> 6 & 63
                                    }
                                    d[e++] = 128 | 63 & g
                                }
                            }
                            d[e] = 0
                        }
                    }
                    return b
                }, array: function (a) {
                    const b = M(a.length);
                    return r.set(a, b), b
                }
            };
            let h = d(a), f = [];
            a = 0;
            if (e) for (let b = 0; b < e.length; b++) {
                let d =
                    g[c[b]];
                d ? (0 === a && (a = J()), f[b] = d(e[b])) : f[b] = e[b]
            }
            c = h.apply(null, f);
            return c = function (a) {
                if ("string" === b) if (e = a) {
                    {
                        a = u;
                        var c = e + d;
                        var d = e;
                        let b = "";
                        for (; a[d] && !(d >= c);) ++d;
                        if (16 < d - e && a.subarray && p) a = p.decode(a.subarray(e, d)); else {
                            for (; e < d;) {
                                c = a[e++];
                                if (!(128 & c)) {
                                    b += String.fromCharCode(c);
                                    continue
                                }
                                let d = 63 & a[e++];
                                if (192 == (224 & c)) {
                                    b += String.fromCharCode((31 & c) << 6 | d);
                                    continue
                                }
                                let g = 63 & a[e++];
                                (c = 224 == (240 & c) ? (15 & c) << 12 | d << 6 | g : (7 & c) << 18 | d << 12 | g << 6 | 63 & a[e++], 65536 > c) ? b += String.fromCharCode(c) : (c -= 65536, b +=
                                    String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c))
                            }
                            a = b
                        }
                    }
                } else a = ""; else a = "boolean" === b ? !!a : a;
                return a;
                var e
            }(c), 0 !== a && L(a), c
        }

        function a(a) {
            h.onAbort && h.onAbort(a);
            C(a += "");
            n = !0;
            throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
        }

        function b(a) {
            for (; 0 < a.length;) {
                let b = a.shift();
                if ("function" == typeof b) {
                    b(h);
                    continue
                }
                let c = b.func;
                "number" == typeof c ? void 0 === b.arg ? v.get(c)() : v.get(c)(b.arg) : c(void 0 === b.arg ? null : b.arg)
            }
        }

        function c(a) {
            function c() {
                if (!I && (I = !0,
                    h.calledRun = !0, !n)) {
                    b(w);
                    b(B);
                    h.onRuntimeInitialized && h.onRuntimeInitialized();
                    if (h.postRun) for ("function" == typeof h.postRun && (h.postRun = [h.postRun]); h.postRun.length;) {
                        var a = h.postRun.shift();
                        D.unshift(a)
                    }
                    b(D)
                }
            }

            0 < y || (!function () {
                if (h.preRun) for ("function" == typeof h.preRun && (h.preRun = [h.preRun]); h.preRun.length;) {
                    var a = h.preRun.shift();
                    x.unshift(a)
                }
                b(x)
            }(), 0 < y || (h.setStatus ? (h.setStatus("Running..."), mb(function () {
                mb(function () {
                    h.setStatus("")
                }, 1);
                c()
            }, 1)) : c()))
        }

        var e, g;
        if (ef) return ef;
        let h = {}, l,
            q = {};
        for (l in h) Object.prototype.hasOwnProperty.call(h, l) && (q[l] = h[l]);
        let t = !1, P = !1;
        t = "object" == typeof window;
        P = "function" == typeof importScripts;
        let k = "";
        (t || P) && (P ? k = self.location.href : "undefined" != typeof document && document.currentScript && (k = document.currentScript.src), k = 0 !== N(k).call(k, "blob:") ? k.substr(0, gm(k).call(k, "/") + 1) : "");
        h.print || pa(e = console.log).call(e, console);
        let C = h.printErr || pa(g = console.warn).call(g, console);
        for (l in q) Object.prototype.hasOwnProperty.call(q, l) && (h[l] = q[l]);
        let m;
        q = null;
        "object" != typeof WebAssembly && a("no native wasm support detected");
        let n = !1, p = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
        let r, u, v, x = [], w = [], B = [], D = [];
        w.push({
            func: function () {
                K()
            }
        });
        let y = 0, E = null;
        h.preloadedImages = {};
        h.preloadedAudios = {};
        e = "deflate.wasm";
        var H;
        Rc(H = e).call(H, "data:application/octet-stream;base64,") || (e = function (a) {
            return h.locateFile ? h.locateFile(a, k) : k + a
        }(e));
        let G = {
            emscripten_memcpy_big: function (a,
                                             b, c) {
                var d = u.copyWithin;
                (u === ai || u instanceof Array && d === ai.copyWithin ? hm : d).call(u, a, b, b + c)
            }, emscripten_resize_heap: function (b) {
                a("OOM")
            }
        };
        await async function () {
            function b(a, b) {
                h.asm = a.exports;
                m = h.asm.memory;
                a = m.buffer;
                h.HEAP8 = r = new Int8Array(a);
                h.HEAP16 = new Int16Array(a);
                h.HEAP32 = new Int32Array(a);
                h.HEAPU8 = u = new Uint8Array(a);
                h.HEAPU16 = new Uint16Array(a);
                h.HEAPU32 = new Uint32Array(a);
                h.HEAPF32 = new Float32Array(a);
                h.HEAPF64 = new Float64Array(a);
                v = h.asm.__indirect_function_table;
                if (y--, h.monitorRunDependencies &&
                h.monitorRunDependencies(y), 0 == y && E) a = E, E = null, a()
            }

            let c = {env: G, wasi_snapshot_preview1: G};
            if (y++, h.monitorRunDependencies && h.monitorRunDependencies(y), h.instantiateWasm) try {
                return h.instantiateWasm(c, b)
            } catch (fm) {
                return C("Module.instantiateWasm callback failed with error: " + fm), !1
            }
            return await function (b) {
                return (new z((a, b) => {
                    a(im().buffer)
                })).then(function (a) {
                    return WebAssembly.instantiate(a, c)
                }).then(b, function (b) {
                    C("failed to asynchronously prepare wasm: " + b);
                    a(b)
                })
            }(function (a) {
                b(a.instance)
            }),
                {}
        }();
        let I, K = h.___wasm_call_ctors = function () {
            return (K = h.___wasm_call_ctors = h.asm.__wasm_call_ctors).apply(null, arguments)
        }, O = h._malloc = function () {
            return (O = h._malloc = h.asm.malloc).apply(null, arguments)
        };
        h._free = function () {
            return (h._free = h.asm.free).apply(null, arguments)
        };
        h.___errno_location = function () {
            return (h.___errno_location = h.asm.__errno_location).apply(null, arguments)
        };
        h._zlibCompress = function () {
            return (h._zlibCompress = h.asm.zlibCompress).apply(null, arguments)
        };
        let J = h.stackSave = function () {
            return (J =
                h.stackSave = h.asm.stackSave).apply(null, arguments)
        }, L = h.stackRestore = function () {
            return (L = h.stackRestore = h.asm.stackRestore).apply(null, arguments)
        }, M = h.stackAlloc = function () {
            return (M = h.stackAlloc = h.asm.stackAlloc).apply(null, arguments)
        };
        if (h.ccall = f, h.cwrap = function (a, b, c, e) {
            let g = jm(c = c || []).call(c, function (a) {
                return "number" === a
            });
            return "string" !== b && g && !e ? d(a) : function () {
                return f(a, b, c, arguments)
            }
        }, h.allocate = function (a, b) {
            let c;
            return c = 1 == b ? M(a.length) : O(a.length), a.subarray || Da(a) ? u.set(a, c) :
                u.set(new Uint8Array(a), c), c
        }, E = function em() {
            I || c();
            I || (E = em)
        }, h.run = c, h.preInit) for ("function" == typeof h.preInit && (h.preInit = [h.preInit]); 0 < h.preInit.length;) h.preInit.pop()();
        return c(), ef = h, h
    }

    function bi(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function ff(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = bi(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b));
            else {
                var c;
                r(c = bi(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function ci(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function km(d, f, a, b, c) {
        gf += 1;
        let e = {
            sid: a.sid,
            command: "convergeAllocateEdge",
            uid: "666",
            appId: a.appId,
            ts: Math.floor(x() / 1E3),
            seq: gf,
            requestId: gf,
            version: Za,
            cname: a.cname
        }, g = {service_name: f, json_body: w(e)}, h, l, q = d[0];
        return Mb(async () => {
            h = x();
            var a = await Ab(q, {
                data: g, cancelToken: b, headers: {
                    "X-Packet-Service-Type": "0",
                    "X-Packet-URI": "61"
                }
            });
            if (l = x() - h, 0 !== a.code) {
                var c = new p(n.UNEXPECTED_RESPONSE, "live streaming ap error, code" + a.code, {
                    retry: !0,
                    responseTime: l
                });
                throw k.error(c.toString()), c;
            }
            a = JSON.parse(a.json_body);
            if (200 !== a.code) throw a = new p(n.UNEXPECTED_RESPONSE, m(c = "live streaming app center error, code: ".concat(a.code, ", reason: ")).call(c, a.reason), {
                code: a.code,
                responseTime: l
            }), k.error(a.toString()), a;
            if (!a.servers || 0 === a.servers.length) throw c = new p(n.UNEXPECTED_RESPONSE, "live streaming app center empty server",
                {code: a.code, responseTime: l}), k.error(c.toString()), c;
            c = function (a, b) {
                var c;
                return {
                    addressList: B(c = a.servers).call(c, a => {
                        var c, d;
                        return m(c = m(d = "wss://".concat(a.address.replace(/\./g, "-"), ".edge.agora.io:")).call(d, a.wss, "?serviceName=")).call(c, encodeURIComponent(b))
                    }), workerToken: a.workerToken, vid: a.vid
                }
            }(a, f);
            return v.LIVE_STREAMING_ADDRESS && (c.addressList = v.LIVE_STREAMING_ADDRESS instanceof Array ? v.LIVE_STREAMING_ADDRESS : [v.LIVE_STREAMING_ADDRESS]), function (a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c,
                        d = null != arguments[b] ? arguments[b] : {};
                    if (b % 2) r(c = ci(Object(d), !0)).call(c, function (b) {
                        Ta(a, b, d[b])
                    }); else if (ea) Ua(a, ea(d)); else {
                        var e;
                        r(e = ci(Object(d))).call(e, function (b) {
                            X(a, b, T(d, b))
                        })
                    }
                }
                return a
            }({}, c, {responseTime: l})
        }, (b, c) => (u.apworkerEvent(a.sid, {
            success: !0,
            sc: 200,
            serviceName: f,
            responseDetail: w(b.addressList),
            firstSuccess: 0 === c,
            responseTime: l,
            serverIp: d[c % d.length]
        }), !1), (b, c) => (u.apworkerEvent(a.sid, {
            success: !1,
            sc: b.data && b.data.code || 200,
            serviceName: f,
            responseTime: l,
            serverIp: d[c % d.length]
        }),
        !!(b.code !== n.OPERATION_ABORTED && b.code !== n.UNEXPECTED_RESPONSE || b.data && b.data.retry) && (q = d[(c + 1) % d.length], !0)), c)
    }

    function di({url: d, areaCode: f}, a, b, c) {
        let e = x(), g = {
            opid: 133,
            flag: 4096,
            ts: x(),
            key: a.token,
            cname: a.cname,
            sid: a.sid,
            detail: {6: a.stringUid, 11: f},
            uid: a.uid || 0
        };
        a.multiIP && a.multiIP.gateway_ip && (g.detail[5] = w({
            vocs_ip: [a.multiIP.uni_lbs_ip],
            vos_ip: [a.multiIP.gateway_ip]
        }));
        return Mb(async () => {
            let a = await Ab(d + "".concat(-1 === N(d).call(d, "?") ? "?" : "&", "action=wrtc_gateway"), {
                data: g, cancelToken: b,
                headers: {"X-Packet-Service-Type": 0, "X-Packet-URI": 69}
            });
            if (a.addresses && 0 === a.addresses.length && 0 === a.code) throw new p(n.VOID_GATEWAY_ADDRESS, "", {
                retry: !0,
                csIp: a.detail && a.detail[502]
            });
            if (v.GATEWAY_ADDRESS && 0 < v.GATEWAY_ADDRESS.length) {
                var c;
                console.log(v.GATEWAY_ADDRESS);
                let b = B(c = v.GATEWAY_ADDRESS).call(c, (b, c) => ({
                    ip: b.ip,
                    port: b.port,
                    ticket: a.addresses[0] && a.addresses[0].ticket
                }));
                a.addresses = b
            }
            return function (a, b) {
                var c;
                let d = v.GATEWAY_DOMAINS, e = d[1] && -1 !== N(b).call(b, d[1]) ? 1 : 0;
                return a.addresses =
                    a.addresses || [], {
                    gatewayAddrs: B(c = a.addresses).call(c, a => {
                        var b, c, g;
                        return a.ip.match(/^[\.:\d]+$/) ? m(b = m(c = "".concat(a.ip.replace(/[^\d]/g, "-"), ".")).call(c, d[e++ % d.length], ":")).call(b, a.port) : (k.info("Cannot recognized as IP address ".concat(a.ip, ". Used As Host instead")), m(g = "".concat(a.ip, ":")).call(g, a.port))
                    }),
                    uid: a.uid,
                    cid: a.cid,
                    vid: a.detail && a.detail[8],
                    uni_lbs_ip: a.detail && a.detail[1],
                    res: a,
                    csIp: a.detail && a.detail[502]
                }
            }(a, d)
        }, b => {
            if (0 === b.res.code) return u.joinChooseServer(a.sid, {
                lts: e,
                succ: !0,
                csAddr: d,
                serverList: b.gatewayAddrs,
                ec: null,
                cid: b.res.cid.toString(),
                uid: b.res.uid.toString(),
                csIp: b.csIp
            }), !1;
            let c = Td(b.res.code);
            throw new p(n.CAN_NOT_GET_GATEWAY_SERVER, c.desc, {retry: c.retry, csIp: b.csIp});
        }, b => {
            return b.code !== n.OPERATION_ABORTED && (b.code === n.CAN_NOT_GET_GATEWAY_SERVER || b.code === n.VOID_GATEWAY_ADDRESS ? (u.joinChooseServer(a.sid, {
                lts: e,
                succ: !1,
                csAddr: d,
                serverList: null,
                ec: b.message,
                csIp: b.data && b.data.csIp
            }), k.warning(m(c = m(g = m(h = "[".concat(a.clientId, "] Choose server ")).call(h,
                d, " failed, message: ")).call(g, b.message, ", retry: ")).call(c, b.data.retry)), b.data.retry) : (u.joinChooseServer(a.sid, {
                lts: e,
                succ: !1,
                csAddr: d,
                serverList: null,
                ec: b.code,
                csIp: b.data && b.data.csIp
            }), k.warning("[".concat(a.clientId, "] Choose server network error, retry"), b), !0));
            var c, g, h
        }, c)
    }

    async function dd(d, f, a) {
        return {
            gatewayInfo: await async function (a, c, d) {
                var b, e;
                const f = B(b = Da(e = v.WEBCS_DOMAIN).call(e, 0, v.AJAX_REQUEST_CONCURRENT)).call(b, b => {
                    var c;
                    return {
                        url: a.proxyServer ? m(c = "https://".concat(a.proxyServer,
                            "/ap/?url=")).call(c, b + "/api/v1") : "https://".concat(b, "/api/v1"), areaCode: hf()
                    }
                });
                let q = null;
                return q = await ad([(async () => await Ud({
                    fragementLength: v.FRAGEMENT_LENGTH,
                    referenceList: f,
                    asyncMapHandler: b => (k.debug("[".concat(a.clientId, "] Connect to choose_server:"), b.url), di(b, a, c, d)),
                    allFailedhandler: a => {
                        throw a[0];
                    }
                }))(), (async () => {
                    var b;
                    if (await Db(1E3), null !== q) return q;
                    const e = B(b = v.WEBCS_DOMAIN_BACKUP_LIST).call(b, b => {
                        var c;
                        return {
                            url: a.proxyServer ? m(c = "https://".concat(a.proxyServer, "/ap/?url=")).call(c,
                                b + "/api/v1") : "https://".concat(b, "/api/v1"), areaCode: hf()
                        }
                    });
                    return await Ud({
                        fragementLength: v.FRAGEMENT_LENGTH,
                        referenceList: e,
                        asyncMapHandler: b => (k.debug("[".concat(a.clientId, "] Connect to backup choose_server:"), b.url), di(b, a, c, d)),
                        allFailedhandler: a => {
                            throw a[0];
                        }
                    })
                })()]), q
            }(d, f, a)
        }
    }

    async function ei(d, f, a, b) {
        var c, e, g;
        if ("disabled" === d.cloudProxyServer) return b ? await dd(d, f, a) : void 0;
        let h, l;
        return b ? "normal" !== d.cloudProxyServer ? [h, l] = await z.all([Vd(d, f, a), dd(d, f, a)]) : (h = await Vd(d, f, a),
            d.proxyServer = h.addresses[0], u.setProxyServer(d.proxyServer), k.setProxyServer(d.proxyServer), l = await dd(d, f, a)) : (l = void 0, "normal" !== d.cloudProxyServer ? h = await Vd(d, f, a) : (h = await Vd(d, f, a), d.proxyServer = h.addresses[0], u.setProxyServer(d.proxyServer), k.setProxyServer(d.proxyServer))), d.turnServer = {
            mode: "manual", servers: B(c = h.addresses).call(c, a => ({
                turnServerURL: a,
                tcpport: "proxy3" === d.cloudProxyServer ? void 0 : h.serverResponse.tcpport ? h.serverResponse.tcpport : db.tcpport,
                udpport: "proxy4" === d.cloudProxyServer ?
                    void 0 : h.serverResponse.udpport ? h.serverResponse.udpport : db.udpport,
                username: h.serverResponse.username || db.username,
                password: h.serverResponse.password || db.password,
                forceturn: "proxy4" !== d.cloudProxyServer && "proxy5" !== d.cloudProxyServer,
                security: "proxy5" === d.cloudProxyServer
            }))
        }, k.debug(m(e = m(g = "[".concat(d.clientId, "] set proxy server: ")).call(g, d.proxyServer, ", mode: ")).call(e, d.cloudProxyServer)), l
    }

    async function jf(d, f, a, b) {
        var c;
        let e = Da(c = v.ACCOUNT_REGISTER).call(c, 0, v.AJAX_REQUEST_CONCURRENT);
        c = [];
        c = f.proxyServer ? B(e).call(e, a => {
            var b;
            return m(b = "https://".concat(f.proxyServer, "/ap/?url=")).call(b, a + "/api/v1")
        }) : B(e).call(e, a => "https://".concat(a, "/api/v1"));
        return (await async function (a, b, c, d, e) {
            let g = x(), h = {sid: c.sid, opid: 10, appid: c.appId, string_uid: b}, f = a[0];
            c = await Mb(() => Ab(f + "".concat(-1 === N(f).call(f, "?") ? "?" : "&", "action=stringuid"), {
                data: h,
                cancelToken: d,
                headers: {"X-Packet-Service-Type": 0, "X-Packet-URI": 72}
            }), (c, d) => {
                if (0 === c.code) {
                    var e;
                    if (0 >= c.uid || c.uid >= Math.pow(2, 32)) throw k.error(m(e =
                        "Invalid Uint Uid ".concat(b, " => ")).call(e, c.uid), c), u.reqUserAccount(h.sid, {
                        lts: g,
                        success: !1,
                        serverAddr: f,
                        stringUid: h.string_uid,
                        uid: c.uid,
                        errorCode: n.INVALID_UINT_UID_FROM_STRING_UID,
                        extend: h
                    }), new p(n.INVALID_UINT_UID_FROM_STRING_UID);
                    return u.reqUserAccount(h.sid, {
                        lts: g,
                        success: !0,
                        serverAddr: f,
                        stringUid: h.string_uid,
                        uid: c.uid,
                        errorCode: null,
                        extend: h
                    }), !1
                }
                e = Td(c.code);
                return e.retry && (f = a[(d + 1) % a.length]), u.reqUserAccount(h.sid, {
                    lts: g, success: !1, serverAddr: f, stringUid: h.string_uid, uid: c.uid,
                    errorCode: e.desc, extend: h
                }), e.retry
            }, (b, c) => b.code !== n.OPERATION_ABORTED && (u.reqUserAccount(h.sid, {
                lts: g,
                success: !1,
                serverAddr: f,
                stringUid: h.string_uid,
                uid: null,
                errorCode: b.code,
                extend: h
            }), f = a[(c + 1) % a.length], !0), e);
            if (0 !== c.code) throw c = Td(c.code), new p(n.UNEXPECTED_RESPONSE, c.desc);
            return c
        }(c, d, f, a, b)).uid
    }

    async function Vd(d, f, a) {
        var b, c = x(), e = B(b = v["normal" === d.cloudProxyServer ? "PROXY_CS" : "WEBCS_DOMAIN"]).call(b, a => {
            var b;
            return d.proxyServer ? m(b = "https://".concat(d.proxyServer, "/ap/?url=")).call(b,
                a + "/api/v1") : "https://".concat(a, "/api/v1")
        });
        if ("proxy3" === d.cloudProxyServer || "proxy4" === d.cloudProxyServer || "proxy5" === d.cloudProxyServer) {
            c = B(e).call(e, a => ({url: a, areaCode: hf()}));
            var g = null;
            g = await Ud({
                fragementLength: v.FRAGEMENT_LENGTH,
                referenceList: c,
                asyncMapHandler: b => function ({url: a, areaCode: b}, c, d, e) {
                    let g = x(), h = {
                        opid: 133,
                        flag: "proxy5" === c.cloudProxyServer ? 4194304 : 1048576,
                        ts: +new Date,
                        key: c.token,
                        cname: c.cname,
                        sid: c.sid,
                        detail: {6: c.stringUid, 11: b},
                        uid: c.uid || 0
                    };
                    return Mb(async () => await Ab(a,
                        {data: h, cancelToken: d, headers: {"X-Packet-Service-Type": 0, "X-Packet-URI": 69}}), b => {
                        var d;
                        if (0 === b.code) return u.joinWebProxyAP(c.sid, {
                            lts: g,
                            sucess: 1,
                            apServerAddr: a,
                            turnServerAddrList: B(d = b.addresses).call(d, a => a.ip).join(","),
                            errorCode: null,
                            eventType: c.cloudProxyServer
                        }), !1;
                        b = Td(b.code);
                        throw new p(n.CAN_NOT_GET_GATEWAY_SERVER, b.desc, {retry: b.retry});
                    }, b => {
                        return b.code !== n.OPERATION_ABORTED && (b.code === n.CAN_NOT_GET_GATEWAY_SERVER || b.code === n.VOID_GATEWAY_ADDRESS ? (u.joinWebProxyAP(h.sid, {
                            lts: g, sucess: 0,
                            apServerAddr: a, turnServerAddrList: null, errorCode: b.code, eventType: c.cloudProxyServer
                        }), k.warning(m(d = m(e = m(f = "[".concat(c.clientId, "] proxy ap server ")).call(f, a, " failed, message: ")).call(e, b.message, ", retry: ")).call(d, b.data.retry)), b.data.retry) : (u.joinWebProxyAP(h.sid, {
                            lts: g,
                            sucess: 0,
                            apServerAddr: a,
                            turnServerAddrList: null,
                            errorCode: b.code,
                            eventType: c.cloudProxyServer
                        }), !0));
                        var d, e, f
                    }, e)
                }(b, d, f, a),
                allFailedhandler: () => {
                    throw k.error("[".concat(d.clientId, "] can not get proxy server after trying several times")),
                        new p(n.CAN_NOT_GET_PROXY_SERVER);
                }
            });
            c = g.addresses;
            if (!c || 0 === c.length) throw k.error("[".concat(d.clientId, "] can not get proxy server, empty proxy server list")), new p(n.CAN_NOT_GET_PROXY_SERVER, "empty proxy server list");
            return {
                addresses: B(c).call(c, a => a.ip),
                serverResponse: {
                    tcpport: c[0].port || 443,
                    udpport: c[0].port || db.udpport,
                    username: db.username,
                    password: db.password
                }
            }
        }
        b = null;
        b = await Ud({
            fragementLength: v.FRAGEMENT_LENGTH, referenceList: e, asyncMapHandler: b => function (a, b, c, d) {
                let e = x(), g = {
                    command: "convergeAllocateEdge",
                    sid: b.sid,
                    appId: b.appId,
                    token: b.token,
                    uid: b.uid,
                    cname: b.cname,
                    ts: Math.floor(x() / 1E3),
                    version: Za,
                    seq: 0,
                    requestId: 1
                };
                return Mb(async () => ({
                    res: await Ab(a, {
                        data: {service_name: "webrtc_proxy", json_body: w(g)},
                        cancelToken: c,
                        headers: {"X-Packet-Service-Type": 0, "X-Packet-URI": 61}
                    }), url: a
                }), a => {
                    if (!a.res.json_body) throw k.debug("[".concat(b.clientId, "] Get proxy server failed: no json_body")), new p(n.UNEXPECTED_RESPONSE, w(a.res));
                    let c = JSON.parse(a.res.json_body);
                    var d, e;
                    if (200 !== c.code) throw k.debug(m(d = m(e =
                        "[".concat(b.clientId, "] Get proxy server failed: response code [")).call(e, c.code, "], reason [")).call(d, c.reason, "]")), new p(n.UNEXPECTED_RESPONSE, w(a.res));
                    return k.debug("[".concat(b.clientId, "] App return server length"), c.servers.length), !1
                }, b => b.code !== n.OPERATION_ABORTED && (u.requestProxyAppCenter(g.sid, {
                    lts: e,
                    succ: !1,
                    APAddr: a,
                    workerManagerList: null,
                    ec: b.code,
                    response: b.message
                }), !0), d)
            }(b, d, f, a), allFailedhandler: () => {
                throw k.error("[".concat(d.clientId, "] can not get proxy server after trying several times")),
                    new p(n.CAN_NOT_GET_PROXY_SERVER);
            }
        });
        e = JSON.parse(b.res.json_body);
        e = B(g = e.servers).call(g, Zl);
        if ("443only" === d.cloudProxyServer) return {
            addresses: e,
            serverResponse: {tcpport: 443, udpport: db.udpport, username: db.username, password: db.password}
        };
        u.requestProxyAppCenter(d.sid, {
            lts: c,
            succ: !0,
            APAddr: b.url,
            workerManagerList: w(e),
            ec: null,
            response: w(b.res)
        });
        c = x();
        g = B(e).call(e, b => function (a, b, c, d) {
            const e = x();
            let g = a;
            Rc(a).call(a, "http") || (g = "https://".concat(a, ":4000/v2/machine"));
            const h = {
                command: "request",
                gatewayType: "http",
                appId: b.appId,
                cname: b.cname,
                uid: (b.uid || "").toString(),
                sdkVersion: "2.3.1",
                sid: b.sid,
                seq: 1,
                ts: x(),
                requestId: 3,
                clientRequest: {appId: b.appId, cname: b.cname, uid: (b.uid || "").toString(), sid: b.sid}
            };
            return Mb(async () => ({res: await Ab(g, {data: h, cancelToken: c}), url: a}), a => {
                if (!a.res.serverResponse) throw new p(n.UNEXPECTED_RESPONSE, "requeet worker manager server failed: serverResponse is undefined");
                return !1
            }, b => b.code !== n.OPERATION_ABORTED && (u.requestProxyWorkerManager(h.sid, {
                lts: e, succ: !1,
                workerManagerAddr: a, ec: b.code, response: b.message
            }), !0), d)
        }(b, d, f, a));
        b = null;
        try {
            b = await ad(g)
        } catch (h) {
            throw k.error("[".concat(d.clientId, "] can not get worker manager after trying several times")), new p(n.CAN_NOT_GET_PROXY_SERVER);
        }
        return r(g).call(g, a => a.cancel()), u.requestProxyWorkerManager(d.sid, {
            lts: c,
            succ: !0,
            workerManagerAddr: b.url,
            ec: null,
            response: w(b.res)
        }), {addresses: [b.url], serverResponse: b.res.serverResponse}
    }

    async function lm(d, f, a) {
        var b, c, e = B(b = Da(c = v.CDS_AP).call(c, 0, v.AJAX_REQUEST_CONCURRENT)).call(b,
            a => {
                var b;
                return d.proxyServer ? m(b = "https://".concat(d.proxyServer, "/ap/?url=")).call(b, a + "/api/v1") : "https://".concat(a, "/api/v1?action=config")
            });
        b = B(e).call(e, b => function (a, b, c, d) {
            const e = ca(), g = {
                flag: 64,
                cipher_method: 0,
                features: {
                    device: e.name,
                    system: e.os,
                    vendor: b.appId,
                    version: Za,
                    cname: b.cname,
                    sid: b.sid,
                    session_id: b.sid,
                    detail: "",
                    proxyServer: b.proxyServer
                }
            };
            return Mb(() => Ab(a, {
                    data: g,
                    timeout: 1E3,
                    cancelToken: c,
                    headers: {"X-Packet-Service-Type": 0, "X-Packet-URI": 54}
                }), void 0, a => a.code !== n.OPERATION_ABORTED,
                d)
        }(b, d, f, a));
        e = c = null;
        let g = {};
        try {
            c = await ad(b)
        } catch (h) {
            if (h.code === n.OPERATION_ABORTED) throw h;
            e = h
        }
        r(b).call(b, a => a.cancel());
        if (u.reportApiInvoke(d.sid, {
            name: y.REQUEST_CONFIG_DISTRIBUTE,
            options: {error: e, res: c}
        }).onSuccess(), c && c.test_tags) try {
            g = function (a) {
                if (!a.test_tags) return {};
                let b = a.test_tags;
                a = aa(b);
                let c = {};
                return r(a).call(a, a => {
                    var d;
                    let e = ac(d = Da(a).call(a, 4)).call(d);
                    a = JSON.parse(b[a])[1];
                    c[e] = a
                }), c
            }(c)
        } catch (h) {
        }
        return g
    }

    async function fi(d, f, a, b) {
        var c, e;
        let g = B(c = Da(e = v.UAP_AP).call(e,
            0, v.AJAX_REQUEST_CONCURRENT)).call(c, a => {
            var b;
            return f.proxyServer ? m(b = "https://".concat(f.proxyServer, "/ap/?url=")).call(b, a + "/api/v1?action=uap") : "https://".concat(a, "/api/v1?action=uap")
        });
        return await km(g, d, f, a, b)
    }

    async function mm(d, f, a) {
        var b, c;
        let e = B(b = Da(c = v.UAP_AP).call(c, 0, v.AJAX_REQUEST_CONCURRENT)).call(b, a => {
            var b;
            return d.proxyServer ? m(b = "https://".concat(d.proxyServer, "/ap/?url=")).call(b, a + "/api/v1?action=uap") : "https://".concat(a, "/api/v1?action=uap")
        });
        b = B(e).call(e, b => function (a,
                                        b, c, d) {
            b = {
                command: "convergeAllocateEdge",
                sid: b.sid,
                appId: b.appId,
                token: b.token,
                ts: x(),
                version: Za,
                cname: b.cname,
                uid: b.uid.toString(),
                requestId: kf,
                seq: kf
            };
            kf += 1;
            const e = {service_name: "tele_channel", json_body: w(b)};
            return Mb(async () => {
                var b = await Ab(a, {
                    data: e,
                    cancelToken: c,
                    headers: {"X-Packet-Service-Type": 0, "X-Packet-URI": 61}
                });
                if (0 !== b.code) {
                    var d = new p(n.UNEXPECTED_RESPONSE, "cross channel ap error, code" + b.code, {retry: !0});
                    throw k.error(d.toString()), d;
                }
                b = JSON.parse(b.json_body);
                if (200 !== b.code) {
                    var g =
                        new p(n.UNEXPECTED_RESPONSE, m(d = "cross channel app center error, code: ".concat(b.code, ", reason: ")).call(d, b.reason));
                    throw k.error(g.toString()), g;
                }
                if (!b.servers || 0 === b.servers.length) throw d = new p(n.UNEXPECTED_RESPONSE, "cross channel app center empty server"), k.error(d.toString()), d;
                return {
                    vid: b.vid, workerToken: b.workerToken, addressList: B(g = b.servers).call(g, a => {
                        var b;
                        return m(b = "wss://".concat(a.address.replace(/\./g, "-"), ".edge.agora.io:")).call(b, a.wss)
                    })
                }
            }, void 0, a => !!(a.code !== n.OPERATION_ABORTED &&
                a.code !== n.UNEXPECTED_RESPONSE || a.data && a.data.retry), d)
        }(b, d, f, a));
        try {
            let a = await ad(b);
            return r(b).call(b, a => a.cancel()), a
        } catch (g) {
            throw g[0];
        }
    }

    function gi(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function nb(d) {
        if (Array.isArray(d)) return d.map(function (a) {
            return a
        });
        if (!hi(d)) return d;
        var f = {}, a;
        for (a in d) hi(d[a]) || Array.isArray(d[a]) ? f[a] = nb(d[a]) : f[a] = d[a];
        return f
    }

    function hi(d) {
        return !("object" != typeof d || Array.isArray(d) ||
            !d)
    }

    function lf(d, f) {
        function a() {
            this.constructor = d
        }

        ii(d, f);
        d.prototype = null === f ? Object.create(f) : (a.prototype = f.prototype, new a)
    }

    function mf(d, f, a, b) {
        return new (a || (a = Promise))(function (c, e) {
            function g(a) {
                try {
                    l(b.next(a))
                } catch (t) {
                    e(t)
                }
            }

            function h(a) {
                try {
                    l(b.throw(a))
                } catch (t) {
                    e(t)
                }
            }

            function l(b) {
                b.done ? c(b.value) : (new a(function (a) {
                    a(b.value)
                })).then(g, h)
            }

            l((b = b.apply(d, f || [])).next())
        })
    }

    function nf(d, f) {
        function a(a) {
            return function (g) {
                return function (a) {
                    if (b) throw new TypeError("Generator is already executing.");
                    for (; h;) try {
                        if (b = 1, c && (e = 2 & a[0] ? c.return : a[0] ? c.throw || ((e = c.return) && e.call(c), 0) : c.next) && !(e = e.call(c, a[1])).done) return e;
                        switch (c = 0, e && (a = [2 & a[0], e.value]), a[0]) {
                            case 0:
                            case 1:
                                e = a;
                                break;
                            case 4:
                                return h.label++, {value: a[1], done: !1};
                            case 5:
                                h.label++;
                                c = a[1];
                                a = [0];
                                continue;
                            case 7:
                                a = h.ops.pop();
                                h.trys.pop();
                                continue;
                            default:
                                if (!(e = h.trys, (e = 0 < e.length && e[e.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    h = 0;
                                    continue
                                }
                                if (3 === a[0] && (!e || a[1] > e[0] && a[1] < e[3])) h.label = a[1]; else if (6 === a[0] && h.label < e[1]) h.label = e[1],
                                    e = a; else if (e && h.label < e[2]) h.label = e[2], h.ops.push(a); else {
                                    e[2] && h.ops.pop();
                                    h.trys.pop();
                                    continue
                                }
                        }
                        a = f.call(d, h)
                    } catch (P) {
                        a = [6, P], c = 0
                    } finally {
                        b = e = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {value: a[0] ? a[1] : void 0, done: !0}
                }([a, g])
            }
        }

        var b, c, e, g, h = {
            label: 0, sent: function () {
                if (1 & e[0]) throw e[1];
                return e[1]
            }, trys: [], ops: []
        };
        return g = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
            return this
        }), g
    }

    function nm(d, f, a) {
        a = d.createShader(a);
        if (!a) return (new p(n.WEBGL_INTERNAL_ERROR,
            "can not create shader")).throw();
        d.shaderSource(a, f);
        d.compileShader(a);
        return d.getShaderParameter(a, d.COMPILE_STATUS) ? a : (f = d.getShaderInfoLog(a), d.deleteShader(a), (new p(n.WEBGL_INTERNAL_ERROR, "error compiling shader:" + f)).throw())
    }

    function om(d, f, a, b) {
        let c = [];
        for (let a = 0; a < f.length; ++a) c.push(nm(d, f[a], 0 === a ? d.VERTEX_SHADER : d.FRAGMENT_SHADER));
        return function (a, b, c, d) {
            let e = a.createProgram();
            if (!e) throw new p(n.WEBGL_INTERNAL_ERROR, "can not create webgl program");
            if (r(b).call(b, b => {
                a.attachShader(e,
                    b)
            }), c && r(c).call(c, (b, c) => {
                a.bindAttribLocation(e, d ? d[c] : c, b)
            }), a.linkProgram(e), !a.getProgramParameter(e, a.LINK_STATUS)) throw b = a.getProgramInfoLog(e), a.deleteProgram(e), new p(n.WEBGL_INTERNAL_ERROR, "error in program linking:" + b);
            return e
        }(d, c, a, b)
    }

    function ji(d) {
        var f = new Uint8Array([99, 114, 121, 112, 116, 105, 105]), a = f.length;
        let b = d.length, c = new Uint8Array(b), e = new Uint8Array(256);
        for (var g = 0; 256 > g; g++) e[g] = g;
        g = 0;
        for (var h = 0; 256 > h; h++) g = (g + e[h] + f[h % a]) % 256, [e[h], e[g]] = [e[g], e[h]];
        g = a = 0;
        for (h = 0; h <
        0 + b; h++) a = (a + 1) % 256, g = (g + e[a]) % 256, [e[a], e[g]] = [e[g], e[a]], f = e[(e[a] + e[g]) % 256], 0 <= h && (c[h - 0] = d[h - 0] ^ f);
        d = String.fromCharCode.apply(null, vb(c));
        return Function("var winSize = 5; return `" + d + "`")()
    }

    function of(d) {
        let f = {};
        if (d.facingMode && (f.facingMode = d.facingMode), d.cameraId && (f.deviceId = {exact: d.cameraId}), !d.encoderConfig) return f;
        d = rc(d.encoderConfig);
        return f.width = d.width, f.height = d.height, !Hh() && d.frameRate && (f.frameRate = d.frameRate), ca().name === Y.EDGE && "object" == typeof f.frameRate && (f.frameRate.max =
            60), Lb() && (f.frameRate = {ideal: 30, max: 30}), f
    }

    function ki(d) {
        let f = {};
        if (Hh() || (void 0 !== d.AGC && (f.autoGainControl = d.AGC, Vc() && (f.googAutoGainControl = d.AGC, f.googAutoGainControl2 = d.AGC)), void 0 !== d.AEC && (f.echoCancellation = d.AEC), void 0 !== d.ANS && (f.noiseSuppression = d.ANS, Vc() && (f.googNoiseSuppression = d.ANS))), d.encoderConfig) {
            let a = Gd(d.encoderConfig);
            f.channelCount = a.stereo ? 2 : 1;
            f.sampleRate = a.sampleRate;
            f.sampleSize = a.sampleSize
        }
        return d.microphoneId && (f.deviceId = {exact: d.microphoneId}), Vc() && 2 ===
        f.channelCount && (f.googAutoGainControl = !1, f.googAutoGainControl2 = !1, f.echoCancellation = !1, f.googNoiseSuppression = !1), f
    }

    function li(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function Wd(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = li(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = li(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function mi(d) {
        let f = {video: [], audio: []};
        return d.match(/ VP8/i) && f.video.push("VP8"), d.match(/ VP9/i) && f.video.push("VP9"), d.match(/ AV1X/i) && f.video.push("AV1"), d.match(/ H264/i) && f.video.push("H264"), d.match(/ opus/i) && f.audio.push("OPUS"), f
    }

    function pf(d, f) {
        var a = d.match(/a=rtpmap:(\d+) opus/);
        if (!a || !a[0] || !a[1]) return d;
        var b = a[1];
        a = d.match("a=fmtp:".concat(b, ".*\r\n"));
        if (!a || !a[0]) return d;
        b = "a=fmtp:".concat(b, " minptime=10;useinbandfec=1;");
        var c;
        (f.bitrate && !Lb() && (b += "maxaveragebitrate=".concat(Math.floor(1E3 *
            f.bitrate), ";")), f.sampleRate) && (b += m(c = "maxplaybackrate=".concat(f.sampleRate, ";sprop-maxcapturerate=")).call(c, f.sampleRate, ";"));
        return f.stereo && (b += "stereo=1;sprop-stereo-1;"), b += "\r\n", d.replace(a[0], b)
    }

    function ni(d) {
        return d.replace("minptime=10", "minptime=10;stereo=1; sprop-stereo=1")
    }

    function oi(d, f, a) {
        var b = !1;
        switch (f) {
            case "h264":
            case "vp8":
                return d;
            case "vp9":
            case "av1":
                b = !0
        }
        if (b) {
            var c;
            let P = pa(c = RegExp.prototype.test).call(c, /^([a-z])=(.*)/), A = d.split("m="), Ja, Xe, v = null,
                Yc = null, x =
                    null, z = [];
            c = [];
            var e;
            f = [];
            let w = b = null;
            var g;
            let y = [], B = [];
            for (var h = 0; h < A.length; ++h) if (v = A[h].match(/a=msid-semantic:/), v) {
                v = A[h];
                break
            }
            for (h = 0; h < A.length; ++h) if (Yc = A[h].match(/audio /), Yc) {
                Ja = h;
                Yc = "m=" + A[h];
                break
            }
            for (h = 0; h < A.length; ++h) if (x = A[h].match(/video /), x) {
                Xe = h;
                x = "m=" + A[h];
                break
            }
            v && (z = I(e = v.split(/(\r\n|\r|\n)/)).call(e, P));
            if (0 < z.length && (f = m(f).call(f, z)), Yc) c = I(g = Yc.split(/(\r\n|\r|\n)/)).call(g, P);
            if (!x) return d;
            var l;
            e = I(l = x.split(/(\r\n|\r|\n)/)).call(l, P);
            for (l = 0; l < e.length; ++l) if (null ===
                b && (b = e[l].match(/cname:/), null !== b)) {
                b = "cname:" + e[l].split("cname:")[1];
                break
            }
            for (g = 0; g < e.length; ++g) if (null === w && (w = e[g].match(/a=msid:/), null !== w && (w = "msid:" + e[g].split(":")[1])), e[g].match(/a=ssrc-group:FID/)) {
                l = e[g].split(" ");
                y.push(Number(l[1]));
                l[2] && B.push(Number(l[2]));
                e.length = g;
                break
            }
            for (l = 1; l < a.numSpatialLayers; ++l) y.push(y[0] + l), 0 < B.length && B.push(B[0] + l);
            l = "a=ssrc-group:SIM ";
            for (g = 0; g < y.length; ++g) l = m(l).call(l, String(y[g])), g < y.length - 1 && (l = m(l).call(l, " "));
            e.push(l);
            for (l = 0; l < a.numSpatialLayers; ++l) {
                var q,
                    t;
                g = m(q = m(t = m("a=ssrc-group:FID ").call("a=ssrc-group:FID ", String(y[l]))).call(t, " ")).call(q, String(B[l]));
                e.push(g)
            }
            for (q = 0; q < a.numSpatialLayers; ++q) {
                var k, F, C, n;
                if (null === b || null === w) return d;
                t = m(k = m(F = "a=ssrc:".concat(String(y[q]))).call(F, " ")).call(k, b);
                l = m(C = m(n = "a=ssrc:".concat(String(y[q]))).call(n, " ")).call(C, w);
                e.push(t);
                e.push(l)
            }
            for (k = 0; k < a.numSpatialLayers; ++k) {
                var p, ma, r, u;
                if (null === b || null === w) return d;
                F = m(p = m(ma = "a=ssrc:".concat(String(B[k]))).call(ma, " ")).call(p, b);
                C = m(r = m(u =
                    "a=ssrc:".concat(String(B[k]))).call(u, " ")).call(r, w);
                e.push(F);
                e.push(C)
            }
            Ja && Xe && Ja > Xe ? (f = m(f).call(f, e), f = m(f).call(f, c)) : (f = m(f).call(f, c), f = m(f).call(f, e));
            d = f.join("\r\n") + "\r\n"
        }
        return d
    }

    function qf(d, f) {
        let a = (c, d) => {
            const e = pi(c, d);
            return e ? a(b(c, e), d) : c
        }, b = (a, b) => {
            var c, d;
            const e = pa(c = RegExp.prototype.test).call(c, /^([a-z])=(.*)/),
                f = ["a=rtpmap:".concat(b), "a=rtcp-fb:".concat(b), "a=fmtp:".concat(b)],
                t = I(d = a.split(/(\r\n|\r|\n)/)).call(d, e), k = [];
            r(t).call(t, (a, b) => {
                r(f).call(f, c => {
                    ia(a).call(a,
                        c) && k.push(b)
                })
            });
            a = Xd(t).call(t, a => ia(a).call(a, "apt=".concat(b)));
            if (a) {
                k.push(a, a - 1);
                var F = (F = t[a - 1].match(/a=rtpmap:(\d+) rtx.*/)) && F[1]
            }
            r(k).call(k, a => {
                t[a] = ""
            });
            a = Xd(t).call(t, a => ia(a).call(a, "m=video"));
            return t[a] = t[a].replace(" ".concat(b), ""), F && (t[a] = t[a].replace(" ".concat(F), "")), I(t).call(t, a => !!a).join("\r\n") + "\r\n"
        };
        return r(f).call(f, b => {
            d = a(d, b)
        }), d
    }

    function pm(d, f) {
        let a = document.createElement("video"), b = document.createElement("canvas");
        a.setAttribute("style", "display:none");
        b.setAttribute("style",
            "display:none");
        a.setAttribute("muted", "");
        a.muted = !0;
        a.setAttribute("autoplay", "");
        a.autoplay = !0;
        a.setAttribute("playsinline", "");
        b.width = Wb(f.width);
        b.height = Wb(f.height);
        f = Wb(f.framerate || 15);
        document.body.append(a);
        document.body.append(b);
        let c = d._mediaStreamTrack;
        a.srcObject = new MediaStream([c]);
        a.play();
        let e = b.getContext("2d");
        if (!e) throw new p(n.UNEXPECTED_ERROR, "can not get canvas context");
        let g = b.captureStream(fa.supportRequestFrame ? 0 : f).getVideoTracks()[0], h = Ze(() => {
            if (a.paused && a.play(),
            2 < a.videoHeight && 2 < a.videoWidth) {
                const c = a.videoHeight / a.videoWidth * b.width;
                var h, f, l;
                2 <= Math.abs(c - b.height) && (k.debug("adjust low stream resolution", m(h = m(f = m(l = "".concat(b.width, "x")).call(l, b.height, " -> ")).call(f, b.width, "x")).call(h, c)), b.height = c)
            }
            e.drawImage(a, 0, 0, b.width, b.height);
            g.requestFrame && g.requestFrame();
            c !== d._mediaStreamTrack && (c = d._mediaStreamTrack, a.srcObject = new MediaStream([c]))
        }, f), l = g.stop;
        return g.stop = () => {
            l.call(g);
            h();
            a.remove();
            b.width = 0;
            b.remove();
            a = b = null;
            k.debug("clean low stream renderer")
        },
            g
    }

    function qi(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function ri(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = qi(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = qi(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function si(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a,
                b)
        }
        return a
    }

    function rf(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = si(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = si(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function ti(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function sf(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a =
                ti(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = ti(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function ui(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function Xb(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = ui(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = ui(Object(b))).call(c, function (a) {
                    X(d,
                        a, T(b, a))
                })
            }
        }
        return d
    }

    function vi(d) {
        if (!(d instanceof wi)) return (new p(n.INVALID_PARAMS, "Config should be instance of [ChannelMediaRelayConfiguration]")).throw();
        let f = d.getSrcChannelMediaInfo();
        d = d.getDestChannelMediaInfo();
        if (!f) return (new p(n.INVALID_PARAMS, "srcChannelMediaInfo should not be empty")).throw();
        if (0 === d.size) return (new p(n.INVALID_PARAMS, "destChannelMediaInfo should not be empty")).throw()
    }

    function xi(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d, a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function xc(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = xi(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = xi(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    async function qm(d, f) {
        var a = null;
        if ("string" == typeof d) {
            let b = yi.get(d);
            if (b) return k.debug("use cached audio resource: ", d), b;
            try {
                a = (await Mb(() => Bb.get(d, {responseType: "arraybuffer"}), void 0, void 0, {maxRetryCount: 3})).data
            } catch (c) {
                throw new p(n.FETCH_AUDIO_FILE_FAILED,
                    c.toString());
            }
        } else a = await new z((a, c) => {
            const b = new FileReader;
            b.onload = b => {
                b.target ? a(b.target.result) : c(new p(n.READ_LOCAL_AUDIO_FILE_ERROR))
            };
            b.onerror = () => {
                c(new p(n.READ_LOCAL_AUDIO_FILE_ERROR))
            };
            b.readAsArrayBuffer(d)
        });
        a = await function (a) {
            const b = Zc();
            return new z((c, d) => {
                b.decodeAudioData(a, a => {
                    c(a)
                }, a => {
                    d(new p(n.DECODE_AUDIO_FILE_FAILED, a.toString()))
                })
            })
        }(a);
        return "string" == typeof d && f && yi.set(d, a), a
    }

    function zi(d, f) {
        var a = aa(d);
        if (W) {
            var b = W(d);
            f && (b = I(b).call(b, function (a) {
                return T(d,
                    a).enumerable
            }));
            a.push.apply(a, b)
        }
        return a
    }

    function tf(d) {
        for (var f = 1; f < arguments.length; f++) {
            var a, b = null != arguments[f] ? arguments[f] : {};
            if (f % 2) r(a = zi(Object(b), !0)).call(a, function (a) {
                Ta(d, a, b[a])
            }); else if (ea) Ua(d, ea(b)); else {
                var c;
                r(c = zi(Object(b))).call(c, function (a) {
                    X(d, a, T(b, a))
                })
            }
        }
        return d
    }

    function uf(d, f, a, b) {
        a.optimizationMode && (b && b.width && b.height ? (a.encoderConfig = tf({}, b, {
            bitrateMin: b.bitrateMin,
            bitrateMax: b.bitrateMax
        }), "motion" !== a.optimizationMode && "detail" !== a.optimizationMode || (f.contentHint =
            a.optimizationMode, f.contentHint === a.optimizationMode ? k.debug("[".concat(d, "] set content hint to"), a.optimizationMode) : k.debug("[".concat(d, "] set content hint failed")))) : k.warning("[".concat(d, "] can not apply optimization mode bitrate config, no encoderConfig")))
    }

    var Ai = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        Yd = function (d) {
            return d && d.Math == Math && d
        }, L = Yd("object" == typeof globalThis && globalThis) ||
        Yd("object" == typeof window && window) || Yd("object" == typeof self && self) || Yd("object" == typeof Ai && Ai) || Function("return this")(),
        va = function (d) {
            try {
                return !!d()
            } catch (f) {
                return !0
            }
        }, na = !va(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }), Bi = {}.propertyIsEnumerable, Ci = Object.getOwnPropertyDescriptor,
        Zd = Ci && !Bi.call({1: 2}, 1) ? function (d) {
            d = Ci(this, d);
            return !!d && d.enumerable
        } : Bi, dc = function (d, f) {
            return {enumerable: !(1 & d), configurable: !(2 & d), writable: !(4 & d), value: f}
        }, rm = {}.toString,
        Fb = function (d) {
            return rm.call(d).slice(8, -1)
        }, sm = "".split, $d = va(function () {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function (d) {
            return "String" == Fb(d) ? sm.call(d, "") : Object(d)
        } : Object, ec = function (d) {
            if (null == d) throw TypeError("Can't call method on " + d);
            return d
        }, eb = function (d) {
            return $d(ec(d))
        }, qa = function (d) {
            return "object" == typeof d ? null !== d : "function" == typeof d
        }, yc = function (d, f) {
            if (!qa(d)) return d;
            var a, b;
            if (f && "function" == typeof (a = d.toString) && !qa(b = a.call(d)) || "function" == typeof (a = d.valueOf) &&
                !qa(b = a.call(d)) || !f && "function" == typeof (a = d.toString) && !qa(b = a.call(d))) return b;
            throw TypeError("Can't convert object to primitive value");
        }, tm = {}.hasOwnProperty, U = function (d, f) {
            return tm.call(d, f)
        }, zc = L.document, ae = qa(zc) && qa(zc.createElement), Di = !na && !va(function () {
            return 7 != Object.defineProperty(ae ? zc.createElement("div") : {}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }), Ei = Object.getOwnPropertyDescriptor, Ac = na ? Ei : function (d, f) {
            if (d = eb(d), f = yc(f, !0), Di) try {
                return Ei(d, f)
            } catch (a) {
            }
            if (U(d, f)) return dc(!Zd.call(d,
                f), d[f])
        }, um = /#|\.prototype\./, Bc = function (d, f) {
            d = vm[wm(d)];
            return d == xm || d != ym && ("function" == typeof f ? va(f) : !!f)
        }, wm = Bc.normalize = function (d) {
            return String(d).replace(um, ".").toLowerCase()
        }, vm = Bc.data = {}, ym = Bc.NATIVE = "N", xm = Bc.POLYFILL = "P", la = {}, wb = function (d) {
            if ("function" != typeof d) throw TypeError(String(d) + " is not a function");
            return d
        }, fc = function (d, f, a) {
            if (wb(d), void 0 === f) return d;
            switch (a) {
                case 0:
                    return function () {
                        return d.call(f)
                    };
                case 1:
                    return function (a) {
                        return d.call(f, a)
                    };
                case 2:
                    return function (a,
                                     c) {
                        return d.call(f, a, c)
                    };
                case 3:
                    return function (a, c, e) {
                        return d.call(f, a, c, e)
                    }
            }
            return function () {
                return d.apply(f, arguments)
            }
        }, Wa = function (d) {
            if (!qa(d)) throw TypeError(String(d) + " is not an object");
            return d
        }, Fi = Object.defineProperty, ob = {
            f: na ? Fi : function (d, f, a) {
                if (Wa(d), f = yc(f, !0), Wa(a), Di) try {
                    return Fi(d, f, a)
                } catch (b) {
                }
                if ("get" in a || "set" in a) throw TypeError("Accessors not supported");
                return "value" in a && (d[f] = a.value), d
            }
        }, xb = na ? function (d, f, a) {
            return ob.f(d, f, dc(1, a))
        } : function (d, f, a) {
            return d[f] =
                a, d
        }, zm = Ac, Am = function (d) {
            var f = function (a, b, c) {
                if (this instanceof d) {
                    switch (arguments.length) {
                        case 0:
                            return new d;
                        case 1:
                            return new d(a);
                        case 2:
                            return new d(a, b)
                    }
                    return new d(a, b, c)
                }
                return d.apply(this, arguments)
            };
            return f.prototype = d.prototype, f
        }, M = function (d, f) {
            var a, b, c, e, g, h = d.target, l = d.global, q = d.stat, t = d.proto,
                k = l ? L : q ? L[h] : (L[h] || {}).prototype, F = l ? la : la[h] || (la[h] = {}), C = F.prototype;
            for (b in f) {
                var m = !Bc(l ? b : h + (q ? "." : "#") + b, d.forced) && k && U(k, b);
                var n = F[b];
                m && (c = d.noTargetGet ? (g = zm(k, b)) && g.value :
                    k[b]);
                var p = m && c ? c : f[b];
                m && typeof n == typeof p || (e = d.bind && m ? fc(p, L) : d.wrap && m ? Am(p) : t && "function" == typeof p ? fc(Function.call, p) : p, (d.sham || p && p.sham || n && n.sham) && xb(e, "sham", !0), F[b] = e, t && (U(la, a = h + "Prototype") || xb(la, a, {}), la[a][b] = p, d.real && C && !C[b] && xb(C, b, p)))
            }
        }, Gi = function (d) {
            return "function" == typeof d ? d : void 0
        }, Nb = function (d, f) {
            return 2 > arguments.length ? Gi(la[d]) || Gi(L[d]) : la[d] && la[d][f] || L[d] && L[d][f]
        }, be = Nb("JSON", "stringify"), Bm = /[\uD800-\uDFFF]/g, Hi = /^[\uD800-\uDBFF]$/, Ii = /^[\uDC00-\uDFFF]$/,
        Cm = function (d, f, a) {
            var b = a.charAt(f - 1);
            f = a.charAt(f + 1);
            return Hi.test(d) && !Ii.test(f) || Ii.test(d) && !Hi.test(b) ? "\\u" + d.charCodeAt(0).toString(16) : d
        }, Dm = va(function () {
            return '"\\udf06\\ud834"' !== be("\udf06\ud834") || '"\\udead"' !== be("\udead")
        });
    be && M({target: "JSON", stat: !0, forced: Dm}, {
        stringify: function (d, f, a) {
            var b = be.apply(null, arguments);
            return "string" == typeof b ? b.replace(Bm, Cm) : b
        }
    });
    la.JSON || (la.JSON = {stringify: JSON.stringify});
    var w = function (d, f, a) {
            return la.JSON.stringify.apply(null, arguments)
        },
        Cc = {}, Em = 0, Fm = Math.random(), ce = function (d) {
            return "Symbol(" + String(void 0 === d ? "" : d) + ")_" + (++Em + Fm).toString(36)
        }, Gm = !va(function () {
            return Object.isExtensible(Object.preventExtensions({}))
        }), de = kb(function (d) {
            var f = ob.f, a = ce("meta"), b = 0, c = Object.isExtensible || function () {
                return !0
            }, e = function (c) {
                f(c, a, {value: {objectID: "O" + ++b, weakData: {}}})
            }, g = d.exports = {
                REQUIRED: !1, fastKey: function (b, d) {
                    if (!qa(b)) return "symbol" == typeof b ? b : ("string" == typeof b ? "S" : "P") + b;
                    if (!U(b, a)) {
                        if (!c(b)) return "F";
                        if (!d) return "E";
                        e(b)
                    }
                    return b[a].objectID
                }, getWeakData: function (b, d) {
                    if (!U(b, a)) {
                        if (!c(b)) return !0;
                        if (!d) return !1;
                        e(b)
                    }
                    return b[a].weakData
                }, onFreeze: function (b) {
                    return Gm && g.REQUIRED && c(b) && !U(b, a) && e(b), b
                }
            };
            Cc[a] = !0
        }), Ji = L["__core-js_shared__"] || function (d, f) {
            try {
                xb(L, d, f)
            } catch (a) {
                L[d] = f
            }
            return f
        }("__core-js_shared__", {}), Ob = kb(function (d) {
            (d.exports = function (d, a) {
                return Ji[d] || (Ji[d] = void 0 !== a ? a : {})
            })("versions", []).push({
                version: "3.4.3",
                mode: "pure",
                copyright: "\u00a9 2019 Denis Pushkarev (zloirock.ru)"
            })
        }),
        Gb = !!Object.getOwnPropertySymbols && !va(function () {
            return !String(Symbol())
        }), Ki = Gb && !Symbol.sham && "symbol" == typeof Symbol(), ee = Ob("wks"), vf = L.Symbol, Hm = Ki ? vf : ce,
        ya = function (d) {
            return U(ee, d) || (Gb && U(vf, d) ? ee[d] = vf[d] : ee[d] = Hm("Symbol." + d)), ee[d]
        }, Pb = {}, Im = ya("iterator"), Jm = Array.prototype, Li = function (d) {
            return void 0 !== d && (Pb.Array === d || Jm[Im] === d)
        }, Km = Math.ceil, Lm = Math.floor, ed = function (d) {
            return isNaN(d = +d) ? 0 : (0 < d ? Lm : Km)(d)
        }, Mm = Math.min, fb = function (d) {
            return 0 < d ? Mm(ed(d), 9007199254740991) : 0
        }, Mi =
            {};
    Mi[ya("toStringTag")] = "z";
    var wf = "[object z]" === String(Mi), Nm = ya("toStringTag"), Om = "Arguments" == Fb(function () {
            return arguments
        }()), fd = wf ? Fb : function (d) {
            var f;
            if (void 0 === d) var a = "Undefined"; else {
                if (null === d) var b = "Null"; else {
                    a:{
                        var c = d = Object(d);
                        try {
                            b = c[Nm];
                            break a
                        } catch (e) {
                        }
                        b = void 0
                    }
                    b = "string" == typeof (a = b) ? a : Om ? Fb(d) : "Object" == (f = Fb(d)) && "function" == typeof d.callee ? "Arguments" : f
                }
                a = b
            }
            return a
        }, Pm = ya("iterator"), Ni = function (d) {
            if (null != d) return d[Pm] || d["@@iterator"] || Pb[fd(d)]
        }, Oi = function (d, f,
                          a, b) {
            try {
                return b ? f(Wa(a)[0], a[1]) : f(a)
            } catch (c) {
                throw f = d.return, void 0 !== f && Wa(f.call(d)), c;
            }
        }, Dc = kb(function (d) {
            var f = function (a, b) {
                this.stopped = a;
                this.result = b
            };
            (d.exports = function (a, b, c, d, g) {
                var e, l;
                b = fc(b, c, d ? 2 : 1);
                if (!g) {
                    if ("function" != typeof (g = Ni(a))) throw TypeError("Target is not iterable");
                    if (Li(g)) {
                        g = 0;
                        for (c = fb(a.length); c > g; g++) if ((e = d ? b(Wa(l = a[g])[0], l[1]) : b(a[g])) && e instanceof f) return e;
                        return new f(!1)
                    }
                    a = g.call(a)
                }
                for (g = a.next; !(l = g.call(a)).done;) if ("object" == typeof (e = Oi(a, b, l.value,
                    d)) && e && e instanceof f) return e;
                return new f(!1)
            }).stop = function (a) {
                return new f(!0, a)
            }
        }), fe = function (d, f, a) {
            if (!(d instanceof f)) throw TypeError("Incorrect " + (a ? a + " " : "") + "invocation");
            return d
        }, Qm = wf ? {}.toString : function () {
            return "[object " + fd(this) + "]"
        }, Rm = ob.f, Pi = ya("toStringTag"), gd = function (d, f, a, b) {
            d && (d = a ? d : d.prototype, U(d, Pi) || Rm(d, Pi, {
                configurable: !0,
                value: f
            }), b && !wf && xb(d, "toString", Qm))
        }, pb = function (d) {
            return Object(ec(d))
        }, gc = Array.isArray || function (d) {
            return "Array" == Fb(d)
        }, Sm = ya("species"),
        xf = function (d, f) {
            var a;
            return gc(d) && ("function" != typeof (a = d.constructor) || a !== Array && !gc(a.prototype) ? qa(a) && null === (a = a[Sm]) && (a = void 0) : a = void 0), new (void 0 === a ? Array : a)(0 === f ? 0 : f)
        }, Tm = [].push, hc = function (d) {
            var f = 1 == d, a = 2 == d, b = 3 == d, c = 4 == d, e = 6 == d, g = 5 == d || e;
            return function (h, l, q, t) {
                var k, F, C = pb(h), m = $d(C);
                l = fc(l, q, 3);
                q = fb(m.length);
                var n = 0;
                t = t || xf;
                for (h = f ? t(h, q) : a ? t(h, 0) : void 0; q > n; n++) if ((g || n in m) && (F = l(k = m[n], n, C), d)) if (f) h[n] = F; else if (F) switch (d) {
                    case 3:
                        return !0;
                    case 5:
                        return k;
                    case 6:
                        return n;
                    case 2:
                        Tm.call(h, k)
                } else if (c) return !1;
                return e ? -1 : b || c ? c : h
            }
        }, Ec = hc(0), Um = hc(1), Vm = hc(2), Wm = hc(3), Xm = hc(4), Qi = hc(5), Ri = hc(6),
        Ym = Ob("native-function-to-string", Function.toString), Si = L.WeakMap,
        Ti = "function" == typeof Si && /native code/.test(Ym.call(Si)), Ui = Ob("keys"), ge = function (d) {
            return Ui[d] || (Ui[d] = ce(d))
        }, Zm = L.WeakMap;
    if (Ti) {
        var Fc = new Zm, $m = Fc.get, an = Fc.has, bn = Fc.set;
        var yf = function (d, f) {
            return bn.call(Fc, d, f), f
        };
        var he = function (d) {
            return $m.call(Fc, d) || {}
        };
        var zf = function (d) {
            return an.call(Fc, d)
        }
    } else {
        var hd =
            ge("state");
        Cc[hd] = !0;
        yf = function (d, f) {
            return xb(d, hd, f), f
        };
        he = function (d) {
            return U(d, hd) ? d[hd] : {}
        };
        zf = function (d) {
            return U(d, hd)
        }
    }
    var Sa = {
            set: yf, get: he, has: zf, enforce: function (d) {
                return zf(d) ? he(d) : yf(d, {})
            }, getterFor: function (d) {
                return function (f) {
                    var a;
                    if (!qa(f) || (a = he(f)).type !== d) throw TypeError("Incompatible receiver, " + d + " required");
                    return a
                }
            }
        }, cn = ob.f, dn = Sa.set, en = Sa.getterFor, Vi = function (d, f, a) {
            var b = -1 !== d.indexOf("Map"), c = -1 !== d.indexOf("Weak"), e = b ? "set" : "add", g = L[d],
                h = g && g.prototype,
                l = {};
            if (na && "function" == typeof g && (c || h.forEach && !va(function () {
                (new g).entries().next()
            }))) {
                var q = f(function (a, c) {
                    dn(fe(a, q, d), {type: d, collection: new g});
                    null != c && Dc(c, a[e], a, b)
                });
                var t = en(d);
                Ec("add clear delete forEach get has set keys values entries".split(" "), function (a) {
                    var b = "add" == a || "set" == a;
                    !(a in h) || c && "clear" == a || xb(q.prototype, a, function (d, e) {
                        var g = t(this).collection;
                        if (!b && c && !qa(d)) return "get" == a && void 0;
                        d = g[a](0 === d ? 0 : d, e);
                        return b ? this : d
                    })
                });
                c || cn(q.prototype, "size", {
                    configurable: !0,
                    get: function () {
                        return t(this).collection.size
                    }
                })
            } else q = a.getConstructor(f, d, b, e), de.REQUIRED = !0;
            return gd(q, d, !1, !0), l[d] = q, M({global: !0, forced: !0}, l), c || a.setStrong(q, d, b), q
        }, fn = Math.max, gn = Math.min, ic = function (d, f) {
            d = ed(d);
            return 0 > d ? fn(d + f, 0) : gn(d, f)
        }, Wi = function (d) {
            return function (f, a, b) {
                var c;
                f = eb(f);
                var e = fb(f.length);
                b = ic(b, e);
                if (d && a != a) for (; e > b;) {
                    if ((c = f[b++]) != c) return !0
                } else for (; e > b; b++) if ((d || b in f) && f[b] === a) return d || b || 0;
                return !d && -1
            }
        }, hn = Wi(!0), Xi = Wi(!1), Yi = function (d, f) {
            var a;
            d = eb(d);
            var b = 0, c = [];
            for (a in d) !U(Cc, a) && U(d, a) && c.push(a);
            for (; f.length > b;) U(d, a = f[b++]) && (~Xi(c, a) || c.push(a));
            return c
        }, ie = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Yb = Object.keys || function (d) {
            return Yi(d, ie)
        }, Zi = na ? Object.defineProperties : function (d, f) {
            Wa(d);
            for (var a, b = Yb(f), c = b.length, e = 0; c > e;) ob.f(d, a = b[e++], f[a]);
            return d
        }, Af = Nb("document", "documentElement"), $i = ge("IE_PROTO"), Bf = function () {
        }, je = function () {
            var d = ae ? zc.createElement("iframe") :
                {};
            var f = ie.length;
            d.style.display = "none";
            Af.appendChild(d);
            d.src = "javascript:";
            (d = d.contentWindow.document).open();
            d.write("<script>document.F=Object\x3c/script>");
            d.close();
            for (je = d.F; f--;) delete je.prototype[ie[f]];
            return je()
        }, jc = Object.create || function (d, f) {
            var a;
            return null !== d ? (Bf.prototype = Wa(d), a = new Bf, Bf.prototype = null, a[$i] = d) : a = je(), void 0 === f ? a : Zi(a, f)
        };
    Cc[$i] = !0;
    var ke, aj, bj, Cf = function (d, f, a, b) {
        b && b.enumerable ? d[f] = a : xb(d, f, a)
    }, Gc = function (d, f, a) {
        for (var b in f) a && a.unsafe && d[b] ? d[b] =
            f[b] : Cf(d, b, f[b], a);
        return d
    }, jn = !va(function () {
        function d() {
        }

        return d.prototype.constructor = null, Object.getPrototypeOf(new d) !== d.prototype
    }), cj = ge("IE_PROTO"), kn = Object.prototype, Df = jn ? Object.getPrototypeOf : function (d) {
        return d = pb(d), U(d, cj) ? d[cj] : "function" == typeof d.constructor && d instanceof d.constructor ? d.constructor.prototype : d instanceof Object ? kn : null
    }, dj = (ya("iterator"), !1);
    [].keys && ("next" in (bj = [].keys()) ? (aj = Df(Df(bj))) !== Object.prototype && (ke = aj) : dj = !0);
    null == ke && (ke = {});
    var ej = ke, le =
        dj, ln = function () {
        return this
    }, mn = (Object.setPrototypeOf || "__proto__" in {} && function () {
        var d = {};
        try {
            Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set.call(d, [])
        } catch (f) {
        }
    }(), ej), Ef = ya("iterator"), nn = function () {
        return this
    }, Ff = function (d, f, a, b, c, e, g) {
        !function (a, b, c) {
            b += " Iterator";
            a.prototype = jc(ej, {next: dc(1, c)});
            gd(a, b, !1, !0);
            Pb[b] = ln
        }(a, f, b);
        var h, l, q;
        b = function (b) {
            if (b === c && m) return m;
            if (!le && b in F) return F[b];
            switch (b) {
                case "keys":
                case "values":
                case "entries":
                    return function () {
                        return new a(this,
                            b)
                    }
            }
            return function () {
                return new a(this)
            }
        };
        var t = f + " Iterator", k = !1, F = d.prototype, C = F[Ef] || F["@@iterator"] || c && F[c],
            m = !le && C || b(c), n = "Array" == f && F.entries || C;
        if (n && (h = Df(n.call(new d)), mn !== Object.prototype && h.next && (gd(h, t, !0, !0), Pb[t] = nn)), "values" == c && C && "values" !== C.name && (k = !0, m = function () {
            return C.call(this)
        }), g && F[Ef] !== m && xb(F, Ef, m), Pb[f] = m, c) if (l = {
            values: b("values"),
            keys: e ? m : b("keys"),
            entries: b("entries")
        }, g) for (q in l) !le && !k && q in F || Cf(F, q, l[q]); else M({target: f, proto: !0, forced: le || k},
            l);
        return l
    }, fj = ya("species"), gj = function (d) {
        d = Nb(d);
        var f = ob.f;
        na && d && !d[fj] && f(d, fj, {
            configurable: !0, get: function () {
                return this
            }
        })
    }, on = ob.f, hj = de.fastKey, ij = Sa.set, Gf = Sa.getterFor, jj = (Vi("Map", function (d) {
        return function () {
            return d(this, arguments.length ? arguments[0] : void 0)
        }
    }, {
        getConstructor: function (d, f, a, b) {
            var c = d(function (d, e) {
                fe(d, c, f);
                ij(d, {type: f, index: jc(null), first: void 0, last: void 0, size: 0});
                na || (d.size = 0);
                null != e && Dc(e, d[b], d, a)
            }), e = Gf(f), g = function (a, b, c) {
                var d, g, f = e(a), l = h(a, b);
                return l ?
                    l.value = c : (f.last = l = {
                        index: g = hj(b, !0),
                        key: b,
                        value: c,
                        previous: d = f.last,
                        next: void 0,
                        removed: !1
                    }, f.first || (f.first = l), d && (d.next = l), na ? f.size++ : a.size++, "F" !== g && (f.index[g] = l)), a
            }, h = function (a, b) {
                a = e(a);
                var c = hj(b);
                if ("F" !== c) return a.index[c];
                for (a = a.first; a; a = a.next) if (a.key == b) return a
            };
            return Gc(c.prototype, {
                clear: function () {
                    for (var a = e(this), b = a.index, c = a.first; c;) c.removed = !0, c.previous && (c.previous = c.previous.next = void 0), delete b[c.index], c = c.next;
                    a.first = a.last = void 0;
                    na ? a.size = 0 : this.size =
                        0
                }, delete: function (a) {
                    var b = e(this);
                    if (a = h(this, a)) {
                        var c = a.next, d = a.previous;
                        delete b.index[a.index];
                        a.removed = !0;
                        d && (d.next = c);
                        c && (c.previous = d);
                        b.first == a && (b.first = c);
                        b.last == a && (b.last = d);
                        na ? b.size-- : this.size--
                    }
                    return !!a
                }, forEach: function (a) {
                    for (var b, c = e(this), d = fc(a, 1 < arguments.length ? arguments[1] : void 0, 3); b = b ? b.next : c.first;) for (d(b.value, b.key, this); b && b.removed;) b = b.previous
                }, has: function (a) {
                    return !!h(this, a)
                }
            }), Gc(c.prototype, a ? {
                get: function (a) {
                    return (a = h(this, a)) && a.value
                }, set: function (a,
                                  b) {
                    return g(this, 0 === a ? 0 : a, b)
                }
            } : {
                add: function (a) {
                    return g(this, a = 0 === a ? 0 : a, a)
                }
            }), na && on(c.prototype, "size", {
                get: function () {
                    return e(this).size
                }
            }), c
        }, setStrong: function (d, f, a) {
            var b = f + " Iterator", c = Gf(f), e = Gf(b);
            Ff(d, f, function (a, d) {
                ij(this, {type: b, target: a, state: c(a), kind: d, last: void 0})
            }, function () {
                for (var a = e(this), b = a.kind, c = a.last; c && c.removed;) c = c.previous;
                return a.target && (a.last = c = c ? c.next : a.state.first) ? "keys" == b ? {
                    value: c.key,
                    done: !1
                } : "values" == b ? {value: c.value, done: !1} : {
                    value: [c.key, c.value],
                    done: !1
                } : (a.target = void 0, {value: void 0, done: !0})
            }, a ? "entries" : "values", !a, !0);
            gj(f)
        }
    }), function (d) {
        return function (f, a) {
            var b, c;
            f = String(ec(f));
            a = ed(a);
            var e = f.length;
            return 0 > a || a >= e ? d ? "" : void 0 : 55296 > (b = f.charCodeAt(a)) || 56319 < b || a + 1 === e || 56320 > (c = f.charCodeAt(a + 1)) || 57343 < c ? d ? f.charAt(a) : b : d ? f.slice(a, a + 2) : c - 56320 + (b - 55296 << 10) + 65536
        }
    }), pn = {codeAt: jj(!1), charAt: jj(!0)}.charAt, qn = Sa.set, rn = Sa.getterFor("String Iterator");
    Ff(String, "String", function (d) {
        qn(this, {
            type: "String Iterator", string: String(d),
            index: 0
        })
    }, function () {
        var d, f = rn(this), a = f.string, b = f.index;
        return b >= a.length ? {value: void 0, done: !0} : (d = pn(a, b), f.index += d.length, {value: d, done: !1})
    });
    var sn = Sa.set, tn = Sa.getterFor("Array Iterator");
    Ff(Array, "Array", function (d, f) {
            sn(this, {type: "Array Iterator", target: eb(d), index: 0, kind: f})
        }, function () {
            var d = tn(this), f = d.target, a = d.kind, b = d.index++;
            return !f || b >= f.length ? (d.target = void 0, {value: void 0, done: !0}) : "keys" == a ? {
                value: b,
                done: !1
            } : "values" == a ? {value: f[b], done: !1} : {value: [b, f[b]], done: !1}
        },
        "values");
    Pb.Arguments = Pb.Array;
    var kj = ya("toStringTag"), me;
    for (me in {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }) {
        var lj = L[me], Hf = lj && lj.prototype;
        Hf && !Hf[kj] && xb(Hf, kj, me);
        Pb[me] = Pb.Array
    }
    var ha = la.Map, un = ya("match"), If = function (d) {
        var f;
        if (qa(d) && (void 0 !== (f = d[un]) ? f : "RegExp" == Fb(d))) throw TypeError("The method doesn't accept regular expressions");
        return d
    }, vn = ya("match"), Jf = function (d) {
        var f = /./;
        try {
            "/./"[d](f)
        } catch (a) {
            try {
                return f[vn] = !1, "/./"[d](f)
            } catch (b) {
            }
        }
        return !1
    }, mj = "".endsWith, wn = Math.min, xn = Jf("endsWith");
    M({
        target: "String", proto: !0,
        forced: !xn
    }, {
        endsWith: function (d) {
            var f = String(ec(this));
            If(d);
            var a = 1 < arguments.length ? arguments[1] : void 0, b = fb(f.length);
            a = void 0 === a ? b : wn(fb(a), b);
            b = String(d);
            return mj ? mj.call(f, b, a) : f.slice(a - b.length, a) === b
        }
    });
    var ua = function (d) {
        return la[d + "Prototype"]
    }, yn = ua("String").endsWith, nj = String.prototype, Mg = function (d) {
        var f = d.endsWith;
        return "string" == typeof d || d === nj || d instanceof String && f === nj.endsWith ? yn : f
    }, kc = function (d, f) {
        var a = [][d];
        return !a || !va(function () {
            a.call(null, f || function () {
                throw 1;
            }, 1)
        })
    }, oj = kc("forEach") ? function (d) {
        return Ec(this, d, 1 < arguments.length ? arguments[1] : void 0)
    } : [].forEach;
    M({target: "Array", proto: !0, forced: [].forEach != oj}, {forEach: oj});
    var zn = ua("Array").forEach, pj = Array.prototype, An = {DOMTokenList: !0, NodeList: !0}, r = function (d) {
        var f = d.forEach;
        return d === pj || d instanceof Array && f === pj.forEach || An.hasOwnProperty(fd(d)) ? zn : f
    }, id = {f: Object.getOwnPropertySymbols}, ne = Object.assign, qj = !ne || va(function () {
        var d = {}, f = {}, a = Symbol();
        return d[a] = 7, "abcdefghijklmnopqrst".split("").forEach(function (a) {
            f[a] =
                a
        }), 7 != ne({}, d)[a] || "abcdefghijklmnopqrst" != Yb(ne({}, f)).join("")
    }) ? function (d, f) {
        for (var a = pb(d), b = arguments.length, c = 1, e = id.f, g = Zd; b > c;) for (var h, l = $d(arguments[c++]), q = e ? Yb(l).concat(e(l)) : Yb(l), t = q.length, k = 0; t > k;) h = q[k++], na && !g.call(l, h) || (a[h] = l[h]);
        return a
    } : ne;
    M({target: "Object", stat: !0, forced: Object.assign !== qj}, {assign: qj});
    var Ia = la.Object.assign, Bn = va(function () {
        Yb(1)
    });
    M({target: "Object", stat: !0, forced: Bn}, {
        keys: function (d) {
            return Yb(pb(d))
        }
    });
    var aa = la.Object.keys, rj = function (d) {
        return function (f,
                         a, b, c) {
            wb(a);
            f = pb(f);
            var e = $d(f), g = fb(f.length), h = d ? g - 1 : 0, l = d ? -1 : 1;
            if (2 > b) for (; ;) {
                if (h in e) {
                    c = e[h];
                    h += l;
                    break
                }
                if (h += l, d ? 0 > h : g <= h) throw TypeError("Reduce of empty array with no initial value");
            }
            for (; d ? 0 <= h : g > h; h += l) h in e && (c = a(c, e[h], h, f));
            return c
        }
    }, Cn = {left: rj(!1), right: rj(!0)}.left;
    M({target: "Array", proto: !0, forced: kc("reduce")}, {
        reduce: function (d) {
            return Cn(this, d, arguments.length, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Dn = ua("Array").reduce, sj = Array.prototype, Qc = function (d) {
        var f = d.reduce;
        return d === sj || d instanceof Array && f === sj.reduce ? Dn : f
    };
    M({target: "Object", stat: !0, forced: !na, sham: !na}, {defineProperty: ob.f});
    var tj = kb(function (d) {
            var f = la.Object;
            d = d.exports = function (a, b, c) {
                return f.defineProperty(a, b, c)
            };
            f.defineProperty.sham && (d.sham = !0)
        }), X = tj,
        En = /^[\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*/,
        Fn = /[\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*$/,
        Kf = function (d) {
            return function (f) {
                f = String(ec(f));
                return 1 & d && (f = f.replace(En, "")), 2 & d && (f = f.replace(Fn, "")), f
            }
        };
    Kf(1);
    Kf(2);
    var uj = Kf(3), oe = L.parseInt, Gn = /^[+-]?0[Xx]/,
        vj = 8 !== oe("\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff08") ||
        22 !== oe("\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff0x16") ? function (d, f) {
            d = uj(String(d));
            return oe(d, f >>> 0 || (Gn.test(d) ? 16 : 10))
        } : oe;
    M({global: !0, forced: parseInt != vj}, {parseInt: vj});
    var sa = la.parseInt;
    let Ig = !0, Jg = !0;
    var wj = Ac, Hn = va(function () {
        wj(1)
    });
    M({target: "Object", stat: !0, forced: !na || Hn, sham: !na}, {
        getOwnPropertyDescriptor: function (d, f) {
            return wj(eb(d), f)
        }
    });
    var Hc, pe, T = kb(function (d) {
        var f = la.Object;
        d = d.exports =
            function (a, b) {
                return f.getOwnPropertyDescriptor(a, b)
            };
        f.getOwnPropertyDescriptor.sham && (d.sham = !0)
    }), lc = function (d, f, a) {
        f = yc(f);
        f in d ? ob.f(d, f, dc(0, a)) : d[f] = a
    }, jd = Nb("navigator", "userAgent") || "", xj = L.process, yj = xj && xj.versions, zj = yj && yj.v8;
    zj ? pe = (Hc = zj.split("."))[0] + Hc[1] : jd && (!(Hc = jd.match(/Edge\/(\d+)/)) || 74 <= Hc[1]) && (Hc = jd.match(/Chrome\/(\d+)/)) && (pe = Hc[1]);
    var qe = pe && +pe, In = ya("species"), kd = function (d) {
        return 51 <= qe || !va(function () {
            var f = [];
            return (f.constructor = {})[In] = function () {
                return {foo: 1}
            },
            1 !== f[d](Boolean).foo
        })
    }, Aj = ya("isConcatSpreadable"), Jn = 51 <= qe || !va(function () {
        var d = [];
        return d[Aj] = !1, d.concat()[0] !== d
    }), Kn = kd("concat");
    M({target: "Array", proto: !0, forced: !Jn || !Kn}, {
        concat: function (d) {
            var f, a, b = pb(this), c = xf(b, 0), e = 0;
            var g = -1;
            for (f = arguments.length; g < f; g++) {
                var h = a = -1 === g ? b : arguments[g];
                if (qa(h)) {
                    var l = h[Aj];
                    h = void 0 !== l ? !!l : gc(h)
                } else h = !1;
                if (h) {
                    if (9007199254740991 < e + (l = fb(a.length))) throw TypeError("Maximum allowed index exceeded");
                    for (h = 0; h < l; h++, e++) h in a && lc(c, e, a[h])
                } else {
                    if (9007199254740991 <=
                        e) throw TypeError("Maximum allowed index exceeded");
                    lc(c, e++, a)
                }
            }
            return c.length = e, c
        }
    });
    var Ln = ua("Array").concat, Bj = Array.prototype, m = function (d) {
        var f = d.concat;
        return d === Bj || d instanceof Array && f === Bj.concat ? Ln : f
    };
    M({target: "Array", proto: !0, forced: !kd("filter")}, {
        filter: function (d) {
            return Vm(this, d, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Mn = ua("Array").filter, Cj = Array.prototype, I = function (d) {
            var f = d.filter;
            return d === Cj || d instanceof Array && f === Cj.filter ? Mn : f
        }, Nn = L.Promise, Dj = ya("iterator"),
        Ej = !1;
    try {
        var On = 0, Fj = {
            next: function () {
                return {done: !!On++}
            }, return: function () {
                Ej = !0
            }
        };
        Fj[Dj] = function () {
            return this
        };
        Array.from(Fj, function () {
            throw 2;
        })
    } catch (d) {
    }
    var Ic, Gj, Lf, Hj = function (d, f) {
            if (!f && !Ej) return !1;
            var a = !1;
            try {
                f = {}, f[Dj] = function () {
                    return {
                        next: function () {
                            return {done: a = !0}
                        }
                    }
                }, d(f)
            } catch (b) {
            }
            return a
        }, Pn = ya("species"), Ij = function (d, f) {
            var a;
            d = Wa(d).constructor;
            return void 0 === d || null == (a = Wa(d)[Pn]) ? f : wb(a)
        }, Jj = /(iphone|ipod|ipad).*applewebkit/i.test(jd), Kj = L.location, Mf = L.setImmediate,
        Lj = L.clearImmediate, Mj = L.process, Nj = L.MessageChannel, Nf = L.Dispatch, Of = 0, ld = {},
        Pf = function (d) {
            if (ld.hasOwnProperty(d)) {
                var f = ld[d];
                delete ld[d];
                f()
            }
        }, Qf = function (d) {
            return function () {
                Pf(d)
            }
        }, Oj = function (d) {
            Pf(d.data)
        }, Pj = function (d) {
            L.postMessage(d + "", Kj.protocol + "//" + Kj.host)
        };
    Mf && Lj || (Mf = function (d) {
        for (var f = [], a = 1; arguments.length > a;) f.push(arguments[a++]);
        return ld[++Of] = function () {
            ("function" == typeof d ? d : Function(d)).apply(void 0, f)
        }, Ic(Of), Of
    }, Lj = function (d) {
        delete ld[d]
    }, "process" == Fb(Mj) ?
        Ic = function (d) {
            Mj.nextTick(Qf(d))
        } : Nf && Nf.now ? Ic = function (d) {
            Nf.now(Qf(d))
        } : Nj && !Jj ? (Lf = (Gj = new Nj).port2, Gj.port1.onmessage = Oj, Ic = fc(Lf.postMessage, Lf, 1)) : !L.addEventListener || "function" != typeof postMessage || L.importScripts || va(Pj) ? Ic = "onreadystatechange" in (ae ? zc.createElement("script") : {}) ? function (d) {
            Af.appendChild(ae ? zc.createElement("script") : {}).onreadystatechange = function () {
                Af.removeChild(this);
                Pf(d)
            }
        } : function (d) {
            setTimeout(Qf(d), 0)
        } : (Ic = Pj, L.addEventListener("message", Oj, !1)));
    var md, mc,
        nd, Jc, Rf, Sf, Tf, Qj, Uf = Mf, Qn = Ac, Rj = L.MutationObserver || L.WebKitMutationObserver, Vf = L.process,
        Wf = L.Promise, Sj = "process" == Fb(Vf), Tj = Qn(L, "queueMicrotask"), Uj = Tj && Tj.value;
    Uj || (md = function () {
        var d;
        for (Sj && (d = Vf.domain) && d.exit(); mc;) {
            var f = mc.fn;
            mc = mc.next;
            try {
                f()
            } catch (a) {
                throw mc ? Jc() : nd = void 0, a;
            }
        }
        nd = void 0;
        d && d.enter()
    }, Sj ? Jc = function () {
        Vf.nextTick(md)
    } : Rj && !Jj ? (Rf = !0, Sf = document.createTextNode(""), (new Rj(md)).observe(Sf, {characterData: !0}), Jc = function () {
        Sf.data = Rf = !Rf
    }) : Wf && Wf.resolve ? (Tf = Wf.resolve(void 0),
        Qj = Tf.then, Jc = function () {
        Qj.call(Tf, md)
    }) : Jc = function () {
        Uf.call(L, md)
    });
    var Xf, Vj, Wj = Uj || function (d) {
            d = {fn: d, next: void 0};
            nd && (nd.next = d);
            mc || (mc = d, Jc());
            nd = d
        }, Rn = function (d) {
            var f, a;
            this.promise = new d(function (b, c) {
                if (void 0 !== f || void 0 !== a) throw TypeError("Bad Promise constructor");
                f = b;
                a = c
            });
            this.resolve = wb(f);
            this.reject = wb(a)
        }, re = {
            f: function (d) {
                return new Rn(d)
            }
        }, Yf = function (d, f) {
            if (Wa(d), qa(f) && f.constructor === d) return f;
            d = re.f(d);
            return (0, d.resolve)(f), d.promise
        }, se = function (d) {
            try {
                return {
                    error: !1,
                    value: d()
                }
            } catch (f) {
                return {error: !0, value: f}
            }
        }, Sn = ya("species"), Xj = Sa.get, Tn = Sa.set, Un = Sa.getterFor("Promise"), $a = Nn, Yj = L.TypeError,
        Zf = L.document, te = L.process, Vn = Ob("inspectSource"), Kc = (Nb("fetch"), re.f), Wn = Kc,
        od = "process" == Fb(te), Xn = !!(Zf && Zf.createEvent && L.dispatchEvent), ue = Bc("Promise", function () {
            if (Vn($a) === String($a) && (66 === qe || !od && "function" != typeof PromiseRejectionEvent) || !$a.prototype.finally) return !0;
            if (51 <= qe && /native code/.test($a)) return !1;
            var d = $a.resolve(1), f = function (a) {
                a(function () {
                    },
                    function () {
                    })
            };
            return (d.constructor = {})[Sn] = f, !(d.then(function () {
            }) instanceof f)
        }), Yn = ue || !Hj(function (d) {
            $a.all(d).catch(function () {
            })
        }), Zj = function (d) {
            var f;
            return !(!qa(d) || "function" != typeof (f = d.then)) && f
        }, $f = function (d, f, a) {
            if (!f.notified) {
                f.notified = !0;
                var b = f.reactions;
                Wj(function () {
                    for (var c = f.value, e = 1 == f.state, g = 0; b.length > g;) {
                        var h, l, q, t = b[g++], k = e ? t.ok : t.fail, m = t.resolve, C = t.reject, n = t.domain;
                        try {
                            k ? (e || (2 === f.rejection && Zn(d, f), f.rejection = 1), !0 === k ? h = c : (n && n.enter(), h = k(c), n && (n.exit(),
                                q = !0)), h === t.promise ? C(Yj("Promise-chain cycle")) : (l = Zj(h)) ? l.call(h, m, C) : m(h)) : C(c)
                        } catch (A) {
                            n && !q && n.exit(), C(A)
                        }
                    }
                    f.reactions = [];
                    f.notified = !1;
                    a && !f.rejection && $n(d, f)
                })
            }
        }, ak = function (d, f, a) {
            var b, c;
            Xn ? ((b = Zf.createEvent("Event")).promise = f, b.reason = a, b.initEvent(d, !1, !0), L.dispatchEvent(b)) : b = {
                promise: f,
                reason: a
            };
            (c = L["on" + d]) ? c(b) : "unhandledrejection" === d && function (a, b) {
                var c = L.console;
                c && c.error && (1 === arguments.length ? c.error(a) : c.error(a, b))
            }("Unhandled promise rejection", a)
        }, $n = function (d,
                          f) {
            Uf.call(L, function () {
                var a, b = f.value;
                if (1 !== f.rejection && !f.parent && (a = se(function () {
                    od ? te.emit("unhandledRejection", b, d) : ak("unhandledrejection", d, b)
                }), f.rejection = od || 1 !== f.rejection && !f.parent ? 2 : 1, a.error)) throw a.value;
            })
        }, Zn = function (d, f) {
            Uf.call(L, function () {
                od ? te.emit("rejectionHandled", d) : ak("rejectionhandled", d, f.value)
            })
        }, Lc = function (d, f, a, b) {
            return function (c) {
                d(f, a, c, b)
            }
        }, Mc = function (d, f, a, b) {
            f.done || (f.done = !0, b && (f = b), f.value = a, f.state = 2, $f(d, f, !0))
        }, ag = function (d, f, a, b) {
            if (!f.done) {
                f.done =
                    !0;
                b && (f = b);
                try {
                    if (d === a) throw Yj("Promise can't be resolved itself");
                    var c = Zj(a);
                    c ? Wj(function () {
                        var b = {done: !1};
                        try {
                            c.call(a, Lc(ag, d, b, f), Lc(Mc, d, b, f))
                        } catch (g) {
                            Mc(d, b, g, f)
                        }
                    }) : (f.value = a, f.state = 1, $f(d, f, !1))
                } catch (e) {
                    Mc(d, {done: !1}, e, f)
                }
            }
        };
    ue && ($a = function (d) {
        fe(this, $a, "Promise");
        wb(d);
        Xf.call(this);
        var f = Xj(this);
        try {
            d(Lc(ag, this, f), Lc(Mc, this, f))
        } catch (a) {
            Mc(this, f, a)
        }
    }, (Xf = function (d) {
        Tn(this, {
            type: "Promise",
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype =
        Gc($a.prototype, {
            then: function (d, f) {
                var a = Un(this), b = Kc(Ij(this, $a));
                return b.ok = "function" != typeof d || d, b.fail = "function" == typeof f && f, b.domain = od ? te.domain : void 0, a.parent = !0, a.reactions.push(b), 0 != a.state && $f(this, a, !1), b.promise
            }, catch: function (d) {
                return this.then(void 0, d)
            }
        }), Vj = function () {
        var d = new Xf, f = Xj(d);
        this.promise = d;
        this.resolve = Lc(ag, d, f);
        this.reject = Lc(Mc, d, f)
    }, re.f = Kc = function (d) {
        return d === $a || d === bk ? new Vj(d) : Wn(d)
    });
    M({global: !0, wrap: !0, forced: ue}, {Promise: $a});
    gd($a, "Promise",
        !1, !0);
    gj("Promise");
    var bk = Nb("Promise");
    M({target: "Promise", stat: !0, forced: ue}, {
        reject: function (d) {
            var f = Kc(this);
            return f.reject.call(void 0, d), f.promise
        }
    });
    M({target: "Promise", stat: !0, forced: !0}, {
        resolve: function (d) {
            return Yf(this === bk ? $a : this, d)
        }
    });
    M({target: "Promise", stat: !0, forced: Yn}, {
        all: function (d) {
            var f = this, a = Kc(f), b = a.resolve, c = a.reject, e = se(function () {
                var a = wb(f.resolve), e = [], l = 0, q = 1;
                Dc(d, function (d) {
                    var g = l++, h = !1;
                    e.push(void 0);
                    q++;
                    a.call(f, d).then(function (a) {
                        h || (h = !0, e[g] = a, --q ||
                        b(e))
                    }, c)
                });
                --q || b(e)
            });
            return e.error && c(e.value), a.promise
        }, race: function (d) {
            var f = this, a = Kc(f), b = a.reject, c = se(function () {
                var c = wb(f.resolve);
                Dc(d, function (d) {
                    c.call(f, d).then(a.resolve, b)
                })
            });
            return c.error && b(c.value), a.promise
        }
    });
    M({target: "Promise", stat: !0}, {
        allSettled: function (d) {
            var f = this, a = re.f(f), b = a.resolve, c = a.reject, e = se(function () {
                var a = wb(f.resolve), c = [], e = 0, q = 1;
                Dc(d, function (d) {
                    var g = e++, h = !1;
                    c.push(void 0);
                    q++;
                    a.call(f, d).then(function (a) {
                        h || (h = !0, c[g] = {status: "fulfilled", value: a},
                        --q || b(c))
                    }, function (a) {
                        h || (h = !0, c[g] = {status: "rejected", reason: a}, --q || b(c))
                    })
                });
                --q || b(c)
            });
            return e.error && c(e.value), a.promise
        }
    });
    M({target: "Promise", proto: !0, real: !0}, {
        finally: function (d) {
            var f = Ij(this, Nb("Promise")), a = "function" == typeof d;
            return this.then(a ? function (a) {
                return Yf(f, d()).then(function () {
                    return a
                })
            } : d, a ? function (a) {
                return Yf(f, d()).then(function () {
                    throw a;
                })
            } : d)
        }
    });
    var z = la.Promise;
    M({target: "Array", proto: !0, forced: !kd("map")}, {
        map: function (d) {
            return Um(this, d, 1 < arguments.length ?
                arguments[1] : void 0)
        }
    });
    var ao = ua("Array").map, ck = Array.prototype, B = function (d) {
        var f = d.map;
        return d === ck || d instanceof Array && f === ck.map ? ao : f
    }, bo = Math.max, co = Math.min;
    M({target: "Array", proto: !0, forced: !kd("splice")}, {
        splice: function (d, f) {
            var a, b, c, e, g = pb(this), h = fb(g.length), l = ic(d, h);
            var q = arguments.length;
            if (0 === q ? a = b = 0 : 1 === q ? (a = 0, b = h - l) : (a = q - 2, b = co(bo(ed(f), 0), h - l)), 9007199254740991 < h + a - b) throw TypeError("Maximum allowed length exceeded");
            q = xf(g, b);
            for (c = 0; c < b; c++) (e = l + c) in g && lc(q, c, g[e]);
            if (q.length =
                b, a < b) {
                for (c = l; c < h - b; c++) {
                    var t = c + a;
                    (e = c + b) in g ? g[t] = g[e] : delete g[t]
                }
                for (c = h; c > h - b + a; c--) delete g[c - 1]
            } else if (a > b) for (c = h - b; c > l; c--) t = c + a - 1, (e = c + b - 1) in g ? g[t] = g[e] : delete g[t];
            for (c = 0; c < a; c++) g[c + l] = arguments[c + 2];
            return g.length = h - b + a, q
        }
    });
    var eo = ua("Array").splice, dk = Array.prototype, Oa = function (d) {
        var f = d.splice;
        return d === dk || d instanceof Array && f === dk.splice ? eo : f
    }, ek = [].indexOf, fk = !!ek && 0 > 1 / [1].indexOf(1, -0), fo = kc("indexOf");
    M({target: "Array", proto: !0, forced: fk || fo}, {
        indexOf: function (d) {
            return fk ?
                ek.apply(this, arguments) || 0 : Xi(this, d, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var go = ua("Array").indexOf, gk = Array.prototype, N = function (d) {
        var f = d.indexOf;
        return d === gk || d instanceof Array && f === gk.indexOf ? go : f
    }, ho = ya("species"), io = [].slice, jo = Math.max;
    M({target: "Array", proto: !0, forced: !kd("slice")}, {
        slice: function (d, f) {
            var a, b = eb(this);
            var c = fb(b.length);
            d = ic(d, c);
            f = ic(void 0 === f ? c : f, c);
            if (gc(b) && ("function" != typeof (a = b.constructor) || a !== Array && !gc(a.prototype) ? qa(a) && null === (a = a[ho]) && (a = void 0) :
                a = void 0, a === Array || void 0 === a)) return io.call(b, d, f);
            a = new (void 0 === a ? Array : a)(jo(f - d, 0));
            for (c = 0; d < f; d++, c++) d in b && lc(a, c, b[d]);
            return a.length = c, a
        }
    });
    var ko = ua("Array").slice, hk = Array.prototype, Da = function (d) {
        var f = d.slice;
        return d === hk || d instanceof Array && f === hk.slice ? ko : f
    }, ik = !0;
    "find" in [] && Array(1).find(function () {
        ik = !1
    });
    M({target: "Array", proto: !0, forced: ik}, {
        find: function (d) {
            return Qi(this, d, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var lo = ua("Array").find, jk = Array.prototype, S = function (d) {
        var f =
            d.find;
        return d === jk || d instanceof Array && f === jk.find ? lo : f
    }, kk = [].slice, bg = {};
    M({target: "Function", proto: !0}, {
        bind: Function.bind || function (d) {
            var f = wb(this), a = kk.call(arguments, 1), b = function () {
                var c = a.concat(kk.call(arguments));
                if (this instanceof b) {
                    var e = c.length;
                    if (!(e in bg)) {
                        for (var g = [], h = 0; h < e; h++) g[h] = "a[" + h + "]";
                        bg[e] = Function("C,a", "return new C(" + g.join(",") + ")")
                    }
                    c = bg[e](f, c)
                } else c = f.apply(d, c);
                return c
            };
            return qa(f.prototype) && (b.prototype = f.prototype), b
        }
    });
    var mo = ua("Function").bind, lk =
        Function.prototype, pa = function (d) {
        var f = d.bind;
        return d === lk || d instanceof Function && f === lk.bind ? mo : f
    };
    M({target: "Array", proto: !0}, {
        includes: function (d) {
            return hn(this, d, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var no = ua("Array").includes;
    M({target: "String", proto: !0, forced: !Jf("includes")}, {
        includes: function (d) {
            return !!~String(ec(this)).indexOf(If(d), 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var oo = ua("String").includes, mk = Array.prototype, nk = String.prototype, ia = function (d) {
        var f = d.includes;
        return d ===
        mk || d instanceof Array && f === mk.includes ? no : "string" == typeof d || d === nk || d instanceof String && f === nk.includes ? oo : f
    };
    M({target: "Array", proto: !0, forced: kc("some")}, {
        some: function (d) {
            return Wm(this, d, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var po = ua("Array").some, ok = Array.prototype, Og = function (d) {
        var f = d.some;
        return d === ok || d instanceof Array && f === ok.some ? po : f
    };
    let Pg = ub;
    var pk = Object.freeze({
        __proto__: null,
        shimMediaStream: Qg,
        shimOnTrack: Rg,
        shimGetSendersWithDtmf: Sg,
        shimGetStats: Tg,
        shimSenderReceiverGetStats: Ug,
        shimAddTrackRemoveTrackWithNative: Vg,
        shimAddTrackRemoveTrack: Wg,
        shimPeerConnection: Ie,
        fixNegotiationNeeded: Xg,
        shimGetUserMedia: Ng,
        shimGetDisplayMedia: function (d, f) {
            d.navigator.mediaDevices && "getDisplayMedia" in d.navigator.mediaDevices || d.navigator.mediaDevices && ("function" == typeof f ? d.navigator.mediaDevices.getDisplayMedia = function (a) {
                return f(a).then(b => {
                    let c = a.video && a.video.width, e = a.video && a.video.height;
                    return a.video = {
                        mandatory: {
                            chromeMediaSource: "desktop", chromeMediaSourceId: b, maxFrameRate: a.video &&
                                a.video.frameRate || 3
                        }
                    }, c && (a.video.mandatory.maxWidth = c), e && (a.video.mandatory.maxHeight = e), d.navigator.mediaDevices.getUserMedia(a)
                })
            } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"))
        }
    }), qk = "".startsWith, qo = Math.min, ro = Jf("startsWith");
    M({target: "String", proto: !0, forced: !ro}, {
        startsWith: function (d) {
            var f = String(ec(this));
            If(d);
            var a = fb(qo(1 < arguments.length ? arguments[1] : void 0, f.length)), b = String(d);
            return qk ? qk.call(f, b, a) : f.slice(a, a + b.length) === b
        }
    });
    var so = ua("String").startsWith,
        rk = String.prototype, Rc = function (d) {
            var f = d.startsWith;
            return "string" == typeof d || d === rk || d instanceof String && f === rk.startsWith ? so : f
        };
    M({
        target: "String", proto: !0, forced: va(function () {
            return "trim" !== "\t\n\v\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff".trim.name
        })
    }, {
        trim: function () {
            return uj(this)
        }
    });
    var to = ua("String").trim, sk = String.prototype, ac = function (d) {
        var f = d.trim;
        return "string" == typeof d || d === sk || d instanceof String &&
        f === sk.trim ? to : f
    }, K = kb(function (d) {
        var f = {
            generateIdentifier: function () {
                return Math.random().toString(36).substr(2, 10)
            }
        };
        f.localCName = f.generateIdentifier();
        f.splitLines = function (a) {
            var b;
            return B(b = ac(a).call(a).split("\n")).call(b, function (a) {
                return ac(a).call(a)
            })
        };
        f.splitSections = function (a) {
            a = a.split("\nm=");
            return B(a).call(a, function (a, c) {
                var b;
                return ac(b = 0 < c ? "m=" + a : a).call(b) + "\r\n"
            })
        };
        f.getDescription = function (a) {
            return (a = f.splitSections(a)) && a[0]
        };
        f.getMediaSections = function (a) {
            a = f.splitSections(a);
            return a.shift(), a
        };
        f.matchPrefix = function (a, b) {
            var c;
            return I(c = f.splitLines(a)).call(c, function (a) {
                return 0 === N(a).call(a, b)
            })
        };
        f.parseCandidate = function (a) {
            var b;
            a = {
                foundation: (b = 0 === N(a).call(a, "a=candidate:") ? a.substring(12).split(" ") : a.substring(10).split(" "))[0],
                component: sa(b[1], 10),
                protocol: b[2].toLowerCase(),
                priority: sa(b[3], 10),
                ip: b[4],
                address: b[4],
                port: sa(b[5], 10),
                type: b[7]
            };
            for (var c = 8; c < b.length; c += 2) switch (b[c]) {
                case "raddr":
                    a.relatedAddress = b[c + 1];
                    break;
                case "rport":
                    a.relatedPort =
                        sa(b[c + 1], 10);
                    break;
                case "tcptype":
                    a.tcpType = b[c + 1];
                    break;
                case "ufrag":
                    a.ufrag = b[c + 1];
                    a.usernameFragment = b[c + 1];
                    break;
                default:
                    a[b[c]] = b[c + 1]
            }
            return a
        };
        f.writeCandidate = function (a) {
            var b = [];
            b.push(a.foundation);
            b.push(a.component);
            b.push(a.protocol.toUpperCase());
            b.push(a.priority);
            b.push(a.address || a.ip);
            b.push(a.port);
            var c = a.type;
            return b.push("typ"), b.push(c), "host" !== c && a.relatedAddress && a.relatedPort && (b.push("raddr"), b.push(a.relatedAddress), b.push("rport"), b.push(a.relatedPort)), a.tcpType &&
            "tcp" === a.protocol.toLowerCase() && (b.push("tcptype"), b.push(a.tcpType)), (a.usernameFragment || a.ufrag) && (b.push("ufrag"), b.push(a.usernameFragment || a.ufrag)), "candidate:" + b.join(" ")
        };
        f.parseIceOptions = function (a) {
            return a.substr(14).split(" ")
        };
        f.parseRtpMap = function (a) {
            a = a.substr(9).split(" ");
            var b = {payloadType: sa(a.shift(), 10)};
            return a = a[0].split("/"), b.name = a[0], b.clockRate = sa(a[1], 10), b.channels = 3 === a.length ? sa(a[2], 10) : 1, b.numChannels = b.channels, b
        };
        f.writeRtpMap = function (a) {
            var b = a.payloadType;
            void 0 !== a.preferredPayloadType && (b = a.preferredPayloadType);
            var c = a.channels || a.numChannels || 1;
            return "a=rtpmap:" + b + " " + a.name + "/" + a.clockRate + (1 !== c ? "/" + c : "") + "\r\n"
        };
        f.parseExtmap = function (a) {
            var b;
            a = a.substr(9).split(" ");
            return {
                id: sa(a[0], 10),
                direction: 0 < N(b = a[0]).call(b, "/") ? a[0].split("/")[1] : "sendrecv",
                uri: a[1]
            }
        };
        f.writeExtmap = function (a) {
            return "a=extmap:" + (a.id || a.preferredId) + (a.direction && "sendrecv" !== a.direction ? "/" + a.direction : "") + " " + a.uri + "\r\n"
        };
        f.parseFmtp = function (a) {
            for (var b = {},
                     c = a.substr(N(a).call(a, " ") + 1).split(";"), d = 0; d < c.length; d++) {
                var g, h;
                a = ac(g = c[d]).call(g).split("=");
                b[ac(h = a[0]).call(h)] = a[1]
            }
            return b
        };
        f.writeFmtp = function (a) {
            var b = "", c = a.payloadType;
            if (void 0 !== a.preferredPayloadType && (c = a.preferredPayloadType), a.parameters && aa(a.parameters).length) {
                var d, g = [];
                r(d = aa(a.parameters)).call(d, function (b) {
                    a.parameters[b] ? g.push(b + "=" + a.parameters[b]) : g.push(b)
                });
                b += "a=fmtp:" + c + " " + g.join(";") + "\r\n"
            }
            return b
        };
        f.parseRtcpFb = function (a) {
            a = a.substr(N(a).call(a, " ") +
                1).split(" ");
            return {type: a.shift(), parameter: a.join(" ")}
        };
        f.writeRtcpFb = function (a) {
            var b, c = "", d = a.payloadType;
            (void 0 !== a.preferredPayloadType && (d = a.preferredPayloadType), a.rtcpFeedback && a.rtcpFeedback.length) && r(b = a.rtcpFeedback).call(b, function (a) {
                c += "a=rtcp-fb:" + d + " " + a.type + (a.parameter && a.parameter.length ? " " + a.parameter : "") + "\r\n"
            });
            return c
        };
        f.parseSsrcMedia = function (a) {
            var b = N(a).call(a, " "), c = {ssrc: sa(a.substr(7, b - 7), 10)}, d = N(a).call(a, ":", b);
            return -1 < d ? (c.attribute = a.substr(b + 1, d - b - 1),
                c.value = a.substr(d + 1)) : c.attribute = a.substr(b + 1), c
        };
        f.parseSsrcGroup = function (a) {
            a = a.substr(13).split(" ");
            return {
                semantics: a.shift(), ssrcs: B(a).call(a, function (a) {
                    return sa(a, 10)
                })
            }
        };
        f.getMid = function (a) {
            if (a = f.matchPrefix(a, "a=mid:")[0]) return a.substr(6)
        };
        f.parseFingerprint = function (a) {
            a = a.substr(14).split(" ");
            return {algorithm: a[0].toLowerCase(), value: a[1]}
        };
        f.getDtlsParameters = function (a, b) {
            a = f.matchPrefix(a + b, "a=fingerprint:");
            return {role: "auto", fingerprints: B(a).call(a, f.parseFingerprint)}
        };
        f.writeDtlsParameters = function (a, b) {
            var c, d = "a=setup:" + b + "\r\n";
            return r(c = a.fingerprints).call(c, function (a) {
                d += "a=fingerprint:" + a.algorithm + " " + a.value + "\r\n"
            }), d
        };
        f.getIceParameters = function (a, b) {
            a = f.splitLines(a);
            return a = m(a).call(a, f.splitLines(b)), {
                usernameFragment: I(a).call(a, function (a) {
                    return 0 === N(a).call(a, "a=ice-ufrag:")
                })[0].substr(12), password: I(a).call(a, function (a) {
                    return 0 === N(a).call(a, "a=ice-pwd:")
                })[0].substr(10)
            }
        };
        f.writeIceParameters = function (a) {
            return "a=ice-ufrag:" + a.usernameFragment +
                "\r\na=ice-pwd:" + a.password + "\r\n"
        };
        f.parseRtpParameters = function (a) {
            for (var b, c = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            }, d = f.splitLines(a)[0].split(" "), g = 3; g < d.length; g++) {
                var h = d[g], l = f.matchPrefix(a, "a=rtpmap:" + h + " ")[0];
                if (l) {
                    var q;
                    l = f.parseRtpMap(l);
                    var t = f.matchPrefix(a, "a=fmtp:" + h + " ");
                    switch (l.parameters = t.length ? f.parseFmtp(t[0]) : {}, l.rtcpFeedback = B(q = f.matchPrefix(a, "a=rtcp-fb:" + h + " ")).call(q, f.parseRtcpFb), c.codecs.push(l), l.name.toUpperCase()) {
                        case "RED":
                        case "ULPFEC":
                            c.fecMechanisms.push(l.name.toUpperCase())
                    }
                }
            }
            return r(b =
                f.matchPrefix(a, "a=extmap:")).call(b, function (a) {
                c.headerExtensions.push(f.parseExtmap(a))
            }), c
        };
        f.writeRtpDescription = function (a, b) {
            var c, d, g, h = "";
            h += "m=" + a + " ";
            h += 0 < b.codecs.length ? "9" : "0";
            h += " UDP/TLS/RTP/SAVPF ";
            h += B(c = b.codecs).call(c, function (a) {
                return void 0 !== a.preferredPayloadType ? a.preferredPayloadType : a.payloadType
            }).join(" ") + "\r\n";
            h += "c=IN IP4 0.0.0.0\r\n";
            h += "a=rtcp:9 IN IP4 0.0.0.0\r\n";
            r(d = b.codecs).call(d, function (a) {
                h += f.writeRtpMap(a);
                h += f.writeFmtp(a);
                h += f.writeRtcpFb(a)
            });
            var l,
                q = 0;
            (r(g = b.codecs).call(g, function (a) {
                a.maxptime > q && (q = a.maxptime)
            }), 0 < q && (h += "a=maxptime:" + q + "\r\n"), h += "a=rtcp-mux\r\n", b.headerExtensions) && r(l = b.headerExtensions).call(l, function (a) {
                h += f.writeExtmap(a)
            });
            return h
        };
        f.parseRtpEncodingParameters = function (a) {
            var b, c, d, g, h, l, q, t = [], k = f.parseRtpParameters(a),
                m = -1 !== N(b = k.fecMechanisms).call(b, "RED"), n = -1 !== N(c = k.fecMechanisms).call(c, "ULPFEC");
            b = I(d = B(g = f.matchPrefix(a, "a=ssrc:")).call(g, function (a) {
                return f.parseSsrcMedia(a)
            })).call(d, function (a) {
                return "cname" ===
                    a.attribute
            });
            var p = 0 < b.length && b[0].ssrc;
            d = B(h = f.matchPrefix(a, "a=ssrc-group:FID")).call(h, function (a) {
                a = a.substr(17).split(" ");
                return B(a).call(a, function (a) {
                    return sa(a, 10)
                })
            });
            0 < d.length && 1 < d[0].length && d[0][0] === p && (q = d[0][1]);
            r(l = k.codecs).call(l, function (a) {
                "RTX" === a.name.toUpperCase() && a.parameters.apt && (a = {
                    ssrc: p,
                    codecPayloadType: sa(a.parameters.apt, 10)
                }, p && q && (a.rtx = {ssrc: q}), t.push(a), m && ((a = JSON.parse(w(a))).fec = {
                    ssrc: p,
                    mechanism: n ? "red+ulpfec" : "red"
                }, t.push(a)))
            });
            0 === t.length && p && t.push({ssrc: p});
            var A, ma, u = f.matchPrefix(a, "b=");
            u.length && (u = 0 === N(A = u[0]).call(A, "b=TIAS:") ? sa(u[0].substr(7), 10) : 0 === N(ma = u[0]).call(ma, "b=AS:") ? 950 * sa(u[0].substr(5), 10) - 16E3 : void 0, r(t).call(t, function (a) {
                a.maxBitrate = u
            }));
            return t
        };
        f.parseRtcpParameters = function (a) {
            var b, c, d = {}, g = I(b = B(c = f.matchPrefix(a, "a=ssrc:")).call(c, function (a) {
                return f.parseSsrcMedia(a)
            })).call(b, function (a) {
                return "cname" === a.attribute
            })[0];
            g && (d.cname = g.value, d.ssrc = g.ssrc);
            b = f.matchPrefix(a, "a=rtcp-rsize");
            d.reducedSize = 0 < b.length;
            d.compound = 0 === b.length;
            a = f.matchPrefix(a, "a=rtcp-mux");
            return d.mux = 0 < a.length, d
        };
        f.parseMsid = function (a) {
            var b, c, d, g = f.matchPrefix(a, "a=msid:");
            if (1 === g.length) return {stream: (d = g[0].substr(7).split(" "))[0], track: d[1]};
            a = I(b = B(c = f.matchPrefix(a, "a=ssrc:")).call(c, function (a) {
                return f.parseSsrcMedia(a)
            })).call(b, function (a) {
                return "msid" === a.attribute
            });
            return 0 < a.length ? {stream: (d = a[0].value.split(" "))[0], track: d[1]} : void 0
        };
        f.generateSessionId = function () {
            return Math.random().toString().substr(2,
                21)
        };
        f.writeSessionBoilerplate = function (a, b, c) {
            b = void 0 !== b ? b : 2;
            return "v=0\r\no=" + (c || "thisisadapterortc") + " " + (a || f.generateSessionId()) + " " + b + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
        };
        f.writeMediaSection = function (a, b, c, d) {
            b = f.writeRtpDescription(a.kind, b);
            if (b += f.writeIceParameters(a.iceGatherer.getLocalParameters()), b += f.writeDtlsParameters(a.dtlsTransport.getLocalParameters(), "offer" === c ? "actpass" : "active"), b += "a=mid:" + a.mid + "\r\n", a.direction ? b += "a=" + a.direction + "\r\n" : a.rtpSender && a.rtpReceiver ?
                b += "a=sendrecv\r\n" : a.rtpSender ? b += "a=sendonly\r\n" : a.rtpReceiver ? b += "a=recvonly\r\n" : b += "a=inactive\r\n", a.rtpSender) c = "msid:" + d.id + " " + a.rtpSender.track.id + "\r\n", b = b + ("a=" + c) + ("a=ssrc:" + a.sendEncodingParameters[0].ssrc + " " + c), a.sendEncodingParameters[0].rtx && (b += "a=ssrc:" + a.sendEncodingParameters[0].rtx.ssrc + " " + c, b += "a=ssrc-group:FID " + a.sendEncodingParameters[0].ssrc + " " + a.sendEncodingParameters[0].rtx.ssrc + "\r\n");
            return b += "a=ssrc:" + a.sendEncodingParameters[0].ssrc + " cname:" + f.localCName + "\r\n",
            a.rtpSender && a.sendEncodingParameters[0].rtx && (b += "a=ssrc:" + a.sendEncodingParameters[0].rtx.ssrc + " cname:" + f.localCName + "\r\n"), b
        };
        f.getDirection = function (a, b) {
            a = f.splitLines(a);
            for (var c = 0; c < a.length; c++) switch (a[c]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                    return a[c].substr(2)
            }
            return b ? f.getDirection(b) : "sendrecv"
        };
        f.getKind = function (a) {
            return f.splitLines(a)[0].split(" ")[0].substr(2)
        };
        f.isRejected = function (a) {
            return "0" === a.split(" ", 2)[1]
        };
        f.parseMLine = function (a) {
            a =
                f.splitLines(a)[0].substr(2).split(" ");
            return {kind: a[0], port: sa(a[1], 10), protocol: a[2], fmt: Da(a).call(a, 3).join(" ")}
        };
        f.parseOLine = function (a) {
            a = f.matchPrefix(a, "o=")[0].substr(2).split(" ");
            return {
                username: a[0],
                sessionId: a[1],
                sessionVersion: sa(a[2], 10),
                netType: a[3],
                addressType: a[4],
                address: a[5]
            }
        };
        f.isValidSDP = function (a) {
            if ("string" != typeof a || 0 === a.length) return !1;
            a = f.splitLines(a);
            for (var b = 0; b < a.length; b++) if (2 > a[b].length || "=" !== a[b].charAt(1)) return !1;
            return !0
        };
        d.exports = f
    }), Pl = function (d,
                       f) {
        function a(a, b) {
            b.addTrack(a);
            b.dispatchEvent(new d.MediaStreamTrackEvent("addtrack", {track: a}))
        }

        function b(a, b, c, e) {
            var g = new Event("track");
            g.track = b;
            g.receiver = c;
            g.transceiver = {receiver: c};
            g.streams = e;
            d.setTimeout(function () {
                a._dispatchEvent("track", g)
            })
        }

        var c = function (a) {
            var b = this, c = document.createDocumentFragment();
            if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function (a) {
                b[a] = c[a].bind(c)
            }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams =
                [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", a = JSON.parse(JSON.stringify(a || {})), this.usingBundle = "max-bundle" === a.bundlePolicy, "negotiate" === a.rtcpMuxPolicy) throw Pa("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
            switch (a.rtcpMuxPolicy || (a.rtcpMuxPolicy = "require"), a.iceTransportPolicy) {
                case "all":
                case "relay":
                    break;
                default:
                    a.iceTransportPolicy =
                        "all"
            }
            switch (a.bundlePolicy) {
                case "balanced":
                case "max-compat":
                case "max-bundle":
                    break;
                default:
                    a.bundlePolicy = "balanced"
            }
            if (a.iceServers = function (a, b) {
                var c = !1;
                return (a = JSON.parse(JSON.stringify(a))).filter(function (a) {
                    if (a && (a.urls || a.url)) {
                        var d = a.urls || a.url;
                        a.url && !a.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                        var e = "string" == typeof d;
                        return e && (d = [d]), d = d.filter(function (a) {
                            return 0 !== a.indexOf("turn:") || -1 === a.indexOf("transport=udp") || -1 !== a.indexOf("turn:[") || c ?
                                0 === a.indexOf("stun:") && 14393 <= b && -1 === a.indexOf("?transport=udp") : (c = !0, !0)
                        }), delete a.url, a.urls = e ? d[0] : d, !!d.length
                    }
                })
            }(a.iceServers || [], f), this._iceGatherers = [], a.iceCandidatePoolSize) for (var e = a.iceCandidatePoolSize; 0 < e; e--) this._iceGatherers.push(new d.RTCIceGatherer({
                iceServers: a.iceServers,
                gatherPolicy: a.iceTransportPolicy
            })); else a.iceCandidatePoolSize = 0;
            this._config = a;
            this.transceivers = [];
            this._sdpSessionId = K.generateSessionId();
            this._sdpSessionVersion = 0;
            this._dtlsRole = void 0;
            this._isClosed =
                !1
        };
        Object.defineProperty(c.prototype, "localDescription", {
            configurable: !0, get: function () {
                return this._localDescription
            }
        });
        Object.defineProperty(c.prototype, "remoteDescription", {
            configurable: !0, get: function () {
                return this._remoteDescription
            }
        });
        c.prototype.onicecandidate = null;
        c.prototype.onaddstream = null;
        c.prototype.ontrack = null;
        c.prototype.onremovestream = null;
        c.prototype.onsignalingstatechange = null;
        c.prototype.oniceconnectionstatechange = null;
        c.prototype.onconnectionstatechange = null;
        c.prototype.onicegatheringstatechange =
            null;
        c.prototype.onnegotiationneeded = null;
        c.prototype.ondatachannel = null;
        c.prototype._dispatchEvent = function (a, b) {
            this._isClosed || (this.dispatchEvent(b), "function" == typeof this["on" + a] && this["on" + a](b))
        };
        c.prototype._emitGatheringStateChange = function () {
            var a = new Event("icegatheringstatechange");
            this._dispatchEvent("icegatheringstatechange", a)
        };
        c.prototype.getConfiguration = function () {
            return this._config
        };
        c.prototype.getLocalStreams = function () {
            return this.localStreams
        };
        c.prototype.getRemoteStreams =
            function () {
                return this.remoteStreams
            };
        c.prototype._createTransceiver = function (a, b) {
            var c = 0 < this.transceivers.length;
            a = {
                track: null,
                iceGatherer: null,
                iceTransport: null,
                dtlsTransport: null,
                localCapabilities: null,
                remoteCapabilities: null,
                rtpSender: null,
                rtpReceiver: null,
                kind: a,
                mid: null,
                sendEncodingParameters: null,
                recvEncodingParameters: null,
                stream: null,
                associatedRemoteMediaStreams: [],
                wantReceive: !0
            };
            this.usingBundle && c ? (a.iceTransport = this.transceivers[0].iceTransport, a.dtlsTransport = this.transceivers[0].dtlsTransport) :
                (c = this._createIceAndDtlsTransports(), a.iceTransport = c.iceTransport, a.dtlsTransport = c.dtlsTransport);
            return b || this.transceivers.push(a), a
        };
        c.prototype.addTrack = function (a, b) {
            if (this._isClosed) throw Pa("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
            var c;
            if (this.transceivers.find(function (b) {
                return b.track === a
            })) throw Pa("InvalidAccessError", "Track already exists.");
            for (var e = 0; e < this.transceivers.length; e++) this.transceivers[e].track || this.transceivers[e].kind !== a.kind ||
            (c = this.transceivers[e]);
            return c || (c = this._createTransceiver(a.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(b) && this.localStreams.push(b), c.track = a, c.stream = b, c.rtpSender = new d.RTCRtpSender(a, c.dtlsTransport), c.rtpSender
        };
        c.prototype.addStream = function (a) {
            var b = this;
            if (15025 <= f) a.getTracks().forEach(function (c) {
                b.addTrack(c, a)
            }); else {
                var c = a.clone();
                a.getTracks().forEach(function (a, b) {
                    var d = c.getTracks()[b];
                    a.addEventListener("enabled", function (a) {
                        d.enabled = a.enabled
                    })
                });
                c.getTracks().forEach(function (a) {
                    b.addTrack(a, c)
                })
            }
        };
        c.prototype.removeTrack = function (a) {
            if (this._isClosed) throw Pa("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
            if (!(a instanceof d.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
            var b = this.transceivers.find(function (b) {
                return b.rtpSender === a
            });
            if (!b) throw Pa("InvalidAccessError", "Sender was not created by this connection.");
            var c = b.stream;
            b.rtpSender.stop();
            b.rtpSender = null;
            b.track = null;
            b.stream = null;
            -1 === this.transceivers.map(function (a) {
                return a.stream
            }).indexOf(c) && -1 < this.localStreams.indexOf(c) && this.localStreams.splice(this.localStreams.indexOf(c), 1);
            this._maybeFireNegotiationNeeded()
        };
        c.prototype.removeStream = function (a) {
            var b = this;
            a.getTracks().forEach(function (a) {
                var c = b.getSenders().find(function (b) {
                    return b.track === a
                });
                c && b.removeTrack(c)
            })
        };
        c.prototype.getSenders = function () {
            return this.transceivers.filter(function (a) {
                return !!a.rtpSender
            }).map(function (a) {
                return a.rtpSender
            })
        };
        c.prototype.getReceivers = function () {
            return this.transceivers.filter(function (a) {
                return !!a.rtpReceiver
            }).map(function (a) {
                return a.rtpReceiver
            })
        };
        c.prototype._createIceGatherer = function (a, b) {
            var c = this;
            if (b && 0 < a) return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length) return this._iceGatherers.shift();
            var e = new d.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy
            });
            return Object.defineProperty(e, "state", {
                value: "new",
                writable: !0
            }), this.transceivers[a].bufferedCandidateEvents =
                [], this.transceivers[a].bufferCandidates = function (b) {
                var d = !b.candidate || 0 === Object.keys(b.candidate).length;
                e.state = d ? "completed" : "gathering";
                null !== c.transceivers[a].bufferedCandidateEvents && c.transceivers[a].bufferedCandidateEvents.push(b)
            }, e.addEventListener("localcandidate", this.transceivers[a].bufferCandidates), e
        };
        c.prototype._gather = function (a, b) {
            var c = this, e = this.transceivers[b].iceGatherer;
            if (!e.onlocalcandidate) {
                var g = this.transceivers[b].bufferedCandidateEvents;
                this.transceivers[b].bufferedCandidateEvents =
                    null;
                e.removeEventListener("localcandidate", this.transceivers[b].bufferCandidates);
                e.onlocalcandidate = function (d) {
                    if (!(c.usingBundle && 0 < b)) {
                        var g = new Event("icecandidate");
                        g.candidate = {sdpMid: a, sdpMLineIndex: b};
                        var h = d.candidate;
                        (d = !h || 0 === Object.keys(h).length) ? "new" !== e.state && "gathering" !== e.state || (e.state = "completed") : ("new" === e.state && (e.state = "gathering"), h.component = 1, h.ufrag = e.getLocalParameters().usernameFragment, h = K.writeCandidate(h), g.candidate = Object.assign(g.candidate, K.parseCandidate(h)),
                            g.candidate.candidate = h, g.candidate.toJSON = function () {
                            return {
                                candidate: g.candidate.candidate,
                                sdpMid: g.candidate.sdpMid,
                                sdpMLineIndex: g.candidate.sdpMLineIndex,
                                usernameFragment: g.candidate.usernameFragment
                            }
                        });
                        h = K.getMediaSections(c._localDescription.sdp);
                        h[g.candidate.sdpMLineIndex] += d ? "a=end-of-candidates\r\n" : "a=" + g.candidate.candidate + "\r\n";
                        c._localDescription.sdp = K.getDescription(c._localDescription.sdp) + h.join("");
                        h = c.transceivers.every(function (a) {
                            return a.iceGatherer && "completed" === a.iceGatherer.state
                        });
                        "gathering" !== c.iceGatheringState && (c.iceGatheringState = "gathering", c._emitGatheringStateChange());
                        d || c._dispatchEvent("icecandidate", g);
                        h && (c._dispatchEvent("icecandidate", new Event("icecandidate")), c.iceGatheringState = "complete", c._emitGatheringStateChange())
                    }
                };
                d.setTimeout(function () {
                    g.forEach(function (a) {
                        e.onlocalcandidate(a)
                    })
                }, 0)
            }
        };
        c.prototype._createIceAndDtlsTransports = function () {
            var a = this, b = new d.RTCIceTransport(null);
            b.onicestatechange = function () {
                a._updateIceConnectionState();
                a._updateConnectionState()
            };
            var c = new d.RTCDtlsTransport(b);
            return c.ondtlsstatechange = function () {
                a._updateConnectionState()
            }, c.onerror = function () {
                Object.defineProperty(c, "state", {value: "failed", writable: !0});
                a._updateConnectionState()
            }, {iceTransport: b, dtlsTransport: c}
        };
        c.prototype._disposeIceAndDtlsTransports = function (a) {
            var b = this.transceivers[a].iceGatherer;
            b && (delete b.onlocalcandidate, delete this.transceivers[a].iceGatherer);
            (b = this.transceivers[a].iceTransport) && (delete b.onicestatechange, delete this.transceivers[a].iceTransport);
            (b = this.transceivers[a].dtlsTransport) && (delete b.ondtlsstatechange, delete b.onerror, delete this.transceivers[a].dtlsTransport)
        };
        c.prototype._transceive = function (a, b, c) {
            var d = Dd(a.localCapabilities, a.remoteCapabilities);
            b && a.rtpSender && (d.encodings = a.sendEncodingParameters, d.rtcp = {
                cname: K.localCName,
                compound: a.rtcpParameters.compound
            }, a.recvEncodingParameters.length && (d.rtcp.ssrc = a.recvEncodingParameters[0].ssrc), a.rtpSender.send(d));
            c && a.rtpReceiver && 0 < d.codecs.length && ("video" === a.kind && a.recvEncodingParameters &&
            15019 > f && a.recvEncodingParameters.forEach(function (a) {
                delete a.rtx
            }), a.recvEncodingParameters.length ? d.encodings = a.recvEncodingParameters : d.encodings = [{}], d.rtcp = {compound: a.rtcpParameters.compound}, a.rtcpParameters.cname && (d.rtcp.cname = a.rtcpParameters.cname), a.sendEncodingParameters.length && (d.rtcp.ssrc = a.sendEncodingParameters[0].ssrc), a.rtpReceiver.receive(d))
        };
        c.prototype.setLocalDescription = function (a) {
            var b = this;
            if (-1 === ["offer", "answer"].indexOf(a.type)) return Promise.reject(Pa("TypeError",
                'Unsupported type "' + a.type + '"'));
            if (!Zg("setLocalDescription", a.type, b.signalingState) || b._isClosed) return Promise.reject(Pa("InvalidStateError", "Can not set local " + a.type + " in state " + b.signalingState));
            if ("offer" === a.type) {
                var c = K.splitSections(a.sdp);
                var d = c.shift();
                c.forEach(function (a, c) {
                    a = K.parseRtpParameters(a);
                    b.transceivers[c].localCapabilities = a
                });
                b.transceivers.forEach(function (a, c) {
                    b._gather(a.mid, c)
                })
            } else if ("answer" === a.type) {
                c = K.splitSections(b._remoteDescription.sdp);
                d = c.shift();
                var e = 0 < K.matchPrefix(d, "a=ice-lite").length;
                c.forEach(function (a, c) {
                    var g = b.transceivers[c], h = g.iceGatherer, f = g.iceTransport, l = g.dtlsTransport,
                        q = g.localCapabilities, k = g.remoteCapabilities;
                    if (!(K.isRejected(a) && 0 === K.matchPrefix(a, "a=bundle-only").length || g.rejected)) {
                        var t = K.getIceParameters(a, d);
                        a = K.getDtlsParameters(a, d);
                        e && (a.role = "server");
                        b.usingBundle && 0 !== c || (b._gather(g.mid, c), "new" === f.state && f.start(h, t, e ? "controlling" : "controlled"), "new" === l.state && l.start(a));
                        c = Dd(q, k);
                        b._transceive(g,
                            0 < c.codecs.length, !1)
                    }
                })
            }
            return b._localDescription = {
                type: a.type,
                sdp: a.sdp
            }, "offer" === a.type ? b._updateSignalingState("have-local-offer") : b._updateSignalingState("stable"), Promise.resolve()
        };
        c.prototype.setRemoteDescription = function (c) {
            var e = this;
            if (-1 === ["offer", "answer"].indexOf(c.type)) return Promise.reject(Pa("TypeError", 'Unsupported type "' + c.type + '"'));
            if (!Zg("setRemoteDescription", c.type, e.signalingState) || e._isClosed) return Promise.reject(Pa("InvalidStateError", "Can not set remote " + c.type +
                " in state " + e.signalingState));
            var g = {};
            e.remoteStreams.forEach(function (a) {
                g[a.id] = a
            });
            var q = [], k = K.splitSections(c.sdp), P = k.shift(), m = 0 < K.matchPrefix(P, "a=ice-lite").length,
                n = 0 < K.matchPrefix(P, "a=group:BUNDLE ").length;
            e.usingBundle = n;
            var p = K.matchPrefix(P, "a=ice-options:")[0];
            return e.canTrickleIceCandidates = !!p && 0 <= p.substr(14).split(" ").indexOf("trickle"), k.forEach(function (b, h) {
                var l = K.splitLines(b), k = K.getKind(b),
                    t = K.isRejected(b) && 0 === K.matchPrefix(b, "a=bundle-only").length,
                    p = l[0].substr(2).split(" ")[2];
                l = K.getDirection(b, P);
                var F = K.parseMsid(b), C = K.getMid(b) || K.generateIdentifier();
                if (t || "application" === k && ("DTLS/SCTP" === p || "UDP/DTLS/SCTP" === p)) e.transceivers[h] = {
                    mid: C,
                    kind: k,
                    protocol: p,
                    rejected: !0
                }; else {
                    var A, r;
                    !t && e.transceivers[h] && e.transceivers[h].rejected && (e.transceivers[h] = e._createTransceiver(k, !0));
                    var Ja, u, ma = K.parseRtpParameters(b);
                    t || (Ja = K.getIceParameters(b, P), (u = K.getDtlsParameters(b, P)).role = "client");
                    p = K.parseRtpEncodingParameters(b);
                    var v = K.parseRtcpParameters(b), x = 0 < K.matchPrefix(b,
                        "a=end-of-candidates", P).length;
                    b = K.matchPrefix(b, "a=candidate:").map(function (a) {
                        return K.parseCandidate(a)
                    }).filter(function (a) {
                        return 1 === a.component
                    });
                    if (("offer" === c.type || "answer" === c.type) && !t && n && 0 < h && e.transceivers[h] && (e._disposeIceAndDtlsTransports(h), e.transceivers[h].iceGatherer = e.transceivers[0].iceGatherer, e.transceivers[h].iceTransport = e.transceivers[0].iceTransport, e.transceivers[h].dtlsTransport = e.transceivers[0].dtlsTransport, e.transceivers[h].rtpSender && e.transceivers[h].rtpSender.setTransport(e.transceivers[0].dtlsTransport),
                    e.transceivers[h].rtpReceiver && e.transceivers[h].rtpReceiver.setTransport(e.transceivers[0].dtlsTransport)), "offer" !== c.type || t) {
                        if ("answer" === c.type && !t) {
                            k = (A = e.transceivers[h]).iceGatherer;
                            var w = A.iceTransport;
                            var z = A.dtlsTransport;
                            var y = A.rtpReceiver;
                            t = A.sendEncodingParameters;
                            C = A.localCapabilities;
                            e.transceivers[h].recvEncodingParameters = p;
                            e.transceivers[h].remoteCapabilities = ma;
                            e.transceivers[h].rtcpParameters = v;
                            b.length && "new" === w.state && (!m && !x || n && 0 !== h ? b.forEach(function (a) {
                                Je(A.iceTransport,
                                    a)
                            }) : w.setRemoteCandidates(b));
                            n && 0 !== h || ("new" === w.state && w.start(k, Ja, "controlling"), "new" === z.state && z.start(u));
                            !Dd(A.localCapabilities, A.remoteCapabilities).codecs.filter(function (a) {
                                return "rtx" === a.name.toLowerCase()
                            }).length && A.sendEncodingParameters[0].rtx && delete A.sendEncodingParameters[0].rtx;
                            e._transceive(A, "sendrecv" === l || "recvonly" === l, "sendrecv" === l || "sendonly" === l);
                            !y || "sendrecv" !== l && "sendonly" !== l ? delete A.rtpReceiver : (r = y.track, F ? (g[F.stream] || (g[F.stream] = new d.MediaStream), a(r,
                                g[F.stream]), q.push([r, y, g[F.stream]])) : (g.default || (g.default = new d.MediaStream), a(r, g.default), q.push([r, y, g.default])))
                        }
                    } else {
                        (A = e.transceivers[h] || e._createTransceiver(k)).mid = C;
                        A.iceGatherer || (A.iceGatherer = e._createIceGatherer(h, n));
                        b.length && "new" === A.iceTransport.state && (!x || n && 0 !== h ? b.forEach(function (a) {
                            Je(A.iceTransport, a)
                        }) : A.iceTransport.setRemoteCandidates(b));
                        C = d.RTCRtpReceiver.getCapabilities(k);
                        15019 > f && (C.codecs = C.codecs.filter(function (a) {
                            return "rtx" !== a.name
                        }));
                        t = A.sendEncodingParameters ||
                            [{ssrc: 1001 * (2 * h + 2)}];
                        Ja = !1;
                        if ("sendrecv" === l || "sendonly" === l) {
                            if (Ja = !A.rtpReceiver, y = A.rtpReceiver || new d.RTCRtpReceiver(A.dtlsTransport, k), Ja) r = y.track, F && "-" === F.stream || (F ? (g[F.stream] || (g[F.stream] = new d.MediaStream, Object.defineProperty(g[F.stream], "id", {
                                get: function () {
                                    return F.stream
                                }
                            })), Object.defineProperty(r, "id", {
                                get: function () {
                                    return F.track
                                }
                            }), w = g[F.stream]) : (g.default || (g.default = new d.MediaStream), w = g.default)), w && (a(r, w), A.associatedRemoteMediaStreams.push(w)), q.push([r, y, w])
                        } else A.rtpReceiver &&
                        A.rtpReceiver.track && (A.associatedRemoteMediaStreams.forEach(function (a) {
                            var b = a.getTracks().find(function (a) {
                                return a.id === A.rtpReceiver.track.id
                            });
                            b && function (a, b) {
                                b.removeTrack(a);
                                b.dispatchEvent(new d.MediaStreamTrackEvent("removetrack", {track: a}))
                            }(b, a)
                        }), A.associatedRemoteMediaStreams = []);
                        A.localCapabilities = C;
                        A.remoteCapabilities = ma;
                        A.rtpReceiver = y;
                        A.rtcpParameters = v;
                        A.sendEncodingParameters = t;
                        A.recvEncodingParameters = p;
                        e._transceive(e.transceivers[h], !1, Ja)
                    }
                }
            }), void 0 === e._dtlsRole && (e._dtlsRole =
                "offer" === c.type ? "active" : "passive"), e._remoteDescription = {
                type: c.type,
                sdp: c.sdp
            }, "offer" === c.type ? e._updateSignalingState("have-remote-offer") : e._updateSignalingState("stable"), Object.keys(g).forEach(function (a) {
                var c = g[a];
                if (c.getTracks().length) {
                    if (-1 === e.remoteStreams.indexOf(c)) {
                        e.remoteStreams.push(c);
                        var h = new Event("addstream");
                        h.stream = c;
                        d.setTimeout(function () {
                            e._dispatchEvent("addstream", h)
                        })
                    }
                    q.forEach(function (a) {
                        var d = a[0], g = a[1];
                        c.id === a[2].id && b(e, d, g, [c])
                    })
                }
            }), q.forEach(function (a) {
                a[2] ||
                b(e, a[0], a[1], [])
            }), d.setTimeout(function () {
                e && e.transceivers && e.transceivers.forEach(function (a) {
                    a.iceTransport && "new" === a.iceTransport.state && 0 < a.iceTransport.getRemoteCandidates().length && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), a.iceTransport.addRemoteCandidate({}))
                })
            }, 4E3), Promise.resolve()
        };
        c.prototype.close = function () {
            this.transceivers.forEach(function (a) {
                a.iceTransport && a.iceTransport.stop();
                a.dtlsTransport && a.dtlsTransport.stop();
                a.rtpSender && a.rtpSender.stop();
                a.rtpReceiver && a.rtpReceiver.stop()
            });
            this._isClosed = !0;
            this._updateSignalingState("closed")
        };
        c.prototype._updateSignalingState = function (a) {
            this.signalingState = a;
            a = new Event("signalingstatechange");
            this._dispatchEvent("signalingstatechange", a)
        };
        c.prototype._maybeFireNegotiationNeeded = function () {
            var a = this;
            "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, d.setTimeout(function () {
                if (a.needNegotiation) {
                    a.needNegotiation = !1;
                    var b = new Event("negotiationneeded");
                    a._dispatchEvent("negotiationneeded", b)
                }
            }, 0))
        };
        c.prototype._updateIceConnectionState = function () {
            var a, b = {new: 0, closed: 0, checking: 0, connected: 0, completed: 0, disconnected: 0, failed: 0};
            if (this.transceivers.forEach(function (a) {
                a.iceTransport && !a.rejected && b[a.iceTransport.state]++
            }), a = "new", 0 < b.failed ? a = "failed" : 0 < b.checking ? a = "checking" : 0 < b.disconnected ? a = "disconnected" : 0 < b.new ? a = "new" : 0 < b.connected ? a = "connected" : 0 < b.completed && (a = "completed"), a !== this.iceConnectionState) this.iceConnectionState = a, a = new Event("iceconnectionstatechange"),
                this._dispatchEvent("iceconnectionstatechange", a)
        };
        c.prototype._updateConnectionState = function () {
            var a, b = {new: 0, closed: 0, connecting: 0, connected: 0, completed: 0, disconnected: 0, failed: 0};
            if (this.transceivers.forEach(function (a) {
                a.iceTransport && a.dtlsTransport && !a.rejected && (b[a.iceTransport.state]++, b[a.dtlsTransport.state]++)
            }), b.connected += b.completed, a = "new", 0 < b.failed ? a = "failed" : 0 < b.connecting ? a = "connecting" : 0 < b.disconnected ? a = "disconnected" : 0 < b.new ? a = "new" : 0 < b.connected && (a = "connected"), a !== this.connectionState) this.connectionState =
                a, a = new Event("connectionstatechange"), this._dispatchEvent("connectionstatechange", a)
        };
        c.prototype.createOffer = function (a) {
            var b = this;
            if (b._isClosed) return Promise.reject(Pa("InvalidStateError", "Can not call createOffer after close"));
            var c = b.transceivers.filter(function (a) {
                return "audio" === a.kind
            }).length, e = b.transceivers.filter(function (a) {
                return "video" === a.kind
            }).length;
            if (a) {
                if (a.mandatory || a.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                void 0 !== a.offerToReceiveAudio &&
                (c = !0 === a.offerToReceiveAudio ? 1 : !1 === a.offerToReceiveAudio ? 0 : a.offerToReceiveAudio);
                void 0 !== a.offerToReceiveVideo && (e = !0 === a.offerToReceiveVideo ? 1 : !1 === a.offerToReceiveVideo ? 0 : a.offerToReceiveVideo)
            }
            for (b.transceivers.forEach(function (a) {
                "audio" === a.kind ? 0 > --c && (a.wantReceive = !1) : "video" === a.kind && 0 > --e && (a.wantReceive = !1)
            }); 0 < c || 0 < e;) 0 < c && (b._createTransceiver("audio"), c--), 0 < e && (b._createTransceiver("video"), e--);
            var g = K.writeSessionBoilerplate(b._sdpSessionId, b._sdpSessionVersion++);
            b.transceivers.forEach(function (a,
                                             c) {
                var e = a.track, g = a.kind, h = a.mid || K.generateIdentifier();
                a.mid = h;
                a.iceGatherer || (a.iceGatherer = b._createIceGatherer(c, b.usingBundle));
                h = d.RTCRtpSender.getCapabilities(g);
                15019 > f && (h.codecs = h.codecs.filter(function (a) {
                    return "rtx" !== a.name
                }));
                h.codecs.forEach(function (b) {
                    "H264" === b.name && void 0 === b.parameters["level-asymmetry-allowed"] && (b.parameters["level-asymmetry-allowed"] = "1");
                    a.remoteCapabilities && a.remoteCapabilities.codecs && a.remoteCapabilities.codecs.forEach(function (a) {
                        b.name.toLowerCase() ===
                        a.name.toLowerCase() && b.clockRate === a.clockRate && (b.preferredPayloadType = a.payloadType)
                    })
                });
                h.headerExtensions.forEach(function (b) {
                    (a.remoteCapabilities && a.remoteCapabilities.headerExtensions || []).forEach(function (a) {
                        b.uri === a.uri && (b.id = a.id)
                    })
                });
                c = a.sendEncodingParameters || [{ssrc: 1001 * (2 * c + 1)}];
                e && 15019 <= f && "video" === g && !c[0].rtx && (c[0].rtx = {ssrc: c[0].ssrc + 1});
                a.wantReceive && (a.rtpReceiver = new d.RTCRtpReceiver(a.dtlsTransport, g));
                a.localCapabilities = h;
                a.sendEncodingParameters = c
            });
            "max-compat" !==
            b._config.bundlePolicy && (g += "a=group:BUNDLE " + b.transceivers.map(function (a) {
                return a.mid
            }).join(" ") + "\r\n");
            g += "a=ice-options:trickle\r\n";
            b.transceivers.forEach(function (a, c) {
                g += Yg(a, a.localCapabilities, "offer", a.stream, b._dtlsRole);
                g += "a=rtcp-rsize\r\n";
                !a.iceGatherer || "new" === b.iceGatheringState || 0 !== c && b.usingBundle || (a.iceGatherer.getLocalCandidates().forEach(function (a) {
                    a.component = 1;
                    g += "a=" + K.writeCandidate(a) + "\r\n"
                }), "completed" === a.iceGatherer.state && (g += "a=end-of-candidates\r\n"))
            });
            a = new d.RTCSessionDescription({type: "offer", sdp: g});
            return Promise.resolve(a)
        };
        c.prototype.createAnswer = function () {
            var a = this;
            if (a._isClosed) return Promise.reject(Pa("InvalidStateError", "Can not call createAnswer after close"));
            if ("have-remote-offer" !== a.signalingState && "have-local-pranswer" !== a.signalingState) return Promise.reject(Pa("InvalidStateError", "Can not call createAnswer in signalingState " + a.signalingState));
            var b = K.writeSessionBoilerplate(a._sdpSessionId, a._sdpSessionVersion++);
            a.usingBundle &&
            (b += "a=group:BUNDLE " + a.transceivers.map(function (a) {
                return a.mid
            }).join(" ") + "\r\n");
            b += "a=ice-options:trickle\r\n";
            var c = K.getMediaSections(a._remoteDescription.sdp).length;
            a.transceivers.forEach(function (d, e) {
                if (!(e + 1 > c)) {
                    if (d.rejected) return "application" === d.kind ? "DTLS/SCTP" === d.protocol ? b += "m=application 0 DTLS/SCTP 5000\r\n" : b += "m=application 0 " + d.protocol + " webrtc-datachannel\r\n" : "audio" === d.kind ? b += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === d.kind && (b += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),
                        void (b += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + d.mid + "\r\n");
                    var g;
                    d.stream && ("audio" === d.kind ? g = d.stream.getAudioTracks()[0] : "video" === d.kind && (g = d.stream.getVideoTracks()[0]), g && 15019 <= f && "video" === d.kind && !d.sendEncodingParameters[0].rtx && (d.sendEncodingParameters[0].rtx = {ssrc: d.sendEncodingParameters[0].ssrc + 1}));
                    e = Dd(d.localCapabilities, d.remoteCapabilities);
                    !e.codecs.filter(function (a) {
                        return "rtx" === a.name.toLowerCase()
                    }).length && d.sendEncodingParameters[0].rtx && delete d.sendEncodingParameters[0].rtx;
                    b += Yg(d, e, "answer", d.stream, a._dtlsRole);
                    d.rtcpParameters && d.rtcpParameters.reducedSize && (b += "a=rtcp-rsize\r\n")
                }
            });
            var e = new d.RTCSessionDescription({type: "answer", sdp: b});
            return Promise.resolve(e)
        };
        c.prototype.addIceCandidate = function (a) {
            var b, c = this;
            return a && void 0 === a.sdpMLineIndex && !a.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function (d, e) {
                if (!c._remoteDescription) return e(Pa("InvalidStateError", "Can not add ICE candidate without a remote description"));
                if (a && "" !== a.candidate) {
                    var g = a.sdpMLineIndex;
                    if (a.sdpMid) for (var h = 0; h < c.transceivers.length; h++) if (c.transceivers[h].mid === a.sdpMid) {
                        g = h;
                        break
                    }
                    var f = c.transceivers[g];
                    if (!f) return e(Pa("OperationError", "Can not add ICE candidate"));
                    if (f.rejected) return d();
                    h = 0 < Object.keys(a.candidate).length ? K.parseCandidate(a.candidate) : {};
                    if ("tcp" === h.protocol && (0 === h.port || 9 === h.port) || h.component && 1 !== h.component) return d();
                    if ((0 === g || 0 < g && f.iceTransport !== c.transceivers[0].iceTransport) && !Je(f.iceTransport,
                        h)) return e(Pa("OperationError", "Can not add ICE candidate"));
                    e = a.candidate.trim();
                    0 === e.indexOf("a=") && (e = e.substr(2));
                    (b = K.getMediaSections(c._remoteDescription.sdp))[g] += "a=" + (h.type ? e : "end-of-candidates") + "\r\n";
                    c._remoteDescription.sdp = K.getDescription(c._remoteDescription.sdp) + b.join("")
                } else for (g = 0; g < c.transceivers.length && (c.transceivers[g].rejected || (c.transceivers[g].iceTransport.addRemoteCandidate({}), (b = K.getMediaSections(c._remoteDescription.sdp))[g] += "a=end-of-candidates\r\n", c._remoteDescription.sdp =
                    K.getDescription(c._remoteDescription.sdp) + b.join(""), !c.usingBundle)); g++) ;
                d()
            })
        };
        c.prototype.getStats = function (a) {
            if (a && a instanceof d.MediaStreamTrack) {
                var b = null;
                if (this.transceivers.forEach(function (c) {
                    c.rtpSender && c.rtpSender.track === a ? b = c.rtpSender : c.rtpReceiver && c.rtpReceiver.track === a && (b = c.rtpReceiver)
                }), !b) throw Pa("InvalidAccessError", "Invalid selector.");
                return b.getStats()
            }
            var c = [];
            return this.transceivers.forEach(function (a) {
                ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function (b) {
                    a[b] &&
                    c.push(a[b].getStats())
                })
            }), Promise.all(c).then(function (a) {
                var b = new Map;
                return a.forEach(function (a) {
                    a.forEach(function (a) {
                        b.set(a.id, a)
                    })
                }), b
            })
        };
        ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach(function (a) {
            if ((a = d[a]) && a.prototype && a.prototype.getStats) {
                var b = a.prototype.getStats;
                a.prototype.getStats = function () {
                    return b.apply(this).then(function (a) {
                        var b = new Map;
                        return Object.keys(a).forEach(function (c) {
                            var d;
                            a[c].type = {
                                inboundrtp: "inbound-rtp",
                                outboundrtp: "outbound-rtp",
                                candidatepair: "candidate-pair",
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate"
                            }[(d = a[c]).type] || d.type;
                            b.set(c, a[c])
                        }), b
                    })
                }
            }
        });
        var e = ["createOffer", "createAnswer"];
        return e.forEach(function (a) {
            var b = c.prototype[a];
            c.prototype[a] = function () {
                var a = arguments;
                return "function" == typeof a[0] || "function" == typeof a[1] ? b.apply(this, [arguments[2]]).then(function (b) {
                    "function" == typeof a[0] && a[0].apply(null, [b])
                }, function (b) {
                    "function" == typeof a[1] && a[1].apply(null, [b])
                }) : b.apply(this, arguments)
            }
        }),
            (e = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach(function (a) {
                var b = c.prototype[a];
                c.prototype[a] = function () {
                    var a = arguments;
                    return "function" == typeof a[1] || "function" == typeof a[2] ? b.apply(this, arguments).then(function () {
                        "function" == typeof a[1] && a[1].apply(null)
                    }, function (b) {
                        "function" == typeof a[2] && a[2].apply(null, [b])
                    }) : b.apply(this, arguments)
                }
            }), ["getStats"].forEach(function (a) {
            var b = c.prototype[a];
            c.prototype[a] = function () {
                var a = arguments;
                return "function" == typeof a[1] ?
                    b.apply(this, arguments).then(function () {
                        "function" == typeof a[1] && a[1].apply(null)
                    }) : b.apply(this, arguments)
            }
        }), c
    }, tk = Object.freeze({
        __proto__: null,
        shimPeerConnection: Ke,
        shimReplaceTrack: bh,
        shimGetUserMedia: $g,
        shimGetDisplayMedia: ah
    }), uk = Object.freeze({
        __proto__: null,
        shimOnTrack: dh,
        shimPeerConnection: Le,
        shimSenderGetStats: eh,
        shimReceiverGetStats: fh,
        shimRemoveStream: gh,
        shimRTCDataChannel: hh,
        shimGetUserMedia: ch,
        shimGetDisplayMedia: function (d, f) {
            d.navigator.mediaDevices && "getDisplayMedia" in d.navigator.mediaDevices ||
            d.navigator.mediaDevices && (d.navigator.mediaDevices.getDisplayMedia = function (a) {
                return a && a.video ? (!0 === a.video ? a.video = {mediaSource: f} : a.video.mediaSource = f, d.navigator.mediaDevices.getUserMedia(a)) : (a = new DOMException("getDisplayMedia without video constraints is undefined"), a.name = "NotFoundError", a.code = 8, z.reject(a))
            })
        }
    }), vk = Object.freeze({
        __proto__: null,
        shimLocalStreamsAPI: ih,
        shimRemoteStreamsAPI: jh,
        shimCallbacksAPI: kh,
        shimGetUserMedia: lh,
        shimConstraints: mh,
        shimRTCIceServerUrls: nh,
        shimTrackEventTransceiver: oh,
        shimCreateOfferLegacy: ph
    }), uo = Object.freeze({
        __proto__: null,
        shimRTCIceCandidate: Ed,
        shimMaxMessageSize: Sc,
        shimSendThrowTypeError: Tc,
        shimConnectionState: Me,
        removeAllowExtmapMixed: Ne
    });
    !function ({window: d} = {}, f = {shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0}) {
        let a = Kb(d), b = {browserDetails: a, commonShim: uo, extractVersion: Jb, disableLog: Nl, disableWarnings: Ol};
        switch (a.browser) {
            case "chrome":
                if (!pk || !Ie || !f.shimChrome) return ub("Chrome shim is not included in this adapter release."), b;
                ub("adapter.js shimming chrome.");
                b.browserShim = pk;
                Ng(d);
                Qg(d);
                Ie(d);
                Rg(d);
                Wg(d);
                Sg(d);
                Tg(d);
                Ug(d);
                Xg(d);
                Ed(d);
                Me(d);
                Sc(d);
                Tc(d);
                Ne(d);
                break;
            case "firefox":
                if (!uk || !Le || !f.shimFirefox) return ub("Firefox shim is not included in this adapter release."), b;
                ub("adapter.js shimming firefox.");
                b.browserShim = uk;
                ch(d);
                Le(d);
                dh(d);
                gh(d);
                eh(d);
                fh(d);
                hh(d);
                Ed(d);
                Me(d);
                Sc(d);
                Tc(d);
                break;
            case "edge":
                if (!tk || !Ke || !f.shimEdge) return ub("MS edge shim is not included in this adapter release."), b;
                ub("adapter.js shimming edge.");
                b.browserShim = tk;
                $g(d);
                ah(d);
                Ke(d);
                bh(d);
                Sc(d);
                Tc(d);
                break;
            case "safari":
                if (!vk || !f.shimSafari) return ub("Safari shim is not included in this adapter release."), b;
                ub("adapter.js shimming safari.");
                b.browserShim = vk;
                nh(d);
                ph(d);
                kh(d);
                ih(d);
                jh(d);
                oh(d);
                lh(d);
                Ed(d);
                Sc(d);
                Tc(d);
                Ne(d);
                break;
            default:
                ub("Unsupported browser!")
        }
    }({window});
    var V, Y;
    !function (d) {
        d.WIN_10 = "Windows 10";
        d.WIN_81 = "Windows 8.1";
        d.WIN_8 = "Windows 8";
        d.WIN_7 = "Windows 7";
        d.WIN_VISTA = "Windows Vista";
        d.WIN_SERVER_2003 = "Windows Server 2003";
        d.WIN_XP = "Windows XP";
        d.WIN_2000 = "Windows 2000";
        d.ANDROID = "Android";
        d.OPEN_BSD = "Open BSD";
        d.SUN_OS = "Sun OS";
        d.LINUX = "Linux";
        d.IOS = "iOS";
        d.MAC_OS_X = "Mac OS X";
        d.MAC_OS = "Mac OS";
        d.QNX = "QNX";
        d.UNIX = "UNIX";
        d.BEOS = "BeOS";
        d.OS_2 = "OS/2";
        d.SEARCH_BOT = "Search Bot"
    }(V || (V = {}));
    (function (d) {
        d.CHROME = "Chrome";
        d.SAFARI = "Safari";
        d.EDGE = "Edge";
        d.FIREFOX = "Firefox";
        d.OPERA = "OPR";
        d.QQ = "QQBrowser";
        d.WECHAT = "MicroMessenger"
    })(Y || (Y = {}));
    let Za = function (d) {
        if (d.match(/[0-9]+\.[0-9]+\.[0-9]+$/)) return d;
        var f = d.match(/([0-9]+\.[0-9]+\.[0-9]+)\-alpha\.([0-9]+)/);
        if (f && f[1] && f[2]) {
            var a, b = f[2];
            return m(a = "".concat(f[1], ".")).call(a, b)
        }
        return (f = d.match(/([0-9]+\.[0-9]+\.[0-9]+)\-special\.([0-9]+)/)) && f[1] && f[2] ? (a = f[2], m(b = "".concat(f[1], ".")).call(b, 100 * (Number(a) + 1))) : "4.0.0.999"
    }("4.6.3");
    try {
        var wk = !0 === JSON.parse("true")
    } catch (d) {
        wk = !0
    }
    let cg = wk,
        db = {username: "test", password: "111111", turnServerURL: "", tcpport: 3433, udpport: 3478, forceturn: !1},
        Ql = {
            "90p": O(160, 90),
            "90p_1": O(160, 90),
            "120p": O(160, 120, 15, 30, 65),
            "120p_1": O(160, 120, 15, 30, 65),
            "120p_3": O(120, 120, 15,
                30, 50),
            "120p_4": O(212, 120),
            "180p": O(320, 180, 15, 30, 140),
            "180p_1": O(320, 180, 15, 30, 140),
            "180p_3": O(180, 180, 15, 30, 100),
            "180p_4": O(240, 180, 15, 30, 120),
            "240p": O(320, 240, 15, 40, 200),
            "240p_1": O(320, 240, 15, 40, 200),
            "240p_3": O(240, 240, 15, 40, 140),
            "240p_4": O(424, 240, 15, 40, 220),
            "360p": O(640, 360, 15, 80, 400),
            "360p_1": O(640, 360, 15, 80, 400),
            "360p_3": O(360, 360, 15, 80, 260),
            "360p_4": O(640, 360, 30, 80, 600),
            "360p_6": O(360, 360, 30, 80, 400),
            "360p_7": O(480, 360, 15, 80, 320),
            "360p_8": O(480, 360, 30, 80, 490),
            "360p_9": O(640, 360, 15, 80, 800),
            "360p_10": O(640, 360, 24, 80, 800),
            "360p_11": O(640, 360, 24, 80, 1E3),
            "480p": O(640, 480, 15, 100, 500),
            "480p_1": O(640, 480, 15, 100, 500),
            "480p_2": O(640, 480, 30, 100, 1E3),
            "480p_3": O(480, 480, 15, 100, 400),
            "480p_4": O(640, 480, 30, 100, 750),
            "480p_6": O(480, 480, 30, 100, 600),
            "480p_8": O(848, 480, 15, 100, 610),
            "480p_9": O(848, 480, 30, 100, 930),
            "480p_10": O(640, 480, 10, 100, 400),
            "720p": O(1280, 720, 15, 120, 1130),
            "720p_1": O(1280, 720, 15, 120, 1130),
            "720p_2": O(1280, 720, 30, 120, 2E3),
            "720p_3": O(1280, 720, 30, 120, 1710),
            "720p_5": O(960, 720, 15, 120, 910),
            "720p_6": O(960,
                720, 30, 120, 1380),
            "1080p": O(1920, 1080, 15, 120, 2080),
            "1080p_1": O(1920, 1080, 15, 120, 2080),
            "1080p_2": O(1920, 1080, 30, 120, 3E3),
            "1080p_3": O(1920, 1080, 30, 120, 3150),
            "1080p_5": O(1920, 1080, 60, 120, 4780),
            "1440p": O(2560, 1440, 30, 120, 4850),
            "1440p_1": O(2560, 1440, 30, 120, 4850),
            "1440p_2": O(2560, 1440, 60, 120, 7350),
            "4k": O(3840, 2160, 30, 120, 8910),
            "4k_1": O(3840, 2160, 30, 120, 8910),
            "4k_3": O(3840, 2160, 60, 120, 13500)
        }, Rl = {
            "480p": lb(640, 480, 5),
            "480p_1": lb(640, 480, 5),
            "480p_2": lb(640, 480, 30),
            "480p_3": lb(640, 480, 15),
            "720p": lb(1280, 720,
                5),
            "720p_1": lb(1280, 720, 5),
            "720p_2": lb(1280, 720, 30),
            "720p_3": lb(1280, 720, 15),
            "1080p": lb(1920, 1080, 5),
            "1080p_1": lb(1920, 1080, 5),
            "1080p_2": lb(1920, 1080, 30),
            "1080p_3": lb(1920, 1080, 15)
        }, Sl = {"1SL1TL": Pe(1, 1), "3SL3TL": Pe(3, 3), "2SL3TL": Pe(2, 3)}, Tl = {
            speech_low_quality: sc(16E3, !1),
            speech_standard: sc(32E3, !1, 18),
            music_standard: sc(48E3, !1),
            standard_stereo: sc(48E3, !0, 56),
            high_quality: sc(48E3, !1, 128),
            high_quality_stereo: sc(48E3, !0, 192)
        }, v = {
            PROCESS_ID: "",
            ENCRYPT_AES: !0,
            AREAS: ["CHINA", "GLOBAL"],
            WEBCS_DOMAIN: ["webrtc2-ap-web-1.agora.io",
                "webrtc2-2.ap.sd-rtn.com"],
            WEBCS_DOMAIN_BACKUP_LIST: ["webrtc2-ap-web-3.agora.io", "webrtc2-4.ap.sd-rtn.com"],
            PROXY_CS: ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"],
            CDS_AP: ["cds-ap-web-1.agora.io", "cds-web-2.ap.sd-rtn.com", "cds-ap-web-3.agora.io", "cds-web-4.ap.sd-rtn.com"],
            ACCOUNT_REGISTER: ["sua-ap-web-1.agora.io", "sua-web-2.ap.sd-rtn.com", "sua-ap-web-3.agora.io", "sua-web-4.ap.sd-rtn.com"],
            UAP_AP: ["uap-ap-web-1.agora.io", "uap-web-2.ap.sd-rtn.com", "uap-ap-web-3.agora.io", "uap-web-4.ap.sd-rtn.com"],
            LOG_UPLOAD_SERVER: "logservice.agora.io",
            EVENT_REPORT_DOMAIN: "statscollector-1.agora.io",
            EVENT_REPORT_BACKUP_DOMAIN: "web-2.statscollector.sd-rtn.com",
            GATEWAY_ADDRESS: [],
            GATEWAY_WSS_ADDRESS: "",
            LIVE_STREAMING_ADDRESS: "",
            ACCOUNT_REGISTER_RETRY_TIMEOUT: 1,
            ACCOUNT_REGISTER_RETRY_RATIO: 2,
            ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX: 6E4,
            ACCOUNT_REGISTER_RETRY_COUNT_MAX: 1E5,
            AUDIO_CONTEXT: null,
            WEBCS_BACKUP_CONNECT_TIMEOUT: 6E3,
            HTTP_CONNECT_TIMEOUT: 5E3,
            PLAYER_STATE_DEFER: 2E3,
            SIGNAL_REQUEST_TIMEOUT: 1E4,
            SIGNAL_REQUEST_WATCH_INTERVAL: 1E3,
            REPORT_STATS: !0,
            UPLOAD_LOG: !1,
            NOT_REPORT_EVENT: [],
            FILEPATH_LENMAX: 255,
            SUBSCRIBE_TCC: !0,
            PING_PONG_TIME_OUT: 10,
            DUALSTREAM_OPERATION_CHECK: !0,
            WEBSOCKET_TIMEOUT_MIN: 1E4,
            EVENT_REPORT_SEND_INTERVAL: 3E3,
            CONFIG_DISTRIBUTE_INTERVAL: 3E5,
            MEDIA_ELEMENT_EXISTS_DEPTH: 3,
            CANDIDATE_TIMEOUT: 5E3,
            SHIM_CANDIDATE: !1,
            LEAVE_MSG_TIMEOUT: 2E3,
            SHOW_REPORT_INVOKER_LOG: !1,
            STATS_FILTER: {transportId: !0, googTrackId: !0},
            JOIN_EXTEND: "",
            PUB_EXTEND: "",
            SUB_EXTEND: "",
            FORCE_TURN: !1,
            TURN_ENABLE_TCP: !0,
            TURN_ENABLE_UDP: !0,
            MAX_UPLOAD_CACHE: 50,
            UPLOAD_CACHE_INTERVAL: 2E3,
            AJAX_REQUEST_CONCURRENT: 3,
            REPORT_APP_SCENARIO: void 0,
            GATEWAY_DOMAINS: ["edge.agora.io", "edge.sd-rtn.com"],
            EVENT_REPORT_RETRY: !0,
            CHROME_FORCE_PLAN_B: !1,
            AUDIO_SOURCE_VOLUME_UPDATE_INTERVAL: 400,
            AUDIO_SOURCE_AVG_VOLUME_DURATION: 3E3,
            AUDIO_VOLUME_INDICATION_INTERVAL: 2E3,
            NORMAL_EVENT_QUEUE_CAPACITY: 100,
            CUSTOM_REPORT: !0,
            CUSTOM_REPORT_LIMIT: 20,
            PROXY_SERVER_TYPE2: "webnginx-proxy.agora.io",
            PROXY_SERVER_TYPE3: "webrtc-cloud-proxy.sd-rtn.com",
            CUSTOM_PUB_ANSWER_MODIFIER: null,
            CUSTOM_SUB_ANSWER_MODIFIER: null,
            CUSTOM_PUB_OFFER_MODIFIER: null,
            CUSTOM_SUB_OFFER_MODIFIER: null,
            DSCP_TYPE: "high",
            REMOVE_NEW_CODECS: !0,
            FRAGEMENT_LENGTH: 3,
            WEBSOCKET_COMPRESS: !1
        };
    cg || (v.WEBCS_DOMAIN = ["ap-web-1-oversea.agora.io", "ap-web-1-north-america.agora.io"], v.WEBCS_DOMAIN_BACKUP_LIST = ["ap-web-2-oversea.agora.io", "ap-web-2-north-america.agora.io"], v.PROXY_CS = ["proxy-ap-web-oversea.agora.io", "proxy-ap-web-america.agora.io"], v.CDS_AP = ["cds-ap-web-oversea.agora.io", "cds-ap-web-america.agora.io", "cds-ap-web-america2.agora.io"], v.ACCOUNT_REGISTER = ["sua-ap-web-oversea.agora.io",
        "sua-ap-web-america.agora.io", "sua-ap-web-america2.agora.io"], v.UAP_AP = ["uap-ap-web-oversea.agora.io", "uap-ap-web-america.agora.io", "uap-ap-web-america2.agora.io"], v.LOG_UPLOAD_SERVER = "logservice-oversea.agora.io", v.EVENT_REPORT_DOMAIN = "statscollector-1-oversea.agora.io", v.EVENT_REPORT_BACKUP_DOMAIN = "statscollector-2-oversea.agora.io", v.PROXY_SERVER_TYPE3 = "webrtc-cloud-proxy.agora.io", v.AREAS = ["NORTH_AMERICA", "OVERSEA"]);
    let vo = [[0, 1, 2, 3, 4, 5, 5], [0, 2, 2, 3, 4, 5, 5], [0, 3, 3, 3, 4, 5, 5], [0, 4, 4, 4, 4, 5, 5], [0, 5,
        5, 5, 5, 5, 5]], xk = [];
    var dg = [], yk = dg.sort, wo = va(function () {
        dg.sort(void 0)
    }), xo = va(function () {
        dg.sort(null)
    }), yo = kc("sort");
    M({target: "Array", proto: !0, forced: wo || !xo || yo}, {
        sort: function (d) {
            return void 0 === d ? yk.call(pb(this)) : yk.call(pb(this), wb(d))
        }
    });
    var zo = ua("Array").sort, zk = Array.prototype, pd = function (d) {
        var f = d.sort;
        return d === zk || d instanceof Array && f === zk.sort ? zo : f
    };
    M({target: "Array", stat: !0}, {isArray: gc});
    var n, Vb = la.Array.isArray;
    !function (d) {
        d.UNEXPECTED_ERROR = "UNEXPECTED_ERROR";
        d.UNEXPECTED_RESPONSE =
            "UNEXPECTED_RESPONSE";
        d.TIMEOUT = "TIMEOUT";
        d.INVALID_PARAMS = "INVALID_PARAMS";
        d.NOT_READABLE = "NOT_READABLE";
        d.NOT_SUPPORTED = "NOT_SUPPORTED";
        d.INVALID_OPERATION = "INVALID_OPERATION";
        d.OPERATION_ABORTED = "OPERATION_ABORTED";
        d.WEB_SECURITY_RESTRICT = "WEB_SECURITY_RESTRICT";
        d.NETWORK_ERROR = "NETWORK_ERROR";
        d.NETWORK_TIMEOUT = "NETWORK_TIMEOUT";
        d.NETWORK_RESPONSE_ERROR = "NETWORK_RESPONSE_ERROR";
        d.API_INVOKE_TIMEOUT = "API_INVOKE_TIMEOUT";
        d.ENUMERATE_DEVICES_FAILED = "ENUMERATE_DEVICES_FAILED";
        d.DEVICE_NOT_FOUND = "DEVICE_NOT_FOUND";
        d.ELECTRON_IS_NULL = "ELECTRON_IS_NULL";
        d.ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR = "ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR";
        d.CHROME_PLUGIN_NO_RESPONSE = "CHROME_PLUGIN_NO_RESPONSE";
        d.CHROME_PLUGIN_NOT_INSTALL = "CHROME_PLUGIN_NOT_INSTALL";
        d.MEDIA_OPTION_INVALID = "MEDIA_OPTION_INVALID";
        d.PERMISSION_DENIED = "PERMISSION_DENIED";
        d.CONSTRAINT_NOT_SATISFIED = "CONSTRAINT_NOT_SATISFIED";
        d.TRACK_IS_DISABLED = "TRACK_IS_DISABLED";
        d.SHARE_AUDIO_NOT_ALLOWED = "SHARE_AUDIO_NOT_ALLOWED";
        d.LOW_STREAM_ENCODING_ERROR =
            "LOW_STREAM_ENCODING_ERROR";
        d.SET_ENCODING_PARAMETER_ERROR = "SET_ENCODING_PARAMETER_ERROR";
        d.TRACK_STATE_UNREACHABLE = "TRACK_STATE_UNREACHABLE";
        d.INVALID_UINT_UID_FROM_STRING_UID = "INVALID_UINT_UID_FROM_STRING_UID";
        d.CAN_NOT_GET_PROXY_SERVER = "CAN_NOT_GET_PROXY_SERVER";
        d.CAN_NOT_GET_GATEWAY_SERVER = "CAN_NOT_GET_GATEWAY_SERVER";
        d.VOID_GATEWAY_ADDRESS = "VOID_GATEWAY_ADDRESS";
        d.UID_CONFLICT = "UID_CONFLICT";
        d.INVALID_LOCAL_TRACK = "INVALID_LOCAL_TRACK";
        d.INVALID_TRACK = "INVALID_TRACK";
        d.SENDER_NOT_FOUND = "SENDER_NOT_FOUND";
        d.CREATE_OFFER_FAILED = "CREATE_OFFER_FAILED";
        d.SET_ANSWER_FAILED = "SET_ANSWER_FAILED";
        d.ICE_FAILED = "ICE_FAILED";
        d.PC_CLOSED = "PC_CLOSED";
        d.SENDER_REPLACE_FAILED = "SENDER_REPLACE_FAILED";
        d.GATEWAY_P2P_LOST = "GATEWAY_P2P_LOST";
        d.NO_ICE_CANDIDATE = "NO_ICE_CANDIDATE";
        d.CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS = "CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS";
        d.EXIST_DISABLED_VIDEO_TRACK = "EXIST_DISABLED_VIDEO_TRACK";
        d.INVALID_REMOTE_USER = "INVALID_REMOTE_USER";
        d.REMOTE_USER_IS_NOT_PUBLISHED = "REMOTE_USER_IS_NOT_PUBLISHED";
        d.CUSTOM_REPORT_SEND_FAILED = "CUSTOM_REPORT_SEND_FAILED";
        d.CUSTOM_REPORT_FREQUENCY_TOO_HIGH = "CUSTOM_REPORT_FREQUENCY_TOO_HIGH";
        d.FETCH_AUDIO_FILE_FAILED = "FETCH_AUDIO_FILE_FAILED";
        d.READ_LOCAL_AUDIO_FILE_ERROR = "READ_LOCAL_AUDIO_FILE_ERROR";
        d.DECODE_AUDIO_FILE_FAILED = "DECODE_AUDIO_FILE_FAILED";
        d.WS_ABORT = "WS_ABORT";
        d.WS_DISCONNECT = "WS_DISCONNECT";
        d.WS_ERR = "WS_ERR";
        d.LIVE_STREAMING_TASK_CONFLICT = "LIVE_STREAMING_TASK_CONFLICT";
        d.LIVE_STREAMING_INVALID_ARGUMENT = "LIVE_STREAMING_INVALID_ARGUMENT";
        d.LIVE_STREAMING_INTERNAL_SERVER_ERROR =
            "LIVE_STREAMING_INTERNAL_SERVER_ERROR";
        d.LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED = "LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED";
        d.LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED = "LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED";
        d.LIVE_STREAMING_CDN_ERROR = "LIVE_STREAMING_CDN_ERROR";
        d.LIVE_STREAMING_INVALID_RAW_STREAM = "LIVE_STREAMING_INVALID_RAW_STREAM";
        d.LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT = "LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT";
        d.LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE = "LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE";
        d.LIVE_STREAMING_WARN_FREQUENT_REQUEST = "LIVE_STREAMING_WARN_FREQUENT_REQUEST";
        d.WEBGL_INTERNAL_ERROR = "WEBGL_INTERNAL_ERROR";
        d.BEAUTY_PROCESSOR_INTERNAL_ERROR = "BEAUTY_PROCESSOR_INTERNAL_ERROR";
        d.CROSS_CHANNEL_WAIT_STATUS_ERROR = "CROSS_CHANNEL_WAIT_STATUS_ERROR";
        d.CROSS_CHANNEL_FAILED_JOIN_SRC = "CROSS_CHANNEL_FAILED_JOIN_SEC";
        d.CROSS_CHANNEL_FAILED_JOIN_DEST = "CROSS_CHANNEL_FAILED_JOIN_DEST";
        d.CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST = "CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST";
        d.CROSS_CHANNEL_SERVER_ERROR_RESPONSE =
            "CROSS_CHANNEL_SERVER_ERROR_RESPONSE";
        d.METADATA_OUT_OF_RANGE = "METADATA_OUT_OF_RANGE";
        d.LOCAL_AEC_ERROR = "LOCAL_AEC_ERROR"
    }(n || (n = {}));
    var yh = function (d, f) {
        return function () {
            for (var a = Array(arguments.length), b = 0; b < a.length; b++) a[b] = arguments[b];
            return d.apply(f, a)
        }
    }, tc = Object.prototype.toString, J = {
        isArray: qh, isArrayBuffer: function (d) {
            return "[object ArrayBuffer]" === tc.call(d)
        }, isBuffer: function (d) {
            return null != d && null != d.constructor && "function" == typeof d.constructor.isBuffer && d.constructor.isBuffer(d)
        },
        isFormData: function (d) {
            return "undefined" != typeof FormData && d instanceof FormData
        }, isArrayBufferView: function (d) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(d) : d && d.buffer && d.buffer instanceof ArrayBuffer
        }, isString: function (d) {
            return "string" == typeof d
        }, isNumber: function (d) {
            return "number" == typeof d
        }, isObject: rh, isUndefined: function (d) {
            return void 0 === d
        }, isDate: function (d) {
            return "[object Date]" === tc.call(d)
        }, isFile: function (d) {
            return "[object File]" === tc.call(d)
        }, isBlob: function (d) {
            return "[object Blob]" ===
                tc.call(d)
        }, isFunction: sh, isStream: function (d) {
            return rh(d) && sh(d.pipe)
        }, isURLSearchParams: function (d) {
            return "undefined" != typeof URLSearchParams && d instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }, forEach: Hd, merge: function f() {
            function a(a, c) {
                "object" == typeof b[c] && "object" == typeof a ? b[c] = f(b[c],
                    a) : b[c] = a
            }

            for (var b = {}, c = 0, e = arguments.length; c < e; c++) Hd(arguments[c], a);
            return b
        }, deepMerge: function a() {
            function b(b, e) {
                "object" == typeof c[e] && "object" == typeof b ? c[e] = a(c[e], b) : c[e] = "object" == typeof b ? a({}, b) : b
            }

            for (var c = {}, e = 0, g = arguments.length; e < g; e++) Hd(arguments[e], b);
            return c
        }, extend: function (a, b, c) {
            return Hd(b, function (b, g) {
                a[g] = c && "function" == typeof b ? yh(b, c) : b
            }), a
        }, trim: function (a) {
            return a.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }, Ak = function (a, b, c) {
        if (!b) return a;
        if (c) b = c(b); else if (J.isURLSearchParams(b)) b =
            b.toString(); else {
            var e = [];
            J.forEach(b, function (a, b) {
                null != a && (J.isArray(a) ? b += "[]" : a = [a], J.forEach(a, function (a) {
                    J.isDate(a) ? a = a.toISOString() : J.isObject(a) && (a = JSON.stringify(a));
                    e.push(th(b) + "=" + th(a))
                }))
            });
            b = e.join("&")
        }
        b && (c = a.indexOf("#"), -1 !== c && (a = a.slice(0, c)), a += (-1 === a.indexOf("?") ? "?" : "&") + b);
        return a
    };
    Id.prototype.use = function (a, b) {
        return this.handlers.push({fulfilled: a, rejected: b}), this.handlers.length - 1
    };
    Id.prototype.eject = function (a) {
        this.handlers[a] && (this.handlers[a] = null)
    };
    Id.prototype.forEach =
        function (a) {
            J.forEach(this.handlers, function (b) {
                null !== b && a(b)
            })
        };
    var vh = Id, eg = function (a, b, c) {
            return J.forEach(c, function (c) {
                a = c(a, b)
            }), a
        }, Bk = function (a) {
            return !(!a || !a.__CANCEL__)
        }, Ck = function (a, b) {
            J.forEach(a, function (c, e) {
                e !== b && e.toUpperCase() === b.toUpperCase() && (a[b] = c, delete a[e])
            })
        }, ve = function (a, b, c, e, g) {
            return function (a, b, c, e, g) {
                return a.config = b, c && (a.code = c), a.request = e, a.response = g, a.isAxiosError = !0, a.toJSON = function () {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, a
            }(Error(a), b, c, e, g)
        },
        Ao = "age authorization content-length content-type etag expires from host if-modified-since if-unmodified-since last-modified location max-forwards proxy-authorization referer retry-after user-agent".split(" "),
        Bo = J.isStandardBrowserEnv() ? function () {
            function a(a) {
                return c && (e.setAttribute("href", a), a = e.href), e.setAttribute("href",
                    a), {
                    href: e.href,
                    protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
                    host: e.host,
                    search: e.search ? e.search.replace(/^\?/, "") : "",
                    hash: e.hash ? e.hash.replace(/^#/, "") : "",
                    hostname: e.hostname,
                    port: e.port,
                    pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname
                }
            }

            var b, c = /(msie|trident)/i.test(navigator.userAgent), e = document.createElement("a");
            return b = a(window.location.href), function (c) {
                c = J.isString(c) ? a(c) : c;
                return c.protocol === b.protocol && c.host === b.host
            }
        }() : function () {
            return !0
        }, Co = J.isStandardBrowserEnv() ?
        {
            write: function (a, b, c, e, g, h) {
                var l = [];
                l.push(a + "=" + encodeURIComponent(b));
                J.isNumber(c) && l.push("expires=" + (new Date(c)).toGMTString());
                J.isString(e) && l.push("path=" + e);
                J.isString(g) && l.push("domain=" + g);
                !0 === h && l.push("secure");
                document.cookie = l.join("; ")
            }, read: function (a) {
                return (a = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"))) ? decodeURIComponent(a[3]) : null
            }, remove: function (a) {
                this.write(a, "", Date.now() - 864E5)
            }
        } : {
            write: function () {
            }, read: function () {
                return null
            }, remove: function () {
            }
        },
        Do = function (a) {
            return new Promise(function (b, c) {
                var e = a.data, g = a.headers;
                J.isFormData(e) && delete g["Content-Type"];
                var h = new XMLHttpRequest;
                a.auth && (g.Authorization = "Basic " + btoa((a.auth.username || "") + ":" + (a.auth.password || "")));
                if (h.open(a.method.toUpperCase(), Ak(a.url, a.params, a.paramsSerializer), !0), h.timeout = a.timeout, h.onreadystatechange = function () {
                    if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                        var e, g, l, k, m, n = "getAllResponseHeaders" in h ? (e = h.getAllResponseHeaders(),
                            m = {}, e ? (J.forEach(e.split("\n"), function (a) {
                            (k = a.indexOf(":"), g = J.trim(a.substr(0, k)).toLowerCase(), l = J.trim(a.substr(k + 1)), !g) || m[g] && 0 <= Ao.indexOf(g) || (m[g] = "set-cookie" === g ? (m[g] ? m[g] : []).concat([l]) : m[g] ? m[g] + ", " + l : l)
                        }), m) : m) : null;
                        !function (a, b, c) {
                            var e = c.config.validateStatus;
                            !e || e(c.status) ? a(c) : b(ve("Request failed with status code " + c.status, c.config, null, c.request, c))
                        }(b, c, {
                            data: a.responseType && "text" !== a.responseType ? h.response : h.responseText,
                            status: h.status,
                            statusText: h.statusText,
                            headers: n,
                            config: a,
                            request: h
                        });
                        h = null
                    }
                }, h.onabort = function () {
                    h && (c(ve("Request aborted", a, "ECONNABORTED", h)), h = null)
                }, h.onerror = function () {
                    c(ve("Network Error", a, null, h));
                    h = null
                }, h.ontimeout = function () {
                    c(ve("timeout of " + a.timeout + "ms exceeded", a, "ECONNABORTED", h));
                    h = null
                }, J.isStandardBrowserEnv()) {
                    var l = (a.withCredentials || Bo(a.url)) && a.xsrfCookieName ? Co.read(a.xsrfCookieName) : void 0;
                    l && (g[a.xsrfHeaderName] = l)
                }
                if ("setRequestHeader" in h && J.forEach(g, function (a, b) {
                    void 0 === e && "content-type" === b.toLowerCase() ?
                        delete g[b] : h.setRequestHeader(b, a)
                }), a.withCredentials && (h.withCredentials = !0), a.responseType) try {
                    h.responseType = a.responseType
                } catch (q) {
                    if ("json" !== a.responseType) throw q;
                }
                "function" == typeof a.onDownloadProgress && h.addEventListener("progress", a.onDownloadProgress);
                "function" == typeof a.onUploadProgress && h.upload && h.upload.addEventListener("progress", a.onUploadProgress);
                a.cancelToken && a.cancelToken.promise.then(function (a) {
                    h && (h.abort(), c(a), h = null)
                });
                void 0 === e && (e = null);
                h.send(e)
            })
        }, Eo = {"Content-Type": "application/x-www-form-urlencoded"},
        we = {
            adapter: function () {
                var a;
                return ("undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) || "undefined" != typeof XMLHttpRequest) && (a = Do), a
            }(),
            transformRequest: [function (a, b) {
                return Ck(b, "Accept"), Ck(b, "Content-Type"), J.isFormData(a) || J.isArrayBuffer(a) || J.isBuffer(a) || J.isStream(a) || J.isFile(a) || J.isBlob(a) ? a : J.isArrayBufferView(a) ? a.buffer : J.isURLSearchParams(a) ? (uh(b, "application/x-www-form-urlencoded;charset=utf-8"), a.toString()) : J.isObject(a) ? (uh(b, "application/json;charset=utf-8"),
                    JSON.stringify(a)) : a
            }],
            transformResponse: [function (a) {
                if ("string" == typeof a) try {
                    a = JSON.parse(a)
                } catch (b) {
                }
                return a
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (a) {
                return 200 <= a && 300 > a
            },
            headers: {common: {Accept: "application/json, text/plain, */*"}}
        };
    J.forEach(["delete", "get", "head"], function (a) {
        we.headers[a] = {}
    });
    J.forEach(["post", "put", "patch"], function (a) {
        we.headers[a] = J.merge(Eo)
    });
    var Fo = function (a) {
        var b, c, e;
        a.cancelToken && a.cancelToken.throwIfRequested();
        return a.baseURL && (e = a.url, !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)) && (a.url = (b = a.baseURL, (c = a.url) ? b.replace(/\/+$/, "") + "/" + c.replace(/^\/+/, "") : b)), a.headers = a.headers || {}, a.data = eg(a.data, a.headers, a.transformRequest), a.headers = J.merge(a.headers.common || {}, a.headers[a.method] || {}, a.headers || {}), J.forEach("delete get head post put patch common".split(" "), function (b) {
            delete a.headers[b]
        }), (a.adapter || we.adapter)(a).then(function (b) {
            a.cancelToken && a.cancelToken.throwIfRequested();
            return b.data = eg(b.data,
                b.headers, a.transformResponse), b
        }, function (b) {
            Bk(b) || (a.cancelToken && a.cancelToken.throwIfRequested(), b && b.response && (b.response.data = eg(b.response.data, b.response.headers, a.transformResponse)));
            return Promise.reject(b)
        })
    }, fg = function (a, b) {
        b = b || {};
        var c = {};
        return J.forEach(["url", "method", "params", "data"], function (a) {
            void 0 !== b[a] && (c[a] = b[a])
        }), J.forEach(["headers", "auth", "proxy"], function (e) {
            J.isObject(b[e]) ? c[e] = J.deepMerge(a[e], b[e]) : void 0 !== b[e] ? c[e] = b[e] : J.isObject(a[e]) ? c[e] = J.deepMerge(a[e]) :
                void 0 !== a[e] && (c[e] = a[e])
        }), J.forEach("baseURL transformRequest transformResponse paramsSerializer timeout withCredentials adapter responseType xsrfCookieName xsrfHeaderName onUploadProgress onDownloadProgress maxContentLength validateStatus maxRedirects httpAgent httpsAgent cancelToken socketPath".split(" "), function (e) {
            void 0 !== b[e] ? c[e] = b[e] : void 0 !== a[e] && (c[e] = a[e])
        }), c
    };
    Uc.prototype.request = function (a, b) {
        "string" == typeof a ? (a = b || {}).url = a : a = a || {};
        (a = fg(this.defaults, a)).method = a.method ? a.method.toLowerCase() :
            "get";
        var c = [Fo, void 0];
        a = Promise.resolve(a);
        this.interceptors.request.forEach(function (a) {
            c.unshift(a.fulfilled, a.rejected)
        });
        for (this.interceptors.response.forEach(function (a) {
            c.push(a.fulfilled, a.rejected)
        }); c.length;) a = a.then(c.shift(), c.shift());
        return a
    };
    Uc.prototype.getUri = function (a) {
        return a = fg(this.defaults, a), Ak(a.url, a.params, a.paramsSerializer).replace(/^\?/, "")
    };
    J.forEach(["delete", "get", "head", "options"], function (a) {
        Uc.prototype[a] = function (b, c) {
            return this.request(J.merge(c || {}, {
                method: a,
                url: b
            }))
        }
    });
    J.forEach(["post", "put", "patch"], function (a) {
        Uc.prototype[a] = function (b, c, e) {
            return this.request(J.merge(e || {}, {method: a, url: b, data: c}))
        }
    });
    var Kd = Uc;
    Qe.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    };
    Qe.prototype.__CANCEL__ = !0;
    var wh = Qe;
    Jd.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
    };
    Jd.source = function () {
        var a;
        return {
            token: new Jd(function (b) {
                a = b
            }), cancel: a
        }
    };
    var Hb = xh(we);
    Hb.Axios = Kd;
    Hb.create = function (a) {
        return xh(fg(Hb.defaults,
            a))
    };
    Hb.Cancel = wh;
    Hb.CancelToken = Jd;
    Hb.isCancel = Bk;
    Hb.all = function (a) {
        return Promise.all(a)
    };
    Hb.spread = function (a) {
        return function (b) {
            return a.apply(null, b)
        }
    };
    var Bb = Hb.default = Hb;
    let qb = {DEBUG: 0, INFO: 1, WARNING: 2, ERROR: 3, NONE: 4}, Dk = a => {
        for (const b in qb) if (Object.prototype.hasOwnProperty.call(qb, b) && qb[b] === a) return b;
        return "DEFAULT"
    }, k = new class {
        constructor() {
            this.logLevel = qb.DEBUG;
            this.uploadState = "collecting";
            this.uploadLogWaitingList = [];
            this.uploadLogUploadingList = [];
            this.currentLogID = this.uploadErrorCount =
                0
        }

        debug(...a) {
            var b;
            a = m(b = [qb.DEBUG]).call(b, a);
            this.log.apply(this, a)
        }

        info(...a) {
            var b;
            a = m(b = [qb.INFO]).call(b, a);
            this.log.apply(this, a)
        }

        warning(...a) {
            var b;
            a = m(b = [qb.WARNING]).call(b, a);
            this.log.apply(this, a)
        }

        error(...a) {
            var b;
            a = m(b = [qb.ERROR]).call(b, a);
            this.log.apply(this, a)
        }

        setLogLevel(a) {
            this.logLevel = a = Math.min(Math.max(0, a), 4)
        }

        enableLogUpload() {
            Qa("UPLOAD_LOG", !0)
        }

        disableLogUpload() {
            Qa("UPLOAD_LOG", !1);
            this.uploadLogUploadingList = [];
            this.uploadLogWaitingList = []
        }

        setProxyServer(a) {
            this.proxyServerURL =
                a
        }

        log(...a) {
            var b, c, e, g;
            const h = Math.max(0, Math.min(4, a[0]));
            if (!(a[0] = zh() + " Agora-SDK [".concat(Dk(h), "]:"), this.appendLogToWaitingList(h, a), h < this.logLevel)) {
                var l = zh() + " %cAgora-SDK [".concat(Dk(h), "]:");
                switch (h) {
                    case qb.DEBUG:
                        a = m(b = [l, "color: #64B5F6;"]).call(b, Da(a).call(a, 1));
                        console.log.apply(console, a);
                        break;
                    case qb.INFO:
                        a = m(c = [l, "color: #1E88E5; font-weight: bold;"]).call(c, Da(a).call(a, 1));
                        console.log.apply(console, a);
                        break;
                    case qb.WARNING:
                        a = m(e = [l, "color: #FB8C00; font-weight: bold;"]).call(e,
                            Da(a).call(a, 1));
                        console.warn.apply(console, a);
                        break;
                    case qb.ERROR:
                        a = m(g = [l, "color: #B00020; font-weight: bold;"]).call(g, Da(a).call(a, 1)), console.error.apply(console, a)
                }
            }
        }

        appendLogToWaitingList(a, ...b) {
            if (v.UPLOAD_LOG) {
                var c = "";
                r(b).call(b, a => {
                    "object" == typeof a && (a = w(a));
                    c += "".concat(a, " ")
                });
                this.uploadLogWaitingList.push({payload_str: c, log_level: a, log_item_id: this.currentLogID++});
                "uploading" === this.uploadState && 0 === this.uploadLogUploadingList.length && this.uploadLogInterval()
            }
        }

        startUpload() {
            this.uploadState =
                "uploading";
            0 === this.uploadLogUploadingList.length && this.uploadLogInterval()
        }

        async uploadLogs() {
            var a, b = {sdk_version: Za, process_id: v.PROCESS_ID, payload: w(this.uploadLogUploadingList)};
            b = await Bb.post(this.url || (this.proxyServerURL ? m(a = "https://".concat(this.proxyServerURL, "/ls/?h=")).call(a, v.LOG_UPLOAD_SERVER, "&p=443&d=upload/v1") : "https://".concat(v.LOG_UPLOAD_SERVER, "/upload/v1")), b, {responseType: "text"});
            if ("OK" !== b.data) throw Error("unexpected upload log response: " + b.data);
            this.uploadLogUploadingList =
                []
        }

        uploadLogInterval() {
            if (0 !== this.uploadLogUploadingList.length || 0 !== this.uploadLogWaitingList.length) {
                var a;
                0 === this.uploadLogUploadingList.length && (this.uploadLogUploadingList = Oa(a = this.uploadLogWaitingList).call(a, 0, 10));
                this.uploadLogs().then(() => {
                    this.uploadErrorCount = 0;
                    0 < this.uploadLogWaitingList.length && window.setTimeout(() => this.uploadLogInterval(), 3E3)
                }).catch(a => {
                    this.uploadErrorCount += 1;
                    2 > this.uploadErrorCount ? window.setTimeout(() => this.uploadLogInterval(), 200) : window.setTimeout(() => this.uploadLogInterval(),
                        1E3)
                })
            }
        }
    };

    class p {
        constructor(a, b = "", c) {
            var e;
            this.name = "AgoraRTCException";
            this.code = a;
            this.message = m(e = "AgoraRTCError ".concat(this.code, ": ")).call(e, b);
            this.data = c
        }

        toString() {
            var a;
            return this.data ? m(a = "".concat(this.message, " data: ")).call(a, w(this.data)) : this.message
        }

        print() {
            return k.error(this.toString()), this
        }

        throw() {
            throw this.print(), this;
        }
    }

    var Ek, Ca;
    !function (a) {
        a.FREE = "free";
        a.UPLOADING = "uploading"
    }(Ek || (Ek = {}));
    (function (a) {
        a.NONE = "none";
        a.INIT = "init";
        a.CANPLAY = "canplay";
        a.PLAYING = "playing";
        a.PAUSED = "paused";
        a.SUSPEND = "suspend";
        a.STALLED = "stalled";
        a.WAITING = "waiting";
        a.ERROR = "error";
        a.DESTROYED = "destroyed";
        a.ABORT = "abort";
        a.ENDED = "ended";
        a.EMPTIED = "emptied"
    })(Ca || (Ca = {}));
    M({target: "Number", stat: !0}, {MAX_SAFE_INTEGER: 9007199254740991});
    M({target: "Number", stat: !0}, {MIN_SAFE_INTEGER: -9007199254740991});
    let Go = {
        sid: "",
        lts: 0,
        success: null,
        cname: null,
        uid: null,
        peer: null,
        cid: null,
        elapse: null,
        extend: null,
        vid: 0
    };
    var Fa, oa, Fk, y, D, nc, Qb, wc, qd, ab, Ga, E, R, Xa, wa, Q, ka, rb, da, H, sb;
    !function (a) {
        a.PUBLISH =
            "publish";
        a.SUBSCRIBE = "subscribe";
        a.SESSION_INIT = "session_init";
        a.JOIN_CHOOSE_SERVER = "join_choose_server";
        a.REQ_USER_ACCOUNT = "req_user_account";
        a.JOIN_GATEWAY = "join_gateway";
        a.STREAM_SWITCH = "stream_switch";
        a.REQUEST_PROXY_WORKER_MANAGER = "request_proxy_worker_manager";
        a.REQUEST_PROXY_APPCENTER = "request_proxy_appcenter";
        a.FIRST_VIDEO_RECEIVED = "first_video_received";
        a.FIRST_AUDIO_RECEIVED = "first_audio_received";
        a.FIRST_VIDEO_DECODE = "first_video_decode";
        a.FIRST_AUDIO_DECODE = "first_audio_decode";
        a.ON_ADD_AUDIO_STREAM =
            "on_add_audio_stream";
        a.ON_ADD_VIDEO_STREAM = "on_add_video_stream";
        a.ON_UPDATE_STREAM = "on_update_stream";
        a.ON_REMOVE_STREAM = "on_remove_stream";
        a.USER_ANALYTICS = "req_user_analytics"
    }(Fa || (Fa = {}));
    (function (a) {
        a.SESSION = "io.agora.pb.Wrtc.Session";
        a.JOIN_CHOOSE_SERVER = "io.agora.pb.Wrtc.JoinChooseServer";
        a.REQ_USER_ACCOUNT = "io.agora.pb.Wrtc.ReqUserAccount";
        a.JOIN_GATEWAT = "io.agora.pb.Wrtc.JoinGateway";
        a.PUBLISH = "io.agora.pb.Wrtc.Publish";
        a.SUBSCRIBE = "io.agora.pb.Wrtc.Subscribe";
        a.STREAM_SWITCH = "io.agora.pb.Wrtc.StreamSwitch";
        a.AUDIO_SENDING_STOPPED = "io.agora.pb.Wrtc.AudioSendingStopped";
        a.VIDEO_SENDING_STOPPED = "io.agora.pb.Wrtc.VideoSendingStopped";
        a.REQUEST_PROXY_APPCENTER = "io.agora.pb.Wrtc.RequestProxyAppCenter";
        a.REQUEST_PROXY_WORKER_MANAGER = "io.agora.pb.Wrtc.RequestProxyWorkerManager";
        a.API_INVOKE = "io.agora.pb.Wrtc.ApiInvoke";
        a.FIRST_VIDEO_RECEIVED = "io.agora.pb.Wrtc.FirstVideoReceived";
        a.FIRST_AUDIO_RECEIVED = "io.agora.pb.Wrtc.FirstAudioReceived";
        a.FIRST_VIDEO_DECODE = "io.agora.pb.Wrtc.FirstVideoDecode";
        a.FIRST_AUDIO_DECODE =
            "io.agora.pb.Wrtc.FirstAudioDecode";
        a.ON_ADD_AUDIO_STREAM = "io.agora.pb.Wrtc.OnAddAudioStream";
        a.ON_ADD_VIDEO_STREAM = "io.agora.pb.Wrtc.OnAddVideoStream";
        a.ON_UPDATE_STREAM = "io.agora.pb.Wrtc.OnUpdateStream";
        a.ON_REMOVE_STREAM = "io.agora.pb.Wrtc.OnRemoveStream";
        a.JOIN_CHANNEL_TIMEOUT = "io.agora.pb.Wrtc.JoinChannelTimeout";
        a.PEER_PUBLISH_STATUS = "io.agora.pb.Wrtc.PeerPublishStatus";
        a.WORKER_EVENT = "io.agora.pb.Wrtc.WorkerEvent";
        a.AP_WORKER_EVENT = "io.agora.pb.Wrtc.APWorkerEvent";
        a.JOIN_WEB_PROXY_AP = "io.agora.pb.Wrtc.JoinWebProxyAP";
        a.WEBSOCKET_QUIT = "io.agora.pb.Wrtc.WebSocketQuit";
        a.USER_ANALYTICS = "io.agora.pb.Wrtc.UserAnalytics"
    })(oa || (oa = {}));
    (function (a) {
        a[a.WORKER_EVENT = 156] = "WORKER_EVENT";
        a[a.AP_WORKER_EVENT = 160] = "AP_WORKER_EVENT"
    })(Fk || (Fk = {}));
    (function (a) {
        a.CREATE_CLIENT = "createClient";
        a.CHECK_SYSTEM_REQUIREMENTS = "checkSystemRequirements";
        a.SET_AREA = "setArea";
        a.CHECK_VIDEO_TRACK_IS_ACTIVE = "checkVideoTrackIsActive";
        a.CHECK_AUDIO_TRACK_IS_ACTIVE = "checkAudioTrackIsActive";
        a.CREATE_MIC_AUDIO_TRACK = "createMicrophoneAudioTrack";
        a.CREATE_CUSTOM_AUDIO_TRACK = "createCustomAudioTrack";
        a.CREATE_BUFFER_AUDIO_TRACK = "createBufferSourceAudioTrack";
        a.CREATE_CAM_VIDEO_TRACK = "createCameraVideoTrack";
        a.CREATE_CUSTOM_VIDEO_TRACK = "createCustomVideoTrack";
        a.CREATE_MIC_AND_CAM_TRACKS = "createMicrophoneAndCameraTracks";
        a.CREATE_SCREEN_VIDEO_TRACK = "createScreenVideoTrack";
        a.SET_ENCRYPTION_CONFIG = "Client.setEncryptionConfig";
        a.START_PROXY_SERVER = "Client.startProxyServer";
        a.STOP_PROXY_SERVER = "Client.stopProxyServer";
        a.SET_PROXY_SERVER = "Client.setProxyServer";
        a.SET_TURN_SERVER = "Client.setTurnServer";
        a.SET_CLIENT_ROLE = "Client.setClientRole";
        a.SET_LOW_STREAM_PARAMETER = "Client.setLowStreamParameter";
        a.ENABLE_DUAL_STREAM = "Client.enableDualStream";
        a.DISABLE_DUAL_STREAM = "Client.disableDualStream";
        a.JOIN = "Client.join";
        a.LEAVE = "Client.leave";
        a.PUBLISH = "Client.publish";
        a.UNPUBLISH = "Client.unpublish";
        a.SUBSCRIBE = "Client.subscribe";
        a.UNSUBSCRIBE = "Client.unsubscribe";
        a.RENEW_TOKEN = "Client.renewToken";
        a.SET_REMOTE_VIDEO_STREAM_TYPE = "Client.setRemoteVideoStreamType";
        a.SET_STREAM_FALLBACK_OPTION = "Client.setStreamFallbackOption";
        a.ENABLE_AUDIO_VOLUME_INDICATOR = "Client.enableAudioVolumeIndicator";
        a.SEND_CUSTOM_REPORT_MESSAGE = "Client.sendCustomReportMessage";
        a.ON_LIVE_STREAM_WARNING = "Client.onLiveStreamWarning";
        a.ON_LIVE_STREAM_ERROR = "Client.onLiveStreamingError";
        a.START_LIVE_STREAMING = "Client.startLiveStreaming";
        a.SET_LIVE_TRANSCODING = "Client.setLiveTranscoding";
        a.STOP_LIVE_STREAMING = "Client.stopLiveStreaming";
        a.ADD_INJECT_STREAM_URL = "Client.addInjectStreamUrl";
        a.REMOVE_INJECT_STREAM_URL = "Client.removeInjectStreamUrl";
        a.START_CHANNEL_MEDIA_RELAY = "Client.startChannelMediaRelay";
        a.UPDATE_CHANNEL_MEDIA_RELAY = "Client.updateChannelMediaRelay";
        a.STOP_CHANNEL_MEDIA_RELAY = "Client.stopChannelMediaRelay";
        a.REQUEST_CONFIG_DISTRIBUTE = "_config-distribute-request";
        a.SET_CONFIG_DISTRIBUTE = "_configDistribute";
        a.LOCAL_TRACK_SET_MUTED = "LocalTrack.setMute";
        a.LOCAL_AUDIO_TRACK_PLAY = "LocalAudioTrack.play";
        a.LOCAL_AUDIO_TRACK_PLAY_IN_ELEMENT = "LocalAudioTrack.playInElement";
        a.LOCAL_AUDIO_TRACK_STOP =
            "LocalAudioTrack.stop";
        a.LOCAL_AUDIO_TRACK_SET_VOLUME = "LocalAudioTrack.setVolume";
        a.MIC_AUDIO_TRACK_SET_DEVICE = "MicrophoneAudioTrack.setDevice";
        a.BUFFER_AUDIO_TRACK_START = "BufferSourceAudioTrack.startProcessAudioBuffer";
        a.BUFFER_AUDIO_TRACK_STOP = "BufferSourceAudioTrack.stopProcessAudioBuffer";
        a.BUFFER_AUDIO_TRACK_PAUSE = "BufferSourceAudioTrack.pauseProcessAudioBuffer";
        a.BUFFER_AUDIO_TRACK_RESUME = "BufferSourceAudioTrack.resumeProcessAudioBuffer";
        a.BUFFER_AUDIO_TRACK_SEEK = "BufferSourceAudioTrack.seekAudioBuffer";
        a.LOCAL_VIDEO_TRACK_PLAY = "LocalVideoTrack.play";
        a.LOCAL_VIDEO_TRACK_STOP = "LocalVideoTrack.stop";
        a.LOCAL_VIDEO_TRACK_BEAUTY = "LocalVideoTrack.setBeautyEffect";
        a.CAM_VIDEO_TRACK_SET_DEVICE = "CameraVideoTrack.setDevice";
        a.CAM_VIDEO_TRACK_SET_ENCODER_CONFIG = "CameraVideoTrack.setEncoderConfiguration";
        a.REMOTE_VIDEO_TRACK_PLAY = "RemoteVideoTrack.play";
        a.REMOTE_VIDEO_TRACK_STOP = "RemoteVideoTrack.stop";
        a.REMOTE_AUDIO_TRACK_PLAY = "RemoteAudioTrack.play";
        a.REMOTE_AUDIO_TRACK_STOP = "RemoteAudioTrack.stop";
        a.REMOTE_AUDIO_SET_VOLUME =
            "RemoteAudioTrack.setVolume";
        a.REMOTE_AUDIO_SET_OUTPUT_DEVICE = "RemoteAudioTrack.setOutputDevice";
        a.GET_MEDIA_STREAM_TRACK = "Track.getMediaStreamTrack";
        a.STREAM_TYPE_CHANGE = "streamTypeChange"
    })(y || (y = {}));
    (D || (D = {})).TRACER = "tracer";
    (function (a) {
        a.IDLE = "IDLE";
        a.INITING = "INITING";
        a.INITEND = "INITEND"
    })(nc || (nc = {}));
    (function (a) {
        a.STATE_CHANGE = "state_change";
        a.RECORDING_DEVICE_CHANGED = "recordingDeviceChanged";
        a.PLAYOUT_DEVICE_CHANGED = "playoutDeviceChanged";
        a.CAMERA_DEVICE_CHANGED = "cameraDeviceChanged"
    })(Qb ||
        (Qb = {}));
    (function (a) {
        a[a.ACCESS_POINT = 101] = "ACCESS_POINT";
        a[a.UNILBS = 201] = "UNILBS";
        a[a.STRING_UID_ALLOCATOR = 901] = "STRING_UID_ALLOCATOR"
    })(wc || (wc = {}));
    (function (a) {
        a[a.IIIEGAL_APPID = 1] = "IIIEGAL_APPID";
        a[a.IIIEGAL_UID = 2] = "IIIEGAL_UID";
        a[a.INTERNAL_ERROR = 3] = "INTERNAL_ERROR"
    })(qd || (qd = {}));
    (function (a) {
        a[a.INVALID_VENDOR_KEY = 5] = "INVALID_VENDOR_KEY";
        a[a.INVALID_CHANNEL_NAME = 7] = "INVALID_CHANNEL_NAME";
        a[a.INTERNAL_ERROR = 8] = "INTERNAL_ERROR";
        a[a.NO_AUTHORIZED = 9] = "NO_AUTHORIZED";
        a[a.DYNAMIC_KEY_TIMEOUT = 10] =
            "DYNAMIC_KEY_TIMEOUT";
        a[a.NO_ACTIVE_STATUS = 11] = "NO_ACTIVE_STATUS";
        a[a.DYNAMIC_KEY_EXPIRED = 13] = "DYNAMIC_KEY_EXPIRED";
        a[a.STATIC_USE_DYNAMIC_KEY = 14] = "STATIC_USE_DYNAMIC_KEY";
        a[a.DYNAMIC_USE_STATIC_KEY = 15] = "DYNAMIC_USE_STATIC_KEY";
        a[a.USER_OVERLOAD = 16] = "USER_OVERLOAD";
        a[a.FORBIDDEN_REGION = 18] = "FORBIDDEN_REGION";
        a[a.CANNOT_MEET_AREA_DEMAND = 19] = "CANNOT_MEET_AREA_DEMAND"
    })(ab || (ab = {}));
    (function (a) {
        a[a.NO_FLAG_SET = 100] = "NO_FLAG_SET";
        a[a.FLAG_SET_BUT_EMPTY = 101] = "FLAG_SET_BUT_EMPTY";
        a[a.INVALID_FALG_SET =
            102] = "INVALID_FALG_SET";
        a[a.NO_SERVICE_AVAILABLE = 200] = "NO_SERVICE_AVAILABLE";
        a[a.NO_SERVICE_AVAILABLE_P2P = 201] = "NO_SERVICE_AVAILABLE_P2P";
        a[a.NO_SERVICE_AVAILABLE_VOICE = 202] = "NO_SERVICE_AVAILABLE_VOICE";
        a[a.NO_SERVICE_AVAILABLE_WEBRTC = 203] = "NO_SERVICE_AVAILABLE_WEBRTC";
        a[a.NO_SERVICE_AVAILABLE_CDS = 204] = "NO_SERVICE_AVAILABLE_CDS";
        a[a.NO_SERVICE_AVAILABLE_CDN = 205] = "NO_SERVICE_AVAILABLE_CDN";
        a[a.NO_SERVICE_AVAILABLE_TDS = 206] = "NO_SERVICE_AVAILABLE_TDS";
        a[a.NO_SERVICE_AVAILABLE_REPORT = 207] = "NO_SERVICE_AVAILABLE_REPORT";
        a[a.NO_SERVICE_AVAILABLE_APP_CENTER = 208] = "NO_SERVICE_AVAILABLE_APP_CENTER";
        a[a.NO_SERVICE_AVAILABLE_ENV0 = 209] = "NO_SERVICE_AVAILABLE_ENV0";
        a[a.NO_SERVICE_AVAILABLE_VOET = 210] = "NO_SERVICE_AVAILABLE_VOET";
        a[a.NO_SERVICE_AVAILABLE_STRING_UID = 211] = "NO_SERVICE_AVAILABLE_STRING_UID";
        a[a.NO_SERVICE_AVAILABLE_WEBRTC_UNILBS = 212] = "NO_SERVICE_AVAILABLE_WEBRTC_UNILBS";
        a[a.NO_SERVICE_AVAILABLE_UNILBS_FLV = 213] = "NO_SERVICE_AVAILABLE_UNILBS_FLV"
    })(Ga || (Ga = {}));
    (function (a) {
        a[a.K_TIMESTAMP_EXPIRED = 2] = "K_TIMESTAMP_EXPIRED";
        a[a.K_CHANNEL_PERMISSION_INVALID = 3] = "K_CHANNEL_PERMISSION_INVALID";
        a[a.K_CERTIFICATE_INVALID = 4] = "K_CERTIFICATE_INVALID";
        a[a.K_CHANNEL_NAME_EMPTY = 5] = "K_CHANNEL_NAME_EMPTY";
        a[a.K_CHANNEL_NOT_FOUND = 6] = "K_CHANNEL_NOT_FOUND";
        a[a.K_TICKET_INVALID = 7] = "K_TICKET_INVALID";
        a[a.K_CHANNEL_CONFLICTED = 8] = "K_CHANNEL_CONFLICTED";
        a[a.K_SERVICE_NOT_READY = 9] = "K_SERVICE_NOT_READY";
        a[a.K_SERVICE_TOO_HEAVY = 10] = "K_SERVICE_TOO_HEAVY";
        a[a.K_UID_BANNED = 14] = "K_UID_BANNED";
        a[a.K_IP_BANNED = 15] = "K_IP_BANNED";
        a[a.K_CHANNEL_BANNED =
            16] = "K_CHANNEL_BANNED";
        a[a.WARN_NO_AVAILABLE_CHANNEL = 103] = "WARN_NO_AVAILABLE_CHANNEL";
        a[a.WARN_LOOKUP_CHANNEL_TIMEOUT = 104] = "WARN_LOOKUP_CHANNEL_TIMEOUT";
        a[a.WARN_LOOKUP_CHANNEL_REJECTED = 105] = "WARN_LOOKUP_CHANNEL_REJECTED";
        a[a.WARN_OPEN_CHANNEL_TIMEOUT = 106] = "WARN_OPEN_CHANNEL_TIMEOUT";
        a[a.WARN_OPEN_CHANNEL_REJECTED = 107] = "WARN_OPEN_CHANNEL_REJECTED";
        a[a.WARN_REQUEST_DEFERRED = 108] = "WARN_REQUEST_DEFERRED";
        a[a.ERR_DYNAMIC_KEY_TIMEOUT = 109] = "ERR_DYNAMIC_KEY_TIMEOUT";
        a[a.ERR_NO_AUTHORIZED = 110] = "ERR_NO_AUTHORIZED";
        a[a.ERR_VOM_SERVICE_UNAVAILABLE = 111] = "ERR_VOM_SERVICE_UNAVAILABLE";
        a[a.ERR_NO_CHANNEL_AVAILABLE_CODE = 112] = "ERR_NO_CHANNEL_AVAILABLE_CODE";
        a[a.ERR_MASTER_VOCS_UNAVAILABLE = 114] = "ERR_MASTER_VOCS_UNAVAILABLE";
        a[a.ERR_INTERNAL_ERROR = 115] = "ERR_INTERNAL_ERROR";
        a[a.ERR_NO_ACTIVE_STATUS = 116] = "ERR_NO_ACTIVE_STATUS";
        a[a.ERR_INVALID_UID = 117] = "ERR_INVALID_UID";
        a[a.ERR_DYNAMIC_KEY_EXPIRED = 118] = "ERR_DYNAMIC_KEY_EXPIRED";
        a[a.ERR_STATIC_USE_DYANMIC_KE = 119] = "ERR_STATIC_USE_DYANMIC_KE";
        a[a.ERR_DYNAMIC_USE_STATIC_KE =
            120] = "ERR_DYNAMIC_USE_STATIC_KE";
        a[a.ERR_NO_VOCS_AVAILABLE = 2E3] = "ERR_NO_VOCS_AVAILABLE";
        a[a.ERR_NO_VOS_AVAILABLE = 2001] = "ERR_NO_VOS_AVAILABLE";
        a[a.ERR_JOIN_CHANNEL_TIMEOUT = 2002] = "ERR_JOIN_CHANNEL_TIMEOUT";
        a[a.ERR_REPEAT_JOIN_CHANNEL = 2003] = "ERR_REPEAT_JOIN_CHANNEL";
        a[a.ERR_JOIN_BY_MULTI_IP = 2004] = "ERR_JOIN_BY_MULTI_IP";
        a[a.ERR_NOT_JOINED = 2011] = "ERR_NOT_JOINED";
        a[a.ERR_REPEAT_JOIN_REQUEST = 2012] = "ERR_REPEAT_JOIN_REQUEST";
        a[a.ERR_INVALID_VENDOR_KEY = 2013] = "ERR_INVALID_VENDOR_KEY";
        a[a.ERR_INVALID_CHANNEL_NAME =
            2014] = "ERR_INVALID_CHANNEL_NAME";
        a[a.ERR_INVALID_STRINGUID = 2015] = "ERR_INVALID_STRINGUID";
        a[a.ERR_TOO_MANY_USERS = 2016] = "ERR_TOO_MANY_USERS";
        a[a.ERR_SET_CLIENT_ROLE_TIMEOUT = 2017] = "ERR_SET_CLIENT_ROLE_TIMEOUT";
        a[a.ERR_SET_CLIENT_ROLE_NO_PERMISSION = 2018] = "ERR_SET_CLIENT_ROLE_NO_PERMISSION";
        a[a.ERR_SET_CLIENT_ROLE_ALREADY_IN_USE = 2019] = "ERR_SET_CLIENT_ROLE_ALREADY_IN_USE";
        a[a.ERR_PUBLISH_REQUEST_INVALID = 2020] = "ERR_PUBLISH_REQUEST_INVALID";
        a[a.ERR_SUBSCRIBE_REQUEST_INVALID = 2021] = "ERR_SUBSCRIBE_REQUEST_INVALID";
        a[a.ERR_NOT_SUPPORTED_MESSAGE = 2022] = "ERR_NOT_SUPPORTED_MESSAGE";
        a[a.ERR_ILLEAGAL_PLUGIN = 2023] = "ERR_ILLEAGAL_PLUGIN";
        a[a.ERR_REJOIN_TOKEN_INVALID = 2024] = "ERR_REJOIN_TOKEN_INVALID";
        a[a.ERR_REJOIN_USER_NOT_JOINED = 2025] = "ERR_REJOIN_USER_NOT_JOINED";
        a[a.ERR_INVALID_OPTIONAL_INFO = 2027] = "ERR_INVALID_OPTIONAL_INFO";
        a[a.ILLEGAL_AES_PASSWORD = 2028] = "ILLEGAL_AES_PASSWORD";
        a[a.ILLEGAL_CLIENT_ROLE_LEVEL = 2029] = "ILLEGAL_CLIENT_ROLE_LEVEL";
        a[a.ERR_TEST_RECOVER = 9E3] = "ERR_TEST_RECOVER";
        a[a.ERR_TEST_TRYNEXT = 9001] = "ERR_TEST_TRYNEXT";
        a[a.ERR_TEST_RETRY = 9002] = "ERR_TEST_RETRY"
    })(E || (E = {}));
    (function (a) {
        a.CONNECTION_STATE_CHANGE = "connection-state-change";
        a.MEDIA_RECONNECT_START = "media-reconnect-start";
        a.MEDIA_RECONNECT_END = "media-reconnect-end";
        a.IS_USING_CLOUD_PROXY = "is-using-cloud-proxy";
        a.USER_JOINED = "user-joined";
        a.USER_LEAVED = "user-left";
        a.USER_PUBLISHED = "user-published";
        a.USER_UNPUBLISHED = "user-unpublished";
        a.USER_INFO_UPDATED = "user-info-updated";
        a.CLIENT_BANNED = "client-banned";
        a.CHANNEL_MEDIA_RELAY_STATE = "channel-media-relay-state";
        a.CHANNEL_MEDIA_RELAY_EVENT = "channel-media-relay-event";
        a.VOLUME_INDICATOR = "volume-indicator";
        a.CRYPT_ERROR = "crypt-error";
        a.ON_TOKEN_PRIVILEGE_WILL_EXPIRE = "token-privilege-will-expire";
        a.ON_TOKEN_PRIVILEGE_DID_EXPIRE = "token-privilege-did-expire";
        a.NETWORK_QUALITY = "network-quality";
        a.STREAM_TYPE_CHANGED = "stream-type-changed";
        a.STREAM_FALLBACK = "stream-fallback";
        a.RECEIVE_METADATA = "receive-metadata";
        a.STREAM_MESSAGE = "stream-message";
        a.LIVE_STREAMING_ERROR = "live-streaming-error";
        a.LIVE_STREAMING_WARNING =
            "live-streaming-warning";
        a.INJECT_STREAM_STATUS = "stream-inject-status";
        a.EXCEPTION = "exception";
        a.ERROR = "error"
    })(R || (R = {}));
    (function (a) {
        a.NETWORK_ERROR = "NETWORK_ERROR";
        a.SERVER_ERROR = "SERVER_ERROR";
        a.MULTI_IP = "MULTI_IP";
        a.TIMEOUT = "TIMEOUT";
        a.OFFLINE = "OFFLINE";
        a.LEAVE = "LEAVE"
    })(Xa || (Xa = {}));
    (function (a) {
        a.CONNECTING = "connecting";
        a.CONNECTED = "connected";
        a.RECONNECTING = "reconnecting";
        a.CLOSED = "closed"
    })(wa || (wa = {}));
    (function (a) {
        a.WS_CONNECTED = "ws_connected";
        a.WS_RECONNECTING = "ws_reconnecting";
        a.WS_CLOSED =
            "ws_closed";
        a.ON_BINARY_DATA = "on_binary_data";
        a.REQUEST_RECOVER = "request_recover";
        a.REQUEST_JOIN_INFO = "request_join_info";
        a.REQUEST_REJOIN_INFO = "req_rejoin_info";
        a.IS_P2P_DISCONNECTED = "is_p2p_dis";
        a.DISCONNECT_P2P = "dis_p2p";
        a.NEED_RENEW_SESSION = "need-sid";
        a.REPORT_JOIN_GATEWAY = "report_join_gateway";
        a.REQUEST_TIMEOUT = "request_timeout";
        a.REQUEST_SUCCESS = "request_success"
    })(Q || (Q = {}));
    (function (a) {
        a.PING = "ping";
        a.PING_BACK = "ping_back";
        a.JOIN = "join_v2";
        a.REJOIN = "rejoin";
        a.LEAVE = "leave";
        a.SET_CLIENT_ROLE =
            "set_client_role";
        a.PUBLISH = "publish";
        a.UNPUBLISH = "unpublish";
        a.SUBSCRIBE = "subscribe";
        a.UNSUBSCRIBE = "unsubscribe";
        a.SUBSCRIBE_CHANGE = "subscribe_change";
        a.TRAFFIC_STATS = "traffic_stats";
        a.RENEW_TOKEN = "renew_token";
        a.SWITCH_VIDEO_STREAM = "switch_video_stream";
        a.SET_FALLBACK_OPTION = "set_fallback_option";
        a.GATEWAY_INFO = "gateway_info";
        a.CONTROL = "control";
        a.SEND_METADATA = "send_metadata";
        a.DATA_STREAM = "data_stream";
        a.PICK_SVC_LAYER = "pick_svc_layer"
    })(ka || (ka = {}));
    (function (a) {
        a.PUBLISH_STATS = "publish_stats";
        a.PUBLISH_RELATED_STATS = "publish_related_stats";
        a.SUBSCRIBE_STATS = "subscribe_stats";
        a.SUBSCRIBE_RELATED_STATS = "subscribe_related_stats";
        a.WS_INFLATE_DATA_LENGTH = "ws_inflate_data_length"
    })(rb || (rb = {}));
    (function (a) {
        a.ON_USER_ONLINE = "on_user_online";
        a.ON_USER_OFFLINE = "on_user_offline";
        a.ON_STREAM_FALLBACK_UPDATE = "on_stream_fallback_update";
        a.ON_PUBLISH_STREAM = "on_publish_stream";
        a.ON_UPLINK_STATS = "on_uplink_stats";
        a.ON_P2P_LOST = "on_p2p_lost";
        a.ON_REMOVE_STREAM = "on_remove_stream";
        a.ON_ADD_AUDIO_STREAM =
            "on_add_audio_stream";
        a.ON_ADD_VIDEO_STREAM = "on_add_video_stream";
        a.ON_TOKEN_PRIVILEGE_WILL_EXPIRE = "on_token_privilege_will_expire";
        a.ON_TOKEN_PRIVILEGE_DID_EXPIRE = "on_token_privilege_did_expire";
        a.ON_USER_BANNED = "on_user_banned";
        a.ON_NOTIFICATION = "on_notification";
        a.ON_CRYPT_ERROR = "on_crypt_error";
        a.MUTE_AUDIO = "mute_audio";
        a.MUTE_VIDEO = "mute_video";
        a.UNMUTE_AUDIO = "unmute_audio";
        a.UNMUTE_VIDEO = "unmute_video";
        a.RECEIVE_METADATA = "receive_metadata";
        a.ON_DATA_STREAM = "on_data_stream";
        a.ENABLE_LOCAL_VIDEO =
            "enable_local_video";
        a.DISABLE_LOCAL_VIDEO = "disable_local_video";
        a.ENABLE_LOCAL_AUDIO = "enable_local_audio";
        a.DISABLE_LOCAL_AUDIO = "disable_local_audio"
    })(da || (da = {}));
    (function (a) {
        a.CONNECTION_STATE_CHANGE = "CONNECTION_STATE_CHANGE";
        a.NEED_ANSWER = "NEED_ANSWER";
        a.NEED_RENEGOTIATE = "NEED_RENEGOTIATE";
        a.P2P_LOST = "P2P_LOST";
        a.GATEWAY_P2P_LOST = "GATEWAY_P2P_LOST";
        a.NEED_UNPUB = "NEED_UNPUB";
        a.NEED_UNSUB = "NEED_UNSUB";
        a.NEED_UPLOAD = "NEED_UPLOAD";
        a.NEED_CONTROL = "NEED_CONTROL";
        a.START_RECONNECT = "START_RECONNECT";
        a.END_RECONNECT = "END_RECONNECT";
        a.NEED_SIGNAL_RTT = "NEED_SIGNAL_RTT"
    })(H || (H = {}));
    (function (a) {
        a.AUDIO_SOURCE_STATE_CHANGE = "audio_source_state_change";
        a.RECEIVE_TRACK_BUFFER = "receive_track_buffer";
        a.ON_AUDIO_BUFFER = "on_audio_buffer"
    })(sb || (sb = {}));
    let xe = {
        sendVolumeLevel: 0,
        sendBitrate: 0,
        sendBytes: 0,
        sendPackets: 0,
        sendPacketsLost: 0,
        currentPacketLossRate: 0
    }, ye = {
        sendBytes: 0,
        sendBitrate: 0,
        sendPackets: 0,
        sendPacketsLost: 0,
        sendResolutionHeight: 0,
        sendResolutionWidth: 0,
        captureResolutionHeight: 0,
        captureResolutionWidth: 0,
        targetSendBitrate: 0,
        totalDuration: 0,
        totalFreezeTime: 0,
        currentPacketLossRate: 0
    }, gg = {
        transportDelay: 0,
        end2EndDelay: 0,
        receiveBitrate: 0,
        receiveLevel: 0,
        receiveBytes: 0,
        receiveDelay: 0,
        receivePackets: 0,
        receivePacketsLost: 0,
        totalDuration: 0,
        totalFreezeTime: 0,
        freezeRate: 0,
        packetLossRate: 0,
        currentPacketLossRate: 0,
        publishDuration: -1
    }, Gk = {uplinkNetworkQuality: 0, downlinkNetworkQuality: 0}, hg = {
        transportDelay: 0,
        end2EndDelay: 0,
        receiveBitrate: 0,
        receiveBytes: 0,
        receiveDelay: 0,
        receivePackets: 0,
        receivePacketsLost: 0,
        receiveResolutionHeight: 0,
        receiveResolutionWidth: 0,
        totalDuration: 0,
        totalFreezeTime: 0,
        freezeRate: 0,
        packetLossRate: 0,
        currentPacketLossRate: 0,
        publishDuration: -1
    };
    var Z, ra;
    !function (a) {
        a.CONNECTED = "websocket:connected";
        a.RECONNECTING = "websocket:reconnecting";
        a.WILL_RECONNECT = "websocket:will_reconnect";
        a.CLOSED = "websocket:closed";
        a.FAILED = "websocket:failed";
        a.ON_MESSAGE = "websocket:on_message";
        a.REQUEST_NEW_URLS = "websocket:request_new_urls"
    }(Z || (Z = {}));
    (function (a) {
        a.TRANSCODE = "mix_streaming";
        a.RAW = "raw_streaming";
        a.INJECT = "inject_streaming"
    })(ra ||
        (ra = {}));
    let Ho = {alpha: 1, height: 640, width: 360, x: 0, y: 0, zOrder: 0, audioChannel: 0},
        ig = {x: 0, y: 0, width: 160, height: 160, zOrder: 255, alpha: 1}, Io = {
            audioBitrate: 48,
            audioChannels: 1,
            audioSampleRate: 48E3,
            backgroundColor: 0,
            height: 360,
            lowLatency: !1,
            videoBitrate: 400,
            videoCodecProfile: 100,
            videoCodecType: 1,
            videoFrameRate: 15,
            videoGop: 30,
            width: 640,
            images: [],
            userConfigs: [],
            userConfigExtraInfo: ""
        }, Jo = {
            audioBitrate: 48,
            audioChannels: 2,
            audioVolume: 100,
            audioSampleRate: 48E3,
            height: 0,
            width: 0,
            videoBitrate: 400,
            videoFramerate: 15,
            videoGop: 30
        };
    var tb, Nc, ja, Hk, Ha, Aa, G, yb, rd, sd;
    !function (a) {
        a.WARNING = "@live_uap-warning";
        a.ERROR = "@line_uap-error";
        a.PUBLISH_STREAM_STATUS = "@live_uap-publish-status";
        a.INJECT_STREAM_STATUS = "@live_uap-inject-status";
        a.WORKER_STATUS = "@live_uap-worker-status";
        a.REQUEST_NEW_ADDRESS = "@live_uap-request-address"
    }(tb || (tb = {}));
    (Nc || (Nc = {})).REQUEST_WORKER_MANAGER_LIST = "@live_req_worker_manager";
    (function (a) {
        a[a.LIVE_STREAM_RESPONSE_SUCCEED = 200] = "LIVE_STREAM_RESPONSE_SUCCEED";
        a[a.LIVE_STREAM_RESPONSE_ALREADY_EXISTS_STREAM =
            454] = "LIVE_STREAM_RESPONSE_ALREADY_EXISTS_STREAM";
        a[a.LIVE_STREAM_RESPONSE_TRANSCODING_PARAMETER_ERROR = 450] = "LIVE_STREAM_RESPONSE_TRANSCODING_PARAMETER_ERROR";
        a[a.LIVE_STREAM_RESPONSE_BAD_STREAM = 451] = "LIVE_STREAM_RESPONSE_BAD_STREAM";
        a[a.LIVE_STREAM_RESPONSE_WM_PARAMETER_ERROR = 400] = "LIVE_STREAM_RESPONSE_WM_PARAMETER_ERROR";
        a[a.LIVE_STREAM_RESPONSE_WM_WORKER_NOT_EXIST = 404] = "LIVE_STREAM_RESPONSE_WM_WORKER_NOT_EXIST";
        a[a.LIVE_STREAM_RESPONSE_NOT_AUTHORIZED = 456] = "LIVE_STREAM_RESPONSE_NOT_AUTHORIZED";
        a[a.LIVE_STREAM_RESPONSE_FAILED_LOAD_IMAGE = 457] = "LIVE_STREAM_RESPONSE_FAILED_LOAD_IMAGE";
        a[a.LIVE_STREAM_RESPONSE_REQUEST_TOO_OFTEN = 429] = "LIVE_STREAM_RESPONSE_REQUEST_TOO_OFTEN";
        a[a.LIVE_STREAM_RESPONSE_NOT_FOUND_PUBLISH = 452] = "LIVE_STREAM_RESPONSE_NOT_FOUND_PUBLISH";
        a[a.LIVE_STREAM_RESPONSE_NOT_SUPPORTED = 453] = "LIVE_STREAM_RESPONSE_NOT_SUPPORTED";
        a[a.LIVE_STREAM_RESPONSE_MAX_STREAM_NUM = 455] = "LIVE_STREAM_RESPONSE_MAX_STREAM_NUM";
        a[a.LIVE_STREAM_RESPONSE_INTERNAL_SERVER_ERROR = 500] = "LIVE_STREAM_RESPONSE_INTERNAL_SERVER_ERROR";
        a[a.LIVE_STREAM_RESPONSE_WORKER_LOST = 501] = "LIVE_STREAM_RESPONSE_WORKER_LOST";
        a[a.LIVE_STREAM_RESPONSE_RESOURCE_LIMIT = 502] = "LIVE_STREAM_RESPONSE_RESOURCE_LIMIT";
        a[a.LIVE_STREAM_RESPONSE_WORKER_QUIT = 503] = "LIVE_STREAM_RESPONSE_WORKER_QUIT";
        a[a.ERROR_FAIL_SEND_MESSAGE = 504] = "ERROR_FAIL_SEND_MESSAGE";
        a[a.PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE = 30] = "PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE";
        a[a.PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT = 31] = "PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT";
        a[a.PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH =
            32] = "PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH";
        a[a.PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN = 33] = "PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN"
    })(ja || (ja = {}));
    (function (a) {
        a.CONNECT_FAILED = "connect failed";
        a.CONNECT_TIMEOUT = "connect timeout";
        a.WS_DISCONNECTED = "websocket disconnected";
        a.REQUEST_TIMEOUT = "request timeout";
        a.REQUEST_FAILED = "request failed";
        a.WAIT_STATUS_TIMEOUT = "wait status timeout";
        a.WAIT_STATUS_ERROR = "wait status error";
        a.BAD_STATE = "bad state";
        a.WS_ABORT = "ws abort";
        a.AP_REQUEST_TIMEOUT =
            "AP request timeout";
        a.AP_JSON_PARSE_ERROR = "AP json parse error";
        a.AP_REQUEST_ERROR = "AP request error";
        a.AP_REQUEST_ABORT = "AP request abort"
    })(Hk || (Hk = {}));
    (function (a) {
        a[a.SetSdkProfile = 0] = "SetSdkProfile";
        a[a.SetSourceChannel = 1] = "SetSourceChannel";
        a[a.SetSourceUserId = 2] = "SetSourceUserId";
        a[a.SetDestChannel = 3] = "SetDestChannel";
        a[a.StartPacketTransfer = 4] = "StartPacketTransfer";
        a[a.StopPacketTransfer = 5] = "StopPacketTransfer";
        a[a.UpdateDestChannel = 6] = "UpdateDestChannel";
        a[a.Reconnect = 7] = "Reconnect";
        a[a.SetVideoProfile =
            8] = "SetVideoProfile"
    })(Ha || (Ha = {}));
    (function (a) {
        a.DISCONNECT = "disconnect";
        a.CONNECTION_STATE_CHANGE = "connection-state-change";
        a.NETWORK_QUALITY = "network-quality";
        a.STREAM_TYPE_CHANGE = "stream-type-change";
        a.IS_P2P_DISCONNECTED = "is-p2p-dis";
        a.DISCONNECT_P2P = "dis-p2p";
        a.REQUEST_NEW_GATEWAY_LIST = "req-gate-url";
        a.NEED_RENEW_SESSION = "need-sid"
    })(Aa || (Aa = {}));
    (function (a) {
        a.NEED_RENEGOTIATE = "@need_renegotiate";
        a.NEED_REPLACE_TRACK = "@need_replace_track";
        a.NEED_CLOSE = "@need_close";
        a.NEED_ADD_TRACK = "@need_add_track";
        a.NEED_REMOVE_TRACK = "@need_remove_track";
        a.NEED_SESSION_ID = "@need_sid";
        a.SET_OPTIMIZATION_MODE = "@set_optimization_mode";
        a.GET_STATS = "@get_stats";
        a.GET_LOW_VIDEO_TRACK = "@get_low_video_track";
        a.NEED_RESET_REMOTE_SDP = "@need_reset_remote_sdp";
        a.SET_VIDEO_TRACK_MUTED = "@set_video_track_muted";
        a.SET_AUDIO_TRACK_MUTED = "@set_audio_track_muted"
    })(G || (G = {}));
    (function (a) {
        a.SCREEN_TRACK = "screen_track";
        a.LOW_STREAM = "low_stream"
    })(yb || (yb = {}));
    (function (a) {
        a.SOURCE_STATE_CHANGE = "source-state-change";
        a.TRACK_ENDED =
            "track-ended";
        a.BEAUTY_EFFECT_OVERLOAD = "beauty-effect-overload"
    })(rd || (rd = {}));
    (sd || (sd = {})).FIRST_FRAME_DECODED = "first-frame-decoded";
    let Ik = "AFRICA ASIA CHINA EUROPE GLOBAL INDIA JAPAN NORTH_AMERICA OCEANIA OVERSEA SOUTH_AMERICA".split(" ");
    var Ba;
    !function (a) {
        a.CHINA = "CN";
        a.ASIA = "AS";
        a.NORTH_AMERICA = "NA";
        a.EUROPE = "EU";
        a.JAPAN = "JP";
        a.INDIA = "IN";
        a.OCEANIA = "OC";
        a.SOUTH_AMERICA = "SA";
        a.AFRICA = "AF";
        a.OVERSEA = "OVERSEA";
        a.GLOBAL = "GLOBAL"
    }(Ba || (Ba = {}));
    let jg = {
        CHINA: {}, ASIA: {
            CODE: Ba.ASIA,
            WEBCS_DOMAIN: ["ap-web-1-asia.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-asia.agora.io"],
            PROXY_CS: ["proxy-ap-web-asia.agora.io"],
            CDS_AP: ["cds-ap-web-asia.agora.io", "cds-ap-web-asia2.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-asia.agora.io", "sua-ap-web-asia2.agora.io"],
            UAP_AP: ["uap-ap-web-asia.agora.io", "uap-ap-web-asia2.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-asia.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-asia.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-asia.agora.io"],
            PROXY_SERVER_TYPE3: ["southeast-asia.webrtc-cloud-proxy.sd-rtn.com"]
        },
        NORTH_AMERICA: {
            CODE: Ba.NORTH_AMERICA,
            WEBCS_DOMAIN: ["ap-web-1-north-america.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-north-america.agora.io"],
            PROXY_CS: ["proxy-ap-web-america.agora.io"],
            CDS_AP: ["cds-ap-web-america.agora.io", "cds-ap-web-america2.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-america.agora.io", "sua-ap-web-america2.agora.io"],
            UAP_AP: ["uap-ap-web-america.agora.io", "uap-ap-web-america2.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-north-america.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-north-america.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-north-america.agora.io"],
            PROXY_SERVER_TYPE3: ["east-usa.webrtc-cloud-proxy.sd-rtn.com"]
        }, EUROPE: {
            CODE: Ba.EUROPE,
            WEBCS_DOMAIN: ["ap-web-1-europe.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-europe.agora.io"],
            PROXY_CS: ["proxy-ap-web-europe.agora.io"],
            CDS_AP: ["cds-ap-web-europe.agora.io", "cds-ap-web-europe2.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-europe.agora.io", "sua-ap-web-europe.agora.io"],
            UAP_AP: ["uap-ap-web-europe.agora.io", "uap-ap-web-europe2.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-europe.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-europe.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-europe.agora.io"],
            PROXY_SERVER_TYPE3: ["europe.webrtc-cloud-proxy.sd-rtn.com"]
        }, JAPAN: {
            CODE: Ba.JAPAN,
            WEBCS_DOMAIN: ["ap-web-1-japan.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-japan.agora.io"],
            PROXY_CS: ["proxy-ap-web-japan.agora.io"],
            CDS_AP: ["cds-ap-web-japan.agora.io", "cds-ap-web-japan2.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-japan.agora.io", "sua-ap-web-japan2.agora.io"],
            UAP_AP: ["uap-ap-web-japan.agora.io",
                "\tuap-ap-web-japan2.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-japan.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-japan.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-japan.agora.io"],
            PROXY_SERVER_TYPE3: ["japan.webrtc-cloud-proxy.sd-rtn.com"]
        }, INDIA: {
            CODE: Ba.INDIA,
            WEBCS_DOMAIN: ["ap-web-1-india.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-india.agora.io"],
            PROXY_CS: ["proxy-ap-web-india.agora.io"],
            CDS_AP: ["cds-ap-web-india.agora.io", "cds-ap-web-india2.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-india.agora.io",
                "sua-ap-web-india2.agora.io"],
            UAP_AP: ["uap-ap-web-india.agora.io", "uap-ap-web-india2.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-india.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-india.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-india.agora.io"],
            PROXY_SERVER_TYPE3: ["india.webrtc-cloud-proxy.sd-rtn.com"]
        }, OVERSEA: {
            CODE: Ba.OVERSEA,
            WEBCS_DOMAIN: ["ap-web-1-oversea.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-oversea.agora.io"],
            PROXY_CS: ["proxy-ap-web-oversea.agora.io"],
            CDS_AP: ["cds-ap-web-oversea.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-oversea.agora.io"],
            UAP_AP: ["uap-ap-web-oversea.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-oversea.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oversea.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-oversea.agora.io"],
            PROXY_SERVER_TYPE3: ["webrtc-cloud-proxy.agora.io"]
        }, GLOBAL: {
            CODE: Ba.GLOBAL,
            WEBCS_DOMAIN: ["webrtc2-ap-web-1.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["webrtc2-ap-web-3.agora.io"],
            PROXY_CS: ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"],
            CDS_AP: ["cds-ap-web-1.agora.io",
                "cds-ap-web-3.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-1.agora.io", "sua-ap-web-3.agora.io"],
            UAP_AP: ["uap-ap-web-1.agora.io", "uap-ap-web-3.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice.agora.io"],
            PROXY_SERVER_TYPE3: ["webrtc-cloud-proxy.sd-rtn.com"]
        }, OCEANIA: {
            CODE: Ba.OCEANIA,
            WEBCS_DOMAIN: ["ap-web-1-oceania.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-oceania.agora.io"],
            PROXY_CS: ["proxy-ap-web-oceania.agora.io"],
            CDS_AP: ["cds-ap-web-oceania.agora.io", "cds-ap-web-oceania2.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-oceania.agora.io", "sua-ap-web-oceania2.agora.io"],
            UAP_AP: ["uap-ap-web-oceania.agora.io", "uap-ap-web-oceania2.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-oceania.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oceania.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-oceania.agora.io"],
            PROXY_SERVER_TYPE3: ["oceania.webrtc-cloud-proxy.sd-rtn.com"]
        }, SOUTH_AMERICA: {
            CODE: Ba.SOUTH_AMERICA,
            WEBCS_DOMAIN: ["ap-web-1-south-america.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-south-america.agora.io"],
            PROXY_CS: ["proxy-ap-web-south-america.agora.io"],
            CDS_AP: ["cds-ap-web-south-america.agora.io", "cds-ap-web-south-america2.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-south-america.agora.io", "sua-ap-web-south-america2.agora.io"],
            UAP_AP: ["uap-ap-web-south-america.agora.io", "uap-ap-web-south-america2.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-south-america.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-south-america.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-south-america.agora.io"],
            PROXY_SERVER_TYPE3: ["south-america.webrtc-cloud-proxy.sd-rtn.com"]
        }, AFRICA: {
            CODE: Ba.AFRICA,
            WEBCS_DOMAIN: ["ap-web-1-africa.agora.io"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-africa.agora.io"],
            PROXY_CS: ["proxy-ap-web-africa.agora.io"],
            CDS_AP: ["cds-ap-web-africa.agora.io", "cds-ap-web-africa2.agora.io"],
            ACCOUNT_REGISTER: ["sua-ap-web-africa.agora.io", "sua-ap-web-africa2.agora.io"],
            UAP_AP: ["uap-ap-web-africa.agora.io", "uap-ap-web-africa2.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-africa.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-africa.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-south-africa.agora.io"],
            PROXY_SERVER_TYPE3: ["africa.webrtc-cloud-proxy.sd-rtn.com"]
        }
    };
    var td;
    cg && (jg.CHINA = {
        CODE: Ba.CHINA,
        WEBCS_DOMAIN: ["webrtc2-2.ap.sd-rtn.com"],
        WEBCS_DOMAIN_BACKUP_LIST: ["webrtc2-4.ap.sd-rtn.com"],
        PROXY_CS: ["proxy-web.ap.sd-rtn.com"],
        CDS_AP: ["cds-web-2.ap.sd-rtn.com", "cds-web-4.ap.sd-rtn.com"],
        ACCOUNT_REGISTER: ["sua-web-2.ap.sd-rtn.com", "sua-web-4.ap.sd-rtn.com"],
        UAP_AP: ["uap-web-2.ap.sd-rtn.com",
            "uap-web-4.ap.sd-rtn.com"],
        EVENT_REPORT_DOMAIN: ["web-3.statscollector.sd-rtn.com"],
        EVENT_REPORT_BACKUP_DOMAIN: ["web-4.statscollector.sd-rtn.com"],
        LOG_UPLOAD_SERVER: ["logservice-china.agora.io"],
        PROXY_SERVER_TYPE3: ["east-cn.webrtc-cloud-proxy.sd-rtn.com"]
    });
    (td || (td = {})).UPDATE_BITRATE_LIMIT = "update_bitrate_limit";
    let fa = {
        getDisplayMedia: !1,
        getStreamFromExtension: !1,
        supportUnifiedPlan: !1,
        supportMinBitrate: !1,
        supportSetRtpSenderParameters: !1,
        supportDualStream: !0,
        webAudioMediaStreamDest: !1,
        supportReplaceTrack: !1,
        supportWebGL: !1,
        webAudioWithAEC: !1,
        supportRequestFrame: !1,
        supportShareAudio: !1,
        supportDualStreamEncoding: !1
    };
    M({target: "Object", stat: !0, forced: !na, sham: !na}, {defineProperties: Zi});
    var Ua = kb(function (a) {
        var b = la.Object;
        a = a.exports = function (a, e) {
            return b.defineProperties(a, e)
        };
        b.defineProperties.sham && (a.sham = !0)
    }), Ko = ie.concat("length", "prototype"), kg = {
        f: Object.getOwnPropertyNames || function (a) {
            return Yi(a, Ko)
        }
    }, Lo = Nb("Reflect", "ownKeys") || function (a) {
        var b = kg.f(Wa(a)), c = id.f;
        return c ? b.concat(c(a)) :
            b
    };
    M({target: "Object", stat: !0, sham: !na}, {
        getOwnPropertyDescriptors: function (a) {
            var b, c;
            a = eb(a);
            for (var e = Ac, g = Lo(a), h = {}, l = 0; g.length > l;) void 0 !== (c = e(a, b = g[l++])) && lc(h, b, c);
            return h
        }
    });
    var ea = la.Object.getOwnPropertyDescriptors, Jk = kg.f, Mo = {}.toString,
        Kk = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Lk = function (a) {
            if (Kk && "[object Window]" == Mo.call(a)) try {
                var b = Jk(a)
            } catch (c) {
                b = Kk.slice()
            } else b = Jk(eb(a));
            return b
        }, Mk = {f: ya}, No = ob.f, bb = ge("hidden"),
        Nk = ya("toPrimitive"), Oo = Sa.set, Ok = Sa.getterFor("Symbol"), zb = Object.prototype, gb = L.Symbol,
        ud = Nb("JSON", "stringify"), Pk = Ac, Zb = ob.f, Qk = Lk, Po = Zd, Rb = Ob("symbols"), vd = Ob("op-symbols"),
        lg = Ob("string-to-symbol-registry"), mg = Ob("symbol-to-string-registry"), Qo = Ob("wks"), ng = L.QObject,
        og = !ng || !ng.prototype || !ng.prototype.findChild, pg = na && va(function () {
            return 7 != jc(Zb({}, "a", {
                get: function () {
                    return Zb(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (a, b, c) {
            var e = Pk(zb, b);
            e && delete zb[b];
            Zb(a, b, c);
            e && a !== zb && Zb(zb, b, e)
        } :
        Zb, Rk = function (a, b) {
            var c = Rb[a] = jc(gb.prototype);
            return Oo(c, {type: "Symbol", tag: a, description: b}), na || (c.description = b), c
        }, qg = Gb && "symbol" == typeof gb.iterator ? function (a) {
            return "symbol" == typeof a
        } : function (a) {
            return Object(a) instanceof gb
        }, ze = function (a, b, c) {
            a === zb && ze(vd, b, c);
            Wa(a);
            b = yc(b, !0);
            return Wa(c), U(Rb, b) ? (c.enumerable ? (U(a, bb) && a[bb][b] && (a[bb][b] = !1), c = jc(c, {enumerable: dc(0, !1)})) : (U(a, bb) || Zb(a, bb, dc(1, {})), a[bb][b] = !0), pg(a, b, c)) : Zb(a, b, c)
        }, Tk = function (a, b) {
            Wa(a);
            var c = eb(b);
            b = Yb(c).concat(rg(c));
            return Ec(b, function (b) {
                na && !Sk.call(c, b) || ze(a, b, c[b])
            }), a
        }, Sk = function (a) {
            a = yc(a, !0);
            var b = Po.call(this, a);
            return !(this === zb && U(Rb, a) && !U(vd, a)) && (!(b || !U(this, a) || !U(Rb, a) || U(this, bb) && this[bb][a]) || b)
        }, Uk = function (a, b) {
            a = eb(a);
            b = yc(b, !0);
            if (a !== zb || !U(Rb, b) || U(vd, b)) {
                var c = Pk(a, b);
                return !c || !U(Rb, b) || U(a, bb) && a[bb][b] || (c.enumerable = !0), c
            }
        }, Vk = function (a) {
            a = Qk(eb(a));
            var b = [];
            return Ec(a, function (a) {
                U(Rb, a) || U(Cc, a) || b.push(a)
            }), b
        }, rg = function (a) {
            var b = a === zb;
            a = Qk(b ? vd : eb(a));
            var c = [];
            return Ec(a,
                function (a) {
                    !U(Rb, a) || b && !U(zb, a) || c.push(Rb[a])
                }), c
        };
    if (Gb || (Cf((gb = function () {
        if (this instanceof gb) throw TypeError("Symbol is not a constructor");
        var a = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, b = ce(a),
            c = function (a) {
                this === zb && c.call(vd, a);
                U(this, bb) && U(this[bb], b) && (this[bb][b] = !1);
                pg(this, b, dc(1, a))
            };
        return na && og && pg(zb, b, {configurable: !0, set: c}), Rk(b, a)
    }).prototype, "toString", function () {
        return Ok(this).tag
    }), Zd = Sk, ob.f = ze, Ac = Uk, kg.f = Lk = Vk, id.f = rg, na && Zb(gb.prototype,
        "description", {
            configurable: !0, get: function () {
                return Ok(this).description
            }
        })), Ki || (Mk.f = function (a) {
        return Rk(ya(a), a)
    }), M({global: !0, wrap: !0, forced: !Gb, sham: !Gb}, {Symbol: gb}), Ec(Yb(Qo), function (a) {
        var b = la.Symbol || (la.Symbol = {});
        U(b, a) || No(b, a, {value: Mk.f(a)});
        !0
    }), M({target: "Symbol", stat: !0, forced: !Gb}, {
        for: function (a) {
            a = String(a);
            if (U(lg, a)) return lg[a];
            var b = gb(a);
            return lg[a] = b, mg[b] = a, b
        }, keyFor: function (a) {
            if (!qg(a)) throw TypeError(a + " is not a symbol");
            if (U(mg, a)) return mg[a]
        }, useSetter: function () {
            og =
                !0
        }, useSimple: function () {
            og = !1
        }
    }), M({target: "Object", stat: !0, forced: !Gb, sham: !na}, {
        create: function (a, b) {
            return void 0 === b ? jc(a) : Tk(jc(a), b)
        }, defineProperty: ze, defineProperties: Tk, getOwnPropertyDescriptor: Uk
    }), M({target: "Object", stat: !0, forced: !Gb}, {
        getOwnPropertyNames: Vk,
        getOwnPropertySymbols: rg
    }), M({
        target: "Object", stat: !0, forced: va(function () {
            id.f(1)
        })
    }, {
        getOwnPropertySymbols: function (a) {
            return id.f(pb(a))
        }
    }), ud) {
        var Ro = !Gb || va(function () {
            var a = gb();
            return "[null]" != ud([a]) || "{}" != ud({a}) || "{}" !=
                ud(Object(a))
        });
        M({target: "JSON", stat: !0, forced: Ro}, {
            stringify: function (a, b, c) {
                for (var e, g = [a], h = 1; arguments.length > h;) g.push(arguments[h++]);
                if (e = b, (qa(b) || void 0 !== a) && !qg(a)) return gc(b) || (b = function (a, b) {
                    if ("function" == typeof e && (b = e.call(this, a, b)), !qg(b)) return b
                }), g[1] = b, ud.apply(null, g)
            }
        })
    }
    gb.prototype[Nk] || xb(gb.prototype, Nk, gb.prototype.valueOf);
    gd(gb, "Symbol");
    Cc[bb] = !0;
    var W = la.Object.getOwnPropertySymbols, So = [].slice, To = /MSIE .\./.test(jd), Wk = function (a) {
        return function (b, c) {
            var e = 2 <
                arguments.length, g = e ? So.call(arguments, 2) : void 0;
            return a(e ? function () {
                ("function" == typeof b ? b : Function(b)).apply(this, g)
            } : b, c)
        }
    };
    M({global: !0, bind: !0, forced: To}, {setTimeout: Wk(L.setTimeout), setInterval: Wk(L.setInterval)});
    var mb = la.setTimeout, Ta = function (a, b, c) {
        return b in a ? tj(a, b, {value: c, enumerable: !0, configurable: !0, writable: !0}) : a[b] = c, a
    }, Uo = ua("Array").values, Xk = Array.prototype, Vo = {DOMTokenList: !0, NodeList: !0}, oc = function (a) {
        var b = a.values;
        return a === Xk || a instanceof Array && b === Xk.values ||
        Vo.hasOwnProperty(fd(a)) ? Uo : b
    }, Wo = !Hj(function (a) {
        Array.from(a)
    });
    M({target: "Array", stat: !0, forced: Wo}, {
        from: function (a) {
            var b = pb(a);
            var c = "function" == typeof this ? this : Array;
            var e = arguments.length;
            var g = 1 < e ? arguments[1] : void 0, h = void 0 !== g, l = 0;
            var q = Ni(b);
            if (h && (g = fc(g, 2 < e ? arguments[2] : void 0, 2)), null == q || c == Array && Li(q)) for (c = new c(e = fb(b.length)); e > l; l++) lc(c, l, h ? g(b[l], l) : b[l]); else for (e = (b = q.call(b)).next, c = new c; !(q = e.call(b)).done; l++) lc(c, l, h ? Oi(b, g, [q.value, l], !0) : q.value);
            return c.length =
                l, c
        }
    });
    var vb = la.Array.from;
    M({target: "Date", stat: !0}, {
        now: function () {
            return (new Date).getTime()
        }
    });
    var x = la.Date.now;

    class Ma {
        constructor() {
            this._events = {};
            this.addListener = this.on
        }

        getListeners(a) {
            var b;
            return this._events[a] ? B(b = this._events[a]).call(b, a => a.listener) : []
        }

        on(a, b) {
            this._events[a] || (this._events[a] = []);
            a = this._events[a];
            -1 === this._indexOfListener(a, b) && a.push({listener: b, once: !1})
        }

        once(a, b) {
            this._events[a] || (this._events[a] = []);
            a = this._events[a];
            -1 === this._indexOfListener(a, b) && a.push({
                listener: b,
                once: !0
            })
        }

        off(a, b) {
            if (this._events[a]) {
                var c = this._events[a];
                b = this._indexOfListener(c, b);
                -1 !== b && Oa(c).call(c, b, 1);
                0 === this._events[a].length && delete this._events[a]
            }
        }

        removeAllListeners(a) {
            a ? delete this._events[a] : this._events = {}
        }

        emit(a, ...b) {
            var c;
            this._events[a] || (this._events[a] = []);
            let e = B(c = this._events[a]).call(c, a => a);
            for (c = 0; c < e.length; c += 1) {
                let g = e[c];
                g.once && this.off(a, g.listener);
                g.listener.apply(this, b || [])
            }
        }

        _indexOfListener(a, b) {
            let c = a.length;
            for (; c--;) if (a[c].listener === b) return c;
            return -1
        }
    }

    let Jh = 0, Ve = 0, u = new class {
        constructor() {
            var a, b;
            this.baseInfoMap = new ha;
            this.clientList = xk;
            this.keyEventUploadPendingItems = [];
            this.normalEventUploadPendingItems = [];
            this.apiInvokeUploadPendingItems = [];
            this.apiInvokeCount = 0;
            this.ltsList = [];
            this.lastSendNormalEventTime = x();
            this.customReportCount = 0;
            this.eventUploadTimer = window.setInterval(pa(a = this.doSend).call(a, this), v.EVENT_REPORT_SEND_INTERVAL);
            this.setSessionIdTimer = window.setInterval(pa(b = this.appendSessionId).call(b, this), v.EVENT_REPORT_SEND_INTERVAL)
        }

        reportApiInvoke(a,
                        b, c) {
            b.timeout = b.timeout || 6E4;
            b.reportResult = void 0 === b.reportResult || b.reportResult;
            const e = x(), g = this.apiInvokeCount += 1, h = () => ({
                tag: b.tag,
                invokeId: g,
                sid: a,
                name: b.name,
                apiInvokeTime: e,
                options: b.options,
                states: b.states || null
            }), l = !!v.SHOW_REPORT_INVOKER_LOG;
            l && k.info("".concat(b.name, " start"), b.options);
            let q = !1;
            Db(b.timeout).then(() => {
                q || (this.sendApiInvoke(xa({}, h(), {
                    error: n.API_INVOKE_TIMEOUT,
                    success: !1
                })), k.debug("".concat(b.name, " timeout")))
            });
            const t = new p(n.UNEXPECTED_ERROR, "".concat(b.name,
                ": this api invoke is end"));
            return {
                onSuccess: a => {
                    const e = () => {
                        if (q) throw t;
                        return q = !0, this.sendApiInvoke(xa({}, h(), {success: !0}, b.reportResult && {result: a})), l && k.info("".concat(b.name, " onSuccess")), a
                    };
                    return c ? Yk(e, b.name + "Success", c, () => q = !0) : e()
                }, onError: a => {
                    const e = () => {
                        if (q) throw a;
                        q = !0;
                        this.sendApiInvoke(xa({}, h(), {success: !1, error: a.toString()}));
                        l && k.info("".concat(b.name, " onFailure"), a.toString())
                    };
                    return c ? Yk(e, b.name + "Error", c, () => q = !0) : e()
                }
            }
        }

        sessionInit(a, b) {
            if (!this.baseInfoMap.has(a)) {
                var c =
                    x();
                a = this.createBaseInfo(a, c);
                a.cname = b.cname;
                var e = Ia({}, {
                    willUploadConsoleLog: v.UPLOAD_LOG,
                    maxTouchPoints: navigator.maxTouchPoints,
                    areaVersion: cg ? "global" : "oversea",
                    areas: v.AREAS && v.AREAS.join(",")
                }, b.extend), g = x();
                b = xa({}, a, {
                    eventType: Fa.SESSION_INIT,
                    appid: b.appid,
                    browser: navigator.userAgent,
                    build: "v4.6.3-0-g91da319d(8/10/2021, 9:07:29 PM)",
                    lts: g,
                    elapse: g - c,
                    extend: w(e),
                    mode: b.mode,
                    process: v.PROCESS_ID,
                    success: !0,
                    version: Za
                });
                this.send({type: oa.SESSION, data: b}, !0)
            }
        }

        joinChooseServer(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c =
                    a.info, e = x();
                b = xa({}, c, {
                    eventType: Fa.JOIN_CHOOSE_SERVER,
                    lts: e,
                    eventElapse: e - b.lts,
                    chooseServerAddr: b.csAddr,
                    errorCode: b.ec,
                    elapse: e - a.startTime,
                    success: b.succ,
                    chooseServerAddrList: w(b.serverList),
                    uid: b.uid ? sa(b.uid) : null,
                    cid: b.cid ? sa(b.cid) : null,
                    chooseServerIp: b.csIp || ""
                });
                this.send({type: oa.JOIN_CHOOSE_SERVER, data: b}, !0)
            }
        }

        reqUserAccount(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = xa({}, c, {
                    eventType: Fa.REQ_USER_ACCOUNT,
                    lts: e,
                    success: b.success,
                    serverAddress: b.serverAddr,
                    stringUid: b.stringUid,
                    uid: b.uid,
                    errorCode: b.errorCode,
                    elapse: e - a.startTime,
                    eventElapse: e - b.lts,
                    extend: w(b.extend)
                });
                this.send({type: oa.REQ_USER_ACCOUNT, data: b}, !0)
            }
        }

        joinGateway(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info;
                b.vid && (c.vid = b.vid);
                c.uid = b.uid;
                c.cid = b.cid;
                var e = x();
                c = xa({}, c, {
                    eventType: Fa.JOIN_GATEWAY,
                    lts: e,
                    gatewayAddr: b.addr,
                    success: b.succ,
                    errorCode: b.ec,
                    elapse: e - a.startTime,
                    eventElapse: e - b.lts
                });
                b.succ && (a.lastJoinSuccessTime = e);
                this.send({type: oa.JOIN_GATEWAT, data: c}, !0)
            }
        }

        joinChannelTimeout(a, b) {
            if (a =
                this.baseInfoMap.get(a)) {
                var c = x();
                b = xa({}, a.info, {lts: c, timeout: b, elapse: c - a.startTime});
                this.send({type: oa.JOIN_CHANNEL_TIMEOUT, data: b}, !0)
            }
        }

        publish(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = xa({}, c, {
                    eventType: Fa.PUBLISH,
                    lts: e,
                    eventElapse: e - b.lts,
                    elapse: e - a.startTime,
                    success: b.succ,
                    errorCode: b.ec,
                    videoName: b.videoName,
                    audioName: b.audioName,
                    screenName: b.screenName,
                    screenshare: b.screenshare,
                    audio: b.audio,
                    video: b.video,
                    p2pid: b.p2pid,
                    publishRequestid: b.publishRequestid
                });
                this.send({
                    type: oa.PUBLISH,
                    data: b
                }, !0)
            }
        }

        subscribe(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                a = xa({}, c, {
                    eventType: Fa.SUBSCRIBE,
                    lts: e,
                    eventElapse: e - b.lts,
                    elapse: e - a.startTime,
                    success: b.succ,
                    errorCode: b.ec,
                    video: b.video,
                    audio: b.audio,
                    subscribeRequestid: b.subscribeRequestid,
                    p2pid: b.p2pid
                });
                "string" == typeof b.peerid ? a.peerSuid = b.peerid : a.peer = b.peerid;
                this.send({type: oa.SUBSCRIBE, data: a}, !0)
            }
        }

        firstRemoteFrame(a, b, c, e) {
            if (a = this.baseInfoMap.get(a)) {
                var g = a.info, h = x();
                b = xa({}, g, {}, e, {elapse: h - a.startTime, eventType: b, lts: h});
                this.send({type: c, data: b}, !0)
            }
        }

        onGatewayStream(a, b, c, e) {
            if (a = this.baseInfoMap.get(a)) b = xa({}, a.info, {}, e, {eventType: b, lts: x()}), this.send({
                type: c,
                data: b
            }, !0)
        }

        streamSwitch(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = xa({}, c, {
                    eventType: Fa.STREAM_SWITCH,
                    lts: e,
                    isDual: b.isdual,
                    elapse: e - a.startTime,
                    success: b.succ
                });
                this.send({type: oa.STREAM_SWITCH, data: b}, !0)
            }
        }

        requestProxyAppCenter(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = xa({}, c, {
                    eventType: Fa.REQUEST_PROXY_APPCENTER,
                    lts: e,
                    eventElapse: e -
                        b.lts,
                    elapse: e - a.startTime,
                    APAddr: b.APAddr,
                    workerManagerList: b.workerManagerList,
                    response: b.response,
                    errorCode: b.ec,
                    success: b.succ
                });
                this.send({type: oa.REQUEST_PROXY_APPCENTER, data: b}, !0)
            }
        }

        requestProxyWorkerManager(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = xa({}, c, {
                    eventType: Fa.REQUEST_PROXY_WORKER_MANAGER,
                    lts: e,
                    eventElapse: e - b.lts,
                    elapse: e - a.startTime,
                    workerManagerAddr: b.workerManagerAddr,
                    response: b.response,
                    errorCode: b.ec,
                    success: b.succ
                });
                this.send({
                    type: oa.REQUEST_PROXY_WORKER_MANAGER,
                    data: b
                }, !0)
            }
        }

        setProxyServer(a) {
            (this.proxyServer = a) ? k.debug("reportProxyServerurl: ".concat(a)) : k.debug("disable reportProxyServerurl: ".concat(a))
        }

        peerPublishStatus(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = xa({}, c, {
                    subscribeElapse: b.subscribeElapse,
                    peer: b.peer,
                    peerPublishDuration: Math.max(b.audioPublishDuration, b.videoPublishDuration),
                    audiotag: 0 < b.audioPublishDuration ? 1 : -1,
                    videotag: 0 < b.videoPublishDuration ? 1 : -1,
                    lts: e,
                    elapse: e - a.startTime,
                    joinChannelSuccessElapse: e - (a.lastJoinSuccessTime ||
                        e)
                });
                this.send({type: oa.PEER_PUBLISH_STATUS, data: b}, !0)
            }
        }

        workerEvent(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = function (a, b, c) {
                    const e = a[b];
                    if (!e || "string" != typeof e) return [a];
                    a[b] = "";
                    const g = Nd(w(a));
                    let h = 0;
                    const l = [];
                    let k = 0;
                    for (let q = 0; q < e.length; q++) k += 127 >= e.charCodeAt(q) ? 1 : 3, k <= c - g || (l[l.length] = cf({}, a, {[b]: e.substring(h, q)}), h = q, k = 127 >= e.charCodeAt(q) ? 1 : 3);
                    h !== e.length - 1 && (l[l.length] = cf({}, a, {[b]: e.substring(h)}));
                    return l
                }(xa({}, c, {}, b, {elapse: e - a.startTime, lts: e, productType: "WebRTC"}),
                    "payload", 1300);
                r(b).call(b, a => this.send({type: oa.WORKER_EVENT, data: a}, !0))
            }
        }

        apworkerEvent(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = xa({}, c, {}, b, {elapse: e - a.startTime, lts: e});
                this.send({type: oa.AP_WORKER_EVENT, data: b}, !0)
            }
        }

        joinWebProxyAP(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = xa({}, c, {}, b, {elapse: e - a.startTime, lts: e});
                this.send({type: oa.JOIN_WEB_PROXY_AP, data: b}, !0)
            }
        }

        WebSocketQuit(a, b) {
            if (a = this.baseInfoMap.get(a)) {
                var c = a.info, e = x();
                b = xa({}, c, {}, b, {
                    elapse: e - a.startTime,
                    lts: e
                });
                this.send({type: oa.WEBSOCKET_QUIT, data: b}, !0)
            }
        }

        async sendCustomReportMessage(a, b) {
            if (this.customReportCount += b.length, this.customReportCount > v.CUSTOM_REPORT_LIMIT) throw new p(n.CUSTOM_REPORT_FREQUENCY_TOO_HIGH);
            this.customReportCounterTimer || (this.customReportCounterTimer = window.setInterval(() => {
                this.customReportCount = 0
            }, 5E3));
            b = B(b).call(b, b => ({type: oa.USER_ANALYTICS, data: xa({sid: a}, b)}));
            b = {msgType: "EventMessages", sentTs: Math.round(x() / 1E3), payloads: B(b).call(b, a => w(a))};
            try {
                await this.postDataToStatsCollector(b)
            } catch (c) {
                throw k.error("send custom report message failed",
                    c.toString()), new p(n.CUSTOM_REPORT_SEND_FAILED, c.message);
            }
        }

        sendApiInvoke(a) {
            var b = v.NOT_REPORT_EVENT;
            if (a.tag && ia(b) && ia(b).call(b, a.tag)) return !1;
            if (null === a.sid) return this.apiInvokeUploadPendingItems.push(a), !1;
            b = this.baseInfoMap.get(a.sid);
            if (!b) return this.apiInvokeUploadPendingItems.push(a), !1;
            const {cname: c, uid: e, cid: g} = b.info;
            a.lts = a.lts || x();
            a = {
                invokeId: a.invokeId,
                sid: a.sid,
                cname: c,
                cid: g,
                uid: e,
                lts: a.lts,
                success: a.success,
                elapse: a.lts - b.startTime,
                execElapse: a.lts - a.apiInvokeTime,
                apiName: a.name,
                options: a.options ? w(a.options) : void 0,
                execStates: a.states ? w(a.states) : void 0,
                execResult: a.result ? w(a.result) : void 0,
                errorCode: a.error ? w(a.error) : void 0
            };
            return this.send({type: oa.API_INVOKE, data: a}, !1), !0
        }

        appendSessionId() {
            var a;
            r(a = this.clientList).call(a, a => {
                if (a._sessionId) {
                    const b = this.apiInvokeUploadPendingItems.length;
                    for (let c = 0; c < b; c++) {
                        const b = this.apiInvokeUploadPendingItems.shift();
                        b && (b.sid = a._sessionId, this.sendApiInvoke(Ia({}, b)))
                    }
                }
            })
        }

        send(a, b) {
            if (b) return this.keyEventUploadPendingItems.push(a),
                void this.sendItems(this.keyEventUploadPendingItems, !0);
            var c;
            (this.normalEventUploadPendingItems.push(a), this.normalEventUploadPendingItems.length > v.NORMAL_EVENT_QUEUE_CAPACITY) && Oa(c = this.normalEventUploadPendingItems).call(c, 0, 1);
            10 <= this.normalEventUploadPendingItems.length && this.sendItems(this.normalEventUploadPendingItems, !1)
        }

        doSend() {
            0 < this.keyEventUploadPendingItems.length && this.sendItems(this.keyEventUploadPendingItems, !0);
            0 < this.normalEventUploadPendingItems.length && 5E3 <= x() - this.lastSendNormalEventTime &&
            this.sendItems(this.normalEventUploadPendingItems, !1)
        }

        sendItems(a, b) {
            const c = [];
            for (var e = []; a.length;) {
                const b = a.shift();
                20 > c.length ? c.push(b) : e.push(b)
            }
            a.push(...e);
            for (const a of [...c]) {
                var g, h;
                -1 !== N(g = this.ltsList).call(g, a.data.lts) ? (a.data.lts = this.ltsList[this.ltsList.length - 1] + 1, this.ltsList.push(a.data.lts)) : (this.ltsList.push(a.data.lts), pd(h = this.ltsList).call(h, (a, b) => a - b))
            }
            b || (this.lastSendNormalEventTime = x());
            e = {
                msgType: "EventMessages",
                sentTs: Math.round(x() / 1E3),
                payloads: B(c).call(c,
                    a => w(a)),
                vid: (a => (a = a && a.data.sid && this.baseInfoMap.get(a.data.sid)) && a.info.vid && +a.info.vid || 0)(c[0])
            };
            return c.length && this.postDataToStatsCollector(e).catch((a => c => {
                var e, g, h;
                v.EVENT_REPORT_RETRY && (b ? this.keyEventUploadPendingItems = m(e = this.keyEventUploadPendingItems).call(e, a) : (this.normalEventUploadPendingItems = m(g = this.normalEventUploadPendingItems).call(g, a), this.normalEventUploadPendingItems.length > v.NORMAL_EVENT_QUEUE_CAPACITY && (Oa(h = this.normalEventUploadPendingItems).call(h, 0, this.normalEventUploadPendingItems.length -
                    v.NORMAL_EVENT_QUEUE_CAPACITY), k.warning("report: drop normal events"))))
            })(c)), a
        }

        async postDataToStatsCollector(a, b = !1) {
            var c, e, g;
            const h = b ? "/events/proto-raws" : "/events/messages";
            let l = this.url || (this.proxyServer ? m(c = m(e = "https://".concat(this.proxyServer, "/rs/?h=")).call(e, v.EVENT_REPORT_DOMAIN, "&p=6443&d=")).call(c, h) : m(g = "https://".concat(v.EVENT_REPORT_DOMAIN, ":6443")).call(g, h));
            for (c = 0; 2 > c; c += 1) {
                var q, k, n;
                1 === c && (l = this.backupUrl || (this.proxyServer ? m(q = m(k = "https://".concat(this.proxyServer,
                    "/rs/?h=")).call(k, v.EVENT_REPORT_BACKUP_DOMAIN, "&p=6443&d=")).call(q, h) : m(n = "https://".concat(v.EVENT_REPORT_BACKUP_DOMAIN, ":6443")).call(n, h)));
                try {
                    b ? await Vl(l, {timeout: 1E4, data: a}) : await Ab(l, {timeout: 1E4, data: a})
                } catch (F) {
                    if (1 === c) throw F;
                    continue
                }
                break
            }
        }

        createBaseInfo(a, b) {
            const c = Ia({}, Go);
            return c.sid = a, this.baseInfoMap.set(a, {info: c, startTime: b}), c
        }
    };

    class Zk extends Ma {
        constructor(a, b) {
            super();
            this._hints = [];
            this._ID = b || ta(8, "track-");
            this._mediaStreamTrack = this._originMediaStreamTrack =
                a
        }

        toString() {
            return this._ID
        }

        getTrackId() {
            return this._ID
        }

        getMediaStreamTrack(a) {
            a || (a = u.reportApiInvoke(null, {
                name: y.GET_MEDIA_STREAM_TRACK,
                options: [],
                tag: D.TRACER
            }), this._mediaStreamTrack && "string" == typeof this._mediaStreamTrack.label ? a.onSuccess(this._mediaStreamTrack.label) : a.onSuccess(""));
            return this._mediaStreamTrack
        }
    }

    let Xo = 1;

    class Sb {
        constructor(a) {
            var b;
            this.lockingPromise = z.resolve();
            this.locks = 0;
            this.name = "";
            this.lockId = Xo++;
            a && (this.name = a);
            k.debug(m(b = "[lock-".concat(this.name, "-")).call(b,
                this.lockId, "] is created."))
        }

        get isLocked() {
            return 0 < this.locks
        }

        lock() {
            var a, b;
            let c;
            this.locks += 1;
            k.debug(m(a = m(b = "[lock-".concat(this.name, "-")).call(b, this.lockId, "] is locked, current queue ")).call(a, this.locks, "."));
            let e = new z(a => {
                c = () => {
                    var b, c;
                    --this.locks;
                    k.debug(m(b = m(c = "[lock-".concat(this.name, "-")).call(c, this.lockId, "] is not locked, current queue ")).call(b, this.locks, "."));
                    a()
                }
            });
            a = this.lockingPromise.then(() => c);
            return this.lockingPromise = this.lockingPromise.then(() => e), a
        }
    }

    class Ae extends Zk {
        constructor(a,
                    b) {
            super(a, b);
            this._enabled = !0;
            this._isClosed = this._muted = !1;
            this._trackProcessors = [];
            this._handleTrackEnded = () => {
                k.debug("[".concat(this.getTrackId, "] track ended"));
                this.emit(rd.TRACK_ENDED)
            };
            this._enabledMutex = new Sb("".concat(b));
            a.addEventListener("ended", this._handleTrackEnded)
        }

        get muted() {
            return this._muted
        }

        get enabled() {
            return this._enabled
        }

        getTrackLabel() {
            return this._originMediaStreamTrack.label
        }

        close() {
            var a;
            this._isClosed || (this.stop(), r(a = this._trackProcessors).call(a, a => a.destroy()),
                this._trackProcessors = [], this._originMediaStreamTrack.stop(), this._mediaStreamTrack !== this._originMediaStreamTrack && (this._mediaStreamTrack.stop(), this._mediaStreamTrack = null), this._originMediaStreamTrack = null, this._enabledMutex = null, k.debug("[".concat(this.getTrackId(), "] close")), this.emit(G.NEED_CLOSE), this._isClosed = !0)
        }

        async _registerTrackProcessor(a) {
            var b;
            if (-1 === N(b = this._trackProcessors).call(b, a)) {
                var c = this._trackProcessors[this._trackProcessors.length - 1];
                this._trackProcessors.push(a);
                a.onOutputChange = async () => {
                    this._mediaStreamTrack = a.output || this._originMediaStreamTrack;
                    this._updatePlayerSource();
                    await Ka(this, G.NEED_REPLACE_TRACK, this._mediaStreamTrack)
                };
                c ? (c.onOutputChange = async () => {
                    c.output && await a.setInput(c.output)
                }, await a.setInput(c.output || c.input || this._originMediaStreamTrack)) : await a.setInput(this._originMediaStreamTrack)
            }
        }

        _getOutputFromProcessors() {
            if (0 === this._trackProcessors.length) return this._originMediaStreamTrack;
            let a = this._trackProcessors[this._trackProcessors.length -
            1];
            return a.output || a.input || this._originMediaStreamTrack
        }

        async _updateOriginMediaStreamTrack(a, b) {
            a !== this._originMediaStreamTrack && ((this._originMediaStreamTrack.removeEventListener("ended", this._handleTrackEnded), b && this._originMediaStreamTrack.stop(), a.addEventListener("ended", this._handleTrackEnded), this._originMediaStreamTrack = a, 0 < this._trackProcessors.length) ? (await this._trackProcessors[0].setInput(a), this._mediaStreamTrack = this._getOutputFromProcessors()) : this._mediaStreamTrack = this._originMediaStreamTrack,
                this._updatePlayerSource(), await Ka(this, G.NEED_REPLACE_TRACK, this._mediaStreamTrack))
        }

        _getDefaultPlayerConfig() {
            return {}
        }

        stateCheck(a, b) {
            var c, e, g;
            if (k.debug(m(c = m(e = m(g = "check track state, [muted: ".concat(this._muted, ", enabled: ")).call(g, this._enabled, "] to [")).call(e, a, ": ")).call(c, b, "]")), Ld(b, a), this._enabled && this._muted && "enabled" === a && !1 === b) throw(new p(n.TRACK_STATE_UNREACHABLE, "cannot set enabled while the track is muted")).print();
            if (!this._enabled && !this._muted && "muted" === a && !0 ===
                b) throw(new p(n.TRACK_STATE_UNREACHABLE, "cannot set muted while the track is disabled")).print();
        }
    }

    let Lh = window.AudioContext || window.webkitAudioContext, uc = null, Xc = new Ma, Ye = null;

    class $k extends Ma {
        constructor() {
            super();
            this.isPlayed = !1;
            this.audioOutputLevel = this.audioLevelBase = 0;
            this.audioOutputLevelCache = null;
            this.audioOutputLevelCacheMaxLength = v.AUDIO_SOURCE_AVG_VOLUME_DURATION / v.AUDIO_SOURCE_VOLUME_UPDATE_INTERVAL || 15;
            this.isDestroyed = !1;
            this._noAudioInputCount = 0;
            this.context = Zc();
            this.playNode =
                this.context.destination;
            this.outputNode = this.context.createGain();
            $c(this.outputNode);
            this.analyserNode = this.context.createAnalyser()
        }

        get isNoAudioInput() {
            return 3 <= this.noAudioInputCount
        }

        get noAudioInputCount() {
            return this._noAudioInputCount
        }

        set noAudioInputCount(a) {
            3 > this._noAudioInputCount && 3 <= a ? this.onNoAudioInput && this.onNoAudioInput() : 3 <= this._noAudioInputCount && 0 == this._noAudioInputCount % 10 && this.onNoAudioInput && this.onNoAudioInput();
            this._noAudioInputCount = a
        }

        startGetAudioBuffer(a) {
            this.audioBufferNode ||
            (this.audioBufferNode = this.context.createScriptProcessor(a), this.outputNode.connect(this.audioBufferNode), this.audioBufferNode.connect(this.context.destination), this.audioBufferNode.onaudioprocess = a => {
                this.emit(sb.ON_AUDIO_BUFFER, function (a) {
                    for (let b = 0; b < a.outputBuffer.numberOfChannels; b += 1) {
                        let c = a.outputBuffer.getChannelData(b);
                        for (let a = 0; a < c.length; a += 1) c[a] = 0
                    }
                    return a.inputBuffer
                }(a))
            })
        }

        stopGetAudioBuffer() {
            this.audioBufferNode && (this.audioBufferNode.onaudioprocess = null, this.outputNode.disconnect(this.audioBufferNode),
                this.audioBufferNode = void 0)
        }

        createOutputTrack() {
            if (!fa.webAudioMediaStreamDest) throw new p(n.NOT_SUPPORTED, "your browser is not support audio processor");
            return this.destNode && this.outputTrack || (this.destNode = this.context.createMediaStreamDestination(), this.outputNode.connect(this.destNode), this.outputTrack = this.destNode.stream.getAudioTracks()[0]), this.outputTrack
        }

        play(a) {
            "running" !== this.context.state && Va(() => {
                Xc.emit("autoplay-failed")
            });
            this.isPlayed = !0;
            this.playNode = a || this.context.destination;
            this.outputNode.connect(this.playNode)
        }

        stop() {
            if (this.isPlayed) try {
                this.outputNode.disconnect(this.playNode)
            } catch (a) {
            }
            this.isPlayed = !1
        }

        getAudioLevel() {
            return this.audioOutputLevel
        }

        getAccurateVolumeLevel() {
            let a = new Uint8Array(this.analyserNode.frequencyBinCount);
            this.analyserNode.getByteFrequencyData(a);
            let b = 0;
            for (let c = 0; c < a.length; c++) b += a[c];
            return b / a.length
        }

        getAudioAvgLevel() {
            var a;
            null === this.audioOutputLevelCache && (this.audioOutputLevelCache = [this.audioOutputLevel]);
            return Qc(a = this.audioOutputLevelCache).call(a,
                (a, c) => a + c) / this.audioOutputLevelCache.length
        }

        getAudioVolume() {
            return this.outputNode.gain.value
        }

        setVolume(a) {
            this.outputNode.gain.setValueAtTime(a, this.context.currentTime)
        }

        setMute(a) {
            a ? (this.disconnect(), this.audioLevelBase = 0, this.audioOutputLevel = 0) : this.connect()
        }

        destroy() {
            this.disconnect();
            this.stop();
            this.isDestroyed = !0;
            this.onNoAudioInput = void 0
        }

        disconnect() {
            this.sourceNode && this.sourceNode.disconnect();
            this.outputNode && this.outputNode.disconnect();
            window.clearInterval(this.updateAudioOutputLevelInterval)
        }

        connect() {
            var a;
            this.sourceNode && this.sourceNode.connect(this.outputNode);
            this.outputNode.connect(this.analyserNode);
            this.updateAudioOutputLevelInterval = window.setInterval(pa(a = this.updateAudioOutputLevel).call(a, this), v.AUDIO_SOURCE_VOLUME_UPDATE_INTERVAL || 400)
        }

        updateAudioOutputLevel() {
            if (this.context && "running" !== this.context.state && this.context.resume(), this.analyserNode) {
                if (this.analyserNode.getFloatTimeDomainData) {
                    var a = new Float32Array(this.analyserNode.frequencyBinCount);
                    this.analyserNode.getFloatTimeDomainData(a)
                } else {
                    var b;
                    a = new Uint8Array(this.analyserNode.frequencyBinCount);
                    this.analyserNode.getByteTimeDomainData(a);
                    let c = !0;
                    a = new Float32Array(B(b = vb(a)).call(b, a => (128 !== a && (c = !1), .0078125 * (a - 128))));
                    c ? this.noAudioInputCount += 1 : this.noAudioInputCount = 0
                }
                for (b = 0; b < a.length; b += 1) Math.abs(a[b]) > this.audioLevelBase && (this.audioLevelBase = Math.abs(a[b]), 1 < this.audioLevelBase && (this.audioLevelBase = 1));
                this.audioOutputLevel = this.audioLevelBase;
                this.audioLevelBase /= 4;
                null !== this.audioOutputLevelCache && (this.audioOutputLevelCache.push(this.audioOutputLevel),
                this.audioOutputLevelCache.length > this.audioOutputLevelCacheMaxLength && this.audioOutputLevelCache.shift())
            }
        }
    }

    class al extends $k {
        constructor(a, b) {
            if (super(), this.isCurrentTrackCloned = !1, this.isRemoteTrack = !1, this.rebuildWebAudio = () => {
                if (k.debug("ready to rebuild web audio, state:", this.context.state), !this.isNoAudioInput || this.isDestroyed) return document.body.removeEventListener("click", this.rebuildWebAudio, !0), void k.debug("rebuild web audio success, current volume", this.getAudioLevel());
                this.context.resume().then(() =>
                    k.info("resume success"));
                k.debug("rebuild web audio because of ios 12 bugs");
                this.disconnect();
                var a = this.track;
                this.track = this.track.clone();
                this.isCurrentTrackCloned ? a.stop() : this.isCurrentTrackCloned = !0;
                a = new MediaStream([this.track]);
                this.sourceNode = this.context.createMediaStreamSource(a);
                $c(this.sourceNode);
                this.analyserNode = this.context.createAnalyser();
                a = this.outputNode.gain.value;
                this.outputNode = this.context.createGain();
                this.outputNode.gain.setValueAtTime(a, this.context.currentTime);
                $c(this.outputNode);
                this.connect();
                this.isPlayed && this.play(this.playNode)
            }, "audio" !== a.kind) throw new p(n.UNEXPECTED_ERROR);
            this.track = a;
            a = new MediaStream([this.track]);
            this.isRemoteTrack = !!b;
            this.sourceNode = this.context.createMediaStreamSource(a);
            $c(this.sourceNode);
            this.connect();
            a = ca();
            b && a.os === V.IOS && (Xc.on("state-change", this.rebuildWebAudio), this.onNoAudioInput = () => {
                document.body.addEventListener("click", this.rebuildWebAudio, !0)
            })
        }

        get isFreeze() {
            return !1
        }

        updateTrack(a) {
            this.sourceNode.disconnect();
            this.track =
                a;
            this.isCurrentTrackCloned = !1;
            a = new MediaStream([a]);
            this.sourceNode = this.context.createMediaStreamSource(a);
            $c(this.sourceNode);
            this.sourceNode.connect(this.outputNode)
        }

        destroy() {
            Xc.off("state-change", this.rebuildWebAudio);
            super.destroy()
        }
    }

    let Od = null, $e = new Sb("safari"), Ph = !1, Qh = !1, hb = new class extends Ma {
        constructor() {
            super();
            this._state = nc.IDLE;
            this.lastAccessCameraPermission = this.lastAccessMicrophonePermission = this.isAccessCameraPermission = this.isAccessMicrophonePermission = !1;
            this.deviceInfoMap =
                new ha;
            this.init().then(() => {
                var a, b;
                navigator.mediaDevices && navigator.mediaDevices.addEventListener && navigator.mediaDevices.addEventListener("devicechange", pa(b = this.updateDevicesInfo).call(b, this));
                window.setInterval(pa(a = this.updateDevicesInfo).call(a, this), 2500)
            }).catch(a => k.error(a.toString()))
        }

        get state() {
            return this._state
        }

        set state(a) {
            a !== this._state && (this.emit(Qb.STATE_CHANGE, a), this._state = a)
        }

        async enumerateDevices(a, b, c = !1) {
            if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return (new p(n.NOT_SUPPORTED,
                "enumerateDevices() not supported.")).throw();
            var e = await navigator.mediaDevices.enumerateDevices();
            e = this.checkMediaDeviceInfoIsOk(e);
            let g = !this.isAccessMicrophonePermission && a, h = !this.isAccessCameraPermission && b;
            e.audio && (g = !1);
            e.video && (h = !1);
            let l = e = null, q = null;
            if (!c && (g || h)) {
                $e.isLocked && (k.debug("[device manager] wait GUM lock"), (await $e.lock())(), k.debug("[device manager] GUM unlock"));
                if (Ph && (g = !1, this.isAccessMicrophonePermission = !0), Qh && (h = !1, this.isAccessCameraPermission = !0), k.debug("[device manager] check media device permissions",
                    a, b, g, h), g && h) {
                    try {
                        q = await navigator.mediaDevices.getUserMedia({audio: !0, video: !0})
                    } catch (ma) {
                        c = Pd(ma.name || ma.code || ma, ma.message);
                        if (c.code === n.PERMISSION_DENIED) throw c;
                        k.warning("getUserMedia failed in getDevices", c)
                    }
                    this.isAccessMicrophonePermission = this.isAccessCameraPermission = !0
                } else if (g) {
                    try {
                        e = await navigator.mediaDevices.getUserMedia({audio: a})
                    } catch (ma) {
                        c = Pd(ma.name || ma.code || ma, ma.message);
                        if (c.code === n.PERMISSION_DENIED) throw c;
                        k.warning("getUserMedia failed in getDevices", c)
                    }
                    this.isAccessMicrophonePermission =
                        !0
                } else if (h) {
                    try {
                        l = await navigator.mediaDevices.getUserMedia({video: b})
                    } catch (ma) {
                        c = Pd(ma.name || ma.code || ma, ma.message);
                        if (c.code === n.PERMISSION_DENIED) throw c;
                        k.warning("getUserMedia failed in getDevices", c)
                    }
                    this.isAccessCameraPermission = !0
                }
                k.debug("[device manager] mic permission", a, "cam permission", b)
            }
            try {
                var t, m, F;
                const a = await navigator.mediaDevices.enumerateDevices();
                return e && r(t = e.getTracks()).call(t, a => a.stop()), l && r(m = l.getTracks()).call(m, a => a.stop()), q && r(F = q.getTracks()).call(F, a => a.stop()),
                    e = null, l = null, q = null, a
            } catch (ma) {
                var C, u, A;
                e && r(C = e.getTracks()).call(C, a => a.stop());
                l && r(u = l.getTracks()).call(u, a => a.stop());
                q && r(A = q.getTracks()).call(A, a => a.stop());
                q = l = e = null;
                return (new p(n.ENUMERATE_DEVICES_FAILED, ma.toString())).throw()
            }
        }

        async getRecordingDevices(a = !1) {
            a = await this.enumerateDevices(!0, !1, a);
            return I(a).call(a, a => "audioinput" === a.kind)
        }

        async getCamerasDevices(a = !1) {
            a = await this.enumerateDevices(!1, !0, a);
            return I(a).call(a, a => "videoinput" === a.kind)
        }

        async getSpeakers(a = !1) {
            a =
                await this.enumerateDevices(!0, !1, a);
            return I(a).call(a, a => "audiooutput" === a.kind)
        }

        searchDeviceNameById(a) {
            return (a = this.deviceInfoMap.get(a)) ? a.device.label || a.device.deviceId : null
        }

        searchDeviceIdByName(a) {
            var b;
            let c = null;
            return r(b = this.deviceInfoMap).call(b, b => {
                b.device.label === a && (c = b.device.deviceId)
            }), c
        }

        async getDeviceById(a) {
            var b = await this.enumerateDevices(!0, !0, !0);
            b = S(b).call(b, b => b.deviceId === a);
            if (!b) throw new p(n.DEVICE_NOT_FOUND, "deviceId: ".concat(a));
            return b
        }

        async init() {
            this.state =
                nc.INITING;
            try {
                await this.updateDevicesInfo(), this.state = nc.INITEND
            } catch (b) {
                k.warning("Device Detection functionality cannot start properly.", b.toString());
                this.state = nc.IDLE;
                var a = "boolean" == typeof isSecureContext ? isSecureContext : "https:" === location.protocol || "file:" === location.protocol || "localhost" === location.hostname || "127.0.0.1" === location.hostname || "::1" === location.hostname;
                a || (new p(n.WEB_SECURITY_RESTRICT, "Your context is limited by web security, please try using https protocol or localhost.")).throw();
                throw b;
            }
        }

        async updateDevicesInfo() {
            var a;
            const b = await this.enumerateDevices(!0, !0, !0), c = x(), e = [], g = this.checkMediaDeviceInfoIsOk(b);
            if (r(b).call(b, a => {
                if (a.deviceId) {
                    var b = this.deviceInfoMap.get(a.deviceId);
                    if ("ACTIVE" !== (b ? b.state : "INACTIVE")) {
                        const b = {initAt: c, updateAt: c, device: a, state: "ACTIVE"};
                        this.deviceInfoMap.set(a.deviceId, b);
                        e.push(b)
                    }
                    b && (b.updateAt = c)
                }
            }), r(a = this.deviceInfoMap).call(a, (a, b) => {
                "ACTIVE" === a.state && a.updateAt !== c && (a.state = "INACTIVE", e.push(a))
            }), this.state !== nc.INITEND) return g.audio &&
            (this.lastAccessMicrophonePermission = !0, this.isAccessMicrophonePermission = !0), void (g.video && (this.lastAccessCameraPermission = !0, this.isAccessCameraPermission = !0));
            r(e).call(e, a => {
                switch (a.device.kind) {
                    case "audioinput":
                        this.lastAccessMicrophonePermission && this.isAccessMicrophonePermission && this.emit(Qb.RECORDING_DEVICE_CHANGED, a);
                        break;
                    case "videoinput":
                        this.lastAccessCameraPermission && this.isAccessCameraPermission && this.emit(Qb.CAMERA_DEVICE_CHANGED, a);
                        break;
                    case "audiooutput":
                        this.lastAccessMicrophonePermission &&
                        this.isAccessMicrophonePermission && this.emit(Qb.PLAYOUT_DEVICE_CHANGED, a)
                }
            });
            g.audio && (this.lastAccessMicrophonePermission = !0, this.isAccessMicrophonePermission = !0);
            g.video && (this.lastAccessCameraPermission = !0, this.isAccessCameraPermission = !0)
        }

        checkMediaDeviceInfoIsOk(a) {
            const b = I(a).call(a, a => "audioinput" === a.kind);
            a = I(a).call(a, a => "videoinput" === a.kind);
            const c = {audio: !1, video: !1};
            for (const a of b) if (a.label && a.deviceId) {
                c.audio = !0;
                break
            }
            for (const b of a) if (b.label && b.deviceId) {
                c.video = !0;
                break
            }
            return c
        }
    };
    var Yo = ua("Array").entries, bl = Array.prototype, Zo = {DOMTokenList: !0, NodeList: !0}, $o = function (a) {
        var b = a.entries;
        return a === bl || a instanceof Array && b === bl.entries || Zo.hasOwnProperty(fd(a)) ? Yo : b
    };
    let af = !1, Rh = new Ma,
        cl = "play playing loadeddata canplay pause stalled suspend waiting abort emptied ended".split(" "),
        ib = new class {
            constructor() {
                this.elementMap = new ha;
                this.elementStateMap = new ha;
                this.elementsNeedToResume = [];
                this.sinkIdMap = new ha;
                this.autoResumeAfterHidden = () => {
                    var a, b;
                    document.hidden || r(a = vb($o(b =
                        this.elementMap).call(b))).call(a, ([a, b]) => {
                        const c = this.elementStateMap.get(a);
                        if (ca().name === Y.SAFARI && 0 < navigator.maxTouchPoints) return k.debug("auto resume inside visibility change."), b.pause(), void b.play().catch(c => {
                            this.elementMap.has(a) && "NotAllowedError" === c.name && (k.warning("detected audio element autoplay failed"), this.elementsNeedToResume.push(b), Va(() => {
                                this.onAutoplayFailed && this.onAutoplayFailed();
                                Qd()
                            }))
                        });
                        c && "pause" === c && (k.debug("auto resume inside visibility change."), b.play().catch(c => {
                            this.elementMap.has(a) && "NotAllowedError" === c.name && (k.warning("detected audio element autoplay failed"), this.elementsNeedToResume.push(b), Va(() => {
                                this.onAutoplayFailed && this.onAutoplayFailed();
                                Qd()
                            }))
                        }))
                    })
                };
                this.autoResumeAudioElement();
                (ca().os === V.IOS || ca().name === Y.SAFARI && 0 < navigator.maxTouchPoints) && document.addEventListener("visibilitychange", this.autoResumeAfterHidden)
            }

            async setSinkID(a, b) {
                const c = this.elementMap.get(a);
                if (this.sinkIdMap.set(a, b), c) try {
                    await c.setSinkId(b)
                } catch (e) {
                    throw new p(n.PERMISSION_DENIED,
                        "can not set sink id: " + e.toString());
                }
            }

            play(a, b, c) {
                if (!this.elementMap.has(b)) {
                    var e = document.createElement("audio");
                    e.autoplay = !0;
                    e.srcObject = new MediaStream([a]);
                    this.bindAudioElementEvents(b, e);
                    this.elementMap.set(b, e);
                    this.elementStateMap.set(b, Ca.INIT);
                    this.setVolume(b, c);
                    (a = this.sinkIdMap.get(b)) && e.setSinkId(a).catch(a => {
                        k.warning("[".concat(b, "] set sink id failed"), a.toString())
                    });
                    (a = e.play()) && a.then && a.catch(a => {
                        k.warning("audio element play warning", a.toString());
                        this.elementMap.has(b) &&
                        "NotAllowedError" === a.name && (k.warning("detected audio element autoplay failed"), this.elementsNeedToResume.push(e), Va(() => {
                            this.onAutoplayFailed && this.onAutoplayFailed();
                            Qd()
                        }))
                    })
                }
            }

            updateTrack(a, b) {
                (a = this.elementMap.get(a)) && (a.srcObject = new MediaStream([b]))
            }

            isPlaying(a) {
                return this.elementMap.has(a)
            }

            setVolume(a, b) {
                (a = this.elementMap.get(a)) && (b = Math.max(0, Math.min(100, b)), a.volume = b / 100)
            }

            stop(a) {
                var b, c;
                const e = this.elementMap.get(a);
                if (this.sinkIdMap.delete(a), e) {
                    var g = N(b = this.elementsNeedToResume).call(b,
                        e);
                    Oa(c = this.elementsNeedToResume).call(c, g, 1);
                    e.srcObject = null;
                    e.remove();
                    this.elementMap.delete(a);
                    this.elementStateMap.delete(a)
                }
            }

            bindAudioElementEvents(a, b) {
                r(cl).call(cl, c => {
                    b.addEventListener(c, c => {
                        var e, h;
                        const l = this.elementStateMap.get(a);
                        c = c.type;
                        if (k.debug(m(e = m(h = "[".concat(a, "] audio-element-status change ")).call(h, l, " => ")).call(e, c)), this.elementStateMap.set(a, c), ca().os === V.IOS && !document.hidden && "pause" === c && b) (e = b.srcObject.getAudioTracks()[0]) && "live" === e.readyState ? (k.debug("[track-".concat(a,
                            "] audio element paused, auto resume")), b.play()) : k.debug("[track-".concat(a, "] audio element paused cannot be auto resume, track"))
                    })
                })
            }

            autoResumeAudioElement() {
                const a = () => {
                    var a;
                    r(a = this.elementsNeedToResume).call(a, a => {
                        a.play().then(a => {
                            k.debug("Auto resume audio element success")
                        }).catch(a => {
                            k.warning("Auto resume audio element failed!", a)
                        })
                    });
                    this.elementsNeedToResume = []
                };
                (new z(a => {
                    document.body ? a() : window.addEventListener("load", () => a())
                })).then(() => {
                    document.body.addEventListener("touchstart",
                        a, !0);
                    document.body.addEventListener("mousedown", a, !0)
                })
            }
        };
    var sg = function (a, b) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
    };

    class jb extends Ae {
        constructor(a, b, c) {
            super(a, c);
            this.trackMediaType = "audio";
            this._enabled = !0;
            this._volume = 100;
            this._useAudioElement = !0;
            this._encoderConfig = b;
            this._source = new al(a)
        }

        get isPlaying() {
            return this._useAudioElement ? ib.isPlaying(this.getTrackId()) : this._source.isPlayed
        }

        setVolume(a) {
            ba(a, "volume", 0, 1E3);
            let b = u.reportApiInvoke(null,
                {tag: D.TRACER, name: y.LOCAL_AUDIO_TRACK_SET_VOLUME, options: [this.getTrackId(), a]}, 300);
            this._volume = a;
            this._source.setVolume(a / 100);
            this._useAudioElement && ib.setVolume(this.getTrackId(), a);
            try {
                let a = this._source.createOutputTrack();
                this._mediaStreamTrack !== a && (this._mediaStreamTrack = a, Ka(this, G.NEED_REPLACE_TRACK, this._mediaStreamTrack).then(() => {
                    k.debug("[".concat(this.getTrackId(), "] replace web audio track success"))
                }).catch(a => {
                    k.warning("[".concat(this.getTrackId(), "] replace web audio track failed"),
                        a)
                }))
            } catch (c) {
            }
            b.onSuccess()
        }

        getVolumeLevel() {
            return this._source.getAudioLevel()
        }

        async setPlaybackDevice(a) {
            let b = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.REMOTE_AUDIO_SET_OUTPUT_DEVICE,
                options: [this.getTrackId(), a]
            });
            if (!this._useAudioElement) throw new p(n.NOT_SUPPORTED, "your browser does not support setting the audio output device");
            try {
                await ib.setSinkID(this.getTrackId(), a)
            } catch (c) {
                throw b.onError(c), c;
            }
            b.onSuccess()
        }

        async setEnabled(a, b, c) {
            var e;
            if (!c) {
                if (a === this._enabled) return;
                this.stateCheck("enabled",
                    a)
            }
            k.info("[".concat(this.getTrackId(), "] start setEnabled"), a);
            b = await this._enabledMutex.lock();
            if (!a) {
                this._originMediaStreamTrack.enabled = !1;
                try {
                    await Ka(this, G.NEED_REMOVE_TRACK, this)
                } catch (g) {
                    throw k.error("[".concat(this.getTrackId(), "] setEnabled to false error"), g.toString()), b(), g;
                }
                return c || (this._enabled = !1), b()
            }
            this._originMediaStreamTrack.enabled = !0;
            try {
                await Ka(this, G.NEED_ADD_TRACK, this)
            } catch (g) {
                throw k.error("[".concat(this.getTrackId(), "] setEnabled to true error"), g.toString()),
                    b(), g;
            }
            k.info(m(e = "[".concat(this.getTrackId(), "] setEnabled to ")).call(e, a, " success"));
            c || (this._enabled = !0);
            b()
        }

        async setMuted(a) {
            var b;
            if (a !== this._muted) {
                if (this.stateCheck("muted", a), this._muted = a, ca().name === Y.FIREFOX) return k.debug("[".concat(this.getTrackId(), "] firefox set mute fallback to set enabled")), void await this.setEnabled(!a, void 0, !0);
                this._mediaStreamTrack.enabled = !a;
                k.debug(m(b = "[".concat(this.getTrackId(), "] start set muted: ")).call(b, a));
                await Ka(this, G.SET_AUDIO_TRACK_MUTED,
                    {track: this, muted: a})
            }
        }

        getStats() {
            cd(() => {
                k.warning("[deprecated] LocalAudioTrack.getStats will be removed in the future, use AgoraRTCClient.getLocalAudioStats instead")
            }, "localAudioTrackGetStatsWarning");
            return cc(this, G.GET_STATS) || bf({}, xe)
        }

        setAudioFrameCallback(a, b = 4096) {
            if (!a) return this._source.removeAllListeners(sb.ON_AUDIO_BUFFER), void this._source.stopGetAudioBuffer();
            this._source.startGetAudioBuffer(b);
            this._source.removeAllListeners(sb.ON_AUDIO_BUFFER);
            this._source.on(sb.ON_AUDIO_BUFFER,
                b => a(b))
        }

        play() {
            let a = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.LOCAL_AUDIO_TRACK_PLAY,
                options: [this.getTrackId()]
            });
            k.debug("[".concat(this.getTrackId(), "] start audio playback"));
            this._useAudioElement ? (k.debug("[".concat(this.getTrackId(), "] start audio playback in element")), ib.play(this._mediaStreamTrack, this.getTrackId(), this._volume)) : this._source.play();
            a.onSuccess()
        }

        stop() {
            let a = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.LOCAL_AUDIO_TRACK_STOP,
                options: [this.getTrackId()]
            });
            k.debug("[".concat(this.getTrackId(),
                "] stop audio playback"));
            this._useAudioElement ? ib.stop(this.getTrackId()) : this._source.stop();
            a.onSuccess()
        }

        close() {
            super.close();
            this._source.destroy()
        }

        _updatePlayerSource() {
            k.debug("[track-".concat(this.getTrackId(), "] update player source track"));
            this._source.updateTrack(this._mediaStreamTrack);
            this._useAudioElement && ib.updateTrack(this.getTrackId(), this._mediaStreamTrack)
        }

        async _updateOriginMediaStreamTrack(a, b) {
            this._originMediaStreamTrack !== a && (this._originMediaStreamTrack.removeEventListener("ended",
                this._handleTrackEnded), a.addEventListener("ended", this._handleTrackEnded), b && this._originMediaStreamTrack.stop(), this._originMediaStreamTrack = a, this._source.updateTrack(this._originMediaStreamTrack), this._mediaStreamTrack !== this._source.outputTrack && (this._mediaStreamTrack = this._originMediaStreamTrack, this._updatePlayerSource(), await Ka(this, G.NEED_REPLACE_TRACK, this._mediaStreamTrack)))
        }
    }

    (function (a, b, c, e) {
        var g, h = arguments.length, l = 3 > h ? b : null === e ? e = T(b, c) : e;
        if ("object" == typeof Reflect && "function" ==
            typeof Reflect.decorate) l = Reflect.decorate(a, b, c, e); else for (var k = a.length - 1; 0 <= k; k--) (g = a[k]) && (l = (3 > h ? g(l) : 3 < h ? g(b, c, l) : g(b, c)) || l);
        return 3 < h && l && X(b, c, l), l
    })([We({report: u}), sg("design:type", Function), sg("design:paramtypes", [Boolean]), sg("design:returntype", z)], jb.prototype, "setMuted", null);

    class tg extends jb {
        constructor(a, b, c, e) {
            super(a, b.encoderConfig ? Gd(b.encoderConfig) : {}, e);
            this._deviceName = "default";
            this._enabled = !0;
            this._config = b;
            this._constraints = c;
            this._deviceName = a.label
        }

        async setDevice(a) {
            var b,
                c;
            let e = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.MIC_AUDIO_TRACK_SET_DEVICE,
                options: [this.getTrackId(), a]
            });
            if (k.info(m(b = "[".concat(this.getTrackId, "] start set device to ")).call(b, a)), this._enabled) try {
                let c = await hb.getDeviceById(a);
                b = {};
                b.audio = bf({}, this._constraints);
                b.audio.deviceId = {exact: a};
                this._originMediaStreamTrack.stop();
                let e = null;
                try {
                    e = await Cb(b, this.getTrackId())
                } catch (l) {
                    throw k.error("[track-".concat(this.getTrackId(), "] setDevice failed"), l.toString()), e = await Cb({video: this._constraints},
                        this.getTrackId()), await this._updateOriginMediaStreamTrack(e.getAudioTracks()[0], !1), l;
                }
                await this._updateOriginMediaStreamTrack(e.getAudioTracks()[0], !1);
                this._deviceName = c.label;
                this._config.microphoneId = a;
                this._constraints.deviceId = {exact: a}
            } catch (g) {
                throw e.onError(g), k.error("[track-".concat(this.getTrackId(), "] setDevice error"), g.toString()), g;
            } else try {
                this._deviceName = (await hb.getDeviceById(a)).label, this._config.microphoneId = a, this._constraints.deviceId = {exact: a}
            } catch (g) {
                throw e.onError(g),
                    k.error("[track-".concat(this.getTrackId(), "] setDevice error"), g.toString()), g;
            }
            e.onSuccess();
            k.info(m(c = "[".concat(this.getTrackId, "] set device to ")).call(c, a, " success"))
        }

        async setEnabled(a, b, c) {
            if (b) return k.debug("[".concat(this.getTrackId, "] setEnabled false (do not close microphone)")), await super.setEnabled(a);
            if (!c) {
                if (a === this._enabled) return;
                this.stateCheck("enabled", a)
            }
            k.info("[".concat(this.getTrackId(), "] start setEnabled"), a);
            b = await this._enabledMutex.lock();
            if (!a) {
                this._originMediaStreamTrack.onended =
                    null;
                this._originMediaStreamTrack.stop();
                c || (this._enabled = !1);
                try {
                    await Ka(this, G.NEED_REMOVE_TRACK, this)
                } catch (g) {
                    throw k.error("[".concat(this.getTrackId(), "] setEnabled false failed"), g.toString()), b(), g;
                }
                return void b()
            }
            a = bf({}, this._constraints);
            let e = hb.searchDeviceIdByName(this._deviceName);
            e && !a.deviceId && (a.deviceId = e);
            try {
                let a = await Cb({audio: this._constraints}, this.getTrackId());
                await this._updateOriginMediaStreamTrack(a.getAudioTracks()[0], !1);
                await Ka(this, G.NEED_ADD_TRACK, this)
            } catch (g) {
                throw b(),
                    k.error("[".concat(this.getTrackId(), "] setEnabled true failed"), g.toString()), g;
            }
            c || (this._enabled = !0);
            k.info("[".concat(this.getTrackId(), "] setEnabled success"));
            b()
        }
    }

    class ap extends jb {
        constructor(a, b, c, e) {
            super(b.createOutputTrack(), c, e);
            this.source = a;
            this._bufferSource = b;
            this._bufferSource.on(sb.AUDIO_SOURCE_STATE_CHANGE, a => {
                this.emit(rd.SOURCE_STATE_CHANGE, a)
            });
            try {
                this._mediaStreamTrack = this._source.createOutputTrack()
            } catch (g) {
            }
        }

        get currentState() {
            return this._bufferSource.currentState
        }

        get duration() {
            return this._bufferSource.duration
        }

        getCurrentTime() {
            return this._bufferSource.currentTime
        }

        startProcessAudioBuffer(a) {
            let b =
                u.reportApiInvoke(null, {
                    tag: D.TRACER,
                    name: y.BUFFER_AUDIO_TRACK_START,
                    options: [this.getTrackId(), a, this.duration]
                });
            a && this._bufferSource.updateOptions(a);
            this._bufferSource.startProcessAudioBuffer();
            b.onSuccess()
        }

        pauseProcessAudioBuffer() {
            let a = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.BUFFER_AUDIO_TRACK_PAUSE,
                options: [this.getTrackId()]
            });
            this._bufferSource.pauseProcessAudioBuffer();
            a.onSuccess()
        }

        seekAudioBuffer(a) {
            let b = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.BUFFER_AUDIO_TRACK_SEEK,
                options: [this.getTrackId()]
            });
            this._bufferSource.seekAudioBuffer(a);
            b.onSuccess()
        }

        resumeProcessAudioBuffer() {
            let a = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.BUFFER_AUDIO_TRACK_RESUME,
                options: [this.getTrackId()]
            });
            this._bufferSource.resumeProcessAudioBuffer();
            a.onSuccess()
        }

        stopProcessAudioBuffer() {
            let a = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.BUFFER_AUDIO_TRACK_STOP,
                options: [this.getTrackId()]
            });
            this._bufferSource.stopProcessAudioBuffer();
            a.onSuccess()
        }
    }

    class Ib extends jb {
        constructor() {
            let a = Zc().createMediaStreamDestination();
            super(a.stream.getAudioTracks()[0]);
            try {
                this._mediaStreamTrack = this._source.createOutputTrack()
            } catch (b) {
            }
            this.destNode = a;
            this.trackList = []
        }

        get isActive() {
            var a;
            return !(!this.trackList.length || !S(a = this.trackList).call(a, a => !a.muted))
        }

        hasAudioTrack(a) {
            var b;
            return -1 !== N(b = this.trackList).call(b, a)
        }

        addAudioTrack(a) {
            var b;
            -1 === N(b = this.trackList).call(b, a) ? (k.debug("add ".concat(a.getTrackId(), " to mixing track")), a._source.outputNode.connect(this.destNode), this.trackList.push(a), this.updateEncoderConfig()) :
                k.debug("track ".concat(a.getTrackId(), " is already added"))
        }

        removeAudioTrack(a) {
            var b;
            if (-1 !== N(b = this.trackList).call(b, a)) {
                k.debug("remove ".concat(a.getTrackId(), " from mixing track"));
                try {
                    a._source.outputNode.disconnect(this.destNode)
                } catch (c) {
                }
                bc(this.trackList, a);
                this.updateEncoderConfig()
            }
        }

        updateEncoderConfig() {
            var a;
            let b = {};
            r(a = this.trackList).call(a, a => {
                a._encoderConfig && ((a._encoderConfig.bitrate || 0) > (b.bitrate || 0) && (b.bitrate = a._encoderConfig.bitrate), (a._encoderConfig.sampleRate || 0) >
                (b.sampleRate || 0) && (b.sampleRate = a._encoderConfig.sampleRate), (a._encoderConfig.sampleSize || 0) > (b.sampleSize || 0) && (b.sampleSize = a._encoderConfig.sampleSize), a._encoderConfig.stereo && (b.stereo = !0))
            });
            this._encoderConfig = b
        }
    }

    class bp extends Ma {
        constructor() {
            super(...arguments);
            this.resultStorage = new ha
        }

        setLocalAudioStats(a, b, c) {
            this.record("AUDIO_INPUT_LEVEL_TOO_LOW", a, this.checkAudioInputLevel(c, b));
            this.record("SEND_AUDIO_BITRATE_TOO_LOW", a, this.checkSendAudioBitrate(c, b))
        }

        setLocalVideoStats(a, b,
                           c) {
            this.record("SEND_VIDEO_BITRATE_TOO_LOW", a, this.checkSendVideoBitrate(c, b));
            this.record("FRAMERATE_INPUT_TOO_LOW", a, this.checkFramerateInput(c, b));
            this.record("FRAMERATE_SENT_TOO_LOW", a, this.checkFramerateSent(c))
        }

        setRemoteAudioStats(a, b) {
            a = a.getUserId();
            this.record("AUDIO_OUTPUT_LEVEL_TOO_LOW", a, this.checkAudioOutputLevel(b))
        }

        setRemoteVideoStats(a, b) {
            a = a.getUserId();
            this.record("RECV_VIDEO_DECODE_FAILED", a, this.checkVideoDecode(b))
        }

        record(a, b, c) {
            this.resultStorage.has(a) || this.resultStorage.set(a,
                {result: [], isPrevNormal: !0});
            let e = this.resultStorage.get(a);
            if (e && (e.result.push(c), 5 <= e.result.length)) {
                var g;
                c = ia(g = e.result).call(g, !0);
                e.isPrevNormal && !c && this.emit("exception", dl[a], a, b);
                !e.isPrevNormal && c && this.emit("exception", dl[a] + 2E3, a + "_RECOVER", b);
                e.isPrevNormal = c;
                e.result = []
            }
        }

        checkAudioOutputLevel(a) {
            return !(0 < a.receiveBitrate && 0 === a.receiveLevel)
        }

        checkAudioInputLevel(a, b) {
            return b instanceof Ib && !b.isActive || !!b.muted || 0 !== a.sendVolumeLevel
        }

        checkFramerateInput(a, b) {
            let c = null;
            b._encoderConfig &&
            b._encoderConfig.frameRate && (c = Wb(b._encoderConfig.frameRate));
            a = a.captureFrameRate;
            return !c || !a || !(10 < c && 5 > a || 10 > c && 5 <= c && 1 >= a)
        }

        checkFramerateSent(a) {
            return !(a.captureFrameRate && a.sendFrameRate && 5 < a.captureFrameRate && 1 >= a.sendFrameRate)
        }

        checkSendVideoBitrate(a, b) {
            return !!b.muted || 0 !== a.sendBitrate
        }

        checkSendAudioBitrate(a, b) {
            return b instanceof Ib && !b.isActive || !!b.muted || 0 !== a.sendBitrate
        }

        checkVideoDecode(a) {
            return 0 === a.receiveBitrate || 0 !== a.decodeFrameRate
        }
    }

    let dl = {
        FRAMERATE_INPUT_TOO_LOW: 1001,
        FRAMERATE_SENT_TOO_LOW: 1002,
        SEND_VIDEO_BITRATE_TOO_LOW: 1003,
        RECV_VIDEO_DECODE_FAILED: 1005,
        AUDIO_INPUT_LEVEL_TOO_LOW: 2001,
        AUDIO_OUTPUT_LEVEL_TOO_LOW: 2002,
        SEND_AUDIO_BITRATE_TOO_LOW: 2003
    };

    class wd {
        constructor(a) {
            this.localConnectionsMap = new ha;
            this.remoteConnectionsMap = new ha;
            this.trafficStatsPeerList = [];
            this.updateStats = () => {
                var a, c;
                r(a = this.remoteConnectionsMap).call(a, a => {
                    var b;
                    let c = a.audioStats;
                    var e = a.videoStats, k = a.pcStats;
                    let t = Eb({}, gg), m = Eb({}, hg), n = Eb({}, Gk), p = a.connection.pc.getStats(),
                        r = p.audioRecv[0], A = p.videoRecv[0];
                    k = k ? k.videoRecv[0] : void 0;
                    let u = !0 === a.connection.pc._statsFilter.videoIsReady,
                        v = this.trafficStats && S(b = this.trafficStats.peer_delay).call(b, b => b.peer_uid === a.connection.getUserId());
                    r && ("opus" !== r.codec && "aac" !== r.codec || (t.codecType = r.codec), r.outputLevel ? t.receiveLevel = Math.round(32767 * r.outputLevel) : a.connection.user.audioTrack && (t.receiveLevel = Math.round(32767 * a.connection.user.audioTrack.getVolumeLevel())), t.receiveBytes = r.bytes, t.receivePackets = r.packets, t.receivePacketsLost =
                        r.packetsLost, t.packetLossRate = t.receivePacketsLost / (t.receivePackets + t.receivePacketsLost), t.receiveBitrate = c ? 8 * Math.max(0, t.receiveBytes - c.receiveBytes) : 0, t.totalDuration = c ? c.totalDuration + 1 : 1, t.totalFreezeTime = c ? c.totalFreezeTime : 0, t.freezeRate = t.totalFreezeTime / t.totalDuration, t.receiveDelay = r.jitterBufferMs, b = a.connection.user.audioTrack, 10 < t.totalDuration && wd.isRemoteAudioFreeze(b) && (t.totalFreezeTime += 1));
                    A && ("H264" !== A.codec && "VP8" !== A.codec && "VP9" !== A.codec && "AV1X" !== A.codec || (m.codecType =
                        A.codec), m.receiveBytes = A.bytes, m.receiveBitrate = e ? 8 * Math.max(0, m.receiveBytes - e.receiveBytes) : 0, m.decodeFrameRate = A.decodeFrameRate, m.renderFrameRate = A.decodeFrameRate, A.outputFrame && (m.renderFrameRate = A.outputFrame.frameRate), A.receivedFrame ? (m.receiveFrameRate = A.receivedFrame.frameRate, m.receiveResolutionHeight = A.receivedFrame.height, m.receiveResolutionWidth = A.receivedFrame.width) : a.connection.user.videoTrack && (m.receiveResolutionHeight = a.connection.user.videoTrack._videoHeight || 0, m.receiveResolutionWidth =
                        a.connection.user.videoTrack._videoWidth || 0), void 0 !== A.framesRateFirefox && (m.receiveFrameRate = Math.round(A.framesRateFirefox)), m.receivePackets = A.packets, m.receivePacketsLost = A.packetsLost, m.packetLossRate = m.receivePacketsLost / (m.receivePackets + m.receivePacketsLost), m.totalDuration = e ? e.totalDuration + 1 : 1, m.totalFreezeTime = e ? e.totalFreezeTime : 0, m.receiveDelay = A.jitterBufferMs || 0, e = a.connection.user.videoTrack, a.connection.subscribeOptions.video && u && wd.isRemoteVideoFreeze(e, A, k) && (m.totalFreezeTime +=
                        1), m.freezeRate = m.totalFreezeTime / m.totalDuration);
                    v && (t.end2EndDelay = v.B_ad, m.end2EndDelay = v.B_vd, t.transportDelay = v.B_ed, m.transportDelay = v.B_ed, t.currentPacketLossRate = v.B_ealr4 / 100, m.currentPacketLossRate = v.B_evlr4 / 100, n.uplinkNetworkQuality = v.B_punq ? v.B_punq : 0, n.downlinkNetworkQuality = v.B_pdnq ? v.B_punq : 0);
                    a.audioStats = t;
                    a.videoStats = m;
                    a.pcStats = p;
                    a.networkStats = n;
                    a.connection.user.audioTrack && this.exceptionMonitor.setRemoteAudioStats(a.connection.user.audioTrack, t);
                    a.connection.user.videoTrack &&
                    this.exceptionMonitor.setRemoteVideoStats(a.connection.user.videoTrack, m)
                });
                r(c = this.localConnectionsMap).call(c, a => {
                    let b = a.audioStats, c = a.videoStats, e = Eb({}, xe), k = Eb({}, ye);
                    var t = a.connection.pc.getStats();
                    let m = t.audioSend[0];
                    t = t.videoSend[0];
                    let n = a.connection.getUserId();
                    m && ("opus" !== m.codec && "aac" !== m.codec || (e.codecType = m.codec), m.inputLevel ? e.sendVolumeLevel = Math.round(32767 * m.inputLevel) : a.connection.audioTrack && (e.sendVolumeLevel = Math.round(32767 * a.connection.audioTrack.getVolumeLevel())),
                        e.sendBytes = m.bytes, e.sendPackets = m.packets, e.sendPacketsLost = m.packetsLost, e.sendBitrate = b ? 8 * Math.max(0, e.sendBytes - b.sendBytes) : 0);
                    t && ("H264" !== t.codec && "VP8" !== t.codec && "VP9" !== t.codec && "AV1X" !== t.codec || (k.codecType = t.codec), k.sendBytes = t.bytes, k.sendBitrate = c ? 8 * Math.max(0, k.sendBytes - c.sendBytes) : 0, t.inputFrame ? (k.captureFrameRate = t.inputFrame.frameRate, k.captureResolutionHeight = t.inputFrame.height, k.captureResolutionWidth = t.inputFrame.width) : a.connection.videoTrack && (k.captureResolutionWidth =
                        a.connection.videoTrack._videoWidth || 0, k.captureResolutionHeight = a.connection.videoTrack._videoHeight || 0), t.sentFrame ? (k.sendFrameRate = t.sentFrame.frameRate, k.sendResolutionHeight = t.sentFrame.height, k.sendResolutionWidth = t.sentFrame.width) : a.connection.videoTrack && (k.sendResolutionWidth = a.connection.videoTrack._videoWidth || 0, k.sendResolutionHeight = a.connection.videoTrack._videoHeight || 0), t.avgEncodeMs && (k.encodeDelay = t.avgEncodeMs), a.connection.videoTrack && a.connection.videoTrack._encoderConfig &&
                    a.connection.videoTrack._encoderConfig.bitrateMax && (k.targetSendBitrate = 1E3 * a.connection.videoTrack._encoderConfig.bitrateMax), k.sendPackets = t.packets, k.sendPacketsLost = t.packetsLost, k.totalDuration = c ? c.totalDuration + 1 : 1, k.totalFreezeTime = c ? c.totalFreezeTime : 0, this.isLocalVideoFreeze(t) && (k.totalFreezeTime += 1));
                    this.trafficStats && (e.sendPacketsLost = this.trafficStats.B_palr4 / 100, k.sendPacketsLost = this.trafficStats.B_pvlr4 / 100);
                    a.audioStats = e;
                    a.videoStats = k;
                    a.audioStats && a.connection.audioTrack && this.exceptionMonitor.setLocalAudioStats(n,
                        a.connection.audioTrack, a.audioStats);
                    a.videoStats && a.connection.videoTrack && this.exceptionMonitor.setLocalVideoStats(n, a.connection.videoTrack, a.videoStats)
                })
            };
            this.clientId = a;
            this.updateStatsInterval = window.setInterval(this.updateStats, 1E3);
            this.exceptionMonitor = new bp;
            this.exceptionMonitor.on("exception", (a, c, e) => {
                this.onStatsException && this.onStatsException(a, c, e)
            })
        }

        reset() {
            this.localConnectionsMap = new ha;
            this.remoteConnectionsMap = new ha;
            this.trafficStats = void 0;
            this.trafficStatsPeerList = [];
            this.uplinkStats =
                void 0
        }

        getLocalAudioTrackStats(a) {
            return (a = this.localConnectionsMap.get(a)) && a.audioStats ? a.audioStats : Eb({}, xe)
        }

        getLocalVideoTrackStats(a) {
            return (a = this.localConnectionsMap.get(a)) && a.videoStats ? a.videoStats : Eb({}, ye)
        }

        getRemoteAudioTrackStats(a) {
            var b;
            let c = this.remoteConnectionsMap.get(a);
            if (!c || !c.audioStats) return Eb({}, gg);
            if (!this.trafficStats) return c.audioStats;
            a = S(b = this.trafficStats.peer_delay).call(b, a => a.peer_uid === c.connection.user.uid);
            return a && (c.audioStats.publishDuration = a.B_ppad +
                (x() - this.trafficStats.timestamp)), c.audioStats
        }

        getRemoteNetworkQualityStats(a) {
            return (a = this.remoteConnectionsMap.get(a)) && a.networkStats ? a.networkStats : Eb({}, Gk)
        }

        getRemoteVideoTrackStats(a) {
            var b;
            let c = this.remoteConnectionsMap.get(a);
            if (!c || !c.videoStats) return Eb({}, hg);
            if (!this.trafficStats) return c.videoStats;
            a = S(b = this.trafficStats.peer_delay).call(b, a => a.peer_uid === c.connection.user.uid);
            return a && (c.videoStats.publishDuration = a.B_ppvd + (x() - this.trafficStats.timestamp)), c.videoStats
        }

        getRTCStats() {
            var a,
                b;
            let c = 0, e = 0, g = 0, h = 0;
            r(a = this.localConnectionsMap).call(a, a => {
                a.audioStats && (c += a.audioStats.sendBytes, e += a.audioStats.sendBitrate);
                a.videoStats && (c += a.videoStats.sendBytes, e += a.videoStats.sendBitrate)
            });
            r(b = this.remoteConnectionsMap).call(b, a => {
                a.audioStats && (g += a.audioStats.receiveBytes, h += a.audioStats.receiveBitrate);
                a.videoStats && (g += a.videoStats.receiveBytes, h += a.videoStats.receiveBitrate)
            });
            a = 1;
            return this.trafficStats && (a += this.trafficStats.peer_delay.length), {
                Duration: 0,
                UserCount: a,
                SendBitrate: e,
                SendBytes: c,
                RecvBytes: g,
                RecvBitrate: h,
                OutgoingAvailableBandwidth: this.uplinkStats ? this.uplinkStats.B_uab / 1E3 : 0,
                RTT: this.trafficStats ? 2 * this.trafficStats.B_acd : 0
            }
        }

        removeConnection(a) {
            this.localConnectionsMap.delete(a);
            this.remoteConnectionsMap.delete(a)
        }

        addLocalConnection(a) {
            let b = a.connectionId;
            this.localConnectionsMap.has(b) || this.localConnectionsMap.set(b, {connection: a})
        }

        addRemoteConnection(a) {
            let b = a.connectionId;
            this.remoteConnectionsMap.has(b) || this.remoteConnectionsMap.set(b, {connection: a})
        }

        updateTrafficStats(a) {
            var b;
            let c = I(b = a.peer_delay).call(b, a => {
                var b;
                return -1 === N(b = this.trafficStatsPeerList).call(b, a.peer_uid)
            });
            r(c).call(c, a => {
                var b, c;
                let e = S(b = vb(oc(c = this.remoteConnectionsMap).call(c))).call(b, b => b.connection._userId === a.peer_uid);
                void 0 !== a.B_ppad && void 0 !== a.B_ppvd && (this.onUploadPublishDuration && this.onUploadPublishDuration(a.peer_uid, a.B_ppad, a.B_ppvd, e ? x() - e.connection.startTime : 0), this.trafficStatsPeerList.push(a.peer_uid))
            });
            this.trafficStats = a
        }

        updateUplinkStats(a) {
            var b;
            this.uplinkStats && this.uplinkStats.B_fir !==
            a.B_fir && k.debug(m(b = "[".concat(this.clientId, "]: Period fir changes to ")).call(b, a.B_fir));
            this.uplinkStats = a
        }

        static isRemoteVideoFreeze(a, b, c) {
            if (!a) return !1;
            a = !c || b.framesDecodeCount > c.framesDecodeCount;
            return !!c && b.framesDecodeFreezeTime > c.framesDecodeFreezeTime || !a
        }

        static isRemoteAudioFreeze(a) {
            return !!a && a._isFreeze()
        }

        isLocalVideoFreeze(a) {
            return !(!a.inputFrame || !a.sentFrame) && 5 < a.inputFrame.frameRate && 3 > a.sentFrame.frameRate
        }
    }

    var el;
    let Rd = () => {
        }, Zh = {}, fl = new class {
            constructor() {
                this.fnMap =
                    new ha
            }

            throttleByKey(a, b, c, e, ...g) {
                if (this.fnMap.has(b)) {
                    var h = this.fnMap.get(b);
                    h.threshold !== c ? (h.fn(...h.args), clearTimeout(h.timer), h = window.setTimeout(() => {
                        const a = this.fnMap.get(b);
                        a && a.fn(...a.args);
                        this.fnMap.delete(b)
                    }, c), this.fnMap.set(b, {
                        fn: a,
                        threshold: c,
                        timer: h,
                        args: g,
                        skipFn: e
                    })) : (h.skipFn && h.skipFn(...h.args), this.fnMap.set(b, cf({}, h, {fn: a, args: g, skipFn: e})))
                } else h = window.setTimeout(() => {
                    const a = this.fnMap.get(b);
                    a && a.fn(...a.args);
                    this.fnMap.delete(b)
                }, c), this.fnMap.set(b, {
                    fn: a, threshold: c,
                    timer: h, args: g, skipFn: e
                })
            }
        }, Yk = pa(el = fl.throttleByKey).call(el, fl),
        Ud = async ({fragementLength: a, referenceList: b, asyncMapHandler: c, allFailedhandler: e}) => {
            let g = 0, h, l = 0;
            const k = async () => {
                const q = (() => {
                    var e = g * a;
                    const h = e + a;
                    e = Da(b).call(b, e, h);
                    return B(e).call(e, c)
                })();
                try {
                    h = await ad(q)
                } catch (P) {
                    if (l += a, g++, !(l >= b.length)) return void await k();
                    e(P)
                }
                r(q).call(q, a => a.cancel())
            };
            return await k(), h
        }, bm = {
            [wc.ACCESS_POINT]: {
                [Ga.NO_FLAG_SET]: {desc: "flag is zero", retry: !1},
                [Ga.FLAG_SET_BUT_EMPTY]: {
                    desc: "flag is empty",
                    retry: !1
                },
                [Ga.INVALID_FALG_SET]: {desc: "invalid flag", retry: !1},
                [Ga.NO_SERVICE_AVAILABLE]: {desc: "no service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_P2P]: {desc: "no unilbs p2p service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_VOET]: {desc: "no unilbs voice service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_WEBRTC]: {desc: "no unilbs webrtc service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_CDS]: {desc: "no cds service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_CDN]: {
                    desc: "no cdn dispatcher service available",
                    retry: !0
                },
                [Ga.NO_SERVICE_AVAILABLE_TDS]: {desc: "no tds service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_REPORT]: {desc: "no unilbs report service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_APP_CENTER]: {desc: "no app center service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_ENV0]: {desc: "no unilbs sig env0 service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_VOET]: {desc: "no unilbs voet service available", retry: !0},
                [Ga.NO_SERVICE_AVAILABLE_STRING_UID]: {
                    desc: "no string uid service available",
                    retry: !0
                },
                [Ga.NO_SERVICE_AVAILABLE_WEBRTC_UNILBS]: {desc: "no webrtc unilbs service available", retry: !0}
            }, [wc.UNILBS]: {
                [ab.INVALID_VENDOR_KEY]: {desc: "invalid vendor key, can not find appid", retry: !1},
                [ab.INVALID_CHANNEL_NAME]: {desc: "invalid channel name", retry: !1},
                [ab.INTERNAL_ERROR]: {desc: "unilbs internal error", retry: !1},
                [ab.NO_AUTHORIZED]: {desc: "invalid token, authorized failed", retry: !1},
                [ab.DYNAMIC_KEY_TIMEOUT]: {desc: "dynamic key or token timeout", retry: !1},
                [ab.NO_ACTIVE_STATUS]: {
                    desc: "no active status",
                    retry: !1
                },
                [ab.DYNAMIC_KEY_EXPIRED]: {desc: "dynamic key expired", retry: !1},
                [ab.STATIC_USE_DYNAMIC_KEY]: {desc: "static use dynamic key", retry: !1},
                [ab.DYNAMIC_USE_STATIC_KEY]: {desc: "dynamic use static key", retry: !1},
                [ab.USER_OVERLOAD]: {desc: "amount of users over load", retry: !1},
                [ab.FORBIDDEN_REGION]: {desc: "the request is forbidden in this area", retry: !1},
                [ab.CANNOT_MEET_AREA_DEMAND]: {desc: "unable to allocate services in this area", retry: !1}
            }, [wc.STRING_UID_ALLOCATOR]: {
                [qd.IIIEGAL_APPID]: {
                    desc: "invalid appid",
                    retry: !1
                },
                [qd.IIIEGAL_UID]: {desc: "invalid string uid", retry: !1},
                [qd.INTERNAL_ERROR]: {desc: "string uid allocator internal error", retry: !0}
            }
        }, cm = {
            [E.K_TIMESTAMP_EXPIRED]: {desc: "K_TIMESTAMP_EXPIRED", action: "failed"},
            [E.K_CHANNEL_PERMISSION_INVALID]: {desc: "K_CHANNEL_PERMISSION_INVALID", action: "failed"},
            [E.K_CERTIFICATE_INVALID]: {desc: "K_CERTIFICATE_INVALID", action: "failed"},
            [E.K_CHANNEL_NAME_EMPTY]: {desc: "K_CHANNEL_NAME_EMPTY", action: "failed"},
            [E.K_CHANNEL_NOT_FOUND]: {desc: "K_CHANNEL_NOT_FOUND", action: "failed"},
            [E.K_TICKET_INVALID]: {desc: "K_TICKET_INVALID", action: "failed"},
            [E.K_CHANNEL_CONFLICTED]: {desc: "K_CHANNEL_CONFLICTED", action: "failed"},
            [E.K_SERVICE_NOT_READY]: {desc: "K_SERVICE_NOT_READY", action: "tryNext"},
            [E.K_SERVICE_TOO_HEAVY]: {desc: "K_SERVICE_TOO_HEAVY", action: "tryNext"},
            [E.K_UID_BANNED]: {desc: "K_UID_BANNED", action: "failed"},
            [E.K_IP_BANNED]: {desc: "K_IP_BANNED", action: "failed"},
            [E.ERR_INVALID_VENDOR_KEY]: {desc: "ERR_INVALID_VENDOR_KEY", action: "failed"},
            [E.ERR_INVALID_CHANNEL_NAME]: {
                desc: "ERR_INVALID_CHANNEL_NAME",
                action: "failed"
            },
            [E.WARN_NO_AVAILABLE_CHANNEL]: {desc: "WARN_NO_AVAILABLE_CHANNEL", action: "failed"},
            [E.WARN_LOOKUP_CHANNEL_TIMEOUT]: {desc: "WARN_LOOKUP_CHANNEL_TIMEOUT", action: "tryNext"},
            [E.WARN_LOOKUP_CHANNEL_REJECTED]: {desc: "WARN_LOOKUP_CHANNEL_REJECTED", action: "failed"},
            [E.WARN_OPEN_CHANNEL_TIMEOUT]: {desc: "WARN_OPEN_CHANNEL_TIMEOUT", action: "tryNext"},
            [E.WARN_OPEN_CHANNEL_REJECTED]: {desc: "WARN_OPEN_CHANNEL_REJECTED", action: "failed"},
            [E.WARN_REQUEST_DEFERRED]: {desc: "WARN_REQUEST_DEFERRED", action: "failed"},
            [E.ERR_DYNAMIC_KEY_TIMEOUT]: {desc: "ERR_DYNAMIC_KEY_TIMEOUT", action: "failed"},
            [E.ERR_NO_AUTHORIZED]: {desc: "ERR_NO_AUTHORIZED", action: "failed"},
            [E.ERR_VOM_SERVICE_UNAVAILABLE]: {desc: "ERR_VOM_SERVICE_UNAVAILABLE", action: "tryNext"},
            [E.ERR_NO_CHANNEL_AVAILABLE_CODE]: {desc: "ERR_NO_CHANNEL_AVAILABLE_CODE", action: "failed"},
            [E.ERR_MASTER_VOCS_UNAVAILABLE]: {desc: "ERR_MASTER_VOCS_UNAVAILABLE", action: "tryNext"},
            [E.ERR_INTERNAL_ERROR]: {desc: "ERR_INTERNAL_ERROR", action: "tryNext"},
            [E.ERR_NO_ACTIVE_STATUS]: {
                desc: "ERR_NO_ACTIVE_STATUS",
                action: "failed"
            },
            [E.ERR_INVALID_UID]: {desc: "ERR_INVALID_UID", action: "failed"},
            [E.ERR_DYNAMIC_KEY_EXPIRED]: {desc: "ERR_DYNAMIC_KEY_EXPIRED", action: "failed"},
            [E.ERR_STATIC_USE_DYANMIC_KE]: {desc: "ERR_STATIC_USE_DYANMIC_KE", action: "failed"},
            [E.ERR_DYNAMIC_USE_STATIC_KE]: {desc: "ERR_DYNAMIC_USE_STATIC_KE", action: "failed"},
            [E.ERR_NO_VOCS_AVAILABLE]: {desc: "ERR_NO_VOCS_AVAILABLE", action: "tryNext"},
            [E.ERR_NO_VOS_AVAILABLE]: {desc: "ERR_NO_VOS_AVAILABLE", action: "tryNext"},
            [E.ERR_JOIN_CHANNEL_TIMEOUT]: {
                desc: "ERR_JOIN_CHANNEL_TIMEOUT",
                action: "tryNext"
            },
            [E.ERR_JOIN_BY_MULTI_IP]: {desc: "ERR_JOIN_BY_MULTI_IP", action: "recover"},
            [E.ERR_NOT_JOINED]: {desc: "ERR_NOT_JOINED", action: "failed"},
            [E.ERR_REPEAT_JOIN_REQUEST]: {desc: "ERR_REPEAT_JOIN_REQUEST", action: "quit"},
            [E.ERR_REPEAT_JOIN_CHANNEL]: {desc: "ERR_REPEAT_JOIN_CHANNEL", action: "quit"},
            [E.ERR_INVALID_VENDOR_KEY]: {desc: "ERR_INVALID_VENDOR_KEY", action: "failed"},
            [E.ERR_INVALID_CHANNEL_NAME]: {desc: "ERR_INVALID_CHANNEL_NAME", action: "failed"},
            [E.ERR_INVALID_STRINGUID]: {
                desc: "ERR_INVALID_STRINGUID",
                action: "failed"
            },
            [E.ERR_TOO_MANY_USERS]: {desc: "ERR_TOO_MANY_USERS", action: "tryNext"},
            [E.ERR_SET_CLIENT_ROLE_TIMEOUT]: {desc: "ERR_SET_CLIENT_ROLE_TIMEOUT", action: "failed"},
            [E.ERR_SET_CLIENT_ROLE_NO_PERMISSION]: {desc: "ERR_SET_CLIENT_ROLE_TIMEOUT", action: "failed"},
            [E.ERR_SET_CLIENT_ROLE_ALREADY_IN_USE]: {desc: "ERR_SET_CLIENT_ROLE_ALREADY_IN_USE", action: "success"},
            [E.ERR_PUBLISH_REQUEST_INVALID]: {desc: "ERR_PUBLISH_REQUEST_INVALID", action: "failed"},
            [E.ERR_SUBSCRIBE_REQUEST_INVALID]: {
                desc: "ERR_SUBSCRIBE_REQUEST_INVALID",
                action: "failed"
            },
            [E.ERR_NOT_SUPPORTED_MESSAGE]: {desc: "ERR_NOT_SUPPORTED_MESSAGE", action: "failed"},
            [E.ERR_ILLEAGAL_PLUGIN]: {desc: "ERR_ILLEAGAL_PLUGIN", action: "failed"},
            [E.ILLEGAL_CLIENT_ROLE_LEVEL]: {desc: "ILLEGAL_CLIENT_ROLE_LEVEL", action: "failed"},
            [E.ERR_REJOIN_TOKEN_INVALID]: {desc: "ERR_REJOIN_TOKEN_INVALID", action: "failed"},
            [E.ERR_REJOIN_USER_NOT_JOINED]: {desc: "ERR_REJOIN_NOT_JOINED", action: "failed"},
            [E.ERR_INVALID_OPTIONAL_INFO]: {desc: "ERR_INVALID_OPTIONAL_INFO", action: "quit"},
            [E.ERR_TEST_RECOVER]: {
                desc: "ERR_TEST_RECOVER",
                action: "recover"
            },
            [E.ERR_TEST_TRYNEXT]: {desc: "ERR_TEST_TRYNEXT", action: "recover"},
            [E.ERR_TEST_RETRY]: {desc: "ERR_TEST_RETRY", action: "recover"},
            [E.ILLEGAL_AES_PASSWORD]: {desc: "ERR_TEST_RETRY", action: "failed"}
        }, La = {timeout: 500, timeoutFactor: 1.5, maxRetryCount: 1 / 0, maxRetryTimeout: 1E4};
    var ep = kb(function (a, b) {
        a.exports = function () {
            function a(a) {
                for (var b = a.length, c = 0, e = 0; e < b;) {
                    var g = a.charCodeAt(e++);
                    if (0 != (4294967168 & g)) if (0 == (4294965248 & g)) c += 2; else {
                        if (55296 <= g && 56319 >= g && e < b) {
                            var h = a.charCodeAt(e);
                            56320 ==
                            (64512 & h) && (++e, g = ((1023 & g) << 10) + (1023 & h) + 65536)
                        }
                        c += 0 == (4294901760 & g) ? 3 : 4
                    } else c++
                }
                return c
            }

            function b(a, b, c) {
                c = b + c;
                for (var e = [], g = ""; b < c;) {
                    var h = a[b++];
                    if (0 == (128 & h)) e.push(h); else if (192 == (224 & h)) {
                        var l = 63 & a[b++];
                        e.push((31 & h) << 6 | l)
                    } else if (224 == (240 & h)) {
                        l = 63 & a[b++];
                        var k = 63 & a[b++];
                        e.push((31 & h) << 12 | l << 6 | k)
                    } else 240 == (248 & h) ? (h = (7 & h) << 18 | (63 & a[b++]) << 12 | (63 & a[b++]) << 6 | 63 & a[b++], 65535 < h && (h -= 65536, e.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), e.push(h)) : e.push(h);
                    4096 <= e.length && (g += String.fromCharCode.apply(String,
                        H([], E(e))), e.length = 0)
                }
                return 0 < e.length && (g += String.fromCharCode.apply(String, H([], E(e)))), g
            }

            function g(a, b) {
                return 4294967296 * a.getInt32(b) + a.getUint32(b + 4)
            }

            function h(a) {
                var b, c = a.sec;
                a = a.nsec;
                if (0 <= c && 0 <= a && 17179869183 >= c) {
                    if (0 === a && 4294967295 >= c) {
                        var e = new Uint8Array(4);
                        return (new DataView(e.buffer)).setUint32(0, c), e
                    }
                    var g = c / 4294967296;
                    c &= 4294967295;
                    return e = new Uint8Array(8), (b = new DataView(e.buffer)).setUint32(0, a << 2 | 3 & g), b.setUint32(4, c), e
                }
                e = new Uint8Array(12);
                (b = new DataView(e.buffer)).setUint32(0,
                    a);
                b.setUint32(4, Math.floor(c / 4294967296));
                b.setUint32(8, c);
                return e
            }

            function l(a) {
                var b = a.getTime();
                a = Math.floor(b / 1E3);
                b = 1E6 * (b - 1E3 * a);
                var c = Math.floor(b / 1E9);
                return {sec: a + c, nsec: b - 1E9 * c}
            }

            function k(a) {
                return a instanceof Date ? h(l(a)) : null
            }

            function t(a) {
                var b = new DataView(a.buffer, a.byteOffset, a.byteLength);
                switch (a.byteLength) {
                    case 4:
                        return {sec: b.getUint32(0), nsec: 0};
                    case 8:
                        return a = b.getUint32(0), {sec: 4294967296 * (3 & a) + b.getUint32(4), nsec: a >>> 2};
                    case 12:
                        return {sec: g(b, 4), nsec: b.getUint32(0)};
                    default:
                        throw Error("Unrecognized data size for timestamp: " +
                            a.length);
                }
            }

            function m(a) {
                a = t(a);
                return new Date(1E3 * a.sec + a.nsec / 1E6)
            }

            function n(a) {
                return a instanceof Uint8Array ? a : ArrayBuffer.isView(a) ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : a instanceof ArrayBuffer ? new Uint8Array(a) : Uint8Array.from(a)
            }

            function p(a, b) {
                return void 0 === b && (b = Y), (new V(b.extensionCodec, b.context, b.maxDepth, b.initialBufferSize, b.sortKeys, b.forceFloat32, b.ignoreUndefined, b.forceIntegerToFloat)).encode(a)
            }

            function r(a) {
                return (0 > a ? "-" : "") + "0x" + Math.abs(a).toString(16).padStart(2,
                    "0")
            }

            function A(a, b) {
                return void 0 === b && (b = fa), (new ea(b.extensionCodec, b.context, b.maxStrLength, b.maxBinLength, b.maxArrayLength, b.maxMapLength, b.maxExtLength)).decode(a)
            }

            function u(a, b) {
                return void 0 === b && (b = fa), (new ea(b.extensionCodec, b.context, b.maxStrLength, b.maxBinLength, b.maxArrayLength, b.maxMapLength, b.maxExtLength)).decodeMulti(a)
            }

            function v(a) {
                return null != a[Symbol.asyncIterator] ? a : function (a) {
                    return na(this, arguments, function () {
                        var b, c, e, g;
                        return la(this, function (h) {
                            switch (h.label) {
                                case 0:
                                    b =
                                        a.getReader(), h.label = 1;
                                case 1:
                                    h.trys.push([1, , 9, 10]), h.label = 2;
                                case 2:
                                    return [4, ja(b.read())];
                                case 3:
                                    return c = h.sent(), e = c.done, g = c.value, e ? [4, ja(void 0)] : [3, 5];
                                case 4:
                                    return [2, h.sent()];
                                case 5:
                                    if (null == g) throw Error("Assertion Failure: value must not be null nor undefined");
                                    return [4, ja(g)];
                                case 6:
                                    return [4, h.sent()];
                                case 7:
                                    return h.sent(), [3, 2];
                                case 8:
                                    return [3, 10];
                                case 9:
                                    return b.releaseLock(), [7];
                                case 10:
                                    return [2]
                            }
                        })
                    })
                }(a)
            }

            function w(a, b) {
                return void 0 === b && (b = fa), c = this, e = void 0, h = function () {
                    var c;
                    return function (a, b) {
                        function c(c) {
                            return function (l) {
                                return function (c) {
                                    if (e) throw new TypeError("Generator is already executing.");
                                    for (; k;) try {
                                        if (e = 1, g && (h = 2 & c[0] ? g.return : c[0] ? g.throw || ((h = g.return) && h.call(g), 0) : g.next) && !(h = h.call(g, c[1])).done) return h;
                                        switch (g = 0, h && (c = [2 & c[0], h.value]), c[0]) {
                                            case 0:
                                            case 1:
                                                h = c;
                                                break;
                                            case 4:
                                                return k.label++, {value: c[1], done: !1};
                                            case 5:
                                                k.label++;
                                                g = c[1];
                                                c = [0];
                                                continue;
                                            case 7:
                                                c = k.ops.pop();
                                                k.trys.pop();
                                                continue;
                                            default:
                                                if (!((h = 0 < (h = k.trys).length && h[h.length - 1]) ||
                                                    6 !== c[0] && 2 !== c[0])) {
                                                    k = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) k.label = c[1]; else if (6 === c[0] && k.label < h[1]) k.label = h[1], h = c; else if (h && k.label < h[2]) k.label = h[2], k.ops.push(c); else {
                                                    h[2] && k.ops.pop();
                                                    k.trys.pop();
                                                    continue
                                                }
                                        }
                                        c = b.call(a, k)
                                    } catch (Be) {
                                        c = [6, Be], g = 0
                                    } finally {
                                        e = h = 0
                                    }
                                    if (5 & c[0]) throw c[1];
                                    return {value: c[0] ? c[1] : void 0, done: !0}
                                }([c, l])
                            }
                        }

                        var e, g, h, l, k = {
                            label: 0, sent: function () {
                                if (1 & h[0]) throw h[1];
                                return h[1]
                            }, trys: [], ops: []
                        };
                        return l = {next: c(0), throw: c(1), return: c(2)}, "function" == typeof Symbol &&
                        (l[Symbol.iterator] = function () {
                            return this
                        }), l
                    }(this, function (e) {
                        return c = v(a), [2, (new ea(b.extensionCodec, b.context, b.maxStrLength, b.maxBinLength, b.maxArrayLength, b.maxMapLength, b.maxExtLength)).decodeAsync(c)]
                    })
                }, new (g = void 0, g = Promise)(function (a, b) {
                    function l(a) {
                        try {
                            q(h.next(a))
                        } catch (xg) {
                            b(xg)
                        }
                    }

                    function k(a) {
                        try {
                            q(h.throw(a))
                        } catch (xg) {
                            b(xg)
                        }
                    }

                    function q(b) {
                        var c;
                        b.done ? a(b.value) : (c = b.value, c instanceof g ? c : new g(function (a) {
                            a(c)
                        })).then(l, k)
                    }

                    q((h = h.apply(c, e || [])).next())
                });
                var c, e, g, h
            }

            function x(a,
                       b) {
                void 0 === b && (b = fa);
                a = v(a);
                return (new ea(b.extensionCodec, b.context, b.maxStrLength, b.maxBinLength, b.maxArrayLength, b.maxMapLength, b.maxExtLength)).decodeArrayStream(a)
            }

            function y(a, b) {
                void 0 === b && (b = fa);
                a = v(a);
                return (new ea(b.extensionCodec, b.context, b.maxStrLength, b.maxBinLength, b.maxArrayLength, b.maxMapLength, b.maxExtLength)).decodeStream(a)
            }

            function z(a, b) {
                return void 0 === b && (b = fa), y(a, b)
            }

            var B = {
                d: function (a, b) {
                    for (var c in b) B.o(b, c) && !B.o(a, c) && Object.defineProperty(a, c, {enumerable: !0, get: b[c]})
                },
                o: function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b)
                }, r: function (a) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {value: "Module"});
                    Object.defineProperty(a, "__esModule", {value: !0})
                }
            }, D = {};
            B.r(D);
            B.d(D, {
                DecodeError: function () {
                    return W
                }, Decoder: function () {
                    return ea
                }, EXT_TIMESTAMP: function () {
                    return L
                }, Encoder: function () {
                    return V
                }, ExtData: function () {
                    return J
                }, ExtensionCodec: function () {
                    return Q
                }, decode: function () {
                    return A
                }, decodeArrayStream: function () {
                    return x
                },
                decodeAsync: function () {
                    return w
                }, decodeMulti: function () {
                    return u
                }, decodeMultiStream: function () {
                    return y
                }, decodeStream: function () {
                    return z
                }, decodeTimestampExtension: function () {
                    return m
                }, decodeTimestampToTimeSpec: function () {
                    return t
                }, encode: function () {
                    return p
                }, encodeDateToTimeSpec: function () {
                    return l
                }, encodeTimeSpecToTimestamp: function () {
                    return h
                }, encodeTimestampExtension: function () {
                    return k
                }
            });
            var E = function (a, b) {
                    var c = "function" == typeof Symbol && a[Symbol.iterator];
                    if (!c) return a;
                    var e;
                    a = c.call(a);
                    var g = [];
                    try {
                        for (; (void 0 === b || 0 < b--) && !(e = a.next()).done;) g.push(e.value)
                    } catch (dp) {
                        var h = {error: dp}
                    } finally {
                        try {
                            e && !e.done && (c = a.return) && c.call(a)
                        } finally {
                            if (h) throw h.error;
                        }
                    }
                    return g
                }, H = function (a, b) {
                    for (var c = 0, e = b.length, g = a.length; c < e; c++, g++) a[g] = b[c];
                    return a
                }, G = "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder,
                I = G ? new TextEncoder : void 0, K = G ? "undefined" != typeof process ? 200 : 0 : 4294967295,
                M = (null == I ? 0 : I.encodeInto) ? function (a, b, c) {
                    I.encodeInto(a, b.subarray(c))
                } : function (a, b,
                              c) {
                    b.set(I.encode(a), c)
                }, N = G ? new TextDecoder : null, O = G ? "undefined" != typeof process ? 200 : 0 : 4294967295,
                J = function (a, b) {
                    this.type = a;
                    this.data = b
                }, L = -1, R = {type: L, encode: k, decode: m}, Q = function () {
                    function a() {
                        this.builtInEncoders = [];
                        this.builtInDecoders = [];
                        this.encoders = [];
                        this.decoders = [];
                        this.register(R)
                    }

                    return a.prototype.register = function (a) {
                        var b = a.type, c = a.encode;
                        a = a.decode;
                        0 <= b ? (this.encoders[b] = c, this.decoders[b] = a) : (b = 1 + b, this.builtInEncoders[b] = c, this.builtInDecoders[b] = a)
                    }, a.prototype.tryToEncode =
                        function (a, b) {
                            for (var c = 0; c < this.builtInEncoders.length; c++) if (null != (e = this.builtInEncoders[c]) && null != (g = e(a, b))) return new J(-1 - c, g);
                            for (c = 0; c < this.encoders.length; c++) {
                                var e, g;
                                if (null != (e = this.encoders[c]) && null != (g = e(a, b))) return new J(c, g)
                            }
                            return a instanceof J ? a : null
                        }, a.prototype.decode = function (a, b, c) {
                        var e = 0 > b ? this.builtInDecoders[-1 - b] : this.decoders[b];
                        return e ? e(a, b, c) : new J(b, a)
                    }, a.defaultCodec = new a, a
                }(), S = function (a) {
                    var b = "function" == typeof Symbol && Symbol.iterator, c = b && a[b], e = 0;
                    if (c) return c.call(a);
                    if (a && "number" == typeof a.length) return {
                        next: function () {
                            return a && e >= a.length && (a = void 0), {value: a && a[e++], done: !a}
                        }
                    };
                    throw new TypeError(b ? "Object is not iterable." : "Symbol.iterator is not defined.");
                }, V = function () {
                    function b(a, b, c, e, g, h, l, k) {
                        void 0 === a && (a = Q.defaultCodec);
                        void 0 === b && (b = void 0);
                        void 0 === c && (c = 100);
                        void 0 === e && (e = 2048);
                        void 0 === g && (g = !1);
                        void 0 === h && (h = !1);
                        void 0 === l && (l = !1);
                        void 0 === k && (k = !1);
                        this.extensionCodec = a;
                        this.context = b;
                        this.maxDepth = c;
                        this.initialBufferSize = e;
                        this.sortKeys =
                            g;
                        this.forceFloat32 = h;
                        this.ignoreUndefined = l;
                        this.forceIntegerToFloat = k;
                        this.pos = 0;
                        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
                        this.bytes = new Uint8Array(this.view.buffer)
                    }

                    return b.prototype.getUint8Array = function () {
                        return this.bytes.subarray(0, this.pos)
                    }, b.prototype.reinitializeState = function () {
                        this.pos = 0
                    }, b.prototype.encode = function (a) {
                        return this.reinitializeState(), this.doEncode(a, 1), this.getUint8Array()
                    }, b.prototype.doEncode = function (a, b) {
                        if (b > this.maxDepth) throw Error("Too deep objects in depth " +
                            b);
                        null == a ? this.encodeNil() : "boolean" == typeof a ? this.encodeBoolean(a) : "number" == typeof a ? this.encodeNumber(a) : "string" == typeof a ? this.encodeString(a) : this.encodeObject(a, b)
                    }, b.prototype.ensureBufferSizeToWrite = function (a) {
                        a = this.pos + a;
                        this.view.byteLength < a && this.resizeBuffer(2 * a)
                    }, b.prototype.resizeBuffer = function (a) {
                        var b = new ArrayBuffer(a);
                        a = new Uint8Array(b);
                        b = new DataView(b);
                        a.set(this.bytes);
                        this.view = b;
                        this.bytes = a
                    }, b.prototype.encodeNil = function () {
                        this.writeU8(192)
                    }, b.prototype.encodeBoolean =
                        function (a) {
                            !1 === a ? this.writeU8(194) : this.writeU8(195)
                        }, b.prototype.encodeNumber = function (a) {
                        Number.isSafeInteger(a) && !this.forceIntegerToFloat ? 0 <= a ? 128 > a ? this.writeU8(a) : 256 > a ? (this.writeU8(204), this.writeU8(a)) : 65536 > a ? (this.writeU8(205), this.writeU16(a)) : 4294967296 > a ? (this.writeU8(206), this.writeU32(a)) : (this.writeU8(207), this.writeU64(a)) : -32 <= a ? this.writeU8(224 | a + 32) : -128 <= a ? (this.writeU8(208), this.writeI8(a)) : -32768 <= a ? (this.writeU8(209), this.writeI16(a)) : -2147483648 <= a ? (this.writeU8(210), this.writeI32(a)) :
                            (this.writeU8(211), this.writeI64(a)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(a)) : (this.writeU8(203), this.writeF64(a))
                    }, b.prototype.writeStringHeader = function (a) {
                        if (32 > a) this.writeU8(160 + a); else if (256 > a) this.writeU8(217), this.writeU8(a); else if (65536 > a) this.writeU8(218), this.writeU16(a); else {
                            if (!(4294967296 > a)) throw Error("Too long string: " + a + " bytes in UTF-8");
                            this.writeU8(219);
                            this.writeU32(a)
                        }
                    }, b.prototype.encodeString = function (b) {
                        if (b.length > K) {
                            var c = a(b);
                            this.ensureBufferSizeToWrite(5 +
                                c);
                            this.writeStringHeader(c);
                            M(b, this.bytes, this.pos)
                        } else {
                            c = a(b);
                            this.ensureBufferSizeToWrite(5 + c);
                            this.writeStringHeader(c);
                            for (var e = this.bytes, g = b.length, h = this.pos, l = 0; l < g;) {
                                var k = b.charCodeAt(l++);
                                if (0 != (4294967168 & k)) {
                                    if (0 == (4294965248 & k)) e[h++] = k >> 6 & 31 | 192; else {
                                        if (55296 <= k && 56319 >= k && l < g) {
                                            var q = b.charCodeAt(l);
                                            56320 == (64512 & q) && (++l, k = ((1023 & k) << 10) + (1023 & q) + 65536)
                                        }
                                        0 == (4294901760 & k) ? (e[h++] = k >> 12 & 15 | 224, e[h++] = k >> 6 & 63 | 128) : (e[h++] = k >> 18 & 7 | 240, e[h++] = k >> 12 & 63 | 128, e[h++] = k >> 6 & 63 | 128)
                                    }
                                    e[h++] =
                                        63 & k | 128
                                } else e[h++] = k
                            }
                        }
                        this.pos += c
                    }, b.prototype.encodeObject = function (a, b) {
                        var c = this.extensionCodec.tryToEncode(a, this.context);
                        if (null != c) this.encodeExtension(c); else if (Array.isArray(a)) this.encodeArray(a, b); else if (ArrayBuffer.isView(a)) this.encodeBinary(a); else {
                            if ("object" != typeof a) throw Error("Unrecognized object: " + Object.prototype.toString.apply(a));
                            this.encodeMap(a, b)
                        }
                    }, b.prototype.encodeBinary = function (a) {
                        var b = a.byteLength;
                        if (256 > b) this.writeU8(196), this.writeU8(b); else if (65536 > b) this.writeU8(197),
                            this.writeU16(b); else {
                            if (!(4294967296 > b)) throw Error("Too large binary: " + b);
                            this.writeU8(198);
                            this.writeU32(b)
                        }
                        a = n(a);
                        this.writeU8a(a)
                    }, b.prototype.encodeArray = function (a, b) {
                        var c, e = a.length;
                        if (16 > e) this.writeU8(144 + e); else if (65536 > e) this.writeU8(220), this.writeU16(e); else {
                            if (!(4294967296 > e)) throw Error("Too large array: " + e);
                            this.writeU8(221);
                            this.writeU32(e)
                        }
                        try {
                            for (var g = S(a), h = g.next(); !h.done; h = g.next()) this.doEncode(h.value, b + 1)
                        } catch (ug) {
                            var l = {error: ug}
                        } finally {
                            try {
                                h && !h.done && (c = g.return) &&
                                c.call(g)
                            } finally {
                                if (l) throw l.error;
                            }
                        }
                    }, b.prototype.countWithoutUndefined = function (a, b) {
                        var c, e = 0;
                        try {
                            for (var g = S(b), h = g.next(); !h.done; h = g.next()) void 0 !== a[h.value] && e++
                        } catch (ug) {
                            var l = {error: ug}
                        } finally {
                            try {
                                h && !h.done && (c = g.return) && c.call(g)
                            } finally {
                                if (l) throw l.error;
                            }
                        }
                        return e
                    }, b.prototype.encodeMap = function (a, b) {
                        var c, e = Object.keys(a);
                        this.sortKeys && e.sort();
                        var g = this.ignoreUndefined ? this.countWithoutUndefined(a, e) : e.length;
                        if (16 > g) this.writeU8(128 + g); else if (65536 > g) this.writeU8(222), this.writeU16(g);
                        else {
                            if (!(4294967296 > g)) throw Error("Too large map object: " + g);
                            this.writeU8(223);
                            this.writeU32(g)
                        }
                        try {
                            for (var h = S(e), l = h.next(); !l.done; l = h.next()) {
                                var k = l.value, q = a[k];
                                this.ignoreUndefined && void 0 === q || (this.encodeString(k), this.doEncode(q, b + 1))
                            }
                        } catch (pc) {
                            var t = {error: pc}
                        } finally {
                            try {
                                l && !l.done && (c = h.return) && c.call(h)
                            } finally {
                                if (t) throw t.error;
                            }
                        }
                    }, b.prototype.encodeExtension = function (a) {
                        var b = a.data.length;
                        if (1 === b) this.writeU8(212); else if (2 === b) this.writeU8(213); else if (4 === b) this.writeU8(214);
                        else if (8 === b) this.writeU8(215); else if (16 === b) this.writeU8(216); else if (256 > b) this.writeU8(199), this.writeU8(b); else if (65536 > b) this.writeU8(200), this.writeU16(b); else {
                            if (!(4294967296 > b)) throw Error("Too large extension object: " + b);
                            this.writeU8(201);
                            this.writeU32(b)
                        }
                        this.writeI8(a.type);
                        this.writeU8a(a.data)
                    }, b.prototype.writeU8 = function (a) {
                        this.ensureBufferSizeToWrite(1);
                        this.view.setUint8(this.pos, a);
                        this.pos++
                    }, b.prototype.writeU8a = function (a) {
                        var b = a.length;
                        this.ensureBufferSizeToWrite(b);
                        this.bytes.set(a,
                            this.pos);
                        this.pos += b
                    }, b.prototype.writeI8 = function (a) {
                        this.ensureBufferSizeToWrite(1);
                        this.view.setInt8(this.pos, a);
                        this.pos++
                    }, b.prototype.writeU16 = function (a) {
                        this.ensureBufferSizeToWrite(2);
                        this.view.setUint16(this.pos, a);
                        this.pos += 2
                    }, b.prototype.writeI16 = function (a) {
                        this.ensureBufferSizeToWrite(2);
                        this.view.setInt16(this.pos, a);
                        this.pos += 2
                    }, b.prototype.writeU32 = function (a) {
                        this.ensureBufferSizeToWrite(4);
                        this.view.setUint32(this.pos, a);
                        this.pos += 4
                    }, b.prototype.writeI32 = function (a) {
                        this.ensureBufferSizeToWrite(4);
                        this.view.setInt32(this.pos, a);
                        this.pos += 4
                    }, b.prototype.writeF32 = function (a) {
                        this.ensureBufferSizeToWrite(4);
                        this.view.setFloat32(this.pos, a);
                        this.pos += 4
                    }, b.prototype.writeF64 = function (a) {
                        this.ensureBufferSizeToWrite(8);
                        this.view.setFloat64(this.pos, a);
                        this.pos += 8
                    }, b.prototype.writeU64 = function (a) {
                        this.ensureBufferSizeToWrite(8);
                        var b = this.view, c = this.pos;
                        b.setUint32(c, a / 4294967296);
                        b.setUint32(c + 4, a);
                        this.pos += 8
                    }, b.prototype.writeI64 = function (a) {
                        this.ensureBufferSizeToWrite(8);
                        var b = this.view, c =
                            this.pos;
                        b.setUint32(c, Math.floor(a / 4294967296));
                        b.setUint32(c + 4, a);
                        this.pos += 8
                    }, b
                }(), Y = {}, U;
            G = function () {
                function a(a, b) {
                    void 0 === a && (a = 16);
                    void 0 === b && (b = 16);
                    this.maxKeyLength = a;
                    this.maxLengthPerKey = b;
                    this.miss = this.hit = 0;
                    this.caches = [];
                    for (a = 0; a < this.maxKeyLength; a++) this.caches.push([])
                }

                return a.prototype.canBeCached = function (a) {
                    return 0 < a && a <= this.maxKeyLength
                }, a.prototype.find = function (a, b, c) {
                    var e, g = this.caches[c - 1];
                    try {
                        var h = function (a) {
                            var b = "function" == typeof Symbol && Symbol.iterator, c = b &&
                                a[b], e = 0;
                            if (c) return c.call(a);
                            if (a && "number" == typeof a.length) return {
                                next: function () {
                                    return a && e >= a.length && (a = void 0), {value: a && a[e++], done: !a}
                                }
                            };
                            throw new TypeError(b ? "Object is not iterable." : "Symbol.iterator is not defined.");
                        }(g), l = h.next();
                        a:for (; !l.done; l = h.next()) {
                            var k = l.value, q = k.bytes;
                            for (g = 0; g < c; g++) if (q[g] !== a[b + g]) continue a;
                            return k.str
                        }
                    } catch (pc) {
                        var t = {error: pc}
                    } finally {
                        try {
                            l && !l.done && (e = h.return) && e.call(h)
                        } finally {
                            if (t) throw t.error;
                        }
                    }
                    return null
                }, a.prototype.store = function (a,
                                                 b) {
                    var c = this.caches[a.length - 1];
                    a = {bytes: a, str: b};
                    c.length >= this.maxLengthPerKey ? c[Math.random() * c.length | 0] = a : c.push(a)
                }, a.prototype.decode = function (a, c, e) {
                    var g = this.find(a, c, e);
                    if (null != g) return this.hit++, g;
                    this.miss++;
                    g = b(a, c, e);
                    a = Uint8Array.prototype.slice.call(a, c, c + e);
                    return this.store(a, g), g
                }, a
            }();
            var Z = (U = function (a, b) {
                return (U = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (a, b) {
                    a.__proto__ = b
                } || function (a, b) {
                    for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] =
                        b[c])
                })(a, b)
            }, function (a, b) {
                function c() {
                    this.constructor = a
                }

                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                U(a, b);
                a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
            }), X = function (a, b) {
                function c(c) {
                    return function (l) {
                        return function (c) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; k;) try {
                                if (e = 1, g && (h = 2 & c[0] ? g.return : c[0] ? g.throw || ((h = g.return) && h.call(g), 0) : g.next) && !(h = h.call(g, c[1])).done) return h;
                                switch (g = 0, h && (c = [2 & c[0], h.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        h = c;
                                        break;
                                    case 4:
                                        return k.label++, {value: c[1], done: !1};
                                    case 5:
                                        k.label++;
                                        g = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = k.ops.pop();
                                        k.trys.pop();
                                        continue;
                                    default:
                                        if (!((h = 0 < (h = k.trys).length && h[h.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            k = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) k.label = c[1]; else if (6 === c[0] && k.label < h[1]) k.label = h[1], h = c; else if (h && k.label < h[2]) k.label = h[2], k.ops.push(c); else {
                                            h[2] && k.ops.pop();
                                            k.trys.pop();
                                            continue
                                        }
                                }
                                c = b.call(a, k)
                            } catch (pc) {
                                c =
                                    [6, pc], g = 0
                            } finally {
                                e = h = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {value: c[0] ? c[1] : void 0, done: !0}
                        }([c, l])
                    }
                }

                var e, g, h, l, k = {
                    label: 0, sent: function () {
                        if (1 & h[0]) throw h[1];
                        return h[1]
                    }, trys: [], ops: []
                };
                return l = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function () {
                    return this
                }), l
            }, aa = function (a) {
                function b(b) {
                    c[b] = a[b] && function (c) {
                        return new Promise(function (e, g) {
                            !function (a, b, c, e) {
                                Promise.resolve(e).then(function (b) {
                                    a({value: b, done: c})
                                }, b)
                            }(e, g, (c = a[b](c)).done, c.value)
                        })
                    }
                }

                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var c, e = a[Symbol.asyncIterator];
                return e ? e.call(a) : (a = "function" == typeof __values ? __values(a) : a[Symbol.iterator](), c = {}, b("next"), b("throw"), b("return"), c[Symbol.asyncIterator] = function () {
                    return this
                }, c)
            }, T = function (a) {
                return this instanceof T ? (this.v = a, this) : new T(a)
            }, da = function (a, b, c) {
                function e(a) {
                    t[a] && (q[a] = function (b) {
                        return new Promise(function (c, e) {
                            1 < m.push([a, b, c, e]) || g(a, b)
                        })
                    })
                }

                function g(a, b) {
                    try {
                        (c = t[a](b)).value instanceof T ? Promise.resolve(c.value.v).then(h, l) : k(m[0][2], c)
                    } catch (wg) {
                        k(m[0][3],
                            wg)
                    }
                    var c
                }

                function h(a) {
                    g("next", a)
                }

                function l(a) {
                    g("throw", a)
                }

                function k(a, b) {
                    a(b);
                    m.shift();
                    m.length && g(m[0][0], m[0][1])
                }

                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var q, t = c.apply(a, b || []), m = [];
                return q = {}, e("next"), e("throw"), e("return"), q[Symbol.asyncIterator] = function () {
                    return this
                }, q
            }, ba = new DataView(new ArrayBuffer(0)), ha = new Uint8Array(ba.buffer);
            a:{
                try {
                    ba.getInt8(0)
                } catch (cp) {
                    var ca = cp.constructor;
                    break a
                }
                throw Error("never reached");
            }
            var ia = new ca("Insufficient data"),
                ka = new G, W = function (a) {
                    function b(c) {
                        c = a.call(this, c) || this;
                        var e = Object.create(b.prototype);
                        return Object.setPrototypeOf(c, e), Object.defineProperty(c, "name", {
                            configurable: !0,
                            enumerable: !1,
                            value: b.name
                        }), c
                    }

                    return Z(b, a), b
                }(Error), ea = function () {
                    function a(a, b, c, e, g, h, l, k) {
                        void 0 === a && (a = Q.defaultCodec);
                        void 0 === b && (b = void 0);
                        void 0 === c && (c = 4294967295);
                        void 0 === e && (e = 4294967295);
                        void 0 === g && (g = 4294967295);
                        void 0 === h && (h = 4294967295);
                        void 0 === l && (l = 4294967295);
                        void 0 === k && (k = ka);
                        this.extensionCodec = a;
                        this.context = b;
                        this.maxStrLength = c;
                        this.maxBinLength = e;
                        this.maxArrayLength = g;
                        this.maxMapLength = h;
                        this.maxExtLength = l;
                        this.keyDecoder = k;
                        this.pos = this.totalPos = 0;
                        this.view = ba;
                        this.bytes = ha;
                        this.headByte = -1;
                        this.stack = []
                    }

                    return a.prototype.reinitializeState = function () {
                        this.totalPos = 0;
                        this.headByte = -1;
                        this.stack.length = 0
                    }, a.prototype.setBuffer = function (a) {
                        this.bytes = n(a);
                        a = this.bytes;
                        a instanceof ArrayBuffer ? a = new DataView(a) : (a = n(a), a = new DataView(a.buffer, a.byteOffset, a.byteLength));
                        this.view = a;
                        this.pos =
                            0
                    }, a.prototype.appendBuffer = function (a) {
                        if (-1 !== this.headByte || this.hasRemaining()) {
                            var b = this.bytes.subarray(this.pos);
                            a = n(a);
                            var c = new Uint8Array(b.length + a.length);
                            c.set(b);
                            c.set(a, b.length);
                            this.setBuffer(c)
                        } else this.setBuffer(a)
                    }, a.prototype.hasRemaining = function (a) {
                        return void 0 === a && (a = 1), this.view.byteLength - this.pos >= a
                    }, a.prototype.createExtraByteError = function (a) {
                        var b = this.view;
                        return new RangeError("Extra " + (b.byteLength - this.pos) + " of " + b.byteLength + " byte(s) found at buffer[" + a + "]")
                    },
                        a.prototype.decode = function (a) {
                            this.reinitializeState();
                            this.setBuffer(a);
                            a = this.doDecodeSync();
                            if (this.hasRemaining()) throw this.createExtraByteError(this.pos);
                            return a
                        }, a.prototype.decodeMulti = function (a) {
                        return X(this, function (b) {
                            switch (b.label) {
                                case 0:
                                    this.reinitializeState(), this.setBuffer(a), b.label = 1;
                                case 1:
                                    return this.hasRemaining() ? [4, this.doDecodeSync()] : [3, 3];
                                case 2:
                                    return b.sent(), [3, 1];
                                case 3:
                                    return [2]
                            }
                        })
                    }, a.prototype.decodeAsync = function (a) {
                        var b, c, e, g, h, l, k;
                        return h = this, k = function () {
                            var h,
                                l, k, q, t, m, n, p;
                            return X(this, function (C) {
                                switch (C.label) {
                                    case 0:
                                        h = !1, C.label = 1;
                                    case 1:
                                        C.trys.push([1, 6, 7, 12]), b = aa(a), C.label = 2;
                                    case 2:
                                        return [4, b.next()];
                                    case 3:
                                        if ((c = C.sent()).done) return [3, 5];
                                        if (k = c.value, h) throw this.createExtraByteError(this.totalPos);
                                        this.appendBuffer(k);
                                        try {
                                            l = this.doDecodeSync(), h = !0
                                        } catch (Be) {
                                            if (!(Be instanceof ca)) throw Be;
                                        }
                                        this.totalPos += this.pos;
                                        C.label = 4;
                                    case 4:
                                        return [3, 2];
                                    case 5:
                                        return [3, 12];
                                    case 6:
                                        return q = C.sent(), e = {error: q}, [3, 12];
                                    case 7:
                                        return C.trys.push([7, , 10, 11]),
                                            c && !c.done && (g = b.return) ? [4, g.call(b)] : [3, 9];
                                    case 8:
                                        C.sent(), C.label = 9;
                                    case 9:
                                        return [3, 11];
                                    case 10:
                                        if (e) throw e.error;
                                        return [7];
                                    case 11:
                                        return [7];
                                    case 12:
                                        if (h) {
                                            if (this.hasRemaining()) throw this.createExtraByteError(this.totalPos);
                                            return [2, l]
                                        }
                                        throw m = (t = this).headByte, n = t.pos, p = t.totalPos, new RangeError("Insufficient data in parsing " + r(m) + " at " + p + " (" + n + " in the current buffer)");
                                }
                            })
                        }, new (l = void 0, l = Promise)(function (a, b) {
                            function c(a) {
                                try {
                                    g(k.next(a))
                                } catch (vg) {
                                    b(vg)
                                }
                            }

                            function e(a) {
                                try {
                                    g(k.throw(a))
                                } catch (vg) {
                                    b(vg)
                                }
                            }

                            function g(b) {
                                var g;
                                b.done ? a(b.value) : (g = b.value, g instanceof l ? g : new l(function (a) {
                                    a(g)
                                })).then(c, e)
                            }

                            g((k = k.apply(h, [])).next())
                        })
                    }, a.prototype.decodeArrayStream = function (a) {
                        return this.decodeMultiAsync(a, !0)
                    }, a.prototype.decodeStream = function (a) {
                        return this.decodeMultiAsync(a, !1)
                    }, a.prototype.decodeMultiAsync = function (a, b) {
                        return da(this, arguments, function () {
                            var c, e, g, h, l, k, q, t, m;
                            return X(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        c = b, e = -1, n.label = 1;
                                    case 1:
                                        n.trys.push([1, 13, 14, 19]), g = aa(a), n.label =
                                            2;
                                    case 2:
                                        return [4, T(g.next())];
                                    case 3:
                                        if ((h = n.sent()).done) return [3, 12];
                                        if (l = h.value, b && 0 === e) throw this.createExtraByteError(this.totalPos);
                                        this.appendBuffer(l);
                                        c && (e = this.readArraySize(), c = !1, this.complete());
                                        n.label = 4;
                                    case 4:
                                        n.trys.push([4, 9, , 10]), n.label = 5;
                                    case 5:
                                        return [4, T(this.doDecodeSync())];
                                    case 6:
                                        return [4, n.sent()];
                                    case 7:
                                        return n.sent(), 0 == --e ? [3, 8] : [3, 5];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        if (!((k = n.sent()) instanceof ca)) throw k;
                                        return [3, 10];
                                    case 10:
                                        this.totalPos += this.pos, n.label = 11;
                                    case 11:
                                        return [3,
                                            2];
                                    case 12:
                                        return [3, 19];
                                    case 13:
                                        return q = n.sent(), t = {error: q}, [3, 19];
                                    case 14:
                                        return n.trys.push([14, , 17, 18]), h && !h.done && (m = g.return) ? [4, T(m.call(g))] : [3, 16];
                                    case 15:
                                        n.sent(), n.label = 16;
                                    case 16:
                                        return [3, 18];
                                    case 17:
                                        if (t) throw t.error;
                                        return [7];
                                    case 18:
                                        return [7];
                                    case 19:
                                        return [2]
                                }
                            })
                        })
                    }, a.prototype.doDecodeSync = function () {
                        a:for (; ;) {
                            var a = this.readHeadByte();
                            if (224 <= a) a -= 256; else if (192 > a) {
                                if (!(128 > a)) if (144 > a) {
                                    if (0 != (a -= 128)) {
                                        this.pushMapState(a);
                                        this.complete();
                                        continue a
                                    }
                                    a = {}
                                } else if (160 > a) {
                                    if (0 !=
                                        (a -= 144)) {
                                        this.pushArrayState(a);
                                        this.complete();
                                        continue a
                                    }
                                    a = []
                                } else a -= 160, a = this.decodeUtf8String(a, 0)
                            } else if (192 === a) a = null; else if (194 === a) a = !1; else if (195 === a) a = !0; else if (202 === a) a = this.readF32(); else if (203 === a) a = this.readF64(); else if (204 === a) a = this.readU8(); else if (205 === a) a = this.readU16(); else if (206 === a) a = this.readU32(); else if (207 === a) a = this.readU64(); else if (208 === a) a = this.readI8(); else if (209 === a) a = this.readI16(); else if (210 === a) a = this.readI32(); else if (211 === a) a = this.readI64(); else if (217 ===
                                a) a = this.lookU8(), a = this.decodeUtf8String(a, 1); else if (218 === a) a = this.lookU16(), a = this.decodeUtf8String(a, 2); else if (219 === a) a = this.lookU32(), a = this.decodeUtf8String(a, 4); else if (220 === a) {
                                if (0 !== (a = this.readU16())) {
                                    this.pushArrayState(a);
                                    this.complete();
                                    continue a
                                }
                                a = []
                            } else if (221 === a) {
                                if (0 !== (a = this.readU32())) {
                                    this.pushArrayState(a);
                                    this.complete();
                                    continue a
                                }
                                a = []
                            } else if (222 === a) {
                                if (0 !== (a = this.readU16())) {
                                    this.pushMapState(a);
                                    this.complete();
                                    continue a
                                }
                                a = {}
                            } else if (223 === a) {
                                if (0 !== (a = this.readU32())) {
                                    this.pushMapState(a);
                                    this.complete();
                                    continue a
                                }
                                a = {}
                            } else if (196 === a) a = this.lookU8(), a = this.decodeBinary(a, 1); else if (197 === a) a = this.lookU16(), a = this.decodeBinary(a, 2); else if (198 === a) a = this.lookU32(), a = this.decodeBinary(a, 4); else if (212 === a) a = this.decodeExtension(1, 0); else if (213 === a) a = this.decodeExtension(2, 0); else if (214 === a) a = this.decodeExtension(4, 0); else if (215 === a) a = this.decodeExtension(8, 0); else if (216 === a) a = this.decodeExtension(16, 0); else if (199 === a) a = this.lookU8(), a = this.decodeExtension(a, 1); else if (200 === a) a =
                                this.lookU16(), a = this.decodeExtension(a, 2); else {
                                if (201 !== a) throw new W("Unrecognized type byte: " + r(a));
                                a = this.lookU32();
                                a = this.decodeExtension(a, 4)
                            }
                            this.complete();
                            for (var b = this.stack; 0 < b.length;) {
                                var c = b[b.length - 1];
                                if (0 === c.type) {
                                    if (c.array[c.position] = a, c.position++, c.position !== c.size) continue a;
                                    b.pop();
                                    a = c.array
                                } else {
                                    if (1 === c.type) {
                                        if ("string" != (e = typeof a) && "number" !== e) throw new W("The type of key must be string or number but " + typeof a);
                                        if ("__proto__" === a) throw new W("The key __proto__ is not allowed");
                                        c.key = a;
                                        c.type = 2;
                                        continue a
                                    }
                                    if (c.map[c.key] = a, c.readCount++, c.readCount !== c.size) {
                                        c.key = null;
                                        c.type = 1;
                                        continue a
                                    }
                                    b.pop();
                                    a = c.map
                                }
                            }
                            return a
                        }
                        var e
                    }, a.prototype.readHeadByte = function () {
                        return -1 === this.headByte && (this.headByte = this.readU8()), this.headByte
                    }, a.prototype.complete = function () {
                        this.headByte = -1
                    }, a.prototype.readArraySize = function () {
                        var a = this.readHeadByte();
                        switch (a) {
                            case 220:
                                return this.readU16();
                            case 221:
                                return this.readU32();
                            default:
                                if (160 > a) return a - 144;
                                throw new W("Unrecognized array type byte: " +
                                    r(a));
                        }
                    }, a.prototype.pushMapState = function (a) {
                        if (a > this.maxMapLength) throw new W("Max length exceeded: map length (" + a + ") > maxMapLengthLength (" + this.maxMapLength + ")");
                        this.stack.push({type: 1, size: a, key: null, readCount: 0, map: {}})
                    }, a.prototype.pushArrayState = function (a) {
                        if (a > this.maxArrayLength) throw new W("Max length exceeded: array length (" + a + ") > maxArrayLength (" + this.maxArrayLength + ")");
                        this.stack.push({type: 0, size: a, array: Array(a), position: 0})
                    }, a.prototype.decodeUtf8String = function (a, c) {
                        var e;
                        if (a > this.maxStrLength) throw new W("Max length exceeded: UTF-8 byte length (" + a + ") > maxStrLength (" + this.maxStrLength + ")");
                        if (this.bytes.byteLength < this.pos + c + a) throw ia;
                        var g, h = this.pos + c;
                        this.stateIsMapKey() && (null === (e = this.keyDecoder) || void 0 === e ? 0 : e.canBeCached(a)) ? e = this.keyDecoder.decode(this.bytes, h, a) : a > O ? (e = this.bytes.subarray(h, h + a), e = N.decode(e)) : e = b(this.bytes, h, a);
                        return g = e, this.pos += c + a, g
                    }, a.prototype.stateIsMapKey = function () {
                        return 0 < this.stack.length && 1 === this.stack[this.stack.length -
                        1].type
                    }, a.prototype.decodeBinary = function (a, b) {
                        if (a > this.maxBinLength) throw new W("Max length exceeded: bin length (" + a + ") > maxBinLength (" + this.maxBinLength + ")");
                        if (!this.hasRemaining(a + b)) throw ia;
                        var c = this.pos + b;
                        c = this.bytes.subarray(c, c + a);
                        return this.pos += b + a, c
                    }, a.prototype.decodeExtension = function (a, b) {
                        if (a > this.maxExtLength) throw new W("Max length exceeded: ext length (" + a + ") > maxExtLength (" + this.maxExtLength + ")");
                        var c = this.view.getInt8(this.pos + b);
                        a = this.decodeBinary(a, b + 1);
                        return this.extensionCodec.decode(a,
                            c, this.context)
                    }, a.prototype.lookU8 = function () {
                        return this.view.getUint8(this.pos)
                    }, a.prototype.lookU16 = function () {
                        return this.view.getUint16(this.pos)
                    }, a.prototype.lookU32 = function () {
                        return this.view.getUint32(this.pos)
                    }, a.prototype.readU8 = function () {
                        var a = this.view.getUint8(this.pos);
                        return this.pos++, a
                    }, a.prototype.readI8 = function () {
                        var a = this.view.getInt8(this.pos);
                        return this.pos++, a
                    }, a.prototype.readU16 = function () {
                        var a = this.view.getUint16(this.pos);
                        return this.pos += 2, a
                    }, a.prototype.readI16 =
                        function () {
                            var a = this.view.getInt16(this.pos);
                            return this.pos += 2, a
                        }, a.prototype.readU32 = function () {
                        var a = this.view.getUint32(this.pos);
                        return this.pos += 4, a
                    }, a.prototype.readI32 = function () {
                        var a = this.view.getInt32(this.pos);
                        return this.pos += 4, a
                    }, a.prototype.readU64 = function () {
                        var a, b, c = (a = this.view, b = this.pos, 4294967296 * a.getUint32(b) + a.getUint32(b + 4));
                        return this.pos += 8, c
                    }, a.prototype.readI64 = function () {
                        var a = g(this.view, this.pos);
                        return this.pos += 8, a
                    }, a.prototype.readF32 = function () {
                        var a = this.view.getFloat32(this.pos);
                        return this.pos += 4, a
                    }, a.prototype.readF64 = function () {
                        var a = this.view.getFloat64(this.pos);
                        return this.pos += 8, a
                    }, a
                }(), fa = {}, la = function (a, b) {
                    function c(c) {
                        return function (l) {
                            return function (c) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; k;) try {
                                    if (e = 1, g && (h = 2 & c[0] ? g.return : c[0] ? g.throw || ((h = g.return) && h.call(g), 0) : g.next) && !(h = h.call(g, c[1])).done) return h;
                                    switch (g = 0, h && (c = [2 & c[0], h.value]), c[0]) {
                                        case 0:
                                        case 1:
                                            h = c;
                                            break;
                                        case 4:
                                            return k.label++, {value: c[1], done: !1};
                                        case 5:
                                            k.label++;
                                            g = c[1];
                                            c = [0];
                                            continue;
                                        case 7:
                                            c = k.ops.pop();
                                            k.trys.pop();
                                            continue;
                                        default:
                                            if (!((h = 0 < (h = k.trys).length && h[h.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                k = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) k.label = c[1]; else if (6 === c[0] && k.label < h[1]) k.label = h[1], h = c; else if (h && k.label < h[2]) k.label = h[2], k.ops.push(c); else {
                                                h[2] && k.ops.pop();
                                                k.trys.pop();
                                                continue
                                            }
                                    }
                                    c = b.call(a, k)
                                } catch (pc) {
                                    c = [6, pc], g = 0
                                } finally {
                                    e = h = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {value: c[0] ? c[1] : void 0, done: !0}
                            }([c, l])
                        }
                    }

                    var e, g, h, l, k = {
                        label: 0, sent: function () {
                            if (1 &
                                h[0]) throw h[1];
                            return h[1]
                        }, trys: [], ops: []
                    };
                    return l = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (l[Symbol.iterator] = function () {
                        return this
                    }), l
                }, ja = function (a) {
                    return this instanceof ja ? (this.v = a, this) : new ja(a)
                }, na = function (a, b, c) {
                    function e(a) {
                        t[a] && (q[a] = function (b) {
                            return new Promise(function (c, e) {
                                1 < m.push([a, b, c, e]) || g(a, b)
                            })
                        })
                    }

                    function g(a, b) {
                        try {
                            (c = t[a](b)).value instanceof ja ? Promise.resolve(c.value.v).then(h, l) : k(m[0][2], c)
                        } catch (wg) {
                            k(m[0][3], wg)
                        }
                        var c
                    }

                    function h(a) {
                        g("next",
                            a)
                    }

                    function l(a) {
                        g("throw", a)
                    }

                    function k(a, b) {
                        a(b);
                        m.shift();
                        m.length && g(m[0][0], m[0][1])
                    }

                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var q, t = c.apply(a, b || []), m = [];
                    return q = {}, e("next"), e("throw"), e("return"), q[Symbol.asyncIterator] = function () {
                        return this
                    }, q
                };
            return D
        }()
    }), fp = Math.min;
    M({target: "Array", proto: !0}, {
        copyWithin: [].copyWithin || function (a, b) {
            var c = pb(this), e = fb(c.length), g = ic(a, e), h = ic(b, e),
                l = 2 < arguments.length ? arguments[2] : void 0;
            e = fp((void 0 ===
            l ? e : ic(l, e)) - h, e - g);
            l = 1;
            for (h < g && g < h + e && (l = -1, h += e - 1, g += e - 1); 0 < e--;) h in c ? c[g] = c[h] : delete c[g], g += l, h += l;
            return c
        }
    });
    var hm = ua("Array").copyWithin, ai = Array.prototype;
    M({target: "Array", proto: !0, forced: kc("every")}, {
        every: function (a) {
            return Xm(this, a, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var gp = ua("Array").every, gl = Array.prototype, jm = function (a) {
        var b = a.every;
        return a === gl || a instanceof Array && b === gl.every ? gp : b
    }, Ce = de.getWeakData, hp = Sa.set, ip = Sa.getterFor, jp = 0, De = function (a) {
        return a.frozen ||
            (a.frozen = new hl)
    }, hl = function () {
        this.entries = []
    }, yg = function (a, b) {
        return Qi(a.entries, function (a) {
            return a[0] === b
        })
    };
    hl.prototype = {
        get: function (a) {
            if (a = yg(this, a)) return a[1]
        }, has: function (a) {
            return !!yg(this, a)
        }, set: function (a, b) {
            var c = yg(this, a);
            c ? c[1] = b : this.entries.push([a, b])
        }, delete: function (a) {
            var b = Ri(this.entries, function (b) {
                return b[0] === a
            });
            return ~b && this.entries.splice(b, 1), !!~b
        }
    };
    var il = {
        getConstructor: function (a, b, c, e) {
            var g = a(function (a, h) {
                fe(a, g, b);
                hp(a, {type: b, id: jp++, frozen: void 0});
                null != h && Dc(h, a[e], a, c)
            }), h = ip(b), l = function (a, b, c) {
                var e = h(a), g = Ce(Wa(b), !0);
                return !0 === g ? De(e).set(b, c) : g[e.id] = c, a
            };
            return Gc(g.prototype, {
                delete: function (a) {
                    var b = h(this);
                    if (!qa(a)) return !1;
                    var c = Ce(a);
                    return !0 === c ? De(b).delete(a) : c && U(c, b.id) && delete c[b.id]
                }, has: function (a) {
                    var b = h(this);
                    if (!qa(a)) return !1;
                    var c = Ce(a);
                    return !0 === c ? De(b).has(a) : c && U(c, b.id)
                }
            }), Gc(g.prototype, c ? {
                get: function (a) {
                    var b = h(this);
                    if (qa(a)) {
                        var c = Ce(a);
                        return !0 === c ? De(b).get(a) : c ? c[b.id] : void 0
                    }
                }, set: function (a, b) {
                    return l(this,
                        a, b)
                }
            } : {
                add: function (a) {
                    return l(this, a, !0)
                }
            }), g
        }
    }, kp = (kb(function (a) {
        var b = Sa.enforce, c = !L.ActiveXObject && "ActiveXObject" in L, e = Object.isExtensible, g = function (a) {
            return function () {
                return a(this, arguments.length ? arguments[0] : void 0)
            }
        };
        a = a.exports = Vi("WeakMap", g, il);
        if (Ti && c) {
            var h = il.getConstructor(g, "WeakMap", !0);
            de.REQUIRED = !0;
            c = a.prototype;
            var l = c.delete, k = c.has, m = c.get, n = c.set;
            Gc(c, {
                delete: function (a) {
                    if (qa(a) && !e(a)) {
                        var c = b(this);
                        return c.frozen || (c.frozen = new h), l.call(this, a) || c.frozen.delete(a)
                    }
                    return l.call(this,
                        a)
                }, has: function (a) {
                    if (qa(a) && !e(a)) {
                        var c = b(this);
                        return c.frozen || (c.frozen = new h), k.call(this, a) || c.frozen.has(a)
                    }
                    return k.call(this, a)
                }, get: function (a) {
                    if (qa(a) && !e(a)) {
                        var c = b(this);
                        return c.frozen || (c.frozen = new h), k.call(this, a) ? m.call(this, a) : c.frozen.get(a)
                    }
                    return m.call(this, a)
                }, set: function (a, c) {
                    if (qa(a) && !e(a)) {
                        var g = b(this);
                        g.frozen || (g.frozen = new h);
                        k.call(this, a) ? n.call(this, a, c) : g.frozen.set(a, c)
                    } else n.call(this, a, c);
                    return this
                }
            })
        }
    }), Math.min), zg = [].lastIndexOf, jl = !!zg && 0 > 1 / [1].lastIndexOf(1,
        -0), lp = kc("lastIndexOf"), kl = jl || lp ? function (a) {
        if (jl) return zg.apply(this, arguments) || 0;
        var b = eb(this), c = fb(b.length), e = c - 1;
        1 < arguments.length && (e = kp(e, ed(arguments[1])));
        for (0 > e && (e = c + e); 0 <= e; e--) if (e in b && b[e] === a) return e || 0;
        return -1
    } : zg;
    M({target: "Array", proto: !0, forced: kl !== [].lastIndexOf}, {lastIndexOf: kl});
    var mp = ua("Array").lastIndexOf, ll = Array.prototype, gm = function (a) {
        var b = a.lastIndexOf;
        return a === ll || a instanceof Array && b === ll.lastIndexOf ? mp : b
    };
    let im = () => function (a) {
            var b;
            a = B(b = window.atob(a).split("")).call(b,
                a => a.charCodeAt(0));
            return new Uint8Array(a, 0, a.length / Uint8Array.BYTES_PER_ELEMENT)
        }("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AAA2AkAgACgCKCABKAJMQQIgACgCIBEAACECIAFBADYCwC0gASACNgJEIAFBgAg2ApwtIAEgACgCKEGACEEEIAAoAiARAAAiAjYCCCABIAEoApwtIgNBAnQ2AgwCQAJAIAEoAjhFDQAgASgCQEUNACACRQ0AIAEoAkQNAQsgAUGaBTYCBCAAQbjfACgCADYCGCAAEAgPCyABQQA2AogBIAFBCTYChAEgAUEIOgAkIAEgAiADQQNsajYCmC0gASACIANBfnFqNgKkLSAAEAkNACAAKAIcIgAgACgCLEEBdDYCPCAAKAJEIgEgACgCTEEBdEECayIDakEAOwEAIAEgAxAgIABBADYCtC0gAEKAgICAIDcCdCAAQgA3AmggAEKAgICAIDcCXCAAQQA2AkggACAAKAKEAUEMbCIBQYTIAGovAQA2ApABIAAgAUGAyABqLwEANgKMASAAIAFBgsgAai8BADYCgAEgACABQYbIAGovAQA2AnwLC6kCAQN/AkAgAEUNACAAKAIgRQ0AIAAoAiQiA0UNACAAKAIcIgFFDQAgASgCACAARw0AAkACQCABKAIEIgJBOWsOOQECAgICAgICAgICAgECAgIBAgICAgICAgICAgICAgICAgIBAgICAgICAgICAgIBAgICAgICAgICAQALIAJBmgVGDQAgAkEqRw0BCwJ/An8CfyABKAIIIgIEQCAAKAIoIAIgAxECACAAKAIcIQELIAEoAkQiAgsEQCAAKAIoIAIgACgCJBECACAAKAIcIQELIAEoAkAiAgsEQCAAKAIoIAIgACgCJBECACAAKAIcIQELIAEoAjgiAgsEQCAAKAIoIAIgACgCJBECACAAKAIcIQELIAAoAiggASAAKAIkEQIAIABBADYCHAsLlgIBA39BfiECAkAgAEUNACAAKAIgRQ0AIAAoAiRFDQAgACgCHCIBRQ0AIAEoAgAgAEcNAAJAAkAgASgCBCIDQTlrDjkBAgICAgICAgICAgIBAgICAQICAgICAgICAgICAgICAgICAQICAgICAgICAgICAQICAgICAgICAgEACyADQZoFRg0AIANBKkcNAQsgAEECNgIsIABBADYCCCAAQgA3AhQgAUEANgIUIAEgASgCCDYCECABKAIYIgJBf0wEQCABQQAgAmsiAjYCGAsgAUE5QSpB8QAgAhsgAkECRhs2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KAIIaiACQR9wIAJyQR9zOgAAIAEoAmwEQCAAKAIwIQIgASABKAIUIgNBAWo2AhQgAyABKAIIaiACQRh2OgAAIAEgASgCFCIDQQFqNgIUIAMgASgCCGogAkEQdjoAACAAKAIwIQIgASABKAIUIgNBAWo2AhQgAyABKAIIaiACQQh2OgAAIAEgASgCFCIDQQFqNgIUIAMgASgCCGogAjoAAAsgAEEAQQBBABAENgIwIAFB8QA2AgQgACgCHCICEBMCQCAAKAIQIgMgAigCFCIEIAMgBEkbIgNFDQAgACgCDCACKAIQIAMQHxogACAAKAIMIANqNgIMIAIgAigCECADajYCECAAIAAoAhQgA2o2AhQgACAAKAIQIANrNgIQIAIgAigCFCADayIDNgIUIAMNACACIAIoAgg2AhALIAEoAhQNBCABKAIEIQMLAkACQAJAAkACQAJAAkAgA0E5RgR/IABBAEEAQQAQBjYCMCABIAEoAhQiAkEBajYCFCACIAEoAghqQR86AAAgASABKAIUIgJBAWo2AhQgAiABKAIIakGLAToAACABIAEoAhQiAkEBajYCFCACIAEoAghqQQg6AAAgASgCHCICDQIgASABKAIUIgJBAWo2AhQgAiABKAIIakEAOgAAIAEgASgCFCICQQFqNgIUIAIgASgCCGpBADoAACABIAEoAhQiAkEBajYCFCACIAEoAghqQQA6AAAgASABKAIUIgJBAWo2AhQgAiABKAIIakEAOgAAIAEgASgCFCICQQFqNgIUIAIgASgCCGpBADoAAEECIQIgASgChAEiA0EJRwRAQQQgASgCiAFBAUpBAnQgA0ECSBshAgsgASABKAIUIgNBAWo2AhQgAyABKAIIaiACOgAAIAEgASgCFCICQQFqNgIUIAIgASgCCGpBAzoAACABQfEANgIEIAAoAhwiAhATAkAgACgCECIDIAIoAhQiBCADIARJGyIDRQ0AIAAoAgwgAigCECADEB8aIAAgACgCDCADajYCDCACIAIoAhAgA2o2AhAgACAAKAIUIANqNgIUIAAgACgCECADazYCECACIAIoAhQgA2siAzYCFCADDQAgAiACKAIINgIQCyABKAIUDQEgASgCBAUgAwtBxQBrDiMCBgYGAwYGBgYGBgYGBgYGBgYGBgYGBAYGBgYGBgYGBgYGBQYLIAFBfzYCKA8LIAIoAiQhAyACKAIcIQQgAigCECEFIAIoAiwhBiACKAIAIQggASABKAIUIgdBAWo2AhRBAiECIAcgASgCCGogBkEAR0EBdCAIQQBHciAFQQBHQQJ0ciAEQQBHQQN0ciADQQBHQQR0cjoAACABKAIcKAIEIQMgASABKAIUIgRBAWo2AhQgBCABKAIIaiADOgAAIAEoAhwoAgQhAyABIAEoAhQiBEEBajYCFCAEIAEoAghqIANBCHY6AAAgASgCHC8BBiEDIAEgASgCFCIEQQFqNgIUIAQgASgCCGogAzoAACABKAIcLQAHIQMgASABKAIUIgRBAWo2AhQgBCABKAIIaiADOgAAIAEoAoQBIgNBCUcEQEEEIAEoAogBQQFKQQJ0IANBAkgbIQILIAEgASgCFCIDQQFqNgIUIAMgASgCCGogAjoAACABKAIcKAIMIQIgASABKAIUIgNBAWo2AhQgAyABKAIIaiACOgAAIAEoAhwiAigCEAR/IAIoAhQhAiABIAEoAhQiA0EBajYCFCADIAEoAghqIAI6AAAgASgCHCgCFCECIAEgASgCFCIDQQFqNgIUIAMgASgCCGogAkEIdjoAACABKAIcBSACCygCLARAIAAgACgCMCABKAIIIAEoAhQQBjYCMAsgAUHFADYCBCABQQA2AiALIAEoAhwiBCgCECIDBEAgASgCFCICIAQvARQgASgCICIGayIFaiABKAIMIgRLBEADQCABKAIIIAJqIAMgBmogBCACayIEEB8aIAEgASgCDCIDNgIUAkAgAiADTw0AIAEoAhwoAixFDQAgACAAKAIwIAEoAgggAmogAyACaxAGNgIwCyABIAEoAiAgBGo2AiAgACgCHCICEBMCQCAAKAIQIgMgAigCFCIGIAMgBkkbIgNFDQAgACgCDCACKAIQIAMQHxogACAAKAIMIANqNgIMIAIgAigCECADajYCECAAIAAoAhQgA2o2AhQgACAAKAIQIANrNgIQIAIgAigCFCADayIDNgIUIAMNACACIAIoAgg2AhALIAEoAhQEQCABQX82AigPCyABKAIgIQYgASgCHCgCECEDQQAhAiAFIARrIgUgASgCDCIESw0ACwsgASgCCCACaiADIAZqIAUQHxogASABKAIUIAVqIgM2AhQCQCACIANPDQAgASgCHCgCLEUNACAAIAAoAjAgASgCCCACaiADIAJrEAY2AjALIAFBADYCIAsgAUHJADYCBAsgASgCHCgCHARAIAEoAhQiAiEFA0ACQCACIAEoAgxHDQACQCACIAVNDQAgASgCHCgCLEUNACAAIAAoAjAgASgCCCAFaiACIAVrEAY2AjALIAAoAhwiAhATAkAgACgCECIDIAIoAhQiBCADIARJGyIDRQ0AIAAoAgwgAigCECADEB8aIAAgACgCDCADajYCDCACIAIoAhAgA2o2AhAgACAAKAIUIANqNgIUIAAgACgCECADazYCECACIAIoAhQgA2siAzYCFCADDQAgAiACKAIINgIQC0EAIQJBACEFIAEoAhRFDQAgAUF/NgIoDwsgASgCHCgCHCEDIAEgASgCICIEQQFqNgIgIAMgBGotAAAhAyABIAJBAWo2AhQgASgCCCACaiADOgAAIAMEQCABKAIUIQIMAQsLAkAgASgCHCgCLEUNACABKAIUIgIgBU0NACAAIAAoAjAgASgCCCAFaiACIAVrEAY2AjALIAFBADYCIAsgAUHbADYCBAsCQCABKAIcKAIkRQ0AIAEoAhQiAiEFA0ACQCACIAEoAgxHDQACQCACIAVNDQAgASgCHCgCLEUNACAAIAAoAjAgASgCCCAFaiACIAVrEAY2AjALIAAoAhwiAhATAkAgACgCECIDIAIoAhQiBCADIARJGyIDRQ0AIAAoAgwgAigCECADEB8aIAAgACgCDCADajYCDCACIAIoAhAgA2o2AhAgACAAKAIUIANqNgIUIAAgACgCECADazYCECACIAIoAhQgA2siAzYCFCADDQAgAiACKAIINgIQC0EAIQJBACEFIAEoAhRFDQAgAUF/NgIoDwsgASgCHCgCJCEDIAEgASgCICIEQQFqNgIgIAMgBGotAAAhAyABIAJBAWo2AhQgASgCCCACaiADOgAAIAMEQCABKAIUIQIMAQsLIAEoAhwoAixFDQAgASgCFCICIAVNDQAgACAAKAIwIAEoAgggBWogAiAFaxAGNgIwCyABQecANgIECyABKAIcKAIsBEAgASgCDCABKAIUIgJBAmpJBEAgACgCHCICEBMCQCAAKAIQIgMgAigCFCIEIAMgBEkbIgNFDQAgACgCDCACKAIQIAMQHxogACAAKAIMIANqNgIMIAIgAigCECADajYCECAAIAAoAhQgA2o2AhQgACAAKAIQIANrNgIQIAIgAigCFCADayIDNgIUIAMNACACIAIoAgg2AhALIAEoAhQNBUEAIQILIAAoAjAhAyABIAJBAWo2AhQgASgCCCACaiADOgAAIAAoAjAhAiABIAEoAhQiA0EBajYCFCADIAEoAghqIAJBCHY6AAAgAEEAQQBBABAGNgIwCyABQfEANgIEIAAoAhwiAhATAkAgACgCECIDIAIoAhQiBCADIARJGyIDRQ0AIAAoAgwgAigCECADEB8aIAAgACgCDCADajYCDCACIAIoAhAgA2o2AhAgACAAKAIUIANqNgIUIAAgACgCECADazYCECACIAIoAhQgA2siAzYCFCADDQAgAiACKAIINgIQCyABKAIURQ0AIAFBfzYCKA8LIAAoAgQNAQsgASgCdA0AIAEoAgRBmgVGDQgLIAEoAoQBIgJFBEAgAUEDEAwMBAsCQAJAIAEoAogBQQJrDgIAAQQLA0ACQAJAIAEoAnQNACABEAogASgCdA0AIAFBADYCtC0MAQsgAUEANgJgIAEoAjggASgCbGotAAAhAiABKAKkLSABKAKgLSIDQQF0akEAOwEAIAEgA0EBajYCoC0gAyABKAKYLWogAjoAACABIAJBAnRqQZQBaiICIAIvAQBBAWo7AQAgASABKAJ0QQFrNgJ0IAEgASgCbEEBaiICNgJsIAEoAqAtIAEoApwtQQFrRw0BIAEgASgCXCIEQQBOBH8gASgCOCAEagVBAAsgAiAEa0EAEBQgASABKAJsNgJcIAEoAgAiAigCHCIDEBMCQCACKAIQIgQgAygCFCIFIAQgBUkbIgRFDQAgAigCDCADKAIQIAQQHxogAiACKAIMIARqNgIMIAMgAygCECAEajYCECACIAIoAhQgBGo2AhQgAiACKAIQIARrNgIQIAMgAygCFCAEayICNgIUIAINACADIAMoAgg2AhALIAEoAgAoAhANAQwHCwsgASgCoC1FDQcgASABKAJcIgNBAE4EfyABKAI4IANqBUEACyABKAJsIANrQQAQFCABIAEoAmw2AlwgASgCACICKAIcIgMQEwJAIAIoAhAiBCADKAIUIgUgBCAFSRsiBEUNACACKAIMIAMoAhAgBBAfGiACIAIoAgwgBGo2AgwgAyADKAIQIARqNgIQIAIgAigCFCAEajYCFCACIAIoAhAgBGs2AhAgAyADKAIUIARrIgI2AhQgAg0AIAMgAygCCDYCEAsgASgCACgCEEUNBQwHCwNAAkACQAJAIAEoAnQiAkGDAk8EQCABQQA2AmAMAQsgARAKIAEoAnQiAgRAIAFBADYCYCACQQJLDQEgASgCbCEDDAILIAFBADYCtC0gASgCoC1FDQogASABKAJcIgNBAE4EfyABKAI4IANqBUEACyABKAJsIANrQQAQFCABIAEoAmw2AlwgASgCACICKAIcIgMQEwJAIAIoAhAiBCADKAIUIgUgBCAFSRsiBEUNACACKAIMIAMoAhAgBBAfGiACIAIoAgwgBGo2AgwgAyADKAIQIARqNgIQIAIgAigCFCAEajYCFCACIAIoAhAgBGs2AhAgAyADKAIUIARrIgI2AhQgAg0AIAMgAygCCDYCEAsgASgCACgCEEUNCAwKCyABKAJsIgNFBEBBACEDDAELIAEoAjggA2oiBkEBayIFLQAAIgQgBi0AAEcNACAEIAUtAAJHDQAgBCAFLQADRw0AIAZBggJqIQlBfyEIAkACQAJAAkACQAJAA0AgBiAIaiIFLQAEIARGBEAgBCAFLQAFRw0CIAQgBS0ABkcNAyAEIAUtAAdHDQQgBCAGIAhBCGoiCmoiBy0AAEcNByAEIAUtAAlHDQUgBCAFLQAKRw0GIAVBC2ohByAIQfYBSg0HIAohCCAEIActAABGDQEMBwsLIAVBBGohBwwFCyAFQQVqIQcMBAsgBUEGaiEHDAMLIAVBB2ohBwwCCyAFQQlqIQcMAQsgBUEKaiEHCyABIAIgByAJa0GCAmoiBCACIARJGyICNgJgIAJBA0kNACABKAKkLSABKAKgLSIDQQF0akEBOwEAIAEgA0EBajYCoC0gAyABKAKYLWogAkEDayICOgAAIAJB/wFxQYDNAGotAABBAnQgAWpBmAlqIgIgAi8BAEEBajsBACABQYDJAC0AAEECdGpBiBNqIgIgAi8BAEEBajsBACABKAJgIQIgAUEANgJgIAEgASgCdCACazYCdCABIAIgASgCbGoiAjYCbCABKAKgLSABKAKcLUEBa0cNAgwBCyABKAI4IANqLQAAIQIgASgCpC0gASgCoC0iA0EBdGpBADsBACABIANBAWo2AqAtIAMgASgCmC1qIAI6AAAgASACQQJ0akGUAWoiAiACLwEAQQFqOwEAIAEgASgCdEEBazYCdCABIAEoAmxBAWoiAjYCbCABKAKgLSABKAKcLUEBa0cNAQsgASABKAJcIgRBAE4EfyABKAI4IARqBUEACyACIARrQQAQFCABIAEoAmw2AlwgASgCACICKAIcIgMQEwJAIAIoAhAiBCADKAIUIgUgBCAFSRsiBEUNACACKAIMIAMoAhAgBBAfGiACIAIoAgwgBGo2AgwgAyADKAIQIARqNgIQIAIgAigCFCAEajYCFCACIAIoAhAgBGs2AhAgAyADKAIUIARrIgI2AhQgAg0AIAMgAygCCDYCEAsgASgCACgCEA0ACwwECyABQX82AigPCyABQX82AigPCyABQQMgAkEMbEGIyABqKAIAEQQACyICQX5xQQJGBEAgAUGaBTYCBAsgAkF9cQ0BCyAAKAIQDQMgAUF/NgIoDwsgAkEBRw0BCyABQQBBAEEAEBIgASgCRCICIAEoAkxBAXRBAmsiA2pBADsBACACIAMQICABKAJ0RQRAIAFBADYCtC0gAUEANgJcIAFBADYCbAsgACgCHCICEBMCQCAAKAIQIgQgAigCFCIDIAMgBEsbIgNFDQAgACgCDCACKAIQIAMQHxogACAAKAIMIANqNgIMIAIgAigCECADajYCECAAIAAoAhQgA2o2AhQgACAAKAIQIANrIgQ2AhAgAiACKAIUIANrIgM2AhQgAw0AIAIgAigCCDYCEAsgBA0AIAFBfzYCKAsLC7YNAQt/IAAoAgAiBCgCBCEJQQEhCAJAIAQoAhAiAyAAKAK8LUEqakEDdSICSQ0AIAAoAiwiBSAAKAIMQQVrIgYgBSAGSRshCiABQQRHIQsDQCAKIAMgAmsiAyAAKAJsIAAoAlxrIgYgBCgCBGoiAkH//wMgAkH//wNJGyIFIAMgBUkbIgNLBEAgAiADRw0CIAFFDQIgCyADRXENAgsgAEEAQQAgAUEERiACIANGcSIHEBIgACgCFCAAKAIIakEEayADOgAAIAAoAhQgACgCCGpBA2sgA0EIdjoAACAAKAIUIAAoAghqQQJrIANBf3MiAjoAACAAKAIUIAAoAghqQQFrIAJBCHY6AAAgACgCACICKAIcIgQQEwJAIAIoAhAiBSAEKAIUIgwgBSAMSRsiBUUNACACKAIMIAQoAhAgBRAfGiACIAIoAgwgBWo2AgwgBCAEKAIQIAVqNgIQIAIgAigCFCAFajYCFCACIAIoAhAgBWs2AhAgBCAEKAIUIAVrIgI2AhQgAg0AIAQgBCgCCDYCEAsCfyAGBEAgACgCACgCDCAAKAI4IAAoAlxqIAMgBiADIAZJGyICEB8aIAAoAgAiBCAEKAIMIAJqNgIMIAQgBCgCECACazYCECAEIAQoAhQgAmo2AhQgACAAKAJcIAJqNgJcIAMgAmshAwsgAwsEQCAAKAIAIgIoAgwhBSADIAIoAgQiBiADIAZJGyIEBEAgAiAGIARrNgIEIAUgAigCACAEEB8hBQJAAkACQCACKAIcKAIYQQFrDgIAAQILIAIgAigCMCAFIAQQBDYCMAwBCyACIAIoAjAgBSAEEAY2AjALIAIgAigCACAEajYCACACIAIoAgggBGo2AgggACgCACICKAIMIQULIAIgAyAFajYCDCACIAIoAhAgA2s2AhAgAiACKAIUIANqNgIUCyAAKAIAIQQgBwRAQQAhCAwCCyAEKAIQIgMgACgCvC1BKmpBA3UiAk8NAAsLAkAgCSAEKAIEayIDRQRAIAAoAmwhAgwBCwJAIAAoAiwiAiADTQRAIABBAjYCsC0gACgCOCAEKAIAIAJrIAIQHxogACAAKAIsIgQ2AmwgBCECDAELAkAgACgCPCAAKAJsIgRrIANLDQAgACAEIAJrIgQ2AmwgACgCOCIFIAIgBWogBBAfGiAAKAKwLSICQQFLDQAgACACQQFqNgKwLQsgACgCOCAAKAJsaiAAKAIAKAIAIANrIAMQHxogACAAKAJsIANqIgI2AmwgACgCLCEECyAAIAI2AlwgACAEIAAoArQtIgVrIgQgAyADIARLGyAFajYCtC0LIAIgACgCwC1LBEAgACACNgLALQtBAyEDAkAgCEUNACAAKAIAIgQoAgQhAwJAAkAgAUF7cUUNACADDQBBASEDIAIgACgCXEYNAiAAKAI8IAJBf3NqIQVBACEDDAELIAMgACgCPCACQX9zaiIFTQ0AIAAoAlwiByAAKAIsIgZIDQAgACACIAZrIgM2AmwgACAHIAZrNgJcIAAoAjgiAiACIAZqIAMQHxogACgCsC0iA0EBTQRAIAAgA0EBajYCsC0LIAAoAiwgBWohBSAAKAIAIgQoAgQhAwsCQCADIAUgAyAFSRsiAkUEQCAAKAJsIQMMAQsgACgCbCEFIAAoAjghBiAEIAMgAms2AgQgBSAGaiAEKAIAIAIQHyEDAkACQAJAIAQoAhwoAhhBAWsOAgABAgsgBCAEKAIwIAMgAhAENgIwDAELIAQgBCgCMCADIAIQBjYCMAsgBCAEKAIAIAJqNgIAIAQgBCgCCCACajYCCCAAIAAoAmwgAmoiAzYCbAsgAyAAKALALUsEQCAAIAM2AsAtCyADIAAoAlwiBmsiBCAAKAIsIgMgACgCDCAAKAK8LUEqakEDdWsiAkH//wMgAkH//wNJGyICIAIgA0sbSQRAQQAhAyABRQ0BIAFBBEYgBEEAR3JFDQEgAiAESQ0BIAAoAgAoAgQNAQtBACEFIAAgACgCOCAGaiACIAQgAiAESRsiAwJ/IAFBBEYEQCAAKAIAKAIERSACIARPcSEFCyAFCxASIAAgACgCXCADajYCXCAAKAIAIgAoAhwiAxATAkAgACgCECICIAMoAhQiBCACIARJGyICRQ0AIAAoAgwgAygCECACEB8aIAAgACgCDCACajYCDCADIAMoAhAgAmo2AhAgACAAKAIUIAJqNgIUIAAgACgCECACazYCECADIAMoAhQgAmsiADYCFCAADQAgAyADKAIINgIQC0ECQQAgBRshAwsgAwu5CwENfwJAA0ACQAJAIAAoAnRBhQJNBEAgABAKIAAoAnQhAgJAIAENACACQYYCTw0AQQAPCyACRQ0EIAJBA0kNAQsgACAAKAJUIAAoAmwiAiAAKAI4ai0AAiAAKAJIIAAoAlh0c3EiAzYCSCAAKAJAIAIgACgCNHFBAXRqIAAoAkQgA0EBdGoiBC8BACIDOwEAIAQgAjsBACADRQ0AIAAoAixBhgJrIAIgA2tJDQAgACAAIAMQDiICNgJgDAELIAAoAmAhAgsCQCACQQNPBEAgACgCpC0gACgCoC0iA0EBdGogACgCbCAAKAJwayIEOwEAIAAgA0EBajYCoC0gAyAAKAKYLWogAkEDayICOgAAIAJB/wFxQYDNAGotAABBAnQgAGpBmAlqIgIgAi8BAEEBajsBACAAIARBAWtB//8DcSICIAJBB3ZBgAJqIAJBgAJJG0GAyQBqLQAAQQJ0akGIE2oiAiACLwEAQQFqOwEAIAAgACgCdCAAKAJgIgJrIgM2AnQgACgCnC1BAWshBiAAKAKgLSEHAkAgA0EDSQ0AIAIgACgCgAFLDQAgACACQQFrIgM2AmAgACgCSCEEIAAoAmwhAiAAKAI0IQggACgCQCEJIAAoAkQhCiAAKAJUIQsgACgCOCEMIAAoAlghDQNAIAAgAiIFQQFqIgI2AmwgACAFIAxqLQADIAQgDXRzIAtxIgQ2AkggCSACIAhxQQF0aiAKIARBAXRqIg4vAQA7AQAgDiACOwEAIAAgA0EBayIDNgJgIAMNAAsgACAFQQJqIgI2AmwgBiAHRw0DDAILIABBADYCYCAAIAAoAmwgAmoiAjYCbCAAIAAoAjggAmoiAy0AACIENgJIIAAgACgCVCADLQABIAQgACgCWHRzcTYCSCAGIAdHDQIMAQsgACgCOCAAKAJsai0AACECIAAoAqQtIAAoAqAtIgNBAXRqQQA7AQAgACADQQFqNgKgLSADIAAoApgtaiACOgAAIAAgAkECdGpBlAFqIgIgAi8BAEEBajsBACAAIAAoAnRBAWs2AnQgACAAKAJsQQFqIgI2AmwgACgCoC0gACgCnC1BAWtHDQELQQAhAyAAIAAoAlwiBEEATgR/IAAoAjggBGoFIAMLIAIgBGtBABAUIAAgACgCbDYCXCAAKAIAIgIoAhwiAxATAkAgAigCECIEIAMoAhQiBSAEIAVJGyIERQ0AIAIoAgwgAygCECAEEB8aIAIgAigCDCAEajYCDCADIAMoAhAgBGo2AhAgAiACKAIUIARqNgIUIAIgAigCECAEazYCECADIAMoAhQgBGsiAjYCFCACDQAgAyADKAIINgIQCyAAKAIAKAIQDQALQQAPCyAAIAAoAmwiAkECIAJBAkkbNgK0LSABQQRGBEBBACEDIAAgACgCXCIEQQBOBH8gACgCOCAEagUgAwsgAiAEa0EBEBQgACAAKAJsNgJcIAAoAgAiAigCHCIDEBMCQCACKAIQIgQgAygCFCIFIAQgBUkbIgRFDQAgAigCDCADKAIQIAQQHxogAiACKAIMIARqNgIMIAMgAygCECAEajYCECACIAIoAhQgBGo2AhQgAiACKAIQIARrNgIQIAMgAygCFCAEayICNgIUIAINACADIAMoAgg2AhALQQNBAiAAKAIAKAIQGw8LAkAgACgCoC1FDQBBACEDIAAgACgCXCIEQQBOBH8gACgCOCAEagUgAwsgAiAEa0EAEBQgACAAKAJsNgJcIAAoAgAiAigCHCIDEBMCQCACKAIQIgQgAygCFCIFIAQgBUkbIgRFDQAgAigCDCADKAIQIAQQHxogAiACKAIMIARqNgIMIAMgAygCECAEajYCECACIAIoAhQgBGo2AhQgAiACKAIQIARrNgIQIAMgAygCFCAEayICNgIUIAINACADIAMoAgg2AhALIAAoAgAoAhANAEEADwtBAQukBAEQfyAAKAJ8IgMgA0ECdiAAKAJ4IgQgACgCjAFJGyEJQQAgACgCbCIDIAAoAixrQYYCaiICIAIgA0sbIQwgACgCdCIHIAAoApABIgIgAiAHSxshDSAAKAI4Ig4gA2oiBUGCAmohDyAEIAVqIgMtAAAhCiADQQFrLQAAIQsgACgCNCEQIAAoAkAhEQNAAkACQCABIA5qIgMgBGoiAi0AACAKRw0AIAJBAWstAAAgC0cNACADLQAAIAUtAABHDQBBAiEGIAMtAAEgBS0AAUcNAAJAAkACQAJAAkACQAJAA0AgBSAGaiICLQABIAMtAANHDQYgAi0AAiADLQAERw0FIAItAAMgAy0ABUcNBCACLQAEIAMtAAZHDQMgAi0ABSADLQAHRw0CIAItAAYgAy0ACEcNASACLQAHIAMtAAlGBEAgBkH5AUshCCAFIAZBCGoiBmohAiAIDQggAy0ACiEIIANBCGohAyACLQAAIAhGDQEMCAsLIAJBB2ohAgwGCyACQQZqIQIMBQsgAkEFaiECDAQLIAJBBGohAgwDCyACQQNqIQIMAgsgAkECaiECDAELIAJBAWohAgsgAiAPayICQYICaiIDIARMDQAgACABNgJwIAMgDU4EQCADIQQMAgsgAyAFai0AACEKIAIgBWotAIECIQsgAyEECyAJQQFrIglFDQAgDCARIAEgEHFBAXRqLwEAIgFJDQELCyAHIAQgBCAHSxsL3Q4BB38DQAJAAkACQCAAKAJ0QYUCSw0AIAAQCiAAKAJ0IQICQCABDQAgAkGGAk8NAEEADwsgAkUNAiACQQJLDQAgACAAKAJgIgI2AnggACAAKAJwNgJkQQIhAyAAQQI2AmAMAQtBAiEDIAAgACgCVCAAKAJsIgIgACgCOGotAAIgACgCSCAAKAJYdHNxIgQ2AkggACgCQCACIAAoAjRxQQF0aiAAKAJEIARBAXRqIgUvAQAiBDsBACAFIAI7AQAgACAAKAJgIgI2AnggACAAKAJwNgJkIABBAjYCYCAERQ0AAkAgAiAAKAKAAU8NACAAKAIsQYYCayAAKAJsIARrSQ0AIAAgACAEEA4iAzYCYCADQQVLDQAgACgCiAFBAUcEQCADQQNHDQFBAyEDIAAoAmwgACgCcGtBgSBJDQELQQIhAyAAQQI2AmALIAAoAnghAgsCQCACQQNJDQAgAiADSQ0AIAAoAnQhBCAAKAKkLSAAKAKgLSIDQQF0aiAAKAJsIgUgACgCZEF/c2oiBjsBACAAIANBAWo2AqAtIAMgACgCmC1qIAJBA2siAjoAACACQf8BcUGAzQBqLQAAQQJ0IABqQZgJaiICIAIvAQBBAWo7AQAgACAGQQFrQf//A3EiAiACQQd2QYACaiACQYACSRtBgMkAai0AAEECdGpBiBNqIgIgAi8BAEEBajsBACAAIAAoAngiAkECayIDNgJ4IAAgACgCdCACa0EBajYCdCAEIAVqQQNrIQUgACgCnC1BAWshByAAKAJsIQIgACgCoC0hCANAIAAgAiIEQQFqIgI2AmwgAiAFTQRAIAAgACgCVCAEIAAoAjhqLQADIAAoAkggACgCWHRzcSIGNgJIIAAoAkAgACgCNCACcUEBdGogACgCRCAGQQF0aiIGLwEAOwEAIAYgAjsBAAsgACADQQFrIgM2AnggAw0ACyAAQQI2AmAgAEEANgJoIAAgBEECaiICNgJsIAcgCEcNAkEAIQMgACAAKAJcIgRBAE4EfyAAKAI4IARqBSADCyACIARrQQAQFCAAIAAoAmw2AlwgACgCACICKAIcIgMQEwJAIAIoAhAiBCADKAIUIgUgBCAFSRsiBEUNACACKAIMIAMoAhAgBBAfGiACIAIoAgwgBGo2AgwgAyADKAIQIARqNgIQIAIgAigCFCAEajYCFCACIAIoAhAgBGs2AhAgAyADKAIUIARrIgI2AhQgAg0AIAMgAygCCDYCEAsgACgCACgCEA0CQQAPCyAAKAJoBEAgACgCbCAAKAI4akEBay0AACECIAAoAqQtIAAoAqAtIgNBAXRqQQA7AQAgACADQQFqNgKgLSADIAAoApgtaiACOgAAIAAgAkECdGpBlAFqIgIgAi8BAEEBajsBAAJAIAAoAqAtIAAoApwtQQFrRw0AQQAhAyAAIAAoAlwiAkEATgR/IAAoAjggAmoFIAMLIAAoAmwgAmtBABAUIAAgACgCbDYCXCAAKAIAIgIoAhwiAxATIAIoAhAiBCADKAIUIgUgBCAFSRsiBEUNACACKAIMIAMoAhAgBBAfGiACIAIoAgwgBGo2AgwgAyADKAIQIARqNgIQIAIgAigCFCAEajYCFCACIAIoAhAgBGs2AhAgAyADKAIUIARrIgI2AhQgAg0AIAMgAygCCDYCEAsgACAAKAJsQQFqNgJsIAAgACgCdEEBazYCdCAAKAIAKAIQDQJBAA8FIABBATYCaCAAIAAoAmxBAWo2AmwgACAAKAJ0QQFrNgJ0DAILAAsLIAAoAmgEQCAAKAJsIAAoAjhqQQFrLQAAIQIgACgCpC0gACgCoC0iA0EBdGpBADsBACAAIANBAWo2AqAtIAMgACgCmC1qIAI6AAAgACACQQJ0akGUAWoiAiACLwEAQQFqOwEAIABBADYCaAsgACAAKAJsIgJBAiACQQJJGzYCtC0gAUEERgRAQQAhAyAAIAAoAlwiBEEATgR/IAAoAjggBGoFIAMLIAIgBGtBARAUIAAgACgCbDYCXCAAKAIAIgIoAhwiAxATAkAgAigCECIEIAMoAhQiBSAEIAVJGyIERQ0AIAIoAgwgAygCECAEEB8aIAIgAigCDCAEajYCDCADIAMoAhAgBGo2AhAgAiACKAIUIARqNgIUIAIgAigCECAEazYCECADIAMoAhQgBGsiAjYCFCACDQAgAyADKAIINgIQC0EDQQIgACgCACgCEBsPCwJAIAAoAqAtRQ0AQQAhAyAAIAAoAlwiBEEATgR/IAAoAjggBGoFIAMLIAIgBGtBABAUIAAgACgCbDYCXCAAKAIAIgIoAhwiAxATAkAgAigCECIEIAMoAhQiBSAEIAVJGyIERQ0AIAIoAgwgAygCECAEEB8aIAIgAigCDCAEajYCDCADIAMoAhAgBGo2AhAgAiACKAIUIARqNgIUIAIgAigCECAEazYCECADIAMoAhQgBGsiAjYCFCACDQAgAyADKAIINgIQCyAAKAIAKAIQDQBBAA8LQQELYQAgAEEANgK8LSAAQQA7AbgtIABBuBZqQajPADYCACAAIABB/BRqNgKwFiAAQawWakGUzwA2AgAgACAAQYgTajYCpBYgAEGgFmpBgM8ANgIAIAAgAEGUAWo2ApgWIAAQEQvwBAEDfyAAQZQBaiECA0AgAiABQQJ0IgNqQQA7AQAgAiADQQRyakEAOwEAIAFBAmoiAUGeAkcNAAsgAEEAOwH8FCAAQQA7AYgTIABBxBVqQQA7AQAgAEHAFWpBADsBACAAQbwVakEAOwEAIABBuBVqQQA7AQAgAEG0FWpBADsBACAAQbAVakEAOwEAIABBrBVqQQA7AQAgAEGoFWpBADsBACAAQaQVakEAOwEAIABBoBVqQQA7AQAgAEGcFWpBADsBACAAQZgVakEAOwEAIABBlBVqQQA7AQAgAEGQFWpBADsBACAAQYwVakEAOwEAIABBiBVqQQA7AQAgAEGEFWpBADsBACAAQYAVakEAOwEAIABB/BNqQQA7AQAgAEH4E2pBADsBACAAQfQTakEAOwEAIABB8BNqQQA7AQAgAEHsE2pBADsBACAAQegTakEAOwEAIABB5BNqQQA7AQAgAEHgE2pBADsBACAAQdwTakEAOwEAIABB2BNqQQA7AQAgAEHUE2pBADsBACAAQdATakEAOwEAIABBzBNqQQA7AQAgAEHIE2pBADsBACAAQcQTakEAOwEAIABBwBNqQQA7AQAgAEG8E2pBADsBACAAQbgTakEAOwEAIABBtBNqQQA7AQAgAEGwE2pBADsBACAAQawTakEAOwEAIABBqBNqQQA7AQAgAEGkE2pBADsBACAAQaATakEAOwEAIABBnBNqQQA7AQAgAEGYE2pBADsBACAAQZQTakEAOwEAIABBkBNqQQA7AQAgAEGME2pBADsBACAAQgA3AqwtIABBlAlqQQE7AQAgAEEANgKoLSAAQQA2AqAtC7IDAQJ/IAAgAC8BuC0gA0H//wNxIgUgACgCvC0iBHRyIgM7AbgtAkACQAJ/IARBDk4EQCAAIAAoAhQiBEEBajYCFCAEIAAoAghqIAM6AAAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiAAQbktai0AADoAACAAIAVBECAAKAK8LSIEa3YiAzsBuC0gBEENawwBCyAEQQNqCyIEQQlOBEAgACAAKAIUIgRBAWo2AhQgBCAAKAIIaiADOgAAIAAgACgCFCIDQQFqNgIUIAMgACgCCGohBCAAQbktai0AACEDDAELIARBAUgNASAAIAAoAhQiBEEBajYCFCAEIAAoAghqIQQLIAQgAzoAAAsgAEEANgK8LSAAQQA7AbgtIAAgACgCFCIDQQFqNgIUIAMgACgCCGogAjoAACAAIAAoAhQiA0EBajYCFCADIAAoAghqIAJBCHY6AAAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiACQX9zIgM6AAAgACAAKAIUIgRBAWo2AhQgBCAAKAIIaiADQQh2OgAAIAAoAgggACgCFGogASACEB8aIAAgACgCFCACajYCFAusAQEBfwJAIAACfyAAKAK8LSIBQRBGBEAgACAAKAIUIgFBAWo2AhQgASAAKAIIaiAALQC4LToAACAAIAAoAhQiAUEBajYCFCABIAAoAghqIABBuS1qLQAAOgAAIABBADsBuC1BAAwBCyABQQhIDQEgACAAKAIUIgFBAWo2AhQgASAAKAIIaiAALQC4LToAACAAIABBuS1qLQAAOwG4LSAAKAK8LUEIaws2ArwtCwuhEwENfwJ/AkACQAJAIAAoAoQBQQFOBEAgACgCACIGKAIsQQJHDQNB/4D/n38hBANAAkAgBEEBcUUNACAAIAVBAnRqLwGUAUUNAEEAIQQMBAsCQCAEQQJxRQ0AIAAgBUECdEEEcmovAZQBRQ0AQQAhBAwECyAEQQJ2IQQgBUECaiIFQSBHDQALDAELIAJBBWoiBQwDCwJAIAAvAbgBDQAgAC8BvAENACAALwHIAQ0AQSAhBQNAIAAgBUECdCIEai8BlAENASAAIARBBHJqLwGUAQ0BIAAgBEEIcmovAZQBDQEgACAEQQxyai8BlAENAUEAIQQgBUEEaiIFQYACRw0ACwwBC0EBIQQLIAYgBDYCLAsgACAAQZgWahAVIAAgAEGkFmoQFSAALwGWASEEIAAgAEGcFmooAgAiCkECdGpB//8DOwGaASAKQQBOBEBBB0GKASAEGyEJQQRBAyAEGyELIABBwBVqIQ4gAEHEFWohDyAAQbwVaiEQQX8hDANAIAQhBSAAIAgiDUEBaiIIQQJ0ai8BlgEhBAJAAkAgB0EBaiIGIAlODQAgBCAFRw0AIAYhBwwBCwJ/IAYgC0gEQCAAIAVBAnRqQfwUaiIHLwEAIAZqDAELIAUEQCAFIAxHBEAgACAFQQJ0akH8FGoiBiAGLwEAQQFqOwEACyAQIgcvAQBBAWoMAQsgB0EJTARAIA4iBy8BAEEBagwBCyAPIgcvAQBBAWoLIQYgByAGOwEAQQAhBwJ/IARFBEBBAyELQYoBDAELQQNBBCAEIAVGIgYbIQtBBkEHIAYbCyEJIAUhDAsgCiANRw0ACwsgAEGKE2ovAQAhBCAAIABBqBZqKAIAIgpBAnRqQY4TakH//wM7AQBBACEHIApBAE4EQEEHQYoBIAQbIQlBBEEDIAQbIQsgAEHAFWohDiAAQcQVaiEPIABBvBVqIRBBfyEMQQAhCANAIAQhBSAAIAgiDUEBaiIIQQJ0akGKE2ovAQAhBAJAAkAgB0EBaiIGIAlODQAgBCAFRw0AIAYhBwwBCwJ/IAYgC0gEQCAAIAVBAnRqQfwUaiIHLwEAIAZqDAELIAUEQCAFIAxHBEAgACAFQQJ0akH8FGoiBiAGLwEAQQFqOwEACyAQIgcvAQBBAWoMAQsgB0EJTARAIA4iBy8BAEEBagwBCyAPIgcvAQBBAWoLIQYgByAGOwEAQQAhBwJ/IARFBEBBAyELQYoBDAELQQNBBCAEIAVGIgYbIQtBBkEHIAYbCyEJIAUhDAsgCiANRw0ACwsgACAAQbAWahAVIAAgACgCqC0Cf0ESIABBuhVqLwEADQAaQREgAEGCFWovAQANABpBECAAQbYVai8BAA0AGkEPIABBhhVqLwEADQAaQQ4gAEGyFWovAQANABpBDSAAQYoVai8BAA0AGkEMIABBrhVqLwEADQAaQQsgAEGOFWovAQANABpBCiAAQaoVai8BAA0AGkEJIABBkhVqLwEADQAaQQggAEGmFWovAQANABpBByAAQZYVai8BAA0AGkEGIABBohVqLwEADQAaQQUgAEGaFWovAQANABpBBCAAQZ4Vai8BAA0AGkEDQQIgAEH+FGovAQAbCyIIQQNsaiIEQRFqNgKoLSAEQRtqQQN2IgQgACgCrC1BCmpBA3YiBSAEIAVJGwshBAJAAkAgAUUNACACQQRqIARLDQAgACABIAIgAxASDAELIAAoArwtIQYCQCAEIAVHBEAgACgCiAFBBEcNAQsgACAALwG4LSADQQJqQf//A3EiBCAGdHIiBTsBuC0gAAJ/IAZBDk4EQCAAIAAoAhQiBkEBajYCFCAGIAAoAghqIAU6AAAgACAAKAIUIgVBAWo2AhQgBSAAKAIIaiAAQbktai0AADoAACAAIARBECAAKAK8LSIFa3Y7AbgtIAVBDWsMAQsgBkEDags2ArwtIABBwM8AQcDYABAWDAELIAAvAbgtIANBBGpB//8DcSIHIAZ0ciEFAkAgBkEOTgRAIAAgBTsBuC0gACAAKAIUIgRBAWo2AhQgBCAAKAIIaiAFOgAAIAAgACgCFCIEQQFqNgIUIAQgACgCCGogAEG5LWotAAA6AAAgACgCvC0iBUENayEEIAdBECAFa3YhBQwBCyAGQQNqIQQLIAAgBDYCvC0gAEGcFmooAgAiCkGA/gNqQf//A3EiByAEdCEGIABBqBZqKAIAIQkCfyAEQQxOBEAgACAFIAZyIgQ7AbgtIAAgACgCFCIFQQFqNgIUIAUgACgCCGogBDoAACAAIAAoAhQiBEEBajYCFCAEIAAoAghqIABBuS1qLQAAOgAAIAAoArwtIgVBC2shBCAHQRAgBWt2DAELIARBBWohBCAFIAZyCyEFIAAgBDYCvC0gCUH//wNxIgcgBHQhBgJ/IARBDE4EQCAAIAUgBnIiBDsBuC0gACAAKAIUIgVBAWo2AhQgBSAAKAIIaiAEOgAAIAAgACgCFCIEQQFqNgIUIAQgACgCCGogAEG5LWotAAA6AAAgACgCvC0iBUELayEEIAdBECAFa3YMAQsgBEEFaiEEIAUgBnILIQUgACAENgK8LSAIQf3/A2pB//8DcSIHIAR0IQYCfyAEQQ1OBEAgACAFIAZyIgQ7AbgtIAAgACgCFCIFQQFqNgIUIAUgACgCCGogBDoAACAAIAAoAhQiBEEBajYCFCAEIAAoAghqIABBuS1qLQAAOgAAIAAoArwtIgVBDGshBCAHQRAgBWt2DAELIARBBGohBCAFIAZyCyEGIAAgBDYCvC1BACEFIABBuS1qIQ0DQCAAIAYgACAFQZDcAGotAABBAnRqQf4Uai8BACIHIAR0ciIGOwG4LSAAAn8gBEEOTgRAIAAgACgCFCIEQQFqNgIUIAQgACgCCGogBjoAACAAIAAoAhQiBEEBajYCFCAEIAAoAghqIA0tAAA6AAAgACAHQRAgACgCvC0iBGt2IgY7AbgtIARBDWsMAQsgBEEDagsiBDYCvC0gBSAIRyEHIAVBAWohBSAHDQALIAAgAEGUAWoiBCAKEBcgACAAQYgTaiIFIAkQFyAAIAQgBRAWCyAAEBEgAwRAAkACfyAAKAK8LSIEQQlOBEAgACAAKAIUIgRBAWo2AhQgBCAAKAIIaiAALQC4LToAACAAIAAoAhQiBEEBajYCFCAEIAAoAghqIQQgAEG5LWotAAAMAQsgBEEBSA0BIAAgACgCFCIEQQFqNgIUIAQgACgCCGohBCAALQC4LQshBSAEIAU6AAALIABBADYCvC0gAEEAOwG4LQsLsRUBFX8jAEEgayEKIAEoAgAhCSABKAIIIgIoAgAhBSACKAIMIQ0gAEKAgICA0McANwLQKEF/IRACQCANQQBKBEBBACECA0ACQCAJIAJBAnRqIgMvAQAEQCAAIAAoAtAoQQFqIgM2AtAoIAAgA0ECdGpB3BZqIAI2AgAgACACakHYKGpBADoAACACIRAMAQsgA0EAOwECCyACQQFqIgIgDUcNAAsgACgC0CgiBEEBSg0BCwNAIAAgBEEBaiICNgLQKCAAIAJBAnRqQdwWaiAQQQFqIgNBACAQQQJIIgQbIgI2AgAgCSACQQJ0IgdqQQE7AQAgACACakHYKGpBADoAACAAIAAoAqgtQQFrNgKoLSAFBEAgACAAKAKsLSAFIAdqLwECazYCrC0LIAMgECAEGyEQIAAoAtAoIgRBAkgNAAsLIAEgEDYCBCAEQQF2IQgDQCAAIAhBAnRqQdwWaigCACELAkAgCCICQQF0IgMgBEoNACAAIAtqQdgoaiEPIAkgC0ECdGohBiAIIQUDQAJAIAMgBE4EQCADIQIMAQsgCSAAQdwWaiICIANBAXIiBEECdGooAgAiDkECdGovAQAiByAJIAIgA0ECdGooAgAiDEECdGovAQAiAk8EQCACIAdHBEAgAyECDAILIAMhAiAAQdgoaiIDIA5qLQAAIAMgDGotAABLDQELIAQhAgsgBi8BACIEIAkgACACQQJ0akHcFmooAgAiA0ECdGovAQAiB0kEQCAFIQIMAgsCQCAEIAdHDQAgDy0AACAAIANqQdgoai0AAEsNACAFIQIMAgsgACAFQQJ0akHcFmogAzYCACACIQUgAkEBdCIDIAAoAtAoIgRMDQALCyAAIAJBAnRqQdwWaiALNgIAIAhBAk4EQCAIQQFrIQggACgC0CghBAwBCwsgACgC0CghAwNAIA0hCCAAIANBAWsiBDYC0CggACgC4BYhCyAAIAAgA0ECdGpB3BZqKAIAIg02AuAWQQEhAgJAIANBA0gNACAAIA1qQdgoaiEPQQIhAyAJIA1BAnRqIQZBASEFA0ACQCADIAROBEAgAyECDAELIAkgAEHcFmoiAiADQQFyIgRBAnRqKAIAIg5BAnRqLwEAIgcgCSACIANBAnRqKAIAIgxBAnRqLwEAIgJPBEAgAiAHRwRAIAMhAgwCCyADIQIgAEHYKGoiAyAOai0AACADIAxqLQAASw0BCyAEIQILIAYvAQAiBCAJIAAgAkECdGpB3BZqKAIAIgNBAnRqLwEAIgdJBEAgBSECDAILAkAgBCAHRw0AIA8tAAAgACADakHYKGotAABLDQAgBSECDAILIAAgBUECdGpB3BZqIAM2AgAgAiEFIAJBAXQiAyAAKALQKCIETA0ACwtBAiEDIABB3BZqIgYgAkECdGogDTYCACAAIAAoAtQoQQFrIgQ2AtQoIAAoAuAWIQIgBiAEQQJ0aiALNgIAIAAgACgC1ChBAWsiBDYC1CggBiAEQQJ0aiACNgIAIAkgCEECdGoiDiAJIAJBAnRqIgQvAQAgCSALQQJ0aiIFLwEAajsBACAAQdgoaiIMIAhqIg8gAiAMai0AACICIAsgDGotAAAiByACIAdLG0EBajoAACAEIAg7AQIgBSAIOwECIAAgCDYC4BZBASEFQQEhAgJAIAAoAtAoIgRBAkgNAANAAn8gAyADIARODQAaIAkgBiADQQFyIgRBAnRqKAIAIgtBAnRqLwEAIgIgCSAGIANBAnRqKAIAIg1BAnRqLwEAIgdPBEAgAyACIAdHDQEaIAMgCyAMai0AACAMIA1qLQAASw0BGgsgBAshAiAOLwEAIgQgCSAAIAJBAnRqQdwWaigCACIDQQJ0ai8BACIHSQRAIAUhAgwCCwJAIAQgB0cNACAPLQAAIAAgA2pB2ChqLQAASw0AIAUhAgwCCyAAIAVBAnRqQdwWaiADNgIAIAIhBSACQQF0IgMgACgC0CgiBEwNAAsLIAhBAWohDSAAIAJBAnRqQdwWaiAINgIAIAAoAtAoIgNBAUoNAAsgACAAKALUKEEBayICNgLUKCAAQdwWaiIDIAJBAnRqIAAoAuAWNgIAIAEoAgQhByABKAIIIgIoAhAhBiACKAIIIREgAigCBCETIAIoAgAhEiABKAIAIQwgAEHUFmoiAUIANwEAIABBzBZqIhRCADcBACAAQcQWaiIVQgA3AQAgAEG8FmoiFkIANwEAQQAhCCAMIAMgACgC1ChBAnRqKAIAQQJ0akEAOwECAkAgACgC1CgiAkG7BEoNACACQQFqIQJBACEOA0AgDCAAIAJBAnRqQdwWaigCACIEQQJ0Ig1qIgUgDCAFLwECQQJ0ai8BAiIDQQFqIAYgAyAGSBsiDzsBAiADIAZOIQMCQCAEIAdKDQAgACAPQQF0akG8FmoiCyALLwEAQQFqOwEAQQAhCyAEIBFOBEAgEyAEIBFrQQJ0aigCACELCyAAIAAoAqgtIAUvAQAiBCALIA9qbGo2AqgtIBJFDQAgACAAKAKsLSALIA0gEmovAQJqIARsajYCrC0LIAMgDmohDiACQQFqIgJBvQRHDQALIA5FDQAgACAGQQF0akG8FmohDwNAIAYhAgNAIAAgAiIDQQFrIgJBAXRqQbwWaiIELwEAIgVFDQALIAQgBUEBazsBACAAIANBAXRqQbwWaiICIAIvAQBBAmo7AQAgDyAPLwEAQQFrIgI7AQAgDkECSiEDIA5BAmshDiADDQALIAZFDQBBvQQhBQNAIAJB//8DcSEDIAUhAgNAIAMEQCAAIAJBAWsiAkECdGpB3BZqKAIAIgQgB0oNASAMIARBAnRqIgQvAQIiBSAGRwRAIAAgACgCqC0gBC8BACAGIAVrbGo2AqgtIAQgBjsBAgsgA0EBayEDIAIhBQwBCwsgBkEBayIGRQ0BIAAgBkEBdGpBvBZqLwEAIQIMAAsACyAKIBYvAQBBAXQiAjsBAiAKIAIgAEG+FmovAQBqQQF0IgI7AQQgCiACIABBwBZqLwEAakEBdCICOwEGIAogAiAAQcIWai8BAGpBAXQiAjsBCCAKIAIgFS8BAGpBAXQiAjsBCiAKIAIgAEHGFmovAQBqQQF0IgI7AQwgCiACIABByBZqLwEAakEBdCICOwEOIAogAiAAQcoWai8BAGpBAXQiAjsBECAKIAIgFC8BAGpBAXQiAjsBEiAKIAIgAEHOFmovAQBqQQF0IgI7ARQgCiACIABB0BZqLwEAakEBdCICOwEWIAogAiAAQdIWai8BAGpBAXQiAjsBGCAKIAEvAQAgAmpBAXQiAjsBGiAKIABB1hZqLwEAIAJqQQF0IgI7ARwgCiACIABB2BZqLwEAakEBdDsBHiAQQQBOBEADQCAJIAhBAnRqIgcvAQIiBARAIAogBEEBdGoiACAALwEAIgBBAWo7AQAgBEEDcSEDQQAhAiAEQQFrQQNPBEAgBEH8/wNxIQUDQCAAQQN2QQFxIABBAnZBAXEgAEECcSACIABBAXFyQQJ0cnJBAXRyIgRBAXQhAiAAQQR2IQAgBUEEayIFDQALCyADBEADQCACIABBAXFyIgRBAXQhAiAAQQF2IQAgA0EBayIDDQALCyAHIAQ7AQALIAggEEchACAIQQFqIQggAA0ACwsL2QgBCn8CQCAAKAKgLUUEQCAAKAK8LSEDDAELIABBuS1qIQgDQCAEQQFqIQogACgCmC0gBGotAAAhBQJAIAACfyAAKAKkLSAEQQF0ai8BACIHRQRAIAEgBUECdGoiAy8BAiEEIAAgAC8BuC0gAy8BACIFIAAoArwtIgN0ciIHOwG4LUEQIARrIANIBEAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiAHOgAAIAAgACgCFCIDQQFqNgIUIAMgACgCCGogCC0AADoAACAAIAVBECAAKAK8LSIDa3Y7AbgtIAMgBGpBEGsMAgsgAyAEagwBCyAFQYDNAGotAAAiC0ECdCIJQYAIciABaiIDLwEGIQQgACAALwG4LSADLwEEIgwgACgCvC0iBnRyIgM7AbgtIAACf0EQIARrIAZIBEAgACAAKAIUIgZBAWo2AhQgBiAAKAIIaiADOgAAIAAgACgCFCIDQQFqNgIUIAMgACgCCGogCC0AADoAACAAIAxBECAAKAK8LSIGa3YiAzsBuC0gBCAGakEQawwBCyAEIAZqCyIENgK8LSALQQhrQRNNBEAgACADIAUgCUGw3ABqKAIAa0H//wNxIgYgBHRyIgM7AbgtIAACf0EQIAlBwNkAaigCACIFayAESARAIAAgACgCFCIEQQFqNgIUIAQgACgCCGogAzoAACAAIAAoAhQiBEEBajYCFCAEIAAoAghqIAgtAAA6AAAgACAGQRAgACgCvC0iBGt2IgM7AbgtIAQgBWpBEGsMAQsgBCAFagsiBDYCvC0LIAIgB0EBayIFIAVBB3ZBgAJqIAVBgAJJG0GAyQBqLQAAIgtBAnQiCWoiBi8BAiEHIAAgAyAGLwEAIgwgBHRyIgY7AbgtIAACf0EQIAdrIARIBEAgACAAKAIUIgRBAWo2AhQgBCAAKAIIaiAGOgAAIAAgACgCFCIEQQFqNgIUIAQgACgCCGogCC0AADoAACAAIAxBECAAKAK8LSIEa3YiBjsBuC0gBCAHakEQawwBCyAEIAdqCyIDNgK8LSALQQRJDQEgACAGIAUgCUGw3QBqKAIAa0H//wNxIgUgA3RyIgc7AbgtQRAgCUHA2gBqKAIAIgRrIANIBEAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiAHOgAAIAAgACgCFCIDQQFqNgIUIAMgACgCCGogCC0AADoAACAAIAVBECAAKAK8LSIDa3Y7AbgtIAMgBGpBEGsMAQsgAyAEagsiAzYCvC0LIAoiBCAAKAKgLUkNAAsLIAFBgghqLwEAIQQgACAALwG4LSABLwGACCIKIAN0ciIFOwG4LUEQIARrIANIBEAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiAFOgAAIAAgACgCFCIDQQFqNgIUIAMgACgCCGogAEG5LWotAAA6AAAgACAKQRAgACgCvC0iA2t2OwG4LSAAIAMgBGpBEGs2ArwtDwsgACADIARqNgK8LQuXCwEMfyACQQBOBEBBBEEDIAEvAQIiChshBkEHQYoBIAobIQMgAEG5LWohCEF/IQcDQCAKIQkgASALIgxBAWoiC0ECdGovAQIhCgJAAkAgBUEBaiIEIANODQAgCSAKRw0AIAQhBQwBCwJAIAQgBkgEQCAAIAlBAnRqIgVB/BRqIQ0gBUH+FGohDiAAKAK8LSEFA0AgDi8BACEDIAAgAC8BuC0gDS8BACIGIAV0ciIHOwG4LSAAAn9BECADayAFSARAIAAgACgCFCIFQQFqNgIUIAUgACgCCGogBzoAACAAIAAoAhQiBUEBajYCFCAFIAAoAghqIAgtAAA6AAAgACAGQRAgACgCvC0iBWt2OwG4LSADIAVqQRBrDAELIAMgBWoLIgU2ArwtIARBAWsiBA0ACwwBCyAAAn8gCQRAAkAgByAJRgRAIAAoArwtIQMgBCEFDAELIAAgCUECdGoiBEH+FGovAQAhAyAAIAAvAbgtIARB/BRqLwEAIgYgACgCvC0iBHRyIgc7AbgtIAACf0EQIANrIARIBEAgACAAKAIUIgRBAWo2AhQgBCAAKAIIaiAHOgAAIAAgACgCFCIEQQFqNgIUIAQgACgCCGogCC0AADoAACAAIAZBECAAKAK8LSIEa3Y7AbgtIAMgBGpBEGsMAQsgAyAEagsiAzYCvC0LIAAvAbgtIAAvAbwVIgcgA3RyIQQCQEEQIAAvAb4VIgZrIANIBEAgACAEOwG4LSAAIAAoAhQiA0EBajYCFCADIAAoAghqIAQ6AAAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiAILQAAOgAAIAYgACgCvC0iBGpBEGshAyAHQRAgBGt2IQQMAQsgAyAGaiEDCyAAIAM2ArwtIAAgBCAFQf3/A2pB//8DcSIFIAN0ciIEOwG4LSADQQ9OBEAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiAEOgAAIAAgACgCFCIDQQFqNgIUIAMgACgCCGogCC0AADoAACAAIAVBECAAKAK8LSIDa3Y7AbgtIANBDmsMAgsgA0ECagwBCyAFQQlMBEAgAC8BuC0gAC8BwBUiByAAKAK8LSIDdHIhBAJAQRAgAC8BwhUiBmsgA0gEQCAAIAQ7AbgtIAAgACgCFCIDQQFqNgIUIAMgACgCCGogBDoAACAAIAAoAhQiA0EBajYCFCADIAAoAghqIAgtAAA6AAAgBiAAKAK8LSIEakEQayEDIAdBECAEa3YhBAwBCyADIAZqIQMLIAAgAzYCvC0gACAEIAVB/v8DakH//wNxIgUgA3RyIgQ7AbgtIANBDk4EQCAAIAAoAhQiA0EBajYCFCADIAAoAghqIAQ6AAAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiAILQAAOgAAIAAgBUEQIAAoArwtIgNrdjsBuC0gA0ENawwCCyADQQNqDAELIAAvAbgtIAAvAcQVIgcgACgCvC0iA3RyIQQCQEEQIAAvAcYVIgZrIANIBEAgACAEOwG4LSAAIAAoAhQiA0EBajYCFCADIAAoAghqIAQ6AAAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiAILQAAOgAAIAYgACgCvC0iBGpBEGshAyAHQRAgBGt2IQQMAQsgAyAGaiEDCyAAIAM2ArwtIAAgBCAFQfb/A2pB//8DcSIFIAN0ciIEOwG4LSADQQpOBEAgACAAKAIUIgNBAWo2AhQgAyAAKAIIaiAEOgAAIAAgACgCFCIDQQFqNgIUIAMgACgCCGogCC0AADoAACAAIAVBECAAKAK8LSIDa3Y7AbgtIANBCWsMAQsgA0EHags2ArwtC0EAIQUCfyAKRQRAQYoBIQNBAwwBC0EGQQcgCSAKRiIEGyEDQQNBBCAEGwshBiAJIQcLIAIgDEcNAAsLCwkAIAEgAmwQHAsGACABEB0LXwEBfyMAQUBqIgMkACADQQA2AjAgA0IANwMoIAMgADYCCCADIAI2AhQgAyABNgIMIAMgAUEDbDYCGCADQQhqEAcgA0EIahALIANBCGoQCCADKAIcIQEgA0FAayQAIAELBgBB1N8AC6QuAQx/IwBBEGsiDCQAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABB9AFNBEBB2N8AKAIAIgZBECAAQQtqQXhxIABBC0kbIgRBA3YiAXYiAEEDcQRAIABBf3NBAXEgAWoiAkEDdCIDQYjgAGooAgAiAUEIaiEAAkAgASgCCCIEIANBgOAAaiIDRgRAQdjfACAGQX4gAndxNgIADAELIAQgAzYCDCADIAQ2AggLIAEgAkEDdCICQQNyNgIEIAEgAmoiASABKAIEQQFyNgIEDA0LIARB4N8AKAIAIghNDQEgAARAAkAgACABdEECIAF0IgBBACAAa3JxIgBBACAAa3FBAWsiACAAQQx2QRBxIgB2IgFBBXZBCHEiAiAAciABIAJ2IgBBAnZBBHEiAXIgACABdiIAQQF2QQJxIgFyIAAgAXYiAEEBdkEBcSIBciAAIAF2aiICQQN0IgNBiOAAaigCACIBKAIIIgAgA0GA4ABqIgNGBEBB2N8AIAZBfiACd3EiBjYCAAwBCyAAIAM2AgwgAyAANgIICyABQQhqIQAgASAEQQNyNgIEIAEgBGoiAyACQQN0IgUgBGsiAkEBcjYCBCABIAVqIAI2AgAgCARAIAhBA3YiBUEDdEGA4ABqIQRB7N8AKAIAIQECfyAGQQEgBXQiBXFFBEBB2N8AIAUgBnI2AgAgBAwBCyAEKAIICyEFIAQgATYCCCAFIAE2AgwgASAENgIMIAEgBTYCCAtB7N8AIAM2AgBB4N8AIAI2AgAMDQtB3N8AKAIAIglFDQEgCUEAIAlrcUEBayIAIABBDHZBEHEiAHYiAUEFdkEIcSICIAByIAEgAnYiAEECdkEEcSIBciAAIAF2IgBBAXZBAnEiAXIgACABdiIAQQF2QQFxIgFyIAAgAXZqQQJ0QYjiAGooAgAiAygCBEF4cSAEayEBIAMhAgNAAkAgAigCECIARQRAIAIoAhQiAEUNAQsgACgCBEF4cSAEayICIAEgASACSyICGyEBIAAgAyACGyEDIAAhAgwBCwsgAyAEaiILIANNDQIgAygCGCEKIAMgAygCDCIFRwRAIAMoAggiAEHo3wAoAgBJGiAAIAU2AgwgBSAANgIIDAwLIANBFGoiAigCACIARQRAIAMoAhAiAEUNBCADQRBqIQILA0AgAiEHIAAiBUEUaiICKAIAIgANACAFQRBqIQIgBSgCECIADQALIAdBADYCAAwLC0F/IQQgAEG/f0sNACAAQQtqIgBBeHEhBEHc3wAoAgAiCEUNAEEfIQcgBEH///8HTQRAIABBCHYiACAAQYD+P2pBEHZBCHEiAHQiASABQYDgH2pBEHZBBHEiAXQiAiACQYCAD2pBEHZBAnEiAnRBD3YgACABciACcmsiAEEBdCAEIABBFWp2QQFxckEcaiEHC0EAIARrIQECQAJAAkAgB0ECdEGI4gBqKAIAIgJFBEBBACEADAELQQAhACAEQQBBGSAHQQF2ayAHQR9GG3QhAwNAAkAgAigCBEF4cSAEayIGIAFPDQAgAiEFIAYiAQ0AQQAhASACIQAMAwsgACACKAIUIgYgBiACIANBHXZBBHFqKAIQIgJGGyAAIAYbIQAgA0EBdCEDIAINAAsLIAAgBXJFBEBBAiAHdCIAQQAgAGtyIAhxIgBFDQMgAEEAIABrcUEBayIAIABBDHZBEHEiAHYiAkEFdkEIcSIDIAByIAIgA3YiAEECdkEEcSICciAAIAJ2IgBBAXZBAnEiAnIgACACdiIAQQF2QQFxIgJyIAAgAnZqQQJ0QYjiAGooAgAhAAsgAEUNAQsDQCAAKAIEQXhxIARrIgYgAUkhAyAGIAEgAxshASAAIAUgAxshBSAAKAIQIgIEfyACBSAAKAIUCyIADQALCyAFRQ0AIAFB4N8AKAIAIARrTw0AIAQgBWoiByAFTQ0BIAUoAhghCSAFIAUoAgwiA0cEQCAFKAIIIgBB6N8AKAIASRogACADNgIMIAMgADYCCAwKCyAFQRRqIgIoAgAiAEUEQCAFKAIQIgBFDQQgBUEQaiECCwNAIAIhBiAAIgNBFGoiAigCACIADQAgA0EQaiECIAMoAhAiAA0ACyAGQQA2AgAMCQsgBEHg3wAoAgAiAE0EQEHs3wAoAgAhAQJAIAAgBGsiAkEQTwRAQeDfACACNgIAQezfACABIARqIgM2AgAgAyACQQFyNgIEIAAgAWogAjYCACABIARBA3I2AgQMAQtB7N8AQQA2AgBB4N8AQQA2AgAgASAAQQNyNgIEIAAgAWoiACAAKAIEQQFyNgIECyABQQhqIQAMCwsgBEHk3wAoAgAiA0kEQEHk3wAgAyAEayIBNgIAQfDfAEHw3wAoAgAiACAEaiICNgIAIAIgAUEBcjYCBCAAIARBA3I2AgQgAEEIaiEADAsLQQAhACAEQS9qIggCf0Gw4wAoAgAEQEG44wAoAgAMAQtBvOMAQn83AgBBtOMAQoCggICAgAQ3AgBBsOMAIAxBDGpBcHFB2KrVqgVzNgIAQcTjAEEANgIAQZTjAEEANgIAQYAgCyIBaiIGQQAgAWsiB3EiBSAETQ0KQZDjACgCACIBBEBBiOMAKAIAIgIgBWoiCSACTQ0LIAEgCUkNCwtBlOMALQAAQQRxDQUCQAJAQfDfACgCACIBBEBBmOMAIQADQCABIAAoAgAiAk8EQCACIAAoAgRqIAFLDQMLIAAoAggiAA0ACwtBABAeIgNBf0YNBiAFIQZBtOMAKAIAIgBBAWsiASADcQRAIAUgA2sgASADakEAIABrcWohBgsgBCAGTw0GIAZB/v///wdLDQZBkOMAKAIAIgAEQEGI4wAoAgAiASAGaiICIAFNDQcgACACSQ0HCyAGEB4iACADRw0BDAgLIAYgA2sgB3EiBkH+////B0sNBSAGEB4iAyAAKAIAIAAoAgRqRg0EIAMhAAsCQCAEQTBqIAZNDQAgAEF/Rg0AQbjjACgCACIBIAggBmtqQQAgAWtxIgFB/v///wdLBEAgACEDDAgLIAEQHkF/RwRAIAEgBmohBiAAIQMMCAtBACAGaxAeGgwFCyAAIQMgAEF/Rw0GDAQLAAtBACEFDAcLQQAhAwwFCyADQX9HDQILQZTjAEGU4wAoAgBBBHI2AgALIAVB/v///wdLDQEgBRAeIgNBABAeIgBPDQEgA0F/Rg0BIABBf0YNASAAIANrIgYgBEEoak0NAQtBiOMAQYjjACgCACAGaiIANgIAQYzjACgCACAASQRAQYzjACAANgIACwJAAkACQEHw3wAoAgAiAQRAQZjjACEAA0AgAyAAKAIAIgIgACgCBCIFakYNAiAAKAIIIgANAAsMAgtB6N8AKAIAIgBBACAAIANNG0UEQEHo3wAgAzYCAAtBACEAQZzjACAGNgIAQZjjACADNgIAQfjfAEF/NgIAQfzfAEGw4wAoAgA2AgBBpOMAQQA2AgADQCAAQQN0IgFBiOAAaiABQYDgAGoiAjYCACABQYzgAGogAjYCACAAQQFqIgBBIEcNAAtB5N8AIAZBKGsiAEF4IANrQQdxQQAgA0EIakEHcRsiAWsiAjYCAEHw3wAgASADaiIBNgIAIAEgAkEBcjYCBCAAIANqQSg2AgRB9N8AQcDjACgCADYCAAwCCyABIANPDQAgASACSQ0AIAAoAgxBCHENACAAIAUgBmo2AgRB8N8AIAFBeCABa0EHcUEAIAFBCGpBB3EbIgBqIgI2AgBB5N8AQeTfACgCACAGaiIDIABrIgA2AgAgAiAAQQFyNgIEIAEgA2pBKDYCBEH03wBBwOMAKAIANgIADAELQejfACgCACADSwRAQejfACADNgIACyADIAZqIQJBmOMAIQACQAJAAkACQAJAAkADQCACIAAoAgBHBEAgACgCCCIADQEMAgsLIAAtAAxBCHFFDQELQZjjACEAA0AgASAAKAIAIgJPBEAgAiAAKAIEaiICIAFLDQMLIAAoAgghAAwACwALIAAgAzYCACAAIAAoAgQgBmo2AgQgA0F4IANrQQdxQQAgA0EIakEHcRtqIgcgBEEDcjYCBCACQXggAmtBB3FBACACQQhqQQdxG2oiBiAHayAEayECIAQgB2ohBCABIAZGBEBB8N8AIAQ2AgBB5N8AQeTfACgCACACaiIANgIAIAQgAEEBcjYCBAwDCyAGQezfACgCAEYEQEHs3wAgBDYCAEHg3wBB4N8AKAIAIAJqIgA2AgAgBCAAQQFyNgIEIAAgBGogADYCAAwDCyAGKAIEIgBBA3FBAUYEQCAAQXhxIQgCQCAAQf8BTQRAIAYoAggiASAAQQN2IgVBA3RBgOAAakYaIAEgBigCDCIARgRAQdjfAEHY3wAoAgBBfiAFd3E2AgAMAgsgASAANgIMIAAgATYCCAwBCyAGKAIYIQkCQCAGIAYoAgwiA0cEQCAGKAIIIgAgAzYCDCADIAA2AggMAQsCQCAGQRRqIgAoAgAiAQ0AIAZBEGoiACgCACIBDQBBACEDDAELA0AgACEFIAEiA0EUaiIAKAIAIgENACADQRBqIQAgAygCECIBDQALIAVBADYCAAsgCUUNAAJAIAYgBigCHCIBQQJ0QYjiAGoiACgCAEYEQCAAIAM2AgAgAw0BQdzfAEHc3wAoAgBBfiABd3E2AgAMAgsgCUEQQRQgCSgCECAGRhtqIAM2AgAgA0UNAQsgAyAJNgIYIAYoAhAiAARAIAMgADYCECAAIAM2AhgLIAYoAhQiAEUNACADIAA2AhQgACADNgIYCyAGIAhqIQYgAiAIaiECCyAGIAYoAgRBfnE2AgQgBCACQQFyNgIEIAIgBGogAjYCACACQf8BTQRAIAJBA3YiAUEDdEGA4ABqIQACf0HY3wAoAgAiAkEBIAF0IgFxRQRAQdjfACABIAJyNgIAIAAMAQsgACgCCAshASAAIAQ2AgggASAENgIMIAQgADYCDCAEIAE2AggMAwtBHyEAIAJB////B00EQCACQQh2IgAgAEGA/j9qQRB2QQhxIgB0IgEgAUGA4B9qQRB2QQRxIgF0IgMgA0GAgA9qQRB2QQJxIgN0QQ92IAAgAXIgA3JrIgBBAXQgAiAAQRVqdkEBcXJBHGohAAsgBCAANgIcIARCADcCECAAQQJ0QYjiAGohAQJAQdzfACgCACIDQQEgAHQiBXFFBEBB3N8AIAMgBXI2AgAgASAENgIAIAQgATYCGAwBCyACQQBBGSAAQQF2ayAAQR9GG3QhACABKAIAIQMDQCADIgEoAgRBeHEgAkYNAyAAQR12IQMgAEEBdCEAIAEgA0EEcWpBEGoiBSgCACIDDQALIAUgBDYCACAEIAE2AhgLIAQgBDYCDCAEIAQ2AggMAgtB5N8AIAZBKGsiAEF4IANrQQdxQQAgA0EIakEHcRsiBWsiBzYCAEHw3wAgAyAFaiIFNgIAIAUgB0EBcjYCBCAAIANqQSg2AgRB9N8AQcDjACgCADYCACABIAJBJyACa0EHcUEAIAJBJ2tBB3EbakEvayIAIAAgAUEQakkbIgVBGzYCBCAFQaDjACkCADcCECAFQZjjACkCADcCCEGg4wAgBUEIajYCAEGc4wAgBjYCAEGY4wAgAzYCAEGk4wBBADYCACAFQRhqIQADQCAAQQc2AgQgAEEIaiEDIABBBGohACACIANLDQALIAEgBUYNAyAFIAUoAgRBfnE2AgQgASAFIAFrIgZBAXI2AgQgBSAGNgIAIAZB/wFNBEAgBkEDdiICQQN0QYDgAGohAAJ/QdjfACgCACIDQQEgAnQiAnFFBEBB2N8AIAIgA3I2AgAgAAwBCyAAKAIICyECIAAgATYCCCACIAE2AgwgASAANgIMIAEgAjYCCAwEC0EfIQAgAUIANwIQIAZB////B00EQCAGQQh2IgAgAEGA/j9qQRB2QQhxIgB0IgIgAkGA4B9qQRB2QQRxIgJ0IgMgA0GAgA9qQRB2QQJxIgN0QQ92IAAgAnIgA3JrIgBBAXQgBiAAQRVqdkEBcXJBHGohAAsgASAANgIcIABBAnRBiOIAaiECAkBB3N8AKAIAIgNBASAAdCIFcUUEQEHc3wAgAyAFcjYCACACIAE2AgAgASACNgIYDAELIAZBAEEZIABBAXZrIABBH0YbdCEAIAIoAgAhAwNAIAMiAigCBEF4cSAGRg0EIABBHXYhAyAAQQF0IQAgAiADQQRxakEQaiIFKAIAIgMNAAsgBSABNgIAIAEgAjYCGAsgASABNgIMIAEgATYCCAwDCyABKAIIIgAgBDYCDCABIAQ2AgggBEEANgIYIAQgATYCDCAEIAA2AggLIAdBCGohAAwFCyACKAIIIgAgATYCDCACIAE2AgggAUEANgIYIAEgAjYCDCABIAA2AggLQeTfACgCACIAIARNDQBB5N8AIAAgBGsiATYCAEHw3wBB8N8AKAIAIgAgBGoiAjYCACACIAFBAXI2AgQgACAEQQNyNgIEIABBCGohAAwDC0HU3wBBMDYCAEEAIQAMAgsCQCAJRQ0AAkAgBSgCHCICQQJ0QYjiAGoiACgCACAFRgRAIAAgAzYCACADDQFB3N8AIAhBfiACd3EiCDYCAAwCCyAJQRBBFCAJKAIQIAVGG2ogAzYCACADRQ0BCyADIAk2AhggBSgCECIABEAgAyAANgIQIAAgAzYCGAsgBSgCFCIARQ0AIAMgADYCFCAAIAM2AhgLAkAgAUEPTQRAIAUgASAEaiIAQQNyNgIEIAAgBWoiACAAKAIEQQFyNgIEDAELIAUgBEEDcjYCBCAHIAFBAXI2AgQgASAHaiABNgIAIAFB/wFNBEAgAUEDdiIBQQN0QYDgAGohAAJ/QdjfACgCACICQQEgAXQiAXFFBEBB2N8AIAEgAnI2AgAgAAwBCyAAKAIICyEBIAAgBzYCCCABIAc2AgwgByAANgIMIAcgATYCCAwBC0EfIQAgAUH///8HTQRAIAFBCHYiACAAQYD+P2pBEHZBCHEiAHQiAiACQYDgH2pBEHZBBHEiAnQiBCAEQYCAD2pBEHZBAnEiBHRBD3YgACACciAEcmsiAEEBdCABIABBFWp2QQFxckEcaiEACyAHIAA2AhwgB0IANwIQIABBAnRBiOIAaiECAkACQCAIQQEgAHQiBHFFBEBB3N8AIAQgCHI2AgAgAiAHNgIAIAcgAjYCGAwBCyABQQBBGSAAQQF2ayAAQR9GG3QhACACKAIAIQQDQCAEIgIoAgRBeHEgAUYNAiAAQR12IQQgAEEBdCEAIAIgBEEEcWpBEGoiAygCACIEDQALIAMgBzYCACAHIAI2AhgLIAcgBzYCDCAHIAc2AggMAQsgAigCCCIAIAc2AgwgAiAHNgIIIAdBADYCGCAHIAI2AgwgByAANgIICyAFQQhqIQAMAQsCQCAKRQ0AAkAgAygCHCICQQJ0QYjiAGoiACgCACADRgRAIAAgBTYCACAFDQFB3N8AIAlBfiACd3E2AgAMAgsgCkEQQRQgCigCECADRhtqIAU2AgAgBUUNAQsgBSAKNgIYIAMoAhAiAARAIAUgADYCECAAIAU2AhgLIAMoAhQiAEUNACAFIAA2AhQgACAFNgIYCwJAIAFBD00EQCADIAEgBGoiAEEDcjYCBCAAIANqIgAgACgCBEEBcjYCBAwBCyADIARBA3I2AgQgCyABQQFyNgIEIAEgC2ogATYCACAIBEAgCEEDdiIEQQN0QYDgAGohAkHs3wAoAgAhAAJ/QQEgBHQiBCAGcUUEQEHY3wAgBCAGcjYCACACDAELIAIoAggLIQQgAiAANgIIIAQgADYCDCAAIAI2AgwgACAENgIIC0Hs3wAgCzYCAEHg3wAgATYCAAsgA0EIaiEACyAMQRBqJAAgAAvMDAEHfwJAIABFDQAgAEEIayICIABBBGsoAgAiAUF4cSIAaiEFAkAgAUEBcQ0AIAFBA3FFDQEgAiACKAIAIgFrIgJB6N8AKAIASQ0BIAAgAWohACACQezfACgCAEcEQCABQf8BTQRAIAIoAggiBCABQQN2IgdBA3RBgOAAakYaIAQgAigCDCIBRgRAQdjfAEHY3wAoAgBBfiAHd3E2AgAMAwsgBCABNgIMIAEgBDYCCAwCCyACKAIYIQYCQCACIAIoAgwiA0cEQCACKAIIIgEgAzYCDCADIAE2AggMAQsCQCACQRRqIgEoAgAiBA0AIAJBEGoiASgCACIEDQBBACEDDAELA0AgASEHIAQiA0EUaiIBKAIAIgQNACADQRBqIQEgAygCECIEDQALIAdBADYCAAsgBkUNAQJAIAIgAigCHCIEQQJ0QYjiAGoiASgCAEYEQCABIAM2AgAgAw0BQdzfAEHc3wAoAgBBfiAEd3E2AgAMAwsgBkEQQRQgBigCECACRhtqIAM2AgAgA0UNAgsgAyAGNgIYIAIoAhAiAQRAIAMgATYCECABIAM2AhgLIAIoAhQiAUUNASADIAE2AhQgASADNgIYDAELIAUoAgQiAUEDcUEDRw0AQeDfACAANgIAIAUgAUF+cTYCBCACIABBAXI2AgQgACACaiAANgIADwsgAiAFTw0AIAUoAgQiAUEBcUUNAAJAIAFBAnFFBEAgBUHw3wAoAgBGBEBB8N8AIAI2AgBB5N8AQeTfACgCACAAaiIANgIAIAIgAEEBcjYCBCACQezfACgCAEcNA0Hg3wBBADYCAEHs3wBBADYCAA8LIAVB7N8AKAIARgRAQezfACACNgIAQeDfAEHg3wAoAgAgAGoiADYCACACIABBAXI2AgQgACACaiAANgIADwsgAUF4cSAAaiEAAkAgAUH/AU0EQCAFKAIIIgQgAUEDdiIHQQN0QYDgAGpGGiAEIAUoAgwiAUYEQEHY3wBB2N8AKAIAQX4gB3dxNgIADAILIAQgATYCDCABIAQ2AggMAQsgBSgCGCEGAkAgBSAFKAIMIgNHBEAgBSgCCCIBQejfACgCAEkaIAEgAzYCDCADIAE2AggMAQsCQCAFQRRqIgEoAgAiBA0AIAVBEGoiASgCACIEDQBBACEDDAELA0AgASEHIAQiA0EUaiIBKAIAIgQNACADQRBqIQEgAygCECIEDQALIAdBADYCAAsgBkUNAAJAIAUgBSgCHCIEQQJ0QYjiAGoiASgCAEYEQCABIAM2AgAgAw0BQdzfAEHc3wAoAgBBfiAEd3E2AgAMAgsgBkEQQRQgBigCECAFRhtqIAM2AgAgA0UNAQsgAyAGNgIYIAUoAhAiAQRAIAMgATYCECABIAM2AhgLIAUoAhQiAUUNACADIAE2AhQgASADNgIYCyACIABBAXI2AgQgACACaiAANgIAIAJB7N8AKAIARw0BQeDfACAANgIADwsgBSABQX5xNgIEIAIgAEEBcjYCBCAAIAJqIAA2AgALIABB/wFNBEAgAEEDdiIBQQN0QYDgAGohAAJ/QdjfACgCACIEQQEgAXQiAXFFBEBB2N8AIAEgBHI2AgAgAAwBCyAAKAIICyEBIAAgAjYCCCABIAI2AgwgAiAANgIMIAIgATYCCA8LQR8hASACQgA3AhAgAEH///8HTQRAIABBCHYiASABQYD+P2pBEHZBCHEiAXQiBCAEQYDgH2pBEHZBBHEiBHQiAyADQYCAD2pBEHZBAnEiA3RBD3YgASAEciADcmsiAUEBdCAAIAFBFWp2QQFxckEcaiEBCyACIAE2AhwgAUECdEGI4gBqIQQCQAJAAkBB3N8AKAIAIgNBASABdCIFcUUEQEHc3wAgAyAFcjYCACAEIAI2AgAgAiAENgIYDAELIABBAEEZIAFBAXZrIAFBH0YbdCEBIAQoAgAhAwNAIAMiBCgCBEF4cSAARg0CIAFBHXYhAyABQQF0IQEgBCADQQRxakEQaiIFKAIAIgMNAAsgBSACNgIAIAIgBDYCGAsgAiACNgIMIAIgAjYCCAwBCyAEKAIIIgAgAjYCDCAEIAI2AgggAkEANgIYIAIgBDYCDCACIAA2AggLQfjfAEH43wAoAgBBAWsiAkF/IAIbNgIACwtVAQJ/QdDfACgCACIBIABBA2pBfHEiAmohAAJAIAJBAU5BACAAIAFNGw0APwBBEHQgAEkEQCAAEABFDQELQdDfACAANgIAIAEPC0HU3wBBMDYCAEF/C4IEAQN/IAJBgARPBEAgACABIAIQARogAA8LIAAgAmohAwJAIAAgAXNBA3FFBEACQCACQQFIBEAgACECDAELIABBA3FFBEAgACECDAELIAAhAgNAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANPDQEgAkEDcQ0ACwsCQCADQXxxIgRBwABJDQAgAiAEQUBqIgVLDQADQCACIAEoAgA2AgAgAiABKAIENgIEIAIgASgCCDYCCCACIAEoAgw2AgwgAiABKAIQNgIQIAIgASgCFDYCFCACIAEoAhg2AhggAiABKAIcNgIcIAIgASgCIDYCICACIAEoAiQ2AiQgAiABKAIoNgIoIAIgASgCLDYCLCACIAEoAjA2AjAgAiABKAI0NgI0IAIgASgCODYCOCACIAEoAjw2AjwgAUFAayEBIAJBQGsiAiAFTQ0ACwsgAiAETw0BA0AgAiABKAIANgIAIAFBBGohASACQQRqIgIgBEkNAAsMAQsgA0EESQRAIAAhAgwBCyAAIANBBGsiBEsEQCAAIQIMAQsgACECA0AgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAFBBGohASACQQRqIgIgBE0NAAsLIAIgA0kEQANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANHDQALCyAAC9YCAQJ/AkAgAUUNACAAIAFqIgJBAWtBADoAACAAQQA6AAAgAUEDSQ0AIAJBAmtBADoAACAAQQA6AAEgAkEDa0EAOgAAIABBADoAAiABQQdJDQAgAkEEa0EAOgAAIABBADoAAyABQQlJDQAgAEEAIABrQQNxIgNqIgJBADYCACACIAEgA2tBfHEiA2oiAUEEa0EANgIAIANBCUkNACACQQA2AgggAkEANgIEIAFBCGtBADYCACABQQxrQQA2AgAgA0EZSQ0AIAJBADYCGCACQQA2AhQgAkEANgIQIAJBADYCDCABQRBrQQA2AgAgAUEUa0EANgIAIAFBGGtBADYCACABQRxrQQA2AgAgAyACQQRxQRhyIgNrIgFBIEkNACACIANqIQIDQCACQgA3AxggAkIANwMQIAJCADcDCCACQgA3AwAgAkEgaiECIAFBIGsiAUEfSw0ACwsLBAAjAAsGACAAJAALEAAjACAAa0FwcSIAJAAgAAsLvVYIAEGECAvxQJYwB3csYQ7uulEJmRnEbQeP9GpwNaVj6aOVZJ4yiNsOpLjceR7p1eCI2dKXK0y2Cb18sX4HLbjnkR2/kGQQtx3yILBqSHG5895BvoR91Noa6+TdbVG11PTHhdODVphsE8Coa2R6+WL97Mllik9cARTZbAZjYz0P+vUNCI3IIG47XhBpTORBYNVycWei0eQDPEfUBEv9hQ3Sa7UKpfqotTVsmLJC1sm720D5vKzjbNgydVzfRc8N1txZPdGrrDDZJjoA3lGAUdfIFmHQv7X0tCEjxLNWmZW6zw+lvbieuAIoCIgFX7LZDMYk6Quxh3xvLxFMaFirHWHBPS1mtpBB3HYGcdsBvCDSmCoQ1e+JhbFxH7W2BqXkv58z1LjooskHeDT5AA+OqAmWGJgO4bsNan8tPW0Il2xkkQFcY+b0UWtrYmFsHNgwZYVOAGLy7ZUGbHulARvB9AiCV8QP9cbZsGVQ6bcS6ri+i3yIufzfHd1iSS3aFfN804xlTNT7WGGyTc5RtTp0ALyj4jC71EGl30rXldg9bcTRpPv01tNq6WlD/NluNEaIZ63QuGDacy0EROUdAzNfTAqqyXwN3TxxBVCqQQInEBALvoYgDMkltWhXs4VvIAnUZrmf5GHODvneXpjJ2SkimNCwtKjXxxc9s1mBDbQuO1y9t61susAgg7jttrO/mgzitgOa0rF0OUfV6q930p0VJtsEgxbccxILY+OEO2SUPmptDahaanoLzw7knf8JkyeuAAqxngd9RJMP8NKjCIdo8gEe/sIGaV1XYvfLZ2WAcTZsGecGa252G9T+4CvTiVp62hDMSt1nb9+5+fnvvo5DvrcX1Y6wYOij1tZ+k9GhxMLYOFLy30/xZ7vRZ1e8pt0GtT9LNrJI2isN2EwbCq/2SgM2YHoEQcPvYN9V32eo745uMXm+aUaMs2HLGoNmvKDSbyU24mhSlXcMzANHC7u5FgIiLyYFVb47usUoC72yklq0KwRqs1yn/9fCMc/QtYue2Swdrt5bsMJkmybyY+yco2p1CpNtAqkGCZw/Ng7rhWcHchNXAAWCSr+VFHq44q4rsXs4G7YMm47Skg2+1eW379x8Id/bC9TS04ZC4tTx+LPdaG6D2h/NFr6BWya59uF3sG93R7cY5loIiHBqD//KOwZmXAsBEf+eZY9prmL40/9rYUXPbBZ44gqg7tIN11SDBE7CswM5YSZnp/cWYNBNR2lJ23duPkpq0a7cWtbZZgvfQPA72DdTrrypxZ673n/Pskfp/7UwHPK9vYrCusowk7NTpqO0JAU20LqTBtfNKVfeVL9n2SMuemazuEphxAIbaF2UK28qN74LtKGODMMb3wVaje8CLQAAAABBMRsZgmI2MsNTLSsExWxkRfR3fYanWlbHlkFPCIrZyEm7wtGK6O/6y9n04wxPtaxNfq61ji2Dns8cmIdREsJKECPZU9Nw9HiSQe9hVdeuLhTmtTfXtZgcloSDBVmYG4IYqQCb2/otsJrLNqldXXfmHGxs/98/QdSeDlrNoiSEleMVn4wgRrKnYXepvqbh6PHn0PPoJIPew2Wyxdqqrl1d659GRCjMa29p/XB2rmsxOe9aKiAsCQcLbTgcEvM2Rt+yB13GcVRw7TBla/T38yq7tsIxonWRHIk0oAeQ+7yfF7qNhA553qklOO+yPP9583O+SOhqfRvFQTwq3lgFT3nwRH5i6YctT8LGHFTbAYoVlEC7Do2D6COmwtk4vw3FoDhM9Lshj6eWCs6WjRMJAMxcSDHXRYti+m7KU+F3VF27uhVsoKPWP42Ilw6WkVCY194RqczH0vrh7JPL+vVc12JyHeZ5a961VECfhE9ZWBIOFhkjFQ/acDgkm0EjPadr/WXmWuZ8JQnLV2Q40E6jrpEB4p+KGCHMpzNg/bwqr+Ekre7QP7QtgxKfbLIJhqskSMnqFVPQKUZ++2h3ZeL2eT8vt0gkNnQbCR01KhIE8rxTS7ONSFJw3mV5Me9+YP7z5ue/wv3+fJHQ1T2gy8z6NoqDuweRmnhUvLE5ZaeoS5iDOwqpmCLJ+rUJiMuuEE9d718ObPRGzT/ZbYwOwnRDElrzAiNB6sFwbMGAQXfYR9c2lwbmLY7FtQClhIQbvBqKQXFbu1pomOh3Q9nZbFoeTy0VX342DJwtGyfdHAA+EgCYuVMxg6CQYq6L0VO1khbF9N1X9O/ElKfC79WW2fbpvAeuqI0ct2veMZwq7yqF7XlryqxIcNNvG134LipG4eE23magB8V/Y1ToVCJl803l87ICpMKpG2eRhDAmoJ8puK7F5Pmf3v06zPPWe/3oz7xrqYD9WrKZPgmfsn84hKuwJBws8RUHNTJGKh5zdzEHtOFwSPXQa1E2g0Z6d7JdY07X+ssP5uHSzLXM+Y2E1+BKEpavCyONtshwoJ2JQbuERl0jAwdsOBrEPxUxhQ4OKEKYT2cDqVR+wPp5VYHLYkwfxTiBXvQjmJ2nDrPclhWqGwBU5VoxT/yZYmLX2FN5zhdP4UlWfvpQlS3Xe9QczGITio0tUruWNJHoux/Q2aAG7PN+Xq3CZUdukUhsL6BTdeg2EjqpBwkjalQkCCtlPxHkeaeWpUi8j2YbkaQnKoq94LzL8qGN0Oti3v3AI+/m2b3hvBT80KcNP4OKJn6ykT+5JNBw+BXLaTtG5kJ6d/1btWtl3PRafsU3CVPudjhI97GuCbjwnxKhM8w/inL9JJMAAAAAN2rCAW7UhANZvkYC3KgJB+vCywayfI0EhRZPBbhREw6PO9EP1oWXDeHvVQxk+RoJU5PYCAotngo9R1wLcKMmHEfJ5B0ed6IfKR1gHqwLLxubYe0awt+rGPW1aRnI8jUS/5j3E6YmsRGRTHMQFFo8FSMw/hR6jrgWTeR6F+BGTTjXLI85jpLJO7n4Czo87kQ/C4SGPlI6wDxlUAI9WBdeNm99nDc2w9o1AakYNIS/VzGz1ZUw6mvTMt0BETOQ5Wskp4+pJf4x7yfJWy0mTE1iI3snoCIimeYgFfMkISi0eCof3rorRmD8KXEKPij0HHEtw3azLJrI9S6tojcvwI2acPfnWHGuWR5zmTPcchwlk3crT1F2cvEXdEWb1XV43Il+T7ZLfxYIDX0hYs98pHSAeZMeQnjKoAR6/crGe7AuvGyHRH5t3vo4b+mQ+m5shrVrW+x3agJSMWg1OPNpCH+vYj8VbWNmqythUcHpYNTXpmXjvWRkugMiZo1p4Gcgy9dIF6EVSU4fU0t5dZFK/GPeT8sJHE6St1pMpd2YTZiaxEav8AZH9k5ARcEkgkREMs1Bc1gPQCrmSUIdjItDUGjxVGcCM1U+vHVXCda3VozA+FO7qjpS4hR8UNV+vlHoOeJa31MgW4btZlmxh6RYNJHrXQP7KVxaRW9ebS+tX4AbNeG3cffg7s+x4tmlc+Ncszzma9n+5zJnuOUFDXrkOEom7w8g5O5WnqLsYfRg7eTiL+jTiO3pijar671caerwuBP9x9LR/J5sl/6pBlX/LBAa+ht62PtCxJ75da5c+EjpAPN/g8LyJj2E8BFXRvGUQQn0oyvL9fqVjffN/0/2YF142Vc3utgOifzaOeM+27z1cd6Ln7Pf0iH13eVLN9zYDGvX72ap1rbY79SBsi3VBKRi0DPOoNFqcObTXRok0hD+XsUnlJzEfiraxklAGMfMVlfC+zyVw6KC08GV6BHAqK9Ny5/Fj8rGe8nI8RELyXQHRMxDbYbNGtPAzy25As5Alq+Rd/xtkC5CK5IZKOmTnD6mlqtUZJfy6iKVxYDglPjHvJ/PrX6elhM4nKF5+p0kb7WYEwV3mUq7MZt90fOaMDWJjQdfS4xe4Q2OaYvPj+ydgIrb90KLgkkEibUjxoiIZJqDvw5YguawHoDR2tyBVMyThGOmUYU6GBeHDXLVhqDQ4qmXuiCozgRmqvlupKt8eOuuSxIprxKsb60lxq2sGIHxpy/rM6Z2VXWkQT+3pcQp+KDzQzqhqv18o52XvqLQc8S15xkGtL6nQLaJzYK3DNvNsjuxD7NiD0mxVWWLsGgi17tfSBW6BvZTuDGckbm0it68g+AcvdpeWr/tNJi+AAAAAGVnvLiLyAmq7q+1EleXYo8y8N433F9rJbk4153vKLTFik8IfWTgvW8BhwHXuL/WSt3YavIzd9/gVhBjWJ9XGVD6MKXoFJ8Q+nH4rELIwHvfrafHZ0MIcnUmb87NcH+tlRUYES37t6Q/ntAYhyfozxpCj3OirCDGsMlHegg+rzKgW8iOGLVnOwrQAIeyaThQLwxf7Jfi8FmFh5flPdGHhmW04DrdWk+Pzz8oM3eGEOTq43dYUg3Y7UBov1H4ofgr8MSfl0gqMCJaT1ee4vZvSX+TCPXHfadA1RjA/G1O0J81K7cjjcUYlp+gfyonGUf9unwgQQKSj/QQ9+hIqD1YFJtYP6gjtpAdMdP3oYlqz3YUD6jKrOEHf76EYMMG0nCgXrcXHOZZuKn0PN8VTIXnwtHggH5pDi/Le2tId8OiDw3Lx2ixcynHBGFMoLjZ9ZhvRJD/0/x+UGbuGzfaVk0nuQ4oQAW2xu+wpKOIDBwasNuBf9dnOZF40iv0H26TA/cmO2aQmoOIPy+R7ViTKVRgRLQxB/gM36hNHrrP8abs35L+ibguRmcXm1QCcCfsu0jwcd4vTMkwgPnbVedFY5ygP2v5x4PTF2g2wXIPinnLN13krlDhXED/VE4lmOj2c4iLrhbvNxb4QIIEnSc+vCQf6SFBeFWZr9fgi8qwXDM7tlntXtHlVbB+UEfVGez/bCE7YglGh9rn6TLIgo6OcNSe7Six+VGQX1bkgjoxWDqDCY+n5m4zHwjBhg1tpjq1pOFAvcGG/AUvKUkXSk71r/N2IjKWEZ6KeL4rmB3ZlyBLyfR4Lq5IwMAB/dKlZkFqHF6W93k5Kk+Xlp9d8vEj5QUZa01gftf1jtFi5+u23l9SjgnCN+m1etlGAGi8IbzQ6jHfiI9WYzBh+dYiBJ5qmr2mvQfYwQG/Nm60rVMJCBWaTnId/ynOpRGGe7d04ccPzdkQkqi+rCpGERk4I3algHVmxtgQAXpg/q7PcpvJc8oi8aRXR5YY76k5rf3MXhFFBu5NdmOJ8c6NJkTc6EH4ZFF5L/k0HpNB2rEmU7/WmuvpxvmzjKFFC2IO8BkHaUyhvlGbPNs2J4Q1mZKWUP4uLpm5VCb83uieEnFdjHcW4TTOLjapq0mKEUXmPwMggYO7dpHg4xP2XFv9WelJmD5V8SEGgmxEYT7Uqs6Lxs+pN344QX/WXSbDbrOJdnzW7srEb9YdWQqxoeHkHhTzgXmoS9dpyxOyDnerXKHCuTnGfgGA/qmc5ZkVJAs2oDZuURyOpxZmhsJx2j4s3m8sSbnTlPCBBAmV5rixe0kNox4usRtIPtJDLVlu+8P22+mmkWdRH6mwzHrODHSUYblm8QYF3gAAAAB3BzCW7g5hLJkJUboHbcQZcGr0j+ljpTWeZJWjDtuIMnncuKTg1ekel9LZiAm2TCt+sXy957gtB5C/HZEdtxBkarAg8vO5cUiEvkHeGtrUfW3d5Ov01LVRg9OFxxNsmFZka6jA/WL5eoplyewUAVxPYwZs2foPPWONCA31O24gyExpEF7VYEHkomdxcjwD5NFLBNRH0g2F/aUKtWs1taj6QrKYbNu7ydasvPlAMths40XfXHXc1g3Pq9E9WSbZMKxR3gA6yNdRgL/QYRYhtPS1VrPEI8+6lZm4vaUPKAK4nl8FiAjGDNmysQvpJC9vfIdYaEwRwWEdq7ZmLT123EGQAdtxBpjSILzv1RAqcbGFiQa2tR+fv+Sl6LjUM3gHyaIPAPk0lgmojuEOmBh/ag27CG09LZFkbJfmY1wBa2tR9BxsYWKFZTDY8mIATmwGle0bAaV7ggj0wfUPxFdlsNnGErfpUIu+uOr8uYh8Yt0d3xXaLUmM03zz+9RMZU2yYVg6tVHOo7wAdNS7MOJK36VBPdiV16TRxG3T1vT7Q2npajRu2fytZ4hG2mC40EQELXMzAx3lqgpMX90NfMlQBXE8JwJBqr4LEBDJDCCGV2i1JSBvhbO5ZtQJzmHkn17e+Q4p2cmYsNCYIsfXqLRZsz0XLrQNgbe9XDvAumyt7biDIJq/s7YDtuIMdLHSmurVRzmd0nevBNsmFXPcFoPjYwsSlGQ7hA1taj56alqo5A7PC5MJ/50KAK4nfQeesfAPk0SHCKPSHgHyaGkGwv73YlddgGVnyxlsNnFuawbn/tQbdonTK+AQ2npaZ91KzPm532+Ovu/5F7e+Q2CwjtXW1qPoodGTfjjYwsRP3/JS0btn8aa8V2c/tQbdSLI2S9gNK9qvChtMNgNK9kEEemDfYO/DqGffVTFuju9Gab55y2GzjLxmgxolb9KgUmjiNswMd5W7C0cDIgIWuVUFJi/Fuju+sr0LKCu0WpJcs2oEwtf/p7XQzzEs2Z6LW96uHZtkwrDsY/ImdWqjnAJtkwqcCQap6w42P3IHZ4UFAFcTlb9KguK4ehR7sSuuDLYbOJLSjpvl1b4NfNzvtwvb3yGG09LU8dTiQmjds/gf2oNugb4Wzfa5JltvsHfhGLdHd4gIWub/D2pwZgY7yhEBC1yPZZ7/+GKuaWFr/9MWbM9FoArieNcN0u5OBINUOQOzwqdnJmHQYBb3SWlHTT5ud9uu0WpK2dZa3EDfC2Y32DvwqbyuU967nsVHss9/MLX/6b298hzKusKKU7OTMCS0o6a60DYFzdcGk1TeVykj2We/s2Z6LsRhSrhdaBsCKm8rlLQLvjfDDI6hWgXfGy0C740AAAAAGRsxQTI2YoIrLVPDZGzFBH139EVWWqeGT0GWx8jZigjRwrtJ+u/oiuP02custU8Mta5+TZ6DLY6HmBzPSsISUVPZIxB49HDTYe9Bki6u11U3teYUHJi11wWDhJaCG5hZmwCpGLAt+tupNsua5nddXf9sbBzUQT/fzVoOnpWEJKKMnxXjp7JGIL6pd2Hx6OGm6PPQ58PegyTaxbJlXV2uqkRGn+tva8wodnD9aTkxa64gKlrvCwcJLBIcOG3fRjbzxl0Hsu1wVHH0a2Uwuyrz96IxwraJHJF1kAegNBefvPsOhI26JaneeTyy7zhz83n/auhIvkHFG31Y3io88HlPBelifkTCTy2H21QcxpQVigGNDrtApiPog7842cI4oMUNIbv0TAqWp48TjZbOXMwACUXXMUhu+mKLd+FTyrq7XVSjoGwViI0/1pGWDpfe15hQx8ypEezh+tL1+suTcmLXXGt55h1AVLXeWU+EnxYOElgPFSMZJDhw2j0jQZtl/WunfOZa5lfLCSVO0DhkAZGuoxiKn+Izp8whKrz9YK0k4a+0P9DunxKDLYYJsmzJSCSr0FMV6vt+RiniZXdoLz959jYkSLcdCRt0BBIqNUtTvPJSSI2zeWXecGB+7zHn5vP+/v3Cv9XQkXzMy6A9g4o2+pqRB7uxvFR4qKdlOTuDmEsimKkKCbX6yRCuy4hf711PRvRsDm3ZP810wg6M81oSQ+pBIwLBbHDB2HdBgJc210eOLeYGpQC1xbwbhIRxQYoaaFq7W0N36JhabNnZFS1PHgw2fl8nGy2cPgAc3bmYABKggzFTi65ikJK1U9Hd9MUWxO/0V+/Cp5T22ZbVrge86bccjaicMd5rhSrvKspree3TcEis+F0bb+FGKi5m3jbhf8UHoFToVGNN82UiArLz5RupwqQwhJFnKZ+gJuTFrrj93p/51vPMOs/o/XuAqWu8mbJa/bKfCT6rhDh/LBwksDUHFfEeKkYyBzF3c0hw4bRRa9D1ekaDNmNdsnfL+tdO0uHmD/nMtczg14SNr5YSSraNIwudoHDIhLtBiQMjXUYaOGwHMRU/xCgODoVnT5hCflSpA1V5+sBMYsuBgTjFH5gj9F6zDqedqhWW3OVUABv8TzFa12Jimc55U9hJ4U8XUPp+VnvXLZVizBzULY2KEzSWu1Ifu+iRBqDZ0F5+8+xHZcKtbEiRbnVToC86EjboIwkHqQgkVGoRP2Urlqd55I+8SKWkkRtmvYoqJ/LLvODr0I2hwP3eYtnm7yMUvOG9DafQ/CaKgz8/kbJ+cNAkuWnLFfhC5kY7W/13etxla7XFflr07lMJN/dIOHa4Ca6xoRKf8Io/zDOTJP1yAAAAAAHCajcDhNRuAka+WQcJqNwGy8LrBI18sgVPFoUOE1G4D9E7jw2XhdYMVe/hCRr5ZAjYk1MKni0KC1xHPRwmo3Ad5MlHH6J3Hh5gHSkbLwusGu1hmxir38IZabX1EjXyyBP3mP8RsSamEHNMkRU8WhQU/jAjFriOehd65E04TUbgOY8s1zvJko46C/i5P0TuPD6GhAs8wDpSPQJQZTZeF1g3nH1vNdrDNjQYqQExV7+EMJXVszLTa+ozEQHdJGvlkCWpj6cn7zH+Ji1bySNiTUwioCd7IOaZIiEk8xUqeLQoK7reHyn8YEYoPgpxLXEc9CyzdsMu9ciaLzeirXCajcBxWOf3cx5ZrnLcM5l3kyUcdlFPK3QX8XJ11ZtFfonceH9Ltk99DQgWfM9iIXmAdKR4Qh6TegSgynvGyv1svC6wbX5Eh284+t5u+pDpa7WGbGp37FtoMVICafM4NWKvfwhjbRU/YSurZmDpwVFlptfUZGS942YiA7pn4GmNSNfLIEkVoRdLUx9OSpF1eU/eY/xOHAnLTFq3kk2Y3aVGxJqYRwbwr0VATvZEgiTBQc0yREAPWHNCSeYqQ4uMHVTxaFBVMwJnV3W8Pla31glT+MCMUjqqu1B8FOJRvn7VWuI56FsgU99ZZu2GWKSHsV3rkTRcKfsDXm9FWl+tL23hNRuA4Pdxt+Kxz+7jc6XZ5jyzXOf+2WvluGcy5HoNBe8mSjju5CAP7KKeVu1g9GHoL+Lk6e2I0+urNorqaVy9/RO48PzR0sf+l2ye/1UGqfoaECz72Hob+Z7EQvhcrnXzAOlI8sKDf/CEPSbxRlcR9AlBlPXLK6P3jZX69k//zdl4XWDYujdX2vyJDts+4znecfW837Ofi931IdLcN0vl12sM2NapZu/U79i21S2ygdBipATRoM4z0+ZwatIkGl3FXv4QxJyUJ8baKn7HGEBJwldWzMOVPPvB04KiwBHolctNr6jKj8WfyMl7xskLEfHMRAd0zYZtQ8/A0xrOArktka+WQJBt/HeSK0Iuk+koGZamPpyXZFSrlSLq8pTggMWfvMf4nn6tz5w4E5ad+nmhmLVvJJl3BRObMbtKmvPRfY2JNTCMS18Hjg3hXo/Pi2mKgJ3si0L324kESYKIxiO1g5pkiIJYDr+AHrDmgdza0YSTzFSFUaZjhxcYOobVcg2p4tCgqCC6l6pmBM6rpG75rut4fK8pEkutb6wSrK3GJafxgRimM+svpHVVdqW3P0Gg+CnEoTpD86N8/aqivpedtcRz0LQGGee2QKe+t4LNibLN2wyzD7E7sUkPYrCLZVW71yJouhVIX7hT9ga5kZwxvN6KtL0c4IO/Wl7avpg07QAAAAC4vGdlqgnIixK1r+6PYpdXN97wMiVrX9yd1zi5xbQo730IT4pvveBk1wGHAUrWv7jyatjd4N93M1hjEFZQGVef6KUw+voQnxRCrPhx33vAyGfHp611cghDzc5vJpWtf3AtERgVP6S3+4cY0J4az+gnonOPQrDGIKwIekfJoDKvPhiOyFsKO2e1socA0C9QOGmX7F8MhVnw4j3ll4dlhofR3TrgtM+PT1p3Myg/6uQQhlJYd+NA7dgN+FG/aPAr+KFIl5/EWiIwKuKeV09/SW/2x/UIk9VAp31t/MAYNZ/QTo0jtyuflhjFJyp/oLr9RxkCQSB8EPSPkqhI6PebFFg9I6g/WDEdkLaJoffTFHbPaqzKqA++fwfhBsNghF6gcNLmHBe39Km4WUwV3zzRwueFaX6A4HvLLw7Dd0hryw0PonOxaMdhBMcp2bigTERvmPX80/+Q7mZQflbaNxsOuSdNtgVAKKSw78YcDIijgduwGjln138r0niRk24f9Dsm9wODmpBmkS8/iCmTWO20RGBUDPgHMR5NqN+m8c+6/pLf7EYuuIlUmxdn7CdwAnHwSLvJTC/e2/mAMGNF51VrP6Cc04PH+cE2aBd5ig9y5F03y1zhUK5OVP9A9uiYJa6LiHMWN+8WBIJA+Lw+J50h6R8kmVV4QYvg168zXLDK7Vm2O1Xl0V5HUH6w/+wZ1WI7IWzah0YJyDLp53COjoIo7Z7UkFH5sYLkVl86WDE6p48Jgx8zbuYNhsEItTqmbb1A4aQF/IbBF0kpL6/1TkoyInbzip4Rlpgrvnggl9kdePTJS8BIri7S/QHAakFmpfeWXhxPKjl5XZ+Wl+Uj8fJNaxkF9dd+YOdi0Y5f3rbrwgmOUnq16TdoAEbZ0LwhvIjfMeowY1aPItb5YZpqngQHvaa9vwHB2K20bjYVCAlTHXJOmqXOKf+3e4YRD8fhdJIQ2c0qrL6oOBkRRoCldiPYxmZ1YHoBEHLPrv7Kc8mbV6TxIu8Ylkf9rTmpRRFezHZN7gbO8Ylj3EQmjWT4Qej5L3lRQZMeNFMmsdrrmta/s/nG6QtFoYwZ8A5ioUxpBzybUb6EJzbblpKZNS4u/lAmVLmZnuje/IxdcRI04RZ3qTYuzhGKSasDP+ZFu4OBIOPgkXZbXPYTSelZ/fFVPphsggYh1D5hRMaLzqp+N6nP1n9BOG7DJl18domzxMru1lkd1m/hobEK8xQe5EuoeYETy2nXq3cOsrnCoVwBfsY5nKn+gCQVmeU2oDYLjhxRboZmFqc+2nHCLG/eLJTTuUkJBIHwsbjmlaMNSXsbsS4eQ9I+SPtuWS3p2/bDUWeRpsywqR90DM56ZrlhlN4FBvEAAAAAAAAAAAMAAAAEAAQACAAEAAQAAAAEAAUAEAAIAAQAAAAEAAYAIAAgAAQAAAAEAAQAEAAQAAUAAAAIABAAIAAgAAUAAAAIABAAgACAAAUAAAAIACAAgAAAAQUAAAAgAIAAAgEABAUAAAAgAAIBAgEAEAUAQYHJAAu2EAECAwQEBQUGBgYGBwcHBwgICAgICAgICQkJCQkJCQkKCgoKCgoKCgoKCgoKCgoKCwsLCwsLCwsLCwsLCwsLCwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwAAEBESEhMTFBQUFBUVFRUWFhYWFhYWFhcXFxcXFxcXGBgYGBgYGBgYGBgYGBgYGBkZGRkZGRkZGRkZGRkZGRkaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0AAQIDBAUGBwgICQkKCgsLDAwMDA0NDQ0ODg4ODw8PDxAQEBAQEBAQERERERERERESEhISEhISEhMTExMTExMTFBQUFBQUFBQUFBQUFBQUFBUVFRUVFRUVFRUVFRUVFRUWFhYWFhYWFhYWFhYWFhYWFxcXFxcXFxcXFxcXFxcXFxgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxscwCcAAMAsAAABAQAAHgEAAA8AAABALAAAQC0AAAAAAAAeAAAADwAAAAAAAADALQAAAAAAABMAAAAHAAAAAAAAAAwACACMAAgATAAIAMwACAAsAAgArAAIAGwACADsAAgAHAAIAJwACABcAAgA3AAIADwACAC8AAgAfAAIAPwACAACAAgAggAIAEIACADCAAgAIgAIAKIACABiAAgA4gAIABIACACSAAgAUgAIANIACAAyAAgAsgAIAHIACADyAAgACgAIAIoACABKAAgAygAIACoACACqAAgAagAIAOoACAAaAAgAmgAIAFoACADaAAgAOgAIALoACAB6AAgA+gAIAAYACACGAAgARgAIAMYACAAmAAgApgAIAGYACADmAAgAFgAIAJYACABWAAgA1gAIADYACAC2AAgAdgAIAPYACAAOAAgAjgAIAE4ACADOAAgALgAIAK4ACABuAAgA7gAIAB4ACACeAAgAXgAIAN4ACAA+AAgAvgAIAH4ACAD+AAgAAQAIAIEACABBAAgAwQAIACEACAChAAgAYQAIAOEACAARAAgAkQAIAFEACADRAAgAMQAIALEACABxAAgA8QAIAAkACACJAAgASQAIAMkACAApAAgAqQAIAGkACADpAAgAGQAIAJkACABZAAgA2QAIADkACAC5AAgAeQAIAPkACAAFAAgAhQAIAEUACADFAAgAJQAIAKUACABlAAgA5QAIABUACACVAAgAVQAIANUACAA1AAgAtQAIAHUACAD1AAgADQAIAI0ACABNAAgAzQAIAC0ACACtAAgAbQAIAO0ACAAdAAgAnQAIAF0ACADdAAgAPQAIAL0ACAB9AAgA/QAIABMACQATAQkAkwAJAJMBCQBTAAkAUwEJANMACQDTAQkAMwAJADMBCQCzAAkAswEJAHMACQBzAQkA8wAJAPMBCQALAAkACwEJAIsACQCLAQkASwAJAEsBCQDLAAkAywEJACsACQArAQkAqwAJAKsBCQBrAAkAawEJAOsACQDrAQkAGwAJABsBCQCbAAkAmwEJAFsACQBbAQkA2wAJANsBCQA7AAkAOwEJALsACQC7AQkAewAJAHsBCQD7AAkA+wEJAAcACQAHAQkAhwAJAIcBCQBHAAkARwEJAMcACQDHAQkAJwAJACcBCQCnAAkApwEJAGcACQBnAQkA5wAJAOcBCQAXAAkAFwEJAJcACQCXAQkAVwAJAFcBCQDXAAkA1wEJADcACQA3AQkAtwAJALcBCQB3AAkAdwEJAPcACQD3AQkADwAJAA8BCQCPAAkAjwEJAE8ACQBPAQkAzwAJAM8BCQAvAAkALwEJAK8ACQCvAQkAbwAJAG8BCQDvAAkA7wEJAB8ACQAfAQkAnwAJAJ8BCQBfAAkAXwEJAN8ACQDfAQkAPwAJAD8BCQC/AAkAvwEJAH8ACQB/AQkA/wAJAP8BCQAAAAcAQAAHACAABwBgAAcAEAAHAFAABwAwAAcAcAAHAAgABwBIAAcAKAAHAGgABwAYAAcAWAAHADgABwB4AAcABAAHAEQABwAkAAcAZAAHABQABwBUAAcANAAHAHQABwADAAgAgwAIAEMACADDAAgAIwAIAKMACABjAAgA4wAIAAAABQAQAAUACAAFABgABQAEAAUAFAAFAAwABQAcAAUAAgAFABIABQAKAAUAGgAFAAYABQAWAAUADgAFAB4ABQABAAUAEQAFAAkABQAZAAUABQAFABUABQANAAUAHQAFAAMABQATAAUACwAFABsABQAHAAUAFwAFAEHg2QALTQEAAAABAAAAAQAAAAEAAAACAAAAAgAAAAIAAAACAAAAAwAAAAMAAAADAAAAAwAAAAQAAAAEAAAABAAAAAQAAAAFAAAABQAAAAUAAAAFAEHQ2gALZQEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAUAAAAGAAAABgAAAAcAAAAHAAAACAAAAAgAAAAJAAAACQAAAAoAAAAKAAAACwAAAAsAAAAMAAAADAAAAA0AAAANAEGA3AALIwIAAAADAAAABwAAAAAAAAAQERIACAcJBgoFCwQMAw0CDgEPAEG03AALaQEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACgAAAAwAAAAOAAAAEAAAABQAAAAYAAAAHAAAACAAAAAoAAAAMAAAADgAAABAAAAAUAAAAGAAAABwAAAAgAAAAKAAAADAAAAA4ABBtN0AC5oCAQAAAAIAAAADAAAABAAAAAYAAAAIAAAADAAAABAAAAAYAAAAIAAAADAAAABAAAAAYAAAAIAAAADAAAAAAAEAAIABAAAAAgAAAAMAAAAEAAAABgAAAAgAAAAMAAAAEAAAABgAAAAgAAAAMAAAAEAAAABgAABuZWVkIGRpY3Rpb25hcnkAc3RyZWFtIGVuZAAAZmlsZSBlcnJvcgBzdHJlYW0gZXJyb3IAZGF0YSBlcnJvcgBpbnN1ZmZpY2llbnQgbWVtb3J5AGJ1ZmZlciBlcnJvcgBpbmNvbXBhdGlibGUgdmVyc2lvbgAAAAAoLwAAOC8AAEMvAABELwAATy8AAFwvAABnLwAAey8AAIgvAABDLwAAMS4yLjExAEHQ3wALA9AxUA=="),
        ef, Tb, ml = Uint8Array.BYTES_PER_ELEMENT, np = {
            bytesReceived: "br",
            frameDropped: "fd",
            frameReceived: "fr",
            googJitterReceived: "jr",
            isAudioMute: "am",
            isFreeze: "fz",
            mediaType: "mt",
            packetsLost: "pl",
            packetsReceived: "pr",
            peerId: "pid",
            id: "id",
            ssrc: "ssrc",
            timestamp: "ts",
            type: "tp",
            frameRateInput: "fi",
            frameRateSent: "fs",
            googRtt: "rt",
            isVideoMute: "vm"
        }, op = {
            stats: "sts",
            state: "st",
            stream_id: "stid",
            session_id: "seid",
            stream_type: "stt",
            app_id: "aid",
            channel_key: "ck",
            channel_name: "cn",
            sdk_version: "sv",
            browser: "b",
            process_id: "pcid",
            mode: "m",
            codec: "c",
            role: "r",
            has_changed_gateway: "hcg",
            ap_response: "ar",
            extends: "es",
            details: "d",
            features: "ft",
            p2p_id: "ppid",
            sdp: "sdp",
            audio: "a",
            video: "v",
            attributes: "at",
            hq: "h",
            lq: "l",
            stereo: "str",
            speech: "spe",
            extend: "e",
            pingpongElapse: "ppe"
        }, pp = {_message: "m", _type: "t", _id: "id"}, qp = {
            join_v2: "j2",
            publish: "pub",
            publish_related_stats: "prs",
            ping: "pi",
            traffic_stats: "ts",
            ping_back: "pib",
            publish_stats: "pubs"
        }, Ag;

    class rp {
        constructor() {
        }

        async init() {
            Ag || (Ag = (await (async () => (Tb || (Tb = await dm()), {
                zlibCompress: a => {
                    var b, c = new Uint8Array(a);
                    const e = ml * c.byteLength;
                    a = Tb._malloc(e);
                    const g = Tb._malloc(3 * e);
                    for (let b = 0; b < e; b++) Tb.HEAP8[a / ml + b] = c[b];
                    c = Tb._zlibCompress(a, e, g);
                    c = new Uint8Array(Da(b = Tb.HEAP8).call(b, g, g + c));
                    return Tb._free(a), Tb._free(g), c
                }
            }))()).zlibCompress);
            this.zlibCompress = Ag
        }

        msgPackCompress(a) {
            return ep.encode(a)
        }

        compress(a) {
            let b = x(), c = this.compressKeyAndValue(JSON.parse(w(a))), e = this.msgPackCompress(c);
            var g = this.zlibCompress(e);
            g = new Uint8Array([49, 49, 49, 50, ...vb(g)]);
            return {
                origin: Ia({},
                    a),
                originLength: w(a).length,
                shortKeyAndValue: c,
                msgpackSer: e,
                compressed: g,
                compressedLength: g.length,
                time: x() - b
            }
        }

        compressKeyAndValue(a) {
            return this._ObjectKeyCompress(this._typeCompress(a))
        }

        _typeCompress(a) {
            let b = a._type;
            return b ? (a._type = qp[b] || b, a) : a
        }

        _ObjectKeyCompress(a) {
            let b = a._message;
            if (b) {
                let c = b.stats;
                c && (b.stats = this._statsCompress(c));
                a._message = this._messageCompress(b)
            }
            return this._reportCompress(a)
        }

        _statsCompress(a) {
            return this._keyCompress(a, np)
        }

        _messageCompress(a) {
            return this._keyCompress(a,
                op)
        }

        _reportCompress(a) {
            return this._keyCompress(a, pp)
        }

        _keyCompress(a, b) {
            let c = {}, e = aa(a);
            return Qc(e).call(e, (e, h) => {
                e = a[h];
                return b[h] ? c[b[h]] = e : c[h] = e, c
            }, c), c
        }
    }

    class sp extends Ma {
        constructor(a) {
            super();
            this.lowPriorityQueue = [];
            this.highPriorityQueue = [];
            this.AgoraWebSocketManager = a
        }

        get queue() {
            return [...this.highPriorityQueue, ...this.lowPriorityQueue]
        }

        reset() {
            this.lowPriorityQueue = [];
            this.highPriorityQueue = []
        }

        pushMessage(a, b = !1) {
            b ? this.highPriorityQueue.push(a) : this.lowPriorityQueue.push(a);
            this.sendMessage()
        }

        sendMessage() {
            let a =
                this.queue.length;
            mb(() => {
                this._sendMessage()
            }, 5 > a ? 15 * a : 60 + 3 * (a - 4))
        }

        _sendMessage() {
            var a;
            if (this.queue.length) {
                var b = this.AgoraWebSocketManager.getConnection();
                if (b && 1 === b.readyState) {
                    var c = this.queue.shift();
                    return ia(a = this.lowPriorityQueue).call(a, c) ? this.lowPriorityQueue.shift() : this.highPriorityQueue.shift(), b.send(c.compressed), c
                }
            }
        }
    }

    class Bg extends Ma {
        constructor(a, b, c = !1) {
            super();
            this.currentURLIndex = this.connectionID = 0;
            this.reconnectMode = "tryNext";
            this._state = "closed";
            this.reconnectCount =
                0;
            this.isCompressorInitSuccess = !1;
            this.wsDeflateLength = this.wsInflateLength = 0;
            this.name = a;
            this.retryConfig = b;
            this.useCompress = c
        }

        get url() {
            return this.websocket ? this.websocket.url : null
        }

        get state() {
            return this._state
        }

        set state(a) {
            a !== this._state && (this._state = a, "reconnecting" === this._state ? this.emit(Z.RECONNECTING, this.reconnectReason) : "connected" === this._state ? this.emit(Z.CONNECTED) : "closed" === this._state ? this.emit(Z.CLOSED) : "failed" === this._state && this.emit(Z.FAILED))
        }

        getConnection() {
            return this.websocket ||
                void 0
        }

        init(a) {
            let b = (b, e) => {
                this.urls = a;
                const c = this.urls[this.currentURLIndex];
                this.state = "connecting";
                this.messageSender = new sp(this);
                this.createWebSocketConnection(c).then(b).catch(e);
                this.once(Z.CLOSED, () => e(new p(n.WS_DISCONNECT)));
                this.once(Z.CONNECTED, () => b())
            };
            return new z((a, e) => {
                this.compressor = new rp;
                this.compressor.init().then(() => {
                    var c;
                    k.debug("websocket compressor initialized successfully");
                    this.isCompressorInitSuccess = !0;
                    this.compress = pa(c = this.compressor.compress).call(c, this.compressor);
                    b(a, e)
                }).catch(() => {
                    k.debug("websocket compressor failed to initialize");
                    b(a, e)
                })
            })
        }

        close(a, b) {
            if (this.currentURLIndex = 0, this.reconnectCount = 0, this.websocket) {
                this.websocket.onclose = null;
                this.websocket.onopen = null;
                this.websocket.onmessage = null;
                let a = this.websocket;
                b ? mb(() => a.close(), 500) : a.close();
                this.websocket = void 0
            }
            this.state = a ? "failed" : "closed"
        }

        reconnect(a, b) {
            if (!this.websocket) return void k.warning("[".concat(this.name, "] can not reconnect, no websocket"));
            void 0 !== a && (this.reconnectMode = a);
            k.debug("[".concat(this.name, "] reconnect is triggered initiative"));
            a = this.websocket.onclose;
            this.websocket.onclose = null;
            this.websocket.close();
            a && pa(a).call(a, this.websocket)({code: 9999, reason: b})
        }

        sendMessage(a, b = !1) {
            if (!this.websocket || this.websocket.readyState !== WebSocket.OPEN) throw new p(n.WS_ABORT, "websocket is not ready");
            try {
                let c = null;
                if (this.isCompressorInitSuccess && this.useCompress && v.WEBSOCKET_COMPRESS) c = this.compress(a), this.setWsInflateData(c); else {
                    if (this.isCompressorInitSuccess && this.useCompress) {
                        let b =
                            this.compress(a);
                        this.setWsInflateData(b)
                    }
                    let b = w(a);
                    c = {compressed: b, compressedLength: b.length, origin: a}
                }
                b ? this.websocket.send(c.compressed) : this.messageSender.pushMessage(c)
            } catch (c) {
                throw new p(n.WS_ERR, "send websocket message error" + c.toString());
            }
        }

        setWsInflateData(a) {
            this.wsDeflateLength += a.originLength;
            this.wsInflateLength += a.compressedLength
        }

        getWsInflateData() {
            let a = this.wsInflateLength, b = this.wsDeflateLength;
            return this.clearWsInflateData(), {wsInflateLength: a, wsDeflateLength: b}
        }

        clearWsInflateData() {
            this.wsDeflateLength =
                this.wsInflateLength = 0
        }

        async createWebSocketConnection(a) {
            let b = this.connectionID += 1;
            return new z((c, e) => {
                var g, h;
                this.websocket && (this.websocket.onclose = null, this.websocket.close());
                v.GATEWAY_WSS_ADDRESS && Rc(g = this.name).call(g, "gateway") && (a = v.GATEWAY_WSS_ADDRESS);
                k.debug(m(h = "[".concat(this.name, "] start connect, url: ")).call(h, a));
                try {
                    this.websocket = new WebSocket(a), this.websocket.binaryType = "arraybuffer"
                } catch (q) {
                    var l;
                    g = new p(n.WS_ERR, "init websocket failed! Error: ".concat(q.toString()));
                    return k.error(m(l = "[".concat(this.name, "]")).call(l, g)), void e(g)
                }
                Db(5E3).then(() => {
                    b === this.connectionID && this.websocket && this.websocket.readyState !== WebSocket.OPEN && this.websocket && this.websocket.close()
                });
                this.websocket.onopen = () => {
                    k.debug("[".concat(this.name, "] websocket opened:"), a);
                    this.reconnectMode = "retry";
                    this.state = "connected";
                    this.reconnectCount = 0;
                    c()
                };
                this.websocket.onclose = async a => {
                    var b, g, h, l;
                    if (k.debug(m(b = m(g = m(h = m(l = "[".concat(this.name, "] websocket close ")).call(l, this.websocket &&
                        this.websocket.url, ", code: ")).call(h, a.code, ", reason: ")).call(g, a.reason, ", current mode: ")).call(b, this.reconnectMode)), this.reconnectCount < this.retryConfig.maxRetryCount) {
                        "connected" === this.state && (this.reconnectReason = a.reason, this.state = "reconnecting");
                        b = cc(this, Z.WILL_RECONNECT, this.reconnectMode) || this.reconnectMode;
                        b = await this.reconnectWithAction(b);
                        if ("closed" === this.state) return void k.debug("[".concat(this.connectionID, "] ws is closed, no need to reconnect"));
                        if (!b) return e(new p(n.WS_DISCONNECT,
                            "websocket reconnect failed: ".concat(a.code))), void this.close(!0);
                        c()
                    } else e(new p(n.WS_DISCONNECT, "websocket close: ".concat(a.code))), this.close()
                };
                this.websocket.onmessage = a => {
                    this.emit(Z.ON_MESSAGE, a)
                }
            })
        }

        async reconnectWithAction(a, b) {
            var c, e;
            if (!b && this.reconnectCount >= this.retryConfig.maxRetryCount || !this.urls || "closed" === this.state) return !1;
            this.onlineReconnectListener || !navigator || void 0 === navigator.onLine || navigator.onLine || (this.onlineReconnectListener = new z(a => {
                let b = () => {
                    this.onlineReconnectListener =
                        void 0;
                    window.removeEventListener("online", b);
                    a()
                };
                window.addEventListener("online", b)
            }));
            b = function (a, b) {
                return Math.min(b.maxRetryTimeout, b.timeout * Math.pow(b.timeoutFactor, a))
            }(this.reconnectCount, this.retryConfig);
            if (k.debug(m(c = m(e = "[".concat(this.name, "] wait ")).call(e, b, "ms to reconnect websocket, mode: ")).call(c, a)), await z.race([Db(b), this.onlineReconnectListener || new z(() => {
            })]), "closed" === this.state) return !1;
            this.reconnectCount += 1;
            try {
                if ("retry" === a) await this.createWebSocketConnection(this.urls[this.currentURLIndex]);
                else if ("tryNext" === a) {
                    var g, h;
                    if (this.currentURLIndex += 1, this.currentURLIndex >= this.urls.length) return await this.reconnectWithAction("recover");
                    k.debug(m(g = m(h = "[".concat(this.name, "] websocket url length: ")).call(h, this.urls.length, " current index: ")).call(g, this.currentURLIndex));
                    await this.createWebSocketConnection(this.urls[this.currentURLIndex])
                } else "recover" === a && (k.debug("[".concat(this.name, "] request new urls")), this.urls = await za(this, Z.REQUEST_NEW_URLS), this.currentURLIndex = 0, await this.createWebSocketConnection(this.urls[this.currentURLIndex]));
                return !0
            } catch (l) {
                return k.error("[".concat(this.name, "] reconnect failed"), l.toString()), await this.reconnectWithAction(a)
            }
        }
    }

    class tp {
        constructor(a) {
            this.input = [];
            this.size = a
        }

        add(a) {
            var b;
            (this.input.push(a), this.input.length > this.size) && Oa(b = this.input).call(b, 0, 1)
        }

        mean() {
            var a;
            return 0 === this.input.length ? 0 : Qc(a = this.input).call(a, (a, c) => a + c) / this.input.length
        }
    }

    class up extends Ma {
        constructor(a) {
            super();
            this._connectionState = wa.CLOSED;
            this.openConnectionTime = x();
            this.lastMsgTime = x();
            this.uploadCache =
                [];
            this.rttRolling = new tp(5);
            this.pingpongTimeoutCount = 0;
            this.onWebsocketMessage = a => {
                if (a.data instanceof ArrayBuffer) return void this.emit(Q.ON_BINARY_DATA, a.data);
                a = JSON.parse(a.data);
                if (this.lastMsgTime = x(), Object.prototype.hasOwnProperty.call(a, "_id")) {
                    let b = "res-@".concat(a._id);
                    this.emit(b, a._result, a._message)
                } else if (Object.prototype.hasOwnProperty.call(a, "_type") && (this.emit(a._type, a._message), a._type === da.ON_NOTIFICATION && this.handleNotification(a._message), a._type === da.ON_USER_BANNED)) switch (a._message.error_code) {
                    case 14:
                        this.close("UID_BANNED");
                        break;
                    case 15:
                        this.close("IP_BANNED");
                        break;
                    case 16:
                        this.close("CHANNEL_BANNED")
                }
            };
            this.clientId = a.clientId;
            this.spec = a;
            this.websocket = new Bg("gateway-".concat(this.clientId), this.spec.retryConfig, !0);
            this.handleWebsocketEvents();
            window.addEventListener("offline", () => {
                this.connectionState === wa.CONNECTED && this.reconnect("retry", Xa.OFFLINE)
            })
        }

        get connectionState() {
            return this._connectionState
        }

        set connectionState(a) {
            a !== this._connectionState && (this._connectionState = a, a === wa.CONNECTED ? this.emit(Q.WS_CONNECTED) :
                a === wa.RECONNECTING ? this.emit(Q.WS_RECONNECTING, this._websocketReconnectReason) : a === wa.CLOSED && this.emit(Q.WS_CLOSED, this._disconnectedReason))
        }

        get currentURLIndex() {
            return this.websocket.currentURLIndex
        }

        get url() {
            return this.websocket ? this.websocket.url : null
        }

        get rtt() {
            return this.rttRolling.mean()
        }

        async request(a, b, c, e) {
            var g, h, l, q, t;
            let P = ta(6, "");
            var F = {_id: P, _type: a, _message: b};
            let C = this.websocket.connectionID;
            var r = () => new z((a, b) => {
                if (this.connectionState === wa.CONNECTED) return a();
                const c =
                    () => {
                        this.off(Q.WS_CLOSED, e);
                        a()
                    }, e = () => {
                    this.off(Q.WS_CONNECTED, c);
                    b(new p(n.WS_ABORT))
                };
                this.once(Q.WS_CONNECTED, c);
                this.once(Q.WS_CLOSED, e)
            });
            if (this.connectionState !== wa.CONNECTING && this.connectionState !== wa.RECONNECTING || a === ka.JOIN || a === ka.REJOIN || await r(), this.websocket.sendMessage(F, !0), !e) {
                F = new z((c, e) => {
                    let g = !1;
                    const h = (e, h) => {
                        g = !0;
                        c({isSuccess: "success" === e, message: h || {}});
                        this.off(Q.WS_CLOSED, l);
                        this.off(Q.WS_RECONNECTING, l);
                        this.emit(Q.REQUEST_SUCCESS, a, b)
                    };
                    this.once("res-@".concat(P),
                        h);
                    const l = () => {
                        e(new p(n.WS_ABORT, "type: ".concat(a)));
                        this.off(Q.WS_CLOSED, l);
                        this.off(Q.WS_RECONNECTING, l);
                        this.off("res-@".concat(P), h)
                    };
                    this.once(Q.WS_CLOSED, l);
                    this.once(Q.WS_RECONNECTING, l);
                    Db(v.SIGNAL_REQUEST_TIMEOUT).then(() => {
                        this.websocket.connectionID !== C || g || (k.warning("ws request timeout, type: ".concat(a)), this.emit(Q.REQUEST_TIMEOUT, a, b))
                    })
                });
                e = null;
                try {
                    e = await F
                } catch (A) {
                    if (this.connectionState === wa.CLOSED || a === ka.LEAVE) throw new p(n.WS_ABORT);
                    return !this.spec.forceWaitGatewayResponse ||
                    c ? A.throw() : a === ka.JOIN || a === ka.REJOIN ? null : (await r(), await this.request(a, b))
                }
                if (e.isSuccess) return e.message;
                c = Number(e.message.error_code || e.message.code);
                r = $h(c);
                F = new p(n.UNEXPECTED_RESPONSE, m(g = "".concat(r.desc, ": ")).call(g, e.message.error_str), {
                    code: c,
                    data: e.message
                });
                return "success" === r.action ? e.message : (k.warning(m(h = m(l = m(q = m(t = "[".concat(this.websocket.connectionID, "] unexpected response from type ")).call(t, a, ", error_code: ")).call(q, c, ", message: ")).call(l, r.desc, ", action: ")).call(h,
                    r.action)), "failed" === r.action ? F.throw() : "quit" === r.action ? (this.initError = F, this.close(), F.throw()) : (c === E.ERR_JOIN_BY_MULTI_IP ? (this.multiIpOption = e.message.option, k.warning("[".concat(this.clientId, "] detect multi ip, recover")), this.reconnect("recover", Xa.MULTI_IP)) : this.reconnect(r.action, Xa.SERVER_ERROR), a === ka.JOIN || a === ka.REJOIN ? null : await this.request(a, b)))
            }
        }

        waitMessage(a, b) {
            return new z(c => {
                let e = g => {
                    b && !b(g) || (this.off(a, e), c(g))
                };
                this.on(a, e)
            })
        }

        upload(a, b) {
            a = {_type: a, _message: b};
            try {
                this.websocket.sendMessage(a)
            } catch (e) {
                b =
                    v.MAX_UPLOAD_CACHE || 50;
                var c;
                (this.uploadCache.push(a), this.uploadCache.length > b) && Oa(c = this.uploadCache).call(c, 0, 1);
                0 < this.uploadCache.length && !this.uploadCacheInterval && (this.uploadCacheInterval = window.setInterval(() => {
                    var a;
                    if (this.connectionState === wa.CONNECTED) {
                        var b = Oa(a = this.uploadCache).call(a, 0, 1)[0];
                        0 === this.uploadCache.length && (window.clearInterval(this.uploadCacheInterval), this.uploadCacheInterval = void 0);
                        this.upload(b._type, b._message)
                    }
                }, v.UPLOAD_CACHE_INTERVAL || 2E3))
            }
        }

        send(a, b) {
            this.websocket.sendMessage({
                _type: a,
                _message: b
            })
        }

        init(a) {
            return this.initError = void 0, this.multiIpOption = void 0, this.joinResponse = void 0, this.reconnectToken = void 0, new z((b, c) => {
                this.once(Q.WS_CONNECTED, () => b(this.joinResponse));
                this.once(Q.WS_CLOSED, () => c(this.initError || new p(n.WS_ABORT)));
                this.connectionState = wa.CONNECTING;
                this.websocket.init(a).catch(c);
                this.wsInflateDataTimer && window.clearInterval(this.wsInflateDataTimer);
                this.wsInflateDataTimer = window.setInterval(() => {
                    this.handleWsInflateData()
                }, 2E4)
            })
        }

        close(a) {
            this.pingpongTimer &&
            (this.pingpongTimeoutCount = 0, window.clearInterval(this.pingpongTimer), this.pingpongTimer = void 0);
            this.wsInflateDataTimer && (this.handleWsInflateData(), window.clearInterval(this.wsInflateDataTimer), this.wsInflateDataTimer = void 0);
            this.joinResponse = this.reconnectToken = void 0;
            this._disconnectedReason = a || "LEAVE";
            this.connectionState = wa.CLOSED;
            this.websocket.close()
        }

        async join() {
            var a;
            if (!this.joinResponse) {
                var b = bd(this, Q.REQUEST_JOIN_INFO);
                b = await this.request(ka.JOIN, b);
                if (!b) return this.emit(Q.REPORT_JOIN_GATEWAY,
                    n.TIMEOUT, this.url || ""), !1;
                this.joinResponse = b;
                this.reconnectToken = this.joinResponse.rejoin_token
            }
            return this.connectionState = wa.CONNECTED, this.pingpongTimer && window.clearInterval(this.pingpongTimer), this.pingpongTimer = window.setInterval(pa(a = this.handlePingPong).call(a, this), 3E3), !0
        }

        async rejoin() {
            var a, b;
            if (!this.reconnectToken) throw new p(n.UNEXPECTED_ERROR, "can not rejoin, no rejoin token");
            var c = bd(this, Q.REQUEST_REJOIN_INFO);
            c.token = this.reconnectToken;
            c = await this.request(ka.REJOIN, c);
            return !!c &&
                (this.connectionState = wa.CONNECTED, this.pingpongTimer && window.clearInterval(this.pingpongTimer), this.pingpongTimer = window.setInterval(pa(a = this.handlePingPong).call(a, this), 3E3), c.peers && r(b = c.peers).call(b, a => {
                    this.emit(da.ON_USER_ONLINE, {uid: a.uid});
                    a.audio_mute ? this.emit(da.MUTE_AUDIO, {uid: a.uid}) : this.emit(da.UNMUTE_AUDIO, {uid: a.uid});
                    a.video_mute ? this.emit(da.MUTE_VIDEO, {uid: a.uid}) : this.emit(da.UNMUTE_VIDEO, {uid: a.uid});
                    a.audio_enable_local ? this.emit(da.ENABLE_LOCAL_AUDIO, {uid: a.uid}) : this.emit(da.DISABLE_LOCAL_AUDIO,
                        {uid: a.uid});
                    a.video_enable_local ? this.emit(da.ENABLE_LOCAL_VIDEO, {uid: a.uid}) : this.emit(da.DISABLE_LOCAL_VIDEO, {uid: a.uid});
                    a.audio || a.video || this.emit(da.ON_REMOVE_STREAM, {uid: a.uid, uint_id: a.uint_id});
                    a.audio && this.emit(da.ON_ADD_AUDIO_STREAM, {uid: a.uid, uint_id: a.uint_id, audio: !0});
                    a.video && this.emit(da.ON_ADD_VIDEO_STREAM, {uid: a.uid, uint_id: a.uint_id, video: !0})
                }), !0)
        }

        reconnect(a, b) {
            this.pingpongTimer && (this.pingpongTimeoutCount = 0, window.clearInterval(this.pingpongTimer), this.pingpongTimer = void 0);
            this.websocket.reconnect(a, b)
        }

        handleNotification(a) {
            k.debug("[".concat(this.clientId, "] receive notification: "), a);
            a = $h(a.code);
            if ("success" !== a.action) {
                if ("failed" !== a.action) return "quit" === a.action ? ("ERR_REPEAT_JOIN_CHANNEL" === a.desc && this.close("UID_BANNED"), void this.close()) : void this.reconnect(a.action, Xa.SERVER_ERROR);
                k.error("[".concat(this.clientId, "] ignore error: "), a.desc)
            }
        }

        handlePingPong() {
            if (this.websocket && "connected" === this.websocket.state) {
                0 < this.pingpongTimeoutCount && this.rttRolling.add(3E3);
                this.pingpongTimeoutCount += 1;
                var a = v.PING_PONG_TIME_OUT, b = x();
                this.pingpongTimeoutCount >= a && (k.warning("PINGPONG Timeout. Last Socket Message: ".concat(b - this.lastMsgTime, "ms")), b - this.lastMsgTime > v.WEBSOCKET_TIMEOUT_MIN) ? this.reconnect("retry", Xa.TIMEOUT) : this.request(ka.PING, void 0, !0).then(() => {
                    this.pingpongTimeoutCount = 0;
                    let a = x() - b;
                    this.rttRolling.add(a);
                    v.REPORT_STATS && this.send(ka.PING_BACK, {pingpongElapse: a})
                }).catch(a => {
                })
            }
        }

        handleWsInflateData() {
            let {wsInflateLength: a, wsDeflateLength: b} =
                this.websocket.getWsInflateData();
            0 !== a && 0 !== b && this.upload(rb.WS_INFLATE_DATA_LENGTH, {ws_deflate_length: b, ws_inflate_length: a})
        }

        handleWebsocketEvents() {
            this.websocket.on(Z.ON_MESSAGE, this.onWebsocketMessage);
            this.websocket.on(Z.CLOSED, () => {
                this.connectionState = wa.CLOSED
            });
            this.websocket.on(Z.FAILED, () => {
                this._disconnectedReason = "NETWORK_ERROR";
                this.connectionState = wa.CLOSED
            });
            this.websocket.on(Z.RECONNECTING, a => {
                this._websocketReconnectReason = a;
                this.joinResponse = void 0;
                this.connectionState === wa.CONNECTED ?
                    this.connectionState = wa.RECONNECTING : this.connectionState = wa.CONNECTING
            });
            this.websocket.on(Z.WILL_RECONNECT, (a, b) => {
                if (bd(this, Q.IS_P2P_DISCONNECTED) && "retry" === a) return this.reconnectToken = void 0, this.emit(Q.NEED_RENEW_SESSION), this.emit(Q.DISCONNECT_P2P), b("tryNext");
                "retry" !== a && (this.reconnectToken = void 0, this.emit(Q.NEED_RENEW_SESSION), this.emit(Q.DISCONNECT_P2P));
                b(a)
            });
            this.websocket.on(Z.CONNECTED, () => {
                this.openConnectionTime = x();
                this.reconnectToken ? this.rejoin().catch(a => {
                    var b;
                    k.warning(m(b =
                        "[".concat(this.clientId, "] rejoin failed ")).call(b, a));
                    this.reconnect("tryNext", Xa.SERVER_ERROR)
                }) : this.join().catch(a => {
                    if (this.emit(Q.REPORT_JOIN_GATEWAY, a.message || a.code, this.url || ""), a instanceof p && a.code === n.UNEXPECTED_RESPONSE && a.data.code === E.ERR_NO_AUTHORIZED) return k.warning("[".concat(this.clientId, "] reconnect no authorized, recover")), void this.reconnect("recover", Xa.SERVER_ERROR);
                    k.error("[".concat(this.clientId, "] join gateway request failed"), a.toString());
                    this.spec.forceWaitGatewayResponse ?
                        this.reconnect("tryNext", Xa.SERVER_ERROR) : (this.initError = a, this.close())
                })
            });
            this.websocket.on(Z.REQUEST_NEW_URLS, (a, b) => {
                za(this, Q.REQUEST_RECOVER, this.multiIpOption).then(a).catch(b)
            })
        }
    }

    let Cg = new ha;

    class vp extends Ma {
        constructor(a) {
            super();
            this.inChannelInfo = {joinAt: null, duration: 0};
            this._state = "DISCONNECTED";
            this.needToSendUnpubUnsub = new ha;
            this.hasChangeBGPAddress = this.isSignalRecover = !1;
            this.joinGatewayStartTime = 0;
            this._signalTimeout = !1;
            this.clientId = a.clientId;
            this.spec = a;
            this.signal = new up(ff({},
                a, {retryConfig: a.websocketRetryConfig}));
            this._statsCollector = a.statsCollector;
            this.role = a.role || "audience";
            this._clientRoleOptions = a.clientRoleOptions;
            this.handleSignalEvents()
        }

        get state() {
            return this._state
        }

        set state(a) {
            if (a !== this._state) {
                var b = this._state;
                this._state = a;
                "DISCONNECTED" === a && this._disconnectedReason ? this.emit(Aa.CONNECTION_STATE_CHANGE, a, b, this._disconnectedReason) : this.emit(Aa.CONNECTION_STATE_CHANGE, a, b)
            }
        }

        async join(a, b) {
            var c, e;
            "disabled" !== a.cloudProxyServer && (this.hasChangeBGPAddress =
                !0);
            let g = x();
            var h = Cg.get(a.cname);
            if (h || (h = new ha, Cg.set(a.cname, h)), h.has(a.uid)) throw h = new p(n.UID_CONFLICT), u.joinGateway(a.sid, {
                lts: g,
                succ: !1,
                ec: h.message,
                addr: null,
                uid: a.uid,
                cid: a.cid
            }), h;
            h.set(a.uid, !0);
            this.joinInfo = a;
            this.key = b;
            b = a.proxyServer ? B(c = a.gatewayAddrs).call(c, b => {
                var c, e;
                b = b.split(":");
                return m(c = m(e = "wss://".concat(a.proxyServer, "/ws/?h=")).call(e, b[0], "&p=")).call(c, b[1])
            }) : B(e = a.gatewayAddrs).call(e, a => "wss://".concat(a));
            c = 0;
            this.joinGatewayStartTime = g;
            try {
                c = (await this.signal.init(b)).uid
            } catch (l) {
                throw k.error("[".concat(this.clientId,
                    "] User join failed"), l.toString()), u.joinGateway(a.sid, {
                    lts: g,
                    succ: !1,
                    ec: l.message,
                    addr: this.signal.url,
                    uid: a.uid,
                    cid: a.cid
                }), h.delete(a.uid), this.signal.close(), l;
            }
            return this.state = "CONNECTED", this.inChannelInfo.joinAt = x(), k.debug("[".concat(this.clientId, "] Connected to gateway server")), this.trafficStatsInterval = window.setInterval(() => {
                this.updateTrafficStats().catch(a => {
                    k.warning("[".concat(this.clientId, "] get traffic stats error"), a.toString())
                })
            }, 3E3), this.networkQualityInterval = window.setInterval(() => {
                navigator && void 0 !== navigator.onLine && !navigator.onLine ? this.emit(Aa.NETWORK_QUALITY, {
                    downlinkNetworkQuality: 6,
                    uplinkNetworkQuality: 6
                }) : this._signalTimeout ? this.emit(Aa.NETWORK_QUALITY, {
                    downlinkNetworkQuality: 5,
                    uplinkNetworkQuality: 5
                }) : "CONNECTED" === this.state && this._statsCollector.trafficStats ? this.emit(Aa.NETWORK_QUALITY, {
                    uplinkNetworkQuality: Vh(this._statsCollector.trafficStats.B_unq),
                    downlinkNetworkQuality: Vh(this._statsCollector.trafficStats.B_dnq)
                }) : this.emit(Aa.NETWORK_QUALITY, {
                    uplinkNetworkQuality: 0,
                    downlinkNetworkQuality: 0
                })
            }, 2E3), c
        }

        async leave(a = !1) {
            if ("DISCONNECTED" !== this.state) {
                this.state = "DISCONNECTING";
                try {
                    if (!a && this.signal.connectionState === wa.CONNECTED) {
                        var b = this.signal.request(ka.LEAVE, void 0, !0);
                        await (3E3 === 1 / 0 ? b : z.race([b, am(3E3)]))
                    }
                } catch (c) {
                    k.warning("[".concat(this.clientId, "] leave request failed, ignore"), c)
                }
                this.signal.close();
                this.reset();
                this.state = "DISCONNECTED"
            }
        }

        async publish(a, b) {
            if (!this.joinInfo) throw new p(n.UNEXPECTED_ERROR, "publish no joinInfo");
            let c = a.getUserId(),
                e = a.videoTrack ? function (a) {
                        var b;
                        a = a._encoderConfig;
                        if (!a) return {};
                        const c = {
                            resolution: a.width && a.height ? m(b = "".concat(Wb(a.width), "x")).call(b, Wb(a.height)) : void 0,
                            maxVideoBW: a.bitrateMax,
                            minVideoBW: a.bitrateMin
                        };
                        return "number" == typeof a.frameRate ? (c.maxFrameRate = a.frameRate, c.minFrameRate = a.frameRate) : a.frameRate && (c.maxFrameRate = a.frameRate.max || a.frameRate.ideal || a.frameRate.exact || a.frameRate.min, c.minFrameRate = a.frameRate.min || a.frameRate.ideal || a.frameRate.exact || a.frameRate.max), c
                    }(a.videoTrack) :
                    {};
            if (a.on(H.NEED_ANSWER, (g, h, l) => {
                var q;
                let m = {
                    state: "offer",
                    stream_type: b,
                    p2p_id: a.pc.ID,
                    sdp: w(g),
                    audio: !!a.audioTrack,
                    video: !!a.videoTrack,
                    screen: a.videoTrack && -1 !== N(q = a.videoTrack._hints).call(q, yb.SCREEN_TRACK),
                    attributes: e,
                    dtx: a.audioTrack instanceof tg && a.audioTrack._config.DTX,
                    hq: !1,
                    lq: !1,
                    stereo: !1,
                    speech: !1,
                    mode: this.spec.mode,
                    codec: this.spec.codec,
                    extend: v.PUB_EXTEND
                };
                a.audioTrack && (q = {
                    stream_id: this.joinInfo && this.joinInfo.uid,
                    action: ""
                }, a.audioTrack.isActive ? q.action = "unmute_local_audio" :
                    q.action = "mute_local_audio", this.sendControl(q));
                a.videoTrack && (q = {
                    stream_id: this.joinInfo && this.joinInfo.uid,
                    action: ""
                }, a.videoTrack.muted ? q.action = "mute_local_video" : q.action = "unmute_local_video", this.sendControl(q));
                this.signal.request(ka.PUBLISH, m, !0).then(a => {
                    c && this.needToSendUnpubUnsub.set(c, !0);
                    h(JSON.parse(a.sdp))
                }).catch(b => {
                    if (g.retry && b.data && b.data.code === E.ERR_PUBLISH_REQUEST_INVALID) return k.warning("[".concat(this.clientId, "] receiver publish error code, retry"), b.toString()), za(a,
                        H.NEED_UNPUB).then(() => {
                        g.retry = !1;
                        za(a, H.NEED_ANSWER, g).then(h).catch(l)
                    });
                    b.code !== n.WS_ABORT && l(b)
                })
            }), a.on(H.NEED_RENEGOTIATE, (c, e, l) => {
                this.signal.request(ka.PUBLISH, {
                    state: "negotiation",
                    stream_type: b,
                    p2p_id: a.pc.ID,
                    sdp: c
                }, !0).then(a => {
                    e(JSON.parse(a.sdp))
                }).catch(a => {
                    a.code !== n.WS_ABORT && l(a)
                })
            }), a.on(H.NEED_UNPUB, e => c && !this.needToSendUnpubUnsub.has(c) ? e(!1) : "RECONNECTING" === this.state ? e(!0) : void this.signal.request(ka.UNPUBLISH, {
                stream_id: a.getUserId(),
                stream_type: b
            }, !0).then(() => e(!1)).catch(a => {
                k.warning("unpublish warning: ", a);
                e(!0)
            })), a.on(H.NEED_UPLOAD, (a, c) => {
                this.signal.upload(a, {stream_type: b, stats: c})
            }), a.on(H.NEED_SIGNAL_RTT, a => {
                a(this.signal.rtt)
            }), a.on(H.NEED_CONTROL, (a, b, c) => {
                if ("video" === a.type && a.muted) a = "mute_local_video"; else if ("video" !== a.type || a.muted) if ("audio" === a.type && a.muted) a = "mute_local_audio"; else {
                    if ("audio" !== a.type || a.muted) return;
                    a = "unmute_local_audio"
                } else a = "unmute_local_video";
                this.sendControl({stream_id: this.joinInfo && this.joinInfo.uid, action: a}).then(b).catch(c)
            }),
            "RECONNECTING" !== this.state) {
                if ("CONNECTED" !== this.state) return (new p(n.INVALID_OPERATION, "can not publish when connection state is ".concat(this.state))).throw();
                await a.startP2PConnection()
            } else a.readyToReconnectPC()
        }

        async subscribe(a) {
            if (!this.joinInfo) throw new p(n.UNEXPECTED_ERROR, "subscribe no joinInfo");
            let b = a.getUserId();
            if (a.on(H.NEED_ANSWER, (c, e, g) => {
                var h = a.subscribeOptions;
                h = {
                    stream_id: a.getUserId(),
                    audio: !!h.audio,
                    video: !!h.video,
                    mode: this.spec.mode,
                    codec: this.spec.codec,
                    p2p_id: a.pc.ID,
                    sdp: w(c),
                    tcc: !!v.SUBSCRIBE_TCC,
                    extend: v.SUB_EXTEND
                };
                this.signal.request(ka.SUBSCRIBE, h, !0).then(a => {
                    this.needToSendUnpubUnsub.set(b, !0);
                    e(JSON.parse(a.sdp))
                }).catch(b => {
                    if (c.retry && b.data && b.data.code === E.ERR_SUBSCRIBE_REQUEST_INVALID) return k.warning("[".concat(this.clientId, "] receiver subscribe error code, retry"), b.toString()), za(a, H.NEED_UNSUB).then(() => {
                        c.retry = !1;
                        za(a, H.NEED_ANSWER, c).then(e).catch(g)
                    });
                    b.code !== n.WS_ABORT && g(b)
                })
            }), a.on(H.NEED_UNSUB, c => this.needToSendUnpubUnsub.has(b) ? "RECONNECTING" ===
            this.state ? c(!0) : void this.signal.request(ka.UNSUBSCRIBE, {stream_id: a.getUserId()}, !0).then(() => c(!1)).catch(a => {
                k.warning("unsubscribe warning", a);
                c(!0)
            }) : c(!1)), a.on(H.NEED_UPLOAD, (b, e) => {
                this.signal.upload(b, {stream_id: a.getUserId(), stats: e})
            }), a.on(H.NEED_SIGNAL_RTT, a => {
                a(this.signal.rtt)
            }), "RECONNECTING" !== this.state) {
                if ("CONNECTED" !== this.state) return (new p(n.INVALID_OPERATION, "can not subscribe when connection state is ".concat(this.state))).throw();
                await a.startP2PConnection()
            } else a.readyToReconnectPC()
        }

        async subscribeChange(a,
                              b) {
            var c, e;
            if (!this.joinInfo) throw new p(n.UNEXPECTED_ERROR, "subscribe no joinInfo");
            if (await a.setSubscribeOptions(b), "RECONNECTING" !== this.state) {
                if ("CONNECTED" !== this.state) return (new p(n.INVALID_OPERATION, "can not subscribe change when connection state is ".concat(this.state))).throw();
                k.debug(m(c = m(e = "[".concat(this.clientId, "] send subscribe change, audio: ")).call(e, b.audio, ", video: ")).call(c, b.video));
                await this.signal.request(ka.SUBSCRIBE_CHANGE, {
                    stream_id: a.getUserId(), audio: !!b.audio,
                    video: !!b.video
                }, !0)
            }
        }

        async sendControl(a) {
            this.signal.request(ka.CONTROL, a, !0, !0)
        }

        async unsubscribe(a) {
            await a.closeP2PConnection()
        }

        getGatewayInfo() {
            return this.signal.request(ka.GATEWAY_INFO)
        }

        renewToken(a) {
            return this.signal.request(ka.RENEW_TOKEN, {token: a})
        }

        async setClientRole(a, b) {
            if (b && (this._clientRoleOptions = Ia({}, b)), "CONNECTED" !== this.state) return void (this.role = a);
            await this.signal.request(ka.SET_CLIENT_ROLE, {
                role: a, level: "audience" === a ? this._clientRoleOptions && this._clientRoleOptions.level ?
                    this._clientRoleOptions.level : 2 : 0
            });
            this.role = a
        }

        async setRemoteVideoStreamType(a, b) {
            await this.signal.request(ka.SWITCH_VIDEO_STREAM, {stream_id: a, stream_type: b})
        }

        async setStreamFallbackOption(a, b) {
            await this.signal.request(ka.SET_FALLBACK_OPTION, {stream_id: a, fallback_type: b})
        }

        async pickSVCLayer(a, b) {
            await this.signal.request(ka.PICK_SVC_LAYER, {
                stream_id: a,
                spatial_layer: b.spatialLayer,
                temporal_layer: b.temporalLayer
            })
        }

        getInChannelInfo() {
            return this.inChannelInfo.joinAt && (this.inChannelInfo.duration =
                x() - this.inChannelInfo.joinAt), ff({}, this.inChannelInfo)
        }

        async getGatewayVersion() {
            return (await this.signal.request(ka.GATEWAY_INFO)).version
        }

        reset() {
            if (this.inChannelInfo.joinAt && (this.inChannelInfo.duration = x() - this.inChannelInfo.joinAt, this.inChannelInfo.joinAt = null), this.trafficStatsInterval && (window.clearInterval(this.trafficStatsInterval), this.trafficStatsInterval = void 0), this.joinInfo) {
                let a = Cg.get(this.joinInfo.cname);
                a && a.delete(this.joinInfo.uid)
            }
            this.needToSendUnpubUnsub = new ha;
            this.key =
                this.joinInfo = void 0;
            this.networkQualityInterval && (window.clearInterval(this.networkQualityInterval), this.networkQualityInterval = void 0)
        }

        updateTurnConfigFromSignal() {
            if (this.joinInfo) {
                var a = (a = (("disabled" === this.joinInfo.cloudProxyServer ? this.signal.url : this.joinInfo.gatewayAddrs[this.signal.currentURLIndex]) || "").match(/(wss:\/\/)?([^:]+):(\d+)/)) ? {
                    username: db.username,
                    password: db.password,
                    turnServerURL: a[2],
                    tcpport: sa(a[3]) + 30,
                    udpport: sa(a[3]) + 30,
                    forceturn: !1
                } : null;
                this.joinInfo.turnServer.serversFromGateway =
                    [];
                a && "off" !== this.joinInfo.turnServer.mode && "disabled" === this.joinInfo.cloudProxyServer && this.joinInfo.turnServer.serversFromGateway.push(ff({}, db, {
                    turnServerURL: a.turnServerURL,
                    tcpport: a.tcpport,
                    udpport: a.udpport,
                    username: this.joinInfo.uid.toString(),
                    password: this.joinInfo.token
                }))
            }
        }

        async updateTrafficStats() {
            var a;
            if ("CONNECTED" === this.state) {
                var b = await this.signal.request(ka.TRAFFIC_STATS, void 0, !0);
                b.timestamp = x();
                r(a = b.peer_delay).call(a, a => {
                    var b;
                    let c = this._statsCollector.trafficStats && S(b =
                        this._statsCollector.trafficStats.peer_delay).call(b, b => b.peer_uid === a.peer_uid);
                    c && c.B_st !== a.B_st && Va(() => {
                        this.emit(Aa.STREAM_TYPE_CHANGE, a.peer_uid, a.B_st)
                    })
                });
                this._statsCollector.updateTrafficStats(b)
            }
        }

        getJoinMessage() {
            if (!this.joinInfo || !this.key) throw new p(n.UNEXPECTED_ERROR, "can not generate join message, no join info");
            let a = Ia({}, this.joinInfo.apResponse);
            var b = v.REPORT_APP_SCENARIO;
            if ("string" != typeof b) try {
                b = w(b)
            } catch (c) {
                b = void 0
            }
            b && 128 < b.length && (b = void 0);
            b = {
                session_id: this.joinInfo.sid,
                app_id: this.joinInfo.appId,
                channel_key: this.key,
                channel_name: this.joinInfo.cname,
                sdk_version: Za,
                browser: navigator.userAgent,
                process_id: v.PROCESS_ID,
                mode: this.spec.mode,
                codec: this.spec.codec,
                role: this.role,
                has_changed_gateway: this.hasChangeBGPAddress,
                ap_response: a,
                extend: v.JOIN_EXTEND,
                details: {
                    6: this.joinInfo.stringUid,
                    cservice_map: "proxy3" === this.joinInfo.cloudProxyServer ? "1" : void 0
                },
                features: {rejoin: !0},
                optionalInfo: this.joinInfo.optionalInfo,
                appScenario: b
            };
            return this.joinInfo.stringUid && (b.string_uid =
                this.joinInfo.stringUid), this.joinInfo.aesmode && this.joinInfo.aespassword && (b.aes_mode = this.joinInfo.aesmode, v.ENCRYPT_AES ? (b.aes_secret = this.joinInfo.aespassword, b.aes_encrypt = !0) : b.aes_secret = this.joinInfo.aespassword, this.joinInfo.aessalt && (b.aes_salt = this.joinInfo.aessalt)), a.addresses[this.signal.websocket.currentURLIndex] && (b.ap_response.ticket = a.addresses[this.signal.websocket.currentURLIndex].ticket, delete a.addresses), b
        }

        getRejoinMessage() {
            if (!this.joinInfo) throw new p(n.UNEXPECTED_ERROR,
                "can not generate rejoin message, no join info");
            return {
                session_id: this.joinInfo.sid,
                channel_name: this.joinInfo.cname,
                cid: this.joinInfo.cid,
                uid: this.joinInfo.uid,
                vid: Number(this.joinInfo.vid)
            }
        }

        handleSignalEvents() {
            this.signal.on(Q.WS_RECONNECTING, a => {
                this.joinInfo && u.WebSocketQuit(this.joinInfo.sid, {
                    lts: x(),
                    succ: -1,
                    cname: this.joinInfo.cname,
                    uid: this.joinInfo.uid,
                    cid: this.joinInfo.cid,
                    errorCode: a || Xa.NETWORK_ERROR
                });
                this.joinInfo && (this.state = "RECONNECTING", u.sessionInit(this.joinInfo.sid, {
                    lts: (new Date).getTime(),
                    extend: this.isSignalRecover ? {recover: !0} : {rejoin: !0},
                    cname: this.joinInfo.cname,
                    appid: this.joinInfo.appId,
                    mode: this.spec.mode
                }), this.isSignalRecover = !1, this.joinGatewayStartTime = x())
            });
            this.signal.on(Q.WS_CLOSED, a => {
                let b;
                switch (a) {
                    case "LEAVE":
                        b = Xa.LEAVE;
                        break;
                    case "UID_BANNED":
                    case "IP_BANNED":
                    case "CHANNEL_BANNED":
                    case "SERVER_ERROR":
                        b = Xa.SERVER_ERROR;
                        break;
                    default:
                        b = Xa.NETWORK_ERROR
                }
                k.debug("[signal] websocket closed, reason: ".concat(b || "undefined -> " + Xa.NETWORK_ERROR));
                this.joinInfo && u.WebSocketQuit(this.joinInfo.sid,
                    {
                        lts: x(),
                        succ: "LEAVE" === a ? 1 : -1,
                        cname: this.joinInfo.cname,
                        uid: this.joinInfo.uid,
                        cid: this.joinInfo.cid,
                        errorCode: b
                    });
                this.reset();
                this._disconnectedReason = a;
                this.state = "DISCONNECTED"
            });
            this.signal.on(Q.WS_CONNECTED, () => {
                if (this.updateTurnConfigFromSignal(), this.state = "CONNECTED", this.joinInfo) {
                    var a, b, c;
                    "audience" === this.role && this._clientRoleOptions && this._clientRoleOptions.level && (k.debug(m(a = m(b = m(c = "[".concat(this.clientId, "] patch to send set client role, role: ")).call(c, this.role, ", mode: ")).call(b,
                        this.spec.mode, ", level: ")).call(a, this._clientRoleOptions && this._clientRoleOptions.level)), this.setClientRole(this.role, this._clientRoleOptions));
                    if (u.joinGateway(this.joinInfo.sid, {
                        lts: this.joinGatewayStartTime,
                        succ: !0,
                        ec: null,
                        vid: this.joinInfo.vid,
                        addr: this.signal.url,
                        uid: this.joinInfo.uid,
                        cid: this.joinInfo.cid
                    }), this.joinInfo.useLocalAccessPoint) {
                        a = this.signal.url && this.signal.url.match(/wss:\/\/([^:]+):(\d+)/);
                        var e;
                        if (!a) return void k.error(m(e = "[".concat(this.clientId, "] set local access point after joined failed: ")).call(e,
                            a));
                        Qa("EVENT_REPORT_DOMAIN", a[1]);
                        Qa("EVENT_REPORT_BACKUP_DOMAIN", a[1]);
                        Qa("LOG_UPLOAD_SERVER", "".concat(a[1], ":6444"))
                    }
                }
            });
            this.signal.on(da.ON_UPLINK_STATS, a => {
                this._statsCollector.updateUplinkStats(a)
            });
            this.signal.on(Q.REQUEST_RECOVER, (a, b, c) => {
                if (!this.joinInfo) return c(new p(n.UNEXPECTED_ERROR, "gateway: can not recover, no join info"));
                a && (this.joinInfo.multiIP = a, this.hasChangeBGPAddress = !0);
                this.isSignalRecover = !0;
                za(this, Aa.REQUEST_NEW_GATEWAY_LIST).then(b).catch(c)
            });
            this.signal.on(Q.REQUEST_JOIN_INFO,
                a => {
                    a(this.getJoinMessage())
                });
            this.signal.on(Q.REQUEST_REJOIN_INFO, a => {
                a(this.getRejoinMessage())
            });
            this.signal.on(Q.REPORT_JOIN_GATEWAY, (a, b) => {
                this.joinInfo && u.joinGateway(this.joinInfo.sid, {
                    lts: this.joinGatewayStartTime,
                    succ: !1,
                    ec: a,
                    addr: b,
                    uid: this.joinInfo.uid,
                    cid: this.joinInfo.cid
                })
            });
            this.signal.on(Q.IS_P2P_DISCONNECTED, a => {
                a(bd(this, Aa.IS_P2P_DISCONNECTED))
            });
            this.signal.on(Q.DISCONNECT_P2P, () => {
                this.needToSendUnpubUnsub = new ha;
                this.emit(Aa.DISCONNECT_P2P)
            });
            this.signal.on(Q.NEED_RENEW_SESSION,
                () => {
                    this.emit(Aa.NEED_RENEW_SESSION)
                });
            this.signal.on(Q.REQUEST_SUCCESS, () => {
                this._signalTimeout = !1
            });
            this.signal.on(Q.REQUEST_TIMEOUT, () => {
                this._signalTimeout = !0
            })
        }
    }

    let gf = 1, kf = 1, hf = () => {
        const a = v.AREAS;
        0 === a.length && a.push("GLOBAL");
        return Qc(a).call(a, (a, c, e) => {
            var b, h, l, k, t;
            c = "OVERSEA" === c ? m(b = m(h = m(l = m(k = m(t = "".concat(Ba.ASIA, ",")).call(t, Ba.EUROPE, ",")).call(k, Ba.AFRICA, ",")).call(l, Ba.NORTH_AMERICA, ",")).call(h, Ba.SOUTH_AMERICA, ",")).call(b, Ba.OCEANIA) : Ba[c];
            var n;
            return c ? 0 === e ? c : m(n = "".concat(a,
                ",")).call(n, c) : a
        }, "")
    };
    var Ee = {
        ASIA: ["CHINA", "JAPAN", "INDIA"],
        EUROPE: [],
        NORTH_AMERICA: [],
        SOUTH_AMERICA: [],
        OCEANIA: [],
        AFRICA: []
    };
    let Oc = aa(Ee), Fe = "CHINA NORTH_AMERICA EUROPE ASIA JAPAN INDIA OCEANIA SOUTH_AMERICA AFRICA".split(" "),
        wp = function (a, b) {
            var c = [];
            if (ia(a).call(a, "GLOBAL")) {
                c = ["GLOBAL", "OVERSEA"];
                const g = aa(jg);
                if ("GLOBAL" === b) throw new p(n.INVALID_PARAMS, "GLOBAL is an invalid excludedArea value");
                if ("CHINA" === b) c = ["OVERSEA"]; else if (e = b, ia(Oc).call(Oc, e)) {
                    a = Ee[b] || [];
                    const e = [...c, b, ...a];
                    c = I(g).call(g, a => !ia(e).call(e, a))
                } else if (function (a) {
                    let b = !1;
                    return r(Oc).call(Oc, c => {
                        var e;
                        ia(e = Ee[c]).call(e, a) && (b = !0)
                    }), b
                }(b)) {
                    a = function (a) {
                        let b;
                        return r(Oc).call(Oc, c => {
                            var e;
                            ia(e = Ee[c]).call(e, a) && (b = c)
                        }), b
                    }(b);
                    const e = [...c, a, b];
                    c = I(g).call(g, a => !ia(e).call(e, a))
                } else c = a;
                c = function (a) {
                    const b = [];
                    return r(Fe).call(Fe, c => {
                        ia(a).call(a, c) && b.push(c)
                    }), m(b).call(b, I(a).call(a, a => !ia(Fe).call(Fe, a)))
                }(c)
            } else c = a;
            var e;
            return c
        };

    class xp extends Ma {
        constructor() {
            super();
            this.retryConfig = {
                timeout: 3E3,
                timeoutFactor: 1.5, maxRetryCount: 1, maxRetryTimeout: 1E4
            };
            this.mutex = new Sb("config-distribute")
        }

        startGetConfigDistribute(a, b) {
            this.joinInfo = a;
            this.cancelToken = b;
            this.interval && this.stopGetConfigDistribute();
            this.updateConfigDistribute();
            this.interval = window.setInterval(() => {
                this.updateConfigDistribute()
            }, v.CONFIG_DISTRIBUTE_INTERVAL)
        }

        stopGetConfigDistribute() {
            this.interval && clearInterval(this.interval);
            this.cancelToken = this.joinInfo = this.interval = void 0
        }

        async awaitConfigDistributeComplete() {
            this.mutex.isLocked &&
            (await this.mutex.lock())()
        }

        async updateConfigDistribute() {
            if (!this.joinInfo || !this.cancelToken || !this.retryConfig) return void k.debug("[config-distribute] get config distribute interrupted have no joininfo");
            let a, b = await this.mutex.lock();
            try {
                a = await lm(this.joinInfo, this.cancelToken, this.retryConfig), k.debug("[config-distribute] get config distribute", w(a)), a.limit_bitrate && this.handleBitrateLimit(a.limit_bitrate), this.configs = a
            } catch (c) {
                let a = new p(n.NETWORK_RESPONSE_ERROR, c);
                k.warning("[config-distribute] ".concat(a.toString()))
            } finally {
                b()
            }
        }

        getBitrateLimit() {
            return this.configs ?
                this.configs.limit_bitrate : void 0
        }

        handleBitrateLimit(a) {
            a && a.uplink && a.id && void 0 !== a.uplink.max_bitrate && void 0 !== a.uplink.min_bitrate && (this.configs && this.configs.limit_bitrate ? this.configs && this.configs.limit_bitrate && this.configs.limit_bitrate.id !== a.id && this.emit(td.UPDATE_BITRATE_LIMIT, a) : this.emit(td.UPDATE_BITRATE_LIMIT, a))
        }

        getLowStreamConfigDistribute() {
            return this.configs && this.configs.limit_bitrate && function (a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c, e = null != arguments[b] ? arguments[b] :
                        {};
                    if (b % 2) r(c = gi(Object(e), !0)).call(c, function (b) {
                        Ta(a, b, e[b])
                    }); else if (ea) Ua(a, ea(e)); else {
                        var g;
                        r(g = gi(Object(e))).call(g, function (b) {
                            X(a, b, T(e, b))
                        })
                    }
                }
                return a
            }({}, this.configs.limit_bitrate.low_stream_uplink)
        }
    }

    var Dg = function () {
        function a(a) {
            this.input = [];
            this.size = a
        }

        return a.prototype.add = function (a) {
            this.input.push(a);
            this.input.length > this.size && this.input.splice(0, 1)
        }, a.prototype.diffMean = function () {
            return 0 === this.input.length ? 0 : (this.input[this.input.length - 1] - this.input[0]) / this.input.length
        },
            a
    }(), ii = function (a, b) {
        return (ii = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (a, b) {
            a.__proto__ = b
        } || function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        })(a, b)
    }, Eg = function () {
        return (Eg = Object.assign || function (a) {
            for (var b, c = 1, e = arguments.length; c < e; c++) for (var g in b = arguments[c]) Object.prototype.hasOwnProperty.call(b, g) && (a[g] = b[g]);
            return a
        }).apply(this, arguments)
    }, $b, xd = {
        timestamp: 0,
        bitrate: {actualEncoded: 0, transmit: 0},
        sendPacketLossRate: 0,
        recvPacketLossRate: 0,
        videoRecv: [],
        videoSend: [],
        audioRecv: [],
        audioSend: []
    }, nl = {
        firsCount: 0,
        nacksCount: 0,
        plisCount: 0,
        framesDecodeCount: 0,
        framesDecodeInterval: 0,
        framesDecodeFreezeTime: 0,
        decodeFrameRate: 0,
        bytes: 0,
        packetsLost: 0,
        packetLostRate: 0,
        packets: 0,
        ssrc: 0
    }, ol = {
        firsCount: 0,
        nacksCount: 0,
        plisCount: 0,
        frameCount: 0,
        bytes: 0,
        packets: 0,
        packetsLost: 0,
        packetLostRate: 0,
        ssrc: 0,
        rttMs: 0
    }, pl = {bytes: 0, packets: 0, packetsLost: 0, packetLostRate: 0, ssrc: 0, rttMs: 0}, ql = {
        jitterBufferMs: 0,
        jitterMs: 0,
        bytes: 0,
        packetsLost: 0,
        packetLostRate: 0,
        packets: 0,
        ssrc: 0,
        receivedFrames: 0,
        droppedFrames: 0
    }, Fg = function () {
        function a(a, c) {
            var b = this;
            this.videoIsReady = !1;
            this.stats = nb(xd);
            this.isFirstAudioDecoded = this.isFirstAudioReceived = this.isFirstVideoDecoded = this.isFirstVideoReceived = !1;
            this.lossRateWindowStats = [];
            this.pc = a;
            this.options = c;
            this.intervalTimer = window.setInterval(function () {
                return mf(b, void 0, void 0, function () {
                    return nf(this, function (a) {
                        return this.updateStats(), [2]
                    })
                })
            }, this.options.updateInterval)
        }

        return a.prototype.getStats = function () {
            return this.stats
        }, a.prototype.setVideoIsReady =
            function (a) {
                this.videoIsReady = a
            }, a.prototype.setIsFirstAudioDecoded = function (a) {
            this.isFirstAudioDecoded = a
        }, a.prototype.destroy = function () {
            window.clearInterval(this.intervalTimer)
        }, a.prototype.calcLossRate = function (a) {
            var b = this;
            this.lossRateWindowStats.push(a);
            this.lossRateWindowStats.length > this.options.lossRateInterval && this.lossRateWindowStats.splice(0, 1);
            for (var e = this.lossRateWindowStats.length, g = 0, h = 0, k = 0, q = 0, m = function (c) {
                a[c].forEach(function (a, l) {
                    if (b.lossRateWindowStats[e - 1][c][l] && b.lossRateWindowStats[0][c][l]) {
                        var m =
                            b.lossRateWindowStats[e - 1][c][l].packets - b.lossRateWindowStats[0][c][l].packets;
                        l = b.lossRateWindowStats[e - 1][c][l].packetsLost - b.lossRateWindowStats[0][c][l].packetsLost;
                        "videoSend" === c || "audioSend" === c ? (g += m, k += l) : (h += m, q += l);
                        Number.isNaN(m) || Number.isNaN(m) ? a.packetLostRate = 0 : a.packetLostRate = 0 >= m || 0 >= l ? 0 : l / (m + l)
                    }
                })
            }, n = 0, p = ["videoSend", "audioSend", "videoRecv", "audioRecv"]; n < p.length; n++) m(p[n]);
            a.sendPacketLossRate = 0 >= g || 0 >= k ? 0 : k / (g + k);
            a.recvPacketLossRate = 0 >= h || 0 >= q ? 0 : q / (h + q)
        }, a
    }(), yp = function (a) {
        function b() {
            var b =
                null !== a && a.apply(this, arguments) || this;
            return b._stats = xd, b.lastDecodeVideoReceiverStats = new Map, b
        }

        return lf(b, a), b.prototype.updateStats = function () {
            return mf(this, void 0, void 0, function () {
                var a, b, g, h;
                return nf(this, function (c) {
                    switch (c.label) {
                        case 0:
                            return [4, this._getStats()];
                        case 1:
                            return a = c.sent(), b = this.statsResponsesToObjects(a), this._stats = nb(xd), g = b.filter(function (a) {
                                return "ssrc" === a.type
                            }), this.processSSRCStats(g), (h = b.find(function (a) {
                                return "VideoBwe" === a.type
                            })) && this.processBandwidthStats(h),
                                this._stats.timestamp = Date.now(), this.calcLossRate(this._stats), this.stats = this._stats, [2]
                    }
                })
            })
        }, b.prototype.processBandwidthStats = function (a) {
            this._stats.bitrate = {
                actualEncoded: Number(a.googActualEncBitrate),
                targetEncoded: Number(a.googTargetEncBitrate),
                retransmit: Number(a.googRetransmitBitrate),
                transmit: Number(a.googTransmitBitrate)
            };
            this._stats.sendBandwidth = Number(a.googAvailableSendBandwidth)
        }, b.prototype.processSSRCStats = function (a) {
            var b = this;
            a.forEach(function (a) {
                var c = a.id.includes("send");
                switch (a.mediaType + "_" + (c ? "send" : "recv")) {
                    case "video_send":
                        c = nb(ol);
                        c.codec = a.googCodecName;
                        c.adaptionChangeReason = "none";
                        a.googCpuLimitedResolution && (c.adaptionChangeReason = "cpu");
                        a.googBandwidthLimitedResolution && (c.adaptionChangeReason = "bandwidth");
                        c.avgEncodeMs = Number(a.googAvgEncodeMs);
                        c.inputFrame = {
                            width: Number(a.googFrameWidthInput) || Number(a.googFrameWidthSent),
                            height: Number(a.googFrameHeightInput) || Number(a.googFrameHeightSent),
                            frameRate: Number(a.googFrameRateInput)
                        };
                        c.sentFrame = {
                            width: Number(a.googFrameWidthSent),
                            height: Number(a.googFrameHeightSent), frameRate: Number(a.googFrameRateInput)
                        };
                        c.firsCount = Number(a.googFirReceived);
                        c.nacksCount = Number(a.googNacksReceived);
                        c.plisCount = Number(a.googPlisReceived);
                        c.frameCount = Number(a.framesEncoded);
                        c.bytes = Number(a.bytesSent);
                        c.packets = Number(a.packetsSent);
                        c.packetsLost = Number(a.packetsLost);
                        c.ssrc = Number(a.ssrc);
                        c.rttMs = Number(a.googRtt || 0);
                        b._stats.videoSend.push(c);
                        b._stats.rtt = c.rttMs;
                        break;
                    case "video_recv":
                        c = nb(nl);
                        var e = b.lastDecodeVideoReceiverStats.get(Number(a.ssrc));
                        if (c.codec = a.googCodecName, c.targetDelayMs = Number(a.googTargetDelayMs), c.renderDelayMs = Number(a.googRenderDelayMs), c.currentDelayMs = Number(a.googCurrentDelayMs), c.minPlayoutDelayMs = Number(a.googMinPlayoutDelayMs), c.decodeMs = Number(a.googDecodeMs), c.maxDecodeMs = Number(a.googMaxDecodeMs), c.receivedFrame = {
                            width: Number(a.googFrameWidthReceived),
                            height: Number(a.googFrameHeightReceived),
                            frameRate: Number(a.googFrameRateReceived)
                        }, c.decodedFrame = {
                            width: Number(a.googFrameWidthReceived), height: Number(a.googFrameHeightReceived),
                            frameRate: Number(a.googFrameRateDecoded)
                        }, c.outputFrame = {
                            width: Number(a.googFrameWidthReceived),
                            height: Number(a.googFrameHeightReceived),
                            frameRate: Number(a.googFrameRateOutput)
                        }, c.jitterBufferMs = Number(a.googJitterBufferMs), c.firsCount = Number(a.googFirsSent), c.nacksCount = Number(a.googNacksSent), c.plisCount = Number(a.googPlisSent), c.framesDecodeCount = Number(a.framesDecoded), c.bytes = Number(a.bytesReceived), c.packets = Number(a.packetsReceived), c.packetsLost = Number(a.packetsLost), c.ssrc = Number(a.ssrc),
                        0 < c.packets && !b.isFirstVideoReceived && (b.onFirstVideoReceived && b.onFirstVideoReceived(), b.isFirstVideoReceived = !0), 0 < c.framesDecodeCount && !b.isFirstVideoDecoded && (b.onFirstVideoDecoded && b.onFirstVideoDecoded(c.decodedFrame.width, c.decodedFrame.height), b.isFirstVideoDecoded = !0), e) {
                            a = e.stats;
                            var g = Date.now() - e.lts;
                            c.framesDecodeFreezeTime = a.framesDecodeFreezeTime;
                            c.framesDecodeInterval = a.framesDecodeInterval;
                            c.framesDecodeCount > a.framesDecodeCount && b.isFirstVideoDecoded ? (e.lts = Date.now(), c.framesDecodeInterval =
                                g, c.framesDecodeInterval >= b.options.freezeRateLimit && (b.videoIsReady ? c.framesDecodeFreezeTime += c.framesDecodeInterval : b.setVideoIsReady(!0))) : c.framesDecodeCount < e.stats.framesDecodeCount && (c.framesDecodeInterval = 0)
                        }
                        b.lastDecodeVideoReceiverStats.set(c.ssrc, {stats: Eg({}, c), lts: Date.now()});
                        b._stats.videoRecv.push(c);
                        break;
                    case "audio_recv":
                        c = nb(ql);
                        c.codec = a.googCodecName;
                        c.outputLevel = Math.abs(Number(a.audioOutputLevel)) / 32767;
                        c.decodingCNG = Number(a.googDecodingCNG);
                        c.decodingCTN = Number(a.googDecodingCTN);
                        c.decodingCTSG = Number(a.googDecodingCTSG);
                        c.decodingNormal = Number(a.googDecodingNormal);
                        c.decodingPLC = Number(a.googDecodingPLC);
                        c.decodingPLCCNG = Number(a.googDecodingPLCCNG);
                        c.expandRate = Number(a.googExpandRate);
                        c.accelerateRate = Number(a.googAccelerateRate);
                        c.preemptiveExpandRate = Number(a.googPreemptiveExpandRate);
                        c.secondaryDecodedRate = Number(a.googSecondaryDecodedRate);
                        c.speechExpandRate = Number(a.googSpeechExpandRate);
                        c.preferredJitterBufferMs = Number(a.googPreferredJitterBufferMs);
                        c.jitterBufferMs =
                            Number(a.googJitterBufferMs);
                        c.jitterMs = Number(a.googJitterReceived);
                        c.bytes = Number(a.bytesReceived);
                        c.packets = Number(a.packetsReceived);
                        c.packetsLost = Number(a.packetsLost);
                        c.ssrc = Number(a.ssrc);
                        c.receivedFrames = Number(a.googDecodingCTN) || Number(a.packetsReceived);
                        c.droppedFrames = Number(a.googDecodingPLC) + Number(a.googDecodingPLCCNG) || Number(a.packetsLost);
                        0 < c.receivedFrames && !b.isFirstAudioReceived && (b.onFirstAudioReceived && b.onFirstAudioReceived(), b.isFirstAudioReceived = !0);
                        0 < c.decodingNormal &&
                        !b.isFirstAudioDecoded && (b.onFirstAudioDecoded && b.onFirstAudioDecoded(), b.isFirstAudioDecoded = !0);
                        b._stats.audioRecv.push(c);
                        break;
                    case "audio_send":
                        c = nb(pl), c.codec = a.googCodecName, c.inputLevel = Math.abs(Number(a.audioInputLevel)) / 32767, c.aecReturnLoss = Number(a.googEchoCancellationReturnLoss || 0), c.aecReturnLossEnhancement = Number(a.googEchoCancellationReturnLossEnhancement || 0), c.residualEchoLikelihood = Number(a.googResidualEchoLikelihood || 0), c.residualEchoLikelihoodRecentMax = Number(a.googResidualEchoLikelihoodRecentMax ||
                            0), c.bytes = Number(a.bytesSent), c.packets = Number(a.packetsSent), c.packetsLost = Number(a.packetsLost), c.ssrc = Number(a.ssrc), c.rttMs = Number(a.googRtt || 0), b._stats.rtt = c.rttMs, b._stats.audioSend.push(c)
                }
            })
        }, b.prototype._getStats = function () {
            var a = this;
            return new Promise(function (b, c) {
                a.pc.getStats(b, c)
            })
        }, b.prototype.statsResponsesToObjects = function (a) {
            var b = [];
            return a.result().forEach(function (a) {
                var c = {id: a.id, timestamp: a.timestamp.valueOf().toString(), type: a.type};
                a.names().forEach(function (b) {
                    c[b] =
                        a.stat(b)
                });
                b.push(c)
            }), b
        }, b
    }(Fg);
    !function (a) {
        a.CERTIFICATE = "certificate";
        a.CODEC = "codec";
        a.CANDIDATE_PAIR = "candidate-pair";
        a.LOCAL_CANDIDATE = "local-candidate";
        a.REMOTE_CANDIDATE = "remote-candidate";
        a.INBOUND = "inbound-rtp";
        a.TRACK = "track";
        a.OUTBOUND = "outbound-rtp";
        a.PC = "peer-connection";
        a.REMOTE_INBOUND = "remote-inbound-rtp";
        a.REMOTE_OUTBOUND = "remote-outbound-rtp";
        a.TRANSPORT = "transport";
        a.CSRC = "csrc";
        a.DATA_CHANNEL = "data-channel";
        a.STREAM = "stream";
        a.SENDER = "sender";
        a.RECEIVER = "receiver"
    }($b || ($b =
        {}));
    var rl = function (a) {
        function b() {
            var b = null !== a && a.apply(this, arguments) || this;
            return b._stats = xd, b.lastDecodeVideoReceiverStats = new Map, b.lastVideoFramesRecv = new Map, b.lastVideoFramesSent = new Map, b.lastVideoFramesDecode = new Map, b.lastVideoJBDelay = new Map, b.lastAudioJBDelay = new Map, b.mediaBytesSent = new Map, b.mediaBytesRetransmit = new Map, b.mediaBytesTargetEncode = new Map, b.lastEncoderMs = new Map, b
        }

        return lf(b, a), b.prototype.updateStats = function () {
            return mf(this, void 0, void 0, function () {
                var a, b = this;
                return nf(this, function (c) {
                    switch (c.label) {
                        case 0:
                            return a = this, [4, this.pc.getStats()];
                        case 1:
                            return a.report = c.sent(), this._stats = nb(xd), this.report.forEach(function (a) {
                                switch (a.type) {
                                    case $b.OUTBOUND:
                                        "audio" === a.mediaType ? b.processAudioOutboundStats(a) : "video" === a.mediaType && b.processVideoOutboundStats(a);
                                        break;
                                    case $b.INBOUND:
                                        "audio" === a.mediaType ? b.processAudioInboundStats(a) : "video" === a.mediaType && b.processVideoInboundStats(a);
                                        break;
                                    case $b.TRANSPORT:
                                        (a = b.report.get(a.selectedCandidatePairId)) &&
                                        b.processCandidatePairStats(a);
                                        break;
                                    case $b.CANDIDATE_PAIR:
                                        a.selected && b.processCandidatePairStats(a)
                                }
                            }), this.updateSendBitrate(), this._stats.timestamp = Date.now(), this.calcLossRate(this._stats), this.stats = this._stats, [2]
                    }
                })
            })
        }, b.prototype.processCandidatePairStats = function (a) {
            this._stats.sendBandwidth = a.availableOutgoingBitrate || 0;
            a.currentRoundTripTime && (this._stats.rtt = 1E3 * a.currentRoundTripTime);
            this._stats.videoSend.forEach(function (b) {
                !b.rttMs && a.currentRoundTripTime && (b.rttMs = 1E3 * a.currentRoundTripTime)
            });
            this._stats.audioSend.forEach(function (b) {
                !b.rttMs && a.currentRoundTripTime && (b.rttMs = 1E3 * a.currentRoundTripTime)
            })
        }, b.prototype.processAudioInboundStats = function (a) {
            var b = this._stats.audioRecv.find(function (b) {
                return b.ssrc === a.ssrc
            });
            b || (b = nb(ql), this._stats.audioRecv.push(b));
            b.ssrc = a.ssrc;
            b.packets = a.packetsReceived;
            b.packetsLost = a.packetsLost;
            b.bytes = a.bytesReceived;
            b.jitterMs = 1E3 * a.jitter;
            a.trackId && this.processAudioTrackReceiverStats(a.trackId, b);
            a.codecId && (b.codec = this.getCodecFromCodecStats(a.codecId));
            b.receivedFrames || (b.receivedFrames = a.packetsReceived);
            b.droppedFrames || (b.droppedFrames = a.packetsLost);
            0 < b.receivedFrames && !this.isFirstAudioReceived && (this.onFirstAudioReceived && this.onFirstAudioReceived(), this.isFirstAudioReceived = !0);
            b.outputLevel && 0 < b.outputLevel && !this.isFirstAudioDecoded && (this.onFirstAudioDecoded && this.onFirstAudioDecoded(), this.isFirstAudioDecoded = !0)
        }, b.prototype.processVideoInboundStats = function (a) {
            var b = this._stats.videoRecv.find(function (b) {
                return b.ssrc === a.ssrc
            });
            b ||
            (b = nb(nl), this._stats.videoRecv.push(b));
            b.ssrc = a.ssrc;
            b.packets = a.packetsReceived;
            b.packetsLost = a.packetsLost;
            b.bytes = a.bytesReceived;
            b.firsCount = a.firCount;
            b.nacksCount = a.nackCount;
            b.plisCount = a.pliCount;
            b.framesDecodeCount = a.framesDecoded;
            var c = this.lastDecodeVideoReceiverStats.get(b.ssrc), h = this.lastVideoFramesDecode.get(b.ssrc),
                k = Date.now();
            if (0 < b.framesDecodeCount && !this.isFirstVideoDecoded) {
                var q = b.decodedFrame ? b.decodedFrame.width : 0, m = b.decodedFrame ? b.decodedFrame.height : 0;
                this.onFirstVideoDecoded &&
                this.onFirstVideoDecoded(q, m);
                this.isFirstVideoDecoded = !0
            }
            c && (q = c.stats, m = k - c.lts, b.framesDecodeFreezeTime = q.framesDecodeFreezeTime, b.framesDecodeInterval = q.framesDecodeInterval, b.framesDecodeCount > q.framesDecodeCount && this.isFirstVideoDecoded ? (c.lts = Date.now(), b.framesDecodeInterval = m, b.framesDecodeInterval >= this.options.freezeRateLimit && (this.videoIsReady ? b.framesDecodeFreezeTime += b.framesDecodeInterval : this.setVideoIsReady(!0))) : b.framesDecodeCount < q.framesDecodeCount && (b.framesDecodeInterval =
                0));
            h && 800 <= k - h.lts ? (b.decodeFrameRate = Math.round((b.framesDecodeCount - h.count) / ((k - h.lts) / 1E3)), this.lastVideoFramesDecode.set(b.ssrc, {
                count: b.framesDecodeCount,
                lts: k,
                rate: b.decodeFrameRate
            })) : h ? b.decodeFrameRate = h.rate : this.lastVideoFramesDecode.set(b.ssrc, {
                count: b.framesDecodeCount,
                lts: k,
                rate: 0
            });
            a.totalDecodeTime && (b.decodeMs = 1E3 * a.totalDecodeTime);
            a.trackId && this.processVideoTrackReceiverStats(a.trackId, b);
            a.codecId && (b.codec = this.getCodecFromCodecStats(a.codecId));
            a.framerateMean && (b.framesRateFirefox =
                a.framerateMean);
            0 < b.packets && !this.isFirstVideoReceived && (this.onFirstVideoReceived && this.onFirstVideoReceived(), this.isFirstVideoReceived = !0);
            this.lastDecodeVideoReceiverStats.set(b.ssrc, {stats: Eg({}, b), lts: c ? c.lts : Date.now()})
        }, b.prototype.processVideoOutboundStats = function (a) {
            var b = this._stats.videoSend.find(function (b) {
                return b.ssrc === a.ssrc
            });
            b || (b = nb(ol), this._stats.videoSend.push(b));
            var c = this.mediaBytesSent.get(a.ssrc);
            c ? c.add(a.bytesSent) : ((h = new Dg(10)).add(a.bytesSent), this.mediaBytesSent.set(a.ssrc,
                h));
            void 0 !== a.retransmittedBytesSent && ((c = this.mediaBytesRetransmit.get(a.ssrc)) ? c.add(a.retransmittedBytesSent) : ((h = new Dg(10)).add(a.retransmittedBytesSent), this.mediaBytesRetransmit.set(a.ssrc, h)));
            if (a.totalEncodedBytesTarget) {
                var h;
                (c = this.mediaBytesTargetEncode.get(a.ssrc)) ? c.add(a.totalEncodedBytesTarget) : ((h = new Dg(10)).add(a.totalEncodedBytesTarget), this.mediaBytesTargetEncode.set(a.ssrc, h))
            }
            if (b.ssrc = a.ssrc, b.bytes = a.bytesSent, b.packets = a.packetsSent, b.firsCount = a.firCount, b.nacksCount =
                a.nackCount, b.plisCount = a.pliCount, b.frameCount = a.framesEncoded, b.adaptionChangeReason = a.qualityLimitationReason, a.totalEncodeTime && a.framesEncoded) c = this.lastEncoderMs.get(a.ssrc), b.avgEncodeMs = !c || c.lastFrameCount > a.framesEncoded ? 1E3 * a.totalEncodeTime / a.framesEncoded : 1E3 * (a.totalEncodeTime - c.lastEncoderTime) / (a.framesEncoded - c.lastFrameCount), this.lastEncoderMs.set(a.ssrc, {
                lastFrameCount: a.framesEncoded,
                lastEncoderTime: a.totalEncodeTime,
                lts: Date.now()
            });
            (a.codecId && (b.codec = this.getCodecFromCodecStats(a.codecId)),
            a.mediaSourceId && this.processVideoMediaSource(a.mediaSourceId, b), a.trackId && this.processVideoTrackSenderStats(a.trackId, b), a.remoteId) ? this.processRemoteInboundStats(a.remoteId, b) : (c = this.findRemoteStatsId(a.ssrc, $b.REMOTE_INBOUND)) && this.processRemoteInboundStats(c, b)
        }, b.prototype.processAudioOutboundStats = function (a) {
            var b = this._stats.audioSend.find(function (b) {
                return b.ssrc === a.ssrc
            });
            if (b || (b = nb(pl), this._stats.audioSend.push(b)), b.ssrc = a.ssrc, b.packets = a.packetsSent, b.bytes = a.bytesSent, a.mediaSourceId &&
            this.processAudioMediaSource(a.mediaSourceId, b), a.codecId && (b.codec = this.getCodecFromCodecStats(a.codecId)), a.trackId && this.processAudioTrackSenderStats(a.trackId, b), a.remoteId) this.processRemoteInboundStats(a.remoteId, b); else {
                var c = this.findRemoteStatsId(a.ssrc, $b.REMOTE_INBOUND);
                c && this.processRemoteInboundStats(c, b)
            }
        }, b.prototype.findRemoteStatsId = function (a, b) {
            var c = Array.from(this.report.values()).find(function (c) {
                return c.type === b && c.ssrc === a
            });
            return c ? c.id : null
        }, b.prototype.processVideoMediaSource =
            function (a, b) {
                (a = this.report.get(a)) && a.width && a.height && a.framesPerSecond && (b.inputFrame = {
                    width: a.width,
                    height: a.height,
                    frameRate: a.framesPerSecond
                })
            }, b.prototype.processAudioMediaSource = function (a, b) {
            (a = this.report.get(a)) && (b.inputLevel = a.audioLevel)
        }, b.prototype.processVideoTrackSenderStats = function (a, b) {
            if (a = this.report.get(a)) {
                var c = 0, e = Date.now(), k = this.lastVideoFramesSent.get(b.ssrc);
                k && 800 <= e - k.lts ? (c = Math.round((a.framesSent - k.count) / ((e - k.lts) / 1E3)), this.lastVideoFramesSent.set(b.ssrc,
                    {
                        count: a.framesSent,
                        lts: e,
                        rate: c
                    })) : k ? c = k.rate : this.lastVideoFramesSent.set(b.ssrc, {count: a.framesSent, lts: e, rate: 0});
                b.sentFrame = {width: a.frameWidth, height: a.frameHeight, frameRate: c}
            }
        }, b.prototype.processVideoTrackReceiverStats = function (a, b) {
            if (a = this.report.get(a)) {
                var c = this.lastVideoFramesRecv.get(b.ssrc), e = Date.now();
                b.framesReceivedCount = a.framesReceived;
                var k = 0;
                if (c && 800 <= e - c.lts ? (k = Math.round((a.framesReceived - c.count) / ((e - c.lts) / 1E3)), this.lastVideoFramesRecv.set(b.ssrc, {
                    count: a.framesReceived,
                    lts: e, rate: k
                })) : c ? k = c.rate : this.lastVideoFramesRecv.set(b.ssrc, {
                    count: a.framesReceived,
                    lts: e,
                    rate: 0
                }), b.receivedFrame = {
                    width: a.frameWidth || 0,
                    height: a.frameHeight || 0,
                    frameRate: k || 0
                }, b.decodedFrame = {
                    width: a.frameWidth || 0,
                    height: a.frameHeight || 0,
                    frameRate: b.decodeFrameRate || 0
                }, b.outputFrame = {
                    width: a.frameWidth || 0,
                    height: a.frameHeight || 0,
                    frameRate: b.decodeFrameRate || 0
                }, a.jitterBufferDelay && a.jitterBufferEmittedCount) c = this.lastVideoJBDelay.get(b.ssrc), this.lastVideoJBDelay.set(b.ssrc, {
                    jitterBufferDelay: a.jitterBufferDelay,
                    jitterBufferEmittedCount: a.jitterBufferEmittedCount
                }), c || (c = {
                    jitterBufferDelay: 0,
                    jitterBufferEmittedCount: 0
                }), a = 1E3 * (a.jitterBufferDelay - c.jitterBufferDelay) / (a.jitterBufferEmittedCount - c.jitterBufferEmittedCount), b.jitterBufferMs = a, b.currentDelayMs = Math.round(a)
            }
        }, b.prototype.processAudioTrackSenderStats = function (a, b) {
            (a = this.report.get(a)) && (b.aecReturnLoss = a.echoReturnLoss || 0, b.aecReturnLossEnhancement = a.echoReturnLossEnhancement || 0)
        }, b.prototype.processAudioTrackReceiverStats = function (a, b) {
            if (a =
                this.report.get(a)) {
                if (a.removedSamplesForAcceleration && a.totalSamplesReceived && (b.accelerateRate = a.removedSamplesForAcceleration / a.totalSamplesReceived), a.jitterBufferDelay && a.jitterBufferEmittedCount) {
                    var c = this.lastAudioJBDelay.get(b.ssrc);
                    this.lastAudioJBDelay.set(b.ssrc, {
                        jitterBufferDelay: a.jitterBufferDelay,
                        jitterBufferEmittedCount: a.jitterBufferEmittedCount
                    });
                    c || (c = {jitterBufferDelay: 0, jitterBufferEmittedCount: 0});
                    b.jitterBufferMs = Math.round(1E3 * (a.jitterBufferDelay - c.jitterBufferDelay) / (a.jitterBufferEmittedCount -
                        c.jitterBufferEmittedCount))
                }
                b.outputLevel = a.audioLevel;
                c = 1920;
                a.totalSamplesDuration && a.totalSamplesReceived && (c = a.totalSamplesReceived / a.totalSamplesDuration / 50, b.receivedFrames = Math.round(a.totalSamplesReceived / c));
                a.concealedSamples && (b.droppedFrames = Math.round(a.concealedSamples / c))
            }
        }, b.prototype.processRemoteInboundStats = function (a, b) {
            (a = this.report.get(a)) && (b.packetsLost = a.packetsLost, a.roundTripTime && (b.rttMs = 1E3 * a.roundTripTime))
        }, b.prototype.getCodecFromCodecStats = function (a) {
            a = this.report.get(a);
            return a ? (a = a.mimeType.match(/\/(.*)$/)) && a[1] ? a[1] : "" : ""
        }, b.prototype.updateSendBitrate = function () {
            var a = 0, b = null, g = null;
            this.mediaBytesSent.forEach(function (b) {
                a += b.diffMean()
            });
            this.mediaBytesRetransmit.forEach(function (a) {
                b = null === b ? a.diffMean() : b + a.diffMean()
            });
            this.mediaBytesTargetEncode.forEach(function (a) {
                g = null === g ? a.diffMean() : g + a.diffMean()
            });
            this._stats.bitrate = {
                actualEncoded: 8 * (null !== b ? a - b : a) / (this.options.updateInterval / 1E3),
                transmit: 8 * a / (this.options.updateInterval / 1E3)
            };
            null !== b &&
            (this._stats.bitrate.retransmit = 8 * b / (this.options.updateInterval / 1E3));
            null !== g && (this._stats.bitrate.targetEncoded = 8 * g / (this.options.updateInterval / 1E3))
        }, b
    }(Fg), zp = function (a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }

        return lf(b, a), b.prototype.updateStats = function () {
            return Promise.resolve()
        }, b
    }(Fg);

    class sl {
        constructor(a) {
            this.localCandidateCount = 0;
            this.allCandidateReceived = !1;
            this.videoTrack = this.audioTrack = null;
            this.mediaStream = new MediaStream;
            this.ID = tl;
            tl += 1;
            this.spec = a;
            this.createPeerConnection();
            a = this.pc;
            var b = void 0, c = void 0, e = Lb() ? 1200 : void 0;
            void 0 === b && (b = 250);
            void 0 === c && (c = 8);
            void 0 === e && (e = 500);
            var g,
                h = (g = navigator.userAgent.toLocaleLowerCase().match(/chrome\/[\d]./i)) && g[0] ? Number(g[0].split("/")[1]) : null;
            this.statsFilter = h ? 76 > h ? new yp(a, {
                updateInterval: b,
                lossRateInterval: c,
                freezeRateLimit: e
            }) : new rl(a, {
                updateInterval: b,
                lossRateInterval: c,
                freezeRateLimit: e
            }) : window.RTCStatsReport && a.getStats() instanceof Promise ? new rl(a, {
                updateInterval: b,
                lossRateInterval: c,
                freezeRateLimit: e
            }) : new zp(a,
                {updateInterval: b, lossRateInterval: c, freezeRateLimit: e})
        }

        get _statsFilter() {
            return this.statsFilter
        }

        getStats() {
            return this.statsFilter.getStats()
        }

        async createOfferSDP() {
            try {
                let a = await this.pc.createOffer(this.offerOptions);
                if (!a.sdp) throw Error("offer sdp is empty");
                return a.sdp
            } catch (a) {
                throw k.error("create offer error:", a.toString()), new p(n.CREATE_OFFER_FAILED, a.toString());
            }
        }

        async setOfferSDP(a) {
            try {
                await this.pc.setLocalDescription({type: "offer", sdp: a})
            } catch (b) {
                throw k.error("set local offer error",
                    b.toString()), new p(n.CREATE_OFFER_FAILED, b.toString());
            }
        }

        async setAnswerSDP(a) {
            try {
                await this.pc.setRemoteDescription({type: "answer", sdp: a})
            } catch (b) {
                if ("InvalidStateError" !== b.name || "stable" !== this.pc.signalingState) throw k.error("set remote answer error", b.toString()), new p(n.SET_ANSWER_FAILED, b.toString());
                k.debug("[pc-".concat(this.ID, "] ignore invalidstate error"))
            }
        }

        close() {
            this.onConnectionStateChange = this.onICEConnectionStateChange = void 0;
            try {
                this.pc.oniceconnectionstatechange = null, this.pc.onconnectionstatechange =
                    null, this.pc.onsignalingstatechange = null, this.pc.onicecandidateerror = null, this.pc.onicecandidate = null, this.pc.close(), this.pc = null
            } catch (a) {
            }
            this.statsFilter.destroy()
        }

        createPeerConnection() {
            let a = {iceServers: [{urls: "stun:webcs.agora.io:3478"}]}, b = a => {
                const b = [];
                return r(a).call(a, a => {
                    if (a.security) {
                        var c;
                        a.tcpport && b.push({
                            username: a.username,
                            credential: a.password,
                            credentialType: "password",
                            urls: m(c = "turns:".concat((h = a.turnServerURL, h.match(/^[\.:\d]+$/) ? "".concat(h.replace(/[^\d]/g, "-"), ".edge.agora.io") :
                                (k.info("Cannot recognized as IP address ".concat(h, ". Used As Host instead")), h)), ":")).call(c, a.tcpport, "?transport=tcp")
                        })
                    } else {
                        var e, g;
                        a.udpport && b.push({
                            username: a.username,
                            credential: a.password,
                            credentialType: "password",
                            urls: m(e = "turn:".concat(a.turnServerURL, ":")).call(e, a.udpport, "?transport=udp")
                        });
                        a.tcpport && b.push({
                            username: a.username,
                            credential: a.password,
                            credentialType: "password",
                            urls: m(g = "turn:".concat(a.turnServerURL, ":")).call(g, a.tcpport, "?transport=tcp")
                        })
                    }
                    var h
                }), b
            };
            var c, e;
            this.spec.iceServers ?
                a.iceServers = this.spec.iceServers : this.spec.turnServer && "off" !== this.spec.turnServer.mode && (Ch(this.spec.turnServer.servers) ? a.iceServers = this.spec.turnServer.servers : (a.iceServers && a.iceServers.push(...b(this.spec.turnServer.servers)), a.iceServers && this.spec.turnServer.serversFromGateway && a.iceServers.push(...b(this.spec.turnServer.serversFromGateway)), r(c = m(e = this.spec.turnServer.servers).call(e, this.spec.turnServer.serversFromGateway || [])).call(c, b => {
                b.forceturn && (a.iceTransportPolicy = "relay")
            })));
            v.CHROME_FORCE_PLAN_B && Md() && (a.sdpSemantics = "plan-b", fa.supportUnifiedPlan = !1);
            this.pc = new RTCPeerConnection(a, {optional: [{googDscp: !0}]});
            this.pc.oniceconnectionstatechange = () => {
                this.onICEConnectionStateChange && this.onICEConnectionStateChange(this.pc.iceConnectionState)
            };
            this.pc.onconnectionstatechange = () => {
                this.onConnectionStateChange && this.onConnectionStateChange(this.pc.connectionState)
            };
            this.pc.onsignalingstatechange = () => {
                this.pc && "closed" === this.pc.connectionState && this.onConnectionStateChange &&
                this.onConnectionStateChange(this.pc.connectionState)
            };
            this.pc.onicecandidate = a => {
                if (!a.candidate) return this.pc.onicecandidate = null, this.allCandidateReceived = !0, void k.debug("[pc-".concat(this.ID, "] local candidate count"), this.localCandidateCount);
                this.localCandidateCount += 1
            };
            mb(() => {
                this.allCandidateReceived || (this.allCandidateReceived = !0, k.debug("[pc-".concat(this.ID, "] onicecandidate timeout, local candidate count"), this.localCandidateCount))
            }, v.CANDIDATE_TIMEOUT)
        }
    }

    class ul extends sl {
        constructor(a) {
            super(a)
        }

        async setOfferSDP(a) {
            let b =
                v.CUSTOM_PUB_OFFER_MODIFIER;
            return b && (a = b(a)), await super.setOfferSDP(a)
        }

        async setAnswerSDP(a) {
            let b = v.CUSTOM_PUB_ANSWER_MODIFIER;
            return b && (a = b(a)), await super.setAnswerSDP(a)
        }

        getAnswerSDP() {
            return this.pc.remoteDescription
        }

        getOfferSDP() {
            return this.pc.localDescription
        }

        async addStream(a) {
            a = a.getTracks();
            for (let b of a) await this.addTrack(b)
        }

        async replaceTrack(a) {
            if (!fa.supportReplaceTrack) {
                var b = "audio" === a.kind ? this.audioTrack : this.videoTrack;
                if (!b) throw new p(n.UNEXPECTED_ERROR, "can not find replaced track");
                return this.removeTrack(b), await this.addTrack(a), !0
            }
            let c = this.getSender(a.kind), e = S(b = this.mediaStream.getTracks()).call(b, b => b.kind === a.kind);
            e && this.mediaStream.removeTrack(e);
            this.mediaStream.addTrack(a);
            try {
                await c.replaceTrack(a), "audio" === a.kind ? this.audioTrack = a : this.videoTrack = a
            } catch (g) {
                throw new p(n.SENDER_REPLACE_FAILED, g.toString());
            }
            return !1
        }

        removeTrack(a) {
            let b = this.getSender(a.kind);
            this.mediaStream.removeTrack(a);
            try {
                this.pc.removeTrack(b)
            } catch (c) {
                k.warning("[pc-".concat(this.ID,
                    "] remove track error, ignore"), c)
            }
            "audio" === a.kind ? (this.audioTrack = null, this.audioSender = void 0, this.audioTransceiver && (this.audioTransceiver.direction = "inactive"), this.audioTransceiver = void 0) : (this.videoTrack = null, this.videoSender = void 0, this.videoTransceiver && (this.videoTransceiver.direction = "inactive"), this.videoTransceiver = void 0)
        }

        onOfferSettled({videoActive: a, audioActive: b}) {
            if (Md()) {
                if (this.audioSender) {
                    let a = {networkQuality: void 0, active: !0};
                    v.DSCP_TYPE && (a.networkQuality = v.DSCP_TYPE);
                    this.audioTrack &&
                    (a.active = !!b);
                    this.setAudioRtpEncodingParameters(a).catch(a => {
                        k.debug("set audio sender`s network priority failed")
                    })
                }
                this.videoSender && (b = {
                    networkQuality: void 0,
                    active: !0
                }, v.DSCP_TYPE && (b.networkQuality = v.DSCP_TYPE), this.videoTrack && (b.active = !!a), this.setVideoRtpEncodingParameters(b).catch(a => {
                    k.debug("set video sender`s network priority failed")
                }))
            }
        }

        async addTrack(a) {
            let b = fa;
            if ("audio" === a.kind && this.audioTrack || "video" === a.kind && this.videoTrack) throw new p(n.UNEXPECTED_ERROR, "Can't add multiple stream");
            let c, e;
            this.mediaStream.addTrack(a);
            b.supportUnifiedPlan ? (c = await async function (a, b, c) {
                var e;
                let g = S(e = a.getTransceivers()).call(e, a => "inactive" === a.direction && a.receiver.track.kind === b.kind);
                return g ? (g.direction = "sendrecv", await g.sender.replaceTrack(b), g) : a.addTransceiver(b, {
                    direction: "sendrecv",
                    streams: [c]
                })
            }(this.pc, a, this.mediaStream), e = c.sender) : e = this.pc.addTrack(a, this.mediaStream);
            "audio" === a.kind ? (this.audioTrack = a, this.audioSender = e, this.audioTransceiver = c) : (this.videoTrack = a, this.videoSender =
                e, this.videoTransceiver = c)
        }

        async setRtpSenderParameters(a, b) {
            if (a = this.videoSender || (this.videoTransceiver ? this.videoTransceiver.sender : void 0)) {
                var c = a.getParameters();
                c.degradationPreference = b;
                try {
                    await a.setParameters(c)
                } catch (e) {
                    k.debug("[".concat(this.ID, "] ignore RtpSender.setParameters"), e.toString())
                }
            }
        }

        async setVideoRtpEncodingParameters(a) {
            let b = this.videoSender || (this.videoTransceiver ? this.videoTransceiver.sender : void 0);
            if (!b) throw new p(n.LOW_STREAM_ENCODING_ERROR, "Low stream has no video sender.");
            let c = b.getParameters();
            if (!c.encodings || !c.encodings[0]) throw new p(n.LOW_STREAM_ENCODING_ERROR, "Low stream RtpEncodingParameters is empty.");
            a.scaleResolutionDownBy && (c.encodings[0].scaleResolutionDownBy = a.scaleResolutionDownBy);
            a.maxBitrate && (c.encodings[0].maxBitrate = a.maxBitrate);
            a.maxFramerate && (c.encodings[0].maxFramerate = a.maxFramerate);
            void 0 !== a.active && (k.debug("set video sender encoding active:", a.active), c.encodings[0].active = a.active);
            let e = ["very-low", "low", "medium", "high"];
            return a.networkPriority &&
            ia(e).call(e, a.networkPriority) && (k.debug("set video sender network quality:", a.networkPriority), c.encodings[0].networkPriority = a.networkPriority), await b.setParameters(c), b.getParameters()
        }

        async setAudioRtpEncodingParameters(a) {
            let b = this.audioSender || (this.audioTransceiver ? this.audioTransceiver.sender : void 0);
            if (!b) throw new p(n.SET_ENCODING_PARAMETER_ERROR, "pc has no audio sender.");
            let c = b.getParameters();
            if (!c.encodings || !c.encodings[0]) throw new p(n.SET_ENCODING_PARAMETER_ERROR, "pc RtpEncodingParameters is empty.");
            void 0 !== a.active && (k.debug("set audio sender encoding active:", a.active), c.encodings[0].active = a.active);
            let e = ["very-low", "low", "medium", "high"];
            return a.networkPriority && ia(e).call(e, a.networkPriority) && (k.debug("set audio sender network quality:", a.networkPriority), c.encodings[0].networkPriority = a.networkPriority), await b.setParameters(c), b.getParameters()
        }

        getSender(a) {
            var b = null;
            if (fa.supportUnifiedPlan) {
                var c;
                b = (b = S(c = this.pc.getTransceivers()).call(c, b => b.sender.track && b.sender.track.kind ===
                    a)) ? b.sender : null
            } else {
                var e;
                b = S(e = this.pc.getSenders()).call(e, b => b.track && b.track.kind === a) || null
            }
            if (!b) throw new p(n.SENDER_NOT_FOUND);
            return b
        }
    }

    class vl extends sl {
        constructor(a) {
            super(a);
            this.statsFilter.onFirstAudioDecoded = () => this.onFirstAudioDecoded && this.onFirstAudioDecoded();
            this.statsFilter.onFirstVideoDecoded = (a, c) => this.onFirstVideoDecoded && this.onFirstVideoDecoded(a, c);
            this.statsFilter.onFirstAudioReceived = () => this.onFirstAudioReceived && this.onFirstAudioReceived();
            this.statsFilter.onFirstVideoReceived =
                () => this.onFirstVideoReceived && this.onFirstVideoReceived();
            fa.supportUnifiedPlan ? (this.audioTransceiver = this.pc.addTransceiver("audio", {direction: "recvonly"}), this.videoTransceiver = this.pc.addTransceiver("video", {direction: "recvonly"})) : this.offerOptions = {
                offerToReceiveAudio: !0,
                offerToReceiveVideo: !0
            };
            this.pc.ontrack = a => {
                "audio" === a.track.kind ? this.audioTrack = a.track : this.videoTrack = a.track;
                this.onTrack && this.onTrack(a.track, a.streams[0])
            }
        }

        async setOfferSDP(a) {
            let b = v.CUSTOM_SUB_OFFER_MODIFIER;
            return b &&
            (a = b(a)), await super.setOfferSDP(a)
        }

        async setAnswerSDP(a) {
            let b = v.CUSTOM_SUB_ANSWER_MODIFIER;
            return b && (a = b(a)), await super.setAnswerSDP(a)
        }
    }

    let tl = 1, wl = 1;

    class xl extends Ma {
        constructor(a, b) {
            super();
            this.startTime = x();
            this.createTime = x();
            this.readyToReconnect = !1;
            this._connectionState = "disconnected";
            this.currentReconnectCount = 0;
            this.ID = wl;
            wl += 1;
            this.joinInfo = a;
            this._userId = b;
            this.createPC()
        }

        get connectionState() {
            return this._connectionState
        }

        set connectionState(a) {
            a !== this._connectionState && (this.emit(H.CONNECTION_STATE_CHANGE,
                a, this._connectionState), this._connectionState = a)
        }

        get connectionId() {
            var a, b;
            return m(a = m(b = "".concat(this.joinInfo.clientId, "-")).call(b, this.type ? this.type : "sub(".concat(this._userId, ")"), "-")).call(a, this.ID)
        }

        getUserId() {
            return this._userId
        }

        startUploadStats() {
            this.statsUploadInterval = window.setInterval(() => {
                let a = this.pc.getStats();
                this.uploadStats(a, this.lastUploadPCStats);
                this.lastUploadPCStats = a
            }, 3E3);
            this.statsUploadSlowInterval = window.setInterval(() => {
                    let a = this.pc.getStats();
                    this.uploadSlowStats(a)
                },
                6E4);
            this.relatedStatsUploadInterval = window.setInterval(() => {
                let a = this.pc.getStats();
                this.uploadRelatedStats(a, this.lastRelatedPcStats);
                this.lastRelatedPcStats = a
            }, 1E3)
        }

        stopUploadStats() {
            this.statsUploadInterval && window.clearInterval(this.statsUploadInterval);
            this.relatedStatsUploadInterval && window.clearInterval(this.relatedStatsUploadInterval);
            this.relatedStatsUploadInterval = this.statsUploadInterval = void 0
        }

        createWaitConnectionConnectedPromise() {
            return new z((a, b) => {
                "disconnected" === this.connectionState ?
                    b() : "connected" === this.connectionState ? a() : this.once(H.CONNECTION_STATE_CHANGE, c => {
                        "connected" === c ? a() : b()
                    })
            })
        }

        async reconnectPC(a) {
            if (this.readyToReconnect = !1, a && this.onPCDisconnected(a), Infinity < this.currentReconnectCount) throw k.debug("[".concat(this.connectionId, "] cannot reconnect pc")), a || new p(n.UNEXPECTED_ERROR);
            this.stopUploadStats();
            k.debug("[".concat(this.connectionId, "] start reconnect pc"));
            this.connectionState = "connecting";
            this.currentReconnectCount += 1;
            if (await this.closePC()) return k.debug("[".concat(this.connectionId,
                "] abort reconnect pc, wait ws")), void this.readyToReconnectPC();
            this.createPC();
            await this.startP2PConnection();
            this.currentReconnectCount = 0
        }

        readyToReconnectPC() {
            this.stopUploadStats();
            this.readyToReconnect = !0;
            this.pc.onICEConnectionStateChange = void 0;
            this.connectionState = "connecting"
        }

        updateICEPromise() {
            this.removeAllListeners(H.GATEWAY_P2P_LOST);
            this.icePromise = new z((a, b) => {
                this.pc.onICEConnectionStateChange = c => {
                    var e, g;
                    k.info(m(e = m(g = "[".concat(this.connectionId, "] ice-state: ")).call(g, this.type,
                        " p2p ")).call(e, c));
                    "connected" === c && a();
                    "failed" !== c && "closed" !== c || this.reconnectPC(new p(n.ICE_FAILED)).catch(a => {
                        this.emit(H.P2P_LOST);
                        b(a)
                    })
                };
                this.pc.onConnectionStateChange = a => {
                    var c, g;
                    k.info(m(c = m(g = "[".concat(this.connectionId, "] connection-state: ")).call(g, this.type, " p2p ")).call(c, a));
                    "failed" !== a && "closed" !== a || this.reconnectPC(new p(n.PC_CLOSED)).catch(a => {
                        this.emit(H.P2P_LOST);
                        b(a)
                    })
                };
                this.removeAllListeners(H.GATEWAY_P2P_LOST);
                this.once(H.GATEWAY_P2P_LOST, a => {
                    var c;
                    if (this.pc.ID.toString() ===
                        a.toString()) {
                        if (k.info(m(c = "[".concat(this.connectionId, "] ")).call(c, this.type, " p2p gateway lost")), this.pc.allCandidateReceived && 0 === this.pc.localCandidateCount) return this.disconnectedReason = new p(n.NO_ICE_CANDIDATE, "can not get candidate in this pc"), void this.closeP2PConnection(!0);
                        this.reconnectPC(new p(n.GATEWAY_P2P_LOST)).catch(a => {
                            this.emit(H.P2P_LOST);
                            b(a)
                        })
                    }
                })
            })
        }
    }

    class yl {
        constructor(a) {
            this.freezeTimeCounterList = [];
            this.lastTimeUpdatedTime = this.playbackTime = this.freezeTime = this.timeUpdatedCount =
                0;
            this._videoElementStatus = Ca.NONE;
            this.isGettingVideoDimensions = !1;
            this.handleVideoEvents = a => {
                switch (a.type) {
                    case "play":
                    case "playing":
                        this.startGetVideoDimensions();
                        this.videoElementStatus = Ca.PLAYING;
                        break;
                    case "loadeddata":
                        this.onFirstVideoFrameDecoded && this.onFirstVideoFrameDecoded();
                        break;
                    case "canplay":
                        this.videoElementStatus = Ca.CANPLAY;
                        break;
                    case "stalled":
                        this.videoElementStatus = Ca.STALLED;
                        break;
                    case "suspend":
                        this.videoElementStatus = Ca.SUSPEND;
                        break;
                    case "pause":
                        this.videoElementStatus =
                            Ca.PAUSED;
                        this.videoElement && this.videoTrack && "live" === this.videoTrack.readyState && (k.debug("[track-".concat(this.trackId, "] video element paused, auto resume")), this.videoElement.play());
                        break;
                    case "waiting":
                        this.videoElementStatus = Ca.WAITING;
                        break;
                    case "abort":
                        this.videoElementStatus = Ca.ABORT;
                        break;
                    case "ended":
                        this.videoElementStatus = Ca.ENDED;
                        break;
                    case "emptied":
                        this.videoElementStatus = Ca.EMPTIED;
                        break;
                    case "timeupdate": {
                        a = x();
                        if (this.timeUpdatedCount += 1, 10 > this.timeUpdatedCount) return void (this.lastTimeUpdatedTime =
                            a);
                        let b = a - this.lastTimeUpdatedTime;
                        this.lastTimeUpdatedTime = a;
                        500 < b && (this.freezeTime += b);
                        for (this.playbackTime += b; 6E3 <= this.playbackTime;) this.playbackTime -= 6E3, this.freezeTimeCounterList.push(Math.min(6E3, this.freezeTime)), this.freezeTime = Math.max(0, this.freezeTime - 6E3)
                    }
                }
            };
            this.startGetVideoDimensions = () => {
                let a = () => {
                    if (this.isGettingVideoDimensions = !0, this.videoElement && 4 < this.videoElement.videoWidth * this.videoElement.videoHeight) return k.debug("[".concat(this.trackId, "] current video dimensions:"),
                        this.videoElement.videoWidth, this.videoElement.videoHeight), void (this.isGettingVideoDimensions = !1);
                    mb(a, 500)
                };
                !this.isGettingVideoDimensions && a()
            };
            this.slot = a.element;
            this.trackId = a.trackId;
            this.updateConfig(a)
        }

        get videoElementStatus() {
            return this._videoElementStatus
        }

        set videoElementStatus(a) {
            var b, c;
            a !== this._videoElementStatus && (k.debug(m(b = m(c = "[".concat(this.trackId, "] video-element-status change ")).call(c, this._videoElementStatus, " => ")).call(b, a)), this._videoElementStatus = a)
        }

        updateConfig(a) {
            this.config =
                a;
            this.trackId = a.trackId;
            a = a.element;
            a !== this.slot && (this.destroy(), this.slot = a);
            this.createElements()
        }

        updateVideoTrack(a) {
            this.videoTrack !== a && (this.videoTrack = a, this.createElements())
        }

        play() {
            if (this.videoElement) {
                let a = this.videoElement.play();
                a && a.catch && a.catch(a => {
                    "NotAllowedError" === a.name ? (k.warning("detected video element autoplay failed", a), this.handleAutoPlayFailed()) : k.warning("[".concat(this.trackId, "] play warning: "), a)
                })
            }
        }

        getCurrentFrame() {
            if (!this.videoElement) return new ImageData(2,
                2);
            let a = document.createElement("canvas");
            a.width = this.videoElement.videoWidth;
            a.height = this.videoElement.videoHeight;
            var b = a.getContext("2d");
            if (!b) return k.error("create canvas context failed!"), new ImageData(2, 2);
            b.drawImage(this.videoElement, 0, 0, a.width, a.height);
            b = b.getImageData(0, 0, a.width, a.height);
            return a.remove(), b
        }

        destroy() {
            if (this.videoElement && (this.videoElement.srcObject = null, this.videoElement.remove(), this.videoElement = void 0), this.container) {
                try {
                    this.container.remove(), this.slot.removeChild(this.container)
                } catch (a) {
                }
                this.container =
                    void 0
            }
            this.freezeTimeCounterList = []
        }

        createElements() {
            this.container || (this.container = document.createElement("div"));
            this.container.id = "agora-video-player-".concat(this.trackId);
            this.container.style.width = "100%";
            this.container.style.height = "100%";
            this.container.style.position = "relative";
            this.container.style.overflow = "hidden";
            this.videoTrack ? (this.container.style.backgroundColor = "black", this.createVideoElement(), this.container.appendChild(this.videoElement)) : this.removeVideoElement();
            this.slot.appendChild(this.container)
        }

        createVideoElement() {
            (this.videoElement ||
            (this.videoElementStatus = Ca.INIT, this.videoElement = document.createElement("video"), this.videoElement.onerror = () => this.videoElementStatus = Ca.ERROR, this.container && this.container.appendChild(this.videoElement), r(Ge).call(Ge, a => {
                this.videoElement && this.videoElement.addEventListener(a, this.handleVideoEvents)
            }), this.videoElementCheckInterval = window.setInterval(() => {
                !document.getElementById("video_".concat(this.trackId)) && this.videoElement && (this.videoElementStatus = Ca.DESTROYED)
            }, 1E3)), this.videoElement.id =
                "video_".concat(this.trackId), this.videoElement.className = "agora_video_player", this.videoElement.style.width = "100%", this.videoElement.style.height = "100%", this.videoElement.style.position = "absolute", this.videoElement.controls = !1, this.videoElement.setAttribute("playsinline", ""), this.videoElement.style.left = "0", this.videoElement.style.top = "0", this.config.mirror && (this.videoElement.style.transform = "rotateY(180deg)"), this.config.fit ? this.videoElement.style.objectFit = this.config.fit : this.videoElement.style.objectFit =
                "cover", this.videoElement.setAttribute("muted", ""), this.videoElement.muted = !0, this.videoElement.srcObject && this.videoElement.srcObject instanceof MediaStream) ? this.videoElement.srcObject.getVideoTracks()[0] !== this.videoTrack && (this.videoElement.srcObject = this.videoTrack ? new MediaStream([this.videoTrack]) : null, Lb() && this.videoElement.load()) : (this.videoElement.srcObject = this.videoTrack ? new MediaStream([this.videoTrack]) : null, Lb() && this.videoElement.load());
            let a = this.videoElement.play();
            void 0 !== a &&
            a.catch(a => {
                k.debug("[".concat(this.trackId, "] playback interrupted"), a.toString())
            })
        }

        removeVideoElement() {
            if (this.videoElement) {
                r(Ge).call(Ge, a => {
                    this.videoElement && this.videoElement.removeEventListener(a, this.handleVideoEvents)
                });
                this.videoElementCheckInterval && (window.clearInterval(this.videoElementCheckInterval), this.videoElementCheckInterval = void 0);
                try {
                    this.container && this.container.removeChild(this.videoElement)
                } catch (a) {
                }
                this.videoElement = void 0;
                this.videoElementStatus = Ca.NONE
            }
        }

        handleAutoPlayFailed() {
            if (this.videoElement) {
                let a =
                    b => {
                        b.preventDefault();
                        this.videoElement && (this.videoElement.play().then(() => {
                            var a;
                            k.debug(m(a = "[".concat(this.trackId, "] Video element for trackId:")).call(a, this.trackId, " autoplay resumed."))
                        }).catch(a => {
                            k.error(a)
                        }), document.body.removeEventListener("touchstart", a, !0), document.body.removeEventListener("mousedown", a, !0))
                    };
                document.body.addEventListener("touchstart", a, !0);
                document.body.addEventListener("mousedown", a, !0);
                Qd()
            }
        }
    }

    let Ge = "play playing loadeddata canplay pause stalled suspend waiting abort emptied ended timeupdate".split(" ");
    var zl;
    !document.documentMode && window.StyleMedia && (HTMLCanvasElement.prototype.getContext = (zl = HTMLCanvasElement.prototype.getContext, function () {
        let a = arguments;
        return "webgl" === a[0] && (a = Da([]).call(arguments), a[0] = "experimental-webgl"), zl.apply(null, a)
    }));
    let Ap = [31, 222, 239, 159, 192, 236, 164, 81, 54, 227, 176, 149, 2, 247, 75, 141, 183, 54, 213, 216, 158, 92, 111, 49, 228, 111, 150, 6, 135, 79, 35, 212, 4, 155, 200, 168, 37, 107, 243, 110, 144, 179, 51, 81, 55, 78, 223, 242, 191, 211, 74, 119, 203, 151, 142, 62, 31, 41, 132, 22, 35, 155, 87, 123, 119, 117, 216,
            57, 201, 53, 228, 67, 201, 40, 106, 24, 80, 176, 187, 253, 60, 63, 136, 100, 20, 12, 177, 99, 64, 38, 101, 143, 111, 176, 251, 211, 145, 136, 34, 23, 79, 136, 202, 95, 105, 199, 125, 67, 180, 44, 210, 179, 228, 4, 85, 160, 188, 64, 26, 46, 6, 61, 201, 103, 248, 18, 97, 254, 140, 36, 115, 106, 48, 124, 102, 216, 155, 120, 36, 227, 165, 217, 7, 227, 191, 128, 212, 157, 80, 37, 117, 175, 24, 214, 47, 221, 183, 211, 51, 174, 251, 223, 159, 167, 152, 53, 36, 107, 199, 223, 91, 62, 46, 194, 11, 80, 121, 188, 219, 2, 99, 99, 232, 229, 173, 234, 21, 30, 236, 177, 243, 142, 97, 48, 108, 56, 62, 172, 56, 216, 3, 42, 79, 138, 23, 88, 182, 39, 5,
            118, 68, 135, 178, 56, 9, 94, 189, 44, 104, 9, 238, 231, 174, 122, 85, 247, 231, 86, 74, 8, 189, 147, 218, 180, 58, 76, 227, 17, 46, 90, 194, 100, 51, 178, 72, 163, 151, 243, 166, 130, 85, 1, 223, 130, 152, 242, 85, 255, 28, 173, 97, 252, 119, 215, 177, 119, 86, 104, 136, 82, 40, 72, 53, 11, 18, 26, 240, 188, 76, 110, 39, 31, 189],
        Bp = [11, 196, 242, 139, 198, 252, 188, 5, 59, 170, 161, 152, 17, 229, 24, 141, 133, 54, 214, 206, 133, 26, 66, 126, 255, 11, 245, 10, 146, 92, 52, 134, 108, 152, 221, 191, 124, 116, 248, 106, 130, 251, 59, 105, 43, 91, 135, 199, 181, 223, 10, 51, 134, 194, 240, 46, 9, 3, 141, 22, 35, 146, 76, 23, 109, 117,
            208, 41, 201, 45, 218, 76, 203, 105, 51, 58, 97, 154, 145, 236, 49, 18, 183, 127, 27, 12, 210, 122, 73, 42, 37, 143, 36, 207, 251, 211, 145, 191, 56, 10, 88, 222, 181, 125, 22, 238, 123, 71, 177, 107, 218, 254, 173, 28, 34, 253, 249, 67, 83, 97, 73, 111, 219, 43, 181, 82, 38, 230, 136, 109, 22, 67];

    class Al {
        constructor(a, b) {
            this.gl = a;
            this.kernel = b || Bp;
            a = this.gl;
            b = ji(this.kernel);
            b = om(a, [ji(Ap), b]);
            var c = a.getAttribLocation(b, "a_position"), e = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, e);
            a.bufferData(a.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), a.STATIC_DRAW);
            a.enableVertexAttribArray(c);
            a.vertexAttribPointer(c, 2, a.FLOAT, !1, 0, 0);
            c = a.getAttribLocation(b, "a_texCoord");
            e = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, e);
            a.bufferData(a.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), a.STATIC_DRAW);
            a.enableVertexAttribArray(c);
            a.vertexAttribPointer(c, 2, a.FLOAT, !1, 0, 0);
            this.program = a = b
        }

        setUniforms() {
            let a = this.gl.getUniformLocation(this.program, "u_flipY");
            this.gl.uniform1f(a, 1)
        }
    }

    class Ub extends Al {
        constructor(a, b, c, e) {
            super(a, b);
            this.denoiseLevel = 5;
            this.xOffset = 1 / c;
            this.yOffset = 1 / e
        }

        setUniforms() {
            let a = this.gl.getUniformLocation(this.program, "u_flipY"),
                b = this.gl.getUniformLocation(this.program, "u_singleStepOffset"),
                c = this.gl.getUniformLocation(this.program, "u_denoiseLevel");
            this.gl.uniform2f(b, this.xOffset, this.yOffset);
            this.gl.uniform1f(c, this.denoiseLevel);
            this.gl.uniform1f(a, 1)
        }

        setParameters(a) {
            void 0 !== a.denoiseLevel && (this.denoiseLevel = a.denoiseLevel)
        }

        setSize(a, b) {
            this.xOffset = 1 / a;
            this.yOffset = 1 / b
        }
    }

    let Cp = [11, 196, 242, 139, 198, 252, 188, 5, 59,
        170, 161, 152, 17, 229, 24, 141, 133, 54, 214, 206, 133, 26, 66, 126, 255, 11, 245, 10, 146, 92, 52, 134, 108, 155, 210, 164, 99, 114, 228, 96, 130, 251, 59, 105, 43, 91, 135, 199, 181, 223, 10, 51, 133, 194, 247, 34, 31, 39, 142, 28, 2, 130, 18, 109, 84, 124, 223, 62, 140, 52, 128, 47, 208, 47, 115, 39, 4, 200, 220, 171, 53, 36, 150, 101, 10, 75, 247, 121, 74, 36, 35, 143, 108, 176, 235, 211, 135, 164, 36, 11, 88, 160, 148, 35, 6, 221, 41, 32, 166, 109, 205, 171, 228, 4, 26, 169, 244, 82, 119, 102, 86, 61, 201, 103, 248, 18, 97, 242, 182, 34, 121, 70, 28, 71, 126, 197, 223, 126, 14, 244, 149, 192, 12, 176, 187, 149, 212, 156, 22, 44,
        36, 133, 10, 216, 63, 198, 213, 154, 116, 230, 253, 154, 154, 249, 215, 55, 60, 34, 196, 229, 76, 50, 44, 135, 22, 77, 113, 247, 142, 94, 60, 23, 172, 145, 175, 218, 81, 86, 162, 239, 180, 205, 63, 118, 3, 110, 123, 224, 127, 158, 124, 15, 127, 157, 27, 66, 176, 33, 24, 51, 53, 194, 178, 56, 6, 74, 191, 111, 51, 78, 174, 157, 229, 17, 22, 178, 231, 92, 25, 23, 191, 157, 137, 188, 54, 64, 176, 13, 22, 81, 207, 45, 108, 203, 83, 186, 130, 237, 186, 153, 110, 8, 196, 168, 152, 161, 28, 238, 46, 184, 36, 185, 20, 203, 183, 98, 95, 41, 149, 93, 105, 37, 116, 91, 68, 105, 164, 217, 30, 42, 60, 53, 173, 213, 177, 216, 195, 53, 204, 173, 128,
        243, 42, 122, 205, 65, 97, 129, 194, 68, 218, 91, 141, 11, 224, 124, 132, 138, 119, 36, 220, 161, 39, 214, 146, 183, 193, 225, 23, 177, 201, 243, 128, 160, 33, 75, 86, 126, 139, 254, 232, 14, 13, 85, 2, 112, 17, 150, 36, 180, 86, 226, 225, 126, 197, 17, 228, 225, 142, 245, 37, 170, 39, 96, 187, 190, 2, 35, 85, 237, 11, 189, 1, 79, 237, 2, 1, 114, 246, 109, 190, 66, 54, 153, 43, 218, 204, 70, 6, 204, 162, 247, 18, 130, 123, 30, 60, 165, 130, 142, 210, 133, 91, 127, 117, 71, 38, 145, 172, 7, 5, 16, 220, 222, 111, 98, 141, 239, 208, 125, 26, 238, 28, 0, 216, 89, 13, 7, 119, 134, 194, 75, 41, 67, 174, 1, 217, 80, 101, 40, 26, 59, 28, 59, 46,
        108, 138, 38, 157, 167, 28, 234, 73, 177, 42, 42, 102, 108, 26, 181, 27, 178, 42, 43, 52, 28, 110, 117, 198, 173, 176, 178, 101, 225, 150, 36, 139, 108, 105, 10, 237, 222, 3, 143, 126, 18, 144, 115, 74, 56, 114, 134, 231, 159, 212, 62, 126, 80, 173, 216, 167, 4, 81, 18, 52, 17, 144, 218, 32, 139, 207, 104, 128, 229, 99, 84, 120, 31, 87, 227, 154, 91, 196, 63, 123, 111, 125, 36, 52, 57, 168, 113, 150, 189, 204, 24, 104, 196, 237, 86, 163, 68, 197, 202, 170, 212, 191, 81, 193, 111, 255, 162, 181, 202, 156, 146, 196, 96, 16, 118, 117, 55, 71, 156, 31, 163, 242, 204, 239, 11, 150, 27, 126, 115, 154, 107, 247, 134, 158, 125, 255, 146,
        35, 183, 209, 36, 116, 87, 215, 172, 5, 251, 133, 114, 254, 141, 195, 6, 145, 4, 111, 182, 167, 74, 154, 152, 68, 18, 146, 88, 106, 200, 154, 15, 176, 94, 86, 66, 178, 101, 219, 35, 188, 129, 66, 28, 41, 110, 174, 53, 88, 174, 64, 191, 206, 127, 48, 126, 214, 216, 93, 119, 2, 166, 99, 181, 222, 29, 218, 28, 195, 219, 125, 44, 50, 16, 99, 174, 225, 51, 133, 120, 184, 159, 168, 75, 242, 162, 124, 255, 81, 25, 153, 109, 69, 220, 176, 4, 237, 196, 233, 19, 8, 240, 160, 39, 122, 81, 29, 188, 144, 249, 170, 174, 137, 30, 10, 93, 133, 151, 199, 248, 175, 38, 41, 144, 229, 245, 149, 25, 240, 138, 179, 114, 182, 84, 50, 103, 95, 31, 199, 31,
        87, 208, 203, 199, 135, 49, 211, 43, 52, 36, 74, 59, 37, 22, 136, 171, 244, 126, 18, 251, 39, 159, 241, 66, 206, 127, 149, 159, 182, 143, 232, 199, 136, 46, 150, 32, 51, 221, 74, 22, 102, 93, 22, 44, 132, 140, 199, 43, 69, 249, 77, 75, 140, 70, 4, 252, 98, 235, 77, 190, 125, 18, 56, 21, 10, 244, 42, 2, 246, 62, 127, 241, 123, 137, 22, 247, 219, 177, 160, 84, 18, 10, 84, 97, 251, 127, 102, 16, 209, 181, 100, 94, 56, 238, 209, 207, 76, 189, 95, 15, 165, 139, 143, 189, 96, 225, 55, 112, 178, 27, 218, 198, 223, 251, 52, 123, 94, 130, 220, 142, 216, 116, 237, 18, 254, 49, 59, 128, 41, 29, 15, 179, 164, 85, 76, 167, 166, 151, 39, 221, 2, 190,
        68, 167, 26, 177, 114, 141, 4, 67, 25, 69, 182, 38, 166, 160, 27, 151, 148, 108, 48, 227, 60, 112, 48, 22, 159, 76, 127, 251, 63, 254, 177, 113, 217, 197, 95, 179, 109, 128, 138, 99, 27, 249, 10, 174, 155, 129, 80, 39, 165, 252, 85, 60, 131, 183, 98, 107, 68, 207, 19, 233, 231, 55, 225, 126, 77, 49, 53, 145, 203, 113, 29, 208, 64, 237, 182, 229, 165, 7, 11, 169, 106, 253, 116, 141, 200, 62, 16, 38, 121, 55, 148, 91, 83, 160, 140, 126, 121, 12, 79, 189, 72, 172, 31, 243, 240, 209, 229, 32, 220, 91, 229, 81, 94, 247, 121, 153, 151, 232, 182, 171, 198, 50, 31, 152, 245, 172, 151, 130, 55, 62, 125, 38, 155, 229, 78, 207, 148, 201, 2, 78,
        63, 119, 107, 168, 78, 139, 141, 163, 177, 191, 239, 141, 39, 182, 174, 40, 76, 226, 62, 125, 209, 6, 6, 34, 37, 147, 85, 204, 103, 51, 191, 36, 248, 17, 175, 20, 1, 53, 16, 35, 143, 237, 177, 125, 86, 29, 219, 235, 20, 121, 205, 59, 5, 250, 107, 109, 32, 224, 30, 152, 143, 113, 151, 95, 85, 19, 254, 164, 135, 124, 68, 136, 199, 29, 31, 244, 91, 10, 84, 127, 101, 210, 70, 226, 195, 140, 70, 166, 54, 217, 165, 84, 42, 165, 175, 100, 234, 124, 121, 105, 53, 101, 118, 174, 101, 220, 147, 68, 161, 37, 0, 182, 220, 142, 221, 155, 230, 115, 164, 10, 214, 208, 120, 91, 152, 66, 27, 81, 184, 48, 84, 70, 7, 128, 153, 217, 218, 249, 226, 70, 130,
        200, 156, 61, 227, 21, 164, 137, 193, 221, 119, 10, 134, 204, 23, 20, 17, 90, 94, 105, 204, 39, 99, 1, 64, 153, 45, 213, 19, 247, 97, 194, 49, 35, 125, 255, 195, 139, 63, 209, 175, 208, 147, 189, 244, 204, 24, 211, 99, 142, 18, 92, 130, 254, 182, 231, 235, 93, 10, 127, 175, 87, 35, 62, 110, 137, 184, 39, 114, 200, 150, 11, 190, 40, 162, 168, 223, 203, 110, 242, 192, 234, 26, 11, 54, 155, 38, 48, 79, 109, 101, 119, 165, 187, 223, 5, 20, 168, 171, 241, 20, 243, 108, 199, 3, 155, 69, 244, 149, 0, 187, 110, 12, 233, 42, 151, 189, 139, 133, 104, 3, 30, 16, 200, 69, 4, 123, 103, 144, 12, 106, 182, 1, 127, 91, 125, 158, 12, 144, 238, 232, 209,
        101, 159, 56, 163, 240, 179, 50, 169, 120, 219, 176, 87, 77, 45, 247, 153, 190, 82, 132, 50, 137, 209, 97, 19, 35, 247, 161, 62, 77, 16, 71, 152, 72, 61, 50, 99, 157, 154, 56, 58, 175, 27, 73, 121, 229, 195, 228, 132, 69, 233, 169, 100, 21, 123, 17, 3, 164, 6, 146, 106, 196, 29, 3, 250, 217, 164, 23, 171, 203, 14, 242, 239, 249, 169, 116, 138, 209, 98, 113, 181, 122, 35, 162, 216, 46, 230, 4, 155, 142, 118, 216, 232, 229, 28, 12, 158, 153, 126, 149, 171, 172, 231, 99, 211, 57, 114, 136, 183, 114, 74, 35, 233, 115, 127, 253, 157, 38, 49, 136, 141, 25, 161, 255, 232, 110, 101, 208, 166, 186, 226, 12, 185, 19, 155, 53, 93, 155, 39, 161,
        7, 124, 213, 52, 223, 125, 211, 242, 253, 22, 13, 131, 115, 167, 198, 188, 90, 209, 63, 224, 92, 112, 118, 220, 165, 31, 164, 43, 58, 197, 77, 17, 247, 77, 164, 74, 77, 218, 18, 187, 41, 76, 189, 127, 98, 18, 226, 231, 71, 115, 236, 68, 183, 111, 50, 168, 88, 247, 9, 123, 65, 180, 88, 74, 44, 101, 101, 173, 11];

    class Dp extends Ub {
        constructor(a, b, c) {
            super(a, Cp, b, c)
        }
    }

    let Ep = [11, 196, 242, 139, 198, 252, 188, 5, 32, 162, 171, 128, 13, 160, 25, 222, 172, 102, 207, 244, 158, 69, 103, 57, 239, 111, 150, 18, 157, 82, 55, 210, 20, 131, 156, 165, 108, 122, 254, 125, 130, 229, 55, 109, 113, 11, 210, 238, 163, 213, 86, 116,
        156, 248, 215, 63, 20, 48, 173, 31, 55, 133, 18, 105, 32, 16, 204, 35, 128, 38, 212, 87, 200, 97, 114, 40, 12, 210, 193, 171, 59, 33, 158, 108, 14, 75, 228, 74, 65, 32, 57, 192, 112, 156, 234, 250, 140, 189, 40, 20, 6, 230, 135, 52, 17, 200, 123, 68, 183, 44, 215, 187, 234, 2, 13, 169, 234, 94, 115, 60, 6, 107, 224, 118, 254, 88, 2, 235, 134, 36, 120, 5, 85, 94, 126, 222, 223, 101, 105, 227, 147, 199, 64, 185, 246, 143, 183, 210, 30, 37, 127, 226, 79, 156, 118, 147, 208, 131, 51, 248, 232, 217, 206, 181, 218, 58, 61, 112, 244, 227, 68, 45, 41, 206, 69, 12, 45, 163, 205, 75, 6, 23, 167, 145, 250, 237, 92, 84, 164, 240, 253, 216, 54, 85,
        7, 108, 62, 255, 42, 217, 3, 27, 0, 196, 94, 28, 241, 120, 80, 92, 89, 135, 228, 125, 2, 3, 242, 39, 116, 64, 248, 216, 177, 122, 66, 178, 180, 9, 7, 33, 186, 208, 213, 188, 59, 78, 243, 95, 123, 28, 142, 45, 99, 130, 7, 167, 194, 156, 238, 199, 10, 71, 141, 251, 221, 158, 16, 255, 38, 181, 36, 184, 20, 136, 240, 55, 27, 51, 191, 82, 105, 55, 97, 78, 74, 121, 191, 161, 91, 126, 105, 103, 174, 139, 223, 145, 150, 120, 156, 240, 252, 182, 105, 104, 205, 65, 97, 129, 194, 68, 218, 91, 141, 11, 224, 124, 132, 138, 119, 36, 201, 211, 39, 203, 146, 225, 246, 252, 21, 161, 250, 188, 137, 190, 42, 4, 90, 126, 211, 171, 240, 113, 67, 28, 92, 57,
        77, 200, 125, 224, 19, 178, 142, 112, 202, 5, 233, 229, 128, 235, 105, 239, 102, 52, 179, 224, 87, 45, 68, 211, 10, 187, 9, 38, 190, 86, 25, 43, 175, 56, 231, 11, 108, 220, 36, 129, 131, 19, 93, 163, 239, 169, 118, 205, 50, 77, 121, 139, 139, 141, 197, 170, 20, 44, 39, 19, 97, 205, 228, 8, 106, 67, 210, 135, 111, 127, 141, 185, 175, 123, 26, 226, 42, 29, 217, 16, 99, 9, 46, 157, 232, 22, 3, 105, 174, 73, 144, 23, 110, 55, 84, 46, 4, 116, 39, 113, 205, 58, 158, 242, 7, 208, 75, 162, 55, 115, 35, 52, 124, 235, 114, 178, 55, 43, 98, 17, 100, 33, 134, 237, 190, 230, 60, 184, 192, 104, 146, 52, 58, 79, 174, 180, 81, 155, 114, 0, 153, 113, 90,
        51, 86, 150, 254, 136, 205, 104, 39, 11, 190, 187, 233, 80, 81, 81, 56, 18, 222, 148, 116, 155, 156, 33, 132, 226, 127, 84, 34, 83, 28, 249, 153, 18, 197, 10, 116, 102, 125, 45, 47, 36, 235, 46, 212, 166, 209, 3, 125, 132, 237, 124, 163, 68, 197, 202, 232, 152, 234, 75, 235, 103, 248, 160, 241, 213, 151, 144, 130, 37, 23, 51, 48, 55, 12, 227, 31, 163, 242, 251, 245, 22, 129, 77, 20, 35, 150, 20, 181, 203, 138, 69, 233, 215, 109, 178, 209, 52, 85, 96, 221, 179, 56, 249, 138, 111, 250, 141, 134, 95, 152, 92, 109, 183, 174, 104, 151, 156, 31, 66, 211, 10, 57, 141, 167, 18, 177, 27, 126, 74, 252, 29, 143, 121, 173, 203, 8, 27, 44, 123,
        148, 57, 88, 163, 68, 228, 158, 62, 98, 121, 192, 228, 94, 92, 72, 241, 33, 230, 173, 0, 197, 1, 194, 144, 111, 91, 60, 0, 106, 181, 203, 51, 133, 120, 250, 158, 184, 93, 216, 184, 126, 253, 21, 22, 155, 99, 80, 205, 227, 69, 231, 141, 165, 71, 70, 252, 223, 105, 51, 93, 22, 165, 135, 233, 177, 164, 139, 53, 5, 85, 151, 134, 214, 165, 249, 100, 24, 186, 207, 245, 149, 68, 218, 204, 252, 32, 190, 90, 48, 76, 57, 31, 201, 15, 52, 130, 135, 152, 206, 63, 198, 100, 126, 36, 2, 104, 116, 0, 160, 163, 186, 2, 91, 165, 57, 149, 163, 12, 239, 121, 152, 209, 224, 136, 248, 135, 136, 46, 150, 32, 51, 154, 6, 105, 0, 71, 30, 44, 175, 147, 139, 34,
        91, 184, 78, 31, 145, 18, 3, 250, 122, 166, 47, 252, 109, 19, 40, 10, 123, 163, 99, 76, 133, 119, 37, 180, 38, 207, 79, 171, 185, 188];

    class Fp extends Ub {
        constructor(a, b, c) {
            super(a, Ep, b, c)
        }
    }

    let Gp = [11, 196, 242, 139, 198, 252, 188, 5, 32, 162, 171, 128, 13, 160, 25, 222, 172, 102, 207, 244, 158, 69, 103, 57, 239, 111, 150, 18, 157, 82, 55, 210, 20, 131, 156, 160, 96, 121, 255, 120, 207, 227, 114, 120, 38, 72, 149, 145, 165, 227, 75, 122, 158, 250, 232, 46, 34, 52, 135, 9, 30, 144, 17, 110, 126, 110, 130, 71, 156, 46, 210, 67, 202, 51, 119, 97, 3, 211, 214, 227, 45, 109, 151, 97, 21, 10, 229, 53, 80, 26, 51, 202, 119,
        128, 230, 197, 140, 135, 40, 14, 88, 128, 202, 95, 21, 208, 96, 83, 185, 98, 216, 242, 224, 15, 25, 224, 233, 86, 96, 46, 80, 120, 220, 48, 187, 86, 30, 240, 140, 46, 95, 81, 48, 90, 117, 140, 177, 51, 107, 235, 158, 137, 5, 241, 191, 154, 149, 219, 30, 126, 85, 175, 10, 216, 63, 139, 216, 151, 122, 251, 224, 202, 220, 227, 221, 53, 122, 34, 213, 224, 94, 45, 14, 200, 68, 31, 61, 175, 208, 17, 120, 82, 244, 138, 208, 165, 21, 19, 236, 232, 180, 217, 50, 74, 70, 126, 114, 227, 62, 192, 124, 9, 85, 148, 33, 77, 255, 117, 75, 102, 87, 151, 255, 87, 74, 74, 181, 111, 108, 9, 249, 220, 174, 59, 80, 254, 168, 29, 30, 94, 171, 133, 133, 195,
        105, 64, 254, 68, 65, 18, 158, 54, 73, 203, 65, 175, 151, 170, 236, 138, 17, 119, 128, 237, 214, 189, 28, 250, 38, 149, 97, 242, 81, 212, 254, 57, 18, 120, 155, 64, 96, 108, 75, 78, 74, 121, 191, 243, 30, 42, 60, 103, 165, 196, 160, 195, 216, 99, 182, 173, 214, 182, 105, 53, 231, 3, 45, 212, 144, 101, 217, 65, 141, 44, 230, 125, 151, 154, 123, 57, 134, 223, 98, 133, 156, 238, 137, 181, 80, 175, 230, 167, 131, 180, 13, 69, 77, 44, 156, 165, 252, 14, 27, 85, 71, 1, 82, 196, 64, 243, 26, 167, 146, 98, 201, 6, 195, 247, 200, 224, 44, 177, 104, 109, 187, 231, 83, 118, 28, 159, 92, 179, 28, 14, 162, 81, 84, 21, 168, 34, 156, 21, 127, 215,
        88, 218, 208, 11, 92, 161, 239, 239, 82, 221, 59, 86, 83, 201, 199, 216, 151, 139, 23, 54, 39, 52, 103, 204, 247, 24, 102, 94, 157, 138, 42, 49, 131, 183, 208, 50, 95, 236, 54, 6, 211, 26, 68, 72, 56, 212, 134, 24, 91, 114, 132, 1, 217, 80, 38, 47, 29, 47, 0, 107, 102, 99, 129, 33, 140, 243, 74, 251, 89, 247, 103, 12, 114, 58, 113, 240, 72, 188, 39, 48, 72, 89, 45, 102, 206, 245, 247, 231, 56, 167, 129, 122, 222, 47, 40, 78, 227, 159, 64, 206, 34, 127, 203, 127, 87, 40, 108, 152, 238, 147, 231, 46, 104, 89, 182, 180, 232, 86, 89, 91, 57, 10, 222, 202, 59, 199, 135, 60, 199, 189, 40, 84, 125, 28, 84, 162, 210, 91, 143, 34, 106, 117, 118,
        3, 125, 126, 237, 60, 131, 173, 153, 69, 49, 212, 204, 117, 163, 31, 239, 202, 232, 152, 234, 3, 162, 32, 176, 184, 184, 196, 154, 131, 144, 115, 6, 53, 122, 55, 69, 166, 19, 230, 183, 175, 244, 1, 156, 11, 37, 121, 134, 121, 152, 142, 158, 125, 229, 150, 44, 183, 216, 109, 7, 65, 222, 169, 56, 222, 140, 110, 233, 157, 138, 66, 208, 6, 111, 166, 188, 76, 208, 222, 4, 104, 211, 10, 57, 141, 243, 65, 228, 86, 85, 88, 169, 91, 237, 56, 249, 133, 77, 21, 32, 37, 230, 55, 0, 184, 110, 228, 158, 62, 98, 45, 147, 177, 19, 119, 89, 164, 103, 132, 239, 84, 139, 68, 204, 157, 49, 41, 50, 89, 113, 159, 203, 51, 133, 120, 184, 210, 237, 15, 249,
        187, 100, 253, 50, 16, 154, 112, 64, 193, 254, 10, 235, 200, 253, 84, 31, 169, 171, 39, 122, 70, 46, 186, 139, 212, 162, 173, 158, 41, 23, 86, 148, 172, 196, 237, 242, 58, 102, 180, 150, 238, 191, 25, 240, 204, 252, 125, 148, 29, 124, 51, 95, 10, 196, 55, 49, 159, 138, 144, 255, 126, 205, 43, 49, 42, 17, 59, 60, 77, 139, 177, 239, 64, 36, 224, 98, 205, 234, 70, 199, 103, 139, 218, 206, 207, 178, 217, 255, 32, 134, 59, 25, 221, 74, 22, 102, 82, 19, 20, 170, 142, 134, 42, 106, 249, 64, 80, 222, 28, 21, 169, 50, 235, 4, 237, 56, 81, 87, 76, 32, 251, 42, 6, 173, 105, 54, 191, 8, 136, 5, 245, 206, 239, 176, 9, 116, 24];

    class Hp extends Ub {
        constructor(a,
                    b, c) {
            super(a, Gp, b, c)
        }
    }

    let Ip = [11, 196, 242, 139, 198, 252, 188, 5, 32, 162, 171, 128, 13, 160, 25, 222, 172, 102, 207, 244, 158, 69, 103, 57, 239, 111, 150, 18, 157, 82, 55, 210, 20, 131, 156, 190, 100, 112, 230, 97, 199, 225, 96, 74, 99, 94, 248, 222, 162, 213, 95, 122, 158, 212, 233, 42, 22, 37, 217, 115, 36, 152, 30, 123, 116, 104, 212, 109, 129, 41, 220, 77, 213, 97, 124, 45, 4, 219, 197, 171, 40, 18, 149, 104, 20, 4, 248, 102, 64, 9, 50, 217, 124, 131, 180, 188, 159, 170, 63, 1, 84, 130, 150, 117, 14, 212, 118, 67, 165, 97, 207, 242, 251, 15, 30, 187, 188, 77, 79, 122, 67, 101, 252, 109, 244, 82, 37, 191, 227, 35, 114,
            87, 57, 71, 99, 218, 155, 54, 101, 239, 138, 197, 13, 226, 228, 176, 157, 158, 87, 98, 55, 251, 79, 150, 64, 138, 200, 135, 40, 132, 135, 207, 146, 252, 222, 57, 58, 111, 151, 225, 78, 59, 36, 210, 70, 29, 121, 160, 210, 31, 109, 67, 167, 194, 177, 236, 91, 108, 164, 229, 130, 211, 59, 66, 93, 18, 107, 226, 54, 210, 51, 8, 77, 217, 19, 73, 187, 33, 30, 59, 9, 135, 162, 49, 5, 11, 225, 111, 119, 11, 247, 218, 129, 115, 83, 205, 170, 21, 4, 69, 210, 133, 134, 245, 109, 15, 177, 9, 81, 81, 203, 105, 42, 158, 12, 255, 151, 165, 230, 205, 5, 92, 196, 251, 211, 187, 27, 214, 43, 186, 91, 233, 85, 192, 229, 15, 71, 38, 220, 20, 38, 101, 44, 78,
            7, 60, 251, 186, 75, 103, 108, 53, 166, 220, 186, 208, 194, 120, 207, 230, 159, 248, 22, 32, 142, 124, 96, 157, 222, 60, 191, 65, 145, 6, 239, 125, 151, 147, 50, 58, 130, 207, 110, 131, 223, 231, 137, 238, 28, 182, 216, 167, 198, 191, 37, 67, 76, 1, 144, 232, 218, 79, 72, 28, 65, 101, 43, 216, 64, 253, 16, 173, 179, 123, 140, 27, 233, 245, 199, 230, 36, 181, 102, 114, 247, 162, 18, 34, 20, 212, 25, 171, 24, 28, 143, 80, 94, 40, 167, 34, 209, 61, 117, 130, 1, 198, 196, 7, 21, 252, 180, 255, 92, 128, 119, 9, 48, 156, 138, 136, 151, 143, 23, 44, 52, 3, 40, 197, 228, 31, 123, 67, 163, 140, 32, 54, 204, 187, 149, 80, 19, 255, 82, 120, 195,
            12, 110, 65, 56, 212, 143, 22, 78, 44, 234, 72, 140, 29, 118, 103, 18, 36, 7, 122, 50, 37, 139, 47, 142, 243, 25, 208, 88, 237, 126, 50, 103, 127, 19, 183, 29, 169, 29, 1, 55, 23, 100, 32, 129, 239, 243, 160, 61, 178, 197, 117, 199, 45, 57, 26, 165, 135, 92, 218, 59, 0, 197, 54, 13, 96, 40, 141, 212, 221, 131, 103, 46, 22, 228, 191, 167, 73, 20, 86, 62, 11, 147, 217, 116, 205, 203, 110, 134, 249, 51, 6, 123, 23, 86, 231, 157, 8, 144, 83, 126, 115, 118, 35, 96, 36, 229, 36, 220, 228, 143, 71, 45, 223, 129, 48, 236, 5, 145, 202, 188, 208, 184, 70, 241, 104, 255, 188, 181, 146, 210, 206, 144, 53, 77, 101, 120, 38, 8, 245, 80, 230, 165, 160,
            183, 83, 202, 79, 127, 57, 214, 126, 242, 150, 208, 40, 239, 148, 35, 163, 201, 97, 74, 70, 214, 181, 63, 240, 147, 33, 253, 149, 140, 77, 197, 82, 126, 189, 231, 7, 196, 212, 80, 14, 151, 24, 57, 144, 243, 81, 234, 66, 24, 19, 236, 2, 137, 121, 246, 129, 65, 7, 99, 110, 174, 54, 74, 182, 81, 234, 142, 37, 72, 110, 220, 255, 64, 119, 10, 188, 111, 191, 228, 1, 205, 9, 204, 143, 56, 62, 125, 84, 106, 225, 131, 97, 192, 43, 240, 157, 161, 75, 168, 247, 44, 175, 65, 81, 192, 48, 21, 157, 167, 80, 191, 130, 161, 75, 85, 186, 174, 42, 117, 1, 68, 252, 204, 138, 254, 203, 152, 21, 13, 64, 144, 195, 207, 238, 229, 54, 103, 247, 159, 245, 211,
            85, 191, 141, 168, 32, 234, 85, 46, 118, 12, 5, 199, 4, 19, 217, 203, 202, 156, 33, 143, 114, 116, 60, 66, 40, 58, 77, 208, 237, 171, 26, 72, 175, 114, 205, 248, 87, 137, 62, 210, 143, 151, 197, 167, 210, 241, 122, 150, 104, 122, 154, 2, 70, 102, 83, 19, 36, 141, 136, 199, 42, 79, 229, 71, 86, 194, 109, 31, 236, 80, 166, 17, 230, 109, 1, 40, 28, 46, 224, 56, 20, 230, 47, 100, 254, 116, 208, 76, 169, 157, 241, 175, 3, 70, 85, 31, 38, 245, 58, 33, 80, 145, 237, 8, 22, 71, 224, 158, 156, 31, 249, 81, 87, 247, 230, 199, 237, 96, 167, 123, 63, 243, 79, 156, 206, 203, 160, 54, 124, 68, 253, 215, 132, 235, 57, 185, 92, 238, 55, 59, 210, 104,
            71, 26, 183, 180, 71, 12, 255, 224, 192, 65, 154, 72, 244, 8, 164, 10, 248, 46, 207, 30, 92, 1, 80, 244, 31, 189, 138, 88, 216, 218, 63, 100, 227, 116, 57, 119, 94, 135, 5, 126, 255, 32, 191, 163, 61, 209, 194, 88, 248, 112, 139, 173, 43, 69, 134, 3, 160, 151, 137, 25, 98, 239, 166, 19, 123, 208, 180, 31, 120, 30, 191, 75, 183, 179, 126, 180, 125, 92, 107, 105, 206, 138, 28, 67, 139, 3, 188, 230, 184, 255, 121, 13, 181, 45, 160, 114, 202, 194, 123, 87, 55, 124, 97, 164, 82, 95, 232, 216, 117, 62, 5, 90, 176, 82, 167, 52, 160, 153, 174, 168, 105, 146, 91, 248, 81, 79, 249, 97, 138, 133, 170, 245, 229, 132, 61, 5, 149, 224, 246, 194, 213,
            61, 12, 109, 44, 136, 235, 95, 219, 133, 220, 27, 93, 36, 93, 124, 180, 81, 141, 152, 220, 170, 163, 229, 197, 124, 171, 232, 48, 70, 251, 106, 119, 150, 20, 16, 49, 119, 247, 42, 132, 36, 76, 254, 124, 177, 66, 175, 9, 1, 39, 92, 127, 195, 171, 198, 34, 2, 64, 144, 179, 72, 40, 151, 110, 89, 229, 42, 125, 33, 238, 16, 220, 228, 51, 203, 8, 1, 68, 145, 253, 133, 118, 93, 163, 129, 22, 13, 248, 65, 12, 4, 63, 101, 210, 70, 170, 138, 203, 14, 246, 54, 194, 195, 27, 107, 241, 175, 35, 171, 49, 52, 106, 121, 45, 36, 152, 85, 215, 132, 78, 167, 34, 18, 167, 245, 152, 133, 134, 170, 120, 182, 10, 146, 191, 37, 2, 205, 47, 125, 20, 203, 44, 88,
            81, 32, 150, 223, 220, 218, 238, 254, 30, 212, 167, 221, 115, 156, 82, 226, 137, 220, 221, 97, 3, 139, 202, 33, 9, 27, 26, 126, 40, 215, 25, 126, 9, 82, 208, 49, 217, 14, 161, 81, 196, 61, 60, 87, 254, 213, 194, 81, 216, 161, 151, 209, 166, 222, 230, 24, 128, 117, 140, 92, 4, 203, 254, 170, 253, 249, 88, 90, 112, 226, 18, 44, 122, 39, 158, 158, 56, 69, 204, 159, 5, 179, 51, 197, 233, 139, 216, 102, 226, 206, 248, 15, 78, 112, 214, 126, 67, 28, 40, 38, 98, 190, 178, 206, 67, 94, 245, 254, 160, 101, 176, 32, 157, 26, 132, 83, 252, 228, 87, 242, 32, 127, 160, 112, 210, 224, 133, 149, 115, 41, 30, 16, 200, 69, 89, 81, 77, 144, 12, 106, 182,
            73, 54, 28, 53, 195, 28, 216, 179, 179, 136, 35, 141, 102, 234, 177, 240, 34, 186, 106, 145, 245, 3, 84, 48, 251, 157, 245, 11, 217, 111, 227, 138, 42, 67, 114, 211, 177, 37, 103, 16, 71, 152, 72, 117, 123, 36, 213, 202, 56, 124, 227, 84, 8, 45, 229, 149, 165, 214, 69, 244, 169, 55, 68, 62, 94, 104, 228, 74, 205, 123, 222, 17, 7, 172, 158, 227, 74, 206, 149, 67, 175, 171, 251, 185, 121, 151, 223, 63, 35, 229, 32, 49, 190, 209, 120, 137, 69, 213, 214, 19, 150, 187, 177, 28, 12, 158, 153, 126, 149, 171, 167, 234, 120, 129, 109, 32, 157, 180, 75, 66, 56, 233, 115, 127, 230, 157, 32, 34, 143, 156, 31, 230, 168, 174, 125, 118, 195, 249,
            243, 165, 81, 246, 10, 144, 15, 103, 139, 55, 173, 7, 59, 136, 69, 172, 54, 132, 165, 140, 78, 77, 230, 33, 169, 129, 188, 71, 209, 109, 161, 8, 57, 57, 199, 143, 31, 164, 43, 58, 130, 1, 110, 145, 31, 229, 13, 46, 149, 94, 244, 106, 76, 238, 105, 107, 1, 183, 177, 10, 61, 225, 94, 185, 116, 58, 183, 95, 225, 22, 119, 19, 248, 28, 13, 123, 125, 108, 158, 64, 184, 77, 245, 153, 162, 217, 227, 208, 41, 185, 211, 235, 41, 153, 181, 54, 166, 165, 11, 154, 55, 21, 184, 209, 192, 249, 44, 164, 160, 29, 229, 159, 82, 156, 198, 241, 183, 114, 83, 137, 186, 151, 148, 31, 21, 197, 216, 145, 32, 13, 50, 22, 241, 137, 39, 71, 28, 142, 160, 215,
            107, 221, 45, 202, 104, 227, 110, 186, 12, 150, 145, 240, 51, 49, 44, 196, 115, 224, 238, 149, 189, 134, 99, 67, 241, 62, 157, 240, 114, 247, 195, 26, 200, 141, 97, 147, 249, 23, 150, 174, 10, 13, 219, 81, 73, 58, 242, 96, 250, 243, 15, 49, 218, 58, 230, 104, 252, 175, 150, 123, 86, 185, 84, 90, 198, 6, 36, 0, 99, 72, 28, 166, 238, 115, 231, 171, 249, 179, 71, 174, 68, 156, 227, 17, 198, 79, 73, 142, 99, 144, 20, 80, 62, 80, 191, 142, 46, 71, 9, 243, 6, 8, 214, 116, 72, 190, 106, 161, 19, 185, 100, 9, 187, 64, 94, 86, 203, 174, 156, 245, 222, 95, 54, 30, 148, 19, 11, 50, 112, 96, 61, 237, 159, 173, 7, 154, 127, 175, 79, 48, 97, 89, 78,
            126, 66, 171, 204, 158, 195, 27, 226, 205, 222, 157, 89, 251, 90, 125, 37, 212, 27, 97, 3, 141, 247, 175, 50, 121, 7, 187, 68, 196, 181, 202, 167, 189, 57, 84, 81, 222, 23, 27, 84, 130, 176, 98, 66, 240, 207, 18, 23, 28, 163, 163, 194, 45, 37, 129, 202, 170, 97, 189, 0, 81, 238, 0, 39, 199, 163, 35, 211, 206, 247, 65, 29, 116, 242, 67, 102, 235, 13, 136, 232, 230, 114, 146, 187, 7, 254, 142, 26, 121, 16, 237, 5, 160, 201, 114, 94, 178, 199, 95, 212, 241, 45, 112, 180, 188, 72, 86, 114, 189, 155, 149, 149, 163, 210, 112, 101, 12, 69, 225, 75, 202, 223, 28, 242, 90, 215, 156, 169, 224, 245, 135, 128, 92, 148, 217, 131, 208, 255, 25, 135,
            117, 136, 5, 104, 185, 249, 161, 228, 214, 16, 105, 204, 9, 182, 135, 153, 220, 101, 244, 160, 207, 58, 182, 118, 185, 240, 57, 245, 123, 13, 112, 182, 106, 229, 220, 90, 29, 86, 215, 96, 147, 232, 2, 55, 131, 225, 137, 68, 245, 89, 141, 252, 97, 3, 129, 155, 216, 223, 98, 116, 45, 78, 85, 141, 161, 74, 215, 7, 150, 171, 225, 59, 78, 221, 152, 236, 14, 117, 100, 208, 158, 86, 13, 185, 124, 87, 157, 111, 40, 187, 182, 124, 173, 71, 173, 23, 199, 52, 155, 190, 134, 11, 23, 64, 25, 215, 39, 115, 231, 173, 77, 72, 114, 54, 252, 116, 178, 59, 221, 106, 241, 119, 254, 30, 226, 241, 204, 233, 113, 197, 96, 146, 0, 41, 67, 3, 231, 126, 12,
            218, 202, 22, 171, 114, 249, 176, 134, 160, 19, 216, 31, 229, 118, 226, 62, 242, 126, 126, 42, 127, 130, 68, 218, 218, 81, 202, 106, 217, 191, 25, 177, 82, 97, 81, 36, 232, 137, 58, 90, 216, 190, 117, 235, 20, 194, 144, 76, 178, 27, 213, 13, 208, 18, 29, 118, 126, 49, 98, 203, 179, 128, 237, 100, 32, 242, 189, 212, 6, 210, 210, 188, 161, 205, 13, 124, 119, 13, 215, 112, 41, 183, 176, 215, 168, 210, 182, 111, 1, 115, 2, 239, 141, 8, 177, 124, 112, 48, 197, 2, 239, 11, 99, 4, 36, 77, 69, 47, 244, 19, 153, 61, 19, 2, 96, 176, 7, 112, 122, 131, 169, 25, 189, 116, 171, 49, 12, 121, 162, 79, 154, 74, 251, 50, 233, 182, 63, 180, 224, 118, 49,
            253, 21, 20, 16, 31, 144, 184, 93, 174, 231, 244, 183, 13, 49, 225, 189, 211, 73, 185, 49, 110, 142, 25, 226, 45, 176, 233, 204, 74, 33, 16, 205, 88, 131, 92, 157, 170, 175, 68, 170, 61, 53, 116, 165, 16, 27, 182, 160, 181, 87, 241, 15, 151, 85, 107, 76, 167, 129, 25, 172, 127, 184, 138, 153, 222, 228, 125, 64, 44, 45, 32, 12, 227, 148, 106, 152, 83, 240, 166, 54, 235, 32, 190, 12, 242, 164, 123, 189, 53, 194, 141, 104, 43, 202, 110, 4, 168, 119, 245, 232, 179, 178, 198, 1, 224, 87, 86, 160, 31, 19, 140, 233, 102, 191, 204, 4, 98, 138, 163, 191, 106, 24, 213, 47, 208, 82, 137, 132, 131, 16, 253, 84, 25, 144, 90, 159, 148, 16, 196, 84,
            166, 61, 160, 101, 229, 227, 93, 118, 59, 87, 66, 16, 128, 59, 96, 131, 250, 20, 184, 150, 205, 91, 227, 201, 62, 35, 79, 180, 172, 173, 85, 197, 106, 153, 238, 229, 60, 204, 65, 193, 230, 94, 101, 177, 134, 6, 165, 53, 171, 142, 208, 155, 2, 11, 4, 202, 127, 54, 17, 142, 117, 227, 121, 128, 204, 192, 147, 147, 92, 189, 5, 224, 148, 72, 18, 83, 101, 126, 124, 228, 153, 242, 123, 229, 247, 92, 221, 6, 73, 227, 250, 87, 167, 194, 129, 187, 73, 38, 185, 109, 217, 240, 193, 88, 50, 178, 180, 151, 54, 197, 187, 137, 190, 166, 233, 1, 103, 204, 88, 31, 127, 185, 29, 65, 1, 29, 254, 223, 14, 83, 167, 215, 114, 248, 30, 173, 89, 173, 187, 69,
            5, 105, 117, 15, 106, 94, 173, 63, 227, 25, 230, 190, 136, 168, 177, 175, 107, 91, 126, 254, 34, 188, 25, 118, 48, 12, 226, 130, 153, 162, 57, 47, 181, 212, 79, 160, 97, 64, 157, 246, 90, 53, 43, 149, 76, 102, 15, 195, 107, 58, 242, 84, 172, 29, 81, 198, 113, 81, 251, 138, 182, 154, 111, 30, 171, 129, 56, 17, 45, 214, 153, 112, 117, 203, 174, 40, 38, 234, 236, 32, 4, 112, 225, 26, 187, 195, 246, 252, 9, 218, 69, 160, 223, 178, 54, 148, 81, 8, 134, 151, 75, 248, 63, 224, 240, 48, 75, 250, 221, 85, 46, 100, 50, 3, 70, 64, 102, 111, 160, 155, 233, 59, 147, 184, 57, 61, 6, 126, 79, 176, 16, 185, 94, 166, 33, 135, 78, 42, 75, 140, 208, 140,
            44, 153, 187, 64, 103, 119, 160, 236, 16, 239, 74, 218, 219, 212, 207, 110, 53, 30, 76, 248, 40, 111, 98, 44, 20, 113, 204, 233, 109, 135, 96, 107, 39, 163, 203, 125, 45, 157, 152, 71, 239, 175, 174, 159, 147, 80, 111, 93, 38, 253, 228, 154, 225, 181, 101, 12, 241, 127, 65, 49, 189, 5, 85, 151, 237, 213, 143, 14, 104, 138, 54, 52, 27, 4, 132, 67, 35, 156, 86, 157, 73, 16, 229, 222, 245, 110, 79, 165, 179, 56, 179, 53, 218, 229, 100, 58, 87, 149, 48, 231, 64, 63, 115, 67, 3, 172, 6, 186, 115, 154, 60, 53, 214, 152, 149, 89, 234, 37, 143, 82, 255, 64, 28, 183, 93, 112, 39, 70, 185, 57, 0, 199, 9, 61, 175, 219, 41, 76, 37, 176, 82, 125, 65,
            53, 160, 214, 105, 62, 153, 244, 222, 96, 205, 6, 178, 85, 41, 240, 113, 0, 96, 149, 38, 3, 195, 18, 152, 41, 246, 3, 103, 29, 110, 134, 30, 101, 75, 46, 103, 199, 184, 20, 230, 8, 55, 120, 4, 229, 168, 35, 43, 7, 28, 161, 143, 87, 27, 87, 79, 255, 186, 44, 195, 158, 155, 181, 119, 81, 172, 217, 107, 95, 98, 55, 243, 186, 66, 105, 48, 224, 123, 232, 84, 156, 20, 10, 156, 208, 204, 52, 34, 228, 136, 97, 242, 200, 246, 211, 67, 202, 40, 241, 91, 92, 253, 9, 54, 72, 131, 221, 106, 178, 32, 44, 182, 4, 225, 193, 37, 20, 249, 249, 231, 10, 206, 18, 71, 254, 221, 187, 172, 88, 204, 6, 127, 138, 102, 7, 208, 75, 147, 219, 199, 177, 79, 36, 170,
            101, 207, 177, 109, 95, 143, 217, 41, 199, 80, 183, 201, 2, 254, 12, 55, 23, 198, 14, 255, 69, 245, 138, 155, 129, 227, 167, 168, 130, 156, 135, 14, 96, 93, 48, 99, 143, 107, 126, 92, 117, 143, 112, 108, 193, 228, 84, 13, 41, 186, 27, 172, 92, 201, 149, 116, 19, 112, 197, 116, 209, 128, 102, 1, 55, 152, 177, 28, 37, 34, 50, 83, 41, 199, 74, 178, 59, 111, 67, 118, 35, 252, 36, 33, 87, 28, 170, 17, 215, 47, 90, 154, 124, 137, 15, 14, 211, 59, 75, 59, 30, 77, 0, 49, 37, 225, 191, 87, 101, 127, 214, 227, 160, 99, 174, 234, 82, 148, 235, 16, 241, 219, 147, 170, 127, 221, 250, 116, 39, 218, 156, 72, 227, 172, 55, 0, 79, 188, 76, 51, 222, 232,
            24, 36, 62, 94, 154, 3, 61, 230, 146, 114, 253, 0, 128, 58, 253, 90, 72, 211, 242, 38, 39, 133, 153, 161, 119, 105, 195, 152, 225, 208, 105, 140, 80, 217, 186, 196, 157, 21, 116, 230, 116, 139, 25, 159, 143, 118, 128, 77, 201, 238, 247, 228, 15, 168, 4, 133, 148, 21, 148, 12, 44, 241, 7, 115, 17, 129, 176, 202, 46, 130, 122, 129, 235, 141, 223, 85, 21, 199, 65, 181, 169, 52, 174, 161, 153, 62, 25, 164, 115, 213, 89, 138, 199, 103, 79, 200, 165, 135, 249, 244, 27, 209, 178, 240, 129, 211, 61, 9, 111, 157, 147, 119, 36, 119, 255, 110, 130, 84, 49, 210, 225, 247, 100, 26, 121, 127, 163, 160, 26, 79, 99, 24, 77, 65, 32, 178, 109, 36, 27,
            253, 173, 110, 183, 11, 14, 211, 57, 130, 254, 124, 104, 165, 219, 31, 70, 97, 14, 194, 39, 61, 26, 141, 125, 228, 126, 194, 184, 101, 160, 204, 106, 128, 144, 106, 103, 171, 18, 246, 129, 220, 85, 172, 151, 123, 5, 73, 155, 192, 175, 91, 157, 239, 61, 237, 116, 170, 65, 233, 56, 19, 49, 114, 168, 190, 3, 214, 53, 250, 90, 213, 244, 88, 101, 30, 229, 248, 124, 15, 71, 141, 27, 172, 235, 21, 129, 211, 72, 61, 172, 112, 170, 128, 135, 96, 196, 221, 255, 27, 176, 105, 188, 183, 121, 33, 37, 149, 53, 131, 226, 233, 29, 167, 234, 218, 109, 53, 185, 152, 36, 248, 53, 61, 235, 78, 21, 201, 214, 210, 163, 12, 251, 187, 45, 188, 137, 126,
            127, 237, 92, 234, 91, 240, 225, 38, 194, 57, 213, 251, 237, 171, 30, 99, 52, 14, 49, 84, 101, 252, 237, 7, 166, 122, 114, 32, 107, 32, 207, 239, 136, 168, 178, 12, 11, 241, 233, 230, 146, 132, 18, 83, 233, 41, 172, 17, 6, 161, 42, 113, 87, 40, 255, 185, 1, 146, 128, 5, 240, 126, 131, 71, 42, 54, 124, 205, 2, 122, 71, 30, 222, 229, 40, 134, 142, 102, 97, 239, 151, 177, 1, 230, 231, 49, 123, 219, 28, 129, 91, 152, 112, 13, 154, 81, 197, 226, 255, 112, 158, 178, 177, 55, 181, 108, 138, 185, 245, 29, 186, 21, 73, 188, 209, 154, 200, 89, 116, 235, 198, 144, 36, 87, 248, 22, 7, 200, 122, 7, 148, 44, 42, 87, 140, 238, 204, 95, 231, 252, 0,
            136, 0, 22, 39, 70, 123, 125, 165, 113, 227, 172, 146, 163, 128, 158, 36, 52, 91, 19, 36, 245, 27, 150, 138, 141, 11, 67, 239, 224, 65, 24, 116, 101, 7, 39, 46, 142, 172, 164, 243, 148, 0, 33, 226, 59, 47, 203, 137, 156, 241, 66, 250, 157, 30, 204, 101, 143, 134, 98, 238, 155, 226, 25, 184, 136, 219, 89, 100, 193, 11, 143, 71, 139, 243, 230, 151, 0, 249, 1, 78, 26, 32, 93, 104, 157, 67, 97, 164, 248, 86, 124, 146, 93, 74, 222, 228, 167, 55, 53, 100, 135, 216, 109, 13, 64, 37, 106, 177, 200, 200, 182, 92, 251, 69, 31, 243, 89, 80, 198, 14, 132, 203, 72, 103, 28, 104, 217, 24, 97, 223, 113, 11, 29, 178, 191, 210, 46, 162, 255, 68, 99, 8,
            237, 213, 162, 152, 193, 183, 121, 203, 19, 108, 182, 29, 86, 26, 192, 103, 220, 103, 205, 154, 179, 197, 9, 22, 73, 127, 175, 146, 38, 119, 210, 0, 24, 180, 21, 245, 215, 204, 91, 186, 119, 138, 183, 239, 15, 155, 231, 248, 133, 39, 24, 101, 144, 236, 10, 230, 54, 174, 227, 73, 21, 110, 10, 160, 241, 232, 131, 14, 212, 127, 232, 59, 122, 65, 146, 54, 163, 9, 189, 190, 121, 88, 170, 62, 194, 14, 204, 152, 245, 38, 131, 37, 91, 81, 72, 114, 29, 115, 239, 182, 56, 44, 156, 159, 177, 180, 82, 160, 93, 97, 86, 183, 236, 50, 95, 85, 39, 71, 181, 225, 152, 143, 63, 123, 117, 34, 44, 109, 160, 166, 229, 240, 91, 138, 102, 54, 180, 173, 44,
            50, 80, 42, 124, 7, 50, 124, 211, 239, 21, 94, 197, 185, 239, 213, 107, 142, 64, 95, 124, 125, 17, 180, 97, 189, 101, 52, 48, 19, 112, 12, 70, 9, 212, 177, 54, 118, 66, 84, 147, 236, 248, 26, 124, 95, 103, 135, 254, 124, 49, 112, 186, 99, 120, 90, 8, 194, 191, 88, 57, 242, 65, 61, 10, 104, 246, 197, 252, 19, 159, 58, 194, 75, 173, 242, 103, 8, 115, 84, 69, 238, 149, 26, 15, 159, 182, 141, 132, 119, 70, 29, 53, 20, 143, 46, 163, 204, 6, 236, 59, 45, 185, 172, 89, 119, 83, 38, 144, 36, 222, 96, 151, 26, 99, 195, 163, 170, 133, 92, 159, 214, 53, 150, 116, 90, 176, 69, 145, 130, 15, 172, 140, 217, 215, 101, 163, 115, 161, 65, 101, 8, 7, 183,
            113, 213, 134, 58, 175, 130, 251, 143, 173, 248, 168, 135, 60, 159, 30, 194, 68, 208, 119, 120, 2, 40, 178, 227, 247, 161, 77, 47, 136, 46, 244, 163, 72, 65, 158, 25, 225, 195, 61, 132, 182, 204, 177, 186, 200, 81, 2, 65, 105, 212, 72, 94, 203, 232, 217, 182, 123, 251, 228, 160, 1, 161, 204, 123, 20, 37, 1, 77, 208, 179, 45, 149, 181, 122, 102, 190, 123, 213, 164, 231, 41, 216, 130, 234, 248, 208, 251, 252, 220, 84, 209, 67, 47, 61, 220, 5, 142, 162, 26, 236, 121, 142, 248, 132, 255, 65, 122, 203, 196, 102, 191, 187, 2, 195, 127, 255, 193, 92, 49, 91, 186, 154, 39, 156, 29, 211, 172, 49, 104, 245, 114, 153, 223, 211, 199, 249, 35,
            130, 160, 128, 0, 152, 176, 183, 20, 236, 113, 193, 108, 26, 255, 11, 237, 102, 133, 245, 94, 115, 114, 10, 89, 229, 214, 221, 99, 149, 30, 99, 37, 246, 10, 26, 26, 39, 92, 123, 170, 73, 211, 127, 227, 54, 30, 86, 133, 159, 112, 225, 91, 148, 100, 174, 149, 75, 143, 14, 140, 20, 44, 64, 212, 5, 243, 8, 116, 63, 30, 97, 42, 123, 20, 73, 212, 85, 207, 83, 122, 27, 251, 233, 84, 10, 17, 236, 232, 83, 200, 127, 119, 143, 163, 204, 220, 167, 59, 231, 20, 106, 186, 222, 191, 8, 40, 234, 21, 25, 180, 13, 116, 250, 152, 224, 174, 75, 3, 205, 38, 173, 215, 236, 151, 185, 121, 254, 244, 154, 239, 17, 53, 106, 164, 61, 49, 116, 216, 118, 94, 150,
            35, 181, 26, 238, 66, 49, 211, 221, 132, 146, 166, 115, 39, 136, 36, 205, 230, 179, 31, 197, 51, 148, 165, 109, 38, 70, 37, 148, 52, 44, 209, 250, 98, 58, 246, 225, 103, 198, 101, 26, 25, 196, 207, 8, 166, 21, 88, 252, 175, 253, 10, 88, 107, 157, 19, 225, 61, 12, 246, 221, 37, 239, 186, 167, 137, 142, 135, 222, 128, 174, 62, 95, 216, 38, 141, 157, 45, 232, 97, 217, 173, 203, 234, 116, 129, 69, 206, 189, 94, 221, 12, 54, 139, 186, 247, 184, 16, 200, 121, 244, 104, 8, 7, 35, 111, 47, 188, 10, 140, 92, 73, 143, 206, 203, 72, 122, 184, 20, 102, 197, 130, 64, 150, 63, 96, 239, 8, 132, 111, 217, 84, 91, 198, 32, 43, 100, 138, 241, 15, 160,
            42, 190, 253, 193, 184, 164, 124, 29, 210, 96, 67, 224, 221, 182, 29, 218, 129, 149, 29, 128, 174, 98, 88, 88, 125, 56, 40, 255, 120, 5, 0, 87, 174, 42, 150, 90, 112, 201, 183, 169, 19, 57, 195, 191, 12, 58, 244, 235, 132, 25, 145, 72, 146, 214, 8, 125, 100, 135, 12, 5, 102, 97, 248, 174, 24, 159, 90, 33, 43, 187, 6, 61, 212, 241, 225, 190, 219, 252, 197, 123, 129, 164, 108, 123, 55, 230, 4, 153, 166, 105, 234, 15, 85, 216, 23, 56, 32, 3, 41, 110, 68, 146, 172, 133, 202, 98, 41, 7, 47, 152, 35, 255, 168, 106, 241, 226, 222, 77, 244, 52, 185, 65, 252, 227, 32, 66, 38, 11, 172, 60, 28, 28, 103, 84, 1, 1, 205, 182, 190, 28, 189, 102, 253,
            43, 1, 191, 148, 116, 10, 227, 18, 81, 93, 80, 239, 157, 232, 215, 180, 163, 165, 161, 109, 177, 71, 150, 244, 144, 208, 160, 110, 22, 174, 60, 206, 43, 103, 121, 55, 103, 114, 115, 173, 238, 13, 10, 227, 251, 41, 176, 216, 158, 229, 216, 55, 234, 128, 128, 20, 167, 106, 181, 86, 163, 130, 215, 110, 149, 191, 10, 227, 215, 8, 214, 154, 178, 181, 15, 19, 0, 247, 250, 97, 74, 43, 157, 55, 94, 174, 41, 41, 9, 199, 97, 20, 91, 32, 18, 10, 43, 98, 240, 247, 203, 20, 250, 117, 160, 44, 229, 202, 187, 64, 54, 124, 15, 184, 169, 129, 27, 160, 240, 26, 61, 255, 60, 166, 60, 144, 209, 84, 55, 187, 186, 168, 13, 124, 125, 29, 17, 100, 249, 227,
            62, 205, 78, 179, 163, 168, 139, 168, 21, 38, 83, 239, 151, 74, 43, 66, 2, 92, 72, 71, 94, 216, 134, 238, 20, 45, 158, 213, 164, 73, 57, 80, 47, 198, 184, 130, 223, 227, 71, 132, 133, 235, 177, 85, 174, 142, 124, 172, 200, 54, 229, 40, 126, 60, 76, 92, 216, 153, 56, 241, 174, 66, 141, 90, 226, 3, 30, 68, 234, 71, 187, 163, 112, 146, 255, 22, 143, 170, 204, 3, 127, 179, 81, 139, 160, 37, 77, 246, 128, 220, 196, 158, 153, 73, 177, 65, 199, 119, 29, 197, 144, 130, 248, 206, 155, 253, 108, 213, 124, 7, 223, 221, 162, 146, 134, 242, 65, 99, 162, 107, 120, 247, 214, 207, 96, 150, 169, 131, 208, 218, 221, 28, 24, 112, 208, 23, 1, 130, 142,
            232, 56, 104, 45, 33, 158, 95, 255, 123, 31, 74, 76, 120, 178, 155, 213, 6, 195, 164, 8, 8, 69, 241, 197, 127, 83, 169, 21, 167, 19, 94, 143, 252, 33, 159, 248, 241, 170, 153, 147, 1, 149, 199, 201, 131, 170, 79, 236, 212, 209, 143, 107, 98, 24, 123, 56, 33, 193, 85, 247, 64, 225, 135, 210, 78, 145, 57, 16, 145, 71, 170, 20, 133, 87, 235, 4, 166, 239, 100, 82, 235, 81, 50, 223, 9, 193, 52, 49, 86, 129, 190, 196, 82, 165, 107, 63, 115, 161, 98, 33, 20, 193, 29, 42, 151, 205, 252, 124, 72, 245, 48, 181, 67, 7, 13, 21, 127, 59, 226, 188, 144, 129, 112, 244, 192, 121, 213, 80, 42, 196, 1, 13, 107, 108, 78, 0, 40, 121, 225, 148, 237, 234, 209,
            216, 238, 9, 147, 226, 254, 96, 89, 212, 72, 193, 106, 75, 135, 74, 227, 67, 255, 92, 191, 81, 188, 124, 226, 149, 152, 142, 15, 159, 195, 238, 114, 55, 255, 166, 157, 230, 59, 148, 170, 166, 151, 65, 213, 104, 253, 253, 112, 150, 82, 147, 137, 27, 214, 100, 247, 65, 81, 92, 47, 86, 217, 7, 45, 120, 81, 130, 31, 236, 243, 76, 78, 3, 45, 105, 172, 220, 71, 48, 220, 94, 196, 249, 163, 193, 133, 50, 236, 205, 20, 55, 2, 63, 14, 127, 69, 113, 212, 204, 12, 58, 79, 89, 86, 29, 61, 199, 201, 64, 149, 6, 144, 182, 150, 129, 31, 18, 167, 120, 248, 82, 107, 25, 143, 128, 27, 161, 28, 25, 153, 183, 217, 238, 78, 186, 106, 92, 27, 202, 219, 165,
            96, 0, 216, 234, 169, 73, 101, 39, 182, 113, 217, 240, 170, 116, 172, 221, 250, 233, 48, 49, 242, 83, 227, 92, 181, 184, 72, 230, 180, 21, 15, 108, 135, 25, 38, 153, 25, 124, 227, 26, 149, 73, 236, 39, 211, 244, 149, 58, 183, 132, 26, 223, 219, 174, 144, 117, 233, 219, 165, 205, 157, 159, 222, 184, 52, 47, 241, 201, 123, 65, 24, 44, 55, 215, 177, 168, 250, 179, 115, 190, 227, 123, 158, 163, 179, 224, 69, 196, 66, 207, 254, 243, 101, 221, 193, 140, 250, 4, 28, 222, 52, 96, 138, 160, 33, 218, 64, 118, 214, 234, 201, 152, 148, 91, 178, 111, 107, 144, 142, 6, 182, 102, 72, 188, 34, 213, 181, 26, 223, 58, 255, 103, 81, 17, 47, 169, 11,
            245, 224, 123, 148, 215, 237, 186, 107, 75, 152, 90, 202, 166, 22, 149, 197, 5, 246, 238, 78, 76, 229, 106, 199, 94, 127, 195, 0, 45, 82, 6, 159, 103, 96, 138, 231, 71, 46, 107, 59, 216, 39, 43, 12, 221, 27, 214, 56, 155, 145, 66, 187, 169, 250, 235, 78, 211, 179, 239, 183, 198, 163, 93, 5, 196, 24, 174, 143, 225, 106, 139, 89, 98, 13, 127, 207, 184, 194, 30, 1, 165, 198, 169, 8, 197, 118, 86, 163, 221, 138, 23, 209, 61, 116, 79, 99, 233, 43, 130, 60, 244, 85, 229, 243, 172, 123, 148, 200, 120, 192, 127, 211, 52, 11, 159, 41, 95, 212, 230, 188, 169, 156, 137, 29, 212, 12, 148, 168, 148, 133, 243, 44, 241, 139, 127, 24, 246, 220, 227,
            125, 209, 97, 60, 52, 162, 192, 146, 49, 161, 92, 138, 112, 189, 128, 59, 126, 125, 46, 207, 60, 79, 231, 174, 152, 209, 68, 223, 205, 2, 38, 14, 91, 116, 159, 255, 28, 27, 178, 248, 164, 104, 158, 79, 69, 214, 234, 157, 12, 75, 163, 83, 253, 245, 202, 61, 213, 176, 6, 197, 230, 29, 208, 166, 253, 194, 254, 235, 29, 141, 241, 70, 249, 15, 62, 0, 148, 163, 135, 52, 122, 40, 96, 87, 31, 179, 152, 51, 216, 133, 184, 122, 198, 203, 60, 115, 218, 191, 193, 16, 178, 25, 148, 252, 112, 104, 103, 252, 36, 92, 221, 28, 179, 43, 199, 198, 151, 128, 100, 252, 217, 161, 249, 34, 201, 172, 118, 52, 180, 252, 104, 7, 223, 44, 116, 102, 212, 21,
            40, 224, 184, 55, 163, 210, 21, 207, 161, 239, 51, 54, 155, 41, 133, 18, 67, 48, 3, 165, 130, 251, 4, 79, 214, 57, 72, 130, 157, 212, 144],
        Jp = [0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 24, 26, 29, 31, 34, 36, 39, 41, 44, 46, 49, 51, 54, 56, 59, 61, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 91, 92, 94, 95, 96, 97, 98, 99, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 114, 116, 117, 118, 119, 120, 121, 123, 124, 125, 126, 127, 128, 129, 131, 132, 133, 134, 135, 136, 138, 139, 140, 141, 142, 143, 145, 146, 147, 148, 149, 150, 151, 153, 154, 155, 156, 157, 158,
            160, 161, 162, 163, 164, 165, 166, 168, 169, 170, 171, 172, 173, 175, 176, 177, 178, 179, 180, 182, 183, 184, 185, 186, 187, 188, 190, 191, 192, 193, 194, 195, 197, 198, 199, 200, 201, 202, 204, 205, 206, 207, 208, 209, 210, 212, 213, 214, 215, 216, 217, 219, 220, 221, 222, 223, 224, 226, 226, 226, 227, 227, 227, 228, 228, 228, 229, 229, 229, 230, 230, 231, 231, 231, 232, 232, 232, 233, 233, 233, 234, 234, 235, 235, 235, 236, 236, 236, 237, 237, 237, 238, 238, 239, 239, 239, 240, 240, 240, 241, 241, 241, 242, 242, 243, 243, 243, 244, 244, 244, 245, 245, 245, 246, 246, 246, 247, 247, 247, 248, 248, 248, 249, 249, 249, 250,
            250, 250, 251, 251, 251, 252, 252, 252, 253, 253, 253, 254, 254, 254, 255],
        Bl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 35, 36, 37, 39, 40, 42, 43, 44, 46, 47, 49, 50, 51, 53, 54, 56, 57, 58, 59, 61, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 76, 77, 78, 79, 81, 82, 83, 84, 86, 87, 88, 90, 91, 92, 93, 95, 96, 97, 98, 100, 101, 102, 103, 105, 106, 107, 108, 110, 111, 112, 113, 115, 116, 117, 118, 120, 121, 122, 124, 125, 126, 127, 129, 130, 131, 132, 134, 135, 136, 137, 139, 140, 141, 142, 144, 145, 146, 147, 149, 150, 151, 152, 154, 155, 156, 158, 159, 160, 161,
            163, 164, 165, 166, 168, 169, 170, 171, 173, 174, 175, 176, 178, 179, 180, 181, 183, 184, 185, 186, 188, 189, 190, 192, 193, 194, 195, 197, 198, 199, 200, 202, 203, 204, 205, 207, 208, 209, 210, 212, 213, 214, 215, 217, 218, 219, 220, 222, 223, 224, 226, 226, 226, 227, 227, 228, 228, 229, 229, 230, 230, 231, 231, 232, 232, 233, 233, 234, 234, 234, 235, 235, 236, 236, 237, 237, 238, 238, 239, 239, 240, 240, 241, 241, 242, 242, 243, 243, 243, 244, 244, 244, 245, 245, 245, 246, 246, 246, 247, 247, 247, 248, 248, 248, 249, 249, 249, 250, 250, 250, 251, 251, 251, 252, 252, 252, 253, 253, 253, 254, 254, 254, 255],
        Kp = [1, 2,
            3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 72, 73, 74, 76, 77, 78, 80, 81, 83, 84, 85, 87, 88, 89, 91, 92, 94, 95, 96, 98, 99, 100, 102, 103, 105, 106, 107, 109, 110, 111, 113, 114, 116, 117, 118, 120, 121, 122, 124, 125, 127, 128, 129, 131, 132, 133, 135, 136, 138, 139, 140, 142, 143, 144, 146, 147, 149, 150, 151, 153, 154, 155, 157, 158, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181,
            182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 192, 193, 193, 194, 195, 195, 196, 197, 197, 198, 199, 199, 200, 201, 201, 202, 203, 203, 204, 205, 205, 206, 207, 207, 208, 209, 209, 210, 211, 211, 212, 213, 213, 214, 215, 215, 216, 217, 217, 218, 219, 219, 220, 221, 221, 222, 223, 223, 224, 225, 225, 226, 227, 227, 228, 229, 229, 230, 231, 231, 232, 233, 233, 234, 235, 235, 236, 237, 237, 238, 239, 239, 240, 241, 241, 242, 243, 243, 244, 245, 245, 246, 247, 247, 248, 249, 249, 250, 251, 251, 252, 253, 253, 254, 255];

    class Lp extends Ub {
        constructor(a, b, c, e) {
            super(a, Ip, c, e);
            this.lightLevel = .1;
            this.rednessLevel = .5;
            this.mskin_he_max = 175 / 180 * 3.141593;
            this.mskin_he_min = 115 / 180 * 3.141593;
            this.mskin_hc_max = 173 / 180 * 3.141593;
            this.mskin_hc_min = 116 / 180 * 3.141593;
            this.mskin_hc_axis = 2.04203545;
            this.mfacts_rotate_ge = this.mfacts_rotate_le = this.mfacts_rotate_c = 0;
            this.tab_addr = null;
            this.lutTextures = [];
            this.inputTexture = b;
            this.init()
        }

        setUniforms() {
            var a = this.gl.getUniformLocation(this.program, "u_flipY"),
                b = this.gl.getUniformLocation(this.program, "u_denoiseLevel");
            this.gl.uniform1f(b, this.denoiseLevel);
            this.gl.uniform1f(a,
                1);
            a = this.gl.getUniformLocation(this.program, "light");
            this.gl.uniform1f(a, this.lightLevel);
            a = this.gl.getUniformLocation(this.program, "redness");
            this.gl.uniform1f(a, this.rednessLevel);
            a = this.gl.getUniformLocation(this.program, "skin_he_max");
            b = this.gl.getUniformLocation(this.program, "skin_he_min");
            var c = this.gl.getUniformLocation(this.program, "skin_hc_max"),
                e = this.gl.getUniformLocation(this.program, "skin_hc_min");
            let g = this.gl.getUniformLocation(this.program, "skin_hc_axis"),
                h = this.gl.getUniformLocation(this.program,
                    "facts_rotate_c"), k = this.gl.getUniformLocation(this.program, "facts_rotate_le"),
                q = this.gl.getUniformLocation(this.program, "facts_rotate_ge");
            this.gl.uniform1f(a, this.mskin_he_max);
            this.gl.uniform1f(b, this.mskin_he_min);
            this.gl.uniform1f(c, this.mskin_hc_max);
            this.gl.uniform1f(e, this.mskin_hc_min);
            this.gl.uniform1f(g, this.mskin_hc_axis);
            this.gl.uniform1f(h, this.mfacts_rotate_c);
            this.gl.uniform1f(k, this.mfacts_rotate_le);
            this.gl.uniform1f(q, this.mfacts_rotate_ge);
            a = this.gl.getUniformLocation(this.program,
                "u_originImage");
            this.gl.activeTexture(this.gl.TEXTURE2);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.inputTexture);
            this.gl.uniform1i(a, 2);
            a = ["lighten_lut"];
            b = [this.gl.TEXTURE3];
            for (c = 0; c < a.length; c++) e = this.gl.getUniformLocation(this.program, a[c]), this.gl.activeTexture(b[c]), this.gl.bindTexture(this.gl.TEXTURE_2D, this.lutTextures[c]), this.gl.uniform1i(e, c + 3)
        }

        setParameters(a) {
            void 0 !== a.denoiseLevel && (this.denoiseLevel = a.denoiseLevel);
            void 0 !== a.lightLevel && (this.lightLevel = a.lightLevel);
            void 0 !==
            a.rednessLevel && (this.rednessLevel = a.rednessLevel, this.updateRedness(this.rednessLevel));
            a.lighteningContrastLevel && this.updateLut(a.lighteningContrastLevel)
        }

        init() {
            this.tab_addr = new Uint8Array(Bl);
            let a = [this.tab_addr], b = [256], c = [1];
            for (let e = 0; e < a.length; e++) {
                let g = this.gl.createTexture();
                if (!g) throw new p(n.WEBGL_INTERNAL_ERROR, "create lut texture failed");
                this.gl.bindTexture(this.gl.TEXTURE_2D, g);
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.LUMINANCE, b[e], c[e], 0, this.gl.LUMINANCE, this.gl.UNSIGNED_BYTE,
                    a[e]);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
                this.lutTextures.push(g)
            }
        }

        updateRedness(a) {
            var b = a;
            1 < a && (a = 1);
            0 > a && (a = 0);
            1 < b && (b = 1);
            0 > b && (b = 0);
            this.mfacts_rotate_c = .8 * a;
            .8 > b && (b = 0);
            this.mskin_he_max = 175 /
                180 * 3.141593;
            this.mskin_hc_max = 173 / 180 * 3.141593;
            this.mskin_he_min = (115 - 4 * b) / 180 * 3.141593;
            this.mskin_hc_min = (116 - 4 * b) / 180 * 3.141593;
            this.mskin_hc_axis = (117 - 4 * b) / 180 * 3.141593;
            this.mskin_hc_axis < this.mskin_hc_min && (this.mskin_hc_axis = this.mskin_hc_min);
            1.5707965 > this.mskin_hc_min && (this.mskin_hc_min = 1.5707965);
            1.5707965 > this.mskin_hc_axis && (this.mskin_hc_axis = 1.5707965);
            1.5707965 > this.mskin_he_min && (this.mskin_he_min = 1.5707965);
            3.141593 < this.mskin_hc_max && (this.mskin_hc_max = 3.141593);
            3.141593 < this.mskin_hc_axis &&
            (this.mskin_hc_axis = 3.141593);
            3.141593 < this.mskin_he_max && (this.mskin_he_max = 3.141593);
            a = this.mskin_he_max - this.mskin_hc_max;
            b = this.mskin_hc_max - this.mskin_hc_axis;
            this.mfacts_rotate_ge = .01 < a ? this.mfacts_rotate_c * b / a : this.mfacts_rotate_c;
            a = this.mskin_hc_min - this.mskin_he_min;
            b = this.mskin_hc_axis - this.mskin_hc_min;
            this.mfacts_rotate_le = .01 < a ? this.mfacts_rotate_c * b / a : this.mfacts_rotate_c
        }

        updateLut(a) {
            var b = null;
            if (0 === a && (b = Bl), 1 === a && (b = Kp), 2 === a && (b = Jp), !b) throw new p(n.WEBGL_INTERNAL_ERROR, "invalid ylut_table value:" +
                a);
            this.tab_addr = new Uint8Array(b);
            a = [this.tab_addr];
            b = [256];
            let c = [1];
            for (let e = 0; e < a.length; e++) this.gl.bindTexture(this.gl.TEXTURE_2D, this.lutTextures[e]), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.LUMINANCE, b[e], c[e], 0, this.gl.LUMINANCE, this.gl.UNSIGNED_BYTE, a[e])
        }
    }

    class Mp {
        constructor() {
            this.canvas = this.gl = null;
            this.programs = [];
            this.inputTexture = this.commonProgram = null;
            this.outputTextures = [];
            this.fbos = [];
            this.originalFrameHeight = this.originalFrameWidth = 0;
            this.enableBeauty = !1;
            this.denoiseLevel =
                5;
            this.lightLevel = .35;
            this.rednessLevel = .5;
            this.lighteningContrastLevel = 1
        }

        setEnableBeauty(a) {
            this.enableBeauty = !!a
        }

        init(a, b, c) {
            if (!fa.supportWebGL) throw new p(n.NOT_SUPPORTED, "your browser is not support webGL");
            if (this.gl = c.getContext("webgl"), !this.gl) throw new p(n.WEBGL_INTERNAL_ERROR, "can not get webgl context");
            if (this.initGL(a, b), !this.inputTexture) throw new p(n.WEBGL_INTERNAL_ERROR, "can not find input texture");
            this.canvas = c;
            this.programs.push(new Al(this.gl));
            this.programs.push(new Dp(this.gl,
                a, b));
            this.programs.push(new Fp(this.gl, a, b));
            this.programs.push(new Hp(this.gl, a, b));
            this.programs.push(new Lp(this.gl, this.inputTexture, a, b));
            this.commonProgram = this.programs[0].program;
            this.setDenoiseLevel(this.denoiseLevel);
            this.setLightLevel(this.lightLevel);
            this.setRednessLevel(this.rednessLevel);
            this.setContrastLevel(this.lighteningContrastLevel)
        }

        render(a) {
            if (!this.gl || !this.commonProgram || !this.canvas) return void k.warning("video effect manager is not init!");
            var b = 0;
            if (this.originalFrameHeight ===
                a.videoWidth && this.originalFrameWidth === a.videoHeight) b = 2; else if (this.originalFrameHeight !== a.videoHeight || this.originalFrameWidth !== a.videoWidth) {
                var c, e, g;
                if (k.debug(m(c = m(e = m(g = "beauty effect: resolution changed ".concat(this.originalFrameWidth, "x")).call(g, this.originalFrameHeight, " -> ")).call(e, a.videoWidth, "x")).call(c, a.videoHeight)), 0 === a.videoHeight || 0 === a.videoWidth) return void k.debug("beauty effect: skip 0 resolution frame");
                this.canvas.width = a.videoWidth;
                this.canvas.height = a.videoHeight;
                a.setAttribute("width", a.videoWidth.toString());
                a.setAttribute("height", a.videoHeight.toString());
                this.release();
                this.init(a.videoWidth, a.videoHeight, this.canvas)
            }
            this.gl.viewport(0, 0, a.videoWidth, a.videoHeight);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.inputTexture);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, a);
            a = this.enableBeauty ? this.programs.length - 1 : 0;
            for (c = 0; c <= a; c++) e = this.programs[c].program, this.gl.useProgram(e), e = this.gl.getUniformLocation(e,
                "u_image"), this.programs[c].setUniforms(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbos[b + c % 2]), this.gl.clearColor(0, 0, 0, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.drawArrays(this.gl.TRIANGLES, 0, 6), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, this.outputTextures[b + c % 2]), this.gl.uniform1i(e, 0);
            this.gl.useProgram(this.commonProgram);
            b = this.gl.getUniformLocation(this.commonProgram, "u_flipY");
            this.gl.uniform1f(b, -1);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,
                null);
            this.gl.clearColor(0, 0, 0, 1);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6)
        }

        setDenoiseLevel(a) {
            var b;
            r(b = this.programs).call(b, b => {
                b instanceof Ub && b.setParameters({denoiseLevel: a})
            });
            this.denoiseLevel = a
        }

        setLightLevel(a) {
            var b;
            r(b = this.programs).call(b, b => {
                b instanceof Ub && b.setParameters({lightLevel: a})
            });
            this.lightLevel = a
        }

        setRednessLevel(a) {
            var b;
            r(b = this.programs).call(b, b => {
                b instanceof Ub && b.setParameters({rednessLevel: a})
            });
            this.rednessLevel = a
        }

        setContrastLevel(a) {
            var b;
            r(b = this.programs).call(b, b => {
                b instanceof Ub && b.setParameters({lighteningContrastLevel: a})
            });
            this.lighteningContrastLevel = a
        }

        setSize(a, b) {
            var c;
            r(c = this.programs).call(c, c => {
                c instanceof Ub && c.setSize(a, b)
            })
        }

        release() {
            this.inputTexture = this.commonProgram = this.gl = null;
            this.programs = [];
            this.outputTextures = [];
            this.fbos = []
        }

        initGL(a, b) {
            if (!this.gl) throw new p(n.WEBGL_INTERNAL_ERROR, "can not find webgl context");
            this.inputTexture = this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.inputTexture);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
            for (let c = 0; 4 > c; c++) {
                let e = this.gl.createTexture();
                if (!e) throw new p(n.WEBGL_INTERNAL_ERROR, "create texture failed");
                this.gl.bindTexture(this.gl.TEXTURE_2D, e);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
                2 > c ? this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, a, b, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null) : this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, b, a, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
                let g = this.gl.createFramebuffer();
                if (!g) throw new p(n.WEBGL_INTERNAL_ERROR,
                    "create frame buffer failed");
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, g);
                this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, e, 0);
                this.outputTextures.push(e);
                this.fbos.push(g)
            }
            this.gl.viewport(0, 0, a, b);
            this.originalFrameWidth = a;
            this.originalFrameHeight = b
        }
    }

    class Np {
        constructor() {
            this.recordedFrameCount = this.targetFrameRate = 0;
            this.recordingTime = 2
        }

        async startRecordBeautyEffectOutput(a, b = 4) {
            if (this.recordID) throw new p(n.UNEXPECTED_ERROR, "another beauty effect recording is in progress");
            let c = ta(6, "");
            return this.recordID = c, this.targetFrameRate = a, this.recordedFrameCount = 0, this.recordingTime = b, await Db(1E3 * this.recordingTime), this.recordID !== c ? (this.recordID = void 0, !0) : (this.recordID = void 0, this.recordedFrameCount < this.targetFrameRate * this.recordingTime / 2 ? (k.warning("detect beauty effect overload, current framerate", this.recordedFrameCount / 2), !1) : (k.debug("beauty effect current framerate", this.recordedFrameCount / 2), !0))
        }

        stopRecordBeautyEffectOutput() {
            this.recordedFrameCount = this.targetFrameRate =
                0;
            this.recordID = void 0
        }

        addFrame() {
            this.recordID && (this.recordedFrameCount += 1)
        }
    }

    class Op extends class {
        get output() {
            return this._output
        }

        async setInput(a) {
            if (a !== this.input) {
                if (a.kind !== this.kind) throw new p(n.UNEXPECTED_ERROR);
                this.input && this.removeInput();
                this.input = a;
                await this._setInput(a)
            }
        }

        removeInput() {
            this.input = void 0;
            this._removeInput()
        }

        async updateOutput(a) {
            this.output !== a && (this._output = a, this.onOutputChange && await this.onOutputChange())
        }

        replaceOriginMediaStream(a, b) {
            var c, e;
            let g = S(c = a.getTracks()).call(c,
                a => a.kind === this.kind);
            g && a.removeTrack(g);
            b = S(e = b.getTracks()).call(e, a => a.kind === this.kind);
            void 0 === this.output && b && a.addTrack(b);
            this.output && (k.debug("replace ".concat(this.output.kind, " track to origin media stream")), a.addTrack(this.output))
        }
    } {
        constructor() {
            super();
            this.kind = "video";
            this.fps = 15;
            this.overloadDetector = new Np;
            this.enabled = !1;
            this.stopChromeBackgroundLoop = null;
            this.lastRenderTime = 0;
            this.fps = 30;
            this.manager = new Mp
        }

        async setBeautyEffectOptions(a, b) {
            void 0 !== b.smoothnessLevel && ba(b.smoothnessLevel,
                "options.smoothnessLevel", 0, 1, !1);
            void 0 !== b.lighteningLevel && ba(b.lighteningLevel, "options.lighteningLevel", 0, 1, !1);
            void 0 !== b.rednessLevel && ba(b.rednessLevel, "options.rednessLevel", 0, 1, !1);
            void 0 !== b.lighteningContrastLevel && Ra(b.lighteningContrastLevel, "options.lighteningContrastLevel", [0, 1, 2]);
            void 0 !== b.smoothnessLevel && this.manager.setDenoiseLevel(Math.max(.1, 10 * b.smoothnessLevel));
            void 0 !== b.lighteningLevel && this.manager.setLightLevel(Math.max(.1, b.lighteningLevel / 2));
            void 0 !== b.rednessLevel &&
            this.manager.setRednessLevel(Math.max(.01, b.rednessLevel));
            void 0 !== b.lighteningContrastLevel && this.manager.setContrastLevel(b.lighteningContrastLevel);
            this.enabled !== a && (this.manager.setEnableBeauty(a), this.enabled = a, a ? this.input && await this.startEffect() : await this.stopEffect())
        }

        destroy() {
            this.onOutputChange = void 0;
            this.stopEffect();
            this.enabled = !1
        }

        async startEffect() {
            let a = ca();
            if (!this.input) return void k.warning("video track is null, fail to start video effect!");
            if (this.output) return void k.warning("video effect is already enabled");
            let b = await this.renderWithWebGL();
            await this.updateOutput(b);
            k.info("start video effect, output:", this.output);
            this.overloadDetector.startRecordBeautyEffectOutput(this.fps).then(a => {
                a || this.onOverload && this.onOverload()
            });
            let c = () => {
                requestAnimationFrame(c);
                const a = x(), b = 1E3 / this.fps, h = this.lastRenderTime ? a - this.lastRenderTime : b;
                h < b || (this.lastRenderTime = a - (h - b), this.video && this.video.paused && this.video.play(), this.enabled && this.video && (this.manager.render(this.video), this.output && this.output.requestFrame &&
                this.output.requestFrame(), this.overloadDetector.addFrame()))
            };
            requestAnimationFrame(c);
            a.name === Y.CHROME && document.addEventListener("visibilitychange", () => {
                document.hidden ? this.stopChromeBackgroundLoop = Ze(() => {
                    this.enabled && this.video && this.manager.render(this.video);
                    this.output && this.output.requestFrame && this.output.requestFrame();
                    this.overloadDetector.addFrame()
                }, this.fps) : this.stopChromeBackgroundLoop && (this.stopChromeBackgroundLoop(), this.stopChromeBackgroundLoop = null)
            }, !1)
        }

        async stopEffect() {
            k.info("stop video effect");
            this.overloadDetector.stopRecordBeautyEffectOutput();
            this.manager.release();
            this.canvas && this.canvas.remove();
            this.video && this.video.remove();
            this.video = this.canvas = void 0;
            await this.updateOutput(void 0)
        }

        async _setInput(a) {
            this.enabled && !this.video && await this.startEffect()
        }

        _removeInput() {
            this.stopEffect()
        }

        async renderWithWebGL() {
            var a;
            if (!this.input) throw new p(n.BEAUTY_PROCESSOR_INTERNAL_ERROR, "can not renderWithWebGL, no input");
            this.canvas && (this.canvas.remove(), this.canvas = void 0);
            this.video &&
            (this.video.remove(), this.video = void 0);
            this.canvas = document.createElement("canvas");
            this.video = document.createElement("video");
            this.video.setAttribute("autoplay", "");
            this.video.setAttribute("muted", "");
            this.video.muted = !0;
            this.video.setAttribute("playsinline", "");
            this.video.setAttribute("style", "display:none");
            this.video.srcObject = new MediaStream([this.input]);
            var b = new z(a => {
                const b = () => {
                    this.video && this.video.removeEventListener("playing", b);
                    a(void 0)
                };
                this.video && this.video.addEventListener("playing",
                    b)
            });
            this.video.play();
            await b;
            b = this.input.getSettings();
            let c = b.width || this.video.videoWidth, e = b.height || this.video.videoHeight;
            if (b.frameRate && this.fps !== b.frameRate && (this.fps = b.frameRate, k.debug("beauty video processor: set fps to", this.fps)), k.debug(m(a = "beauty video processor: width ".concat(c, " height ")).call(a, e)), !c || !e) throw new p(n.BEAUTY_PROCESSOR_INTERNAL_ERROR, "can not get track resolution");
            this.canvas.width = c;
            this.canvas.height = e;
            this.video.setAttribute("width", c.toString());
            this.video.setAttribute("height",
                e.toString());
            this.manager.init(c, e, this.canvas);
            return this.canvas.captureStream(fa.supportRequestFrame ? 0 : this.fps).getVideoTracks()[0]
        }
    }

    var Gg = function (a, b) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
    };

    class Na extends Ae {
        constructor(a, b, c, e, g) {
            super(a, g);
            this.trackMediaType = "video";
            this._scalabiltyMode = {numSpatialLayers: 1, numTemporalLayers: 1};
            this._enabled = !0;
            this.updateMediaStreamTrackResolution();
            this._encoderConfig = b;
            this._scalabiltyMode = c;
            this._optimizationMode =
                e
        }

        get isPlaying() {
            return !(!this._player || this._player.videoElementStatus !== Ca.PLAYING)
        }

        play(a, b = {}) {
            let c = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.LOCAL_VIDEO_TRACK_PLAY,
                options: [this.getTrackId(), "string" == typeof a ? a : "HTMLElement", b]
            });
            if (!(a instanceof HTMLElement)) {
                let b = document.getElementById(a.toString());
                var e;
                b ? a = b : (k.warning(m(e = "[track-".concat(this.getTrackId(), '] can not find "#')).call(e, a, '" element, use document.body')), a = document.body)
            }
            k.debug("[track-".concat(this.getTrackId(),
                "] start video playback"), w(b));
            a = Wd({}, this._getDefaultPlayerConfig(), {}, b, {trackId: this.getTrackId(), element: a});
            this._player ? this._player.updateConfig(a) : (this._player = new yl(a), this._player.updateVideoTrack(this._mediaStreamTrack));
            this._player.play();
            c.onSuccess()
        }

        stop() {
            let a = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.LOCAL_VIDEO_TRACK_STOP,
                options: [this.getTrackId()]
            });
            if (!this._player) return a.onSuccess();
            this._player.destroy();
            this._player = void 0;
            k.debug("[track-".concat(this.getTrackId(),
                "] stop video playback"));
            a.onSuccess()
        }

        async setEnabled(a, b) {
            if (!b) {
                if (a === this._enabled) return;
                this.stateCheck("enabled", a)
            }
            k.info("[".concat(this.getTrackId(), "] start setEnabled"), a);
            let c = await this._enabledMutex.lock();
            if (!a) {
                this._originMediaStreamTrack.enabled = !1;
                try {
                    await Ka(this, G.NEED_REMOVE_TRACK, this)
                } catch (e) {
                    throw k.error("[".concat(this.getTrackId(), "] setEnabled to false error"), e.toString()), c(), e;
                }
                return b || (this._enabled = !1), k.info("[".concat(this.getTrackId(), "] setEnabled to false success")),
                    c()
            }
            this._originMediaStreamTrack.enabled = !0;
            try {
                await Ka(this, G.NEED_ADD_TRACK, this)
            } catch (e) {
                throw k.error("[".concat(this.getTrackId(), "] setEnabled to true error"), e.toString()), c(), e;
            }
            k.info("[".concat(this.getTrackId(), "] setEnabled to true success"));
            b || (this._enabled = !0);
            c()
        }

        async setMuted(a) {
            var b;
            if (a !== this._muted) {
                if (this.stateCheck("muted", a), this._muted = a, ca().name === Y.FIREFOX) return k.debug("[".concat(this.getTrackId(), "] firefox set mute fallback to set enabled")), void await this.setEnabled(!a,
                    !0);
                this._mediaStreamTrack.enabled = !a;
                k.debug(m(b = "[".concat(this.getTrackId(), "] start set muted: ")).call(b, a));
                await Ka(this, G.SET_VIDEO_TRACK_MUTED, {track: this, muted: a})
            }
        }

        getStats() {
            cd(() => {
                k.warning("[deprecated] LocalVideoTrack.getStats will be removed in the future, use AgoraRTCClient.getLocalVideoStats instead")
            }, "localVideoTrackGetStatsWarning");
            return cc(this, G.GET_STATS) || Wd({}, ye)
        }

        async setBeautyEffect(a, b = {}) {
            let c = u.reportApiInvoke(null, {
                tag: D.TRACER, name: y.LOCAL_VIDEO_TRACK_BEAUTY,
                options: [this.getTrackId(), a, b]
            });
            if (a || this._videoBeautyProcessor) {
                if (ca().os === V.IOS || ca().os === V.ANDROID) throw a = new p(n.INVALID_OPERATION, "can not enable beauty effect on mobile device"), c.onError(a), a;
                if (!this._enabled && a) throw a = new p(n.TRACK_IS_DISABLED, "can not enable beauty effect when track is disabled"), c.onError(a), a;
                k.info("[".concat(this.getTrackId(), "] start setBeautyEffect"), a, w(b));
                try {
                    this._videoBeautyProcessor ? await this._videoBeautyProcessor.setBeautyEffectOptions(a, b) : (this._videoBeautyProcessor =
                        new Op, this._videoBeautyProcessor.onOverload = () => {
                        Va(() => this.emit(rd.BEAUTY_EFFECT_OVERLOAD))
                    }, await this._videoBeautyProcessor.setBeautyEffectOptions(a, b), await this._registerTrackProcessor(this._videoBeautyProcessor))
                } catch (e) {
                    throw k.error("[".concat(this.getTrackId(), "] setBeautyEffect error"), e.toString()), c.onError(e), e;
                }
                k.info("[".concat(this.getTrackId(), "] setBeautyEffect success"));
                c.onSuccess()
            }
        }

        getCurrentFrameData() {
            return this._player ? this._player.getCurrentFrame() : new ImageData(2, 2)
        }

        clone(a,
              b, c, e) {
            let g = this._mediaStreamTrack.clone();
            return new Na(g, a, b, c, e)
        }

        async setBitrateLimit(a) {
            var b;
            if (k.debug(m(b = "[".concat(this.getTrackId(), "] set bitrate limit, ")).call(b, w(a))), a) {
                this._forceBitrateLimit = a;
                this._encoderConfig && (this._encoderConfig.bitrateMax ? this._encoderConfig.bitrateMax = this._encoderConfig.bitrateMax < a.max_bitrate ? this._encoderConfig.bitrateMax : a.max_bitrate : this._encoderConfig.bitrateMax = a.max_bitrate, this._encoderConfig.bitrateMin, this._encoderConfig.bitrateMin = a.min_bitrate);
                try {
                    await Ka(this, G.NEED_RESET_REMOTE_SDP)
                } catch (c) {
                    return c.throw()
                }
            }
        }

        async setOptimizationMode(a) {
            var b;
            if ("motion" === a || "detail" === a || "balanced" === a) {
                try {
                    this._optimizationMode = a, await Ka(this, G.SET_OPTIMIZATION_MODE, a)
                } catch (c) {
                    throw k.error("[".concat(this.getTrackId(), "] set optimization mode failed"), c.toString()), c;
                }
                k.info(m(b = "[".concat(this.getTrackId(), "] set optimization mode success (")).call(b, a, ")"))
            } else k.error(n.INVALID_PARAMS, "optimization mode must be motion, detail or balanced")
        }

        setScalabiltyMode(a) {
            var b;
            if (1 === a.numSpatialLayers && 1 !== a.numTemporalLayers) return k.error(n.INVALID_PARAMS, "scalability mode currently not supported, no SVC."), void (this._scalabiltyMode = {
                numSpatialLayers: 1,
                numTemporalLayers: 1
            });
            this._scalabiltyMode = a;
            k.info(m(b = "[".concat(this.getTrackId(), "] set scalability mode success (")).call(b, a, ")"))
        }

        updateMediaStreamTrackResolution() {
            Xh(this._originMediaStreamTrack).then(([a, b]) => {
                this._videoHeight = b;
                this._videoWidth = a
            }).catch(Rd)
        }

        _updatePlayerSource() {
            this._player && this._player.updateVideoTrack(this._mediaStreamTrack)
        }

        _getDefaultPlayerConfig() {
            return {fit: "contain"}
        }
    }

    (function (a, b, c, e) {
        var g, h = arguments.length, k = 3 > h ? b : null === e ? e = T(b, c) : e;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) k = Reflect.decorate(a, b, c, e); else for (var q = a.length - 1; 0 <= q; q--) (g = a[q]) && (k = (3 > h ? g(k) : 3 < h ? g(b, c, k) : g(b, c)) || k);
        return 3 < h && k && X(b, c, k), k
    })([We({report: u}), Gg("design:type", Function), Gg("design:paramtypes", [Boolean]), Gg("design:returntype", z)], Na.prototype, "setMuted", null);

    class Cl extends Na {
        constructor(a, b, c, e, g, h) {
            super(a, b.encoderConfig ? rc(b.encoderConfig) : {},
                e, g, h);
            this._enabled = !0;
            this._deviceName = "default";
            this._config = b;
            this._constraints = c;
            this._deviceName = a.label;
            this._config.encoderConfig && (this._encoderConfig = rc(this._config.encoderConfig))
        }

        async setDevice(a) {
            var b;
            let c = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.CAM_VIDEO_TRACK_SET_DEVICE,
                options: [this.getTrackId(), a]
            });
            if (k.info(m(b = "[track-".concat(this.getTrackId(), "] set device to ")).call(b, a)), this._enabled) try {
                let c = await hb.getDeviceById(a);
                b = {};
                b.video = Wd({}, this._constraints);
                b.video.deviceId =
                    {exact: a};
                b.video.facingMode = void 0;
                this._originMediaStreamTrack.stop();
                let g = null;
                try {
                    g = await Cb(b, this.getTrackId())
                } catch (h) {
                    throw k.error("[".concat(this.getTrackId(), "] setDevice failed"), h.toString()), g = await Cb({video: this._constraints}, this.getTrackId()), await this._updateOriginMediaStreamTrack(g.getVideoTracks()[0], !1), h;
                }
                await this._updateOriginMediaStreamTrack(g.getVideoTracks()[0], !1);
                this.updateMediaStreamTrackResolution();
                this._deviceName = c.label;
                this._config.cameraId = a;
                this._constraints.deviceId =
                    {exact: a}
            } catch (e) {
                throw c.onError(e), k.error("[".concat(this.getTrackId(), "] setDevice error"), e.toString()), e;
            } else try {
                this._deviceName = (await hb.getDeviceById(a)).label, this._config.cameraId = a, this._constraints.deviceId = {exact: a}
            } catch (e) {
                throw c.onError(e), k.error("[track-".concat(this.getTrackId(), "] setDevice error"), e.toString()), e;
            }
            k.info("[".concat(this.getTrackId(), "] setDevice success"));
            c.onSuccess()
        }

        async setEnabled(a, b) {
            if (!b) {
                if (a === this._enabled) return;
                this.stateCheck("enabled", a)
            }
            k.info("[".concat(this.getTrackId(),
                "] start setEnabled"), a);
            let c = await this._enabledMutex.lock();
            if (!a) {
                this._originMediaStreamTrack.onended = null;
                this._originMediaStreamTrack.stop();
                b || (this._enabled = !1);
                try {
                    await Ka(this, G.NEED_REMOVE_TRACK, this)
                } catch (g) {
                    throw k.error("[".concat(this.getTrackId(), "] setEnabled to false error"), g.toString()), c(), g;
                }
                return k.info("[".concat(this.getTrackId(), "] setEnabled to false success")), c()
            }
            a = Wd({}, this._constraints);
            let e = hb.searchDeviceIdByName(this._deviceName);
            e && !a.deviceId && (a.deviceId =
                {exact: e});
            try {
                let a = await Cb({video: this._constraints}, this.getTrackId());
                await this._updateOriginMediaStreamTrack(a.getVideoTracks()[0], !1);
                await Ka(this, G.NEED_ADD_TRACK, this)
            } catch (g) {
                throw k.error("[".concat(this.getTrackId(), "] setEnabled true error"), g.toString()), c(), g;
            }
            this.updateMediaStreamTrackResolution();
            k.info("[".concat(this.getTrackId(), "] setEnabled to true success"));
            b || (this._enabled = !0);
            c()
        }

        async setEncoderConfiguration(a, b) {
            b = u.reportApiInvoke(null, {
                tag: D.TRACER, name: y.CAM_VIDEO_TRACK_SET_ENCODER_CONFIG,
                options: [this.getTrackId(), a]
            });
            if (!this._enabled) throw a = new p(n.TRACK_IS_DISABLED, "can not set encoder configuration when track is disabled"), b.onError(a), a;
            a = rc(a);
            this._forceBitrateLimit && (a.bitrateMax = this._forceBitrateLimit.max_bitrate ? this._forceBitrateLimit.max_bitrate : a.bitrateMax, a.bitrateMin = this._forceBitrateLimit.min_bitrate ? this._forceBitrateLimit.min_bitrate : a.bitrateMin);
            let c = (e = this._config, JSON.parse(w(e)));
            var e;
            c.encoderConfig = a;
            e = of(c);
            k.debug("[".concat(this.getTrackId(), "] setEncoderConfiguration applyConstraints"),
                w(a), w(e));
            try {
                await this._originMediaStreamTrack.applyConstraints(e), this.updateMediaStreamTrackResolution()
            } catch (g) {
                throw a = new p(n.UNEXPECTED_ERROR, g.toString()), k.error("[track-".concat(this.getTrackId(), "] applyConstraints error"), a.toString()), b.onError(a), a;
            }
            this._config = c;
            this._constraints = e;
            this._encoderConfig = a;
            try {
                await Ka(this, G.NEED_RENEGOTIATE)
            } catch (g) {
                return b.onError(g), g.throw()
            }
            b.onSuccess()
        }

        _getDefaultPlayerConfig() {
            return {mirror: !0, fit: "cover"}
        }
    }

    var Dl = !0;
    "findIndex" in [] && Array(1).findIndex(function () {
        Dl =
            !1
    });
    M({target: "Array", proto: !0, forced: Dl}, {
        findIndex: function (a) {
            return Ri(this, a, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Pp = ua("Array").findIndex, El = Array.prototype, Xd = function (a) {
        var b = a.findIndex;
        return a === El || a instanceof Array && b === El.findIndex ? Pp : b
    };
    let pi = (a, b) => {
        let c = null;
        if ("h264" === b ? c = a.match(/a=rtpmap:(\d+) H264.*\r\n/) || a.match(/a=rtpmap:(\d+) H264.*\n/) : "vp8" === b ? c = a.match(/a=rtpmap:(\d+) VP8.*\r\n/) || a.match(/a=rtpmap:(\d+) VP8.*\n/) : "vp9" === b ? c = a.match(/a=rtpmap:(\d+) VP9.*\r\n/) ||
            a.match(/a=rtpmap:(\d+) VP9.*\n/) : "av1" === b && (c = a.match(/a=rtpmap:(\d+) AV1.*\r\n/) || a.match(/a=rtpmap:(\d+) AV1.*\n/)), c && c[1]) return c[1]
    };

    class Fl extends xl {
        constructor(a, b, c, e) {
            super(b, b.stringUid || b.uid);
            this.suspendTracks = [];
            this.type = "pub";
            this._waitingSuccessResponse = this.detecting = !1;
            this.handleMuteVideoTrack = ({muted: a}, b, c) => {
                this.setVideoTrackMuteState(a).then(b).catch(c)
            };
            this.handleMuteAudioTrack = ({track: a, muted: b}, c, e) => {
                this.setAudioTrackMuteState(b, a).then(c).catch(e)
            };
            this.renegotiateWithGateway =
                async () => (k.debug("[pc-".concat(this.pc.ID, "] renegotiate start")), new z(async (a, b) => {
                    this.connectionState = "connecting";
                    let c = e => {
                        "connected" === e && (this.off(H.CONNECTION_STATE_CHANGE, c), a());
                        "disconnected" === e && (this.off(H.CONNECTION_STATE_CHANGE, c), b(new p(n.OPERATION_ABORTED, "renegotiate abort")))
                    };
                    this.on(H.CONNECTION_STATE_CHANGE, c);
                    var e = await this.pc.createOfferSDP();
                    this.audioTrack && this.audioTrack._encoderConfig && (e = pf(e, this.audioTrack._encoderConfig));
                    this.videoTrack && this.videoTrack._scalabiltyMode &&
                    ("vp9" !== this.codec ? (this.videoTrack._scalabiltyMode.numSpatialLayers = 1, this.videoTrack._scalabiltyMode.numTemporalLayers = 1) : e = oi(e, this.codec, this.videoTrack._scalabiltyMode), k.debug("renegoation spatial layers: ", this.videoTrack._scalabiltyMode.numSpatialLayers));
                    await this.pc.setOfferSDP(e);
                    this.pc.onOfferSettled({
                        videoActive: this.videoTrack && !this.videoTrack.muted,
                        audioActive: this.audioTrack && this.audioTrack.isActive
                    });
                    let g = await za(this, H.NEED_RENEGOTIATE, e);
                    e = function (a, b) {
                        var c, e, g;
                        const h =
                            pa(c = RegExp.prototype.test).call(c, /^([a-z])=(.*)/);
                        a = I(e = a.split(/(\r\n|\r|\n)/)).call(e, h);
                        b = I(g = b.split(/(\r\n|\r|\n)/)).call(g, h);
                        let k = null;
                        const l = new ha;
                        return r(a).call(a, a => {
                            const b = a.match(/m=(audio|video)/);
                            if (b && b[1]) return void (k = b[1]);
                            k && (a = a.match(/=(sendrecv|recvonly|sendonly|inactive)/)) && a[1] && l.set(k, a[1])
                        }), k = null, B(b).call(b, a => {
                            var b = a.match(/m=(audio|video)/);
                            if (b && b[1]) return k = b[1], a;
                            if (!k) return a;
                            if ((b = a.match(/=(sendrecv|recvonly|sendonly|inactive)/)) && b[1]) {
                                const c = l.get(k);
                                if (c && c !== b[1]) return a.replace(b[1], c)
                            }
                            return a
                        }).join("\r\n") + "\r\n"
                    }(e, this.updateAnswerSDP(g.sdp));
                    await this.pc.setAnswerSDP(e);
                    k.debug("[pc-".concat(this.pc.ID, "] renegotiate success"));
                    this.connectionState = "connected"
                }));
            this.handleStreamRenegotiate = (a, b) => {
                "connected" === this.connectionState ? this.renegotiateWithGateway().then(a).catch(b) : a()
            };
            this.handleReplaceTrack = (a, b, c) => {
                if (this.audioTrack instanceof Ib && "audio" === a.kind) return z.resolve();
                this.pc.replaceTrack(a).then(a => a ? this.renegotiateWithGateway() :
                    z.resolve()).then(b).catch(c)
            };
            this.handleCloseAudioTrack = a => {
            };
            this.handleCloseVideoTrack = () => {
                this.lowStreamConnection && this.lowStreamConnection.videoTrack && this.lowStreamConnection.videoTrack.close()
            };
            this.handleGetSessionID = a => {
                a(this.joinInfo.sid)
            };
            this.handleGetLocalVideoStats = a => {
                a(this.statsCollector.getLocalVideoTrackStats(this.connectionId))
            };
            this.handleGetLocalAudioStats = a => {
                a(this.statsCollector.getLocalAudioTrackStats(this.connectionId))
            };
            this.handleSetOptimizationMode = (a, b, c) => {
                this.videoTrack &&
                this.setRtpSenderParametersByTrackConfig(this.videoTrack).then(b).catch(c)
            };
            this.isLowStreamConnection = !!e;
            this.codec = c;
            this.statsCollector = a;
            this.statsCollector.addLocalConnection(this)
        }

        getAllTracks() {
            let a = [];
            return this.videoTrack && a.push(this.videoTrack), this.audioTrack && this.audioTrack instanceof Ib ? a = m(a).call(a, this.audioTrack.trackList) : this.audioTrack && a.push(this.audioTrack), a.push(...this.suspendTracks), a
        }

        async addTracks(a) {
            let b = fa;
            if ("connecting" === this.connectionState) try {
                return await this.createWaitConnectionConnectedPromise(),
                    await this.addTracks(a)
            } catch (h) {
                throw new p(n.OPERATION_ABORTED, "publish abort");
            }
            var c = !1;
            let e = this.getAllTracks();
            a = Yh(a = I(a).call(a, a => -1 === N(e).call(e, a)));
            for (let e = 0; e < a.length; e += 1) {
                var g = a[e];
                if (!(g instanceof Ae)) return (new p(n.INVALID_LOCAL_TRACK)).throw();
                if (g instanceof Na && this.disabledVideoTrack) {
                    if (this.disabledVideoTrack !== g) return (new p(n.EXIST_DISABLED_VIDEO_TRACK)).throw();
                    this.disabledVideoTrack = void 0
                }
                if (g instanceof Na && this.videoTrack) return (new p(n.CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS)).throw();
                if (g instanceof jb) if (this.audioTrack instanceof Ib) 0 === this.audioTrack.trackList.length && await this.pc.setAudioRtpEncodingParameters({active: !0}), this.audioTrack.addAudioTrack(g); else {
                    if (!b.webAudioMediaStreamDest) throw new p(n.NOT_SUPPORTED, "your browser is not support audio mixing");
                    c = new Ib;
                    g.muted ? this.suspendTracks.push(g) : c.addAudioTrack(g);
                    c = await this.addTrackWithPC(c)
                } else g instanceof Na && this.isLowStreamConnection ? (c = ri({}, {
                    width: 160,
                    height: 120,
                    framerate: 15,
                    bitrate: 50
                }, {}, this.lowStreamParameter),
                    b.supportDualStreamEncoding ? (k.debug("[".concat(this.connectionId, "] creating low stream using rtp encoding.")), this.lowStreamEncoding = $l(c, g), g = g.clone({
                        bitrateMax: c.bitrate,
                        bitrateMin: c.bitrate
                    })) : (k.debug("[".concat(this.connectionId, "] creating low stream using canvas.")), g = pm(g, c), g = new Na(g, {
                        bitrateMax: c.bitrate,
                        bitrateMin: c.bitrate
                    })), g._hints.push(yb.LOW_STREAM), c = await this.addTrackWithPC(g), this.bindTrackEvents(g)) : (this.detecting = !0, mb(() => {
                    this.detecting = !1
                }, 8E3), c = await this.addTrackWithPC(g))
            }
            await this.updateControlMessage();
            c && await this.renegotiateWithGateway();
            r(a).call(a, a => this.bindTrackEvents(a))
        }

        async removeTracks(a, b) {
            let c = this.getAllTracks();
            a = Yh(a = I(a).call(a, a => -1 !== N(c).call(c, a) || a === this.disabledVideoTrack));
            let e = [];
            for (let c = 0; c < a.length; c += 1) {
                let g = a[c];
                if (this.unbindTrackEvents(g), this.audioTrack instanceof Ib && g instanceof jb) this.audioTrack.removeAudioTrack(g), bc(this.suspendTracks, g), 0 === this.audioTrack.trackList.length && (e.push(this.audioTrack), this.audioTrack = void 0); else if (g instanceof jb) e.push(g),
                    this.audioTrack = void 0; else if (g instanceof Na) {
                    if (b) {
                        if (this.disabledVideoTrack === g) return void (this.disabledVideoTrack = void 0)
                    } else this.disabledVideoTrack = this.videoTrack;
                    e.push(g);
                    this.isLowStreamConnection && g.close();
                    this.videoTrack = void 0
                }
            }
            if (this.videoTrack || this.audioTrack) {
                if (0 !== e.length) {
                    if ("connecting" === this.connectionState) try {
                        await this.createWaitConnectionConnectedPromise()
                    } catch (h) {
                        return
                    }
                    for (let a of e) {
                        var g;
                        k.debug(m(g = "[".concat(this.connectionId, "] remove ")).call(g, a.trackMediaType,
                            " from pc"));
                        await this.pc.removeTrack(a._mediaStreamTrack)
                    }
                    await this.renegotiateWithGateway()
                }
            } else await this.closeP2PConnection()
        }

        async updateControlMessage() {
            "connected" === this.connectionState && (this.audioTrack && await za(this, H.NEED_CONTROL, {
                type: "audio",
                muted: !this.audioTrack.isActive
            }), this.videoTrack && await za(this, H.NEED_CONTROL, {type: "video", muted: this.videoTrack.muted}))
        }

        startP2PConnection() {
            return new z(async (a, b) => {
                if (!this.audioTrack && !this.videoTrack) return b(new p(n.UNEXPECTED_ERROR,
                    "no track to publish"));
                let c = e => {
                    if ("connected" === e && (this.off(H.CONNECTION_STATE_CHANGE, c), a()), "disconnected" === e) {
                        if (this.off(H.CONNECTION_STATE_CHANGE, c), this.disconnectedReason) return b(this.disconnectedReason);
                        b(new p(n.OPERATION_ABORTED, "publish abort"))
                    }
                };
                this.on(H.CONNECTION_STATE_CHANGE, c);
                this.disconnectedReason = void 0;
                this.connectionState = "connecting";
                this._waitingSuccessResponse = !0;
                this.startTime = x();
                try {
                    var e;
                    !this.pc.audioTrack && this.audioTrack && await this.pc.addTrack(this.audioTrack._mediaStreamTrack);
                    !this.pc.videoTrack && this.videoTrack && await this.pc.addTrack(this.videoTrack._mediaStreamTrack);
                    let a = await this.pc.createOfferSDP();
                    v.REMOVE_NEW_CODECS && (a = "vp9" === this.codec ? qf(a, ["av1"]) : "av1" === this.codec ? qf(a, ["vp9"]) : qf(a, ["vp9", "av1"]));
                    let b = mi(a);
                    this.videoTrack && !ia(e = b.video).call(e, this.codec.toUpperCase()) && k.warning("current codec is not supported, support list: ".concat(b.video.join(",")));
                    this.audioTrack && this.audioTrack._encoderConfig && (a = pf(a, this.audioTrack._encoderConfig));
                    this.videoTrack &&
                    this.videoTrack._scalabiltyMode && ("vp9" !== this.codec && "av1" !== this.codec ? (this.videoTrack._scalabiltyMode.numSpatialLayers = 1, this.videoTrack._scalabiltyMode.numTemporalLayers = 1) : a = oi(a, this.codec, this.videoTrack._scalabiltyMode), k.debug("spatial layers: ", this.videoTrack._scalabiltyMode.numSpatialLayers));
                    await this.pc.setOfferSDP(a);
                    this.pc.onOfferSettled({
                        videoActive: this.videoTrack && !this.videoTrack.muted,
                        audioActive: this.audioTrack && this.audioTrack.isActive
                    });
                    this.videoTrack && this.setRtpSenderParametersByTrackConfig(this.videoTrack);
                    k.debug("[".concat(this.connectionId, "] create and set offer success"));
                    e = {messageType: "OFFER", sdp: a, offererSessionId: 104, retry: !0};
                    fa.supportDualStreamEncoding && this.isLowStreamConnection && this.lowStreamEncoding && this.videoTrack && await this.setLowStreamEncoding(this.lowStreamEncoding, this.videoTrack);
                    let c = await za(this, H.NEED_ANSWER, e), m = this.updateAnswerSDP(c.sdp);
                    await this.pc.setAnswerSDP(m);
                    k.debug("[".concat(this.connectionId, "] set answer success"));
                    await this.icePromise;
                    this.connectionState =
                        "connected";
                    this.startUploadStats()
                } catch (g) {
                    this.off(H.CONNECTION_STATE_CHANGE, c), this.connectionState = "disconnected", this.reportPublishEvent(!1, g.code), k.error("[".concat(this.connectionId, "] connection error"), g.toString()), b(g)
                }
            })
        }

        reportPublishEvent(a, b, c) {
            var e;
            this._waitingSuccessResponse = !1;
            u.publish(this.joinInfo.sid, {
                lts: this.startTime,
                succ: a,
                ec: b,
                audioName: this.audioTrack && this.audioTrack.getTrackLabel(),
                videoName: this.videoTrack && this.videoTrack.getTrackLabel(),
                screenshare: !(!this.videoTrack ||
                    -1 === N(e = this.videoTrack._hints).call(e, yb.SCREEN_TRACK)),
                audio: !!this.audioTrack,
                video: !!this.videoTrack,
                p2pid: this.pc.ID,
                publishRequestid: this.ID,
                extend: c
            })
        }

        async closeP2PConnection(a) {
            let b = this.getAllTracks();
            var c;
            (r(b).call(b, a => {
                this.unbindTrackEvents(a)
            }), this.isLowStreamConnection && this.videoTrack && this.videoTrack.close(), this.videoTrack = void 0, this.audioTrack instanceof Ib) && r(c = this.audioTrack.trackList).call(c, a => {
                this.audioTrack.removeAudioTrack(a)
            });
            this.audioTrack = void 0;
            this.stopUploadStats();
            this.statsCollector.removeConnection(this.connectionId);
            await this.closePC(a);
            this.connectionState = "disconnected";
            this.removeAllListeners()
        }

        getNetworkQuality() {
            var a, b = this.pc.getStats();
            if (!b.videoSend[0] && !b.audioSend[0]) return 1;
            var c = cc(this, H.NEED_SIGNAL_RTT), e = b.videoSend[0] ? b.videoSend[0].rttMs : void 0;
            let g = b.audioSend[0] ? b.audioSend[0].rttMs : void 0;
            e = e && g ? (e + g) / 2 : e || g;
            c = 70 * b.sendPacketLossRate / 50 + .3 * ((e && c ? (e + c) / 2 : e || c) || 0) / 1500;
            c = .17 > c ? 1 : .36 > c ? 2 : .59 > c ? 3 : .1 > c ? 4 : 5;
            return this.videoTrack && this.videoTrack._encoderConfig &&
            -1 === N(a = this.videoTrack._hints).call(a, yb.SCREEN_TRACK) && (a = this.videoTrack._encoderConfig.bitrateMax, b = b.bitrate.actualEncoded, a && b) ? (b = (1E3 * a - b) / (1E3 * a), vo[.15 > b ? 0 : .3 > b ? 1 : .45 > b ? 2 : .6 > b ? 3 : 4][c]) : c
        }

        handleUpdateBitrateLimit(a) {
            this.videoTrack && this.videoTrack.setBitrateLimit(a)
        }

        async setAudioTrackMuteState(a, b) {
            let c = this.audioTrack;
            try {
                if (a) {
                    var e;
                    if (c.removeAudioTrack(b), 0 === c.trackList.length) k.debug(m(e = "[".concat(this.connectionId, "] set audio encoding active, id: ")).call(e, b.getTrackId(), ", state: ",
                        !1)), await this.pc.setAudioRtpEncodingParameters({active: !1});
                    this.suspendTracks.push(b)
                } else await this.pc.setAudioRtpEncodingParameters({active: !0}), c.addAudioTrack(b), bc(this.suspendTracks, b)
            } catch (h) {
                var g;
                k.warning(m(g = "[".concat(this.connectionId, "] set audio muted error ")).call(g, h, ", fallback to set enabled"))
            }
            await za(this, H.NEED_CONTROL, {type: "audio", muted: !(!this.audioTrack || this.audioTrack.isActive)})
        }

        async setVideoTrackMuteState(a) {
            let b = !a, c = !1;
            if (ca().name === Y.FIREFOX) c = !0; else try {
                var e,
                    g;
                k.debug(m(e = m(g = "[".concat(this.connectionId, "] set video encoding active, id: ")).call(g, this.videoTrack && this.videoTrack.getTrackId(), ", state: ")).call(e, b));
                await this.pc.setVideoRtpEncodingParameters({active: b})
            } catch (t) {
                var h;
                k.warning(m(h = "[".concat(this.connectionId, "] set video encoding active error ")).call(h, t, ", fallback to set enabled"));
                c = !0
            }
            var l, q;
            c && this.videoTrack && (k.debug(m(l = m(q = "[".concat(this.connectionId, "] set video encoding active fallback to enabled on firefox, type: ")).call(q,
                this.videoTrack && this.videoTrack.getTrackId(), ", state: ")).call(l, b)), this.videoTrack.getMediaStreamTrack().enabled = b);
            this.lowStreamConnection && this.lowStreamConnection.setVideoTrackMuteState(a);
            !this.isLowStreamConnection && await za(this, H.NEED_CONTROL, {type: "video", muted: a})
        }

        uploadStats(a, b) {
            let c = this.audioTrack ? function (a, b) {
                const c = a.audioSend[0];
                if (!c) return null;
                a = {
                    id: ta(10, ""),
                    timestamp: (new Date(a.timestamp)).toISOString(),
                    mediaType: "audio",
                    type: "ssrc",
                    ssrc: c.ssrc.toString()
                };
                return a.A_astd =
                    b._originMediaStreamTrack.enabled && b._mediaStreamTrack.enabled ? "0" : "1", c.inputLevel ? a.A_ail = Math.round(100 * c.inputLevel).toString() : a.A_ail = Math.round(100 * b._source.getAudioAvgLevel()).toString(), a.A_apil = Math.round(100 * b._source.getAudioAvgLevel()).toString(), a
            }(a, this.audioTrack) : void 0, e = this.videoTrack ? function (a, b) {
                const c = a.videoSend[0];
                if (!c) return null;
                a = {
                    id: ta(10, ""),
                    timestamp: (new Date(a.timestamp)).toISOString(),
                    mediaType: "video",
                    type: "ssrc",
                    ssrc: c.ssrc.toString()
                };
                switch (a.A_vstd = b._originMediaStreamTrack &&
                !b._originMediaStreamTrack.enabled || !b._mediaStreamTrack.enabled ? "1" : "0", c.sentFrame && (a.A_fhs = c.sentFrame.height.toString(), a.A_frs = c.sentFrame.frameRate.toString(), a.A_fws = c.sentFrame.width.toString()), c.adaptionChangeReason) {
                    case "none":
                        a.A_ac = "0";
                        break;
                    case "cpu":
                        a.A_ac = "1";
                        break;
                    case "bandwidth":
                        a.A_ac = "2";
                        break;
                    case "other":
                        a.A_ac = "3"
                }
                return a.A_nr = c.nacksCount.toString(), c.avgEncodeMs && (a.A_aem = c.avgEncodeMs.toFixed(0).toString()), a
            }(a, this.videoTrack) : void 0, g = Uh(a, b), h = function (a) {
                const b =
                    {id: "bweforvideo", timestamp: (new Date(a.timestamp)).toISOString(), type: "VideoBwe"};
                return a.bitrate.retransmit && (b.A_rb = a.bitrate.retransmit.toString()), a.bitrate.targetEncoded && (b.A_teb = a.bitrate.targetEncoded.toString()), b.A_aeb = a.bitrate.actualEncoded.toString(), b.A_tb = a.bitrate.transmit.toString(), void 0 !== a.sendBandwidth && (b.A_asb = a.sendBandwidth.toString()), b
            }(a);
            c && Va(() => this.emit(H.NEED_UPLOAD, rb.PUBLISH_STATS, c));
            e && Va(() => this.emit(H.NEED_UPLOAD, rb.PUBLISH_STATS, ri({}, e, {}, g)));
            h && Va(() =>
                this.emit(H.NEED_UPLOAD, rb.PUBLISH_STATS, h))
        }

        uploadSlowStats(a) {
            let b = Uh(a);
            b && Va(() => this.emit(H.NEED_UPLOAD, rb.PUBLISH_STATS, b))
        }

        uploadRelatedStats(a) {
            let b = function (a) {
                return (a = a.videoSend[0]) ? {
                    mediaType: "video",
                    isVideoMute: !1,
                    frameRateInput: a.inputFrame && a.inputFrame.frameRate.toString(),
                    frameRateSent: a.sentFrame && a.sentFrame.frameRate.toString(),
                    googRtt: a.rttMs.toString()
                } : null
            }(a);
            b && (b.isVideoMute = !(!this.videoTrack || !this.videoTrack.muted), Va(() => {
                this.emit(H.NEED_UPLOAD, rb.PUBLISH_RELATED_STATS,
                    b)
            }))
        }

        bindTrackEvents(a) {
            var b;
            a.addListener(G.NEED_RESET_REMOTE_SDP, pa(b = this.handleResetRemoteSdp).call(b, this));
            this.isLowStreamConnection || (a instanceof jb ? (a.addListener(G.GET_STATS, this.handleGetLocalAudioStats), a.addListener(G.NEED_CLOSE, this.handleCloseAudioTrack), a.addListener(G.SET_AUDIO_TRACK_MUTED, this.handleMuteAudioTrack)) : a instanceof Na && (a.addListener(G.GET_STATS, this.handleGetLocalVideoStats), a.addListener(G.NEED_CLOSE, this.handleCloseVideoTrack), a.addListener(G.SET_OPTIMIZATION_MODE,
                this.handleSetOptimizationMode), a.addListener(G.SET_VIDEO_TRACK_MUTED, this.handleMuteVideoTrack)), a.addListener(G.NEED_RENEGOTIATE, this.handleStreamRenegotiate), a.addListener(G.NEED_REPLACE_TRACK, this.handleReplaceTrack), a.addListener(G.NEED_SESSION_ID, this.handleGetSessionID))
        }

        unbindTrackEvents(a) {
            this.isLowStreamConnection || (a instanceof jb ? (a.off(G.GET_STATS, this.handleGetLocalAudioStats), a.off(G.NEED_CLOSE, this.handleCloseAudioTrack), a.off(G.SET_AUDIO_TRACK_MUTED, this.handleMuteAudioTrack)) : a instanceof
                Na && (a.off(G.GET_STATS, this.handleGetLocalVideoStats), a.off(G.NEED_CLOSE, this.handleCloseVideoTrack), a.off(G.SET_OPTIMIZATION_MODE, this.handleSetOptimizationMode), a.off(G.SET_VIDEO_TRACK_MUTED, this.handleMuteVideoTrack)), a.off(G.NEED_RENEGOTIATE, this.handleStreamRenegotiate), a.off(G.NEED_REPLACE_TRACK, this.handleReplaceTrack), a.off(G.NEED_SESSION_ID, this.handleGetSessionID))
        }

        async addTrackWithPC(a) {
            if ("connecting" === this.connectionState) return (new p(n.INVALID_OPERATION, "last publish operation has not finished")).throw();
            let b = this.videoTrack, c = !1;
            return this.audioTrack && a instanceof Ib ? (this.audioTrack = a, k.debug("[".concat(this.connectionId, "] replace pc audio track")), c = await this.pc.replaceTrack(a._mediaStreamTrack)) : this.videoTrack && a instanceof Na ? (this.videoTrack = a, k.debug("[".concat(this.connectionId, "] replace pc video track")), c = await this.pc.replaceTrack(a._mediaStreamTrack)) : a instanceof Ib ? (this.audioTrack = a, k.debug("[".concat(this.connectionId, "] add audio track to pc")), await this.pc.addTrack(a._mediaStreamTrack),
                c = !0) : a instanceof Na && (this.videoTrack = a, k.debug("[".concat(this.connectionId, "] add video track to pc")), await this.pc.addTrack(a._mediaStreamTrack), c = !0), "connected" === this.connectionState && this.videoTrack !== b && this.videoTrack && await this.setRtpSenderParametersByTrackConfig(this.videoTrack), "disconnected" !== this.connectionState && c
        }

        handleResetRemoteSdp() {
            return new z((a, b) => {
                var c;
                k.info("[pc-".concat(this.pc.ID, "] start reset remote sdp"));
                let e = this.pc.getOfferSDP();
                var g = this.pc.getAnswerSDP();
                if (!g || !e) return a();
                g = g.sdp;
                let h;
                this.videoTrack && this.videoTrack._encoderConfig && -1 === N(c = this.videoTrack._hints).call(c, yb.SCREEN_TRACK) && (h = function (a, b) {
                    var c, e;
                    let g = b.bitrateMin;
                    b = b.bitrateMax;
                    let h = pa(c = RegExp.prototype.test).call(c, /^([a-z])=(.*)/);
                    a = I(e = a.split(/(\r\n|\r|\n)/)).call(e, h);
                    if (b) {
                        let c = "AS";
                        ca().name === Y.FIREFOX && (b = 1E3 * (b >>> 0), c = "TIAS");
                        e = Xd(a).call(a, a => ia(a).call(a, c));
                        var k;
                        0 < e && (a[e] = m(k = "b=".concat(c, ":")).call(k, b))
                    }
                    g && (k = Xd(a).call(a, a => ia(a).call(a, "x-google-min-bitrate")),
                    0 < k && (a[k] = a[k].replace(/x-google-min-bitrate=(.*)/, "x-google-min-bitrate=".concat(g))));
                    return a.join("\r\n") + "\r\n"
                }(g, this.videoTrack._encoderConfig));
                g !== h ? this.pc.setOfferSDP(e.sdp).then(() => {
                    if (h) return this.pc.setAnswerSDP(h)
                }).then(a).catch(a => {
                    var c;
                    k.error(m(c = "[pc-".concat(this.pc.ID, "] reset remote sdp error, ")).call(c, a));
                    b(a)
                }) : k.debug("[pc-".concat(this.pc.ID, "] remote sdp have no not changed"))
            })
        }

        async setRtpSenderParametersByTrackConfig(a) {
            if (!fa.supportSetRtpSenderParameters) return void k.debug("[".concat(this.connectionId,
                "] do not support set pc rtp sender, skip"));
            let b = {}, c = "balanced";
            "motion" === a._optimizationMode ? c = "maintain-framerate" : "detail" === a._optimizationMode && (c = "maintain-resolution");
            k.debug("[".concat(this.connectionId, "] set pc rtp sender"), b, c);
            await this.pc.setRtpSenderParameters(b, c)
        }

        updateAnswerSDP(a) {
            var b, c;
            return a = a.replace(/a=x-google-flag:conference\r\n/g, ""), this.videoTrack && N(b = this.videoTrack._hints).call(b, yb.SCREEN_TRACK), this.videoTrack && this.videoTrack._encoderConfig && -1 === N(c = this.videoTrack._hints).call(c,
                yb.SCREEN_TRACK) && (a = function (a, b, c) {
                let e = fa;
                var g = c.bitrateMin;
                c = c.bitrateMax;
                let h = a.match(/m=video.*\r\n/) || a.match(/m=video.*\n/);
                if (h && 0 < h.length && e.supportMinBitrate && g) {
                    b = pi(a, b);
                    var k, n;
                    b && (a = a.replace(h[0], m(k = m(n = "".concat(h[0], "a=fmtp:")).call(n, b, " x-google-min-bitrate=")).call(k, g, "\r\n")))
                }
                if (h && 0 < h.length && c) {
                    var p, r;
                    g = "AS";
                    ca().name === Y.FIREFOX && (c = 1E3 * (c >>> 0), g = "TIAS");
                    a = a.replace(h[0], m(p = m(r = "".concat(h[0], "b=")).call(r, g, ":")).call(p, c, "\r\n"))
                }
                return a
            }(a, this.codec, this.videoTrack._encoderConfig)),
            this.audioTrack && this.audioTrack._encoderConfig && (a = pf(a, this.audioTrack._encoderConfig)), a = function (a) {
                let b = ca();
                return b.name !== Y.SAFARI && b.os !== V.IOS ? a : a.replace(/a=.*video-orientation\r\n/g, "")
            }(a)
        }

        createPC() {
            this.pc = new ul({turnServer: this.joinInfo.turnServer});
            this.updateICEPromise()
        }

        async closePC(a) {
            return this.pc.onICEConnectionStateChange = void 0, this.pc.close(), !a && await za(this, H.NEED_UNPUB)
        }

        onPCDisconnected(a) {
            this.reportPublishEvent(!1, a.code)
        }

        async setLowStreamEncoding(a, b) {
            try {
                let c =
                    await this.pc.setVideoRtpEncodingParameters(a), e = b.getMediaStreamTrack();
                if (a.scaleResolutionDownBy && c.encodings[0].scaleResolutionDownBy !== a.scaleResolutionDownBy) {
                    let c = b._videoHeight || e.getSettings().height, h = b._videoWidth || e.getSettings().width;
                    c && h && await e.applyConstraints({
                        height: c / a.scaleResolutionDownBy,
                        width: h / a.scaleResolutionDownBy
                    })
                }
                a.maxFramerate && c.encodings[0].maxFramerate !== a.maxFramerate && await e.applyConstraints({frameRate: a.maxFramerate})
            } catch (c) {
                if (c instanceof p) throw c;
                throw new p(n.LOW_STREAM_ENCODING_ERROR,
                    c.message);
            }
        }
    }

    class Gl extends Zk {
        constructor(a, b, c) {
            super(a);
            this._isDestroyed = !1;
            this._userId = b;
            this._uintId = c
        }

        getUserId() {
            return this._userId
        }

        _updateOriginMediaStreamTrack(a) {
            this._mediaStreamTrack = this._originMediaStreamTrack = a;
            this._updatePlayerSource()
        }

        _destroy() {
            this._isDestroyed = !0;
            k.info("[track-".concat(this.getTrackId(), "] is destroyed"));
            this.stop()
        }
    }

    class yd extends Gl {
        constructor(a, b, c) {
            super(a, b, c);
            this.trackMediaType = "video";
            this.updateMediaStreamTrackResolution()
        }

        get isPlaying() {
            return !(!this._player ||
                this._player.videoElementStatus !== Ca.PLAYING)
        }

        getStats() {
            cd(() => {
                k.warning("[deprecated] RemoteVideoTrack.getStats will be removed in the future, use AgoraRTCClient.getRemoteVideoStats instead")
            }, "remoteVideoTrackGetStatsWarning");
            return cc(this, G.GET_STATS) || rf({}, hg)
        }

        play(a, b = {}) {
            let c = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.REMOTE_VIDEO_TRACK_PLAY,
                options: [this.getTrackId(), "string" == typeof a ? a : "HTMLElement", b]
            });
            if ("string" == typeof a) {
                let b = document.getElementById(a);
                var e;
                b ? a = b : (k.warning(m(e =
                    "[track-".concat(this.getTrackId(), '] can not find "#')).call(e, a, '" element, use document.body')), a = document.body)
            }
            k.debug("[track-".concat(this.getTrackId(), "] start video playback"), w(b));
            a = rf({fit: "cover"}, b, {trackId: this.getTrackId(), element: a});
            this._player ? this._player.updateConfig(a) : (this._player = new yl(a), this._player.updateVideoTrack(this._mediaStreamTrack), this._player.onFirstVideoFrameDecoded = () => {
                this.emit(sd.FIRST_FRAME_DECODED)
            });
            this._player.play();
            c.onSuccess()
        }

        stop() {
            let a = u.reportApiInvoke(null,
                {tag: D.TRACER, name: y.REMOTE_VIDEO_TRACK_STOP, options: [this.getTrackId()]});
            if (!this._player) return a.onSuccess();
            this._player.destroy();
            this._player = void 0;
            k.debug("[track-".concat(this.getTrackId(), "] stop video playback"));
            a.onSuccess()
        }

        getCurrentFrameData() {
            return this._player ? this._player.getCurrentFrame() : new ImageData(2, 2)
        }

        updateMediaStreamTrackResolution() {
            Xh(this._originMediaStreamTrack).then(([a, b]) => {
                this._videoHeight = b;
                this._videoWidth = a
            }).catch(Rd)
        }

        _updatePlayerSource() {
            k.debug("[track-".concat(this.getTrackId(),
                "] update player source track"));
            this._player && this._player.updateVideoTrack(this._mediaStreamTrack)
        }
    }

    class zd extends Gl {
        constructor(a, b, c) {
            super(a, b, c);
            this.trackMediaType = "audio";
            this._useAudioElement = !0;
            this._volume = 100;
            this._source = new al(a, !0);
            this._source.once(sb.RECEIVE_TRACK_BUFFER, () => {
                this.emit(sd.FIRST_FRAME_DECODED)
            })
        }

        get isPlaying() {
            return this._useAudioElement ? ib.isPlaying(this.getTrackId()) : this._source.isPlayed
        }

        setAudioFrameCallback(a, b = 4096) {
            if (!a) return this._source.removeAllListeners(sb.ON_AUDIO_BUFFER),
                void this._source.stopGetAudioBuffer();
            this._source.startGetAudioBuffer(b);
            this._source.removeAllListeners(sb.ON_AUDIO_BUFFER);
            this._source.on(sb.ON_AUDIO_BUFFER, b => a(b))
        }

        setVolume(a) {
            let b = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.REMOTE_AUDIO_SET_VOLUME,
                options: [this.getTrackId(), a]
            }, 300);
            this._volume = a;
            this._useAudioElement ? ib.setVolume(this.getTrackId(), a) : this._source.setVolume(a / 100);
            b.onSuccess()
        }

        async setPlaybackDevice(a) {
            let b = u.reportApiInvoke(null, {
                tag: D.TRACER, name: y.REMOTE_AUDIO_SET_OUTPUT_DEVICE,
                options: [this.getTrackId(), a]
            });
            if (!this._useAudioElement) throw new p(n.NOT_SUPPORTED, "your browser does not support setting the audio output device");
            try {
                await ib.setSinkID(this.getTrackId(), a)
            } catch (c) {
                throw b.onError(c), c;
            }
            b.onSuccess()
        }

        getVolumeLevel() {
            return this._source.getAudioLevel()
        }

        getStats() {
            cd(() => {
                k.warning("[deprecated] RemoteAudioTrack.getStats will be removed in the future, use AgoraRTCClient.getRemoteAudioStats instead")
            }, "remoteAudioTrackGetStatsWarning");
            return cc(this, G.GET_STATS) ||
                rf({}, gg)
        }

        play() {
            let a = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.REMOTE_AUDIO_TRACK_PLAY,
                options: [this.getTrackId()]
            });
            k.debug("[".concat(this.getTrackId(), "] start audio playback"));
            this._useAudioElement ? (k.debug("[track-".concat(this.getTrackId(), "] use audio element to play")), ib.play(this._mediaStreamTrack, this.getTrackId(), this._volume)) : this._source.play();
            a.onSuccess()
        }

        stop() {
            let a = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.REMOTE_AUDIO_TRACK_STOP,
                options: [this.getTrackId()]
            });
            k.debug("[".concat(this.getTrackId(),
                "] stop audio playback"));
            this._useAudioElement ? ib.stop(this.getTrackId()) : this._source.stop();
            a.onSuccess()
        }

        _destroy() {
            super._destroy();
            this._source.destroy()
        }

        _isFreeze() {
            return this._source.isFreeze
        }

        _updatePlayerSource() {
            k.debug("[track-".concat(this.getTrackId(), "] update player source track"));
            this._source.updateTrack(this._mediaStreamTrack);
            this._useAudioElement && ib.updateTrack(this.getTrackId(), this._mediaStreamTrack)
        }
    }

    class Qp extends xl {
        constructor(a, b, c, e) {
            super(c, a.uid);
            this.type = "sub";
            this.unusedTracks = [];
            this.onTrack = a => {
                var b, c;
                if ("audio" === a.kind && !this.subscribeOptions.audio || "video" === a.kind && !this.subscribeOptions.video) return this.unusedTracks.push(a), void k.debug(m(c = "[".concat(this.connectionId, "] unused ontrack event, kind: ")).call(c, a.kind));
                k.debug(m(b = "[".concat(this.connectionId, "] emit pc ontrack after subscribe ")).call(b, a.kind), a);
                b = "audio" === a.kind ? this.user._audioTrack : this.user._videoTrack;
                var e, g;
                b ? b._updateOriginMediaStreamTrack(a) : "audio" === a.kind ? (this.pc._statsFilter.setIsFirstAudioDecoded(!1),
                    this.user._audioTrack = new zd(a, this.getUserId(), this.user._uintid), k.info(m(e = "[".concat(this.connectionId, "] create remote audio track: ")).call(e, this.user._audioTrack.getTrackId())), this.bindTrackEvents(this.user._audioTrack)) : (this.user._videoTrack = new yd(a, this.getUserId(), this.user._uintid), k.info(m(g = "[".concat(this.connectionId, "] create remote video track: ")).call(g, this.user._videoTrack.getTrackId())), this.bindTrackEvents(this.user._videoTrack))
            };
            this.handleGetRemoteAudioStats = a => {
                a(this.statsCollector.getRemoteAudioTrackStats(this.connectionId))
            };
            this.handleGetRemoteVideoStats = a => {
                a(this.statsCollector.getRemoteVideoTrackStats(this.connectionId))
            };
            this.handleGetSessionID = a => {
                a(this.joinInfo.sid)
            };
            this.user = a;
            this.statsCollector = b;
            this.statsCollector.addRemoteConnection(this);
            this.subscribeOptions = e
        }

        async startP2PConnection() {
            return new z(async (a, b) => {
                let c = e => {
                    if ("connected" === e && (u.subscribe(this.joinInfo.sid, {
                        lts: this.startTime,
                        succ: !0,
                        video: this.subscribeOptions.video,
                        audio: this.subscribeOptions.audio,
                        peerid: this.user.uid,
                        ec: null,
                        subscribeRequestid: this.ID,
                        p2pid: this.pc.ID
                    }), this.off(H.CONNECTION_STATE_CHANGE, c), a()), "disconnected" === e) {
                        if (this.off(H.CONNECTION_STATE_CHANGE, c), this.disconnectedReason) return b(this.disconnectedReason);
                        b(new p(n.OPERATION_ABORTED, "subscribe abort"))
                    }
                };
                if (this.on(H.CONNECTION_STATE_CHANGE, c), this.disconnectedReason = void 0, this.connectionState = "connecting", this.startTime = x(), !this.subscribeOptions) return void b(new p(n.UNEXPECTED_ERROR, "no subscribe options"));
                let e = new MediaStream, g = new z(a => {
                    this.pc.onTrack = (b, c) => {
                        var g,
                            h;
                        if ("audio" === b.kind && !this.subscribeOptions.audio || "video" === b.kind && !this.subscribeOptions.video) return this.unusedTracks.push(b), void k.debug(m(h = "[".concat(this.connectionId, "] unused ontrack event ")).call(h, b.kind));
                        e.addTrack(b);
                        h = {audio: 0 < e.getAudioTracks().length, video: 0 < e.getVideoTracks().length};
                        k.debug(m(g = "[".concat(this.connectionId, "] subscribe ontrack: ")).call(g, b.kind), c, b);
                        a:{
                            b = this.subscribeOptions;
                            var l, q;
                            c = pd(l = aa(h)).call(l);
                            l = pd(q = aa(b)).call(q);
                            for (q = 0; q < c.length; q += 1) {
                                if (c[q] !==
                                    l[q]) {
                                    h = !1;
                                    break a
                                }
                                if (h[c[q]] !== b[c[q]]) {
                                    h = !1;
                                    break a
                                }
                            }
                            h = !0
                        }
                        h && (this.pc.onTrack = this.onTrack, k.debug("[".concat(this.connectionId, "] get all subscribed tracks")), a(e))
                    }
                });
                try {
                    let a = function (a) {
                        return ca().name !== Y.FIREFOX ? a : a.replace("/recvonly http://www.webrtc.org/experiments/rtp-hdrext/playout-delay", " http://www.webrtc.org/experiments/rtp-hdrext/playout-delay")
                    }(ni(await this.pc.createOfferSDP()));
                    await this.pc.setOfferSDP(a);
                    k.debug("[".concat(this.connectionId, "] create and set offer success"));
                    let b = await za(this, H.NEED_ANSWER, {
                        messageType: "OFFER",
                        sdp: a,
                        offererSessionId: 104,
                        retry: !0
                    });
                    await this.pc.setAnswerSDP(ni(b.sdp));
                    k.debug("[".concat(this.connectionId, "] set answer success"));
                    let c = await z.all([g, this.icePromise]), e = c[0].getAudioTracks()[0],
                        n = c[0].getVideoTracks()[0];
                    var h, l;
                    e && (this.user._audioTrack ? this.user._audioTrack._updateOriginMediaStreamTrack(e) : (this.user._audioTrack = new zd(e, this.getUserId(), this.user._uintid), k.info(m(h = "[".concat(this.connectionId, "] create remote audio track: ")).call(h,
                        this.user._audioTrack.getTrackId())), this.bindTrackEvents(this.user._audioTrack)));
                    n && (this.user._videoTrack ? this.user._videoTrack._updateOriginMediaStreamTrack(n) : (this.user._videoTrack = new yd(n, this.getUserId(), this.user._uintid), k.info(m(l = "[".concat(this.connectionId, "] create remote video track: ")).call(l, this.user._videoTrack.getTrackId())), this.bindTrackEvents(this.user._videoTrack)));
                    this.connectionState = "connected";
                    this.startUploadStats()
                } catch (q) {
                    this.off(H.CONNECTION_STATE_CHANGE, c), this.connectionState =
                        "disconnected", u.subscribe(this.joinInfo.sid, {
                        lts: this.startTime,
                        succ: !1,
                        video: this.subscribeOptions.video,
                        audio: this.subscribeOptions.audio,
                        peerid: this.user.uid,
                        ec: q.code,
                        subscribeRequestid: this.ID,
                        p2pid: this.pc.ID
                    }), b(q)
                }
            })
        }

        async closeP2PConnection(a) {
            "disconnected" !== this.connectionState && (this.stopUploadStats(), this.statsCollector.removeConnection(this.connectionId), this.connectionState = "disconnected", await this.setSubscribeOptions({
                audio: !1,
                video: !1
            }), await this.closePC(a), this.removeAllListeners())
        }

        getNetworkQuality() {
            var a =
                this.pc.getStats();
            if (!a.audioRecv[0] && !a.videoRecv[0]) return 1;
            var b = cc(this, H.NEED_SIGNAL_RTT), c = a.rtt;
            b = (c && b ? (c + b) / 2 : c || b) || 0;
            c = a.audioRecv[0] ? a.audioRecv[0].jitterMs : void 0;
            a = a.recvPacketLossRate;
            let e = 70 * a / 50 + .3 * b / 1500;
            c && (e = 60 * a / 50 + .2 * b / 1500 + .2 * c / 400);
            return .1 > e ? 1 : .17 > e ? 2 : .36 > e ? 3 : .59 > e ? 4 : 5
        }

        uploadStats(a) {
            let b = this.user.audioTrack ? function (a, b) {
                const c = a.audioRecv[0];
                if (!c) return null;
                a = {
                    id: ta(10, ""),
                    timestamp: (new Date(a.timestamp)).toISOString(),
                    mediaType: "audio",
                    type: "ssrc",
                    ssrc: c.ssrc.toString()
                };
                return a.bytesReceived = c.bytes.toString(), a.packetsLost = c.packetsLost.toString(), a.packetsReceived = c.packets.toString(), c.outputLevel ? a.A_aol = Math.round(100 * c.outputLevel).toString() : a.A_aol = Math.round(100 * b._source.getAudioAvgLevel()).toString(), a.A_apol = Math.round(100 * b._source.getAudioAvgLevel()).toString(), b && (a.A_artd = b._originMediaStreamTrack.enabled && b._mediaStreamTrack.enabled ? "0" : "1"), a.A_jr = c.jitterMs.toString(), a.A_jbm = Math.floor(c.jitterBufferMs).toString(), a.A_cdm = Math.floor(c.jitterBufferMs).toString(),
                    a
            }(a, this.user.audioTrack) : void 0, c = this.user.videoTrack ? function (a, b) {
                const c = a.videoRecv[0];
                if (!c) return null;
                a = {
                    id: ta(10, ""),
                    timestamp: (new Date(a.timestamp)).toISOString(),
                    mediaType: "video",
                    type: "ssrc",
                    ssrc: c.ssrc.toString()
                };
                var e;
                return a.bytesReceived = c.bytes.toString(), a.packetsLost = c.packetsLost.toString(), a.packetsReceived = c.packets.toString(), c.framesRateFirefox && (a.A_frr = c.framesRateFirefox.toString()), c.receivedFrame && (a.A_frr = c.receivedFrame.frameRate.toString()), a.A_frd = c.decodeFrameRate.toString(),
                c.outputFrame && (a.A_fro = c.outputFrame.frameRate.toString()), void 0 !== c.jitterBufferMs && (a.A_jbm = Math.floor(c.jitterBufferMs).toString()), void 0 !== c.currentDelayMs && (a.A_cdm = Math.floor(c.currentDelayMs).toString()), a.A_fs = c.firsCount.toString(), a.A_ns = c.nacksCount.toString(), a.A_ps = c.plisCount.toString(), b && (a.A_vrtd = b._originMediaStreamTrack.enabled && b._mediaStreamTrack.enabled ? "0" : "1"), b._player && 0 < b._player.freezeTimeCounterList.length && (a.A_vrft = Oa(e = b._player.freezeTimeCounterList).call(e, 0, 1)[0].toString()),
                    a
            }(a, this.user.videoTrack) : void 0;
            b && Va(() => this.emit(H.NEED_UPLOAD, rb.SUBSCRIBE_STATS, b));
            c && Va(() => this.emit(H.NEED_UPLOAD, rb.SUBSCRIBE_STATS, c))
        }

        uploadSlowStats(a) {
        }

        uploadRelatedStats(a, b) {
            let c = !0 === this.pc._statsFilter.videoIsReady, e = function (a, b, c) {
                a = a.audioRecv[0];
                if (!a) return null;
                c = wd.isRemoteAudioFreeze(c);
                return {
                    mediaType: "audio",
                    isAudioMute: !1,
                    peerId: b,
                    googJitterReceived: a.jitterMs.toString(),
                    isFreeze: c,
                    bytesReceived: a.bytes.toString(),
                    packetsReceived: a.packets.toString(),
                    packetsLost: a.packetsLost.toString(),
                    frameReceived: a.receivedFrames.toString(),
                    frameDropped: a.droppedFrames.toString()
                }
            }(a, this.getUserId(), this.user.audioTrack), g = function (a, b, c, e, g) {
                b = b.videoRecv[0];
                if (!b) return null;
                a = wd.isRemoteVideoFreeze(g, b, e ? e.videoRecv[0] : void 0) && a;
                c = {
                    mediaType: "video",
                    isVideoMute: !1,
                    peerId: c,
                    frameRateReceived: b.receivedFrame && b.receivedFrame.frameRate.toString(),
                    frameRateDecoded: b.decodedFrame && b.decodedFrame.frameRate.toString(),
                    isFreeze: a,
                    bytesReceived: b.bytes.toString(),
                    packetsReceived: b.packets.toString(),
                    packetsLost: b.packetsLost.toString()
                };
                return b.framesRateFirefox && (c.frameRateDecoded = b.framesRateFirefox.toString(), c.frameRateReceived = b.framesRateFirefox.toString()), c
            }(c, a, this.getUserId(), b, this.user.videoTrack);
            e && Va(() => {
                this.emit(H.NEED_UPLOAD, rb.SUBSCRIBE_RELATED_STATS, e)
            });
            g && Va(() => {
                this.emit(H.NEED_UPLOAD, rb.SUBSCRIBE_RELATED_STATS, g)
            })
        }

        emitOnTrackFromUnusedTracks() {
            if (this.subscribeOptions) {
                var a = this.subscribeOptions.video;
                if (this.subscribeOptions.audio) {
                    var b;
                    let a = S(b = this.unusedTracks).call(b,
                        a => "audio" === a.kind && "live" === a.readyState);
                    bc(this.unusedTracks, a);
                    a && this.onTrack(a)
                }
                if (a) {
                    var c;
                    a = S(c = this.unusedTracks).call(c, a => "video" === a.kind && "live" === a.readyState);
                    bc(this.unusedTracks, a);
                    a && this.onTrack(a)
                }
            }
        }

        async setSubscribeOptions(a) {
            var b, c, e, g;
            if (a.audio !== this.subscribeOptions.audio || a.video !== this.subscribeOptions.video) {
                if ("connecting" === this.connectionState) try {
                    await this.createWaitConnectionConnectedPromise()
                } catch (h) {
                    throw new p(n.OPERATION_ABORTED, "can not update subscribe options, operation abort");
                }
                a.audio === this.subscribeOptions.audio && a.video === this.subscribeOptions.video || (k.debug(m(b = m(c = m(e = m(g = "[".concat(this.connectionId, "] update subscribe options [a: ")).call(g, this.subscribeOptions.audio, ", v: ")).call(e, this.subscribeOptions.video, "] -> [a: ")).call(c, a.audio, ", v: ")).call(b, a.video, "]")), this.subscribeOptions = a, !a.audio && this.user._audioTrack && (this.unusedTracks.push(this.user._audioTrack._originMediaStreamTrack), this.user._audioTrack._destroy(), this.unbindTrackEvents(this.user._audioTrack),
                    this.user._audioTrack = void 0), !a.video && this.user._videoTrack && (this.unusedTracks.push(this.user._videoTrack._originMediaStreamTrack), this.user._videoTrack._destroy(), this.unbindTrackEvents(this.user._videoTrack), this.user._videoTrack = void 0), this.emitOnTrackFromUnusedTracks())
            }
        }

        createPC() {
            this.pc = new vl({turnServer: this.joinInfo.turnServer});
            this.pc.onFirstAudioDecoded = () => {
                this.user.audioTrack && this.user.audioTrack.emit(sd.FIRST_FRAME_DECODED);
                u.firstRemoteFrame(this.joinInfo.sid, Fa.FIRST_AUDIO_DECODE,
                    oa.FIRST_AUDIO_DECODE, {
                        peer: this.user._uintid,
                        subscribeElapse: x() - this.startTime,
                        subscribeRequestid: this.ID,
                        p2pid: this.pc.ID
                    })
            };
            this.pc.onFirstAudioReceived = () => {
                u.firstRemoteFrame(this.joinInfo.sid, Fa.FIRST_AUDIO_RECEIVED, oa.FIRST_AUDIO_RECEIVED, {
                    peer: this.user._uintid,
                    subscribeElapse: x() - this.startTime,
                    subscribeRequestid: this.ID,
                    p2pid: this.pc.ID
                })
            };
            this.pc.onFirstVideoDecoded = (a, b) => {
                u.firstRemoteFrame(this.joinInfo.sid, Fa.FIRST_VIDEO_DECODE, oa.FIRST_VIDEO_DECODE, {
                    peer: this.user._uintid,
                    videowidth: a,
                    videoheight: b,
                    subscribeElapse: x() - this.startTime,
                    subscribeRequestid: this.ID,
                    p2pid: this.pc.ID
                })
            };
            this.pc.onFirstVideoReceived = () => {
                u.firstRemoteFrame(this.joinInfo.sid, Fa.FIRST_VIDEO_RECEIVED, oa.FIRST_VIDEO_RECEIVED, {
                    peer: this.user._uintid,
                    subscribeElapse: x() - this.startTime,
                    subscribeRequestid: this.ID,
                    p2pid: this.pc.ID
                })
            };
            this.updateICEPromise()
        }

        async closePC(a) {
            return (this.pc.audioTrack && this.pc.audioTrack.stop(), this.pc.videoTrack && this.pc.videoTrack.stop(), this.pc.onTrack = void 0, this.pc.onICEConnectionStateChange =
                void 0, this.pc.close(), a) ? !1 : await za(this, H.NEED_UNSUB)
        }

        onPCDisconnected(a) {
            u.subscribe(this.joinInfo.sid, {
                lts: this.startTime,
                succ: !1,
                video: this.subscribeOptions.video,
                audio: this.subscribeOptions.audio,
                peerid: this.user.uid,
                ec: a.code,
                subscribeRequestid: this.ID,
                p2pid: this.pc.ID
            })
        }

        bindTrackEvents(a) {
            a instanceof zd ? a.addListener(G.GET_STATS, this.handleGetRemoteAudioStats) : a instanceof yd && a.addListener(G.GET_STATS, this.handleGetRemoteVideoStats)
        }

        unbindTrackEvents(a) {
            a instanceof zd ? a.off(G.GET_STATS,
                this.handleGetRemoteAudioStats) : a instanceof yd && a.off(G.GET_STATS, this.handleGetRemoteVideoStats)
        }
    }

    class Rp extends Ma {
        constructor(a, b, c, e) {
            super();
            this.reconnectMode = "retry";
            this.commandReqId = this.reqId = 0;
            this.handleWebSocketOpen = () => {
                this.reconnectMode = "retry";
                this.startPingPong()
            };
            this.handleWebSocketMessage = a => {
                if (a.data) {
                    a = JSON.parse(a.data);
                    var b;
                    a.requestId ? this.emit(m(b = "@".concat(a.requestId, "-")).call(b, a.sid), a) : this.serviceMode === ra.INJECT ? this.emit(tb.INJECT_STREAM_STATUS, a) : (u.workerEvent(this.spec.sid,
                        {
                            actionType: "status",
                            serverCode: a.code,
                            workerType: this.serviceMode === ra.TRANSCODE ? 1 : 2
                        }), this.emit(tb.PUBLISH_STREAM_STATUS, a))
                }
            };
            this.spec = b;
            this.token = a;
            this.serviceMode = e;
            this.websocket = new Bg("live-streaming", c);
            this.websocket.on(Z.CONNECTED, this.handleWebSocketOpen);
            this.websocket.on(Z.ON_MESSAGE, this.handleWebSocketMessage);
            this.websocket.on(Z.REQUEST_NEW_URLS, (a, b) => {
                za(this, tb.REQUEST_NEW_ADDRESS).then(a).catch(b)
            });
            this.websocket.on(Z.RECONNECTING, () => {
                this.websocket.reconnectMode = this.reconnectMode
            })
        }

        init(a) {
            return this.websocket.init(a)
        }

        async request(a,
                      b, c, e) {
            this.reqId += 1;
            "request" === a && (this.commandReqId += 1);
            let g = this.commandReqId, h = this.reqId;
            if (!h || !this.websocket) throw new p(n.UNEXPECTED_ERROR);
            var k = sf({
                command: a,
                sdkVersion: "4.6.3" === Za ? "0.0.1" : Za,
                seq: h,
                requestId: h,
                allocate: c,
                cname: this.spec.cname,
                appId: this.spec.appId,
                sid: this.spec.sid,
                uid: this.spec.uid.toString(),
                ts: Math.floor(x() / 1E3)
            }, b);
            if ("closed" === this.websocket.state) throw new p(n.WS_DISCONNECT);
            let q = () => new z((a, b) => {
                this.websocket.once(Z.CLOSED, () => b(new p(n.WS_ABORT)));
                this.websocket.once(Z.CONNECTED,
                    a)
            });
            "connected" !== this.websocket.state && await q();
            k.clientRequest && (k.clientRequest.workerToken = this.token);
            let t = new z((a, b) => {
                var c;
                const e = () => {
                    b(new p(n.WS_ABORT))
                };
                this.websocket.once(Z.RECONNECTING, e);
                this.websocket.once(Z.CLOSED, e);
                this.once(m(c = "@".concat(h, "-")).call(c, this.spec.sid), b => {
                    a(b)
                })
            });
            e && u.workerEvent(this.spec.sid, sf({}, e, {
                requestId: g,
                actionType: "request",
                payload: w(b.clientRequest),
                serverCode: 0,
                code: 0
            }));
            let r = x();
            this.websocket.sendMessage(k);
            k = null;
            try {
                k = await t
            } catch (F) {
                if ("closed" ===
                    this.websocket.state) throw F;
                return await q(), await this.request(a, b, c)
            }
            return e && u.workerEvent(this.spec.sid, sf({}, e, {
                requestId: g,
                actionType: "response",
                payload: w(k.serverResponse),
                serverCode: k.code,
                success: 200 === k.code,
                responseTime: x() - r
            })), 200 !== k.code && this.handleResponseError(k), k
        }

        tryNextAddress() {
            this.reconnectMode = "tryNext";
            this.websocket.reconnect("tryNext")
        }

        close() {
            let a = "4.6.3" === Za ? "0.0.1" : Za;
            this.reqId += 1;
            "connected" === this.websocket.state ? (this.websocket.sendMessage({
                command: "request",
                appId: this.spec.appId,
                cname: this.spec.cname,
                uid: this.spec.uid.toString(),
                sdkVersion: a,
                sid: this.spec.sid,
                seq: this.reqId,
                ts: Math.floor(x() / 1E3),
                requestId: this.reqId,
                clientRequest: {command: "DestroyWorker"}
            }), this.websocket.close(!1, !0)) : this.websocket.close(!1);
            this.pingpongTimer && (window.clearInterval(this.pingpongTimer), this.pingpongTimer = void 0)
        }

        handleResponseError(a) {
            switch (a.code) {
                case ja.LIVE_STREAM_RESPONSE_ALREADY_EXISTS_STREAM:
                    return void k.warning("live stream response already exists stream");
                case ja.LIVE_STREAM_RESPONSE_TRANSCODING_PARAMETER_ERROR:
                case ja.LIVE_STREAM_RESPONSE_BAD_STREAM:
                case ja.LIVE_STREAM_RESPONSE_WM_PARAMETER_ERROR:
                    return (new p(n.LIVE_STREAMING_INVALID_ARGUMENT, "", {code: a.code})).throw();
                case ja.LIVE_STREAM_RESPONSE_WM_WORKER_NOT_EXIST:
                    if ("UnpublishStream" === a.serverResponse.command || "UninjectStream" === a.serverResponse.command) break;
                    throw new p(n.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "live stream response wm worker not exist", {retry: !0});
                case ja.LIVE_STREAM_RESPONSE_NOT_AUTHORIZED:
                    return (new p(n.LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED,
                        "", {code: a.code})).throw();
                case ja.LIVE_STREAM_RESPONSE_FAILED_LOAD_IMAGE:
                    var b = new p(n.LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE);
                    return this.emit(tb.WARNING, b, a.serverResponse.url);
                case ja.LIVE_STREAM_RESPONSE_REQUEST_TOO_OFTEN:
                    return b = new p(n.LIVE_STREAMING_WARN_FREQUENT_REQUEST), this.emit(tb.WARNING, b, a.serverResponse.url);
                case ja.LIVE_STREAM_RESPONSE_NOT_FOUND_PUBLISH:
                    throw new p(n.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "live stream response wm worker not exist", {retry: !0});
                case ja.LIVE_STREAM_RESPONSE_NOT_SUPPORTED:
                    return (new p(n.LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED,
                        "", {code: a.code})).throw();
                case ja.LIVE_STREAM_RESPONSE_MAX_STREAM_NUM:
                    return b = new p(n.LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT), this.emit(tb.WARNING, b, a.serverResponse.url);
                case ja.LIVE_STREAM_RESPONSE_INTERNAL_SERVER_ERROR:
                    return (new p(n.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "", {code: a.code})).throw();
                case ja.LIVE_STREAM_RESPONSE_RESOURCE_LIMIT:
                    throw new p(n.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "live stream resource limit", {
                        retry: !0,
                        changeAddress: !0
                    });
                case ja.LIVE_STREAM_RESPONSE_WORKER_LOST:
                case ja.LIVE_STREAM_RESPONSE_WORKER_QUIT:
                    if ("UnpublishStream" ===
                        a.serverResponse.command || "UninjectStream" === a.serverResponse.command) break;
                    throw new p(n.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "error fail send message", {
                        retry: !0,
                        changeAddress: !0
                    });
                case ja.ERROR_FAIL_SEND_MESSAGE:
                    if ("UnpublishStream" === a.serverResponse.command || "UninjectStream" === a.serverResponse.command) break;
                    if ("UpdateTranscoding" === a.serverResponse.command || "ControlStream" === a.serverResponse.command) return (new p(n.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "error fail send message", {code: a.code})).throw();
                    throw new p(n.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "error fail send message", {
                        retry: !0,
                        changeAddress: !0
                    });
                case ja.PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN:
                case ja.PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT:
                case ja.PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE:
                case ja.PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH:
                    return (new p(n.LIVE_STREAMING_CDN_ERROR, "", {code: a.code})).throw()
            }
        }

        startPingPong() {
            this.pingpongTimer && window.clearInterval(this.pingpongTimer);
            this.pingpongTimer = window.setInterval(() => {
                "connected" ===
                this.websocket.state && this.request("ping", {}).catch(Rd)
            }, 6E3)
        }
    }

    class Sp extends Ma {
        constructor(a, b = La, c = La) {
            super();
            this.retryTimeout = 1E4;
            this.streamingTasks = new ha;
            this.isStartingStreamingTask = !1;
            this.taskMutex = new Sb("live-streaming");
            this.cancelToken = Bb.CancelToken.source();
            this.injectConfig = Xb({}, Jo);
            this.injectLoopTimes = 0;
            this.lastTaskId = 1;
            this.statusError = new ha;
            this.spec = a;
            this.httpRetryConfig = c;
            this.wsRetryConfig = b
        }

        async setTranscodingConfig(a) {
            var b;
            let c = Xb({}, Io, {}, a);
            var e, g;
            66 !== c.videoCodecProfile &&
            77 !== c.videoCodecProfile && 100 !== c.videoCodecProfile && (k.debug(m(e = "[".concat(this.spec.clientId, "] set transcoding config, fix video codec profile: ")).call(e, c.videoCodecProfile, " -> 100")), c.videoCodecProfile = 100);
            (c.transcodingUsers || (c.transcodingUsers = c.userConfigs), c.transcodingUsers) && (c.transcodingUsers = B(g = c.transcodingUsers).call(g, a => Xb({}, Ho, {}, a, {zOrder: a.zOrder ? a.zOrder + 1 : 1})));
            !function (a) {
                var b, c;
                null == a.width || ba(a.width, "config.width", 0, 1E4);
                null == a.height || ba(a.height, "config.height",
                    0, 1E4);
                null == a.videoBitrate || ba(a.videoBitrate, "config.videoBitrate", 1, 1E6);
                null == a.videoFrameRate || ba(a.videoFrameRate, "config.videoFrameRate");
                null == a.lowLatency || Ld(a.lowLatency, "config.lowLatency");
                null == a.audioSampleRate || Ra(a.audioSampleRate, "config.audioSampleRate", [32E3, 44100, 48E3]);
                null == a.audioBitrate || ba(a.audioBitrate, "config.audioBitrate", 1, 128);
                null == a.audioChannels || Ra(a.audioChannels, "config.audioChannels", [1, 2, 3, 4, 5]);
                null == a.videoGop || ba(a.videoGop, "config.videoGop");
                null == a.videoCodecProfile ||
                Ra(a.videoCodecProfile, "config.videoCodecProfile", [66, 77, 100]);
                null == a.userCount || ba(a.userCount, "config.userCount", 0, 17);
                null == a.backgroundColor || ba(a.backgroundColor, "config.backgroundColor", 0, 16777215);
                null == a.userConfigExtraInfo || Ea(a.userConfigExtraInfo, "config.userConfigExtraInfo", 0, 4096, !1);
                a.transcodingUsers && null != a.transcodingUsers && (Re(a.transcodingUsers, "config.transcodingUsers"), r(b = a.transcodingUsers).call(b, (a, b) => {
                    Te(a.uid);
                    null == a.x || ba(a.x, "transcodingUser[".concat(b, "].x"), 0, 1E4);
                    null == a.y || ba(a.y, "transcodingUser[".concat(b, "].y"), 0, 1E4);
                    null == a.width || ba(a.width, "transcodingUser[".concat(b, "].width"), 0, 1E4);
                    null == a.height || ba(a.height, "transcodingUser[".concat(b, "].height"), 0, 1E4);
                    null == a.zOrder || ba(a.zOrder - 1, "transcodingUser[".concat(b, "].zOrder"), 0, 100);
                    null == a.alpha || ba(a.alpha, "transcodingUser[".concat(b, "].alpha"), 0, 1, !1)
                }));
                null == a.watermark || Ue(a.watermark, "watermark");
                null == a.backgroundImage || Ue(a.backgroundImage, "backgroundImage");
                a.images && null != a.images && (Re(a.images,
                    "config.images"), r(c = a.images).call(c, (a, b) => {
                    Ue(a, "images[".concat(b, "]"))
                }))
            }(c);
            a = [];
            var h, l;
            c.images && a.push(...B(h = c.images).call(h, a => Xb({}, ig, {}, a, {zOrder: 255})));
            (c.backgroundImage && (a.push(Xb({}, ig, {}, c.backgroundImage, {zOrder: 0})), delete c.backgroundImage), c.watermark && (a.push(Xb({}, ig, {}, c.watermark, {zOrder: 255})), delete c.watermark), c.images = a, c.transcodingUsers) && (c.userConfigs = B(l = c.transcodingUsers).call(l, a => Xb({}, a)), c.userCount = c.transcodingUsers.length, delete c.transcodingUsers);
            h = B(b = c.userConfigs || []).call(b, a => "number" == typeof a.uid ? z.resolve(a.uid) : jf(a.uid, this.spec, this.cancelToken.token, this.httpRetryConfig));
            b = await z.all(h);
            if (r(b).call(b, (a, b) => {
                c.userConfigs && c.userConfigs[b] && (c.userConfigs[b].uid = a)
            }), this.transcodingConfig = c, this.connection) try {
                var n, t, p;
                let a = await this.connection.request("request", {
                    clientRequest: {
                        command: "UpdateTranscoding",
                        transcodingConfig: this.transcodingConfig
                    }
                }, !1, {
                    command: "UpdateTranscoding", workerType: 1, requestByUser: !0, tid: B(n = vb(oc(t =
                        this.streamingTasks).call(t))).call(n, a => a.taskId).join("#")
                });
                k.debug(m(p = "[".concat(this.spec.clientId, "] update live transcoding config success, code: ")).call(p, a.code, ", config:"), w(this.transcodingConfig))
            } catch (C) {
                var F;
                if (!C.data || !C.data.retry) throw C;
                C.data.changeAddress && this.connection.tryNextAddress();
                r(F = this.streamingTasks).call(F, a => {
                    k.warning("[".concat(this.spec.clientId, "] live streaming receive error"), C.toString(), "try to republish", a.url);
                    this.startLiveStreamingTask(a.url, a.mode,
                        C).then(() => {
                        var b;
                        k.debug(m(b = "[".concat(this.spec.clientId, "] live streaming republish ")).call(b, a.url, " success"))
                    }).catch(b => {
                        k.error("[".concat(this.spec.clientId, "] live streaming republish failed"), a.url, b.toString());
                        this.onLiveStreamError && this.onLiveStreamError(a.url, b)
                    })
                })
            }
        }

        setInjectStreamConfig(a, b) {
            this.injectConfig = Ia({}, this.injectConfig, a);
            this.injectLoopTimes = b
        }

        async startLiveStreamingTask(a, b, c) {
            var e, g, h, l;
            if (S(e = vb(oc(g = this.streamingTasks).call(g))).call(e, a => a.mode === ra.INJECT) &&
                b === ra.INJECT) return (new p(n.LIVE_STREAMING_TASK_CONFLICT, "inject stream over limit")).throw();
            if (!this.transcodingConfig && b === ra.TRANSCODE) throw new p(n.INVALID_OPERATION, "[LiveStreaming] no transcoding config found, can not start transcoding streaming task");
            e = {
                command: "PublishStream",
                ts: x(),
                url: a,
                uid: this.spec.uid.toString(),
                autoDestroyTime: 100,
                acceptImageTimeout: !0
            };
            k.debug(m(h = m(l = "[".concat(this.spec.clientId, "] start live streaming ")).call(l, a, ", mode: ")).call(h, b));
            h = await this.taskMutex.lock();
            if (!this.connection && c) return void h();
            if (this.streamingTasks.get(a) && !c) return h(), (new p(n.LIVE_STREAMING_TASK_CONFLICT)).throw();
            try {
                this.connection || (this.connection = await this.connect(b))
            } catch (t) {
                throw h(), t;
            }
            switch (b) {
                case ra.TRANSCODE:
                    e.transcodingConfig = Xb({}, this.transcodingConfig);
                    break;
                case ra.INJECT:
                    e = {
                        cname: this.spec.cname,
                        command: "InjectStream",
                        sid: this.spec.sid,
                        transcodingConfig: this.injectConfig,
                        ts: x(),
                        url: a,
                        loopTimes: this.injectLoopTimes
                    }
            }
            this.uapResponse && this.uapResponse.vid &&
            (e.vid = this.uapResponse.vid);
            this.isStartingStreamingTask = !0;
            l = this.lastTaskId++;
            try {
                var q;
                let g = new z((b, e) => {
                    Db(this.retryTimeout).then(() => {
                        if (c) return e(c);
                        const b = this.statusError.get(a);
                        return b ? (this.statusError.delete(a), e(b)) : void 0
                    })
                }), n = await z.race([this.connection.request("request", {clientRequest: e}, !0, {
                    url: a,
                    command: "PublishStream",
                    workerType: b === ra.TRANSCODE ? 1 : 2,
                    requestByUser: !c,
                    tid: l.toString()
                }), g]);
                this.isStartingStreamingTask = !1;
                k.debug(m(q = "[".concat(this.spec.clientId, "] live streaming started, code: ")).call(q,
                    n.code));
                this.streamingTasks.set(a, {clientRequest: e, mode: b, url: a, taskId: l});
                h()
            } catch (t) {
                if (h(), this.isStartingStreamingTask = !1, !t.data || !t.data.retry || c) throw t;
                return t.data.changeAddress ? (this.connection.tryNextAddress(), await this.startLiveStreamingTask(a, b, t)) : await this.startLiveStreamingTask(a, b, t)
            }
        }

        stopLiveStreamingTask(a) {
            return new z((b, c) => {
                let e = this.streamingTasks.get(a);
                if (!e || !this.connection) return (new p(n.UNEXPECTED_ERROR, "can not find streaming task to stop")).throw();
                let g = e.mode;
                e.abortTask = () => {
                    k.debug("[".concat(this.spec.clientId, "] stop live streaming success(worker exception)"));
                    this.streamingTasks.delete(a);
                    b()
                };
                this.connection.request("request", {
                    clientRequest: {
                        command: g === ra.INJECT ? "UninjectStream" : "UnpublishStream",
                        url: e.url
                    }
                }, !1, {
                    url: a,
                    command: "UnPublishStream",
                    workerType: g === ra.TRANSCODE ? 1 : 2,
                    requestByUser: !0,
                    tid: (this.lastTaskId++).toString()
                }).then(c => {
                    var e;
                    k.debug(m(e = "[".concat(this.spec.clientId, "] stop live streaming success, code: ")).call(e, c.code));
                    this.streamingTasks.delete(a);
                    0 === this.streamingTasks.size && g !== ra.INJECT && (this.connection && this.connection.close(), this.connection = void 0);
                    b();
                    g === ra.INJECT && this.onInjectStatusChange && this.onInjectStatusChange(5, this.spec.uid, a)
                }).catch(c)
            })
        }

        async controlInjectStream(a, b, c, e) {
            let g = this.streamingTasks.get(a);
            if (!g || !this.connection || g.mode !== ra.INJECT) throw new p(n.INVALID_OPERATION, "can not find inject stream task to control");
            return (await this.connection.request("request", {
                clientRequest: {
                    command: "ControlStream", url: a, control: b,
                    audioVolume: c, position: e
                }
            })).serverResponse
        }

        resetAllTask() {
            var a;
            let b = vb(oc(a = this.streamingTasks).call(a));
            this.terminate();
            for (let a of b) this.startLiveStreamingTask(a.url, a.mode).catch(b => {
                this.onLiveStreamError && this.onLiveStreamError(a.url, b)
            })
        }

        terminate() {
            this.cancelToken && this.cancelToken.cancel();
            this.streamingTasks = new ha;
            this.isStartingStreamingTask = !1;
            this.statusError = new ha;
            this.cancelToken = Bb.CancelToken.source();
            this.uapResponse = void 0;
            this.connection && this.connection.close();
            this.connection =
                void 0
        }

        async connect(a) {
            if (this.connection) throw new p(n.UNEXPECTED_ERROR, "live streaming connection has already connected");
            let b = await za(this, Nc.REQUEST_WORKER_MANAGER_LIST, a);
            return this.uapResponse = b, this.connection = new Rp(b.workerToken, this.spec, this.wsRetryConfig, a), this.connection.on(tb.WARNING, (a, b) => this.onLiveStreamWarning && this.onLiveStreamWarning(b, a)), this.connection.on(tb.PUBLISH_STREAM_STATUS, a => this.handlePublishStreamServer(a)), this.connection.on(tb.INJECT_STREAM_STATUS, a => this.handleInjectStreamServerStatus(a)),
                this.connection.on(tb.REQUEST_NEW_ADDRESS, (b, e) => {
                    if (!this.connection) return e(new p(n.UNEXPECTED_ERROR, "can not get new live streaming address list"));
                    za(this, Nc.REQUEST_WORKER_MANAGER_LIST, a).then(a => {
                        this.uapResponse = a;
                        b(a.addressList)
                    }).catch(e)
                }), await this.connection.init(b.addressList), this.connection
        }

        handlePublishStreamServer(a) {
            var b = a.serverStatus && a.serverStatus.url || "empty_url";
            let c = this.streamingTasks.get(b), e = a.reason;
            switch (a.code) {
                case ja.PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN:
                case ja.PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT:
                case ja.PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE:
                case ja.PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH:
                    a =
                        new p(n.LIVE_STREAMING_CDN_ERROR, "", {code: a.code});
                    if (c) return k.error(a.toString()), this.onLiveStreamError && this.onLiveStreamError(b, a);
                    if (!this.isStartingStreamingTask) break;
                    this.statusError.set(b, a);
                case ja.LIVE_STREAM_RESPONSE_FAILED_LOAD_IMAGE:
                    return a = new p(n.LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE, e), this.onLiveStreamWarning && this.onLiveStreamWarning(b, a);
                case ja.LIVE_STREAM_RESPONSE_WORKER_LOST:
                case ja.LIVE_STREAM_RESPONSE_WORKER_QUIT:
                    var g;
                    if (this.connection) {
                        this.connection.tryNextAddress();
                        b = vb(oc(g = this.streamingTasks).call(g));
                        for (let c of b) c.abortTask ? c.abortTask() : (k.warning("[".concat(this.spec.clientId, "] publish stream status code"), a.code, "try to republish", c.url), this.startLiveStreamingTask(c.url, c.mode, new p(n.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "", {code: a.code})).then(() => {
                            k.debug("[".concat(this.spec.clientId, "] republish live stream success"), c.url)
                        }).catch(a => {
                            k.error(a.toString());
                            this.onLiveStreamError && this.onLiveStreamError(c.url, a)
                        }))
                    }
            }
        }

        handleInjectStreamServerStatus(a) {
            let b =
                Number(a.uid), c = a.serverStatus && a.serverStatus.url;
            switch (a.code) {
                case 200:
                    return void (this.onInjectStatusChange && this.onInjectStatusChange(0, b, c));
                case 451:
                    return this.onInjectStatusChange && this.onInjectStatusChange(1, b, c), void this.streamingTasks.delete(c);
                case 453:
                    return this.onInjectStatusChange && this.onInjectStatusChange(2, b, c), void this.streamingTasks.delete(c);
                case 470:
                    return this.onInjectStatusChange && this.onInjectStatusChange(10, b, c), void this.streamingTasks.delete(c);
                case 499:
                    return this.onInjectStatusChange &&
                    this.onInjectStatusChange(3, b, c), void this.streamingTasks.delete(c);
                default:
                    return void k.debug("inject stream server status", a)
            }
        }

        hasUrl(a) {
            return this.streamingTasks.has(a)
        }
    }

    class wi {
        constructor() {
            this.destChannelMediaInfos = new ha
        }

        setSrcChannelInfo(a) {
            Fh(a);
            this.srcChannelMediaInfo = a
        }

        addDestChannelInfo(a) {
            Fh(a);
            this.destChannelMediaInfos.set(a.channelName, a)
        }

        removeDestChannelInfo(a) {
            Se(a);
            this.destChannelMediaInfos.delete(a)
        }

        getSrcChannelMediaInfo() {
            return this.srcChannelMediaInfo
        }

        getDestChannelMediaInfo() {
            return this.destChannelMediaInfos
        }
    }

    class Tp extends Ma {
        constructor(a, b, c) {
            super();
            this.requestId = 1;
            this.onOpen = () => {
                this.emit("open");
                this.startHeartBeatCheck()
            };
            this.onClose = a => {
                this.emit("close");
                this.dispose()
            };
            this.onMessage = a => {
                a = JSON.parse(a.data);
                if (!a || "serverResponse" !== a.command || !a.requestId) return a && "serverStatus" === a.command && a.serverStatus && a.serverStatus.command ? (this.emit("status", a.serverStatus), void this.emit(a.serverStatus.command, a.serverStatus)) : void 0;
                this.emit("req_".concat(a.requestId), a)
            };
            this.joinInfo = a;
            this.clientId = b;
            this.ws = new Bg("cross-channel-".concat(this.clientId), c);
            this.ws.on(Z.RECONNECTING, () => {
                this.ws.reconnectMode = "retry";
                this.emit("reconnecting")
            });
            this.ws.on(Z.CONNECTED, this.onOpen);
            this.ws.on(Z.ON_MESSAGE, this.onMessage);
            this.ws.on(Z.CLOSED, this.onClose)
        }

        isConnect() {
            return "connected" === this.ws.state
        }

        sendMessage(a) {
            let b = this.requestId++;
            return a.requestId = b, a.seq = b, this.ws.sendMessage(a), b
        }

        waitStatus(a) {
            return new z((b, c) => {
                let e = window.setTimeout(() => {
                        c(new p(n.TIMEOUT, "wait status timeout, status: ".concat(a)))
                    },
                    5E3);
                this.once(a, g => {
                    window.clearTimeout(e);
                    g.state && 0 !== g.state ? c(new p(n.CROSS_CHANNEL_WAIT_STATUS_ERROR, "wait status error, status: ".concat(a))) : b(void 0)
                });
                this.once("dispose", () => {
                    window.clearTimeout(e);
                    c(new p(n.WS_ABORT))
                })
            })
        }

        async request(a) {
            if ("closed" === this.ws.state) throw new p(n.WS_DISCONNECT);
            let b = () => new z((a, b) => {
                this.ws.once(Z.CLOSED, () => b(new p(n.WS_ABORT)));
                this.ws.once(Z.CONNECTED, a)
            });
            "connected" !== this.ws.state && await b();
            let c = this.sendMessage(a);
            a = await new z((a, b) => {
                const e =
                    () => {
                        b(new p(n.WS_ABORT))
                    };
                this.ws.once(Z.RECONNECTING, e);
                this.ws.once(Z.CLOSED, e);
                this.once("req_".concat(c), a);
                Db(3E3).then(() => {
                    this.removeAllListeners("req_".concat(c));
                    this.ws.off(Z.RECONNECTING, e);
                    this.ws.off(Z.CLOSED, e);
                    b(new p(n.TIMEOUT, "cross channel ws request timeout"))
                })
            });
            if (!a || 200 !== a.code) throw new p(n.CROSS_CHANNEL_SERVER_ERROR_RESPONSE, "response: ".concat(w(a)));
            return a
        }

        async connect(a) {
            this.ws.removeAllListeners(Z.REQUEST_NEW_URLS);
            this.ws.on(Z.REQUEST_NEW_URLS, b => {
                b(a)
            });
            await this.ws.init(a)
        }

        dispose() {
            this.clearHeartBeatCheck();
            this.emit("dispose");
            this.removeAllListeners();
            this.ws.close()
        }

        sendPing(a) {
            let b = this.requestId++;
            return a.requestId = b, this.ws.sendMessage(a), b
        }

        startHeartBeatCheck() {
            this.heartBeatTimer = window.setInterval(() => {
                this.sendPing({
                    command: "ping",
                    appId: this.joinInfo.appId,
                    cname: this.joinInfo.cname,
                    uid: this.joinInfo.uid.toString(),
                    sid: this.joinInfo.sid,
                    ts: +new Date,
                    requestId: 0
                })
            }, 3E3)
        }

        clearHeartBeatCheck() {
            window.clearInterval(this.heartBeatTimer);
            this.heartBeatTimer = void 0
        }
    }

    class Up extends Ma {
        constructor(a,
                    b, c, e) {
            super();
            this.cancelToken = Bb.CancelToken.source();
            this.requestId = 0;
            this._state = "RELAY_STATE_IDLE";
            this.errorCode = "RELAY_OK";
            this.onStatus = a => {
                var b;
                k.debug(m(b = "[".concat(this.clientId, "] ChannelMediaStatus: ")).call(b, w(a)));
                a && a.command && ("onAudioPacketReceived" === a.command && this.emit("event", "PACKET_RECEIVED_AUDIO_FROM_SRC"), "onVideoPacketReceived" === a.command && this.emit("event", "PACKET_RECEIVED_VIDEO_FROM_SRC"), "onSrcTokenPrivilegeDidExpire" === a.command && (this.errorCode = "SRC_TOKEN_EXPIRED",
                    this.state = "RELAY_STATE_FAILURE"), "onDestTokenPrivilegeDidExpire" === a.command && (this.errorCode = "DEST_TOKEN_EXPIRED", this.state = "RELAY_STATE_FAILURE"))
            };
            this.onReconnect = async () => {
                k.debug("[".concat(this.clientId, "] ChannelMediaSocket disconnect, reconnecting"));
                this.emit("event", "NETWORK_DISCONNECTED");
                this.state = "RELAY_STATE_IDLE";
                this.prevChannelMediaConfig && this.sendStartRelayMessage(this.prevChannelMediaConfig).catch(a => {
                    "RELAY_STATE_IDLE" !== this.state && (k.error("auto restart channel media relay failed",
                        a.toString()), this.errorCode = "SERVER_CONNECTION_LOST", this.state = "RELAY_STATE_FAILURE")
                })
            };
            this.joinInfo = a;
            this.clientId = b;
            this.signal = new Tp(this.joinInfo, this.clientId, c);
            this.httpRetryConfig = e
        }

        set state(a) {
            a !== this._state && ("RELAY_STATE_FAILURE" !== a && (this.errorCode = "RELAY_OK"), this.emit("state", a, this.errorCode), this._state = a)
        }

        get state() {
            return this._state
        }

        async startChannelMediaRelay(a) {
            if ("RELAY_STATE_IDLE" !== this.state) throw new p(n.INVALID_OPERATION);
            this.state = "RELAY_STATE_CONNECTING";
            await this.connect();
            k.debug("[".concat(this.clientId, "] startChannelMediaRelay: connect success"));
            try {
                await this.sendStartRelayMessage(a)
            } catch (b) {
                if (b.data && b.data.serverResponse && "SetSourceChannel" === b.data.serverResponse.command) throw new p(n.CROSS_CHANNEL_FAILED_JOIN_SRC);
                if (b.data && b.data.serverResponse && "SetDestChannelStatus" === b.serverResponse.command) throw new p(n.CROSS_CHANNEL_FAILED_JOIN_DEST);
                if (b.data && b.data.serverResponse && "StartPacketTransfer" === b.serverResponse.command) throw new p(n.CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST);
                throw b;
            }
            this.prevChannelMediaConfig = a
        }

        async updateChannelMediaRelay(a) {
            if ("RELAY_STATE_RUNNING" !== this.state) throw new p(n.INVALID_OPERATION);
            await this.sendUpdateMessage(a);
            this.prevChannelMediaConfig = a
        }

        async stopChannelMediaRelay() {
            await this.sendStopRelayMessage();
            k.debug("[".concat(this.clientId, "] stopChannelMediaRelay: send stop message success"));
            this.state = "RELAY_STATE_IDLE";
            this.dispose()
        }

        dispose() {
            k.debug("[".concat(this.clientId, "] disposeChannelMediaRelay"));
            this.cancelToken.cancel();
            this.cancelToken = Bb.CancelToken.source();
            this.state = "RELAY_STATE_IDLE";
            this.emit("dispose");
            this.signal.dispose();
            this.prevChannelMediaConfig = void 0
        }

        async connect() {
            let a = await mm(this.joinInfo, this.cancelToken.token, this.httpRetryConfig);
            this.workerToken = a.workerToken;
            await this.signal.connect(a.addressList);
            this.emit("event", "NETWORK_CONNECTED");
            this.signal.on("status", this.onStatus);
            this.signal.on("reconnecting", this.onReconnect)
        }

        async sendStartRelayMessage(a) {
            var b = this.genMessage(Ha.StopPacketTransfer);
            await this.signal.request(b);
            await this.signal.waitStatus("Normal Quit");
            k.debug("[".concat(this.clientId, "] startChannelMediaRelay: StopPacketTransfer success"));
            b = this.genMessage(Ha.SetSdkProfile, a);
            await this.signal.request(b);
            k.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetSdkProfile success"));
            b = this.genMessage(Ha.SetSourceChannel, a);
            await this.signal.request(b);
            await this.signal.waitStatus("SetSourceChannelStatus");
            this.emit("event", "PACKET_JOINED_SRC_CHANNEL");
            k.debug("[".concat(this.clientId,
                "] startChannelMediaRelay: SetSourceChannel success"));
            b = this.genMessage(Ha.SetSourceUserId, a);
            await this.signal.request(b);
            k.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetSourceUserId success"));
            b = this.genMessage(Ha.SetDestChannel, a);
            await this.signal.request(b);
            await this.signal.waitStatus("SetDestChannelStatus");
            this.emit("event", "PACKET_JOINED_DEST_CHANNEL");
            k.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetDestChannel success"));
            a = this.genMessage(Ha.StartPacketTransfer,
                a);
            await this.signal.request(a);
            this.emit("event", "PACKET_SENT_TO_DEST_CHANNEL");
            this.state = "RELAY_STATE_RUNNING";
            k.debug("[".concat(this.clientId, "] startChannelMediaRelay: StartPacketTransfer success"))
        }

        async sendUpdateMessage(a) {
            a = this.genMessage(Ha.UpdateDestChannel, a);
            await this.signal.request(a);
            this.emit("event", "PACKET_UPDATE_DEST_CHANNEL");
            k.debug("[".concat(this.clientId, "] sendUpdateMessage: UpdateDestChannel success"))
        }

        async sendStopRelayMessage() {
            let a = this.genMessage(Ha.StopPacketTransfer);
            await this.signal.request(a);
            k.debug("[".concat(this.clientId, "] sendStopRelayMessage: StopPacketTransfer success"))
        }

        genMessage(a, b) {
            let c = [], e = [], g = [];
            this.requestId += 1;
            let h = {
                appId: this.joinInfo.appId,
                cname: this.joinInfo.cname,
                uid: this.joinInfo.uid.toString(),
                sdkVersion: Za,
                sid: this.joinInfo.sid,
                ts: x(),
                requestId: this.requestId,
                seq: this.requestId,
                allocate: !0,
                clientRequest: {}
            };
            "4.6.3" === h.sdkVersion && (h.sdkVersion = "0.0.1");
            let k = null, m = null;
            switch (a) {
                case Ha.SetSdkProfile:
                    return h.clientRequest = {
                        command: "SetSdkProfile",
                        type: "multi_channel"
                    }, h;
                case Ha.SetSourceChannel:
                    if (m = b && b.getSrcChannelMediaInfo(), !m) throw new p(n.UNEXPECTED_ERROR, "can not find source config");
                    return h.clientRequest = {
                        command: "SetSourceChannel",
                        uid: "0",
                        channelName: m.channelName,
                        token: m.token || this.joinInfo.appId
                    }, h;
                case Ha.SetSourceUserId:
                    if (m = b && b.getSrcChannelMediaInfo(), !m) throw new p(n.UNEXPECTED_ERROR, "can not find source config");
                    return h.clientRequest = {command: "SetSourceUserId", uid: m.uid + ""}, h;
                case Ha.SetDestChannel:
                    if (k = b && b.getDestChannelMediaInfo(),
                        !k) throw new p(n.UNEXPECTED_ERROR, "can not find dest config");
                    return r(k).call(k, a => {
                        c.push(a.channelName);
                        e.push(a.uid + "");
                        g.push(a.token || this.joinInfo.appId)
                    }), h.clientRequest = {command: "SetDestChannel", channelName: c, uid: e, token: g}, h;
                case Ha.StartPacketTransfer:
                    return h.clientRequest = {command: "StartPacketTransfer"}, h;
                case Ha.Reconnect:
                    return h.clientRequest = {command: "Reconnect"}, h;
                case Ha.StopPacketTransfer:
                    return h.clientRequest = {command: "StopPacketTransfer"}, h;
                case Ha.UpdateDestChannel:
                    if (k = b &&
                        b.getDestChannelMediaInfo(), !k) throw new p(n.UNEXPECTED_ERROR, "can not find dest config");
                    return r(k).call(k, a => {
                        c.push(a.channelName);
                        e.push(a.uid + "");
                        g.push(a.token || this.joinInfo.appId)
                    }), h.clientRequest = {command: "UpdateDestChannel", channelName: c, uid: e, token: g}, h
            }
            return h
        }
    }

    class Vp {
        constructor(a, b) {
            this._trust_stream_added_state_ = this._trust_video_mute_state_ = this._trust_audio_mute_state_ = this._trust_video_enabled_state_ = this._trust_audio_enabled_state_ = this._trust_in_room_ = !0;
            this._video_muted_ =
                this._audio_muted_ = !1;
            this._video_enabled_ = this._audio_enabled_ = !0;
            this._video_added_ = this._audio_added_ = !1;
            this.uid = a;
            this._uintid = b
        }

        get hasVideo() {
            return this._video_enabled_ && !this._video_muted_ && this._video_added_
        }

        get hasAudio() {
            return this._audio_enabled_ && !this._audio_muted_ && this._audio_added_
        }

        get audioTrack() {
            if (this.hasAudio) return this._audioTrack
        }

        get videoTrack() {
            if (this.hasVideo) return this._videoTrack
        }
    }

    let Wp = async a => {
        var b = df("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDCMnXAHkKIGAM+x4N22gCI+Wyu\nSTM9ztkT3uYslTT2PuKmZfPzhH6kVdO7PTjGCOZnAsyb3oTtWat0KcxQ4jxvqQV+\nHvYl3iI1Yd4vl2c3qRMJPLtRDfNxa2Mcxgq7e9aEUibzdd0st+OJAy3tOj/Y0aVy\nxQiYDz3vqa6bP29adwIDAQAB");
        b = await window.crypto.subtle.importKey("spki", b, {name: "RSA-OAEP", hash: "SHA-256"}, !0, ["encrypt"]);
        a = (c = a, (new TextEncoder).encode(c));
        var c;
        c = await window.crypto.subtle.encrypt({name: "RSA-OAEP"}, b, a);
        return Sd(new Uint8Array(c))
    }, He;
    var Ad = function (a, b, c, e) {
        var g, h = arguments.length, k = 3 > h ? b : null === e ? e = T(b, c) : e;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) k = Reflect.decorate(a, b, c, e); else for (var m = a.length - 1; 0 <= m; m--) (g = a[m]) && (k = (3 > h ? g(k) : 3 < h ? g(b, c, k) : g(b, c)) || k);
        return 3 < h && k &&
        X(b, c, k), k
    }, Ya = function (a, b) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
    };

    class Pc extends Ma {
        constructor(a) {
            var b, c, e, g;
            let h;
            if (super(), this._users = [], this._sessionId = null, this._bindEnabledTracks = [], this._leaveMutex = new Sb("client-leave"), this._publishMutex = new Sb("client-publish"), this._subscribeMutex = new ha, this._remoteStream = new ha, this._encryptionMode = "none", this._encryptionSecret = null, this._encryptionSalt = null, this._turnServer = {
                servers: [],
                mode: "auto"
            },
                this._cloudProxyServerMode = "disabled", this._isDualStreamEnabled = !1, this._streamFallbackTypeCacheMap = new ha, this._remoteStreamTypeCacheMap = new ha, this._axiosCancelSource = Bb.CancelToken.source(), this._networkQualitySensitivity = "normal", this._useLocalAccessPoint = !1, this._handleLocalTrackEnable = (a, b, c) => {
                this.publish(a, !1).then(b).catch(c)
            }, this._handleLocalTrackDisable = (a, b, c) => {
                this.unpublish(a, !1).then(b).catch(c)
            }, this._handleUserOnline = a => {
                var b;
                this.isStringUID && "string" != typeof a.uid && k.error("[".concat(this._clientId,
                    "] StringUID is Mixed with UintUID"));
                let c = S(b = this._users).call(b, b => b.uid === a.uid);
                c ? c._trust_in_room_ = !0 : (b = new Vp(a.uid, a.uint_id || a.uid), this._users.push(b), k.debug("[".concat(this._clientId, "] user online"), a.uid), this.emit(R.USER_JOINED, b))
            }, this._handleUserOffline = a => {
                var b;
                let c = S(b = this._users).call(b, b => b.uid === a.uid);
                c && (this._handleRemoveStream(a), bc(this._users, c), this._remoteStreamTypeCacheMap.delete(c.uid), this._streamFallbackTypeCacheMap.delete(c.uid), k.debug("[".concat(this._clientId,
                    "] user offline"), a.uid, "reason:", a.reason), this.emit(R.USER_LEAVED, c, a.reason))
            }, this._handleAddAudioOrVideoStream = (a, b, c) => {
                var e, g, h;
                let l = S(e = this._users).call(e, a => a.uid === b);
                if (!l) return void k.error("[".concat(this._clientId, "] can not find target user!(on_add_stream)"));
                k.debug(m(g = m(h = "[".concat(this._clientId, "] stream added with uid ")).call(h, b, ", type ")).call(g, a));
                e = "audio" === a ? l.hasAudio : l.hasVideo;
                var n, q;
                (l._uintid || (l._uintid = c || b), l._trust_stream_added_state_ = !0, "audio" === a ? l._audio_added_ =
                    !0 : l._video_added_ = !0, ("audio" === a ? l.hasAudio : l.hasVideo) && !e) && (k.info(m(n = m(q = "[".concat(this._clientId, "] remote user ")).call(q, l.uid, " published ")).call(n, a)), this.emit(R.USER_PUBLISHED, l, a));
                "video" === a ? u.onGatewayStream(this._sessionId, Fa.ON_ADD_VIDEO_STREAM, oa.ON_ADD_VIDEO_STREAM, {peer: c || b}) : u.onGatewayStream(this._sessionId, Fa.ON_ADD_AUDIO_STREAM, oa.ON_ADD_AUDIO_STREAM, {peer: c || b});
                (a = this._remoteStream.get(b)) && a.readyToReconnect && "connecting" === a.connectionState && a.reconnectPC().catch(a => {
                    k.error("[".concat(this._clientId, "] resubscribe error"), a.toString())
                })
            }, this._handleRemoveStream = a => {
                var b, c;
                let e = S(b = this._users).call(b, b => b.uid === a.uid);
                if (!e) return void k.warning("[".concat(this._clientId, "] can not find target user!(on_remove_stream)"));
                k.debug(m(c = "[".concat(this._clientId, "] stream removed with uid ")).call(c, a.uid));
                b = () => {
                };
                e.hasAudio && e.hasVideo ? b = () => {
                    var a, b;
                    k.info(m(a = "[".concat(this._clientId, "] remote user ")).call(a, e.uid, " unpublished audio track"));
                    this.emit(R.USER_UNPUBLISHED,
                        e, "audio");
                    k.info(m(b = "[".concat(this._clientId, "] remote user ")).call(b, e.uid, " unpublished video track"));
                    this.emit(R.USER_UNPUBLISHED, e, "video")
                } : e.hasVideo ? b = () => {
                    var a;
                    k.info(m(a = "[".concat(this._clientId, "] remote user ")).call(a, e.uid, " unpublished video track"));
                    this.emit(R.USER_UNPUBLISHED, e, "video")
                } : e.hasAudio && (b = () => {
                    var a;
                    k.info(m(a = "[".concat(this._clientId, "] remote user ")).call(a, e.uid, " unpublished audio track"));
                    this.emit(R.USER_UNPUBLISHED, e, "audio")
                });
                e._trust_stream_added_state_ =
                    !0;
                e._audio_added_ = !1;
                e._video_added_ = !1;
                (c = this._remoteStream.get(e.uid)) && (c.closeP2PConnection(), this._remoteStream.delete(e.uid));
                u.onGatewayStream(this._sessionId, Fa.ON_REMOVE_STREAM, oa.ON_REMOVE_STREAM, {peer: a.uint_id || a.uid});
                b()
            }, this._handleSetStreamLocalEnable = (a, b, c) => {
                var e, g, h, l, n, q;
                let p = S(e = this._users).call(e, a => a.uid === b);
                if (!p) return void k.error("[".concat(this._clientId, "] can not find target user!(disable_local)"));
                k.debug(m(g = m(h = m(l = "[".concat(this._clientId, "] local ")).call(l,
                    a, " ")).call(h, c ? "enabled" : "disabled", " with uid ")).call(g, b));
                e = "audio" === a ? p.hasAudio : p.hasVideo;
                if ("audio" === a) {
                    p._trust_audio_enabled_state_ = !0;
                    var t = p._audio_enabled_;
                    if (p._audio_enabled_ = c, p._audio_enabled_ === t) return;
                    var r, u;
                    c = p._audio_enabled_ ? "enable-local-audio" : "disable-local-audio";
                    k.debug(m(r = m(u = "[".concat(this._clientId, "] user-info-updated, uid: ")).call(u, b, ", msg: ")).call(r, c));
                    this.emit(R.USER_INFO_UPDATED, b, c)
                } else {
                    p._trust_video_enabled_state_ = !0;
                    r = p._video_enabled_;
                    if (p._video_enabled_ =
                        c, p._video_enabled_ === r) return;
                    var v;
                    c = p._video_enabled_ ? "enable-local-video" : "disable-local-video";
                    k.debug(m(t = m(v = "[".concat(this._clientId, "] user-info-update, uid: ")).call(v, b, ", msg: ")).call(t, c));
                    this.emit(R.USER_INFO_UPDATED, b, c)
                }
                c = "audio" === a ? p.hasAudio : p.hasVideo;
                if (e !== c) {
                    var P, w;
                    if (!e && c) return k.info(m(P = m(w = "[".concat(this._clientId, "] remote user ")).call(w, b, " published ")).call(P, a)), void this.emit(R.USER_PUBLISHED, p, a);
                    if (P = this._remoteStream.get(b)) w = xc({}, P.subscribeOptions),
                        w.audio = !!p.hasAudio && w.audio, w.video = !!p.hasVideo && w.video, w.audio || w.video ? P.setSubscribeOptions(w) : (P.closeP2PConnection().catch(a => {
                        k.warning("close sub pc error", a)
                    }), this._remoteStream.delete(p.uid));
                    k.info(m(n = m(q = "[".concat(this._clientId, "] remote user ")).call(q, p.uid, " unpublished ")).call(n, a));
                    this.emit(R.USER_UNPUBLISHED, p, a)
                }
            }, this._handleMuteStream = (a, b, c) => {
                var e, g, h;
                k.debug("[".concat(this._clientId, "] receive mute message"), a, b, c);
                let l = S(e = this._users).call(e, b => b.uid === a);
                var n;
                if (!l) return void k.warning(m(n = "[".concat(this._clientId, "] can not find remote user, ignore mute event, uid: ")).call(n, a));
                e = "audio" === b ? l.hasAudio : l.hasVideo;
                if ("audio" === b) {
                    l._trust_audio_mute_state_ = !0;
                    var p = l._audio_muted_;
                    if (l._audio_muted_ = c, l._audio_muted_ === p) return;
                    var q, t;
                    c = l._audio_muted_ ? "mute-audio" : "unmute-audio";
                    k.debug(m(q = m(t = "[".concat(this._clientId, "] user-info-update, uid: ")).call(t, a, ", msg: ")).call(q, c));
                    this.emit(R.USER_INFO_UPDATED, a, c)
                } else {
                    l._trust_video_mute_state_ =
                        !0;
                    q = l._video_muted_;
                    if (l._video_muted_ = c, l._video_muted_ === q) return;
                    var r;
                    c = l._video_muted_ ? "mute-video" : "unmute-video";
                    k.debug(m(p = m(r = "[".concat(this._clientId, "] user-info-update, uid: ")).call(r, a, ", msg: ")).call(p, c));
                    this.emit(R.USER_INFO_UPDATED, a, c)
                }
                c = "audio" === b ? l.hasAudio : l.hasVideo;
                if (e !== c) {
                    var u, v;
                    if (!e && c) return k.info(m(u = m(v = "[".concat(this._clientId, "] remote user ")).call(v, a, " published ")).call(u, b)), void this.emit(R.USER_PUBLISHED, l, b);
                    if (u = this._remoteStream.get(a)) v = xc({},
                        u.subscribeOptions), v.audio = !!l.hasAudio && v.audio, v.video = !!l.hasVideo && v.video, "video" === b && u.pc._statsFilter.setVideoIsReady(!1), v.audio || v.video ? u.setSubscribeOptions(v) : (u.closeP2PConnection().catch(a => {
                        k.warning("close sub pc error", a)
                    }), this._remoteStream.delete(l.uid));
                    k.info(m(g = m(h = "[".concat(this._clientId, "] remote user ")).call(h, a, " unpublished ")).call(g, b));
                    this.emit(R.USER_UNPUBLISHED, l, b)
                }
            }, this._handleP2PLost = a => {
                k.debug("[".concat(this._clientId, "] receive p2p lost"), a);
                let b = null;
                if (this._highStream && this._highStream.pc.ID === a.p2pid) b = this._highStream; else if (this._lowStream && this._lowStream.pc.ID === a.p2pid) b = this._lowStream; else {
                    var c;
                    r(c = this._remoteStream).call(c, c => {
                        c.pc.ID === a.p2pid && (b = c)
                    })
                }
                b ? b.emit(H.GATEWAY_P2P_LOST, a.p2pid) : k.warning("P2PLost stream not found", a)
            }, this._handleTokenWillExpire = () => {
                k.debug("[".concat(this._clientId, "] received message onTokenPrivilegeWillExpire"));
                this.emit(R.ON_TOKEN_PRIVILEGE_WILL_EXPIRE)
            }, this._handleBeforeUnload = a => {
                void 0 !== a.returnValue &&
                "" !== a.returnValue || (this.leave(), k.info("[".concat(this._clientId, "] auto leave onbeforeunload")))
            }, this._handleUpdateNetworkQuality = () => {
                var a;
                if ("normal" !== this._networkQualitySensitivity) {
                    if (navigator && void 0 !== navigator.onLine && !navigator.onLine) return void this.emit(R.NETWORK_QUALITY, {
                        downlinkNetworkQuality: 6,
                        uplinkNetworkQuality: 6
                    });
                    var b = {downlinkNetworkQuality: 0, uplinkNetworkQuality: 0};
                    this._highStream && !this._highStream.detecting && (b.uplinkNetworkQuality = this._highStream.getNetworkQuality());
                    var c = 0;
                    r(a = this._remoteStream).call(a, a => c += a.getNetworkQuality());
                    0 < this._remoteStream.size && (b.downlinkNetworkQuality = Math.round(c / this._remoteStream.size));
                    this.emit(R.NETWORK_QUALITY, b)
                }
            }, this._codec = a.codec, this._mode = a.mode, a.proxyServer && (this._proxyServer = a.proxyServer, u.setProxyServer(this._proxyServer), k.setProxyServer(this._proxyServer)), a.turnServer && (this._turnServer = xc({}, this._turnServer, {mode: "manual"}, a.turnServer)), this._clientId = ta(5, "client-"), k.info(m(b = m(c = m(e = m(g = "[".concat(this._clientId,
                "] Initializing AgoraRTC client v")).call(g, Za, " build: ")).call(e, "v4.6.3-0-g91da319d(8/10/2021, 9:07:29 PM)", ", mode: ")).call(c, this._mode, ", codec: ")).call(b, this._codec)), a.clientRoleOptions) try {
                Eh(a.clientRoleOptions), h = Ia({}, a.clientRoleOptions)
            } catch (q) {
                var l;
                k.warning(m(l = "[".concat(this._clientId, "] ")).call(l, q.toString()))
            }
            this._statsCollector = new wd(this._clientId);
            this._statsCollector.onStatsException = (a, b, c) => {
                var e, g, h;
                k.debug(m(e = m(g = m(h = "[".concat(this._clientId, "] receive exception msg, code: ")).call(h,
                    a, ", msg: ")).call(g, b, ", uid: ")).call(e, c));
                this.emit(R.EXCEPTION, {code: a, msg: b, uid: c})
            };
            this._statsCollector.onUploadPublishDuration = (a, b, c, e) => {
                var g;
                let h = S(g = this._users).call(g, b => b.uid === a);
                h && u.peerPublishStatus(this._sessionId, {
                    subscribeElapse: e,
                    audioPublishDuration: b,
                    videoPublishDuration: c,
                    peer: h._uintid
                })
            };
            this._gateway = new vp({
                clientId: this._clientId,
                mode: this._mode,
                codec: this._codec,
                websocketRetryConfig: a.websocketRetryConfig || La,
                httpRetryConfig: a.httpRetryConfig || La,
                forceWaitGatewayResponse: void 0 ===
                    a.forceWaitGatewayResponse || a.forceWaitGatewayResponse,
                statsCollector: this._statsCollector,
                role: a.role,
                clientRoleOptions: h
            });
            this._config = a;
            this._configDistribute = new xp;
            this._handleGatewayEvents();
            xk.push(this)
        }

        get connectionState() {
            return this._gateway.state
        }

        get remoteUsers() {
            return this._users
        }

        get localTracks() {
            return this._highStream ? this._highStream.getAllTracks() : []
        }

        get uid() {
            return this._uid
        }

        get channelName() {
            return this._channelName
        }

        get isStringUID() {
            return !!this._joinInfo && !!this._joinInfo.stringUid
        }

        async join(a,
                   b, c, e, g) {
            var h,
                l = "HTTPS" === (He || He || (He = (window.location.protocol.split(":")[0] || "").toUpperCase(), He));
            let q = void 0 !== window.isSecureContext ? window.isSecureContext : "Browser Not Support", t = () => {
                k.warning("The website must be running in a secure context (About secure context: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts ), otherwise the media collection will be restricted by the browser")
            };
            void 0 !== window.isSecureContext ? window.isSecureContext || t() : l || t();
            l = u.reportApiInvoke(this._sessionId,
                {name: y.JOIN, options: [a, b, c, e], states: {isHttps: l, isSecureContext: q}, tag: D.TRACER});
            try {
                if (!c && null !== c) throw new p(n.INVALID_PARAMS, "Invalid token: ".concat(c, ". If you don not use token, set it to null"));
                c && Ea(c, "token", 1, 2047);
                Ea(a, "appid", 1, 2047);
                Se(b);
                e && Te(e);
                g && Ea(g, "optionalInfo", 1, 2047)
            } catch (Ja) {
                throw l.onError(Ja), Ja;
            }
            if (k.info(m(h = "[".concat(this._clientId, "] start join channel ")).call(h, b)), this._leaveMutex.isLocked) k.debug("[".concat(this._clientId, "] join: waiting leave operation")),
                (await this._leaveMutex.lock())(), k.debug("[".concat(this._clientId, "] join: continue"));
            if ("DISCONNECTED" !== this.connectionState) throw a = new p(n.INVALID_OPERATION, "[".concat(this._clientId, "] Client already in connecting/connected state")), l.onError(a), a;
            this._sessionId || (this._sessionId = ta(32, "").toUpperCase());
            this._gateway.state = "CONNECTING";
            g = {
                clientId: this._clientId,
                appId: a,
                sid: this._sessionId,
                cname: b,
                uid: "string" != typeof e ? e : null,
                turnServer: this._turnServer,
                proxyServer: this._proxyServer,
                token: c ||
                    a,
                cloudProxyServer: this._cloudProxyServerMode,
                optionalInfo: g,
                useLocalAccessPoint: this._useLocalAccessPoint
            };
            "string" == typeof e && (g.stringUid = e, this._uintUid ? (g.uid = this._uintUid, this._uintUid = void 0) : g.uid = 0);
            "none" !== this._encryptionMode && this._encryptionSecret && (g.aesmode = this._encryptionMode, g.aespassword = await Wp(this._encryptionSecret), this._encryptionSalt && (g.aessalt = this._encryptionSalt));
            this._startSession(this._sessionId, {channel: b, appId: a});
            mb(() => {
                "CONNECTING" === this.connectionState && u.joinChannelTimeout(this._sessionId,
                    5)
            }, 5E3);
            try {
                var r;
                let e;
                if ("443only" === g.cloudProxyServer ? g.proxyServer = v.PROXY_SERVER_TYPE2 : "proxy3" !== g.cloudProxyServer && "proxy4" !== g.cloudProxyServer && "proxy5" !== g.cloudProxyServer || (g.proxyServer = v.PROXY_SERVER_TYPE3), u.setProxyServer(g.proxyServer), k.setProxyServer(g.proxyServer), g.stringUid && !g.uid && "normal" === g.cloudProxyServer) {
                    var F;
                    await ei(g, this._axiosCancelSource.token, this._config.httpRetryConfig || La, !1);
                    let a = await jf(g.stringUid, g, this._axiosCancelSource.token, this._config.httpRetryConfig ||
                        La);
                    k.debug(m(F = "getUserAccount Success ".concat(g.stringUid, " => ")).call(F, a));
                    g.uid = a;
                    e = await dd(g, this._axiosCancelSource.token, this._config.httpRetryConfig || La)
                } else {
                    if (g.stringUid && !g.uid) {
                        var C;
                        let a = await jf(g.stringUid, g, this._axiosCancelSource.token, this._config.httpRetryConfig || La);
                        k.debug(m(C = "getUserAccount Success ".concat(g.stringUid, " => ")).call(C, a));
                        g.uid = a
                    }
                    e = await ei(g, this._axiosCancelSource.token, this._config.httpRetryConfig || La, !0)
                }
                this._configDistribute.startGetConfigDistribute(g,
                    this._axiosCancelSource.token);
                this._configDistribute.on(td.UPDATE_BITRATE_LIMIT, a => {
                    this._highStream && this._highStream.handleUpdateBitrateLimit(a.uplink);
                    a.low_stream_uplink && this._lowStream && this._lowStream.handleUpdateBitrateLimit({
                        max_bitrate: a.low_stream_uplink.bitrate,
                        min_bitrate: a.low_stream_uplink.bitrate || 0
                    })
                });
                this._key = c || a;
                this._joinInfo = xc({}, g, {
                    cid: e.gatewayInfo.cid,
                    uid: g.uid ? g.uid : e.gatewayInfo.uid,
                    vid: e.gatewayInfo.vid,
                    apResponse: e.gatewayInfo.res,
                    uni_lbs_ip: e.gatewayInfo.uni_lbs_ip,
                    gatewayAddrs: e.gatewayInfo.gatewayAddrs
                });
                let h = await this._gateway.join(this._joinInfo, this._key);
                return l.onSuccess(h), this._appId = a, this._channelName = g.cname, this._uid = h, this._networkQualityInterval && window.clearInterval(this._networkQualityInterval), this._networkQualityInterval = window.setInterval(this._handleUpdateNetworkQuality, 2E3), window.addEventListener("beforeunload", this._handleBeforeUnload), k.info(m(r = "[".concat(this._clientId, "] Joining channel success: ")).call(r, b)), mb(() => {
                        k.startUpload()
                    },
                    5E3), h
            } catch (Ja) {
                throw a = Vb(Ja) ? Ja[0] : Ja, k.error("[".concat(this._clientId, "] Joining channel failed, rollback"), a), a.code !== n.OPERATION_ABORTED && (this._gateway.state = "DISCONNECTED", this._reset()), l.onError(a), a;
            }
        }

        async leave() {
            let a = u.reportApiInvoke(this._sessionId, {name: y.LEAVE, options: [], tag: D.TRACER});
            k.info("[".concat(this._clientId, "] Leaving channel"));
            window.removeEventListener("beforeunload", this._handleBeforeUnload);
            this._reset();
            let b = await this._leaveMutex.lock();
            if ("DISCONNECTED" ===
                this.connectionState) return k.info("[".concat(this._clientId, "] Leaving channel repeated, success")), b(), a.onSuccess();
            await this._gateway.leave("CONNECTED" !== this.connectionState);
            k.info("[".concat(this._clientId, "] Leaving channel success"));
            b();
            a.onSuccess()
        }

        async publish(a, b = !0) {
            var c, e;
            Vb(a) || (a = [a]);
            let g = u.reportApiInvoke(this._sessionId, {
                name: y.PUBLISH,
                options: B(a).call(a, a => a ? Object(a).toString() : "null"),
                tag: D.TRACER
            });
            if (0 === a.length) return a = new p(n.INVALID_PARAMS, "track list is empty"),
                g.onError(a), a.throw();
            if ("audience" === this._gateway.role) return a = new p(n.INVALID_OPERATION, "audience can not publish stream"), g.onError(a), a.throw();
            for (let c of a) {
                if (!(c instanceof Ae)) return a = new p(n.INVALID_PARAMS, "pamameter is not local track"), g.onError(a), a.throw();
                if (!c._enabled && b) return a = new p(n.TRACK_IS_DISABLED, "can not publish a disabled track: ".concat(c.getTrackId())), g.onError(a), a.throw()
            }
            if (k.info(m(c = "[".concat(this._clientId, "] Publishing tracks, id ")).call(c, B(a).call(a,
                a => "".concat(a.getTrackId(), " ")))), await this._configDistribute.awaitConfigDistributeComplete(), b && r(a).call(a, a => {
                var b;
                let c = this._configDistribute.getBitrateLimit();
                var e;
                (a instanceof Na && c && a.setBitrateLimit(c.uplink), -1 === N(b = this._bindEnabledTracks).call(b, a)) && (a.addListener(G.NEED_ADD_TRACK, this._handleLocalTrackEnable), a.addListener(G.NEED_REMOVE_TRACK, this._handleLocalTrackDisable), this._bindEnabledTracks.push(a), Lb() && a.muted && k.debug(m(e = "[".concat(this._clientId, "] on firefox publish a muted track ")).call(e,
                    a.getTrackId(), ", skip the pub operation and wait unmute")))
            }), Lb() && 0 === (a = I(a).call(a, a => !a.muted)).length) return void g.onSuccess();
            c = await this._publishMutex.lock();
            try {
                let b = await this._publishHighStream(a), e = (b.audioTrack, b.videoTrack);
                this._isDualStreamEnabled && e && !this._lowStream && await this._publishLowStream(e);
                c();
                g.onSuccess()
            } catch (h) {
                throw c(), b && r(a).call(a, a => {
                    var b, c;
                    let e = N(b = this._bindEnabledTracks).call(b, a);
                    -1 !== e && (a.off(G.NEED_ADD_TRACK, this._handleLocalTrackEnable), a.off(G.NEED_REMOVE_TRACK,
                        this._handleLocalTrackDisable), Oa(c = this._bindEnabledTracks).call(c, e, 1))
                }), g.onError(h), k.error("[".concat(this._clientId, "] publish error"), h.toString()), h;
            }
            k.info(m(e = "[".concat(this._clientId, "] Publish success, id ")).call(e, B(a).call(a, a => "".concat(a.getTrackId(), " "))))
        }

        async unpublish(a, b = !0) {
            var c, e, g;
            if (!this._highStream) return void k.warning("[".concat(this._clientId, "] Could not find tracks to unpublish"));
            var h = this._highStream.getAllTracks();
            a ? Vb(a) || (a = [a]) : a = this._highStream.getAllTracks();
            h = function (a, b) {
                if (a.length !== b.length) return !1;
                for (let c = 0; c < a.length; c += 1) {
                    const e = a[c];
                    if (I(a).call(a, a => a === e).length !== I(b).call(b, a => a === e).length) return !1
                }
                return !0
            }(h, a);
            let l = u.reportApiInvoke(this._sessionId, {
                name: y.UNPUBLISH,
                options: B(a).call(a, a => a.getTrackId()),
                tag: D.TRACER
            });
            k.info(m(c = m(e = "[".concat(this._clientId, "] Unpublish tracks, tracks ")).call(e, B(a).call(a, a => "".concat(a.getTrackId(), " ")), ", isClosePC: ")).call(c, h));
            c = h ? void 0 : await this._publishMutex.lock();
            if (!this._highStream) return k.warning("[".concat(this._clientId,
                "] Could not find tracks to unpublish")), void (c && c());
            try {
                this._lowStream && 0 < I(a).call(a, a => "video" === a.trackMediaType).length && (await this._lowStream.closeP2PConnection(), this._lowStream = void 0), h ? await this._highStream.closeP2PConnection() : await this._highStream.removeTracks(a, b), c && c()
            } catch (q) {
                if (q.code !== n.OPERATION_ABORTED) throw l.onError(q), k.error("[".concat(this._clientId, "] unpublish error"), q.toString()), c && c(), q;
                k.debug("[".concat(this._clientId, "] ignore unpub operation abort"));
                c && c()
            }
            this._highStream &&
            "disconnected" === this._highStream.connectionState && (this._highStream = void 0, this._lowStream = void 0);
            b && r(a).call(a, a => {
                var b, c;
                let e = N(b = this._bindEnabledTracks).call(b, a);
                -1 !== e && (a.off(G.NEED_ADD_TRACK, this._handleLocalTrackEnable), a.off(G.NEED_REMOVE_TRACK, this._handleLocalTrackDisable), Oa(c = this._bindEnabledTracks).call(c, e, 1))
            });
            k.info(m(g = "[".concat(this._clientId, "] Unpublish success,tracks ")).call(g, B(a).call(a, a => "".concat(a.getTrackId()))));
            l.onSuccess()
        }

        async subscribe(a, b) {
            var c, e, g,
                h;
            Ra(b, "mediaType", ["audio", "video"]);
            let l = u.reportApiInvoke(this._sessionId, {name: y.SUBSCRIBE, options: [a.uid, b], tag: D.TRACER});
            if (!this._joinInfo) throw b = new p(n.INVALID_OPERATION, "Can't subscribe stream, not joined"), l.onError(b), b;
            if ("CONNECTED" !== this.connectionState && "RECONNECTING" !== this.connectionState) throw b = new p(n.INVALID_OPERATION, "Can't subscribe stream in ".concat(this.connectionState, " state")), l.onError(b), b;
            if (!S(c = this._users).call(c, b => b === a)) {
                var q;
                b = new p(n.INVALID_REMOTE_USER,
                    "user is not in the channel");
                throw k.error(m(q = "[".concat(this._clientId, "] can not subscribe ")).call(q, a.uid, ", this user is not in the channel")), l.onError(b), b;
            }
            if (!a.hasAudio && !a.hasVideo) {
                var t;
                b = new p(n.INVALID_REMOTE_USER, "user is not published");
                throw k.error(m(t = "[".concat(this._clientId, "] can not subscribe ")).call(t, a.uid, ", user is not published")), l.onError(b), b;
            }
            q = {audio: "audio" === b, video: "video" === b};
            if (!a.hasAudio && q.audio || !a.hasVideo && q.video) {
                var r, v;
                var C = new p(n.REMOTE_USER_IS_NOT_PUBLISHED);
                throw k.error(m(r = m(v = "[".concat(this._clientId, "] can not subscribe ")).call(v, a.uid, " with mediaType ")).call(r, b, ", remote track is not published")), l.onError(C), C;
            }
            (r = this._subscribeMutex.get(a.uid)) || (r = new Sb("sub-".concat(a.uid)), this._subscribeMutex.set(a.uid, r));
            k.info(m(e = m(g = "[".concat(this._clientId, "] subscribe user ")).call(g, a.uid, ", mediaType: ")).call(e, b));
            e = await r.lock();
            g = this._remoteStream.get(a.uid);
            try {
                if (g) q.audio = q.audio || g.subscribeOptions.audio, q.video = q.video || g.subscribeOptions.video,
                    await this._gateway.subscribeChange(g, q); else {
                    g = new Qp(a, this._statsCollector, this._joinInfo, q);
                    this._remoteStream.set(a.uid, g);
                    try {
                        await this._gateway.subscribe(g)
                    } catch (A) {
                        throw this._remoteStream.delete(a.uid), A;
                    }
                    g.on(H.CONNECTION_STATE_CHANGE, (b, c) => {
                        "connecting" === b ? this.emit(R.MEDIA_RECONNECT_START, a.uid) : "connected" === b && this.emit(R.MEDIA_RECONNECT_END, a.uid)
                    })
                }
                e()
            } catch (A) {
                var w;
                throw l.onError(A), e(), k.error(m(w = "[".concat(this._clientId, "] subscribe user ")).call(w, a.uid, " error"), A), A;
            }
            k.info(m(C = m(h = "[".concat(this._clientId, "] subscribe success user ")).call(h, a.uid, ", mediaType: ")).call(C, b));
            this._defaultStreamFallbackType && this.setStreamFallbackOption(a.uid, this._defaultStreamFallbackType).catch(a => {
                k.warning("[".concat(this._clientId, "] auto set fallback failed"), a)
            });
            b = "audio" === b ? a.audioTrack : a.videoTrack;
            return b ? (l.onSuccess(b.getTrackId()), b) : (b = new p(n.UNEXPECTED_ERROR, "can not find remote track in user object"), l.onError(b), b.throw())
        }

        async unsubscribe(a, b) {
            var c,
                e, g, h, l;
            b && Ra(b, "mediaType", ["audio", "video"]);
            let q = u.reportApiInvoke(this._sessionId, {name: y.UNSUBSCRIBE, options: [a.uid, b], tag: D.TRACER});
            if (!S(c = this._users).call(c, b => b === a)) {
                var t;
                b = new p(n.INVALID_REMOTE_USER, "user is not in the channel");
                throw k.error(m(t = "[".concat(this._clientId, "] can not subscribe ")).call(t, a.uid, ", user is not in the channel")), q.onError(b), b;
            }
            k.info(m(e = m(g = "[".concat(this._clientId, "] unsubscribe uid: ")).call(g, a.uid, ", mediaType: ")).call(e, b));
            (t = this._subscribeMutex.get(a.uid)) ||
            (t = new Sb("sub-".concat(a.uid)), this._subscribeMutex.set(a.uid, t));
            t = await t.lock();
            c = this._remoteStream.get(a.uid);
            var r;
            if (!c) return k.warning(m(r = "[".concat(this._clientId, "]: you have not subscribe the remote user ")).call(r, a.uid)), q.onSuccess(), void t();
            r = xc({}, c.subscribeOptions);
            "audio" === b ? r.audio = !1 : "video" === b ? (r.video = !1, c.pc._statsFilter.setVideoIsReady(!1)) : (r.audio = !1, r.video = !1);
            try {
                r.audio || r.video ? await this._gateway.subscribeChange(c, r) : (await c.closeP2PConnection(), this._remoteStream.delete(a.uid)),
                    t()
            } catch (C) {
                var v;
                if (C.code !== n.OPERATION_ABORTED) throw q.onError(C), t(), k.error(m(v = "[".concat(this._clientId, "] unsubscribe user ")).call(v, a.uid, " error"), C.toString()), C;
                t();
                k.debug("[".concat(this._clientId, "] ignore unsub operation abort"))
            }
            k.info(m(h = m(l = "[".concat(this._clientId, "] unsubscribe success uid: ")).call(l, a.uid, ", mediaType: ")).call(h, b));
            q.onSuccess()
        }

        setLowStreamParameter(a) {
            if (!a) throw new p(n.INVALID_PARAMS);
            null == a.width || ba(a.width, "streamParameter.width");
            null == a.height ||
            ba(a.height, "streamParameter.height");
            null == a.framerate || ba(a.framerate, "streamParameter.framerate");
            null == a.bitrate || ba(a.bitrate, "streamParameter.bitrate");
            !0;
            let b = u.reportApiInvoke(this._sessionId, {name: y.SET_LOW_STREAM_PARAMETER, options: [a], tag: D.TRACER});
            (!a.width && a.height || a.width && !a.height) && k.warning("[".concat(this._clientId, "] The width and height parameters take effect only when both are set"));
            k.info("[".concat(this._clientId, "] set low stream parameter to"), w(a));
            let c = this._configDistribute.getLowStreamConfigDistribute();
            c && c.bitrate && a.bitrate && c.bitrate < a.bitrate && (a.bitrate = c.bitrate);
            this._lowStreamParameter = a;
            b.onSuccess()
        }

        async enableDualStream() {
            let a = u.reportApiInvoke(this._sessionId, {name: y.ENABLE_DUAL_STREAM, options: [], tag: D.TRACER});
            if (!fa.supportDualStream) {
                u.streamSwitch(this._sessionId, {lts: x(), isdual: !0, succ: !1});
                var b = new p(n.NOT_SUPPORTED, "Your browser is not support dual stream");
                throw a.onError(b), b;
            }
            if (this._isDualStreamEnabled) throw b = new p(n.INVALID_OPERATION, "Dual stream is already enabled"),
                a.onError(b), b;
            if (this._highStream && "connected" === this._highStream.connectionState && this._highStream.videoTrack) try {
                await this._publishLowStream(this._highStream.videoTrack)
            } catch (c) {
                throw u.streamSwitch(this._sessionId, {lts: x(), isdual: !0, succ: !1}), a.onError(c), c;
            }
            this._isDualStreamEnabled = !0;
            u.streamSwitch(this._sessionId, {lts: x(), isdual: !0, succ: !0});
            k.info("[".concat(this._clientId, "] enable dual stream"));
            a.onSuccess()
        }

        async disableDualStream() {
            let a = u.reportApiInvoke(this._sessionId, {
                name: y.DISABLE_DUAL_STREAM,
                options: [], tag: D.TRACER
            });
            if (this._lowStream) try {
                await this._lowStream.closeP2PConnection()
            } catch (b) {
                throw u.streamSwitch(this._sessionId, {lts: x(), isdual: !1, succ: !1}), a.onError(b), b;
            }
            this._lowStream = void 0;
            this._isDualStreamEnabled = !1;
            this._highStream && (this._highStream.lowStreamConnection = void 0);
            u.streamSwitch(this._sessionId, {lts: x(), isdual: !1, succ: !0});
            k.info("[".concat(this._clientId, "] disable dual stream"));
            a.onSuccess()
        }

        async setClientRole(a, b) {
            Ra(a, "role", ["audience", "host"]);
            !0;
            b && Eh(b);
            let c = u.reportApiInvoke(this._sessionId, {name: y.SET_CLIENT_ROLE, options: [a, b], tag: D.TRACER});
            if ("rtc" === this._mode) return k.warning("[".concat(this._clientId, "]rtc mode can not use setClientRole")), a = new p(n.INVALID_OPERATION, "rtc mode can not use setClientRole"), c.onError(a), a.throw();
            if (b && b.level && "host" === a) return a = new p(n.INVALID_OPERATION, "host mode can not set audience latency level"), c.onError(a), a.throw();
            try {
                var e, g;
                if ("audience" === a && this._highStream) {
                    let a = new p(n.INVALID_OPERATION, "can not set client role to audience when publishing stream");
                    return c.onError(a), a.throw()
                }
                await this._gateway.setClientRole(a, b);
                k.info(m(e = m(g = "[".concat(this._clientId, "] set client role to ")).call(g, a, ", level: ")).call(e, b && b.level));
                c.onSuccess()
            } catch (h) {
                throw c.onError(h), h;
            }
        }

        setProxyServer(a) {
            if (Ea(a, "proxyServer"), "DISCONNECTED" !== this.connectionState) throw new p(n.INVALID_OPERATION, "Set proxy server before join channel");
            if ("disabled" !== this._cloudProxyServerMode || this._useLocalAccessPoint) throw new p(n.INVALID_OPERATION, "You have already set the proxy");
            this._proxyServer = a;
            u.setProxyServer(this._proxyServer);
            k.setProxyServer(this._proxyServer)
        }

        setTurnServer(a) {
            if (Vb(a) || (a = [a]), "DISCONNECTED" !== this.connectionState) throw new p(n.INVALID_OPERATION, "Set turn server before join channel");
            if ("disabled" !== this._cloudProxyServerMode || this._useLocalAccessPoint) throw new p(n.INVALID_OPERATION, "You have already set the proxy");
            var b;
            if (Ch(a)) return this._turnServer = {
                servers: a,
                mode: "original-manual"
            }, void k.info(m(b = "[".concat(this._clientId, "] Set original turnserver success: ")).call(b,
                B(a).call(a, a => a.urls).join(","), "."));
            r(a).call(a, a => Dh(a));
            this._turnServer = {servers: a, mode: "manual"};
            k.info("[".concat(this._clientId, "] Set turnserver success."))
        }

        startProxyServer(a) {
            let b = u.reportApiInvoke(this._sessionId, {name: y.START_PROXY_SERVER, options: [], tag: D.TRACER});
            if ("DISCONNECTED" !== this.connectionState) throw a = new p(n.INVALID_OPERATION, "Start proxy server before join channel"), b.onError(a), a;
            if (this._proxyServer || "manual" === this._turnServer.mode || this._useLocalAccessPoint) throw a =
                new p(n.INVALID_OPERATION, "You have already set the proxy"), b.onError(a), a;
            let c = [1, 2, 3, 4, 5];
            switch (void 0 === a && (a = 1), a) {
                case 1:
                    this._cloudProxyServerMode = "normal";
                    break;
                case 2:
                    this._cloudProxyServerMode = "443only";
                    break;
                case 3:
                    this._cloudProxyServerMode = "proxy3";
                    break;
                case 4:
                    this._cloudProxyServerMode = "proxy4";
                    break;
                case 5:
                    this._cloudProxyServerMode = "proxy5";
                    break;
                default:
                    throw a = new p(n.INVALID_PARAMS, "proxy server mode must be ".concat(c.join("|"))), b.onError(a), a;
            }
            k.info("[".concat(this._clientId,
                "] set cloud proxy server mode to"), this._cloudProxyServerMode);
            b.onSuccess()
        }

        stopProxyServer() {
            let a = u.reportApiInvoke(this._sessionId, {name: y.STOP_PROXY_SERVER, options: [], tag: D.TRACER});
            if ("DISCONNECTED" !== this.connectionState) throw new p(n.INVALID_OPERATION, "Stop proxy server after leave channel");
            u.setProxyServer();
            k.setProxyServer();
            this._cloudProxyServerMode = "disabled";
            k.info("[".concat(this._clientId, "] set cloud proxy server mode to"), this._cloudProxyServerMode);
            this._proxyServer = void 0;
            this._turnServer =
                {mode: "auto", servers: []};
            a.onSuccess()
        }

        setLocalAccessPoints(a, b) {
            if (Re(a, "serverList"), Ea(b, "domain"), this._proxyServer || "disabled" !== this._cloudProxyServerMode) throw new p(n.INVALID_OPERATION, "set local access point failed, You have already set the cloud proxy");
            let c = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
            a = B(a).call(a, a => {
                var e;
                return c.test(a) ? m(e = "".concat(a.replace(/\./g, "-"), ".")).call(e, b) :
                    a
            });
            this._useLocalAccessPoint = !0;
            Qa("WEBCS_DOMAIN", a);
            Qa("WEBCS_DOMAIN_BACKUP_LIST", a);
            Qa("GATEWAY_DOMAINS", [b]);
            Qa("EVENT_REPORT_DOMAIN", a[0]);
            Qa("EVENT_REPORT_BACKUP_DOMAIN", a[1] || a[0]);
            Qa("LOG_UPLOAD_SERVER", "".concat(a[0], ":6444"));
            k.info("set local access point success")
        }

        async setRemoteVideoStreamType(a, b) {
            var c, e;
            Ra(b, "streamType", [0, 1]);
            let g = u.reportApiInvoke(this._sessionId, {
                name: y.SET_REMOTE_VIDEO_STREAM_TYPE,
                options: [a, b],
                tag: D.TRACER
            });
            try {
                await this._gateway.setRemoteVideoStreamType(a,
                    b), mb(() => {
                    var b;
                    let c = S(b = this._users).call(b, b => b.uid === a);
                    c && c.videoTrack && c.videoTrack.updateMediaStreamTrackResolution()
                }, 2E3)
            } catch (h) {
                throw g.onError(h), k.error("[".concat(this._clientId, "] set remote video stream type error"), h.toString()), h;
            }
            k.info(m(c = m(e = "[".concat(this._clientId, "] set remote ")).call(e, a, " video stream type to ")).call(c, b));
            this._remoteStreamTypeCacheMap.set(a, b);
            g.onSuccess()
        }

        async setStreamFallbackOption(a, b) {
            var c, e;
            Ra(b, "fallbackType", [0, 1, 2]);
            let g = u.reportApiInvoke(this._sessionId,
                {name: y.SET_STREAM_FALLBACK_OPTION, options: ["too long to show", b], tag: D.TRACER});
            try {
                await this._gateway.setStreamFallbackOption(a, b)
            } catch (h) {
                throw g.onError(h), k.error("[".concat(this._clientId, "] set stream fallback option"), h.toString()), h;
            }
            k.info(m(c = m(e = "[".concat(this._clientId, "] set remote ")).call(e, a, " stream fallback type to ")).call(c, b));
            this._streamFallbackTypeCacheMap.set(a, b);
            g.onSuccess()
        }

        setEncryptionConfig(a, b, c) {
            Ra(a, "encryptionMode", "aes-128-xts aes-256-xts aes-128-ecb sm4-128-ecb aes-128-gcm aes-256-gcm aes-128-gcm2 aes-256-gcm2 none".split(" "));
            !0;
            Ea(b, "secret");
            let e = ["aes-128-gcm2", "aes-256-gcm2"];
            if (ia(e).call(e, a)) {
                if (!(c && c instanceof Uint8Array && 32 === c.length)) throw new p(n.INVALID_PARAMS, "salt must be an Uint8Array and exactly equal to 32 bytes");
            } else if (c) throw new p(n.INVALID_PARAMS, "current encrypt mode does not need salt");
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*,.<>?/:;'"|{}\[\]])(?=.{8,})/.test(b) || k.warning("The secret is not strong:\n      The secret must contain at least 1 lowercase alphabetical character,\n      The secret must contain at least 1 uppercase alphabetical character,\n      The secret must contain at least 1 numeric character,\n      The secret must contain at least one special character,\n      The secret must be eight characters or longer.\n      ");
            this._encryptionMode = a;
            this._encryptionSecret = b;
            c && (this._encryptionSalt = Sd(c))
        }

        async renewToken(a) {
            Ea(a, "token", 1, 2047);
            let b = u.reportApiInvoke(this._sessionId, {name: y.RENEW_TOKEN, options: [a], tag: D.TRACER});
            if (!this._key) return a = new p(n.INVALID_OPERATION, "renewToken should not be called before user join"), b.onError(a), a.throw();
            this._key = a;
            try {
                await this._gateway.renewToken(a)
            } catch (c) {
                throw b.onError(c), k.error("[".concat(this._clientId, "] renewToken failed"), c.toString()), c;
            }
            k.debug("[".concat(this._clientId,
                "] renewToken success"));
            b.onSuccess()
        }

        enableAudioVolumeIndicator() {
            let a = u.reportApiInvoke(this._sessionId, {
                name: y.ENABLE_AUDIO_VOLUME_INDICATOR,
                options: [],
                tag: D.TRACER
            });
            if (this._audioVolumeIndicationInterval) return k.warning("you have already enabled audio volume indicator!"), a.onSuccess();
            this._audioVolumeIndicationInterval = window.setInterval(() => {
                var a, c, e;
                let g = pd(a = B(c = vb(oc(e = this._remoteStream).call(e))).call(c, a => ({
                    level: a.user.audioTrack ? 100 * a.user.audioTrack._source.getAudioAvgLevel() :
                        0, uid: a.getUserId()
                }))).call(a, (a, b) => a.level - b.level);
                this._highStream && this._highStream.audioTrack && (g.push({
                    level: 100 * this._highStream.audioTrack._source.getAudioAvgLevel(),
                    uid: this._highStream._userId
                }), g = pd(g).call(g, (a, b) => a.level - b.level));
                this.emit(R.VOLUME_INDICATOR, g)
            }, v.AUDIO_VOLUME_INDICATION_INTERVAL || 2E3);
            a.onSuccess()
        }

        getRTCStats() {
            let a = this._statsCollector.getRTCStats(), b = this._gateway.getInChannelInfo();
            return a.Duration = Math.round(b.duration / 1E3), a
        }

        startLiveStreaming(a, b) {
            let c =
                u.reportApiInvoke(this._sessionId, {name: y.START_LIVE_STREAMING, options: [a, b], tag: D.TRACER});
            if (!b) {
                if ("h264" !== this._codec) return a = new p(n.LIVE_STREAMING_INVALID_RAW_STREAM, "raw streaming is only support h264"), c.onError(a), z.reject(a);
                if (!this._highStream) return a = new p(n.LIVE_STREAMING_INVALID_RAW_STREAM, "can not find stream to raw streaming"), c.onError(a), z.reject(a)
            }
            if (this._liveRawStreamingClient && this._liveRawStreamingClient.hasUrl(a) || this._liveTranscodeStreamingClient && this._liveTranscodeStreamingClient.hasUrl(a)) return a =
                new p(n.LIVE_STREAMING_TASK_CONFLICT), c.onError(a), z.reject(a);
            b = b ? ra.TRANSCODE : ra.RAW;
            return this._createLiveStreamingClient(b).startLiveStreamingTask(a, b).then(() => c.onSuccess()).catch(a => {
                throw c.onError(a), a;
            })
        }

        setLiveTranscoding(a) {
            let b = u.reportApiInvoke(this._sessionId, {name: y.SET_LIVE_TRANSCODING, options: [a], tag: D.TRACER});
            return this._createLiveStreamingClient(ra.TRANSCODE).setTranscodingConfig(a).then(() => b.onSuccess()).catch(a => {
                throw b.onError(a), a;
            })
        }

        stopLiveStreaming(a) {
            var b;
            let c =
                    u.reportApiInvoke(this._sessionId, {name: y.STOP_LIVE_STREAMING, options: [a], tag: D.TRACER}),
                e = I(b = [this._liveRawStreamingClient, this._liveTranscodeStreamingClient]).call(b, b => b && b.hasUrl(a));
            return e.length ? z.all(B(e).call(e, b => b && b.stopLiveStreamingTask(a))).then(() => c.onSuccess()).catch(a => {
                throw c.onError(a), a;
            }) : (b = new p(n.INVALID_PARAMS, "can not find live streaming url to stop"), c.onError(b), z.reject(b))
        }

        async addInjectStreamUrl(a, b) {
            let c = u.reportApiInvoke(this._sessionId, {
                name: y.ADD_INJECT_STREAM_URL,
                options: [a, b], tag: D.TRACER
            });
            try {
                if (!this._joinInfo) throw new p(n.INVALID_OPERATION, "can not addInjectStreamUrl, no joininfo");
                let c = this._createLiveStreamingClient(ra.INJECT);
                c.setInjectStreamConfig(b, 0);
                await c.startLiveStreamingTask(a, ra.INJECT)
            } catch (e) {
                throw c.onError(e), e;
            }
            c.onSuccess()
        }

        async removeInjectStreamUrl() {
            let a = u.reportApiInvoke(this._sessionId, {name: y.REMOVE_INJECT_STREAM_URL, options: [], tag: D.TRACER});
            try {
                var b, c;
                let a = this._createLiveStreamingClient(ra.INJECT),
                    g = S(b = vb(oc(c = a.streamingTasks).call(c))).call(b,
                        a => a.mode === ra.INJECT);
                if (!this._joinInfo || !g) throw new p(n.INVALID_OPERATION, "can remove addInjectStreamUrl, no joininfo or inject task");
                await a.stopLiveStreamingTask(g.url)
            } catch (e) {
                throw a.onError(e), e;
            }
            a.onSuccess()
        }

        async startChannelMediaRelay(a) {
            let b = u.reportApiInvoke(this._sessionId, {
                name: y.START_CHANNEL_MEDIA_RELAY,
                options: [a],
                tag: D.TRACER
            });
            try {
                vi(a), await this._createChannelMediaRelayClient().startChannelMediaRelay(a)
            } catch (c) {
                return b.onError(c), c.throw()
            }
            b.onSuccess()
        }

        async updateChannelMediaRelay(a) {
            let b =
                u.reportApiInvoke(this._sessionId, {name: y.UPDATE_CHANNEL_MEDIA_RELAY, options: [a], tag: D.TRACER});
            try {
                vi(a), await this._createChannelMediaRelayClient().updateChannelMediaRelay(a)
            } catch (c) {
                return b.onError(c), c.throw()
            }
            b.onSuccess()
        }

        async stopChannelMediaRelay() {
            let a = u.reportApiInvoke(this._sessionId, {name: y.STOP_CHANNEL_MEDIA_RELAY, options: [], tag: D.TRACER});
            try {
                await this._createChannelMediaRelayClient().stopChannelMediaRelay()
            } catch (b) {
                return a.onError(b), b.throw()
            }
            a.onSuccess()
        }

        sendStreamMessage(a,
                          b = !0) {
            if (!this._joinInfo) throw new p(n.INVALID_OPERATION, "can not send data stream, not joined");
            "string" == typeof a && (a = (new TextEncoder).encode(a));
            if (1024 < (new Blob([a])).size) throw new p(n.INVALID_PARAMS, "stream message out of range.");
            return this._gateway.signal.request(ka.DATA_STREAM, {payload: Sd(a)}, !b)
        }

        sendMetadata(a) {
            if (!this._joinInfo) throw new p(n.INVALID_OPERATION, "can not send metadata, not joined");
            if (1024 < (new Blob([a])).size) throw new p(n.METADATA_OUT_OF_RANGE);
            return this._gateway.signal.request(ka.SEND_METADATA,
                {session_id: this._joinInfo.sid, metadata: Sd(a)})
        }

        async sendCustomReportMessage(a) {
            Vb(a) || (a = [a]);
            r(a).call(a, Ul);
            let b = u.reportApiInvoke(this._sessionId, {
                name: y.SEND_CUSTOM_REPORT_MESSAGE,
                options: [],
                tag: D.TRACER
            });
            if (!this._joinInfo) return a = new p(n.INVALID_OPERATION, "can not send custom report, not joined"), b.onError(a), a.throw();
            await u.sendCustomReportMessage(this._joinInfo.sid, a)
        }

        getLocalAudioStats() {
            if (!this._highStream) return xe;
            let a = this._statsCollector.getLocalAudioTrackStats(this._highStream.connectionId);
            return ca().name === Y.SAFARI && this._highStream && this._highStream.audioTrack && !this._highStream.audioTrack.isActive && (a.sendVolumeLevel = 0), a
        }

        getRemoteAudioStats() {
            var a;
            let b = {};
            return r(a = this._remoteStream).call(a, (a, e) => {
                b[e] = this._statsCollector.getRemoteAudioTrackStats(a.connectionId)
            }), b
        }

        getLocalVideoStats() {
            return this._highStream ? this._statsCollector.getLocalVideoTrackStats(this._highStream.connectionId) : ye
        }

        getRemoteVideoStats() {
            var a;
            let b = {};
            return r(a = this._remoteStream).call(a, (a, e) => {
                b[e] =
                    this._statsCollector.getRemoteVideoTrackStats(a.connectionId)
            }), b
        }

        getRemoteNetworkQuality() {
            var a;
            let b = {};
            return r(a = this._remoteStream).call(a, (a, e) => {
                b[e] = this._statsCollector.getRemoteNetworkQualityStats(a.connectionId)
            }), b
        }

        async pickSVCLayer(a, b) {
            Ra(b.spatialLayer, "spatialLayer", [0, 1, 2, 3]);
            Ra(b.temporalLayer, "temporalLayer", [0, 1, 2, 3]);
            try {
                await this._gateway.pickSVCLayer(a, b)
            } catch (c) {
                throw k.error("[".concat(this._clientId, "] pick SVC layer failed"), c.toString()), c;
            }
        }

        _reset() {
            var a, b, c;
            k.debug("[".concat(this._clientId,
                "] reset client"));
            this._axiosCancelSource.cancel();
            this._axiosCancelSource = Bb.CancelToken.source();
            this._streamFallbackTypeCacheMap = new ha;
            this._remoteStreamTypeCacheMap = new ha;
            this._configDistribute.stopGetConfigDistribute();
            this._defaultStreamFallbackType = this._proxyServer = this._joinInfo = void 0;
            this._sessionId = null;
            this._statsCollector.reset();
            this._channelName = this._uid = this._appId = this._key = void 0;
            r(a = this._users).call(a, a => {
                a.audioTrack && (a.audioTrack.stop(), a.audioTrack._isDestroyed = !0);
                a.videoTrack &&
                (a.videoTrack.stop(), a.videoTrack._isDestroyed = !0)
            });
            this._users = [];
            this._audioVolumeIndicationInterval && (window.clearInterval(this._audioVolumeIndicationInterval), this._audioVolumeIndicationInterval = void 0);
            this._highStream && (this._highStream.closeP2PConnection(!0), this._highStream = void 0);
            r(b = this._bindEnabledTracks).call(b, a => {
                a.off(G.NEED_ADD_TRACK, this._handleLocalTrackEnable);
                a.off(G.NEED_REMOVE_TRACK, this._handleLocalTrackDisable)
            });
            this._bindEnabledTracks = [];
            this._lowStream && (this._lowStream.closeP2PConnection(!0),
                this._lowStream = void 0);
            r(c = this._remoteStream).call(c, a => {
                a.closeP2PConnection(!0)
            });
            this._remoteStream = new ha;
            this._publishMutex = new Sb("client-publish");
            this._subscribeMutex = new ha;
            this._networkQualityInterval && (window.clearInterval(this._networkQualityInterval), this._networkQualityInterval = void 0);
            this._injectStreamingClient && (this._injectStreamingClient.terminate(), this._injectStreamingClient.removeAllListeners(), this._injectStreamingClient = void 0);
            this._liveRawStreamingClient && (this._liveRawStreamingClient.terminate(),
                this._liveRawStreamingClient.removeAllListeners(), this._liveRawStreamingClient = void 0);
            this._liveTranscodeStreamingClient && (this._liveTranscodeStreamingClient.terminate(), this._liveTranscodeStreamingClient.removeAllListeners(), this._liveTranscodeStreamingClient = void 0);
            this._channelMediaRelayClient && (this._channelMediaRelayClient.dispose(), this._channelMediaRelayClient = void 0)
        }

        _startSession(a, b) {
            var c, e, g;
            let h = a || ta(32, "").toUpperCase();
            a ? k.debug(m(c = "[".concat(this._clientId, "] new Session ")).call(c,
                h)) : k.debug(m(e = m(g = "[".concat(this._clientId, "] renewSession ")).call(g, this._sessionId, " => ")).call(e, h));
            this._sessionId = h;
            b ? u.sessionInit(this._sessionId, {
                lts: (new Date).getTime(),
                cname: b.channel,
                appid: b.appId,
                mode: this._mode
            }) : this._joinInfo ? u.sessionInit(this._sessionId, {
                lts: (new Date).getTime(),
                cname: this._joinInfo.cname,
                appid: this._joinInfo.appId,
                mode: this._mode
            }) : this._gateway.joinInfo && u.sessionInit(this._sessionId, {
                lts: (new Date).getTime(), cname: this._gateway.joinInfo.cname, appid: this._gateway.joinInfo.appId,
                mode: this._mode
            });
            this._joinInfo && (this._joinInfo.sid = h);
            this._gateway.joinInfo && (this._gateway.joinInfo.sid = h)
        }

        async _publishHighStream(a) {
            if (!this._joinInfo) throw new p(n.INVALID_OPERATION, "Can't publish stream, haven't joined yet!");
            if ("CONNECTED" !== this.connectionState && "RECONNECTING" !== this.connectionState) throw new p(n.INVALID_OPERATION, "can not publish stream in ".concat(this.connectionState, " state"));
            if ("auto" === this._turnServer.mode && v.FORCE_TURN && !v.TURN_ENABLE_TCP && !v.TURN_ENABLE_UDP) throw new p(n.UNEXPECTED_ERROR,
                "force TURN With No TURN Configuration");
            if (k.debug("[".concat(this._clientId, "] publish high stream")), this._highStream) return await this._highStream.addTracks(a), this._highStream;
            this._highStream = new Fl(this._statsCollector, this._joinInfo, this._codec);
            await this._highStream.addTracks(a);
            try {
                await this._gateway.publish(this._highStream, "high")
            } catch (b) {
                throw this._highStream = void 0, b;
            }
            return this._highStream.on(H.CONNECTION_STATE_CHANGE, (a, c) => {
                this._highStream && ("connected" === a ? this.emit(R.MEDIA_RECONNECT_END,
                    this._highStream.getUserId()) : "connecting" === a && this.emit(R.MEDIA_RECONNECT_START, this._highStream.getUserId()))
            }), this._highStream
        }

        async _publishLowStream(a) {
            if (!this._joinInfo) throw new p(n.INVALID_OPERATION, "Can't publish stream, haven't joined yet!");
            if ("CONNECTED" !== this.connectionState && "RECONNECTING" !== this.connectionState) throw new p(n.INVALID_OPERATION, "can not publish stream in ".concat(this.connectionState, " state"));
            if (!this._highStream || "connected" !== this._highStream.connectionState) throw new p(n.UNEXPECTED_ERROR,
                "Could not find high stream");
            if (this._lowStream) return (new p(n.UNEXPECTED_ERROR, "[".concat(this._clientId, "] Can't publish low stream when stream already publish"))).throw();
            k.debug("[".concat(this._clientId, "] publish low stream"));
            this._lowStream = new Fl(this._statsCollector, this._joinInfo, this._codec, !0);
            let b = this._configDistribute.getLowStreamConfigDistribute();
            b && b.bitrate && (this._lowStreamParameter || (this._lowStreamParameter = {
                width: 160,
                height: 120,
                framerate: 15,
                bitrate: 50
            }), this._lowStreamParameter &&
            this._lowStreamParameter.bitrate && b.bitrate < this._lowStreamParameter.bitrate && (this._lowStreamParameter.bitrate = b.bitrate));
            this._lowStream.lowStreamParameter = this._lowStreamParameter;
            await this._lowStream.addTracks([a]);
            try {
                await this._gateway.publish(this._lowStream, "low")
            } catch (c) {
                throw this._lowStream = void 0, c;
            }
            this._highStream.lowStreamConnection = this._lowStream
        }

        _createLiveStreamingClient(a) {
            if (!this._joinInfo || !this._appId) return (new p(n.INVALID_OPERATION, "can not create live streaming client, please join channel first")).throw();
            let b = () => new Sp(this._joinInfo, this._config.websocketRetryConfig || La, this._config.httpRetryConfig || La),
                c = a => {
                    a.onLiveStreamError = (a, b) => {
                        u.reportApiInvoke(this._sessionId, {
                            name: y.ON_LIVE_STREAM_ERROR,
                            options: [a, b],
                            tag: D.TRACER
                        }).onSuccess();
                        this.emit(R.LIVE_STREAMING_ERROR, a, b)
                    };
                    a.onLiveStreamWarning = (a, b) => {
                        u.reportApiInvoke(this._sessionId, {
                            name: y.ON_LIVE_STREAM_WARNING,
                            options: [a, b],
                            tag: D.TRACER
                        }).onSuccess();
                        this.emit(R.LIVE_STREAMING_WARNING, a, b)
                    };
                    a.on(Nc.REQUEST_WORKER_MANAGER_LIST, (a, b, c) => {
                        if (!this._joinInfo) return c(new p(n.INVALID_OPERATION, "can not find join info to get worker manager"));
                        fi(a, this._joinInfo, this._axiosCancelSource.token, La).then(b).catch(c)
                    })
                };
            switch (a) {
                case ra.RAW:
                    return this._liveRawStreamingClient || (this._liveRawStreamingClient = b(), c(this._liveRawStreamingClient)), this._liveRawStreamingClient;
                case ra.TRANSCODE:
                    return this._liveTranscodeStreamingClient || (this._liveTranscodeStreamingClient = b(), c(this._liveTranscodeStreamingClient)), this._liveTranscodeStreamingClient;
                case ra.INJECT:
                    return this._injectStreamingClient || (this._injectStreamingClient = b(), this._injectStreamingClient.on(Nc.REQUEST_WORKER_MANAGER_LIST, (a, b, c) => {
                        if (!this._joinInfo) return c(new p(n.INVALID_OPERATION, "can not find join info to get worker manager"));
                        fi(a, this._joinInfo, this._axiosCancelSource.token, La).then(b).catch(c)
                    }), this._injectStreamingClient.onInjectStatusChange = (a, b, c) => {
                        this.emit(R.INJECT_STREAM_STATUS, a, b, c)
                    }), this._injectStreamingClient
            }
        }

        _createChannelMediaRelayClient() {
            return this._joinInfo ?
                (this._channelMediaRelayClient || (this._channelMediaRelayClient = new Up(this._joinInfo, this._clientId, this._config.websocketRetryConfig || La, this._config.httpRetryConfig || La), this._channelMediaRelayClient.on("state", a => {
                    "RELAY_STATE_FAILURE" === a && this._channelMediaRelayClient && this._channelMediaRelayClient.dispose();
                    this.emit(R.CHANNEL_MEDIA_RELAY_STATE, a)
                }), this._channelMediaRelayClient.on("event", a => {
                    this.emit(R.CHANNEL_MEDIA_RELAY_EVENT, a)
                })), this._channelMediaRelayClient) : (new p(n.INVALID_OPERATION,
                    "can not create channel media relay client, please join channel first")).throw()
        }

        _handleGatewayEvents() {
            this._gateway.on(Aa.DISCONNECT_P2P, () => {
                var a;
                k.debug("[".concat(this._clientId, "] start full reconnect"));
                this._highStream && "disconnected" !== this._highStream.connectionState && (k.debug("[".concat(this._clientId, "] ready to reconnect high stream")), this._highStream.readyToReconnectPC());
                this._lowStream && "disconnected" !== this._lowStream.connectionState && (k.debug("[".concat(this._clientId, "] ready to reconnect low stream")),
                    this._lowStream.readyToReconnectPC());
                r(a = this._remoteStream).call(a, (a, c) => {
                    var b;
                    k.debug(m(b = "[".concat(this._clientId, "] ready to reconnect remote stream ")).call(b, c));
                    a.readyToReconnectPC()
                })
            });
            this._gateway.on(Aa.CONNECTION_STATE_CHANGE, (a, b, c) => {
                var e, g;
                let h = () => {
                    this.emit(R.CONNECTION_STATE_CHANGE, a, b, c)
                };
                if (k.info(m(e = m(g = "[".concat(this._clientId, "] connection state change: ")).call(g, b, " -> ")).call(e, a)), "DISCONNECTED" === a) return this._reset(), void h();
                var l, n;
                if ("RECONNECTING" === a) this._highStream &&
                "connecting" === this._highStream.connectionState && (k.debug("[".concat(this._clientId, "] ready to reconnect high stream")), this._highStream.readyToReconnectPC()), this._lowStream && "connecting" === this._lowStream.connectionState && (k.debug("[".concat(this._clientId, "] ready to reconnect low stream")), this._lowStream.readyToReconnectPC()), r(l = this._remoteStream).call(l, (a, b) => {
                    var c;
                    "connecting" === a.connectionState && (k.debug(m(c = "[".concat(this._clientId, "] ready to reconnect remote stream ")).call(c, b)),
                        a.readyToReconnectPC())
                }), r(n = this._users).call(n, a => {
                    a._trust_in_room_ = !1;
                    a._trust_audio_enabled_state_ = !1;
                    a._trust_video_enabled_state_ = !1;
                    a._trust_audio_mute_state_ = !1;
                    a._trust_video_mute_state_ = !1;
                    a._trust_stream_added_state_ = !1
                }), this._userOfflineTimeout && window.clearTimeout(this._userOfflineTimeout), this._streamRemovedTimeout && window.clearTimeout(this._streamRemovedTimeout), this._streamRemovedTimeout = this._userOfflineTimeout = void 0; else if ("CONNECTED" === a) {
                    var p, u;
                    r(p = this._streamFallbackTypeCacheMap).call(p,
                        (a, b) => {
                            this._gateway.setStreamFallbackOption(b, a).catch(a => k.warning("[".concat(this._clientId, "] auto set stream fallback option failed"), a))
                        });
                    r(u = this._remoteStreamTypeCacheMap).call(u, (a, b) => {
                        this._gateway.setRemoteVideoStreamType(b, a).catch(a => k.warning("[".concat(this._clientId, "] auto set remote stream type failed"), a))
                    });
                    this._highStream && "connecting" === this._highStream.connectionState ? this._highStream.reconnectPC().then(() => {
                        this._lowStream && "connecting" === this._lowStream.connectionState &&
                        this._lowStream.reconnectPC().catch(a => {
                            k.error("[".concat(this._clientId, "] republish low stream error"), a.toString());
                            this.emit(R.ERROR, {reason: a})
                        })
                    }).catch(a => {
                        k.error("[".concat(this._clientId, "] republish high stream error"), a.toString());
                        this.emit(R.ERROR, {reason: a})
                    }) : this._lowStream && "connecting" === this._lowStream.connectionState && this._lowStream.reconnectPC().catch(a => {
                        k.error("[".concat(this._clientId, "] republish low stream error"), a.toString());
                        this.emit(R.ERROR, {reason: a})
                    });
                    this._userOfflineTimeout =
                        window.setTimeout(() => {
                            var a;
                            if ("CONNECTED" === this.connectionState) {
                                this._userOfflineTimeout = void 0;
                                var b = I(a = this._users).call(a, a => !a._trust_in_room_);
                                r(b).call(b, a => {
                                    var b;
                                    k.debug(m(b = "[".concat(this._clientId, "] user offline timeout, emit user offline ")).call(b, a.uid));
                                    this._handleUserOffline({uid: a.uid})
                                })
                            }
                        }, 3E3);
                    this._streamRemovedTimeout = window.setTimeout(() => {
                        var a;
                        "CONNECTED" === this.connectionState && (this._streamRemovedTimeout = void 0, r(a = this._users).call(a, a => {
                            var b, c, e, g, h;
                            a._trust_audio_mute_state_ ||
                            (k.debug(m(b = "[".concat(this._clientId, "] auto dispatch audio unmute event ")).call(b, a.uid)), this._handleMuteStream(a.uid, "audio", !1));
                            a._trust_video_mute_state_ || (k.debug(m(c = "[".concat(this._clientId, "] auto dispatch video unmute event ")).call(c, a.uid)), this._handleMuteStream(a.uid, "video", !1));
                            a._trust_audio_enabled_state_ || (k.debug(m(e = "[".concat(this._clientId, "] auto dispatch enable local audio ")).call(e, a.uid)), this._handleSetStreamLocalEnable("audio", a.uid, !0));
                            !a._trust_video_enabled_state_ &&
                            a._video_enabled_ && (k.debug(m(g = "[".concat(this._clientId, "] auto dispatch enable local video ")).call(g, a.uid)), this._handleSetStreamLocalEnable("video", a.uid, !0));
                            a._trust_stream_added_state_ || (k.debug(m(h = "[".concat(this._clientId, "] auto dispatch stream remove ")).call(h, a.uid)), this._handleRemoveStream({
                                uid: a.uid,
                                uint_id: a._uintid
                            }))
                        }))
                    }, 1E3)
                }
                h()
            });
            this._gateway.on(Aa.REQUEST_NEW_GATEWAY_LIST, (a, b) => {
                if (!this._joinInfo) return b(new p(n.UNEXPECTED_ERROR, "can not recover, no join info"));
                dd(this._joinInfo,
                    this._axiosCancelSource.token, this._config.httpRetryConfig || La).then(b => {
                    var c;
                    this._joinInfo && (this._joinInfo.apResponse = b.gatewayInfo.res);
                    a(B(c = b.gatewayInfo.gatewayAddrs).call(c, a => {
                        if (this._joinInfo && this._joinInfo.proxyServer) {
                            var b, c;
                            a = a.split(":");
                            return m(b = m(c = "wss://".concat(this._joinInfo.proxyServer, "/ws/?h=")).call(c, a[0], "&p=")).call(b, a[1])
                        }
                        return "wss://".concat(a)
                    }))
                }).catch(b)
            });
            this._gateway.on(Aa.NETWORK_QUALITY, a => {
                "normal" === this._networkQualitySensitivity && this.emit(R.NETWORK_QUALITY,
                    a)
            });
            this._gateway.on(Aa.STREAM_TYPE_CHANGE, (a, b) => {
                this.emit(R.STREAM_TYPE_CHANGED, a, b);
                u.reportApiInvoke(this._sessionId, {
                    name: y.STREAM_TYPE_CHANGE,
                    options: [a, b],
                    tag: D.TRACER
                }).onSuccess(w({uid: a, streamType: b}))
            });
            this._gateway.on(Aa.IS_P2P_DISCONNECTED, a => {
                var b, c, e;
                let g = [];
                return this._highStream && g.push(this._highStream), r(b = this._remoteStream).call(b, a => g.push(a)), 0 === g.length || 0 === I(g).call(g, a => "connected" === a.connectionState).length ? a(!0) : (k.debug(m(c = "[".concat(this._clientId, "] ")).call(c,
                    B(e = I(g).call(g, a => "connected" === a.connectionState)).call(e, a => a.connectionId), " is connected")), void a(!1))
            });
            this._gateway.on(Aa.NEED_RENEW_SESSION, () => {
                this._startSession()
            });
            this._gateway.signal.on(da.ON_USER_ONLINE, this._handleUserOnline);
            this._gateway.signal.on(da.ON_USER_OFFLINE, this._handleUserOffline);
            this._gateway.signal.on(da.ON_ADD_AUDIO_STREAM, a => this._handleAddAudioOrVideoStream("audio", a.uid, a.uint_id));
            this._gateway.signal.on(da.ON_ADD_VIDEO_STREAM, a => this._handleAddAudioOrVideoStream("video",
                a.uid, a.uint_id));
            this._gateway.signal.on(da.ON_REMOVE_STREAM, this._handleRemoveStream);
            this._gateway.signal.on(da.ON_P2P_LOST, this._handleP2PLost);
            this._gateway.signal.on(da.MUTE_AUDIO, a => this._handleMuteStream(a.uid, "audio", !0));
            this._gateway.signal.on(da.UNMUTE_AUDIO, a => this._handleMuteStream(a.uid, "audio", !1));
            this._gateway.signal.on(da.MUTE_VIDEO, a => this._handleMuteStream(a.uid, "video", !0));
            this._gateway.signal.on(da.UNMUTE_VIDEO, a => this._handleMuteStream(a.uid, "video", !1));
            this._gateway.signal.on(da.RECEIVE_METADATA,
                a => {
                    let b = df(a.metadata);
                    this.emit(R.RECEIVE_METADATA, a.uid, b)
                });
            this._gateway.signal.on(da.ON_DATA_STREAM, a => {
                a.seq && delete a.seq;
                a.payload = df(a.payload);
                this.emit(R.STREAM_MESSAGE, a.uid, a.payload);
                this.onStreamMessage && this.onStreamMessage(a)
            });
            this._gateway.signal.on(da.ON_CRYPT_ERROR, () => {
                cd(() => {
                    k.warning("[".concat(this._clientId, "] on crypt error"));
                    this.emit(R.CRYPT_ERROR)
                }, this._sessionId)
            });
            this._gateway.signal.on(da.ON_TOKEN_PRIVILEGE_WILL_EXPIRE, this._handleTokenWillExpire);
            this._gateway.signal.on(da.ON_TOKEN_PRIVILEGE_DID_EXPIRE,
                () => {
                    k.warning("[".concat(this._clientId, "] received message onTokenPrivilegeDidExpire, please get new token and join again"));
                    this._reset();
                    this._gateway.leave(!0);
                    this.emit(R.ON_TOKEN_PRIVILEGE_DID_EXPIRE)
                });
            this._gateway.signal.on(da.ON_STREAM_FALLBACK_UPDATE, a => {
                var b, c;
                k.debug(m(b = m(c = "[".concat(this._clientId, "] stream fallback peerId: ")).call(c, a.stream_id, ", attr: ")).call(b, a.stream_type));
                this.emit(R.STREAM_FALLBACK, a.stream_id, 1 === a.stream_type ? "fallback" : "recover")
            });
            this._gateway.signal.on(da.ON_PUBLISH_STREAM,
                a => {
                    var b;
                    this.uid === this._uid && (this._highStream && this._highStream._waitingSuccessResponse && "connected" === this._highStream.connectionState ? (this._highStream.reportPublishEvent(!0, null, w({proxy: a.proxy})), k.info(m(b = "[".concat(this._clientId, "] on publish stream, ")).call(b, w(a))), void 0 !== a.proxy && this.emit(R.IS_USING_CLOUD_PROXY, !!a.proxy)) : this._lowStream ? this._lowStream.reportPublishEvent(!0, null, w({proxy: a.proxy})) : k.warning("get on_publish_stream message but cannot handle"))
                });
            this._gateway.signal.on(da.ENABLE_LOCAL_VIDEO,
                a => {
                    this._handleSetStreamLocalEnable("video", a.uid, !0)
                });
            this._gateway.signal.on(da.DISABLE_LOCAL_VIDEO, a => {
                this._handleSetStreamLocalEnable("video", a.uid, !1)
            });
            this._gateway.signal.on(Q.REQUEST_TIMEOUT, (a, b) => {
                if (this._joinInfo) switch (a) {
                    case ka.PUBLISH:
                        var c;
                        if (!b) break;
                        a = "high" === b.stream_type ? this._highStream : this._lowStream;
                        if (!a) break;
                        "offer" === b.state && u.publish(this._joinInfo.sid, {
                            lts: a.startTime,
                            succ: !1,
                            ec: n.TIMEOUT,
                            audio: b.audio,
                            video: b.video,
                            p2pid: b.p2p_id,
                            publishRequestid: a.ID,
                            screenshare: !(!a.videoTrack ||
                                -1 === N(c = a.videoTrack._hints).call(c, yb.SCREEN_TRACK)),
                            audioName: a.audioTrack && a.audioTrack.getTrackLabel(),
                            videoName: a.videoTrack && a.videoTrack.getTrackLabel()
                        });
                        break;
                    case ka.SUBSCRIBE:
                        (c = this._remoteStream.get(b.stream_id)) && b && u.subscribe(this._joinInfo.sid, {
                            lts: c.startTime,
                            succ: !1,
                            ec: n.TIMEOUT,
                            audio: !!b.audio,
                            video: !!b.video,
                            peerid: b.stream_id,
                            subscribeRequestid: c.ID,
                            p2pid: c.pc.ID
                        })
                }
            })
        }
    }

    Ad([Wc({report: u}), Ya("design:type", Function), Ya("design:paramtypes", [String]), Ya("design:returntype", void 0)],
        Pc.prototype, "setProxyServer", null);
    Ad([Wc(), Ya("design:type", Function), Ya("design:paramtypes", [Object]), Ya("design:returntype", void 0)], Pc.prototype, "setTurnServer", null);
    Ad([Wc({report: u}), Ya("design:type", Function), Ya("design:paramtypes", [Array, String]), Ya("design:returntype", void 0)], Pc.prototype, "setLocalAccessPoints", null);
    Ad([Wc({report: u}), Ya("design:type", Function), Ya("design:paramtypes", [String, String, Uint8Array]), Ya("design:returntype", void 0)], Pc.prototype, "setEncryptionConfig", null);
    Ad([We({report: u}), Ya("design:type", Function), Ya("design:paramtypes", [Object, Object]), Ya("design:returntype", z)], Pc.prototype, "pickSVCLayer", null);

    class Xp extends $k {
        constructor(a, b = {}) {
            super();
            this.currentLoopCount = this.pausePlayTime = this.startPlayOffset = this.startPlayTime = 0;
            this._currentState = "stopped";
            this.audioBuffer = a;
            this.options = b;
            this.startPlayOffset = this.options.startPlayTime || 0
        }

        set currentState(a) {
            a !== this._currentState && (this._currentState = a, this.emit(sb.AUDIO_SOURCE_STATE_CHANGE, this._currentState))
        }

        get currentState() {
            return this._currentState
        }

        createWebAudioDiagram() {
            return this.context.createGain()
        }

        get duration() {
            return this.audioBuffer.duration
        }

        get currentTime() {
            return "stopped" ===
            this.currentState ? 0 : "paused" === this.currentState ? this.pausePlayTime : (this.context.currentTime - this.startPlayTime + this.startPlayOffset) % this.audioBuffer.duration
        }

        updateOptions(a) {
            "stopped" === this.currentState ? (this.options = a, this.startPlayOffset = this.options.startPlayTime || 0) : k.warning("can not set audio source options")
        }

        startProcessAudioBuffer() {
            this.sourceNode && this.stopProcessAudioBuffer();
            this.sourceNode = this.createSourceNode();
            this.startSourceNode();
            this.currentState = "playing"
        }

        pauseProcessAudioBuffer() {
            this.sourceNode &&
            "playing" === this.currentState && (this.pausePlayTime = this.currentTime, this.sourceNode.onended = null, this.sourceNode.stop(), this.sourceNode.buffer = null, this.sourceNode = this.createSourceNode(), this.currentState = "paused")
        }

        seekAudioBuffer(a) {
            this.sourceNode && (this.sourceNode.onended = null, "playing" === this.currentState && this.sourceNode.stop(), this.sourceNode = this.createSourceNode(), "playing" === this.currentState ? (this.startPlayOffset = a, this.startSourceNode()) : "paused" === this.currentState && (this.pausePlayTime =
                a))
        }

        resumeProcessAudioBuffer() {
            "paused" === this.currentState && this.sourceNode && (this.startPlayOffset = this.pausePlayTime, this.pausePlayTime = 0, this.startSourceNode(), this.currentState = "playing")
        }

        stopProcessAudioBuffer() {
            if (this.sourceNode) {
                this.sourceNode.onended = null;
                try {
                    this.sourceNode.stop()
                } catch (a) {
                }
                this.reset()
            }
        }

        startSourceNode() {
            var a;
            this.sourceNode && this.sourceNode.buffer && (this.sourceNode.start(0, this.startPlayOffset), this.startPlayTime = this.context.currentTime, this.sourceNode.onended = pa(a =
                this.handleSourceNodeEnded).call(a, this))
        }

        createSourceNode() {
            let a = this.context.createBufferSource();
            return a.buffer = this.audioBuffer, a.loop = !!this.options.loop, a.connect(this.outputNode), a
        }

        handleSourceNodeEnded() {
            if (this.currentLoopCount += 1, this.options.cycle && this.options.cycle > this.currentLoopCount) return this.startPlayOffset = 0, this.sourceNode = void 0, void this.startProcessAudioBuffer();
            this.reset()
        }

        reset() {
            this.startPlayOffset = this.options.startPlayTime || 0;
            this.currentState = "stopped";
            this.sourceNode &&
            (this.sourceNode.disconnect(), this.sourceNode = void 0);
            this.currentLoopCount = 0
        }
    }

    let yi = new ha;
    var Yp = la.setInterval;
    let Hl = ca().name;

    class Bd {
        constructor(a, b) {
            this.id = 0;
            Bd.count += 1;
            this.id = Bd.count;
            this.element = a;
            this.context = b
        }

        initPeers() {
            this.peerPair = [new RTCPeerConnection, new RTCPeerConnection];
            this.peerPair[1].ontrack = a => {
                let b = document.createElement("audio");
                b.srcObject = new MediaStream([a.track]);
                b.play();
                this.audioPlayerElement = b
            }
        }

        async switchSdp() {
            if (this.peerPair) {
                var a = async (a, b) => {
                    b = "offer" ===
                    b ? await a.createOffer() : await a.createAnswer();
                    return await a.setLocalDescription(b), "complete" === a.iceGatheringState ? a.localDescription : new z(b => {
                        a.onicegatheringstatechange = () => {
                            "complete" === a.iceGatheringState && b(a.localDescription)
                        }
                    })
                }, b = async (a, b) => await a.setRemoteDescription(b);
                try {
                    let c = await a(this.peerPair[0], "offer");
                    await b(this.peerPair[1], c);
                    let e = await a(this.peerPair[1], "answer");
                    await b(this.peerPair[0], e)
                } catch (c) {
                    throw(new p(n.LOCAL_AEC_ERROR, c.toString())).print();
                }
            }
        }

        async getTracksFromMediaElement(a) {
            if (this.audioTrack) return this.audioTrack;
            let b;
            try {
                a instanceof HTMLVideoElement && (a.captureStream ? a.captureStream() : a.mozCaptureStream()), b = this.context.createMediaStreamDestination(), this.context.createMediaElementSource(a).connect(b)
            } catch (c) {
                throw(new p(n.LOCAL_AEC_ERROR, c.toString())).print();
            }
            if (!b) throw(new p(n.LOCAL_AEC_ERROR, "no dest node when local aec")).print();
            a = b.stream.getAudioTracks()[0];
            return this.audioTrack = a, a
        }

        getElement() {
            return this.element
        }

        async startEchoCancellation() {
            this.context.resume();
            this.peerPair && this.close();
            this.initPeers();
            let a = await this.getTracksFromMediaElement(this.element);
            this.peerPair && this.peerPair[0].addTrack(a);
            await this.switchSdp()
        }

        close() {
            var a;
            k.debug("close echo cancellation unit, id is", this.id);
            this.audioPlayerElement && this.audioPlayerElement.pause();
            this.peerPair && r(a = this.peerPair).call(a, a => {
                a.close()
            });
            this.audioPlayerElement = this.peerPair = void 0
        }
    }

    Bd.count = 0;
    var Hg = function (a, b) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
    };
    let Zp =
        window.AudioContext || window.webkitAudioContext;

    class Il {
        constructor() {
            this.units = [];
            this._doesEnvironmentNeedAEC() && (this.context = new Zp)
        }

        processExternalMediaAEC(a) {
            var b;
            if (!this.context || !this._doesEnvironmentNeedAEC()) return k.debug("the system does not need to process local aec"), -1;
            let c = S(b = this.units).call(b, b => b && b.getElement() === a);
            return c || (c = new Bd(a, this.context), this.units.push(c)), c.startEchoCancellation(), k.debug("start processing local audio echo cancellation, id is", c.id), c.id
        }

        _doesEnvironmentNeedAEC() {
            return ca().name !==
                Y.SAFARI
        }
    }

    (function (a, b, c, e) {
        var g, h = arguments.length, k = 3 > h ? b : null === e ? e = T(b, c) : e;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) k = Reflect.decorate(a, b, c, e); else for (var m = a.length - 1; 0 <= m; m--) (g = a[m]) && (k = (3 > h ? g(k) : 3 < h ? g(b, c, k) : g(b, c)) || k);
        return 3 < h && k && X(b, c, k), k
    })([Wc({report: u}), Hg("design:type", Function), Hg("design:paramtypes", [HTMLAudioElement]), Hg("design:returntype", Number)], Il.prototype, "processExternalMediaAEC", null);
    let $p = new Il;
    var Jl, Kl, Ll, Ml;
    Qa("PROCESS_ID", m(Jl = m(Kl =
        m(Ll = m(Ml = "process-".concat(ta(8, ""), "-")).call(Ml, ta(4, ""), "-")).call(Ll, ta(4, ""), "-")).call(Kl, ta(4, ""), "-")).call(Jl, ta(12, "")));
    (function () {
        let a = ca();
        var b = navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia ? !0 : !1;
        fa.getDisplayMedia = b;
        fa.getStreamFromExtension = a.name === Y.CHROME && 34 < Number(a.version);
        fa.supportUnifiedPlan = function () {
            if (!(window.RTCRtpTransceiver && "currentDirection" in RTCRtpTransceiver.prototype)) return !1;
            let a = new RTCPeerConnection, b = !1;
            try {
                a.addTransceiver("audio"),
                    b = !0
            } catch (g) {
            }
            return a.close(), b
        }();
        fa.supportMinBitrate = a.name === Y.CHROME || a.name === Y.EDGE;
        fa.supportSetRtpSenderParameters = function () {
            let a = ca();
            return window.RTCRtpSender && window.RTCRtpSender.prototype.setParameters && window.RTCRtpSender.prototype.getParameters ? !!Md() || a.name === Y.SAFARI || a.name === Y.FIREFOX && 64 <= Number(a.version) : !1
        }();
        a.name !== Y.SAFARI && ca().name !== Y.WECHAT || (fa.supportDualStream = !1);
        fa.webAudioMediaStreamDest = function () {
            let a = ca();
            return a.name === Y.SAFARI && 12 > Number(a.version) ?
                !1 : !0
        }();
        fa.supportReplaceTrack = window.RTCRtpSender ? "function" == typeof RTCRtpSender.prototype.replaceTrack ? !0 : !1 : !1;
        fa.supportWebGL = "undefined" != typeof WebGLRenderingContext;
        fa.supportRequestFrame = !!window.CanvasCaptureMediaStreamTrack;
        Md() || (fa.webAudioWithAEC = !0);
        fa.supportShareAudio = function () {
            let a = ca();
            return (a.os === V.WIN_10 || a.os === V.WIN_81 || a.os === V.WIN_7 || a.os === V.LINUX || a.os === V.MAC_OS || a.os === V.MAC_OS_X) && a.name === Y.CHROME && 74 <= Number(a.version) ? !0 : !1
        }();
        fa.supportDualStreamEncoding = function () {
            let a =
                ca();
            return a.name === Y.CHROME && 87 === Number(a.version)
        }();
        k.info("browser compatibility", w(fa), w(a))
    })();
    let cb = {
        VERSION: Za, BUILD: "v4.6.3-0-g91da319d(8/10/2021, 9:07:29 PM)", setParameter: Qa, getParameter: function (a) {
            return v[a]
        }, getSupportedCodec: async function (a) {
            let b = null;
            a ? (b = new ul({}), b.addStream(a)) : b = new vl({});
            a = mi(await b.createOfferSDP());
            return b.close(), a
        }, checkSystemRequirements: function () {
            const a = u.reportApiInvoke(null, {name: y.CHECK_SYSTEM_REQUIREMENTS, options: [], tag: D.TRACER});
            var b =
                !1;
            try {
                var c = navigator.mediaDevices && navigator.mediaDevices.getUserMedia, e = window.WebSocket;
                b = !!(window.RTCPeerConnection && c && e)
            } catch (g) {
                return k.error("check system requirement failed: ", g), !1
            }
            c = !1;
            e = ca();
            e.name === Y.CHROME && 58 <= Number(e.version) && e.os !== V.IOS && (c = !0);
            e.name === Y.FIREFOX && 56 <= Number(e.version) && (c = !0);
            e.name === Y.OPERA && 45 <= Number(e.version) && (c = !0);
            e.name === Y.SAFARI && 11 <= Number(e.version) && (c = !0);
            ca().name !== Y.WECHAT && ca().name !== Y.QQ || e.os === V.IOS || (c = !0);
            k.debug("checkSystemRequirements, api:",
                b, "browser", c);
            b = b && c;
            return a.onSuccess(b), b
        }, getDevices: function (a) {
            return hb.enumerateDevices(!0, !0, a)
        }, getMicrophones: function (a) {
            return hb.getRecordingDevices(a)
        }, getCameras: function (a) {
            return hb.getCamerasDevices(a)
        }, getElectronScreenSources: Nh, getPlaybackDevices: function (a) {
            return hb.getSpeakers(a)
        }, createClient: function (a = {codec: "vp8", mode: "rtc"}) {
            const b = u.reportApiInvoke(null, {name: y.CREATE_CLIENT, options: [a], tag: D.TRACER});
            try {
                Ra(a.codec, "config.codec", ["vp8", "vp9", "av1", "h264"]), Ra(a.mode,
                    "config.mode", ["rtc", "live"]), void 0 !== a.proxyServer && Ea(a.proxyServer, "config.proxyServer", 1, 1E4), void 0 !== a.turnServer && Dh(a.turnServer), void 0 !== a.httpRetryConfig && Bh(a.httpRetryConfig), void 0 !== a.websocketRetryConfig && Bh(a.websocketRetryConfig), !0
            } catch (c) {
                throw b.onError(c), c;
            }
            return b.onSuccess(), new Pc(xc({forceWaitGatewayResponse: !0}, a, {role: "rtc" === a.mode ? "host" : a.role}))
        }, createCameraVideoTrack: async function (a = {encoderConfig: "480p_1"}) {
            const b = u.reportApiInvoke(null, {
                tag: D.TRACER, name: y.CREATE_CAM_VIDEO_TRACK,
                options: [tf({}, a)]
            }), c = of(a);
            var e = ta(8, "track-");
            let g = null;
            k.info("start create camera video track with config", w(a), "trackId", e);
            try {
                g = (await Cb({video: c}, e)).getVideoTracks()[0] || null
            } catch (h) {
                throw b.onError(h), h;
            }
            if (!g) return e = new p(n.UNEXPECTED_ERROR, "can not find track in media stream"), b.onError(e), e.throw();
            a.optimizationMode && uf(e, g, a, a.encoderConfig && rc(a.encoderConfig));
            a = new Cl(g, a, c, a.scalabiltyMode ? Fd(a.scalabiltyMode) : {
                numSpatialLayers: 1,
                numTemporalLayers: 1
            }, a.optimizationMode, e);
            return b.onSuccess(a.getTrackId()), k.info("create camera video success, trackId:", e), a
        }, createCustomVideoTrack: function (a) {
            const b = u.reportApiInvoke(null, {tag: D.TRACER, name: y.CREATE_CUSTOM_VIDEO_TRACK, options: [a]}),
                c = new Na(a.mediaStreamTrack, {
                    bitrateMax: a.bitrateMax,
                    bitrateMin: a.bitrateMin
                }, a.scalabiltyMode ? Fd(a.scalabiltyMode) : {
                    numSpatialLayers: 1,
                    numTemporalLayers: 1
                }, a.optimizationMode);
            return b.onSuccess(c.getTrackId()), k.info("create custom video track success with config", a, "trackId", c.getTrackId()),
                c
        }, createScreenVideoTrack: async function (a = {}, b = "disable") {
            const c = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.CREATE_SCREEN_VIDEO_TRACK,
                options: [tf({}, a), b]
            });
            a.encoderConfig ? "string" == typeof a.encoderConfig || a.encoderConfig.width && a.encoderConfig.height || (a.encoderConfig.width = {max: 1920}, a.encoderConfig.height = {max: 1080}) : a.encoderConfig = "1080p_2";
            var e = {};
            a.screenSourceType && (e.mediaSource = a.screenSourceType);
            a.extensionId && Vc() && (e.extensionId = a.extensionId);
            a.electronScreenSourceId && (e.sourceId =
                a.electronScreenSourceId);
            var g = a.encoderConfig ? Oe(a.encoderConfig) : null;
            g = (e.mandatory = {
                chromeMediaSource: "desktop",
                maxWidth: g ? g.width : void 0,
                maxHeight: g ? g.height : void 0
            }, g && g.frameRate && ("number" == typeof g.frameRate ? (e.mandatory.maxFrameRate = g.frameRate, e.mandatory.minFrameRate = g.frameRate) : (e.mandatory.maxFrameRate = g.frameRate.max || g.frameRate.ideal || g.frameRate.exact || void 0, e.mandatory.minFrameRate = g.frameRate.min || g.frameRate.ideal || g.frameRate.exact || void 0), e.frameRate = g.frameRate), g && g.width &&
            (e.width = g.width), g && g.height && (e.height = g.height), e);
            const h = ta(8, "track-");
            let l = null;
            e = null;
            const m = fa;
            if (!m.supportShareAudio && "enable" === b) return a = new p(n.NOT_SUPPORTED, "your browser or platform is not support share-screen with audio"), c.onError(a), a.throw();
            k.info("start create screen video track with config", a, "withAudio", b, "trackId", h);
            try {
                const a = await Cb({screen: g, screenAudio: "auto" === b ? m.supportShareAudio : "enable" === b}, h);
                l = a.getVideoTracks()[0] || null;
                e = a.getAudioTracks()[0] || null
            } catch (t) {
                throw c.onError(t),
                    t;
            }
            if (!l) return a = new p(n.UNEXPECTED_ERROR, "can not find track in media stream"), c.onError(a), a.throw();
            if (!e && "enable" === b) return l && l.stop(), a = new p(n.SHARE_AUDIO_NOT_ALLOWED), c.onError(a), a.throw();
            a.optimizationMode || (a.optimizationMode = "detail");
            a.optimizationMode && (uf(h, l, a, a.encoderConfig && Oe(a.encoderConfig)), a.encoderConfig && "string" != typeof a.encoderConfig && (a.encoderConfig.bitrateMin = a.encoderConfig.bitrateMax));
            a = new Na(l, a.encoderConfig ? Oe(a.encoderConfig) : {}, a.scalabiltyMode ? Fd(a.scalabiltyMode) :
                {numSpatialLayers: 1, numTemporalLayers: 1}, a.optimizationMode, h);
            if (a._hints.push(yb.SCREEN_TRACK), !e) return c.onSuccess(a.getTrackId()), k.info("create screen video track success", "video:", a.getTrackId()), a;
            b = new jb(e);
            return c.onSuccess([a.getTrackId(), b.getTrackId()]), k.info("create screen video track success", "video:", a.getTrackId(), "audio:", b.getTrackId()), [a, b]
        }, createMicrophoneAndCameraTracks: async function (a = {}, b = {encoderConfig: "480p_1"}) {
            var c, e, g;
            const h = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.CREATE_MIC_AND_CAM_TRACKS, options: [a, b]
            }), l = of(b), q = ki(a), t = ta(8, "track-"), r = ta(8, "track-");
            let v = null, x = null;
            k.info(m(c = m(e = m(g = "start create camera video track(".concat(r, ") and microphone audio track(")).call(g, t, ") with config, audio: ")).call(e, w(a), ", video: ")).call(c, w(b)));
            try {
                var z;
                const a = await Cb({audio: q, video: l}, m(z = "".concat(t, "-")).call(z, r));
                v = a.getAudioTracks()[0];
                x = a.getVideoTracks()[0]
            } catch (ma) {
                throw h.onError(ma), ma;
            }
            if (!v || !x) {
                var A = new p(n.UNEXPECTED_ERROR, "can not find tracks in media stream");
                return h.onError(A), A.throw()
            }
            b.optimizationMode && uf(r, x, b, b.encoderConfig && rc(b.encoderConfig));
            a = new tg(v, a, q, t);
            b = new Cl(x, b, l, b.scalabiltyMode ? Fd(b.scalabiltyMode) : {
                numSpatialLayers: 1,
                numTemporalLayers: 1
            }, b.optimizationMode, r);
            return h.onSuccess([a.getTrackId(), b.getTrackId()]), k.info(m(A = "create camera video track(".concat(r, ") and microphone audio track(")).call(A, t, ") success")), [a, b]
        }, createMicrophoneAudioTrack: async function (a = {}) {
            const b = u.reportApiInvoke(null, {
                tag: D.TRACER, name: y.CREATE_MIC_AUDIO_TRACK,
                options: [a]
            }), c = ki(a);
            var e = ta(8, "track-");
            let g = null;
            k.info("start create microphone audio track with config", w(a), "trackId", e);
            try {
                g = (await Cb({audio: c}, e)).getAudioTracks()[0] || null
            } catch (h) {
                throw b.onError(h), h;
            }
            if (!g) return e = new p(n.UNEXPECTED_ERROR, "can not find track in media stream"), b.onError(e), e.throw();
            a = new tg(g, a, c, e);
            return b.onSuccess(a.getTrackId()), k.info("create microphone audio track success, trackId:", e), a
        }, createCustomAudioTrack: function (a) {
            const b = u.reportApiInvoke(null, {
                tag: D.TRACER,
                name: y.CREATE_CUSTOM_AUDIO_TRACK, options: [a]
            }), c = new jb(a.mediaStreamTrack, a.encoderConfig ? Gd(a.encoderConfig) : {});
            return k.info("create custom audio track success with config", a, "trackId", c.getTrackId()), b.onSuccess(c.getTrackId()), c
        }, createBufferSourceAudioTrack: async function (a) {
            const b = u.reportApiInvoke(null, {tag: D.TRACER, name: y.CREATE_BUFFER_AUDIO_TRACK, options: [a]}),
                c = ta(8, "track-");
            k.info("start create buffer source audio track with config", w(a), "trackId", c);
            const e = a.source;
            if (!(a.source instanceof
                AudioBuffer)) try {
                a.source = await qm(a.source, a.cacheOnlineFile)
            } catch (h) {
                return b.onError(h), h.throw()
            }
            const g = new Xp(a.source);
            a = new ap(e, g, a.encoderConfig ? Gd(a.encoderConfig) : {}, c);
            return k.info("create buffer source audio track success, trackId:", c), b.onSuccess(a.getTrackId()), a
        }, setLogLevel: function (a) {
            k.setLogLevel(a)
        }, enableLogUpload: function () {
            k.enableLogUpload()
        }, disableLogUpload: function () {
            k.disableLogUpload()
        }, createChannelMediaRelayConfiguration: function () {
            return new wi
        }, checkAudioTrackIsActive: async function (a,
                                                    b = 5E3) {
            const c = u.reportApiInvoke(null, {tag: D.TRACER, name: y.CHECK_AUDIO_TRACK_IS_ACTIVE, options: [b]});
            if (!(a instanceof jb || a instanceof zd)) {
                var e = new p(n.INVALID_TRACK, "the parameter is not a audio track");
                return c.onError(e), e.throw()
            }
            b && 1E3 > b && (b = 1E3);
            const g = a instanceof jb ? a.getTrackLabel() : "remote_track";
            let h = e = a.getVolumeLevel(), l = e;
            const q = x();
            return new z(e => {
                const n = Yp(() => {
                    var p = a.getVolumeLevel();
                    h = p > h ? p : h;
                    l = p < l ? p : l;
                    p = 1E-4 < h - l;
                    var r = x() - q;
                    if (p || r > b) {
                        var t;
                        clearInterval(n);
                        r = {
                            duration: r,
                            deviceLabel: g, maxVolumeLevel: h, result: p
                        };
                        k.info(m(t = "[track-".concat(a.getTrackId(), "] check audio track active completed. ")).call(t, w(r)));
                        c.onSuccess(r);
                        e(p)
                    }
                }, 200)
            })
        }, checkVideoTrackIsActive: async function (a, b = 5E3) {
            var c;
            const e = u.reportApiInvoke(null, {tag: D.TRACER, name: y.CHECK_VIDEO_TRACK_IS_ACTIVE, options: [b]});
            if (!(a instanceof Na || a instanceof yd)) return a = new p(n.INVALID_TRACK, "the parameter is not a video track"), e.onError(a), a.throw();
            b && 1E3 > b && (b = 1E3);
            var g = a instanceof Na ? a.getTrackLabel() :
                "remote_track", h = a.getMediaStreamTrack(!0);
            const l = document.createElement("video");
            l.style.width = "1px";
            l.style.height = "1px";
            l.setAttribute("muted", "");
            l.muted = !0;
            l.setAttribute("playsinline", "");
            l.controls = !1;
            Hl === Y.SAFARI && (l.style.opacity = "0.01", l.style.position = "fixed", l.style.left = "0", l.style.top = "0", document.body.appendChild(l));
            l.srcObject = new MediaStream([h]);
            l.play();
            const q = document.createElement("canvas");
            q.width = 160;
            q.height = 120;
            let r = h = 0;
            try {
                const a = x();
                h = await function (a, b, c, e) {
                    let g,
                        h = 0, l = null;
                    return new z((m, q) => {
                        mb(() => {
                            g && (g(), m(h))
                        }, b);
                        g = Ze(() => {
                            a:{
                                h > e && g && (g(), m(h));
                                var b = c.getContext("2d");
                                if (b) {
                                    b.drawImage(a, 0, 0, 160, 120);
                                    b = b.getImageData(0, 0, c.width, c.height);
                                    var r = Math.floor(b.data.length / 3);
                                    if (l) for (let a = 0; a < r; a += 3) if (b.data[a] !== l[a]) {
                                        h += 1;
                                        l = b.data;
                                        break a
                                    }
                                    l = b.data
                                } else b = new p(n.UNEXPECTED_ERROR, "can not get canvas 2d context."), k.error(b.toString()), q(b)
                            }
                        }, 30)
                    })
                }(l, b, q, 4);
                r = x() - a
            } catch (P) {
                throw e.onError(P), P;
            }
            Hl === Y.SAFARI && (l.pause(), l.remove());
            l.srcObject = null;
            b = 4 < h;
            g = {duration: r, changedPicNum: h, deviceLabel: g, result: b};
            return k.info(m(c = "[track-".concat(a.getTrackId(), "] check video track active completed. ")).call(c, w(g))), e.onSuccess(g), b
        }, setArea: function (a) {
            const b = u.reportApiInvoke(null, {name: y.SET_AREA, options: a, tag: D.TRACER});
            try {
                var c;
                let b = [];
                if ("string" == typeof a && (b = [a]), Vb(a) && (r(a).call(a, a => {
                    if (!ia(Ik).call(Ik, a)) throw new p(n.INVALID_PARAMS, "invalid area code");
                }), b = a), "[object Object]" === Object.prototype.toString.call(a)) {
                    const {
                        areaCode: c,
                        excludedArea: e
                    } = a;
                    if (!c) throw new p(n.INVALID_PARAMS, "area code is needed");
                    a = c;
                    "string" == typeof c && (a = [c]);
                    b = e ? wp(a, e) : a
                }
                Qa("AREAS", b);
                const g = (a => {
                    const b = {
                        CODE: "",
                        WEBCS_DOMAIN: [],
                        WEBCS_DOMAIN_BACKUP_LIST: [],
                        PROXY_CS: [],
                        CDS_AP: [],
                        ACCOUNT_REGISTER: [],
                        UAP_AP: [],
                        EVENT_REPORT_DOMAIN: [],
                        EVENT_REPORT_BACKUP_DOMAIN: [],
                        LOG_UPLOAD_SERVER: [],
                        PROXY_SERVER_TYPE3: []
                    };
                    return B(a).call(a, a => {
                        const c = jg[a];
                        (a = aa(c)) && B(a).call(a, a => {
                            var e;
                            "CODE" !== a && (b[a] = m(e = b[a]).call(e, c[a]))
                        })
                    }), b
                })(b);
                B(c = aa(g)).call(c, a => {
                    "LOG_UPLOAD_SERVER" === a || "EVENT_REPORT_DOMAIN" === a || "EVENT_REPORT_BACKUP_DOMAIN" === a || "PROXY_SERVER_TYPE3" === a ? Qa(a, g[a][0]) : Qa(a, g[a])
                });
                k.debug("set area success:", b.join(","))
            } catch (e) {
                throw b.onError(e), e;
            }
            b.onSuccess()
        }, loadModule: function (a, b) {
            a.moduleInit ? a.moduleInit({logger: k, report: u}, b) : k.debug("Invalid Plugin")
        }, processExternalMediaAEC: function (a) {
            $p.processExternalMediaAEC(a)
        }
    };
    return hb.on(Qb.CAMERA_DEVICE_CHANGED, a => {
        k.info("camera device changed", w(a));
        cb.onCameraChanged && cb.onCameraChanged(a)
    }),
        hb.on(Qb.RECORDING_DEVICE_CHANGED, a => {
            k.info("microphone device changed", w(a));
            cb.onMicrophoneChanged && cb.onMicrophoneChanged(a)
        }), hb.on(Qb.PLAYOUT_DEVICE_CHANGED, a => {
        k.debug("playout device changed", w(a));
        cb.onPlaybackDeviceChanged && cb.onPlaybackDeviceChanged(a)
    }), ib.onAutoplayFailed = () => {
        k.info("detect audio element autoplay failed");
        cb.onAudioAutoplayFailed && cb.onAudioAutoplayFailed()
    }, Xc.on("autoplay-failed", () => {
        k.info("detect webaudio autoplay failed");
        cb.onAudioAutoplayFailed && cb.onAudioAutoplayFailed()
    }),
        Rh.on("autoplay-failed", () => {
            k.info("detect media autoplay failed");
            cb.onAutoplayFailed ? cb.onAutoplayFailed() : cb.onAudioAutoplayFailed ? k.warning("AgoraRTC.onAudioAutoplayFailed has been deprecated in favor of AgoraRTC.onAutoplayFailed.\n\nPlease refer to the Agora document to migrate the newer API, https://docs.agora.io/en/Voice/autoplay_policy_web_ng?platform=Web .") : k.warning("We have detected a media autoplay failed event, and found out that you haven't implemented AgoraRTC.onAutoplayFailed callback yet.\n\nIt will cause audio/video element not playing automatically on some browsers without user interaction, possibly hurting user experiences.\n\nPlease refer to the Agora document to properly handle autoplay failed event, https://docs.agora.io/en/Voice/autoplay_policy_web_ng?platform=Web .")
        }),
        cb
})
//# sourceMappingURL=AgoraRTC_N-production.js.map
