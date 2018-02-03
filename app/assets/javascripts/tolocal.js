function doPostLoad() {
    var query = document.location.search;
    if (query) {
        onload = setTimeout(function () {
            document.location = 'https://localhost:4443/index.html' + query;
        }, 5000);
    }
}
