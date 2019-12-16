const express = require("express");
let app = express();
let configRoutes = require("./routes");
const bodyParser = require("body-parser");const request = require('request');
const scribble = require('scribbletune');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/express', (req, res) => {
  res.send({ express: 'Express backend is now connected to React app' });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/download_midi', (req, res) => {
    let allINeed = req.body.content;
    let name = req.body.file_name;
    console.log(allINeed);

    request(
        { url: 'http://localhost:5000/download_midi' },
        (error, response, body) => {
          scribble.midi(allINeed, name);
        }
      )
});

configRoutes(app);

app.listen(port,() => {
    console.log(`Your routes will be running on ${port}`);
});
