require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const matchesRouter = require('./routes/matchesRouter');
const path = require('path');

//Database connection
connectDB();

//express bodyparser middleware
app.use(express.json());

//Routes
app.use('/api/matches', matchesRouter);

app.use(express.static(path.resolve('frontend', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
