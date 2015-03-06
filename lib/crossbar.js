var request = require('request'),
    mustache = require('mustache'),
    fs = require('fs');

function crossbar(options) {
    if (!(this instanceof crossbar)) {
        return new crossbar(options);
    }

    var self = this;

    self.url = options.url || "http://127.0.0.1";
    self.port = options.port || "8000";
    self.version = options.version || "v1";

    self.init();
};

crossbar.prototype.set_auth_token = function(auth_token) {
    var self = this;

    self.auth_token = auth_token;
};

crossbar.prototype.init = function() {
    var self = this,
        path = __dirname + "/apis",
        filesName = fs.readdirSync(path);

    self.api = {};

    filesName.forEach(function(fileName) {
        var apis = require(path + '/' + fileName);

        for (var api in apis) {
            var apiData = apis[api];

            self.init_api(api, apiData);
        }

    });
};

crossbar.prototype.init_api = function(api, apiData) {
    var self = this;

    self.api[api] = function() {
        var data = arguments[0],
            callback = arguments[1];

        if (typeof arguments[0] === "function") {
            data = null;
            callback = arguments[0];
        }

        var options = {
            'url': self.build_uri(apiData.url, data),
            'method': apiData.method,
            'json': {
                'data': data.data,
                'verb': apiData.method
            },
            'headers': {
                'Content-Type': "application/json"
            }
        };

        if (apiData.auth_required) {
            options['headers']['X-Auth-Token'] = self.auth_token || data.auth_token;
        }

        if (apiData.method == "GET") delete options.json;

        request(options, function(err, resp, body) {
            if (err) {
                callback(err, null);
            } else {
                if (body && body.status == 'error') {
                    callback(body, null);
                } else {
                    callback(null, body);
                }
            }

        });
    };
};

crossbar.prototype.build_uri = function(url, data) {
    var self = this,
        uri = "";

    uri += self.url;
    uri += ":";
    uri += self.port;
    uri += "/";
    uri += self.version;

    if (url) {
        uri += url;
    }

    if (data.query_string) {
        uri += data.query_string;
    }

    return mustache.render(uri, data.url_params);
};

module.exports = crossbar;