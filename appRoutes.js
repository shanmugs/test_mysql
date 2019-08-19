'use strict';

module.exports = function(app) {
  var appCtrl = require('./appController.js');

  // todoList Routes
  app.route('/prefs')
    .get(appCtrl.list_all_prefs);
 
};