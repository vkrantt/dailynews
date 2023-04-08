require('dotenv').config({ path: './.env' })
const express = require('express');
const app = express();
const port = 3030;
const axios = require('axios');
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get('/api', async (req, res) => {
    const url = 'https://newsapi.org/v2/top-headlines?' + req._parsedUrl.query;
    const a = await axios(url);
    const r = await a.data;
    res.json(r);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})