"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_js_1 = require("./user_controller.js");
const router = express_1.default.Router();
/**
 * @openapi
 * tags:
 *   - name: users
 *     description: Operaciones relacionadas con los usuarios
 */
/**
 * @openapi
 * /api/users:
 *   post:
 *     tags:
 *       - users
 *     summary: Crea un nuevo usuario
 *     description: Añade un nuevo usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 */
router.post('/users', user_controller_js_1.createUserHandler);
/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     summary: Obtiene todos los usuarios
 *     description: Retorna una lista de todos los usuarios.
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/users', user_controller_js_1.getAllUsersHandler);
/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - users
 *     summary: Obtiene un usuario por ID
 *     description: Retorna los detalles de un usuario específico.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/users/:id', user_controller_js_1.getUserByIdHandler);
/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     tags:
 *       - users
 *     summary: Actualiza un usuario por ID
 *     description: Modifica los detalles de un usuario específico.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/users/:id', user_controller_js_1.updateUserHandler);
/**
 * @openapi
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - users
 *     summary: Elimina un usuario por ID
 *     description: Elimina un usuario específico.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/users/:id', user_controller_js_1.deleteUserHandler);
exports.default = router;
