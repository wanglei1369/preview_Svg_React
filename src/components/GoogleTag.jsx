/** @format */
import React from 'react';
import {Helmet} from 'react-helmet';

export function GoogleTagManager(){
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-K5NP54L');


    (function(e) {
        function r(r) {
            // for (var n, a, c = r[0], i = r[1], f = r[2], s = 0, p = []; s < c.length; s++) a = c[s], Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]), o[a] = 0;
            for (var n, a, c = r[0], i = r[1], f = r[2], s = 0, p = []; s < c.length; s++){
                a = c[s];
                Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]);
                o[a] = 0;
            }
            for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            for (l && l(r); p.length;) p.shift()();
            return u.push.apply(u, f || []), t()
        }

        function t() {
            for (var e, r = 0; r < u.length; r++) {
                for (var t = u[r], n = !0, c = 1; c < t.length; c++) {
                    var i = t[c];
                    0 !== o[i] && (n = !1)
                }
                // n && (u.splice(r--, 1), e = a(a.s = t[0]))
                if(n){
                    u.splice(r--, 1);
                    e = a(a.s = t[0]);
                }
                
            }
            return e
        }
        var n = {},
            o = {
                1: 0
            },
            u = [];

        function a(r) {
            if (n[r]) return n[r].exports;
            var t = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(t.exports, t, t.exports, a), t.l = !0, t.exports
        }
        
        a.e = function(e) {
            var r = [],
                t = o[e];
            if (0 !== t)
                if (t) r.push(t[2]);
                else {
                    var n = new Promise((function(r, n) {
                        t = o[e] = [r, n]
                    }));
                    r.push(t[2] = n);
                    var u, c = document.createElement("script");
                    c.charset = "utf-8";
                    c.timeout = 120;
                    if(a.nc){
                        c.setAttribute("nonce", a.nc);
                        c.src = function(e) {
                            return a.p + "static/js/" + ({}[e] || e) + "." + {
                                3: "3afe4dee",
                                4: "ac44a2fc",
                                5: "93b18652",
                                6: "8cabb2e4",
                                7: "2965260f",
                                8: "251f6961",
                                9: "19bf5ee2"
                            }[e] + ".chunk.js"
                        }(e);
                    } 
                    var i = new Error;
                    u = function(r) {
                        c.onerror = c.onload = null;
                        clearTimeout(f);
                        var t = o[e];
                        if (0 !== t) {
                            if (t) {
                                var n = r && ("load" === r.type ? "missing" : r.type),
                                    u = r && r.target && r.target.src;
                                i.message = "Loading chunk " + e + " failed.\n(" + n + ": " + u + ")";
                                i.name = "ChunkLoadError";
                                i.type = n;
                                i.request = u;
                                t[1](i);
                            }
                            o[e] = void 0
                        }
                    };
                    var f = setTimeout((function() {
                        u({
                            type: "timeout",
                            target: c
                        })
                    }), 12e4);
                    c.onerror = c.onload = u;
                    document.head.appendChild(c)
                }
            return Promise.all(r)
        }; 
        a.m = e;
        a.c = n;
        a.d = function(e, r, t) {
            a.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: t
            })
        }
        
        a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        
        a.t = function(e, r) {
            if (1 & r && (e = a(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (a.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & r && "string" != typeof e)
                for (var n in e) a.d(t, n, function(r) {
                    return e[r]
                }.bind(null, n));
            return t
        }
        
        a.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return a.d(r, "a", r), r
        }
        
        a.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }
        
        a.p = "/";
        
        a.oe = function(e) {
            throw console.error(e), e
        };
        // var c = this["webpackJsonpcjcmarkets-svg"] = this["webpackJsonpcjcmarkets-svg"] || [],
        var c = [],i = c.push.bind(c);
        c.push = r;
        c = c.slice();
        for (var f = 0; f < c.length; f++) r(c[f]);
        var l = i;
        t()
    })([])
    
    return (
        <>
            <Helmet>
                <link href="/static/css/2.20c1a081.chunk.css" rel="stylesheet"/>
                <link href="/static/css/main.1650b32f.chunk.css" rel="stylesheet"/>
            </Helmet>
            <div>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5NP54L" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                </noscript>
                <script src="/static/js/2.d81a5f31.chunk.js"></script>
                <script src="/static/js/main.ae9ae594.chunk.js"></script>
            </div>
        </>
        
    );
}