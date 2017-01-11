import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript';
import angular from 'rollup-plugin-angular';

export default {
  entry: 'src/main-aot.ts',
  dest: 'dist/build.js', // output a single application bundle
  sourceMap: false,
  format: 'iife',
  plugins: [
      angular(),
      typescript(),
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**',
      })
  ]
}
