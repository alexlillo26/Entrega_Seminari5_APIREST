import express from 'express';
import { createSubjectHandler, deleteSubjectHandler, getAllSubjectsHandler, getSubjectByIdHandler, updateSubjectHandler } from './subject_controller.js';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   - name: subjects
 *     description: Operaciones relacionadas con las asignaturas
 */

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     tags:
 *       - subjects
 *     summary: Crea una nueva asignatura
 *     description: Añade una nueva asignatura.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Asignatura creada exitosamente
 */
router.post('/subjects', createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     tags:
 *       - subjects
 *     summary: Obtiene todas las asignaturas
 *     description: Retorna una lista de todas las asignaturas.
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
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 */
router.get('/subjects', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     tags:
 *       - subjects
 *     summary: Obtiene una asignatura por ID
 *     description: Retorna los detalles de una asignatura específica.
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
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: Asignatura no encontrada
 */
router.get('/subjects/:id', getSubjectByIdHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     tags:
 *       - subjects
 *     summary: Actualiza una asignatura por ID
 *     description: Modifica los detalles de una asignatura específica.
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Asignatura actualizada exitosamente
 *       404:
 *         description: Asignatura no encontrada
 */
router.put('/subjects/:id', updateSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     tags:
 *       - subjects
 *     summary: Elimina una asignatura por ID
 *     description: Elimina una asignatura específica.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Asignatura eliminada exitosamente
 *       404:
 *         description: Asignatura no encontrada
 */
router.delete('/subjects/:id', deleteSubjectHandler);

export default router;