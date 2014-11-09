var User = require('./../../models/user.js');

module.exports =  function login (req, res, next) {

    User.findOne({email: req.body.email}, function (err, user) {

        if(user) {
            res.status(403).send(req.body.email + ' is already taken');
        } else {
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
        }
    });
};