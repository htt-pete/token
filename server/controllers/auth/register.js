var User = require('./../../models/user.js');

module.exports =  function login (req, res, next) {
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });

    user.save(function(err){
        if(err) {
            return res.send(err);
        }

        res.send(200);
    });
};