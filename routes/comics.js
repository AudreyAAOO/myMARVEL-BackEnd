const express = require("express"); //? import de express
const axios = require("axios");
const router = express.Router(); //? déclarer les routes


//todo Route : /comics/:characterId
//! list of comics  --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.get("/comics", async (req, res) => {

    try {

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY_MARVEL}`
        );


        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }



});





//! list of comics containing specific character --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.get("/comics/:characterId", async (req, res) => {
    if (req.params.characterId !== null) {
    try {
        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY_MARVEL}`
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }

    }
});



//! export de mes routes
module.exports = router;