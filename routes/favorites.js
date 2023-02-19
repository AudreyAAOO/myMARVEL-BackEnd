const express = require("express"); //? import de express
const axios = require("axios");

const router = express.Router(); //? déclarer les routes



/*! -- list of character --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.get("/favorites", async (req, res) => {
    try {

        const response = await axios.get(
            `https://site--mymarvel--hw4gvwsxlwd5.code.run/favorites`
        );

        res.status(200).json(response.data);
    } catch (error) {

        res.status(400).json({ message: error.message });
        console.log(error.response);
    }

});


//! export de mes routes
module.exports = router;