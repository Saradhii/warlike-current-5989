"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const env = require("dotenv");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./server/db"));
const cors_1 = __importDefault(require("cors"));
const Cart_routes_1 = __importDefault(require("./routes/Cart.routes"));
const session = require("express-session");
const passport_1 = __importDefault(require("passport"));
require("./models/User");
require("./services/passport");
const Oauth_1 = require("./routes/Oauth");
var cookieSession = require("cookie-session");
const ProductRoute = require("./routes/ProductRoute");
// const UserRoute = require("./routes/UserRoute");
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use(require("cookie-parser")());
app.use(session({
    secret: "ajxbivvebxiebxi",
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 100,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/auth", Oauth_1.OauthRouter);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
app.use("/product", ProductRoute);
// app.use("/user", UserRoute);
app.use("/cart", Cart_routes_1.default);
app.get("/", (req, res) => {
    res.send("Welcome");
});
// app.use("/user",UserRoute);
server.listen(PORT, () => {
    db_1.default.then((con) => {
        console.log(`Server is running on PORT http://localhost:${PORT}`);
    });
});
