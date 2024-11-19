
var con = require('../config/Database');
var constants = require('../config/constants');
exports.validate_login_user = (data, callBack) => {
    con.DBconnection.query(`SELECT * FROM users WHERE email = '${data[1]}' and password = '${data[2]}'`, function(err, result) {
        console.log(result, 7);
        if(result.length > 0) {

        }else{
            callBack(constants.key.FORBIDDEN_USER);
        }
    })
}