const express = require('express');
const { append } = require('express/lib/response');
const userRoutes = require('./routes/user');




app.use('/api/auth', userRoutes);

module;exports = app;