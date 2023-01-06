
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){res.sendFile(__dirname + "/index.html");});
app.get("/about", function(req1, res1){res1.send("this is my short bio");});

app.post("/", rootPost);

function rootPost(req, res){
    var nr1 = Number(req.body.nr1);
    var nr2 = Number(req.body.nr2);
    var r = nr1 + nr2;
    // próba wysłania przez res.send liczby generuje błąd serwera, odbiera ją jako kod błędu
    res.send("result is " + r);
}

app.listen(3000, function(){console.log("Listening on port 3000 ...");});

