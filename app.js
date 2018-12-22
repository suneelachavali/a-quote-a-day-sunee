var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.out('Hello Heroku!!');
    /* response.sendFile('https://github.com/suneelachavali/a-quote-a-day-sunee/blob/master/index.html'); */
});

var port = 8080;

var server = app.listen(port, function(req,res){
    console.log("Catch the action at http://localhost:"+port);
})
