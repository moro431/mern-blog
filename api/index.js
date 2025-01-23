import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Configuration de dotenv
dotenv.config();

const app = express();
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
