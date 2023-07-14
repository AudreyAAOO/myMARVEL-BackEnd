const express = require("express");
const axios = require("axios");

const router = express.Router();

//! modifier la nouvelle route pour ajouter les comics en favoris en rajoutant un body

//! -- list of favorites by id --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.post("/favorites", async (req, res) => {

    try {
        // console.log("req.body: ", req.body);

        const { pinsChar } = req.body;
        const arrayChar = [];

        for (let i = 0; i < pinsChar.length; i++) {
            const characterId = pinsChar[i];

            const response = await axios.get(
                `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
            )
            console.log("response.data : ", response.data);
            arrayChar.push(response.data);
        }
        res.status(200).json(arrayChar);
        
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("error: ", error);
    }
});


module.exports = router;