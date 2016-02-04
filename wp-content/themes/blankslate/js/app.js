var bp = {
    xsmall: 279,
    small: 599,
    medium: 770,
    large: 979,
    xlarge: 1199
};

Varien.searchForm.prototype.initialize = function(e, t, i) {
    this.form = $(e), this.field = $(t), this.emptyText = i, this.validator = new Validation(this.form), Event.observe(this.form, "submit", this.submit.bind(this)), Event.observe(this.field, "focus", this.focus.bind(this)), Event.observe(this.field, "blur", this.blur.bind(this)), this.blur()
}, Varien.searchForm.prototype.submit = function(e) {
    return this.validator && this.validator.validate() ? !0 : (Event.stop(e), !1)
};
var $j = jQuery.noConflict();
$j(document).ready(function() {
    function e() {
        var e = $j(window).width();
        $j("ul.level0").each(function() {
            var t = $j(this);
            t.addClass("position-test"), t.removeClass("spill");
            var i = t.outerWidth(),
                a = t.offset().left;
            t.removeClass("position-test"), a + i > e && t.addClass("spill")
        })
    }
    
    var t = ($j(window), $j(document), $j("body"), $j(".skip-content")),
        i = $j(".skip-link");
    i.on("click", function(e) {
        e.preventDefault();
        var a = $j(this),
            n = a.attr("href"),
            o = $j(n),
            r = o.hasClass("skip-active") ? 1 : 0;
        i.removeClass("skip-active"), t.removeClass("skip-active"), r ? a.removeClass("skip-active") : (a.addClass("skip-active"), o.addClass("skip-active"))
    }), $j("#header-cart").on("click", ".skip-link-close", function(e) {
        var t = $j(this).parents(".skip-content"),
            i = t.siblings(".skip-link");
        t.removeClass("skip-active"), i.removeClass("skip-active"), e.preventDefault()
    });
    var a = $j("#nav"),
        n = {
            TOUCH_SCROLL_THRESHOLD: 20,
            touchStartPosition: null,
            shouldCancelTouch: function() {
                if (!this.touchStartPosition) return !1;
                var e = $j(window).scrollTop() - this.touchStartPosition;
                return Math.abs(e) > this.TOUCH_SCROLL_THRESHOLD
            }
        },
        o = "touchend";
    window.navigator.pointerEnabled ? o = "pointerdown" : window.navigator.msPointerEnabled && (o = "MSPointerDown"), a.find("a.has-children.level0").on(o, function(e) {
        if (!n.shouldCancelTouch()) {
            if (window.navigator.msPointerEnabled && "mouse" == e.originalEvent.pointerType && Modernizr.mq("screen and (min-width:" + (bp.medium + 1) + "px)")) return void $j(this).data("has-touch", !1);
            $j(this).data("has-touch", !0);
            var t = $j(this).parent(),
                i = t.hasClass("menu-active");
            a.find("li.level0").removeClass("menu-active"), a.find(".sub-menu-active").removeClass("sub-menu-active"), i || t.addClass("menu-active"), e.preventDefault()
        }
    }).on("click", function(e) {
        var t = $j(this);
        if (t.data("has-touch")) return t.data("has-touch", !1), void e.preventDefault();
        if (Modernizr.mq("screen and (max-width:" + bp.medium + "px)")) {
            var t = $j(this).parent(),
                i = t.hasClass("menu-active");
            a.find("li.level0").removeClass("menu-active"), a.find(".sub-menu-active").removeClass("sub-menu-active"), i || t.addClass("menu-active"), e.preventDefault()
        }
    }).on("touchstart", function(e) {
        $j(this).data("has-touch"), n.touchStartPosition = $j(window).scrollTop()
    }), a.find("li.level1 a.has-children").on("click", function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = $j(this).parent(),
            i = t.hasClass("sub-menu-active") ? 1 : 0;
            
        Modernizr.mq("screen and (min-width:" + (bp.medium + 1) + "px)") && t.siblings(".sub-menu-active").removeClass("sub-menu-active").find(".sub-menu-active").removeClass("sub-menu-active"), i ? t.removeClass("sub-menu-active") : t.addClass("sub-menu-active")
    }), e(), $j(window).on("delayed-resize", e), enquire.register("(max-width: " + bp.medium + "px)", {
        match: function() {
            $j(".page-header-container .store-language-container").prepend($j(".form-language"))
        },
        unmatch: function() {
            $j(".header-language-container .store-language-container").prepend($j(".form-language"))
        }
    }), enquire.register("screen and (min-width: " + (bp.medium + 1) + "px)", {
        match: function() {
            $j(".menu-active").removeClass("menu-active"), $j(".sub-menu-active").removeClass("sub-menu-active"), $j(".skip-active").removeClass("skip-active")
        },
        unmatch: function() {
            $j(".menu-active").removeClass("menu-active"), $j(".sub-menu-active").removeClass("sub-menu-active"), $j(".skip-active").removeClass("skip-active")
        }
    });
    var r = $j(".media-list").find("a"),
        s = $j(".primary-image").find("img");
    if (r.length && r.on("click", function(e) {
            e.preventDefault();
            var t = $j(this);
            s.attr("src", t.attr("href"))
        }), jQuery.fn.toggleSingle = function(e) {
            var t = $j.extend({
                destruct: !1
            }, e);
            return this.each(function() {
                t.destruct ? ($j(this).off("click"), $j(this).removeClass("active").next().removeClass("no-display")) : ($j(this).on("click", function() {
                    $j(this).toggleClass("active").next().toggleClass("no-display")
                }), $j(this).next().addClass("no-display"))
            })
        }, $j(".toggle-content").each(function() {
            function e(e, t) {
                var i, a = t.index(e);
                console.log(s.length);
                for (i = 0; i < s.length; i++) s[i].removeClass("current"), s[i].eq(a).addClass("current")
            }
            var t = jQuery(this),
                i = t.hasClass("tabs"),
                a = (t.hasClass("accordion"), t.hasClass("open")),
                n = t.children("dl:first"),
                o = n.children("dt"),
                r = n.children("dd"),
                s = new Array(o, r);
            if (i) {
                var c = jQuery('<ul class="toggle-tabs"></ul>');
                o.each(function() {
                    var e = jQuery(this),
                        t = jQuery("<li></li>");
                    t.html(e.html()), c.append(t)
                }), c.insertBefore(n);
                var l = c.children();
                s.push(l)
            }
            var d;
            for (d = 0; d < s.length; d++) s[d].filter(":last").addClass("last");
            o.on("click", function(i) {
                jQuery(this).hasClass("current") && t.hasClass("accordion-open") ? t.removeClass("accordion-open") : t.addClass("accordion-open"), e(jQuery(this), o)
            }), i && (l.on("click", function(t) {
                e(jQuery(this), l)
            }), l.eq(0).trigger("click")), a && o.eq(0).trigger("click")
        }), $j(".col-left-first > .block").length && $j(".category-products").length && enquire.register("screen and (max-width: " + bp.medium + "px)", {
            match: function() {
                $j(".col-left-first").insertBefore($j(".category-products"))
            },
            unmatch: function() {
                $j(".col-left-first").insertBefore($j(".col-main"))
            }
        }), $j(".main-container.col3-layout").length > 0 && enquire.register("screen and (max-width: 1000px)", {
            match: function() {
                var e = $j(".col-right"),
                    t = $j(".col-wrapper");
                e.appendTo(t)
            },
            unmatch: function() {
                var e = $j(".col-right"),
                    t = $j(".main");
                e.appendTo(t)
            }
        }), enquire.register("(max-width: " + bp.medium + "px)", {
            setup: function() {
                this.toggleElements = $j(".col-left-first .block:not(.block-layered-nav) .block-title, .col-left-first .block-layered-nav .block-subtitle--filter, .sidebar:not(.col-left-first) .block .block-title")
            },
            match: function() {
                this.toggleElements.toggleSingle()
            },
            unmatch: function() {
                this.toggleElements.toggleSingle({
                    destruct: !0
                })
            }
        }), $j("body.checkout-onepage-index").length && enquire.register("(max-width: " + bp.large + "px)", {
            match: function() {
                $j("#checkout-step-review").prepend($j("#checkout-progress-wrapper"))
            },
            unmatch: function() {
                $j(".col-right").prepend($j("#checkout-progress-wrapper"))
            }
        }), $j("body.checkout-cart-index").length && $j('input[name^="cart"]').focus(function() {
            $j(this).siblings("button").fadeIn()
        }), $j(".products-grid").length) {
        var c = function() {
            var e = [],
                t = [];
            productGridElements = $j(".products-grid > li"), productGridElements.each(function(i) {
                "none" != $j(this).css("clear") && 0 != i && (e.push(t), t = []), t.push(this), productGridElements.length == i + 1 && e.push(t)
            }), $j.each(e, function() {
                var e = 0;
                $j.each(this, function() {
                    $j(this).find(".product-info").css("min-height", ""), elHeight = parseInt($j(this).find(".product-info").css("height")), elHeight > e && (e = elHeight)
                }), $j.each(this, function() {
                    $j(this).find(".product-info").css("minHeight", e)
                })
            })
        };
        c(), $j(window).on("delayed-resize", function(e, t) {
            c()
        })
    }
    var l;
    $j(window).resize(function(e) {
        clearTimeout(l), l = setTimeout(function() {
            $j(window).trigger("delayed-resize", e)
        }, 250)
    })
});
var ProductMediaManager = {
    IMAGE_ZOOM_THRESHOLD: 20,
    zoomEnabled: Modernizr.mq("screen and (min-width:768px)"),
    imageWrapper: null,
    destroyZoom: function() {
        $j(".zoomContainer").remove(), $j(".product-image-gallery .gallery-image").removeData("elevateZoom")
    },
    createZoom: function(e) {
        if (ProductMediaManager.destroyZoom(), ProductMediaManager.zoomEnabled && !(e.length <= 0)) {
            if (e[0].naturalWidth && e[0].naturalHeight) {
                var t = e[0].naturalWidth - e.width() - ProductMediaManager.IMAGE_ZOOM_THRESHOLD,
                    i = e[0].naturalHeight - e.height() - ProductMediaManager.IMAGE_ZOOM_THRESHOLD;
                if (0 > t && 0 > i) return void e.parents(".product-image").removeClass("zoom-available");
                e.parents(".product-image").addClass("zoom-available")
            }
            e.elevateZoom()
        }
    },
    swapImage: function(e) {
        e = $j(e), e.addClass("gallery-image"), ProductMediaManager.destroyZoom();
        var t = $j(".product-image-gallery");
        e[0].complete ? (t.find(".gallery-image").removeClass("visible"), t.append(e), e.addClass("visible"), ProductMediaManager.createZoom(e)) : (t.addClass("loading"), t.append(e), imagesLoaded(e, function() {
            t.removeClass("loading"), t.find(".gallery-image").removeClass("visible"), e.addClass("visible"), ProductMediaManager.createZoom(e)
        }))
    },
    wireThumbnails: function() {
        $j(".product-image-thumbs .thumb-link").click(function(e) {
            e.preventDefault();
            var t = $j(this),
                i = $j("#image-" + t.data("image-index"));
            ProductMediaManager.swapImage(i)
        })
    },
    initZoom: function() {
        ProductMediaManager.createZoom($j(".no-touch .gallery-image.visible"))
    },
    init: function() {
        ProductMediaManager.imageWrapper = $j(".product-img-box"), enquire.register("screen and (min-width:768px)", {
            match: function() {
                ProductMediaManager.zoomEnabled = !0, ProductMediaManager.initZoom()
            },
            unmatch: function() {
                ProductMediaManager.destroyZoom(), ProductMediaManager.zoomEnabled = !1
            }
        }), $j(window).on("delayed-resize", function(e, t) {
            ProductMediaManager.destroyZoom(), ProductMediaManager.initZoom()
        }), ProductMediaManager.wireThumbnails(), $j(document).trigger("product-media-loaded", ProductMediaManager)
    }
};
$j(document).ready(function() {
    ProductMediaManager.init()
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


