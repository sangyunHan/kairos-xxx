/**
 * Created by HanSangyun on 2014-07-21.
 */
console.log("__filename : " , __filename);

process.on("exit", function(e) {
   console.log("EXIT");
});

var errHandler1 = function(e) {
    console.log("err1", e);
}

var errHandler2 = function(e) {
    console.log("err2", e);
}


//process.on("uncaughtException", errHandler1);
//process.on("uncaughtException", errHandler2);
//
//process.removeListener("uncaughtException", errHandler2);
//
//error


process.on("sangyun", function() {
   console.log("sangyun event");
});

process.emit("sangyun");

var os = require("os");
//console.log(os.platform());
//console.log(os.arch());
//console.log(os.cpus());

var http = require("http");
http.createServer(function(req, res) {
    if(req.url == "/") {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        res.end("Welcome to the Chris's world");
    } else if(req.url == "/about") {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        res.end("Welcome to the about page");
    } else {
        res.writeHead(200, {
            "Content-Type" : "text/plain"
        });
        res.end("404 Error!!!!!!!!!");
    }


}).listen(1337, "127.0.0.1");


console.log("server running at http://127.0.0.1:1337");
console.log("git test");