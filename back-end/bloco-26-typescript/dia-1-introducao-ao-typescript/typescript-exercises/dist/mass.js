"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertGlobal_1 = __importDefault(require("./convertGlobal"));
const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
convertGlobal_1.default.exec(units);
