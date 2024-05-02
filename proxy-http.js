var express = require("express");
var app = express();
var httpProxy = require('http-proxy');

var ApiProxy = httpProxy.createProxyServer();

// Handle errors from the proxy
ApiProxy.on('error', function(err, req, res) {
    console.error("Error occurred while proxying:", err);
    res.status(500).send("Internal Server Error");
});

// Proxy server routing to the target Server 2
app.all('/*', function(req, res) {
    console.log("Hey Ninja! Redirecting to Server2");
    const url = req.url;
    ApiProxy.web(req, res, { target: url });
});

app.listen(80, function() {
    console.log("Server running at port 80");
});
