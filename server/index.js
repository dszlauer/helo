const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
const app = express();

require("dotenv").config();
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("connected to db");
});

app.use(bodyParser.json());

app.post("/api/auth/register", controller.newUser);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`I'm listening on ${PORT}`);
});
