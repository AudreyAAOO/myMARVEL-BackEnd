const express = require("express");
const axios = require("axios");

const router = express.Router();


//! -- list of favorites by id --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
router.post("/favorites", async (req, res) => {

    try {
        console.log("route favorites ok ?");
        console.log("req.body: ", req.body);
        const { arrayOfId } = req.body;
        const arrayChar = [];

        for (let i = 0; i < arrayOfId.length; i++) {
            const characterId = arrayOfId[i];
            // console.log("characterId = arrayChar[i]: ", characterId);

            // arrayChar.forEach(resultId => {
            const response = await axios.get(
                `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
            )
            //    console.log("response: ", response);
            // console.log("response.data : ", response.data);

            // })

            arrayChar.push(response.data);
            console.log("arrayChar: ", arrayChar);

            // for (let i = 0; i < response.data.length; i++) {
            //     
            // }
        }
        res.status(200).json(arrayChar);
        console.log("--★--★--★--★ arrayChar: --★--★--★--★--★", arrayChar);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("BACK error.response: ", error.message);
    }
});

// arrayChar.push(response.data[i]);

// {
//     "characterId": ["5fcf9319d8a2480017b91648","5fcf9314d8a2480017b91645","5fcf9355d8a2480017b916b9"]
// }



module.exports = router;