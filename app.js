require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

connectToMongo().then(() => {
  app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
  });
});
