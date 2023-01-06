
const express = require("express");
const app = express();

app.get("/", rootAnswer);
app.listen(3000, function(){console.log("Listening on port 3000 ...");});

app.get("/about", aboutAnswer);

function rootAnswer(req, res){
    res.sendFile(__dirname + "/index.html");
}

function aboutAnswer(req, res){
    res.send("this is my short bio");
}
