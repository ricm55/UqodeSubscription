var express = require('express');
const path = require('path');
var request = require('request');
require('dotenv').config()

var router = express.Router();
//https://localhost:3000/createUser?code=SCTi1rIXirhqax48-xsqqRW2jENQGesMi8oViRVDw1E
/* GET home page. */
//https://my.mlh.io/oauth/token?client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&code=${req.query.code}&redirect_uri=${process.env.redirect_uri}&grant_type=authorization_code
router.get('/', function(req, res, next) {
  console.log(req.query.code)
  if(req.query.code != undefined){
    console.log(process.env.client_id)
    console.log(process.env.client_secret)
    console.log(req.query.code)
    console.log(process.env.redirect_uri)
    var options = {
      uri:`https://my.mlh.io/oauth/token?client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&code=${req.query.code}&redirect_uri=${process.env.redirect_uri}&grant_type=authorization_code`,
      method:'POST'
    }
    request(options, function (error, response) {
      //console.log(response)
      res.sendFile(path.join(__dirname, '../views/homePage.html'));
      //res.send(response.body)
      //console.log(error,response.body);
    });
  }
  else{
    res.sendFile(path.join(__dirname, '../views/homePage.html'));
  }
  //res.render('index', { title: 'Express' });
});

router.get('/createUser',function(req,res,next){
  console.log("createUser")
  res.sendFile(path.join(__dirname, '../views/homePage.html'));
})

module.exports = router;
