
var http = require('http');

const fs = require('fs');


http.createServer(function (require, reponse) {
    reponse.writeHead('200', { 'Content-type': 'text/html' });
    var url = require.url;

    if (url == '/') {
        //truy cap trang chu
        fs.readFile('../../src/views/login.html','utf-8', function (errol, data) {
            if (!errol) {
                reponse.write(data);
                console.log(data)
                reponse.end();
            }
            else {
                console.log(url)
                reponse.end("404 not found");

            }
        })
    }
    else if (url == '/insert') {

        ///truy cap trang login
    }
    else if (url == '/show') {

        ///truy cap trang login
    }
    else if (url == '/delete') {

        ///truy cap trang login
    }

}).listen(process.env.PORT || '3000');
