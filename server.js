
const express = require("express");
const app = express();

app.get("/", rootAnswer);
app.listen(3000, messageWhenListening);

app.get("/about", aboutAnswer);

function messageWhenListening(){
    console.log("Listening on port 3000 ...");
}

function rootAnswer(req, res){
    res.send("hi there, it is me");
}

function aboutAnswer(req, res){
    res.send("this is my short bio");
}
