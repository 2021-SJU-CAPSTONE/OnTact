"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var http_1 = __importDefault(require("http"));
var app = express_1.default();
var serve = http_1.default.createServer(app);
var port = 5000;
//Middle ware
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.post("/join", function (req, res) {
    var localID = req.body.localID;
    res.send({ some: "asdf" });
});
serve
    .listen(5000, function () {
    console.log("listen in " + port);
})
    .on("error", function (e) {
    console.error(e);
});
