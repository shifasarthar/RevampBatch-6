const express = require('express');
const dotenv = require('dotenv');

const env = process.argv[2] || "development";
dotenv.config({ path: `.env.${env}`});

const app = express();
const PORT = process.env.PORT || 3000;
const APP = process.env.APP || 'Development';

app.get('/', (req, res) => {
    res.send(`Hello world from express from ${APP}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${APP} mode`);
});
