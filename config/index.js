const sass = require("gulp-sass");

const server_config = require('./server_config');
const webpack_config = require('./webpack_config');

const config = {
    server_config,
    webpack_config,
    sass_config : sass({outputStyle : 'compressed'}).on('error',sass.logError),
}
module.exports = config;