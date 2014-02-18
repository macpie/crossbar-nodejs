function Accounts(crossbar) {
	this.crossbar = crossbar;
};

Accounts.prototype.get = function(args, callback) {
	var self = this,
		crossbar = self.crossbar;

    var options = {
        'api': "accounts",
        'url': "accounts/" + args.account_id,
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};

Accounts.prototype.put = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "accounts",
        'url': "accounts/" + args.account_id,
        'data': args,
        'verb': "PUT"
    };

    crossbar.req(options, callback);
};

Accounts.prototype.post = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "accounts",
        'url': "accounts/" + args.account_id,
        'data': args.data,
        'verb': "POST"
    };

    crossbar.req(options, callback);
};

Accounts.prototype.delete = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "accounts",
        'url': "accounts/" + args.account_id,
        'data': {},
        'verb': "DELETE"
    };

    crossbar.req(options, callback);
};

Accounts.prototype.get_ancestors = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "accounts",
        'url': "accounts/" + args.account_id + "/ancestors",
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};

Accounts.prototype.get_children = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "accounts",
        'url': "accounts/" + args.account_id + "/children",
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};

Accounts.prototype.get_descendants = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "accounts",
        'url': "accounts/" + args.account_id + "/descendants",
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};

Accounts.prototype.get_siblings = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "accounts",
        'url': "accounts/" + args.account_id + "/siblings",
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};

Accounts.prototype.get_channels = function(args, callback) {
    var self = this,
        crossbar = self.crossbar;

    var options = {
        'api': "accounts",
        'url': "accounts/" + args.account_id + "/channels",
        'data': {},
        'verb': "GET"
    };

    crossbar.req(options, callback);
};



module.exports = Accounts;