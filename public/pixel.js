<script type="application/javascript">(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'projectId':'10000','properties':{'pixelId':'10039241'}});var s=d.createElement(t);s.src=r;s.async=true;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}try{y=YAHOO.ywa.I13N.fireBeacon;w[u]=[];w[u].push=function(p){y([p])};y(c)}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");</script>

(function (b) {
    var _m = window.meta;
    if (window.ShopifyAnalytics && window.ShopifyAnalytics.meta) {
        _m = window.ShopifyAnalytics.meta;
    }
    if (_m && _m.product) {
        -- alert(_m.product.id);

        window.dotq = window.dotq || [];
        if (window.dotq.push) {
            var _evt = {
                'projectId': '10000',
                'properties': {
                    'pixelId': '10039241',
                    'qstrings': {
                        'et': 'custom',
                        'ea': 'ViewProduct',
                        'product_id': _m.product.id
                    }
                }
            }
            window.dotq.push(_evt);
        }
    }
})(document);
