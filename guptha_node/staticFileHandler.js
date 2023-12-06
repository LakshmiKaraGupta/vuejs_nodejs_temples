const fs = require('fs');
const contentType = require('./contentType.js');

const staticFileHandler = async (req, res) => {

	try {
		const filePath = `./public${req.url}`;
		console.log(filePath)
		const extension = filePath.substr(filePath.lastIndexOf('.'));
		console.log(extension)
		const data = await fs.readFile(filePath, (err, data) => {
	    if (err) {
	      console.error(err);
	      res.writeHead(500, { 'Content-Type': 'text/plain' });
	      res.end('Internal Server Error');
	      return;
	    }
	    console.log(contentType[extension]);
	    res.writeHead(200, { 'Content-Type': contentType[extension] });
	    res.end(data);
	  });
	} catch (err) {
		console.error(err);
		res.writeHead(500, { 'Content-Type': 'text/plain' });
		res.end('Internal Server Error');
	}
};


module.exports = staticFileHandler;