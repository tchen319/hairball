function doPostLoad() {
    var query = document.location.search;
    if (query) {
        onload = setTimeout(function () {
            document.location = 'http://localhost:4080/g/shopify/ews' + query;
        }, 5000);
    }
}
