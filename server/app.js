const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/categories', require('./routes/categories'));

module.exports = app;
