const path = require('path');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

const mongoose = require('mongoose');

const routes = require('./routes/api');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
  console.log("connected");
}



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.use('/api', routes);

  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });