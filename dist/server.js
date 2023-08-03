"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const app_1 = require("./app");
const port = 3000;
(0, dotenv_1.config)();
const mongoURL = process.env.MONGO || 'mongodb://localhost:27017/notebook';
console.log(process.env.MONGO, 'MONGOMONGOMONGOMONGOMONGOMONGOMONGO');
mongoose_1.default.connect(mongoURL)
    .then(() => {
    app_1.app.listen(port, () => {
        console.log("Server is running on http://localhost:" + port);
    });
})
    .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1);
});
