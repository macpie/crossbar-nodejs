function Agents(crossbar) {
	this.crossbar = crossbar;
};

Agents.prototype.get = function(args, callback) {
	var self = this,
		crossbar = self.crossbar

    var options = {
        'api': "agents",
        'url': "agents/" + args.account_id + "/agents",
        'data': {},
        'verb': "GET"
    };

    if(args.agent_id) url += "/" + args.agent_id;

    crossbar.req(options, callback);
};

Agents.prototype.stats = function(args, callback) {
    var self = this,
        crossbar = self.crossbar

    var options = {
        'api': "agents",
        'url': "agents/" + args.account_id + "/agents/stats",
        'data': args.data,
        'verb': "GET"
    };

    if(args.agent_id) url += "/" + args.agent_id;

    crossbar.req(options, callback);
};