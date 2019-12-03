const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/', require('./src/routes'));

app.listen(process.env.PORT || 3333);
