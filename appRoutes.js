'use strict';

module.exports = function(app) {
  var appCtrl = require('./appController.js');

  // todoList Routes
  app.route('/prefs')
    .get(appCtrl.list_all_prefs);
    

  //  .post(todoList.create_a_task);
   
//    app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);

};