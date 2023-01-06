
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){res.sendFile(__dirname + "/index.html");});
app.get("/bmiC", function(req, res){res.sendFile(__dirname + "/bmiCalculator.html")});

app.post("/", rootPost);
app.post("/bmiC", bmiPost);

function rootPost(req, res){
    var nr1 = Number(req.body.nr1);
    var nr2 = Number(req.body.nr2);
    var r = nr1 + nr2;
    // próba wysłania przez res.send liczby generuje błąd serwera, odbiera ją jako kod błędu
    res.send("result is " + r);
}

function bmiPost(req, res){
    let w = parseFloat(req.body.weight);
    let h = parseFloat(req.body.heigth);
    let bmi = Math.round(1000 * w / h) / 1000;
    res.send("bmi is " + bmi);
}

app.listen(3000, function(){console.log("Listening on port 3000 ...");});

