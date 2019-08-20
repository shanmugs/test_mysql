'user strict';

const sql = require('./db.js');
const Boom = require('boom');


const Prefs = function(prefs){
    this.name = prefs.name;
    this.value = prefs.value;
 };

 
Prefs.getAllPrefs = function (input) {
  return new Promise((resolve, reject) => {
    sql.query("select name, value from preferences where owner_type='User' limit 10", function (err, res) {
          if (err){
            console.log(err)
            return reject(Boom.badImplementation());
          }
          else{
            console.log('tasks : ', res);  
            return resolve(res);
            }
          });
      });   
 };
 

module.exports= Prefs;