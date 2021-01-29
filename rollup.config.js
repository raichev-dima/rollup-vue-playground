import VuePlugin from 'rollup-plugin-vue'

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/rollup-library.js',
      format: 'esm',
      sourcemap: 'inline',
    },
    plugins: [VuePlugin()],
    external: ['vue'],
  },
]
