var validateToken  = require('./../controllers/auth').validateToken;
/**
 * Set all routes for API on the app object using the Router object
 */
module.exports = function (app, router) {
    // set up auth routes
    app = require('./auth')(app);


    /**
     * Middle ware to check for token to authenticate user
     *
     * sets req.user to user object if token is valid
     */
    router.use(validateToken);

    router
        .route('/example')
        .get(function(req, res){
            res.send('fdjvbnsdfjvnjsdfn');
        });


    app.use('/api', router);

    return app;
}