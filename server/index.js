const path = require('path');
const http = require('http');

/**
 * Module dependencies.
 */
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const helmet = require('helmet');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config();

/**
 * Create Express server.
 */
const app = express();

/**
 * Get api controllers
 */
// const api = require('./api');

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

/**
 * Register API Routes
 */
// app.use('/api', api);


/**
 * Error Handler for other errors.
 */
app.use(errorHandler());


/**
 * Start WS server
 */
const server = http.createServer(app);
require('./websockets')(server);


/**
 * Start Express server.
 */
server.listen(app.get('port'), () => {
  console.log(`${chalk.green('✓')} App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`); // eslint-disable-line no-console
  console.log('  Press CTRL-C to stop\n'); // eslint-disable-line no-console
});

module.exports = server;
