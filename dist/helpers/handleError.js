"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var handleError = function handleError(errorMessage) {
    var err = new Error(errorMessage);
    err.status = 400;
    return err;
};
exports.default = {
    handleError: handleError
};
//# sourceMappingURL=handleError.js.map