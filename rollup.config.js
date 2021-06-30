import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';

export default {
  input: 'src/scripts/foo.js',
  output: {
    file: 'dist/foo.js',
    format: 'iife',
    name: 'Main',
    sourcemap: 'inline',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    })
  ]
};