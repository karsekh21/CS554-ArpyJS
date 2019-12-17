const path = require("path");
const cacheRoutes = require("./cache");

const constructorMethod = (app) => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
  });
  app.use("/",cacheRoutes);
  app.use("*", (req,res) => {
    res.status(404).json({error: "Not Found!"});
  });
};

module.exports = constructorMethod;
