const http = require('http');
const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const port = 3000;


const app = express();
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const server = http.createServer(app);
server.listen(port, () => {
	console.log("Server running at http://localhost:"+port);
})