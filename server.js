const express = require('express');
const request = require('request');
const app = express();
const scribble = require('scribbletune');
const port = process.env.PORT || 5000;

app.use(require("body-parser").json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
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
          // console.log(allINeed);
        }
      )

});
