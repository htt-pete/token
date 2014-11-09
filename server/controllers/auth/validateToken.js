module.exports =  function (req, res, next) {
    // body...
    console.log('validateToken is working');

    next();
};