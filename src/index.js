const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/', require('./routes'));

const port = process.env.PORT || 3333
app.listen(port);

console.log('Backend server running on port ' + port);
