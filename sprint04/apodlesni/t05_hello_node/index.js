const http = require("http");
http.createServer(function (request, response) {

    response.end("Hello Node!");

}).listen(3000, "127.0.0.1", function () {
    console.log("Server running at http://127.0.0.1:3000/");
});