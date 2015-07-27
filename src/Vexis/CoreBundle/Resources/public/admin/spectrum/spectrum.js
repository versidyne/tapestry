// Spectrum Colorpicker v1.6.2
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports && "object" == typeof module ? module.exports = a : a(jQuery)
}(function (a, b) {
    "use strict";
    function i(b, c, d, e) {
        for (var g = [], h = 0; h < b.length; h++) {
            var i = b[h];
            if (i) {
                var j = tinycolor(i), k = j.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
                k += tinycolor.equals(c, i) ? " sp-thumb-active" : "";
                var l = j.toString(e.preferredFormat || "rgb"), m = f ? "background-color:" + j.toRgbString() : "filter:" + j.toFilter();
                g.push('<span title="' + l + '" data-color="' + j.toRgbString() + '" class="' + k + '"><span class="sp-thumb-inner" style="' + m + ';" /></span>')
            } else {
                var n = "sp-clear-display";
                g.push(a("<div />").append(a('<span data-color="" style="background-color:transparent;" class="' + n + '"></span>').attr("title", e.noColorSelectedText)).html())
            }
        }
        return "<div class='sp-cf " + d + "'>" + g.join("") + "</div>"
    }

    function j() {
        for (var a = 0; a < d.length; a++)d[a] && d[a].hide()
    }

    function k(b, d) {
        var e = a.extend({}, c, b);
        return e.callbacks = {
            move: p(e.move, d),
            change: p(e.change, d),
            show: p(e.show, d),
            hide: p(e.hide, d),
            beforeShow: p(e.beforeShow, d)
        }, e
    }

    function l(c, l) {
        function xb() {
            if (n.showPaletteOnly && (n.showPalette = !0), jb.text(n.showPaletteOnly ? n.togglePaletteMoreText : n.togglePaletteLessText), n.palette) {
                L = n.palette.slice(0), M = a.isArray(L[0]) ? L : [L], N = {};
                for (var b = 0; b < M.length; b++)for (var c = 0; c < M[b].length; c++) {
                    var d = tinycolor(M[b][c]).toRgbString();
                    N[d] = !0
                }
            }
            W.toggleClass("sp-flat", p), W.toggleClass("sp-input-disabled", !n.showInput), W.toggleClass("sp-alpha-enabled", n.showAlpha), W.toggleClass("sp-clear-enabled", wb), W.toggleClass("sp-buttons-disabled", !n.showButtons), W.toggleClass("sp-palette-buttons-disabled", !n.togglePaletteOnly), W.toggleClass("sp-palette-disabled", !n.showPalette), W.toggleClass("sp-palette-only", n.showPaletteOnly), W.toggleClass("sp-initial-disabled", !n.showInitial), W.addClass(n.className).addClass(n.containerClassName), Tb()
        }

        function yb() {
            function c(b) {
                return b.data && b.data.ignore ? (Mb(a(b.target).closest(".sp-thumb-el").data("color")), Pb()) : (Mb(a(b.target).closest(".sp-thumb-el").data("color")), Pb(), Sb(!0), n.hideAfterPaletteSelect && Kb()), !1
            }

            if (e && W.find("*:not(input)").attr("unselectable", "on"), xb(), mb && U.after(nb).hide(), wb || hb.hide(), p)U.after(W).hide(); else {
                var b = "parent" === n.appendTo ? U.parent() : a(n.appendTo);
                1 !== b.length && (b = a("body")), b.append(W)
            }
            zb(), ob.bind("click.spectrum touchstart.spectrum", function (b) {
                V || Hb(), b.stopPropagation(), a(b.target).is("input") || b.preventDefault()
            }), (U.is(":disabled") || n.disabled === !0) && Xb(), W.click(o), db.change(Gb), db.bind("paste", function () {
                setTimeout(Gb, 1)
            }), db.keydown(function (a) {
                13 == a.keyCode && Gb()
            }), gb.text(n.cancelText), gb.bind("click.spectrum", function (a) {
                a.stopPropagation(), a.preventDefault(), Lb(), Kb()
            }), hb.attr("title", n.clearText), hb.bind("click.spectrum", function (a) {
                a.stopPropagation(), a.preventDefault(), vb = !0, Pb(), p && Sb(!0)
            }), ib.text(n.chooseText), ib.bind("click.spectrum", function (a) {
                a.stopPropagation(), a.preventDefault(), e && db.is(":focus") && db.trigger("change"), Ob() && (Sb(!0), Kb())
            }), jb.text(n.showPaletteOnly ? n.togglePaletteMoreText : n.togglePaletteLessText), jb.bind("click.spectrum", function (a) {
                a.stopPropagation(), a.preventDefault(), n.showPaletteOnly = !n.showPaletteOnly, n.showPaletteOnly || p || W.css("left", "-=" + (X.outerWidth(!0) + 5)), xb()
            }), q(bb, function (a, b, c) {
                K = a / E, vb = !1, c.shiftKey && (K = Math.round(10 * K) / 10), Pb()
            }, Eb, Fb), q($, function (a, b) {
                H = parseFloat(b / C), vb = !1, n.showAlpha || (K = 1), Pb()
            }, Eb, Fb), q(Y, function (a, b, c) {
                if (c.shiftKey) {
                    if (!R) {
                        var d = I * z, e = A - J * A, f = Math.abs(a - d) > Math.abs(b - e);
                        R = f ? "x" : "y"
                    }
                } else R = null;
                var g = !R || "x" === R, h = !R || "y" === R;
                g && (I = parseFloat(a / z)), h && (J = parseFloat((A - b) / A)), vb = !1, n.showAlpha || (K = 1), Pb()
            }, Eb, Fb), qb ? (Mb(qb), Qb(), tb = sb || tinycolor(qb).format, Ab(qb)) : Qb(), p && Ib();
            var d = e ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            eb.delegate(".sp-thumb-el", d, c), fb.delegate(".sp-thumb-el:nth-child(1)", d, {ignore: !0}, c)
        }

        function zb() {
            if (u && window.localStorage) {
                try {
                    var b = window.localStorage[u].split(",#");
                    b.length > 1 && (delete window.localStorage[u], a.each(b, function (a, b) {
                        Ab(b)
                    }))
                } catch (c) {
                }
                try {
                    O = window.localStorage[u].split(";")
                } catch (c) {
                }
            }
        }

        function Ab(b) {
            if (t) {
                var c = tinycolor(b).toRgbString();
                if (!N[c] && -1 === a.inArray(c, O))for (O.push(c); O.length > P;)O.shift();
                if (u && window.localStorage)try {
                    window.localStorage[u] = O.join(";")
                } catch (d) {
                }
            }
        }

        function Bb() {
            var a = [];
            if (n.showPalette)for (var b = 0; b < O.length; b++) {
                var c = tinycolor(O[b]).toRgbString();
                N[c] || a.push(O[b])
            }
            return a.reverse().slice(0, n.maxSelectionSize)
        }

        function Cb() {
            var b = Nb(), c = a.map(M, function (a, c) {
                return i(a, b, "sp-palette-row sp-palette-row-" + c, n)
            });
            zb(), O && c.push(i(Bb(), b, "sp-palette-row sp-palette-row-selection", n)), eb.html(c.join(""))
        }

        function Db() {
            if (n.showInitial) {
                var a = rb, b = Nb();
                fb.html(i([a, b], b, "sp-palette-row-initial", n))
            }
        }

        function Eb() {
            (0 >= A || 0 >= z || 0 >= C) && Tb(), W.addClass(Q), R = null, U.trigger("dragstart.spectrum", [Nb()])
        }

        function Fb() {
            W.removeClass(Q), U.trigger("dragstop.spectrum", [Nb()])
        }

        function Gb() {
            var a = db.val();
            if (null !== a && "" !== a || !wb) {
                var b = tinycolor(a);
                b.isValid() ? (Mb(b), Sb(!0)) : db.addClass("sp-validation-error")
            } else Mb(null), Sb(!0)
        }

        function Hb() {
            y ? Kb() : Ib()
        }

        function Ib() {
            var b = a.Event("beforeShow.spectrum");
            return y ? (Tb(), void 0) : (U.trigger(b, [Nb()]), w.beforeShow(Nb()) === !1 || b.isDefaultPrevented() || (j(), y = !0, a(S).bind("click.spectrum", Jb), a(window).bind("resize.spectrum", x), nb.addClass("sp-active"), W.removeClass("sp-hidden"), Tb(), Qb(), rb = Nb(), Db(), w.show(rb), U.trigger("show.spectrum", [rb])), void 0)
        }

        function Jb(a) {
            2 != a.button && (ub ? Sb(!0) : Lb(), Kb())
        }

        function Kb() {
            y && !p && (y = !1, a(S).unbind("click.spectrum", Jb), a(window).unbind("resize.spectrum", x), nb.removeClass("sp-active"), W.addClass("sp-hidden"), w.hide(Nb()), U.trigger("hide.spectrum", [Nb()]))
        }

        function Lb() {
            Mb(rb, !0)
        }

        function Mb(a, b) {
            if (tinycolor.equals(a, Nb()))return Qb(), void 0;
            var c, d;
            !a && wb ? vb = !0 : (vb = !1, c = tinycolor(a), d = c.toHsv(), H = d.h % 360 / 360, I = d.s, J = d.v, K = d.a), Qb(), c && c.isValid() && !b && (tb = sb || c.getFormat())
        }

        function Nb(a) {
            return a = a || {}, wb && vb ? null : tinycolor.fromRatio({
                h: H,
                s: I,
                v: J,
                a: Math.round(100 * K) / 100
            }, {format: a.format || tb})
        }

        function Ob() {
            return !db.hasClass("sp-validation-error")
        }

        function Pb() {
            Qb(), w.move(Nb()), U.trigger("move.spectrum", [Nb()])
        }

        function Qb() {
            db.removeClass("sp-validation-error"), Rb();
            var a = tinycolor.fromRatio({h: H, s: 1, v: 1});
            Y.css("background-color", a.toHexString());
            var b = tb;
            1 > K && (0 !== K || "name" !== b) && ("hex" === b || "hex3" === b || "hex6" === b || "name" === b) && (b = "rgb");
            var c = Nb({format: b}), d = "";
            if (pb.removeClass("sp-clear-display"), pb.css("background-color", "transparent"), !c && wb)pb.addClass("sp-clear-display"); else {
                var g = c.toHexString(), h = c.toRgbString();
                if (f || 1 === c.alpha ? pb.css("background-color", h) : (pb.css("background-color", "transparent"), pb.css("filter", c.toFilter())), n.showAlpha) {
                    var i = c.toRgb();
                    i.a = 0;
                    var j = tinycolor(i).toRgbString(), k = "linear-gradient(left, " + j + ", " + g + ")";
                    e ? ab.css("filter", tinycolor(j).toFilter({gradientType: 1}, g)) : (ab.css("background", "-webkit-" + k), ab.css("background", "-moz-" + k), ab.css("background", "-ms-" + k), ab.css("background", "linear-gradient(to right, " + j + ", " + g + ")"))
                }
                d = c.toString(b)
            }
            n.showInput && db.val(d), n.showPalette && Cb(), Db()
        }

        function Rb() {
            var a = I, b = J;
            if (wb && vb)cb.hide(), _.hide(), Z.hide(); else {
                cb.show(), _.show(), Z.show();
                var c = a * z, d = A - b * A;
                c = Math.max(-B, Math.min(z - B, c - B)), d = Math.max(-B, Math.min(A - B, d - B)), Z.css({
                    top: d + "px",
                    left: c + "px"
                });
                var e = K * E;
                cb.css({left: e - F / 2 + "px"});
                var f = H * C;
                _.css({top: f - G + "px"})
            }
        }

        function Sb(a) {
            var b = Nb(), c = "", d = !tinycolor.equals(b, rb);
            b && (c = b.toString(tb), Ab(b)), kb && U.val(c), a && d && (w.change(b), U.trigger("change", [b]))
        }

        function Tb() {
            z = Y.width(), A = Y.height(), B = Z.height(), D = $.width(), C = $.height(), G = _.height(), E = bb.width(), F = cb.width(), p || (W.css("position", "absolute"), n.offset ? W.offset(n.offset) : W.offset(m(W, ob))), Rb(), n.showPalette && Cb(), U.trigger("reflow.spectrum")
        }

        function Ub() {
            U.show(), ob.unbind("click.spectrum touchstart.spectrum"), W.remove(), nb.remove(), d[Zb.id] = null
        }

        function Vb(c, d) {
            return c === b ? a.extend({}, n) : d === b ? n[c] : (n[c] = d, xb(), void 0)
        }

        function Wb() {
            V = !1, U.attr("disabled", !1), ob.removeClass("sp-disabled")
        }

        function Xb() {
            Kb(), V = !0, U.attr("disabled", !0), ob.addClass("sp-disabled")
        }

        function Yb(a) {
            n.offset = a, Tb()
        }

        var n = k(l, c), p = n.flat, t = n.showSelectionPalette, u = n.localStorageKey, v = n.theme, w = n.callbacks, x = r(Tb, 10), y = !1, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 1, L = [], M = [], N = {}, O = n.selectionPalette.slice(0), P = n.maxSelectionSize, Q = "sp-dragging", R = null, S = c.ownerDocument, U = (S.body, a(c)), V = !1, W = a(h, S).addClass(v), X = W.find(".sp-picker-container"), Y = W.find(".sp-color"), Z = W.find(".sp-dragger"), $ = W.find(".sp-hue"), _ = W.find(".sp-slider"), ab = W.find(".sp-alpha-inner"), bb = W.find(".sp-alpha"), cb = W.find(".sp-alpha-handle"), db = W.find(".sp-input"), eb = W.find(".sp-palette"), fb = W.find(".sp-initial"), gb = W.find(".sp-cancel"), hb = W.find(".sp-clear"), ib = W.find(".sp-choose"), jb = W.find(".sp-palette-toggle"), kb = U.is("input"), lb = kb && "color" === U.attr("type") && s(), mb = kb && !p, nb = mb ? a(g).addClass(v).addClass(n.className).addClass(n.replacerClassName) : a([]), ob = mb ? nb : U, pb = nb.find(".sp-preview-inner"), qb = n.color || kb && U.val(), rb = !1, sb = n.preferredFormat, tb = sb, ub = !n.showButtons || n.clickoutFiresChange, vb = !qb, wb = n.allowEmpty && !lb;
        yb();
        var Zb = {
            show: Ib,
            hide: Kb,
            toggle: Hb,
            reflow: Tb,
            option: Vb,
            enable: Wb,
            disable: Xb,
            offset: Yb,
            set: function (a) {
                Mb(a), Sb()
            },
            get: Nb,
            destroy: Ub,
            container: W
        };
        return Zb.id = d.push(Zb) - 1, Zb
    }

    function m(b, c) {
        var d = 0, e = b.outerWidth(), f = b.outerHeight(), g = c.outerHeight(), h = b[0].ownerDocument, i = h.documentElement, j = i.clientWidth + a(h).scrollLeft(), k = i.clientHeight + a(h).scrollTop(), l = c.offset();
        return l.top += g, l.left -= Math.min(l.left, l.left + e > j && j > e ? Math.abs(l.left + e - j) : 0), l.top -= Math.min(l.top, l.top + f > k && k > f ? Math.abs(f + g - d) : d), l
    }

    function n() {
    }

    function o(a) {
        a.stopPropagation()
    }

    function p(a, b) {
        var c = Array.prototype.slice, d = c.call(arguments, 2);
        return function () {
            return a.apply(b, d.concat(c.call(arguments)))
        }
    }

    function q(b, c, d, f) {
        function n(a) {
            a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.returnValue = !1
        }

        function o(a) {
            if (h) {
                if (e && g.documentMode < 9 && !a.button)return q();
                var d = a.originalEvent && a.originalEvent.touches && a.originalEvent.touches[0], f = d && d.pageX || a.pageX, m = d && d.pageY || a.pageY, o = Math.max(0, Math.min(f - i.left, k)), p = Math.max(0, Math.min(m - i.top, j));
                l && n(a), c.apply(b, [o, p, a])
            }
        }

        function p(c) {
            var e = c.which ? 3 == c.which : 2 == c.button;
            e || h || d.apply(b, arguments) !== !1 && (h = !0, j = a(b).height(), k = a(b).width(), i = a(b).offset(), a(g).bind(m), a(g.body).addClass("sp-dragging"), l || o(c), n(c))
        }

        function q() {
            h && (a(g).unbind(m), a(g.body).removeClass("sp-dragging"), f.apply(b, arguments)), h = !1
        }

        c = c || function () {
        }, d = d || function () {
        }, f = f || function () {
        };
        var g = document, h = !1, i = {}, j = 0, k = 0, l = "ontouchstart"in window, m = {};
        m.selectstart = n, m.dragstart = n, m["touchmove mousemove"] = o, m["touchend mouseup"] = q, a(b).bind("touchstart mousedown", p)
    }

    function r(a, b, c) {
        var d;
        return function () {
            var e = this, f = arguments, g = function () {
                d = null, a.apply(e, f)
            };
            c && clearTimeout(d), (c || !d) && (d = setTimeout(g, b))
        }
    }

    function s() {
        return a.fn.spectrum.inputTypeColorSupport()
    }

    var c = {
        beforeShow: n,
        move: n,
        change: n,
        show: n,
        hide: n,
        color: !1,
        flat: !1,
        showInput: !1,
        allowEmpty: !1,
        showButtons: !0,
        clickoutFiresChange: !1,
        showInitial: !1,
        showPalette: !1,
        showPaletteOnly: !1,
        hideAfterPaletteSelect: !1,
        togglePaletteOnly: !1,
        showSelectionPalette: !0,
        localStorageKey: !1,
        appendTo: "body",
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        togglePaletteMoreText: "more",
        togglePaletteLessText: "less",
        clearText: "Clear Color Selection",
        noColorSelectedText: "No Color Selected",
        preferredFormat: !1,
        className: "",
        containerClassName: "",
        replacerClassName: "",
        showAlpha: !1,
        theme: "sp-light",
        palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
        selectionPalette: [],
        disabled: !1,
        offset: null
    }, d = [], e = !!/msie/i.exec(window.navigator.userAgent), f = function () {
        function a(a, b) {
            return !!~("" + a).indexOf(b)
        }

        var b = document.createElement("div"), c = b.style;
        return c.cssText = "background-color:rgba(0,0,0,.5)", a(c.backgroundColor, "rgba") || a(c.backgroundColor, "hsla")
    }(), g = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""), h = function () {
        var a = "";
        if (e)for (var b = 1; 6 >= b; b++)a += "<div class='sp-" + b + "'></div>";
        return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "<div class='sp-palette-button-container sp-cf'>", "<button type='button' class='sp-palette-toggle'></button>", "</div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-clear sp-clear-display'>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", a, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button type='button' class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("")
    }(), t = "spectrum.id";
    a.fn.spectrum = function (b) {
        if ("string" == typeof b) {
            var e = this, f = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var c = d[a(this).data(t)];
                if (c) {
                    var g = c[b];
                    if (!g)throw new Error("Spectrum: no such method: '" + b + "'");
                    "get" == b ? e = c.get() : "container" == b ? e = c.container : "option" == b ? e = c.option.apply(c, f) : "destroy" == b ? (c.destroy(), a(this).removeData(t)) : g.apply(c, f)
                }
            }), e
        }
        return this.spectrum("destroy").each(function () {
            var c = a.extend({}, b, a(this).data()), d = l(this, c);
            a(this).data(t, d.id)
        })
    }, a.fn.spectrum.load = !0, a.fn.spectrum.loadOpts = {}, a.fn.spectrum.draggable = q, a.fn.spectrum.defaults = c, a.fn.spectrum.inputTypeColorSupport = function u() {
        if ("undefined" == typeof u._cachedResult) {
            var b = a("<input type='color' value='!' />")[0];
            u._cachedResult = "color" === b.type && "!" !== b.value
        }
        return u._cachedResult
    }, a.spectrum = {}, a.spectrum.localization = {}, a.spectrum.palettes = {}, a.fn.spectrum.processNativeColorInputs = function () {
        var b = a("input[type=color]");
        b.length && !s() && b.spectrum({preferredFormat: "hex6"})
    }, function () {
        function j(a) {
            var b = {r: 0, g: 0, b: 0}, c = 1, d = !1, e = !1;
            return "string" == typeof a && (a = S(a)), "object" == typeof a && (a.hasOwnProperty("r") && a.hasOwnProperty("g") && a.hasOwnProperty("b") ? (b = k(a.r, a.g, a.b), d = !0, e = "%" === String(a.r).substr(-1) ? "prgb" : "rgb") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("v") ? (a.s = O(a.s), a.v = O(a.v), b = o(a.h, a.s, a.v), d = !0, e = "hsv") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("l") && (a.s = O(a.s), a.l = O(a.l), b = m(a.h, a.s, a.l), d = !0, e = "hsl"), a.hasOwnProperty("a") && (c = a.a)), c = H(c), {
                ok: d,
                format: a.format || e,
                r: f(255, g(b.r, 0)),
                g: f(255, g(b.g, 0)),
                b: f(255, g(b.b, 0)),
                a: c
            }
        }

        function k(a, b, c) {
            return {r: 255 * I(a, 255), g: 255 * I(b, 255), b: 255 * I(c, 255)}
        }

        function l(a, b, c) {
            a = I(a, 255), b = I(b, 255), c = I(c, 255);
            var h, i, d = g(a, b, c), e = f(a, b, c), j = (d + e) / 2;
            if (d == e)h = i = 0; else {
                var k = d - e;
                switch (i = j > .5 ? k / (2 - d - e) : k / (d + e), d) {
                    case a:
                        h = (b - c) / k + (c > b ? 6 : 0);
                        break;
                    case b:
                        h = (c - a) / k + 2;
                        break;
                    case c:
                        h = (a - b) / k + 4
                }
                h /= 6
            }
            return {h: h, s: i, l: j}
        }

        function m(a, b, c) {
            function g(a, b, c) {
                return 0 > c && (c += 1), c > 1 && (c -= 1), 1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + 6 * (b - a) * (2 / 3 - c) : a
            }

            var d, e, f;
            if (a = I(a, 360), b = I(b, 100), c = I(c, 100), 0 === b)d = e = f = c; else {
                var h = .5 > c ? c * (1 + b) : c + b - c * b, i = 2 * c - h;
                d = g(i, h, a + 1 / 3), e = g(i, h, a), f = g(i, h, a - 1 / 3)
            }
            return {r: 255 * d, g: 255 * e, b: 255 * f}
        }

        function n(a, b, c) {
            a = I(a, 255), b = I(b, 255), c = I(c, 255);
            var h, i, d = g(a, b, c), e = f(a, b, c), j = d, k = d - e;
            if (i = 0 === d ? 0 : k / d, d == e)h = 0; else {
                switch (d) {
                    case a:
                        h = (b - c) / k + (c > b ? 6 : 0);
                        break;
                    case b:
                        h = (c - a) / k + 2;
                        break;
                    case c:
                        h = (a - b) / k + 4
                }
                h /= 6
            }
            return {h: h, s: i, v: j}
        }

        function o(a, b, c) {
            a = 6 * I(a, 360), b = I(b, 100), c = I(c, 100);
            var e = d.floor(a), f = a - e, g = c * (1 - b), h = c * (1 - f * b), i = c * (1 - (1 - f) * b), j = e % 6, k = [c, h, g, g, i, c][j], l = [i, c, c, h, g, g][j], m = [g, g, i, c, c, h][j];
            return {r: 255 * k, g: 255 * l, b: 255 * m}
        }

        function p(a, b, c, d) {
            var f = [N(e(a).toString(16)), N(e(b).toString(16)), N(e(c).toString(16))];
            return d && f[0].charAt(0) == f[0].charAt(1) && f[1].charAt(0) == f[1].charAt(1) && f[2].charAt(0) == f[2].charAt(1) ? f[0].charAt(0) + f[1].charAt(0) + f[2].charAt(0) : f.join("")
        }

        function q(a, b, c, d) {
            var f = [N(P(d)), N(e(a).toString(16)), N(e(b).toString(16)), N(e(c).toString(16))];
            return f.join("")
        }

        function r(a, b) {
            b = 0 === b ? 0 : b || 10;
            var c = i(a).toHsl();
            return c.s -= b / 100, c.s = J(c.s), i(c)
        }

        function s(a, b) {
            b = 0 === b ? 0 : b || 10;
            var c = i(a).toHsl();
            return c.s += b / 100, c.s = J(c.s), i(c)
        }

        function t(a) {
            return i(a).desaturate(100)
        }

        function u(a, b) {
            b = 0 === b ? 0 : b || 10;
            var c = i(a).toHsl();
            return c.l += b / 100, c.l = J(c.l), i(c)
        }

        function v(a, b) {
            b = 0 === b ? 0 : b || 10;
            var c = i(a).toRgb();
            return c.r = g(0, f(255, c.r - e(255 * -(b / 100)))), c.g = g(0, f(255, c.g - e(255 * -(b / 100)))), c.b = g(0, f(255, c.b - e(255 * -(b / 100)))), i(c)
        }

        function w(a, b) {
            b = 0 === b ? 0 : b || 10;
            var c = i(a).toHsl();
            return c.l -= b / 100, c.l = J(c.l), i(c)
        }

        function x(a, b) {
            var c = i(a).toHsl(), d = (e(c.h) + b) % 360;
            return c.h = 0 > d ? 360 + d : d, i(c)
        }

        function y(a) {
            var b = i(a).toHsl();
            return b.h = (b.h + 180) % 360, i(b)
        }

        function z(a) {
            var b = i(a).toHsl(), c = b.h;
            return [i(a), i({h: (c + 120) % 360, s: b.s, l: b.l}), i({h: (c + 240) % 360, s: b.s, l: b.l})]
        }

        function A(a) {
            var b = i(a).toHsl(), c = b.h;
            return [i(a), i({h: (c + 90) % 360, s: b.s, l: b.l}), i({
                h: (c + 180) % 360,
                s: b.s,
                l: b.l
            }), i({h: (c + 270) % 360, s: b.s, l: b.l})]
        }

        function B(a) {
            var b = i(a).toHsl(), c = b.h;
            return [i(a), i({h: (c + 72) % 360, s: b.s, l: b.l}), i({h: (c + 216) % 360, s: b.s, l: b.l})]
        }

        function C(a, b, c) {
            b = b || 6, c = c || 30;
            var d = i(a).toHsl(), e = 360 / c, f = [i(a)];
            for (d.h = (d.h - (e * b >> 1) + 720) % 360; --b;)d.h = (d.h + e) % 360, f.push(i(d));
            return f
        }

        function D(a, b) {
            b = b || 6;
            for (var c = i(a).toHsv(), d = c.h, e = c.s, f = c.v, g = [], h = 1 / b; b--;)g.push(i({
                h: d,
                s: e,
                v: f
            })), f = (f + h) % 1;
            return g
        }

        function G(a) {
            var b = {};
            for (var c in a)a.hasOwnProperty(c) && (b[a[c]] = c);
            return b
        }

        function H(a) {
            return a = parseFloat(a), (isNaN(a) || 0 > a || a > 1) && (a = 1), a
        }

        function I(a, b) {
            L(a) && (a = "100%");
            var c = M(a);
            return a = f(b, g(0, parseFloat(a))), c && (a = parseInt(a * b, 10) / 100), d.abs(a - b) < 1e-6 ? 1 : a % b / parseFloat(b)
        }

        function J(a) {
            return f(1, g(0, a))
        }

        function K(a) {
            return parseInt(a, 16)
        }

        function L(a) {
            return "string" == typeof a && -1 != a.indexOf(".") && 1 === parseFloat(a)
        }

        function M(a) {
            return "string" == typeof a && -1 != a.indexOf("%")
        }

        function N(a) {
            return 1 == a.length ? "0" + a : "" + a
        }

        function O(a) {
            return 1 >= a && (a = 100 * a + "%"), a
        }

        function P(a) {
            return Math.round(255 * parseFloat(a)).toString(16)
        }

        function Q(a) {
            return K(a) / 255
        }

        function S(c) {
            c = c.replace(a, "").replace(b, "").toLowerCase();
            var d = !1;
            if (E[c])c = E[c], d = !0; else if ("transparent" == c)return {r: 0, g: 0, b: 0, a: 0, format: "name"};
            var e;
            return (e = R.rgb.exec(c)) ? {r: e[1], g: e[2], b: e[3]} : (e = R.rgba.exec(c)) ? {
                r: e[1],
                g: e[2],
                b: e[3],
                a: e[4]
            } : (e = R.hsl.exec(c)) ? {h: e[1], s: e[2], l: e[3]} : (e = R.hsla.exec(c)) ? {
                h: e[1],
                s: e[2],
                l: e[3],
                a: e[4]
            } : (e = R.hsv.exec(c)) ? {h: e[1], s: e[2], v: e[3]} : (e = R.hsva.exec(c)) ? {
                h: e[1],
                s: e[2],
                v: e[3],
                a: e[4]
            } : (e = R.hex8.exec(c)) ? {
                a: Q(e[1]),
                r: K(e[2]),
                g: K(e[3]),
                b: K(e[4]),
                format: d ? "name" : "hex8"
            } : (e = R.hex6.exec(c)) ? {
                r: K(e[1]),
                g: K(e[2]),
                b: K(e[3]),
                format: d ? "name" : "hex"
            } : (e = R.hex3.exec(c)) ? {
                r: K(e[1] + "" + e[1]),
                g: K(e[2] + "" + e[2]),
                b: K(e[3] + "" + e[3]),
                format: d ? "name" : "hex"
            } : !1
        }

        var a = /^[\s,#]+/, b = /\s+$/, c = 0, d = Math, e = d.round, f = d.min, g = d.max, h = d.random, i = function (a, b) {
            if (a = a ? a : "", b = b || {}, a instanceof i)return a;
            if (!(this instanceof i))return new i(a, b);
            var d = j(a);
            this._originalInput = a, this._r = d.r, this._g = d.g, this._b = d.b, this._a = d.a, this._roundA = e(100 * this._a) / 100, this._format = b.format || d.format, this._gradientType = b.gradientType, this._r < 1 && (this._r = e(this._r)), this._g < 1 && (this._g = e(this._g)), this._b < 1 && (this._b = e(this._b)), this._ok = d.ok, this._tc_id = c++
        };
        i.prototype = {
            isDark: function () {
                return this.getBrightness() < 128
            }, isLight: function () {
                return !this.isDark()
            }, isValid: function () {
                return this._ok
            }, getOriginalInput: function () {
                return this._originalInput
            }, getFormat: function () {
                return this._format
            }, getAlpha: function () {
                return this._a
            }, getBrightness: function () {
                var a = this.toRgb();
                return (299 * a.r + 587 * a.g + 114 * a.b) / 1e3
            }, setAlpha: function (a) {
                return this._a = H(a), this._roundA = e(100 * this._a) / 100, this
            }, toHsv: function () {
                var a = n(this._r, this._g, this._b);
                return {h: 360 * a.h, s: a.s, v: a.v, a: this._a}
            }, toHsvString: function () {
                var a = n(this._r, this._g, this._b), b = e(360 * a.h), c = e(100 * a.s), d = e(100 * a.v);
                return 1 == this._a ? "hsv(" + b + ", " + c + "%, " + d + "%)" : "hsva(" + b + ", " + c + "%, " + d + "%, " + this._roundA + ")"
            }, toHsl: function () {
                var a = l(this._r, this._g, this._b);
                return {h: 360 * a.h, s: a.s, l: a.l, a: this._a}
            }, toHslString: function () {
                var a = l(this._r, this._g, this._b), b = e(360 * a.h), c = e(100 * a.s), d = e(100 * a.l);
                return 1 == this._a ? "hsl(" + b + ", " + c + "%, " + d + "%)" : "hsla(" + b + ", " + c + "%, " + d + "%, " + this._roundA + ")"
            }, toHex: function (a) {
                return p(this._r, this._g, this._b, a)
            }, toHexString: function (a) {
                return "#" + this.toHex(a)
            }, toHex8: function () {
                return q(this._r, this._g, this._b, this._a)
            }, toHex8String: function () {
                return "#" + this.toHex8()
            }, toRgb: function () {
                return {r: e(this._r), g: e(this._g), b: e(this._b), a: this._a}
            }, toRgbString: function () {
                return 1 == this._a ? "rgb(" + e(this._r) + ", " + e(this._g) + ", " + e(this._b) + ")" : "rgba(" + e(this._r) + ", " + e(this._g) + ", " + e(this._b) + ", " + this._roundA + ")"
            }, toPercentageRgb: function () {
                return {
                    r: e(100 * I(this._r, 255)) + "%",
                    g: e(100 * I(this._g, 255)) + "%",
                    b: e(100 * I(this._b, 255)) + "%",
                    a: this._a
                }
            }, toPercentageRgbString: function () {
                return 1 == this._a ? "rgb(" + e(100 * I(this._r, 255)) + "%, " + e(100 * I(this._g, 255)) + "%, " + e(100 * I(this._b, 255)) + "%)" : "rgba(" + e(100 * I(this._r, 255)) + "%, " + e(100 * I(this._g, 255)) + "%, " + e(100 * I(this._b, 255)) + "%, " + this._roundA + ")"
            }, toName: function () {
                return 0 === this._a ? "transparent" : this._a < 1 ? !1 : F[p(this._r, this._g, this._b, !0)] || !1
            }, toFilter: function (a) {
                var b = "#" + q(this._r, this._g, this._b, this._a), c = b, d = this._gradientType ? "GradientType = 1, " : "";
                if (a) {
                    var e = i(a);
                    c = e.toHex8String()
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + d + "startColorstr=" + b + ",endColorstr=" + c + ")"
            }, toString: function (a) {
                var b = !!a;
                a = a || this._format;
                var c = !1, d = this._a < 1 && this._a >= 0, e = !b && d && ("hex" === a || "hex6" === a || "hex3" === a || "name" === a);
                return e ? "name" === a && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === a && (c = this.toRgbString()), "prgb" === a && (c = this.toPercentageRgbString()), ("hex" === a || "hex6" === a) && (c = this.toHexString()), "hex3" === a && (c = this.toHexString(!0)), "hex8" === a && (c = this.toHex8String()), "name" === a && (c = this.toName()), "hsl" === a && (c = this.toHslString()), "hsv" === a && (c = this.toHsvString()), c || this.toHexString())
            }, _applyModification: function (a, b) {
                var c = a.apply(null, [this].concat([].slice.call(b)));
                return this._r = c._r, this._g = c._g, this._b = c._b, this.setAlpha(c._a), this
            }, lighten: function () {
                return this._applyModification(u, arguments)
            }, brighten: function () {
                return this._applyModification(v, arguments)
            }, darken: function () {
                return this._applyModification(w, arguments)
            }, desaturate: function () {
                return this._applyModification(r, arguments)
            }, saturate: function () {
                return this._applyModification(s, arguments)
            }, greyscale: function () {
                return this._applyModification(t, arguments)
            }, spin: function () {
                return this._applyModification(x, arguments)
            }, _applyCombination: function (a, b) {
                return a.apply(null, [this].concat([].slice.call(b)))
            }, analogous: function () {
                return this._applyCombination(C, arguments)
            }, complement: function () {
                return this._applyCombination(y, arguments)
            }, monochromatic: function () {
                return this._applyCombination(D, arguments)
            }, splitcomplement: function () {
                return this._applyCombination(B, arguments)
            }, triad: function () {
                return this._applyCombination(z, arguments)
            }, tetrad: function () {
                return this._applyCombination(A, arguments)
            }
        }, i.fromRatio = function (a, b) {
            if ("object" == typeof a) {
                var c = {};
                for (var d in a)a.hasOwnProperty(d) && (c[d] = "a" === d ? a[d] : O(a[d]));
                a = c
            }
            return i(a, b)
        }, i.equals = function (a, b) {
            return a && b ? i(a).toRgbString() == i(b).toRgbString() : !1
        }, i.random = function () {
            return i.fromRatio({r: h(), g: h(), b: h()})
        }, i.mix = function (a, b, c) {
            c = 0 === c ? 0 : c || 50;
            var j, d = i(a).toRgb(), e = i(b).toRgb(), f = c / 100, g = 2 * f - 1, h = e.a - d.a;
            j = -1 == g * h ? g : (g + h) / (1 + g * h), j = (j + 1) / 2;
            var k = 1 - j, l = {
                r: e.r * j + d.r * k,
                g: e.g * j + d.g * k,
                b: e.b * j + d.b * k,
                a: e.a * f + d.a * (1 - f)
            };
            return i(l)
        }, i.readability = function (a, b) {
            var c = i(a), d = i(b), e = c.toRgb(), f = d.toRgb(), g = c.getBrightness(), h = d.getBrightness(), j = Math.max(e.r, f.r) - Math.min(e.r, f.r) + Math.max(e.g, f.g) - Math.min(e.g, f.g) + Math.max(e.b, f.b) - Math.min(e.b, f.b);
            return {brightness: Math.abs(g - h), color: j}
        }, i.isReadable = function (a, b) {
            var c = i.readability(a, b);
            return c.brightness > 125 && c.color > 500
        }, i.mostReadable = function (a, b) {
            for (var c = null, d = 0, e = !1, f = 0; f < b.length; f++) {
                var g = i.readability(a, b[f]), h = g.brightness > 125 && g.color > 500, j = 3 * (g.brightness / 125) + g.color / 500;
                (h && !e || h && e && j > d || !h && !e && j > d) && (e = h, d = j, c = i(b[f]))
            }
            return c
        };
        var E = i.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        }, F = i.hexNames = G(E), R = function () {
            var a = "[-\\+]?\\d+%?", b = "[-\\+]?\\d*\\.\\d+%?", c = "(?:" + b + ")|(?:" + a + ")", d = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?", e = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?";
            return {
                rgb: new RegExp("rgb" + d),
                rgba: new RegExp("rgba" + e),
                hsl: new RegExp("hsl" + d),
                hsla: new RegExp("hsla" + e),
                hsv: new RegExp("hsv" + d),
                hsva: new RegExp("hsva" + e),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            }
        }();
        window.tinycolor = i
    }(), a(function () {
        a.fn.spectrum.load && a.fn.spectrum.processNativeColorInputs()
    })
});