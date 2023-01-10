
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
var j;
app.get("/", async (req, res) => {
    console.log("1");
    getAJoke();
    console.log("5");
    res.send( j + "   ha ha ha");});

//nieudana próba przypisania wartości do globalnej zmiennej j

async function getAJoke(){
    console.log("2");
    https.get("https://v2.jokeapi.dev/joke/Programming", joking);
}

function joking(res){
    console.log("3");
    console.log("\n");
    res.on("data", getData);

    res.on("error", err => {
        // On error, log to console
        console.error(`Error: ${err}`);
    });
}

function getData(chunk){
    // On data received, convert it to a JSON object
    let randomJoke = JSON.parse(chunk.toString());
    j = randomJoke;
    console.log(randomJoke);
    // if(randomJoke.type == "single")
    // {
    //     // If type == "single", the joke only has the "joke" property
    //     console.log(randomJoke.joke);
    //     console.log("\n");
    // }
    // else
    // {
    //     // If type == "twopart", the joke has the "setup" and "delivery" properties
    //     console.log(randomJoke.setup);
    //     setTimeout(() => {
    //         console.log(randomJoke.delivery);
    //         console.log("\n");
    //     }, 3000);
    // }
}

app.listen(3000, function(){console.log("Listening on port 3000 ...");});

