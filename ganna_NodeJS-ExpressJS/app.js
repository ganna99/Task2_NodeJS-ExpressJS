const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

 
app.use('/', itemRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(3000, () => console.log('🚀 Server running on port 3000'));
  })
  .catch(err => console.log(err));