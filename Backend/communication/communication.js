
var constants = require('../config/constants');
var users_model = require('../model/users_model');

exports.bind = (io, users, sockets) => {
    
    io.of('/').on('connection', client => {

        client.on(constants.key.REQUEST_KEY, req => {
            var data = JSON.parse(req);
            console.log(data, req, 'request data ------------------------------  11');
            if(data.event === constants.key.FIRST_KEY) {

                let index = users.findIndex(user => user.data.userId === data.userId);
                if(index === -1) {
                    users.push({data, socket_id : client.id});
                    sockets.push({socket_id : client.id, sockeet : client, userId : data.userId});
                }
                users_model.validate_login_user(data.users, (callBack) => {
                    client.emit(constants.key.USER_LOGIN_RESPONSE, callBack);
                });
            }
        });
    });
};