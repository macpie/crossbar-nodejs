# Crossbar.js

Crossbar.js is a node.js sdk for Kazoo.

APIS descriptions: https://2600hz.atlassian.net/wiki/display/APIs/Developer+APIs

Current apis:
accounts, devices, users, user_auth.

# Examples

```javascript
var Crossbar = require('crossbar');

var crossbar = new Crossbar({
   'url': "http://127.0.0.1",
   'validate': true
});

crossbar.api.user_auth.put({
	'data': {
		// md5("username:password")
		'credentials': "25a55eeb4b43f69e83128d5859a08a3a",
		'account_name': "macpie"
	}
}, function(err, data) {
	crossbar.api.accounts.get({
		'account_id': "some_random_account_id"
	}, function(err, account) {
		console.log(account);
	});
});
```

# Options

| Key | Description | Default |
| --- | ----------- | ------- |
| url | server url | none |
| validate | validate data payload | false |
| version | api version | "v1" |
| port | server port | 8000 |

# Changelog

v0.1.1:

* Adding new apis: devices, users
* Complete accounts api



