'use strict';

var Prefs = require('./appModel.js');

exports.list_all_prefs = function(req, h) {
    Prefs.getAllPrefs(function(err, task) {
    console.log('list_all_prefs controller')
    if (err)
      throw err;

    console.log('list_all_prefs res:: ', task);
    return task
  
});
};

exports.hello = function(req, h) {
  return   '{"message":"hello hapi-mysql!"}'
};


exports.list_all_prefs2 = function(req, h) {
  return  new Promise(function(resolve, reject){
    Prefs.getAllPrefs(function(err, task) {
      console.log('ilist_all_prefs2 controller')
      if (err)
      reject(err);
  
      console.log('list_all_prefs2 res--> ', task);
      resolve(task);
    
  });
 })
};

// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);

//   //handles null error 
//    if(!new_task.task || !new_task.status){

//             res.status(400).send({ error:true, message: 'Please provide task/status' });

//         }
// else{
  
//   Task.createTask(new_task, function(err, task) {
    
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// }
// };


// exports.read_a_task = function(req, res) {
//   Task.getTaskById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.update_a_task = function(req, res) {
//   Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.delete_a_task = function(req, res) {


//   Task.remove( req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };