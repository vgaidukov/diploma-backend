const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const limiter = require('./middlewares/limiter');
const corsHandler = require('./middlewares/corsHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./errors/errorHandler');
const { DB_LINK } = require('./config');

const routes = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect(DB_LINK);

app.disable('x-powered-by');
app.use(limiter);
app.use(bodyParser.json());
app.use(corsHandler);

app.use(requestLogger);

app.use(routes);

app.use(errorLogger); // логгер ошибок
app.use(errors()); // обработчик ошибок celebrate
app.use(errorHandler);

app.listen(PORT);
