require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan"); // affiche des logs de connexion



//* création du serveur
const app = express();


app.use(express.json());//* récupérer les paramètres de type Body
app.use(morgan("dev"));
app.use(cors()); //* le module cors permet d'autoriser ou non les demandes provenant de l'extérieur.

//* se connecter à la BDD
// const connectDatabase = async () => {
//     try {
//         mongoose.set("strictQuery", false);
//         await mongoose.connect(process.env.MONGODB_URI); // Pour se connecter à la BDD, sans préciser les identifiants
//         console.log("connected to database 🗃️ ");
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// };

// connectDatabase();



//! import des routes
const characters = require("./routes/characters");

//! utiliser les routes
app.use(characters);


app.get("/", (req, res) => {
    res.json("👩‍💻 Bienvenue sur l'API myMARVEL d'Audrey 👾");
});

app.all("*", (req, res) => {
    res.status(404).json({ message: "⚠️ This route doesn't exist !!! ⚠️" });
});

app.listen(process.env.PORT || 3100, () => {
    console.log(" 🚀 Server started !!! 🚀");
});