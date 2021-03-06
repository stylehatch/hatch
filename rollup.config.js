import path from 'path';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from '@jonathanmoore/rollup-plugin-copy';
import multiInput from 'rollup-plugin-multi-input';

export default {
  // Import multiples
  input: ['src/scripts/theme.js', 'src/scripts/sections/*.js'],
  output: {
    format: 'esm',
    dir: 'dist',
  },
  plugins: [
    multiInput({
      relative: 'src/',
      transformOutputPath: (output, input) => `assets/${path.basename(output)}`,
    }),
    copy({
      watch: process.env.NODE_ENV === 'development' ? [
        'src/assets/',
        'src/config/',
        'src/layout/',
        'src/locales',
        'src/sections/',
        'src/snippets/',
        'src/templates/',
      ] : null,
      targets: [
        {src: 'src/assets/**/*', dest: 'dist/assets'},
        {src: 'src/config/*.json', dest: 'dist/config'},
        {src: 'src/layout/*.liquid', dest: 'dist/layout'},
        {src: 'src/locales/*.json', dest: 'dist/locales'},
        {src: 'src/sections/*.liquid', dest: 'dist/sections'},
        {src: 'src/snippets/*.liquid', dest: 'dist/snippets'},
        {src: 'src/templates/**/*', dest: 'dist/templates'},
      ],
      verbose: true,
      copyOnce: true,
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
};
