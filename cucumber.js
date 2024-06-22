const arguments = [
    '--require-module', '@babel/register',
    '--require', 'features/**/*.ts'
];

module.exports = {
    default: arguments
};