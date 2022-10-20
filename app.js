const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');

const limiter = require('./middlewares/limiter');
const corsHandler = require('./middlewares/corsHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./errors/errorHandler');
const { DB_LINK } = require('./config');

const routes = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect(DB_LINK);

app.use(limiter);
app.use(helmet());
app.use(corsHandler);
app.use(bodyParser.json());

app.use(requestLogger);

app.use(routes);

app.use(errorLogger); // логгер ошибок
app.use(errors()); // обработчик ошибок celebrate
app.use(errorHandler);

app.listen(PORT);
