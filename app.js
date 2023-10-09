import axios from 'axios';
import express from 'express';

const app = express();
const port = 3000;

var next, prev;

app.get('/', async (req, res) => {
	try {
		const response = await axios.get(
			'https://rickandmortyapi.com/api/character'
		);
		const result = response.data.results;
		next = response.data.info.next;
		prev = response.data.info.prev;
		res.render('index.ejs', { result: result, next: next, prev: prev });
		//    console.log(result)
	} catch (error) {
		console.log(error.message);
	}
});

app.post('/next', async (req, res) => {
	try {
		const response = await axios.get(next);
		const result = response.data.results;
		next = response.data.info.next;
		prev = response.data.info.prev;
		res.render('index.ejs', { result: result, next: next, prev: prev });
		//    console.log(result)
	} catch (error) {
		console.log(error.message);
	}
});

app.post('/prev', async (req, res) => {
	try {
		const response = await axios.get(prev);
		const result = response.data.results;
		next = response.data.info.next;
		prev = response.data.info.prev;
		res.render('index.ejs', { result: result, next: next, prev: prev });
		//    console.log(result)
	} catch (error) {
		console.log(error.message);
	}
});

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
