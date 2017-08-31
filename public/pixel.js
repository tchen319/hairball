(function (b) {
    var _m = window.meta;
    if (window.ShopifyAnalytics && window.ShopifyAnalytics.meta) {
        _m = window.ShopifyAnalytics.meta;
    }
    if (_m && _m.product) {
        alert(_m.product);
    }
})(document);
