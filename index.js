var path = require('path');
var pkg = require('./package.json');

module.exports = {
    path : '.' + path.sep + 'node_modules' + path.sep + pkg.name + 
        path.sep + 'flite-1.4-release' + path.sep + 'bin' + path.sep +
        'flite '
}
