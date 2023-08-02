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

const dbURI = 'mongodb://localhost:27017/your-database-name'; 
mongoose_1.default.connect(dbURI);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express_1.default.json());
app.use('/api', notes_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
