module.exports = {
    ...require('./build/Release/node-gyp-playground.node'),
    myExtraFunction: function() {
        console.log("hello from extra function");
    }
};
