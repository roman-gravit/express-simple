const fs = require("fs");
const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("files"));
app.set("view engine", "ejs");

const userData = {
	name: 'John',
	email: 'john@test.com',
	avatar: './test.png'
};

app.get("/", (req, res) => {
  fs.readFile("./files/index.html", (err, data) => {
    res.sendStatus(200).send(data.toString());
  });
});

app.get("/user", (req, res) => {
	res.render('user', { userData });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
