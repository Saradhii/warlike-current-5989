"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./server/db"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
app.get("/", (req, res) => {
    res.send("Welcome");
});
server.listen(PORT, () => {
    db_1.default.then((con) => {
        console.log(`Server is running on PORT http://localhost:${PORT}`);
    });
});
