import { Request, Response } from 'express';
import { saveMethod, createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser } from '../users/user_service.js';
import User, { IUser } from './user_models.js';

export const saveMethodHandler = async (req: Request, res: Response) => {
    try {
        const data = saveMethod();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createUserHandler = async (req: Request, res: Response) => {
    try {
        const { name, age, email, password } = req.body;

        // Crear un nuevo usuario
        const newUser = new User({
            name,
            age,
            email,
            password
        });

        // Guardar el usuario en la base de datos
        await newUser.save();

        res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
    } catch (error: any) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
};

export const loginUserHandler = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await loginUser(email, password);
        res.status(200).json({ message: 'Login exitoso', user });  // Sin return
    } catch (error: any) {
        res.status(401).json({ message: error.message });  // Sin return
    }
};

export const getAllUsersHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllUsers();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getUserById(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateUser(req.params.id, req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteUser(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};