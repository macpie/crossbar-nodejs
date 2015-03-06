# Crossbar.js

Crossbar.js is a node.js sdk for Kazoo.

APIS descriptions: https://2600hz.atlassian.net/wiki/display/APIs/Developer+APIs

Current apis:
accounts, devices, users, user_auth.

# Examples

```javascript
var Crossbar = require('crossbar');

var cb = new Crossbar({
   'url': "http://127.0.0.1"
});

cb.api.user_auth.create_user_auth({
    "data": {
        "credentials": "3a2714f1b60a3d68310db1cbab1ab896",
        "account_name": "macpie"
    },
}, function(err, body) {

    cb.set_auth_token(body.auth_token);

    cb.api.devices.get_devices({
        "url_params": {
            "account_id": "1760753c8d022d650418fbbe6a1a10e0"
        }
    }, function(err, body) {
        console.log(err, body);
    });
});
```

# Options

| Key | Description | Default |
| --- | ----------- | ------- |
| url | server url | "http://127.0.0.1" |
| version | api version | "v1" |
| port | server port | 8000 |

# Changelog


v1.0.0:

* Re-writing

v0.1.1:

* Adding new apis: devices, users
* Complete accounts api



