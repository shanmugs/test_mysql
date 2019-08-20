'use strict';
const Boom = require('boom');

module.exports = function(app) {
  var appCtrl = require('./appController.js');

   app.route('/prefs')
    .get(appCtrl.list_all_prefs);
 
};