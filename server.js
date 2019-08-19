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
        handler: (request, h) => {
            console.log("prefs callig ...........")
            
            return appCtrl.list_all_prefs();
        }
    });
    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {
            console.log("hello callig ...........")
           console.log( appCtrl.hello())
            return   "hello world"
        }
    });

    server.route({
        method: 'GET',
        path:'/prefs2',
        handler: (request, h) => {
            console.log("prefs2 callig ...........")
             appCtrl.list_all_prefs2().then((pre)=>{
                 console.log(pre)
                return pre;}
                ).catch((err) => {console.log(err)});
            
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