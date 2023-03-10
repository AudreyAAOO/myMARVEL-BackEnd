require("dotenv").config(); // Permet d'activer les variables d'environnement qui se trouvent dans le fichier `.env`
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const mongoose = require("mongoose");

const app = express();

app.use(express.json()); //* récupérer les paramètres de type Body
app.use(morgan("dev"));
app.use(cors());

//todo se connecter à la BDD
// const connectDatabase = async () => {
//     try {
//         mongoose.set("strictQuery", false);
//         await mongoose.connect(process.env.MONGODB_URI); 
//         console.log("connected to database 🗃️ ");
//     } catch (error) {
//         console.log(error);
//     }
// };
// connectDatabase();

//! import des routes
const characters = require("./routes/characters");
const comics = require("./routes/comics");
const favorites = require("./routes/favorites");

//! utiliser les routes
app.use(characters);
app.use(comics);
app.use(favorites);


app.get("/", (req, res) => {
    res.json("👩‍💻 Bienvenue sur l'API myMARVEL d'Audrey 🔥");
});

app.all("*", (req, res) => {
    res.status(404).json({ message: "⚠️ This route doesn't exist ! ( ´•̥×•̥` )" });
});

app.listen(process.env.PORT || 3100, () => {
    console.log("(๑•͈ᴗ•͈)  ├┬┴┬┴ Server started ┬┴┬┴┤  🚀 ")
});

