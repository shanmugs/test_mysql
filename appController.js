'use strict';

const Prefs = require('./appModel.js');

exports.list_all_prefs = async function (request) {
  // return new Promise((resolve, reject) => {
  //   Prefs.getAllPrefs(function(err, prefs) {
  //     console.log('list_all_prefs controller')
  //     if (err){
  //       console.log(err)
  //       return  reject(Boom.badImplementation());
  //     }
  //     console.log('list_all_prefs res:: ', prefs);
  //     return resolve(prefs);
  //   }); 
  // });

  try {
    console.log('list_all_prefs controller');

    const prefs = await Prefs.getAllPrefs(request);
    
    console.log('list_all_prefs res:: ', prefs);
    return prefs;
  
  } catch (error) {
    console.log('list_all_prefs controller '+error);
    console.log(error);
    return Boom.badImplementation();
  }



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