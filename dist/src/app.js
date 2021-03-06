'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _route = require('../routes/route');

var _route2 = _interopRequireDefault(_route);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _morgan2.default)("dev"));
var PORT = process.env.PORT || 4001;

app.use('/api/v1/', _route2.default);
// catching an error before passing it to the erro handler
app.use(function (req, res, next) {
    var err = new Error('this page was not found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

app.listen(PORT, function () {
    console.log('Express app running on port ' + PORT);
});
exports.default = app;
//# sourceMappingURL=app.js.map