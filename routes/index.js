const path = require("path");
const cacheRoutes = require("./cache");

const constructorMethod = (app) => {
    app.use("/",cacheRoutes);
    app.use("*", (req,res) => {
      res.status(404).json({error: "Not Found!"});
    });
};

module.exports = constructorMethod;
