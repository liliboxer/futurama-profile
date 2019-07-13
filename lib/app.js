const express = require('express');
const futuramaRoutes = require('./routes/futurama');

const app = express();

// creates req.params
app.use(express.json());

app.use(futuramaRoutes);



module.exports = app;
