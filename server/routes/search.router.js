const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', (req, res) => {
    const searchString = Object.keys(req.body).toString();


    axios.get(
        `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchString}&limit=6`
    ).then((response) => {
        console.log('received api response');
        res.send(response.data.data)
    }).catch((error) => {
        console.log('error getting from API', error)
        res.sendStatus(500);
    });
});

module.exports = router;
