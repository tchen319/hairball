(function (b) {
    var _m = window.meta;

    if (window.ShopifyAnalytics && window.ShopifyAnalytics.meta) {
        _m = window.ShopifyAnalytics.meta;
    }
    if (_m && _m.product) {
        alert(_m.product);
    }

    var a = function (f) {
        var d, g;
        try {
            d = new Image();
            d.onerror = d.onload = function () {
                d.onerror = d.onload = null;
                d = null
            };
            d.src = f
        } catch (g) {
        }
    };
    a("https://pr-bh.ybp.yahoo.com/fac-sync?cb=" + Math.random())
})(document);
