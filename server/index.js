const path = require('path');
const http = require('http');

/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const helmet = require('helmet');

/**
 * Create Express server.
 */
const app = express();

/**
 * Inject webpack dev middleware
 */
/* eslint-disable global-require, import/no-extraneous-dependencies */
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const middleware = require('webpack-dev-middleware');

  const options = require('../webpack.config');
  const compiler = webpack(options);

  app.use(middleware(compiler, {
    publicPath: options.output.publicPath
  }));
} else {

}
/* eslint-enable global-require, import/no-extraneous-dependencies */


/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
// app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));



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
