import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user.route.js'
import AuthRouter from './routes/auth.route.js'
const app=express()
app.use(express.json())
// Configuration de dotenv
dotenv.config();


const PORT = process.env.PORT || 3000;

// Vérification de la variable d'environnement
if (!process.env.MONGO) {
    console.error("Erreur : La variable d'environnement MONGO n'est pas définie.");
    process.exit(1); // Arrête le processus si la variable est manquante
}

// Connectez-vous à MongoDB
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connecté à la base de données');
        // Démarre le serveur après la connexion réussie
        app.listen(PORT, () => {
            console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erreur de connexion à MongoDB :', err);
    });

app.use('/api/user/',UserRouter)
app.use('/api/auth/',AuthRouter)

app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success : false,
    statusCode,
    message
  });

})