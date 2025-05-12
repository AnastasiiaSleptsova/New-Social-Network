const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@features': path.resolve(__dirname, 'src/features'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@app': path.resolve(__dirname, 'src/app'),
    },
  },
}
