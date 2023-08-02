"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const notes_1 = __importDefault(require("./routes/notes"));
const app = (0, express_1.default)();
const port = 3000;
// Подключение виртуального Mongoose
const dbURI = 'mongodb://localhost:27017/your-database-name'; // Замените на вашу строку подключения к MongoDB
mongoose_1.default.connect(dbURI);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
// Подключение парсера JSON для обработки запросов в формате JSON
app.use(express_1.default.json());
// Подключение маршрутов
app.use('/api', notes_1.default);
// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
