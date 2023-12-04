// import modulu express
const express = require("express");
// import modułu path (związany ze ścieżkami plików)
var path = require('path');

// tworzymy instancję importowane wcześniej express
const app = express();

// funkcja do sprawdzania autentykacji użytkownika
function authentication(req, res, next) {
	// request o autentykację użytkownika
	var authheader = req.headers.authorization;
	// wypis do logów
	console.log(req.headers);

	// jeśli autentykacja się nie powiodła to zgłasza błąd
	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	// jeśli user posiada poniższe dane to jest przepuszczany dalej
	if (user == '' && pass == '') {

		// If Authorized user
		next();
	} else {
		//w przecwinym wypadku pojawiają się zgłoszenia o błędzie
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
	console.log("Server is Running");
})
