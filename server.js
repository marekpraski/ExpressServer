
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {https.get("https://v2.jokeapi.dev/joke/Programming", function(result){
    console.log("\n new joke");
    result.on("data", (chunk) =>{
        const randomJoke = JSON.parse(chunk.toString());
        console.log(randomJoke);

        if(randomJoke.type == "single")
        {
            // If type == "single", the joke only has the "joke" property
            res.send(randomJoke.joke + "   ha ha hi");
        }
        else{
            res.send(randomJoke.setup + "  " + randomJoke.delivery);
        }

});

});

});

app.listen(3000, function(){console.log("Listening on port 3000 ...");});

