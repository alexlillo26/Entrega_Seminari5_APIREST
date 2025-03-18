import express from 'express';
import { 
    createUserHandler, 
    deleteUserHandler, 
    getAllUsersHandler, 
    getUserByIdHandler, 
    loginUserHandler, 
    updateUserHandler 
} from '../users/user_controller.js';

const router = express.Router();

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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 */
router.post('/users', createUserHandler);

/**
 * @openapi
 * /api/users/login:
 *   post:
 *     tags:
 *       - users
 *     summary: Inicia sesión de un usuario
 *     description: Verifica las credenciales de un usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *       401:
 *         description: Credenciales incorrectas
 *       500:
 *         description: Error interno del servidor
 */
router.post('/users/login', loginUserHandler);

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
router.get('/users', getAllUsersHandler);

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
router.get('/users/:id', getUserByIdHandler);

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
router.put('/users/:id', updateUserHandler);

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
router.delete('/users/:id', deleteUserHandler);

export default router;