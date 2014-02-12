function Auth(crossbar) {
	this.crossbar = crossbar;
};

Auth.prototype.put = function(args, callback) {
	var self = this,
		crossbar = self.crossbar

    var options = {
        'api': "user_auth",
        'url': "user_auth",
        'data': {
            'credentials': args.credentials,
            'account_name': args.account
        },
        'verb': "PUT"
    };

    crossbar.req(options, function(err, data, resp) {
    	if(!err) crossbar.token = resp.auth_token;
        callback(err, data, resp);
    });
};

module.exports = Auth;