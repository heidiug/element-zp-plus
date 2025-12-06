module.exports = {
  plugins: [
    require('postcss-nested'), 
    require('autoprefixer'),
    require('postcss-each'),
    require('cssnano')({
      preset: 'default'
    })
  ]
}
