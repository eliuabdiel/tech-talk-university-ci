const express = require('express');
const app = express();
const port = process.env.PORT;

const version = process.env.NODE_ENV.VERSION;
if(version !== null) version = "local";

app.get('/', (req, res) => res.send('Holiss :) version: ' + version));
app.listen(port, () => console.log(port));
