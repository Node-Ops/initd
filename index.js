var spawn = require('child_process').spawn,
	path = require('path'),
	initd = module.exports = {};

// The init script path
initd.path = path.join('/', 'etc', 'init.d');

initd.spawnOptions = {
	stdio: 'inherit'
};

// Commands
[
	'start',
	'stop',
	'restart',
	'status',
	'reload'
].forEach(function(command) {
	initd[command] = function(service) {
		return spawn(path.join(initd.path, service), [command], initd.spawnOptions);
	};
});

