var Method = require('aeolus').Method;
var DB = require('aeolus').DB;

var reserve = new Method();

reserve.DBWrapper.insert('machines', function(req) {
    return {
        room: req.getParameter('id') || 1,
        slots: []
    };
});

module.exports = reserve;
