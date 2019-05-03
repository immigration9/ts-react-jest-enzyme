module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'build/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
}