const fs = require('fs');

const generateZones = (path = '') => {
	// LSP eslint works without this line
	const modules = fs.readdirSync(`PATHTOFILE`);

	// also looping through the modules path array with map, filter functions
	// I think these also make LSP-eslint stop working as well

	return [
		{
			target: './tests/files/restricted-paths/server/one',
			from: './tests/files/restricted-paths/server',
			except: ['./one'],
		},
	];
};

module.exports = generateZones;
