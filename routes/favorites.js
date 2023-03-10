const express = require("express");
const axios = require("axios");

const router = express.Router();


//! -- list of favorites by id --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.post("/favorites", async (req, res) => {
    try {
        console.log("route favorites ok ?");
        console.log("req: ", req.body);

        // const {arrayChar} = req.body;

        // for (let i = 0; i < arrayChar.length; i++) {
        //     const characterId = arrayChar[i];
        // }

        // arrayChar.forEach(characterId => {
        //     const response = await axios.post(
        //         `https://lereacteur-marvel-api.herokuapp.com/characters/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
        //     )
        // })
        // console.log("response.data : ", response.data);
        // arrayChar.push(response.data);

        // for (let i = 0; i < arrayChar.length; i++) {
        //     res.status(200).json({ arrayChar });
        // }

    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error.response);
    }
});


// {
//     [
//         "5fcf9319d8a2480017b91648",
//         "5fcf9355d8a2480017b916b9",
//         "5fcf9314d8a2480017b91645",
//     ]
// }



module.exports = router;