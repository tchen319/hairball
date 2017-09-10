var query = document.location.search;
if (query) {
    onload = setTimeout(function () {
        document.location = 'http://localhost:4080/oauth/approval' + query;
    }, 5000);
}