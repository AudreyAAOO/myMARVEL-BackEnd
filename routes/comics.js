const express = require("express"); //? import de express
const axios = require("axios");
const router = express.Router(); //? déclarer les routes


//todo Route : /comics/:characterId
//! list of comics  --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.get("/comics", async (req, res) => {

    try {
        const title = req.query.title || "";

        const limit = req.query.limit || 100;
        const skip = req.query.skip || 0;
        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics?title=${title}&apiKey=${process.env.API_KEY_MARVEL}&skip=${skip}&limit=${limit}`
        );

        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }



});





//! list of comics containing specific character --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.get("/comics/:characterId", async (req, res) => {
    // if (req.params.characterId !== null) {
    try {

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY_MARVEL}`
        );
        res.status(200).json(response.data);
    } catch (error) {

        res.status(400).json({ message: error.message });
        console.log(error.response);
    }
    // }
});



//! export de mes routes
module.exports = router;