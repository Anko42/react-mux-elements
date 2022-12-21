var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/mux-embed/dist/mux.js
var require_mux = __commonJS({
  "../../node_modules/mux-embed/dist/mux.js"(exports, module) {
    !function() {
      var e, t;
      e = this, t = function() {
        return function() {
          var e2 = { 80: function(e3, t3, r2) {
            e3.exports = r2(728).default;
          }, 728: function(e3, t3, r2) {
            "use strict";
            r2.d(t3, { default: function() {
              return Mt;
            } });
            var a = r2(48), n = r2.n(a), i = function() {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e4) {
                var t4 = 16 * Math.random() | 0;
                return ("x" === e4 ? t4 : 3 & t4 | 8).toString(16);
              });
            }, o = function() {
              return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6);
            }, s = function(e4) {
              return e4 && void 0 !== e4.nodeName ? (e4.muxId || (e4.muxId = e4.id || o()), e4.muxId) : e4;
            }, u = function(e4) {
              var t4;
              e4 && void 0 !== e4.nodeName ? e4 = s(t4 = e4) : t4 = document.querySelector(e4);
              var r3 = t4 && t4.nodeName ? t4.nodeName.toLowerCase() : "";
              return [t4, e4, r3];
            }, l = r2(640), c = r2.n(l), d = c().methodFactory;
            c().methodFactory = function(e4, t4, r3) {
              var a2 = d(e4, t4, r3);
              return function() {
                for (var e5 = ["[mux]"], t5 = 0; t5 < arguments.length; t5++)
                  e5.push(arguments[t5]);
                a2.apply(void 0, e5);
              };
            }, c().setLevel(c().getLevel());
            var f = c();
            function p() {
              return "1" === (n().doNotTrack || n().navigator && n().navigator.doNotTrack);
            }
            var _ = { now: function() {
              var e4 = n().performance, t4 = e4 && e4.timing, r3 = e4 && e4.timeOrigin || t4 && t4.navigationStart;
              return "number" == typeof r3 && "function" == typeof e4.now ? r3 + e4.now() : Date.now();
            } }, h = r2(678), v = r2.n(h), m = function(e4) {
              return y(e4)[0];
            }, y = function(e4) {
              if ("string" != typeof e4 || "" === e4)
                return ["localhost"];
              var t4, r3 = (e4.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4];
              return r3 && (t4 = (r3.match(/[^\.]+\.[^\.]+$/) || [])[0]), [r3, t4];
            }, b = { exists: function() {
              var e4 = n().performance;
              return void 0 !== (e4 && e4.timing);
            }, domContentLoadedEventEnd: function() {
              var e4 = n().performance, t4 = e4 && e4.timing;
              return t4 && t4.domContentLoadedEventEnd;
            }, navigationStart: function() {
              var e4 = n().performance, t4 = e4 && e4.timing;
              return t4 && t4.navigationStart;
            } };
            function g(e4, t4, r3) {
              r3 = void 0 === r3 ? 1 : r3, e4[t4] = e4[t4] || 0, e4[t4] += r3;
            }
            var w = ["x-cdn", "content-type", "x-request-id"];
            function T(e4) {
              var t4 = {};
              return (e4 = e4 || "").trim().split(/[\r\n]+/).forEach(function(e5) {
                if (e5) {
                  var r3 = e5.split(": "), a2 = r3.shift();
                  a2 && (w.indexOf(a2.toLowerCase()) >= 0 || 0 === a2.toLowerCase().indexOf("x-litix-")) && (t4[a2] = r3.join(": "));
                }
              }), t4;
            }
            var k = function(e4) {
              var t4 = {};
              for (var r3 in e4) {
                var a2 = e4[r3];
                -1 !== a2["DATA-ID"].search("io.litix.data.") && (t4[a2["DATA-ID"].replace("io.litix.data.", "")] = a2.VALUE);
              }
              return t4;
            };
            function E(e4, t4) {
              var r3 = Object.keys(e4);
              if (Object.getOwnPropertySymbols) {
                var a2 = Object.getOwnPropertySymbols(e4);
                t4 && (a2 = a2.filter(function(t5) {
                  return Object.getOwnPropertyDescriptor(e4, t5).enumerable;
                })), r3.push.apply(r3, a2);
              }
              return r3;
            }
            function x(e4) {
              for (var t4 = 1; t4 < arguments.length; t4++) {
                var r3 = null != arguments[t4] ? arguments[t4] : {};
                t4 % 2 ? E(Object(r3), true).forEach(function(t5) {
                  D(e4, t5, r3[t5]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r3)) : E(Object(r3)).forEach(function(t5) {
                  Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(r3, t5));
                });
              }
              return e4;
            }
            function D(e4, t4, r3) {
              return t4 in e4 ? Object.defineProperty(e4, t4, { value: r3, enumerable: true, configurable: true, writable: true }) : e4[t4] = r3, e4;
            }
            var S = function(e4) {
              if (!e4)
                return {};
              var t4 = b.navigationStart(), r3 = e4.loading, a2 = r3 ? r3.start : e4.trequest, n2 = r3 ? r3.first : e4.tfirst, i2 = r3 ? r3.end : e4.tload;
              return { bytesLoaded: e4.total, requestStart: Math.round(t4 + a2), responseStart: Math.round(t4 + n2), responseEnd: Math.round(t4 + i2) };
            }, q = function(e4) {
              if (e4 && "function" == typeof e4.getAllResponseHeaders)
                return T(e4.getAllResponseHeaders());
            }, O = function(e4, t4) {
              if (!e4 || "function" != typeof e4.getRequests)
                return {};
              var r3 = e4.getRequests({ state: "executed" });
              if (0 === r3.length)
                return {};
              var a2, n2 = r3[r3.length - 1], i2 = m(n2.url), o2 = n2.bytesLoaded, s2 = new Date(n2.requestStartDate).getTime(), u2 = new Date(n2.firstByteDate).getTime(), l2 = new Date(n2.requestEndDate).getTime(), c2 = isNaN(n2.duration) ? 0 : n2.duration, d2 = "function" == typeof t4.getMetricsFor ? t4.getMetricsFor(n2.mediaType).HttpList : t4.getDashMetrics().getHttpRequests(n2.mediaType);
              return d2.length > 0 && (a2 = T(d2[d2.length - 1]._responseHeaders || "")), { requestStart: s2, requestResponseStart: u2, requestResponseEnd: l2, requestBytesLoaded: o2, requestResponseHeaders: a2, requestMediaDuration: c2, requestHostname: i2 };
            }, P = function(e4, t4) {
              var r3 = t4.getQualityFor(e4), a2 = t4.getCurrentTrackFor(e4).bitrateList;
              return a2 ? { currentLevel: r3, renditionWidth: a2[r3].width || null, renditionHeight: a2[r3].height || null, renditionBitrate: a2[r3].bandwidth } : {};
            };
            function A(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            var R = 0, I = function() {
              function e4() {
                !function(e5, t5) {
                  if (!(e5 instanceof t5))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4);
              }
              var t4, r3, a2;
              return t4 = e4, r3 = [{ key: "on", value: function(e5, t5, r4) {
                return t5._eventEmitterGuid = t5._eventEmitterGuid || ++R, this._listeners = this._listeners || {}, this._listeners[e5] = this._listeners[e5] || [], r4 && (t5 = t5.bind(r4)), this._listeners[e5].push(t5), t5;
              } }, { key: "off", value: function(e5, t5) {
                var r4 = this._listeners && this._listeners[e5];
                r4 && r4.forEach(function(e6, a3) {
                  e6._eventEmitterGuid === t5._eventEmitterGuid && r4.splice(a3, 1);
                });
              } }, { key: "one", value: function(e5, t5, r4) {
                var a3 = this;
                t5._eventEmitterGuid = t5._eventEmitterGuid || ++R;
                var n2 = function n3() {
                  a3.off(e5, n3), t5.apply(r4 || this, arguments);
                };
                n2._eventEmitterGuid = t5._eventEmitterGuid, this.on(e5, n2);
              } }, { key: "emit", value: function(e5, t5) {
                var r4 = this;
                if (this._listeners) {
                  t5 = t5 || {};
                  var a3 = this._listeners["before*"] || [], n2 = this._listeners[e5] || [], i2 = this._listeners["after" + e5] || [], o2 = function(t6, a4) {
                    (t6 = t6.slice()).forEach(function(t7) {
                      t7.call(r4, { type: e5 }, a4);
                    });
                  };
                  o2(a3, t5), o2(n2, t5), o2(i2, t5);
                }
              } }], r3 && A(t4.prototype, r3), a2 && A(t4, a2), Object.defineProperty(t4, "prototype", { writable: false }), e4;
            }(), L = I;
            function N(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            var j = function() {
              function e4(t5) {
                var r4 = this;
                !function(e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4), this.pm = t5, this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = false, t5.on("playing", function() {
                  r4._playheadShouldBeProgressing = true;
                }), t5.on("play", this._startPlaybackHeartbeatInterval.bind(this)), t5.on("playing", this._startPlaybackHeartbeatInterval.bind(this)), t5.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)), t5.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)), t5.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)), t5.on("seeking", this._startPlaybackHeartbeatInterval.bind(this)), t5.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)), t5.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)), t5.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)), t5.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)), t5.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)), t5.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)), t5.on("error", this._stopPlaybackHeartbeatInterval.bind(this)), t5.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)), t5.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)), t5.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)), t5.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)), t5.on("seeked", function() {
                  t5.data.player_is_paused ? r4._stopPlaybackHeartbeatInterval() : r4._startPlaybackHeartbeatInterval();
                }), t5.on("timeupdate", function() {
                  null !== r4._playbackHeartbeatInterval && t5.emit("playbackheartbeat");
                }), t5.on("devicesleep", function(e5, a3) {
                  null !== r4._playbackHeartbeatInterval && (n().clearInterval(r4._playbackHeartbeatInterval), t5.emit("playbackheartbeatend", { viewer_time: a3.viewer_time }), r4._playbackHeartbeatInterval = null);
                });
              }
              var t4, r3, a2;
              return t4 = e4, (r3 = [{ key: "_startPlaybackHeartbeatInterval", value: function() {
                var e5 = this;
                null === this._playbackHeartbeatInterval && (this.pm.emit("playbackheartbeat"), this._playbackHeartbeatInterval = n().setInterval(function() {
                  e5.pm.emit("playbackheartbeat");
                }, this.pm.playbackHeartbeatTime));
              } }, { key: "_stopPlaybackHeartbeatInterval", value: function() {
                this._playheadShouldBeProgressing = false, null !== this._playbackHeartbeatInterval && (n().clearInterval(this._playbackHeartbeatInterval), this.pm.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
              } }]) && N(t4.prototype, r3), a2 && N(t4, a2), Object.defineProperty(t4, "prototype", { writable: false }), e4;
            }();
            function C(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            function H(e4, t4, r3) {
              return t4 && C(e4.prototype, t4), r3 && C(e4, r3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
            }
            var M = H(function e4(t4) {
              var r3 = this;
              !function(e5, t5) {
                if (!(e5 instanceof t5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e4), t4.on("viewinit", function() {
                r3.viewErrored = false;
              }), t4.on("error", function() {
                try {
                  var e5 = t4.errorTranslator({ player_error_code: t4.data.player_error_code, player_error_message: t4.data.player_error_message });
                  e5 ? (t4.data.player_error_code = e5.player_error_code, t4.data.player_error_message = e5.player_error_message, r3.viewErrored = true) : (delete t4.data.player_error_code, delete t4.data.player_error_message);
                } catch (e6) {
                  t4.mux.log.warn("Exception in error translator callback.", e6), r3.viewErrored = true;
                }
              });
            });
            function B(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            var U = function() {
              function e4(t5) {
                !function(e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4), this.pm = t5, this._watchTimeTrackerLastCheckedTime = null, t5.on("playbackheartbeat", this._updateWatchTime.bind(this)), t5.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
              }
              var t4, r3, a2;
              return t4 = e4, (r3 = [{ key: "_updateWatchTime", value: function(e5, t5) {
                var r4 = t5.viewer_time;
                null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = r4), g(this.pm.data, "view_watch_time", r4 - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = r4;
              } }, { key: "_clearWatchTimeState", value: function(e5, t5) {
                this._updateWatchTime(e5, t5), this._watchTimeTrackerLastCheckedTime = null;
              } }]) && B(t4.prototype, r3), a2 && B(t4, a2), Object.defineProperty(t4, "prototype", { writable: false }), e4;
            }();
            function F(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            var G = function() {
              function e4(t5) {
                !function(e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4), this.pm = t5, this._playbackTimeTrackerLastPlayheadPosition = -1, t5.on("playbackheartbeat", this._updatePlaybackTime.bind(this)), t5.on("playbackheartbeatend", this._clearPlaybackTimeState.bind(this)), t5.on("seeking", this._clearPlaybackTimeState.bind(this));
              }
              var t4, r3, a2;
              return t4 = e4, (r3 = [{ key: "_updatePlaybackTime", value: function() {
                var e5 = this.pm.data.player_playhead_time;
                if (this._playbackTimeTrackerLastPlayheadPosition >= 0 && e5 > this._playbackTimeTrackerLastPlayheadPosition) {
                  var t5 = e5 - this._playbackTimeTrackerLastPlayheadPosition;
                  t5 <= 1e3 && g(this.pm.data, "view_content_playback_time", t5);
                }
                this._playbackTimeTrackerLastPlayheadPosition = e5;
              } }, { key: "_clearPlaybackTimeState", value: function() {
                this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1;
              } }]) && F(t4.prototype, r3), a2 && F(t4, a2), Object.defineProperty(t4, "prototype", { writable: false }), e4;
            }();
            function W(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            var Q = function() {
              function e4(t5) {
                !function(e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4), this.pm = t5;
                var r4 = this._updatePlayheadTime.bind(this);
                t5.on("playbackheartbeat", r4), t5.on("playbackheartbeatend", r4), t5.on("timeupdate", r4), t5.on("destroy", function() {
                  t5.off("timeupdate", r4);
                });
              }
              var t4, r3, a2;
              return t4 = e4, (r3 = [{ key: "_updateMaxPlayheadPosition", value: function() {
                this.pm.data.view_max_playhead_position = void 0 === this.pm.data.view_max_playhead_position ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time);
              } }, { key: "_updatePlayheadTime", value: function(e5, t5) {
                var r4 = this, a3 = function() {
                  r4.pm.currentFragmentPDT && r4.pm.currentFragmentStart && (r4.pm.data.player_program_time = r4.pm.currentFragmentPDT + r4.pm.data.player_playhead_time - r4.pm.currentFragmentStart);
                };
                if (t5 && t5.player_playhead_time)
                  this.pm.data.player_playhead_time = t5.player_playhead_time, a3(), this._updateMaxPlayheadPosition();
                else if (this.pm.getPlayheadTime) {
                  var n2 = this.pm.getPlayheadTime();
                  void 0 !== n2 && (this.pm.data.player_playhead_time = n2, a3(), this._updateMaxPlayheadPosition());
                }
              } }]) && W(t4.prototype, r3), a2 && W(t4, a2), Object.defineProperty(t4, "prototype", { writable: false }), e4;
            }();
            function V(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            function J(e4, t4, r3) {
              return t4 && V(e4.prototype, t4), r3 && V(e4, r3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
            }
            var z = J(function e4(t4) {
              if (function(e5, t5) {
                if (!(e5 instanceof t5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e4), !t4.disableRebufferTracking) {
                var r3, a2 = function() {
                  if (r3) {
                    var e5 = t4.data.viewer_time - r3;
                    g(t4.data, "view_rebuffer_duration", e5), r3 = t4.data.viewer_time;
                  }
                  t4.data.view_watch_time >= 0 && t4.data.view_rebuffer_count > 0 && (t4.data.view_rebuffer_frequency = t4.data.view_rebuffer_count / t4.data.view_watch_time, t4.data.view_rebuffer_percentage = t4.data.view_rebuffer_duration / t4.data.view_watch_time);
                };
                t4.on("playbackheartbeat", function() {
                  return a2();
                }), t4.on("rebufferstart", function() {
                  r3 || (g(t4.data, "view_rebuffer_count", 1), r3 = t4.data.viewer_time, t4.one("rebufferend", function() {
                    a2(), r3 = void 0;
                  }));
                });
              }
            });
            function X(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            var K = function() {
              function e4(t5) {
                var r4 = this;
                !function(e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4), this.pm = t5, t5.disableRebufferTracking || t5.disablePlayheadRebufferTracking || (this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, t5.on("playbackheartbeat", this._checkIfRebuffering.bind(this)), t5.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)), t5.on("seeking", function() {
                  r4._cleanupRebufferTracker(null, { viewer_time: _.now() });
                }));
              }
              var t4, r3, a2;
              return t4 = e4, r3 = [{ key: "_checkIfRebuffering", value: function(e5, t5) {
                if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing)
                  this._cleanupRebufferTracker(e5, t5);
                else if (null !== this._lastCheckedTime)
                  if (this._lastPlayheadTime === this.pm.data.player_playhead_time) {
                    var r4 = t5.viewer_time - this._lastPlayheadTimeUpdatedTime;
                    "number" == typeof this.pm.sustainedRebufferThreshold && r4 >= this.pm.sustainedRebufferThreshold && (this._rebuffering || (this._rebuffering = true, this.pm.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }))), this._lastCheckedTime = t5.viewer_time;
                  } else
                    this._cleanupRebufferTracker(e5, t5, true);
                else
                  this._prepareRebufferTrackerState(t5.viewer_time);
              } }, { key: "_clearRebufferTrackerState", value: function() {
                this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
              } }, { key: "_prepareRebufferTrackerState", value: function(e5) {
                this._lastCheckedTime = e5, this._lastPlayheadTime = this.pm.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e5;
              } }, { key: "_cleanupRebufferTracker", value: function(e5, t5) {
                var r4 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (this._rebuffering)
                  this._rebuffering = false, this.pm.emit("rebufferend", { viewer_time: t5.viewer_time });
                else {
                  if (null === this._lastCheckedTime)
                    return;
                  var a3 = this.pm.data.player_playhead_time - this._lastPlayheadTime, n2 = t5.viewer_time - this._lastPlayheadTimeUpdatedTime;
                  "number" == typeof this.pm.minimumRebufferDuration && a3 > 0 && n2 - a3 > this.pm.minimumRebufferDuration && (this.pm.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }), this.pm.emit("rebufferend", { viewer_time: this._lastPlayheadTimeUpdatedTime + n2 - a3 }));
                }
                r4 ? this._prepareRebufferTrackerState(t5.viewer_time) : this._clearRebufferTrackerState();
              } }], r3 && X(t4.prototype, r3), a2 && X(t4, a2), Object.defineProperty(t4, "prototype", { writable: false }), e4;
            }(), Y = K;
            function $(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            var Z = function() {
              function e4(t5) {
                var r4 = this;
                !function(e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4), this.pm = t5, t5.on("viewinit", function() {
                  var e5 = t5.data, a3 = e5.view_id;
                  if (!e5.view_program_changed) {
                    var n2 = function(e6, n3) {
                      var i2 = n3.viewer_time;
                      "playing" === e6.type && void 0 === t5.data.view_time_to_first_frame ? r4.calculateTimeToFirstFrame(i2 || _.now(), a3) : "adplaying" !== e6.type || void 0 !== t5.data.view_time_to_first_frame && !r4._inPrerollPosition() || r4.calculateTimeToFirstFrame(i2 || _.now(), a3);
                    };
                    t5.one("playing", n2), t5.one("adplaying", n2), t5.one("viewend", function() {
                      t5.off("playing", n2), t5.off("adplaying", n2);
                    });
                  }
                });
              }
              var t4, r3, a2;
              return t4 = e4, (r3 = [{ key: "_inPrerollPosition", value: function() {
                return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3;
              } }, { key: "calculateTimeToFirstFrame", value: function(e5, t5) {
                t5 === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, { viewer_time: e5 }), this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time, (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.NAVIGATION_START && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.NAVIGATION_START));
              } }]) && $(t4.prototype, r3), a2 && $(t4, a2), Object.defineProperty(t4, "prototype", { writable: false }), e4;
            }();
            function ee(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            function te(e4, t4, r3) {
              return t4 && ee(e4.prototype, t4), r3 && ee(e4, r3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
            }
            var re = te(function e4(t4) {
              var r3 = this;
              !function(e5, t5) {
                if (!(e5 instanceof t5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e4), t4.on("viewinit", function() {
                r3._lastPlayheadPosition = -1;
              }), ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"].forEach(function(e5) {
                t4.on(e5, function() {
                  if (r3._lastPlayheadPosition >= 0 && t4.data.player_playhead_time >= 0 && r3._lastPlayerWidth >= 0 && r3._lastSourceWidth > 0 && r3._lastPlayerHeight >= 0 && r3._lastSourceHeight > 0) {
                    var e6 = t4.data.player_playhead_time - r3._lastPlayheadPosition;
                    if (e6 < 0)
                      return void (r3._lastPlayheadPosition = -1);
                    var a2 = Math.min(r3._lastPlayerWidth / r3._lastSourceWidth, r3._lastPlayerHeight / r3._lastSourceHeight), n2 = Math.max(0, a2 - 1), i2 = Math.max(0, 1 - a2);
                    t4.data.view_max_upscale_percentage = Math.max(t4.data.view_max_upscale_percentage || 0, n2), t4.data.view_max_downscale_percentage = Math.max(t4.data.view_max_downscale_percentage || 0, i2), g(t4.data, "view_total_content_playback_time", e6), g(t4.data, "view_total_upscaling", n2 * e6), g(t4.data, "view_total_downscaling", i2 * e6);
                  }
                  r3._lastPlayheadPosition = -1;
                });
              }), ["playing", "hb"].forEach(function(e5) {
                t4.on(e5, function() {
                  r3._lastPlayheadPosition = t4.data.player_playhead_time, r3._lastPlayerWidth = t4.data.player_width, r3._lastPlayerHeight = t4.data.player_height, r3._lastSourceWidth = t4.data.video_source_width, r3._lastSourceHeight = t4.data.video_source_height;
                });
              });
            });
            function ae(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            function ne(e4, t4, r3) {
              return t4 && ae(e4.prototype, t4), r3 && ae(e4, r3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
            }
            var ie = ne(function e4(t4) {
              var r3 = this;
              !function(e5, t5) {
                if (!(e5 instanceof t5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e4), this.isSeeking = false, t4.on("seeking", function(e5, a2) {
                v()(t4.data, a2), r3._lastSeekingTime = _.now(), false === r3.isSeeking && (r3.isSeeking = true, t4.send("seeking"));
              }), t4.on("seeked", function() {
                r3.isSeeking = false;
                var e5 = r3._lastSeekingTime || _.now(), a2 = _.now() - e5;
                g(t4.data, "view_seek_count", 1), g(t4.data, "view_seek_duration", a2);
                var n2 = t4.data.view_max_seek_time || 0;
                t4.data.view_max_seek_time = Math.max(n2, a2);
              }), t4.on("viewend", function() {
                r3.isSeeking = false;
              });
            });
            function oe(e4, t4) {
              return function(e5) {
                if (Array.isArray(e5))
                  return e5;
              }(e4) || function(e5, t5) {
                var r3 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
                if (null != r3) {
                  var a2, n2, i2 = [], o2 = true, s2 = false;
                  try {
                    for (r3 = r3.call(e5); !(o2 = (a2 = r3.next()).done) && (i2.push(a2.value), !t5 || i2.length !== t5); o2 = true)
                      ;
                  } catch (e6) {
                    s2 = true, n2 = e6;
                  } finally {
                    try {
                      o2 || null == r3.return || r3.return();
                    } finally {
                      if (s2)
                        throw n2;
                    }
                  }
                  return i2;
                }
              }(e4, t4) || function(e5, t5) {
                if (e5) {
                  if ("string" == typeof e5)
                    return se(e5, t5);
                  var r3 = Object.prototype.toString.call(e5).slice(8, -1);
                  return "Object" === r3 && e5.constructor && (r3 = e5.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(e5) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? se(e5, t5) : void 0;
                }
              }(e4, t4) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function se(e4, t4) {
              (null == t4 || t4 > e4.length) && (t4 = e4.length);
              for (var r3 = 0, a2 = new Array(t4); r3 < t4; r3++)
                a2[r3] = e4[r3];
              return a2;
            }
            function ue(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            var le = function(e4, t4) {
              e4.push(t4), e4.sort(function(e5, t5) {
                return e5.viewer_time - t5.viewer_time;
              });
            }, ce = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror"], de = function() {
              function e4(t5) {
                var r4 = this;
                !function(e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4), this.pm = t5, t5.on("viewinit", function() {
                  r4.isAdBreak = false, r4._currentAdRequestNumber = 0, r4._currentAdResponseNumber = 0, r4._adRequests = [], r4._adResponses = [], r4._adHasPlayed = false, r4._wouldBeNewAdPlay = true, r4._prerollPlayTime = void 0;
                }), ce.forEach(function(e5) {
                  return t5.on(e5, r4._updateAdData.bind(r4));
                });
                var a3 = function() {
                  r4.isAdBreak = false;
                };
                t5.on("adbreakstart", function() {
                  r4.isAdBreak = true;
                }), t5.on("play", a3), t5.on("playing", a3), t5.on("viewend", a3), t5.on("adrequest", function(e5, a4) {
                  a4 = v()({ ad_request_id: "generatedAdRequestId" + r4._currentAdRequestNumber++ }, a4), le(r4._adRequests, a4), g(t5.data, "view_ad_request_count"), r4.inPrerollPosition() && (t5.data.view_preroll_requested = true, r4._adHasPlayed || g(t5.data, "view_preroll_request_count"));
                }), t5.on("adresponse", function(e5, a4) {
                  a4 = v()({ ad_request_id: "generatedAdRequestId" + r4._currentAdResponseNumber++ }, a4), le(r4._adResponses, a4);
                  var n2 = r4.findAdRequest(a4.ad_request_id);
                  n2 && g(t5.data, "view_ad_request_time", Math.max(0, a4.viewer_time - n2.viewer_time));
                }), t5.on("adplay", function(e5, a4) {
                  r4._adHasPlayed = true, r4._wouldBeNewAdPlay && (r4._wouldBeNewAdPlay = false, g(t5.data, "view_ad_played_count")), r4.inPrerollPosition() && !t5.data.view_preroll_played && (t5.data.view_preroll_played = true, r4._adRequests.length > 0 && (t5.data.view_preroll_request_time = Math.max(0, a4.viewer_time - r4._adRequests[0].viewer_time)), t5.data.view_start && (t5.data.view_startup_preroll_request_time = Math.max(0, a4.viewer_time - t5.data.view_start)), r4._prerollPlayTime = a4.viewer_time);
                }), t5.on("adplaying", function(e5, a4) {
                  r4.inPrerollPosition() && void 0 === t5.data.view_preroll_load_time && void 0 !== r4._prerollPlayTime && (t5.data.view_preroll_load_time = a4.viewer_time - r4._prerollPlayTime, t5.data.view_startup_preroll_load_time = a4.viewer_time - r4._prerollPlayTime);
                }), t5.on("adended", function() {
                  r4._wouldBeNewAdPlay = true;
                }), t5.on("aderror", function() {
                  r4._wouldBeNewAdPlay = true;
                });
              }
              var t4, r3, a2;
              return t4 = e4, (r3 = [{ key: "inPrerollPosition", value: function() {
                return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3;
              } }, { key: "findAdRequest", value: function(e5) {
                for (var t5 = 0; t5 < this._adRequests.length; t5++)
                  if (this._adRequests[t5].ad_request_id === e5)
                    return this._adRequests[t5];
              } }, { key: "_updateAdData", value: function(e5, t5) {
                if (this.inPrerollPosition()) {
                  if (!this.pm.data.view_preroll_ad_tag_hostname && t5.ad_tag_url) {
                    var r4 = oe(y(t5.ad_tag_url), 2), a3 = r4[0], n2 = r4[1];
                    this.pm.data.view_preroll_ad_tag_domain = n2, this.pm.data.view_preroll_ad_tag_hostname = a3;
                  }
                  if (!this.pm.data.view_preroll_ad_asset_hostname && t5.ad_asset_url) {
                    var i2 = oe(y(t5.ad_asset_url), 2), o2 = i2[0], s2 = i2[1];
                    this.pm.data.view_preroll_ad_asset_domain = s2, this.pm.data.view_preroll_ad_asset_hostname = o2;
                  }
                }
              } }]) && ue(t4.prototype, r3), a2 && ue(t4, a2), Object.defineProperty(t4, "prototype", { writable: false }), e4;
            }();
            function fe(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            function pe(e4, t4, r3) {
              return t4 && fe(e4.prototype, t4), r3 && fe(e4, r3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
            }
            var _e = pe(function e4(t4) {
              var r3, a2;
              !function(e5, t5) {
                if (!(e5 instanceof t5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e4);
              var i2 = function() {
                t4.disableRebufferTracking || r3 && (g(t4.data, "view_waiting_rebuffer_duration", _.now() - r3), r3 = false, n().clearInterval(a2));
              }, o2 = false, s2 = function() {
                o2 = false, i2();
              };
              t4.on("waiting", function() {
                o2 && (t4.disableRebufferTracking || (g(t4.data, "view_waiting_rebuffer_count", 1), r3 = _.now(), a2 = n().setInterval(function() {
                  if (r3) {
                    var e5 = _.now();
                    g(t4.data, "view_waiting_rebuffer_duration", e5 - r3), r3 = e5;
                  }
                }, 250)));
              }), t4.on("playing", function() {
                i2(), o2 = true;
              }), t4.on("pause", s2), t4.on("seeking", s2);
            });
            function he(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            function ve(e4, t4, r3) {
              return t4 && he(e4.prototype, t4), r3 && he(e4, r3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
            }
            var me = ve(function e4(t4) {
              var r3 = this;
              !function(e5, t5) {
                if (!(e5 instanceof t5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e4);
              var a2 = function() {
                r3.lastWallClockTime = _.now(), t4.on("before*", n2);
              }, n2 = function(e5) {
                var a3 = _.now(), n3 = r3.lastWallClockTime;
                r3.lastWallClockTime = a3, a3 - n3 > 3e4 && (t4.emit("devicesleep", { viewer_time: n3 }), v()(t4.data, { viewer_time: n3 }), t4.send("devicesleep"), t4.emit("devicewake", { viewer_time: a3 }), v()(t4.data, { viewer_time: a3 }), t4.send("devicewake"));
              };
              t4.one("playbackheartbeat", a2), t4.on("playbackheartbeatend", function() {
                t4.off("before*", n2), t4.one("playbackheartbeat", a2);
              });
            }), ye = r2(375), be = r2(655), ge = r2.n(be), we = "muxData", Te = function() {
              var e4;
              try {
                e4 = ye.parse(ge().get(we) || "");
              } catch (t4) {
                e4 = {};
              }
              return e4;
            }, ke = function(e4) {
              try {
                ge().set(we, ye.stringify(e4), { expires: 7300 });
              } catch (e5) {
              }
            }, Ee = function() {
              var e4 = Te();
              return e4.mux_viewer_id = e4.mux_viewer_id || i(), e4.msn = e4.msn || Math.random(), ke(e4), { mux_viewer_id: e4.mux_viewer_id, mux_sample_number: e4.msn };
            };
            function xe(e4, t4) {
              var r3 = t4.beaconCollectionDomain, a2 = t4.beaconDomain;
              if (r3)
                return "https://" + r3;
              var n2 = a2 || "litix.io";
              return (e4 = e4 || "inferred").match(/^[a-z0-9]+$/) ? "https://" + e4 + "." + n2 : "https://img.litix.io/a.gif";
            }
            var De = function() {
              var e4;
              switch (Se()) {
                case "cellular":
                  e4 = "cellular";
                  break;
                case "ethernet":
                  e4 = "wired";
                  break;
                case "wifi":
                  e4 = "wifi";
                  break;
                case void 0:
                  break;
                default:
                  e4 = "other";
              }
              return e4;
            }, Se = function() {
              var e4 = n().navigator, t4 = e4 && (e4.connection || e4.mozConnection || e4.webkitConnection);
              return t4 && t4.type;
            };
            De.getConnectionFromAPI = Se;
            var qe = De, Oe = Ae({ a: "env", b: "beacon", c: "custom", d: "ad", e: "event", f: "experiment", i: "internal", m: "mux", n: "response", p: "player", q: "request", r: "retry", s: "session", t: "timestamp", u: "viewer", v: "video", w: "page", x: "view", y: "sub" }), Pe = Ae({ ad: "ad", ag: "aggregate", ap: "api", al: "application", ar: "architecture", as: "asset", au: "autoplay", av: "average", bi: "bitrate", br: "break", bw: "browser", by: "bytes", ca: "cached", cb: "cancel", cd: "code", cg: "category", ch: "changed", cn: "config", co: "count", ce: "counter", cp: "complete", cr: "creative", ct: "content", cu: "current", cx: "connection", dg: "downscaling", dm: "domain", dn: "cdn", do: "downscale", du: "duration", dv: "device", ec: "encoding", ed: "edge", en: "end", eg: "engine", em: "embed", er: "error", es: "errorcode", et: "errortext", ee: "event", ev: "events", ex: "expires", ep: "experiments", fi: "first", fm: "family", ft: "format", fp: "fps", fq: "frequency", fr: "frame", fs: "fullscreen", hb: "holdback", he: "headers", ho: "host", hn: "hostname", ht: "height", id: "id", ii: "init", in: "instance", ip: "ip", is: "is", ke: "key", la: "language", lb: "labeled", le: "level", li: "live", ld: "loaded", lo: "load", ls: "lists", lt: "latency", ma: "max", md: "media", me: "message", mf: "manifest", mi: "mime", ml: "midroll", mm: "min", mn: "manufacturer", mo: "model", mx: "mux", ne: "newest", nm: "name", no: "number", on: "on", os: "os", pa: "paused", pb: "playback", pd: "producer", pe: "percentage", pf: "played", pg: "program", ph: "playhead", pi: "plugin", pl: "preroll", pn: "playing", po: "poster", pr: "preload", ps: "position", pt: "part", py: "property", ra: "rate", rd: "requested", re: "rebuffer", rf: "rendition", rm: "remote", ro: "ratio", rp: "response", rq: "request", rs: "requests", sa: "sample", se: "session", sk: "seek", sm: "stream", so: "source", sq: "sequence", sr: "series", st: "start", su: "startup", sv: "server", sw: "software", ta: "tag", tc: "tech", te: "text", tg: "target", th: "throughput", ti: "time", tl: "total", to: "to", tt: "title", ty: "type", ug: "upscaling", up: "upscale", ur: "url", us: "user", va: "variant", vd: "viewed", vi: "video", ve: "version", vw: "view", vr: "viewer", wd: "width", wa: "watch", wt: "waiting" });
            function Ae(e4) {
              var t4 = {};
              for (var r3 in e4)
                e4.hasOwnProperty(r3) && (t4[e4[r3]] = r3);
              return t4;
            }
            function Re(e4) {
              var t4 = {}, r3 = {};
              return Object.keys(e4).forEach(function(a2) {
                var n2 = false;
                if (e4.hasOwnProperty(a2) && void 0 !== e4[a2]) {
                  var i2 = a2.split("_"), o2 = i2[0], s2 = Oe[o2];
                  s2 || (f.info("Data key word `" + i2[0] + "` not expected in " + a2), s2 = o2 + "_"), i2.splice(1).forEach(function(e5) {
                    "url" === e5 && (n2 = true), Pe[e5] ? s2 += Pe[e5] : Number(e5) && Math.floor(Number(e5)) === Number(e5) ? s2 += e5 : (f.info("Data key word `" + e5 + "` not expected in " + a2), s2 += "_" + e5 + "_");
                  }), n2 ? r3[s2] = e4[a2] : t4[s2] = e4[a2];
                }
              }), v()(t4, r3);
            }
            var Ie = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 1e4, maxPayloadKBSize: 500 }, Le = ["hb", "requestcompleted", "requestfailed", "requestcanceled"], Ne = function(e4, t4) {
              this._beaconUrl = e4 || "https://img.litix.io", this._eventQueue = [], this._postInFlight = false, this._failureCount = 0, this._sendTimeout = false, this._options = v()({}, Ie, t4);
            };
            Ne.prototype.queueEvent = function(e4, t4) {
              var r3 = v()({}, t4);
              return (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e4) && (this._eventQueue.push(r3), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength);
            }, Ne.prototype.flushEvents = function() {
              this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending();
            }, Ne.prototype.destroy = function() {
              var e4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.destroyed = true, e4 ? this._clearBeaconQueue() : this.flushEvents(), n().clearTimeout(this._sendTimeout);
            }, Ne.prototype._clearBeaconQueue = function() {
              var e4 = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, t4 = this._eventQueue.slice(e4);
              e4 > 0 && v()(t4[t4.length - 1], Re({ mux_view_message: "event queue truncated" }));
              var r3 = this._createPayload(t4);
              je(this._beaconUrl, r3, true, function() {
              });
            }, Ne.prototype._sendBeaconQueue = function() {
              var e4 = this;
              if (!this._postInFlight) {
                var t4 = this._eventQueue.slice(0, this._options.maxBeaconSize);
                this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = true;
                var r3 = this._createPayload(t4), a2 = _.now();
                je(this._beaconUrl, r3, false, function(r4, n2) {
                  n2 ? (e4._eventQueue = t4.concat(e4._eventQueue), e4._failureCount += 1, f.info("Error sending beacon: " + n2)) : e4._failureCount = 0, e4._roundTripTime = _.now() - a2, e4._postInFlight = false;
                });
              }
            }, Ne.prototype._getNextBeaconTime = function() {
              if (!this._failureCount)
                return this._options.baseTimeBetweenBeacons;
              var e4 = Math.pow(2, this._failureCount - 1);
              return (1 + (e4 *= Math.random())) * this._options.baseTimeBetweenBeacons;
            }, Ne.prototype._startBeaconSending = function() {
              var e4 = this;
              n().clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = n().setTimeout(function() {
                e4._eventQueue.length && e4._sendBeaconQueue(), e4._startBeaconSending();
              }, this._getNextBeaconTime()));
            }, Ne.prototype._createPayload = function(e4) {
              var t4, r3, a2, n2 = this, i2 = { transmission_timestamp: Math.round(_.now()) };
              this._roundTripTime && (i2.rtt_ms = Math.round(this._roundTripTime));
              var o2 = function() {
                t4 = JSON.stringify({ metadata: i2, events: r3 || e4 }), a2 = t4.length / 1024;
              }, s2 = function() {
                return a2 <= n2._options.maxPayloadKBSize;
              };
              return o2(), s2() || (f.info("Payload size is too big (" + a2 + " kb). Removing unnecessary events."), r3 = e4.filter(function(e5) {
                return -1 === Le.indexOf(e5.e);
              }), o2()), s2() || (f.info("Payload size still too big (" + a2 + " kb). Cropping fields.."), r3.forEach(function(e5) {
                for (var t5 in e5) {
                  var r4 = e5[t5];
                  "string" == typeof r4 && r4.length > 51200 && (e5[t5] = r4.substring(0, 51200));
                }
              }), o2()), t4;
            };
            var je = function(e4, t4, r3, a2) {
              if (r3 && navigator && navigator.sendBeacon && navigator.sendBeacon(e4, t4))
                a2();
              else if (n().fetch)
                n().fetch(e4, { method: "POST", body: t4, headers: { "Content-Type": "text/plain" }, keepalive: true }).then(function(e5) {
                  return a2(null, e5.ok ? null : "Error");
                }).catch(function(e5) {
                  return a2(null, e5);
                });
              else {
                if (n().XMLHttpRequest) {
                  var i2 = new (n()).XMLHttpRequest();
                  return i2.onreadystatechange = function() {
                    if (4 === i2.readyState)
                      return a2(null, 200 !== i2.status ? "error" : void 0);
                  }, i2.open("POST", e4), i2.setRequestHeader("Content-Type", "text/plain"), void i2.send(t4);
                }
                a2();
              }
            }, Ce = Ne;
            function He(e4) {
              return He = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
                return typeof e5;
              } : function(e5) {
                return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
              }, He(e4);
            }
            var Me = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id"], Be = ["viewstart", "error", "ended", "viewend"], Ue = function(e4, t4) {
              var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              this.mux = e4, this.envKey = t4, this.eventQueue = new Ce(xe(t4, r3)), this.previousBeaconData = null, this.lastEventTime = null, this.sampleRate = r3.sampleRate, this.disableCookies = r3.disableCookies, this.respectDoNotTrack = r3.respectDoNotTrack;
              var a2 = r3.platform || {};
              this.pageLevelData = { mux_api_version: this.mux.API_VERSION, mux_embed: this.mux.NAME, mux_embed_version: this.mux.VERSION, viewer_application_name: a2.name, viewer_application_version: a2.version, viewer_application_engine: a2.layout, viewer_device_name: a2.product, viewer_device_category: "", viewer_device_manufacturer: a2.manufacturer, viewer_os_family: a2.os && a2.os.family, viewer_os_architecture: a2.os && a2.os.architecture, viewer_os_version: a2.os && a2.os.version };
              var i2 = qe();
              i2 && (this.pageLevelData = v()(this.pageLevelData, { viewer_connection_type: i2 })), void 0 !== n() && n().location && n().location.href && (this.pageLevelData.page_url = n().location.href), this.viewerData = this.disableCookies ? {} : Ee();
            };
            Ue.prototype.send = function(e4, t4) {
              if (e4) {
                if (this.respectDoNotTrack && p())
                  return f.info("Not sending `" + e4 + "` because Do Not Track is enabled");
                if (!t4 || "object" !== He(t4))
                  return f.error("A data object was expected in send() but was not provided");
                var r3, a2, n2 = this.disableCookies ? {} : (r3 = Te(), a2 = _.now(), r3.session_start && (r3.sst = r3.session_start, delete r3.session_start), r3.session_id && (r3.sid = r3.session_id, delete r3.session_id), r3.session_expires && (r3.sex = r3.session_expires, delete r3.session_expires), (!r3.sex || r3.sex < a2) && (r3.sid = i(), r3.sst = a2), r3.sex = a2 + 15e5, ke(r3), { session_id: r3.sid, session_start: r3.sst, session_expires: r3.sex }), o2 = {};
                v()(o2, this.pageLevelData), v()(o2, t4), v()(o2, n2), v()(o2, this.viewerData), o2.event = e4, o2.env_key = this.envKey, o2.user_id && (o2.viewer_user_id = o2.user_id, delete o2.user_id);
                var s2 = o2.mux_sample_number >= this.sampleRate, u2 = Re(this._deduplicateBeaconData(e4, o2));
                if (this.lastEventTime = this.mux.utils.now(), s2)
                  return f.info("Not sending event due to sample rate restriction", e4, o2, u2);
                if (this.envKey || f.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", e4, o2, u2), !this.rateLimited) {
                  if (f.info("Sending event", e4, o2, u2), this.rateLimited = !this.eventQueue.queueEvent(e4, u2), this.mux.WINDOW_UNLOADING && "viewend" === e4)
                    this.eventQueue.destroy(true);
                  else if ((Be.indexOf(e4) >= 0 || this.mux.WINDOW_HIDDEN && "hb" === e4) && this.eventQueue.flushEvents(), this.rateLimited)
                    return o2.event = "eventrateexceeded", u2 = Re(o2), this.eventQueue.queueEvent(o2.event, u2), f.error("Beaconing disabled due to rate limit.");
                }
              }
            }, Ue.prototype.destroy = function() {
              this.eventQueue.destroy(false);
            }, Ue.prototype._deduplicateBeaconData = function(e4, t4) {
              var r3 = this, a2 = {}, n2 = t4.view_id;
              if (!n2 || "viewstart" === e4 || "viewend" === e4 || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5)
                a2 = v()({}, t4), n2 && (this.previousBeaconData = a2), n2 && "viewend" === e4 && (this.previousBeaconData = null);
              else {
                var i2 = 0 === e4.indexOf("request");
                Object.keys(t4).forEach(function(n3) {
                  var o2 = t4[n3];
                  (o2 !== r3.previousBeaconData[n3] || Me.indexOf(n3) > -1 || function(e5, t5, r4, a3) {
                    return !(!e5 || 0 !== t5.indexOf("request_") || "request_response_headers" !== t5 && "object" === He(r4) && "object" === He(a3) && Object.keys(r4 || {}).length === Object.keys(a3 || {}).length);
                  }(i2, n3, o2, r3.previousBeaconData[n3]) || function(e5, t5) {
                    return "renditionchange" === e5 && 0 === t5.indexOf("video_source_");
                  }(e4, n3)) && (a2[n3] = o2, r3.previousBeaconData[n3] = o2);
                });
              }
              return a2;
            };
            var Fe = Ue;
            function Ge(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            function We(e4, t4, r3) {
              return t4 && Ge(e4.prototype, t4), r3 && Ge(e4, r3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
            }
            var Qe = We(function e4(t4) {
              !function(e5, t5) {
                if (!(e5 instanceof t5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e4);
              var r3 = 0, a2 = 0, n2 = 0, i2 = 0, o2 = 0, s2 = 0, u2 = 0;
              t4.on("requestcompleted", function(e5, s3) {
                var u3, l2, c2 = s3.request_start, d2 = s3.request_response_start, f2 = s3.request_response_end, p2 = s3.request_bytes_loaded;
                if (i2++, d2 ? (u3 = d2 - c2, l2 = f2 - d2) : l2 = f2 - c2, l2 > 0 && p2 > 0) {
                  var _2 = p2 / l2 * 8e3;
                  o2++, a2 += p2, n2 += l2, t4.data.view_min_request_throughput = Math.min(t4.data.view_min_request_throughput || 1 / 0, _2), t4.data.view_average_request_throughput = a2 / n2 * 8e3, t4.data.view_request_count = i2, u3 > 0 && (r3 += u3, t4.data.view_max_request_latency = Math.max(t4.data.view_max_request_latency || 0, u3), t4.data.view_average_request_latency = r3 / o2);
                }
              }), t4.on("requestfailed", function(e5, r4) {
                i2++, s2++, t4.data.view_request_count = i2, t4.data.view_request_failed_count = s2;
              }), t4.on("requestcanceled", function(e5, r4) {
                i2++, u2++, t4.data.view_request_count = i2, t4.data.view_request_canceled_count = u2;
              });
            });
            function Ve(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            function Je(e4, t4, r3) {
              return t4 && Ve(e4.prototype, t4), r3 && Ve(e4, r3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
            }
            var ze = Je(function e4(t4) {
              var r3 = this;
              !function(e5, t5) {
                if (!(e5 instanceof t5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e4), t4.on("before*", function(e5, a2) {
                var n2 = a2.viewer_time, i2 = _.now(), o2 = r3._lastEventTime;
                if (r3._lastEventTime = i2, o2 && i2 - o2 > 36e5) {
                  var s2 = Object.keys(t4.data).reduce(function(e6, r4) {
                    return 0 === r4.indexOf("video_") ? v()(e6, function(e7, t5, r5) {
                      return t5 in e7 ? Object.defineProperty(e7, t5, { value: r5, enumerable: true, configurable: true, writable: true }) : e7[t5] = r5, e7;
                    }({}, r4, t4.data[r4])) : e6;
                  }, {});
                  t4.mux.log.info("Received event after at least an hour inactivity, creating a new view"), t4.emit("viewinit", v()({ viewer_time: n2 }, s2)), t4.playbackHeartbeat._playheadShouldBeProgressing && "play" !== e5.type && "adbreakstart" !== e5.type && (t4.emit("play", { viewer_time: n2 }), "playing" !== e5.type && t4.emit("playing", { viewer_time: n2 }));
                }
              });
            });
            function Xe(e4) {
              return Xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
                return typeof e5;
              } : function(e5) {
                return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
              }, Xe(e4);
            }
            function Ke(e4, t4) {
              return function(e5) {
                if (Array.isArray(e5))
                  return e5;
              }(e4) || function(e5, t5) {
                var r3 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
                if (null != r3) {
                  var a2, n2, i2 = [], o2 = true, s2 = false;
                  try {
                    for (r3 = r3.call(e5); !(o2 = (a2 = r3.next()).done) && (i2.push(a2.value), !t5 || i2.length !== t5); o2 = true)
                      ;
                  } catch (e6) {
                    s2 = true, n2 = e6;
                  } finally {
                    try {
                      o2 || null == r3.return || r3.return();
                    } finally {
                      if (s2)
                        throw n2;
                    }
                  }
                  return i2;
                }
              }(e4, t4) || function(e5, t5) {
                if (e5) {
                  if ("string" == typeof e5)
                    return Ye(e5, t5);
                  var r3 = Object.prototype.toString.call(e5).slice(8, -1);
                  return "Object" === r3 && e5.constructor && (r3 = e5.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(e5) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? Ye(e5, t5) : void 0;
                }
              }(e4, t4) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function Ye(e4, t4) {
              (null == t4 || t4 > e4.length) && (t4 = e4.length);
              for (var r3 = 0, a2 = new Array(t4); r3 < t4; r3++)
                a2[r3] = e4[r3];
              return a2;
            }
            function $e(e4, t4) {
              for (var r3 = 0; r3 < t4.length; r3++) {
                var a2 = t4[r3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e4, a2.key, a2);
              }
            }
            function Ze(e4, t4) {
              return Ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t5) {
                return e5.__proto__ = t5, e5;
              }, Ze(e4, t4);
            }
            function et(e4) {
              var t4 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e5) {
                  return false;
                }
              }();
              return function() {
                var r3, a2 = at(e4);
                if (t4) {
                  var n2 = at(this).constructor;
                  r3 = Reflect.construct(a2, arguments, n2);
                } else
                  r3 = a2.apply(this, arguments);
                return tt(this, r3);
              };
            }
            function tt(e4, t4) {
              if (t4 && ("object" === Xe(t4) || "function" == typeof t4))
                return t4;
              if (void 0 !== t4)
                throw new TypeError("Derived constructors may only return object or undefined");
              return rt(e4);
            }
            function rt(e4) {
              if (void 0 === e4)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e4;
            }
            function at(e4) {
              return at = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e5) {
                return e5.__proto__ || Object.getPrototypeOf(e5);
              }, at(e4);
            }
            var nt = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange"], it = function(e4) {
              !function(e5, t5) {
                if ("function" != typeof t5 && null !== t5)
                  throw new TypeError("Super expression must either be null or a function");
                e5.prototype = Object.create(t5 && t5.prototype, { constructor: { value: e5, writable: true, configurable: true } }), Object.defineProperty(e5, "prototype", { writable: false }), t5 && Ze(e5, t5);
              }(s2, e4);
              var t4, r3, a2, o2 = et(s2);
              function s2(e5, t5, r4) {
                var a3;
                !function(e6, t6) {
                  if (!(e6 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                }(this, s2), (a3 = o2.call(this)).DOM_CONTENT_LOADED_EVENT_END = b.domContentLoadedEventEnd(), a3.NAVIGATION_START = b.navigationStart(), a3.mux = e5, a3.id = t5, (r4 = v()({ debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1e3, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, disablePlayheadRebufferTracking: false, errorTranslator: function(e6) {
                  return e6;
                } }, r4)).data = r4.data || {}, r4.data.property_key && (r4.data.env_key = r4.data.property_key, delete r4.data.property_key), f.setLevel(r4.debug ? "debug" : "warn"), a3.getPlayheadTime = r4.getPlayheadTime, a3.getStateData = r4.getStateData || function() {
                  return {};
                }, a3.getAdData = r4.getAdData || function() {
                }, a3.minimumRebufferDuration = r4.minimumRebufferDuration, a3.sustainedRebufferThreshold = r4.sustainedRebufferThreshold, a3.playbackHeartbeatTime = r4.playbackHeartbeatTime, a3.disableRebufferTracking = r4.disableRebufferTracking, a3.disableRebufferTracking && a3.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), a3.disablePlayheadRebufferTracking = r4.disablePlayheadRebufferTracking, a3.errorTranslator = r4.errorTranslator, a3.playbackEventDispatcher = new Fe(e5, r4.data.env_key, r4), a3.data = { player_instance_id: i(), mux_sample_rate: r4.sampleRate, beacon_domain: r4.beaconCollectionDomain ? r4.beaconCollectionDomain : r4.beaconDomain }, a3.data.view_sequence_number = 1, a3.data.player_sequence_number = 1, a3.oldEmit = a3.emit, a3.emit = function(e6, t6) {
                  t6 = v()({ viewer_time: this.mux.utils.now() }, t6), this.oldEmit(e6, t6);
                };
                var n2 = function() {
                  void 0 === this.data.view_start && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"));
                }.bind(rt(a3));
                a3.on("viewinit", function(e6, t6) {
                  this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), v()(this.data, t6), this._initializeViewData(), this.one("play", n2), this.one("adbreakstart", n2);
                });
                var u2 = function(e6) {
                  this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e6);
                }.bind(rt(a3));
                if (a3.on("videochange", function(e6, t6) {
                  u2(t6);
                }), a3.on("programchange", function(e6, t6) {
                  this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), u2(v()(t6, { view_program_changed: true })), n2(), this.emit("play"), this.emit("playing");
                }), a3.on("fragmentchange", function(e6, t6) {
                  this.currentFragmentPDT = t6.currentFragmentPDT, this.currentFragmentStart = t6.currentFragmentStart;
                }), a3.on("destroy", a3.destroy), "undefined" != typeof window && "function" == typeof window.addEventListener && "function" == typeof window.removeEventListener) {
                  var l2 = function() {
                    var e6 = void 0 !== a3.data.view_start;
                    a3.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState, e6 && a3.mux.WINDOW_HIDDEN && (a3.data.player_is_paused || a3.emit("hb"));
                  };
                  window.addEventListener("visibilitychange", l2, false);
                  var c2 = function(e6) {
                    e6.persisted || a3.destroy();
                  };
                  window.addEventListener("pagehide", c2, false), a3.on("destroy", function() {
                    window.removeEventListener("visibilitychange", l2), window.removeEventListener("pagehide", c2);
                  });
                }
                return a3.on("playerready", function(e6, t6) {
                  v()(this.data, t6);
                }), nt.forEach(function(e6) {
                  a3.on(e6, function(t6, r5) {
                    0 !== e6.indexOf("ad") && this._updateStateData(), v()(this.data, r5), this._sanitizeData();
                  }), a3.on("after" + e6, function() {
                    ("error" !== e6 || this.errorTracker.viewErrored) && this.send(e6);
                  });
                }), a3.on("viewend", function(e6, t6) {
                  v()(a3.data, t6);
                }), a3.one("playerready", function(e6) {
                  var t6 = this.mux.utils.now();
                  this.data.player_init_time && (this.data.player_startup_time = t6 - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = true, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
                }), a3.longResumeTracker = new ze(rt(a3)), a3.errorTracker = new M(rt(a3)), new me(rt(a3)), a3.seekingTracker = new ie(rt(a3)), a3.playheadTime = new Q(rt(a3)), a3.playbackHeartbeat = new j(rt(a3)), new re(rt(a3)), a3.watchTimeTracker = new U(rt(a3)), new G(rt(a3)), a3.adTracker = new de(rt(a3)), new Y(rt(a3)), new z(rt(a3)), new Z(rt(a3)), new _e(rt(a3)), new Qe(rt(a3)), r4.hlsjs && a3.addHLSJS(r4), r4.dashjs && a3.addDashJS(r4), a3.emit("viewinit", r4.data), a3;
              }
              return t4 = s2, r3 = [{ key: "destroy", value: function() {
                this._destroyed || (this._destroyed = true, void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout));
              } }, { key: "send", value: function(e5) {
                var t5 = v()({}, this.data);
                if (void 0 === t5.video_source_is_live && (t5.player_source_duration === 1 / 0 || t5.video_source_duration === 1 / 0 ? t5.video_source_is_live = true : (t5.player_source_duration > 0 || t5.video_source_duration > 0) && (t5.video_source_is_live = false)), t5.video_source_is_live || ["player_program_time", "player_manifest_newest_program_time", "player_live_edge_program_time", "player_program_time", "video_holdback", "video_part_holdback", "video_target_duration", "video_part_target_duration"].forEach(function(e6) {
                  t5[e6] = void 0;
                }), t5.video_source_url = t5.video_source_url || t5.player_source_url, t5.video_source_url) {
                  var r4 = Ke(y(t5.video_source_url), 2), a3 = r4[0], n2 = r4[1];
                  t5.video_source_domain = n2, t5.video_source_hostname = a3;
                }
                delete t5.ad_request_id, this.playbackEventDispatcher.send(e5, t5), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat();
              } }, { key: "_updateStateData", value: function() {
                v()(this.data, this.getStateData()), this.playheadTime._updatePlayheadTime(), this._sanitizeData();
              } }, { key: "_sanitizeData", value: function() {
                var e5 = this;
                ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"].forEach(function(t5) {
                  var r4 = parseInt(e5.data[t5], 10);
                  e5.data[t5] = isNaN(r4) ? void 0 : r4;
                }), ["player_source_url", "video_source_url"].forEach(function(t5) {
                  if (e5.data[t5]) {
                    var r4 = e5.data[t5].toLowerCase();
                    0 !== r4.indexOf("data:") && 0 !== r4.indexOf("blob:") || (e5.data[t5] = "MSE style URL");
                  }
                });
              } }, { key: "_resetVideoData", value: function(e5, t5) {
                var r4 = this;
                Object.keys(this.data).forEach(function(e6) {
                  0 === e6.indexOf("video_") && delete r4.data[e6];
                });
              } }, { key: "_resetViewData", value: function() {
                var e5 = this;
                Object.keys(this.data).forEach(function(t5) {
                  0 === t5.indexOf("view_") && delete e5.data[t5];
                }), this.data.view_sequence_number = 1;
              } }, { key: "_resetErrorData", value: function(e5, t5) {
                delete this.data.player_error_code, delete this.data.player_error_message;
              } }, { key: "_initializeViewData", value: function() {
                var e5 = this, t5 = this.data.view_id = i(), r4 = function() {
                  t5 === e5.data.view_id && g(e5.data, "player_view_count", 1);
                };
                this.data.player_is_paused ? this.one("play", r4) : r4();
              } }, { key: "_restartHeartBeat", value: function() {
                var e5 = this;
                window.clearTimeout(this._heartBeatTimeout), this.errorTracker.viewErrored || (this._heartBeatTimeout = window.setTimeout(function() {
                  e5.data.player_is_paused || e5.emit("hb");
                }, 1e4));
              } }, { key: "addHLSJS", value: function(e5) {
                e5.hlsjs ? this.hlsjs ? this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e5.hlsjs, function(e6, t5, r4) {
                  var a3 = arguments.length > 4 ? arguments[4] : void 0, n2 = e6.log, i2 = e6.utils.secondsToMs, o3 = function(e7) {
                    var t6, r5 = parseInt(a3.version);
                    return 1 === r5 && null !== e7.programDateTime && (t6 = e7.programDateTime), 0 === r5 && null !== e7.pdt && (t6 = e7.pdt), t6;
                  };
                  if (b.exists()) {
                    var s3 = function(r5, a4) {
                      return e6.emit(t5, r5, a4);
                    }, u2 = function(e7, t6) {
                      var r5 = t6.levels, a4 = t6.audioTracks, n3 = t6.url, i3 = t6.stats, o4 = t6.networkDetails, u3 = t6.sessionData, l3 = {}, c3 = {};
                      r5.forEach(function(e8, t7) {
                        l3[t7] = { width: e8.width, height: e8.height, bitrate: e8.bitrate, attrs: e8.attrs };
                      }), a4.forEach(function(e8, t7) {
                        c3[t7] = { name: e8.name, language: e8.lang, bitrate: e8.bitrate };
                      });
                      var d3 = S(i3), f3 = d3.bytesLoaded, p3 = d3.requestStart, _3 = d3.responseStart, h3 = d3.responseEnd;
                      s3("requestcompleted", x(x({}, k(u3)), {}, { request_event_type: e7, request_bytes_loaded: f3, request_start: p3, request_response_start: _3, request_response_end: h3, request_type: "manifest", request_hostname: m(n3), request_response_headers: q(o4), request_rendition_lists: { media: l3, audio: c3, video: {} } }));
                    };
                    r4.on(a3.Events.MANIFEST_LOADED, u2);
                    var l2 = function(e7, t6) {
                      var r5 = t6.details, a4 = t6.level, n3 = t6.networkDetails, u3 = t6.stats, l3 = S(u3), c3 = l3.bytesLoaded, d3 = l3.requestStart, f3 = l3.responseStart, p3 = l3.responseEnd, _3 = r5.fragments[r5.fragments.length - 1], h3 = o3(_3) + i2(_3.duration);
                      s3("requestcompleted", { request_event_type: e7, request_bytes_loaded: c3, request_start: d3, request_response_start: f3, request_response_end: p3, request_current_level: a4, request_type: "manifest", request_hostname: m(r5.url), request_response_headers: q(n3), video_holdback: r5.holdBack && i2(r5.holdBack), video_part_holdback: r5.partHoldBack && i2(r5.partHoldBack), video_part_target_duration: r5.partTarget && i2(r5.partTarget), video_target_duration: r5.targetduration && i2(r5.targetduration), video_source_is_live: r5.live, player_manifest_newest_program_time: isNaN(h3) ? void 0 : h3 });
                    };
                    r4.on(a3.Events.LEVEL_LOADED, l2);
                    var c2 = function(e7, t6) {
                      var r5 = t6.details, a4 = t6.networkDetails, n3 = t6.stats, i3 = S(n3), o4 = i3.bytesLoaded, u3 = i3.requestStart, l3 = i3.responseStart, c3 = i3.responseEnd;
                      s3("requestcompleted", { request_event_type: e7, request_bytes_loaded: o4, request_start: u3, request_response_start: l3, request_response_end: c3, request_type: "manifest", request_hostname: m(r5.url), request_response_headers: q(a4) });
                    };
                    r4.on(a3.Events.AUDIO_TRACK_LOADED, c2);
                    var d2 = function(e7, t6) {
                      var a4 = t6.stats, n3 = t6.networkDetails, i3 = t6.frag;
                      a4 = a4 || i3.stats;
                      var o4 = S(a4), u3 = { request_event_type: e7, request_bytes_loaded: o4.bytesLoaded, request_start: o4.requestStart, request_response_start: o4.responseStart, request_response_end: o4.responseEnd, request_hostname: n3 ? m(n3.responseURL) : void 0, request_response_headers: q(n3), request_media_duration: i3.duration };
                      "main" === i3.type ? (u3.request_type = "media", u3.request_current_level = i3.level, u3.request_video_width = (r4.levels[i3.level] || {}).width, u3.request_video_height = (r4.levels[i3.level] || {}).height) : u3.request_type = i3.type, s3("requestcompleted", u3);
                    };
                    r4.on(a3.Events.FRAG_LOADED, d2);
                    var f2 = function(e7, t6) {
                      var r5 = t6.frag, a4 = r5.start, n3 = { currentFragmentPDT: o3(r5), currentFragmentStart: i2(a4) };
                      s3("fragmentchange", n3);
                    };
                    r4.on(a3.Events.FRAG_CHANGED, f2);
                    var p2 = function(e7, t6) {
                      var r5 = t6.type, n3 = t6.details, i3 = t6.response, o4 = t6.fatal, u3 = t6.context, l3 = t6.frag;
                      if (n3 === a3.ErrorDetails.MANIFEST_LOAD_ERROR || n3 === a3.ErrorDetails.MANIFEST_LOAD_TIMEOUT || n3 === a3.ErrorDetails.FRAG_LOAD_ERROR || n3 === a3.ErrorDetails.FRAG_LOAD_TIMEOUT || n3 === a3.ErrorDetails.LEVEL_LOAD_ERROR || n3 === a3.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                        var c3 = l3 && l3.url || u3 && u3.url || "";
                        s3("requestfailed", { request_error: n3, request_url: c3, request_hostname: m(c3), request_type: n3 === a3.ErrorDetails.FRAG_LOAD_ERROR || n3 === a3.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : "manifest", request_error_code: i3 && i3.code, request_error_text: i3 && i3.text });
                      }
                      o4 && s3("error", { player_error_code: r5, player_error_message: n3 });
                    };
                    r4.on(a3.Events.ERROR, p2);
                    var _2 = function(e7, t6) {
                      var r5 = t6.frag, a4 = r5 && r5._url || "";
                      s3("requestcanceled", { request_event_type: e7, request_url: a4, request_type: "media", request_hostname: m(a4) });
                    };
                    r4.on(a3.Events.FRAG_LOAD_EMERGENCY_ABORTED, _2);
                    var h2 = function(e7, t6) {
                      var a4 = t6.level, i3 = r4.levels[a4];
                      if (i3 && i3.attrs && i3.attrs.BANDWIDTH) {
                        var o4, u3 = i3.attrs.BANDWIDTH, l3 = parseFloat(i3.attrs["FRAME-RATE"]);
                        isNaN(l3) || (o4 = l3), u3 ? s3("renditionchange", { video_source_fps: o4, video_source_bitrate: u3, video_source_width: i3.width, video_source_height: i3.height }) : n2.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
                      }
                    };
                    r4.on(a3.Events.LEVEL_SWITCHED, h2), r4._stopMuxMonitor = function() {
                      r4.off(a3.Events.MANIFEST_LOADED, u2), r4.off(a3.Events.LEVEL_LOADED, l2), r4.off(a3.Events.AUDIO_TRACK_LOADED, c2), r4.off(a3.Events.FRAG_LOADED, d2), r4.off(a3.Events.FRAG_CHANGED, f2), r4.off(a3.Events.ERROR, p2), r4.off(a3.Events.FRAG_LOAD_EMERGENCY_ABORTED, _2), r4.off(a3.Events.LEVEL_SWITCHED, h2), r4.off(a3.Events.DESTROYING, r4._stopMuxMonitor), delete r4._stopMuxMonitor;
                    }, r4.on(a3.Events.DESTROYING, r4._stopMuxMonitor);
                  } else
                    n2.warn("performance timing not supported. Not tracking HLS.js.");
                }(this.mux, this.id, e5.hlsjs, {}, e5.Hls || window.Hls)) : this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
              } }, { key: "removeHLSJS", value: function() {
                var e5;
                this.hlsjs && ((e5 = this.hlsjs) && "function" == typeof e5._stopMuxMonitor && e5._stopMuxMonitor(), this.hlsjs = void 0);
              } }, { key: "addDashJS", value: function(e5) {
                e5.dashjs ? this.dashjs ? this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e5.dashjs, function(e6, t5, r4) {
                  var a3 = e6.log;
                  if (r4 && r4.on) {
                    var i2 = function(r5, a4) {
                      return e6.emit(t5, r5, a4);
                    }, o3 = function(e7) {
                      var t6 = e7.type, r5 = (e7.data || {}).url;
                      i2("requestcompleted", { request_event_type: t6, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: "manifest", request_hostname: m(r5) });
                    };
                    r4.on("manifestLoaded", o3);
                    var s3 = {}, u2 = function(e7) {
                      var t6 = e7.type, a4 = e7.fragmentModel, n2 = (e7.chunk || {}).mediaInfo || {}, o4 = n2.type, u3 = n2.bitrateList, l3 = {};
                      (u3 = u3 || []).forEach(function(e8, t7) {
                        l3[t7] = {}, l3[t7].width = e8.width, l3[t7].height = e8.height, l3[t7].bitrate = e8.bandwidth, l3[t7].attrs = {};
                      }), "video" === o4 ? s3.video = l3 : "audio" === o4 ? s3.audio = l3 : s3.media = l3;
                      var c3 = O(a4, r4), d3 = c3.requestStart, f3 = c3.requestResponseStart, p3 = c3.requestResponseEnd, _2 = c3.requestResponseHeaders, h2 = c3.requestMediaDuration, v2 = c3.requestHostname;
                      i2("requestcompleted", { request_event_type: t6, request_start: d3, request_response_start: f3, request_response_end: p3, request_bytes_loaded: -1, request_type: o4 + "_init", request_response_headers: _2, request_hostname: v2, request_media_duration: h2, request_rendition_lists: s3 });
                    };
                    r4.on("initFragmentLoaded", u2);
                    var l2 = function(e7) {
                      var t6 = e7.type, a4 = e7.fragmentModel, n2 = e7.chunk || {}, o4 = n2.mediaInfo, s4 = n2.start, u3 = (o4 || {}).type, l3 = O(a4, r4), c3 = l3.requestStart, d3 = l3.requestResponseStart, f3 = l3.requestResponseEnd, p3 = l3.requestBytesLoaded, _2 = l3.requestResponseHeaders, h2 = l3.requestMediaDuration, v2 = l3.requestHostname, m2 = P(u3, r4), y2 = m2.currentLevel, b2 = m2.renditionWidth, g2 = m2.renditionHeight, w2 = m2.renditionBitrate;
                      i2("requestcompleted", { request_event_type: t6, request_start: c3, request_response_start: d3, request_response_end: f3, request_bytes_loaded: p3, request_type: u3, request_response_headers: _2, request_hostname: v2, request_media_start_time: s4, request_media_duration: h2, request_current_level: y2, request_labeled_bitrate: w2, request_video_width: b2, request_video_height: g2 });
                    };
                    r4.on("mediaFragmentLoaded", l2);
                    var c2 = { video: void 0, audio: void 0, totalBitrate: void 0 }, d2 = function() {
                      if (c2.video && "number" == typeof c2.video.bitrate) {
                        if (c2.video.width && c2.video.height) {
                          var e7 = c2.video.bitrate;
                          return c2.audio && "number" == typeof c2.audio.bitrate && (e7 += c2.audio.bitrate), e7 !== c2.totalBitrate ? (c2.totalBitrate = e7, { video_source_bitrate: e7, video_source_height: c2.video.height, video_source_width: c2.video.width }) : void 0;
                        }
                        a3.warn("have bitrate info for video but missing width/height");
                      }
                    }, f2 = function(e7, t6, n2) {
                      if ("number" == typeof e7.newQuality) {
                        var o4 = e7.mediaType;
                        if ("audio" === o4 || "video" === o4) {
                          var s4 = r4.getBitrateInfoListFor(o4).find(function(t7) {
                            return t7.qualityIndex === e7.newQuality;
                          });
                          if (s4 && "number" == typeof s4.bitrate) {
                            c2[o4] = s4;
                            var u3 = d2();
                            u3 && i2("renditionchange", u3);
                          } else
                            a3.warn("missing bitrate info for ".concat(o4));
                        }
                      } else
                        a3.warn("missing evt.newQuality in qualityChangeRendered event", e7);
                    };
                    r4.on("qualityChangeRendered", f2);
                    var p2 = function(e7) {
                      var t6 = e7.error, r5 = e7.event, a4 = (r5 = r5 || {}).request || {}, o4 = n().event && n().event.currentTarget || {};
                      i2("requestfailed", { request_error: t6 + "_" + r5.id + "_" + a4.type, request_url: r5.url, request_hostname: m(r5.url), request_type: a4.mediaType, request_error_code: o4.status, request_error_type: o4.statusText });
                    };
                    r4.on("error", p2), r4._stopMuxMonitor = function() {
                      r4.off("manifestLoaded", o3), r4.off("initFragmentLoaded", u2), r4.off("mediaFragmentLoaded", l2), r4.off("qualityChangeRendered", f2), r4.off("error", p2), delete r4._stopMuxMonitor;
                    };
                  } else
                    a3.warn("Invalid dash.js player reference. Monitoring blocked.");
                }(this.mux, this.id, e5.dashjs)) : this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
              } }, { key: "removeDashJS", value: function() {
                var e5;
                this.dashjs && ((e5 = this.dashjs) && "function" == typeof e5._stopMuxMonitor && e5._stopMuxMonitor(), this.dashjs = void 0);
              } }], r3 && $e(t4.prototype, r3), a2 && $e(t4, a2), Object.defineProperty(t4, "prototype", { writable: false }), s2;
            }(L), ot = it, st = r2(153), ut = r2.n(st);
            function lt(e4) {
              return lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
                return typeof e5;
              } : function(e5) {
                return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
              }, lt(e4);
            }
            function ct(e4, t4) {
              return function(e5) {
                if (Array.isArray(e5))
                  return e5;
              }(e4) || function(e5, t5) {
                var r3 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
                if (null != r3) {
                  var a2, n2, i2 = [], o2 = true, s2 = false;
                  try {
                    for (r3 = r3.call(e5); !(o2 = (a2 = r3.next()).done) && (i2.push(a2.value), !t5 || i2.length !== t5); o2 = true)
                      ;
                  } catch (e6) {
                    s2 = true, n2 = e6;
                  } finally {
                    try {
                      o2 || null == r3.return || r3.return();
                    } finally {
                      if (s2)
                        throw n2;
                    }
                  }
                  return i2;
                }
              }(e4, t4) || function(e5, t5) {
                if (e5) {
                  if ("string" == typeof e5)
                    return dt(e5, t5);
                  var r3 = Object.prototype.toString.call(e5).slice(8, -1);
                  return "Object" === r3 && e5.constructor && (r3 = e5.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(e5) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? dt(e5, t5) : void 0;
                }
              }(e4, t4) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function dt(e4, t4) {
              (null == t4 || t4 > e4.length) && (t4 = e4.length);
              for (var r3 = 0, a2 = new Array(t4); r3 < t4; r3++)
                a2[r3] = e4[r3];
              return a2;
            }
            var ft, pt = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"], _t = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" };
            n() && n().WeakMap && (ft = /* @__PURE__ */ new WeakMap());
            var ht = "#EXT-X-TARGETDURATION", vt = "#EXT-X-PART-INF", mt = "#EXT-X-SERVER-CONTROL", yt = "#EXTINF", bt = "#EXT-X-PROGRAM-DATE-TIME", gt = "#EXT-X-VERSION", wt = "#EXT-X-SESSION-DATA", Tt = function(e4) {
              return this.buffer = "", this.manifest = { segments: [], serverControl: {}, sessionData: {} }, this.currentUri = {}, this.process(e4), this.manifest;
            };
            Tt.prototype.process = function(e4) {
              var t4;
              for (this.buffer += e4, t4 = this.buffer.indexOf("\n"); t4 > -1; t4 = this.buffer.indexOf("\n"))
                this.processLine(this.buffer.substring(0, t4)), this.buffer = this.buffer.substring(t4 + 1);
            }, Tt.prototype.processLine = function(e4) {
              var t4 = e4.indexOf(":"), r3 = Ot(e4, t4), a2 = r3[0], n2 = 2 === r3.length ? xt(r3[1]) : void 0;
              if ("#" !== a2[0])
                this.currentUri.uri = a2, this.manifest.segments.push(this.currentUri), this.manifest.targetDuration && !("duration" in this.currentUri) && (this.currentUri.duration = this.manifest.targetDuration), this.currentUri = {};
              else
                switch (a2) {
                  case ht:
                    if (!isFinite(n2) || n2 < 0)
                      return;
                    this.manifest.targetDuration = n2, this.setHoldBack();
                    break;
                  case vt:
                    kt(this.manifest, r3), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
                    break;
                  case mt:
                    kt(this.manifest, r3), this.setHoldBack();
                    break;
                  case yt:
                    0 === n2 ? this.currentUri.duration = 0.01 : n2 > 0 && (this.currentUri.duration = n2);
                    break;
                  case bt:
                    var i2 = n2, o2 = new Date(i2);
                    this.manifest.dateTimeString || (this.manifest.dateTimeString = i2, this.manifest.dateTimeObject = o2), this.currentUri.dateTimeString = i2, this.currentUri.dateTimeObject = o2;
                    break;
                  case gt:
                    kt(this.manifest, r3);
                    break;
                  case wt:
                    var s2 = Pt(r3[1]), u2 = k(s2);
                    v()(this.manifest.sessionData, u2);
                }
            }, Tt.prototype.setHoldBack = function() {
              var e4 = this.manifest, t4 = e4.serverControl, r3 = e4.targetDuration, a2 = e4.partTargetDuration;
              if (t4) {
                var n2 = "holdBack", i2 = "partHoldBack", o2 = r3 && 3 * r3, s2 = a2 && 2 * a2;
                r3 && !t4.hasOwnProperty(n2) && (t4[n2] = o2), o2 && t4[n2] < o2 && (t4[n2] = o2), a2 && !t4.hasOwnProperty(i2) && (t4[i2] = 3 * a2), a2 && t4[i2] < s2 && (t4[i2] = s2);
              }
            };
            var kt = function(e4, t4) {
              var r3, a2 = Et(t4[0].replace("#EXT-X-", ""));
              qt(t4[1]) ? (r3 = {}, r3 = v()(St(t4[1]), r3)) : r3 = xt(t4[1]), e4[a2] = r3;
            }, Et = function(e4) {
              return e4.toLowerCase().replace(/-(\w)/g, function(e5) {
                return e5[1].toUpperCase();
              });
            }, xt = function(e4) {
              if ("yes" === e4.toLowerCase() || "no" === e4.toLowerCase())
                return "yes" === e4.toLowerCase();
              var t4 = -1 !== e4.indexOf(":") ? e4 : parseFloat(e4);
              return isNaN(t4) ? e4 : t4;
            }, Dt = function(e4) {
              var t4 = {}, r3 = e4.split("=");
              return r3.length > 1 && (t4[Et(r3[0])] = xt(r3[1])), t4;
            }, St = function(e4) {
              for (var t4 = e4.split(","), r3 = {}, a2 = 0; t4.length > a2; a2++) {
                var n2 = t4[a2], i2 = Dt(n2);
                r3 = v()(i2, r3);
              }
              return r3;
            }, qt = function(e4) {
              return e4.indexOf("=") > -1;
            }, Ot = function(e4, t4) {
              return -1 === t4 ? [e4] : [e4.substring(0, t4), e4.substring(t4 + 1)];
            }, Pt = function(e4) {
              var t4 = {};
              if (e4) {
                var r3 = e4.search(",");
                return [e4.slice(0, r3), e4.slice(r3 + 1)].forEach(function(e5, r4) {
                  for (var a2 = e5.replace(/['"]+/g, "").split("="), n2 = 0; n2 < a2.length; n2++)
                    "DATA-ID" === a2[n2] && (t4["DATA-ID"] = a2[1 - n2]), "VALUE" === a2[n2] && (t4.VALUE = a2[1 - n2]);
                }), { data: t4 };
              }
            }, At = Tt, Rt = { safeCall: function(e4, t4, r3, a2) {
              var n2 = a2;
              if (e4 && "function" == typeof e4[t4])
                try {
                  n2 = e4[t4].apply(e4, r3);
                } catch (e5) {
                  f.info("safeCall error", e5);
                }
              return n2;
            }, safeIncrement: g, getComputedStyle: function(e4, t4) {
              var r3;
              if (e4 && t4 && n() && "function" == typeof n().getComputedStyle)
                return ft && ft.has(e4) && (r3 = ft.get(e4)), r3 || (r3 = n().getComputedStyle(e4, null), ft && ft.set(e4, r3)), r3.getPropertyValue(t4);
            }, secondsToMs: function(e4) {
              return Math.floor(1e3 * e4);
            }, assign: v(), headersStringToObject: T, extractHostnameAndDomain: y, extractHostname: m, manifestParser: At, generateShortID: o, generateUUID: i, now: _.now }, It = { PLAYER_READY: "playerready", VIEW_INIT: "viewinit", VIDEO_CHANGE: "videochange", PLAY: "play", PAUSE: "pause", PLAYING: "playing", TIME_UPDATE: "timeupdate", SEEKING: "seeking", SEEKED: "seeked", REBUFFER_START: "rebufferstart", REBUFFER_END: "rebufferend", ERROR: "error", ENDED: "ended", RENDITION_CHANGE: "renditionchange", ORIENTATION_CHANGE: "orientationchange", AD_REQUEST: "adrequest", AD_RESPONSE: "adresponse", AD_BREAK_START: "adbreakstart", AD_PLAY: "adplay", AD_PLAYING: "adplaying", AD_PAUSE: "adpause", AD_FIRST_QUARTILE: "adfirstquartile", AD_MID_POINT: "admidpoint", AD_THIRD_QUARTILE: "adthirdquartile", AD_ENDED: "adended", AD_BREAK_END: "adbreakend", AD_ERROR: "aderror", REQUEST_COMPLETED: "requestcompleted", REQUEST_FAILED: "requestfailed", REQUEST_CANCELLED: "requestcanceled" };
            function Lt(e4, t4) {
              return function(e5) {
                if (Array.isArray(e5))
                  return e5;
              }(e4) || function(e5, t5) {
                var r3 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
                if (null != r3) {
                  var a2, n2, i2 = [], o2 = true, s2 = false;
                  try {
                    for (r3 = r3.call(e5); !(o2 = (a2 = r3.next()).done) && (i2.push(a2.value), !t5 || i2.length !== t5); o2 = true)
                      ;
                  } catch (e6) {
                    s2 = true, n2 = e6;
                  } finally {
                    try {
                      o2 || null == r3.return || r3.return();
                    } finally {
                      if (s2)
                        throw n2;
                    }
                  }
                  return i2;
                }
              }(e4, t4) || function(e5, t5) {
                if (e5) {
                  if ("string" == typeof e5)
                    return Nt(e5, t5);
                  var r3 = Object.prototype.toString.call(e5).slice(8, -1);
                  return "Object" === r3 && e5.constructor && (r3 = e5.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(e5) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? Nt(e5, t5) : void 0;
                }
              }(e4, t4) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function Nt(e4, t4) {
              (null == t4 || t4 > e4.length) && (t4 = e4.length);
              for (var r3 = 0, a2 = new Array(t4); r3 < t4; r3++)
                a2[r3] = e4[r3];
              return a2;
            }
            var jt = {}, Ct = function e4(t4) {
              var r3 = arguments;
              "string" == typeof t4 ? e4.hasOwnProperty(t4) ? n().setTimeout(function() {
                r3 = Array.prototype.splice.call(r3, 1), e4[t4].apply(null, r3);
              }, 0) : f.warn("`" + t4 + "` is an unknown task") : "function" == typeof t4 ? n().setTimeout(function() {
                t4(e4);
              }, 0) : f.warn("`" + t4 + "` is invalid.");
            }, Ht = { loaded: _.now(), NAME: "mux-embed", VERSION: "4.14.0", API_VERSION: "2.1", PLAYER_TRACKED: false, monitor: function(e4, t4) {
              return function(e5, t5, r3) {
                var a2 = ct(u(t5), 3), n2 = a2[0], i2 = a2[1], o2 = a2[2], s2 = e5.log, l2 = e5.utils.getComputedStyle, c2 = e5.utils.secondsToMs;
                if (!n2)
                  return s2.error("No element was found with the `" + i2 + "` query selector.");
                if ("video" !== o2 && "audio" !== o2)
                  return s2.error("The element of `" + i2 + "` was not a media element.");
                n2.mux && (n2.mux.destroy(), delete n2.mux, s2.warn("Already monitoring this video element, replacing existing event listeners")), (r3 = v()({ automaticErrorTracking: true }, r3)).data = v()({ player_software: "HTML5 Video Element", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: e5.VERSION }, r3.data), r3.getPlayheadTime = function() {
                  return c2(n2.currentTime);
                }, r3.getStateData = function() {
                  var e6 = this.hlsjs && this.hlsjs.url, t6 = this.dashjs && lt("function" === this.dashjs.getSource) && this.dashjs.getSource(), a3 = { player_is_paused: n2.paused, player_playhead_time: c2(n2.currentTime), player_width: parseInt(l2(n2, "width")), player_height: parseInt(l2(n2, "height")), player_autoplay_on: n2.autoplay, player_preload_on: n2.preload, player_language_code: n2.lang, player_is_fullscreen: ut() && !!(ut().fullscreenElement || ut().webkitFullscreenElement || ut().mozFullScreenElement || ut().msFullscreenElement), video_poster_url: n2.poster, video_source_url: e6 || t6 || n2.currentSrc, video_source_duration: c2(n2.duration), video_source_height: n2.videoHeight, video_source_width: n2.videoWidth }, i3 = r3.getPlayheadTime();
                  if (n2.getStartDate && i3 > 0) {
                    var o3 = n2.getStartDate();
                    if (o3 && "function" == typeof o3.getTime && o3.getTime()) {
                      var s3 = o3.getTime();
                      if (a3.player_program_time = s3 + i3, n2.seekable.length > 0) {
                        var u2 = s3 + n2.seekable.end(n2.seekable.length - 1);
                        a3.player_live_edge_program_time = u2;
                      }
                    }
                  }
                  return a3;
                }, n2.mux = n2.mux || {}, n2.mux.deleted = false, n2.mux.emit = function(t6, r4) {
                  e5.emit(i2, t6, r4);
                };
                var d2 = function() {
                  s2.error("The monitor for this video element has already been destroyed.");
                };
                n2.mux.destroy = function() {
                  Object.keys(n2.mux.listeners).forEach(function(e6) {
                    n2.removeEventListener(e6, n2.mux.listeners[e6], false);
                  }), delete n2.mux.listeners, n2.mux.destroy = d2, n2.mux.swapElement = d2, n2.mux.emit = d2, n2.mux.addHLSJS = d2, n2.mux.addDashJS = d2, n2.mux.removeHLSJS = d2, n2.mux.removeDashJS = d2, n2.mux.deleted = true, e5.emit(i2, "destroy");
                }, n2.mux.swapElement = function(t6) {
                  var r4 = ct(u(t6), 3), a3 = r4[0], i3 = r4[1], o3 = r4[2];
                  return a3 ? "video" !== o3 && "audio" !== o3 ? e5.log.error("The element of `" + i3 + "` was not a media element.") : (a3.muxId = n2.muxId, delete n2.muxId, a3.mux = a3.mux || {}, a3.mux.listeners = v()({}, n2.mux.listeners), delete n2.mux.listeners, Object.keys(a3.mux.listeners).forEach(function(e6) {
                    n2.removeEventListener(e6, a3.mux.listeners[e6], false), a3.addEventListener(e6, a3.mux.listeners[e6], false);
                  }), a3.mux.swapElement = n2.mux.swapElement, a3.mux.destroy = n2.mux.destroy, delete n2.mux, void (n2 = a3)) : e5.log.error("No element was found with the `" + i3 + "` query selector.");
                }, n2.mux.addHLSJS = function(t6) {
                  e5.addHLSJS(i2, t6);
                }, n2.mux.addDashJS = function(t6) {
                  e5.addDashJS(i2, t6);
                }, n2.mux.removeHLSJS = function() {
                  e5.removeHLSJS(i2);
                }, n2.mux.removeDashJS = function() {
                  e5.removeDashJS(i2);
                }, e5.init(i2, r3), e5.emit(i2, "playerready"), n2.paused || (e5.emit(i2, "play"), n2.readyState > 2 && e5.emit(i2, "playing")), n2.mux.listeners = {}, pt.forEach(function(t6) {
                  ("error" !== t6 || r3.automaticErrorTracking) && (n2.mux.listeners[t6] = function() {
                    var r4 = {};
                    if ("error" === t6) {
                      if (!n2.error)
                        return;
                      if (1 === n2.error.code)
                        return;
                      r4.player_error_code = n2.error.code, r4.player_error_message = _t[n2.error.code] || n2.error.message;
                    }
                    e5.emit(i2, t6, r4);
                  }, n2.addEventListener(t6, n2.mux.listeners[t6], false));
                });
              }(Ct, e4, t4);
            }, destroyMonitor: function(e4) {
              var t4 = Lt(u(e4), 1)[0];
              t4 && t4.mux && "function" == typeof t4.mux.destroy ? t4.mux.destroy() : f.error("A video element monitor for `" + e4 + "` has not been initialized via `mux.monitor`.");
            }, addHLSJS: function(e4, t4) {
              var r3 = s(e4);
              jt[r3] ? jt[r3].addHLSJS(t4) : f.error("A monitor for `" + r3 + "` has not been initialized.");
            }, addDashJS: function(e4, t4) {
              var r3 = s(e4);
              jt[r3] ? jt[r3].addDashJS(t4) : f.error("A monitor for `" + r3 + "` has not been initialized.");
            }, removeHLSJS: function(e4) {
              var t4 = s(e4);
              jt[t4] ? jt[t4].removeHLSJS() : f.error("A monitor for `" + t4 + "` has not been initialized.");
            }, removeDashJS: function(e4) {
              var t4 = s(e4);
              jt[t4] ? jt[t4].removeDashJS() : f.error("A monitor for `" + t4 + "` has not been initialized.");
            }, init: function(e4, t4) {
              p() && t4 && t4.respectDoNotTrack && f.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
              var r3 = s(e4);
              jt[r3] = new ot(Ct, r3, t4);
            }, emit: function(e4, t4, r3) {
              var a2 = s(e4);
              jt[a2] ? (jt[a2].emit(t4, r3), "destroy" === t4 && delete jt[a2]) : f.error("A monitor for `" + a2 + "` has not been initialized.");
            }, checkDoNotTrack: p, log: f, utils: Rt, events: It, WINDOW_HIDDEN: false, WINDOW_UNLOADING: false };
            Object.assign(Ct, Ht), void 0 !== n() && "function" == typeof n().addEventListener && n().addEventListener("pagehide", function(e4) {
              e4.persisted || (Ct.WINDOW_UNLOADING = true);
            }, false);
            var Mt = Ct;
          }, 655: function(e3, t3, r2) {
            var a, n;
            function i(e4) {
              return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
                return typeof e5;
              } : function(e5) {
                return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
              }, i(e4);
            }
            !function(o) {
              var s = false;
              if (void 0 === (n = "function" == typeof (a = o) ? a.call(t3, r2, t3, e3) : a) || (e3.exports = n), s = true, "object" === i(t3) && (e3.exports = o(), s = true), !s) {
                var u = window.Cookies, l = window.Cookies = o();
                l.noConflict = function() {
                  return window.Cookies = u, l;
                };
              }
            }(function() {
              var e4 = function() {
                for (var e5 = 0, t4 = {}; e5 < arguments.length; e5++) {
                  var r3 = arguments[e5];
                  for (var a2 in r3)
                    t4[a2] = r3[a2];
                }
                return t4;
              };
              return function t4(r3) {
                function a2(t5, n2, i2) {
                  var o;
                  if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                      if ("number" == typeof (i2 = e4({ path: "/" }, a2.defaults, i2)).expires) {
                        var s = new Date();
                        s.setMilliseconds(s.getMilliseconds() + 864e5 * i2.expires), i2.expires = s;
                      }
                      try {
                        o = JSON.stringify(n2), /^[\{\[]/.test(o) && (n2 = o);
                      } catch (e5) {
                      }
                      return n2 = r3.write ? r3.write(n2, t5) : encodeURIComponent(String(n2)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t5 = (t5 = (t5 = encodeURIComponent(String(t5))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [t5, "=", n2, i2.expires ? "; expires=" + i2.expires.toUTCString() : "", i2.path ? "; path=" + i2.path : "", i2.domain ? "; domain=" + i2.domain : "", i2.secure ? "; secure" : ""].join("");
                    }
                    t5 || (o = {});
                    for (var u = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, c = 0; c < u.length; c++) {
                      var d = u[c].split("="), f = d.slice(1).join("=");
                      '"' === f.charAt(0) && (f = f.slice(1, -1));
                      try {
                        var p = d[0].replace(l, decodeURIComponent);
                        if (f = r3.read ? r3.read(f, p) : r3(f, p) || f.replace(l, decodeURIComponent), this.json)
                          try {
                            f = JSON.parse(f);
                          } catch (e5) {
                          }
                        if (t5 === p) {
                          o = f;
                          break;
                        }
                        t5 || (o[p] = f);
                      } catch (e5) {
                      }
                    }
                    return o;
                  }
                }
                return a2.set = a2, a2.get = function(e5) {
                  return a2.call(a2, e5);
                }, a2.getJSON = function() {
                  return a2.apply({ json: true }, [].slice.call(arguments));
                }, a2.defaults = {}, a2.remove = function(t5, r4) {
                  a2(t5, "", e4(r4, { expires: -1 }));
                }, a2.withConverter = t4, a2;
              }(function() {
              });
            });
          }, 153: function(e3, t3, r2) {
            var a, n = void 0 !== r2.g ? r2.g : "undefined" != typeof window ? window : {}, i = r2(558);
            "undefined" != typeof document ? a = document : (a = n["__GLOBAL_DOCUMENT_CACHE@4"]) || (a = n["__GLOBAL_DOCUMENT_CACHE@4"] = i), e3.exports = a;
          }, 48: function(e3, t3, r2) {
            var a;
            a = "undefined" != typeof window ? window : void 0 !== r2.g ? r2.g : "undefined" != typeof self ? self : {}, e3.exports = a;
          }, 678: function(e3) {
            var t3 = 9007199254740991, r2 = "[object Arguments]", a = "[object Function]", n = "[object GeneratorFunction]", i = /^(?:0|[1-9]\d*)$/;
            function o(e4, t4, r3) {
              switch (r3.length) {
                case 0:
                  return e4.call(t4);
                case 1:
                  return e4.call(t4, r3[0]);
                case 2:
                  return e4.call(t4, r3[0], r3[1]);
                case 3:
                  return e4.call(t4, r3[0], r3[1], r3[2]);
              }
              return e4.apply(t4, r3);
            }
            var s, u, l = Object.prototype, c = l.hasOwnProperty, d = l.toString, f = l.propertyIsEnumerable, p = (s = Object.keys, u = Object, function(e4) {
              return s(u(e4));
            }), _ = Math.max, h = !f.call({ valueOf: 1 }, "valueOf");
            function v(e4, t4) {
              var a2 = w(e4) || function(e5) {
                return function(e6) {
                  return function(e7) {
                    return !!e7 && "object" == typeof e7;
                  }(e6) && T(e6);
                }(e5) && c.call(e5, "callee") && (!f.call(e5, "callee") || d.call(e5) == r2);
              }(e4) ? function(e5, t5) {
                for (var r3 = -1, a3 = Array(e5); ++r3 < e5; )
                  a3[r3] = t5(r3);
                return a3;
              }(e4.length, String) : [], n2 = a2.length, i2 = !!n2;
              for (var o2 in e4)
                !t4 && !c.call(e4, o2) || i2 && ("length" == o2 || y(o2, n2)) || a2.push(o2);
              return a2;
            }
            function m(e4, t4, r3) {
              var a2 = e4[t4];
              c.call(e4, t4) && g(a2, r3) && (void 0 !== r3 || t4 in e4) || (e4[t4] = r3);
            }
            function y(e4, r3) {
              return !!(r3 = null == r3 ? t3 : r3) && ("number" == typeof e4 || i.test(e4)) && e4 > -1 && e4 % 1 == 0 && e4 < r3;
            }
            function b(e4) {
              var t4 = e4 && e4.constructor;
              return e4 === ("function" == typeof t4 && t4.prototype || l);
            }
            function g(e4, t4) {
              return e4 === t4 || e4 != e4 && t4 != t4;
            }
            var w = Array.isArray;
            function T(e4) {
              return null != e4 && function(e5) {
                return "number" == typeof e5 && e5 > -1 && e5 % 1 == 0 && e5 <= t3;
              }(e4.length) && !function(e5) {
                var t4 = k(e5) ? d.call(e5) : "";
                return t4 == a || t4 == n;
              }(e4);
            }
            function k(e4) {
              var t4 = typeof e4;
              return !!e4 && ("object" == t4 || "function" == t4);
            }
            var E, x = (E = function(e4, t4) {
              if (h || b(t4) || T(t4))
                !function(e5, t5, r4, a2) {
                  r4 || (r4 = {});
                  for (var n2 = -1, i2 = t5.length; ++n2 < i2; ) {
                    var o2 = t5[n2], s2 = a2 ? a2(r4[o2], e5[o2], o2, r4, e5) : void 0;
                    m(r4, o2, void 0 === s2 ? e5[o2] : s2);
                  }
                }(t4, function(e5) {
                  return T(e5) ? v(e5) : function(e6) {
                    if (!b(e6))
                      return p(e6);
                    var t5 = [];
                    for (var r4 in Object(e6))
                      c.call(e6, r4) && "constructor" != r4 && t5.push(r4);
                    return t5;
                  }(e5);
                }(t4), e4);
              else
                for (var r3 in t4)
                  c.call(t4, r3) && m(e4, r3, t4[r3]);
            }, function(e4, t4) {
              return t4 = _(void 0 === t4 ? e4.length - 1 : t4, 0), function() {
                for (var r3 = arguments, a2 = -1, n2 = _(r3.length - t4, 0), i2 = Array(n2); ++a2 < n2; )
                  i2[a2] = r3[t4 + a2];
                a2 = -1;
                for (var s2 = Array(t4 + 1); ++a2 < t4; )
                  s2[a2] = r3[a2];
                return s2[t4] = i2, o(e4, this, s2);
              };
            }(function(e4, t4) {
              var r3 = -1, a2 = t4.length, n2 = a2 > 1 ? t4[a2 - 1] : void 0, i2 = a2 > 2 ? t4[2] : void 0;
              for (n2 = E.length > 3 && "function" == typeof n2 ? (a2--, n2) : void 0, i2 && function(e5, t5, r4) {
                if (!k(r4))
                  return false;
                var a3 = typeof t5;
                return !!("number" == a3 ? T(r4) && y(t5, r4.length) : "string" == a3 && t5 in r4) && g(r4[t5], e5);
              }(t4[0], t4[1], i2) && (n2 = a2 < 3 ? void 0 : n2, a2 = 1), e4 = Object(e4); ++r3 < a2; ) {
                var o2 = t4[r3];
                o2 && E(e4, o2, r3, n2);
              }
              return e4;
            }));
            e3.exports = x;
          }, 640: function(e3, t3, r2) {
            var a, n;
            !function(i, o) {
              "use strict";
              a = function() {
                var e4 = function() {
                }, t4 = "undefined", r3 = typeof window !== t4 && typeof window.navigator !== t4 && /Trident\/|MSIE /.test(window.navigator.userAgent), a2 = ["trace", "debug", "info", "warn", "error"];
                function n2(e5, t5) {
                  var r4 = e5[t5];
                  if ("function" == typeof r4.bind)
                    return r4.bind(e5);
                  try {
                    return Function.prototype.bind.call(r4, e5);
                  } catch (t6) {
                    return function() {
                      return Function.prototype.apply.apply(r4, [e5, arguments]);
                    };
                  }
                }
                function i2() {
                  console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
                }
                function o2(a3) {
                  return "debug" === a3 && (a3 = "log"), typeof console !== t4 && ("trace" === a3 && r3 ? i2 : void 0 !== console[a3] ? n2(console, a3) : void 0 !== console.log ? n2(console, "log") : e4);
                }
                function s(t5, r4) {
                  for (var n3 = 0; n3 < a2.length; n3++) {
                    var i3 = a2[n3];
                    this[i3] = n3 < t5 ? e4 : this.methodFactory(i3, t5, r4);
                  }
                  this.log = this.debug;
                }
                function u(e5, r4, a3) {
                  return function() {
                    typeof console !== t4 && (s.call(this, r4, a3), this[e5].apply(this, arguments));
                  };
                }
                function l(e5, t5, r4) {
                  return o2(e5) || u.apply(this, arguments);
                }
                function c(e5, r4, n3) {
                  var i3, o3 = this;
                  r4 = null == r4 ? "WARN" : r4;
                  var u2 = "loglevel";
                  function c2(e6) {
                    var r5 = (a2[e6] || "silent").toUpperCase();
                    if (typeof window !== t4 && u2) {
                      try {
                        return void (window.localStorage[u2] = r5);
                      } catch (e7) {
                      }
                      try {
                        window.document.cookie = encodeURIComponent(u2) + "=" + r5 + ";";
                      } catch (e7) {
                      }
                    }
                  }
                  function d2() {
                    var e6;
                    if (typeof window !== t4 && u2) {
                      try {
                        e6 = window.localStorage[u2];
                      } catch (e7) {
                      }
                      if (typeof e6 === t4)
                        try {
                          var r5 = window.document.cookie, a3 = r5.indexOf(encodeURIComponent(u2) + "=");
                          -1 !== a3 && (e6 = /^([^;]+)/.exec(r5.slice(a3))[1]);
                        } catch (e7) {
                        }
                      return void 0 === o3.levels[e6] && (e6 = void 0), e6;
                    }
                  }
                  function f2() {
                    if (typeof window !== t4 && u2) {
                      try {
                        return void window.localStorage.removeItem(u2);
                      } catch (e6) {
                      }
                      try {
                        window.document.cookie = encodeURIComponent(u2) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                      } catch (e6) {
                      }
                    }
                  }
                  "string" == typeof e5 ? u2 += ":" + e5 : "symbol" == typeof e5 && (u2 = void 0), o3.name = e5, o3.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, o3.methodFactory = n3 || l, o3.getLevel = function() {
                    return i3;
                  }, o3.setLevel = function(r5, a3) {
                    if ("string" == typeof r5 && void 0 !== o3.levels[r5.toUpperCase()] && (r5 = o3.levels[r5.toUpperCase()]), !("number" == typeof r5 && r5 >= 0 && r5 <= o3.levels.SILENT))
                      throw "log.setLevel() called with invalid level: " + r5;
                    if (i3 = r5, false !== a3 && c2(r5), s.call(o3, r5, e5), typeof console === t4 && r5 < o3.levels.SILENT)
                      return "No console available for logging";
                  }, o3.setDefaultLevel = function(e6) {
                    r4 = e6, d2() || o3.setLevel(e6, false);
                  }, o3.resetLevel = function() {
                    o3.setLevel(r4, false), f2();
                  }, o3.enableAll = function(e6) {
                    o3.setLevel(o3.levels.TRACE, e6);
                  }, o3.disableAll = function(e6) {
                    o3.setLevel(o3.levels.SILENT, e6);
                  };
                  var p2 = d2();
                  null == p2 && (p2 = r4), o3.setLevel(p2, false);
                }
                var d = new c(), f = {};
                d.getLogger = function(e5) {
                  if ("symbol" != typeof e5 && "string" != typeof e5 || "" === e5)
                    throw new TypeError("You must supply a name when creating a logger.");
                  var t5 = f[e5];
                  return t5 || (t5 = f[e5] = new c(e5, d.getLevel(), d.methodFactory)), t5;
                };
                var p = typeof window !== t4 ? window.log : void 0;
                return d.noConflict = function() {
                  return typeof window !== t4 && window.log === d && (window.log = p), d;
                }, d.getLoggers = function() {
                  return f;
                }, d.default = d, d;
              }, void 0 === (n = "function" == typeof a ? a.call(t3, r2, t3, e3) : a) || (e3.exports = n);
            }();
          }, 375: function(e3, t3) {
            "use strict";
            var r2 = Object.prototype.hasOwnProperty;
            function a(e4) {
              try {
                return decodeURIComponent(e4.replace(/\+/g, " "));
              } catch (e5) {
                return null;
              }
            }
            function n(e4) {
              try {
                return encodeURIComponent(e4);
              } catch (e5) {
                return null;
              }
            }
            t3.stringify = function(e4, t4) {
              t4 = t4 || "";
              var a2, i, o = [];
              for (i in "string" != typeof t4 && (t4 = "?"), e4)
                if (r2.call(e4, i)) {
                  if ((a2 = e4[i]) || null != a2 && !isNaN(a2) || (a2 = ""), i = n(i), a2 = n(a2), null === i || null === a2)
                    continue;
                  o.push(i + "=" + a2);
                }
              return o.length ? t4 + o.join("&") : "";
            }, t3.parse = function(e4) {
              for (var t4, r3 = /([^=?#&]+)=?([^&]*)/g, n2 = {}; t4 = r3.exec(e4); ) {
                var i = a(t4[1]), o = a(t4[2]);
                null === i || null === o || i in n2 || (n2[i] = o);
              }
              return n2;
            };
          }, 558: function() {
          } }, t2 = {};
          function r(a) {
            var n = t2[a];
            if (void 0 !== n)
              return n.exports;
            var i = t2[a] = { exports: {} };
            return e2[a].call(i.exports, i, i.exports, r), i.exports;
          }
          return r.n = function(e3) {
            var t3 = e3 && e3.__esModule ? function() {
              return e3.default;
            } : function() {
              return e3;
            };
            return r.d(t3, { a: t3 }), t3;
          }, r.d = function(e3, t3) {
            for (var a in t3)
              r.o(t3, a) && !r.o(e3, a) && Object.defineProperty(e3, a, { enumerable: true, get: t3[a] });
          }, r.g = function() {
            if ("object" == typeof globalThis)
              return globalThis;
            try {
              return this || new Function("return this")();
            } catch (e3) {
              if ("object" == typeof window)
                return window;
            }
          }(), r.o = function(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }, r(80);
        }();
      }, "object" == typeof exports && "object" == typeof module ? module.exports = t() : "object" == typeof exports ? exports.mux = t() : e.mux = t();
    }();
  }
});

// mux-embed.mjs
var import_mux_embed = __toESM(require_mux(), 1);
var mux_embed_default = import_mux_embed.default;
export {
  mux_embed_default as default
};
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
/*!
 * mux-embed
 * @version 4.14.0
 * @copyright 2022 Mux, Inc
 */
