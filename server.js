var express = require('express')
    , http = require('http')
    , path = require('path')


var app = express();

app.set('title','');

app.use(express.static(path.join(__dirname, 'app')));

/* serves main page */
app.get("/", function(req, res) {
    res.sendfile('app/index.html');
});

app.use("/", express.static(__dirname + 'app/index.html'));



var port = process.env.PORT || 5002;

http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
});