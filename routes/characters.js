const express = require("express"); //? import de express


const router = express.Router(); //? déclarer les routes



//! CREATE
//todo création d'une route pour afficher la liste des characters
// url https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=oDmTWBclqCsvDU7K
router.get("https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=oDmTWBclqCsvDU7K", (req, res) => {
    try {
        console.log(res);
        console.log(req);
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }

});

//! export de mes routes
module.exports = router;