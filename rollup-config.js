import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/main-aot.ts',//配置的如果是ts文件，就需要TypeScript插件，如果配置的是生成的js文件，就不需要TypeScript插件
  dest: 'src/aot/bundle.js', // output a single application bundle
  sourceMap: false,
  format: 'iife',
  plugins: [
      typescript(),
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**',
      }),
      uglify()
  ]
}
