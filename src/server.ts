import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './modules/users/user_routes';
import forumRoutes from './modules/forum/forum_routes';
import subjectRoutes from './modules/subjects/subject_routes';
import { corsHandler } from './middleware/corsHandler';
import { loggingHandler } from './middleware/loggingHandler';
import { routeNotFound } from './middleware/routeNotFound';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

dotenv.config(); // Cargamos las variables de entorno desde el archivo .env

const app = express();

const LOCAL_PORT = process.env.SERVER_PORT || 9000;

// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Usuarios',
            version: '1.0.0',
            description: 'Documentación de la API de Usuarios'
        },
        servers: [
            {
                url: `http://localhost:${LOCAL_PORT}`
            }
        ]
    },
    apis: [
        './src/modules/users/user_routes.ts',
        './src/modules/forum/forum_routes.ts',
        './src/modules/subjects/subject_routes.ts'
    ] // Asegúrate de que esta ruta apunta a tus rutas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(express.json());
app.use(loggingHandler);
app.use(corsHandler);

// Rutas
app.use('/api', userRoutes);
app.use('/api', forumRoutes);
app.use('/api', subjectRoutes);

// Rutas de prueba
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGODB_URI || 'mongodb+srv://joan:1234@cluster0.3owhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to DB'))
    .catch((error) => console.error('DB Connection Error:', error));

// Iniciar el servidor
app.listen(LOCAL_PORT, () => {
    console.log('Server listening on port: ' + LOCAL_PORT);
    console.log(`Swagger disponible a http://localhost:${LOCAL_PORT}/api-docs`);
});