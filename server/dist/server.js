"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var socket_1 = require("./socket");
var app = express_1.default();
var server = http_1.createServer(app);
app.use("/", express_1.default.static(process.cwd() + "/../client/build"));
var run = function (port) {
    server.listen(port);
    socket_1.socket(server);
    console.log("server is listening at :" + port);
};
exports.run = run;
