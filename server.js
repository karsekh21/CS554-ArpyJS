const express = require("express");
let app = express();
let configRoutes = require("./routes");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/express', (req, res) => {
  res.send({ express: 'Express backend is now connected to React app' });
});

configRoutes(app);

app.listen(port,() => {
    console.log("We've now got a server!");
    console.log(`Your routes will be running on port ${port}`);
});
