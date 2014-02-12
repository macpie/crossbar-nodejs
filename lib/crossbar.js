var Req = require('request'),
	Fs = require('fs'),
    _ = require('underscore'),
	Schema = require('./schemas');

var defaultOptions = {
    'validate': false,
    'version': "v1",
    'port': 8000
};

function Crossbar(opts) {
    if(!opts) opts = {};
    opts = _.extend(defaultOptions, opts);
    this.options = opts;
    this._init();
};

Crossbar.prototype.req = function(args, callback) {
	var self = this,
		data = args.data || data,
		options = {
	        'url': self._build_uri(args.url),
	        'method': args.verb,
	        'json': {
	            'data': data,
	            'verb': args.verb
	        },
	        'headers': {
	            'Content-Type': "application/json"
	        }
	    };

	if(self.token) {
        options['headers']['X-Auth-Token'] = self.token;
    }

    if(self.options.validate) {
    	var token = args.api;
    		schema = new Schema({
    			'url': self._build_uri()
    		});

    	schema.validate(token[0], data, function(err) {
    		if(err) {
    			callback(err);
    		} else {
    			req();
    		}
    	});

    } else {
    	req();
    }

    function req() {
    	Req(options, function(err, resp, body) {
	        var error = err,
	        	data = body.data || {};

	        if(body.status == 'error') error = body;
	        callback(error, data, body);
	    });
    }
};


Crossbar.prototype._init = function() {
	var self = this,
		path = "./lib/apis",
		apis = Fs.readdirSync(path);

	self.api = {};

    apis.forEach(function(file) {
		var name = file.replace('.js', ''),
			mod = require("./apis/" + file);

		self.api[name] = new mod(self);
	});
};

Crossbar.prototype._build_uri = function(url) {
	var self = this,
		options = self.options,
		uri = "";

	uri += options.url;
	uri += ":";
	uri += options.port;
	uri += "/";
	uri += options.version;
	if(url) {
		uri += "/";
		uri += url;
	}

	return uri;
};



module.exports = Crossbar;