'user strict';

var sql = require('./db.js');



var Prefs = function(prefs){
    this.name = prefs.name;
    this.value = prefs.value;
 };

 
Prefs.getAllPrefs = function (result) {

         sql.query("select name, value from preferences where owner_type='User' limit 10", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                   result(null, err);
                 }
                else{
                  console.log('tasks : ', res);  
                  result(null, res);
                 }
            });   
 };
 

module.exports= Prefs;