const path = require('path');
const express = require('express');
const cors = require('cors');
const db = require("./schemas/init");
const Role = db.role;
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

const mongoose = require('mongoose');

const routes = require('./routes/api');
const routesAuth = require('./routes/auth.routes');
const routesUser = require('./routes/user.routes');

main().catch(err => console.log(err));
initial();

async function main() {
  await mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
  console.log("connected");
}

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
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