const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

const mongoose = require('mongoose');

const routes = require('./routes/api');
const routesAuth = require('./routes/auth.routes');
const routesUser = require('./routes/user.routes');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use('/api', routes);
app.use('/api', routesAuth);
app.use('/api', routesUser);

  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });