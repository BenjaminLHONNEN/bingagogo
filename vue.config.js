const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/css/colors.scss";
        @import "@/css/animation.scss";
        @import "@/css/button.scss";
        `,
      },
    },
  },
});
