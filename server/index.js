const express = require('express');
const request = require('request');
const path = require('path');
require("dotenv").config();

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//former url    https://testnets-api.opensea.io/assets?asset_contract_address=0x0c611A25e2728e7ada47812c875fe46cBf76E545&order_direction=asc

app.get('/api', (req, res) => {
  request(
    { url: 'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x0c611A25e2728e7ada47812c875fe46cBf76E545&order_direction=asc' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
