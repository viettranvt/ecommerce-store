module.exports = {
  // Other webpack configuration options...
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Adjust this path as needed
    compress: true,
    port: 3000,
  },
};