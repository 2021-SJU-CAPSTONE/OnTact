"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.get = exports.create = void 0;
var user = {};
var create = function (socket) {
    var id = Math.ceil(Math.random() * 1000000);
    user[id] = socket;
    return id;
};
exports.create = create;
var get = function (id) {
    return user[id];
};
exports.get = get;
var remove = function (id) {
    delete user[id];
};
exports.remove = remove;
