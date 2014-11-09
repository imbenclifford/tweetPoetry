var exports = module.exports = {};

exports.hello = function(request, reply) {
        reply.file('./index.html');
    };