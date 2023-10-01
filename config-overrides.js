const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
	alias({
		'@components': 'src/components',
		'@services': 'src/services',
		'@utils': 'src/utils',
		'@hoc-helpers': 'src/hoc-helpers',
		'@constants': 'src/constants',
		'@containers': 'src/containers',
	})(config);
	return config;
};
