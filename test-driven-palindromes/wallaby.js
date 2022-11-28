module.exports = function() {
  return {
    testFramework: 'jest', //use jest framework
    env: {
      type: 'node', //run in Node environment
    },
    tests: ['tests/**/*.test.js'], 
    files: ['**/*.js', '!node_modules/**/*', '!**/*.test.js', '!**/.*'], // 4
  };
};
