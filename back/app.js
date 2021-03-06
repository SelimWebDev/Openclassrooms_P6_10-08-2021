const express = require('express');
const helmet = require("helmet");

const path = require('path');

const userRoutes = require('./routes/user');
const msgRoutes = require('./routes/msg')
const commentRoutes = require('./routes/comment')

const app = express();

app.use(helmet());

app.use((req, res, next) => {                   
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/msg', msgRoutes);
app.use('/api/comment', commentRoutes);
module.exports = app;