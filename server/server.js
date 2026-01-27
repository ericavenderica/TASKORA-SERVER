const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

//DB config
const db = process.env.MONGO_URI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
