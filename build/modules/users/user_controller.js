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
exports.deleteUserHandler = exports.updateUserHandler = exports.getUserByIdHandler = exports.getAllUsersHandler = exports.createUserHandler = exports.saveMethodHandler = void 0;
// src/controllers/user_controller.ts
const user_service_js_1 = require("../users/user_service.js");
const saveMethodHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = (0, user_service_js_1.saveMethod)();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.saveMethodHandler = saveMethodHandler;
const createUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, user_service_js_1.createUser)(req.body);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createUserHandler = createUserHandler;
const getAllUsersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, user_service_js_1.getAllUsers)();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllUsersHandler = getAllUsersHandler;
const getUserByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, user_service_js_1.getUserById)(req.params.id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getUserByIdHandler = getUserByIdHandler;
const updateUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, user_service_js_1.updateUser)(req.params.id, req.body);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateUserHandler = updateUserHandler;
const deleteUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, user_service_js_1.deleteUser)(req.params.id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteUserHandler = deleteUserHandler;
