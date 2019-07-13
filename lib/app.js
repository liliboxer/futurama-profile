const express = require('express');
const futuramaRoutes = require('./routes/futurama');
const notFound = require('./middleware/notFound');
const error = require('./middleware/error');

const app = express();

app.use(express.json());

app.use(futuramaRoutes);
app.use(notFound);
app.use(error);

module.exports = app;
