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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserHandler = exports.updateUserHandler = exports.getUserByIdHandler = exports.getAllUsersHandler = exports.createUserHandler = exports.saveMethodHandler = void 0;
// src/controllers/user_controller.ts
const user_service_js_1 = require("../users/user_service.js");
const user_models_js_1 = __importDefault(require("./user_models.js"));
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
        const { name, age, email, password } = req.body;
        // Crear un nuevo usuario
        const newUser = new user_models_js_1.default({
            name,
            age,
            email,
            password
        });
        // Guardar el usuario en la base de datos
        yield newUser.save();
        res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
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
