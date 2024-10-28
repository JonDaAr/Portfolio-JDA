const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Para estilos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i, // Para imágenes PNG, JPG, etc.
        type: 'asset/resource',
      },
      {
        test: /\.svg$/, // Para archivos SVG
        use: 'asset/resource', // Loader para manejar SVG
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Ruta para servir archivos estáticos
    },
    compress: true,
    port: 3000,
    open: true,
  },
};
