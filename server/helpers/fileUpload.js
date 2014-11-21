var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
/**
 * Check if upload directory exists
 *
 * @param  {String} dir :: directory to check for
 */
function checkExists (dir) {
    fs.exists(path.resolve(dir), function (exists) {
        if (!exists) {
            mkdirp (path.resolve(dir), function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(path.resolve(dir) + ' directory was created');
                }
            });
        }
    });
}

module.exports = {
    checkExists: checkExists
}