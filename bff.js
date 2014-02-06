#!/usr/bin/env node

// a command line manager, and your bff
// makes remembering commands unnecessary

fs = require('fs');

opts = process.argv.slice(2);
config = "bffconfig.json";

fs.readFile(config, function(err, data) {
	if (err) throw err;
	contents = JSON.parse(data.toString());

	commands = contents['commands'];
	directories = contents['directories'];

	if (opts[0] == 'c') {
		console.log("saved commands:");
		commands.forEach(function(value, index) {
			console.log((index + 1) + ' ' + value);
		});
	}

	if (opts[0] == 'd') {
		console.log("saved directories:");
		directories.forEach(function(value, index) {
			console.log((index + 1) + ' ' + value);
		});
	}	

	if (opts[0] == 'a') {
		switch (opts[1]) {
			case 'command': 
				console.log('please enter a command');
				break;
			case 'directory': 
				console.log('please enter a path');
				break;
		}
	}
});