'use strict';
const Boom = require('boom');

module.exports = function(app) {
  var appCtrl = require('./appController.js');

  //  app.route('/prefs')
  //   .get(appCtrl.list_all_prefs);

    app.route('/prefs').get( async function (req, res) {
      try{
        console.log("prefs callig ...........")
        const prefs = await appCtrl.list_all_prefs(req);
        res.send(prefs)
      //  return prefs;

      }catch(err){
          console.log(err)
          res.send(err)
      }   
      
      //res.send('Hello World!')
    });
 
};