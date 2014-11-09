var Hapi = require("hapi");
var server = new Hapi.Server(8080, {cors: true});
var Routes = require('./routes.js')

server.route(Routes);

server.start(function() {
    console.log("Hapi server started @", server.info.uri);
});