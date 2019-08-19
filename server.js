'use strict';

const Hapi = require('@hapi/hapi');
var appCtrl = require('./appController.js');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/prefs',
        handler: async (request, h) => {

        try{
          console.log("prefs callig ...........")
          const task = await  appCtrl.list_all_prefs()

          return task;

        }catch(err){
            console.log(err)
            return {};
        }    

        //  return  appCtrl.list_all_prefs(function(err, task) {
        //       console.log('list_all_prefs srver')
        //       if (err){
        //         throw err;
        //       }           
          
        //        console.log('list_all_prefs res:: ', task);
        //       // h.response(task).code(200)
        //     //  reply(null,task);
        //       return task;
            
        //     });
              
           // return task;
              
            //  return task;
          }
    });
    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {
            console.log("hello callig ...........")
           //console.log( appCtrl.hello());
            return   "hello world";
        }
    });

    // server.route({
    //     method: 'GET',
    //     path:'/prefs2',
    //     handler: async (request, h) => {
    //         console.log("prefs2 callig ...........")

    //         const pref = await appCtrl.list_all_prefs2();
    //         console.log("prefs2 pref ..........."+pref)
    //         return pref;
    //         //  appCtrl.list_all_prefs2().then((pre)=>{
    //         //      console.log(pre)
    //         //     return pre;}
    //         //     ).catch((err) => {
    //         //         console.log(err);
    //         //         throw err;
    //         //     });
            
    //     }
    // });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();