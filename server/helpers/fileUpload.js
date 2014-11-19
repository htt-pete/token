var fs = require('fs');
var mkdirp = require('mkdirp');
/**
 * Check if upload directory exists
 * @param  {String} dir :: directory to check for
 *
 */
function checkExists (dir) {
    fs.exists(dir, function (exists) {
        if (!exists) {
            mkdirp (dir, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(dir + ' directory was created');
                }
            });
        }
    });
}

module.exports = {
    checkExists: checkExists
}