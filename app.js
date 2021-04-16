const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = 9000;
const cors = require("cors");
const axios = require("axios");

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/geo', async (req, res) => {

	let ip = req.socket.remoteAddress;
	//console.log(ip);
	if (ip == "::1" || ip.includes("::ffff")) {
		ip = "24.212.248.248";
	}

	let loc = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=c461a284199842f893dc5ec8561c9a7a&ip=${ip}`);

	//console.log(loc.data);
	res.json(loc.data);
});

app.listen(port, () => {
	console.log(`listening on port: ${port}`);
});
