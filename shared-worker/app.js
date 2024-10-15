const fs = require("fs");
const express = require("express");
require("dotenv").config();
const path = require('path'); 

const app = express();

const port = process.env.PORT || 3000;
app.use('/static', express.static(path.resolve(__dirname, 'files')))

app.get("/red.html", (req, res) => {
	const path_index = path.resolve(__dirname, "files", "red.html");
	fs.readFile(path_index, (err, data) => {
	  res.appendHeader('Content-Type', "text/html");
	  res.status = 200;
	  res.send(data.toString());
	});
});
  
app.get("/red.js", (req, res) => {
	const path_index = path.resolve(__dirname, "files", "red.js");
	fs.readFile(path_index, (err, data) => {
	  res.appendHeader('Content-Type', "text/javascript");
	  res.status = 200;
	  res.send(data.toString());
	});
});
  
app.get("/blue.js", (req, res) => {
	const path_index = path.resolve(__dirname, "files", "blue.js");
	fs.readFile(path_index, (err, data) => {
	  res.appendHeader('Content-Type', "text/javascript");
	  res.status = 200;
	  res.send(data.toString());
	});
});
  
app.get("/shared-worker-1.js", (req, res) => {
	const path_index = path.resolve(__dirname, "files", "shared-worker-1.js");
	fs.readFile(path_index, (err, data) => {
	  res.appendHeader('Content-Type', "application/octet-stream");
	  res.status = 200;
	  res.send(data.toString());
	});
});

app.get("/blue.html", (req, res) => {
	const path_index = path.resolve(__dirname, "files", "blue.html");
	fs.readFile(path_index, (err, data) => {
	  res.appendHeader('Content-Type', "text/html");
	  res.status = 200;
	  res.send(data.toString());
	});
});
  
  

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
