// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Deltahouse',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_posts/**/*.md', 
//posts are cms-collections
        typeName: 'posts',
        remark: {
          // remark options
        }
      }
    },
    { use: '@gridsome/source-filesystem',
    options: {
      path: './site/**/*.md', 
//posts are cms-collections
      typeName: 'site',
      remark: {
        // remark options
      }
    }
  }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  chainWebpack (config) {
    config.mode('development')
  }
}
