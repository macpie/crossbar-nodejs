function Devices(crossbar) {
    this.crossbar = crossbar;
};

Devices.prototype.get = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "devices",
        'url': "accounts/" + args.account_id + "/devices",
        'data': {},
        'verb': "GET"
    };

    if (args.device_id) options.url += "/" + args.device_id;

    crossbar.req(options, callback);
};

Devices.prototype.put = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "devices",
        'url': "accounts/" + args.account_id + "/devices",
        'data': args,
        'verb': "PUT"
    };

    crossbar.req(options, callback);
};

Devices.prototype.post = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "devices",
        'url': "accounts/" + args.account_id + "/devices/" + args.device_id,
        'data': args.data,
        'verb': "POST"
    };

    crossbar.req(options, callback);
};

Devices.prototype.delete = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "devices",
        'url': "accounts/" + args.account_id + "/devices/" + args.device_id,
        'data': {},
        'verb': "DELETE"
    };

    crossbar.req(options, callback);
};

Devices.prototype.get_status = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "devices",
        'url': "accounts/" + args.account_id + "/devices/status",
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};

module.exports = Devices;