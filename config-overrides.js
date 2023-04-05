const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@fonts': 'src/fonts',
        '@hoc': 'src/hoc',
        '@pages': 'src/pages',
        '@service': 'src/service',
        '@styles': 'src/styles',
        '@images': 'src/images',
        '@routes': 'src/routes',
        '@store': 'src/store',
        '@context': 'src/context'
    })(config);
    return config;
}