const fs = require('fs');

const rootHandler = async (req, res) => {
	const indexFilePath = './public/index.html';
	fs.readFile(indexFilePath, 'utf8', (err, data) => {
		if (err) {
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('Internal Server Error');
			console.error(err);
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		}
	});
};

module.exports = rootHandler;