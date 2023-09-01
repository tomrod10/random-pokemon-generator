const path = require('path')

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3010,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ]
  }
}