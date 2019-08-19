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

    
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();