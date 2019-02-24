const config = require('eslint-config-automatic/module/typescript');
config.env = {
    ...config.env,
    commonjs: true,
};
module.exports = config;