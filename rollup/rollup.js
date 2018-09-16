export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/ae.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/ae.es.js',
      format: 'es'
    }
  ]
}