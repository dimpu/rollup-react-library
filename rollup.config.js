import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'umd',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    commonjs(),
    scss({
      output: true,
    }),
    typescript(),
  ],
};
