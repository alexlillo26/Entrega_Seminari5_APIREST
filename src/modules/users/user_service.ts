import User, { IUser } from '../users/user_models.js';

export const saveMethod = () => {
    return 'Hola';
};

export const createUser = async (userData: IUser) => {
    const user = new User(userData);
    return await user.save();
};

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    if (user.password !== password) {
        throw new Error('Credenciales incorrectas');
    }

    return user;
};

export const getAllUsers = async () => {
    return await User.find();
};

export const getUserById = async (id: string) => {
    return await User.findById(id);
};

export const updateUser = async (id: string, updateData: Partial<IUser>) => {
    return await User.updateOne({ _id: id }, { $set: updateData });
};

export const deleteUser = async (id: string) => {
    return await User.deleteOne({ _id: id });
};