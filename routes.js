var express = require("express");

var router = express.Router();
var request = require("request");
var pokemons;

//Api get
request(
  "https://pokeapi.co/api/v2/pokemon?limit=10&offset=90",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    pokemons = body.results;
  }
);

router.get("/", function (req, res) {
  console.log("main page");
  res.render("index",{
    pokemons: (JSON.stringify(pokemons)),
  });
});

module.exports = router;
