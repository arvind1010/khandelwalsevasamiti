var express = require('express')
  , rendr = require('rendr')
  , config = require('config')
  , _ = require('underscore')
  , less = require('less-middleware')
  , request = require('request')
  , q = require('q')
  , app = express();

/**
 * Initialize Express middleware stack.
 */
 

app.use(express.compress());

app.use(function (req, res, next) {
  request('http://css.optcentral.com/colors/' + config.appData.user.companyId + '.json', function (error, response, body) {
    req.colors = _.values(JSON.parse(body).colors);
    next();
  });
});

app.use(function (req, res, next) {
  request('http://qa.optcentral.com/optportal/services/userInfo/' + config.appData.user.login + '.json', function (error, response, body) {
    config.appData.user.companyName = JSON.parse(body).user.companyName;
    next();
  });
});

app.use(less(__dirname + '/assets/less/generic-abc', {
  force: true,
  dest: __dirname + '/public',
  preprocess: {
    path: function(pathname, req) {
      return pathname.replace('/css/', '/');
    },
    less: function(src, req) {
      var colors = _.map(req.colors, function(value, key) {
        return '@color_' + (key + 1) + ':#' + req.colors[key];
      }).join(';') + ';';

      return colors + src;
    }
  }
}));
app.use(express.static(__dirname + '/public'));
app.use(express.logger());
app.use(express.bodyParser());

/**
 *
 */


/**
 * Initialize our Rendr server.
 */
var server = rendr.createServer({
  dataAdapterConfig: config.api,
  appData: config.appData
});

/**
  * 
  */
app.use(server);

/**
 * Start the Express server.
 */
function start(){
  var port = process.env.PORT || config.server.port;
  app.listen(port);
  console.log("server pid %s listening on port %s in %s mode",
    process.pid,
    port,
    app.get('env')
  );
}


/**
 * Only start server if this script is executed, not if it's require()'d.
 * This makes it easier to run integration tests on ephemeral ports.
 */
if (require.main === module) {
  start();
}

exports.app = app;
