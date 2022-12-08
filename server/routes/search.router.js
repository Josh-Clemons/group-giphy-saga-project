const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', (req, res) => {
    axios.get(
        `api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}=${req.body}&limit=6`
    ).then((response) => {
        console.log('response data: ', response.data);
        res.send(response.data)
    }).catch((error) => {
        console.log('error getting from API', error)
        res.sendStatus(500);
    });
});

module.exports = router;
