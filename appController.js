'use strict';

var Prefs = require('./appModel.js');

exports.list_all_prefs = function() {
  return new Promise((resolve, reject) => {
    Prefs.getAllPrefs(function(err, task) {
      console.log('list_all_prefs controller')
      if (err){
        console.log(err)
         reject(Boom.badImplementation());
      }

      console.log('list_all_prefs res:: ', task);
    
      return resolve(task);
    });
   
  
  });
    
};

// exports.hello = function(req, h) {
//   return   '{"message":"hello hapi-mysql!"}'
// };


// exports.list_all_prefs2 = function(req, h) {
//   return  new Promise(function(resolve, reject){
//     Prefs.getAllPrefs(function() {
//           console.log('ilist_all_prefs2 controller')
//           if (err)
//           reject(err);
      
//           console.log('list_all_prefs2 res--> ', task);
//           resolve(task);
//       });
//    }); 