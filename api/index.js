"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (req, res) => res.send("Welcome to Awesome API"));
app.use("/api/employee", routes_1.employee);
app.listen(process.env.PORT, () => {
    console.log(`Server Up and Running on Port ${process.env.PORT}`);
});
exports.default = app;
