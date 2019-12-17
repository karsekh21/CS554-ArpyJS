const path = require("path");
const express = require("express");
const router = express.Router();
const uuid = require("node-uuid");
const multer = require("multer");
const fs = require("fs");
const bluebird = require('bluebird');
const redis = require('redis');
const client = redis.createClient();
const request = require('request');
const scribble = require('scribbletune');

const doAsync = require('doasync');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const unlinkAsync = bluebird.promisify(fs.unlink);

let file_hist=[];

//create storage variable for multer object
var Storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./tmp");
  },
  filename: function(req, file, callback) {
    //Date for unique filenames
    callback(null, Date.now() + "_" + file.originalname);
  }
});

var upload = multer({
  storage: Storage
});

let getCurrDate = function(){
  let date = new Date();
  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  return year + "-" + month + "-" + day;
};


router.post('/download_midi', (req, res) => {
  let allINeed = req.body.content;
  let name = req.body.file_name;
  scribble.midi(allINeed, name);

  const options = {
    method: "POST",
    url: 'http://localhost:5000/fileupload' ,
    headers: {
        "Content-Type": "multipart/form-data"
    },
    formData : {
        "temp_file" : fs.createReadStream(name)
    }
  };

  request(options, function (err, res, body) {
    if(err) console.log(err);
  });
});

router.post("/fileupload", upload.single("temp_file"), async(req,res)=>{
  let file = req.file;
  let date = getCurrDate();
  let id = uuid.v4();
  file._id = id;
  file.date = date;
  delete file.path;
  delete file.destination;

  //add file data to the cache
  await client.setAsync(id, JSON.stringify(file));
  //remove old files
  if(file_hist.length >= 5 && !file_hist.includes(id)){
    let old = await client.getAsync(file_hist[4]);
    let oldfile = JSON.parse(old);
    let oldpath = "tmp/" + oldfile.filename;
    unlinkAsync(oldpath);
  }
  unlinkAsync(file.originalname);
  file_hist.unshift(id);

});


router.get("/files", async(req,res) => {
    var files = [];
    for(let i=0; i<file_hist.length; i++){
      if(i==5) break;
      let f = await client.getAsync(file_hist[i]);
      files.push(JSON.parse(f));
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    res.send({express:files});
=======
    res.send({ express: files });
>>>>>>> ceac18238fcea9a0f0800d0a25d97484e082e900
=======
    res.send({ express: files });
>>>>>>> ceac18238fcea9a0f0800d0a25d97484e082e900
=======
    res.send({ express: files });
>>>>>>> ceac18238fcea9a0f0800d0a25d97484e082e900
});

router.get("/files/:id", async(req,res) => {
  let id = req.params.id;
  let cache = await client.getAsync(id);
  if(cache){
    let fpath = __dirname + '/../tmp/' + JSON.parse(cache).filename;
    res.sendFile(path.resolve(fpath));
  }else{
    res.status(404).json({error:"file not found"});
  }
});

module.exports = router;
