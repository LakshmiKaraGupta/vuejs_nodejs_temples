const fs = require('fs/promises');
const MongoClient = require('mongodb').MongoClient;
const contentType = require('./contentType.js');

const MongoDbUrl = "mongodb+srv://guptalakshmikara:Nokia%401669@temples.5ogrvfm.mongodb.net/";
const MongoDb =  "temples";
const MongoDbCollection = "temples";

const connection = new MongoClient(MongoDbUrl);

const ApiHandler = async (req, res) => {

	const header = {
        'Content-Type': contentType['.json'],
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      };

	try {
    const options = {
      connectTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
    };
    await connection.connect(options);
    const db = connection.db(MongoDb);
    const collection = db.collection(MongoDbCollection);

    if (req.method === 'GET') {
      const data = await collection.find({}).toArray();
      const json = JSON.stringify(data, null, 2);
      await fs.writeFile('./public/db.json', json, 'utf8');
      res.writeHead(200, header);
      res.end(json);
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }
  } catch (err) {
    console.log("error occured!");
    console.error(err);
    try {
      // Attempt to read the local json file
      const fallbackData = await fs.readFile('./public/db.json', 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(fallbackData);
    } catch (readError) {
      // If there is an error reading the file, send a 500 error
      console.error(readError);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  } finally {
    await connection.close();
  }
	
};


module.exports = ApiHandler;
