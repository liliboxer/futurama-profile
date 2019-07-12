const express = require('express');
const futuramaRoutes = require('./routes/futurama');

const app = express();

app.use(express.json());

app.use(futuramaRoutes);

module.exports = app;
