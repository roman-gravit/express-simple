const express = require("express");
const fs = require("fs");
const path = require('path'); 
require("dotenv").config();

const app = express();
const port = 3001;

app.use('/static', express.static(path.resolve(__dirname, 'files')))

app.get("/", (req, res) => {
  const path_index = path.resolve(__dirname, "files", "index.html");
  fs.readFile(path_index, (err, data) => {
    res.status = 200;
    res.send(data.toString());
  });
});

app.get("/assets.json", (req, res) => {
  const path_json = path.resolve(__dirname, "files", "assets.json");
	fs.readFile(path_json, (err, data) => {
    res.status = 200;
	  res.send(data.toString());
	});
});

app.get("/style.css", (req, res) => {
  const path_json = path.resolve(__dirname, "files", "style.css");
	const data = fs.readFileSync(path_json);
  res.appendHeader('Content-Type', "text/css");
  res.status = 200;
	res.send(data.toString());
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
