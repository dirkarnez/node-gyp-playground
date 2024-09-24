module.exports = {
    ...require('./build/Release/robotjs.node'),
    myExtraFunction: function() {
        console.log("hello from extra function");
    }
};