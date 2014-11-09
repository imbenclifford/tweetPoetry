var handlers = require("./handlers.js");

module.exports = [{
    path: "/",
    method: "GET",
    handler: handlers.hello
},
{
  method : "GET",
  path :  "/{param*}",
  handler :  {
    directory: {
      path: "./public",
      listing: false,
      index: false
    }
  }
}]