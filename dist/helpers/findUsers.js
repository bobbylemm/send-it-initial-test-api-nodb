"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var findUsers = function findUsers(db, par, id) {
    return db.find(function (user) {
        return user[par] == id;
    });
};
exports.default = {
    findUsers: findUsers
};
//# sourceMappingURL=findUsers.js.map