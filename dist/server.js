"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config();
const port = 3000;
const mongoURL = process.env.MONGO || 'mongodb://localhost:27017/notebook';
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
