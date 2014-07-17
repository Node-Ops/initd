# Init.d wrapper for Node.js

```
$ npm install initd
```

A nod wrapper for running init.d scripts in debian systems.  The supported actions are:

- `start`
- `start`
- `restart`
- `reload`
- `status`

The all take a single argument, the service, and return the child process.  Here is an example of restarting a service:

```javascript
var initd = require('initd');
initd.restart('nginx').on('close', function(code) {
	if (code !== 0) return console.error('Nginx faild to restart');
	console.log('Nginx restarted!!');
});
```

See `man service` for more info about supported commands and options.

## Spawn Options

You can also overide the default behavior of inheriting the stdio for your child processes with the `initd.spawnOptions` object.
