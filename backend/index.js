require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const matchesRouter = require('./routes/matchesRouter');

//Database connection
connectDB();

//express bodyparser middleware
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api/matches', matchesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
