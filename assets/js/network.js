
var http=require('http');

var fs=require('fs');

http.createServer(function (require,reponse) {
    reponse.writeHead('200',{'Content-type':'text/html'});
    var url=require.url;
    
    if (url=='/'){
        //truy cap trang chu
        fs.readFile('../../src/views/login.html',function (errol,data) {
           if (!errol){
               reponse.write(data);
               reponse.end();
           }
           else {
               reponse.end("404 not found");
               console.log(url)
           }
        })
    }
    else if (url=='/insert'){

        ///truy cap trang login
    }
    else if (url=='/show'){

        ///truy cap trang login
    }
    else if (url=='/delete'){

        ///truy cap trang login
    }

}).listen(8033);