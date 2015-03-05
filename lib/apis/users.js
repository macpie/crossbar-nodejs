function Users(crossbar) {
    this.crossbar = crossbar;
};

Users.prototype.get = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "users",
        'url': "accounts/" + args.account_id + "/users",
        'data': {},
        'verb': "GET"
    };

    if (args.user_id) options.url += "/" + args.user_id;

    crossbar.req(options, callback);
};

Users.prototype.put = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "users",
        'url': "accounts/" + args.account_id + "/users",
        'data': args,
        'verb': "PUT"
    };

    crossbar.req(options, callback);
};

Users.prototype.post = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "users",
        'url': "accounts/" + args.account_id + "/users/" + args.user_id,
        'data': args.data,
        'verb': "POST"
    };

    crossbar.req(options, callback);
};

Users.prototype.delete = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "users",
        'url': "accounts/" + args.account_id + "/users/" + args.user_id,
        'data': {},
        'verb': "DELETE"
    };

    crossbar.req(options, callback);
};

Users.prototype.get_channels = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "users",
        'url': "accounts/" + args.account_id + "/users/" + args.user_id + "/channels",
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};

Users.prototype.get_quickcall = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "users",
        'url': "accounts/" + args.account_id + "/users/" + args.user_id + "/quickcall/" + args.device_id,
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};

module.exports = Users;