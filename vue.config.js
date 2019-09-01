module.exports = {
  pwa: {
    name: 'StonePaperScissor',
    appleMobileWebAppCapable: 'yes',
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   skipWaiting: true,
    //   clientsClaim: true,
    //   swSrc: 'service-worker.js',
    // },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [
        /\.map$/,
        /manifest\.json$/,
      ],
    },
    themeColor: '#3b5998',
  },
  devServer: {
    port: 4000,
  },
  outputDir: 'www',
  css: {
    sourceMap: true,
  },
  lintOnSave: false,
};
