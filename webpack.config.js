const path = require('path');

module.exports = {
    mode: 'development', // Establece el modo a 'development' para evitar la advertencia
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
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Ruta para servir archivos estáticos
    },
    compress: true, // Habilita compresión gzip
    port: 3000, // Puerto del servidor de desarrollo
    open: true, // Abre el navegador automáticamente
  },
};