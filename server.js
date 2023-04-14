require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;



// =============== Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

/**
 * Middlewares
 */
app.use((req, res, next) => {
    console.log('I run on all routes!');
    next();
});








app.listen(PORT, () => {
    console.log(`Listening on port # ${PORT}`);
})