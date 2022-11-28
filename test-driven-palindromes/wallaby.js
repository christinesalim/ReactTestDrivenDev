//wallaby.js
module.exports = function() { 
  return {
    testFramework: 'jest', // 1
    env: {
      type: 'node', // 2
    },
    tests: ['tests/**/*.test.js'], // 3
    files: ['**/*.js', '!node_modules/**/*', '!**/*.test.js', '!**/.*'], // 4
  };
};