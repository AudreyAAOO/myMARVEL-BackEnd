const express = require("express"); //? import de express
const axios = require("axios");

const router = express.Router(); //? déclarer les routes



/*! -- list of character --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.get("/characters", async (req, res) => {
    try {

        const name = req.query.name || "";
        // const description = req.query.description || "";&description=${description}
        const limit = Number(req.query.limit) || 100;

        const skip = (req.query.skip - 1) * limit || 0;
        //console.log(response.data);

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY_MARVEL}&name=${name}&skip=${skip}&limit=${limit}`
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }

});



//todo 
/*! -- infos of a specific character --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
// Route : /character/:characterId

router.get("/character/:characterId", async (req, res) => {
    if (req.params.characterId !== null) {
        try {
            const response = await axios.get(

                `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.API_KEY_MARVEL}`
            );
            console.log("test");
            res.status(200).json(response.data);
        } catch (error) {
            console.log(error.message);
            res.status(400).json({ message: error.message });
        }

    }
});


//! export de mes routes
module.exports = router;