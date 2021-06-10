require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;
const mongodb = process.env.MONGO;
const mongoose = require('mongoose');
const { getData } = require('./apis/getData');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

// Create trip data
app.post('/trip', async (req, res) => {
	try {
		const destination = encodeURI(req.body.input);
		const data = await getData(destination);
		res.send(data);
	} catch (err) {
		console.error(err);
	}
});

// DB
mongoose
	.connect(mongodb, {
		useNewUrlParser: true,
		autoIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to database');
		app.listen(port, () =>
			console.log(`Travel app listening on port ${port}`)
		);
	})
	.catch(err => console.error('Failed to connect to database', err));
