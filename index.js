require('dotenv').config();
const express        = require('express');
const bodyParser     = require('body-parser');
const logger         = require('morgan');
const path           = require('path');
const methodOverride = require('method-override');
const session        = require('express-session');
const expressJWT     = require('express-jwt');
const jwt            = require('jsonwebtoken');
const cors           = require('cors');
const PORT           = process.env.PORT || 8000;
const app            = express();

let corsOptions={
  origin: '*',
  optionsSuccessStatus: 200 // IE and other browsers don't like 204 statuses
};

// config cors
app.use(cors(corsOptions));

// config morgan
app.use(logger('dev'));

// config path
app.use(express.static(path.join(__dirname, 'public')));

// config body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// config ejs for mock views
app.set('view engine', 'ejs');

// config method-override
app.use(methodOverride('_method'));

// link to resources.js
app.use('/', require('./resources'));

app.listen(PORT, () => {
  console.log('Server is listening on', PORT);
});
