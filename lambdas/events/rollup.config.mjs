import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const plugins = [
  nodeResolve({
    resolveOnly: (module) => {
      return !module.includes('aws-sdk') || !module.includes('aws-lambda');
    },
  }),
  commonjs(),
  json(),
  typescript(),
];

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins,
};
