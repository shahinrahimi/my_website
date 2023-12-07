const path = require('path');

module.exports = {
  mode: "production",
  entry: './dist/server.js', // Assuming your compiled TypeScript code is in the 'dist' directory
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};