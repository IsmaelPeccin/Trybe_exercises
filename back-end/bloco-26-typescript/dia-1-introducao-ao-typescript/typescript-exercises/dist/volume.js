"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertGlobal_1 = __importDefault(require("./convertGlobal"));
const units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
convertGlobal_1.default.exec(units);
