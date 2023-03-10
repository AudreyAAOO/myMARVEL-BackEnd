const express = require("express");
const axios = require("axios");

const router = express.Router();


/*! -- list of character --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.get("/characters", async (req, res) => {
    try {
        const name = req.query.name || "";
        const limit = req.query.limit || 100;
        const skip = req.query.skip || 0;

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY_MARVEL}&name=${name}&skip=${skip}&limit=${limit}`
        );
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error.response);
    }
});


// /*! -- list of character by id --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
// router.get("/character/:characterId", async (req, res) => {
//     try {
//         const response = await axios.get(
//             // `https://lereacteur-marvel-api.herokuapp.com/characters/${req.params.characterId}?apiKey=${process.env.API_KEY_MARVEL}`

//             `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.API_KEY_MARVEL}`

//         );
//         // console.log(response.data);
//         res.status(200).json(response.data);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//         console.log(error.response);
//     }
// });


//! faire une nouvelle route et passer la liste des favoris en body
// boucler dessus 
// fr une requete en front sur chaque tour de boucler
// vérifier longueur du tableau pr savoir si ya toutes les réponses

// si comics en plus , on peut faire une même route pr les characters et comics
// juste ajouter un body en plus


module.exports = router;