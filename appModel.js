'user strict';

var sql = require('./db.js');



var Prefs = function(prefs){
    this.name = prefs.name;
    this.value = prefs.value;
    //this.created_at = new Date();
};


//Task object constructor
// var Task = function(task){
//     this.task = task.task;
//     this.status = task.status;
//     this.created_at = new Date();
// };
// Task.createTask = function (newTask, result) {    
//         sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {
                
//                 if(err) {
//                     console.log("error: ", err);
//                     result(err, null);
//                 }
//                 else{
//                     console.log(res.insertId);
//                     result(null, res.insertId);
//                 }
//             });           
// };
// Task.getTaskById = function (taskId, result) {
//         sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {             
//                 if(err) {
//                     console.log("error: ", err);
//                     result(err, null);
//                 }
//                 else{
//                     result(null, res);
              
//                 }
//             });   
// };

Prefs.getAllPrefs = function () {

    return  new Promise(function(resolve, reject){
        sql.query("select name, value from preferences where owner_type='User' limit 10", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                   // result(null, err);
                   reject(err);
                }
                else{
                  console.log('tasks : ', res);  
                 // sql.end();
                 //result(null, res);
                 resolve(res);
                }
            });   
        });   
};
// Task.updateById = function(id, task, result){
//   sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
//           if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{   
//              result(null, res);
//                 }
//             }); 
// };
// Task.remove = function(id, result){
//      sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

//                 if(err) {
//                     console.log("error: ", err);
//                     result(null, err);
//                 }
//                 else{
               
//                  result(null, res);
//                 }
//             }); 
// };

module.exports= Prefs;