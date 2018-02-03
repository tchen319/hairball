function doPostLoad() {
    var query = document.location.search;
    if (query) {
        if (query.startsWith('?')) {
            query = query.substring(1);
        }
        onload = setTimeout(function () {
            document.location = 'https://localhost:4443/index.html?route=f/shopify/ews&' + query;
        }, 5000);
    }
}
