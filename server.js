'use strict';

const Hapi=require('hapi');
const server = new Hapi.Server(~~process.env.PORT || 8000, '0.0.0.0');


// Add the route
server.route({
    method:'GET',
    path:'/guutong',
    handler:function(request,h) {
        const name = request.query.name || '';
        const age = request.query.age || '';
        const email = request.query.email || '';

        return {
            name,
            age,
            email
        };
    }
});

server.start(function () {
    console.log('Server started at [' + server.info.uri + ']');
});