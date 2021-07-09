module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    // Example of how to exclude plugins by env
    // process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
  ],
};
