const express = require("express");
const app = express();

app.get("/", function(req, res) {
    //create the response objects and send it
    res.send("Avengers assemble!");
});

app.get("/api/heroes", (rest, res) => {
    var heroes = ['Ranjan', 'Aravinda', 'Nisal', 'kemila'];
    res.send(heroes);

});

const PORT = 4000;

app.listen(PORT, () => {
    // console.log("Listening on port " + PORT);
    console.log(`Listening on port ${PORT}`);
});