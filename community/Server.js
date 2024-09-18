const express = require('express');
const app = express();
const port = 3001;
const server = require('http').createServer(app);
const cors = require('cors');

app.use(cors());

app.get('/', (req,res) => {
  res.send({message:'hello'});
});

server.listen(port, () => {
    
  console.log(`Server running on http://localhost:${port}`);
});

