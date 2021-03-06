import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  {
    input: './src/index.js',
    output: [
      {  
      file: pkg.browser_esm,  // Use modern ES Module!
      format: 'es', 
      name: 'MBP',
      sourcemap: true  
    }  
  
  ],
    plugins: [
      resolve(),
      commonjs() 
      ,terser() 
    ] 
  },
  {
    input: './src/index-iife.js',
    output: [
      {
      file: pkg.browser,
      format: 'iife', // immediately-invoked function expression — suitable for <script> tags
      name: 'MBP',
      sourcemap: true
    }  
  
  ],
    plugins: [
      resolve(),
      commonjs() 
      ,terser() 
    ]
  },
  {
    input: './src/index.js',
    output: [
      { file: pkg.cjs, format: 'cjs' },
      { file: pkg.esm, format: 'es' }
      ], 
    plugins: [
      resolve(), 
      commonjs() 
      ,terser() 
    ]
  }

]
