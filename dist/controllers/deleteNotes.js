"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotes = void 0;
const data_1 = require("../helpers/data");
const getNotes = (req, res) => {
    res.json(data_1.notes);
};
exports.getNotes = getNotes;
