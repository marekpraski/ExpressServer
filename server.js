
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res)=>{
    let jokeBaseUrl = "https://v2.jokeapi.dev/joke/Any?idRange=";
    let jokeId = req.body.jokeNr;
    let jokeUrl = jokeBaseUrl + jokeId + "-" + jokeId;

   https.get(jokeUrl, function(result){
    console.log("\n new joke");
    result.on("data", (chunk) =>{
        const randomJoke = JSON.parse(chunk.toString());
        console.log(randomJoke);

        if(randomJoke.type == "single")
        {
            // If type == "single", the joke only has the "joke" property
            //żaden inny nagłówek nie działa, hehehe
            res.write("<h1>this is a single joke </h1>");
            res.write(randomJoke.joke + " <br>  ha ha hi");
            res.send();         //send można użyć TYLKO RAZ !!!
        }
        else{
            res.write("<h1>This is a two-part joke</h1>");
            res.write(randomJoke.setup + "<br>");
            res.write(randomJoke.delivery);
            res.send();
        }

});

});

});



app.listen(3000, function(){console.log("Listening on port 3000 ...");});

