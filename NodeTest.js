/**
 * Created by HanSangyun on 2014-07-21.
 */


var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());
app.get("/", function(request, response) {
	response.send("Hello World this is heroku node js");
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("listening on : " + port);
});



//var http = require("http");
//http.createServer(function(req, res) {
//    if(req.url == "/") {
//        res.writeHead(200, {
//            "Content-Type" : "text/html"
//        });
//        res.end("Welcome to the Chris's world");
//    } else if(req.url == "/about") {
//        res.writeHead(200, {
//            "Content-Type" : "text/html"
//        });
//        res.end("Welcome to the about page");
//    } else {
//        res.writeHead(200, {
//            "Content-Type" : "text/plain"
//        });
//        res.end("404 Error!!!!!!!!!");
//    }
//
//
//}).listen(1337, "127.0.0.1");
//
//
//console.log("server running at http://127.0.0.1:1337");