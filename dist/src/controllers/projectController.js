"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createproject = exports.getprojects = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getprojects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield prisma.project.findMany();
        res.json(projects);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retriving projects ${error.message}` });
    }
});
exports.getprojects = getprojects;
const createproject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, startDate, endDate } = req.body;
    console.log("🚀 ~ startDate:", startDate);
    console.log("🚀 ~ description:", description);
    console.log("🚀 ~ name:", name);
    try {
        const newProject = yield prisma.project.create({
            data: {
                name,
                description,
                endDate,
                startDate,
            },
        });
        res.status(201).json(newProject);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error Creating projects ${error === null || error === void 0 ? void 0 : error.message}` });
    }
});
exports.createproject = createproject;
