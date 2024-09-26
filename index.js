module.exports = {
    // ...require('./build/Release/node-gyp-playground.node'),
    ...require('node-gyp-build')(__dirname),
    myExtraFunction: function() {
        console.log("hello from extra function");
    }
};
