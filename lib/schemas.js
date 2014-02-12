var Req = require('request'),
    Validator = require('jsonschema').Validator,
    JsonSchema = new Validator();

function Schemas(opts) {
    this.options = opts;
}

Schemas.prototype.get = function(name, callback) {
    var self = this;

    var options = {
        'url': self.options.url + "/schemas/" + name,
        'method': "GET",
        'json': {
            'data': {},
            'verb': "GET"
        },
        'headers': {
            'Content-Type': "application/json"
        }
    };

    Req(options, function(err, resp, body) {
        var error = err,
            data = body.data || {};

        if(body.status == 'error') {
            error = {
                'message': body.message,
                'code': body.error
            };
        }

        callback(error, data);
    });
};

Schemas.prototype.validate = function(schema, instance, callback) {
    var self = this;

    self.get(schema, function(err, schema) {
        if(err) {
            callback();
        } else {
            var data = JsonSchema.validate(instance, schema);
            if(data.errors.length == 0) data.errors = undefined;
            callback(data.errors);
        }

    });
};

module.exports = Schemas;