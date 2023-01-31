//middleware function req, res, next 
const moment = require('moment');

const logger = (req, res, next) => {
    // show what url is getting hit // req.protocol gives http 
    // //${req.get('host')} get the GET request // req.orginialUrl gives the url
    // moment gives the date you can write this all to a file with fs. module. 
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

module.exports = logger;

    