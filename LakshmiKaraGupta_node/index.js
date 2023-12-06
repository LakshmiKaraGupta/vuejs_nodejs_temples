const fs = require('fs');
const http = require('http');
const staticFileHandler = require('./staticFileHandler');
const RootHandler = require('./rootHandler');
const ApiHandler = require('./apiHandler');
const contentType = require('./contentType.js');


const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
  	await RootHandler(req, res);
  } else if (req.url === '/api') {
    await ApiHandler(req, res);
  } else if (Object.keys(contentType).includes(req.url.substr(req.url.lastIndexOf('.')))) {
    await staticFileHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});




const PORT = process.env.PORT || 7951;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


