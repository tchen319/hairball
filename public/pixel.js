(function (b) {
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
    }, c = b.createElement("iframe");
    c.style.cssText = "height:0;width:0;frameborder:no;scrolling:no;sandbox:allow-scripts;display:none;";
    c.src = "https://s.yimg.com/rq/sbox/bv2.html";
    b.body.appendChild(c);
    a("https://pr-bh.ybp.yahoo.com/fac-sync?cb=" + Math.random())
})(document);
