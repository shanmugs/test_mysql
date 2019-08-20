'use strict';

const Boom = require('boom');


const Hapi = require('@hapi/hapi');
const appCtrl = require('./appController.js');

const init = async () => {

    const server = Hapi.server({
       host:"0.0.0.0",
        port: 3000 
    });

    server.route({
        method: 'GET',
        path:'/prefs',
        handler: async (request, h) => {

        try{
          console.log("prefs callig ...........")
          const prefs = await appCtrl.list_all_prefs(request);

          return prefs;

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