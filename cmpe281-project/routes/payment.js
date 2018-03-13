var ejs = require("ejs");
var mongo = require("./mongo");
var mongoPayment = "mongodb://52.8.19.39:27017,13.56.167.225:27017,13.56.67.12:27017/project281?replicaSet=rs0";

var user='',cart='',type='';
function check(req,res){

}

function getUser(uid,cid,type){

}

exports.payment=check;
exports.getUser=getUser;
